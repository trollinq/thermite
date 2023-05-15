/*This should not be editted, and shouldn't even be touched.
It took me a while to host bare server since it just refused to work.
This code is fragile and a singular edit may break it.*/
import createBareServer from"@tomphttp/bare-server-node";
import{uvPath}from"@titaniumnetwork-dev/ultraviolet";
import{createServer as createHttpsServer}from"node:https";
import{createServer as createHttpServer}from"node:http";
import{readFileSync,existsSync} from"node:fs";
import serveStatic from"serve-static";
import connect from"connect";
const app=connect(),bare=createBareServer("/bare/"),ssl=existsSync("../ssl/key.pem")&&existsSync("../ssl/cert.pem"),PORT=process.env.PORT||ssl?443:8080,server=ssl?createHttpsServer({key:readFileSync("./ssl/key.pem"),cert:readFileSync("./ssl/cert.pem")}):createHttpServer();
app.use((req,res,next)=>{if(bare.shouldRoute(req))bare.routeRequest(req,res);else next();});
app.use("/",serveStatic("./public"));
app.use("/uv/",serveStatic(uvPath));
app.use((_,res)=>{res.writeHead(500, null, { "Content-Type": "text/plain" });res.end("Error");});
server.on("request",app);
server.on("upgrade",(req,socket,head)=>{if(bare.shouldRoute(req,socket,head))bare.routeUpgrade(req,socket,head);else socket.end()});
server.on("listening",()=>{const addr=server.address();console.log(`Thermite Server running on port ${addr.port}`);console.log(`Local: http${ssl?"s":""}://localhost${addr.port===80||(ssl&&addr.port===443)?"":":"+addr.port}`);});
server.listen({port:PORT});
