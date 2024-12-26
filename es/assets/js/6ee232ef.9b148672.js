"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76585"],{364821:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/dom-get-xml-element","title":"DOM Get XML element","description":"DOM Get XML element ( elementRef ; nomElement ; indice ; valorElement ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element","permalink":"/docs/es/commands/dom-get-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element","title":"DOM Get XML element","slug":"/commands/dom-get-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML document ref","permalink":"/docs/es/commands/dom-get-xml-document-ref"},"next":{"title":"DOM GET XML ELEMENT NAME","permalink":"/docs/es/commands/dom-get-xml-element-name"}}'),l=t("785893"),d=t("250065");let r={id:"dom-get-xml-element",title:"DOM Get XML element",slug:"/commands/dom-get-xml-element",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Get XML element"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"nomElement"})," ; ",(0,l.jsx)(n.em,{children:"indice"})," ; ",(0,l.jsx)(n.em,{children:"valorElement"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomElement"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre del elemento a leer"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"indice"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de \xedndice del elemento a leer"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valorElement"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valor del elemento"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML (16 caracteres)"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando DOM Get XML element devuelve una referencia XML al elemento \u201Chijo\u201D dependiente de los par\xe1metros ",(0,l.jsx)(n.em,{children:"nomElement"})," e ",(0,l.jsx)(n.em,{children:"index"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["El valor del elemento tambi\xe9n se devuelve en el par\xe1metro ",(0,l.jsx)(n.em,{children:"valorElement"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," por defecto, ",(0,l.jsx)(n.strong,{children:"DOM Get XML element"})," es sensible a las may\xfasculas y min\xfasculas en relaci\xf3n con el par\xe1metro ",(0,l.jsx)(n.em,{children:"nomElement"})," (de acuerdo a los est\xe1ndares xml). Puede controlar la sensibilidad de may\xfasculas y min\xfasculas del comando utilizando el selector XML DOM case sensitivity del comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsx)(n.p,{children:"Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1. Si ocurre un error, toma el valor 0."}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"725"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifica variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},d=s.createContext(l);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);