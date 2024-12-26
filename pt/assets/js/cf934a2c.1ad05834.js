"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16887"],{220231:function(e,o,s){s.r(o),s.d(o,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"Concepts/methods","title":"P\xe1gina M\xe9todos","description":"Um m\xe9todo \xe9 basicamente um peda\xe7o de c\xf3digo que executa uma ou v\xe1rias a\xe7\xf5es. Na linguagem 4D, h\xe1 duas categorias de m\xe9todos:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/methods.md","sourceDirName":"Concepts","slug":"/Concepts/methods","permalink":"/docs/pt/18/Concepts/methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"methods","title":"P\xe1gina M\xe9todos"},"sidebar":"docs","previous":{"title":"Arrays","permalink":"/docs/pt/18/Concepts/arrays"},"next":{"title":"Par\xe2metros","permalink":"/docs/pt/18/Concepts/parameters"}}'),n=s("785893"),d=s("250065");let r={id:"methods",title:"P\xe1gina M\xe9todos"},t=void 0,i={},c=[{value:"M\xe9todos projeto recursivos",id:"m\xe9todos-projeto-recursivos",level:2},{value:"Sub-rotinas e fun\xe7\xf5es",id:"sub-rotinas-e-fun\xe7\xf5es",level:3},{value:"M\xe9todos associados aos objetos",id:"m\xe9todos-associados-aos-objetos",level:3},{value:"M\xe9todos do menu",id:"m\xe9todos-do-menu",level:3},{value:"M\xe9todos Processo",id:"m\xe9todos-processo",level:3},{value:"M\xe9todos de captura de eventos e erros",id:"m\xe9todos-de-captura-de-eventos-e-erros",level:3},{value:"M\xe9todos associados aos objetos",id:"m\xe9todos-associados-aos-objetos-1",level:2},{value:"M\xe9todos especializados",id:"specialized-methods",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Um m\xe9todo \xe9 basicamente um peda\xe7o de c\xf3digo que executa uma ou v\xe1rias a\xe7\xf5es. Na linguagem 4D, h\xe1 duas categorias de m\xe9todos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"built-in methods"}),", which are provided by 4D or third-party developers and can be only called in your code. Os m\xe9todos incorporados incluem:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Commands and functions of the 4D API, such as ",(0,n.jsx)(o.code,{children:"ALERT"})," or ",(0,n.jsx)(o.code,{children:"Current date"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Methods attached to collections or native objects, such as ",(0,n.jsx)(o.code,{children:"collection.orderBy()"})," or ",(0,n.jsx)(o.code,{children:"entity.save()"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Commands from plug-ins or components, provided by 4D or third-party developers, such as ",(0,n.jsx)(o.code,{children:"SVG_New_arc"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Built-in methods are detailed in the ",(0,n.jsx)(o.em,{children:"4D Language reference"})," manual or dedicated manuals for plug-ins or components."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"project methods"}),", where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). The maximum size of a project method is limited to 2 GB of text or 32,000 lines of command."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Note:"})," 4D also provides specific methods that are automatically executed depending on database or form events. Ver ",(0,n.jsx)(o.a,{href:"#specialized-methods",children:"M\xe9todos especializados"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"m\xe9todos-projeto-recursivos",children:"M\xe9todos projeto recursivos"}),"\n",(0,n.jsx)(o.p,{children:"Um m\xe9todo de projecto pode ter uma das seguintes fun\xe7\xf5es, dependendo de como \xe9 executado e utilizado:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Sub-rotina e fun\xe7\xe3o"}),"\n",(0,n.jsx)(o.li,{children:"M\xe9todo ligado ao objeto"}),"\n",(0,n.jsx)(o.li,{children:"M\xe9todo do menu"}),"\n",(0,n.jsx)(o.li,{children:"M\xe9todo de gerenciamento de processos"}),"\n",(0,n.jsx)(o.li,{children:"M\xe9todo de captura de eventos ou erros"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"sub-rotinas-e-fun\xe7\xf5es",children:"Sub-rotinas e fun\xe7\xf5es"}),"\n",(0,n.jsx)(o.p,{children:"Uma sub-rotina \xe9 um m\xe9todo de projecto que pode ser pensado como um servo. Executa as tarefas que outros m\xe9todos lhe pedem para executar. Uma fun\xe7\xe3o \xe9 uma sub-rotina que devolve um valor ao m\xe9todo que a chamou."}),"\n",(0,n.jsxs)(o.p,{children:["When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method from other project methods, or from ",(0,n.jsx)(o.a,{href:"#specialized-methods",children:"predefined methods"})," in the same way that you call 4D\u2019s built-in commands. Um m\xe9todo de projecto utilizado desta forma \xe9 chamado de sub-rotina."]}),"\n",(0,n.jsx)(o.p,{children:"Utiliza sub-rotinas para:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Reduzir a codifica\xe7\xe3o repetitiva"}),"\n",(0,n.jsx)(o.li,{children:"Esclare\xe7a os seus m\xe9todos"}),"\n",(0,n.jsx)(o.li,{children:"Facilitar mudan\xe7as nos seus m\xe9todos"}),"\n",(0,n.jsx)(o.li,{children:"Modularize o seu c\xf3digo"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Por exemplo, digamos que voc\xea tenha um banco de dados de clientes. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. O c\xf3digo para fazer isso  parece-se com o seguinte:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'  // Procure um cliente\n QUERY BY EXAMPLE([Customers])\n  // Selecione o formul\xe1rio de entrada\n FORMUL\xc1RIO DE ENTRADA([Customers]; "Data Entry")\n  // Modifique o registo do cliente\n MODIFY RECORD([Customers])\n'})}),"\n",(0,n.jsx)(o.p,{children:"Se n\xe3o utilizar sub-rotinas, ter\xe1 de escrever o c\xf3digo cada vez que quiser modificar o registo de um cliente. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. Se utilizar sub-rotinas, s\xf3 ter\xe1 de o escrever uma vez. Esta \xe9 a primeira vantagem das sub-rotinas - reduzir a quantidade de c\xf3digo."}),"\n",(0,n.jsxs)(o.p,{children:["If the previously described code was a method called ",(0,n.jsx)(o.code,{children:"MODIFY CUSTOMER"}),", you would execute it simply by using the name of the method in another method. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este m\xe9todo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" MODIFY CUSTOMER\n PRINT SELECTION([Customers])\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Esta capacidade simplifica dramaticamente os seus m\xe9todos. In the example, you do not need to know how the ",(0,n.jsx)(o.code,{children:"MODIFY CUSTOMER"})," method works, just what it does. Esta \xe9 a segunda raz\xe3o para a utiliza\xe7\xe3o de sub-rotinas para esclarecer os seus m\xe9todos. Desta forma, os seus m\xe9todos tornam-se extens\xf5es \xe0 linguagem 4D."]}),"\n",(0,n.jsx)(o.p,{children:"If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. Este \xe9 o pr\xf3ximo motivo para utilizar sub-rotinas para facilitar mudan\xe7as nos seus m\xe9todos."}),"\n",(0,n.jsx)(o.p,{children:"Usando sub-rotinas, voc\xea torna o seu c\xf3digo modular. Isto significa simplesmente a divis\xe3o do seu c\xf3digo em m\xf3dulos (sub-rotinas), cada um dos quais executa uma tarefa l\xf3gica. Considere o seguinte c\xf3digo de um banco de dados de uma conta-corrente:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:" FIND CLEARED CHECKS ` Find the cleared checks\n RECONCILE ACCOUNT ` Reconcile the account\n PRINT CHECK BOOK REPORT ` Print a checkbook report\n"})}),"\n",(0,n.jsx)(o.p,{children:"Even for someone who doesn\u2019t know the database, it is clear what this code does. N\xe3o \xe9 necess\xe1rio examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas opera\xe7\xf5es complexas, mas aqui \xe9 apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu c\xf3digo em tarefas l\xf3gicas, ou m\xf3dulos, sempre que poss\xedvel."}),"\n",(0,n.jsx)(o.h3,{id:"m\xe9todos-associados-aos-objetos",children:"M\xe9todos associados aos objetos"}),"\n",(0,n.jsxs)(o.p,{children:["Pode encapsular os seus m\xe9todos de projeto em ",(0,n.jsx)(o.strong,{children:"f\xf3rmula"})," objectos e cham\xe1-los dos seus objectos."]}),"\n",(0,n.jsxs)(o.p,{children:["Os comandos ",(0,n.jsx)(o.code,{children:"Formula"})," ou ",(0,n.jsx)(o.code,{children:"Formula from string"})," permitem-lhe criar objectos de f\xf3rmula nativa que pode encapsular em propriedades de objectos. Permite-lhe implementar m\xe9todos de objectos personalizados."]}),"\n",(0,n.jsxs)(o.p,{children:["To execute a method stored in an object property, use the ",(0,n.jsx)(o.strong,{children:"( )"})," operator after the property name. Por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'//myAlert ALERT("Hello world!")\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Pode encapsular ",(0,n.jsx)(o.code,{children:"fullName"})," num objecto:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n'})}),"\n",(0,n.jsx)(o.p,{children:"Tamb\xe9m se admite a sintaxe com par\xeanteses:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'$o["custom_Alert"]() //exibe "Hello world!"\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Pode tamb\xe9m ",(0,n.jsx)(o.a,{href:"/docs/pt/18/Concepts/parameters",children:"passar par\xe2metros"})," \xe0 sua f\xf3rmula quando lhe chamar utilizando $1, $2\u2026 , tal como nos m\xe9todos de projecto 4D:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'//fullName method C_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Depois ",(0,n.jsx)(o.code,{children:"myAlert"})," pode ser encapsulado em qualquer objecto e chamado:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John"; "Smith")\n//$result = "John Smith"\n// equivalente a $result:=fullName("param1"; "param2")\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Combinado com a fun\xe7\xe3o",(0,n.jsx)(o.code,{children:"This"}),", tais m\xe9todos de objectos permitem escrever um poderoso c\xf3digo gen\xe9rico. Por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'//fullName2 method C_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,n.jsx)(o.p,{children:"Ent\xe3o o m\xe9todo atua como um novo atributo calculado que pode ser adicionado a outros atributos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("firstName"; "Jim"; "lastName"; "Wesson")\n$o.fullName:=Formula(fullName2) //adicionar o m\xe9todo  \n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n'})}),"\n",(0,n.jsx)(o.p,{children:"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Chamar s\xf3 a propriedade de objeto devolver\xe1 uma nova refer\xeancia \xe0 f\xf3rmula (e n\xe3o a executar\xe1):"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"$o:=$f.message //devolve o objeto f\xf3rmula em $o\n"})}),"\n",(0,n.jsx)(o.h3,{id:"m\xe9todos-do-menu",children:"M\xe9todos do menu"}),"\n",(0,n.jsx)(o.p,{children:'Um m\xe9todo de menu \xe9 invocado quando se selecciona o comando do menu personalizado ao qual est\xe1 anexado. Atribui-se o m\xe9todo ao comando menu usando o editor de menu ou um comando do tema "Menus". O m\xe9todo executa-se quando o comando do menu \xe9 escolhido. Esse processo \xe9 um dos principais aspectos da personaliza\xe7\xe3o de um banco de dados. By creating custom menus with menu methods that perform specific actions, you personalize your database.'}),"\n",(0,n.jsxs)(o.p,{children:["Os comandos personalizados do menu podem causar a realiza\xe7\xe3o de uma ou mais actividades. Por exemplo, um comando de menu para introduzir registos pode chamar um m\xe9todo que executa duas tarefas: exibir o formul\xe1rio de introdu\xe7\xe3o apropriado, e chamar o comando ",(0,n.jsx)(o.code,{children:"ADD RECORD"})," at\xe9 que o usu\xe1rio cancele a atividade de introdu\xe7\xe3o de dados."]}),"\n",(0,n.jsx)(o.p,{children:"A automatiza\xe7\xe3o de sequ\xeancias de actividades \xe9 uma capacidade muito poderosa da linguagem de programa\xe7\xe3o. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database."}),"\n",(0,n.jsx)(o.h3,{id:"m\xe9todos-processo",children:"M\xe9todos Processo"}),"\n",(0,n.jsxs)(o.p,{children:["Um ",(0,n.jsx)(o.strong,{children:"m\xe9todo de processo"})," \xe9 um m\xe9todo de projecto que \xe9 chamado quando um processo \xe9 iniciado. O processo dura apenas enquanto o m\xe9todo do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um m\xe9todo de menu anexado a um comando de menu com a propriedade ",(0,n.jsx)(o.em,{children:"Start a New Process"}),"  \xe9 tamb\xe9m o m\xe9todo de processo para o processo recentemente iniciado."]}),"\n",(0,n.jsx)(o.h3,{id:"m\xe9todos-de-captura-de-eventos-e-erros",children:"M\xe9todos de captura de eventos e erros"}),"\n",(0,n.jsxs)(o.p,{children:["Um ",(0,n.jsx)(o.strong,{children:"m\xe9todo de capta\xe7\xe3o de eventos"})," decorre num processo separado como m\xe9todo de capta\xe7\xe3o de eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdu\xe7\xe3o de dados, 4D detecta toques no teclado e cliques, depois chama os m\xe9todos corretos de objetos e formul\xe1rios para que possa responder adequadamente aos eventos a partir destes m\xe9todos. Para mais informa\xe7\xf5es, ver a descri\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"ON EVENT CALL"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Um ",(0,n.jsx)(o.strong,{children:"m\xe9todo de apanhar erros"})," \xe9 um m\xe9todo de projecto baseado na interrup\xe7\xe3o. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,n.jsx)(o.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"m\xe9todos-associados-aos-objetos-1",children:"M\xe9todos associados aos objetos"}),"\n",(0,n.jsx)(o.p,{children:"Os m\xe9todos de projecto podem chamar-se a si pr\xf3prios. Por exemplo:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"O m\xe9todo A pode chamar o m\xe9todo B que pode chamar A, por isso A chamar\xe1 novamente B e assim por diante."}),"\n",(0,n.jsx)(o.li,{children:"Um m\xe9todo pode chamar-se a si pr\xf3prio."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"A isto chama-se recorr\xeancia. A linguagem 4D suporta plenamente a recorr\xeancia."}),"\n",(0,n.jsxs)(o.p,{children:["Aqui um exemplo simples. Digamos que tem uma tabela ",(0,n.jsx)(o.code,{children:"[Amigos e Parentes]"})," composta por este conjunto de campos extremamente simplificado:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.code,{children:"[Friends and Relatives]Name"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.code,{children:"[Friends and Relatives]ChildrensName"})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'Para este exemplo, assumimos que os valores nos campos s\xe3o \xfanicos (n\xe3o h\xe1 duas pessoas com o mesmo nome). Dado um nome, quer construir a frase "Um amigo meu, Jo\xe3o que \xe9 o filho de Paulo que \xe9 o filho de Jane que \xe9 o filho de Robert que \xe9 o filho de Eleanor, faz isto para viver":'}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Pode construir a frase desta forma:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n'})}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsx)(o.li,{children:"Tamb\xe9m se pode construir desta forma:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n    End if\n End if\n    End if\n End if\n'})}),"\n",(0,n.jsxs)(o.p,{children:["com a fun\xe7\xe3o recursiva ",(0,n.jsx)(o.code,{children:"Genealogia de"})," listada aqui:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'  ` M\xe9todo projecto Genealogia do \n  ` Genealogia de ( String ) -> Text\n  ` Genealogia de ( Nome ) -> Parte de frase\n\n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Note-se o ",(0,n.jsx)(o.code,{children:"Genealogia do m\xe9todo"})," que se autodenomina."]}),"\n",(0,n.jsxs)(o.p,{children:["A primeira forma \xe9 um ",(0,n.jsx)(o.strong,{children:"algoritmo iterativo"}),". A segunda via \xe9 um ",(0,n.jsx)(o.strong,{children:"algoritmo recursivo"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Ao implementar c\xf3digo para casos como o exemplo anterior, \xe9 importante notar que \xe9 sempre poss\xedvel escrever m\xe9todos usando itera\xe7\xe3o ou recursividade. Tipicamente, a recurs\xe3o fornece um c\xf3digo mais conciso, leg\xedvel e de f\xe1cil manuten\xe7\xe3o, mas a sua utiliza\xe7\xe3o n\xe3o \xe9 obrigat\xf3ria."}),"\n",(0,n.jsx)(o.p,{children:"Alguns usos t\xedpicos da recursividade em 4D s\xe3o:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo."}),"\n",(0,n.jsxs)(o.li,{children:["Navegar documentos e pastas no seu disco, utilizando os comandos ",(0,n.jsx)(o.code,{children:"FOLDER LIST"})," e ",(0,n.jsx)(o.code,{children:"DOCUMENT LIST"}),". Uma pasta pode conter pastas e documentos, as pr\xf3prias subpastas podem conter pastas e documentos, e assim por diante."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Importante:"})," As chamadas recursivas devem sempre terminar em algum momento. No exemplo, o m\xe9todo ",(0,n.jsx)(o.code,{children:"Genealogia de"}),' deixa de se chamar a si pr\xf3prio quando a consulta n\xe3o devolve registos. Sem este teste de condi\xe7\xe3o, o m\xe9todo chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espa\xe7o para "empilhar" as chamadas (bem como os par\xe2metros e vari\xe1veis locais utilizados no m\xe9todo).']}),"\n",(0,n.jsx)(o.h2,{id:"specialized-methods",children:"M\xe9todos especializados"}),"\n",(0,n.jsxs)(o.p,{children:["In addition to generic ",(0,n.jsx)(o.strong,{children:"project methods"}),", 4D supports several specific method types, that are automatically called depending on events:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{children:"Contexto de chamada"}),(0,n.jsx)(o.th,{children:"Aceita par\xe2metros"}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:"M\xe9todo objecto (widget)"})}),(0,n.jsx)(o.td,{children:"Autom\xe1tico, quando um evento envolve a forma a que o m\xe9todo est\xe1 ligado"}),(0,n.jsx)(o.td,{children:"N\xe3o"}),(0,n.jsx)(o.td,{children:"Propriedade de um objecto de formul\xe1rio (tamb\xe9m chamado widget)"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:"M\xe9todo formul\xe1rio"})}),(0,n.jsx)(o.td,{children:"Autom\xe1tico, quando um evento envolve o objecto ao qual o m\xe9todo est\xe1 ligado"}),(0,n.jsx)(o.td,{children:"N\xe3o"}),(0,n.jsx)(o.td,{children:"Propriedade de um formul\xe1rio. Pode-se utilizar um m\xe9todo de formul\xe1rio para gerir dados e objectos, mas \xe9 geralmente mais simples e mais eficiente utilizar um m\xe9todo de objecto para estes fins."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.strong,{children:"No"}),"(default): No highlight"]}),(0,n.jsx)(o.td,{children:"Autom\xe1tico, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)"}),(0,n.jsx)(o.td,{children:"N\xe3o"}),(0,n.jsx)(o.td,{children:"Propriedade de uma tabela. Triggers are methods that can prevent \u201Cillegal\u201D operations with the records of your database."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:"M\xe9todo base"})}),(0,n.jsx)(o.td,{children:"Autom\xe1tico, quando ocorre um evento de sess\xe3o de trabalho"}),(0,n.jsx)(o.td,{children:"Sim (pr\xe9-definido)"}),(0,n.jsx)(o.td,{children:"Existem 16 m\xe9todos base em 4D. Ver sec\xe7\xe3o M\xe9todos base de dados"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return r}});var a=s(667294);let n={},d=a.createContext(n);function r(e){let o=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);