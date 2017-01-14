const Express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./app/index.js');
const template = require('./template.js');

const server = Express();

server.use('/static', Express.static('static'));

server.get('/', (request, reply) => {
  const appString = renderToString(<App />);

  reply.send(template({
    body: appString,
    title: 'hey world'
  }));
})

server.listen(3000, () => {
  console.log('listening on 3000');
})
