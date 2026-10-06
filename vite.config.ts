import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { handler as driveHandler } from './netlify/functions/drive-photos.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'netlify-functions-dev-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/.netlify/functions/drive-photos')) {
            try {
              let body: string | null = null;
              if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
                const chunks: Buffer[] = [];
                for await (const chunk of req) {
                  chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
                }
                body = Buffer.concat(chunks).toString('utf-8');
              }

              const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
              const queryParams: Record<string, string> = {};
              urlObj.searchParams.forEach((val, key) => {
                queryParams[key] = val;
              });

              const reqHeaders: Record<string, string> = {};
              Object.entries(req.headers).forEach(([k, v]) => {
                if (typeof v === 'string') reqHeaders[k] = v;
                else if (Array.isArray(v)) reqHeaders[k] = v.join(', ');
              });

              const event = {
                httpMethod: req.method || 'GET',
                headers: reqHeaders,
                body,
                queryStringParameters: queryParams
              };

              const response = await driveHandler(event as any);

              res.statusCode = response.statusCode;
              if (response.headers) {
                Object.entries(response.headers).forEach(([k, v]) => {
                  res.setHeader(k, String(v));
                });
              }
              res.end(response.body);
            } catch (err: any) {
              console.error('[DevMiddleware] Error executing function:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message || 'Internal Dev Server Error' }));
            }
            return;
          }
          next();
        });
      }
    }
  ]
});
