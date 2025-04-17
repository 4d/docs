"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66810"],{390796:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","description":"DOM GET XML ELEMENT VALUE ( elementRef ; valorElement {; cDATA} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-value","permalink":"/docs/es/commands/dom-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","slug":"/commands/dom-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT NAME","permalink":"/docs/es/commands/dom-get-xml-element-name"},"next":{"title":"DOM Get XML information","permalink":"/docs/es/commands/dom-get-xml-information"}}'),d=l("785893"),r=l("250065");let s={id:"dom-get-xml-element-value",title:"DOM GET XML ELEMENT VALUE",slug:"/commands/dom-get-xml-element-value",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," ; ",(0,d.jsx)(n.em,{children:"valorElement"})," {; ",(0,d.jsx)(n.em,{children:"cDATA"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valorElement"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valor del elemento"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cDATA"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Contenido de la secci\xf3n CDATA"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," devuelve en el par\xe1metro ",(0,d.jsx)(n.em,{children:"valorElement"}),", el valor del elemento XML designado por ",(0,d.jsx)(n.em,{children:"refElement"}),". 4D intentar\xe1 convertir el valor obtenido en el tipo de variable pasada como par\xe1metro. Si el tipo de variable no est\xe1 definido, el valor es devuelto en el tipo texto por defecto."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"cDATA"})," se utiliza para recuperar los contenidos de las secciones CDATA del elemento XML ",(0,d.jsx)(n.em,{children:"refElement"}),". Como con el par\xe1metro ",(0,d.jsx)(n.em,{children:"valorElement"}),", 4D intentar\xe1 convertir el valor obtenido en el tipo de la variable pasada como par\xe1metro, y si el tipo de variable no est\xe1 definido, el tipo texto se utiliza por defecto."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," si el elemento designado por ",(0,d.jsx)(n.em,{children:"refElement"})," es un BLOB procesado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"}),", ha sido codificado autom\xe1ticamente en base64. Por lo tanto, el comando intentar\xe1 autom\xe1ticamente de decodificar en base 64."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Este m\xe9todo devuelve el valor del elemento $xml_Element_Ref:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Element_Ref : Text\n\xa0var $valor : Real\n\xa0\n\xa0DOM GET XML ELEMENT VALUE($xml_Element_Ref;$valor)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1. Si ocurre un error, toma el valor 0."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"731"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return s}});var t=l(667294);let d={},r=t.createContext(d);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);