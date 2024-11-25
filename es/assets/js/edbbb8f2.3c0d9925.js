"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16047"],{212865:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>m,assets:()=>r,toc:()=>i,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/sax-set-xml-declaration","title":"SAX SET XML DECLARATION","description":"SAX SET XML DECLARATION ( documento ; codificacion {; autonomo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/sax-set-xml-declaration","permalink":"/docs/es/commands/sax-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-set-xml-declaration","title":"SAX SET XML DECLARATION","slug":"/commands/sax-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/es/commands/sax-open-xml-element-arrays"},"next":{"title":"XML","permalink":"/docs/es/category/xml"}}'),c=o("785893"),t=o("250065");let d={id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},a=void 0,r={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,c.jsx)(n.em,{children:"documento"})," ; ",(0,c.jsx)(n.em,{children:"codificacion"})," {; ",(0,c.jsx)(n.em,{children:"autonomo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"documento"}),(0,c.jsx)(n.td,{children:"Time"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"codificacion"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Conjunto de caracteres del documento XML"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"autonomo"}),(0,c.jsx)(n.td,{children:"Boolean"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"True = el documento es aut\xf3nomo False (por defecto) = el documento no es aut\xf3nomo"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando SAX SET XML DECLARATION inicializa el documento XML referenciado en ",(0,c.jsx)(n.em,{children:"documento"})," utilizando la ",(0,c.jsx)(n.em,{children:"codificaci\xf3n"})," especificada. Opcionalmente, puede definir el atributo aut\xf3nomo."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"codificacion"}),": indica el conjunto de caracteres utilizado en el documento. Por defecto (si no se llama al comando), se utiliza el conjunto de caracteres UTF-8 (Unicode comprimido).",(0,c.jsx)(n.strong,{children:"Nota:"})," si pasa un conjunto de caracteres que no soporta los comandos XML de 4D, se utilizar\xe1 UTF-8. Consulte ",(0,c.jsx)(n.em,{children:"Conjuntos de caracteres"})," para ver la lista de conjuntos de caracteres soportados (sin embargo se recomienda UTF-8 en la mayor\xeda de los casos)."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"autonomo"}),": indica si el documento es autonomo (",(0,c.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),") o si depende, para su funcionamiento, de otros archivos o de recursos externos (",(0,c.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),"). Por defecto (si no se llama el comando o si el par\xe1metro se omite), el documento no es aut\xf3nomo."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Este comando debe llamarse una sola vez por documento y antes del primer comando de escritura XML en el documento; de lo contrario, se generar\xe1 un mensaje de error."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"})," puede especificar la indentaci\xf3n del documento gracias al comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"})," antes de escribir cualquier cosa."]}),"\n",(0,c.jsx)(n.p,{children:"Este comando debe llamarse una sola vez por documento y antes del primer comando de escritura XML en el documento; de lo contrario, se generar\xe1 un mensaje de error."}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"El siguiente c\xf3digo:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0SAX SET XML DECLARATION($DocRef;"UTF-16";True)\n'})}),"\n",(0,c.jsx)(n.p,{children:"... escribir\xe1 esta l\xednea en el documento:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/es/commands/sax-get-xml-document-values",children:"SAX GET XML DOCUMENT VALUES"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var s=o(667294);let c={},t=s.createContext(c);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);