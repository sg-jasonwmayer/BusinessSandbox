/* eslint-disable func-names, prefer-arrow-callback, no-console, no-else-return */
/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 5000;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../styleguide/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../styleguide/dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable func-names, prefer-arrow-callback, no-console, no-else-return */
