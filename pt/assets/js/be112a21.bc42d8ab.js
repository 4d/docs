"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49204"],{274860:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-entity","title":"SAX GET XML ENTITY","description":"SAX GET XML ENTITY ( documento ; nome ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-get-xml-entity.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-entity","permalink":"/docs/pt/commands/sax-get-xml-entity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-entity.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-get-xml-entity","title":"SAX GET XML ENTITY","slug":"/commands/sax-get-xml-entity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ELEMENT VALUE","permalink":"/docs/pt/commands/sax-get-xml-element-value"},"next":{"title":"SAX Get XML node","permalink":"/docs/pt/commands/sax-get-xml-node"}}'),d=t("785893"),o=t("250065");let r={id:"sax-get-xml-entity",title:"SAX GET XML ENTITY",slug:"/commands/sax-get-xml-entity",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML ENTITY"})," ( ",(0,d.jsx)(n.em,{children:"documento"})," ; ",(0,d.jsx)(n.em,{children:"nome"})," ; ",(0,d.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"documento"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nome"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nome da entidade"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valor"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Entity value"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando SAX GET XML ENTITY permite recuperar o nome e valor de uma entidade XML presente no documento XML referenciado por ",(0,d.jsx)(n.em,{children:"documento"}),". Este comando deve ser chamado com o evento XML Entity SAX. Para maior informa\xe7\xe3o sobre os eventos SAX, consulte a descri\xe7\xe3o do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"No c\xf3digo XML abaixo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE body [\n\xa0\xa0\xa0<!ELEMENT body (element*)>\n\xa0\xa0\xa0<!ELEMENT element (#PCDATA)>\n\xa0\xa0\xa0<!ENTITY nome "Substituto">\n]>\n<body>\n\xa0\xa0\xa0<element>Entidade atualizada por &nome;</element>\n</body>\n'})}),"\n",(0,d.jsxs)(n.p,{children:["A instru\xe7\xe3o devolver\xe1 \u201Cnome\u201D em ",(0,d.jsx)(n.em,{children:"vNom"})," e \u201CSubstituto\u201D em ",(0,d.jsx)(n.em,{children:"vValor"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ENTITY(DocRef;vNom;vValor)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Do contr\xe1rio assume o valor 0 e se gera um erro."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"879"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let d={},o=s.createContext(d);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);