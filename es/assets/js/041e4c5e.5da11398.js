/*! For license information please see 041e4c5e.5da11398.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12412],{229459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(474848),l=r(28453);const s={id:"vp-get-value",title:"VP Get value"},o=void 0,d={id:"ViewPro/commands/vp-get-value",title:"VP Get value",description:"VP Get value ( rangeObj Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-value",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-value",title:"VP Get value"},sidebar:"docs",previous:{title:"VP Get tables",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-tables"},next:{title:"VP Get values",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-values"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto rango"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto que contiene un valor de celda"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Get value"})," recupera un valor de celda de un rango de celdas designado."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pase un rango cuyo valor desea recuperar."]}),"\n",(0,t.jsx)(n.h4,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,t.jsxs)(n.p,{children:["El objeto devuelto contendr\xe1 la propiedad ",(0,t.jsx)(n.code,{children:"value"})," y, en caso de un valor fecha js, una propiedad ",(0,t.jsx)(n.code,{children:"time"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,t.jsxs)(n.td,{children:["Valor en el ",(0,t.jsx)(n.em,{children:"rangeObj"})," (excepto- tiempo)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"Valor hora (en segundos) si el valor es del tipo de fecha js"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Si el objeto devuelto incluye una fecha u hora, se trata como una fecha-hora y se completa de la siguiente manera:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"valor hora - la parte de la fecha se completa como December 30, 1899 en formato dd/MM/yyyy (30/12/1899)"}),"\n",(0,t.jsx)(n.li,{children:"valor fecha - la parte de la hora se completa como medianoche en formato HH:mm:ss (00:00:00)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"rangeObj"})," contiene varias celdas o varios rangos, se devuelve el valor de la primera celda. El comando devuelve un objeto null si la celda est\xe1 vac\xeda."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET VALUE($cell;New object("value";Uppercase($value.value)))\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,n,r)=>{var t=r(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,i=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(i=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:l,type:e,key:c,ref:i,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(296540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);