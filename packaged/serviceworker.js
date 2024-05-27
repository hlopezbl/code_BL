var DisconnectResponse;function initWebappServiceWorker(){const e="@relprefix@".replace("---","").replace(/^\//,""),o=-1===e.indexOf("/"),t="makecode;"+e+";@pxtRelId@",n=["@targetUrl@/"+e,"@simUrl@","/semantic.js","/main.js","/pxtapp.js","/typescript.js","/marked/marked.min.js","/highlight.js/highlight.pack.js","/jquery.js","/pxtlib.js","/pxtcompiler.js","/pxtpy.js","/pxtblockly.js","/pxtwinrt.js","/pxteditor.js","/pxtsim.js","/pxtembed.js","/pxtworker.js","/pxtweb.js","/blockly.css","/semantic.css","/rtlsemantic.css","/blockly/media/sprites.png","/blockly/media/click.mp3","/blockly/media/disconnect.wav","/blockly/media/delete.mp3","/vs/loader.js","/vs/base/worker/workerMain.js","/vs/basic-languages/bat/bat.js","/vs/basic-languages/cpp/cpp.js","/vs/basic-languages/python/python.js","/vs/basic-languages/markdown/markdown.js","/vs/editor/editor.main.css","/vs/editor/editor.main.js","/vs/editor/editor.main.nls.js","/vs/language/json/jsonMode.js","/vs/language/json/jsonWorker.js","/smoothie/smoothie_compressed.js","/images/Bars_black.gif","/gifjs/gif.js","/ai.0.js","/target.js","/fieldeditors.js","/editor.js","","@targetUrl@/monacoworker.js","@targetUrl@/worker.js"],i=a(""),s=a("%2Fdocs%2Fstatic%2Flogo.portrait.white.svg;%2Fdocs%2Fstatic%2Flogo.square.white.svg;%2Fdocs%2Fstatic%2Flogo.square.white.svg;%2Fdocs%2Fstatic%2Flogo.portrait.black.svg;%2Fdocs%2Fstatic%2Ficons%2Fapple-touch-icon.png;%2Fdocs%2Fstatic%2Ficons%2Fapple-touch-icon.png"),c=r(n.concat(s).map((e=>e.trim())).filter((e=>!!e&&0!==e.indexOf("@"))));let l=!1;function r(e){const o=[];for(const t of e)-1===o.indexOf(t)&&o.push(t);return o}function a(e){const o=String.fromCharCode(64)+"cdnUrl"+String.fromCharCode(64);return r(e.split(";").map((e=>decodeURIComponent(e).replace(o,"@cdnUrl@").trim())))}self.addEventListener("install",(e=>{o?(l=!0,console.log("Installing service worker..."),e.waitUntil(caches.open(t).then((e=>(console.log("Opened cache"),console.log("Caching:\n"+c.join("\n")),e.addAll(c).then((()=>e))))).then((e=>e.addAll(i).catch((e=>{console.log("Failed to cache hexfiles")})))).then((()=>self.skipWaiting())))):console.log("Skipping service worker install for unnamed endpoint")})),self.addEventListener("activate",(n=>{o?(console.log("Activating service worker..."),n.waitUntil(caches.keys().then((o=>{const n=o.filter((o=>{const n=function(e){const o=e.split(";");return 3!==o.length?null:o[1]}(o);return null===n||n===e&&o!==t}));return Promise.all(n.map((e=>caches.delete(e))))})).then((()=>l?(l=!1,function(){const o=self;return o.clients.claim().then((()=>o.clients.matchAll())).then((o=>{o.forEach((o=>o.postMessage({type:"serviceworker",state:"activated",ref:e})))}))}()):Promise.resolve())))):console.log("Skipping service worker activate for unnamed endpoint")})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((o=>o||fetch(e.request))))}))}function initWebUSB(){let e,o,t,n,i=0,s="idle";async function c(e){(await self.clients.matchAll()).forEach((o=>o.postMessage(e)))}function l(){let o;const n=new Promise((o=>{console.log("Waiting for disconnect "+e),t=o,c({type:"serviceworker",action:"packet-io-lock-disconnect",lock:e})})),i=new Promise((t=>{o=setTimeout((()=>{console.log("Timed-out disconnect request "+e),t(DisconnectResponse.TimedOut)}),5e3)}));return Promise.race([n,i]).then((e=>(clearTimeout(o),t=void 0,e)))}function r(e){return new Promise((o=>{setTimeout(o,e)}))}self.addEventListener("message",(async a=>{const d=a.data;if("serviceworkerclient"===(null==d?void 0:d.type))if("request-packet-io-lock"===d.action){if(e||(e=await function(){if(e)return Promise.resolve(e);let o;const t=new Promise((e=>{console.log("check for existing lock"),n=e,c({type:"serviceworker",action:"packet-io-status"})})),i=new Promise((e=>{o=setTimeout((()=>{console.log("Timed-out check for existing lock"),e(void 0)}),1e3)}));return Promise.race([t,i]).then((e=>(clearTimeout(o),n=void 0,e)))}()),"granting"===s)return void await c({type:"serviceworker",action:"packet-io-lock-granted",granted:!1,lock:d.lock});console.log("Received lock request "+d.lock);const t=Date.now()-i;if(o=d.lock,t<4e3&&(s="waiting",console.log("Waiting to grant lock request "+d.lock),await r(4e3-t)),o!==d.lock)return console.log("Rejecting old lock request "+d.lock),void await c({type:"serviceworker",action:"packet-io-lock-granted",granted:!1,lock:d.lock});if(s="granting",e){let e;do{console.log("Sending disconnect request "+d.lock),e=await l(),e===DisconnectResponse.Waiting&&(console.log("Waiting on disconnect request "+d.lock),await r(1e3))}while(e===DisconnectResponse.Waiting)}console.log("Granted lock request "+d.lock),e=d.lock,await c({type:"serviceworker",action:"packet-io-lock-granted",granted:!0,lock:d.lock}),i=Date.now(),s="idle"}else"release-packet-io-lock"===d.action?(console.log("Received disconnect for "+e),e=void 0,t&&t(DisconnectResponse.Disconnected)):"packet-io-lock-disconnect"===d.action?(console.log("Received disconnect response for "+e),d.didDisconnect&&(e=void 0),t&&t(d.didDisconnect?DisconnectResponse.Disconnected:DisconnectResponse.Waiting)):"packet-io-supported"===d.action?await c({type:"serviceworker",action:"packet-io-supported",supported:!0}):"packet-io-status"===d.action&&d.hasLock&&n&&n(d.lock)}))}!function(e){e[e.Disconnected=0]="Disconnected",e[e.Waiting=1]="Waiting",e[e.TimedOut=2]="TimedOut"}(DisconnectResponse||(DisconnectResponse={})),initWebappServiceWorker(),initWebUSB();