"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50726"],{564238:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/sax-set-xml-declaration","title":"SAX SET XML DECLARATION","description":"SAX SET XML DECLARATION ( documento ; codifica\xe7ao {; autonomo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/sax-set-xml-declaration","permalink":"/docs/pt/commands/sax-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-set-xml-declaration","title":"SAX SET XML DECLARATION","slug":"/commands/sax-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/pt/commands/sax-open-xml-element-arrays"},"next":{"title":"XML","permalink":"/docs/pt/category/xml"}}'),t=o("785893"),a=o("250065");let d={id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},r=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,t.jsx)(n.em,{children:"documento"})," ; ",(0,t.jsx)(n.em,{children:"codifica\xe7ao"})," {; ",(0,t.jsx)(n.em,{children:"autonomo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documento"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"codifica\xe7ao"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto de caracteres usado no documento XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autonomo"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"True= o documento \xe9 aut\xf4nomo (standalone); False (padr\xe3o) = documento n\xe3o \xe9 standalone"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," inicializa o documento XML referenciado por ",(0,t.jsx)(n.em,{children:"documento"})," utilizando a codifica\xe7\xe3o especificada. Opcionalmente, pode estabelecer o atributo standalone/aut\xf4nomo."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"codifica\xe7\xe3o"}),": indica o conjunto de caracterees utilizado no documento. Por padr\xe3o (se n\xe3o se llama al comando), se utiliza o conjunto de caracterees UTF-8 (Unicode comprimido).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Nota:"})," se passar um conjunto de caracteres que n\xe3o seja suportado por comandos 4D XML, ser\xe1 usado UTF-8. Veja ",(0,t.jsx)(n.em,{children:"Conjuntos de caracteres"})," para uma lista dos conjuntos de caracteres suportados (entretanto na maioria dos casos \xe9 recomendado UTF-8)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"auton\xf4mo"})," (standalone): indica se o documento \xe9 autonomo (True) ou se depende, para seu funcionamento, de outros arquivos ou de recursos externos (False). Por padr\xe3o (se n\xe3o for chamado o comando ou se o par\xe2metro for omitido), o documento n\xe3o \xe9 aut\xf4nomo."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": Pode especificar a indenta\xe7\xe3o do documento gra\xe7as ao comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"})," antes de escrever qualquer coisa."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando deve ser chamado uma \xfanica vez por documento e antes do primeiro comando de escrita XML no documento; do contr\xe1rio, se gerar\xe1 uma mensagem de erro."}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O c\xf3digo abaixo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SAX SET XML DECLARATION($DocRef;"UTF-16";True)\n'})}),"\n",(0,t.jsx)(n.p,{children:"... escrever\xe1 esta linha no documento:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-document-values",children:"SAX GET XML DOCUMENT VALUES"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return d}});var s=o(667294);let t={},a=s.createContext(t);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);