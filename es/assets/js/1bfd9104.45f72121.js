"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62409"],{590798:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-cdata","title":"SAX GET XML CDATA","description":"SAX GET XML CDATA ( documento ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-cdata","permalink":"/docs/es/commands/sax-get-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-cdata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-cdata","title":"SAX GET XML CDATA","slug":"/commands/sax-get-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/es/commands/sax-close-xml-element"},"next":{"title":"SAX GET XML COMMENT","permalink":"/docs/es/commands/sax-get-xml-comment"}}'),a=s("785893"),o=s("250065");let d={id:"sax-get-xml-cdata",title:"SAX GET XML CDATA",slug:"/commands/sax-get-xml-cdata",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SAX GET XML CDATA"})," ( ",(0,a.jsx)(n.em,{children:"documento"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"documento"}),(0,a.jsx)(n.td,{children:"Time"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Text, Blob"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Valor del elemento"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"SAX GET XML CDATA"}),"permite recuperar el ",(0,a.jsx)(n.em,{children:"valor"})," CDATA de un elemento XML existente en el documento XML referenciado por ",(0,a.jsx)(n.em,{children:"documento"}),". Este comando debe llamarse con el evento SAX XML CDATA. Para mayor informaci\xf3n sobre eventos SAX, consulte la descripci\xf3n del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase una variable ",(0,a.jsx)(n.em,{children:"valor"})," de tipo Texto si quiere recuperar los datos de tama\xf1o superior a 32 KB (la base debe funcionar en modo Unicode)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota de compatibildad:"})," a partir de 4D v12, los contenidos CDATA codificados en base64 son decodificados autom\xe1ticamente por el comando ",(0,a.jsx)(n.strong,{children:"SAX GET XML CDATA"}),", de manera que no es necesario llamar al comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/base64-decode",children:"BASE64 DECODE"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Miremos el siguiente c\xf3digo XML:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-XML",children:"<ElementoRaiz>\n\xa0\xa0\xa0<Hijo>Mi Texto<![CDATA[MyCData]]</Hijo>\n</ElementoRaiz>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["El siguiente c\xf3digo 4D devolver\xe1 \u201CMiCData\u201D en ",(0,a.jsx)(n.em,{children:"vDatosTexto"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var vDator : Blob\n\xa0var vDatosTexto : Text\n\xa0SAX GET XML CDATA(DocRef;vDatos)\n\xa0vDatosTexto:=BLOB to text(vData;UTF8 C string)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0 y se genera un error."}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/sax-add-xml-cdata",children:"SAX ADD XML CDATA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/sax-get-xml-node",children:"SAX Get XML node"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var t=s(667294);let a={},o=t.createContext(a);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);