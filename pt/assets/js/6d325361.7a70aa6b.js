"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86968"],{303042:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"Concepts/quick-tour","title":"Uma visita r\xe1pida","description":"Usando a linguagem 4D, imprimir a mensagem tradicional \\"\\"Hello, world!\\" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Concepts/quick-tour.md","sourceDirName":"Concepts","slug":"/Concepts/quick-tour","permalink":"/docs/pt/Concepts/quick-tour","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fquick-tour.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"quick-tour","title":"Uma visita r\xe1pida","sidebar_label":"Uma visita r\xe1pida"},"sidebar":"docs","previous":{"title":"Sobre a linguagem 4D","permalink":"/docs/pt/Concepts/about"},"next":{"title":"Operadores","permalink":"/docs/pt/Concepts/operators"}}'),n=o("785893"),r=o("250065");let d={id:"quick-tour",title:"Uma visita r\xe1pida",sidebar_label:"Uma visita r\xe1pida"},i=void 0,t={},l=[{value:"Atribuir valores",id:"atribuir-valores",level:2},{value:"Vari\xe1veis.",id:"vari\xe1veis",level:2},{value:"Comandos",id:"comandos",level:2},{value:"Constantes",id:"constantes",level:2},{value:"P\xe1gina M\xe9todos",id:"p\xe1gina-m\xe9todos",level:2},{value:"Tipos de dados",id:"tipos-de-dados",level:2},{value:"Objectos e colec\xe7\xf5es",id:"objectos-e-colec\xe7\xf5es",level:2},{value:"Classes",id:"classes",level:2},{value:"Operadores",id:"operadores",level:2},{value:"Express\xf5es",id:"express\xf5es",level:2},{value:"Tipos de express\xf5es",id:"tipos-de-express\xf5es",level:3},{value:"Express\xf5es atribu\xedveis vs express\xf5es n\xe3o atribu\xedveis",id:"express\xf5es-atribu\xedveis-vs-express\xf5es-n\xe3o-atribu\xedveis",level:3},{value:"Ponteiro",id:"ponteiro",level:2},{value:"C\xf3digo em v\xe1rias linhas",id:"c\xf3digo-em-v\xe1rias-linhas",level:2},{value:"Coment\xe1rios",id:"coment\xe1rios",level:2},{value:"Coment\xe1rios de linha \xfanica (<code>//comment</code>)",id:"coment\xe1rios-de-linha-\xfanica-comment",level:4},{value:"Coment\xe1rios em linha ou em v\xe1rias linhas (<code>/*comment*/</code>)",id:"coment\xe1rios-em-linha-ou-em-v\xe1rias-linhas-comment",level:4},{value:"Sequ\xeancias de escape",id:"sequ\xeancias-de-escape",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:'Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'ALERT("Hello, World!")\n'})}),"\n",(0,n.jsx)(s.p,{children:'Esse c\xf3digo vai exibir um alerta normal de plataforma com a mensagem "hello world" contendo um bot\xe3o OK. Para executar o c\xf3digo, precisa clicar no bot\xe3o de execu\xe7\xe3o do editor de M\xe9todo:'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"hello-world",src:o(911083).Z+"",width:"613",height:"322"})}),"\n",(0,n.jsx)(s.p,{children:"Ou poderia anexar esse c\xf3digo a um bot\xe3o em um formul\xe1rio e executar o formul\xe1rio, nesse caso, clicar no bot\xe3o exibira a caixa de di\xe1logo de alerta. Em qualquer caso, acabou de executar sua primeira linha de c\xf3digo 4D!"}),"\n",(0,n.jsx)(s.h2,{id:"atribuir-valores",children:"Atribuir valores"}),"\n",(0,n.jsx)(s.p,{children:"Dados podem ser colocado ou copiados de ou em vari\xe1veis, campos, elementos arrays... Colocar dados em uma vari\xe1vel \xe9 chamado atribuiindo os dados a uma vari\xe1vel e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos ou arrays."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$MyNumber:=3 //atribui 3 \xe0 vari\xe1vel MyNumber  \n[Products]Size:=$MyNumber //atribui a vari\xe1vel MyNumber ao campo [Products]Size\narrDays{2}:="Tuesday" //atribui a string "Tuesday" ao segundo elemento arrDays\nMyVar:=Length("Acme") //atribui o resultado da fun\xe7\xe3o (4) a MyVar\n$myDate:=!2018/01/21! //atribui um literal de data\n$myHour:=?08:12:55? //atribui um literal de hora\n'})}),"\n",(0,n.jsx)(s.p,{children:"Voc\xea DEVE diferenciar o operador atribui\xe7\xe3o := dos outros operadores. Ao inv\xe9s de combinar express\xf5es a uma nova, o operador de atribui\xe7\xe3o copia o valor da express\xe3o para a direita do operador de atribui\xe7\xe3o para a vari\xe1vel ou campo para a esquerda do operador."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Importante:"})," N\xe3o confunda o operador de atribui\xe7\xe3o := com o operador de compara\xe7\xe3o de igualdade =. Um operador de atribui\xe7\xe3o diferente (e n\xe3o =) foi escolhido deliberadamente para evitar problemas e confus\xe3o que ocorrem frequentemente em outras linguagens com operadores como == ou ===. Esses erros s\xe3o geralmente dif\xedceis de reconhecer pelo compilador e geram problemas trabalhosos."]}),"\n",(0,n.jsx)(s.h2,{id:"vari\xe1veis",children:"Vari\xe1veis."}),"\n",(0,n.jsxs)(s.p,{children:["A linguagem 4D \xe9 baseada em tipos, mas com alguma flexibilidade. Voc\xea cria uma vari\xe1vel digitada usando a palavra-chave ",(0,n.jsx)(s.code,{children:"var"}),". Por exemplo, para criar uma vari\xe1vel do tipo dados, pode escrever:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"var MyDate : Date\n"})}),"\n",(0,n.jsxs)(s.p,{children:["A palavra-chave ",(0,n.jsx)(s.code,{children:"var"})," permite declarar vari\xe1veis de objeto de um tipo de classe definido, por exemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"var myPerson : cs.Person\n//vari\xe1vel da classe usu\xe1rio Person\n"})}),"\n",(0,n.jsx)(s.p,{children:"Even if it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"MyOtherDate:=Current date+30\n"})}),"\n",(0,n.jsxs)(s.p,{children:["A linha de c\xf3digo l\xea \u201CMyOtherDate gets the current date plus 30 days.\u201D Essa linha cria a vari\xe1vel, atribui-lhe o tipo de data (tempor\xe1ria) e um conte\xfado. A variable created by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and change of type dynamically. This flexibility does not apply to variables declared with the ",(0,n.jsx)(s.code,{children:"var"})," keyword (their type cannot change) and in ",(0,n.jsx)(s.a,{href:"/docs/pt/Concepts/interpreted-compiled",children:"compiled mode"})," where the type can never be changed, regardless of how the variable was created."]}),"\n",(0,n.jsx)(s.h2,{id:"comandos",children:"Comandos"}),"\n",(0,n.jsx)(s.p,{children:"Os comandos 4D s\xe3o m\xe9todos integrados para realizar uma a\xe7\xe3o. Comandos s\xe3o frequentemente usados com par\xe2metros, que s\xe3o passados em par\xeanteses () e separados por ponto e v\xedrgula (;). Exemplo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n'})}),"\n",(0,n.jsx)(s.p,{children:"Alguns comandos s\xe3o anexados \xe0 cole\xe7\xf5es ou objetos, em cujo caso s\xe3o m\xe9todos temporais que se utilizam com a nota\xe7\xe3o de pontos. Por exemplo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n"})}),"\n",(0,n.jsx)(s.p,{children:"Pode utilizar os plug-ins ou os componentes 4D que adicionem novos comandos a seu entorno de desenvolvimento 4D."}),"\n",(0,n.jsxs)(s.p,{children:["H\xe1 v\xe1rios plug-ins propostos pela comunidade de usu\xe1rios 4D ou desenvolvedores de terceira parte no mercado. Por exemplo, usando o ",(0,n.jsx)(s.a,{href:"https://github.com/miyako/4d-plugin-pdf-pages",children:"4d-plugin-pdf-pages"})," no macOS:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"PDF REMOVE PAGE(path;page)\n"})}),"\n",(0,n.jsx)(s.p,{children:"4D SVG \xe9 um exemplo de componente utilit\xe1rio que aumenta as capacidades de sua aplica\xe7\xe3o:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"//desenhar uma imagem\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n"})}),"\n",(0,n.jsx)(s.p,{children:"4D SVG \xe9 inclu\xeddo em 4D."}),"\n",(0,n.jsx)(s.h2,{id:"constantes",children:"Constantes"}),"\n",(0,n.jsxs)(s.p,{children:["4D oferece um conjunto extensivo de constantes predefinidas, cujos valores s\xe3o acess\xedveis por nome. Isso permite escrever c\xf3digo mais leg\xedvel. Por exemplo, ",(0,n.jsx)(s.code,{children:"Read Mode"})," \xe9 uma constante (valor 2)."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'vRef:=Open document("PassFile";"TEXT";Read Mode) // abre documento em modo apenas leitura\n'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"As constantes pr\xe9-definidas aparecem sublinhadas como padr\xe3o no editor de m\xe9todos 4D."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"p\xe1gina-m\xe9todos",children:"P\xe1gina M\xe9todos"}),"\n",(0,n.jsxs)(s.p,{children:["4D oferece um grande n\xfamero de m\xe9todos (ou comandos) incorporados, mas tamb\xe9m permite que voc\xea crie seus pr\xf3prios ",(0,n.jsx)(s.strong,{children:"m\xe9todos de projeto"}),". Os m\xe9todos de projeto s\xe3o m\xe9todos definidos pelo usu\xe1rio que contenham comandos, operadores e outras partes da linguaje.\nLos m\xe9todos projeto s\xe3o m\xe9todos gen\xe9ricos, mas h\xe1 outros tipos de m\xe9todos: m\xe9todos objeto, m\xe9todos formul\xe1rio, m\xe9todos tabela (Triggers) e m\xe9todos base."]}),"\n",(0,n.jsx)(s.p,{children:"Um m\xe9todo projeto \xe9 composto de v\xe1rias linhas de instru\xe7\xf5es, cada uma das quais consta de uma linha no m\xe9todo. Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa."}),"\n",(0,n.jsx)(s.p,{children:"Por exemplo, a linha abaixo \xe9 uma declara\xe7\xe3o que mostar\xe1 uma caixa de di\xe1logo de confirma\xe7\xe3o:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'CONFIRM("Quer realmente fechar esta conta?"; "S\xedm"; "N\xe3o")\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Um m\xe9todo tamb\xe9m cont\xe9m testes e loops que controlam o fluxo da execu\xe7\xe3o. Os m\xe9todos 4D suportam estruturas de ramifica\xe7\xe3o ",(0,n.jsx)(s.code,{children:"If...Else...End if"})," e ",(0,n.jsx)(s.code,{children:"Case of...Else...End case"}),", bem como estruturas de looping: ",(0,n.jsx)(s.code,{children:"While...End while"}),", ",(0,n.jsx)(s.code,{children:"Repeat...Until"}),", ",(0,n.jsx)(s.code,{children:"For...End for"})," e ",(0,n.jsx)(s.code,{children:"For each...End for each"}),":"]}),"\n",(0,n.jsx)(s.p,{children:"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"For($vlChar;1;Length(vtSomeText))\n	//Fa\xe7a algo com o caractere se ele for um TAB\n\n\n	If(Character code(vtSomeText[[$vlChar]])=Tab)\n		//...\n	End if\nEnd for\n"})}),"\n",(0,n.jsx)(s.p,{children:"Um m\xe9todo projeto pode chamar a outro m\xe9todo projeto com ou sem par\xe2metros (argumentos). Os par\xe2metros se passam ao m\xe9todo entre par\xeantesis, depois do nome do m\xe9todo. Cada par\xe2metro est\xe1 separado do pr\xf3ximo por um ponto e v\xedrgula (;). A method can return a single value in a parameter, which have to be declared. Os par\xe2metros est\xe3o dispon\xedveis dentro do m\xe9todo chamado como vari\xe1veis locais numeradas sequencialmente: $1, $2,..., $n. Um m\xe9todo pode devolver um \xfanico valor no par\xe2metro $0. Quando chamar um m\xe9todo, apenas digite seu nome:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$myText:="hello"\n$myText:=Do_Something($myText) //Chamar o m\xe9todo Do_Something\nALERT($myText) //"HELLO"\n\n  //Aqui o c\xf3digo do m\xe9todo Do_Something  \n#DECLARE ($in : Text) -> $out : Text\n$out:=Uppercase($in)\n'})}),"\n",(0,n.jsx)(s.h2,{id:"tipos-de-dados",children:"Tipos de dados"}),"\n",(0,n.jsx)(s.p,{children:"Na linguagem, os diferentes tipos de dados que podem ser manejados s\xe3o denominados tipos de dados. Existem tipos de dados b\xe1sicos (string, num\xe9rico, data, hora, booleano, imagem, ponteiros, arrays), e tamb\xe9m tipos de dados compostos (BLOBs, objetos, cole\xe7\xf5es)."}),"\n",(0,n.jsx)(s.p,{children:"Lembre que os dados de tipo string e num\xe9rico podem ser associados a mais de um tipo de campo. Quando s\xe3o introduzidos dados em um campo, a linguagem converte automaticamente os dados no tipo correto para o campo. Por exemplo, se um campo inteiro for usado, seus dados s\xe3o tratados automaticamente como num\xe9ricos. Em outras palavras n\xe3o precisa se preocupar sobre misturar tipos de campos similares quando usando a linguagem; vai ser gerenciada por voc\xea."}),"\n",(0,n.jsx)(s.p,{children:'Entretanto, quando usar a linguagem \xe9 importante que n\xe3o misture diferentes tipos de dados. Da mesma forma que n\xe3o tem sentido armazenar "ABC" em um campo de data, tampouco tem sentido por "ABC" em uma vari\xe1vel utilizada para datas. Na maioria dos casos, 4D \xe9 muito tolerante e tentar\xe1 dar sentido ao que est\xe1 fazendo. Por exemplo, se adicionar um n\xfamero a uma data, 4D assumir\xe1 que quer adicionar esse n\xfamero de dias \xe0 data, mas se tentar adicionar uma string a uma data, 4D dir-lhe-\xe1 que a opera\xe7\xe3o n\xe3o pode funcionar.'}),"\n",(0,n.jsx)(s.p,{children:'H\xe1 casos em que \xe9 necess\xe1rio armazenar dados como um tipo e utiliz\xe1-los como outro tipo. A linguagem cont\xe9m um conjunto completo de comandos que permitem a convers\xe3o de um tipo de dados para outro. Por exemplo, pode ser necess\xe1rio criar um n\xfamero de pe\xe7a que comece com um n\xfamero e termine com caracteres como "abc". Neste caso, poder\xe1 escrever:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'[Products]Part Number:=String(Number)+"abc"\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Se ",(0,n.jsx)(s.em,{children:"Number"})," for 17, ent\xe3o ",(0,n.jsx)(s.em,{children:"[Products]Part Number"}),' obter\xe1 a string "17abc".']}),"\n",(0,n.jsxs)(s.p,{children:["Os tipos de dados s\xe3o totalmente definidos na se\xe7\xe3o ",(0,n.jsx)(s.a,{href:"/docs/pt/Concepts/data-types",children:"Data Types"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"objectos-e-colec\xe7\xf5es",children:"Objectos e colec\xe7\xf5es"}),"\n",(0,n.jsx)(s.p,{children:"Pode manipular objectos e colec\xe7\xf5es da linguagem 4D utilizando a nota\xe7\xe3o de objeto para obter ou definir os seus valores. Por exemplo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'employee.name:="Smith"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Tamb\xe9m pode utilizar uma cadeia de caracteres entre par\xeanteses rectos, por exemplo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$vName:=employee["name"]\n'})}),"\n",(0,n.jsx)(s.p,{children:"Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, a nota\xe7\xe3o de objeto aceita uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"$vAge:=employee.children[2].age\n"})}),"\n",(0,n.jsx)(s.p,{children:"Note-se que se o valor da propriedade do objeto for um objeto que encapsula um m\xe9todo (uma f\xf3rmula), \xe9 necess\xe1rio adicionar par\xeanteses () ao nome da propriedade para executar o m\xe9todo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$f:=New object\n$f.message:=Formula(ALERT("Hello world!"))\n$f.message() //exibe "Hello world!"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Para aceder a um elemento da collection, \xe9 necess\xe1rio passar o n\xfamero do elemento entre par\xeanteses rectos:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'C_COLLECTION(myColl)\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //acesso ao 4\xba elemento da colec\xe7\xe3o\n'})}),"\n",(0,n.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(s.p,{children:["A linguagem 4D suporta classes de objectos. Adicione um arquivo ",(0,n.jsx)(s.code,{children:"myClass.4dm"}),' na pasta Project/Sources/Classes de um projeto para criar uma classe chamada "myClass".']}),"\n",(0,n.jsxs)(s.p,{children:["Para instanciar um objeto da classe em um m\xe9todo, chame a classe de usu\xe1rio da ",(0,n.jsx)(s.em,{children:"class store"})," (",(0,n.jsx)(s.code,{children:"cs"}),") e utilize a fun\xe7\xe3o de membro ",(0,n.jsx)(s.code,{children:"new()"}),". \xc9 poss\xedvel passar par\xe2metros."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"// num m\xe9todo 4D\n$o:=cs.myClass.new()\n"})}),"\n",(0,n.jsxs)(s.p,{children:["No m\xe9todo da classe ",(0,n.jsx)(s.code,{children:"myClass"}),", use a instru\xe7\xe3o ",(0,n.jsx)(s.code,{children:"Function <methodName>"})," para definir a fun\xe7\xe3o membro da classe ",(0,n.jsx)(s.em,{children:"methodName"}),". Uma fun\xe7\xe3o de membro de classe pode receber e retornar par\xe2metros como qualquer m\xe9todo e usar ",(0,n.jsx)(s.code,{children:"This"})," como a inst\xe2ncia do objeto."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\n//no arquivo myClass.4dm\nFun\xe7\xe3o hello -> $welcome : Texto\n  $welcome:="Ol\xe1 "+This.who\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Para executar uma fun\xe7\xe3o membro da classe, basta utilizar o operador ",(0,n.jsx)(s.code,{children:"()"})," na fun\xe7\xe3o membro da inst\xe2ncia do objeto."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$f:=New object\n$f.message:=New formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Opcionalmente, use a palavra-chave ",(0,n.jsx)(s.code,{children:"Class constructor"})," para declarar as propriedades do objeto."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'//no arquivo Rectangle.4dm\nConstrutor de classe ($height: Integer; $width : Integer)\nThis.height:=$height\nThis.width:=$width\nThis.name:="Ret\xe2ngulo"\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Uma classe pode estender outra classe usando ",(0,n.jsx)(s.code,{children:"Class extends <ClassName>"}),". Las superclasses se pueden llamar con el comando ",(0,n.jsx)(s.code,{children:"Super"}),". Por exemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"//in the Square.4dm file Class extends rectangle Class constructor($length : Integer)\n\n  // It calls the parent class's constructor with lengths   \n  // provided for the Rectangle's width and height Super($length;$length) This.name:=\"Square\"\n"})}),"\n",(0,n.jsx)(s.h2,{id:"operadores",children:"Operadores"}),"\n",(0,n.jsx)(s.p,{children:"Quando se utiliza a linguagem, \xe9 raro que se pretenda apenas um dado. \xc9 mais prov\xe1vel que queira fazer algo com esses dados ou a partir deles. Estes c\xe1lculos s\xe3o efectuados com operadores. Os operadores, em geral, pegam em dois dados e efetuam uma opera\xe7\xe3o sobre eles que resulta num novo dado. J\xe1 est\xe1 familiarizado com muitos operadores. You are already familiar with many operators. You are already familiar with many operators."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Operador"}),(0,n.jsx)(s.th,{children:"Opera\xe7\xe3o"}),(0,n.jsx)(s.th,{children:"Exemplo"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"+"}),(0,n.jsx)(s.td,{children:"Adi\xe7\xe3o"}),(0,n.jsx)(s.td,{children:"1 +2 = 3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u2013"}),(0,n.jsx)(s.td,{children:"Subtra\xe7\xe3o"}),(0,n.jsx)(s.td,{children:"3 - 2 = 1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Multiplica\xe7\xe3o"}),(0,n.jsx)(s.td,{children:"2 * 3 = 6"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"/"}),(0,n.jsx)(s.td,{children:"Divis\xe3o"}),(0,n.jsx)(s.td,{children:"6 / 2 = 3"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Os operadores num\xe9ricos s\xe3o apenas um dos tipos de operadores dispon\xedveis. 4D suporta muitos tipos de dados, tais como n\xfameros, texto, datas e imagens, por isso h\xe1 operadores que realizam opera\xe7\xf5es nestes diferentes tipos de dados."}),"\n",(0,n.jsx)(s.p,{children:"Os mesmos s\xedmbolos s\xe3o frequentemente utilizados para opera\xe7\xf5es diferentes, consoante o tipo de dados. Por exemplo, o sinal de mais (+) efetua opera\xe7\xf5es diferentes com dados diferentes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Tipo de dados"}),(0,n.jsx)(s.th,{children:"Opera\xe7\xe3o"}),(0,n.jsx)(s.th,{children:"Exemplo"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Number"}),(0,n.jsx)(s.td,{children:"Adi\xe7\xe3o"}),(0,n.jsx)(s.td,{children:"1 + 2 adiciona os n\xfameros e resultados em 3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"Concatena\xe7\xe3o"}),(0,n.jsx)(s.td,{children:'"Hello " + "there" concatena (junta) as cadeias de caracteres e resulta em "Hello there"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Data e N\xfamero"}),(0,n.jsx)(s.td,{children:"Adi\xe7\xe3o de data"}),(0,n.jsx)(s.td,{children:"!1989-01-01! + 20 acrescenta 20 dias \xe0 data de 1 de janeiro de 1989 e resulta na data de 21 de janeiro de 1989"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"express\xf5es",children:"Express\xf5es"}),"\n",(0,n.jsx)(s.p,{children:"Em termos simples, as express\xf5es retornam um valor. De facto, quando se usa a linguagem 4D, usa-se express\xf5es a toda a hora e tende-se a pensar nelas apenas em termos do valor que representam. As express\xf5es tamb\xe9m s\xe3o conhecidas como f\xf3rmulas."}),"\n",(0,n.jsx)(s.p,{children:"As express\xf5es s\xe3o compostas por quase todas as outras partes da linguagem: comandos, operadores, vari\xe1veis, campos, propriedades de objetos e elementos de cole\xe7\xf5es. Utiliza express\xf5es para escrever linhas de c\xf3digo, que por sua vez s\xe3o utilizadas para construir os m\xe9todos. A linguagem utiliza express\xf5es sempre que necessita de um dado."}),"\n",(0,n.jsx)(s.p,{children:'As express\xf5es raramente s\xe3o "aut\xf3nomas." H\xe1 v\xe1rios s\xedtios em 4D onde uma express\xe3o pode ser usada por si s\xf3. Inclui:'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Editor de f\xf3rmulas (apply formula, query with formula, order by formula)"}),"\n",(0,n.jsxs)(s.li,{children:["O comando ",(0,n.jsx)(s.code,{children:"EXECUTE FORMULA"})]}),"\n",(0,n.jsx)(s.li,{children:"A lista de propriedades, onde uma express\xe3o pode ser usada como fonte de dados para a maioria dos widgets"}),"\n",(0,n.jsx)(s.li,{children:"Depurador onde o valor das express\xf5es pode ser verificado"}),"\n",(0,n.jsx)(s.li,{children:"Editor de relat\xf3rios r\xe1pidos como uma f\xf3rmula para uma coluna"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"tipos-de-express\xf5es",children:"Tipos de express\xf5es"}),"\n",(0,n.jsx)(s.p,{children:"Refere-se a uma express\xe3o pelo tipo de dados que devolve. Existem v\xe1rios tipos de express\xe3o. A tabela seguinte apresenta exemplos de cada tipo de express\xe3o."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Expression"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u201CHello\u201D"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"A palavra Hello \xe9 uma constante cadeia de caracteres, indicada pelas aspas duplas."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u201CHello \u201D + \u201Cthere\u201D"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:'Duas cadeias, "Hello " e "there", s\xe3o adicionadas (concatenadas) com o operador de concatena\xe7\xe3o de cadeias (+). \xc9 devolvida a cadeia de caracteres "Hello there".'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u201CSr. \u201D + [People]Name"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:'S\xe3o concatenadas duas cadeias: a cadeia "Mr. " e o valor atual do campo Name na tabela People. Se o campo contiver "Smith", a express\xe3o devolve "Mr. Smith".'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'Uppercase("smith")'}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsxs)(s.td,{children:["Esta express\xe3o utiliza ",(0,n.jsx)(s.code,{children:"Uppercase"}),', um comando da linguagem, para converter a cadeia de caracteres \u201Csmith\u201D em mai\xfasculas. Retorna "SMITH".']})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Number"}),(0,n.jsx)(s.td,{children:"Esta \xe9 uma constante num\xe9rica, 4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4 * 2"}),(0,n.jsx)(s.td,{children:"Number"}),(0,n.jsx)(s.td,{children:"Dois n\xfameros, 4 e 2, s\xe3o multiplicados utilizando o operador de multiplica\xe7\xe3o (*). O resultado \xe9 o n\xfamero 8."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"myButton"}),(0,n.jsx)(s.td,{children:"Number"}),(0,n.jsx)(s.td,{children:"Esta \xe9 uma vari\xe1vel associada a um bot\xe3o. Devolve o valor atual do bot\xe3o: 1 se foi clicado, 0 se n\xe3o foi."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"!1997-01-25!"}),(0,n.jsx)(s.td,{children:"Date"}),(0,n.jsx)(s.td,{children:"Esta \xe9 uma constante data para a data 1/25/97 (25 de janeiro de 1997)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Current date+ 30"}),(0,n.jsx)(s.td,{children:"Date"}),(0,n.jsxs)(s.td,{children:["Essa \xe9 uma express\xe3o de data que usa o comando ",(0,n.jsx)(s.code,{children:"Current date"})," para obter a data de hoje. Adiciona 30 dias \xe0 data de hoje e devolve a nova data."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"?8:05:30?"}),(0,n.jsx)(s.td,{children:"Hora"}),(0,n.jsx)(s.td,{children:"Esta \xe9 uma constante de tempo que representa 8 horas, 5 minutos e 30 segundos."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"?2:03:04? + ?1:02:03?"}),(0,n.jsx)(s.td,{children:"Hora"}),(0,n.jsx)(s.td,{children:"Esta express\xe3o soma dois horas e devolve a hora 3:05:07."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"True"}),(0,n.jsx)(s.td,{children:"Par\xe2metros"}),(0,n.jsx)(s.td,{children:"Este comando devolve o valor Booleano TRUE."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"10 # 20"}),(0,n.jsx)(s.td,{children:"Par\xe2metros"}),(0,n.jsx)(s.td,{children:'Trata-se de uma compara\xe7\xe3o l\xf3gica entre dois n\xfameros. O sinal de n\xfamero (#) significa "n\xe3o \xe9 igual a". Como 10 "n\xe3o \xe9 igual a" 20, a express\xe3o devolve TRUE.'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u201CABC\u201D = \u201CXYZ\u201D"}),(0,n.jsx)(s.td,{children:"Par\xe2metros"}),(0,n.jsx)(s.td,{children:"Trata-se de uma compara\xe7\xe3o l\xf3gica entre duas cadeias. N\xe3o s\xe3o iguais, pelo que a express\xe3o devolve FALSE."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"My Picture + 50"}),(0,n.jsx)(s.td,{children:"Imagem"}),(0,n.jsx)(s.td,{children:"Esta express\xe3o pega na imagem em My Picture, move-a 50 p\xedxeis para a direita e devolve a imagem resultante."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"->[People]Name"}),(0,n.jsx)(s.td,{children:"Ponteiro"}),(0,n.jsx)(s.td,{children:"Esta express\xe3o devolve um ponteiro ao campo chamado [People]Name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Table(1)"}),(0,n.jsx)(s.td,{children:"Ponteiro"}),(0,n.jsx)(s.td,{children:"Este \xe9 um comando que devolve um ponteiro para a primeira tabela."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JSON Parse (MyString)"}),(0,n.jsx)(s.td,{children:"Object"}),(0,n.jsx)(s.td,{children:"Este \xe9 um comando que devolve MyString como um objeto (se o formato \xe9 adequado)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JSON Parse (MyJSONArray)"}),(0,n.jsx)(s.td,{children:"Collection"}),(0,n.jsx)(s.td,{children:"Este \xe9 um comando que devolve MyJSONArray como uma cole\xe7\xe3o (se o formato \xe9 adequado)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Form.pageNumber"}),(0,n.jsx)(s.td,{children:"Propriedade objecto"}),(0,n.jsx)(s.td,{children:"Uma propriedade objeto \xe9 uma express\xe3o que pode ser de qualquer tipo suportado"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Col[5]"}),(0,n.jsx)(s.td,{children:"Elemento de colec\xe7\xe3o"}),(0,n.jsx)(s.td,{children:"Um elemento de cole\xe7\xe3o \xe9 uma express\xe3o que pode ser de qualquer tipo suportado"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"$entitySel[0]"}),(0,n.jsx)(s.td,{children:"Entity"}),(0,n.jsxs)(s.td,{children:["Um elemento de uma sele\xe7\xe3o de entidade ORDA \xe9 uma express\xe3o do tipo entidade. Este tipo de expresi\xf3n es ",(0,n.jsx)(s.strong,{children:"no asignable"})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"express\xf5es-atribu\xedveis-vs-express\xf5es-n\xe3o-atribu\xedveis",children:"Express\xf5es atribu\xedveis vs express\xf5es n\xe3o atribu\xedveis"}),"\n",(0,n.jsxs)(s.p,{children:['Uma express\xe3o pode ser simplesmente uma constante literal, como o n\xfamero 4 ou a string "Hello", ou uma vari\xe1vel como ',(0,n.jsx)(s.code,{children:"$myButton"}),". Tamb\xe9m pode utilizar operadores. Por exemplo, 4 + 2 \xe9 uma express\xe3o que utiliza o operador de adi\xe7\xe3o para somar dois n\xfameros e devolver o resultado 6. Em qualquer dos casos, estas express\xf5es s\xe3o ",(0,n.jsx)(s.strong,{children:"n\xe3o atribu\xedveis"}),", o que significa que n\xe3o lhes pode ser atribu\xeddo um valor.\nEm 4D, as express\xf5es podem ser ",(0,n.jsx)(s.strong,{children:"atribu\xedveis"}),". Uma express\xe3o \xe9 atribu\xedvel quando pode ser utilizada no lado esquerdo de uma atribui\xe7\xe3o. Por exemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Em geral, as express\xf5es que utilizam um operador n\xe3o s\xe3o atribu\xedveis. Por exemplo, ",(0,n.jsx)(s.code,{children:'[Person]FirstName+" "+[Person]LastName'})," n\xe3o pode ser atribu\xeddo."]}),"\n",(0,n.jsx)(s.h2,{id:"ponteiro",children:"Ponteiro"}),"\n",(0,n.jsx)(s.p,{children:"A linguagem 4D fornece uma implementa\xe7\xe3o avan\xe7ada de ponteiros, que permite escrever c\xf3digo poderoso e modular. \xc9 poss\xedvel utilizar ponteiros para referenciar tabelas, campos, vari\xe1veis, arrays e elementos de arrays."}),"\n",(0,n.jsx)(s.p,{children:'Um indicador para um elemento \xe9 criado adicionando um s\xedmbolo "->" antes do nome do elemento, e pode ser dereferenciado adicionando o s\xedmbolo "->" ap\xf3s o nome do ponteiro'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'MyVar:="Hello"\nMyPointer:=->MyVar\nALERT(MyPointer->)\n'})}),"\n",(0,n.jsx)(s.h2,{id:"c\xf3digo-em-v\xe1rias-linhas",children:"C\xf3digo em v\xe1rias linhas"}),"\n",(0,n.jsxs)(s.p,{children:["Voc\xea pode escrever uma \xfanica instru\xe7\xe3o em v\xe1rias linhas, terminando cada linha da instru\xe7\xe3o com um caractere de barra invertida ",(0,n.jsx)(s.code,{children:"\\"})," no final. A linguagem 4D considera todas as linhas de uma s\xf3 vez. Por exemplo, as duas declara\xe7\xf5es seguintes s\xe3o equivalentes:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$str:=String("hello world!")\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$str:=String("hello"+\\\n" world"+\\\n"!")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"coment\xe1rios",children:"Coment\xe1rios"}),"\n",(0,n.jsx)(s.p,{children:"Os coment\xe1rios s\xe3o linhas de c\xf3digo inactivas. Estas linhas n\xe3o s\xe3o interpretadas pela linguagem 4D e n\xe3o s\xe3o executadas quando o c\xf3digo \xe9 chamado."}),"\n",(0,n.jsx)(s.p,{children:"Existem duas formas de criar coment\xe1rios:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"//"})," para coment\xe1rios de linha \xfanica"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"/*...*/"})," para comentarios em linha ou multilinha."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Ambos os estilos de coment\xe1rios podem ser utilizados em simult\xe2neo."}),"\n",(0,n.jsxs)(s.h4,{id:"coment\xe1rios-de-linha-\xfanica-comment",children:["Coment\xe1rios de linha \xfanica (",(0,n.jsx)(s.code,{children:"//comment"}),")"]}),"\n",(0,n.jsxs)(s.p,{children:["Insira ",(0,n.jsx)(s.code,{children:"//"})," no in\xedcio de uma linha ou ap\xf3s uma instru\xe7\xe3o para adicionar um coment\xe1rio de linha \xfanica. Exemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"//This is a comment For($vCounter;1;100) //Starting loop\n  //comment\n  //comment\n  //comment\n End for\n"})}),"\n",(0,n.jsxs)(s.h4,{id:"coment\xe1rios-em-linha-ou-em-v\xe1rias-linhas-comment",children:["Coment\xe1rios em linha ou em v\xe1rias linhas (",(0,n.jsx)(s.code,{children:"/*comment*/"}),")"]}),"\n",(0,n.jsxs)(s.p,{children:["Contorne o conte\xfado com ",(0,n.jsx)(s.code,{children:"/*"})," ... caracteres ",(0,n.jsx)(s.code,{children:"*/"})," para criar coment\xe1rios em linha ou blocos de coment\xe1rios de v\xe1rias linhas. Ambos os blocos de coment\xe1rio em linha e em v\xe1rias linhas come\xe7am com ",(0,n.jsx)(s.code,{children:"/*"})," e terminam com ",(0,n.jsx)(s.code,{children:"*/"}),"."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"As linhas de coment\xe1rios podem ser inseridos em qualquer parte do c\xf3digo."})," Exemplo:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"For /* linha de coment\xe1rio */ ($vCounter;1;100)\n ...\nEnd for\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Os blocos de coment\xe1rios de v\xe1rias linhas"})," permitem comentar um n\xfamero ilimitado de linhas. Os blocos de coment\xe1rios podem ser aninhados (o que \xe9 \xfatil, j\xe1 que o editor de c\xf3digo 4D suporta blocos condensados). Exemplo:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"For ($vCounter;1;100)\n/*\ncoment\xe1rios\n	/*\n	outros coment\xe1rios\n	*/\n*/\n...\nEnd for\n"})}),"\n",(0,n.jsx)(s.h2,{id:"sequ\xeancias-de-escape",children:"Sequ\xeancias de escape"}),"\n",(0,n.jsx)(s.p,{children:'A linguagem 4D permite-lhe usar sequ\xeancias de escape (tamb\xe9m chamadas caracteres de escape). Uma sequ\xeancia de escape \xe9 uma sequ\xeancia de caracteres que pode ser utilizada para substituir um car\xe1cter "especial".'}),"\n",(0,n.jsxs)(s.p,{children:["A sequ\xeancia consiste em uma barra invertida ",(0,n.jsx)(s.code,{children:"\\"}),", seguida de um caractere. Por exemplo, ",(0,n.jsx)(s.code,{children:"\\t"})," \xe9 uma sequ\xeancia de escape para o caractere ",(0,n.jsx)(s.strong,{children:"Tab"}),". As sequ\xeancias de escape facilitam a entrada de caracteres especiais: o exemplo anterior (",(0,n.jsx)(s.code,{children:"\\t"}),') substitui a entrada "Character(Tab)".']}),"\n",(0,n.jsx)(s.p,{children:"Em 4D, podem ser utilizadas as seguintes sequ\xeancias de escape:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Escape sequence"}),(0,n.jsx)(s.th,{children:"Car\xe1cter substitu\xeddo"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"\\n"})}),(0,n.jsx)(s.td,{children:"LF (Avan\xe7o de linha)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"\\t"})}),(0,n.jsx)(s.td,{children:"HT (Tab)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"\\r"})}),(0,n.jsx)(s.td,{children:"CR (Carriage return)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"\\\\"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"\\"})," (Barra invertida)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'\\"'})}),(0,n.jsx)(s.td,{children:'" (aspas)'})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"\xc9 poss\xedvel utilizar mai\xfasculas ou min\xfasculas nas sequ\xeancias de escape."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["No exemplo a seguir, o caractere ",(0,n.jsx)(s.strong,{children:"Carriage return"})," (sequ\xeancia de escape ",(0,n.jsx)(s.code,{children:"\\r"}),") \xe9 inserido em uma instru\xe7\xe3o para obter uma caixa de di\xe1logo:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'ALERT("The operation has been completed successfully.\\rYou may now disconnect.")'})})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},911083:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return d}});var a=o(667294);let n={},r=a.createContext(n);function d(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);