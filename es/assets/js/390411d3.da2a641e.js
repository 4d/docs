"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45216"],{928580:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/get-resource-properties","title":"Get resource properties","description":"Get resource properties ( resTipo ; resNum {; resArchivo} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-resource-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource-properties","permalink":"/docs/es/commands/get-resource-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-resource-properties","title":"Get resource properties","slug":"/commands/get-resource-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource name","permalink":"/docs/es/commands/get-resource-name"},"next":{"title":"Get string resource","permalink":"/docs/es/commands/get-string-resource"}}'),t=s("785893"),i=s("250065");let o={id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let r={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource properties"})," ( ",(0,t.jsx)(r.em,{children:"resTipo"})," ; ",(0,t.jsx)(r.em,{children:"resNum"})," {; ",(0,t.jsx)(r.em,{children:"resArchivo"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe1metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resTipo"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Tipo de recurso (4 caracteres)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de referencia del recurso (ID)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resArchivo"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Atributos del recurso"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El comando ",(0,t.jsx)(r.strong,{children:"Get resource properties"})," devuelve los atributos del recurso cuyo tipo se pasa en ",(0,t.jsx)(r.em,{children:"resTipo"})," y cuyo n\xfamero de identificaci\xf3n se pasa en ",(0,t.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,t.jsx)(r.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,t.jsx)(r.em,{children:"resArchivo"}),", el archivo se busca en los archivos de recursos abiertos."]}),"\n",(0,t.jsxs)(r.p,{children:["Si el archivo de recursos no existe, ",(0,t.jsx)(r.strong,{children:"Get resource properties"})," devuelve ",(0,t.jsx)(r.em,{children:"0"})," (cero) y la variable OK toma el valor ",(0,t.jsx)(r.em,{children:"0"})," (cero)."]}),"\n",(0,t.jsxs)(r.p,{children:["El valor num\xe9rico devuelto por ",(0,t.jsx)(r.strong,{children:"Get resource properties"})," debe considerable como un valor binario cuyos bits tienen un significado especial."]}),"\n",(0,t.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(r.p,{children:["Ver el ejemplo del comando ",(0,t.jsx)(r.a,{href:"/docs/es/commands/get-resource-name",children:"Get resource name"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(r.p,{children:"La variable sistema OK toma el valor 0 si el recurso no existe, de lo contrario toma el valor 1."}),"\n",(0,t.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero de comando"}),(0,t.jsx)(r.td,{children:"515"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Hilo seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifica variables"}),(0,t.jsx)(r.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return o}});var n=s(667294);let t={},i=n.createContext(t);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);