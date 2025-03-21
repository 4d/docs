"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70156"],{629591:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","description":"DOM SET XML ATTRIBUTE ( elementRef ; nomAtrib ; valorAtrib {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-set-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-attribute","permalink":"/docs/es/commands/dom-set-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","slug":"/commands/dom-set-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/es/commands/dom-remove-xml-element"},"next":{"title":"DOM SET XML DECLARATION","permalink":"/docs/es/commands/dom-set-xml-declaration"}}'),s=r("785893"),d=r("250065");let i={id:"dom-set-xml-attribute",title:"DOM SET XML ATTRIBUTE",slug:"/commands/dom-set-xml-attribute",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM SET XML ATTRIBUTE"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,s.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,s.jsx)(n.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAtrib"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Atributo a definir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorAtrib"}),(0,s.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nuevo valor del atributo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM SET XML ATTRIBUTE  permite a\xf1adir uno o varios atributos al elemento XML cuya referencia se pasa en el par\xe1metro ",(0,s.jsx)(n.em,{children:"refElement"}),". Tambi\xe9n permite definir el valor de cada atributo definido."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomAtrib"})," y ",(0,s.jsx)(n.em,{children:"valorAtrib"})," respectivamente el atributo a escribir y su valor (en forma de variables, campos, o valores literales). Puede pasar tantos atributos/valores como quiera."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"valorAtrib"})," puede ser de tipo texto o de otro tipo (Booleano, entero, real, fecha u hora). Si pasa un valor de un tipo diferente a texto, 4D se encarga de su conversi\xf3n a texto, de acuerdo a los siguientes principios:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Ejemplo de valor convertido"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Booleano"}),(0,s.jsx)(n.td,{children:'"true" o "false" (no traducido)'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Entero"}),(0,s.jsx)(n.td,{children:'"123456"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:'"12.34" (el separador decimal siempre es ".")'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (est\xe1ndar RFC 3339)'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:'"5233" (n\xfamero de segundos)'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"En la siguiente fuente XML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>El mejor vendedor</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Si se ejecuta el c\xf3digo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAtrNom:="Font"\n\xa0vAtrVal:="Verdana"\n\xa0DOM SET XML ATTRIBUTE(vRefElem;vAtrNom;vAtrVal)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Obtenemos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title Font=Verdana>El mejor vendedor</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. Si no, toma el valor 0 y se genera un error."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"866"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);