"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7831"],{962452:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","description":"DOM GET XML CHILD NODES ( elemRef ; arrTiposFilhos ; arrRefsNodos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-child-nodes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-child-nodes","permalink":"/docs/pt/commands/dom-get-xml-child-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-child-nodes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","slug":"/commands/dom-get-xml-child-nodes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/pt/commands/dom-get-xml-attribute-by-name"},"next":{"title":"DOM Get XML document ref","permalink":"/docs/pt/commands/dom-get-xml-document-ref"}}'),s=r("785893"),t=r("250065");let o={id:"dom-get-xml-child-nodes",title:"DOM GET XML CHILD NODES",slug:"/commands/dom-get-xml-child-nodes",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM GET XML CHILD NODES"})," ( ",(0,s.jsx)(n.em,{children:"elemRef"})," ; ",(0,s.jsx)(n.em,{children:"arrTiposFilhos"})," ; ",(0,s.jsx)(n.em,{children:"arrRefsNodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elemRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Elemento XML de refer\xeancia"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrTiposFilhos"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tipos de nodos filhos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrRefsNodos"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Refer\xeancia ou valores dos nodos filhos"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando DOM GET XML CHILD NODES retorna os tipos e refer\xeancias ou valores de todos os nodos filhos do elemento XML designado por ",(0,s.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Os tipos dos nodos filhos s\xe3o retornados no array ",(0,s.jsx)(n.em,{children:"arrTiposFilhos"}),'. Pode comparar os valores retornados pelo comando com as seguintes constantes do tema "',(0,s.jsx)(n.em,{children:"XML"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML comment"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML processing instruction"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DATA"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML CDATA"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DOCTYPE"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML ELEMENT"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["O array ",(0,s.jsx)(n.em,{children:"arrRefsNodos"})," recebe os valores ou as refer\xeancias dos elementos em fun\xe7\xe3o de sua natureza (conte\xfados ou instru\xe7\xf5es)."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Dada a seguinte estrutura XML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<myElement>Ol\xe1<br/>Nova<br/>York</myElement>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Depois da execu\xe7\xe3o destas instru\xe7\xf5es:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0elementRef:=DOM Find XML element($root;"myElement")\n\xa0DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... os arrays $typeArr e $textArr conter\xe3o os seguintes valores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"$typeArr{1}=6"}),(0,s.jsx)(n.th,{children:'$textArr{1} = "Ol\xe1"'})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$typeArr{2}=11"}),(0,s.jsxs)(n.td,{children:['$textArr{2} = "AEF1233456878977" (element reference ',(0,s.jsx)(n.br,{}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$typeArr{3}=6"}),(0,s.jsx)(n.td,{children:'$textArr{3} = "Nova"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$typeArr{4}=11"}),(0,s.jsxs)(n.td,{children:['$textArr{4} = "AEF1237897734568" (element reference ',(0,s.jsx)(n.br,{}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$typeArr{5}=6"}),(0,s.jsx)(n.td,{children:'$textArr{5} = "York"'})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-get-xml-document-ref",children:"DOM Get XML document ref"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1081"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var d=r(667294);let s={},t=d.createContext(s);function o(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);