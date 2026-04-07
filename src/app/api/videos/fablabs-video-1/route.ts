import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    const videoPath = path.join(process.cwd(), 'public/app_data/videos/video_fablab.mp4');

    if (!fs.existsSync(videoPath)) {
        return new NextResponse('Video non trovato', { status: 404 });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const rangeHeader = req.headers.get('range');

    if (!rangeHeader) {
        // Nessuna richiesta range: invia tutto
        const fileBuffer = fs.readFileSync(videoPath);
        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'video/mp4',
                'Content-Length': fileSize.toString(),
            },
        });
    }

    // Gestione richiesta range
    const parts = rangeHeader.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const stream = fs.createReadStream(videoPath, { start, end });
    const headers = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize.toString(),
        'Content-Type': 'video/mp4',
    };

    // @ts-ignore
    return new NextResponse(stream, { status: 206, headers });
}