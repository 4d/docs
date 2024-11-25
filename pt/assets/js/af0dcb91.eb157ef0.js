"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58439"],{191203:function(e,a,s){s.r(a),s.d(a,{metadata:()=>o,contentTitle:()=>t,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/query-by-example","title":"QUERY BY EXAMPLE","description":"QUERY BY EXAMPLE ( {;}{*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-example.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-example","permalink":"/docs/pt/commands/query-by-example","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-example.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-example","title":"QUERY BY EXAMPLE","slug":"/commands/query-by-example","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/pt/commands/query-by-attribute"},"next":{"title":"QUERY BY FORMULA","permalink":"/docs/pt/commands/query-by-formula"}}'),r=s("785893"),n=s("250065");let i={id:"query-by-example",title:"QUERY BY EXAMPLE",slug:"/commands/query-by-example",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"QUERY BY EXAMPLE"})," ( {",(0,r.jsx)(a.em,{children:"tabela"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabela"}),(0,r.jsx)(a.td,{children:"Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabela para a qual vai retornar a sele\xe7\xe3o de registros, ou a tabela Padr\xe3o, se omitido"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"*"}),(0,r.jsx)(a.td,{children:"Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Se passado, a barra de rolagem n\xe3o ser\xe1 exibida"})]})]})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:["QUERY BY EXAMPLE realiza a mesma a\xe7\xe3o que o comando de menu Pesquisa por formul\xe1rio... no ambiente Desenho. Este comando mostra o formul\xe1rio de entrada atual como janela de pesquisa. QUERY BY EXAMPLE busca em ",(0,r.jsx)(a.em,{children:"tabela"})," os dados que o usu\xe1rio introduz na janela de pesquisa. O formul\xe1rio deve conter os campos que voc\xea queira utilizar para realizar a pesquisa. A pesquisa \xe9 otimizada; os campos indexados s\xe3o utilizados automaticamente para otimizar a pesquisa."]}),"\n",(0,r.jsx)(a.p,{children:"Ver o manual de Desenho de 4D para maior informa\xe7\xe3o sobre a utiliza\xe7\xe3o do comando de menu pesquisa por formul\xe1rio... do ambiente Desenho."}),"\n",(0,r.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(a.p,{children:"O m\xe9todo neste exemplo mostra o formul\xe1rio minhaPesquisa. Se o usu\xe1rio aceita o formul\xe1rio e executa a Pesquisa (ou seja, se a vari\xe1vel sistema OK toma o valor 1), s\xe3o mostrados os registros que cumprem com o crit\xe9rio de Pesquisa:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Pessoas];"minhaPesquisa")\xa0// Passar ao formulario de entrada\n\xa0QUERY BY EXAMPLE([Pessoas])\xa0// Mostrar o formul\xe1rio e realizar a pesquisa\n\xa0If(OK=1)\xa0// Se o usu\xe1rio valida a pesquisa\n\xa0\xa0\xa0\xa0DISPLAY SELECTION([Pessoas])\xa0// Mostrar os registros\n\xa0End if\n'})}),"\n",(0,r.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(a.p,{children:"Se o usu\xe1rio clicar no bot\xe3o Aceitar, ou pressionar a tecla Enter, a vari\xe1vel sistema OK toma o valor 1, e a pesquisa \xe9 realizada. Se o usu\xe1rio clicar no bot\xe3o Cancelar, ou pressiona a tecla de anula\xe7\xe3o, a vari\xe1vel sistema OK toma o valor 0, e a pesquisa \xe9 cancelada."}),"\n",(0,r.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/pt/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/commands/query",children:"QUERY"})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return i}});var o=s(667294);let r={},n=o.createContext(r);function i(e){let a=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);