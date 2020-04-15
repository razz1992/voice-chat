const app=global.app=express();
const PORT = process.env.PORT || 8080
const options = {
  key: fs.readFileSync('testcert/key.pem'),
  cert: fs.readFileSync('testcert/cert.pem')
};
app.use('/', express.static(__dirname + '/../../client'));
const server=global.server=https.createServer(options,app).listen(PORT);
server.on("listen",function() {
  mainlog("Server","@",PORT);
});
