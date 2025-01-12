// import 'zone.js/node';
// import { APP_BASE_HREF } from '@angular/common';
// import express from 'express';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import { join } from 'path';
// import { bootstrap } from './main.server';

// const app = express();
// const PORT = process.env['PORT'] || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist/front/browser');

// app.engine('html', ngExpressEngine({ bootstrap }));
// app.set('view engine', 'html');
// app.set('views', DIST_FOLDER);

// app.get('*.*', express.static(DIST_FOLDER, {
//   maxAge: '1y',
//   immutable: true,
// }));

// app.get('*', (req, res) => {
//   res.render('index', {
//     req,
//     providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });

import 'zone.js/node';
import express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { AppServerModule } from './app/app.server.module';

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/front/browser');

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

