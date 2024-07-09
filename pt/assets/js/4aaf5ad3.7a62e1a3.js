/*! For license information please see 4aaf5ad3.7a62e1a3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86386],{814863:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=n(474848),r=n(28453);const a={id:"object",title:"Object"},t=void 0,d={id:"Concepts/object",title:"Object",description:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princ\xedpio cl\xe1ssico dos pares "propriedade/valor". A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/pt/20-R4/Concepts/object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/20-R4/Concepts/number"},next:{title:"Imagem",permalink:"/docs/pt/20-R4/Concepts/picture"}},i={},c=[{value:"Instancia\xe7\xe3o",id:"Instancia\xe7\xe3o",level:2},{value:"Comando <code>New object</code>",id:"Comando-New-object",level:3},{value:"<code>{}</code> operador",id:"-operador",level:3},{value:"Objeto regular ou compartilhado",id:"Objeto-regular-ou-compartilhado",level:3},{value:"Propriedades",id:"Propriedades",level:2},{value:"Valor Null",id:"Valor-Null",level:3},{value:"Valor n\xe3o definido",id:"Valor-n\xe3o-definido",level:3},{value:"Ponteiro",id:"Ponteiro",level:3},{value:"Resources",id:"Resources",level:2},{value:"Exemplos",id:"Exemplos",level:2}];function l(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princ\xedpio cl\xe1ssico dos pares "propriedade/valor". A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:['Um nome de uma propriedade \xe9 sempre um texto, por exemplo "nome". It must follow ',(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/Concepts/identifiers#object-properties",children:"specific rules"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Um valor de propriedade pode ser do seguinte tipo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"number (Real, Integer, etc.)"}),"\n",(0,s.jsx)(o.li,{children:"text"}),"\n",(0,s.jsx)(o.li,{children:"null"}),"\n",(0,s.jsx)(o.li,{children:"boolean"}),"\n",(0,s.jsxs)(o.li,{children:["pointer (stored as such, evaluated using the ",(0,s.jsx)(o.code,{children:"JSON Stringify"})," command or when copying),"]}),"\n",(0,s.jsx)(o.li,{children:"data (tipo de data ou cadeia de formato de data ISO)"}),"\n",(0,s.jsx)(o.li,{children:"objeto (os objetos podem estar aninhados em v\xe1rios n\xedveis)"}),"\n",(0,s.jsx)(o.li,{children:"imagem(2)"}),"\n",(0,s.jsx)(o.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["(1) ",(0,s.jsx)(o.strong,{children:"Non-streamable objects"})," such as ORDA objects (",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/ORDA/dsmapping#entity",children:"entities"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/API/FileHandleClass",children:"file handles"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/API/WebServerClass",children:"web server"}),"... cannot be stored in ",(0,s.jsx)(o.strong,{children:"object fields"}),". An error is returned if you try to do it; however, they are fully supported in ",(0,s.jsx)(o.strong,{children:"object variables"})," in memory."]}),"\n",(0,s.jsx)(o.p,{children:'(*)Quando se exp\xf5e como texto no depurador ou se exporta a JSON, as propriedades dos objetos imagem imprimem "[objeto Imagem]".'}),"\n",(0,s.jsx)(o.admonition,{type:"caution",children:(0,s.jsx)(o.p,{children:"Tenha em aten\xe7\xe3o que os nomes das propriedades diferenciam entre mai\xfasculas e min\xfasculas."})}),"\n",(0,s.jsxs)(o.p,{children:["You manage Object type variables, fields or expressions using the standard ",(0,s.jsx)(o.a,{href:"#properties",children:"object notation"})," or the commands available in the ",(0,s.jsx)(o.strong,{children:"Objects (Language)"})," theme. Note that specific commands of the ",(0,s.jsx)(o.strong,{children:"Queries"})," theme such as ",(0,s.jsx)(o.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,s.jsx)(o.code,{children:"QUERY SELECTION BY ATTRIBUTE"}),", or ",(0,s.jsx)(o.code,{children:"ORDER BY ATTRIBUTE"})," can be used to carry out processing on object fields."]}),"\n",(0,s.jsx)(o.p,{children:"Cada valor de propriedade acessado atrav\xe9s da nota\xe7\xe3o de objeto \xe9 considerado uma express\xe3o. Quando a nota\xe7\xe3o de objeto for ativada em seu banco de dados (ver abaixo), pode usar esses valores sempre que express\xf5es 4D forem esperadas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by ",(0,s.jsx)(o.code,{children:"PROCESS 4D TAGS"})," or the Web Server, export files, 4D Write Pro documents...),"]}),"\n",(0,s.jsx)(o.li,{children:"nas \xe1reas de express\xe3o do depurador e do explorador de Runtime,"}),"\n",(0,s.jsx)(o.li,{children:"na lista de propriedades do editor de formul\xe1rios para objectos de formul\xe1rios: Vari\xe1vel ou Campo de express\xe3o, bem como v\xe1rias caixas de selec\xe7\xe3o e express\xf5es de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte)."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"Instancia\xe7\xe3o",children:"Instancia\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Os objetos devem ter sido inicializados, por exemplo utilizando o comando ",(0,s.jsx)(o.code,{children:"New object"}),", do contr\xe1rio ao tentar ler ou modificar suas propriedades se gerar\xe1 um error de sintaxe."]}),"\n",(0,s.jsx)(o.p,{children:"Com a nota\xe7\xe3o de objetos, pode acessar \xe0s propriedades dos objetos de duas maneiras:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["usando o comando [",(0,s.jsx)(o.code,{children:"New object"}),"] (",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),"),"]}),"\n",(0,s.jsx)(o.li,{children:"usando o operador '{}'."}),"\n"]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Several 4D commands and functions return objects, for example ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html",children:(0,s.jsx)(o.code,{children:"Get database measures"})})," or ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/API/FileClass#file",children:(0,s.jsx)(o.code,{children:"File"})}),". Neste caso, n\xe3o \xe9 necess\xe1rio instanciar explicitamente o objecto, a linguagem 4D faz isso por voc\xea."]})}),"\n",(0,s.jsxs)(o.h3,{id:"Comando-New-object",children:["Comando ",(0,s.jsx)(o.code,{children:"New object"})]}),"\n",(0,s.jsxs)(o.p,{children:["O comando [",(0,s.jsx)(o.code,{children:"New object"}),"] (",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),") cria um objeto vazio ou pr\xe9-preenchido e retorna sua refer\xeancia."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' var $obVar : Object //declaration of an object type 4D variable\n $obVar:=New object //instantiation of an object and assignment to the 4D variable\n \n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object\n'})}),"\n",(0,s.jsxs)(o.h3,{id:"-operador",children:[(0,s.jsx)(o.code,{children:"{}"})," operador"]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"{}"})," operator allows you to create an ",(0,s.jsx)(o.strong,{children:"object literal"}),". Um literal de objecto \xe9 uma lista separada por semicolunas de zero ou mais pares de nomes de propriedades e valores associados de um objecto, entre chaves (",(0,s.jsx)(o.code,{children:"{}"}),"). A sintaxe literal do objecto cria objectos vazios ou preenchidos."]}),"\n",(0,s.jsxs)(o.p,{children:["Since any property value is considered an expression, you can create sub-objects using ",(0,s.jsx)(o.code,{children:"{}"})," in property values.  You can also create and reference ",(0,s.jsx)(o.strong,{children:"collection literals"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' var $o ; $o2 ; $o3 : Object //declaration of object variables\n $o := {} // instantiation of an empty object \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object\n \t\t// with properties {"a":"foo","b":42,"c":{},"d":false})\n\n\t// same properties using variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode misturar as sintaxes ",(0,s.jsx)(o.code,{children:"New object"})," e literal:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'$o:={\\\n\tob1: {age: 42}; \\\n\tob2: New object("message"; "Hello"); \\\n\tform1: Formula(return This.ob1.age+10); \\\n\tform2 : Formula(ALERT($1)); \\\n\tcol: [1; 2; 3; 4; 5; 6]\\\n\t}\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // displays Hello\n$col:=$o.col[5] //6\n'})}),"\n",(0,s.jsx)(o.h3,{id:"Objeto-regular-ou-compartilhado",children:"Objeto regular ou compartilhado"}),"\n",(0,s.jsx)(o.p,{children:"Pode criar dois tipos de objetos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["regular (non-shared) objects, using the ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html",children:(0,s.jsx)(o.code,{children:"New object"})})," command or object literal syntax (",(0,s.jsx)(o.code,{children:"{}"}),"). Estes objetos podem ser editados sem qualquer controle de acesso espec\xedfico, mas n\xe3o podem ser compartilhados entre processos."]}),"\n",(0,s.jsxs)(o.li,{children:["shared objects, using the ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html",children:(0,s.jsx)(o.code,{children:"New shared object"})})," command. Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by ",(0,s.jsx)(o.code,{children:"Use...End use"})," structures.\nPara obter mais informa\xe7\xf5es, consulte a se\xe7\xe3o [Shared objects and collections] (shared.md)."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"Propriedades",children:"Propriedades"}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea acessa os valores de propriedade do objeto por meio de uma cadeia de tokens. As propriedades do objeto podem ser acessadas de duas maneiras:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:['usando um s\xedmbolo de "ponto":\n',(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"object.propertyName"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["using a string within square brackets:\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:'object["propertyName"]'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //or also:\n     $property:="name"\n\t $vName:=employee[$property]\n\n'})}),"\n",(0,s.jsx)(o.p,{children:"Como o valor de uma propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, \xe9 poss\xedvel usar uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,s.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos est\xe1 dispon\xedvel em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Objects"})," themselves (stored in variables, fields, object properties, object arrays, or collection elements).\nExemplos:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //vari\xe1vel\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propriedade de um objeto\n     $pop:=$aObjCountries{2}.population //array objeto\n     $val:=$myCollection[3].subvalue //elemento cole\xe7\xe3o\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"4D commands"})," that return objects.\nExemplo:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     $measures:=Get database measures.DB.tables\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Project methods"})," or ",(0,s.jsx)(o.strong,{children:"Functions"})," that return objects.\nExemplo:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cole\xe7\xf5es"}),"\nExemplo:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     myColl.length //tamanho da cole\xe7\xe3o\n"})}),"\n",(0,s.jsx)(o.h3,{id:"Valor-Null",children:"Valor Null"}),"\n",(0,s.jsxs)(o.p,{children:["When using the objects, the ",(0,s.jsx)(o.strong,{children:"null"})," value is supported though the ",(0,s.jsx)(o.strong,{children:"Null"})," command. Esse comando pode ser usado para atribuir ou comparar o valor nulo \xe0s propriedades do objeto, por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["For more information, please refer to ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/Concepts/null-undefined",children:"Null and Undefined"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"Valor-n\xe3o-definido",children:"Valor n\xe3o definido"}),"\n",(0,s.jsx)(o.p,{children:"A avalia\xe7\xe3o de uma propriedade de um objeto pode produzir \xe0s vezes um valor indefinido. A atribui\xe7\xe3o de um valor indefinido a uma propriedade de objeto existente reinicializa ou limpa seu valor. Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada."}),"\n",(0,s.jsxs)(o.p,{children:["For more information, please refer to ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/Concepts/null-undefined",children:"Null and Undefined"})]}),"\n",(0,s.jsx)(o.h3,{id:"Ponteiro",children:"Ponteiro"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Preliminary Note:"})," Since objects are always passed by reference, there is usually no need to use pointers. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de mem\xf3ria e permitindo modificar o par\xe2metro e devolver as modifica\xe7\xf5es. Como resultado, n\xe3o \xe9 necess\xe1rio usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros."]}),"\n",(0,s.jsx)(o.p,{children:'Usar nota\xe7\xe3o de objeto com ponteiros \xe9 parecido com usar nota\xe7\xe3o de objeto diretamente com os objetos, exceto que o s\xedmbolo "ponto" deve ser omitido.'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Acesso direto"}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Acesso pelo nome:"}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,s.jsx)(o.h2,{id:"Resources",children:"Resources"}),"\n",(0,s.jsxs)(o.p,{children:["Objects use ",(0,s.jsx)(o.em,{children:"resources"})," such a documents, entity locks, and of course, memory. Esses recursos s\xe3o mantidos enquanto os objetos precisarem. Normalmente, voc\xea n\xe3o precisa se preocupar com eles, 4D libera automaticamente todos os recursos anexados a um objeto quando detecta que o objeto em si n\xe3o \xe9 mais referenciado por qualquer vari\xe1vel ou outro objeto."]}),"\n",(0,s.jsxs)(o.p,{children:["For instance, when there is no more references to an entity on which you have set a lock with ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/API/EntityClass#lock",children:(0,s.jsx)(o.code,{children:"$entity.lock()"})}),", 4D will free the memory but also automatically release the associated lock, a call to ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R4/API/EntityClass#unlock",children:(0,s.jsx)(o.code,{children:"$entity.unlock()"})})," is useless."]}),"\n",(0,s.jsxs)(o.p,{children:["If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to ",(0,s.jsx)(o.strong,{children:"nullify all its references"}),". Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\n$doc:=WP Import document("large_novel.4wp")\n\t... // do something with $doc\n$doc:=Null  // free resources occupied by $doc\n\t... // continue execution with more free memory\n\n'})}),"\n",(0,s.jsx)(o.h2,{id:"Exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(o.p,{children:"Usar nota\xe7\xe3o de objeto simplifica o c\xf3digo 4D no manejo dos mesmos. Entretanto note que a nota\xe7\xe3o baseada em comandos continua sendo totalmente compat\xedvel."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Escrita e leitura das propriedades de objetos (este exemplo compara a nota\xe7\xe3o de objetos e anota\xe7\xe3o de comandos):"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  // Using the object notation\n var $myObj : Object //declares a 4D variable object\n $myObj:={} //creates an object literal and assigns it to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n \n  // Using the command notation\n var $myObj2 : Object //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n \n  // Of course, both notations can be mixed\n var $myObj3 : Object\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Criar uma propriedade e atribuir valores, incluindo objetos:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Obter um valor em um subobjeto \xe9 bem simples usando a nota\xe7\xe3o de objeto:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["You can access properties as strings using the ",(0,s.jsx)(o.code,{children:"[]"})," operator"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n'})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,n)=>{var s=n(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var s,a={},c=null,l=null;for(s in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)t.call(o,s)&&!i.hasOwnProperty(s)&&(a[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===a[s]&&(a[s]=o[s]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:d.current}}o.Fragment=a,o.jsx=c,o.jsxs=c},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>d});var s=n(296540);const r={},a=s.createContext(r);function t(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);