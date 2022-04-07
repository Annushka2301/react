import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { App } from '../App';
import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

// app.get('/', (req, res) => {
//   res.send(
//     indexTemplate(ReactDOM.renderToString('')),
//   );
// });

app.get ('/', (req, res) => {
  const template = indexTemplate();
  const reactTemplate = ReactDOMServer.renderToString(<App />);

  res.contentType("text/html");
  res.status(200);

  res.send(
    template.replace(
      '<div id="react_root"></div>',
      `<div id="react_root">${reactTemplate}</div>`
    )
  )
})

app.listen(3000, () => {
  console.log('Server started on http:localhost:3000')
});
