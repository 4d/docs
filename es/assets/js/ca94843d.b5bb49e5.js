"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78954"],{658342:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/modify-selection","title":"MODIFY SELECTION","description":"MODIFY SELECTION ( {; modoSelecci\xf3n}{; entradaList}{; }{; } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modify-selection.md","sourceDirName":"commands-legacy","slug":"/commands/modify-selection","permalink":"/docs/es/20-R7/commands/modify-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modify-selection","title":"MODIFY SELECTION","slug":"/commands/modify-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LAST RECORD","permalink":"/docs/es/20-R7/commands/last-record"},"next":{"title":"NEXT RECORD","permalink":"/docs/es/20-R7/commands/next-record"}}'),d=s("785893"),i=s("250065");let o={id:"modify-selection",title:"MODIFY SELECTION",slug:"/commands/modify-selection",displayed_sidebar:"docs"},t=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"MODIFY SELECTION"})," ( {",(0,d.jsx)(n.em,{children:"tabla"}),"}{; ",(0,d.jsx)(n.em,{children:"modoSelecci\xf3n"}),"}{; ",(0,d.jsx)(n.em,{children:"entradaList"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla a mostrar y modificar o Tabla por defecto, si se omite"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modoSelecci\xf3n"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Modo de selecci\xf3n"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"entradaList"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Autorizar entrada en lista"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Utilizar formulario de salida para un s\xf3lo registro y ocultar las barras de desplazamiento en el formulario de     entrada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Mostrar las barras de desplazamiento en el formulario de entrada (anula la segunda opci\xf3n del primer par\xe1metro *)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["MODIFY SELECTION es casi id\xe9ntico al comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"}),". Consulte la descripci\xf3n del comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"})," para una descripci\xf3n detallada. Las diferencias entre los dos comandos son:"]}),"\n",(0,d.jsxs)(n.p,{children:["1. ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"}),' y MODIFY SELECTION permite mostrar los registros de la selecci\xf3n actual en modo listado o en el formulario de entrada al hacer doble clic en un registro. Utilizando MODIFY SELECTION, tambi\xe9n puede modificar los campos del registro en el formulario de entrada cuando hace doble clic en el registro, (si no est\xe1 siendo utilizado por otro proceso o usuario) o en modo "Entrada en lista" (si est\xe1 autorizado).']}),"\n",(0,d.jsxs)(n.p,{children:["2. ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"})," carga los registros en modo s\xf3lo lectura en el proceso actual, lo cual significa que no est\xe1n bloqueados para escritura en los otros procesos. MODIFY SELECTION coloca todos los registros de la selecci\xf3n en modo lectura-escritura, lo que significa que son bloqueados autom\xe1ticamente para escritura en otros procesos. MODIFY SELECTION libera los registros cuando termina su ejecuci\xf3n."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Conjuntos"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-selection",children:"DISPLAY SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-event-code",children:"Form event code"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"204"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var r=s(667294);let d={},i=r.createContext(d);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);