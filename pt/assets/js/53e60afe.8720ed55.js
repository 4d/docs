/*! For license information please see 53e60afe.8720ed55.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24056],{684568:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=s(474848),n=s(28453);const r={id:"quick-tour",title:"Uma visita r\xe1pida",sidebar_label:"Uma visita r\xe1pida"},d=void 0,i={id:"Concepts/quick-tour",title:"Uma visita r\xe1pida",description:'Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/quick-tour.md",sourceDirName:"Concepts",slug:"/Concepts/quick-tour",permalink:"/docs/pt/19/Concepts/quick-tour",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fquick-tour.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"quick-tour",title:"Uma visita r\xe1pida",sidebar_label:"Uma visita r\xe1pida"},sidebar:"docs",previous:{title:"Sobre a linguagem 4D",permalink:"/docs/pt/19/Concepts/about"},next:{title:"Tipos de dados",permalink:"/docs/pt/19/Concepts/data-types"}},t={},l=[{value:"Atribuir valores",id:"Atribuir-valores",level:2},{value:"Vari\xe1veis.",id:"Vari\xe1veis",level:2},{value:"Comandos",id:"Comandos",level:2},{value:"Constantes",id:"Constantes",level:2},{value:"P\xe1gina M\xe9todos",id:"P\xe1gina-M\xe9todos",level:2},{value:"Tipos de dados",id:"Tipos-de-dados",level:2},{value:"Objectos e colec\xe7\xf5es",id:"Objectos-e-colec\xe7\xf5es",level:2},{value:"Classes",id:"Classes",level:2},{value:"Operadores",id:"Operadores",level:2},{value:"Express\xf5es",id:"Express\xf5es",level:2},{value:"Tipos de express\xf5es",id:"Tipos-de-express\xf5es",level:3},{value:"Express\xf5es atribu\xedveis vs express\xf5es n\xe3o atribu\xedveis",id:"Express\xf5es-atribu\xedveis-vs-express\xf5es-n\xe3o-atribu\xedveis",level:3},{value:"Ponteiro",id:"Ponteiro",level:2},{value:"C\xf3digo em v\xe1rias linhas",id:"C\xf3digo-em-v\xe1rias-linhas",level:2},{value:"Coment\xe1rios",id:"Coment\xe1rios",level:2},{value:"Single line comments (//)",id:"Single-line-comments-",level:4},{value:"Inline or multiline comments (/**/)",id:"Inline-or-multiline-comments-",level:4},{value:"Sequ\xeancias de escape",id:"Sequ\xeancias-de-escape",level:2}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:'Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'ALERT("Hello, World!")\n'})}),"\n",(0,a.jsx)(o.p,{children:'Esse c\xf3digo vai exibir um alerta normal de plataforma com a mensagem "hello world" contendo um bot\xe3o OK. Para executar o c\xf3digo, precisa clicar no bot\xe3o de execu\xe7\xe3o do editor de M\xe9todo:'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"&quot;Hello World&quot;",src:s(850545).A+"",width:"613",height:"322"})}),"\n",(0,a.jsx)(o.p,{children:"Ou poderia anexar esse c\xf3digo a um bot\xe3o em um formul\xe1rio e executar o formul\xe1rio, nesse caso, clicar no bot\xe3o exibira a caixa de di\xe1logo de alerta. Em qualquer caso, acabou de executar sua primeira linha de c\xf3digo 4D!"}),"\n",(0,a.jsx)(o.h2,{id:"Atribuir-valores",children:"Atribuir valores"}),"\n",(0,a.jsx)(o.p,{children:"Dados podem ser colocado ou copiados de ou em vari\xe1veis, campos, elementos arrays... Colocar dados em uma vari\xe1vel \xe9 chamado atribuiindo os dados a uma vari\xe1vel e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos ou arrays."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$MyNumber:=3 //assigns 3 to MyNumber variable  \n[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field\narrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar\n$myDate:=!2018/01/21! //atribui uma data literal\n$myHour:=?08:12:55? //atribui uma hora literal\n'})}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea DEVE diferenciar o operador atribui\xe7\xe3o := dos outros operadores. Ao inv\xe9s de combinar express\xf5es a uma nova, o operador de atribui\xe7\xe3o copia o valor da express\xe3o para a direita do operador de atribui\xe7\xe3o para a vari\xe1vel ou campo para a esquerda do operador."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Importante:"})," N\xe3o confunda o operador de atribui\xe7\xe3o := com o operador de compara\xe7\xe3o de igualdade =. Um operador de atribui\xe7\xe3o diferente (e n\xe3o =) foi escolhido deliberadamente para evitar problemas e confus\xe3o que ocorrem frequentemente em outras linguagens com operadores como == ou ===. Esses erros s\xe3o geralmente dif\xedceis de reconhecer pelo compilador e geram problemas trabalhosos."]}),"\n",(0,a.jsx)(o.h2,{id:"Vari\xe1veis",children:"Vari\xe1veis."}),"\n",(0,a.jsxs)(o.p,{children:["A linguagem 4D \xe9 baseada em tipos, mas com alguma flexibilidade. Pode criar uma vari\xe1vel digitada utilizando um comando ",(0,a.jsx)(o.code,{children:"C_XXX"}),". Por exemplo, para criar uma vari\xe1vel do tipo dados, pode escrever:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"var MyDate : Date \n"})}),"\n",(0,a.jsxs)(o.p,{children:["A palavra-chave ",(0,a.jsx)(o.code,{children:"var"})," permite declarar vari\xe1veis objecto de um tipo de classe definido, por exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"var myPerson : cs. Person \n//variable of the Person user class\n"})}),"\n",(0,a.jsx)(o.p,{children:"Mesmo geralmente n\xe3o sendo recomendado, \xe9 poss\xedvel criar vari\xe1veis simplesmente usando-as; n\xe3o precisa defini-las formalmente como se faz com campos. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"MyOtherDate:=Current date+30\n"})}),"\n",(0,a.jsxs)(o.p,{children:["A linha de c\xf3digo l\xea \u201cMyOtherDate gets the current date plus 30 days.\u201d Essa linha cria a vari\xe1vel e a atribuiu com o tipo de data (tempor\xe1rio) e um conte\xfado. Uma vari\xe1vel criada por atribui\xe7\xe3o \xe9 interpretada como sem tipo, ou seja, pode ser atribu\xedda com outros tipos em outras linhas e ent\xe3o muda o tipo dinamicamente. Uma vari\xe1vel digitada com ",(0,a.jsx)(o.code,{children:"C_XXX"})," n\xe3o pode mudar de tipo. Em modo compilado, o tipo n\xe3o pode ser modificado nunca, independentemente de como tenha criado a vari\xe1vel."]}),"\n",(0,a.jsx)(o.h2,{id:"Comandos",children:"Comandos"}),"\n",(0,a.jsx)(o.p,{children:"Os comandos 4D s\xe3o m\xe9todos integrados para realizar uma a\xe7\xe3o. Comandos s\xe3o frequentemente usados com par\xe2metros, que s\xe3o passados em par\xeanteses () e separados por ponto e v\xedrgula (;). Exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n'})}),"\n",(0,a.jsx)(o.p,{children:"Alguns comandos s\xe3o anexados \xe0 cole\xe7\xf5es ou objetos, em cujo caso s\xe3o m\xe9todos temporais que se utilizam com a nota\xe7\xe3o de pontos. Por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n"})}),"\n",(0,a.jsx)(o.p,{children:"Pode utilizar os plug-ins ou os componentes 4D que adicionem novos comandos a seu entorno de desenvolvimento 4D."}),"\n",(0,a.jsxs)(o.p,{children:["H\xe1 v\xe1rios plug-ins propostos pela comunidade de usu\xe1rios 4D ou desenvolvedores de terceira parte no mercado. Por exemplo, usar ",(0,a.jsx)(o.a,{href:"https://github.com/miyako/4d-plugin-pdf-pages",children:"4d-plugin-pdf-pages"})," em macOS:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"PDF REMOVE PAGE(path;page)\n"})}),"\n",(0,a.jsx)(o.p,{children:"4D SVG \xe9 um exemplo de componente utilit\xe1rio que aumenta as capacidades de sua aplica\xe7\xe3o:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"//desenhar uma imagem\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n"})}),"\n",(0,a.jsx)(o.p,{children:"4D SVG \xe9 inclu\xeddo em 4D."}),"\n",(0,a.jsx)(o.h2,{id:"Constantes",children:"Constantes"}),"\n",(0,a.jsxs)(o.p,{children:["4D oferece um conjunto extensivo de constantes predefinidas, cujos valores s\xe3o acess\xedveis por nome. Isso permite escrever c\xf3digo mais leg\xedvel. Por exemplo, ",(0,a.jsx)(o.code,{children:"Read Mode"})," \xe9 uma constante (valor 2)."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'vRef:=Open document("PassFile";"TEXT";Read Mode) // abre documento em modo apenas leitura\n'})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"As constantes pr\xe9-definidas aparecem sublinhadas como padr\xe3o no editor de m\xe9todos 4D."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"P\xe1gina-M\xe9todos",children:"P\xe1gina M\xe9todos"}),"\n",(0,a.jsxs)(o.p,{children:["4D oferece un grande n\xfamero de m\xe9todos (ou comandos) integrados, mas tamb\xe9m lhe permite criar seus pr\xf3prios ",(0,a.jsx)(o.strong,{children:"m\xe9todos de projeto"}),". Os m\xe9todos de projeto s\xe3o m\xe9todos definidos pelo usu\xe1rio que contenham comandos, operadores e outras partes da linguaje. Los m\xe9todos projeto s\xe3o m\xe9todos gen\xe9ricos, mas h\xe1 outros tipos de m\xe9todos: m\xe9todos objeto, m\xe9todos formul\xe1rio, m\xe9todos tabela (Triggers) e m\xe9todos base."]}),"\n",(0,a.jsx)(o.p,{children:"Um m\xe9todo projeto \xe9 composto de v\xe1rias linhas de instru\xe7\xf5es, cada uma das quais consta de uma linha no m\xe9todo. Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa."}),"\n",(0,a.jsx)(o.p,{children:"Por exemplo, a linha abaixo \xe9 uma declara\xe7\xe3o que mostar\xe1 uma caixa de di\xe1logo de confirma\xe7\xe3o:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'CONFIRM("Quer realmente fechar esta conta?"; "S\xedm"; "N\xe3o")\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Um m\xe9todo tamb\xe9m cont\xe9m testes e loops que controlam o fluxo da execu\xe7\xe3o. 4D methods support ",(0,a.jsx)(o.code,{children:"If... End if"})," and ",(0,a.jsx)(o.code,{children:"Case of... End case"})," branching structures as well as looping structures: ",(0,a.jsx)(o.code,{children:"While... End while"}),", ",(0,a.jsx)(o.code,{children:"Repeat... Until"}),", ",(0,a.jsx)(o.code,{children:"For... End for"}),", and ",(0,a.jsx)(o.code,{children:"For each... End for each"}),":"]}),"\n",(0,a.jsx)(o.p,{children:"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"For($vlChar;1;Length(vtSomeText))\n    //Fazer algo com o car\xe1cter se for um TAB\n\n\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n        //...\n    End for\n"})}),"\n",(0,a.jsx)(o.p,{children:"Um m\xe9todo projeto pode chamar a outro m\xe9todo projeto com ou sem par\xe2metros (argumentos). Os par\xe2metros se passam ao m\xe9todo entre par\xeantesis, depois do nome do m\xe9todo. Cada par\xe2metro est\xe1 separado do pr\xf3ximo por um ponto e v\xedrgula (;). A method can return a single value in a parameter, which have to be declared. Os par\xe2metros est\xe3o dispon\xedveis dentro do m\xe9todo chamado como vari\xe1veis locais numeradas sequencialmente: $1, $2,..., $n. Um m\xe9todo pode devolver um \xfanico valor no par\xe2metro $0. Quando chamar um m\xe9todo, apenas digite seu nome:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$myText:="hello"\n$myText:=Do_Something($myText) //Chamar o m\xe9todo Do_Something\nALERT($myText) //"HELLO"\n\n  //Aqui o c\xf3digo do m\xe9todo Do_Something  \n#DECLARE ($in : Text) -> $out : Text\n$out:=Uppercase($in)\n'})}),"\n",(0,a.jsx)(o.h2,{id:"Tipos-de-dados",children:"Tipos de dados"}),"\n",(0,a.jsx)(o.p,{children:"Na linguagem, os diferentes tipos de dados que podem ser manejados s\xe3o denominados tipos de dados. Existem tipos de dados b\xe1sicos (string, num\xe9rico, data, hora, booleano, imagem, ponteiros, arrays), e tamb\xe9m tipos de dados compostos (BLOBs, objetos, cole\xe7\xf5es)."}),"\n",(0,a.jsx)(o.p,{children:"Lembre que os dados de tipo string e num\xe9rico podem ser associados a mais de um tipo de campo. Quando s\xe3o introduzidos dados em um campo, a linguagem converte automaticamente os dados no tipo correto para o campo. Por exemplo, se um campo inteiro for usado, seus dados s\xe3o tratados automaticamente como num\xe9ricos. Em outras palavras n\xe3o precisa se preocupar sobre misturar tipos de campos similares quando usando a linguagem; vai ser gerenciada por voc\xea."}),"\n",(0,a.jsx)(o.p,{children:'Entretanto, quando usar a linguagem \xe9 importante que n\xe3o misture diferentes tipos de dados. Da mesma forma que n\xe3o tem sentido armazenar "ABC" em um campo de data, tampouco tem sentido por "ABC" em uma vari\xe1vel utilizada para datas. Na maioria dos casos, 4D \xe9 muito tolerante e tentar\xe1 dar sentido ao que est\xe1 fazendo. Por exemplo, se adicionar um n\xfamero a uma data, 4D assumir\xe1 que quer adicionar esse n\xfamero de dias \xe0 data, mas se tentar adicionar uma string a uma data, 4D dir-lhe-\xe1 que a opera\xe7\xe3o n\xe3o pode funcionar.'}),"\n",(0,a.jsx)(o.p,{children:'H\xe1 casos em que \xe9 necess\xe1rio armazenar dados como um tipo e utiliz\xe1-los como outro tipo. A linguagem cont\xe9m um conjunto completo de comandos que permitem a convers\xe3o de um tipo de dados para outro. Por exemplo, pode ser necess\xe1rio criar um n\xfamero de pe\xe7a que comece com um n\xfamero e termine com caracteres como "abc". Neste caso, poder\xe1 escrever:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'[Products]Part Number:=String(Number)+"abc"\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Se o n\xfamero __ \xe9 17, ent\xe3o ",(0,a.jsx)(o.em,{children:"[Products]Part Number"}),' obter\xe1 a cadeia "17abc".']}),"\n",(0,a.jsxs)(o.p,{children:["Os tipos de dados s\xe3o definidos na \xedntegra na sec\xe7\xe3o ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Concepts/data-types",children:"Tipos de dados"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"Objectos-e-colec\xe7\xf5es",children:"Objectos e colec\xe7\xf5es"}),"\n",(0,a.jsx)(o.p,{children:"Pode manipular objectos e colec\xe7\xf5es da linguagem 4D utilizando a nota\xe7\xe3o de objeto para obter ou definir os seus valores. Por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'employee.name:="Smith"\n'})}),"\n",(0,a.jsx)(o.p,{children:"Tamb\xe9m pode utilizar uma cadeia de caracteres entre par\xeanteses rectos, por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$vName:=employee["name"]\n'})}),"\n",(0,a.jsx)(o.p,{children:"Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, a nota\xe7\xe3o de objeto aceita uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"$vAge:=employee.children[2].age\n"})}),"\n",(0,a.jsx)(o.p,{children:"Note-se que se o valor da propriedade do objeto for um objeto que encapsula um m\xe9todo (uma f\xf3rmula), \xe9 necess\xe1rio adicionar par\xeanteses () ao nome da propriedade para executar o m\xe9todo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:'ALERT($myText) //"HELLO"\n\n  //Here the code of the method Do_Something  \n#DECLARE ($in : Text) -> $out : Text\n$out:=Uppercase($in)\n$myText:="hello"\n$myText:=Do_Something($myText) //Call the Do_Something method\n'})}),"\n",(0,a.jsx)(o.p,{children:"Para aceder a um elemento da collection, \xe9 necess\xe1rio passar o n\xfamero do elemento entre par\xeanteses rectos:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'C_COLLECTION(myColl)\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //acesso ao 4\xba elemento da colec\xe7\xe3o\n'})}),"\n",(0,a.jsx)(o.h2,{id:"Classes",children:"Classes"}),"\n",(0,a.jsxs)(o.p,{children:["A linguagem 4D suporta classes de objectos. Adicione um arquivo ",(0,a.jsx)(o.code,{children:"myClass.4dm"}),' na pasta Project/Sources/Classes de um projeto para criar uma classe chamada "myClass".']}),"\n",(0,a.jsxs)(o.p,{children:["Para instanciar um objeto da classe num m\xe9todo, chame a classe usu\xe1rio a partir da ",(0,a.jsx)(o.em,{children:"class store"})," (",(0,a.jsx)(o.code,{children:"cs"}),") e utilize a fun\xe7\xe3o de membro ",(0,a.jsx)(o.code,{children:"new()"}),". \xc9 poss\xedvel passar par\xe2metros."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"// num m\xe9todo 4D\n$o:=cs.myClass.new() \n"})}),"\n",(0,a.jsxs)(o.p,{children:["No m\xe9todo classe ",(0,a.jsx)(o.code,{children:"myClass"}),", utilize a instru\xe7\xe3o ",(0,a.jsx)(o.code,{children:"Function <methodName>"})," para definir a fun\xe7\xe3o membro classe ",(0,a.jsx)(o.em,{children:"methodName"}),". Uma fun\xe7\xe3o membro da classe pode receber e devolver par\xe2metros como qualquer m\xe9todo e utilizar ",(0,a.jsx)(o.code,{children:"This"})," como inst\xe2ncia do objeto."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'//in o ficheiro myClass.4dm Function hello -> $welcome : Text\n  $welcome:="Hello "+This.who\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Para executar uma fun\xe7\xe3o membro da classe, basta utilizar o operador ",(0,a.jsx)(o.code,{children:"()"})," na fun\xe7\xe3o membro da inst\xe2ncia do objeto."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$f:=New object\n$f.message:=New formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Opcionalmente, utilize a palavra-chave ",(0,a.jsx)(o.code,{children:"Class constructor"})," para declarar as propriedades do objeto."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'//in the Rectangle.4dm file\nClass constructor ($height: Integer; $width : Integer)\nThis.height:=$height\nThis.width:=$width \nThis.name:="Rectangle"\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Uma classe pode estender outra classe utilizando ",(0,a.jsx)(o.code,{children:"Class extends <ClassName>"}),". As superclasses podem ser chamadas utilizando o comando ",(0,a.jsx)(o.code,{children:"Super"}),". Por exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"//in the Square.4dm file\nClass extends rectangle\n\nClass constructor($length : Integer)\n\n  // It calls the parent class's constructor with lengths   \n  // provided for the Rectangle's width and height\nSuper($length;$length)\n\nThis.name:=\"Square\"\n"})}),"\n",(0,a.jsx)(o.h2,{id:"Operadores",children:"Operadores"}),"\n",(0,a.jsx)(o.p,{children:"Quando se utiliza a linguagem, \xe9 raro que se pretenda apenas um dado. \xc9 mais prov\xe1vel que queira fazer algo com esses dados ou a partir deles. Estes c\xe1lculos s\xe3o efectuados com operadores. Os operadores, em geral, pegam em dois dados e efetuam uma opera\xe7\xe3o sobre eles que resulta num novo dado. J\xe1 est\xe1 familiarizado com muitos operadores. You are already familiar with many operators. You are already familiar with many operators."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Operador"}),(0,a.jsx)(o.th,{children:"Opera\xe7\xe3o"}),(0,a.jsx)(o.th,{children:"Exemplo"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"+"}),(0,a.jsx)(o.td,{children:"Adi\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"1 +2 = 3"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u2013"}),(0,a.jsx)(o.td,{children:"Subtra\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"3 - 2 = 1"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Multiplica\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"2 * 3 = 6"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"/"}),(0,a.jsx)(o.td,{children:"Divis\xe3o"}),(0,a.jsx)(o.td,{children:"6 / 2 = 3"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"Os operadores num\xe9ricos s\xe3o apenas um dos tipos de operadores dispon\xedveis. 4D suporta muitos tipos de dados, tais como n\xfameros, texto, datas e imagens, por isso h\xe1 operadores que realizam opera\xe7\xf5es nestes diferentes tipos de dados."}),"\n",(0,a.jsx)(o.p,{children:"Os mesmos s\xedmbolos s\xe3o frequentemente utilizados para opera\xe7\xf5es diferentes, consoante o tipo de dados. Por exemplo, o sinal de mais (+) efetua opera\xe7\xf5es diferentes com dados diferentes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Tipo de dados"}),(0,a.jsx)(o.th,{children:"Opera\xe7\xe3o"}),(0,a.jsx)(o.th,{children:"Exemplo"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Number"}),(0,a.jsx)(o.td,{children:"Adi\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"1 + 2 adiciona os n\xfameros e resultados em 3"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"String"}),(0,a.jsx)(o.td,{children:"Concatena\xe7\xe3o"}),(0,a.jsx)(o.td,{children:'"Hello " + "there" concatena (junta) as cadeias de caracteres e resulta em "Hello there"'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Data e N\xfamero"}),(0,a.jsx)(o.td,{children:"Adi\xe7\xe3o de data"}),(0,a.jsx)(o.td,{children:"!1989-01-01! + 20 acrescenta 20 dias \xe0 data de 1 de janeiro de 1989 e resulta na data de 21 de janeiro de 1989"})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"Express\xf5es",children:"Express\xf5es"}),"\n",(0,a.jsx)(o.p,{children:"Em termos simples, as express\xf5es retornam um valor. De facto, quando se usa a linguagem 4D, usa-se express\xf5es a toda a hora e tende-se a pensar nelas apenas em termos do valor que representam. As express\xf5es tamb\xe9m s\xe3o conhecidas como f\xf3rmulas."}),"\n",(0,a.jsx)(o.p,{children:"As express\xf5es s\xe3o compostas por quase todas as outras partes da linguagem: comandos, operadores, vari\xe1veis, campos, propriedades de objetos e elementos de cole\xe7\xf5es. Utiliza express\xf5es para escrever linhas de c\xf3digo, que por sua vez s\xe3o utilizadas para construir os m\xe9todos. A linguagem utiliza express\xf5es sempre que necessita de um dado."}),"\n",(0,a.jsx)(o.p,{children:'As express\xf5es raramente s\xe3o "aut\xf3nomas." H\xe1 v\xe1rios s\xedtios em 4D onde uma express\xe3o pode ser usada por si s\xf3. Inclui:'}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Editor de f\xf3rmulas (apply formula, query with formula, order by formula)"}),"\n",(0,a.jsxs)(o.li,{children:["O comando ",(0,a.jsx)(o.code,{children:"EXECUTE FORMULA"})]}),"\n",(0,a.jsx)(o.li,{children:"A lista de propriedades, onde uma express\xe3o pode ser usada como fonte de dados para a maioria dos widgets"}),"\n",(0,a.jsx)(o.li,{children:"Depurador onde o valor das express\xf5es pode ser verificado"}),"\n",(0,a.jsx)(o.li,{children:"Editor de relat\xf3rios r\xe1pidos como uma f\xf3rmula para uma coluna"}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"Tipos-de-express\xf5es",children:"Tipos de express\xf5es"}),"\n",(0,a.jsx)(o.p,{children:"Refere-se a uma express\xe3o pelo tipo de dados que devolve. Existem v\xe1rios tipos de express\xe3o. A tabela seguinte apresenta exemplos de cada tipo de express\xe3o."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Expression"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u201cHello\u201d"}),(0,a.jsx)(o.td,{children:"String"}),(0,a.jsx)(o.td,{children:"A palavra Hello \xe9 uma constante cadeia de caracteres, indicada pelas aspas duplas."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u201cHello \u201d + \u201cthere\u201d"}),(0,a.jsx)(o.td,{children:"String"}),(0,a.jsx)(o.td,{children:'Duas cadeias, "Hello " e "there", s\xe3o adicionadas (concatenadas) com o operador de concatena\xe7\xe3o de cadeias (+). \xc9 devolvida a cadeia de caracteres "Hello there".'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u201cSr. \u201d + [People]Name"}),(0,a.jsx)(o.td,{children:"String"}),(0,a.jsx)(o.td,{children:'S\xe3o concatenadas duas cadeias: a cadeia "Mr. " e o valor atual do campo Name na tabela People. Se o campo contiver "Smith", a express\xe3o devolve "Mr. Smith".'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:'Uppercase("smith")'}),(0,a.jsx)(o.td,{children:"String"}),(0,a.jsxs)(o.td,{children:["Esta express\xe3o utiliza ",(0,a.jsx)(o.code,{children:"Uppercase"}),', um comando da linguagem, para converter a cadeia de caracteres "smith" em mai\xfasculas. Retorna "SMITH".']})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"4"}),(0,a.jsx)(o.td,{children:"Number"}),(0,a.jsx)(o.td,{children:"Esta \xe9 uma constante num\xe9rica, 4."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"4 * 2"}),(0,a.jsx)(o.td,{children:"Number"}),(0,a.jsx)(o.td,{children:"Dois n\xfameros, 4 e 2, s\xe3o multiplicados utilizando o operador de multiplica\xe7\xe3o (*). O resultado \xe9 o n\xfamero 8."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"myButton"}),(0,a.jsx)(o.td,{children:"Number"}),(0,a.jsx)(o.td,{children:"Esta \xe9 uma vari\xe1vel associada a um bot\xe3o. Devolve o valor atual do bot\xe3o: 1 se foi clicado, 0 se n\xe3o foi."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"!1997-01-25!"}),(0,a.jsx)(o.td,{children:"Date"}),(0,a.jsx)(o.td,{children:"Esta \xe9 uma constante data para a data 1/25/97 (25 de janeiro de 1997)."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Current date+ 30"}),(0,a.jsx)(o.td,{children:"Date"}),(0,a.jsxs)(o.td,{children:["Esta \xe9 uma express\xe3o de tipo data que utiliza o comando ",(0,a.jsx)(o.code,{children:"Current date"})," para obter a data de hoje. Adiciona 30 dias \xe0 data de hoje e devolve a nova data."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"?8:05:30?"}),(0,a.jsx)(o.td,{children:"Hora"}),(0,a.jsx)(o.td,{children:"Esta \xe9 uma constante de tempo que representa 8 horas, 5 minutos e 30 segundos."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"?2:03:04? + ?1:02:03?"}),(0,a.jsx)(o.td,{children:"Hora"}),(0,a.jsx)(o.td,{children:"Esta express\xe3o soma dois horas e devolve a hora 3:05:07."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"True"}),(0,a.jsx)(o.td,{children:"Par\xe2metros"}),(0,a.jsx)(o.td,{children:"Este comando devolve o valor Booleano TRUE."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"10 # 20"}),(0,a.jsx)(o.td,{children:"Par\xe2metros"}),(0,a.jsx)(o.td,{children:'Trata-se de uma compara\xe7\xe3o l\xf3gica entre dois n\xfameros. O sinal de n\xfamero (#) significa "n\xe3o \xe9 igual a". Como 10 "n\xe3o \xe9 igual a" 20, a express\xe3o devolve TRUE.'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u201cABC\u201d = \u201cXYZ\u201d"}),(0,a.jsx)(o.td,{children:"Par\xe2metros"}),(0,a.jsx)(o.td,{children:"Trata-se de uma compara\xe7\xe3o l\xf3gica entre duas cadeias. N\xe3o s\xe3o iguais, pelo que a express\xe3o devolve FALSE."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"My Picture + 50"}),(0,a.jsx)(o.td,{children:"Imagem"}),(0,a.jsx)(o.td,{children:"Esta express\xe3o pega na imagem em My Picture, move-a 50 p\xedxeis para a direita e devolve a imagem resultante."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"->[People]Name"}),(0,a.jsx)(o.td,{children:"Ponteiro"}),(0,a.jsx)(o.td,{children:"Esta express\xe3o devolve um ponteiro ao campo chamado [People]Name."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Table(1)"}),(0,a.jsx)(o.td,{children:"Ponteiro"}),(0,a.jsx)(o.td,{children:"Este \xe9 um comando que devolve um ponteiro para a primeira tabela."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"JSON Parse (MyString)"}),(0,a.jsx)(o.td,{children:"Object"}),(0,a.jsx)(o.td,{children:"Este \xe9 um comando que devolve MyString como um objeto (se o formato \xe9 adequado)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"JSON Parse (MyJSONArray)"}),(0,a.jsx)(o.td,{children:"Collection"}),(0,a.jsx)(o.td,{children:"Este \xe9 um comando que devolve MyJSONArray como uma cole\xe7\xe3o (se o formato \xe9 adequado)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Form.pageNumber"}),(0,a.jsx)(o.td,{children:"Propriedade objecto"}),(0,a.jsx)(o.td,{children:"Uma propriedade objeto \xe9 uma express\xe3o que pode ser de qualquer tipo suportado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Col[5]"}),(0,a.jsx)(o.td,{children:"Elemento de colec\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"Um elemento de cole\xe7\xe3o \xe9 uma express\xe3o que pode ser de qualquer tipo suportado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"$entitySel[0]"}),(0,a.jsx)(o.td,{children:"Entity"}),(0,a.jsxs)(o.td,{children:["Um elemento de uma sele\xe7\xe3o de entidade ORDA \xe9 uma express\xe3o do tipo entidade. Este tipo de express\xe3o \xe9 ",(0,a.jsx)(o.strong,{children:"n\xe3o atribu\xedvel"})]})]})]})]}),"\n",(0,a.jsx)(o.h3,{id:"Express\xf5es-atribu\xedveis-vs-express\xf5es-n\xe3o-atribu\xedveis",children:"Express\xf5es atribu\xedveis vs express\xf5es n\xe3o atribu\xedveis"}),"\n",(0,a.jsxs)(o.p,{children:['Uma express\xe3o pode ser simplesmente uma constante literal, como o n\xfamero 4 ou a string "Hello", ou uma vari\xe1vel como ',(0,a.jsx)(o.code,{children:"$myButton"}),". Tamb\xe9m pode utilizar operadores. Por exemplo, 4 + 2 \xe9 uma express\xe3o que utiliza o operador de adi\xe7\xe3o para somar dois n\xfameros e devolver o resultado 6. Em qualquer dos casos, estas express\xf5es s\xe3o ",(0,a.jsx)(o.strong,{children:"n\xe3o atribu\xedveis"}),", o que significa que n\xe3o lhes pode ser atribu\xeddo um valor. Em 4D, as express\xf5es podem ser ",(0,a.jsx)(o.strong,{children:"atribu\xedveis"}),". Uma express\xe3o \xe9 atribu\xedvel quando pode ser utilizada no lado esquerdo de uma atribui\xe7\xe3o. Por exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Em geral, as express\xf5es que utilizam um operador n\xe3o s\xe3o atribu\xedveis. Por exemplo, ",(0,a.jsx)(o.code,{children:'[Person]FirstName+" "+[Person]LastName'})," n\xe3o \xe9 atribu\xedvel."]}),"\n",(0,a.jsx)(o.h2,{id:"Ponteiro",children:"Ponteiro"}),"\n",(0,a.jsx)(o.p,{children:"A linguagem 4D fornece uma implementa\xe7\xe3o avan\xe7ada de ponteiros, que permite escrever c\xf3digo poderoso e modular. \xc9 poss\xedvel utilizar ponteiros para referenciar tabelas, campos, vari\xe1veis, arrays e elementos de arrays."}),"\n",(0,a.jsx)(o.p,{children:'Um ponteiro para um elemento \xe9 criado adicionando um s\xedmbolo "->" antes do nome do elemento, e pode ser desreferenciado adicionando o s\xedmbolo "->" ap\xf3s o nome do ponteiro.'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'MyVar:="Hello" MyPointer:=->MyVar ALERT(MyPointer->)\n'})}),"\n",(0,a.jsx)(o.h2,{id:"C\xf3digo-em-v\xe1rias-linhas",children:"C\xf3digo em v\xe1rias linhas"}),"\n",(0,a.jsxs)(o.p,{children:["Pode escrever uma \xfanica express\xe3o em v\xe1rias linhas, terminando cada linha da express\xe3o com um car\xe1cter de barra invertida ",(0,a.jsx)(o.code,{children:"\\"}),". A linguagem 4D considera todas as linhas de uma s\xf3 vez. Por exemplo, as duas declara\xe7\xf5es seguintes s\xe3o equivalentes:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$str:=String("hello world!")\n'})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'$str:=String("hello"+\\\n" world"+\\\n+"!")\n'})}),"\n",(0,a.jsx)(o.h2,{id:"Coment\xe1rios",children:"Coment\xe1rios"}),"\n",(0,a.jsx)(o.p,{children:"Os coment\xe1rios s\xe3o linhas de c\xf3digo inactivas. Estas linhas n\xe3o s\xe3o interpretadas pela linguagem 4D e n\xe3o s\xe3o executadas quando o c\xf3digo \xe9 chamado."}),"\n",(0,a.jsx)(o.p,{children:"Existem duas formas de criar coment\xe1rios:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"//"})," para coment\xe1rios de linha \xfanica"]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"/*...*/"})," para comentarios em linha ou multilinha."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Ambos os estilos de coment\xe1rios podem ser utilizados em simult\xe2neo."}),"\n",(0,a.jsx)(o.h4,{id:"Single-line-comments-",children:"Single line comments (//)"}),"\n",(0,a.jsxs)(o.p,{children:["Inserir ",(0,a.jsx)(o.code,{children:"//"})," no in\xedcio de uma linha ou depois de uma declara\xe7\xe3o para adicionar um coment\xe1rio de linha \xfanica. Exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"//This is a comment For($vCounter;1;100) //Starting loop\n  //comment\n  //comment\n  //comment\n End for\n"})}),"\n",(0,a.jsx)(o.h4,{id:"Inline-or-multiline-comments-",children:"Inline or multiline comments (/**/)"}),"\n",(0,a.jsxs)(o.p,{children:["Envolva o conte\xfado com caracteres ",(0,a.jsx)(o.code,{children:"/*"})," ... ",(0,a.jsx)(o.code,{children:"*/"})," para criar coment\xe1rios em linha ou blocos de coment\xe1rios de v\xe1rias linhas. Os blocos de coment\xe1rios, tanto em linha como em v\xe1rias linhas, come\xe7am com ",(0,a.jsx)(o.code,{children:"/*"})," e terminam com ",(0,a.jsx)(o.code,{children:"*/"}),"."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["As ",(0,a.jsx)(o.strong,{children:"linhas de coment\xe1rios"})," podem ser inseridos em qualquer parte do c\xf3digo. Exemplo:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"For /* inline comment */ ($vCounter;1;100)\n ...\nEnd for\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Os ",(0,a.jsx)(o.strong,{children:"blocos de coment\xe1rios de v\xe1rias linhas"})," permite comentar um n\xfamero ilimitado de linhas. Os blocos de coment\xe1rios podem ser aninhados (o que \xe9 \xfatil, j\xe1 que o editor de c\xf3digo 4D suporta blocos condensados). Exemplo:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"For ($vCounter;1;100)\n/*\ncomments  \n /*\n other comments\n */\n*/\n...\nEnd for\n"})}),"\n",(0,a.jsx)(o.h2,{id:"Sequ\xeancias-de-escape",children:"Sequ\xeancias de escape"}),"\n",(0,a.jsx)(o.p,{children:'A linguagem 4D permite-lhe usar sequ\xeancias de escape (tamb\xe9m chamadas caracteres de escape). Uma sequ\xeancia de escape \xe9 uma sequ\xeancia de caracteres que pode ser utilizada para substituir um car\xe1cter "especial".'}),"\n",(0,a.jsxs)(o.p,{children:["A sequ\xeancia \xe9 constitu\xedda por uma barra invertida ",(0,a.jsx)(o.code,{children:"\\"}),", seguida de um car\xe1cter. Por exemplo, ",(0,a.jsx)(o.code,{children:"\\t"})," \xe9 uma sequ\xeancia de escape para o car\xe1cter ",(0,a.jsx)(o.strong,{children:"Tab"}),". As sequ\xeancias de escape facilitam a introdu\xe7\xe3o de caracteres especiais: o exemplo anterior (",(0,a.jsx)(o.code,{children:"\\t"}),') substitui a entrada "Character(Tab)".']}),"\n",(0,a.jsx)(o.p,{children:"Em 4D, podem ser utilizadas as seguintes sequ\xeancias de escape:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Escape sequence"}),(0,a.jsx)(o.th,{children:"Car\xe1cter substitu\xeddo"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"\\n"})}),(0,a.jsx)(o.td,{children:"LF (Avan\xe7o de linha)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"\\t"})}),(0,a.jsx)(o.td,{children:"HT (Tab)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"\\r"})}),(0,a.jsx)(o.td,{children:"CR (Carriage return)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"``\\`"}),(0,a.jsx)(o.td,{children:"``` (Barra invertida)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:'\\"'})}),(0,a.jsx)(o.td,{children:'" (aspas)'})]})]})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"\xc9 poss\xedvel utilizar mai\xfasculas ou min\xfasculas nas sequ\xeancias de escape."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["No exemplo seguinte, o car\xe1cter ",(0,a.jsx)(o.strong,{children:"Retorno de carro"})," (sequ\xeancia de escape ",(0,a.jsx)(o.code,{children:"\\r"}),") \xe9 inserido numa express\xe3o para obter uma caixa de di\xe1logo:"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.code,{children:'ALERT("The operation has been completed successfully.\\rYou may now disconnect.")'})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,o,s)=>{var a=s(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,s){var a,r={},l=null,c=null;for(a in void 0!==s&&(l=""+s),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(c=o.ref),o)d.call(o,a)&&!t.hasOwnProperty(a)&&(r[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===r[a]&&(r[a]=o[a]);return{$$typeof:n,type:e,key:l,ref:c,props:r,_owner:i.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},474848:(e,o,s)=>{e.exports=s(221020)},850545:(e,o,s)=>{s.d(o,{A:()=>a});const a=s.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>i});var a=s(296540);const n={},r=a.createContext(n);function d(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);