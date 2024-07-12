/*! For license information please see 093f2af1.4a824101.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79893],{783851:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var r=n(474848),s=n(28453);const a={id:"looping",title:"Estruturas de loop"},i=void 0,l={id:"Concepts/looping",title:"Estruturas de loop",description:"While... End while",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/cf_looping.md",sourceDirName:"Concepts",slug:"/Concepts/looping",permalink:"/docs/pt/18/Concepts/looping",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcf_looping.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"looping",title:"Estruturas de loop"},sidebar:"docs",previous:{title:"Estruturas condicionais",permalink:"/docs/pt/18/Concepts/branching"},next:{title:"Gest\xe3o de erros",permalink:"/docs/pt/18/Concepts/error-handling"}},d={},t=[{value:"While... End while",id:"while-end-while",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Repeat... Until",id:"repeat-until",level:2},{value:"Exemplo",id:"exemplo-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Exemplos b\xe1sicos",id:"exemplos-b\xe1sicos",level:3},{value:"Diminuir a vari\xe1vel contador",id:"diminuir-a-vari\xe1vel-contador",level:3},{value:"Incrementar a vari\xe1vel do contador em mais de um",id:"incrementar-a-vari\xe1vel-do-contador-em-mais-de-um",level:3},{value:"Compara\xe7\xe3o de estruturas de loop",id:"compara\xe7\xe3o-de-estruturas-de-loop",level:3},{value:"Optimizing the execution of the For... End for loops",id:"optimizing-the-execution-of-the-for-end-for-loops",level:3},{value:"Nested For... End for looping structures",id:"nested-for-end-for-looping-structures",level:3},{value:"For each... End for each",id:"for-each-end-for-each",level:2},{value:"Loop atrav\xe9s da cole\xe7\xe3o",id:"loop-atrav\xe9s-da-cole\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo-2",level:4},{value:"Loop nas sele\xe7\xf5es de entidades",id:"loop-nas-sele\xe7\xf5es-de-entidades",level:3},{value:"Exemplo",id:"exemplo-3",level:4},{value:"Loops nas propriedades de objetos",id:"loops-nas-propriedades-de-objetos",level:3},{value:"Exemplo",id:"exemplo-4",level:4},{value:"Par\xe2metros begin / end",id:"par\xe2metros-begin--end",level:3},{value:"Exemplo",id:"exemplo-5",level:4},{value:"Condi\xe7\xf5es Until e While",id:"condi\xe7\xf5es-until-e-while",level:3},{value:"Exemplo",id:"exemplo-6",level:4}];function c(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"while-end-while",children:"While... End while"}),"\n",(0,r.jsxs)(o.p,{children:["The formal syntax of the ",(0,r.jsx)(o.code,{children:"While... End while"})," control flow structure is:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" While(Boolean_Expression)\n    statement(s)\n End while\n"})}),"\n",(0,r.jsxs)(o.p,{children:["A ",(0,r.jsx)(o.code,{children:"While...End while"})," loop executes the statements inside the loop as long as the Boolean expression is TRUE. Comprova a express\xe3o booleana ao in\xedcio do loop e n\xe3o entra no loop se a express\xe3o for FALSE."]}),"\n",(0,r.jsxs)(o.p,{children:["It is common to initialize the value tested in the Boolean expression immediately before entering the ",(0,r.jsx)(o.code,{children:"While... End while"})," loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and ",(0,r.jsx)(o.code,{children:"While... End while"})," executes the loop."]}),"\n",(0,r.jsxs)(o.p,{children:["O valor da express\xe3o booleana deve poder ser modificado por um elemento dentro do loop, do contr\xe1rio ser\xe1 executado indefinidamente. O pr\xf3ximo loop continua para sempre porque ",(0,r.jsx)(o.em,{children:"NeverStop"})," sempre ser\xe1 TRUE:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" NeverStop:=True\n While(NeverStop)\n End while\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Se voc\xea se encontrar em uma situa\xe7\xe3o desse tipo, na qual um m\xe9todo fica executando de forma descontrolada, pode usar as fun\xe7\xf5es de rastreamento para parar o loop e rastrear o problema. Para saber mais sobre o rastreio de um m\xe9todo veja a p\xe1gina ",(0,r.jsx)(o.a,{href:"/docs/pt/18/Concepts/error-handling",children:"Error handling"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' CONFIRM("Add a new record?") //o usu\xe1rio quer adicionar um registro? CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) //Loop enquanto o usu\xe1rio quiser\n    ADD RECORD([aTable]) //Adiciona um novo registro\n End while //O loop sempre termina com End while\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Nesse exemplo, o valor da vari\xe1vel sistema ",(0,r.jsx)(o.code,{children:"OK"})," \xe9 estabelecida pelo comando ",(0,r.jsx)(o.code,{children:"CONFIRM"})," antes de que inicia o loop. Se o usu\xe1rio clicar no bot\xe3o ",(0,r.jsx)(o.strong,{children:"OK"})," da caixa de di\xe1logo de confirma\xe7\xe3o, a vari\xe1vel do sistema ",(0,r.jsx)(o.code,{children:"OK"})," toma o valor 1 e se inicia o loop. Sen\xe3o, a vari\xe1vel de sistema ",(0,r.jsx)(o.code,{children:"OK"})," toma o valor 0 e se omite o loop. Quando iniciar o loop, o comando ",(0,r.jsx)(o.code,{children:"ADD RECORD"})," permite continuar a execu\xe7\xe3o do loop porque se define a vari\xe1vel sistema ",(0,r.jsx)(o.code,{children:"OK"})," em 1 quando o usu\xe1rio salvar o registro. Quando o usu\xe1rio cancelar (n\xe3o salvar) o \xfaltimo registro, a vari\xe1vel do sistema ",(0,r.jsx)(o.code,{children:"OK"})," \xe9 estabelecida como 0 e o loop para."]}),"\n",(0,r.jsx)(o.h2,{id:"repeat-until",children:"Repeat... Until"}),"\n",(0,r.jsxs)(o.p,{children:["The formal syntax of the ",(0,r.jsx)(o.code,{children:"Repeat... Until"})," control flow structure is:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" Repeat\n    statement(s)\n Until(Boolean_Expression)\n"})}),"\n",(0,r.jsxs)(o.p,{children:["A ",(0,r.jsx)(o.code,{children:"Repeat...Until"})," loop is similar to a ",(0,r.jsx)(o.a,{href:"flow-control#whileend-while",children:"While...End while"})," loop, except that it tests the Boolean expression after the loop rather than before. Thus, a ",(0,r.jsx)(o.code,{children:"Repeat...Until"})," loop always executes the loop once, whereas if the Boolean expression is initially False, a ",(0,r.jsx)(o.code,{children:"While...End while"})," loop does not execute the loop at all."]}),"\n",(0,r.jsxs)(o.p,{children:["The other difference with a ",(0,r.jsx)(o.code,{children:"Repeat...Until"})," loop is that the loop continues until the Boolean expression is TRUE."]}),"\n",(0,r.jsx)(o.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,r.jsxs)(o.p,{children:["Compare the following example with the example for the ",(0,r.jsx)(o.code,{children:"While... End while"})," loop. Lembre que a express\xe3o booleana n\xe3o precisa ser iniciada - n\xe3o h\xe1 um comando ",(0,r.jsx)(o.code,{children:"CONFIRM"})," para inicializar a vari\xe1vel ",(0,r.jsx)(o.code,{children:"OK"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n"})}),"\n",(0,r.jsx)(o.h2,{id:"forend-for",children:"For...End for"}),"\n",(0,r.jsxs)(o.p,{children:["The formal syntax of the ",(0,r.jsx)(o.code,{children:"For... End for"})," control flow structure is:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    statement(s)\n End for\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"For... End for"})," loop is a loop controlled by a counter variable:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["The counter variable ",(0,r.jsx)(o.em,{children:"Counter_Variable"})," is a numeric variable (Real or Long Integer) that the ",(0,r.jsx)(o.code,{children:"For... End for"})," loop initializes to the value specified by ",(0,r.jsx)(o.em,{children:"Start_Expression"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Cada vez que se executa o loop, a vari\xe1vel do contador se incrementa no valor especificado no valor opcional ",(0,r.jsx)(o.em,{children:"Increment_Expression"}),". Se n\xe3o especificar ",(0,r.jsx)(o.em,{children:"Increment_Expression"}),", a vari\xe1vel contadora \xe9 incrementada por um (1), que \xe9 o padr\xe3o."]}),"\n",(0,r.jsxs)(o.li,{children:["Quando a vari\xe1vel contador passar o valor ",(0,r.jsx)(o.em,{children:"End_Expression"})," da\xed o loop para."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Importante:"})," as express\xf5es num\xe9ricas ",(0,r.jsx)(o.em,{children:"Start_Expression"}),", ",(0,r.jsx)(o.em,{children:"End_Expression"})," e ",(0,r.jsx)(o.em,{children:"Increment_Expression"})," s\xe3o avaliadas apenas uma vez no come\xe7o do loop. Se essas express\xf5es forem vari\xe1veis, mudar uma deles dentro do loop n\xe3o vai afetar o loop."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Dicas:"})," Entretanto, para fins especiais, pode mudar o valor da vari\xe1vel ",(0,r.jsx)(o.em,{children:"Counter_Variable"})," dentro do loop; isso afetar\xe1 o loop."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Geralmente ",(0,r.jsx)(o.em,{children:"Start_Expression"})," pe menor que ",(0,r.jsx)(o.em,{children:"End_Expression"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Se ",(0,r.jsx)(o.em,{children:"Start_Expression"})," e ",(0,r.jsx)(o.em,{children:"End_Expression"})," forem iguais, o loop se executar\xe1 s\xf3 uma vez."]}),"\n",(0,r.jsxs)(o.li,{children:["Se ",(0,r.jsx)(o.em,{children:"Start_Expression"})," for maior que ",(0,r.jsx)(o.em,{children:"End_Expression"}),", o loop n\xe3o vai executar a n\xe3o ser que especifique uma ",(0,r.jsx)(o.em,{children:"Increment_Expression"})," negativa. Ver os exemplos."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"exemplos-b\xe1sicos",children:"Exemplos b\xe1sicos"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"O seguinte exemplo executa 100 itera\xe7\xf5es:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Faz algo\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"2",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo percorre todos os elementos no array anArray:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //Fazer algo com o elemento\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"3",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlChar;1;Length(vtSomeText))\n  //Faz algo com o caractere se for uma TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"4",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Faz algo com o registro\n    SEND RECORD([aTable])\n  //...\n  //Vai para o pr\xf3ximo registro\n    NEXT RECORD([aTable])\n End for\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Most of the ",(0,r.jsx)(o.code,{children:"For... End for"})," loops you will write in your projects will look like the ones listed in these examples."]}),"\n",(0,r.jsx)(o.h3,{id:"diminuir-a-vari\xe1vel-contador",children:"Diminuir a vari\xe1vel contador"}),"\n",(0,r.jsxs)(o.p,{children:["Em alguns casos, pode querer ter um loop cuja vari\xe1vel de contador seja decrescente ao inv\xe9s de crescente. Para fazer isso, deve especificar ",(0,r.jsx)(o.em,{children:"Start_Expression"})," maior que ",(0,r.jsx)(o.em,{children:"End_Expression"})," e ",(0,r.jsx)(o.em,{children:"Increment_Expression"})," deve ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:"]}),"\n",(0,r.jsxs)(o.ol,{start:"5",children:["\n",(0,r.jsx)(o.li,{children:"O seguinte exemplo executa 100 itera\xe7\xf5es:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For(vCounter;100;1;-1)\n  //Faz algo\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"6",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo percorre todos os elementos no array anArray:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlElem;Size of array(anArray);1;-1)\n  //Faz algo com o elemento\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"7",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlChar;Length(vtSomeText);1;-1)\n  //Faz algo com o caractere se for uma TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"8",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Faz algo com o registro\n    SEND RECORD([aTable])\n  //...\n  //Ir ao registro anterior\n    PREVIOUS RECORD([aTable])\n End for\n"})}),"\n",(0,r.jsx)(o.h3,{id:"incrementar-a-vari\xe1vel-do-contador-em-mais-de-um",children:"Incrementar a vari\xe1vel do contador em mais de um"}),"\n",(0,r.jsxs)(o.p,{children:["Se precisar, pode usar uma ",(0,r.jsx)(o.em,{children:"Increment_Expression"})," (positiva ou negativa) cujo valor absoluto seja maior que um."]}),"\n",(0,r.jsxs)(o.ol,{start:"9",children:["\n",(0,r.jsx)(o.li,{children:"O loop a seguir aborda s\xf3 os elementos pares do array anArray:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlElem;2;Size of array(anArray);2)\n  //Faz algo com o elemento #2,#4...#2n\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsx)(o.h3,{id:"compara\xe7\xe3o-de-estruturas-de-loop",children:"Compara\xe7\xe3o de estruturas de loop"}),"\n",(0,r.jsxs)(o.p,{children:["Let's go back to the first ",(0,r.jsx)(o.code,{children:"For... End for"})," example. O seguinte exemplo executa 100 itera\xe7\xf5es:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Faz algo\n End for\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Here is the equivalent ",(0,r.jsx)(o.code,{children:"While... End while"})," loop:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" $i:=1 //Initializa o contador\n While($i<=100) //Loop 100 vezes\n  //Faz algo\n    $i:=$i+1 //Precisa incrementar o contador\n End while\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Here is the equivalent ",(0,r.jsx)(o.code,{children:"Repeat... Until"})," loop:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" $i:=1 //Initializa o contador\n Repeat\n  //Faz algo\n    $i:=$i+1 //Precisa incrementar o contador\n Until($i=100) //Loop 100 vezes\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Tip:"})," The ",(0,r.jsx)(o.code,{children:"For... End for"})," loop is usually faster than the ",(0,r.jsx)(o.code,{children:"While... End while"})," and ",(0,r.jsx)(o.code,{children:"Repeat... Until"})," loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the ",(0,r.jsx)(o.code,{children:"For... End for"})," loop whenever possible."]}),"\n",(0,r.jsx)(o.h3,{id:"optimizing-the-execution-of-the-for-end-for-loops",children:"Optimizing the execution of the For... End for loops"}),"\n",(0,r.jsx)(o.p,{children:"Pode utilizar vari\xe1veis reais e inteiras, assim como contadores interprocesso, de processo e de vari\xe1veis locais. Para loops repetitivos longos, especialmente em modo compilado, use vari\xe1veis locais de tipo Inteiro longo."}),"\n",(0,r.jsxs)(o.ol,{start:"10",children:["\n",(0,r.jsx)(o.li,{children:"Aqui um exemplo simples:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" C_LONGINT($vlCounter) //usa vari\xe1veis locais Long Integer\n For($vlCounter;1;10000)\n  //Faz algo\n End for\n"})}),"\n",(0,r.jsx)(o.h3,{id:"nested-for-end-for-looping-structures",children:"Nested For... End for looping structures"}),"\n",(0,r.jsxs)(o.p,{children:["Pode aninhar tantas estruturas de controle (dentro do razo\xe1vel) como precisar. This includes nesting ",(0,r.jsx)(o.code,{children:"For... End for"})," loops. Para evitar erros, tenha certeza de usar vari\xe1veis contador diferentes para cada estrutura de looping."]}),"\n",(0,r.jsx)(o.p,{children:"Aqui s\xe3o dois exemplos:"}),"\n",(0,r.jsxs)(o.ol,{start:"11",children:["\n",(0,r.jsx)(o.li,{children:"O exemplo abaixo percorre todos os elementos em um array de duas dimens\xf5es:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //...\n  //Faz algo com a linha\n  //...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Faz algo com o elemento\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"12",children:["\n",(0,r.jsx)(o.li,{children:"O seguinte exemplo constr\xf3i um array de ponteiros a todos os campos de data presentes no banco:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n"})}),"\n",(0,r.jsx)(o.h2,{id:"for-each-end-for-each",children:"For each... End for each"}),"\n",(0,r.jsxs)(o.p,{children:["The formal syntax of the ",(0,r.jsx)(o.code,{children:"For each...End for each"})," control flow structure is:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_bool\xe9enne)}\n    instruction(s)\n End for each\n"})}),"\n",(0,r.jsxs)(o.p,{children:["A estrutura ",(0,r.jsx)(o.code,{children:"For each... End for each"})," faz uma itera\xe7\xe3o sobre um ",(0,r.jsx)(o.em,{children:"Elemento_atual"})," especificado sobre todos os valores de ",(0,r.jsx)(o.em,{children:"Express\xe3o"}),". O tipo ",(0,r.jsx)(o.em,{children:"elemento_atual"})," depende do tipo ",(0,r.jsx)(o.em,{children:"Expression"}),". O loop ",(0,r.jsx)(o.code,{children:"For each... End for each"})," pode iterar atrav\xe9s de tr\xeas tipos de ",(0,r.jsx)(o.em,{children:"Express\xe3o"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"collections: loop por cada elemento da cole\xe7\xe3o,"}),"\n",(0,r.jsx)(o.li,{children:"sele\xe7\xf5es de entidades: loop em cada entidade,"}),"\n",(0,r.jsx)(o.li,{children:"objetos: loop em cada propriedade do objeto."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["The following table compares the three types of ",(0,r.jsx)(o.code,{children:"For each... End for each"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Loop atrav\xe9s da cole\xe7\xe3o"}),(0,r.jsx)(o.th,{children:"Loop nas sele\xe7\xf5es de entidades"}),(0,r.jsx)(o.th,{children:"Loop nos objetos"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Tipo Current_Item"}),(0,r.jsx)(o.td,{children:"Vari\xe1vel do mesmo tipo que os elementos da cole\xe7\xe3o"}),(0,r.jsx)(o.td,{children:"Entity"}),(0,r.jsx)(o.td,{children:"Vari\xe1vel texto"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Tipos de express\xf5es"}),(0,r.jsx)(o.td,{children:"Cole\xe7\xe3o (com elementos do mesmo tipo)"}),(0,r.jsx)(o.td,{children:"Sele\xe7\xe3o de entidades"}),(0,r.jsx)(o.td,{children:"Object"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero de loops (por padr\xe3o)"}),(0,r.jsx)(o.td,{children:"N\xfamero de elementos da cole\xe7\xe3o"}),(0,r.jsx)(o.td,{children:"N\xfamero de entidades na sele\xe7\xe3o"}),(0,r.jsx)(o.td,{children:"N\xfamero de propriedades de objeto"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Compatibilidade de par\xe2metros begin / end"}),(0,r.jsx)(o.td,{children:"Sim"}),(0,r.jsx)(o.td,{children:"Sim"}),(0,r.jsx)(o.td,{children:"N\xe3o"})]})]})]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"O n\xfamero de loops \xe9 avaliado no in\xedcio e n\xe3o muda durante o processo. Adicionar ou remover itens durante o loop n\xe3o \xe9 recomendado porque resulta em itera\xe7\xf5es faltantes ou redundantes."}),"\n",(0,r.jsxs)(o.li,{children:["Por padr\xe3o, as  ",(0,r.jsx)(o.em,{children:"instru\xe7\xf5es"})," anexas s\xe3o executadas para cada valor de ",(0,r.jsx)(o.em,{children:"Express\xe3o"}),". Entretanto, \xe9 poss\xedvel sair do loop comprovando uma condi\xe7\xe3o ao in\xedcio do loop (",(0,r.jsx)(o.code,{children:"While"}),") ou ao final do loop (",(0,r.jsx)(o.code,{children:"Until"}),")."]}),"\n",(0,r.jsxs)(o.li,{children:["Os par\xe2metros opcionais ",(0,r.jsx)(o.em,{children:"begin"})," e ",(0,r.jsx)(o.em,{children:"end"})," podem ser usados com cole\xe7~eos e sele\xe7\xf5es de entidades para definir os limites do loop."]}),"\n",(0,r.jsxs)(o.li,{children:["The ",(0,r.jsx)(o.code,{children:"For each... End for each"})," loop can be used on a ",(0,r.jsx)(o.strong,{children:"shared collection"})," or a ",(0,r.jsx)(o.strong,{children:"shared object"}),". If your code needs to modify one or more element(s) of the collection or object properties, you need to use the ",(0,r.jsx)(o.code,{children:"Use... End use"})," keywords. Depending on your needs, you can call the ",(0,r.jsx)(o.code,{children:"Use... End use"})," keywords:\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"antes de entrar no loop, se os elementos devem ser modificados juntos por raz\xf5es de integridade, ou"}),"\n",(0,r.jsx)(o.li,{children:"dentro do loop quando s\xf3 tiver que modificar alguns elementos/propriedades e n\xe3o \xe9 necess\xe1rio gerenciar a integridade."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"loop-atrav\xe9s-da-cole\xe7\xe3o",children:"Loop atrav\xe9s da cole\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"For each... End for each"})," is used with an ",(0,r.jsx)(o.em,{children:"Expression"})," of the ",(0,r.jsx)(o.em,{children:"Collection"})," type, the ",(0,r.jsx)(o.em,{children:"Current_Item"})," parameter is a variable of the same type as the collection elements. Como padr\xe3o, o n\xfamero de loops \xe9 baseado no n\xfamero de elementos da cole\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["A cole\xe7\xe3o deve conter s\xf3 elementos do mesmo tipo, do contr\xe1rio se devolver\xe1 um erro assim que a vari\xe1vel ",(0,r.jsx)(o.em,{children:"Current_Item"})," tenha sido atribu\xedda o primeiro tipo de valor estranho."]}),"\n",(0,r.jsxs)(o.p,{children:["Em cada itera\xe7\xe3o do loop, a vari\xe1vel ",(0,r.jsx)(o.em,{children:"Current_Item"})," \xe9 preenchida automaticamente com o elemento correspondente da cole\xe7\xe3o. Os pontos abaixo devem ser considerados:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Se a vari\xe1vel ",(0,r.jsx)(o.em,{children:"Current_Item"})," \xe9 de tipo objeto ou de tipo cole\xe7\xe3o (ou seja, se ",(0,r.jsx)(o.em,{children:"Expresi\xf3n"})," for uma cole\xe7\xe3o de objetos ou de cole\xe7\xf5es), ao modificar esta vari\xe1vel se modificar\xe1 automaticamente o elemento coincidente da cole\xe7\xe3o (porque os objetos e as cole\xe7\xf5es compartem as mesmas refer\xeancias). Se a vari\xe1vel for de tipo escalar, s\xf3 se modificar\xe1 a vari\xe1vel."]}),"\n",(0,r.jsx)(o.li,{children:"A vari\xe1vel_Current_Item_ deve ser do mesmo tipo que os elementos da cole\xe7\xe3o. Se algum elemento da cole\xe7\xe3o n\xe3o for do mesmo tipo que a vari\xe1vel, um erro \xe9 gerado e o loop para."}),"\n",(0,r.jsxs)(o.li,{children:["Se a cole\xe7\xe3o conter elementos com um valor ",(0,r.jsx)(o.strong,{children:"Null"}),", se gerar\xe1 um erro se o tipo de vari\xe1vel ",(0,r.jsx)(o.em,{children:"Current_Item"})," n\xe3o \xe9 compat\xedvel com valores ",(0,r.jsx)(o.strong,{children:"Null"})," (como as vari\xe1veis de tipo inteiro longo)."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser computar algumas estat\xedsticas para uma cole\xe7\xe3o de n\xfameros:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n"})}),"\n",(0,r.jsx)(o.h3,{id:"loop-nas-sele\xe7\xf5es-de-entidades",children:"Loop nas sele\xe7\xf5es de entidades"}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"For each... End for each"})," is used with an ",(0,r.jsx)(o.em,{children:"Expression"})," of the ",(0,r.jsx)(o.em,{children:"Entity selection"})," type, the ",(0,r.jsx)(o.em,{children:"Current_Item"})," parameter is the entity that is currently processed."]}),"\n",(0,r.jsxs)(o.p,{children:["O n\xfamero de loops \xe9 baseado no n\xfamero de entidades da sele\xe7\xe3o de entidades. Em cada itera\xe7\xe3o do loop, o par\xe2metro ",(0,r.jsx)(o.em,{children:"Current_Item"})," \xe9 preenchido automaticamente com a entidade da sele\xe7\xe3o de entidade que estiver sendo processada atualmente."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," se a sele\xe7\xe3o de entidades conter uma entidade que tenha sido eliminada, enquanto isso, por outro processo, ela \xe9 pulada durante o loop."]}),"\n",(0,r.jsxs)(o.p,{children:["Lembre que qualquer modifica\xe7\xe3o aplicada na entidade atual deve ser guardada explicitamente utilizando ",(0,r.jsx)(o.code,{children:"entity.save( )"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser aumentar o sal\xe1rio de todos os empregados brit\xe2nicos em uma sele\xe7\xe3o de entidades:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" C_OBJECT(emp)\n For each(emp;ds. Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n"})}),"\n",(0,r.jsx)(o.h3,{id:"loops-nas-propriedades-de-objetos",children:"Loops nas propriedades de objetos"}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"For each... End for each"})," is used with an ",(0,r.jsx)(o.em,{children:"Expression"})," of the Object type, the ",(0,r.jsx)(o.em,{children:"Current_Item"})," parameter is a text variable automatically filled with the name of the currently processed property."]}),"\n",(0,r.jsx)(o.p,{children:"As propriedades do objeto s\xe3o processadas de acordo com sua ordem de cria\xe7\xe3o. Durante o loop, propriedades podem ser adicionadas ou eliminadas no objeto, sem modificar o n\xfamero de loops que permanecer\xe3o no n\xfamero original de propriedades do objeto."}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser trocar os nomes para mai\xfasculas no objeto a seguir:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea pode escrever:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n'})}),"\n",(0,r.jsx)(o.h3,{id:"par\xe2metros-begin--end",children:"Par\xe2metros begin / end"}),"\n",(0,r.jsx)(o.p,{children:"Pode definir limites para a itera\xe7\xe3o usando os par\xe2metros opcionais inicio e fim."}),"\n",(0,r.jsxs)(o.p,{children:["**Nota:**os par\xe2metros ",(0,r.jsx)(o.em,{children:"inicio"})," e ",(0,r.jsx)(o.em,{children:"fim"})," s\xf3 podem ser utilizados em itera\xe7\xf5es atrav\xe9s de cole\xe7\xf5es e sele\xe7\xf5es de entidades (s\xe3o ignoradas nas propriedades de objetos)."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"begin"}),", passe l posil\xe7ao do elemento em ",(0,r.jsx)(o.em,{children:"Expression"})," na que se iniciar\xe1 a itera\xe7\xe3o (se inclui ",(0,r.jsx)(o.em,{children:"begin"}),")."]}),"\n",(0,r.jsxs)(o.li,{children:["No ",(0,r.jsx)(o.em,{children:"par\xe2metro"})," final, voc\xea tamb\xe9m pode passar a posi\xe7\xe3o do elemento na ",(0,r.jsx)(o.em,{children:"Express\xe3o"})," a qual vai parar a itera\xe7\xe3o (",(0,r.jsx)(o.em,{children:"end"})," \xe9 exclu\xeddo)."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Se omitir ",(0,r.jsx)(o.em,{children:"end"})," ou se ",(0,r.jsx)(o.em,{children:"fim"})," for maior que o n\xfamero de elementos em ",(0,r.jsx)(o.em,{children:"Expression"}),", os elementos s\xe3o iteragids de ",(0,r.jsx)(o.em,{children:"begin"})," at\xe9 o \xfaltimo elemento (inclu\xeddo). Se os par\xe2metros ",(0,r.jsx)(o.em,{children:"inicio"})," e",(0,r.jsx)(o.em,{children:"fim"})," forem valores positivos, representam posi\xe7\xf5es reais de elementos em ",(0,r.jsx)(o.em,{children:"Expression"}),". Se ",(0,r.jsx)(o.em,{children:"begin"})," for um valor negativo, \xe9 recalculado como ",(0,r.jsx)(o.code,{children:"begin:=begin+Expression size"})," (\xe9 considerado como o deslocamento offset desde o final de ",(0,r.jsx)(o.em,{children:"Expression"}),"). Se o valor calculado for negativo, ",(0,r.jsx)(o.em,{children:"inicio"})," toma o valor 0. ",(0,r.jsx)(o.strong,{children:"Nota:"})," mesmo se inicio for negativo, a itera\xe7\xe3o continua sendo realizada na ordem normal. Se ",(0,r.jsx)(o.em,{children:"fim"})," for um  valor negativo, se recalcula como ",(0,r.jsx)(o.code,{children:"fim:=fim+tamanho da express\xe3o"})]}),"\n",(0,r.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"uma cole\xe7\xe3o cont\xe9m 10 elementos (numerada de 0 a 9)"}),"\n",(0,r.jsx)(o.li,{children:"begin=-4 -> begin=-4+10=6 -> itera\xe7\xe3o come\xe7a no sexto elemento (#5)"}),"\n",(0,r.jsx)(o.li,{children:"end=-2 -> end=-2+10=8 -> itera\xe7\xe3o para antes do oitavo elemento (#7), ou seja, no s\xe9timo elemento."}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n'})}),"\n",(0,r.jsx)(o.h3,{id:"condi\xe7\xf5es-until-e-while",children:"Condi\xe7\xf5es Until e While"}),"\n",(0,r.jsxs)(o.p,{children:["You can control the ",(0,r.jsx)(o.code,{children:"For each... End for each"})," execution by adding an ",(0,r.jsx)(o.code,{children:"Until"})," or a ",(0,r.jsx)(o.code,{children:"While"})," condition to the loop. Quando uma instru\xe7\xe3o ",(0,r.jsx)(o.code,{children:"Until(condi\xe7\xe3o)"})," estiver associada ao loop, a itera\xe7\xe3o vai parar logo que a condi\xe7\xe3o seja avaliada como ",(0,r.jsx)(o.code,{children:"True"}),", mas no caso de uma instru\xe7\xe3o ",(0,r.jsx)(o.code,{children:"While(condici\xf3n)"}),", a itera\xe7\xe3o para quando a condi\xe7\xe3o for avaliada, pela primeira vez, como ",(0,r.jsx)(o.code,{children:"False"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Pode passar qualquer uma das duas palavras chave em fun\xe7\xe3o das suas necessidades:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["A condi\xe7\xe3o ",(0,r.jsx)(o.code,{children:"Until"})," \xe9 testada no final de cada itera\xe7\xe3o, portanto, se a ",(0,r.jsx)(o.em,{children:"Express\xe3o"})," n\xe3o for vazia ou nula, o loop ser\xe1 executado pelo menos uma vez."]}),"\n",(0,r.jsxs)(o.li,{children:["A condi\xe7\xe3o ",(0,r.jsx)(o.code,{children:"While"})," \xe9 testada no in\xedcio de cada itera\xe7\xe3o, ent\xe3o de acordo com o resultado da condi\xe7\xe3o, o loop n\xe3o poder\xe1 ser executado de forma alguma."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-6",children:"Exemplo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n\n $total:=0\n For each($num;$colNum)While($total<30) //testado no come\xe7o\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n\n $total:=1000\n For each($num;$colNum)Until($total>30) //testado no final\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,o,n)=>{var r=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function t(e,o,n){var r,a={},t=null,c=null;for(r in void 0!==n&&(t=""+n),void 0!==o.key&&(t=""+o.key),void 0!==o.ref&&(c=o.ref),o)i.call(o,r)&&!d.hasOwnProperty(r)&&(a[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return{$$typeof:s,type:e,key:t,ref:c,props:a,_owner:l.current}}o.Fragment=a,o.jsx=t,o.jsxs=t},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var r=n(296540);const s={},a=r.createContext(s);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);