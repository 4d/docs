"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85912"],{746263:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/compress-blob","title":"COMPRESS BLOB","description":"COMPRESS BLOB ( BLOB {; compresion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/compress-blob.md","sourceDirName":"commands-legacy","slug":"/commands/compress-blob","permalink":"/docs/es/commands/compress-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompress-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compress-blob","title":"COMPRESS BLOB","slug":"/commands/compress-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO VARIABLE","permalink":"/docs/es/commands/blob-to-variable"},"next":{"title":"COPY BLOB","permalink":"/docs/es/commands/copy-blob"}}'),r=o("785893"),d=o("250065");let i={id:"compress-blob",title:"COMPRESS BLOB",slug:"/commands/compress-blob",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COMPRESS BLOB"})," ( ",(0,r.jsx)(n.em,{children:"BLOB"})," {; ",(0,r.jsx)(n.em,{children:"compresion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB a comprimir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compresion"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si no se omite: 1, compresi\xf3n m\xe1xima posible 2, velocidad de compresi\xf3n m\xe1xima"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"COMPRESS BLOB"})," comprime el BLOB ",(0,r.jsx)(n.em,{children:"blob"})," utilizando el algoritmo de compresi\xf3n interno de 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"compresion"})," le permite definir la forma en que la que el BLOB se comprimir\xe1. Pase en este par\xe1metro una de las siguientes constantes, ubicadas en el tema ",(0,r.jsx)(n.em,{children:"BLOB"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Compact compression mode"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Compresi\xf3n interna m\xe1s compacta (en detrimento de la velocidad a la cual la compresi\xf3n y descompresi\xf3n se efect\xfaan). M\xe9todo por defecto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fast compression mode"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Compresi\xf3n m\xe1s r\xe1pida en detrimento (y ser\xe1 descomprimido lo m\xe1s r\xe1pido posible), en detrimento de la tasa de compresi\xf3n (una vez comprimido, el BLOB ser\xe1 m\xe1s grande)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP best compression mode"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"Compresi\xf3n GZIP m\xe1s compacta (en detrimento de la velocidad a la cual la compresi\xf3n y decompresi\xf3n se efect\xfaan)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"-2"}),(0,r.jsx)(n.td,{children:"Compresi\xf3n/descompresi\xf3n GZIP m\xe1s r\xe1pida (en detrimento de la tasa de compresi\xf3n)."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa otro valor o si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"compresion"}),", se utiliza el m\xe9todo de compresi\xf3n 1(algoritmo interno compacto)."]}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de llamar este comando, la variable OK toma el valor 1 si el BLOB fue comprimido correctamente. Si la compresi\xf3n no se pudo realizar, la variable OK toma el valor 0. Si la compresi\xf3n no se pudo efectuar por falta de memoria o porque el tama\xf1o actual del blob es menor de 255 bytes, no se genera un error, y el m\xe9todo continua su ejecuci\xf3n."}),"\n",(0,r.jsxs)(n.p,{children:["En otros casos si el error es causado por un problema m\xe1s importante (el BLOB est\xe1 da\xf1ado), se genera el error -10600. Este error, puede ser interceptado con la ayuda de un m\xe9todo instalado por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de comprimir un BLOB, puede expandirlo utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/expand-blob",children:"EXPAND BLOB"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para detectar si un BLOB ha sido comprimido, utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-properties",children:"BLOB PROPERTIES"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," un BLOB comprimido continua siendo un BLOB, de manera que no hay nada que le impida modificar su contenido. Sin embargo, si lo modifica, el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/expand-blob",children:"EXPAND BLOB"})," no podr\xe1 descomprimir el BLOB correctamente."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Este ejemplo prueba si el BLOB ",(0,r.jsx)(n.em,{children:"vxMiBlob"})," est\xe1 comprimido, y si no lo est\xe1, lo comprime:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTama\xf1oExpandido;$vlTama\xf1oActual)\n\xa0If($vlComprimido=Is not compressed)\n\xa0\xa0\xa0\xa0COMPRESS BLOB(vxMiBlob)\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sin embargo observe, que si aplica COMPRESS BLOB a un BLOB que ya ha sido comprimido, el comando lo detecta y no hace nada."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo le permite seleccionar un documento y luego comprimirlo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0COMPRESS BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Env\xedo de datos HTTP brutos comprimidos en GZIP:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COMPRESS BLOB($blob;GZIP Best compression mode)\n\xa0var $vEncoding : Text\n\xa0$vEncoding:="Content-encoding: gzip"\n\xa0WEB SET HTTP HEADER($vEncoding)\n\xa0WEB SEND RAW DATA($blob ;*)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"La variable OK toma el valor 1 si el BLOB se comprime correctamente; de lo contrario, toma el valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/expand-blob",children:"EXPAND BLOB"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"534"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return i}});var s=o(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);