"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83916"],{446571:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","description":"SAX OPEN XML ELEMENT ARRAYS ( documento ; etiqueta {; arrayNomsAtrib ; arrayValoresAtrib} {; arrayNomsAtrib2 ; arrayValoresAtrib2 ; ... ; arrayNomsAtribN ; arrayValoresAtribN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-open-xml-element-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element-arrays","permalink":"/docs/es/20-R8/commands/sax-open-xml-element-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element-arrays.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","slug":"/commands/sax-open-xml-element-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/es/20-R8/commands/sax-open-xml-element"},"next":{"title":"SAX SET XML DECLARATION","permalink":"/docs/es/20-R8/commands/sax-set-xml-declaration"}}'),a=n("785893"),t=n("250065");let o={id:"sax-open-xml-element-arrays",title:"SAX OPEN XML ELEMENT ARRAYS",slug:"/commands/sax-open-xml-element-arrays",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," ( ",(0,a.jsx)(r.em,{children:"documento"})," ; ",(0,a.jsx)(r.em,{children:"etiqueta"})," {; ",(0,a.jsx)(r.em,{children:"arrayNomsAtrib"})," ; ",(0,a.jsx)(r.em,{children:"arrayValoresAtrib"}),"} {; ",(0,a.jsx)(r.em,{children:"arrayNomsAtrib2"})," ; ",(0,a.jsx)(r.em,{children:"arrayValoresAtrib2"})," ; ... ; ",(0,a.jsx)(r.em,{children:"arrayNomsAtribN"})," ; ",(0,a.jsx)(r.em,{children:"arrayValoresAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"documento"}),(0,a.jsx)(r.td,{children:"Time"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Referencia del documento abierto"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"etiqueta"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nombre del elemento a abrir"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"arrayNomsAtrib"}),(0,a.jsx)(r.td,{children:"Text array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array de nombres de atributos"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"arrayValoresAtrib"}),(0,a.jsx)(r.td,{children:"Text array, Integer array, Date array, Real array, Picture array, Boolean array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array de valores de atributos"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["El comando SAX OPEN XML ELEMENT ARRAYS permite a\xf1adir un nuevo elemento en el documento XML cuya referencia se pasa en ",(0,a.jsx)(r.em,{children:"document"})," como tambi\xe9n, opcionalmente, atributos y sus valores en forma de arrays."]}),"\n",(0,a.jsxs)(r.p,{children:["Excepto por el soporte de arrays (ver a continuaci\xf3n), este comando es id\xe9ntico a ",(0,a.jsx)(r.a,{href:"/docs/es/20-R8/commands/sax-open-xml-element",title:"SAX OPEN XML ELEMENT",children:"SAX OPEN XML ELEMENT"}),". Por favor consulte la descripci\xf3n de este comando para mayor informaci\xf3n sobre su funcionamiento."]}),"\n",(0,a.jsxs)(r.p,{children:["SAX OPEN XML ELEMENT ARRAYS acepta arrays de tipo fecha, num\xe9ricos, booleanos e imagen como par\xe1metros ",(0,a.jsx)(r.em,{children:"arrayValoresAtrib"}),". 4D autom\xe1ticamente realiza todas las conversiones necesarias; puede configurar estas conversiones utilizando el comando ",(0,a.jsx)(r.a,{href:"/docs/es/20-R8/commands/xml-set-options",title:"XML SET OPTIONS",children:"XML SET OPTIONS"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Opcionalmente, el comando SAX OPEN XML ELEMENT ARRAYS permite pasar pares de atributos y de valores de atributos en forma de arrays en los par\xe1metros ",(0,a.jsx)(r.em,{children:"arrayNomsAtrib"})," y ",(0,a.jsx)(r.em,{children:"arrayValoresAtrib"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Los arrays deben haber sido creados previamente y funcionar por pares. Puede pasar tantos pares de arrays y elementos en cada par como quiera."}),"\n",(0,a.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente m\xe9todo:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY STRING(80;aNomsAtrib;2)\n\xa0ARRAY STRING(80;aValoresAtrib;2)\n\xa0vElement:="Libro"\n\xa0aNomsAtrib{1}:="Font"\n\xa0aValoresAtrib{1}:="Arial"\n\xa0aNomsAtrib{2}:="Style"\n\xa0aValoresAtrib{2}:="Bold"\n\xa0SAX OPEN XML ELEMENT ARRAYS($DocRef;vElemento;tNomsAtrib;tValoresAtrib)\n'})}),"\n",(0,a.jsx)(r.p,{children:"... escribir\xe1 en el documento:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-XML",children:'<Book Font="Arial" Style="Bold">\n'})}),"\n",(0,a.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/20-R8/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/20-R8/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,a.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"921"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var s=n(667294);let a={},t=s.createContext(a);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);