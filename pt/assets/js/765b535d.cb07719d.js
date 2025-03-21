"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["879"],{427522:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","description":"QUERY SELECTION BY ATTRIBUTE ( {;}{operadorConj ;} campoObj ; rotaAtributo ; operadorPesq ; valor {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/query-selection-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-by-attribute","permalink":"/docs/pt/commands/query-selection-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-by-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","slug":"/commands/query-selection-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION","permalink":"/docs/pt/commands/query-selection"},"next":{"title":"QUERY SELECTION BY FORMULA","permalink":"/docs/pt/commands/query-selection-by-formula"}}'),t=r("785893"),d=r("250065");let a={id:"query-selection-by-attribute",title:"QUERY SELECTION BY ATTRIBUTE",slug:"/commands/query-selection-by-attribute",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," ( {",(0,t.jsx)(n.em,{children:"umaTabela"}),"}{;}{",(0,t.jsx)(n.em,{children:"operadorConj"})," ;} ",(0,t.jsx)(n.em,{children:"campoObj"})," ; ",(0,t.jsx)(n.em,{children:"rotaAtributo"})," ; ",(0,t.jsx)(n.em,{children:"operadorPesq"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"umaTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabela para a quel vai retornar uma sele\xe7\xe3o de registros, ou tabela Padr\xe3o se omitido"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"operadorConj"}),(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Operador Conjun\xe7\xe3o para usar para unir m\xfaltiplas pesquisas (se alguma)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"campoObj"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Campo objeto para atributos de pesquisa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rotaAtributo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome ou rota do atributo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"operadorPesq"}),(0,t.jsx)(n.td,{children:"*, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Operador Pesquisa (comparador)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Text, Number, Date, Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor a comparar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Continua flag de pesquisa"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," realiza as mesmas a\xe7\xf5es que ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),". A diferen\xe7a entre os dois comandos \xe9 o alcance da pesquisa:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," procura por registros entre todos os registros na tabela."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," procura por registros entre os registros atualmente selecionados na tabela."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," procura por registros em uma ",(0,t.jsx)(n.em,{children:"umaTabela"}),". O comando ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," muda a sele\xe7\xe3o de ",(0,t.jsx)(n.em,{children:"tabela"})," para o processo atual e faz com que o primeiro reigstro da nova sele\xe7\xe3o vire o registro atual."]}),"\n",(0,t.jsxs)(n.p,{children:["Para saber mais, veja a descri\xe7\xe3o do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," \xe9 \xfatil quando uma pesquisa n\xe3o pode ser definida usando uma combina\xe7\xe3o de ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," (e ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/query",children:"QUERY"}),") pode ser unidos com o par\xe2metro * . Tipicamente, \xe9 o caso quando quiser pesquisar uma sele\xe7\xe3o atual que n\xe3o resulta de uma pesquisa anterior, mas de comandos tais como ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/use-set",children:"USE SET"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser encontrar pessoas com uma idade entre 20 e 30 nos registros que foram anteriormente ressaltados pelo usu\xe1rio:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0USE SET("UserSet")\xa0//cria uma nova selecao atual\n\xa0QUERY SELECTION BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>;20;*)\n\xa0QUERY SELECTION BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30)\xa0//ativa a pesquisa\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1424"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar o registro atual"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(667294);let t={},d=s.createContext(t);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);