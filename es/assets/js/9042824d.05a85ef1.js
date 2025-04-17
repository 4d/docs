"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31686"],{958643:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/close-window","title":"CLOSE WINDOW","description":"CLOSE WINDOW {( ventana )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/close-window.md","sourceDirName":"commands-legacy","slug":"/commands/close-window","permalink":"/docs/es/commands/close-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-window.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"close-window","title":"CLOSE WINDOW","slug":"/commands/close-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Windows","permalink":"/docs/es/commands/theme/Windows"},"next":{"title":"CONVERT COORDINATES","permalink":"/docs/es/commands/convert-coordinates"}}'),o=s("785893"),r=s("250065");let i={id:"close-window",title:"CLOSE WINDOW",slug:"/commands/close-window",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," {( ",(0,o.jsx)(n.em,{children:"ventana"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ventana"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia, o Ventana del primer plano del proceso, si este par\xe1metro se omite"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["CLOSE WINDOW cierra la ventana activa abierta por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",title:"Open window",children:"Open window"})," u ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-form-window",title:"Open form window",children:"Open form window"})," en el proceso actual. CLOSE WINDOW no hace nada si no hay una ventana personalizada abierta; no cierra las ventanas sistema. CLOSE WINDOW tampoco tiene efecto si se llama mientras que un formulario est\xe9 activo en la ventana. Debe llamar CLOSE WINDOW cuando haya terminado de utilizar una ventana abierta por ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",title:"Open window",children:"Open window"})," u Open form window."]}),"\n",(0,o.jsxs)(n.p,{children:["Es in\xfatil pasar un n\xfamero a CLOSE WINDOW cuando lo utiliza para cerrar las ventanas abiertas por ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",title:"Open window",children:"Open window"})," u Open form window, ya que CLOSE WINDOW siempre cerrar\xe1 la \xfaltima ventana creada por uno de estos comandos*.* Si pasa un n\xfamero de referencia de ventana externa en el par\xe1metro ",(0,o.jsx)(n.em,{children:"extWindowRef"}),", CLOSE WINDOW cierra la ventana externa especificada. Para mayor informaci\xf3n sobre ventanas externas, consulte la funci\xf3n ",(0,o.jsx)(n.em,{children:"Open external window"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo abre una ventana formulario y crea nuevos registros con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"}),". Una vez a\xf1adidos los registros, la ventana se cierra con ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Employees];"Entry")\n\xa0$winRef:=Open form window([Employees];"Entry")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Employees])\xa0//A\xf1adir un nuevo registro de empleado\n\xa0Until(OK=0)\xa0//Bucle hasta que el usuario cancela\n\xa0CLOSE WINDOW\xa0//Cierre de la ventana\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/open-form-window",children:"Open form window"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",children:"Open window"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"154"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var a=s(667294);let o={},r=a.createContext(o);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);