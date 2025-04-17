"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41204"],{514089:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>m,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/dom-get-parent-xml-element","title":"DOM Get parent XML element","description":"DOM Get parent XML element ( refElemento {; nomeElemPai {; valorElemPai}} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-get-parent-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-parent-xml-element","permalink":"/docs/pt/commands/dom-get-parent-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-parent-xml-element.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-get-parent-xml-element","title":"DOM Get parent XML element","slug":"/commands/dom-get-parent-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get next sibling XML element","permalink":"/docs/pt/commands/dom-get-next-sibling-xml-element"},"next":{"title":"DOM Get previous sibling XML element","permalink":"/docs/pt/commands/dom-get-previous-sibling-xml-element"}}'),s=t("785893"),d=t("250065");let o={id:"dom-get-parent-xml-element",title:"DOM Get parent XML element",slug:"/commands/dom-get-parent-xml-element",displayed_sidebar:"docs"},l=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Get parent XML element"})," ( ",(0,s.jsx)(n.em,{children:"refElemento"})," {; ",(0,s.jsx)(n.em,{children:"nomeElemPai"})," {; ",(0,s.jsx)(n.em,{children:"valorElemPai"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refElemento"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeElemPai"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nome do elemento XML pai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorElemPai"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor do elemento XML pai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia do elemento XML pai"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando DOM Get parent XML element retorna uma refer\xeancia XML ao \u201Cpai\u201D do elemento XML passado como refer\xeancia em ",(0,s.jsx)(n.em,{children:"refElemento"}),". Esta refer\xeancia pode ser utilizada com os outros comandos de an\xe1lise XML."]}),"\n",(0,s.jsxs)(n.p,{children:["Os par\xe2metros opcionais ",(0,s.jsx)(n.em,{children:"nomElemPai"})," e ",(0,s.jsx)(n.em,{children:"valorElemPai"}),", quando se passam, recebem respectivamente o nome e o valor do elemento pai."]}),"\n",(0,s.jsx)(n.p,{children:"Se utiliza este comando em um n\xf3 documento"}),"\n",(0,s.jsxs)(n.p,{children:["Quando passa um elemento ra\xedz em ",(0,s.jsx)(n.em,{children:"refElement"}),', o comando devolve a referencia "#document". O n\xf3 documento \xe9 o pai de um elemento ra\xedz.',(0,s.jsx)(n.br,{}),'\nSe utiliza este comando em um n\xf3 documento, o comando devolve uma referencia nula ("0000000000000000") e a vari\xe1vel OK toma o valor 0.']}),"\n",(0,s.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-get-last-child-xml-element",children:"DOM Get last child XML element"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/dom-get-root-xml-element",children:"DOM Get root XML element"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"923"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);