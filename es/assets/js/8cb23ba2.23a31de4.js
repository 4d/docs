"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59676"],{323044:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","description":"DOM GET XML CHILD NODES ( refElement ; ArrTiposHijos ; arrRefsNodos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-child-nodes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-child-nodes","permalink":"/docs/es/commands/dom-get-xml-child-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-child-nodes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","slug":"/commands/dom-get-xml-child-nodes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/es/commands/dom-get-xml-attribute-by-name"},"next":{"title":"DOM Get XML document ref","permalink":"/docs/es/commands/dom-get-xml-document-ref"}}'),r=s("785893"),t=s("250065");let l={id:"dom-get-xml-child-nodes",title:"DOM GET XML CHILD NODES",slug:"/commands/dom-get-xml-child-nodes",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM GET XML CHILD NODES"})," ( ",(0,r.jsx)(n.em,{children:"refElement"})," ; ",(0,r.jsx)(n.em,{children:"ArrTiposHijos"})," ; ",(0,r.jsx)(n.em,{children:"arrRefsNodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElement"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ArrTiposHijos"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tipos de nodos hijos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrRefsNodos"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Referencias o Valores de los nodos hijos"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando DOM GET XML CHILD NODES devuelve los tipos y referencias o valores de todos los nodos hijos del elemento XML designado por ",(0,r.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Los tipos de los nodos hijos se devuelven en el array ",(0,r.jsx)(n.em,{children:"arrTiposHijos"}),'. Puede comparar los valores devueltos por el comando con las siguientes constantes del tema "":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML comment"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML processing instruction"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML DATA"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML CDATA"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML DOCTYPE"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML ELEMENT"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/dom-append-xml-child-node",title:"DOM Append XML child node",children:"DOM Append XML child node"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El array ",(0,r.jsx)(n.em,{children:"arrRefsNodos"})," recibe los valores o las referencias de los elementos en funci\xf3n de su naturaleza (contenidos o instrucciones)."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Dada la siguiente estructura XML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<myElement>Hola<br/>Nueva<br/>York</myElement>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de estas instrucciones:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0elementRef:=DOM Find XML element($root;"myElement")\n\xa0DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)\n'})}),"\n",(0,r.jsx)(n.p,{children:"... los arrays $typeArr y $textArr contendr\xe1n los siguientes valores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"$typeArr{1}=6"}),(0,r.jsx)(n.th,{children:'$textArr{1} = "Hola"'})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$typeArr{2}=11"}),(0,r.jsxs)(n.td,{children:['$textArr{2} = "AEF1233456878977" (element reference ',(0,r.jsx)(n.br,{}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$typeArr{3}=6"}),(0,r.jsx)(n.td,{children:'$textArr{3} = "Nueva"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$typeArr{4}=11"}),(0,r.jsxs)(n.td,{children:['$textArr{4} = "AEF1237897734568" (element reference ',(0,r.jsx)(n.br,{}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$typeArr{5}=6"}),(0,r.jsx)(n.td,{children:'$textArr{5} = "York"'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-document-ref",children:"DOM Get XML document ref"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1081"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var d=s(667294);let r={},t=d.createContext(r);function l(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);