importScripts("/uv/uv.bundle.js"),importScripts("/uv/uv.config.js"),importScripts("/uv/uv.sw.js");const sw=new UVServiceWorker;self.addEventListener("fetch",s=>{s.respondWith(sw.fetch(s))});