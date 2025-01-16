"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83560"],{522673:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-add-xml-cdata","title":"SAX ADD XML CDATA","description":"SAX ADD XML CDATA ( documento ; datos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-cdata","permalink":"/docs/es/20-R7/commands/sax-add-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-cdata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-cdata","title":"SAX ADD XML CDATA","slug":"/commands/sax-add-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD PROCESSING INSTRUCTION","permalink":"/docs/es/20-R7/commands/sax-add-processing-instruction"},"next":{"title":"SAX ADD XML COMMENT","permalink":"/docs/es/20-R7/commands/sax-add-xml-comment"}}'),d=s("785893"),a=s("250065");let r={id:"sax-add-xml-cdata",title:"SAX ADD XML CDATA",slug:"/commands/sax-add-xml-cdata",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX ADD XML CDATA"})," ( ",(0,d.jsx)(n.em,{children:"documento"})," ; ",(0,d.jsx)(n.em,{children:"datos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"documento"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"datos"}),(0,d.jsx)(n.td,{children:"Blob, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Texto o BLOB a insertar en el documento entre etiquetas CData"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando SAX ADD XML CDATA a\xf1ade en el documento XML referenciado por ",(0,d.jsx)(n.em,{children:"documento"}),", los ",(0,d.jsx)(n.em,{children:"datos"})," de tipo texto o BLOB. Estos datos se enmarcar\xe1n autom\xe1ticamente con las etiquetas ",(0,d.jsx)(n.em,{children:"<![CDATA["})," y ",(0,d.jsx)(n.em,{children:"]]>"}),(0,d.jsx)(n.br,{}),"\nEl texto incluido en una secci\xf3n CData es ignorado por el int\xe9rprete XML."]}),"\n",(0,d.jsxs)(n.p,{children:["Si quiere codificar los contenidos de datos, debe utilizar el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/base64-encode",children:"BASE64 ENCODE"}),". En este caso, por supuesto, debe pasar un BLOB en ",(0,d.jsx)(n.em,{children:"datos"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Para que este comando funcione correctamente, debe estar abierto un elemento. De lo contrario, se generar\xe1 un error."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Si quiere insertar las siguientes l\xedneas en su documento XML:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"function matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 1\n\xa0\xa0\xa0\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 0\n\xa0\xa0\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"Para hacer esto, necesita ejecutar el siguiente c\xf3digo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMitexto : Text\n\xa0...\xa0// coloque ac\xe1 el texto en la variable vtMitexto\n\xa0SAX ADD XML CDATAL($DocRef;vtMitexto)\n"})}),"\n",(0,d.jsx)(n.p,{children:"El resultado ser\xe1:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"<![CDATA[\nfunction matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 1\n\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 0\n\xa0\xa0\xa0}\n}\n]]>\n"})}),"\n",(0,d.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/sax-get-xml-cdata",children:"SAX GET XML CDATA"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"856"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let d={},a=t.createContext(d);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);