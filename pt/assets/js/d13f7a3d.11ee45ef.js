"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77920],{132682:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var s=a(474848),r=a(28453);const i={id:"variables",title:"Vari\xe1veis."},n=void 0,d={id:"Concepts/variables",title:"Vari\xe1veis.",description:"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/pt/18/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"variables",title:"Vari\xe1veis."},sidebar:"docs",previous:{title:"Diferente de",permalink:"/docs/pt/18/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/pt/18/Concepts/arrays"}},c={},t=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,s.jsx)(o.strong,{children:"Os campos"})," armazenam os dados permanentemente no disco; ",(0,s.jsx)(o.strong,{children:"as vari\xe1veis"})," armazenam os dados na mem\xf3ria de forma temporal."]}),"\n",(0,s.jsxs)(o.p,{children:["Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/data-types",children:"Tipos de dados"}),")."]}),"\n",(0,s.jsx)(o.p,{children:"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."}),"\n",(0,s.jsx)(o.h2,{id:"cria\xe7\xe3o-de-vari\xe1veis",children:"Cria\xe7\xe3o de vari\xe1veis"}),"\n",(0,s.jsx)(o.p,{children:'Voc\xea cria vari\xe1veis declarando-as usando um dos comandos do tema "Compilador" ou "Arrays".'}),"\n",(0,s.jsxs)(o.p,{children:["**Nota:**Arrays s\xe3o um tipo espec\xedfico de vari\xe1veis. Uma array \xe9 uma s\xe9rie ordenada de vari\xe1veis do mesmo tipo. Para mais informa\xe7\xf5es, consulte por favor ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/arrays",children:"Arrays"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, se quisermos definir uma vari\xe1vel de texto, escrevemos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_TEXT(myText)\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Observa\xe7\xe3o:"})," embora geralmente n\xe3o seja recomendado, voc\xea pode criar vari\xe1veis simplesmente usando-as; n\xe3o precisa necessariamente defini-las formalmente como faz com os campos. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" MyDate:=Current date +30 //MyDate \xe9 criado e obt\xe9m a data atual mais 30 dias\n"})}),"\n",(0,s.jsx)(o.p,{children:"Uma vez criada, voc\xea pode usar uma vari\xe1vel sempre que precisar dela em seu banco de dados. Por exemplo, talvez seja necess\xe1rio armazenar a vari\xe1vel de texto em um campo do mesmo tipo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,s.jsx)(o.p,{children:"Seguem-se algumas declara\xe7\xf5es de vari\xe1veis b\xe1sicas:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\n C_BLOB(vxMyBlob) // A vari\xe1vel processo vxMyBlob se declara como uma vari\xe1vel de tipo BLOB\n C_DATE($vdCurDate) // A vari\xe1vel local $vdCurDate se declara como uma vari\xe1vel de tipo Data\n C_LONGINT(vg1;vg2;vg3) // As 3 vari\xe1veis de processo vg1, vg2 y vg3 se declaram como vari\xe1veis de tipo Inteiro longo\n C_OBJECT($vObj) // A vari\xe1vel local $vObj se declara como uma vari\xe1vel de tipo Objeto\n C_COLLECTION($vCol) // A vari\xe1vel local $vCol se declara como uma vari\xe1ve de tipo Cole\xe7\xe3o\n ARRAY LONGINT(alAnArray;10) //A vari\xe1vel do processo alAnArray se declara como um array Inteiro longo de 10 elementos\n"})}),"\n",(0,s.jsx)(o.h2,{id:"atribui\xe7\xe3o-de-dados",children:"Atribui\xe7\xe3o de dados"}),"\n",(0,s.jsxs)(o.p,{children:["Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Colocar dados em uma vari\xe1vel \xe9 chamado ",(0,s.jsx)(o.strong,{children:"atribuiindo os dados a uma vari\xe1vel"})," e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."]}),"\n",(0,s.jsx)(o.p,{children:"O operador de atribui\xe7\xe3o \xe9 a principal maneira de criar uma vari\xe1vel e inserir dados nela. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,s.jsxs)(o.p,{children:["cria a vari\xe1vel ",(0,s.jsx)(o.em,{children:"MyNumber"})," e coloca o n\xfamero 3 na mesma. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."]}),"\n",(0,s.jsxs)(o.p,{children:["Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar  colocar o valor do MyNumber num campo chamado [Products]Size, escreva ",(0,s.jsx)(o.em,{children:"MyNumber"})," no lado direito do operador de atribui\xe7\xe3o:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Neste caso, ",(0,s.jsx)(o.em,{children:"[Products]Tamanho"})," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."]}),"\n",(0,s.jsx)(o.p,{children:"Atribui-se dados a elementos de matriz utilizando chaves ({...}):"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,s.jsx)(o.h2,{id:"vari\xe1veis-locais-processo-e-inter-processo",children:"Vari\xe1veis locais, processo e inter-processo"}),"\n",(0,s.jsxs)(o.p,{children:["Pode criar tr\xeas tipos de vari\xe1veis: ",(0,s.jsx)(o.strong,{children:"local"}),", ",(0,s.jsx)(o.strong,{children:"processo"}),", e ",(0,s.jsx)(o.strong,{children:"interprocesso"}),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."]}),"\n",(0,s.jsx)(o.h3,{id:"vari\xe1veis-locais",children:"Vari\xe1veis locais"}),"\n",(0,s.jsx)(o.p,{children:'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'}),"\n",(0,s.jsx)(o.p,{children:"Poder\xe1 querer utilizar uma vari\xe1vel local para:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Evitar conflitos com os nomes de outras vari\xe1veis"}),"\n",(0,s.jsx)(o.li,{children:"Utilizar dados temporariamente"}),"\n",(0,s.jsx)(o.li,{children:"Reduzir o n\xfamero de vari\xe1veis do processo"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."}),"\n",(0,s.jsx)(o.p,{children:"Quando estiver trabalhando em uma base de dados com v\xe1rios m\xe9todos e vari\xe1veis, frequentemente \xe9 preciso usar uma vari\xe1vel apenas dentro do m\xe9todo em que est\xe1 trabalhando. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."}),"\n",(0,s.jsxs)(o.p,{children:["Frequentemente, em um banco de dados, s\xe3o necess\xe1rias pequenas informa\xe7\xf5es do usu\xe1rio. O comando ",(0,s.jsx)(o.code,{children:"Request"})," pode obter esta informa\xe7\xe3o. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,s.jsx)(o.p,{children:"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Os par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consultar ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/parameters",children:"Par\xe2metros"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"vari\xe1veis-processo",children:"Vari\xe1veis processo"}),"\n",(0,s.jsx)(o.p,{children:"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."}),"\n",(0,s.jsx)(o.p,{children:"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."}),"\n",(0,s.jsx)(o.p,{children:'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'}),"\n",(0,s.jsxs)(o.p,{children:['Um processo pode "espiar e cutucar" vari\xe1veis de processo de outro processo usando os comandos ',(0,s.jsx)(o.code,{children:"GET PROCESS VARIABLE"})," e ",(0,s.jsx)(o.code,{children:"SET PROCESS VARIABLE"}),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"}),"\n",(0,s.jsx)(o.li,{children:"Gest\xe3o de arrastar e soltar entre processos"}),"\n",(0,s.jsx)(o.li,{children:"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es, ver o cap\xedtulo ",(0,s.jsx)(o.strong,{children:"Processos"})," e a descri\xe7\xe3o destes comandos."]}),"\n",(0,s.jsx)(o.h3,{id:"vari\xe1veis-interprocesso",children:"Vari\xe1veis interprocesso"}),"\n",(0,s.jsx)(o.p,{children:"As vari\xe1veis interprocessos est\xe3o dispon\xedveis em todo o banco de dados e s\xe3o compartilhadas entre todos os processos cooperativos. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"O uso de vari\xe1veis interprocessadas n\xe3o \xe9 recomendado, uma vez que n\xe3o est\xe3o dispon\xedveis a partir de processos preventivos e tendem a tornar o c\xf3digo mais dif\xedcil para manuten\xe7\xe3o."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["O nome de uma vari\xe1vel de interprocesso sempre come\xe7a com os s\xedmbolos (",(0,s.jsx)(o.code,{children:"<>"}),') - um sinal de "menor que" seguido de um sinal de "maior que" - seguido de 31 caracteres.']}),"\n",(0,s.jsx)(o.p,{children:"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>n,x:()=>d});var s=a(296540);const r={},i=s.createContext(r);function n(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);