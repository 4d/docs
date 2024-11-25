"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23696"],{46049:function(e,o,s){s.r(o),s.d(o,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/array-to-selection","title":"ARRAY TO SELECTION","description":"ARRAY TO SELECTION {( array ; campo {; array2 ; campo2 ; ... ; arrayN ; campoN}{; *} )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-selection","permalink":"/docs/pt/commands/array-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-to-selection","title":"ARRAY TO SELECTION","slug":"/commands/array-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO LIST","permalink":"/docs/pt/commands/array-to-list"},"next":{"title":"BOOLEAN ARRAY FROM SET","permalink":"/docs/pt/commands/boolean-array-from-set"}}'),a=s("785893"),n=s("250065");let t={id:"array-to-selection",title:"ARRAY TO SELECTION",slug:"/commands/array-to-selection",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"})," {( ",(0,a.jsx)(o.em,{children:"array"})," ; ",(0,a.jsx)(o.em,{children:"campo"})," {; ",(0,a.jsx)(o.em,{children:"array2"})," ; ",(0,a.jsx)(o.em,{children:"campo2"})," ; ... ; ",(0,a.jsx)(o.em,{children:"arrayN"})," ; ",(0,a.jsx)(o.em,{children:"campoN"}),"}{; *} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"array"}),(0,a.jsx)(o.td,{children:"Array"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Array a se copiar na sele\xe7\xe3o"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"campo"}),(0,a.jsx)(o.td,{children:"Field"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Campo para receber os valores do array"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Aguarda execu\xe7\xe3o"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"})," copia um ou mais arrays em uma sele\xe7\xe3o de registros. Todos os campos listados devem pertencer a mesma tabela."]}),"\n",(0,a.jsx)(o.p,{children:"Se uma sele\xe7\xe3o existir no momento da chamada, os elementos do array s\xe3o colocados dentro dos registros, baseados na ordem dos arrays e na ordem dos registros. Se h\xe1 mais elementos que registros, novos registros s\xe3o criados. Os registros, seja novo ou j\xe1 existente, s\xe3o salvos automaticamente."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),': dado que pode criar novos registros, este comando n\xe3o tem estado de s\xf3 leitura da tabela (se existir) (ver [#title id="212"/]).']}),"\n",(0,a.jsx)(o.p,{children:"Todos os arrays devem apresentar o mesmo n\xfamero de elementos. Se os arrays apresentarem tamanhos diferentes, um erro de sintaxe \xe9 gerado."}),"\n",(0,a.jsxs)(o.p,{children:["Este comando tem o efeito reverso do ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/selection-to-array",children:"SELECTION TO ARRAY"}),". Entretanto, o comando ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"})," n\xe3o permite campos de diferentes tabelas, incluindo tabelas relacionadas, mesmo quando existe uma rela\xe7\xe3o autom\xe1tica."]}),"\n",(0,a.jsxs)(o.p,{children:["Quando voc\xea passar o par\xe2metro ",(0,a.jsx)(o.em,{children:"*"}),", 4D n\xe3o executar a linha de instru\xe7\xe3o correspondente imediatamente, mas sim armazena na mem\xf3ria, desta forma voc\xea pode empilhar v\xe1rias linhas terminando com um ",(0,a.jsx)(o.em,{children:"*"}),". Todas essas linhas que aguarda sua execu\xe7\xe3o s\xe3o executadas por um final ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"})," que n\xe3o tem o par\xe2metro ",(0,a.jsx)(o.em,{children:"*"}),". Por esta raz\xe3o, o comando agora pode ser chamado sem par\xe2metros.",(0,a.jsx)(o.br,{}),"\nComo com o ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/query",children:"QUERY"}),", isto permite que voc\xea quebrar uma declara\xe7\xe3o complexas em um conjunto de linhas, que \xe9 mais f\xe1cil de ler e manter. Voc\xea tamb\xe9m pode inserir declara\xe7\xf5es intermedi\xe1rias."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Advert\xeancia:"})," Utilize ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"})," com cautela, porque este comando reescreve as informa\xe7\xf5es dos registros existentes. Se um registro est\xe1 bloqueado por outro processo durante a execu\xe7\xe3o do ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"}),", este registro n\xe3o se modifica. Todos os registros bloqueados se colocam em LockedSet. Depois da execu\xe7\xe3o de ",(0,a.jsx)(o.strong,{children:"ARRAY TO SELECTION"}),", voc\xea pode testar o conjunto LockedSet para ver se cont\xe9m registros bloqueados."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": este comando n\xe3o leva em considera\xe7\xe3o o estado de s\xf3 leitura/leitura-escritura da tabela que cont\xe9m o campo."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"4D Server:"})," o comando \xe9 otimizado por 4D Server. Os arrays s\xe3o enviados pela equipe do cliente para o servidor, e os registros s\xe3o modificados ou criados na equipe do servidor. Como este pedido \xe9 controlado de modo sincronizado, a equipe cliente deve esperar que a opera\xe7\xe3o se complete com \xeaxito. No ambiente de multi-usu\xe1rios ou multi-processos, nenhum registro bloqueado ser\xe1 reescrito."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(o.p,{children:["No exemplo a seguir, os arrays ",(0,a.jsx)(o.em,{children:"asSobrenomes"})," e ",(0,a.jsx)(o.em,{children:"asEmpresas"})," escrevem dados na tabela ",(0,a.jsx)(o.em,{children:"[Pessoas]"}),". Os valores do array ",(0,a.jsx)(o.em,{children:"asSobrenomes"})," s\xe3o localizados no campo ",(0,a.jsx)(o.em,{children:"[Pessoas]Sobrenome"})," e os valores do array ",(0,a.jsx)(o.em,{children:"asEmpresas"})," s\xe3o localizados no campo ",(0,a.jsx)(o.em,{children:"[Pessoas]Empresa"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TO SELECTION(asSobrenomes;[Pessoas]Sobrenome;asEmpresas;[Pessoas]Empresa)\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:"Se quiser copiar uma sele\xe7\xe3o de registroar para uma tablela arquivo selecionando os campos de acordo com o valor da op\xe7\xe3o:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_name;0)\n\xa0ARRAY TEXT($_firstname;0)\n\xa0ARRAY TEXT($_cv;0)\n\xa0ARRAY PICTURE($_photo;0)\n\xa0\n\xa0SELECTION TO ARRAY([Candidate]Name;$_name;*)\n\xa0SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)\n\xa0If(withCV)\xa0//load the CV field\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidate]cv;$_cv;*)\n\xa0End if\n\xa0If(withPhoto)\xa0//carrega o campo foto\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidate]photo;$_photo;*)\n\xa0End if\n\xa0SELECTION TO ARRAY\xa0//executa c\xf3pia\n\xa0\n\xa0REDUCE SELECTION([Candidate_Archive];0)\n\xa0ARRAY TO SELECTION($_name;[Candidate_Archive]Name;*)\n\xa0ARRAY TO SELECTION($_prenom;[Candidate_Archive]Firstname;*)\n\xa0If(withCV)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_cv;[Candidate_Archive]cv;*)\n\xa0End if\n\xa0If(withPhoto)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_photo;[Candidate_Archive]photo;*)\n\xa0End if\n\xa0ARRAY TO SELECTION\n"})}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.em,{children:"Vari\xe1veis sistema"})]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return t}});var r=s(667294);let a={},n=r.createContext(a);function t(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);