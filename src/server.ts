import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { existsSync } from 'fs';
import { bootstrap } from './main.server';

console.log(`Starting from server.ts ...`);

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/front/browser');

if (!existsSync(DIST_FOLDER)) {
  console.error(`DIST_FOLDER does not exist: ${DIST_FOLDER}`);
  process.exit(1);
}

app.engine('html', ngExpressEngine({ bootstrap }));
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

app.get('*', (req, res) => {
  console.log(`Handling request for ${req.url}`);
  res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});