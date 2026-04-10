![Banner](./docs/banner.png)

# 🌐InSu Network - Web Front-End
![GitHub package.json version](https://img.shields.io/github/package-json/v/LoRy24/InSu-Web)
![GitHub branch status](https://img.shields.io/github/checks-status/LoRy24/InSu-Web/master)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/LoRy24/InSu-Web)
![GitHub Repo stars](https://img.shields.io/github/stars/LoRy24/InSu-Web?style=flat)
![GitHub forks](https://img.shields.io/github/forks/LoRy24/InSu-Web?style=flat)

Benvenuto nella repository per la parte Front-End del sito di **InSu Network**, un progetto open-source dedicato al miglioramento
qualitativo e tecnologico della regione _Insubrica_.

Se sei interessato a prenderne parte, avrai vari modi di contribuire, alcuni dei quali li potrai trovare e consultare sul nostro
sito: https://www.insubrina.org/. Sai già dove partire? Allora apri pure una PR.

## ✅ Compilazione & Avvio - NodeJS
Il progetto è realizzato interamente utilizzando il framework [NextJS](http://nextjs.org/). Per maggiori informazioni, dubbi,
chiarimenti o per le documentazioni è possibile consultare il suo sito. Di seguito sono elencati alcuni comandi base per avviare 
correttamente il progetto anche in modalità _development_.

### 📚 Installazione delle dipendenze
Per prima cosa occorrerà installare tutte le dipendenze utilizzate dal progetto, utilizzando il comando

```shell
npm install
```

### 👨‍💼 Production
Per avviare il progetto in produzione, su di un container o su una macchina dedicata, bisognerà per prima cosa compilarlo
tramite il comando:

```shell
npm run build
```

per poi eseguirlo tramite il comando:

```shell
npm run start
```

### 🪲 Development
Per avviare il progetto in modalità development, invece, occorrerà eseguire il comando

```shell
npm run dev
```

## 🐳 Docker
Dopo ulteriori aggiornamenti, per rendere il progetto facilmente eseguibile su più piattaforme, è stata aggiunta una configurazione per eseguire il progetto tramite Docker. Per eseguirlo, è sufficiente lanciare il comando

```shell
docker compose up
```

Il sito sarà così accessibile SOLO sulla macchina ospite, all'indirizzo `http://127.0.0.1:3000`. Per renderlo HTTPS e accessibile da altre macchine, è necessario predisporre un reverse proxy, ad esempio tramite Nginx o Caddy, e configurarlo correttamente. Per maggiori informazioni è possibile consultare la documentazione ufficiale di Docker oppure
del software utilizzato.

## 📜 Licenza
Tutto il codice del sito principale, nonché la seguente repository, è protetta secondo la GNU General Public License v3.0
(Codice GPL-3.0 license). Si consiglia vivamente la lettura prima di incombere in problematiche di natura legali a seguito
di modifica del seguente codice.

Per qualunque dubbio, o per richieste generiche di chiarimenti, è possibile contattare direttamente i gestori del codice oppure
scrivere alla mail di servizio **info@insunet.work**.
