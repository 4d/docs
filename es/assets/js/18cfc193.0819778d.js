/*! For license information please see 18cfc193.0819778d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4031],{351e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(474848),o=n(28453);const s={id:"onBeforeDataEntry",title:"On Before Data Entry"},i=void 0,a={id:"Events/onBeforeDataEntry",title:"On Before Data Entry",description:"| Code | Puede ser llamado por                                                                                                 | Definici\xf3n                                                       |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Events/onBeforeDataEntry.md",sourceDirName:"Events",slug:"/Events/onBeforeDataEntry",permalink:"/docs/es/20/Events/onBeforeDataEntry",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeDataEntry.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onBeforeDataEntry",title:"On Before Data Entry"},sidebar:"docs",previous:{title:"On Alternative Click",permalink:"/docs/es/20/Events/onAlternativeClick"},next:{title:"On Before Keystroke",permalink:"/docs/es/20/Events/onBeforeKeystroke"}},d={},l=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Puede ser llamado por"}),(0,r.jsx)(t.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"41"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/es/20/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box"})]}),(0,r.jsx)(t.td,{children:"Una celda de list box est\xe1 a punto de cambiar al modo de edici\xf3n"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(t.p,{children:"Este evento se genera justo antes de que se edite una celda del list box (antes de que se muestre el cursor de entrada). Este evento permite al desarrollador, por ejemplo, mostrar un texto diferente dependiendo de si el usuario est\xe1 en el modo de visualizaci\xf3n o de edici\xf3n."}),"\n",(0,r.jsxs)(t.p,{children:["Cuando el cursor llega a la celda, se genera el evento ",(0,r.jsx)(t.code,{children:"On Before Data Entry"})," en el list box o m\xe9todo de la columna."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Si, en el contexto de este evento, $0 se define como -1, la celda se considera como no editable. Si el evento se gener\xf3 despu\xe9s de presionar ",(0,r.jsx)(t.strong,{children:"Tab"})," o ",(0,r.jsx)(t.strong,{children:"May\xfas+Tab"}),", el foco pasa a la siguiente celda o a la anterior, respectivamente."]}),"\n",(0,r.jsx)(t.li,{children:"Si $0 no es -1 (por defecto $0 es 0), la celda se puede introducir y pasa al modo de edici\xf3n."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Ver tambi\xe9n la secci\xf3n ",(0,r.jsx)(t.a,{href:"/docs/es/20/FormObjects/listboxOverview#managing-entry",children:"Gesti\xf3n de entradas"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);