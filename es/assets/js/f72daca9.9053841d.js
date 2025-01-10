"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1628"],{344813:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>r});var l=JSON.parse('{"id":"commands-legacy/dom-get-last-child-xml-element","title":"DOM Get last child XML element","description":"DOM Get last child XML element ( elementRef {; nomElementHijo {; valorElementHijo}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-last-child-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-last-child-xml-element","permalink":"/docs/es/commands/dom-get-last-child-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-last-child-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-last-child-xml-element","title":"DOM Get last child XML element","slug":"/commands/dom-get-last-child-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get first child XML element","permalink":"/docs/es/commands/dom-get-first-child-xml-element"},"next":{"title":"DOM Get next sibling XML element","permalink":"/docs/es/commands/dom-get-next-sibling-xml-element"}}'),s=t("785893"),d=t("250065");let i={id:"dom-get-last-child-xml-element",title:"DOM Get last child XML element",slug:"/commands/dom-get-last-child-xml-element",displayed_sidebar:"docs"},r=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Get last child XML element"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," {; ",(0,s.jsx)(n.em,{children:"nomElementHijo"})," {; ",(0,s.jsx)(n.em,{children:"valorElementHijo"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomElementHijo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre del elemento hijo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorElementHijo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor del elemento hijo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM Get last child XML element devuelve una referencia XML al \xfaltimo \u201Chijo\u201D del elemento XML pasado como referencia en ",(0,s.jsx)(n.em,{children:"refElement"}),". Esta referencia puede utilizarse con otros comandos de an\xe1lisis XML."]}),"\n",(0,s.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,s.jsx)(n.em,{children:"nomElementHijo"})," y ",(0,s.jsx)(n.em,{children:"valorElementHijo"}),", si se pasan, reciben respectivamente el nombre y el valor del elemento \u201Chijo\u201D."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n de la referencia del \xfaltimo elemento XML del padre ra\xedz. La estructura XML (C:\\\\importar.xml) se carga previamente en un BLOB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var miVarBlob : Blob\n\xa0var $ref_XML_Padre;$ref_XML_Hijo : Text\n\xa0var $nombreHijo;$valorHijo : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\importar.xml";miVarBlob)\n\xa0$ref_XML_Padre:=DOM Parse XML variable(miVarBlob)\n\xa0$ref_XML_Hijo:=DOM Get last child XML element($ref_XML_Padre;$nombreHijo;$valorHijo)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"925"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},d=l.createContext(s);function i(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);