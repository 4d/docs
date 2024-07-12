/*! For license information please see ccb0b5a6.1025e403.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34857],{995327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var o=s(474848),l=s(28453);const t={id:"onDisplayDetail",title:"On Display Detail"},i=void 0,r={id:"Events/onDisplayDetail",title:"On Display Detail",description:"| Code | Puede ser llamado por                                    | Definici\xf3n                                                                                                                               |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onDisplayDetail.md",sourceDirName:"Events",slug:"/Events/onDisplayDetail",permalink:"/docs/es/Events/onDisplayDetail",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDisplayDetail.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onDisplayDetail",title:"On Display Detail"},sidebar:"docs",previous:{title:"On Delete Action",permalink:"/docs/es/Events/onDeleteAction"},next:{title:"On Double Clicked",permalink:"/docs/es/Events/onDoubleClicked"}},d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Formulario de salida",id:"formulario-de-salida",level:3},{value:"List box selecci\xf3n",id:"list-box-selecci\xf3n",level:3},{value:"N\xfamero de l\xednea mostrado",id:"n\xfamero-de-l\xednea-mostrado",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Puede ser llamado por"}),(0,o.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"8"}),(0,o.jsxs)(n.td,{children:["Formulario - ",(0,o.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})]}),(0,o.jsx)(n.td,{children:"Un registro est\xe1 a punto de ser mostrado en un formulario lista o una l\xednea est\xe1 a punto de ser mostrada en un list box."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El evento ",(0,o.jsx)(n.code,{children:"On Display Detail"})," puede utilizarse en los siguientes contextos:"]}),"\n",(0,o.jsx)(n.h3,{id:"formulario-de-salida",children:"Formulario de salida"}),"\n",(0,o.jsxs)(n.p,{children:["Un registro est\xe1 a punto de ser visualizado en un formulario de lista que se muestra v\xeda ",(0,o.jsx)(n.code,{children:"DISPLAY SELECTION"})," y ",(0,o.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Este evento no se puede seleccionar para los formularios proyecto, s\xf3lo est\xe1 disponible con los ",(0,o.jsx)(n.strong,{children:"formularios tabla"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"En este contexto, se desencadena la siguiente secuencia de llamadas a m\xe9todos y eventos de formulario:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Para cada registro:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Para cada objeto en el \xe1rea detallada:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["M\xe9todo objeto con el evento ",(0,o.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["M\xe9todo formulario con el evento ",(0,o.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["El \xe1rea del encabezado se maneja utilizando el evento ",(0,o.jsx)(n.a,{href:"/docs/es/Events/onHeader",children:(0,o.jsx)(n.code,{children:"On Header"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Llamar a un comando 4D que muestra una caja de di\xe1logo desde el evento ",(0,o.jsx)(n.code,{children:"On Display Detail"})," no est\xe1 permitido y provocar\xe1 un error de sintaxis. M\xe1s concretamente, los comandos en cuesti\xf3n son: ",(0,o.jsx)(n.code,{children:"ALERT"}),", ",(0,o.jsx)(n.code,{children:"DIALOG"}),", ",(0,o.jsx)(n.code,{children:"CONFIRM"}),", ",(0,o.jsx)(n.code,{children:"Request"}),", ",(0,o.jsx)(n.code,{children:"ADD RECORD"}),", ",(0,o.jsx)(n.code,{children:"MODIFY RECORD"}),", ",(0,o.jsx)(n.code,{children:"DISPLAY SELECTION"})," y ",(0,o.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"list-box-selecci\xf3n",children:"List box selecci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Este evento se genera cuando se muestra una fila de un list box de ",(0,o.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#selecci%C3%B3n-list-boxes",children:(0,o.jsx)(n.strong,{children:"tipo selecci\xf3n"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"n\xfamero-de-l\xednea-mostrado",children:"N\xfamero de l\xednea mostrado"}),"\n",(0,o.jsxs)(n.p,{children:["El comando 4D ",(0,o.jsx)(n.code,{children:"N\xfamero de l\xednea mostrado"})," funciona con el evento formulario ",(0,o.jsx)(n.code,{children:"On Display Detail"}),". Devuelve el n\xfamero de la l\xednea que se est\xe1 procesando mientras se visualiza en pantalla una lista de registros o de l\xedneas de list box."]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var o=s(296540),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var o,t={},a=null,c=null;for(o in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!d.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:l,type:e,key:a,ref:c,props:t,_owner:r.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var o=s(296540);const l={},t=o.createContext(l);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);