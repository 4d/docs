/*! For license information please see 20af7111.7ef0ff94.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87354],{290208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(474848),i=n(28453);const s={id:"php",title:"P\xe1gin PHP"},o=void 0,a={id:"settings/php",title:"P\xe1gin PHP",description:"Puede ejecutar scripts PHP en 4D. Esta p\xe1gina le permite configurar el int\xe9rprete.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/es/20-R5/settings/php",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fphp.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"php",title:"P\xe1gin PHP"},sidebar:"docs",previous:{title:"P\xe1gina SQL",permalink:"/docs/es/20-R5/settings/sql"},next:{title:"P\xe1gina seguridad",permalink:"/docs/es/20-R5/settings/security"}},c={},d=[{value:"Int\xe9rprete",id:"int\xe9rprete",level:2},{value:"Direcci\xf3n IP",id:"direcci\xf3n-ip",level:3},{value:"N\xfamero de puerto",id:"n\xfamero-de-puerto",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Puede ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html",children:"ejecutar scripts PHP en 4D"}),". Esta p\xe1gina le permite configurar el int\xe9rprete."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Estos par\xe1metros se especifican para todas las m\xe1quinas conectadas y todas las sesiones. You can also modify and read them separately for each machine and each session using the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page642.html",children:(0,r.jsx)(t.code,{children:"SET DATABASE PARAMETER"})})," and ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page643.html",children:(0,r.jsx)(t.code,{children:"Get database parameter"})})," commands. Los par\xe1metros modificados por el comando ",(0,r.jsx)(t.code,{children:"SET DATABASE PARAMETER"})," tienen prioridad para la sesi\xf3n actual."]})}),"\n",(0,r.jsx)(t.h2,{id:"int\xe9rprete",children:"Int\xe9rprete"}),"\n",(0,r.jsx)(t.h3,{id:"direcci\xf3n-ip",children:"Direcci\xf3n IP"}),"\n",(0,r.jsx)(t.p,{children:"Direcci\xf3n del int\xe9rprete PHP al que deben dirigirse las peticiones de ejecuci\xf3n de PHP. Por defecto, 4D utiliza la direcci\xf3n 127.0.0.1."}),"\n",(0,r.jsx)(t.p,{children:"Tenga en cuenta que la direcci\xf3n HTTP debe estar en la misma m\xe1quina que 4D."}),"\n",(0,r.jsx)(t.h3,{id:"n\xfamero-de-puerto",children:"N\xfamero de puerto"}),"\n",(0,r.jsx)(t.p,{children:"N\xfamero de puerto del int\xe9rprete PHP. Por defecto, 4D utiliza el puerto 8002."}),"\n",(0,r.jsx)(t.p,{children:"Puede cambiar la direcci\xf3n y/o el puerto si ya est\xe1n siendo utilizados por otro servicio o si tiene varios int\xe9rpretes en la misma m\xe1quina."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:p,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(296540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);