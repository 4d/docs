/*! For license information please see 1a8c4b66.d69ffe62.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93148],{848615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(474848),a=n(28453);const r={id:"onPageChange",title:"On Page Change"},s=void 0,i={id:"Events/onPageChange",title:"On Page Change",description:"| Code | Pode ser chamado por | Defini\xe7\xe3o                               |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/pt/20-R4/Events/onPageChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/docs/pt/20-R4/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/docs/pt/20-R4/Events/onPlugInArea"}},c={},d=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Pode ser chamado por"}),(0,o.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"56"}),(0,o.jsx)(t.td,{children:"Formul\xe1rio"}),(0,o.jsx)(t.td,{children:"A p\xe1gina atual do formul\xe1rio \xe9 alterada"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the ",(0,o.jsx)(t.code,{children:"FORM GOTO PAGE"})," command or a standard navigation action)."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including ",(0,o.jsx)(t.a,{href:"/docs/pt/20-R4/FormObjects/webAreaOverview",children:"Web areas"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["A \xfanica exce\xe7\xe3o s\xe3o as \xe1reas 4D View Pro, para as quais voc\xea precisa chamar o evento espec\xedfico ",(0,o.jsx)(t.a,{href:"/docs/pt/20-R4/Events/onVpReady",children:"On VP Ready"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Page Change"})," event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. Se o usu\xe1rio n\xe3o for a esta p\xe1gina, o c\xf3digo n\xe3o \xe9 executado."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,r={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:a,type:e,key:d,ref:l,props:r,_owner:i.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(296540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);