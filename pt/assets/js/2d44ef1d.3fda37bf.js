"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88932"],{571499:function(e,s,a){a.r(s),a.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>t,contentTitle:()=>d});var o=JSON.parse('{"id":"Concepts/variables","title":"Vari\xe1veis.","description":"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam dados permanentemente no disco; as vari\xe1veis armazenam dados temporariamente na mem\xf3ria.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Concepts/variables.md","sourceDirName":"Concepts","slug":"/Concepts/variables","permalink":"/docs/pt/Concepts/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"variables","title":"Vari\xe1veis."},"sidebar":"docs","previous":{"title":"Diferente de","permalink":"/docs/pt/Concepts/variant"},"next":{"title":"Arrays","permalink":"/docs/pt/Concepts/arrays"}}'),r=a("785893"),n=a("250065");let i={id:"variables",title:"Vari\xe1veis."},d=void 0,c={},t=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Inicializa\xe7\xe3o de vari\xe1veis na linha de declara\xe7\xe3o",id:"inicializa\xe7\xe3o-de-vari\xe1veis-na-linha-de-declara\xe7\xe3o",level:2},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3},{value:"Vari\xe1veis do sistema",id:"vari\xe1veis-do-sistema",level:2}];function l(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os ",(0,r.jsx)(s.strong,{children:"campos"})," armazenam dados permanentemente no disco; as ",(0,r.jsx)(s.strong,{children:"vari\xe1veis"})," armazenam dados temporariamente na mem\xf3ria."]}),"\n",(0,r.jsxs)(s.p,{children:["Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Vari\xe1veis s\xe3o muito iguais\u2014voc\xea tamb\xe9m lhes d\xe1 nomes e diferentes tipos (consulte ",(0,r.jsx)(s.a,{href:"/docs/pt/Concepts/data-types",children:"Tipos de dados"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Ap\xf3s a cria\xe7\xe3o pode usar a vari\xe1vel onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a vari\xe1vel texto em um campo do mesmo tipo"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,r.jsx)(s.p,{children:"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."}),"\n",(0,r.jsx)(s.h2,{id:"cria\xe7\xe3o-de-vari\xe1veis",children:"Cria\xe7\xe3o de vari\xe1veis"}),"\n",(0,r.jsxs)(s.p,{children:["You create variables by declaring them using the ",(0,r.jsx)(s.code,{children:"var"})," keyword."]}),"\n",(0,r.jsxs)(s.p,{children:["Quando as vari\xe1veis s\xe3o declaradas, elas s\xe3o inicializadas com o [",(0,r.jsx)(s.strong,{children:"valor padr\xe3o correspondente ao seu tipo"}),"] (data-types.md#default-values), que elas manter\xe3o durante a sess\xe3o, desde que n\xe3o tenham sido [atribu\xeddas] (#assigning-data). Como alternativa, ao declarar vari\xe1veis, voc\xea pode ",(0,r.jsx)(s.a,{href:"#initializing-variables-in-the-declaration-line",children:"inicializar"})," o valor delas juntamente com o tipo de dados, tudo em uma \xfanica linha."]}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"Embora n\xe3o seja recomendado, voc\xea pode criar vari\xe1veis simplesmente usando-as; n\xe3o precisa necessariamente declar\xe1-las formalmente. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate \xe9 criado  \n // 4D adivinha que \xe9 do tipo de data  \n // e atribui a data atual mais 30 dias\n"})}),(0,r.jsx)(s.p,{children:"Quando uma vari\xe1vel \xe9 criada antes de ser declarada, ela n\xe3o \xe9 inicializada na etapa de declara\xe7\xe3o."})]}),"\n",(0,r.jsx)(s.p,{children:"Para declarar uma vari\xe1vel de qualquer tipo, use a seguinte sintaxe:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,r.jsx)(s.p,{children:"Por exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D. File  //a file class object variable\nvar $myVar //a variant variable\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"varName"})," \xe9 o nome da vari\xe1vel, que deve estar em conformidade com as [regras 4D] (Concepts/identifiers.md) sobre identificadores.\nThis syntax only supports ",(0,r.jsx)(s.a,{href:"#local-process-and-interprocess-variables",children:"local and process variables"})," declarations, thus excluding ",(0,r.jsx)(s.a,{href:"#interprocess-variables",children:"interprocess variables"})," (deprecated) and ",(0,r.jsx)(s.a,{href:"/docs/pt/Concepts/arrays",children:"arrays"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"varType"})," pode ser:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"um [tipo b\xe1sico] (Concepts/data-types.md), caso em que a vari\xe1vel cont\xe9m um valor do tipo declarado,"}),"\n",(0,r.jsxs)(s.li,{children:["uma ",(0,r.jsx)(s.a,{href:"/docs/pt/Concepts/classes",children:"refer\xeancia de classe"})," (classe 4D ou classe de usu\xe1rio), caso em que a vari\xe1vel cont\xe9m uma refer\xeancia a um objeto da classe definida."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.code,{children:"varType"})," for omitido, ser\xe1 criada uma vari\xe1vel do tipo ",(0,r.jsx)(s.strong,{children:"variant"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["A tabela seguinte enumera todos os valores ",(0,r.jsx)(s.code,{children:"varType"})," suportados:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"varType"}),(0,r.jsx)(s.th,{children:"Conte\xfados"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Text"})}),(0,r.jsx)(s.td,{children:"Valor texto"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Date"})}),(0,r.jsx)(s.td,{children:"Valor data"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Time"})}),(0,r.jsx)(s.td,{children:"Valor Hora"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Boolean"})}),(0,r.jsx)(s.td,{children:"Valor booleano"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Integer"})}),(0,r.jsx)(s.td,{children:"Valor inteiro longo"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Real"})}),(0,r.jsx)(s.td,{children:"Valor real"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Pointer"})}),(0,r.jsx)(s.td,{children:"Valor ponteiro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Picture"})}),(0,r.jsx)(s.td,{children:"Valor imagem"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Blob"})}),(0,r.jsx)(s.td,{children:"Valor BLOB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Collection"})}),(0,r.jsx)(s.td,{children:"Valor colec\xe7\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Variant"})}),(0,r.jsx)(s.td,{children:"Valor variant"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Object"})}),(0,r.jsx)(s.td,{children:"Objeto com classe padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"4D.<className>"})}),(0,r.jsx)(s.td,{children:"Objecto do nome da classe 4D"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cs.<className>"})}),(0,r.jsx)(s.td,{children:"Objeto do nome da classe usu\xe1rio"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cs.<namespace><className>"})}),(0,r.jsxs)(s.td,{children:["Objeto do nome da classe do componente ",(0,r.jsx)(s.code,{children:"<namespace>"})]})]})]})]}),"\n",(0,r.jsx)(s.admonition,{title:"Compatibidade",type:"note",children:(0,r.jsxs)(s.p,{children:["The legacy syntax using ",(0,r.jsx)(s.code,{children:"C_XXX"})," commands is deprecated as of 4D 20 R7."]})}),"\n",(0,r.jsx)(s.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Para declarar vari\xe1veis b\xe1sicas locais e de processo:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \nvar $o : 4D. Object\n//also equivalent to C_OBJECT($o)\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Para declarar vari\xe1veis objeto da classe 4D:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myFolder : 4D. Folder\nvar $myFile : 4D. File\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Para declarar as vari\xe1veis objeto da classe usu\xe1rio:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myClass : cs. MyClass\nvar $dataclass : cs. Employee\nvar $entity : cs. EmployeeEntity\n"})}),"\n",(0,r.jsx)(s.h2,{id:"inicializa\xe7\xe3o-de-vari\xe1veis-na-linha-de-declara\xe7\xe3o",children:"Inicializa\xe7\xe3o de vari\xe1veis na linha de declara\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:"Ao declarar vari\xe1veis, voc\xea tem a flexibilidade de especificar seu tipo de dados e fornecer um valor inicial em uma \xfanica instru\xe7\xe3o. Aqui est\xe3o alguns exemplos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n'})}),"\n",(0,r.jsx)(s.p,{children:"As vari\xe1veis tamb\xe9m podem ser declaradas e inicializadas sem mencionar explicitamente seu tipo de dados, caso em que seu tipo ser\xe1 inferido por 4D. Aqui est\xe3o alguns exemplos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $text:="hello"  // Inferred as Text\nvar $number:=20  // Inferred as Real\nvar $obj:={}  // Inferred as an Object\nvar $mycol:=[]  // Inferred as a Collection  \n\n'})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsxs)(s.p,{children:["O tipo inferido pode ser diferente entre [modo interpretado e compilado] (interpreted.md) se a avalia\xe7\xe3o do valor for muito amb\xedgua. Nesse caso, um aviso \xe9 gerado pelo compilador e um tipo variante \xe9 usado. For example, in the following ",(0,r.jsx)(s.em,{children:"$a"})," type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and ",(0,r.jsx)(s.em,{children:"$a"})," will be typed as a variant for the compiled mode."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $class:={test: "a"}\nvar $a:=$class.test\n\n'})})]}),"\n",(0,r.jsxs)(s.p,{children:["4D tenta deduzir o tipo mais geral. Por exemplo, ele usa o tipo Real em vez do tipo Integer quando uma vari\xe1vel \xe9 inicializada com um valor inteiro (por exemplo, ",(0,r.jsx)(s.code,{children:"var $a:=10 //Real type is inferred"}),"). Nesses casos, ou ao inicializar uma vari\xe1vel com um tipo complexo, como a instancia\xe7\xe3o de classe, \xe9 recomend\xe1vel passar o tipo explicitamente."]}),"\n",(0,r.jsx)(s.p,{children:"Geralmente, todos os tipos de vari\xe1veis s\xe3o determinados automaticamente. A exce\xe7\xe3o \xe9 quando voc\xea atribui um valor a uma vari\xe1vel de processo ou interprocesso, o que aciona uma mensagem de aviso."}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"N\xe3o h\xe1 suporte para v\xe1rias atribui\xe7\xf5es em uma linha:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $a; $b : Integer:=15 //error\n\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"atribui\xe7\xe3o-de-dados",children:"Atribui\xe7\xe3o de dados"}),"\n",(0,r.jsx)(s.p,{children:"Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Os dados podem ser colocados e copiados de vari\xe1veis e arrays. O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."}),"\n",(0,r.jsx)(s.p,{children:"O operador de atribui\xe7\xe3o \xe9 a maneira mais importante de criar uma vari\xe1vel e jogar dados nela. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,r.jsxs)(s.p,{children:["cria a vari\xe1vel ",(0,r.jsx)(s.em,{children:"MyNumber"})," e coloca o n\xfamero 3 nela. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Geralmente n\xe3o \xe9 recomendado criar vari\xe1veis sem ",(0,r.jsx)(s.a,{href:"#declaring-variables",children:"declarar seu tipo"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar colocar o valor de MyNumber em um campo chamado [Products]Size, voc\xea escreveria ",(0,r.jsx)(s.em,{children:"MyNumber"})," no lado direito do operador de atribui\xe7\xe3o:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Nesse caso, ",(0,r.jsx)(s.em,{children:"[Products]Size"})," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."]}),"\n",(0,r.jsx)(s.h2,{id:"vari\xe1veis-locais-processo-e-inter-processo",children:"Vari\xe1veis locais, processo e inter-processo"}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea pode criar tr\xeas tipos de vari\xe1veis: ",(0,r.jsx)(s.strong,{children:"local"}),", ",(0,r.jsx)(s.strong,{children:"processo"})," e ",(0,r.jsx)(s.strong,{children:"interprocesso"}),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."]}),"\n",(0,r.jsx)(s.h3,{id:"vari\xe1veis-locais",children:"Vari\xe1veis locais"}),"\n",(0,r.jsx)(s.p,{children:'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'}),"\n",(0,r.jsx)(s.p,{children:"Poder\xe1 querer utilizar uma vari\xe1vel local para:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Evitar conflitos com os nomes de outras vari\xe1veis"}),"\n",(0,r.jsx)(s.li,{children:"Utilizar dados temporariamente"}),"\n",(0,r.jsx)(s.li,{children:"Reduzir o n\xfamero de vari\xe1veis do processo"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."}),"\n",(0,r.jsx)(s.p,{children:"Quando trabalhar em um banco de dados com muitos m\xe9todos e vari\xe1veis, geralmente s\xf3 precisa usar uma vari\xe1vel dentro do m\xe9todo no qual trabalha. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."}),"\n",(0,r.jsx)(s.p,{children:"Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,r.jsx)(s.p,{children:"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," Par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para obter mais informa\xe7\xf5es, consulte [Parameters] (Concepts/parameters.md)."]}),"\n",(0,r.jsx)(s.h3,{id:"vari\xe1veis-processo",children:"Vari\xe1veis processo"}),"\n",(0,r.jsx)(s.p,{children:"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."}),"\n",(0,r.jsx)(s.p,{children:"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsx)(s.p,{children:'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'}),"\n",(0,r.jsxs)(s.p,{children:['Um processo pode "espiar e cutucar" as vari\xe1veis de processo de outro processo usando os comandos ',(0,r.jsx)(s.code,{children:"GET PROCESS VARIABLE"})," e ",(0,r.jsx)(s.code,{children:"SET PROCESS VARIABLE"}),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"}),"\n",(0,r.jsx)(s.li,{children:"Gest\xe3o de arrastar e soltar entre processos"}),"\n",(0,r.jsx)(s.li,{children:"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Para obter mais informa\xe7\xf5es, consulte o cap\xedtulo ",(0,r.jsx)(s.strong,{children:"Processos"})," e a descri\xe7\xe3o desses comandos."]}),"\n",(0,r.jsx)(s.h3,{id:"vari\xe1veis-interprocesso",children:"Vari\xe1veis interprocesso"}),"\n",(0,r.jsx)(s.admonition,{title:"Obsoleto",type:"warning",children:(0,r.jsxs)(s.p,{children:["Use of interprocess variables is not recommended since they are not available from ",(0,r.jsx)(s.a,{href:"/docs/pt/Develop/preemptive-processes",children:"preemptive processes"})," and tend to make the code less maintainable."]})}),"\n",(0,r.jsx)(s.p,{children:"As vari\xe1veis interprocessadas est\xe3o dispon\xedveis em toda a base de dados e s\xe3o partilhadas em todos os processos cooperativos. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."}),"\n",(0,r.jsxs)(s.p,{children:["O nome de uma vari\xe1vel de processo sempre come\xe7a com os s\xedmbolos ",(0,r.jsx)(s.code,{children:"<>"}),' \u2014 um sinal "menor que" seguido de um sinal de "maior que"\u2014 seguido de 31 caracteres.']}),"\n",(0,r.jsx)(s.p,{children:"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."}),"\n",(0,r.jsx)(s.h2,{id:"vari\xe1veis-do-sistema",children:"Vari\xe1veis do sistema"}),"\n",(0,r.jsxs)(s.p,{children:["A linguagem 4D gerencia diversas ",(0,r.jsx)(s.strong,{children:"vari\xe1veis sistema"}),", que permitem controlar a execu\xe7\xe3o de diferentes opera\xe7\xf5es. You can test their values and use them as any variable. Todas as vari\xe1veis do sistema s\xe3o ",(0,r.jsx)(s.a,{href:"#process-variables",children:"vari\xe1veis processo"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["As vari\xe1veis do sistema s\xe3o usadas pelos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/command-index",children:"comandos 4D"}),'. Refer to the "System variables and sets" paragraph in the description of a command to find out whether it affects a system variable.']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"System variable name"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"OK"})}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usually set to 1 after a command has displayed a dialog box and the user clicked the ",(0,r.jsx)(s.strong,{children:"OK"})," button, and 0 if they clicked ",(0,r.jsx)(s.strong,{children:"Cancel"}),". Some commands also modify the value of the ",(0,r.jsx)(s.code,{children:"OK"})," system variable when a operation is successfully executed."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Document"})}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:['Contains the "long name" (full path+name) of the last file opened or created using commands such as ',(0,r.jsx)(s.a,{href:"/docs/pt/commands/open-document",children:"Open document"})," or ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/select-log-file",children:"SELECT LOG FILE"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"FldDelimit"}),", ",(0,r.jsx)(s.code,{children:"RecDelimit"})]}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["Contain the character codes that will be used respectively as a field separator (default is ",(0,r.jsx)(s.strong,{children:"Tab"})," (9)) and record separator (default is ",(0,r.jsx)(s.strong,{children:"carriage return"})," (13)) when importing or exporting text. Para usar um separador diferente, atribua um novo valor \xe0 vari\xe1vel do sistema."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"Error"}),", ",(0,r.jsx)(s.code,{children:"Error method"}),", ",(0,r.jsx)(s.code,{children:"Error line"}),", ",(0,r.jsx)(s.code,{children:"Error formula"})]}),(0,r.jsx)(s.td,{children:"Text, Longint"}),(0,r.jsxs)(s.td,{children:["Used in an error-catching method installed by the ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:(0,r.jsx)(s.code,{children:"ON ERR CALL"})})," command. Veja ",(0,r.jsx)(s.a,{href:"/docs/pt/Concepts/error-handling#handling-errors-within-the-method",children:"Tratamento de erros no m\xe9todo"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"MouseDown"})}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-event-call",children:(0,r.jsx)(s.code,{children:"ON EVENT CALL"})}),". Set to 1 when the mouse button is pushed, otherwise set to 0."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"MouseX"}),", ",(0,r.jsx)(s.code,{children:"MouseY"})]}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-event-call",children:(0,r.jsx)(s.code,{children:"ON EVENT CALL"})}),". ",(0,r.jsxs)(s.li,{children:["In a ",(0,r.jsx)(s.code,{children:"MouseDown=1"})," event, ",(0,r.jsx)(s.code,{children:"MouseX"})," and ",(0,r.jsx)(s.code,{children:"MouseY"})," are respectively set to the vertical and horizontal coordinates of the click. Both values are expressed in pixels and use the local coordinate system of the window. "]}),(0,r.jsxs)(s.li,{children:["In case of a picture field or variable, ",(0,r.jsx)(s.code,{children:"MouseX"})," and ",(0,r.jsx)(s.code,{children:"MouseY"})," return the local coordinates of a mouse click in the ",(0,r.jsx)(s.a,{href:"/docs/pt/Events/onClicked",children:(0,r.jsx)(s.code,{children:"On Clicked"})}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/Events/onDoubleClicked",children:(0,r.jsx)(s.code,{children:"On Double Clicked"})})," and ",(0,r.jsx)(s.a,{href:"/docs/pt/Events/onMouseUp",children:(0,r.jsx)(s.code,{children:"On Mouse Up"})})," form events. Local coordinates of the mouse cursor are also returned in the ",(0,r.jsx)(s.a,{href:"/docs/pt/Events/onMouseEnter",children:(0,r.jsx)(s.code,{children:"On Mouse Enter"})})," and ",(0,r.jsx)(s.a,{href:"/docs/pt/Events/onMouseMove",children:(0,r.jsx)(s.code,{children:"On Mouse Move"})})," form events. Para obter mais informa\xe7\xf5es, consulte as ",(0,r.jsx)(s.a,{href:"/docs/pt/FormEditor/pictures#mouse-coordinates-in-a-picture",children:"Coordenadas de Mouse em uma imagem"}),"."]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"KeyCode"})}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-event-call",children:(0,r.jsx)(s.code,{children:"ON EVENT CALL"})}),". Set to the character code of the key that was just pressed. If the key is a function key, ",(0,r.jsx)(s.code,{children:"KeyCode"})," is set to a special code."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Modifiers"})}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-event-call",children:(0,r.jsx)(s.code,{children:"ON EVENT CALL"})}),". Set to the keyboard modifier keys (Ctrl/Command, Alt/Option, Shift, Caps Lock)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"MouseProc"})}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsxs)(s.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-event-call",children:(0,r.jsx)(s.code,{children:"ON EVENT CALL"})}),". Set to the process number in which the last event took place"]})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Therefore, you cannot create a variable, method, or function using any of these variable names."})})]})}function m(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return d},a:function(){return i}});var o=a(667294);let r={},n=o.createContext(r);function i(e){let s=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);