/*! For license information please see 0f56086e.af64bd43.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27123],{410702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(474848),o=n(28453);const r={id:"overview",title:"Overview"},i=void 0,s={id:"Backup/overview",title:"Overview",description:"4D includes a full database backup and restore module.",source:"@site/versioned_docs/version-18/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/18/Backup/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/docs/18/MSC/encrypt"},next:{title:"Backup",permalink:"/docs/18/Backup/backup"}},c={},l=[];function u(e){const t={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"4D includes a full database backup and restore module."}),"\n",(0,a.jsx)(t.p,{children:"This module allows backing up a database currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Database Settings."}),"\n",(0,a.jsx)(t.p,{children:"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface."}),"\n",(0,a.jsx)(t.p,{children:"Databases can be restored automatically when a damaged database is opened."}),"\n",(0,a.jsxs)(t.p,{children:["Also, the integrated backup module can take advantage of the .journal file (",(0,a.jsx)(t.a,{href:"/docs/18/Backup/log",children:"database log file"}),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with a database in use, any operations missing in the data file are automatically reintegrated the next time the database is opened. You can view the journal file contents at any time."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)"}),"\n",(0,a.jsx)(t.li,{children:"Synchronization using SQL"}),"\n",(0,a.jsx)(t.li,{children:"Synchronization using HTTP (/rest/url)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["For a general overview of 4D's security features, see the ",(0,a.jsx)(t.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},221020:(e,t,n)=>{var a=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,r={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:u,props:r,_owner:s.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(296540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);