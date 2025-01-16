"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7636"],{731941:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>a,assets:()=>l,toc:()=>i,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/create-folder","title":"CREATE FOLDER","description":"CREATE FOLDER ( rutaCarpeta {; Operador} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-folder.md","sourceDirName":"commands-legacy","slug":"/commands/create-folder","permalink":"/docs/es/20-R7/commands/create-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-folder","title":"CREATE FOLDER","slug":"/commands/create-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create document","permalink":"/docs/es/20-R7/commands/create-document"},"next":{"title":"DELETE DOCUMENT","permalink":"/docs/es/20-R7/commands/delete-document"}}'),s=r("785893"),c=r("250065");let d={id:"create-folder",title:"CREATE FOLDER",slug:"/commands/create-folder",displayed_sidebar:"docs"},t=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CREATE FOLDER"})," ( ",(0,s.jsx)(n.em,{children:"rutaCarpeta"})," {; ",(0,s.jsx)(n.em,{children:"Operador"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rutaCarpeta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta de acceso a la nueva carpeta a crear"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Crear carpeta jer\xe1rquica"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"CREATE FOLDER"})," crea una carpeta en funci\xf3n de la ruta de acceso que se pasa en ",(0,s.jsx)(n.em,{children:"rutaCarpeta"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un nombre en ",(0,s.jsx)(n.em,{children:"rutaCarpeta"}),", la carpeta se crea en la carpeta de la base."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rutaCarpeta"}),", tambi\xe9n puede pasar una jerarqu\xeda de carpetas a partir de la ra\xedz del volumen o de la carpeta de la base (en este caso, la cadena debe terminar con sun separador de carpeta).",(0,s.jsx)(n.br,{}),"\nSi omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"}),", se genera un error y ninguna carpeta se crea si ninguna de las carpetas intermediarias existe.",(0,s.jsx)(n.br,{}),"\nSi pasa el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"}),", ",(0,s.jsx)(n.strong,{children:"CREATE FOLDER"})," recrea la jerarqu\xeda de carpetas si es necesaria y no se genera ning\xfan error. En este caso, puede pasar una ruta de acceso de documento en ",(0,s.jsx)(n.em,{children:"rutaCarpeta"}),". Entonces se ignora el nombre del documento pero la jerarqu\xeda de carpetas especificada en ",(0,s.jsx)(n.em,{children:"rutaCarpeta"})," se crea recursivamente."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo crea la carpeta \u201CArchivos\u201D en la carpeta de la base:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Archivos")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo crea la carpeta Archivos en la carpeta de la base, luego crea las subcarpetas \u201CEnero\u201D y \u201CFebrero\u201D:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Archivos")\n\xa0CREATE FOLDER("Archivos\\\\Enero")\n\xa0CREATE FOLDER("Archivos\\\\Febrero")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo crea la carpeta \u201CArchivos\u201D en la ra\xedz del volumen C:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archivos")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:'Creaci\xf3n de la jerarqu\xeda de carpetas "C:\\Archives\\2011\\Enero\\":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archives\\\\2011\\\\Enero\\\\";*)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:'Creaci\xf3n de la subcarpeta "\\Febrero\\" en la carpeta existente "C:\\Archives\\":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archives\\\\2011\\\\Febrero\\\\Doc.txt";*)\n\xa0\xa0// el archivo "Doc.txt" se ignora\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/folder-list",children:"FOLDER LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/test-path-name",children:"Test path name"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"475"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var a=r(667294);let s={},c=a.createContext(s);function d(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);