"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97313"],{268531:function(e,o,d){d.r(o),d.d(o,{metadata:()=>n,contentTitle:()=>s,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"commands-legacy/modified","title":"Modified","description":"Modified ( campo ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modified.md","sourceDirName":"commands-legacy","slug":"/commands/modified","permalink":"/docs/pt/commands/modified","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modified","title":"Modified","slug":"/commands/modified","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIALOG","permalink":"/docs/pt/commands/dialog"},"next":{"title":"MODIFY RECORD","permalink":"/docs/pt/commands/modify-record"}}'),r=d("785893"),a=d("250065");let i={id:"modified",title:"Modified",slug:"/commands/modified",displayed_sidebar:"docs"},s=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Modified"})," ( ",(0,r.jsx)(o.em,{children:"campo"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"campo"}),(0,r.jsx)(o.td,{children:"Field"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Campo a provar"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Boolean"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Verdadeiro se foi assinalado um novo valor ao campo, caso contrario Falso"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Modified"})," retorna ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," se um valor tiver sido atribu\xeddo por programa\xe7\xe3o a ",(0,r.jsx)(o.em,{children:"campo"})," ou se tiver sido modificado durante a entrada de dados. O comando ",(0,r.jsx)(o.strong,{children:"Modified"}),"deve ser utilizado unicamente em um m\xe9todo de formul\xe1rio (ou uma subrotina chamada por um m\xe9todo de formul\xe1rio)."]}),"\n",(0,r.jsxs)(o.p,{children:["Aten\xe7\xe3o, este comando s\xf3 devolve um valor significativo dentro do mesmo ciclo de execu\xe7\xe3o. Particularmente devolve ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," para todos os eventos de formul\xe1rio que correspondam ao antigo ciclo de execu\xe7\xe3o ",(0,r.jsx)(o.em,{children:"_o_During"})]}),"\n",(0,r.jsxs)(o.p,{children:["Durante a entrada de dados, um campo \xe9 considerado modificado se o usu\xe1rio edita o campo (sem importar se modifica o valor original) e logo passa a outro campo ou clicar num controle. Note que o fato de sair de um campo com a ajuda da tecla Tab n\xe3o significa que ",(0,r.jsx)(o.strong,{children:"Modified"})," retorna ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),". O campo deve ser editado para que ",(0,r.jsx)(o.strong,{children:"Modified"})," seja ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Quando se executa um m\xe9todo, se considera que um campo foi modificado se lhe atribui um valor (diferente ou n\xe3o)."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," ",(0,r.jsx)(o.strong,{children:"Modified"})," sempre devolve ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," depois da execu\xe7\xe3o dos comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/push-record",children:"PUSH RECORD"})," e ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/pop-record",children:"POP RECORD"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Em todos os casos, utilize o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/old",children:"Old"})," para detectar se o valor do campo realmente foi modificado."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," apesar de que ",(0,r.jsx)(o.strong,{children:"Modified"}),' pode ser aplicado a todo tipo de campo, ele \xe9 utilizado com o comando [#cmd id="35"/], deve levar em conta as restri\xe7\xf5es que aplicam ao comando [#cmd id="35"/], Para mais detalhes, ver a descri\xe7\xe3o do comando [#cmd id="35"/],']}),"\n",(0,r.jsxs)(o.p,{children:["Durante a entrada de dados, geralmente \xe9 mais f\xe1cil realizar opera\xe7\xf5es em m\xe9todos de objeto com a ajuda do comando ",(0,r.jsx)(o.a,{href:"form-event-code.md",children:"Form event code"})," que utilizar ",(0,r.jsx)(o.strong,{children:"Modified"})," nos m\xe9todos de formul\xe1rio. Como um m\xe9todo de objeto recebe o evento On Data Change quando se modifica um campo, o uso de um m\xe9todo de objeto \xe9 equivalente a utilizar ",(0,r.jsx)(o.strong,{children:"Modified"})," em um m\xe9todo de formul\xe1rio."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," para funcionar corretamente, o comando ",(0,r.jsx)(o.strong,{children:"Modified"})," deve ser utilizado unicamente em um m\xe9todo de formul\xe1rio ou em um m\xe9todo chamado por um m\xe9todo de formul\xe1rio."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(o.p,{children:["O seguinte exemplo prova se o campo ",(0,r.jsx)(o.em,{children:"[Ordens]Quantidade"})," ou o campo ",(0,r.jsx)(o.em,{children:"[Ordens]Pre\xe7o"})," for modificado. Se alguns dos dois foi modificado, ent\xe3o o campo ",(0,r.jsx)(o.em,{children:"[Ordens]Total"})," foi calculado novamente."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0If((Modified([Ordens]Quantidade)|(Modified([Ordens]Pre\xe7o))\n\xa0\xa0\xa0\xa0[Orders]Total :=[Ordens]Quantidade*[Ordens]Pre\xe7o\n\xa0End if\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Note que o mesmo resultado pode ser obtido utilizando a segunda linha como uma subrotina chamada pelos m\xe9todos de objeto dos campos ",(0,r.jsx)(o.em,{children:"[Ordens]Quantidade"})," e ",(0,r.jsx)(o.em,{children:"[Ordens]Pre\xe7o"})," no evento de formul\xe1rio On Data Change."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsxs)(o.p,{children:["Seleciona um registro para a tabela ",(0,r.jsx)(o.em,{children:"[umaTabela]"}),", depois chama m\xfaltiplas subrotinas que podem ser modificadas o campo ",(0,r.jsx)(o.em,{children:"[umaTabela]CampoImportante,"})," mas n\xe3o salva o registro. Ao final do m\xe9todo principal, pode utilizar o comando Modified para determinar se o registro deve ser guardado:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// O registro foi selecionado como registro atual\n\xa0\xa0// Depois realiza a\xe7\xf5es utilizando subrotinas\n\xa0FAZER ALGO\n\xa0FAZER ALGO MAIS\n\xa0N\xc3O ESQUECER DE FAZER ISTO\n\xa0\xa0// ...\n\xa0\xa0// E depois voc\xea testa o campo para determinar se o registro deve ser guardado\n\xa0If(Modified([umaTabela]CampoImportante))\n\xa0\xa0\xa0\xa0SAVE RECORD([umaTabela])\n\xa0End if\n"})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"form-event-code.md",children:"Form event code"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/old",children:"Old"})]}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"32"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,d){d.d(o,{Z:function(){return s},a:function(){return i}});var n=d(667294);let r={},a=n.createContext(r);function i(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);