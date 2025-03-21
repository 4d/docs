"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47063"],{194632:function(e,n,a){a.r(n),a.d(n,{default:()=>A,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>m,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/append-to-list","title":"APPEND TO LIST","description":"APPEND TO LIST ( lista ; textoElem ; refElem {; sublista ; expandida} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/append-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/append-to-list","permalink":"/docs/pt/commands/append-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-to-list","title":"APPEND TO LIST","slug":"/commands/append-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Hierarchical Lists","permalink":"/docs/pt/commands/theme/Hierarchical-Lists"},"next":{"title":"CLEAR LIST","permalink":"/docs/pt/commands/clear-list"}}'),t=a("785893"),o=a("250065");let r={id:"append-to-list",title:"APPEND TO LIST",slug:"/commands/append-to-list",displayed_sidebar:"docs"},i=void 0,d={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"APPEND TO LIST"})," ( ",(0,t.jsx)(n.em,{children:"lista"})," ; ",(0,t.jsx)(n.em,{children:"textoElem"})," ; ",(0,t.jsx)(n.em,{children:"refElem"})," {; ",(0,t.jsx)(n.em,{children:"sublista"})," ; ",(0,t.jsx)(n.em,{children:"expandida"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia da lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"textoElem"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texto do novo elemento de lista (m\xe1x. 255 caracteres)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia \xfanico do novo elemento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sublista"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Sub-lista opcional para adicionar ao novo elemento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expandida"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Indica se as sub-listas opcionais ser\xe3o expandidas ou contra\xeddas"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando APPEND TO LIST  adiciona um novo elemento \xe0 lista hier\xe1rquica cujo n\xfamero de refer\xeancia se passa em ",(0,t.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pode passar o texto do item em itemText. Pode passar uma string ou express\xf5es de texto de at\xe9 2 billh\xf5es caracteres. A partir de 4D v16 R4, se o item for associado com uma a\xe7\xe3o padr\xe3o pode passar a constante ak standard action title em itemText para automaticamente usar o nome da a\xe7\xe3o localizada. Para saber mais veja a se\xe7\xe3o ",(0,t.jsx)(n.em,{children:"A\xe7\xf5es padr\xf5es"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["O n\xfamero de refer\xeancia \xfanico do elemento (do tipo Inteiro longo) se passa em ",(0,t.jsx)(n.em,{children:"refElem"}),". Ainda que classificamos este n\xfamero de refer\xeancia como \xfanico, na verdade pode passar o valor que desejar. Consulte a se\xe7\xe3o ",(0,t.jsx)(n.em,{children:"Gerenciar Listas Hier\xe1rquicas"})," para maior informa\xe7\xe3o sobre o par\xe2metro ",(0,t.jsx)(n.em,{children:"refElem."})]}),"\n",(0,t.jsxs)(n.p,{children:["Igualmente se deseja que um elemento tenha elementos filhos, passe um n\xfamero de refer\xeancia de lista v\xe1lido no par\xe2metro ",(0,t.jsx)(n.em,{children:"sublista"}),". Neste caso, tamb\xe9m deve passar o par\xe2metro ",(0,t.jsx)(n.em,{children:"expandido"}),". Passe ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," ou ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," neste par\xe2metro de maneira que a sub-lista se mostre exibida ou contra\xedda respectivamente."]}),"\n",(0,t.jsxs)(n.p,{children:["A refer\xeancia da lista que passa em ",(0,t.jsx)(n.em,{children:"sublista"})," deve fazer refer\xeancia a uma lista existente. A lista existente poderia ter apenas um n\xedvel ou ter sub-listas. Se n\xe3o deseja adicionar uma lista filha ao novo elemento, omita o par\xe2metro ou passe 0. Mesmo que ambos s\xe3o opcionais, os par\xe2metros ",(0,t.jsx)(n.em,{children:"sublista"})," e ",(0,t.jsx)(n.em,{children:"desplegada"})," devem ser passadas de forma conjunta."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Dicas:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Para inserir um novo elemento em uma lista, utilize ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/insert-in-list",children:"INSERT IN LIST"}),". Para mudar o texto de um elemento existente ou modificar sua lista filha ao igual que seu estado expandido, utilize ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-list-item",children:"SET LIST ITEM"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Para mudar a apar\xeancia do novo elemento adicionado utilize ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Esta \xe9 uma vista parcial da estrutura de um banco:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(671663).Z+"",width:"320",height:"210"})}),"\n",(0,t.jsx)(n.p,{children:"As tabelas [Departamentos] e [Empregados] cont\xe9m os registros a seguir:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(971833).Z+"",width:"412",height:"95"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(999594).Z+"",width:"380",height:"215"})}),"\n",(0,t.jsxs)(n.p,{children:["Voc\xea deseja mostrar uma lista hier\xe1rquica, chamada ",(0,t.jsx)(n.em,{children:"hlList"}),", que mostre os departamentos e para cada departamento, uma lista fixa que mostre os empregados que trabalham nesse departamento. O m\xe9todo de objeto de ",(0,t.jsx)(n.em,{children:"hlList"})," es:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto de lista hier\xe1rquica hlList\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList;$hSubList;$vlDepartament;$vlEmpregado;$v1DepartmentID : Integer\n\xa0\xa0// Criar uma nova lista hier\xe1rquica vazia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=New list\n\xa0\xa0// Selecionar todos os registros da tabela [Departamentos]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Departamentos])\n\xa0\xa0// Para cada departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlDepartament;1;Records in selection([Departamentos]))\n\xa0\xa0// Selecionar os empregados desse departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Departamentos]Nome)\n\xa0\xa0// Quantos h\xe1?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbEmpregados:=Records in selection([Empregados])\n\xa0\xa0// H\xe1 ao menos um empregado neste departamento?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbEmpleados>0)\n\xa0\xa0// Criar uma lista filha para o elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSubList:=New list\n\xa0\xa0// Para cada Empregado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlEmpregado;1;Records in selection([Empregados]))\n\xa0\xa0// Adicionar o elemento Empregado \xe0 sublista\n\xa0\xa0// Note que o campo ID do registro [Empregados]\n\xa0\xa0// se passa como n\xfamero de refer\xeancia do elemento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST($hSubList;[Empregados]Sobrenome+", "+[Empregados]Nome;[Empregados]ID))\n\xa0\xa0// Ir ao seguinte registro [Empregados]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Empregados])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// No Empregados, n\xe3o lista filha para o elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSubList:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Adicionar o elemento Departamento \xe0 lista principal\n\xa0\xa0// Note que o n\xfamero do registro [Departamentos]\n\xa0\xa0// se passa como n\xfamero de refer\xeancia do elemento. O bit #31\n\xa0\xa0// do n\xfamero de refer\xeancia do elemento \xe9 for\xe7ado a um de maneira que possamos\n\xa0\xa0// distinguir entre os elementos Departamentos e Empregados. Ver nota sobre porque\n\xa0\xa0// podemos utilizar este bit como informa\xe7\xe3o suplementar sobre o elemento.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST(hlList;[Departamentos]Nome;[Departamentos]ID?+31;$hSublist;$hSubList #0)\n\xa0\xa0// Atribuir o elemento Departamento em negrito para enfatizar a hierarquia da lista\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM PROPERTIES(hlList;0;False;Bold;0)\n\xa0\xa0// Ir ao seguinte Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Departamentos])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Ordenar toda a lista em ordem ascendente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT LIST(hlList;>)\xa0// Mostrar a lista utilizando o estilo Windows\n\xa0\xa0// e for\xe7ar a altura de linha m\xednima a 14 Pts\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST PROPERTIES(hlList;Ala Windows;Windows node;14)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// A lista j\xe1 n\xe3o \xe9 necess\xe1ria; N\xe3o esque\xe7a de apag\xe1-la!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Double Clicked)\n\xa0\xa0// H\xe1 um duplo clique\n\xa0\xa0// Obter a posi\xe7\xe3o do elemento selecionado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlItemPos:=Selected list items(hlList)\n\xa0\xa0// Verificar a posi\xe7\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlItemPos #0)\n\xa0\xa0// Obter a informa\xe7\xe3o do elemento da lista\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET LIST ITEM(hlList;$vlItemPos;$vlItemRef;$vsItemText;$vlItemSubList;$vbItemSubExpanded)\n\xa0\xa0// Este elemento \xe9 elemento de um Departamento?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlItemRef ?? 31)\n\xa0\xa0// Se for assim, \xe9 um duplo clique em um elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Voc\xea fez duplo clique no elemento Departamento "+Char(34)+$vsItemText+Char(34)+".")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Se n\xe3o, \xe9 um duplo clique em um elemento Empregado\n\xa0\xa0// Utilizando o n\xfamero de refer\xeancia do elemento pai encontrar o registro [Departamentos]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$v1DepartmentID:=List item parent(hlList;$vlItemRef)?-31)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Departamentos];[Departamentos]ID=$vlDepartmentID)\n\xa0\xa0// Informar onde trabalha o Empregado e a quem lhe reporta\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Voc\xea fez duplo clique no elemento Empregado "+Char(34)+$vsItemText+Char(34)+" que trabalha no Departamento "+Char(34)+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Departamentos]Nome+Char(34)+" cujo gerente \xe9 "+Char(34)+[Departamentos]Gerente+Char(34)+".")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n\xa0\n\xa0\xa0// Nota: 4D pode armazenar at\xe9 1 bilh\xe3o de registros por tabela.\n\xa0\xa0// Em nosso exemplo, utilizamos o bit #31 do byte superior n\xe3o utilizado para\n\xa0\xa0// diferenciar os elementos de Empregados e Departamentos.\n'})}),"\n",(0,t.jsx)(n.p,{children:"Neste exemplo, s\xf3 h\xe1 uma raz\xe3o para estabelecer uma diferen\xe7a entre os elementos [Departamentos] e [Empregados]:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Armazenamos n\xfameros de registros nos n\xfameros de refer\xeancia dos elementos; portanto, provavelmente terminaremos com elementos [Departamentos] cujo n\xfamero de refer\xeancia de elemento s\xe3o os mesmos que os dois elementos [Empregados]."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Utilizamos o comando List parent item para recuperar o pai do elemento selecionado. Se clicarmos em um elemento [Empregados] cujo n\xfamero de registro associado \xe9 10, e se existir tamb\xe9m um elemento [Departamentos] que tem o n\xfamero 10, o elemento [Departamentos] ser\xe1 encontrado primeiro por List parent item quando esta fun\xe7\xe3o analize a lista para localizar o elemento com o n\xfamero de refer\xeancia do elemento que passamos. O comando devolver\xe1 o pai do elemento [Departamentos] e n\xe3o o pai do elemento [Empregados]."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Portanto, fizemos que os n\xfameros de refer\xeancia dos elementos sejam \xfanicos, n\xe3o porque queiramos n\xfamero \xfanicos, se n\xe3o por que necessitamos diferenciar os elementos de [Departamentos] e [Empregados]."}),"\n",(0,t.jsx)(n.p,{children:"Quando o formul\xe1rio \xe9 executado, a lista ser\xe1 vista desta forma:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(282699).Z+"",width:"258",height:"295"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este exemplo \xe9 \xfatil para prop\xf3sitos de interface de usu\xe1rio se trabalhar com um n\xfamero limitado de registros. Lembre que as listas s\xe3o conservadas em mem\xf3ria, n\xe3o construa interfaces de usu\xe1rio com listas hier\xe1rquicas que contenham milh\xf5es de elementos."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/insert-in-list",children:"INSERT IN LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-list-item",children:"SET LIST ITEM"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"376"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},671663:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict334094.en-05c0a14701471e4b0f6e2ae821465fd9.png"},971833:function(e,n,a){a.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},999594:function(e,n,a){a.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},282699:function(e,n,a){a.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return r}});var s=a(667294);let t={},o=s.createContext(t);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);