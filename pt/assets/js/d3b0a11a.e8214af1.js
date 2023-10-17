"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71549],{603905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>c});var t=r(667294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},m=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=o,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||n;return r?t.createElement(k,l(l({ref:a},m),{},{components:r})):t.createElement(k,l({ref:a},m))}));function c(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},619235:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});r(667294);var t=r(603905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"pointer",title:"Ponteiro"},i=void 0,p={unversionedId:"Concepts/pointer",id:"version-20-R3/Concepts/pointer",title:"Ponteiro",description:"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/docs/pt/Concepts/pointer",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"pointer",title:"Ponteiro"},sidebar:"docs",previous:{title:"Imagem",permalink:"/docs/pt/Concepts/picture"},next:{title:"String",permalink:"/docs/pt/Concepts/string"}},s={},m=[{value:"Usando um ponteiro: Exemplo b\xe1sico",id:"usando-um-ponteiro-exemplo-b\xe1sico",level:2},{value:"Operadores de Ponteiros",id:"operadores-de-ponteiros",level:2},{value:"Principais usos",id:"principais-usos",level:2},{value:"Ponteiros para tabelas",id:"ponteiros-para-tabelas",level:3},{value:"Ponteiros a campos",id:"ponteiros-a-campos",level:3},{value:"Ponteiros para vari\xe1veis locais",id:"ponteiros-para-vari\xe1veis-locais",level:3},{value:"Ponteiros para os elementos do array",id:"ponteiros-para-os-elementos-do-array",level:3},{value:"Ponteiros a arrays",id:"ponteiros-a-arrays",level:3},{value:"Indicadores como par\xe2metros para os m\xe9todos",id:"indicadores-como-par\xe2metros-para-os-m\xe9todos",level:3},{value:"Ponteiros a ponteiros",id:"ponteiros-a-ponteiros",level:3}],u={toc:m};function d(e){var{components:a}=e,r=n(e,["components"]);return(0,t.kt)("wrapper",o({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer."),(0,t.kt)("p",null,"Os apontadores fornecem uma forma avan\xe7ada (na programa\xe7\xe3o) para se referir aos dados. Quando voc\xea usar a linguagem, voc\xea acessa v\xe1rios objetos - em particular, tabelas, campos, vari\xe1veis, objetos e matrizes - simplesmente usando seus nomes. No entanto, muitas vezes \xe9 \xfatil fazer refer\xeancia a estes elementos e aceder aos mesmos sem conhecer os seus nomes. Isto \xe9 o que os indicadores lhe permitem fazer."),(0,t.kt)("p",null,'O conceito subjacente aos ponteiros n\xe3o \xe9 assim t\xe3o incomum na vida cotidiana. Muitas vezes voc\xea se refere a algo sem saber sua identidade exata. Por exemplo, poderia dizer a um amigo: "Vamos dar uma volta no seu carro" em vez de "Vamos dar uma volta no carro com a placa 123ABD". Neste caso, est\xe1 a referenciar o carro com a matr\xedcula 123ABD, utilizando a frase "o seu carro". A frase "carro com matr\xedcula 123ABD" \xe9 como o nome de um objecto, e utilizar a frase "o seu carro" \xe9 como utilizar um ponteiro para fazer refer\xeancia ao objecto.'),(0,t.kt)("p",null,'Ser capaz de se referir a algo sem conhecer a sua identidade exata \xe9 muito \xfatil. De facto, o seu amigo poderia obter um carro novo, e a frase "o seu carro" continuaria a ser exata - continuaria a ser um carro e ainda poderia dar uma volta nele. Os ponteiros funcionam da mesma maneira. Por exemplo, um ponteiro poderia, de uma vez, referir-se a um campo num\xe9rico chamado Age, e mais tarde referir-se a uma vari\xe1vel num\xe9rica chamada Old Age. Em ambos os casos, o ponteiro faz refer\xeancia a dados num\xe9ricos que poderiam ser utilizados num c\xe1lculo.'),(0,t.kt)("p",null,"Pode usar apontadores para referenciar tabelas, campos, vari\xe1veis, matrizes, elementos de array, e objetos. A tabela a seguir d\xe1 um exemplo de cada tipo de dado:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Referencia\xe7\xe3o"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Para usar"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Atribui\xe7\xe3o"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Tabela"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpTable:=->","[Table]"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"DEFAULT TABLE(vpTable->)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"n/a")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Campo"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpField:=->","[Table]","Field"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"ALERT(vpField->)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),'vpField->:="John"')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Vari\xe1vel"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpVar:=->Variable"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"ALERT(vpVar->)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),'vpVar->:="John"')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Array"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpArr:=->Array"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"SORT ARRAY(vpArr->;>)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"COPY ARRAY (Arr;vpArr->)")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Elemento Array"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpElem:=->Array{1}"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"ALERT (vpElem->)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),'vpElem->:="John"')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vpObj:=->myObject"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"ALERT (vpObj->myProp)"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),'vpObj->myProp:="John"')))),(0,t.kt)("h2",o({},{id:"usando-um-ponteiro-exemplo-b\xe1sico"}),"Usando um ponteiro: Exemplo b\xe1sico"),(0,t.kt)("p",null,"\xc9 mais f\xe1cil explicar o uso de ponteiros atrav\xe9s de um exemplo. Este exemplo mostra como acessar uma vari\xe1vel atrav\xe9s de um ponteiro. Come\xe7amos por criar uma vari\xe1vel:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$MyVar:="Hello"\n')),(0,t.kt)("p",null,'$MyVar \xe9 agora uma vari\xe1vel que cont\xe9m a string "Ol\xe1". Agora podemos criar um ponteiro para $MyVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n")),(0,t.kt)("p",null,'O s\xedmbolo -> significa "fazer um ponteiro para". Este s\xedmbolo \xe9 formado por um tra\xe7o seguido por um sinal "maior que". Neste caso, ele recebe o ponteiro que faz refer\xeancia ou "aponta para" $MyVar. Este ponteiro \xe9 atribu\xeddo ao MyPointer com o operador de atribui\xe7\xe3o.'),(0,t.kt)("p",null,'$MyPointer \xe9 agora uma vari\xe1vel que cont\xe9m um ponteiro para $MyVar. $MyPointer n\xe3o cont\xe9m "Ol\xe1", que \xe9 o valor em $MyVar, mas pode usar $MyPointer para obter este valor. A seguinte express\xe3o devolve o valor em $MyVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$MyPointer->\n")),(0,t.kt)("p",null,'Nesse caso, ela retorna a seq\xfc\xeancia de caracteres "Ol\xe1". O s\xedmbolo -> , quando segue um ponteiro, faz refer\xeancia ao objecto apontado. A isto chama-se desreferencia\xe7\xe3o.'),(0,t.kt)("p",null,"\xc9 importante compreender que pode utilizar um ponteiro seguido do s\xedmbolo -> em qualquer lugar para o qual pudesse ter utilizado o objecto para o qual o ponteiro aponta. Isto significa que poderia usar a express\xe3o $MyPointer-> em qualquer lugar onde pudesse usar a vari\xe1vel original $MyVar . Por exemplo, a linha seguinte exibe uma caixa de alerta com a palavra Ol\xe1 nela:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\n")),(0,t.kt)("p",null,'Pode tamb\xe9m utilizar $MyPointer para alterar os dados em $MyVar. Por exemplo, a seguinte declara\xe7\xe3o armazena a string "Goodbye" na vari\xe1vel $MyVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n')),(0,t.kt)("p",null,"Se examinar as duas utiliza\xe7\xf5es da express\xe3o $MyPointer->, ver\xe1 que ela actua como se tivesse utilizado $MyVar em seu lugar. Em resumo, as duas linhas seguintes realizam a mesma a\xe7\xe3o - ambas apresentam uma caixa de alerta contendo o valor actual na vari\xe1vel $MyVar:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\nALERT($MyVar)\n")),(0,t.kt)("p",null,'As duas linhas seguintes executam a mesma a\xe7\xe3o - ambas atribuem a string "Goodbye" a $MyVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n')),(0,t.kt)("h2",o({},{id:"operadores-de-ponteiros"}),"Operadores de Ponteiros"),(0,t.kt)("p",null,"Con:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  vPtrA e vPtrB apontam para o mesmo objecto\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC aponta para outro objecto\n vPtrC:=->outroObject\n")),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Sintaxe"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Retorna"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Expression"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Valor"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Igual"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Ponteiro = Ponteiro"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"True")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vPtrA = vPtrC"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"False")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Desigualdade"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Pointer # Pointer"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vPtrA # vPtrC"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"True")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"vPtrA # vPtrB"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"False")))),(0,t.kt)("h2",o({},{id:"principais-usos"}),"Principais usos"),(0,t.kt)("h3",o({},{id:"ponteiros-para-tabelas"}),"Ponteiros para tabelas"),(0,t.kt)("p",null,"Em qualquer lugar que a l\xedngua espere ver uma tabela, pode usar um ponteiro desreferenciado para a tabela. Cria-se um ponteiro para uma mesa usando uma linha como esta:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=->[anyTable]\n")),(0,t.kt)("p",null,"Tamb\xe9m pode obter um ponteiro para uma tabela usando o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Tabela")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=Table(20)\n")),(0,t.kt)("p",null,"Pode usar o ponteiro desreferenciado em comandos, como este:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"DEFAULT TABLE($TablePtr->)\n")),(0,t.kt)("h3",o({},{id:"ponteiros-a-campos"}),"Ponteiros a campos"),(0,t.kt)("p",null,"Em qualquer lugar que a l\xedngua espere ver um campo, pode usar um ponteiro desreferenciado para referenciar o campo. Cria-se um ponteiro para um campo usando uma linha como esta:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=->[aTable]ThisField\n")),(0,t.kt)("p",null,"Tamb\xe9m pode obter um ponteiro para um campo usando o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Field")," , por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=Field(1;2)\n")),(0,t.kt)("p",null,"Pode usar o ponteiro desreferenciado em comandos, como este:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT($FieldPtr->;"Arial")\n')),(0,t.kt)("h3",o({},{id:"ponteiros-para-vari\xe1veis-locais"}),"Ponteiros para vari\xe1veis locais"),(0,t.kt)("p",null,"Quando se utilizam apontadores para processar ou vari\xe1veis locais, \xe9 necess\xe1rio ter a certeza de que a vari\xe1vel apontada j\xe1 est\xe1 definida quando o apontador \xe9 utilizado. Tenha em mente que as vari\xe1veis locais s\xe3o eliminadas quando o m\xe9todo que as criou tiver conclu\xeddo a sua execu\xe7\xe3o e as vari\xe1veis de processo s\xe3o eliminadas no final do processo que as criou. Quando um ponteiro chama uma vari\xe1vel que j\xe1 n\xe3o existe, isto causa um erro de sintaxe no modo interpretado (vari\xe1vel n\xe3o definida) mas pode gerar um erro mais grave no modo compilado."),(0,t.kt)("p",null,"Os ponteiros para vari\xe1veis locais permitem-lhe guardar vari\xe1veis de processo em muitos casos. Os ponteiros para vari\xe1veis locais s\xf3 podem ser utilizados dentro do mesmo processo. No depurador, quando se mostra um ponteiro para uma vari\xe1vel local que tenha sido declarada noutro m\xe9todo, o nome do m\xe9todo original \xe9 indicado entre par\xeanteses, ap\xf3s o ponteiro. Por exemplo, se escrever no M\xe9todo1:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello world"\n Method2(->$MyVar)\n')),(0,t.kt)("p",null,"No M\xe9todo2, o depurador exibir\xe1 $1 como se segue:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"$1"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"->$MyVar (Method1)"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null}))))),(0,t.kt)("p",null,"O valor de $1 ser\xe1:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"$MyVar (Method1)"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),'"Hello world"'))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null})),(0,t.kt)("td",o({parentName:"tr"},{align:null}))))),(0,t.kt)("h3",o({},{id:"ponteiros-para-os-elementos-do-array"}),"Ponteiros para os elementos do array"),(0,t.kt)("p",null,"Pode criar um ponteiro para um elemento de array. Por exemplo, as linhas seguintes criam um array e atribuem um ponteiro ao primeiro elemento do array a uma vari\xe1vel chamada $ElemPtr:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Cria um array\n$ElemPtr:=->$anArray{1} //Cria um ponteiro para o elemento da array\n")),(0,t.kt)("p",null,"Poderia usar o ponteiro desreferenciado para atribuir um valor ao elemento, como este:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$ElemPtr->:=8\n")),(0,t.kt)("h3",o({},{id:"ponteiros-a-arrays"}),"Ponteiros a arrays"),(0,t.kt)("p",null,"\xc9 poss\xedvel criar um ponteiro para um array. Por exemplo, as seguintes linhas criam um array e atribuem um ponteiro ao array a uma vari\xe1vel chamada $ArrPtr:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Cria um array\n$ArrPtr:=->$anArray //Cria um ponteiro para a array\n")),(0,t.kt)("p",null,"\xc9 importante compreender que o ponteiro aponta para a matriz; ele n\xe3o aponta para um elemento da matriz. Por exemplo, pode utilizar o ponteiro desreferenciado das linhas anteriores como este:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"ORDENAR ARRAY($ArrPtr->;>) //Ordenar o array\n")),(0,t.kt)("p",null,"Se precisar de se referir ao quarto elemento do array usando o ponteiro, fa\xe7a desta maneira:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," ArrPtr->{4}:=84\n")),(0,t.kt)("h3",o({},{id:"indicadores-como-par\xe2metros-para-os-m\xe9todos"}),"Indicadores como par\xe2metros para os m\xe9todos"),(0,t.kt)("p",null,"Pode passar um ponteiro como par\xe2metro para um m\xe9todo. Dentro do m\xe9todo, voc\xea pode modificar o objeto referenciado pelo ponteiro. Por exemplo, o seguinte m\xe9todo, ",(0,t.kt)("inlineCode",{parentName:"p"},"takeTwo"),", toma dois par\xe2metros que s\xe3o indicadores. Altera o objecto referenciado pelo primeiro par\xe2metro para caracteres mai\xfasculos, e o objecto referenciado pelo segundo par\xe2metro para caracteres min\xfasculos. Aqui est\xe1 o m\xe9todo do projecto:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  //takeTwo project method\n  //$1 - Ponteiro para um campo de string  ou vari\xe1vel. Alterar isto para mai\xfasculas.\n  //$2 - Apontador para um campo de string ou vari\xe1vel. Mudar isto para min\xfasculas.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n")),(0,t.kt)("p",null,"A linha seguinte utiliza o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"takeTwo")," para alterar um campo para caracteres mai\xfasculos e para alterar uma vari\xe1vel para caracteres min\xfasculos:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{}),"takeTwo(->[myTable]myField;->$MyVar)\n")),(0,t.kt)("p",null,"Se o campo ","[myTable]",'myField contivesse a corda "jones", esta seria alterada para a corda "JONES". Se a vari\xe1vel $MyVar contivesse a string "HELLO", esta seria alterada para a string "ol\xe1".'),(0,t.kt)("p",null,"No m\xe9todo takeTwo, e de facto, sempre que se utilizam apontadores, \xe9 importante que o tipo de dados do objecto a ser referenciado esteja correcto. No exemplo anterior, os apontadores devem apontar para algo que contenha um fio ou texto."),(0,t.kt)("h3",o({},{id:"ponteiros-a-ponteiros"}),"Ponteiros a ponteiros"),(0,t.kt)("p",null,"Se gosta realmente de complicar as coisas, pode usar apontadores para referenciar outros apontadores. Considerem este exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n')),(0,t.kt)("p",null,'Exibe uma caixa de alerta com a palavra "Adeus".'),(0,t.kt)("p",null,"Aqui est\xe1 uma explica\xe7\xe3o de cada linha do exemplo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'$MyVar:="Hello" --\x3e This line puts the string "Hello" into the variable $MyVar.'),(0,t.kt)("li",{parentName:"ul"},"$PointerOne:=->$MyVar --\x3e $PointerOne now contains a pointer to $MyVar."),(0,t.kt)("li",{parentName:"ul"},"$PointerTwo:=->$PointerOne --\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."),(0,t.kt)("li",{parentName:"ul"},'($PointerTwo->)->:="Goodbye" --\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Por conseguinte ($PointerTwo->)-> faz refer\xeancia ao conte\xfado de $MyVar. Assim, neste caso, $MyVar \xe9 atribu\xeddo o "Adeus".'),(0,t.kt)("li",{parentName:"ul"},"ALERTA (($PointerTwo->)->) --\x3e O mesmo: $PointerTwo-> refere o conte\xfado de $PointerOne, que por sua vez refere $MyVar. Por conseguinte ($PointerTwo->)-> faz refer\xeancia ao conte\xfado de $MyVar. Por conseguinte ($PointerTwo->)-> faz refer\xeancia ao conte\xfado de $MyVar.")),(0,t.kt)("p",null,'A seguinte linha coloca "Ol\xe1" em $MyVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'($PointerTwo->)->:="Hello"\n')),(0,t.kt)("p",null,'A seguinte linha recebe "Ol\xe1" de $MyVar e coloca-o em $NewVar:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{}),"$NewVar:=($PointerTwo->)->\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Importante:")," A desrefer\xeancia m\xfaltipla requer par\xeanteses."))}d.isMDXComponent=!0}}]);