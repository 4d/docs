"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42698"],{778181:function(e,a,r){r.r(a),r.d(a,{default:()=>c,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>m,contentTitle:()=>i});var o=JSON.parse('{"id":"Concepts/arrays","title":"Arrays","description":"Uma array \xe9 uma s\xe9rie ordenada de vari\xe1veis do mesmo tipo. Cada vari\xe1vel \xe9 chamada de elemento da matriz. Um array recebe seu tamanho quando \xe9 criado, depois pode ser redimensionado quantas vezes sejam necess\xe1rio, adicionando, inserindo ou eliminado elementos, ou redimensionando o array atrav\xe9s do mesmo comando usado para cri\xe1-lo. Elementos do array s\xe3o numerados de 1 a N, onde N \xe9 o tamanho do array. Um array sempre possui um elemento zero especial. Arrays s\xe3o vari\xe1veis 4D. Como qualquer vari\xe1vel, um array tem um alcance/escopo e segue as regras da linguagem 4D, mas com algumas diferen\xe7as \xfanicas.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Concepts/arrays.md","sourceDirName":"Concepts","slug":"/Concepts/arrays","permalink":"/docs/pt/Concepts/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"arrays","title":"Arrays"},"sidebar":"docs","previous":{"title":"Vari\xe1veis.","permalink":"/docs/pt/Concepts/variables"},"next":{"title":"P\xe1gina M\xe9todos","permalink":"/docs/pt/Concepts/methods"}}'),n=r("785893"),s=r("250065");let d={id:"arrays",title:"Arrays"},i=void 0,t={},m=[{value:"Criar Arrays",id:"criar-arrays",level:2},{value:"Atribuir valores em arrays",id:"atribuir-valores-em-arrays",level:2},{value:"Atribuindo um array para outro array",id:"atribuindo-um-array-para-outro-array",level:3},{value:"Usar o elemento zero de um array",id:"usar-o-elemento-zero-de-um-array",level:2},{value:"Arrays de duas dimens\xf5es",id:"arrays-de-duas-dimens\xf5es",level:2},{value:"Arrays e mem\xf3ria",id:"arrays-e-mem\xf3ria",level:2}];function l(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Uma ",(0,n.jsx)(a.strong,{children:"array"})," \xe9 uma s\xe9rie ordenada de ",(0,n.jsx)(a.strong,{children:"vari\xe1veis"})," do mesmo tipo. Cada vari\xe1vel \xe9 chamada de ",(0,n.jsx)(a.strong,{children:"elemento"})," da matriz. Um array recebe seu tamanho quando \xe9 criado, depois pode ser redimensionado quantas vezes sejam necess\xe1rio, adicionando, inserindo ou eliminado elementos, ou redimensionando o array atrav\xe9s do mesmo comando usado para cri\xe1-lo. Elementos do array s\xe3o numerados de 1 a N, onde N \xe9 o tamanho do array. Um array sempre possui um ",(0,n.jsx)(a.a,{href:"#using-the-element-zero-of-an-array",children:"elemento zero"})," especial. Arrays s\xe3o vari\xe1veis 4D. Como qualquer vari\xe1vel, um array tem um alcance/escopo e segue as regras da linguagem 4D, mas com algumas diferen\xe7as \xfanicas."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Na maioria dos casos, \xe9 recomendado usar ",(0,n.jsx)(a.strong,{children:"cole\xe7\xf5es"})," em vez de ",(0,n.jsx)(a.strong,{children:"arrays"}),". Collections s\xe3o mais flex\xedveis e oferecem uma maior gama de m\xe9todos dedicados. Para mais informa\xe7\xf5es, por favor consulte a se\xe7\xe3o ",(0,n.jsx)(a.a,{href:"/docs/pt/Concepts/collection",children:"Cole\xe7\xe3o"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"criar-arrays",children:"Criar Arrays"}),"\n",(0,n.jsxs)(a.p,{children:['Pode criar um array com um dos comandos de declara\xe7\xe3o de array no tema "Array". Cada comando de declara\xe7\xe3o de array pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Para mais informa\xe7\xe3o sobre arrays bidimensionais, consulte a se\xe7\xe3o de ',(0,n.jsx)(a.a,{href:"#two-dimensional-arrays",children:"arrays bidimensionais"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"A linha de c\xf3digo abaixo cria (declara) um array Inteiro de 10 elementos:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:" ARRAY INTEGER(aiAnArray;10)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Depois, o c\xf3digo a seguir redimensiona o mesmo array para 20 elementos:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;20)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Depois, o c\xf3digo a seguir redimensiona o mesmo array para 0 elementos:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;0)\n"})}),"\n",(0,n.jsx)(a.h2,{id:"atribuir-valores-em-arrays",children:"Atribuir valores em arrays"}),"\n",(0,n.jsx)(a.p,{children:"Pode referenciar os elementos em um array usando chaves ({\u2026}). Dentro das chaves se utiliza um n\xfamero para dirigir-se a um elemento concreto; este n\xfamero se denomina n\xfamero de elemento. As linhas abaixo p\xf5e cinco nomes em um array chamado atNames e ent\xe3o exibe-os na janela de alerta:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Lembre da sintaxe atNames{$vlElem}. Ao inv\xe9s de especificar um literal num\xe9rico como atNames{3}, pode usar uma vari\xe1vel num\xe9rica para indicar a quais elementos de um array se dirige. Usando a itera\xe7\xe3o fornecida por uma estrutura de loop (",(0,n.jsx)(a.code,{children:"Para...Fim para"}),", ",(0,n.jsx)(a.code,{children:"Repita...At\xe9"})," ou ",(0,n.jsx)(a.code,{children:"Enquanto...Fim enquanto"}),"), peda\xe7os de c\xf3digo compactos podem abordar todos ou parte dos elementos em uma matriz."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Importante:"})," Tenha cuidado para n\xe3o confundir o operador de atribui\xe7\xe3o (:=) com o operador de compara\xe7\xe3o de igualdade (=). As opera\xe7\xf5es de atribui\xe7\xe3o e compara\xe7\xe3o s\xe3o bem diferentes."]}),"\n",(0,n.jsx)(a.h3,{id:"atribuindo-um-array-para-outro-array",children:"Atribuindo um array para outro array"}),"\n",(0,n.jsxs)(a.p,{children:["Diferente de vari\xe1veis texto ou strings, n\xe3o pode atribuir um array para outro. Para copiar (asignar) un array a otro, utilice ",(0,n.jsx)(a.code,{children:"COPY ARRAY"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"usar-o-elemento-zero-de-um-array",children:"Usar o elemento zero de um array"}),"\n",(0,n.jsx)(a.p,{children:"Um array sempre tem um elemento zero. Apesar do elemento zero n\xe3o ser mostrado quando um array for compat\xedvel com um objeto formul\xe1rio, n\xe3o h\xe1 restri\xe7\xf5es (*) ao us\xe1-lo com a linguagem."}),"\n",(0,n.jsx)(a.p,{children:"Aqui h\xe1 outro exemplo: se quiser inicializar um objeto formul\xe1rio com um valor texto mas sem estabelecer um valor padr\xe3o. Pode usar o elemento zero do array:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'  // m\xe9todo para um combo box ou lista drop down\n  // vinculado ao array de vari\xe1vel atName\n Case of\n    :(Form event code=On Load)\n  // Initializar o array (como mostrado acima)\n  // Mas use o elemento zero\n		ARRAY TEXT(atName;5)\n		atName{0}:=Please select an item"\n		atName{1}:="Text1"\n		atName{2}:="Text2"\n		atName{3}:="Text3"\n		atName{4}:="Text4"\n		atName{5}:="Text5"\n	// Posiciona o array para elemento 0\n  		atName:=0\n End case\n'})}),"\n",(0,n.jsx)(a.p,{children:"(*) Entretanto, h\xe1 uma excep\xe7\xe3o: em um array tipo List Box o elemento zero se usa internamente para armazenar o valor anterior de um elemento que se est\xe1 editando, n\xe3o \xe9 poss\xedvel para usar no seu contexto particular."}),"\n",(0,n.jsx)(a.h2,{id:"arrays-de-duas-dimens\xf5es",children:"Arrays de duas dimens\xf5es"}),"\n",(0,n.jsx)(a.p,{children:"Cada comando de declara\xe7\xe3o de comandos pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Exemplo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:" ARRAY TEXT(atTopics;100;50) // Cria um array de texto composto de 100 linhas de 50 colunas\n"})}),"\n",(0,n.jsx)(a.p,{children:"Os arrays de duas dimens\xf5es s\xe3o essencialmente objetos de linguagem; n\xe3o podem se mostrar nem imprimir."}),"\n",(0,n.jsx)(a.p,{children:"No exemplo anterior:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"atTopics \xe9 um array de duas dimens\xf5ees"}),"\n",(0,n.jsx)(a.li,{children:"atTopics{8}{5} \xe9 o 5\xba elemento (5\xaa coluna...) da 8\xaa linha"}),"\n",(0,n.jsx)(a.li,{children:"atTopics{20} \xe9 a 20a linha \xe9 por sua vez um array dimens\xe3o"}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Tamanho do array(atTopics)"})," devolve 100, que \xe9 o n\xfamero de filas"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Tamanho de array(atTopics{17})"})," devolve 50, que \xe9 o n\xfamero de colunas da 17\xaa linha"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"No seguinte exemplo, um ponteiro a cada campo de cada tabela do banco de dados se armazena em um array de duas dimens\xf5es:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Create as many rows (empty and without columns) as there are tables\n $vlLastTable:=Last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns\n  // For each table\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Last field number($vlTable)\n  // Give value of elements\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Insert a column in a row of the table underway\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Assign the "cell" with the pointer\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n'})}),"\n",(0,n.jsx)(a.p,{children:"Sempre que tiver inicializado este array de duas dimens\xf4es, se pedem obter os ponteiros aos campos de uma tabela concreta da seguinte maneira:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"// Obter os ponteiros aos campos para a tabela que se mostra atualmente na tela:\n COPY ARRAY(\u25CAapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Inicializar os campos booleanos e de data\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}-&gt;)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}-&gt;:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}-&gt;)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}-&gt;:=True\n    End case\n End for\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," Como sugere este exemplo, as linhas de um array de duas dimens\xf5es podem ter o mesmo tamanho ou diferentes tamanhos."]}),"\n",(0,n.jsx)(a.h2,{id:"arrays-e-mem\xf3ria",children:"Arrays e mem\xf3ria"}),"\n",(0,n.jsx)(a.p,{children:"A diferen\xe7a dos dados que se armazenam no disco mediante tabelas e registros, um array se mant\xe9m sempre na mem\xf3ria em sua totalidade."}),"\n",(0,n.jsx)(a.p,{children:"Por exemplo, se introduzir todos os c\xf3digos postais dos EUA na tabela [Zip Codes], conteria por volta de 100.000 registros. Al\xe9m disso essa tabela incluiria v\xe1rios campos: o c\xf3digo cep e a cidade, regi\xe3o e estado correspondentes. Se selecionar todos os ceps (zip codes) da Calif\xf3rnia, o motor de banco de dados 4D cria a sele\xe7\xe3o correspondente de registros dentro da tabela [Zip Codes] e ent\xe3o carrega os registros s\xf3 quando forem necess\xe1rios (ou seja quando forem exibidos ou impressos). Ou seja, voc\xea trabalha com uma s\xe9rie ordenada de valores (do mesmo tipo para cada campo) que \xe9 carregada parcialmente desde o disco \xe0 mem\xf3ria pelo motor do banco de dados 4D."}),"\n",(0,n.jsx)(a.p,{children:"Fazer a mesma coisa com arrays seria imposs\xedvel pelas raz\xf5es abaixo:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Para manter os quatro tipos de informa\xe7\xe3o (c\xf3digo postal, cidade, regi\xe3o e estado) teria que manter quatro arrays grandes na mem\xf3ria."}),"\n",(0,n.jsx)(a.li,{children:"Como um array sempre \xe9 mantido na mem\xf3ria inteiramente, teria que manter toda a informa\xe7\xe3o de c\xf3digos postais na mem\xf3ria durante a sess\xe3o inteira, mesmo quando os dados n\xe3o estivessem sendo usados."}),"\n",(0,n.jsx)(a.li,{children:"De novo,  como um array \xe9 sempre mantido na mem\xf3ria em sua totalidade, a cada vez que o banco de dados for iniciados, os quatro arrays teriam que ser carregados e ent\xe3o salvos no disco, mesmo se os dados n\xe3o forem usados ou modificados na sess\xe3o de trabalho."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Conclus\xe3o:"})," Os arrays est\xe3o pensados para manter quantidades razo\xe1veis de dados durante um curto per\xedodo de tempo. Por outro lado, como os arrays s\xe3o mantidos na mem\xf3ria, s\xe3o f\xe1ceis de manejar e r\xe1pidos de manipular."]}),"\n",(0,n.jsx)(a.p,{children:"Entretanto, em algumas circunst\xe2ncias, pode precisar trabalhar com arrays que contenham centenas ou milhares de elementos. A tabela abaixo lista as f\xf3rmulas usadas para calcular a quantidade de mem\xf3ria usada para cada tipo de array:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Tipo de array"}),(0,n.jsx)(a.th,{children:"F\xf3rmula para determinar o uso da memoria em bytes"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Blob"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 12 + Soma de tamanho de cada blob"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Par\xe2metros"}),(0,n.jsx)(a.td,{children:"(31+n\xfamero de elementos)\\N8"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Date"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 6"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Integer"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 2"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Long Integer"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 4"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Object"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Soma de tamanho de cada objeto"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Imagem"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Soma do tamanho de cada imagem"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Ponteiro"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Soma de tamanho de cada ponteiro"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Real"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 20 + (soma da longitude de cada texto) * 2"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Hora"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 4"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Dois dimens\xf5ees"}),(0,n.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 16 + Soma do tamanho de cada array"})]})]})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"O tamanho de um texto em memoria se calcula com esta f\xf3rmula ((Longitude + 1) * 2)"}),"\n",(0,n.jsx)(a.li,{children:"S\xe3o necess\xe1rios alguns bytes adicionais para acompanhar o elemento selecionado, o n\xfamero de elementos, e o pr\xf3prio array."}),"\n"]})]})}function c(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return d}});var o=r(667294);let n={},s=o.createContext(n);function d(e){let a=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);