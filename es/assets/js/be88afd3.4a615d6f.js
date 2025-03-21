"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86151"],{208524:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/blob-to-document","title":"BLOB TO DOCUMENT","description":"BLOB TO DOCUMENT ( documento ; BLOB )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-to-document.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-document","permalink":"/docs/es/commands/blob-to-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-document","title":"BLOB TO DOCUMENT","slug":"/commands/blob-to-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB size","permalink":"/docs/es/commands/blob-size"},"next":{"title":"BLOB to integer","permalink":"/docs/es/commands/blob-to-integer"}}'),s=o("785893"),d=o("250065");let t={id:"blob-to-document",title:"BLOB TO DOCUMENT",slug:"/commands/blob-to-document",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Manejo de errores",id:"manejo-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLOB TO DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"documento"})," ; ",(0,s.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documento"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del documento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nuevo contenido del documento"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["BLOB TO DOCUMENT escribe los datos de ",(0,s.jsx)(n.em,{children:"documento"})," utilizando los datos almacenados en ",(0,s.jsx)(n.em,{children:"blob"}),". Puede pasar el nombre de un documento existente en ",(0,s.jsx)(n.em,{children:"documento"}),". Si el documento no existe, el comando lo crea. Si pasa el nombre de un documento existente, aseg\xfarese de que el documento no est\xe9 abierto, de lo contrario se generar\xe1 un error. Si quiere permitir que el usuario elija el documento, utilice los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})," o ",(0,s.jsx)(n.a,{href:"/docs/es/commands/create-document",children:"Create document"})," y utilice la variable sistema ",(0,s.jsx)(n.em,{children:"documento"})," (ver ejemplo)."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Usted escribe un sistema de informaci\xf3n que le permite guardar y buscar r\xe1pidamente documentos. En un formulario de entrada de datos, usted crea un bot\xf3n que le permite guardar un documento que contiene datos cargados previamente en un campo BLOB. El m\xe9todo para este bot\xf3n puede ser el siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef:=Create document("")\xa0// Guardar el documento de su elecci\xf3n\n\xa0If(OK=1)\xa0// Si un documento ha sido creado\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// No necesitamos mantenerlo abierto\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;[SuTabla]SuCampoBLOB)\xa0// Escribir el contenido del documento\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Gestionar error\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el documento est\xe1 escrito correctamente, de lo contrario toma el valor 0 y se genera un error."}),"\n",(0,s.jsx)(n.h2,{id:"manejo-de-errores",children:"Manejo de errores"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si trata de reescribir un documento que no existe o que ha sido abierto por otro proceso o aplicaci\xf3n, se genera un error File Manager."}),"\n",(0,s.jsx)(n.li,{children:"El espacio del disco puede ser insuficiente para escribir los nuevos contenidos del documento."}),"\n",(0,s.jsx)(n.li,{children:"Los errores E/S pueden ocurrir mientras escribe el documento."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En todos los casos, puede interceptar el error utilizando un m\xe9todo de interrupci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/create-document",children:"Create document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"526"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var r=o(667294);let s={},d=r.createContext(s);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);