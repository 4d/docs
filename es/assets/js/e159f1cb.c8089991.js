"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14039"],{12921:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","description":"SAX GET XML ELEMENT VALUE ( documento ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-element-value","permalink":"/docs/es/20-R7/commands/sax-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-element-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","slug":"/commands/sax-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ELEMENT","permalink":"/docs/es/20-R7/commands/sax-get-xml-element"},"next":{"title":"SAX GET XML ENTITY","permalink":"/docs/es/20-R7/commands/sax-get-xml-entity"}}'),l=t("785893"),r=t("250065");let d={id:"sax-get-xml-element-value",title:"SAX GET XML ELEMENT VALUE",slug:"/commands/sax-get-xml-element-value",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SAX GET XML ELEMENT VALUE"})," ( ",(0,l.jsx)(n.em,{children:"documento"})," ; ",(0,l.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"documento"}),(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valor"}),(0,l.jsx)(n.td,{children:"Text, Blob"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valor del elemento"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando SAX GET XML ELEMENT VALUE  permite recuperar el ",(0,l.jsx)(n.em,{children:"valor"})," de un elemento XML existente en el documento XML referenciado por ",(0,l.jsx)(n.em,{children:"documento"}),". Este comando debe llamarse en el contexto de un evento XML DATA SAX. Para mayor informaci\xf3n sobre los eventos SAX, consulte la descripci\xf3n del comando ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/sax-get-xml-node",title:"SAX Get XML node",children:"SAX Get XML node"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,l.jsx)(n.em,{children:"valor"})," una variable de tipo Texto o BLOB. Si pasa un BLOB, el comando autom\xe1ticamente intentar\xe1 decodificarlo en base64."]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"Miremos el siguiente c\xf3digo XML:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:'<ElementoRaiz>\n\xa0\xa0\xa0<Hijo Att1="111" Att2="222" Att3="333">MyText</Hijo>\n</ElementoRaiz>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["La siguiente instrucci\xf3n devolver\xe1 \u201CMiText\u201D en ",(0,l.jsx)(n.em,{children:"vValor"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ELEMENT VALUE(DocRef;vValor)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0 y se genera un error."}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/sax-add-xml-element-value",children:"SAX ADD XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"877"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifica variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let l={},r=s.createContext(l);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);