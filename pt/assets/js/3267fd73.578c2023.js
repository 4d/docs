"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45947"],{524533:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","description":"DOM GET XML ATTRIBUTE BY INDEX ( refElemento ; indexAtrib ; nomeAtrib ; valorAtrib )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-attribute-by-index.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-index","permalink":"/docs/pt/commands/dom-get-xml-attribute-by-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","slug":"/commands/dom-get-xml-attribute-by-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get Root XML element","permalink":"/docs/pt/commands/dom-get-root-xml-element"},"next":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/pt/commands/dom-get-xml-attribute-by-name"}}'),o=t("785893"),d=t("250065");let i={id:"dom-get-xml-attribute-by-index",title:"DOM GET XML ATTRIBUTE BY INDEX",slug:"/commands/dom-get-xml-attribute-by-index",displayed_sidebar:"docs"},s=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY INDEX"})," ( ",(0,o.jsx)(n.em,{children:"refElemento"})," ; ",(0,o.jsx)(n.em,{children:"indexAtrib"})," ; ",(0,o.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,o.jsx)(n.em,{children:"valorAtrib"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"refElemento"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"indexAtrib"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de \xedndice de atributo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomeAtrib"}),(0,o.jsx)(n.td,{children:"Variable"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nome atributo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valorAtrib"}),(0,o.jsx)(n.td,{children:"Variable"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valor atributo"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"O comando DOM GET XML ATTRIBUTE BY INDEX permite conhecer o nome assim como o valor de um atributo especificado por seu n\xfamero de \xedndice."}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"refElemento"})," a refer\xeancia de um elemento XML e em ",(0,o.jsx)(n.em,{children:"indexAtrib"})," o n\xfamero de \xedndice do atributo que queira conhecer o nome. O nome se retorna no par\xe2metro ",(0,o.jsx)(n.em,{children:"nomeAtrib"})," e seu valor se retorna no par\xe2metro ",(0,o.jsx)(n.em,{children:"valorAtrib"}),". 4D tentar\xe1 converter o valor obtido no tipo de vari\xe1vel passada como par\xe2metro. Se o tipo vari\xe1vel n\xe3o for definido, o valor \xe9 retornado em tipo texto como padr\xe3o."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": O n\xfamero de \xedndice n\xe3o corresponde \xe0 localiza\xe7\xe3o do atributo no arquivo XML mostrado em forma de texto. Em XML, o \xedndice de um atributo indica sua posi\xe7\xe3o entre os atributos classificados por ordem alfab\xe9tica (em fun\xe7\xe3o de seu nome). Para ver uma ilustra\xe7\xe3o deste principio, consulte o exemplo do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/dom-count-xml-attributes",children:"DOM Count XML attributes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se o valor passado em ",(0,o.jsx)(n.em,{children:"indexAtrib"})," \xe9 superior ao n\xfamero de atributos presentes no elemento XML, se retorna um erro."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/dom-count-xml-attributes",children:"DOM Count XML attributes"}),". ."]}),"\n",(0,o.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"729"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(667294);let o={},d=r.createContext(o);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);