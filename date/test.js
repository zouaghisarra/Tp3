var madate=require('./Date');
let http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("la date est "+madate.date_acctuelle+" heure: "+madate.date_heure);
res.end();
}).listen(8080);
