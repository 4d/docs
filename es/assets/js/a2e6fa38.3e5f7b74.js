"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96759"],{97802:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>s});var r=JSON.parse('{"id":"commands-legacy/document-to-blob","title":"DOCUMENT TO BLOB","description":"DOCUMENT TO BLOB ( documento ; BLOB )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/document-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-blob","permalink":"/docs/es/commands/document-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"document-to-blob","title":"DOCUMENT TO BLOB","slug":"/commands/document-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM BLOB","permalink":"/docs/es/commands/delete-from-blob"},"next":{"title":"ENCRYPT BLOB","permalink":"/docs/es/commands/encrypt-blob"}}'),t=o("785893"),d=o("250065");let s={id:"document-to-blob",title:"DOCUMENT TO BLOB",slug:"/commands/document-to-blob",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Manejo de errores",id:"manejo-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOCUMENT TO BLOB"})," ( ",(0,t.jsx)(n.em,{children:"documento"})," ; ",(0,t.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documento"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del documento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2194"}),(0,t.jsx)(n.td,{children:"Campo o variable de tipo BLOB a recibir el documento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Contenido del documento"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOCUMENT TO BLOB"})," carga el contenido de ",(0,t.jsx)(n.em,{children:"documento"})," en ",(0,t.jsx)(n.em,{children:"blob"}),". Debe pasar el nombre de un documento existente que no est\xe9 abierto, de lo contrario se generar\xe1 un error. Para dejar que el usuario seleccione el documento a cargar en el BLOB, utilice el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})," y la variable sistema ",(0,t.jsx)(n.em,{children:"document"})," (ver ejemplo)."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted escribe un Sistema de informaci\xf3n que le permite guardar y buscar r\xe1pidamente documentos. En un formulario de entrada de datos, usted crea un bot\xf3n que le permite cargar un documento en un campo tipo BLOB. El m\xe9todo para este bot\xf3n puede ser:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef:=Open document("")\xa0// Seleccionar un documento\n\xa0If(OK=1)\xa0// Si un documento ha sido seleccionado\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// No necesitamos mantenerlo abierto\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;[SuTabla]SuCampoBLOB)\xa0// Cargar el documento\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Manejar error\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el documento se carga correctamente, de lo contrario OK toma el valor 0 y se genera un error."}),"\n",(0,t.jsx)(n.h4,{id:"manejo-de-errores",children:"Manejo de errores"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si trata de cargar (en un BLOB) un documento que no existe o que ya ha sido abierto por otro proceso o aplicaci\xf3n, se genera un error File Manager."}),"\n",(0,t.jsx)(n.li,{children:"Un error de E/S puede ocurrir si el documento est\xe1 bloqueado, si est\xe1 ubicado en un volumen bloqueado, o si hay un problema en la lectura del documento."}),"\n",(0,t.jsx)(n.li,{children:"Si no hay suficiente memoria para cargar el documento, se genera un error -108."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En todos los casos, puede interceptar el error utilizando un m\xe9todo de interrupci\xf3n ",(0,t.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return s}});var r=o(667294);let t={},d=r.createContext(t);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);