import restify from 'restify';

const server = restify.createServer({
  name: 'api-server',
  version: '0.1.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', (req, res, next) => {
  res.send(req.params);
  return next();
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
