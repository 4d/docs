"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35220"],{72120:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/blob-to-text","title":"BLOB to text","description":"BLOB to text ( BLOB ; formatoTexto {; offset {; longitudTexto}} )  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/blob-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-text","permalink":"/docs/es/commands/blob-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-text.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"blob-to-text","title":"BLOB to text","slug":"/commands/blob-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to real","permalink":"/docs/es/commands/blob-to-real"},"next":{"title":"BLOB TO VARIABLE","permalink":"/docs/es/commands/blob-to-variable"}}'),s=t("785893"),o=t("250065");let d={id:"blob-to-text",title:"BLOB to text",slug:"/commands/blob-to-text",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLOB to text"})," ( ",(0,s.jsx)(n.em,{children:"BLOB"})," ; ",(0,s.jsx)(n.em,{children:"formatoTexto"})," {; ",(0,s.jsx)(n.em,{children:"offset"})," {; ",(0,s.jsx)(n.em,{children:"longitudTexto"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB del cual obtener el texto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatoTexto"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Formato y conjunto de caracteres de texto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Offset en el BLOB (expresado en bytes)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Nuevo offset despu\xe9s de la lectura"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"longitudTexto"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de caracteres a leer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor del texto"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando BLOB to text devuelve un valor de tipo Texto le\xeddo del BLOB ",(0,s.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"formatoTexto"}),' fija el formato interno y el conjunto de caracteres del valor de tipo Texto a leer. En las bases de datos creadas a partir de la versi\xf3n 11, 4D utiliza por defecto el conjunto de caracteres Unicode (UTF8) para la gesti\xf3n de textos. Por compatibilidad, este comando permite "forzar" la utilizaci\xf3n del conjunto de caracteres Mac Roman (conjunto de caracteres utilizado en las versiones anteriores de 4D). La elecci\xf3n del conjunto de caracteres se efect\xfaa v\xeda el par\xe1metro ',(0,s.jsx)(n.em,{children:"formatoTexto."})," Para hacer eso, pase una de las siguientes constantes (del tema ",(0,s.jsx)(n.em,{children:"BLOB"}),") en el par\xe1metro ",(0,s.jsx)(n.em,{children:"formatoTexto"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mac C string"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mac Pascal string"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mac text with length"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mac text without length"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UTF8 C string"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UTF8 text with length"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UTF8 text without length"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Las constantes "UTF8" s\xf3lo pueden ser utilizadas cuando la aplicaci\xf3n se ejecuta en modo Unicode.'}),"\n",(0,s.jsx)(n.li,{children:"La constante Mac Text with length no puede trabajar con textos de m\xe1s de 32 KB."}),"\n",(0,s.jsx)(n.li,{children:"Si quiere trabajar con conjuntos de caracteres diferentes de UTF8, utilice el comando Convert to text."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Para mayor informaci\xf3n sobre estas constantes y los formatos que representan, consulte la descripci\xf3n del comando TEXT TO BLOB."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Atenci\xf3n:"})," el n\xfamero de caracteres a leer se determina por el par\xe1metro ",(0,s.jsx)(n.em,{children:"formatoTexto"}),", EXCEPTO para el formato Text without length y UTF8 Text without length, para el cual usted DEBE especificar el n\xfamero de caracteres a leer en el par\xe1metro ",(0,s.jsx)(n.em,{children:"longitudTexto"}),". Para los otros formatos, ",(0,s.jsx)(n.em,{children:"longitudTexto"})," se ignora y usted puede omitirlo."]}),"\n",(0,s.jsxs)(n.p,{children:["Si especifica la variable del par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"offset"}),", el valor del texto se lee en el offset (a partir de cero) del BLOB. Si no especifica la variable del par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"offset"}),", se leen los primeros bytes del BLOB de acuerdo al valor pasado en ",(0,s.jsx)(n.em,{children:"textFormato"}),". Note que debe pasar la variable del par\xe1metro ",(0,s.jsx)(n.em,{children:"offset"})," cuando est\xe9 leyendo texto sin longitud."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," debe pasar un valor de offset entre ",(0,s.jsx)(n.em,{children:"0"})," (cero) y el tama\xf1o del BLOB menos el tama\xf1o del texto a leer. Si no lo hace, el resultado de la funci\xf3n es impredecible."]}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n del comando, la variable se incrementa en el n\xfamero de bytes le\xeddos. Por lo tanto, puede reutilizar la misma variable con otro comando de lectura de BLOBs para leer otro valor."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/convert-to-text",children:"Convert to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"555"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},o=r.createContext(s);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);