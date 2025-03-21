"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9707"],{281474:function(e,a,r){r.r(a),r.d(a,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"Concepts/pointer","title":"Ponteiro","description":"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Concepts/dt_pointer.md","sourceDirName":"Concepts","slug":"/Concepts/pointer","permalink":"/docs/pt/Concepts/pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"pointer","title":"Ponteiro"},"sidebar":"docs","previous":{"title":"Imagem","permalink":"/docs/pt/Concepts/picture"},"next":{"title":"String","permalink":"/docs/pt/Concepts/string"}}'),n=r("785893"),i=r("250065");let s={id:"pointer",title:"Ponteiro"},t=void 0,d={},l=[{value:"Usando um ponteiro: Exemplo b\xe1sico",id:"usando-um-ponteiro-exemplo-b\xe1sico",level:2},{value:"Operadores de Ponteiros",id:"operadores-de-ponteiros",level:2},{value:"Principais usos",id:"principais-usos",level:2},{value:"Ponteiros para tabelas",id:"ponteiros-para-tabelas",level:3},{value:"Ponteiros a campos",id:"ponteiros-a-campos",level:3},{value:"Ponteiros para vari\xe1veis locais",id:"ponteiros-para-vari\xe1veis-locais",level:3},{value:"Ponteiros para os elementos do array",id:"ponteiros-para-os-elementos-do-array",level:3},{value:"Ponteiros a arrays",id:"ponteiros-a-arrays",level:3},{value:"Indicadores como par\xe2metros para os m\xe9todos",id:"indicadores-como-par\xe2metros-para-os-m\xe9todos",level:3},{value:"Ponteiros a ponteiros",id:"ponteiros-a-ponteiros",level:3}];function c(e){let a={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer."}),"\n",(0,n.jsx)(a.p,{children:"Os apontadores fornecem uma forma avan\xe7ada (na programa\xe7\xe3o) para se referir aos dados. Quando voc\xea usar a linguagem, voc\xea acessa v\xe1rios objetos - em particular, tabelas, campos, vari\xe1veis, objetos e matrizes - simplesmente usando seus nomes. No entanto, muitas vezes \xe9 \xfatil fazer refer\xeancia a estes elementos e aceder aos mesmos sem conhecer os seus nomes. Isto \xe9 o que os indicadores lhe permitem fazer."}),"\n",(0,n.jsx)(a.p,{children:'O conceito subjacente aos ponteiros n\xe3o \xe9 assim t\xe3o incomum na vida cotidiana. Muitas vezes voc\xea se refere a algo sem saber sua identidade exata. Por exemplo, poderia dizer a um amigo: "Vamos dar uma volta no seu carro" em vez de "Vamos dar uma volta no carro com a placa 123ABD". Neste caso, est\xe1 a referenciar o carro com a matr\xedcula 123ABD, utilizando a frase "o seu carro". A frase "carro com matr\xedcula 123ABD" \xe9 como o nome de um objecto, e utilizar a frase "o seu carro" \xe9 como utilizar um ponteiro para fazer refer\xeancia ao objecto.'}),"\n",(0,n.jsx)(a.p,{children:'Ser capaz de se referir a algo sem conhecer a sua identidade exata \xe9 muito \xfatil. De facto, o seu amigo poderia obter um carro novo, e a frase "o seu carro" continuaria a ser exata - continuaria a ser um carro e ainda poderia dar uma volta nele. Os ponteiros funcionam da mesma maneira. Por exemplo, um ponteiro poderia, de uma vez, referir-se a um campo num\xe9rico chamado Age, e mais tarde referir-se a uma vari\xe1vel num\xe9rica chamada Old Age. Em ambos os casos, o ponteiro faz refer\xeancia a dados num\xe9ricos que poderiam ser utilizados num c\xe1lculo.'}),"\n",(0,n.jsx)(a.p,{children:"Pode usar apontadores para referenciar tabelas, campos, vari\xe1veis, matrizes, elementos de array, e objetos. A tabela a seguir d\xe1 um exemplo de cada tipo de dado:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{children:"Referencia\xe7\xe3o"}),(0,n.jsx)(a.th,{children:"Para usar"}),(0,n.jsx)(a.th,{children:"Atribui\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Tabela"}),(0,n.jsx)(a.td,{children:"vpTable:=->[Table]"}),(0,n.jsx)(a.td,{children:"DEFAULT TABLE(vpTable->)"}),(0,n.jsx)(a.td,{children:"n/a"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Campo"}),(0,n.jsx)(a.td,{children:"vpField:=->[Table]Field"}),(0,n.jsx)(a.td,{children:"ALERT(vpField->)"}),(0,n.jsx)(a.td,{children:'vpField->:="John"'})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Vari\xe1vel"}),(0,n.jsx)(a.td,{children:"vpVar:=->Variable"}),(0,n.jsx)(a.td,{children:"ALERT(vpVar->)"}),(0,n.jsx)(a.td,{children:'vpVar->:="John"'})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Array"}),(0,n.jsx)(a.td,{children:"vpArr:=->Array"}),(0,n.jsx)(a.td,{children:"SORT ARRAY(vpArr->;>)"}),(0,n.jsx)(a.td,{children:"COPY ARRAY (Arr;vpArr->)"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Elemento Array"}),(0,n.jsx)(a.td,{children:"vpElem:=->Array{1}"}),(0,n.jsx)(a.td,{children:"ALERT (vpElem->)"}),(0,n.jsx)(a.td,{children:'vpElem->:="John"'})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Object"}),(0,n.jsx)(a.td,{children:"vpObj:=->myObject"}),(0,n.jsx)(a.td,{children:"ALERT (vpObj->myProp)"}),(0,n.jsx)(a.td,{children:'vpObj->myProp:="John"'})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"usando-um-ponteiro-exemplo-b\xe1sico",children:"Usando um ponteiro: Exemplo b\xe1sico"}),"\n",(0,n.jsx)(a.p,{children:"\xc9 mais f\xe1cil explicar o uso de ponteiros atrav\xe9s de um exemplo. Este exemplo mostra como acessar uma vari\xe1vel atrav\xe9s de um ponteiro. Come\xe7amos por criar uma vari\xe1vel:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'$MyVar:="Hello"\n'})}),"\n",(0,n.jsx)(a.p,{children:'$MyVar \xe9 agora uma vari\xe1vel que cont\xe9m a string "Ol\xe1". Agora podemos criar um ponteiro para $MyVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"var $MyPointer : Pointer\n$MyPointer:=->$MyVar\n"})}),"\n",(0,n.jsx)(a.p,{children:'El s\xedmbolo -> significa "obtener un puntero a." Este s\xedmbolo \xe9 formado por um tra\xe7o seguido por um sinal "maior que". Neste caso, ele recebe o ponteiro que faz refer\xeancia ou "aponta para" $MyVar. Este ponteiro \xe9 atribu\xeddo ao MyPointer com o operador de atribui\xe7\xe3o.'}),"\n",(0,n.jsx)(a.p,{children:'$MyPointer \xe9 agora uma vari\xe1vel que cont\xe9m um ponteiro para $MyVar. $MyPointer n\xe3o cont\xe9m "Ol\xe1", que \xe9 o valor em $MyVar, mas pode usar $MyPointer para obter este valor. A seguinte express\xe3o devolve o valor em $MyVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$MyPointer->\n"})}),"\n",(0,n.jsx)(a.p,{children:'Nesse caso, ela retorna a seq\xfc\xeancia de caracteres "Ol\xe1". El s\xedmbolo ->, cuando sigue a un puntero, hace referencia al objeto apuntado. A isto chama-se desreferencia\xe7\xe3o.'}),"\n",(0,n.jsx)(a.p,{children:"Es importante entender que se puede utilizar un puntero seguido del s\xedmbolo -> en cualquier lugar donde se podr\xeda haber utilizado el objeto al que apunta el puntero. Esto significa que podr\xeda utilizar la expresi\xf3n $MyPointer-> en cualquier lugar en el que pudiera utilizar la variable original $MyVar. Por exemplo, a linha seguinte exibe uma caixa de alerta com a palavra Ol\xe1 nela:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ALERT($MyPointer->)\n"})}),"\n",(0,n.jsx)(a.p,{children:'Pode tamb\xe9m utilizar $MyPointer para alterar os dados em $MyVar. Por exemplo, a seguinte declara\xe7\xe3o armazena a string "Goodbye" na vari\xe1vel $MyVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n'})}),"\n",(0,n.jsx)(a.p,{children:"Si examina los dos usos de la expresi\xf3n $MyPointer->, ver\xe1 que act\xfaa igual que si hubiera utilizado $MyVar en su lugar. Em resumo, as duas linhas seguintes realizam a mesma a\xe7\xe3o - ambas apresentam uma caixa de alerta contendo o valor actual na vari\xe1vel $MyVar:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ALERT($MyPointer->)\nALERT($MyVar)\n"})}),"\n",(0,n.jsx)(a.p,{children:'As duas linhas seguintes executam a mesma a\xe7\xe3o - ambas atribuem a string "Goodbye" a $MyVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n'})}),"\n",(0,n.jsx)(a.h2,{id:"operadores-de-ponteiros",children:"Operadores de Ponteiros"}),"\n",(0,n.jsx)(a.p,{children:"Con:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"  ` vPtrA e vPtrB apontam para o mesmo objecto\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC aponta para outro objecto\n vPtrC:=-outroObject\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Opera\xe7\xe3o"}),(0,n.jsx)(a.th,{children:"Sintaxe"}),(0,n.jsx)(a.th,{children:"Retorna"}),(0,n.jsx)(a.th,{children:"Expression"}),(0,n.jsx)(a.th,{children:"Valor"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Igual"}),(0,n.jsx)(a.td,{children:"Ponteiro = Ponteiro"}),(0,n.jsx)(a.td,{children:"Par\xe2metros"}),(0,n.jsx)(a.td,{children:"vPtrA = vPtrB"}),(0,n.jsx)(a.td,{children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{children:"vPtrA = vPtrC"}),(0,n.jsx)(a.td,{children:"False"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Desigualdade"}),(0,n.jsx)(a.td,{children:"Pointer # Pointer"}),(0,n.jsx)(a.td,{children:"Par\xe2metros"}),(0,n.jsx)(a.td,{children:"vPtrA # vPtrC"}),(0,n.jsx)(a.td,{children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{children:"vPtrA # vPtrB"}),(0,n.jsx)(a.td,{children:"False"})]})]})]}),"\n",(0,n.jsxs)(a.admonition,{title:"Null Pointers",type:"warning",children:[(0,n.jsx)(a.p,{children:'Trying to assign or to read a null pointer (aka "nil") will produce an error at runtime. Por exemplo:'}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"var $p : Pointer // non initialized pointer (Nil value)\n$v:=$p-> // error\n$p->:=$v // error\n"})}),(0,n.jsx)(a.p,{children:"To prevent such errors, you can write:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"If ($p#Null)\n  $p->:=$v\nEnd if\n"})})]}),"\n",(0,n.jsx)(a.h2,{id:"principais-usos",children:"Principais usos"}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-para-tabelas",children:"Ponteiros para tabelas"}),"\n",(0,n.jsx)(a.p,{children:"Em qualquer lugar que a l\xedngua espere ver uma tabela, pode usar um ponteiro desreferenciado para a tabela. Cria-se um ponteiro para uma mesa usando uma linha como esta:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$TablePtr:=->[anyTable]\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Tambi\xe9n puede obtener un puntero a una tabla utilizando el comando ",(0,n.jsx)(a.code,{children:"Table"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$TablePtr:=Table(20)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Pode usar o ponteiro desreferenciado em comandos, como este:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"DEFAULT TABLE($TablePtr->)\n"})}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-a-campos",children:"Ponteiros a campos"}),"\n",(0,n.jsx)(a.p,{children:"Em qualquer lugar que a l\xedngua espere ver um campo, pode usar um ponteiro desreferenciado para referenciar o campo. Cria-se um ponteiro para um campo usando uma linha como esta:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$FieldPtr:=->[aTable]ThisField\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Tambi\xe9n puede obtener un puntero a un campo utilizando el comando ",(0,n.jsx)(a.code,{children:"Campo"}),", por ejemplo:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$FieldPtr:=Field(1;2)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Pode usar o ponteiro desreferenciado em comandos, como este:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'OBJECT SET FONT($FieldPtr->;"Arial")\n'})}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-para-vari\xe1veis-locais",children:"Ponteiros para vari\xe1veis locais"}),"\n",(0,n.jsx)(a.p,{children:"Quando se utilizam apontadores para processar ou vari\xe1veis locais, \xe9 necess\xe1rio ter a certeza de que a vari\xe1vel apontada j\xe1 est\xe1 definida quando o apontador \xe9 utilizado. Tenha em mente que as vari\xe1veis locais s\xe3o eliminadas quando o m\xe9todo que as criou tiver conclu\xeddo a sua execu\xe7\xe3o e as vari\xe1veis de processo s\xe3o eliminadas no final do processo que as criou. Quando um ponteiro chama uma vari\xe1vel que j\xe1 n\xe3o existe, isto causa um erro de sintaxe no modo interpretado (vari\xe1vel n\xe3o definida) mas pode gerar um erro mais grave no modo compilado."}),"\n",(0,n.jsxs)(a.p,{children:["Os ponteiros para vari\xe1veis locais permitem-lhe guardar vari\xe1veis de processo em muitos casos. Os ponteiros para vari\xe1veis locais s\xf3 podem ser utilizados dentro do mesmo processo. No depurador, quando se mostra um ponteiro para uma vari\xe1vel local que tenha sido declarada noutro m\xe9todo, o nome do m\xe9todo original \xe9 indicado entre par\xeanteses, ap\xf3s o ponteiro. For example, if you write in ",(0,n.jsx)(a.em,{children:"Method1"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' $MyVar:="Hello world"\n Method2(->$MyVar)\n'})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"Method2"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"#DECLARE($param : Pointer)\n...\n"})}),"\n",(0,n.jsx)(a.p,{children:"The debugger will display $param as follows:"}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(a.table,{children:(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"$param"}),(0,n.jsx)(a.th,{children:"->$MyVar (Method1)"})]})})}),"\n",(0,n.jsx)(a.p,{children:"You can expand $param and its value will be:"}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(a.table,{children:(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"$MyVar"}),(0,n.jsx)(a.th,{children:'"Hello world"'})]})})}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-para-os-elementos-do-array",children:"Ponteiros para os elementos do array"}),"\n",(0,n.jsx)(a.p,{children:"Pode criar um ponteiro para um elemento de array. Por exemplo, as linhas seguintes criam um array e atribuem um ponteiro ao primeiro elemento do array a uma vari\xe1vel chamada $ElemPtr:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Crear un array\n$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array\n"})}),"\n",(0,n.jsx)(a.p,{children:"Poderia usar o ponteiro desreferenciado para atribuir um valor ao elemento, como este:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$ElemPtr->:=8\n"})}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-a-arrays",children:"Ponteiros a arrays"}),"\n",(0,n.jsx)(a.p,{children:"\xc9 poss\xedvel criar um ponteiro para um array. Por exemplo, as seguintes linhas criam um array e atribuem um ponteiro ao array a uma vari\xe1vel chamada $ArrPtr:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Crear un array\n$ArrPtr:=->$anArray //Crear un puntero al array\n"})}),"\n",(0,n.jsx)(a.p,{children:"\xc9 importante compreender que o ponteiro aponta para a matriz; ele n\xe3o aponta para um elemento da matriz. Por exemplo, pode utilizar o ponteiro desreferenciado das linhas anteriores como este:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"SORT ARRAY($ArrPtr->;>) //Ordenar el array\n"})}),"\n",(0,n.jsx)(a.p,{children:"Se precisar de se referir ao quarto elemento do array usando o ponteiro, fa\xe7a desta maneira:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:" ArrPtr->{4}:=84\n"})}),"\n",(0,n.jsx)(a.h3,{id:"indicadores-como-par\xe2metros-para-os-m\xe9todos",children:"Indicadores como par\xe2metros para os m\xe9todos"}),"\n",(0,n.jsxs)(a.p,{children:["Pode passar um ponteiro como par\xe2metro para um m\xe9todo. Dentro do m\xe9todo, voc\xea pode modificar o objeto referenciado pelo ponteiro. Por ejemplo, el siguiente m\xe9todo, ",(0,n.jsx)(a.code,{children:"takeTwo"}),", toma dos par\xe1metros que son punteros. Altera o objecto referenciado pelo primeiro par\xe2metro para caracteres mai\xfasculos, e o objecto referenciado pelo segundo par\xe2metro para caracteres min\xfasculos. Aqui est\xe1 o m\xe9todo do projecto:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"  //takeTwo project method\n  //$changeUp \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$changeLow \u2013 Pointer to a string field or variable. Change this to lowercase.\n #DECLARE($changeUp : Pointer ; $changeLow : Pointer)\n $changeUp->:=Uppercase($changeUp->)\n $changeLow->:=Lowercase($changeLow->)\n"})}),"\n",(0,n.jsxs)(a.p,{children:["La siguiente l\xednea utiliza el m\xe9todo ",(0,n.jsx)(a.code,{children:"takeTwo"})," para cambiar un campo a may\xfasculas y para cambiar una variable a min\xfasculas:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"takeTwo(->[myTable]myField;->$MyVar)\n"})}),"\n",(0,n.jsx)(a.p,{children:'Se o campo [myTable]myField contivesse a corda "jones", esta seria alterada para a corda "JONES". Se a vari\xe1vel $MyVar contivesse a string "HELLO", esta seria alterada para a string "ol\xe1".'}),"\n",(0,n.jsx)(a.p,{children:"No m\xe9todo takeTwo, e de facto, sempre que se utilizam apontadores, \xe9 importante que o tipo de dados do objecto a ser referenciado esteja correcto. No exemplo anterior, os apontadores devem apontar para algo que contenha um fio ou texto."}),"\n",(0,n.jsx)(a.h3,{id:"ponteiros-a-ponteiros",children:"Ponteiros a ponteiros"}),"\n",(0,n.jsx)(a.p,{children:"Se gosta realmente de complicar as coisas, pode usar apontadores para referenciar outros apontadores. Considerem este exemplo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n'})}),"\n",(0,n.jsx)(a.p,{children:'Exibe uma caixa de alerta com a palavra "Adeus".'}),"\n",(0,n.jsx)(a.p,{children:"Aqui est\xe1 uma explica\xe7\xe3o de cada linha do exemplo:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:'$MyVar:="Hello"\n--\x3e This line puts the string "Hello" into the variable $MyVar.'}),"\n",(0,n.jsx)(a.li,{children:"$PointerOne:=-$MyVar\n-- $PointerOne agora cont\xe9m um ponteiro para $MyVar."}),"\n",(0,n.jsx)(a.li,{children:"$PointerTwo:=-$PointerOne\n-- $PointerTwo (uma nova vari\xe1vel) cont\xe9m um ponteiro para $PointerOne, que por sua vez aponta para $MyVar."}),"\n",(0,n.jsx)(a.li,{children:'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> refere o conte\xfado de $PointerOne, que por sua vez refere $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Assim, neste caso, $MyVar \xe9 atribu\xeddo o "Adeus".'}),"\n",(0,n.jsx)(a.li,{children:"ALERT (($PointerTwo->)->)\n--\x3e A mesma coisa: $PointerTwo-> refere o conte\xfado de $PointerOne, que por sua vez refere $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Por conseguinte ($PointerTwo->)-> faz refer\xeancia ao conte\xfado de $MyVar."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:'A seguinte linha coloca "Hello" em $MyVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'($PointerTwo->)->:="Hello"\n'})}),"\n",(0,n.jsx)(a.p,{children:'A seguinte linha recebe "Hello" de $MyVar e coloca-o em $NewVar:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"$NewVar:=($PointerTwo->)->\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Importante:"})," la desreferenciaci\xf3n m\xfaltiple requiere par\xe9ntesis."]})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return t},a:function(){return s}});var o=r(667294);let n={},i=o.createContext(n);function s(e){let a=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);