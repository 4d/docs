"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92123"],{290365:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/load-variables","title":"LOAD VARIABLES","description":"LOAD VARIABLES ( doc ; variable {; variable2 ; ... ; variableN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/load-variables.md","sourceDirName":"commands-legacy","slug":"/commands/load-variables","permalink":"/docs/es/20-R8/commands/load-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"load-variables","title":"LOAD VARIABLES","slug":"/commands/load-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR VARIABLE","permalink":"/docs/es/20-R8/commands/clear-variable"},"next":{"title":"SAVE VARIABLES","permalink":"/docs/es/20-R8/commands/save-variables"}}'),r=s("785893"),d=s("250065");let i={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOAD VARIABLES"})," ( ",(0,r.jsx)(n.em,{children:"doc"})," ; ",(0,r.jsx)(n.em,{children:"variable"})," {; ",(0,r.jsx)(n.em,{children:"variable2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"doc"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Documento que contiene el o las variables 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variable"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Variables a recibir los valores"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando LOAD VARIABLES carga una o varias variables del documento especificado por ",(0,r.jsx)(n.em,{children:"documento"}),". El documento debe haberse creado utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/save-variables",title:"SAVE VARIABLES",children:"SAVE VARIABLES"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Las variables ",(0,r.jsx)(n.em,{children:"variable"}),", ",(0,r.jsx)(n.em,{children:"variable2"}),"...",(0,r.jsx)(n.em,{children:"variableN"})," son creadas; si ya existen, se sobrescriben."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,r.jsx)(n.em,{children:"documento"}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario seleccionar el documento a abrir. Si se elige un documento, la variable sistema Document contendr\xe1 el nombre del documento."]}),"\n",(0,r.jsx)(n.p,{children:"En bases de datos compiladas, cada variable debe ser del mismo tipo que las cargadas del disco."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," este comando no soporta variables de tipo array. Para variables de tipo array utilice los comandos del tema BLOB."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo carga tres variables de un documento llamado PrefsUsuario:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si las variables se cargan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"74"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var a=s(667294);let r={},d=a.createContext(r);function i(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);