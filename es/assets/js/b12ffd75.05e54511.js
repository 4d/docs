"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80422"],{743102:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/close-document","title":"CLOSE DOCUMENT","description":"CLOSE DOCUMENT ( docRef )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/close-document.md","sourceDirName":"commands-legacy","slug":"/commands/close-document","permalink":"/docs/es/commands/close-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"close-document","title":"CLOSE DOCUMENT","slug":"/commands/close-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Append document","permalink":"/docs/es/commands/append-document"},"next":{"title":"Convert path POSIX to system","permalink":"/docs/es/commands/convert-path-posix-to-system"}}'),c=d("785893"),o=d("250065");let t={id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},r=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ( ",(0,c.jsx)(n.em,{children:"docRef"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"docRef"}),(0,c.jsx)(n.td,{children:"Time"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"N\xfamero de referencia del documento"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["CLOSE DOCUMENT cierra el documento especificado por ",(0,c.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Cerrar un documento es la \xfanica forma de asegurar que los datos escritos en el archivo sean guardados. Debe cerrar todos los documentos abiertos por los comandos ",(0,c.jsx)(n.a,{href:"/docs/es/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,c.jsx)(n.a,{href:"/docs/es/commands/create-document",title:"Create document",children:"Create document"})," o ",(0,c.jsx)(n.a,{href:"/docs/es/commands/append-document",title:"Append document",children:"Append document"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"El siguiente ejemplo permite al usuario crear un nuevo documento, escribe la cadena \u201CHola\u201D y cierra el documento:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDocRef : Time\n\xa0vhDocRef:=Create document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDocRef;"Hola")\xa0// Escribe una palabra en el documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDocRef)\xa0// Cierra el documento\n\xa0End if\n'})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/append-document",children:"Append document"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/create-document",children:"Create document"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})]}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"267"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return t}});var s=d(667294);let c={},o=s.createContext(c);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);