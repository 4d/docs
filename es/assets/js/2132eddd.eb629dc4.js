"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39264"],{682481:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/real-to-blob","title":"REAL TO BLOB","description":"REAL TO BLOB ( real ; BLOB ; formatoReal {; offset | *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/real-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/real-to-blob","permalink":"/docs/es/commands/real-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freal-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"real-to-blob","title":"REAL TO BLOB","slug":"/commands/real-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT TO BLOB","permalink":"/docs/es/commands/longint-to-blob"},"next":{"title":"SET BLOB SIZE","permalink":"/docs/es/commands/set-blob-size"}}'),r=l("785893"),a=l("250065");let o={id:"real-to-blob",title:"REAL TO BLOB",slug:"/commands/real-to-blob",displayed_sidebar:"docs"},d=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota",id:"nota",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REAL TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"real"})," ; ",(0,r.jsx)(n.em,{children:"BLOB"})," ; ",(0,r.jsx)(n.em,{children:"formatoReal"})," {; offset | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"real"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de tipo real a escribir en el BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB a recibir el valor Real"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatoReal"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 Formato real nativo 1 Formato real extendido 2  Formato real doble Macintosh 3  Formato real doble Windows"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset | *"}),(0,r.jsx)(n.td,{children:"Variable, Operador"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset en el BLOB (expresado en bytes) o * para a\xf1adir el valor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Nuevo offset despu\xe9s de la escritura si se omite *"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando REAL TO BLOB escribe el valor de tipo Real (o num\xe9rico) ",(0,r.jsx)(n.em,{children:"real"})," en el BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"formatoReal"}),' fija el formato interno y el orden de los bytes ("byte ordering") del valor de tipo Real a escribir. Usted pasa uno de las siguientes constantes predefinidas por 4D:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Native real format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Extended real format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Macintosh double real format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PC double real format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota sobre la independencia de plataforma:"})," si intercambia los BLOBs entre las plataformas Macintosh y PC, es su decisi\xf3n administrar los temas de formatos reales y byte swapping cuando utilice este comando."]}),"\n",(0,r.jsxs)(n.p,{children:["Si especifica el par\xe1metro opcional *, el valor real se adjunta al BLOB; el tama\xf1o del BLOB se extiende en consecuencia. Utilizando el par\xe1metro * opcional, usted puede almacenar secuencialmente cualquier n\xfamero de valores de tipo ",(0,r.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Entero"}),", ",(0,r.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),", Real o ",(0,r.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"})," (ver otros comandos BLOB) en un BLOB, siempre y cuando tenga memoria disponible."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no especifica el par\xe1metro opcional * ni la variable en el par\xe1metro ",(0,r.jsx)(n.em,{children:"offset"}),", el valor Real se almacena al comienzo del BLOB, reemplazando su contenido anterior; el tama\xf1o del BLOB se ajusta en consecuencia."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa la variable en el par\xe1metro ",(0,r.jsx)(n.em,{children:"offset"}),", el valor Real se escribe en el offset (comenzando desde cero) en el BLOB. Sin importar donde escribe el valor Real, el tama\xf1o del BLOB aumenta de acuerdo a la ubicaci\xf3n pasada (m\xe1s hasta 8 \xf3 10 bytes, si es necesario). Los bytes redefinidos, diferentes a los que est\xe1 escribiendo, se inicializan en cero."]}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de llamar el comando, se devuelve la variable del par\xe1metro, incrementada en el n\xfamero de bytes que hayan sido escritors. Por lo tanto, puede reutilizar la misma variable con otro comando de escritura de BLOB para escribir otro valor."}),"\n",(0,r.jsx)(n.h5,{id:"nota",children:"Nota"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidad"}),": como este comando altera el blob pasado como par\xe1metro, no soporta objetos blob (tipo 4D.Blob). Ver ",(0,r.jsx)(n.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Extended real format)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," is 10 bytes"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Native real format)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 8 bytes"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0INTEGER TO BLOB(vrValor;vxBlob;Windows Double real format)\xa0// o Formato real doble Macintosh\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 8 bytes"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0vlOffset:=50\n\xa0REAL TO BLOB(vrValor;vxBlob;Windows Double real format;vlOffset)\xa0// o Formato real doble Macintosh\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 100 bytes"]}),"\n",(0,r.jsx)(n.li,{children:"En todas las plataformas, el valor real se almacena en los bytes #50 a #57"}),"\n",(0,r.jsx)(n.li,{children:"Los otros bytes del BLOB se dejan sin cambiar"}),"\n",(0,r.jsxs)(n.li,{children:["La variable ",(0,r.jsx)(n.em,{children:"vlOffset"})," se ha incrementado en 8 (y ahora es igual a 58)"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Macintosh double real format)\xa0// o Formato real doble Windows\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 8 bytes"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0REAL TO BLOB(vrValor;vxBlob;Extended real format;*)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En todas las plataformas, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 110 bytes"]}),"\n",(0,r.jsx)(n.li,{children:"En todas las plataformas, el valor real se almacena en los bytes #100 a #109"}),"\n",(0,r.jsx)(n.li,{children:"Los otros bytes del BLOB no son modificados"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"552"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return o}});var s=l(667294);let r={},a=s.createContext(r);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);