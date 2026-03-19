"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

import {
  ITINERARI,
  GIORNI_CONFIG,
  TIPO_COLORS,
  MOVIMENTO_META,
  TappaItinerario,
} from "@/components/ui/gladys/newversion/ItinerarioDataset";

import "leaflet/dist/leaflet.css";

/* ─────────────────────────────────────────────────────────
   ICONE DINAMICHE PER GIORNO
───────────────────────────────────────────────────────── */
function makeIcon(color: string, isActive: boolean) {
  const size = isActive ? 22 : 16;
  const border = isActive ? 3 : 2;
  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${color};
      border:${border}px solid rgba(255,255,255,0.9);
      border-radius:50%;
      box-shadow:0 0 ${isActive ? 10 : 4}px ${color}88;
      transition:all .2s ease;
    "></div>`,
    iconSize: [size, size],
    popupAnchor: [0, -size / 2 - 2],
  });
}

/* ─────────────────────────────────────────────────────────
   COMPONENTE PRINCIPALE
───────────────────────────────────────────────────────── */
export default function ItinerarioMap() {
  const [itinerarioAttivoId, setItinerarioAttivoId] = useState(
    ITINERARI[0]?.id ?? ""
  );
  const [giornoAttivo, setGiornoAttivo] = useState<number | null>(null);
  const [tappaAttiva, setTappaAttiva] = useState<string | null>(null);

  const itinerarioAttivo =
    ITINERARI.find((it) => it.id === itinerarioAttivoId) ?? ITINERARI[0];
  const tappeBase = itinerarioAttivo?.tappe ?? [];

  const tappeFiltrate =
    giornoAttivo === null
      ? tappeBase
      : tappeBase.filter((t) => t.giorno === giornoAttivo);

  const giorni = Array.from(new Set(tappeBase.map((t) => t.giorno))).sort(
    (a, b) => a - b
  );
  const center: [number, number] = [45.93, 8.97]; // centro tra Como, Varese e Lugano

  const getGiornoConfig = (giorno: number) =>
    itinerarioAttivo?.giorniConfig?.[giorno] ??
    GIORNI_CONFIG[giorno] ?? {
      label: `Giorno ${giorno}`,
      color: "#9ca3af",
      bgColor: "#111827",
    };

  const getSegmentKind = (tappa: TappaItinerario) => {
    if (tappa.movimento) return "mezzi";
    if (tappa.tipo === "trasporto") return "mezzi";
    return "piedi";
  };

  const SEGMENT_STYLE = {
    piedi: { weight: 2, opacity: 0.7, dashArray: "4,6" },
    mezzi: { weight: 2.5, opacity: 0.85, dashArray: "" },
  } as const;

  return (
    <div className="relative w-full h-full flex flex-col gap-0 bg-[#0a0a0a]">
      {/* ── SELEZIONE ITINERARIO ── */}
      <div className="z-20 px-6 py-4 border-b border-[#202020] min-h-[72px]">
        <div className="flex flex-nowrap items-center justify-center gap-3 overflow-x-auto">
          {ITINERARI.map((it) => (
            <button
              key={it.id}
              onClick={() => {
                setItinerarioAttivoId(it.id);
                setGiornoAttivo(null);
                setTappaAttiva(null);
              }}
              className={`min-w-[220px] shrink-0 px-5 py-3 rounded-2xl text-[13px] font-semibold border transition-colors ${
                itinerarioAttivoId === it.id
                  ? "bg-white text-[#0a0a0a] border-white"
                  : "bg-[#101010] text-white/80 border-[#202020] hover:border-[#303030]"
              }`}
            >
              {it.titolo}
            </button>
          ))}
        </div>
      </div>

      {/* ── FILTRI GIORNI ── */}
      {/**
       * Selettore giorni disattivato: vista di default su tutti i giorni.
       */}
      {/*
      <div className="z-20 px-6 py-4 flex flex-nowrap gap-2 border-b border-[#202020] overflow-x-auto min-h-[56px]">
        <button
          onClick={() => setGiornoAttivo(null)}
          className={`shrink-0 px-4 py-2 rounded-xl text-[12px] font-medium border transition-colors ${
            giornoAttivo === null
              ? "bg-white text-[#0a0a0a] border-white"
              : "bg-[#101010] text-white/70 border-[#202020] hover:border-[#303030]"
          }`}
        >
          Tutti i giorni
        </button>
        {giorni.map((g) => {
          const cfg = getGiornoConfig(g);
          return (
            <button
              key={g}
              onClick={() => setGiornoAttivo(giornoAttivo === g ? null : g)}
              className="shrink-0 px-4 py-2 rounded-xl text-[12px] font-medium border transition-colors"
              style={
                giornoAttivo === g
                  ? {
                      backgroundColor: cfg.color,
                      color: "#0a0a0a",
                      borderColor: cfg.color,
                    }
                  : {
                      backgroundColor: "#101010",
                      color: "#e5e5e5",
                      borderColor: "#202020",
                    }
              }
            >
              {cfg.label}
            </button>
          );
        })}
      </div>
      */}

      {/* ── LAYOUT MAPPA + SIDEBAR ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden h-[520px] md:h-[580px]">
        {/* MAPPA */}
        <div className="flex-1 relative" style={{ touchAction: "pan-y" }}>
          <MapContainer
            center={center}
            zoom={9}
            className="absolute inset-0 z-0 w-full h-full"
            zoomControl={true}
            attributionControl={false}
            scrollWheelZoom={true}
            touchZoom={true}
            doubleClickZoom={true}
            boxZoom={true}
            keyboard={true}
            dragging={true}
            tap={true}
            style={{ touchAction: "pan-y" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
              attribution="© CartoDB © OpenStreetMap"
            />

            {/* POLYLINE per ogni giorno */}
            {giorni.map((g) => {
              if (giornoAttivo !== null && giornoAttivo !== g) return null;
              const tappeGiorno = tappeBase.filter((t) => t.giorno === g);
              if (tappeGiorno.length < 2) return null;

              return tappeGiorno.slice(1).map((tappa, idx) => {
                const prev = tappeGiorno[idx];
                const kind = getSegmentKind(tappa);
                return (
                  <Polyline
                    key={`line-${g}-${tappa.id}`}
                    positions={[prev.coords, tappa.coords]}
                    pathOptions={{
                      color: getGiornoConfig(g).color,
                      ...SEGMENT_STYLE[kind],
                    }}
                  />
                );
              });
            })}

            {/* MARKER tappe */}
            {tappeFiltrate.map((tappa) => {
              const gCfg = getGiornoConfig(tappa.giorno);
              const isActive = tappaAttiva === tappa.id;
              return (
                <Marker
                  key={tappa.id}
                  position={tappa.coords}
                  icon={makeIcon(gCfg.color, isActive)}
                  eventHandlers={{
                    click: () =>
                      setTappaAttiva(isActive ? null : tappa.id),
                  }}
                >
                  <Popup
                    closeButton={false}
                    className="itinerario-popup"
                  >
                    <PopupContent tappa={tappa} gCfg={gCfg} />
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          {/* Legenda in overlay */}
          <div className="absolute bottom-4 left-4 z-[500] flex flex-col gap-2 bg-[#0f0f0f]/90 backdrop-blur px-3 py-2.5 rounded-xl border border-[#202020]">
            <p className="text-[10px] text-[#a0a0a0] uppercase tracking-widest mb-0.5">
              Legenda giorni
            </p>
            {giorni.map((g) => (
              <div key={g} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: getGiornoConfig(g).color }}
                />
                <span className="text-[11px] text-white/80">
                  {getGiornoConfig(g).label}
                </span>
              </div>
            ))}
            <div className="h-px bg-[#202020]" />
            <div className="flex items-center gap-2">
              <span className="w-4 h-px bg-white/70" />
              <span className="text-[11px] text-white/70">Percorso in mezzi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-px bg-white/70" style={{ borderTop: "1px dashed #ffffff80" }} />
              <span className="text-[11px] text-white/70">Percorso a piedi</span>
            </div>
          </div>
        </div>

        {/* SIDEBAR TAPPE */}
        <aside className="itinerario-sidebar hidden md:flex flex-col w-72 bg-[#0f0f0f] border-l border-[#202020] overflow-y-auto h-full min-h-full">
          <div className="px-4 py-3 border-b border-[#202020]">
            <p className="text-[11px] text-[#a0a0a0] uppercase tracking-widest">
              {tappeFiltrate.length} tappe
            </p>
          </div>
          {giorni.map((g) => {
            if (giornoAttivo !== null && giornoAttivo !== g) return null;
            const tappeG = tappeFiltrate.filter((t) => t.giorno === g);
            if (tappeG.length === 0) return null;
            const cfg = getGiornoConfig(g);
            return (
              <div key={g}>
                <div
                  className="px-4 py-2 flex items-center gap-2 sticky top-0 z-10 border-b border-[#202020] bg-[#0f0f0f]"
                  style={{ borderLeft: `3px solid ${cfg.color}` }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: cfg.color }}
                  />
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: cfg.color }}
                  >
                    {cfg.label}
                  </span>
                </div>
                {tappeG.map((tappa, idx) => (
                  <button
                    key={tappa.id}
                    onClick={() =>
                      setTappaAttiva(tappaAttiva === tappa.id ? null : tappa.id)
                    }
                    className={`w-full text-left px-4 py-3 border-b border-[#202020] transition-colors hover:bg-[#151515] ${
                      tappaAttiva === tappa.id ? "bg-[#141414]" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] text-white/30 mt-0.5 w-4 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/90 font-medium leading-snug truncate">
                          {tappa.nome}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: TIPO_COLORS[tappa.tipo] }}
                          />
                          <span
                            className="text-[10px] capitalize"
                            style={{ color: TIPO_COLORS[tappa.tipo] }}
                          >
                            {tappa.tipo.replace("-", " ")}
                          </span>
                          {tappa.movimento && (
                            <MovimentoTag movimento={tappa.movimento} />
                          )}
                          {tappa.durata && tappa.durata !== "–" && (
                            <span className="text-[10px] text-white/40 truncate">
                              · {tappa.durata}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </aside>
      </div>

      {/* CARD DETTAGLIO mobile (appare sotto la mappa) */}
      {tappaAttiva && (
        <MobileDetailCard
          tappa={tappeBase.find((t) => t.id === tappaAttiva)!}
          gCfg={getGiornoConfig(
            tappeBase.find((t) => t.id === tappaAttiva)!.giorno
          )}
          onClose={() => setTappaAttiva(null)}
        />
      )}

      {/* Crediti */}
      <div className="px-6 py-3 text-[10px] text-white/30 border-t border-[#202020]">
        Dati itinerario © Gruppo Patrimonio 4INF3 · Mappa © CartoDB / OSM
      </div>

      {/* Stile popup Leaflet */}
      <style>{`
        .itinerario-popup .leaflet-popup-content-wrapper {
          background: #0f0f0f;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          padding: 0;
        }
        .itinerario-popup .leaflet-popup-content {
          margin: 0;
        }
        .itinerario-popup .leaflet-popup-tip-container {
          display: none;
        }
        .leaflet-container {
          background: #0a0a0a;
        }
        .leaflet-control-zoom {
          border: 1px solid #202020;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        }
        .leaflet-control-zoom a {
          background: #101010;
          color: #f0f0f0;
          border-bottom: 1px solid #202020;
          width: 34px;
          height: 34px;
          line-height: 34px;
          font-size: 16px;
        }
        .leaflet-control-zoom a:last-child {
          border-bottom: none;
        }
        .leaflet-control-zoom a:hover {
          background: #151515;
        }
        .itinerario-sidebar {
          scrollbar-color: #252525 #101010;
          scrollbar-width: thin;
        }
        .itinerario-sidebar::-webkit-scrollbar {
          width: 6px;
        }
        .itinerario-sidebar::-webkit-scrollbar-track {
          background: #101010;
          border-radius: 3px;
        }
        .itinerario-sidebar::-webkit-scrollbar-thumb {
          background: #252525;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTI
───────────────────────────────────────────────────────── */
function PopupContent({
  tappa,
  gCfg,
}: {
  tappa: TappaItinerario;
  gCfg: { label: string; color: string };
}) {
  return (
    <div className="px-4 py-3 min-w-[220px] max-w-[280px]">
      <div className="flex items-center gap-1.5 mb-1">
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{
            color: gCfg.color,
            background: gCfg.color + "22",
            border: `1px solid ${gCfg.color}44`,
          }}
        >
          {gCfg.label}
        </span>
        <span
          className="text-[10px] capitalize px-2 py-0.5 rounded-full font-medium"
          style={{
            color: TIPO_COLORS[tappa.tipo],
            background: TIPO_COLORS[tappa.tipo] + "22",
            border: `1px solid ${TIPO_COLORS[tappa.tipo]}44`,
          }}
        >
          {tappa.tipo.replace("-", " ")}
        </span>
        {tappa.movimento && (
          <MovimentoTag movimento={tappa.movimento} />
        )}
      </div>
      <p className="text-white text-[14px] font-semibold leading-snug mb-1.5">
        {tappa.nome}
      </p>
      <p className="text-white/60 text-[12px] leading-relaxed mb-2">
        {tappa.descrizione}
      </p>
      <div className="flex flex-col gap-1">
        {tappa.durata && tappa.durata !== "–" && (
          <InfoRow icon="clock" value={tappa.durata} />
        )}
        {tappa.accesso && <InfoRow icon="unlock" value={tappa.accesso} />}
        {tappa.prezzo && <InfoRow icon="cash-coin" value={tappa.prezzo} />}
        {tappa.extra && <InfoRow icon="info-circle" value={tappa.extra} />}
      </div>
    </div>
  );
}

function InfoRow({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-start gap-1.5">
      <i className={`bi bi-${icon} text-[12px] text-white/70 leading-none`} />
      <span className="text-[11px] text-white/60 leading-tight">
        {value}
      </span>
    </div>
  );
}

function MobileDetailCard({
  tappa,
  gCfg,
  onClose,
}: {
  tappa: TappaItinerario;
  gCfg: { label: string; color: string };
  onClose: () => void;
}) {
  return (
    <div className="md:hidden bg-[#0d0d0d] border-t border-[#202020] px-5 py-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                color: gCfg.color,
                background: gCfg.color + "22",
                border: `1px solid ${gCfg.color}44`,
              }}
            >
              {gCfg.label}
            </span>
            <span
              className="text-[10px] capitalize px-2 py-0.5 rounded-full"
              style={{
                color: TIPO_COLORS[tappa.tipo],
                background: TIPO_COLORS[tappa.tipo] + "22",
                border: `1px solid ${TIPO_COLORS[tappa.tipo]}44`,
              }}
            >
              {tappa.tipo.replace("-", " ")}
            </span>
            {tappa.movimento && (
              <MovimentoTag movimento={tappa.movimento} />
            )}
          </div>
          <p className="text-white text-base font-semibold">{tappa.nome}</p>
          <p className="text-white/55 text-sm mt-1 leading-relaxed">
            {tappa.descrizione}
          </p>
          <div className="flex flex-col gap-1 mt-2">
            {tappa.durata && tappa.durata !== "–" && (
              <InfoRow icon="clock" value={tappa.durata} />
            )}
            {tappa.accesso && <InfoRow icon="unlock" value={tappa.accesso} />}
            {tappa.extra && <InfoRow icon="info-circle" value={tappa.extra} />}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white/80 text-lg flex-shrink-0 mt-0.5"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>
    </div>
  );
}

function MovimentoTag({ movimento }: { movimento: keyof typeof MOVIMENTO_META }) {
  const meta = MOVIMENTO_META[movimento];
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#202020] text-white/70 bg-[#101010] flex items-center gap-1">
      <i className={`bi bi-${meta.icon} text-[11px]`} />
      {meta.label}
    </span>
  );
}
