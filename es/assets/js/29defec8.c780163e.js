"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32453"],{826018:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>l,assets:()=>i,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-element-by-id","title":"WP Get element by ID","description":"WP Get element by ID ( docWP ; ID ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-element-by-id.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-element-by-id","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-element-by-id","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-element-by-id.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-element-by-id","title":"WP Get element by ID","slug":"/WritePro/commands/wp-get-element-by-id","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get data context","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-data-context"},"next":{"title":"WP Get elements","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-elements"}}'),r=t("785893"),d=t("250065");let s={id:"wp-get-element-by-id",title:"WP Get element by ID",slug:"/WritePro/commands/wp-get-element-by-id",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Get element by ID"})," ( ",(0,r.jsx)(n.em,{children:"docWP"})," ; ",(0,r.jsx)(n.em,{children:"ID"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"docWP"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Identificador del elemento a recuperar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Elemento 4D Write Pro"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"WP Get element by ID"})," devuelve un objeto que contiene el elemento de ",(0,r.jsx)(n.em,{children:"wpDoc"})," pasado en el par\xe1metro ",(0,r.jsx)(n.em,{children:"ID"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"wpDoc"}),", pase un documento 4D Write Pro."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase el atributo ID del elemento para recuperarlo en el par\xe1metro ",(0,r.jsx)(n.em,{children:"ID"}),". El elemento puede estar dentro del documento, como una imagen, un p\xe1rrafo, una tabla, una fila, etc., o el documento en s\xed. Si ning\xfan elemento del documento tiene la ID especificada, se devuelve un valor nulo."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": el valor del par\xe1metro ",(0,r.jsx)(n.em,{children:"ID"})," es sensible a las may\xfasculas y min\xfasculas."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:'Para obtener la imagen con el ID "img1":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var obImage : Object\n\xa0obImage:=WP Get element by ID(myDoc;"img1")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea encontrar un elemento de tabla y modificarlo para que tenga un borde morado grande:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $element : Object\n\xa0$element:=WP Get element by ID(myDoc;"Table1")\n\xa0WP SET ATTRIBUTES($element;wk border style;wk solid)\n\xa0WP SET ATTRIBUTES($element;wk border width;"4px")\n\xa0WP SET ATTRIBUTES($element;wk border color;"purple")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea recuperar un elemento y modificar su ID:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$colTable:=WP Create table range([INFO]Sample)\n\xa0$elements:=WP Get elements($colTable)\n\xa0$elem:=WP Get element by ID([INFO]Sample;"Paris")\n\xa0If($elem#Null)\n\xa0\xa0\xa0\xa0$elem.ID:="Lyon"\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-elements",children:"WP Get elements"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var l=t(667294);let r={},d=l.createContext(r);function s(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);