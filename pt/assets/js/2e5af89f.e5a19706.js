/*! For license information please see 2e5af89f.e5a19706.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70105],{864425:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(474848),a=n(28453);const r={id:"object",title:"Objetos"},i=void 0,d={id:"Concepts/object",title:"Objetos",description:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/pt/18/Concepts/object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"object",title:"Objetos"},sidebar:"docs",previous:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/18/Concepts/number"},next:{title:"Imagem",permalink:"/docs/pt/18/Concepts/picture"}},t={},l=[{value:"Inicializa\xe7\xe3o",id:"Inicializa\xe7\xe3o",level:2},{value:"Objeto regular ou compartilhado",id:"Objeto-regular-ou-compartilhado",level:3},{value:"No\xe7\xf5es b\xe1sicas de sintaxe",id:"No\xe7\xf5es-b\xe1sicas-de-sintaxe",level:2},{value:"Propriedades dos objectos",id:"Propriedades-dos-objectos",level:3},{value:"Ponteiro",id:"Ponteiro",level:3},{value:"Valor Null",id:"Valor-Null",level:3},{value:"Valor n\xe3o definido",id:"Valor-n\xe3o-definido",level:3},{value:"Identificadores de propriedade de objetos",id:"Identificadores-de-propriedade-de-objetos",level:2},{value:"Exemplos",id:"Exemplos",level:2}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:'Um nome de uma propriedade \xe9 sempre um texto, por exemplo "nome".'}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Um valor de propriedade pode ser do seguinte tipo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"number (Real, Integer, etc.)"}),"\n",(0,s.jsx)(o.li,{children:"text"}),"\n",(0,s.jsx)(o.li,{children:"null"}),"\n",(0,s.jsx)(o.li,{children:"Par\xe2metros"}),"\n",(0,s.jsxs)(o.li,{children:["ponteiro (armazenado como tal, avaliado usando o comando ",(0,s.jsx)(o.code,{children:"JSON Stringify"})," ou quando copiando),"]}),"\n",(0,s.jsx)(o.li,{children:"data (tipo de data ou cadeia de formato de data ISO)"}),"\n",(0,s.jsx)(o.li,{children:"objeto (os objetos podem ser aninhados em v\xe1rios n\xedveis)"}),"\n",(0,s.jsx)(o.li,{children:"imagem(*)"}),"\n",(0,s.jsx)(o.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:'(*)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".'}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Warning:"})," Keep in mind that attribute names differentiate between upper and lower case."]}),"\n",(0,s.jsxs)(o.p,{children:["You manage Object type variables, fields or expressions using the commands available in the ",(0,s.jsx)(o.strong,{children:"Objects (Language)"})," theme or through the object notation (see ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/object#syntax-basics",children:"Syntax basics"}),"). Note that specific commands of the Queries theme such as ",(0,s.jsx)(o.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,s.jsx)(o.code,{children:"QUERY SELECTION BY ATTRIBUTE"}),", or ",(0,s.jsx)(o.code,{children:"ORDER BY ATTRIBUTE"})," can be used to carry out processing on object fields."]}),"\n",(0,s.jsx)(o.p,{children:"Cada valor de propriedade acessado atrav\xe9s da nota\xe7\xe3o de objeto \xe9 considerado uma express\xe3o. When the object notation is enabled in your database (see below), you can use such values wherever 4D expressions are expected:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by PROCESS 4D TAGS or the Web Server, export files, 4D Write Pro documents...),"}),"\n",(0,s.jsx)(o.li,{children:"nas \xe1reas de express\xe3o do depurador e do explorador de Runtime,"}),"\n",(0,s.jsx)(o.li,{children:"na lista de propriedades do editor de formul\xe1rios para objectos de formul\xe1rios: Vari\xe1vel ou Campo de express\xe3o, bem como v\xe1rias caixas de selec\xe7\xe3o e express\xf5es de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte)."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"Inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Objects must have been initialized, for example using the ",(0,s.jsx)(o.code,{children:"New object"})," command, otherwise trying to read or modify their properties will generate a syntax error."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_OBJECT($obVar) //creation of an object type 4D variable\n $obVar:=New object //initialization of the object and assignment to the 4D variable\n"})}),"\n",(0,s.jsx)(o.h3,{id:"Objeto-regular-ou-compartilhado",children:"Objeto regular ou compartilhado"}),"\n",(0,s.jsx)(o.p,{children:"Pode criar dois tipos de objetos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["regular (non-shared) objects, using the ",(0,s.jsx)(o.code,{children:"New object"})," command. Estes objetos podem ser editados sem qualquer controle de acesso espec\xedfico, mas n\xe3o podem ser compartilhados entre processos."]}),"\n",(0,s.jsxs)(o.li,{children:["objetos compartilhados, usando o comando ",(0,s.jsx)(o.code,{children:"New shared object"}),". Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by ",(0,s.jsx)(o.code,{children:"Use... End use"})," structures. For more information, refer to the ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"No\xe7\xf5es-b\xe1sicas-de-sintaxe",children:"No\xe7\xf5es b\xe1sicas de sintaxe"}),"\n",(0,s.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos pode ser utilizada para acessar aos valores das propriedades de objetos atrav\xe9s de uma string de tokens."}),"\n",(0,s.jsx)(o.h3,{id:"Propriedades-dos-objectos",children:"Propriedades dos objectos"}),"\n",(0,s.jsx)(o.p,{children:"Identificadores de propriedades de objetos"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'usar uma string dentro de colchetes: > object["propertyName"]'}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'usar um simbolo "ponto": > object.propertyName'}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     /ou tamb\xe9m:\n     $property:="name"\n     $vName:=employee[$property]\n\n'})}),"\n",(0,s.jsx)(o.p,{children:"Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, a nota\xe7\xe3o de objeto aceita uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,s.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos est\xe1 dispon\xedvel em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["com os ",(0,s.jsx)(o.strong,{children:"Objetos"})," mesmos (armazenados em vari\xe1veis, campos, propriedades de objetos, arrays de objetos ou elementos de cole\xe7\xf5es). Exemplos:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //vari\xe1vel\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propriedade de um objeto\n     $pop:=$aObjCountries{2}.population //array objeto\n     $val:=$myCollection[3].subvalue //elemento cole\xe7\xe3o\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Comandos 4D"})," que devolvem objectos. Exemplo:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     $measures:=Get database measures.DB.tables\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"M\xe9todos de Projeto"})," que retornam objetos. Exemplo:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Collections"})," Example:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     myColl.length //tamanho da cole\xe7\xe3o\n"})}),"\n",(0,s.jsx)(o.h3,{id:"Ponteiro",children:"Ponteiro"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota preliminar:"})," dado que os objetos s\xe3o passados sempre por refer\xeancia, geralmente n\xe3o \xe9 preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de mem\xf3ria e permitindo modificar o par\xe2metro e devolver as modifica\xe7\xf5es. Como resultado, n\xe3o \xe9 necess\xe1rio usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros."]}),"\n",(0,s.jsx)(o.p,{children:'Usar nota\xe7\xe3o de objeto com ponteiros \xe9 parecido com usar nota\xe7\xe3o de objeto diretamente com os objetos, exceto que o s\xedmbolo "ponto" deve ser omitido.'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Acesso direto"}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Acesso pelo nome:"}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,s.jsx)(o.h3,{id:"Valor-Null",children:"Valor Null"}),"\n",(0,s.jsxs)(o.p,{children:["Quando se usar a nota\xe7\xe3o de objeto, o valore ",(0,s.jsx)(o.strong,{children:"null"})," se torna compat\xedvel com o comando ",(0,s.jsx)(o.strong,{children:"Null"})," . Este comando pode ser usado para atribuir ou comparar o valor nulo com as propriedades de objeto ou elementos de cole\xe7\xe3o, por exemplo"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["For more information, please refer to the ",(0,s.jsx)(o.code,{children:"Null"})," command description."]}),"\n",(0,s.jsx)(o.h3,{id:"Valor-n\xe3o-definido",children:"Valor n\xe3o definido"}),"\n",(0,s.jsx)(o.p,{children:"A avalia\xe7\xe3o de uma propriedade de um objeto pode produzir \xe0s vezes um valor indefinido. Normalmente ao tentar ler ou atribuir express\xf5es indefinidas, 4D gera erros. Isso n\xe3o acontece nos casos abaixo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling with them:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Lendo a propriedade de ",(0,s.jsx)(o.strong,{children:"comprimento"})," de uma cole\xe7\xe3o indefinida produz 0:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     C_COLLECTION($c) //variable created but no collection is defined\n     $size:=$c.length //$size = 0\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'Um valor indefinido passado como par\xe2metro para um m\xe9todo de projecto \xe9 automaticamente convertido em 0 ou "" de acordo com o tipo de par\xe2metro declarado.'}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     C_OBJECT($o)\n     mymethod($o.a) //pass an undefined parameter\n\n      //In mymethod method\n     C_TEXT($1) //parameter type is text\n      // $1 contains ""\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Uma express\xe3o de condi\xe7\xe3o \xe9 automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"A atribui\xe7\xe3o de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:"}),"\n",(0,s.jsx)(o.li,{children:"Objecto, colec\xe7\xe3o, ponteiro: Null"}),"\n",(0,s.jsx)(o.li,{children:"Imagem: Imagem vazia"}),"\n",(0,s.jsx)(o.li,{children:"Booleano: Falso"}),"\n",(0,s.jsx)(o.li,{children:'String: ""'}),"\n",(0,s.jsx)(o.li,{children:"N\xfamero: 0"}),"\n",(0,s.jsx)(o.li,{children:'Data: !00-00-00-00! se a configura\xe7\xe3o "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contr\xe1rio ""'}),"\n",(0,s.jsx)(o.li,{children:"Hora: 0 (n\xfamero de ms)"}),"\n",(0,s.jsx)(o.li,{children:"Indefinido, Null: sem mudan\xe7a"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Quando express\xf5es de um certo tipo s\xe3o esperadas em seu c\xf3digo 4D, pode garantir que tenha o tipo correto mesmo quando s\xe3o avaliadas como indefinidas, cercando-as com o comando de transforma\xe7\xe3o 4D apropriado: ",(0,s.jsx)(o.code,{children:"String"}),", ",(0,s.jsx)(o.code,{children:"Num"}),", ",(0,s.jsx)(o.code,{children:"Date"}),", ",(0,s.jsx)(o.code,{children:"Time"}),", ",(0,s.jsx)(o.code,{children:"Bool"}),". Estes comandos devolvem um valor vazio de tipo especificado quando a express\xe3o \xe9 avaliada como indefinida. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $myString:=Caixa min\xfascula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que n\xe3o esteja definido\n  // para evitar erros no c\xf3digo\n"})}),"\n",(0,s.jsx)(o.h2,{id:"Identificadores-de-propriedade-de-objetos",children:"Identificadores de propriedade de objetos"}),"\n",(0,s.jsxs)(o.p,{children:["Token member names (i.e., object property names accessed using the object notation) are more restrictive than standard 4D object names. Devem estar em conformidade com a gram\xe1tica de identificadores JavaScript (consulte ",(0,s.jsx)(o.a,{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6",children:"ECMA Script standard"}),"):"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"the first character must be a letter, an underscore (_), or a dollar sign ($),"}),"\n",(0,s.jsx)(o.li,{children:"subsequent characters may be any letter, digit, an underscore or dollar sign (space characters are NOT allowed),"}),"\n",(0,s.jsx)(o.li,{children:"eles s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Nota:"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Using a table field as a collection index, for example a.b[[Table1]Id], is not allowed. \xc9 necess\xe1rio utilizar uma vari\xe1vel interm\xe9dia."}),"\n",(0,s.jsx)(o.li,{children:'Creating object attributes using a string in square brackets allows you to override the ECMA Script rules. Por exemplo, o atributo $o["My Att"] \xe9 v\xe1lido em 4D, apesar do espa\xe7o. In this case, however, it will not be possible to use dot notation with this attribute.'}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"Exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(o.p,{children:"Usar nota\xe7\xe3o de objeto simplifica o c\xf3digo 4D no manejo dos mesmos. Entretanto note que a nota\xe7\xe3o baseada em comandos continua sendo totalmente compat\xedvel."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Escrita e leitura das propriedades de objetos (este exemplo compara a nota\xe7\xe3o de objetos e anota\xe7\xe3o de comandos):"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  // Using the object notation\n C_OBJECT($myObj) //declares a 4D variable object\n $myObj:=New object //creates an object and assigns to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Using the command notation\n C_OBJECT($myObj2) //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n\n  // Of course, both notations can be mixed\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Criar uma propriedade e atribuir valores, incluindo objetos:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Obter um valor em um subobjeto \xe9 bem simples usando a nota\xe7\xe3o de objeto:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\xc9 poss\xedvel acessar as propriedades como strings usando o operador []"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n'})})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,o,n)=>{var s=n(296540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var s,r={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(c=o.ref),o)i.call(o,s)&&!t.hasOwnProperty(s)&&(r[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===r[s]&&(r[s]=o[s]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:d.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var s=n(296540);const a={},r=s.createContext(a);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);