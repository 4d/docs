"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81194"],{691637:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/blob-to-integer","title":"BLOB to integer","description":"BLOB to integer ( BLOB ; byteOrden {; offset} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-to-integer.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-integer","permalink":"/docs/es/commands/blob-to-integer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-integer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-integer","title":"BLOB to integer","slug":"/commands/blob-to-integer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO DOCUMENT","permalink":"/docs/es/commands/blob-to-document"},"next":{"title":"BLOB to list","permalink":"/docs/es/commands/blob-to-list"}}'),s=r("785893"),d=r("250065");let o={id:"blob-to-integer",title:"BLOB to integer",slug:"/commands/blob-to-integer",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLOB to integer"})," ( ",(0,s.jsx)(n.em,{children:"BLOB"})," ; ",(0,s.jsx)(n.em,{children:"byteOrden"})," {; ",(0,s.jsx)(n.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB del cual obtener el valor entero"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"byteOrden"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0 Orden de bytes nativo 1 Orden de bytes Macintosh 2 Orden de bytes PC"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Offset en el BLOB (expresado en bytes)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Nuevo offset despu\xe9s de la lectura"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor entero (2 bytes)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando BLOB to integer devuelve un valor entero (2 bytes) le\xeddo del BLOB ",(0,s.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"byteOrden"}),' fija el orden de los bytes ("byte ordering) del valor entero (2 bytes) a leer. Se pasa una de las siguientes constantes predefinidas por 4D:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Native byte ordering"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PC byte ordering"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota sobre la independencia de plataforma:"})," si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisi\xf3n administrar los temas de byte swapping cuando utilice este comando."]}),"\n",(0,s.jsxs)(n.p,{children:["Si especifica la variable del par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"offset"}),", el valor entero (2 bytes) se lee desde el offset (a partir de cero) del BLOB. Si no especifica la variable del par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"offset"}),", se leen los dos primeros bytes del BLOB."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," debe pasar un offset (en bytes) entre ",(0,s.jsx)(n.em,{children:"0"})," (cero) y el tama\xf1o del BLOB menos 2. De lo contrario se genera el error -111."]}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de llamar el comando, la variable se incrementa en el n\xfamero de bytes leido. Puede reutilizar esa misma variable con otro comando de lectura de BLOBs para leer otro valor."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo lee 20 valores enteros de un BLOB, a partir del offset 0x200:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viLoop;0;19)\n\xa0\xa0\xa0\xa0$viValor:=BLOB to integer(vxUnBlob;PC byte ordering;$vlOffset)\n\xa0\xa0// Hacer algo con $viValor\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"549"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);