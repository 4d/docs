/*! For license information please see 1fbc40fb.1f010f65.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43431],{713357:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(474848),o=t(28453);const i={id:"upload",title:"$upload"},s=void 0,d={id:"REST/upload",title:"$upload",description:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/fr/18/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/fr/18/REST/info"},next:{title:"{dataClass}",permalink:"/docs/fr/18/REST/{dataClass}"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple de t\xe9l\xe9chargement d&#39;image",id:"exemple-de-t\xe9l\xe9chargement-dimage",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Publiez cette requ\xeate lorsque vous vous souhaitez t\xe9l\xe9charger un fichier sur le serveur. S'il s'agit d'une image, passez ",(0,n.jsx)(r.code,{children:"$rawPict=true"}),". Pour tous les autres fichiers, passez ",(0,n.jsx)(r.code,{children:"$binary=true"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Vous pouvez modifier le timeout, qui est par d\xe9faut de 120 secondes, en passant une valeur au param\xe8tre ",(0,n.jsx)(r.code,{children:"$timeout"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"exemple-de-t\xe9l\xe9chargement-dimage",children:"Exemple de t\xe9l\xe9chargement d'image"}),"\n",(0,n.jsx)(r.p,{children:"Pour t\xe9l\xe9charger une image, vous devez d'abord s\xe9lectionner l'objet fichier sur le client \xe0 l'aide de l'API int\xe9gr\xe9 HTML 5 pour utiliser le fichier \xe0 partir d'une application Web. 4D utilise l'attribut de type MIME de l'objet fichier afin de le g\xe9rer correctement."}),"\n",(0,n.jsx)(r.p,{children:"T\xe9l\xe9chargez ensuite l'image s\xe9lectionn\xe9e sur 4D Server :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,n.jsxs)(r.p,{children:["Utilisez ensuite cet ID pour l'ajouter \xe0 un attribut en utilisant",(0,n.jsx)(r.a,{href:"/docs/fr/18/REST/method#methodupdate",children:(0,n.jsx)(r.code,{children:"$method=update"})})," pour ajouter l'image \xe0 une entit\xe9 :"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Donn\xe9es POST"})," :"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,n.jsx)(r.p,{children:"L'entit\xe9 modifi\xe9e est retourn\xe9e :"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var n=t(296540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);