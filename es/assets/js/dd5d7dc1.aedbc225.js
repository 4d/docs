/*! For license information please see dd5d7dc1.aedbc225.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98429],{353431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(474848),i=t(28453);const s={id:"vp-get-binding-path",title:"VP Get binding path"},d=void 0,a={id:"ViewPro/commands/vp-get-binding-path",title:"VP Get binding path",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-binding-path.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-binding-path",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-binding-path",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-binding-path.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-binding-path",title:"VP Get binding path"},sidebar:"docs",previous:{title:"VP Get active cell",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-active-cell"},next:{title:"VP Get cell style",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-cell-style"}},o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get binding path"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Nombre del atributo vinculado a la celda"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP Get binding path"})," devuelve el nombre del atributo ligado a la celda especificada en ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un objeto que es un rango de celdas o un rango combinado de celdas. Note que:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," es un rango de varias celdas, el comando devuelve el nombre del atributo asociado a la primera celda del rango."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," contiene varios rangos de celdas, el comando devuelve el nombre del atributo asociado a la primera celda del primer rango."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $p; $options : Object\nvar $myAttribute : Text\n\n$p:=New object\n$p.firstName:="Freehafer"\n$p.lastName:="Nancy"\n\nVP SET DATA CONTEXT("ViewProArea"; $p)\n\nVP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")\nVP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")\n\n$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-data-context",children:"VP Get data context"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-data-context",children:"VP SET DATA CONTEXT"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var r=t(296540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);