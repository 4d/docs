"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97181"],{670718:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/close-window","title":"CLOSE WINDOW","description":"CLOSE WINDOW {( ventana )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/close-window.md","sourceDirName":"commands-legacy","slug":"/commands/close-window","permalink":"/docs/es/20-R7/commands/close-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"close-window","title":"CLOSE WINDOW","slug":"/commands/close-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Windows","permalink":"/docs/es/20-R7/category/windows"},"next":{"title":"CONVERT COORDINATES","permalink":"/docs/es/20-R7/commands/convert-coordinates"}}'),s=a("785893"),r=a("250065");let i={id:"close-window",title:"CLOSE WINDOW",slug:"/commands/close-window",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLOSE WINDOW"})," {( ",(0,s.jsx)(n.em,{children:"ventana"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ventana"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia, o Ventana del primer plano del proceso, si este par\xe1metro se omite"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["CLOSE WINDOW cierra la ventana activa abierta por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-window",title:"Open window",children:"Open window"})," u ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-form-window",title:"Open form window",children:"Open form window"})," en el proceso actual. CLOSE WINDOW no hace nada si no hay una ventana personalizada abierta; no cierra las ventanas sistema. CLOSE WINDOW tampoco tiene efecto si se llama mientras que un formulario est\xe9 activo en la ventana. Debe llamar CLOSE WINDOW cuando haya terminado de utilizar una ventana abierta por ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-window",title:"Open window",children:"Open window"})," u Open form window."]}),"\n",(0,s.jsxs)(n.p,{children:["Es in\xfatil pasar un n\xfamero a CLOSE WINDOW cuando lo utiliza para cerrar las ventanas abiertas por ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-window",title:"Open window",children:"Open window"})," u Open form window, ya que CLOSE WINDOW siempre cerrar\xe1 la \xfaltima ventana creada por uno de estos comandos*.* Si pasa un n\xfamero de referencia de ventana externa en el par\xe1metro ",(0,s.jsx)(n.em,{children:"extWindowRef"}),", CLOSE WINDOW cierra la ventana externa especificada. Para mayor informaci\xf3n sobre ventanas externas, consulte la funci\xf3n ",(0,s.jsx)(n.em,{children:"Open external window"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo abre una ventana formulario y crea nuevos registros con el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/add-record",children:"ADD RECORD"}),". Una vez a\xf1adidos los registros, la ventana se cierra con ",(0,s.jsx)(n.strong,{children:"CLOSE WINDOW"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Employees];"Entry")\n\xa0$winRef:=Open form window([Employees];"Entry")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Employees])\xa0//A\xf1adir un nuevo registro de empleado\n\xa0Until(OK=0)\xa0//Bucle hasta que el usuario cancela\n\xa0CLOSE WINDOW\xa0//Cierre de la ventana\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-form-window",children:"Open form window"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-window",children:"Open window"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"154"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return i}});var o=a(667294);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);