"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21281"],{698996:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","description":"DOM SET XML ATTRIBUTE ( refElemento ; nomeAtrib ; valorAtrib {; nomeAtrib2 ; valorAtrib2 ; ... ; nomeAtribN ; valorAtribN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-set-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-attribute","permalink":"/docs/pt/20-R8/commands/dom-set-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","slug":"/commands/dom-set-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/pt/20-R8/commands/dom-remove-xml-element"},"next":{"title":"DOM SET XML DECLARATION","permalink":"/docs/pt/20-R8/commands/dom-set-xml-declaration"}}'),s=r("785893"),d=r("250065");let o={id:"dom-set-xml-attribute",title:"DOM SET XML ATTRIBUTE",slug:"/commands/dom-set-xml-attribute",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM SET XML ATTRIBUTE"})," ( ",(0,s.jsx)(n.em,{children:"refElemento"})," ; ",(0,s.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,s.jsx)(n.em,{children:"nomeAtrib2"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomeAtribN"})," ; ",(0,s.jsx)(n.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refElemento"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeAtrib"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Atributo a estabelecer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorAtrib"}),(0,s.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Novo valor de atributo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando DOM SET XML ATTRIBUTE permite adicionar uno ou v\xe1rios atributos ao elemento XML cuja refer\xeancia se passa no par\xe2metro ",(0,s.jsx)(n.em,{children:"refElemento"}),". Tamb\xe9m permite definir o valor de cada atributo definido."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe nos par\xe2metros ",(0,s.jsx)(n.em,{children:"nomeAtrib e valorAtrib"})," respectivamente o atributo a escrever e seu valor (em forma de vari\xe1veis, campos, ou valores literais). Pode passar tantos atributos/valores como queira."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"valorAtrib"})," pode ser de tipo texto ou de outro tipo (Booleano, inteiro, real, data ou hora). Se passar um valor de um tipo diferente a texto, 4D cuida de sua convers\xe3o a texto, de acordo com os seguintes princ\xedpios:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Exemplo de valor convertido"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Booleano"}),(0,s.jsx)(n.td,{children:'"true" ou "false"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inteiro"}),(0,s.jsx)(n.td,{children:'"123456"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:'"12.34" (o separador decimal sempre \xe9 ".")'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Data"}),(0,s.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (RFC 3339 standard)'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:'"5233" (n\xfamero de segundos)'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Na seguinte fonte XML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>O melhor vendedor</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Se for executado o c\xf3digo abaixo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAtrNom:="Font"\n\xa0vAtrVal:="Verdana"\n\xa0DOM SET XML ATTRIBUTE(vRefElem;vAtrNom;vAtrVal)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Obtemos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title Font=Verdana>O melhor vendedor</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"866"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);