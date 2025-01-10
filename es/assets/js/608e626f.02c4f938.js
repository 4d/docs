"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15472"],{996105:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/save-variables","title":"SAVE VARIABLES","description":"SAVE VARIABLES ( doc ; variable {; variable2 ; ... ; variableN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/save-variables.md","sourceDirName":"commands-legacy","slug":"/commands/save-variables","permalink":"/docs/es/commands/save-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"save-variables","title":"SAVE VARIABLES","slug":"/commands/save-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOAD VARIABLES","permalink":"/docs/es/commands/load-variables"},"next":{"title":"Web Area","permalink":"/docs/es/category/web-area"}}'),r=a("785893"),i=a("250065");let d={id:"save-variables",title:"SAVE VARIABLES",slug:"/commands/save-variables",displayed_sidebar:"docs"},l=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAVE VARIABLES"})," ( ",(0,r.jsx)(n.em,{children:"doc"})," ; ",(0,r.jsx)(n.em,{children:"variable"})," {; ",(0,r.jsx)(n.em,{children:"variable2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"doc"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del documento en el cual guardar las variables"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variable"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Variables a guardar"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando SAVE VARIABLES guarda una o varias variables en el documento cuyo nombre se pasa en l par\xe1metro ",(0,r.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Las variables no deben ser del mismo tipo, pero tienen que ser de tipo Texto, Num\xe9rico, Fecha, Hora, Booleano o Imagen."}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,r.jsx)(n.em,{children:"documento"}),", aparece una caja de di\xe1logo est\xe1ndar de guardar archivos; el usuario puede entonces elegir el documento a crear. En este caso, la variable sistema Document toma el nombre del documento si se ha creado."]}),"\n",(0,r.jsx)(n.p,{children:"Si las variables se guardan correctamente, la variable OK toma el valor 1. Si no, OK toma el valor 0."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," cuando escribe variables en documentos con SAVE VARIABLES, 4D utiliza un formato de datos interno. Puede recuperar las variables \xfanicamente con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/load-variables",title:"LOAD VARIABLES",children:"LOAD VARIABLES"}),". No utilice ",(0,r.jsx)(n.a,{href:"/docs/es/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"})," para leer un documento creado por SAVE VARIABLES."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," este comando no soporta variables de tipo array. Para estas variables utilice los comandos del tema BLOB."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo guarda tres variables en un archivo llamado PrefsUsuario:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SAVE VARIABLES(" PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si las variables se guardan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/load-variables",children:"LOAD VARIABLES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Variables sistema"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"75"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return d}});var s=a(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);