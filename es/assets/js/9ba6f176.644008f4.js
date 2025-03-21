"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52808"],{615762:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>t,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/expand-blob","title":"EXPAND BLOB","description":"EXPAND BLOB ( BLOB )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/expand-blob.md","sourceDirName":"commands-legacy","slug":"/commands/expand-blob","permalink":"/docs/es/20-R7/commands/expand-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexpand-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"expand-blob","title":"EXPAND BLOB","slug":"/commands/expand-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENCRYPT BLOB","permalink":"/docs/es/20-R7/commands/encrypt-blob"},"next":{"title":"INSERT IN BLOB","permalink":"/docs/es/20-R7/commands/insert-in-blob"}}'),i=o("785893"),d=o("250065");let l={id:"expand-blob",title:"EXPAND BLOB",slug:"/commands/expand-blob",displayed_sidebar:"docs"},r=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EXPAND BLOB"})," ( ",(0,i.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"BLOB a descomprimir"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando EXPAND BLOB descomprime el BLOB ",(0,i.jsx)(n.em,{children:"blob"})," que fue previamente comprimido utilizando el comando COMPRESS BLOB."]}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s de llamar el comando, la variable OK toma el valor 1 si el BLOB ha sido descomprimido. Si no pudo realizar la expansi\xf3n, la variable OK toma el valor 0."}),"\n",(0,i.jsxs)(n.p,{children:["Si la expansi\xf3n no se pudo realizar por falta de memoria, no se genera un error y el m\xe9todo reasume su ejecuci\xf3n.",(0,i.jsx)(n.br,{}),"\nEn otros casos, (el BLOB no ha sido comprimido o est\xe1 da\xf1ado), se genera el error -10600. Este error puede interceptarse utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para verificar si un BLOB ha sido comprimido, utilice el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-properties",title:"BLOB PROPERTIES",children:"BLOB PROPERTIES"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["Este ejemplo prueba si el BLOB ",(0,i.jsx)(n.em,{children:"vxMiBlob"})," est\xe1 comprimido, si es as\xed lo descomprime:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTama\xf1oExpandido;$vlTama\xf1oActual)\n\xa0If($vlComprimido#Is not compressed)\n\xa0\xa0\xa0\xa0EXPAND BLOB(vxMiBlob)\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Este ejemplo le permite seleccionar un documento y descomprimirlo, si est\xe1 comprimido:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB PROPERTIES(vxBlob;$vlComprimido;$vlTama\xf1oExpandido;$vlTama\xf1oActual)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlComprimido#Is not compressed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXPAND BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"La variable OK toma el valor 1 si el BLOB ha sido descomprimido con \xe9xito, de lo contrario toma el valor 0."}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/compress-blob",children:"COMPRESS BLOB"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"535"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return l}});var s=o(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);