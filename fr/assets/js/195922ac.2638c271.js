/*! For license information please see 195922ac.2638c271.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37239],{629298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"directory",title:"$directory"},o=void 0,d={id:"REST/directory",title:"$directory",description:"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/fr/19/REST/directory",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/fr/19/REST/catalog"},next:{title:"$info",permalink:"/docs/fr/19/REST/info"}},l={},c=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST."}),"\n",(0,r.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,r.jsx)(n.p,{children:"Ouvre une session REST sur votre application 4D et connecte l'utilisateur."}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez ",(0,r.jsx)(n.code,{children:"$directory/login"})," pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez \xe9galement modifier le timeout par d\xe9faut de la session 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Tous les param\xe8tres doivent \xeatre pass\xe9s dans les ",(0,r.jsx)(n.strong,{children:"en-t\xeates"})," d'une m\xe9thode POST :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Cl\xe9 de l'en-t\xeate"}),(0,r.jsx)(n.th,{children:"Valeur de l'en-t\xeate"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username-4D"}),(0,r.jsx)(n.td,{children:"Utilisateur - Non obligatoire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password-4D"}),(0,r.jsx)(n.td,{children:"Mot de passe - Non obligatoire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hashed-password-4D"}),(0,r.jsx)(n.td,{children:"Mot de passe h\xe2ch\xe9 - Non obligatoire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"session-4D-length"}),(0,r.jsx)(n.td,{children:"Timeout d'inactivit\xe9 de la session (en minutes). Ne peut pas \xeatre inf\xe9rieur \xe0 60 - Non obligatoire"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,r.jsx)(n.p,{children:"Si la connexion a r\xe9ussi, le r\xe9sultat sera le suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sinon, la r\xe9ponse sera la suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);