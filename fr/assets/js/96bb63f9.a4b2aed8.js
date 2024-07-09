/*! For license information please see 96bb63f9.a4b2aed8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12464],{801837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(474848),s=r(28453);const o={id:"php",title:"PHP page"},i=void 0,a={id:"settings/php",title:"PHP page",description:"You can execute PHP scripts in 4D. This page allows you to configure the interpreter.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/fr/20-R4/settings/php",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fphp.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"php",title:"PHP page"},sidebar:"docs",previous:{title:"SQL page",permalink:"/docs/fr/20-R4/settings/sql"},next:{title:"Security page",permalink:"/docs/fr/20-R4/settings/security"}},c={},d=[{value:"Interpr\xe9teur",id:"Interpr\xe9teur",level:2},{value:"Adresse IP",id:"Adresse-IP",level:3},{value:"Port number",id:"Port-number",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["You can ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html",children:"execute PHP scripts in 4D"}),". This page allows you to configure the interpreter."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["These settings are specified for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page642.html",children:(0,n.jsx)(t.code,{children:"SET DATABASE PARAMETER"})})," and ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page643.html",children:(0,n.jsx)(t.code,{children:"Get database parameter"})})," commands. The parameters modified by the ",(0,n.jsx)(t.code,{children:"SET DATABASE PARAMETER"})," command have priority for the current session."]})}),"\n",(0,n.jsx)(t.h2,{id:"Interpr\xe9teur",children:"Interpr\xe9teur"}),"\n",(0,n.jsx)(t.h3,{id:"Adresse-IP",children:"Adresse IP"}),"\n",(0,n.jsx)(t.p,{children:"Address of the PHP interpreter where PHP execution requests must be adressed. By default, 4D uses the address 127.0.0.1."}),"\n",(0,n.jsx)(t.p,{children:"Note that the HTTP address must be on the same machine as 4D."}),"\n",(0,n.jsx)(t.h3,{id:"Port-number",children:"Port number"}),"\n",(0,n.jsx)(t.p,{children:"Port number of the PHP interpreter. By default, 4D uses the port 8002."}),"\n",(0,n.jsx)(t.p,{children:"You can change the address and/or port if they are already used by another service or if you have several interpreters on the same machine."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},d=null,p=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:p,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(296540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);