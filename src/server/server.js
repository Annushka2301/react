import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { App } from '../App';
import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';
import axios  from 'axios';

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
});

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: 'wXtg1n292c68LnfgSU9wkpbF0Hdl-g' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOMServer.renderToString(App()), data['access_token'])
      )
    })
    .catch(console.log)
  res.send(
    indexTemplate(ReactDOMServer.renderToString(App())),
  )
})

app.get('/auth', (req, res) => {
  // req.query.code
  res.send(
    indexTemplate(ReactDOMServer.renderToString(App()))
  )
});

app.listen(3000, () => {
  console.log('Server started on http:localhost:3000')
});
