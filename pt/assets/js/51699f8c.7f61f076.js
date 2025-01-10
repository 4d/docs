"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53935"],{960805:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>n});var o=JSON.parse('{"id":"Concepts/variables","title":"Vari\xe1veis.","description":"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/variables.md","sourceDirName":"Concepts","slug":"/Concepts/variables","permalink":"/docs/pt/19/Concepts/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"variables","title":"Vari\xe1veis."},"sidebar":"docs","previous":{"title":"Diferente de","permalink":"/docs/pt/19/Concepts/variant"},"next":{"title":"Arrays","permalink":"/docs/pt/19/Concepts/arrays"}}'),r=s("785893"),d=s("250065");let i={id:"variables",title:"Vari\xe1veis."},n=void 0,c={},l=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Usando a palavra-chave <code>var</code>",id:"usando-a-palavra-chave-var",level:3},{value:"Exemplos",id:"exemplos",level:4},{value:"Usando uma directiva C_",id:"usando-uma-directiva-c_",level:3},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3},{value:"Vari\xe1veis do sistema",id:"vari\xe1veis-do-sistema",level:2}];function t(e){let a={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,r.jsx)(a.strong,{children:"Os campos"})," armazenam os dados permanentemente no disco; ",(0,r.jsx)(a.strong,{children:"as vari\xe1veis"})," armazenam os dados na mem\xf3ria de forma temporal."]}),"\n",(0,r.jsxs)(a.p,{children:["Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/data-types",children:"Tipos de dados"}),")."]}),"\n",(0,r.jsx)(a.p,{children:"Ap\xf3s a cria\xe7\xe3o pode usar a vari\xe1vel onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a vari\xe1vel texto em um campo do mesmo tipo"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,r.jsx)(a.p,{children:"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."}),"\n",(0,r.jsx)(a.h2,{id:"cria\xe7\xe3o-de-vari\xe1veis",children:"Cria\xe7\xe3o de vari\xe1veis"}),"\n",(0,r.jsx)(a.p,{children:"Normalmente, voc\xea cria vari\xe1veis declarando-as. A linguagem 4D oferece duas maneiras de declarar vari\xe1veis:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["utilizando a palavra-chave ",(0,r.jsx)(a.code,{children:"var"})," (recomendado, especialmente se o seu c\xf3digo utilizar objectos e classes),"]}),"\n",(0,r.jsx)(a.li,{children:'usando um dos comandos da linguagem 4D do tema "Compiler" ou "Arrays" (sintaxe herdada).'}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Quando as vari\xe1veis s\xe3o declaradas, s\xe3o inicializadas com o valor predefinido ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/data-types#default-values",children:(0,r.jsx)(a.strong,{children:"correspondente ao seu tipo"})}),", que manter\xe3o durante a sess\xe3o, desde que n\xe3o lhes tenha sido ",(0,r.jsx)(a.a,{href:"#assigning-data",children:"atribu\xeddo"}),"."]}),"\n",(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.p,{children:"Embora n\xe3o seja recomendado, voc\xea pode criar vari\xe1veis simplesmente usando-as; n\xe3o precisa necessariamente declar\xe1-las formalmente. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate \xe9 criada e obt\xe9m a data atual mais  30 d\xedas\n"})}),(0,r.jsx)(a.p,{children:"Quando uma vari\xe1vel \xe9 criada antes de ser declarada, ela n\xe3o \xe9 inicializada na etapa de declara\xe7\xe3o."})]}),"\n",(0,r.jsxs)(a.h3,{id:"usando-a-palavra-chave-var",children:["Usando a palavra-chave ",(0,r.jsx)(a.code,{children:"var"})]}),"\n",(0,r.jsxs)(a.p,{children:["Recomenda-se a declara\xe7\xe3o de vari\xe1veis utilizando a palavra-chave ",(0,r.jsx)(a.code,{children:"var"})," , uma vez que esta sintaxe permite associar vari\xe1veis de objeto a classes. A utiliza\xe7\xe3o desta sintaxe melhora as sugest\xf5es do editor de c\xf3digo e as funcionalidades de antecipa\xe7\xe3o de escrita."]}),"\n",(0,r.jsxs)(a.p,{children:["Para declarar uma vari\xe1vel de qualquer tipo com a palavra-chave ",(0,r.jsx)(a.code,{children:"var"})," , utilize a seguinte sintaxe:"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,r.jsx)(a.p,{children:"Por exemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D. File  //a file class object variable\nvar $myVar //a variant variable\n"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"varName"})," \xe9 o nome da vari\xe1vel e deve estar em conformidade com as ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/identifiers",children:"regras4D"})," referente a identificadores.",(0,r.jsx)(a.br,{}),"\nEssa sintaxe s\xf3 \xe9 compat\xedvel com declara\xe7\xf5es de ",(0,r.jsx)(a.a,{href:"#local-process-and-interprocess-variables",children:"vari\xe1veis locais e vari\xe1veis processo"}),", excluindo assim as ",(0,r.jsx)(a.a,{href:"#interprocess-variables",children:"variables interprocessos"})," e os ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/arrays",children:"arrays"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"varType"})," pode ser:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["um ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/data-types",children:"tipo b\xe1sico"}),", caso em que a vari\xe1vel cont\xe9m um valor do tipo declarado,"]}),"\n",(0,r.jsxs)(a.li,{children:["uma refer\xeancia \xe0 classe ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/classes"})," (classe 4D ou classe de utilizador), caso em que a vari\xe1vel cont\xe9m uma refer\xeancia a um objeto da classe definida."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Se ",(0,r.jsx)(a.code,{children:"varType"})," for omitido, \xe9 criada uma vari\xe1vel do tipo ",(0,r.jsx)(a.strong,{children:"variante"})," ."]}),"\n",(0,r.jsxs)(a.p,{children:["A tabela seguinte enumera todos os valores ",(0,r.jsx)(a.code,{children:"varType"})," suportados:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"varType"}),(0,r.jsx)(a.th,{children:"Conte\xfados"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Text"})}),(0,r.jsx)(a.td,{children:"Valor texto"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Date"})}),(0,r.jsx)(a.td,{children:"Valor data"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Hora"})}),(0,r.jsx)(a.td,{children:"Valor Hora"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Par\xe2metros"})}),(0,r.jsx)(a.td,{children:"Valor booleano"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Integer"})}),(0,r.jsx)(a.td,{children:"Valor inteiro longo"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Real"})}),(0,r.jsx)(a.td,{children:"Valor real"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Ponteiro"})}),(0,r.jsx)(a.td,{children:"Valor ponteiro"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Imagem"})}),(0,r.jsx)(a.td,{children:"Valor imagem"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Blob"})}),(0,r.jsx)(a.td,{children:"Valor BLOB"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Collection"})}),(0,r.jsx)(a.td,{children:"Valor colec\xe7\xe3o"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Diferente de"})}),(0,r.jsx)(a.td,{children:"Valor variant"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Object"})}),(0,r.jsxs)(a.td,{children:["Objeto com classe padr\xe3o (",(0,r.jsx)(a.code,{children:"4D.Object"}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"4D.<className>"})}),(0,r.jsx)(a.td,{children:"Objecto do nome da classe 4D"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"cs.<className>"})}),(0,r.jsx)(a.td,{children:"Objeto do nome da classe usu\xe1rio"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Para declarar vari\xe1veis b\xe1sicas locais e de processo:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalente para:  \n\nvar $o : 4D.Object\n//tamb\xe9m equivalente a C_OBJECT($o)\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Para declarar vari\xe1veis objeto da classe 4D:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"var $myFolder : 4D. Folder\nvar $myFile : 4D. File\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Para declarar as vari\xe1veis objeto da classe usu\xe1rio:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"var $myClass : cs. MyClass\nvar $dataclass : cs. Employee\nvar $entity : cs. EmployeeEntity\n"})}),"\n",(0,r.jsx)(a.h3,{id:"usando-uma-directiva-c_",children:"Usando uma directiva C_"}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota de compatibilidade:"})," essa funcionalidade n\xe3o \xe9 recomendada para declarar vari\xe1veis em m\xe9todos. Para mais informa\xe7\xf5es, consulte por favor ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/parameters",children:"Par\xe2metros"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:'As directivas dos comandos do tema "Compilador" permitem-lhe declarar vari\xe1veis de tipos b\xe1sicos.'}),"\n",(0,r.jsx)(a.p,{children:"Por exemplo, se quisermos definir uma vari\xe1vel de texto, escrevemos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" C_TEXT(myText)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Seguem-se algumas declara\xe7\xf5es de vari\xe1veis b\xe1sicas:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" C_BLOB(vxMyBlob) // A vari\xe1vel processo vxMyBlob se declara como uma vari\xe1vel de tipo BLOB\n C_DATE($vdCurDate) // A vari\xe1vel local $vdCurDate se declara como uma vari\xe1vel de tipo Data\n C_LONGINT(vg1;vg2;vg3) // As 3 vari\xe1veis de processo vg1, vg2 y vg3 se declaram como vari\xe1veis de tipo Inteiro longo\n C_OBJECT($vObj) // A vari\xe1vel local $vObj se declara como uma vari\xe1vel de tipo Objeto\n C_COLLECTION($vCol) // A vari\xe1vel local $vCol se declara como uma vari\xe1ve de tipo Cole\xe7\xe3o\n ARRAY LONGINT(alAnArray;10) //A vari\xe1vel do processo alAnArray se declara como um array Inteiro longo de 10 elementos\n"})}),"\n",(0,r.jsxs)(a.p,{children:["**Nota:**os arrays s\xe3o um tipo particular de vari\xe1veis. Um array \xe9 uma s\xe9rie ordenada de vari\xe1veis do mesmo tipo. Para mais informa\xe7\xf5es, consulte por favor ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/arrays",children:"Arrays"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"atribui\xe7\xe3o-de-dados",children:"Atribui\xe7\xe3o de dados"}),"\n",(0,r.jsxs)(a.p,{children:["Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Colocar dados em uma vari\xe1vel \xe9 chamado ",(0,r.jsx)(a.strong,{children:"atribuiindo os dados a uma vari\xe1vel"})," e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."]}),"\n",(0,r.jsx)(a.p,{children:"O operador de atribui\xe7\xe3o \xe9 a maneira mais importante de criar uma vari\xe1vel e jogar dados nela. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,r.jsxs)(a.p,{children:["cria a vari\xe1vel ",(0,r.jsx)(a.em,{children:"MyNumber"})," e coloca o n\xfamero 3 na mesma. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["Normalmente, n\xe3o se recomenda a cria\xe7\xe3o de vari\xe1veis sem ",(0,r.jsx)(a.a,{href:"#creating-variables",children:"declarar o seu tipo"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar  colocar o valor do MyNumber num campo chamado [Products]Size, escreva ",(0,r.jsx)(a.em,{children:"MyNumber"})," no lado direito do operador de atribui\xe7\xe3o:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Neste caso, ",(0,r.jsx)(a.em,{children:"[Products]Tamanho"})," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."]}),"\n",(0,r.jsx)(a.p,{children:"Atribui-se dados a elementos de matriz utilizando chaves ({...}):"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,r.jsx)(a.h2,{id:"vari\xe1veis-locais-processo-e-inter-processo",children:"Vari\xe1veis locais, processo e inter-processo"}),"\n",(0,r.jsxs)(a.p,{children:["Pode criar tr\xeas tipos de vari\xe1veis: ",(0,r.jsx)(a.strong,{children:"local"}),", ",(0,r.jsx)(a.strong,{children:"processo"}),", e ",(0,r.jsx)(a.strong,{children:"interprocesso"}),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."]}),"\n",(0,r.jsx)(a.h3,{id:"vari\xe1veis-locais",children:"Vari\xe1veis locais"}),"\n",(0,r.jsx)(a.p,{children:'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'}),"\n",(0,r.jsx)(a.p,{children:"Poder\xe1 querer utilizar uma vari\xe1vel local para:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Evitar conflitos com os nomes de outras vari\xe1veis"}),"\n",(0,r.jsx)(a.li,{children:"Utilizar dados temporariamente"}),"\n",(0,r.jsx)(a.li,{children:"Reduzir o n\xfamero de vari\xe1veis do processo"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."}),"\n",(0,r.jsx)(a.p,{children:"Quando trabalhar em um banco de dados com muitos m\xe9todos e vari\xe1veis, geralmente s\xf3 precisa usar uma vari\xe1vel dentro do m\xe9todo no qual trabalha. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."}),"\n",(0,r.jsxs)(a.p,{children:["Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. O comando ",(0,r.jsx)(a.code,{children:"Request"})," pode obter esta informa\xe7\xe3o. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,r.jsx)(a.p,{children:"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," os par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consultar ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/parameters",children:"Par\xe2metros"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"vari\xe1veis-processo",children:"Vari\xe1veis processo"}),"\n",(0,r.jsx)(a.p,{children:"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."}),"\n",(0,r.jsx)(a.p,{children:"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsx)(a.p,{children:'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'}),"\n",(0,r.jsxs)(a.p,{children:['Um processo pode "espiar e cutucar" vari\xe1veis de processo de outro processo usando os comandos ',(0,r.jsx)(a.code,{children:"GET PROCESS VARIABLE"})," e ",(0,r.jsx)(a.code,{children:"SET PROCESS VARIABLE"}),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"}),"\n",(0,r.jsx)(a.li,{children:"Gest\xe3o de arrastar e soltar entre processos"}),"\n",(0,r.jsx)(a.li,{children:"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Para mais informa\xe7\xf5es, ver o cap\xedtulo ",(0,r.jsx)(a.strong,{children:"Processos"})," e a descri\xe7\xe3o destes comandos."]}),"\n",(0,r.jsx)(a.h3,{id:"vari\xe1veis-interprocesso",children:"Vari\xe1veis interprocesso"}),"\n",(0,r.jsx)(a.admonition,{title:"Obsoleto",type:"warning",children:(0,r.jsx)(a.p,{children:"O uso de vari\xe1veis interprocessadas n\xe3o \xe9 recomendado, uma vez que n\xe3o est\xe3o dispon\xedveis a partir de processos preventivos e tendem a tornar o c\xf3digo mais dif\xedcil para manuten\xe7\xe3o."})}),"\n",(0,r.jsx)(a.p,{children:"As vari\xe1veis interprocessadas est\xe3o dispon\xedveis em toda a base de dados e s\xe3o partilhadas em todos os processos cooperativos. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."}),"\n",(0,r.jsxs)(a.p,{children:["O nome de uma vari\xe1vel interprocessada come\xe7a sempre com os s\xedmbolos (",(0,r.jsx)(a.code,{children:"<>"}),') - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.']}),"\n",(0,r.jsx)(a.p,{children:"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."}),"\n",(0,r.jsx)(a.h2,{id:"vari\xe1veis-do-sistema",children:"Vari\xe1veis do sistema"}),"\n",(0,r.jsxs)(a.p,{children:["A linguagem 4D gerencia diversas ",(0,r.jsx)(a.strong,{children:"vari\xe1veis sistema"}),", que permitem controlar a execu\xe7\xe3o de diferentes opera\xe7\xf5es. Voc\xea pode testar os valores deles e us\xe1-los como qualquer vari\xe1vel. Todas as vari\xe1veis sistema s\xe3o ",(0,r.jsx)(a.a,{href:"#process-variables",children:"vari\xe1veis processo"}),"."]}),"\n",(0,r.jsx)(a.p,{children:'As vari\xe1veis sistema s\xe3o usadas pelos comandos 4D. Consulte o par\xe1grafo "Vari\xe1veis e sets sistema" na descri\xe7\xe3o de um comando para descobrir se ele afeta uma vari\xe1vel sistema.'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Nome de vari\xe1vel sistema"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"OK"})}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Geralmente definido como 1 ap\xf3s um comando ter exibido uma caixa de di\xe1logo e o usu\xe1rio clicou no bot\xe3o ",(0,r.jsx)(a.strong,{children:"OK"}),", e 0 se eles clicarem em ",(0,r.jsx)(a.strong,{children:"Cancelar"}),". Alguns comandos tamb\xe9m modificam o valor da vari\xe1vel sistema ",(0,r.jsx)(a.code,{children:"OK"})," quando uma opera\xe7\xe3o \xe9 executada com sucesso."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Document"})}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:['Cont\xe9m o "nome longo" (caminho completo+nome) do \xfaltimo arquivo aberto ou criado usando comandos como ',(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page264.html",children:"Open document"})," ou ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page345.html",children:"SELECT LOG FILE"}),"."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.code,{children:"FldDelimit"}),", ",(0,r.jsx)(a.code,{children:"RecDelimit"})]}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:["Cont\xe9m os c\xf3digos de caracteres que ser\xe3o usados respectivamente como um separador de campos (padr\xe3o \xe9 ",(0,r.jsx)(a.strong,{children:"Tab"})," (9)) e o separador de registros (padr\xe3o \xe9 ",(0,r.jsx)(a.strong,{children:"retorno do carro"})," (13)) quando importar ou exportar texto. Para usar um separador diferente, atribua um novo valor \xe0 vari\xe1vel do sistema."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.code,{children:"Error"}),", ",(0,r.jsx)(a.code,{children:"Error method"}),", ",(0,r.jsx)(a.code,{children:"Error line"}),", ",(0,r.jsx)(a.code,{children:"Error formula"})]}),(0,r.jsx)(a.td,{children:"Text, Longint"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo de captura de erro instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page155.html",children:(0,r.jsx)(a.code,{children:"ON ERR CALL"})}),". Veja ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Concepts/error-handling#handling-errors-within-the-method",children:"Tratamento de erros no m\xe9todo"}),"."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"MouseDown"})}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,r.jsx)(a.code,{children:"ON EVENT CALL"})}),". Definir como 1 quando o bot\xe3o do mouse for pressionado, caso contr\xe1rio ser\xe1 definido como 0."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.code,{children:"MouseX"}),", ",(0,r.jsx)(a.code,{children:"MouseY"})]}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,r.jsx)(a.code,{children:"ON EVENT CALL"})}),". ",(0,r.jsxs)(a.li,{children:["Em um evento ",(0,r.jsx)(a.code,{children:"MouseDown=1"}),", ",(0,r.jsx)(a.code,{children:"MouseX"})," e ",(0,r.jsx)(a.code,{children:"MouseY"})," s\xe3o respectivamente definidos como coordenadas verticais e horizontais do clique. Ambos os valores s\xe3o expressos em p\xedxeis e usam o sistema local de coordenadas da janela. "]}),(0,r.jsxs)(a.li,{children:["No caso de um campo ou de uma vari\xe1vel de imagem, ",(0,r.jsx)(a.code,{children:"MouseX"})," e ",(0,r.jsx)(a.code,{children:"MouseY"})," retornam as coordenadas locais de um mouse clique nos eventos formul\xe1rio ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Events/onClicked",children:(0,r.jsx)(a.code,{children:"On Clicked"})}),", ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Events/onDoubleClicked",children:(0,r.jsx)(a.code,{children:"On Double Clicked"})})," e ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Events/onMouseUp",children:(0,r.jsx)(a.code,{children:"On Mouse Up"})}),". As coordenadas locais do cursor do mouse tamb\xe9m s\xe3o retornadas nos eventos formul\xe1rio ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Events/onMouseEnter",children:(0,r.jsx)(a.code,{children:"On Mouse Enter"})})," e ",(0,r.jsx)(a.a,{href:"/docs/pt/19/Events/onMouseMove",children:(0,r.jsx)(a.code,{children:"On Mouse Move"})}),". Para obter mais informa\xe7\xf5es, consulte as ",(0,r.jsx)(a.a,{href:"/docs/pt/19/FormEditor/pictures#mouse-coordinates-in-a-picture",children:"Coordenadas de Mouse em uma imagem"}),"."]})]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"KeyCode"})}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,r.jsx)(a.code,{children:"ON EVENT CALL"})}),". Defina para o c\xf3digo do caractere da chave pressionada. Se a chave \xe9 uma chave de fun\xe7\xe3o, ",(0,r.jsx)(a.code,{children:"KeyCode"})," \xe9 definida como um c\xf3digo especial."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"Modifiers"})}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,r.jsx)(a.code,{children:"ON EVENT CALL"})}),". Definir para as teclas modificadoras do teclado (Ctrl/Comando, Alt/Option, Shift, Caps Lock)."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"MouseProc"})}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsxs)(a.td,{children:["Usado em um m\xe9todo instalado pelo comando ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,r.jsx)(a.code,{children:"ON EVENT CALL"})}),". Defina o n\xfamero do processo em que o \xfaltimo evento teve lugar"]})]})]})]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"Portanto, voc\xea n\xe3o pode criar uma vari\xe1vel, um m\xe9todo ou uma fun\xe7\xe3o usando qualquer um desses nomes de vari\xe1veis."})})]})}function m(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return n},a:function(){return i}});var o=s(667294);let r={},d=o.createContext(r);function i(e){let a=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:a},e.children)}}}]);