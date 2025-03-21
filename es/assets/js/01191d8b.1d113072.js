"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76755"],{409521:function(e,A,n){n.r(A),n.d(A,{default:()=>a,frontMatter:()=>r,metadata:()=>l,assets:()=>s,toc:()=>m,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/dom-get-first-child-xml-element","title":"DOM Get first child XML element","description":"DOM Get first child XML element ( elementRef {; nomElementHijo {; valorElementHijo}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-first-child-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-first-child-xml-element","permalink":"/docs/es/commands/dom-get-first-child-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-first-child-xml-element.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-first-child-xml-element","title":"DOM Get first child XML element","slug":"/commands/dom-get-first-child-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Find XML element by ID","permalink":"/docs/es/commands/dom-find-xml-element-by-id"},"next":{"title":"DOM Get last child XML element","permalink":"/docs/es/commands/dom-get-last-child-xml-element"}}'),t=n("785893"),d=n("250065");let r={id:"dom-get-first-child-xml-element",title:"DOM Get first child XML element",slug:"/commands/dom-get-first-child-xml-element",displayed_sidebar:"docs"},i=void 0,s={},m=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let A={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(A.p,{children:[(0,t.jsx)(A.strong,{children:"DOM Get first child XML element"})," ( ",(0,t.jsx)(A.em,{children:"elementRef"})," {; ",(0,t.jsx)(A.em,{children:"nomElementHijo"})," {; ",(0,t.jsx)(A.em,{children:"valorElementHijo"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(A.table,{children:[(0,t.jsx)(A.thead,{children:(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.th,{children:"Par\xe1metro"}),(0,t.jsx)(A.th,{children:"Tipo"}),(0,t.jsx)(A.th,{}),(0,t.jsx)(A.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(A.tbody,{children:[(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"elementRef"}),(0,t.jsx)(A.td,{children:"Text"}),(0,t.jsx)(A.td,{children:"\u2192"}),(0,t.jsx)(A.td,{children:"Referencia del elemento XML"})]}),(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"nomElementHijo"}),(0,t.jsx)(A.td,{children:"Text"}),(0,t.jsx)(A.td,{children:"\u2190"}),(0,t.jsx)(A.td,{children:"Nombre del elemento XML hijo"})]}),(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"valorElementHijo"}),(0,t.jsx)(A.td,{children:"Text"}),(0,t.jsx)(A.td,{children:"\u2190"}),(0,t.jsx)(A.td,{children:"Valor del elemento XML hijo"})]}),(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"Resultado"}),(0,t.jsx)(A.td,{children:"Text"}),(0,t.jsx)(A.td,{children:"\u2190"}),(0,t.jsx)(A.td,{children:"Referencia del elemento XML hijo"})]})]})]}),"\n",(0,t.jsx)(A.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(A.p,{children:["El comando DOM Get first child XML element devuelve una referencia XML al primer \u201Chijo\u201D del elemento XML pasado en ",(0,t.jsx)(A.em,{children:"refElement"}),". Esta referencia puede utilizarse con otros comandos de an\xe1lisis XML."]}),"\n",(0,t.jsxs)(A.p,{children:["Los par\xe1metros ",(0,t.jsx)(A.em,{children:"nomElementHijo"})," y ",(0,t.jsx)(A.em,{children:"valorElemHijo"}),", si se pasan, reciben respectivamente el nombre y el valor del elemento hijo."]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{src:n(826328).Z+"",width:"518",height:"220"})}),"\n",(0,t.jsx)(A.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(A.p,{children:"Recuperaci\xf3n de la referencia del primer elemento XML del padre ra\xedz. La estructura XML (C:\\\\import.xml) se carga previamente en un BLOB:"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-4d",children:'\xa0var miVarBlob : Blob\n\xa0var $xml_Padre_Ref;$xml_Hijo_Ref : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\importar.xml";miVarBlob)\n\xa0$xml_Padre_Ref:=DOM Parse XML variable(miVarBlob)\n\xa0$xml_Hijo_Ref:=DOM Get first child XML element($xml_Padre_Ref)\n'})}),"\n",(0,t.jsx)(A.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(A.p,{children:"Recuperaci\xf3n de la referencia, del nombre y del valor del primer elemento XML del padre ra\xedz. La estructura XML (C:\\\\importar.xml) se carga previamente en un BLOB:"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-4d",children:'\xa0var miVarBlob : Blob\n\xa0var $xml_Padre_Ref;$xml_Hijo_Ref : Text\n\xa0var $hijoNom;$hijoValor : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\importar.xml";miVarBlob)\n\xa0$xml_Padre_Ref:=DOM Parse XML variable(miVarBlob)\n\xa0$xml_Hijo_Ref:=DOM Get first child XML element($xml_Padre_Ref;$hijoNom;$hijoValor)\n'})}),"\n",(0,t.jsx)(A.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(A.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,t.jsx)(A.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.a,{href:"/docs/es/commands/dom-get-next-sibling-xml-element",children:"DOM Get next sibling XML element"})}),"\n",(0,t.jsx)(A.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(A.table,{children:[(0,t.jsx)(A.thead,{children:(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.th,{}),(0,t.jsx)(A.th,{})]})}),(0,t.jsxs)(A.tbody,{children:[(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"N\xfamero de comando"}),(0,t.jsx)(A.td,{children:"723"})]}),(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"Hilo seguro"}),(0,t.jsx)(A.td,{children:"\u2713"})]}),(0,t.jsxs)(A.tr,{children:[(0,t.jsx)(A.td,{children:"Modifica variables"}),(0,t.jsx)(A.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:A}={...(0,d.a)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},826328:function(e,A,n){n.d(A,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(e,A,n){n.d(A,{Z:function(){return i},a:function(){return r}});var l=n(667294);let t={},d=l.createContext(t);function r(e){let A=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(d.Provider,{value:A},e.children)}}}]);