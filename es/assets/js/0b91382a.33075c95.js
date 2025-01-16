"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54990"],{911405:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>s});var t=JSON.parse('{"id":"commands-legacy/append-document","title":"Append document","description":"Append document ( doc {; tipo} ) : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-document.md","sourceDirName":"commands-legacy","slug":"/commands/append-document","permalink":"/docs/es/20-R7/commands/append-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"append-document","title":"Append document","slug":"/commands/append-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"System Documents","permalink":"/docs/es/20-R7/category/system-documents"},"next":{"title":"CLOSE DOCUMENT","permalink":"/docs/es/20-R7/commands/close-document"}}'),o=d("785893"),c=d("250065");let r={id:"append-document",title:"Append document",slug:"/commands/append-document",displayed_sidebar:"docs"},s=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Append document"})," ( ",(0,o.jsx)(n.em,{children:"doc"})," {; ",(0,o.jsx)(n.em,{children:"tipo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doc"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del documento o Ruta de acceso completa al documento o Cadena vac\xeda para mostrar la caja de di\xe1logo est\xe1ndar de apertura de archivos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tipo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'Lista de tipos de documentos a filtrar o "*" para no filtrar los documentos'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia del documento"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando Append document hace lo mismo que ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",title:"Open document",children:"Open document"}),": permite abrir un documento en disco."]}),"\n",(0,o.jsxs)(n.p,{children:["La \xfanica diferencia es que Append document define la ubicaci\xf3n del archivo al final del documento mientras que ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",title:"Open document",children:"Open document"})," lo hace al principio."]}),"\n",(0,o.jsx)(n.p,{children:"Para mayor informaci\xf3n consulte la descripci\xf3n del comando Open document."}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo abre un documento existente llamado Nota, a\xf1ade la cadena \u201Cy hasta pronto\u201D seguida por un retorno de carro al final del documento, y cierra el documento. Si el documento ya contiene la cadena \u201CAdi\xf3s\u201D, el documento contendr\xe1 ahora la cadena \u201CAdi\xf3s y hasta pronto\u201D, seguido por un retorno de carro:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDocRef : Time\n\xa0vhDocRef:=Append document("Nota.txt")\xa0// Abrir el documento Nota\n\xa0SEND PACKET(vhDocRef;" y hasta pronto"+Char(13))\xa0// A\xf1adir la cadena\n\xa0CLOSE DOCUMENT(vhDocRef)\xa0// Cerrar el documento\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",children:"Create document"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",children:"Open document"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"265"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return s},a:function(){return r}});var t=d(667294);let o={},c=t.createContext(o);function r(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);