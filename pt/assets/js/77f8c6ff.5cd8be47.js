"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38782"],{451501:function(e,a,s){s.r(a),s.d(a,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>t,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/query-by-sql","title":"QUERY BY SQL","description":"QUERY BY SQL ( {tabela ;} sqlFormula )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-sql.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-sql","permalink":"/docs/pt/commands/query-by-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-sql.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-sql","title":"QUERY BY SQL","slug":"/commands/query-by-sql","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is field value Null","permalink":"/docs/pt/commands/is-field-value-null"},"next":{"title":"SET FIELD VALUE NULL","permalink":"/docs/pt/commands/set-field-value-null"}}'),n=s("785893"),r=s("250065");let d={id:"query-by-sql",title:"QUERY BY SQL",slug:"/commands/query-by-sql",displayed_sidebar:"docs"},i=void 0,l={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Sobre rela\xe7\xf5es",id:"sobre-rela\xe7\xf5es",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",minhavar:"minhavar",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"QUERY BY SQL"})," ( {",(0,n.jsx)(a.em,{children:"tabela"})," ;} ",(0,n.jsx)(a.em,{children:"sqlFormula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"tabela"}),(0,n.jsx)(a.td,{children:"Table"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Tabela para a qual se devolve a sele\xe7\xe3o de registros  ou tabela padr\xe3o se o par\xe2metro for omitido"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"sqlFormula"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"F\xf3rmula v\xe1lida de pesquisa SQL representando a cl\xe1usula WHERE da pesquisa SELECT"})]})]})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"O comando QUERY BY SQL permite aproveitar diretamente o motor SQL integrado de 4D. Este comando pode executar um pedido simples SELECT que pode ser escrito desta forma:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM tabela\xa0\xa0\xa0\xa0\xa0\xa0WHERE \n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"tabela"})," \xe9 o nome da tabela passada no primeiro par\xe2metro e ",(0,n.jsx)(a.em,{children:"sqlFormula"})," a cadeia de pesquisa passada no segundo par\xe2metro."]}),"\n",(0,n.jsx)(a.p,{children:"Por exemplo, a seguinte instru\xe7\xe3o:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0([Empregados];"nome=\u2019jos\xe9\u2019")\n'})}),"\n",(0,n.jsx)(a.p,{children:"\xe9 equivalente a a pesquisa SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:'\xa0\xa0\xa0SELECT * FROM Empregados WHERE "nome=\u2019jos\xe9\u2019"\n'})}),"\n",(0,n.jsxs)(a.p,{children:["O comando QUERY BY SQL \xe9 similar ao comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),". O comando procura registros na tabela especificada. Modifica a sele\xe7\xe3o atual de ",(0,n.jsx)(a.em,{children:"tabela"})," para o processo atual e transforma o primeiro registro da nova sele\xe7\xe3o no registro atual."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": o comando QUERY BY SQL n\xe3o pode ser utilizado no contexto de uma conex\xe3o SQL externa; ele conecta diretamente ao motor SQL integrado de 4D."]}),"\n",(0,n.jsxs)(a.p,{children:["QUERY BY SQL aplica ",(0,n.jsx)(a.em,{children:"sqlFormula"})," a cada registro da sele\xe7\xe3o da tabela. ",(0,n.jsx)(a.em,{children:"sqlFormula"})," \xe9 uma express\xe3o booleana que deve devolver ",(0,n.jsx)(a.strong,{children:"True"})," ou ",(0,n.jsx)(a.strong,{children:"False"}),". Como sabe, no padr\xe3o SQL, uma condi\xe7\xe3o de pesquisa pode ter um resultado ",(0,n.jsx)(a.strong,{children:"True, False"})," ou NULL. Todos os registros (filas) onde a condi\xe7\xe3o de pesquisa retorna ",(0,n.jsx)(a.strong,{children:"True"})," s\xe3o inclu\xeddas na nova sele\xe7\xe3o atual."]}),"\n",(0,n.jsxs)(a.p,{children:["A express\xe3o",(0,n.jsx)(a.em,{children:"sqlFormula"})," pode ser simples, como a compara\xe7\xe3o de um campo (coluna) com um valor; ou complexa, como um c\xe1lculo. Assim como ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),", QUERY BY SQL pode avaliar a informa\xe7\xe3o nas tabelas relacionadas (ver o exemplo 4). ",(0,n.jsx)(a.em,{children:"sqlFormula"})," deve ser uma instru\xe7\xe3o SQL v\xe1lida, de acordo com o padr\xe3o SQL-2 e relativo \xe0s limita\xe7\xf5es atuais de implementa\xe7\xe3o do SQL em 4D. Para maior informa\xe7\xe3o sobre compatibilidade SQL em 4D, consulte ",(0,n.jsx)(a.em,{children:"Manual de SQL"})," no manual 4D SQL.",(0,n.jsx)(a.br,{}),"\nO par\xe2metro",(0,n.jsx)(a.em,{children:"sqlFormula"})," pode utilizar refer\xeancias a express\xf5es 4D. A Sintaxe a utilizar \xe9 a mesma que para os comandos SQL integrados ou o c\xf3digo inclu\xeddo entre as etiquetas ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,n.jsx)(a.a,{href:"/docs/pt/commands/end-sql",title:"End SQL",children:"End SQL"}),", ou seja: ",(0,n.jsxs)(a.em,{children:["<",(0,n.jsx)(a.minhavar,{children:">"})]})," ou ",(0,n.jsx)(a.em,{children:":MinhaVar"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," este comando \xe9 compat\xedvel com os comandos ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/set-query-limit",children:"SET QUERY LIMIT"})," e ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/set-query-destination",children:"SET QUERY DESTINATION"})]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Lembrete:"})," as refer\xeancias \xe0s vari\xe1veis locais n\xe3o s\xe3o poss\xedveis em modo compilado. Para maior informa\xe7\xe3o sobre a programa\xe7\xe3o SQL em 4D, consulte a se\xe7\xe3o ",(0,n.jsx)(a.em,{children:"Introdu\xe7\xe3o aos comandos SQL"}),"."]}),"\n",(0,n.jsx)(a.h5,{id:"sobre-rela\xe7\xf5es",children:"Sobre rela\xe7\xf5es"}),"\n",(0,n.jsx)(a.p,{children:"QUERY BY SQL n\xe3o utiliza rela\xe7\xf5es entre tabelas definidas no editor de estrutura 4D. Se deseja utilizar os dados relacionados, ter\xe1 que adicionar um JOIN \xe1 pesquisa. Por exemplo, assumindo que temos a seguinte estrutura, com uma rela\xe7\xe3o Muitos-a-Um entre os campos [Pessoas]Cidade e [Cidades]Nome:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0[Pessoas] \xa0\xa0\xa0\xa0\xa0\xa0Nome \xa0\xa0\xa0\xa0\xa0\xa0Cidade \xa0\xa0\xa0[Cidades] \xa0\xa0\xa0\xa0\xa0\xa0Nome \xa0\xa0\xa0\xa0\xa0\xa0Popula\xe7\xe3o\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Utilizando o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),", pode escrever:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([Pessoas];[Cidades]Popula\xe7\xe3o>1000)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Using"}),"\n",(0,n.jsx)(a.p,{children:"Utilizando QUERY BY SQL, deve escrever a seguinte instru\xe7\xe3o, independente de se a rela\xe7\xe3o existe ou n\xe3o:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY BY SQL([Pessoas];"pessoas.cidade=cidades.nome AND cidades.popula\xe7\xe3o>1000")\n'})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": QUERY BY SQL trata as rela\xe7\xf5es Um-a-Muitos e Muitos-a-Um de uma maneira diferente que ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(a.p,{children:"Este exemplo mostra os escrit\xf3rios com vendas superiores a 100. A pesquisa SQL \xe9:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM Escritorios\xa0\xa0\xa0\xa0\xa0\xa0WHERE Vendas > 100\n"})}),"\n",(0,n.jsx)(a.p,{children:"Utilizando o comando QUERY BY SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0C_STRING(30;$formulaPesquisa)\n\xa0$formulaPesquisa:="Vendas > 100"\n\xa0QUERY BY SQL([Escritorios];$formulaPesquisa)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(a.p,{children:"Este exemplo mostra as ordens entre 3.000 e 4.000. A pesquisa SQL \xe9:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM Ordens\xa0\xa0\xa0\xa0\xa0\xa0WHERE Quantidade BETWEEN 3000 AND 4000\n"})}),"\n",(0,n.jsx)(a.p,{children:"Utilizando o comando QUERY BY SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0C_STRING(40;$formulaPesquisa)\n\xa0$formulaPesquisa:="Quantidade BETWEEN 3000 AND 4000"\n\xa0QUERY BY SQL([Ordens];$formulaPesquisa)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(a.p,{children:"Este exemplo mostra como obter o resultado da pesquisa ordenado com um crit\xe9rio espec\xedfico. A pesquisa SQL \xe9:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM Pessoas\xa0\xa0\xa0\xa0\xa0\xa0WHERE Cidade =\u2019Paris\u2019\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ORDER BY Nome\n"})}),"\n",(0,n.jsx)(a.p,{children:"Utilizando o comando QUERY BY SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0C_STRING(40;$formulaPesquisa)\n\xa0$formulaPesquisa:="Cidade= \u2018Paris\u2019 ORDER BY Nome"\n\xa0QUERY BY SQL([Pessoas];$formulaPesquisa)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,n.jsx)(a.p,{children:"Este exemplo mostra uma pesquisa utilizando tabelas relacionadas em 4D. Em SQL deve utilizar um JOIN para simular esta rela\xe7\xe3o. Suponha que temos as duas tabelas abaixo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0[Faturas] com os campos (colunas) seguintes:\xa0\xa0\xa0\xa0\xa0\xa0ID_Fact: Inteiro longo\xa0\xa0\xa0\xa0\xa0\xa0Data_Fact: Data\xa0\xa0\xa0\xa0\xa0\xa0Total: Real\xa0\xa0\xa0[Linhas_Faturas] com as seguintes colunas (campos):\xa0\xa0\xa0\xa0\xa0\xa0ID_Linea: Inteiro longo\xa0\xa0\xa0\xa0\xa0\xa0ID_Fact: Inteiro longo\xa0\xa0\xa0\xa0\xa0\xa0Codigo: Alfa (10)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Existe uma rela\xe7\xe3o Muitos-a-Um de [Linhas_Faturas]ID_Fat com [Faturas]ID_Fat."}),"\n",(0,n.jsxs)(a.p,{children:["Utilizando o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),", pode escrever:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Linhas_Faturas];([Linhas_Faturas]Codigo="FX-200")\xa0&\xa0(Month of([Faturas]Data_Fat)=4))\n'})}),"\n",(0,n.jsx)(a.p,{children:"A pesquisa SQL \xe9:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT ID_Linha\xa0\xa0\xa0\xa0\xa0\xa0FROM Linhas_Faturas, Faturas\xa0\xa0\xa0\xa0\xa0\xa0WHERE Linhas_Faturas.ID_Fat=Faturas.ID_Fat\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0AND Linhas_Faturas.Codigo='FX-200'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0AND MONTH(Faturas.Data_Fat) = 4\n"})}),"\n",(0,n.jsx)(a.p,{children:"Quando utilizar o comando QUERY BY SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0C_STRING(40;$formulaPesquisa)$formulaPesquisa:="Linhas_Faturas.ID_Fat=Faturas.ID_FatAND Linhas_Faturas.Codigo=\u2019FX-200\u2019 AND MONTH(Faturas.Data_Fat)=4"\xa0\n'})}),"\n",(0,n.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsxs)(a.p,{children:["Se o formato da condi\xe7\xe3o de pesquisa for correto, a vari\xe1vel Sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0, e o resultado do comando ser\xe1 uma sele\xe7\xe3o vazia e um erro \xe9 devolvido. Este erro pode ser interceptado por um m\xe9todo instalado utilizando o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"})})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return i},a:function(){return d}});var o=s(667294);let n={},r=o.createContext(n);function d(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);