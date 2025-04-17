"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57496"],{919199:function(e,a,r){r.r(a),r.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/selection-to-array","title":"SELECTION TO ARRAY","description":"SELECTION TO ARRAY {( umCampo | umaTabela ; array {; campo ; array {; campo2 ; array2 ; ... ; campoN ; arrayN}}{; *})}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/selection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/selection-to-array","permalink":"/docs/pt/20-R8/commands/selection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"selection-to-array","title":"SELECTION TO ARRAY","slug":"/commands/selection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECTION RANGE TO ARRAY","permalink":"/docs/pt/20-R8/commands/selection-range-to-array"},"next":{"title":"Size of array","permalink":"/docs/pt/20-R8/commands/size-of-array"}}'),o=r("785893"),n=r("250065");let d={id:"selection-to-array",title:"SELECTION TO ARRAY",slug:"/commands/selection-to-array",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," {( umCampo | umaTabela ; ",(0,o.jsx)(a.em,{children:"array"})," {; ",(0,o.jsx)(a.em,{children:"campo"})," ; ",(0,o.jsx)(a.em,{children:"array"})," {; ",(0,o.jsx)(a.em,{children:"campo2"})," ; ",(0,o.jsx)(a.em,{children:"array2"})," ; ... ; ",(0,o.jsx)(a.em,{children:"campoN"})," ; ",(0,o.jsx)(a.em,{children:"arrayN"}),"}}{; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe2metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"umCampo | umaTabela"}),(0,o.jsx)(a.td,{children:"Campo, Tabela"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Campo usado para pedir dados ou Tabela usada para pedir n\xfameros de registros"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"array"}),(0,o.jsx)(a.td,{children:"Array"}),(0,o.jsx)(a.td,{children:"\u2190"}),(0,o.jsx)(a.td,{children:"Array para receber dados do campo ou n\xfamero de registros"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"campo"}),(0,o.jsx)(a.td,{children:"Field"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Campo a ser requisitado no array"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"array"}),(0,o.jsx)(a.td,{children:"Array"}),(0,o.jsx)(a.td,{children:"\u2190"}),(0,o.jsx)(a.td,{children:"Array a receber os dados do campo"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"*"}),(0,o.jsx)(a.td,{children:"Operador"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Aguarde execu\xe7\xe3o"})]})]})]}),"\n",(0,o.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(a.p,{children:["O comando ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," cria um ou mais arrays e copia os dados nos campos ou n\xfameros de registros da sele\xe7\xe3o atual para os arrays."]}),"\n",(0,o.jsxs)(a.p,{children:["O comando ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," aplica-se \xe0 sele\xe7\xe3o para a tabela designada pelo primeiro par\xe2metro (nome da tabela ou campo). ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"}),", pode executar o seguinte:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Carregar os valores de um ou v\xe1rios campos."}),"\n",(0,o.jsxs)(a.li,{children:["Carrega n\xfameros de registros da tabela usando a sintaxe ",(0,o.jsx)(a.em,{children:"[tabela];array"})]}),"\n",(0,o.jsxs)(a.li,{children:["Carrega valores dos campos relacionados, desde que haja uma rela\xe7\xe3o Muitos para Um autom\xe1tica entre as tabelas ou desde que tenha anteriormente chamado ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," para fazer rela\xe7\xf5es manuais Muitos para Um autom\xe1ticas. Em ambos os casos, os valores s\xe3o carregados a partir de tabelas com v\xe1rios n\xedveis de relacionamento Muitos para Um."]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Cada array \xe9 digitado de acordo com o tipo de campo. H\xe1 duas exce\xe7\xf5es:"}),"\n",(0,o.jsxs)(a.p,{children:["Quando aplica ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," a um campo de tipo Hora, \xe9 importante notar que s\xf3 cria um array de tipo Hora se o array n\xe3o foi definido como de outro tipo. Por exemplo, no seguinte contexto, o array ",(0,o.jsx)(a.em,{children:"myArray"})," permanece como um array de tipo Inteiro longo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(myArray;0)\n\xa0SELECTION TO ARRAY([myTable]myTimeField;myArray)\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Se voc\xea carregar um n\xfamero de registros, eles s\xe3o copiados para um array ",(0,o.jsx)(a.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Inteiro longo"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Quando voc\xea passar o par\xe2metro ",(0,o.jsx)(a.em,{children:"*"}),", 4D n\xe3o executar a linha de instru\xe7\xe3o correspondente imediatamente, mas sim armazena na mem\xf3ria, desta forma voc\xea pode empilhar v\xe1rias linhas terminando com um ",(0,o.jsx)(a.em,{children:"*"}),". Todas essas linhas que aguarda sua execu\xe7\xe3o s\xe3o executadas por uma instru\xe7\xe3o final ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," que n\xe3o tem o par\xe2metro ",(0,o.jsx)(a.em,{children:"*"}),". Por esta raz\xe3o, o comando agora pode ser chamado sem par\xe2metros. Neste caso, os tipos de arrays s\xe3o verificados quando a linha final (sem o par\xe2metro ",(0,o.jsx)(a.em,{children:"*"}),").",(0,o.jsx)(a.br,{}),"\nComo com o comando ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"}),", este princ\xedpio permite quebrar uma instru\xe7\xe3o complexa em um conjunto de linhas, que \xe9 mais f\xe1cil de ler e manter. Voc\xea tamb\xe9m pode inserir instru\xe7\xf5es intermedi\xe1rias ou construir uma matriz dentro de um loop (ver exemplo 2 do comando ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/array-to-selection",children:"ARRAY TO SELECTION"}),")."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"4D Server:"})," O comando ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," \xe9 otimizado para 4D Server. Cada array \xe9 criado no servidor e, em seguida, enviado, na sua totalidade, para a m\xe1quina cliente."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Advert\xeancia:"})," O comando ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"})," pode criar arrays grandes, dependendo do tamanho da sele\xe7\xe3o atual e sobre o tipo e o tamanho dos dados que voc\xea est\xe1 carregando. Arrays residem na mem\xf3ria, ent\xe3o \xe9 uma boa id\xe9ia testar o resultado depois que o comando seja conclu\xeddo. Para fazer isso, teste o tamanho de cada array resultante ou cubra a chamada para o comando, utilizando um m\xe9todo de projeto ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Nota:"})," Depois de uma chamada a ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"}),", a sele\xe7\xe3o atual e registro atual permanecem o mesmo, mas o registro atual n\xe3o \xe9 mais carregado. Se voc\xea precisar usar os valores dos campos no registro atual, use o comando ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/load-record",children:"LOAD RECORD"}),"  ap\xf3s o comando ",(0,o.jsx)(a.strong,{children:"SELECTION TO ARRAY"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(a.p,{children:["No exemplo a seguir, a tabela ",(0,o.jsx)(a.em,{children:"[Pessoas]"})," tem uma rela\xe7\xe3o autom\xe1tica com a tabela ",(0,o.jsx)(a.em,{children:"[Empresa]"}),". Os dois arrays ",(0,o.jsx)(a.em,{children:"asSobrenome"})," e ",(0,o.jsx)(a.em,{children:"asEmpresaDir"})," s\xe3o dimensionados de acordo com o n\xfamero de registros selecionados na tabela ",(0,o.jsx)(a.em,{children:"[Pessoas]"})," e conter\xe1 a informa\xe7\xe3o de ambas as tabelas:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Pessoas]Sobrenome;asSobrenome;[Empresa]Endere\xe7o;asEmpresaDir)\n"})}),"\n",(0,o.jsx)(a.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsxs)(a.p,{children:["O exemplo a seguir retorna o n\xfameros de registro da tabela ",(0,o.jsx)(a.em,{children:"[Clientes]"})," no array ",(0,o.jsx)(a.em,{children:"alNumerosRegistros"})," e os valores nos campos ",(0,o.jsx)(a.em,{children:"[Clientes]Nomes"})," no array ",(0,o.jsx)(a.em,{children:"asNomes"})]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clientes];alNumerosRegistros;[Clientes]Nomes;asNomes)\n"})}),"\n",(0,o.jsx)(a.p,{children:"O mesmo exemplo pode ser escrito:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clientes];alNumerosRegistros;*)\n\xa0SELECTION TO ARRAY([Clientes]Nomes;asNomes;*)\n\xa0SELECTION TO ARRAY\n"})}),"\n",(0,o.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/array-to-selection",children:"ARRAY TO SELECTION"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/20-R8/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,o.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero do comando"}),(0,o.jsx)(a.td,{children:"260"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Thread-seguro"}),(0,o.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return d}});var s=r(667294);let o={},n=s.createContext(o);function d(e){let a=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);