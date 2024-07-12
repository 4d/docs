/*! For license information please see 6a697f38.68d989eb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48661],{820534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(474848),s=t(28453);const r={id:"onDisplayDetail",title:"On Display Detail"},l=void 0,o={id:"Events/onDisplayDetail",title:"On Display Detail",description:"| Code | Peut \xeatre appel\xe9 par                                     | D\xe9finition                                                                                                                                       |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onDisplayDetail.md",sourceDirName:"Events",slug:"/Events/onDisplayDetail",permalink:"/docs/fr/19/Events/onDisplayDetail",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDisplayDetail.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onDisplayDetail",title:"On Display Detail"},sidebar:"docs",previous:{title:"On Delete Action",permalink:"/docs/fr/19/Events/onDeleteAction"},next:{title:"On Double Clicked",permalink:"/docs/fr/19/Events/onDoubleClicked"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Formulaire de sortie",id:"formulaire-de-sortie",level:3},{value:"Liste box s\xe9lection",id:"liste-box-s\xe9lection",level:3},{value:"Num\xe9ro de ligne affich\xe9",id:"num\xe9ro-de-ligne-affich\xe9",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,i.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsxs)(n.td,{children:["Formulaire - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,i.jsx)(n.td,{children:"Un enregistrement est sur le point d'\xeatre affich\xe9 dans un formulaire liste ou bien une ligne est sur le point d'\xeatre affich\xe9e dans une list box."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On Display Detail"})," peut \xeatre utilis\xe9 dans les contextes suivants :"]}),"\n",(0,i.jsx)(n.h3,{id:"formulaire-de-sortie",children:"Formulaire de sortie"}),"\n",(0,i.jsxs)(n.p,{children:["Un enregistrement est sur le point d'\xeatre affich\xe9 sous forme de liste affich\xe9e via ",(0,i.jsx)(n.code,{children:"DISPLAY SELECTION"})," et ",(0,i.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Cet \xe9v\xe9nement ne peut pas \xeatre s\xe9lectionn\xe9 pour les formulaires projet, il est uniquement disponible avec les ",(0,i.jsx)(n.strong,{children:"formulaires table"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Dans ce contexte, la s\xe9quence d'appels de m\xe9thodes et d'\xe9v\xe9nements de formulaire suivante est d\xe9clench\xe9e :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour chaque enregistrement :\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour chaque objet de la zone d\xe9taill\xe9e :\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["M\xe9thode objet avec l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["M\xe9thode formulaire avec l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["La zone d'en-t\xeate est g\xe9r\xe9e \xe0 l'aide de l'\xe9v\xe9nement ",(0,i.jsx)(n.a,{href:"/docs/fr/19/Events/onHeader",children:(0,i.jsx)(n.code,{children:"On Header"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["L'appel d'une commande 4D qui affiche une bo\xeete de dialogue \xe0 partir de l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On Display Detail"})," n'est pas autoris\xe9 et g\xe9n\xe9rera une erreur de syntaxe. Plus particuli\xe8rement, les commandes concern\xe9es sont : ",(0,i.jsx)(n.code,{children:"ALERT"}),", ",(0,i.jsx)(n.code,{children:"DIALOG"}),", ",(0,i.jsx)(n.code,{children:"CONFIRM"}),", ",(0,i.jsx)(n.code,{children:"Request"}),", ",(0,i.jsx)(n.code,{children:"ADD RECORD"}),", ",(0,i.jsx)(n.code,{children:"MODIFY RECORD"}),", ",(0,i.jsx)(n.code,{children:"DISPLAY SELECTION"}),", et ",(0,i.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"liste-box-s\xe9lection",children:"Liste box s\xe9lection"}),"\n",(0,i.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'une ligne de list box ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#selection-list-boxes",children:(0,i.jsx)(n.strong,{children:"de type s\xe9lection"})})," est affich\xe9e."]}),"\n",(0,i.jsx)(n.h3,{id:"num\xe9ro-de-ligne-affich\xe9",children:"Num\xe9ro de ligne affich\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["La commande 4D ",(0,i.jsx)(n.code,{children:"Displayed line number"})," fonctionne avec l'\xe9v\xe9nement formulaire ",(0,i.jsx)(n.code,{children:"On Display Detail"}),". Elle retourne le num\xe9ro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche \xe0 l'\xe9cran."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var i=t(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,r={},c=null,a=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:a,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(296540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);