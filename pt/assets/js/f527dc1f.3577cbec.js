"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35688"],{707168:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>c,assets:()=>r,toc:()=>i,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","description":"DOM GET XML ELEMENT NAME ( refElemento ; nomeElemento )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-name","permalink":"/docs/pt/commands/dom-get-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","slug":"/commands/dom-get-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML element","permalink":"/docs/pt/commands/dom-get-xml-element"},"next":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/pt/commands/dom-get-xml-element-value"}}'),m=t("785893"),s=t("250065");let d={id:"dom-get-xml-element-name",title:"DOM GET XML ELEMENT NAME",slug:"/commands/dom-get-xml-element-name",displayed_sidebar:"docs"},l=void 0,r={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:"DOM GET XML ELEMENT NAME"})," ( ",(0,m.jsx)(n.em,{children:"refElemento"})," ; ",(0,m.jsx)(n.em,{children:"nomeElemento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:"Par\xe2metro"}),(0,m.jsx)(n.th,{children:"Tipo"}),(0,m.jsx)(n.th,{}),(0,m.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:"refElemento"}),(0,m.jsx)(n.td,{children:"Text"}),(0,m.jsx)(n.td,{children:"\u2192"}),(0,m.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:"nomeElemento"}),(0,m.jsx)(n.td,{children:"Variable"}),(0,m.jsx)(n.td,{children:"\u2190"}),(0,m.jsx)(n.td,{children:"Nome do elemento"})]})]})]}),"\n",(0,m.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,m.jsxs)(n.p,{children:["O comando DOM GET XML ELEMENT NAME retorna no par\xe2metro ",(0,m.jsx)(n.em,{children:"nomeElemento"}),", o nome do elemento XML designado por ",(0,m.jsx)(n.em,{children:"refElemento"}),". Se o tipo de vari\xe1vel nomeElemento n\xe3o for definido, o tipo texto \xe9 usado como padr\xe3o."]}),"\n",(0,m.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o sobre os nomes de elementos XML, consulte a se\xe7\xe3o ",(0,m.jsx)(n.em,{children:"Vis\xe3o Geral dos comandos XML DOM"})]}),"\n",(0,m.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,m.jsx)(n.p,{children:"Este m\xe9todo devolve o nome do elemento $xml_Element_Ref:"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Element_Ref : Text\n\xa0var $nom : Text\n\xa0\n\xa0DOM GET XML ELEMENT NAME($xml_Element_Ref;$nom)\n"})}),"\n",(0,m.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,m.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,m.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.a,{href:"/docs/pt/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,m.jsx)(n.br,{}),"\n",(0,m.jsx)(n.a,{href:"/docs/pt/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,m.jsx)(n.br,{}),"\n",(0,m.jsx)(n.a,{href:"/docs/pt/commands/dom-set-xml-element-name",children:"DOM SET XML ELEMENT NAME"})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var o=t(667294);let m={},s=o.createContext(m);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(m):e.components||m:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);