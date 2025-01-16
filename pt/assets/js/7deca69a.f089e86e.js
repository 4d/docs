"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87806"],{115307:function(e,s,a){a.r(s),a.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"commands-legacy/describe-query-execution","title":"DESCRIBE QUERY EXECUTION","description":"DESCRIBE QUERY EXECUTION ( estado )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/describe-query-execution.md","sourceDirName":"commands-legacy","slug":"/commands/describe-query-execution","permalink":"/docs/pt/20-R7/commands/describe-query-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdescribe-query-execution.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"describe-query-execution","title":"DESCRIBE QUERY EXECUTION","slug":"/commands/describe-query-execution","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Queries","permalink":"/docs/pt/20-R7/category/queries"},"next":{"title":"Find in field","permalink":"/docs/pt/20-R7/commands/find-in-field"}}'),o=a("785893"),i=a("250065");let t={id:"describe-query-execution",title:"DESCRIBE QUERY EXECUTION",slug:"/commands/describe-query-execution",displayed_sidebar:"docs"},r=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"DESCRIBE QUERY EXECUTION"})," ( ",(0,o.jsx)(s.em,{children:"estado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"estado"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"True=Ativar an\xe1lises de pesquisas internas, False=Desativar o an\xe1lises de pesquisas internas"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando DESCRIBE QUERY EXECUTION permite ativar ou desativar o modo de an\xe1lise da execu\xe7\xe3o de pesquisas para o processo atual. O comando funciona unicamente no contexto dos comandos de pesquisa da linguagem 4D tal como ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["A chamada do comando com o par\xe2metro ",(0,o.jsx)(s.em,{children:"estado"})," em ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/true",title:"True",children:"True"})," ativa o modo da an\xe1lise de pesquisas. Neste modo, o motor de 4D registra internamente duas s\xe9ries de informa\xe7\xf5es espec\xedficas para cada pesquisa posterior efetuada sobre os dados:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Uma descri\xe7\xe3o interna detalhada da pesquisa justo antes de sua execu\xe7\xe3o, em outras palavras, a pesquisa pr\xe9via (o plano de pesquisa),"}),"\n",(0,o.jsxs)(s.li,{children:["Uma descri\xe7\xe3o interna detalhada da pesquisa que foi executada realmente (a rota de pesquisa).\nA informa\xe7\xe3o registrada inclui o tipo de pesquisa (indexada, seq\xfcencial), o n\xfamero de registro encontrados e o tempo necess\xe1rio para cada crit\xe9rio de pesquisa a executar. Pode ler esta informa\xe7\xe3o utilizando os comandos ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/last-query-plan",children:"Last query plan"})," e ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/last-query-path",children:"Last query path"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Geralmente, a descri\xe7\xe3o do plano de uma pesquisa e sua rota s\xe3o id\xeanticos, mas poderiam eventualmente ser diferentes porque 4D poderia implementar otimiza\xe7\xf5es din\xe2micas durante a execu\xe7\xe3o da pesquisa para melhorar o rendimento. Por exemplo, una pesquisa indexada pode ser convertida dinamicamente em uma pesquisa seq\xfcencial se o motor 4D estima que seria mais r\xe1pida, este \xe9 o caso, quando o n\xfamero de registros nos quais \xe9 realizada a pesquisa for baixo."}),"\n",(0,o.jsxs)(s.p,{children:["Passe ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/false",title:"False",children:"False"})," no par\xe2metro ",(0,o.jsx)(s.em,{children:"estado"})," quando n\xe3o necessite analisar as pesquisas. O modo de an\xe1lise da execu\xe7\xe3o das pesquisas pode tornar lenta a aplica\xe7\xe3o."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"O seguinte exemplo ilustra o tipo de informa\xe7\xe3o obtida utilizando estes comandos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0var $vResultPlan;$vResultPath : Text\n\xa0DESCRIBE QUERY EXECUTION(True)\xa0//modo an\xe1lise\n\xa0QUERY([Employees];[Employees]LastName="T@";*)\xa0// Pesquisa dos empregados cujo sobrenome come\xe7a por T...\n\xa0QUERY([Employees];&;[Companies]Name="H@";*)\xa0// que trabalham para uma empresa cujo nome come\xe7a por H\n\xa0QUERY([Employees];&;[Employees]Salary>2500;*)\xa0// cujo sal\xe1rio \xe9 > 2500\n\xa0QUERY([Employees];&;[Cities]Pop<50000)\xa0// que vivem em uma cidade com menos de 50000 habitantes\n\xa0$vResultPlan:=Last query plan(Description in text format)\n\xa0$vResultPath:=Last query path(Description in text format)\n\xa0DESCRIBE QUERY EXECUTION(False)\xa0//Fim do modelo de an\xe1lise\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Depois de executar este c\xf3digo, ",(0,o.jsx)(s.em,{children:"$vResultPlan"})," e ",(0,o.jsx)(s.em,{children:"$vResultPath"})," cont\xe9m descri\xe7\xf5es das pesquisas realizadas, por exemplo:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-RAW",children:"$vResultPlan : \xa0\xa0\xa0Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies\xa0 :\xa0  Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary\xa0 > 2500) And (Join on Table : Companies\xa0 :\xa0 Employees.Company\xa0 = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})\xa0\xa0 (3 registros encontrados em 1  minuto)\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Se a constante Description in XML Format se passa ao comando ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/last-query-path",title:"Last query path",children:"Last query path"}),", ",(0,o.jsx)(s.em,{children:"$vResultPath"})," cont\xe9m a descri\xe7\xe3o da pesquisa expressada em XML:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-XML",children:'$vResultPath : \n\xa0\xa0\xa0<QueryExecution>\n\xa0\xa0\xa0\xa0\xa0\xa0<steps description="And" time="0" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0</QueryExecution>\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/last-query-path",children:"Last query path"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1044"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return r},a:function(){return t}});var n=a(667294);let o={},i=n.createContext(o);function t(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);