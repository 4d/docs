"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73709"],{516674:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>o,toc:()=>t,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/receive-variable","title":"RECEIVE VARIABLE","description":"RECEIVE VARIABLE ( variable )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-variable.md","sourceDirName":"commands-legacy","slug":"/commands/receive-variable","permalink":"/docs/es/commands/receive-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-variable","title":"RECEIVE VARIABLE","slug":"/commands/receive-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE RECORD","permalink":"/docs/es/commands/receive-record"},"next":{"title":"SEND PACKET","permalink":"/docs/es/commands/send-packet"}}'),a=r("785893"),i=r("250065");let d={id:"receive-variable",title:"RECEIVE VARIABLE",slug:"/commands/receive-variable",displayed_sidebar:"docs"},c=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"RECEIVE VARIABLE"})," ( ",(0,a.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Variable en la cual recibir"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["RECEIVE VARIABLE recibe a ",(0,a.jsx)(n.em,{children:"variable"}),", la cual fue enviada previamente por ",(0,a.jsx)(n.a,{href:"/docs/es/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"})," desde el documento o puerto serial previamente abierto por ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"En modo interpretado, si la variable no existe antes del llamado de RECEIVE VARIABLE, la variable se crea, digita y asigna de acuerdo a lo que se ha recibido. En modo compilado, la variable debe ser del mismo tipo de la que se recibe. En ambos casos, el contenido de la variable se reemplaza con el de la variable recibida."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(n.p,{children:["1. Si recibe una variable desde un documento utilizando este comando, el documento debe haber sido abierto utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". No puede utilizar RECEIVE VARIABLE con un documento abierto con ",(0,a.jsx)(n.a,{href:"/docs/es/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,a.jsx)(n.a,{href:"/docs/es/commands/append-document",title:"Append document",children:"Append document"})," o ",(0,a.jsx)(n.a,{href:"/docs/es/commands/create-document",title:"Create document",children:"Create document"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["2. Este comando no soporta variables de tipo array. Si quiere enviar y recibir arrays desde un documento o un puerto serial, utilice los ",(0,a.jsx)(n.em,{children:"Comandos BLOB"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["3. Durante la ejecuci\xf3n de RECEIVE VARIABLE, el usuario puede interrumpir la recepci\xf3n presionando Ctrl-Alt-May\xfas (Windows) o Comando-Opci\xf3n-May\xfas (Macintosh). Esta interrupci\xf3n genera un error -9994 que puede interceptar con un m\xe9todo instalado por el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),". Generalmente, s\xf3lo necesita administrar la interrupci\xf3n de una recepci\xf3n mientras la comunicaci\xf3n sobre un puerto serial."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si se recibe la variable. De lo contrario, la variable sistema OK toma el valor 0."}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/receive-record",children:"RECEIVE RECORD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/send-record",children:"SEND RECORD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"81"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let a={},i=s.createContext(a);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);