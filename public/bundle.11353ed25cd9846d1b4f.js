(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"\r\n\r\n\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n    background-color: #E57373;\r\n    padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #sidebar {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 180px;\r\n        height: 100%;\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n    #content {\r\n        margin-left: 180px;\r\n    }\r\n}\r\n\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px;\r\n}\r\n\r\n.modal {\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background:#ffffff;\r\n}\r\n\r\n.modal > h1 {\r\n    text-align: center;\r\n}\r\n.modal .modal-content {\r\n    padding: 1rem;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var f=n(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(t[f].references++,t[f].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var d=r(e,o),l=0;l<i.length;l++){var c=n(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),d=n.n(s),l=n(216),c=n.n(l),u=n(589),f=n.n(u),m=n(28),p={};p.styleTagTransform=f(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=c(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const h=e=>e.length>=8;function v(e,t){const n=document.createElement("div");n.classList.add("modal");const r=`\n    <h1>${e}</h1>\n    <div class="modal-content">${t}</div>\n    `;n.innerHTML=r,mui.overlay("on",n)}class b{static create(e){return fetch("https://only-js-default-rtdb.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.id=t.name,e))).then(g).then(b.renderList)}static fetch(e){return e?fetch(`https://only-js-default-rtdb.firebaseio.com/question.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=y(),t=e.length?e.map(x).join(""):'<div class="mui--text-headline">Увы пока ничего не спросили</div>';document.getElementById("list").innerHTML=t}static listToHTML(e){return e.length?` <ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function g(e){const t=y();t.push(e),localStorage.setItem("question",JSON.stringify(t))}function y(){return JSON.parse(localStorage.getItem("question")||"[]")}function x(e){return`<div class="mui--text-black-54">${new Date(e.data).toLocaleDateString()}\n                                        ${new Date(e.data).toLocaleTimeString()}</div>\n <div>${e.text}</div> <br> `}const S=document.getElementById("form"),w=S.querySelector("#question-input"),T=document.querySelector("#modal-btn"),L=S.querySelector("#submit");function j(e){e.preventDefault();const t=e.target.querySelector("button"),n=e.target.querySelector("#email").value,r=e.target.querySelector("#password").value;t.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZ7biAnlj6sRHlBlqsIvcGc7DK-PIg7-M",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(n,r).then(b.fetch).then((function(e){"string"==typeof e?v("Ошибка",e):v("Списик вопросов",b.listToHTML(e))})).then((()=>t.disabled=!1))}window.addEventListener("load",b.renderList),T.addEventListener("click",(function(){v("Авторизация",'\n   <form class="mui-form" id="auth-form">\n                <div class="mui-textfield mui-textfield--float-label">\n                    <input type="email" id="email" >\n                    <label for="email">Email</label>\n                </div>\n                <div class="mui-textfield mui-textfield--float-label">\n                    <input type="password" id="password" >\n                    <label for="password">Password</label>\n                </div>\n                <button  type="submit" class="mui-btn mui-btn--raised mui-btn--primary" >Войти</button>\n            </form>\n'),document.getElementById("auth-form").addEventListener("submit",j,{once:!0})})),S.addEventListener("submit",(function(e){if(e.preventDefault(),h(w.value)){const e={text:w.value.trim(),data:(new Date).toJSON()};L.disabled=!0,b.create(e).then((()=>{w.value="",w.className="",L.disabled=!1}))}})),w.addEventListener("input",(()=>{L.disabled=!h(w.value)}))})()})();