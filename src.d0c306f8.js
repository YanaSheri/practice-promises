parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");let t,e=0;const r={hours:document.querySelector("#hours"),minutes:document.querySelector("#minutes"),seconds:document.querySelector("#seconds"),targetTimer:document.querySelector("#target-timer"),save:document.querySelector("#save")};function n(t){const e=Math.floor(t/60/60);t-=3600*e;const n=Math.floor(t/60),o=t-=60*n;r.hours.innerHTML=e.toString().padStart(2,0),r.minutes.innerHTML=n.toString().padStart(2,0),r.seconds.innerHTML=o.toString().padStart(2,0)}function o(r){"Stop"===r.target.textContent?(clearInterval(t),r.target.textContent="Start"):(t=setInterval(()=>{n(e+=1)},1e3),r.target.textContent="Stop")}r.save.addEventListener("click",t=>{a("times").then(t=>{console.log(t);const r=null===t?[]:t;return r.push(e),r}).then(t=>a("times","SET",t)).catch()}),r.targetTimer.addEventListener("click",o);const a=(t,e="GET",r={})=>{return new Promise((n,o)=>{setTimeout(()=>{Math.random()>.2?"GET"===e?n(JSON.parse(localStorage.getItem(t))):"SET"===e?(localStorage.setItem(t,JSON.stringify(r)),n(!0)):o("invalid type"):o("oops!!!")},((t,e)=>Math.floor(Math.random()*(e-t)+t))(1e3,5e3))})};function s(t){const e=Math.floor(t/60/60);t-=3600*e;const n=Math.floor(t/60),o=t-=60*n;r.targetTimer.insertAdjacentHTML("beforeend",`<li>${e.toString().padStart(2,0)}:${n.toString().padStart(2,0)}:${o.toString().padStart(2,0)}</li>`)}a("times").then(t=>{0!==t&&t.forEach(s)}).catch(console.log);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/practice-promises/src.d0c306f8.js.map