// i was high or smth mb.
import e from"@tomphttp/bare-server-node";import{uvPath as r}from"@titaniumnetwork-dev/ultraviolet";import{fileURLToPath as t}from"node:url";import{createServer as o}from"node:https";import{createServer as s}from"node:http";import{readFileSync as p,existsSync as a}from"node:fs";import l from"serve-static";import n from"connect";let app=n(),bare=e("/bare/"),ssl=a("../ssl/key.pem")&&a("../ssl/cert.pem"),PORT=process.env.PORT||ssl?443:8080,server=ssl?o({key:p("./ssl/key.pem"),cert:p("./ssl/cert.pem")}):s();app.use((e,r,t)=>{bare.shouldRoute(e)?bare.routeRequest(e,r):t()}),app.use("/",l("./public")),app.use("/uv/",l(r)),app.use((e,r)=>{r.writeHead(500,null,{"Content-Type":"text/plain"}),r.end("Error")}),server.on("request",app),server.on("upgrade",(e,r,t)=>{bare.shouldRoute(e,r,t)?bare.routeUpgrade(e,r,t):r.end()}),server.on("listening",()=>{let e=server.address();console.log(`Server running on port ${e.port}`),console.log(`Local: http${ssl?"s":""}://localhost${80===e.port||ssl&&443===e.port?"":":"+e.port}`)}),server.listen({port:PORT});
