"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44110"],{111167:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>p,assets:()=>t,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. The structure of \\"native\\" 4D objects is based on the classic principle of \\"property/value\\" pairs. A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/pt/19/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"N\xfamero (Real, Longint, Integer)","permalink":"/docs/pt/19/Concepts/number"},"next":{"title":"Imagem","permalink":"/docs/pt/19/Concepts/picture"}}'),a=n("785893"),r=n("250065");let i={id:"object",title:"Object"},d=void 0,t={},l=[{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:2},{value:"Objeto regular ou compartilhado",id:"objeto-regular-ou-compartilhado",level:3},{value:"No\xe7\xf5es b\xe1sicas de sintaxe",id:"no\xe7\xf5es-b\xe1sicas-de-sintaxe",level:2},{value:"Propriedades dos objectos",id:"propriedades-dos-objectos",level:3},{value:"Ponteiro",id:"ponteiro",level:3},{value:"Valor Null",id:"valor-null",level:3},{value:"Valor n\xe3o definido",id:"valor-n\xe3o-definido",level:3},{value:"Exemplos",id:"exemplos",level:2}];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:'}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:['Um nome de uma propriedade \xe9 sempre um texto, por exemplo "nome". Deve seguir ',(0,a.jsx)(o.a,{href:"/docs/pt/19/Concepts/identifiers#object-properties",children:"regras espec\xedficas"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"Um valor de propriedade pode ser do seguinte tipo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"number (Real, Integer, etc.)"}),"\n",(0,a.jsx)(o.li,{children:"text"}),"\n",(0,a.jsx)(o.li,{children:"null"}),"\n",(0,a.jsx)(o.li,{children:"boolean"}),"\n",(0,a.jsxs)(o.li,{children:["ponteiro (armazenado como tal, avaliado usando o comando ",(0,a.jsx)(o.code,{children:"JSON Stringify"})," ou quando copiando),"]}),"\n",(0,a.jsx)(o.li,{children:"data (tipo de data ou cadeia de formato de data ISO)"}),"\n",(0,a.jsx)(o.li,{children:"objeto (os objetos podem estar aninhados em v\xe1rios n\xedveis)"}),"\n",(0,a.jsx)(o.li,{children:"imagem(2)"}),"\n",(0,a.jsx)(o.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["(1) ",(0,a.jsx)(o.strong,{children:"Non-streamable objects"})," such as ORDA objects (",(0,a.jsx)(o.a,{href:"/docs/pt/19/ORDA/dsmapping#entity",children:"entities"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/19/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,a.jsx)(o.a,{href:"/docs/pt/19/API/WebServerClass",children:"web server"}),"... cannot be stored in ",(0,a.jsx)(o.strong,{children:"object fields"}),". Um erro ser\xe1 retornado se voc\xea tentar fazer isso; no entanto, eles s\xe3o totalmente compat\xedveis com as vari\xe1veis do objeto **** na mem\xf3ria."]}),"\n",(0,a.jsx)(o.p,{children:'(*)Quando se exp\xf5e como texto no depurador ou se exporta a JSON, as propriedades dos objetos imagem imprimem "[objeto Imagem]".'}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Warning:"})," Keep in mind that attribute names differentiate between upper and lower case."]}),"\n",(0,a.jsxs)(o.p,{children:["You manage Object type variables, fields or expressions using the ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Concepts/object#syntax-basics",children:"object notation"})," or the classic commands available in the ",(0,a.jsx)(o.strong,{children:"Objects (Language)"})," theme. Gerencia vari\xe1veis do tipo Objecto, campos ou express\xf5es usando a nota\xe7\xe3o de objecto ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Concepts/object#syntax-basics"})," ou os comandos cl\xe1ssicos dispon\xedveis no tema ",(0,a.jsx)(o.strong,{children:"Objects (Language)"})," ."]}),"\n",(0,a.jsx)(o.p,{children:"Cada valor de propriedade acessado atrav\xe9s da nota\xe7\xe3o de objeto \xe9 considerado uma express\xe3o. Quando a nota\xe7\xe3o de objeto for ativada em seu banco de dados (ver abaixo), pode usar esses valores sempre que express\xf5es 4D forem esperadas:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by ",(0,a.jsx)(o.code,{children:"PROCESS 4D TAGS"})," or the Web Server, export files, 4D Write Pro documents...),"]}),"\n",(0,a.jsx)(o.li,{children:"nas \xe1reas de express\xe3o do depurador e do explorador de Runtime,"}),"\n",(0,a.jsx)(o.li,{children:"na lista de propriedades do editor de formul\xe1rios para objectos de formul\xe1rios: Vari\xe1vel ou Campo de express\xe3o, bem como v\xe1rias caixas de selec\xe7\xe3o e express\xf5es de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte)."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["Objects must have been initialized, for example using the ",(0,a.jsx)(o.code,{children:"New object"})," command, otherwise trying to read or modify their properties will generate a syntax error."]}),"\n",(0,a.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" C_OBJECT($obVar) //cria\xe7\xe3o de uma vari\xe1vel 4D do tipo objeto\n $obVar:=New object //inicializa\xe7\xe3o do objeto e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n"})}),"\n",(0,a.jsx)(o.h3,{id:"objeto-regular-ou-compartilhado",children:"Objeto regular ou compartilhado"}),"\n",(0,a.jsx)(o.p,{children:"Pode criar dois tipos de objetos:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["regular (non-shared) objects, using the ",(0,a.jsx)(o.code,{children:"New object"})," command. Estes objetos podem ser editados sem qualquer controle de acesso espec\xedfico, mas n\xe3o podem ser compartilhados entre processos."]}),"\n",(0,a.jsxs)(o.li,{children:["objetos compartilhados, usando o comando ",(0,a.jsx)(o.code,{children:"New shared object"}),". Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by ",(0,a.jsx)(o.code,{children:"Use... End use"})," structures. For more information, refer to the ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"no\xe7\xf5es-b\xe1sicas-de-sintaxe",children:"No\xe7\xf5es b\xe1sicas de sintaxe"}),"\n",(0,a.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos pode ser utilizada para acessar aos valores das propriedades de objetos atrav\xe9s de uma string de tokens."}),"\n",(0,a.jsx)(o.h3,{id:"propriedades-dos-objectos",children:"Propriedades dos objectos"}),"\n",(0,a.jsx)(o.p,{children:"Identificadores de propriedades de objetos"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'usar uma string dentro de colchetes: > object["propertyName"]'}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'usar um simbolo "ponto": > object.propertyName'}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     /ou tamb\xe9m:\n     $property:="name"\n     $vName:=employee[$property]\n\n'})}),"\n",(0,a.jsx)(o.p,{children:"Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, a nota\xe7\xe3o de objeto aceita uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,a.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos est\xe1 dispon\xedvel em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["com os ",(0,a.jsx)(o.strong,{children:"Objetos"})," mesmos (armazenados em vari\xe1veis, campos, propriedades de objetos, arrays de objetos ou elementos de cole\xe7\xf5es). Exemplos:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //vari\xe1vel\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propriedade de um objeto\n     $pop:=$aObjCountries{2}.population //array objeto\n     $val:=$myCollection[3].subvalue //elemento cole\xe7\xe3o\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Comandos 4D"})," que devolvem objectos. Exemplo:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     $measures:=Get database measures.DB.tables\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"M\xe9todos de Projeto"})," que retornam objetos. Exemplo:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Collections"})," Example:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     myColl.length //tamanho da cole\xe7\xe3o\n"})}),"\n",(0,a.jsx)(o.h3,{id:"ponteiro",children:"Ponteiro"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota preliminar:"})," dado que os objetos s\xe3o passados sempre por refer\xeancia, geralmente n\xe3o \xe9 preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de mem\xf3ria e permitindo modificar o par\xe2metro e devolver as modifica\xe7\xf5es. Como resultado, n\xe3o \xe9 necess\xe1rio usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros."]}),"\n",(0,a.jsx)(o.p,{children:'Usar nota\xe7\xe3o de objeto com ponteiros \xe9 parecido com usar nota\xe7\xe3o de objeto diretamente com os objetos, exceto que o s\xedmbolo "ponto" deve ser omitido.'}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Acesso direto"}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Acesso pelo nome:"}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,a.jsx)(o.h3,{id:"valor-null",children:"Valor Null"}),"\n",(0,a.jsxs)(o.p,{children:["Quando se usar a nota\xe7\xe3o de objeto, o valore ",(0,a.jsx)(o.strong,{children:"null"})," se torna compat\xedvel com o comando ",(0,a.jsx)(o.strong,{children:"Null"})," . Este comando pode ser usado para atribuir ou comparar o valor nulo com as propriedades de objeto ou elementos de cole\xe7\xe3o, por exemplo"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,a.jsxs)(o.p,{children:["For more information, please refer to the ",(0,a.jsx)(o.code,{children:"Null"})," command description."]}),"\n",(0,a.jsx)(o.h3,{id:"valor-n\xe3o-definido",children:"Valor n\xe3o definido"}),"\n",(0,a.jsx)(o.p,{children:"A avalia\xe7\xe3o de uma propriedade de um objeto pode produzir \xe0s vezes um valor indefinido. Normalmente ao tentar ler ou atribuir express\xf5es indefinidas, 4D gera erros. Isso n\xe3o acontece nos casos abaixo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,a.jsx)(o.code,{children:"CLEAR VARIABLE"})," with them:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a \xe9 indefinido (sem erro) e a atribui\xe7\xe3o desse valor limpa a vari\xe1vel\n      //$val=0\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Lendo a propriedade de ",(0,a.jsx)(o.strong,{children:"comprimento"})," de uma cole\xe7\xe3o indefinida produz 0:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     C_COLLECTION($c) //vari\xe1vel criada, mas nenhuma cole\xe7\xe3o est\xe1 definida\n     $size:=$c.length //$size = 0\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'Um valor indefinido passado como par\xe2metro para um m\xe9todo de projecto \xe9 automaticamente convertido em 0 ou "" de acordo com o tipo de par\xe2metro declarado.'}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'     C_OBJECT($o)\n     mymethod($o.a) //passa um par\xe2metro indefinido\n\n      //No m\xe9todo mymethod\n     C_TEXT($1) //o tipo de par\xe2metro \xe9 texto\n      // $1 cont\xe9m ""\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Uma express\xe3o de condi\xe7\xe3o \xe9 automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"A atribui\xe7\xe3o de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:"}),"\n",(0,a.jsx)(o.li,{children:"Objecto, colec\xe7\xe3o, ponteiro: Null"}),"\n",(0,a.jsx)(o.li,{children:"Imagem: Imagem vazia"}),"\n",(0,a.jsx)(o.li,{children:"Booleano: Falso"}),"\n",(0,a.jsx)(o.li,{children:'String: ""'}),"\n",(0,a.jsx)(o.li,{children:"N\xfamero: 0"}),"\n",(0,a.jsx)(o.li,{children:'Data: !00-00-00-00! se a configura\xe7\xe3o "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contr\xe1rio ""'}),"\n",(0,a.jsx)(o.li,{children:"Hora: 0 (n\xfamero de ms)"}),"\n",(0,a.jsx)(o.li,{children:"Indefinido, Null: sem mudan\xe7a"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Quando express\xf5es de um certo tipo s\xe3o esperadas em seu c\xf3digo 4D, pode garantir que tenha o tipo correto mesmo quando s\xe3o avaliadas como indefinidas, cercando-as com o comando de transforma\xe7\xe3o 4D apropriado: ",(0,a.jsx)(o.code,{children:"String"}),", ",(0,a.jsx)(o.code,{children:"Num"}),", ",(0,a.jsx)(o.code,{children:"Date"}),", ",(0,a.jsx)(o.code,{children:"Time"}),", ",(0,a.jsx)(o.code,{children:"Bool"}),". Estes comandos devolvem um valor vazio de tipo especificado quando a express\xe3o \xe9 avaliada como indefinida. Por exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" $myString:=Caixa min\xfascula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que n\xe3o esteja definido\n  // para evitar erros no c\xf3digo\n"})}),"\n",(0,a.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(o.p,{children:"Usar nota\xe7\xe3o de objeto simplifica o c\xf3digo 4D no manejo dos mesmos. Entretanto note que a nota\xe7\xe3o baseada em comandos continua sendo totalmente compat\xedvel."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Escrita e leitura das propriedades de objetos (este exemplo compara a nota\xe7\xe3o de objetos e anota\xe7\xe3o de comandos):"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'  // Using the object notation\n C_OBJECT($myObj) //declares a 4D variable object\n $myObj:=New object //creates an object and assigns to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Using the command notation\n C_OBJECT($myObj2) //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n\n  // Of course, both notations can be mixed\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Criar uma propriedade e atribuir valores, incluindo objetos:"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //cria a propriedade da cidade e define o seu valor para "London"\n $Emp.city:="Paris" //modifica a propriedade da cidade\n $Emp.phone:=Novo objecto("office"; "123456789"; "home"; "0011223344")\n  //cria a propriedade do telefone e define o seu valor para um objecto\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Obter um valor em um subobjeto \xe9 bem simples usando a nota\xe7\xe3o de objeto:"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"\xc9 poss\xedvel acessar as propriedades como strings usando o operador []"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n'})})]})}function p(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return i}});var s=n(667294);let a={},r=s.createContext(a);function i(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);