"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97182"],{255621:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>i,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/dom-set-xml-declaration","title":"DOM SET XML DECLARATION","description":"DOM SET XML DECLARATION ( refElemento ; codifica\xe7ao {; autonomo {; recuo}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-declaration","permalink":"/docs/pt/commands/dom-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-declaration.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-set-xml-declaration","title":"DOM SET XML DECLARATION","slug":"/commands/dom-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML ATTRIBUTE","permalink":"/docs/pt/commands/dom-set-xml-attribute"},"next":{"title":"DOM SET XML ELEMENT NAME","permalink":"/docs/pt/commands/dom-set-xml-element-name"}}'),r=o("785893"),s=o("250065");let t={id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," ( ",(0,r.jsx)(n.em,{children:"refElemento"})," ; ",(0,r.jsx)(n.em,{children:"codifica\xe7ao"})," {; ",(0,r.jsx)(n.em,{children:"autonomo"})," {; ",(0,r.jsx)(n.em,{children:"recuo"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElemento"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codifica\xe7ao"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Conjunto de caracteres usado no documento XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autonomo"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"True=documento \xe9 aut\xf4nomo; False (padr\xe3o) = documento n\xe3o \xe9 aut\xf4nomo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recuo"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Obsoleto, n\xe3o usar"})})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando DOM SET XML DECLARATION permite definir diferentes op\xe7\xf5es que s\xe3o \xfateis na cria\xe7\xe3o da \xe1rvore XML designado por ",(0,r.jsx)(n.em,{children:"elementRef"}),". Estas op\xe7\xf5es fazem refer\xeancia \xe0 codifica\xe7\xe3o e \xe0 propriedade aut\xf4noma da \xe1rvore:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["codifica\xe7\xe3o: indica o conjunto de caracteres utilizado no documento. Como padr\xe3o (se n\xe3o for chamado ao comando), se utiliza o conjunto de caracteres UTF-8 (Unicode comprimido).",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Nota:"})," se passar um conjunto de caracteres que n\xe3o seja suportado por comandos 4D XML, ser\xe1 usado UTF-8. Veja ",(0,r.jsx)(n.em,{children:"Conjuntos de caracteres"})," para uma lista de conjuntos de caracteres suportados (entretanto para a maioria dos casos UTF-8 \xe9 recomendado)."]}),"\n",(0,r.jsxs)(n.li,{children:["aut\xf4nomo: indica se a \xe1rvore \xe9 aut\xf4noma (True) ou se necesita outros arquivos ou recursos externos para seu funcionamento (False). Como padr\xe3o (se o comando n\xe3o for chamado ou se for omitido o par\xe2metro), a \xe1rvore n\xe3o \xe9 aut\xf4noma.\n",(0,r.jsx)(n.strong,{children:"Nota de compatibilidade"}),": O par\xe2metro indenta\xe7\xe3o se conserva por raz\xf5es de compatibilidade com as vers\xf5es anteriores de 4D mas seu uso n\xe3o \xe9 recomendado em 4D v12. De agora em diante, para especificar a indenta\xe7\xe3o do documento, se recomenda utilizar o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["O exemplo define a codifica\xe7\xe3o a utilizar e a op\xe7\xe3o aut\xf4noma do elemento ",(0,r.jsx)(n.em,{children:"elementRef"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML DECLARATION(elementRef;"UTF-16";True)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"859"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return t}});var d=o(667294);let r={},s=d.createContext(r);function t(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);