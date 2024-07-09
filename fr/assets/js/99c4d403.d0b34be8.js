/*! For license information please see 99c4d403.d0b34be8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43],{675624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(474848),n=r(28453);const s={id:"action",title:"Action"},i=void 0,d={id:"FormEditor/action",title:"Action",description:"M\xe9thode",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/fr/19/FormEditor/action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"Liste de propri\xe9t\xe9s JSON",permalink:"/docs/fr/19/FormEditor/jsonReference"},next:{title:"Propri\xe9t\xe9s des formulaires",permalink:"/docs/fr/19/FormEditor/propertiesForm"}},l={},c=[{value:"M\xe9thode",id:"M\xe9thode",level:2},{value:"Grammaire JSON",id:"Grammaire-JSON",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"M\xe9thode",children:"M\xe9thode"}),"\n",(0,o.jsxs)(t.p,{children:["R\xe9f\xe9rence d'une m\xe9thode associ\xe9e au formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure. Voir ",(0,o.jsx)(t.a,{href:"/docs/fr/19/Concepts/methods#specialized-methods",children:"M\xe9thodes sp\xe9cialis\xe9es"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Vous n'appelez pas de m\xe9thode formulaire - 4D l'appelle automatiquement lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e."}),"\n",(0,o.jsx)(t.p,{children:"Plusieurs types de r\xe9f\xe9rences de m\xe9thode sont pris en charge :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["un chemin de fichier de m\xe9thode projet standard, c'est-\xe0-dire qui utilise le mod\xe8le suivant :",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"method.4dm"}),(0,o.jsx)(t.br,{}),"\nCe type de r\xe9f\xe9rence indique que le fichier de m\xe9thode se trouve \xe0 l'emplacement par d\xe9faut (\"sources/{TableForms/",(0,o.jsx)(t.em,{children:"numTable"}),"} | {Forms}/",(0,o.jsx)(t.em,{children:"formName"}),'/"). Dans ce cas, 4D g\xe8re automatiquement la m\xe9thode formulaire lorsque des op\xe9rations sont ex\xe9cut\xe9es sur le formulaire (renommage, duplication, copier/coller, etc.)']}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,o.jsx)(t.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"MyMethods/myFormMethod.4dm"})," You can also use a filesystem:",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"/RESOURCES/Forms/FormMethod.4dm"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"Grammaire-JSON",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Nom"}),(0,o.jsx)(t.th,{children:"Type de donn\xe9es"}),(0,o.jsx)(t.th,{children:"Valeurs possibles"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"method"}),(0,o.jsx)(t.td,{children:"text"}),(0,o.jsx)(t.td,{children:"Chemin standard ou personnalis\xe9 de la m\xe9thode formulaire ou nom de la m\xe9thode projet"})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,t,r)=>{var o=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,s={},c=null,a=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:d.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var o=r(296540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);