"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57507"],{51448:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>t,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/blob-to-variable","title":"BLOB TO VARIABLE","description":"BLOB TO VARIABLE ( BLOB ; variable {; offset} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-variable.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-variable","permalink":"/docs/es/commands/blob-to-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-variable","title":"BLOB TO VARIABLE","slug":"/commands/blob-to-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to text","permalink":"/docs/es/commands/blob-to-text"},"next":{"title":"COMPRESS BLOB","permalink":"/docs/es/commands/compress-blob"}}'),l=a("785893"),o=a("250065");let i={id:"blob-to-variable",title:"BLOB TO VARIABLE",slug:"/commands/blob-to-variable",displayed_sidebar:"docs"},r=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"BLOB TO VARIABLE"})," ( ",(0,l.jsx)(n.em,{children:"BLOB"})," ; ",(0,l.jsx)(n.em,{children:"variable"})," {; ",(0,l.jsx)(n.em,{children:"offset"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"BLOB que contiene variables 4D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"variable"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Variable a escribir con el contenido del BLOB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"offset"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2194"}),(0,l.jsx)(n.td,{children:"Posici\xf3n de la variable en el BLOB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Posici\xf3n de la variable siguiente en el  BLOB"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando BLOB TO VARIABLE reescribe la variable ",(0,l.jsx)(n.em,{children:"variable"})," con los datos almacenados en el BLOB ",(0,l.jsx)(n.em,{children:"blob"})," en el offset de bytes (a partir de cero) especificado por ",(0,l.jsx)(n.em,{children:"offset"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Los datos en el BLOB deben ser compatibles con la variable de destino. Generalmente, usted utilizar\xe1 los BLOBs que usted ha llenado previamente utilizando el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si no especifica el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"offset"}),", los datos de la variable se leen desde el inicio del BLOB. Si usted est\xe1 trabajando con un BLOB que contiene muchas variables, debe pasar el par\xe1metro ",(0,l.jsx)(n.em,{children:"offset"})," y, adicionalmente, debe pasar una variable num\xe9rica. Antes de llamar el comando, defina esta variable num\xe9rica en el offset correspondiente. Despu\xe9s de llamar el comando, la misma variable n\xfamerica devuelve el offset de la siguiente variable almacenada en el BLOB."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," ",(0,l.jsx)(n.strong,{children:"BLOB TO VARIABLE"})," soporta las variables objeto y colecci\xf3n de tipo ",(0,l.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," y ",(0,l.jsx)(n.a,{href:"c-collection.md",children:"C_COLLECTION"}),". Para mayor informaci\xf3n, consulte el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Despu\xe9s de llamar el comando, si la variable ha sido reescrita con \xe9xito, la variable OK toma el valor 1. Si la operaci\xf3n no se pudo realizar, la variable OK toma el valor 0; por ejemplo, si no hay suficiente memoria."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota sobre la independencia de plataforma:"})," BLOB TO VARIABLE y ",(0,l.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"})," utilizan un formato interno de 4D para administrar las variables almacenadas en los BLOBs. La ventaja es que usted no tiene que preocuparse por la conversi\xf3n de bytes (byte swapping) entre plataformas mientras utiliza estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando cualquiera de estos dos comandos puede ser reutilizado en Macintosh y viceversa."]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["Vea los ejemplos para el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",title:"VARIABLE TO BLOB",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsx)(n.p,{children:"La variable OK toma el valor 1 si la variable ha sido reescrita correctamente, de lo contrario toma el valor 0."}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var s=a(667294);let l={},o=s.createContext(l);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);