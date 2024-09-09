/*! For license information please see 52df39bc.164a1aae.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3277],{822183:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=n(474848),o=n(28453);const r={id:"overview",title:"A propos des fonctions de classes"},i=void 0,l={id:"API/overview",title:"A propos des fonctions de classes",description:"Cette section d\xe9crit les fonctions de classe int\xe9gr\xe9es de 4D ainsi que les commandes des constructeurs associ\xe9s. Les propri\xe9t\xe9s et fonctions des classes 4D sont disponibles via les objets d'instance de classe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/fr/API/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"overview",title:"A propos des fonctions de classes"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/fr/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/fr/API/BlobClass"}},c={},a=[{value:"Conventions d&#39;\xe9criture",id:"conventions-d\xe9criture",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Cette section d\xe9crit les fonctions de classe int\xe9gr\xe9es de 4D ainsi que les commandes des constructeurs associ\xe9s. Les propri\xe9t\xe9s et fonctions des classes 4D sont disponibles via les objets d'instance de classe."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["les fonctions doivent \xeatre appel\xe9es sur des instances avec l'op\xe9rateur ",(0,t.jsx)(s.code,{children:"()"}),". Par exemple, ",(0,t.jsx)(s.code,{children:"collection.sort()"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["les propri\xe9t\xe9s sont appel\xe9es sans parenth\xe8ses, par exemple ",(0,t.jsx)(s.code,{children:"file.creationTime"}),". Vous pouvez \xe9galement utiliser la syntaxe [], par exemple ",(0,t.jsx)(s.code,{children:'file["creationTime"]'}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["les commandes peuvent \xeatre appel\xe9es ind\xe9pendamment, avec ou sans param\xe8tres. Par exemple ",(0,t.jsx)(s.code,{children:"Folder(fk database folder)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"conventions-d\xe9criture",children:"Conventions d'\xe9criture"}),"\n",(0,t.jsx)(s.p,{children:"Les conventions suivantes sont utilis\xe9es dans la syntaxe de la fonction :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["les caract\xe8res ",(0,t.jsx)(s.code,{children:"{ }"})," (accolades) indiquent des param\xe8tres facultatifs. Par exemple, ",(0,t.jsx)(s.code,{children:".delete( { option : Integer } )"})," signifie que le param\xe8tre ",(0,t.jsx)(s.em,{children:"option"})," peut \xeatre omis lors de l'appel de la fonction."]}),"\n",(0,t.jsxs)(s.li,{children:["la notation ",(0,t.jsx)(s.code,{children:"{ ; ...param }"})," indique un nombre illimit\xe9 de param\xe8tres. Par exemple, ",(0,t.jsx)(s.code,{children:".concat( value : any { ;...valueN } ) : Collection"})," signifie qu'un nombre illimit\xe9 de valeurs de n'importe quel type peut \xeatre pass\xe9 \xe0 la fonction."]}),"\n",(0,t.jsxs)(s.li,{children:["le mot-cl\xe9 ",(0,t.jsx)(s.code,{children:"any"})," est utilis\xe9 pour d\xe9signer un param\xe8tre de tout type qui peut \xeatre stock\xe9 dans des attributs (nombre, texte, bool\xe9en, date, heure, objet, collection...)."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/Concepts/classes",children:"Classes in the 4D Language"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,s,n)=>{var t=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var t,r={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,t)&&!c.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:o,type:e,key:a,ref:d,props:r,_owner:l.current}}s.Fragment=r,s.jsx=a,s.jsxs=a},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(296540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);