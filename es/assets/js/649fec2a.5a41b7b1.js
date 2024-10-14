"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65215],{801937:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(474848),s=a(28453);const o={id:"onPageChange",title:"On Page Change"},i=void 0,r={id:"Events/onPageChange",title:"On Page Change",description:"| Code | Puede ser llamado por | Definici\xf3n                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/es/Events/onPageChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/docs/es/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/docs/es/Events/onPlugInArea"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"56"}),(0,t.jsx)(n.td,{children:"Formulario"}),(0,t.jsx)(n.td,{children:"Se cambia la p\xe1gina actual del formulario"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Este evento s\xf3lo est\xe1 disponible a nivel del formulario (se llama en el m\xe9todo formulario). Se genera cada vez que la p\xe1gina actual del formulario cambia (tras una llamada al comando ",(0,t.jsx)(n.code,{children:"FORM GOTO PAGE"})," o una acci\xf3n de navegaci\xf3n est\xe1ndar)."]}),"\n",(0,t.jsxs)(n.p,{children:["Note que se genera despu\xe9s de que la p\xe1gina est\xe9 completamente cargada, es decir, una vez que todos los objetos que contiene est\xe1n inicializados, incluyendo ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xe1reas web"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["La \xfanica excepci\xf3n son las \xe1reas 4D View Pro, para las que hay que llamar al evento espec\xedfico ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onVpReady",children:"On VP Ready"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El evento ",(0,t.jsx)(n.code,{children:"On Page Change"})," es \xfatil para ejecutar c\xf3digo que requiere que todos los objetos sean previamente inicializados. Tambi\xe9n se puede utilizar para optimizar la aplicaci\xf3n ejecutando el c\xf3digo (por ejemplo, una b\xfasqueda) s\xf3lo despu\xe9s de que se muestre una p\xe1gina espec\xedfica del formulario y no tan pronto como se cargue la p\xe1gina 1. Si el usuario no va a esta p\xe1gina, el c\xf3digo no se ejecuta."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);