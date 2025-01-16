"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64943"],{161680:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"Events/onPageChange","title":"On Page Change","description":"| Code | Puede ser llamado por | Definici\xf3n                                |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onPageChange.md","sourceDirName":"Events","slug":"/Events/onPageChange","permalink":"/docs/es/Events/onPageChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onPageChange","title":"On Page Change"},"sidebar":"docs","previous":{"title":"On Outside Call","permalink":"/docs/es/Events/onOutsideCall"},"next":{"title":"On Plug in Area","permalink":"/docs/es/Events/onPlugInArea"}}'),o=a("785893"),s=a("250065");let i={id:"onPageChange",title:"On Page Change"},r=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Puede ser llamado por"}),(0,o.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"56"}),(0,o.jsx)(n.td,{children:"Formulario"}),(0,o.jsx)(n.td,{children:"Se cambia la p\xe1gina actual del formulario"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Este evento s\xf3lo est\xe1 disponible a nivel del formulario (se llama en el m\xe9todo formulario). Se genera cada vez que la p\xe1gina actual del formulario cambia (tras una llamada al comando ",(0,o.jsx)(n.code,{children:"FORM GOTO PAGE"})," o una acci\xf3n de navegaci\xf3n est\xe1ndar)."]}),"\n",(0,o.jsxs)(n.p,{children:["Note que se genera despu\xe9s de que la p\xe1gina est\xe9 completamente cargada, es decir, una vez que todos los objetos que contiene est\xe1n inicializados, incluyendo ",(0,o.jsx)(n.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xe1reas web"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["La \xfanica excepci\xf3n son las \xe1reas 4D View Pro, para las que hay que llamar al evento espec\xedfico ",(0,o.jsx)(n.a,{href:"/docs/es/Events/onVpReady",children:"On VP Ready"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El evento ",(0,o.jsx)(n.code,{children:"On Page Change"})," es \xfatil para ejecutar c\xf3digo que requiere que todos los objetos sean previamente inicializados. Tambi\xe9n se puede utilizar para optimizar la aplicaci\xf3n ejecutando el c\xf3digo (por ejemplo, una b\xfasqueda) s\xf3lo despu\xe9s de que se muestre una p\xe1gina espec\xedfica del formulario y no tan pronto como se cargue la p\xe1gina 1. Si el usuario no va a esta p\xe1gina, el c\xf3digo no se ejecuta."]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var t=a(667294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);