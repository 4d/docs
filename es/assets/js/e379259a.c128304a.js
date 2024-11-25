"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36520"],{14442:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>c,assets:()=>r,toc:()=>i,frontMatter:()=>d});var l=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","description":"DOM GET XML ELEMENT NAME ( elementRef ; nomElement )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-name","permalink":"/docs/es/commands/dom-get-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","slug":"/commands/dom-get-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML element","permalink":"/docs/es/commands/dom-get-xml-element"},"next":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/es/commands/dom-get-xml-element-value"}}'),s=t("785893"),m=t("250065");let d={id:"dom-get-xml-element-name",title:"DOM GET XML ELEMENT NAME",slug:"/commands/dom-get-xml-element-name",displayed_sidebar:"docs"},o=void 0,r={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,m.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM GET XML ELEMENT NAME"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"nomElement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomElement"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre del elemento"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM GET XML ELEMENT NAME devuelve en el par\xe1metro ",(0,s.jsx)(n.em,{children:"nomElement"}),", el nombre del elemento XML designado por ",(0,s.jsx)(n.em,{children:"elementRef"}),".. Si el tipo de variable ",(0,s.jsx)(n.em,{children:"nomElement"})," no est\xe1 definido, el tipo texto se utiliza de manera predeterminada."]}),"\n",(0,s.jsxs)(n.p,{children:["Para mayor informaci\xf3n sobre los nombres de elementos XML, consulte la secci\xf3n ",(0,s.jsx)(n.em,{children:"Presentaci\xf3n de los comandos XML DOM"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Este m\xe9todo devuelve el nombre del elemento $xml_Element_Ref:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Element_Ref : Text\n\xa0var $nom : Text\n\xa0\n\xa0DOM GET XML ELEMENT NAME($xml_Element_Ref;$nom)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1. Si ocurre un error, toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-set-xml-element-name",children:"DOM SET XML ELEMENT NAME"})]})]})}function c(e={}){let{wrapper:n}={...(0,m.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var l=t(667294);let s={},m=l.createContext(s);function d(e){let n=l.useContext(m);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(m.Provider,{value:n},e.children)}}}]);