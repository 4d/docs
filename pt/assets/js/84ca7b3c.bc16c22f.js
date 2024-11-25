"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47629"],{890507:function(e,o,s){s.r(o),s.d(o,{metadata:()=>a,contentTitle:()=>i,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>d});var a=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. A estrutura dos objectos 4D \\"nativos\\" baseia-se no princ\xedpio cl\xe1ssico dos pares \\"propriedade/valor\\". A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/pt/20/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"N\xfamero (Real, Longint, Integer)","permalink":"/docs/pt/20/Concepts/number"},"next":{"title":"Imagem","permalink":"/docs/pt/20/Concepts/picture"}}'),n=s("785893"),r=s("250065");let d={id:"object",title:"Object"},i=void 0,c={},l=[{value:"Instancia\xe7\xe3o",id:"instancia\xe7\xe3o",level:2},{value:"comando <code>New object</code>",id:"comando-new-object",level:3},{value:"operador <code>{}</code>",id:"operador-",level:3},{value:"Objeto regular ou compartilhado",id:"objeto-regular-ou-compartilhado",level:3},{value:"Propriedades",id:"propriedades",level:2},{value:"Valor Null",id:"valor-null",level:3},{value:"Valor n\xe3o definido",id:"valor-n\xe3o-definido",level:3},{value:"Ponteiro",id:"ponteiro",level:3},{value:"Resources",id:"resources",level:2},{value:"Exemplos",id:"exemplos",level:2}];function t(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:'Vari\xe1veis, campos ou express\xf5es do tipo Objecto podem conter v\xe1rios tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princ\xedpio cl\xe1ssico dos pares "propriedade/valor". A sintaxe desses objetos \xe9 baseada na nota\xe7\xe3o JSON:'}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:['Um nome de uma propriedade \xe9 sempre um texto, por exemplo "nome". Deve seguir ',(0,n.jsx)(o.a,{href:"/docs/pt/20/Concepts/identifiers#object-properties",children:"regras espec\xedficas"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Um valor de propriedade pode ser do seguinte tipo:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"number (Real, Integer, etc.)"}),"\n",(0,n.jsx)(o.li,{children:"text"}),"\n",(0,n.jsx)(o.li,{children:"null"}),"\n",(0,n.jsx)(o.li,{children:"boolean"}),"\n",(0,n.jsxs)(o.li,{children:["ponteiro (armazenado como tal, avaliado usando o comando ",(0,n.jsx)(o.code,{children:"JSON Stringify"})," ou quando copiando),"]}),"\n",(0,n.jsx)(o.li,{children:"data (tipo de data ou cadeia de formato de data ISO)"}),"\n",(0,n.jsx)(o.li,{children:"objeto (os objetos podem estar aninhados em v\xe1rios n\xedveis)"}),"\n",(0,n.jsx)(o.li,{children:"imagem(2)"}),"\n",(0,n.jsx)(o.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["(1) ",(0,n.jsx)(o.strong,{children:"Objetos n\xe3o transmiss\xedveis"})," , como objetos ORDA (",(0,n.jsx)(o.a,{href:"/docs/pt/20/ORDA/dsmapping#entity",children:"entidades"}),", ",(0,n.jsx)(o.a,{href:"/docs/pt/20/ORDA/dsmapping#entity-selection",children:"sele\xe7\xf5es de entidades"}),", etc.), ",(0,n.jsx)(o.a,{href:"/docs/pt/20/API/FileHandleClass",children:"manipuladores de arquivos"}),", ",(0,n.jsx)(o.a,{href:"/docs/pt/20/API/WebServerClass",children:"servidor da Web"}),"... n\xe3o podem ser armazenados nos campos de objeto ****. Um erro ser\xe1 retornado se voc\xea tentar fazer isso; no entanto, eles s\xe3o totalmente compat\xedveis com as vari\xe1veis do objeto **** na mem\xf3ria."]}),"\n",(0,n.jsx)(o.p,{children:'(*)Quando se exp\xf5e como texto no depurador ou se exporta a JSON, as propriedades dos objetos imagem imprimem "[objeto Imagem]".'}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsx)(o.p,{children:"Tenha em aten\xe7\xe3o que os nomes das propriedades diferenciam entre mai\xfasculas e min\xfasculas."})}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea gerencia vari\xe1veis, campos ou express\xf5es do tipo Object usando a nota\xe7\xe3o de objeto padr\xe3o ",(0,n.jsx)(o.a,{href:"#properties"})," ou os comandos dispon\xedveis no tema ",(0,n.jsx)(o.strong,{children:"Objects (Language)"})," . Gerencia vari\xe1veis do tipo Objecto, campos ou express\xf5es usando a nota\xe7\xe3o de objecto ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Concepts/object#syntax-basics"})," ou os comandos cl\xe1ssicos dispon\xedveis no tema ",(0,n.jsx)(o.strong,{children:"Objects (Language)"})," ."]}),"\n",(0,n.jsx)(o.p,{children:"Cada valor de propriedade acessado atrav\xe9s da nota\xe7\xe3o de objeto \xe9 considerado uma express\xe3o. Quando a nota\xe7\xe3o de objeto for ativada em seu banco de dados (ver abaixo), pode usar esses valores sempre que express\xf5es 4D forem esperadas:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["em c\xf3digo 4D, quer escritos nos m\xe9todos (Editor de C\xf3digo) ou externalizados (f\xf3rmulas, ficheiros de etiquetas 4D processados por ",(0,n.jsx)(o.code,{children:"PROCESS 4D TAGS"})," ou no Servidor Web, arquivos de exporta\xe7\xe3o, documentos 4D Write Pro...),"]}),"\n",(0,n.jsx)(o.li,{children:"nas \xe1reas de express\xe3o do depurador e do explorador de Runtime,"}),"\n",(0,n.jsx)(o.li,{children:"na lista de propriedades do editor de formul\xe1rios para objectos de formul\xe1rios: Vari\xe1vel ou Campo de express\xe3o, bem como v\xe1rias caixas de selec\xe7\xe3o e express\xf5es de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte)."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"instancia\xe7\xe3o",children:"Instancia\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["Os objetos devem ter sido inicializados, por exemplo utilizando o comando ",(0,n.jsx)(o.code,{children:"New object"}),", do contr\xe1rio ao tentar ler ou modificar suas propriedades se gerar\xe1 um error de sintaxe."]}),"\n",(0,n.jsx)(o.p,{children:"Com a nota\xe7\xe3o de objetos, pode acessar \xe0s propriedades dos objetos de duas maneiras:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["utilizando o comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:(0,n.jsx)(o.code,{children:"New object"})}),","]}),"\n",(0,n.jsxs)(o.li,{children:["utilizando o operador ",(0,n.jsx)(o.code,{children:"{}"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["V\xe1rios comandos e fun\xe7\xf5es 4D devolvem objectos, por exemplo ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html",children:(0,n.jsx)(o.code,{children:"Obter medidas da base de dados"})})," ou ",(0,n.jsx)(o.a,{href:"/docs/pt/20/API/FileClass#file",children:(0,n.jsx)(o.code,{children:"Arquivo"})}),". Neste caso, n\xe3o \xe9 necess\xe1rio instanciar explicitamente o objecto, a linguagem 4D faz isso por voc\xea."]})}),"\n",(0,n.jsxs)(o.h3,{id:"comando-new-object",children:["comando ",(0,n.jsx)(o.code,{children:"New object"})]}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:(0,n.jsx)(o.code,{children:"New collection"})})," cria uma nova colec\xe7\xe3o vazia ou pr\xe9-preenchida e devolve a sua refer\xeancia."]}),"\n",(0,n.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" C_OBJECT($obVar) //cria\xe7\xe3o de um objeto de tipo 4D vari\xe1vel\n $obVar:=Novo objeto //initialization do objeto e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n"})}),"\n",(0,n.jsxs)(o.h3,{id:"operador-",children:["operador ",(0,n.jsx)(o.code,{children:"{}"})]}),"\n",(0,n.jsxs)(o.p,{children:["O operador ",(0,n.jsx)(o.code,{children:"{}"})," permite-lhe criar um objecto ",(0,n.jsx)(o.strong,{children:"literal"}),". Um literal de objecto \xe9 uma lista separada por semicolunas de zero ou mais pares de nomes de propriedades e valores associados de um objecto, entre chaves (",(0,n.jsx)(o.code,{children:"{}"}),"). A sintaxe literal do objecto cria objectos vazios ou preenchidos."]}),"\n",(0,n.jsxs)(o.p,{children:["Uma vez que qualquer valor de propriedade \xe9 considerado uma express\xe3o, pode criar sub-objectos utilizando ",(0,n.jsx)(o.code,{children:"{}"})," nos valores de propriedade.  Tamb\xe9m \xe9 poss\xedvel criar e referenciar os literais da cole\xe7\xe3o ****."]}),"\n",(0,n.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' var $o ; $o2 ; $o3 : Object //declara\xe7\xe3o de vari\xe1veis de objecto\n $o := {} // instancia\xe7\xe3o de um objecto vazio \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instancia\xe7\xe3o de um objecto\n        // com propriedades {"a": "foo", "b":42, "c":{}, "d":false})\n\n    // mesmas propriedades utilizando vari\xe1veis\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a": "foo";b":42; "c":{}}\n\n'})}),"\n",(0,n.jsxs)(o.p,{children:["\xc9 poss\xedvel misturar as sintaxes ",(0,n.jsx)(o.code,{children:"New object"})," e literal:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'$o:={\\\n    ob1: {age: 42}; \\\n    ob2: New object("message"; "Hello"); \\\n    form1: Formula(return This.ob1.age+10); \\\n    form2 : Formula(ALERT($1)); \\\n    col: [1; 2; 3; 4; 5; 6]\\\n    }\n\n$o.form1() //52\n$o.form2($o.ob2.message) // apresenta Hello\n$col:=$o.col[5] //6\n'})}),"\n",(0,n.jsx)(o.h3,{id:"objeto-regular-ou-compartilhado",children:"Objeto regular ou compartilhado"}),"\n",(0,n.jsx)(o.p,{children:"Pode criar dois tipos de objetos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["objetos regulares (n\xe3o compartilhados), usando o comando ",(0,n.jsx)(o.code,{children:"Novo objeto"}),". Estes objetos podem ser editados sem qualquer controle de acesso espec\xedfico, mas n\xe3o podem ser compartilhados entre processos."]}),"\n",(0,n.jsxs)(o.li,{children:["objectos partilhados, utilizando o comando ",(0,n.jsx)(o.code,{children:"New shared object"})," . Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by ",(0,n.jsx)(o.code,{children:"Use... End use"})," structures. Para saber mais, consulte a se\xe7\xe3o ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Concepts/shared",children:"Objetos e cole\xe7\xf5es compartidos"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n",(0,n.jsx)(o.p,{children:"Voc\xea acessa os valores de propriedade do objeto por meio de uma cadeia de tokens. As propriedades do objeto podem ser acessadas de duas maneiras:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'usar uma string dentro de colchetes: > object["propertyName"]'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'usar um simbolo "ponto": > object.propertyName'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     /ou tamb\xe9m:\n     $property:="name"\n     $vName:=employee[$property]\n\n'})}),"\n",(0,n.jsx)(o.p,{children:"Como o valor de uma propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, \xe9 poss\xedvel usar uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,n.jsx)(o.p,{children:"A nota\xe7\xe3o de objetos est\xe1 dispon\xedvel em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["com os ",(0,n.jsx)(o.strong,{children:"Objetos"})," mesmos (armazenados em vari\xe1veis, campos, propriedades de objetos, arrays de objetos ou elementos de cole\xe7\xf5es). Exemplos:"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //vari\xe1vel\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propriedade de um objeto\n     $pop:=$aObjCountries{2}.population //array objeto\n     $val:=$myCollection[3].subvalue //elemento cole\xe7\xe3o\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Comandos 4D"})," que devolvem objectos. Exemplo:"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"     $measures:=Get database measures.DB.tables\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"M\xe9todos projeto"})," ou ",(0,n.jsx)(o.strong,{children:"Fun\xe7\xf5es"})," que retornam objetos. Exemplo:"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Collections"})," Example:"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"     myColl.length //tamanho da cole\xe7\xe3o\n"})}),"\n",(0,n.jsx)(o.h3,{id:"valor-null",children:"Valor Null"}),"\n",(0,n.jsxs)(o.p,{children:["Ao usar os objetos, o valor ",(0,n.jsx)(o.strong,{children:"null"})," \xe9 usado por meio do comando ",(0,n.jsx)(o.strong,{children:"Null"})," . Esse comando pode ser usado para atribuir ou comparar o valor nulo \xe0s propriedades do objeto, por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," lembre que os nomes de atributos diferenciam entre mai\xfasculas e min\xfasculas."]}),"\n",(0,n.jsx)(o.h3,{id:"valor-n\xe3o-definido",children:"Valor n\xe3o definido"}),"\n",(0,n.jsx)(o.p,{children:"A avalia\xe7\xe3o de uma propriedade de um objeto pode produzir \xe0s vezes um valor indefinido. A atribui\xe7\xe3o de um valor indefinido a uma propriedade de objeto existente reinicializa ou limpa seu valor. Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada."}),"\n",(0,n.jsxs)(o.p,{children:["Para saber mais, veja a descri\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"Null"})]}),"\n",(0,n.jsx)(o.h3,{id:"ponteiro",children:"Ponteiro"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota preliminar:"})," dado que os objetos s\xe3o passados sempre por refer\xeancia, geralmente n\xe3o \xe9 preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de mem\xf3ria e permitindo modificar o par\xe2metro e devolver as modifica\xe7\xf5es. Como resultado, n\xe3o \xe9 necess\xe1rio usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros."]}),"\n",(0,n.jsx)(o.p,{children:'Usar nota\xe7\xe3o de objeto com ponteiros \xe9 parecido com usar nota\xe7\xe3o de objeto diretamente com os objetos, exceto que o s\xedmbolo "ponto" deve ser omitido.'}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Acesso direto"}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Acesso pelo nome:"}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,n.jsx)(o.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(o.p,{children:["Os objetos usam ",(0,n.jsx)(o.em,{children:"recursos"})," documentos, bloqueios de entidades e, \xe9 claro, mem\xf3ria. Esses recursos s\xe3o mantidos enquanto os objetos precisarem. Normalmente, voc\xea n\xe3o precisa se preocupar com eles, 4D libera automaticamente todos os recursos anexados a um objeto quando detecta que o objeto em si n\xe3o \xe9 mais referenciado por qualquer vari\xe1vel ou outro objeto."]}),"\n",(0,n.jsxs)(o.p,{children:["Por exemplo, quando n\xe3o houver mais refer\xeancias a uma entidade na qual voc\xea defina um bloqueio com ",(0,n.jsx)(o.a,{href:"/docs/pt/20/API/EntityClass#lock",children:(0,n.jsx)(o.code,{children:"$entity. ock()"})}),", 4D liberar\xe1 a mem\xf3ria, mas tamb\xe9m liberar\xe1 automaticamente o bloqueio associado, uma chamada para ",(0,n.jsx)(o.a,{href:"/docs/pt/20/API/EntityClass#unlock",children:(0,n.jsx)(o.code,{children:"$entity. nlock()"})})," \xe9 in\xfatil."]}),"\n",(0,n.jsxs)(o.p,{children:["Se quiser liberar imediatamente todos os recursos ocupados por um objeto sem ter que esperar que 4D fa\xe7a isso automaticamente (no final da execu\xe7\xe3o do m\xe9todo para vari\xe1veis locais por exemplo) tem que ",(0,n.jsx)(o.strong,{children:"nullify all its references"}),". Por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\n$doc:=WP Import document("large_novel.4wp")\n    ... // fa\xe7a algo com $doc\n$doc:=Null  // free resources occupied by $doc\n    . . // continue a execu\xe7\xe3o com mais mem\xf3ria livre\n\n'})}),"\n",(0,n.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsx)(o.p,{children:"Usar nota\xe7\xe3o de objeto simplifica o c\xf3digo 4D no manejo dos mesmos. Entretanto note que a nota\xe7\xe3o baseada em comandos continua sendo totalmente compat\xedvel."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Escrita e leitura das propriedades de objetos (este exemplo compara a nota\xe7\xe3o de objetos e anota\xe7\xe3o de comandos):"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'  // Usando a nota\xe7\xe3o de objecto\n C_OBJECT($myObj) //declara um objecto vari\xe1vel 4D\n $myObj:=Novo objecto //cria um objecto e atribui \xe0 vari\xe1vel\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Usando a nota\xe7\xe3o de comando\n C_OBJECT($myObj2) //declara um objecto vari\xe1vel 4D\n OB SET($myObj2; "age";42) //cria um objecto e acrescenta a propriedade age\n $age:=OB Get($myObj2; "age") //42\n\n  // Claro, ambas as nota\xe7\xf5es podem ser misturadas\n C_OBJECT($myObj3)\n OB SET($myObj3; "age";10)\n $age:=$myObj3.idade //10\n'})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Criar uma propriedade e atribuir valores, incluindo objetos:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' C_OBJECT($Emp)\n $Emp:=Novo objecto\n $Emp.city:="London" //cria a propriedade da cidade e define o seu valor para "London"\n $Emp.city:="Paris" //modifica a propriedade da cidade\n $Emp.phone:=Novo objecto("office"; "123456789"; "home"; "0011223344")\n  //cria a propriedade do telefone e define o seu valor para um objecto\n'})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Obter um valor em um subobjeto \xe9 bem simples usando a nota\xe7\xe3o de objeto:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Voc\xea pode acessar propriedades como strings usando o operador ",(0,n.jsx)(o.code,{children:"[]"})]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' $Emp["city"]:="Berlim" //modifica a propriedade da cidade\n  //isto pode ser \xfatil para criar propriedades atrav\xe9s de vari\xe1veis\n C_TEXT($addr)\n $addr:="endere\xe7o"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""". Fim para\n  // cria 4 propriedades vazias "address1...address4" no objecto $Emp\n'})})]})}function p(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var a=s(667294);let n={},r=a.createContext(n);function d(e){let o=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);