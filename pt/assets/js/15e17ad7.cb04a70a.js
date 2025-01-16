"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69983"],{104223:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sax-open-xml-element","title":"SAX OPEN XML ELEMENT","description":"SAX OPEN XML ELEMENT ( documento ; etiqueta {; nomeAtrib ; valorAtributo} {; nomeAtrib2 ; valorAtributo2 ; ... ; nomeAtribN ; valorAtributoN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-open-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element","permalink":"/docs/pt/20-R7/commands/sax-open-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-open-xml-element","title":"SAX OPEN XML ELEMENT","slug":"/commands/sax-open-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML PROCESSING INSTRUCTION","permalink":"/docs/pt/20-R7/commands/sax-get-xml-processing-instruction"},"next":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/pt/20-R7/commands/sax-open-xml-element-arrays"}}'),s=r("785893"),o=r("250065");let d={id:"sax-open-xml-element",title:"SAX OPEN XML ELEMENT",slug:"/commands/sax-open-xml-element",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT"})," ( ",(0,s.jsx)(n.em,{children:"documento"})," ; ",(0,s.jsx)(n.em,{children:"etiqueta"})," {; ",(0,s.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,s.jsx)(n.em,{children:"valorAtributo"}),"} {; ",(0,s.jsx)(n.em,{children:"nomeAtrib2"})," ; ",(0,s.jsx)(n.em,{children:"valorAtributo2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomeAtribN"})," ; ",(0,s.jsx)(n.em,{children:"valorAtributoN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documento"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"etiqueta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do elemento a abrir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeAtrib"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome de atributo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorAtributo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor do atributo"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SAX OPEN XML ELEMENT permite adicionar um novo elemento no documento XML referenciado por ",(0,s.jsx)(n.em,{children:"documento"}),", assim como, opcionalmente, atributos e seus valores."]}),"\n",(0,s.jsx)(n.p,{children:"O elemento adicionado est\xe1 \u201Caberto\u201D no documento (a etiqueta de final n\xe3o foi adicionada). Para fechar um elemento criado utilizando este comando, deve:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Utilizar o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),", ou"]}),"\n",(0,s.jsxs)(n.li,{children:["Fechar o documento XML. Neste caso, 4D adicionar\xe1 automaticamente as etiquetas XML de fechamento necess\xe1rias.\nEm ",(0,s.jsx)(n.em,{children:"etiqueta"}),", passe o nome do elemento a criar. Este nome apenas pode conter letras, n\xfameros e os caracteres \u201C.\u201D, \u201C-\u201C,\u201D_\u201D e \u201C:\u201D. Se for passado um caractere inv\xe1lido em etiqueta, se gerar\xe1 um erro."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Opcionalmente, o comando permite passar um ou v\xe1rios pares de atributos/valores (em forma de vari\xe1veis, campos ou valores literais) utilizando os par\xe2metros ",(0,s.jsx)(n.em,{children:"nomeAtributo e valorAtributo"}),". Pode passar tantos pares atributo/valor como queira."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"A seguinte instru\xe7\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vElement:="Livro"\n\xa0SAX OPEN XML ELEMENT($DocRef;vElement)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... escrever\xe1 a linha abaixo no documento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0<book< pre=""></book<>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsx)(n.p,{children:"Se passar em tag um caractere inv\xe1lido, se gera um erro."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sax-open-xml-element-arrays",children:"SAX OPEN XML ELEMENT ARRAYS"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"853"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);