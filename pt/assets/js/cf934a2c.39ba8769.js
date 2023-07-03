"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43152],{3905:(e,o,a)=>{a.d(o,{Zo:()=>m,kt:()=>c});var t=a(67294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),l=function(e){var o=t.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},m=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(a),c=n,h=p["".concat(d,".").concat(c)]||p[c]||u[c]||r;return a?t.createElement(h,s(s({ref:o},m),{},{components:a})):t.createElement(h,s({ref:o},m))}));function c(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17732:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>m});a(67294);var t=a(3905);function n(){return n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function r(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"methods",title:"P\xe1gina M\xe9todos"},i=void 0,d={unversionedId:"Concepts/methods",id:"version-18/Concepts/methods",title:"P\xe1gina M\xe9todos",description:"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/pt/18/Concepts/methods",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"methods",title:"P\xe1gina M\xe9todos"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/pt/18/Concepts/arrays"},next:{title:"Par\xe2metros",permalink:"/docs/pt/18/Concepts/parameters"}},l={},m=[{value:"M\xe9todos projeto recursivos",id:"m\xe9todos-projeto-recursivos",level:2},{value:"Subroutines and functions",id:"subroutines-and-functions",level:3},{value:"M\xe9todos associados aos objetos",id:"m\xe9todos-associados-aos-objetos",level:3},{value:"M\xe9todos do menu",id:"m\xe9todos-do-menu",level:3},{value:"M\xe9todos Processo",id:"m\xe9todos-processo",level:3},{value:"M\xe9todos de captura de eventos e erros",id:"m\xe9todos-de-captura-de-eventos-e-erros",level:3},{value:"M\xe9todos associados aos objetos",id:"m\xe9todos-associados-aos-objetos-1",level:2},{value:"M\xe9todos especializados",id:"m\xe9todos-especializados",level:2}],u={toc:m};function p(e){var{components:o}=e,a=r(e,["components"]);return(0,t.kt)("wrapper",n({},u,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"built-in methods"),", which are provided by 4D or third-party developers and can be only called in your code. Built-in methods include:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Commands and functions of the 4D API, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"ALERT")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"Current date"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Methods attached to collections or native objects, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"collection.orderBy()")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"entity.save()"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Commands from plug-ins or components, provided by 4D or third-party developers, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"SVG_New_arc"),"."),(0,t.kt)("p",{parentName:"li"},"Built-in methods are detailed in the ",(0,t.kt)("em",{parentName:"p"},"4D Language reference")," manual or dedicated manuals for plug-ins or components.")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"project methods"),", where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). The maximum size of a project method is limited to 2 GB of text or 32,000 lines of command."))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Note:")," 4D also provides specific methods that are automatically executed depending on database or form events. See ",(0,t.kt)("a",n({parentName:"p"},{href:"#specialized-methods"}),"Specialized methods"),"."),(0,t.kt)("h2",n({},{id:"m\xe9todos-projeto-recursivos"}),"M\xe9todos projeto recursivos"),(0,t.kt)("p",null,"Um m\xe9todo de projecto pode ter uma das seguintes fun\xe7\xf5es, dependendo de como \xe9 executado e utilizado:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Subroutine and function"),(0,t.kt)("li",{parentName:"ul"},"Method attached to object"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todo do menu"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todo de gerenciamento de processos"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todo de captura de eventos ou erros")),(0,t.kt)("h3",n({},{id:"subroutines-and-functions"}),"Subroutines and functions"),(0,t.kt)("p",null,"Uma sub-rotina \xe9 um m\xe9todo de projecto que pode ser pensado como um servo. Executa as tarefas que outros m\xe9todos lhe pedem para executar. Uma fun\xe7\xe3o \xe9 uma sub-rotina que devolve um valor ao m\xe9todo que a chamou."),(0,t.kt)("p",null,"When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method from other project methods, or from ",(0,t.kt)("a",n({parentName:"p"},{href:"#predefined-methods"}),"predefined methods")," in the same way that you call 4D\u2019s built-in commands. Um m\xe9todo de projecto utilizado desta forma \xe9 chamado de sub-rotina."),(0,t.kt)("p",null,"Utiliza sub-rotinas para:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Reduzir a codifica\xe7\xe3o repetitiva"),(0,t.kt)("li",{parentName:"ul"},"Esclare\xe7a os seus m\xe9todos"),(0,t.kt)("li",{parentName:"ul"},"Facilitar mudan\xe7as nos seus m\xe9todos"),(0,t.kt)("li",{parentName:"ul"},"Modularize o seu c\xf3digo")),(0,t.kt)("p",null,"For example, let\u2019s say you have a database of customers. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. O c\xf3digo para fazer isso  parece-se com o seguinte:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  // Procure um cliente\n QUERY BY EXAMPLE([Customers])\n  // Selecione o formul\xe1rio de entrada\n FORMUL\xc1RIO DE ENTRADA([Customers]; "Data Entry")\n  // Modifique o registo do cliente\n MODIFY RECORD([Customers])\n')),(0,t.kt)("p",null,"Se n\xe3o utilizar sub-rotinas, ter\xe1 de escrever o c\xf3digo cada vez que quiser modificar o registo de um cliente. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. Se utilizar sub-rotinas, s\xf3 ter\xe1 de o escrever uma vez. Esta \xe9 a primeira vantagem das sub-rotinas - reduzir a quantidade de c\xf3digo."),(0,t.kt)("p",null,"If the previously described code was a method called ",(0,t.kt)("inlineCode",{parentName:"p"},"MODIFY CUSTOMER"),", you would execute it simply by using the name of the method in another method. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este m\xe9todo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," MODIFY CUSTOMER\n PRINT SELECTION([Customers])\n")),(0,t.kt)("p",null,"Esta capacidade simplifica dramaticamente os seus m\xe9todos. In the example, you do not need to know how the ",(0,t.kt)("inlineCode",{parentName:"p"},"MODIFY CUSTOMER")," method works, just what it does. Esta \xe9 a segunda raz\xe3o para a utiliza\xe7\xe3o de sub-rotinas para esclarecer os seus m\xe9todos. Desta forma, os seus m\xe9todos tornam-se extens\xf5es \xe0 linguagem 4D."),(0,t.kt)("p",null,"If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. Este \xe9 o pr\xf3ximo motivo para utilizar sub-rotinas para facilitar mudan\xe7as nos seus m\xe9todos."),(0,t.kt)("p",null,"Usando sub-rotinas, voc\xea torna o seu c\xf3digo modular. Isto significa simplesmente a divis\xe3o do seu c\xf3digo em m\xf3dulos (sub-rotinas), cada um dos quais executa uma tarefa l\xf3gica. Consider the following code from a checking account database:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," FIND CLEARED CHECKS ` Find the cleared checks\n RECONCILE ACCOUNT ` Reconcile the account\n PRINT CHECK BOOK REPORT ` Print a checkbook report\n")),(0,t.kt)("p",null,"Even for someone who doesn\u2019t know the database, it is clear what this code does. N\xe3o \xe9 necess\xe1rio examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas opera\xe7\xf5es complexas, mas aqui \xe9 apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu c\xf3digo em tarefas l\xf3gicas, ou m\xf3dulos, sempre que poss\xedvel."),(0,t.kt)("h3",n({},{id:"m\xe9todos-associados-aos-objetos"}),"M\xe9todos associados aos objetos"),(0,t.kt)("p",null,"Pode encapsular os seus m\xe9todos de projeto em ",(0,t.kt)("strong",{parentName:"p"},"f\xf3rmula")," objectos e cham\xe1-los dos seus objectos."),(0,t.kt)("p",null,"Os comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"Formula")," ou ",(0,t.kt)("inlineCode",{parentName:"p"},"Formula from string")," permitem-lhe criar objectos de f\xf3rmula nativa que pode encapsular em propriedades de objectos. Permite-lhe implementar m\xe9todos de objectos personalizados."),(0,t.kt)("p",null,"To execute a method stored in an object property, use the ",(0,t.kt)("strong",{parentName:"p"},"( )")," operator after the property name. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//myAlert ALERT("Hello world!")\n')),(0,t.kt)("p",null,"Pode encapsular ",(0,t.kt)("inlineCode",{parentName:"p"},"fullName")," num objecto:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n')),(0,t.kt)("p",null,"Tamb\xe9m se admite a sintaxe com par\xeanteses:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$o["custom_Alert"]() //exibe "Hello world!"\n')),(0,t.kt)("p",null,"Pode tamb\xe9m ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/Concepts/parameters"}),"passar par\xe2metros")," \xe0 sua f\xf3rmula quando lhe chamar utilizando $1, $2\u2026 , tal como nos m\xe9todos de projecto 4D:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//fullName method C_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n')),(0,t.kt)("p",null,"Depois ",(0,t.kt)("inlineCode",{parentName:"p"},"myAlert")," pode ser encapsulado em qualquer objecto e chamado:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith")\n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n')),(0,t.kt)("p",null,"Combinado com a fun\xe7\xe3o",(0,t.kt)("inlineCode",{parentName:"p"},"This"),", tais m\xe9todos de objectos permitem escrever um poderoso c\xf3digo gen\xe9rico. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//fullName2 method C_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n')),(0,t.kt)("p",null,"Ent\xe3o o m\xe9todo atua como um novo atributo calculado que pode ser adicionado a outros atributos:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName()\n//$result = "Jim Wesson"\n')),(0,t.kt)("p",null,"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Chamar s\xf3 a propriedade de objeto devolver\xe1 uma nova refer\xeancia \xe0 f\xf3rmula (e n\xe3o a executar\xe1):"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$o:=$f.message //devolve o objeto f\xf3rmula em $o\n")),(0,t.kt)("h3",n({},{id:"m\xe9todos-do-menu"}),"M\xe9todos do menu"),(0,t.kt)("p",null,'Um m\xe9todo de menu \xe9 invocado quando se selecciona o comando do menu personalizado ao qual est\xe1 anexado. Atribui-se o m\xe9todo ao comando menu usando o editor de menu ou um comando do tema "Menus". O m\xe9todo executa-se quando o comando do menu \xe9 escolhido. This process is one of the major aspects of customizing a database. By creating custom menus with menu methods that perform specific actions, you personalize your database.'),(0,t.kt)("p",null,"Os comandos personalizados do menu podem causar a realiza\xe7\xe3o de uma ou mais actividades. Por exemplo, um comando de menu para introduzir registos pode chamar um m\xe9todo que executa duas tarefas: exibir o formul\xe1rio de introdu\xe7\xe3o apropriado, e chamar o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," at\xe9 que o usu\xe1rio cancele a atividade de introdu\xe7\xe3o de dados."),(0,t.kt)("p",null,"A automatiza\xe7\xe3o de sequ\xeancias de actividades \xe9 uma capacidade muito poderosa da linguagem de programa\xe7\xe3o. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database."),(0,t.kt)("h3",n({},{id:"m\xe9todos-processo"}),"M\xe9todos Processo"),(0,t.kt)("p",null,"Um ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo de processo")," \xe9 um m\xe9todo de projecto que \xe9 chamado quando um processo \xe9 iniciado. O processo dura apenas enquanto o m\xe9todo do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um m\xe9todo de menu anexado a um comando de menu com a propriedade ",(0,t.kt)("em",{parentName:"p"},"Start a New Process"),"  \xe9 tamb\xe9m o m\xe9todo de processo para o processo recentemente iniciado."),(0,t.kt)("h3",n({},{id:"m\xe9todos-de-captura-de-eventos-e-erros"}),"M\xe9todos de captura de eventos e erros"),(0,t.kt)("p",null,"Um ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo de capta\xe7\xe3o de eventos")," decorre num processo separado como m\xe9todo de capta\xe7\xe3o de eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdu\xe7\xe3o de dados, 4D detecta toques no teclado e cliques, depois chama os m\xe9todos corretos de objetos e formul\xe1rios para que possa responder adequadamente aos eventos a partir destes m\xe9todos. Para mais informa\xe7\xf5es, ver a descri\xe7\xe3o do comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),"."),(0,t.kt)("p",null,"Um ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo de apanhar erros")," \xe9 um m\xe9todo de projecto baseado na interrup\xe7\xe3o. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"."),(0,t.kt)("h2",n({},{id:"m\xe9todos-associados-aos-objetos-1"}),"M\xe9todos associados aos objetos"),(0,t.kt)("p",null,"Os m\xe9todos de projecto podem chamar-se a si pr\xf3prios. Por exemplo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O m\xe9todo A pode chamar o m\xe9todo B que pode chamar A, por isso A chamar\xe1 novamente B e assim por diante."),(0,t.kt)("li",{parentName:"ul"},"Um m\xe9todo pode chamar-se a si pr\xf3prio.")),(0,t.kt)("p",null,"A isto chama-se recorr\xeancia. A linguagem 4D suporta plenamente a recorr\xeancia."),(0,t.kt)("p",null,"Aqui um exemplo simples. Digamos que tem uma tabela ",(0,t.kt)("inlineCode",{parentName:"p"},"[Amigos e Parentes]")," composta por este conjunto de campos extremamente simplificado:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]Name")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]ChildrensName"))),(0,t.kt)("p",null,'Para este exemplo, assumimos que os valores nos campos s\xe3o \xfanicos (n\xe3o h\xe1 duas pessoas com o mesmo nome). Dado um nome, quer construir a frase "Um amigo meu, Jo\xe3o que \xe9 o filho de Paulo que \xe9 o filho de Jane que \xe9 o filho de Robert que \xe9 o filho de Eleanor, faz isto para viver":'),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Pode construir a frase desta forma:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n')),(0,t.kt)("ol",n({},{start:2}),(0,t.kt)("li",{parentName:"ol"},"Tamb\xe9m se pode construir desta forma:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n    End if\n End if\n    End if\n End if\n')),(0,t.kt)("p",null,"com a fun\xe7\xe3o recursiva ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogia de")," listada aqui:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  ` M\xe9todo projecto Genealogia do \n  ` Genealogia de ( String ) -> Text\n  ` Genealogia de ( Nome ) -> Parte de frase\n\n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n')),(0,t.kt)("p",null,"Note-se o ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogia do m\xe9todo")," que se autodenomina."),(0,t.kt)("p",null,"A primeira forma \xe9 um ",(0,t.kt)("strong",{parentName:"p"},"algoritmo iterativo"),". A segunda via \xe9 um ",(0,t.kt)("strong",{parentName:"p"},"algoritmo recursivo"),"."),(0,t.kt)("p",null,"Ao implementar c\xf3digo para casos como o exemplo anterior, \xe9 importante notar que \xe9 sempre poss\xedvel escrever m\xe9todos usando itera\xe7\xe3o ou recursividade. Tipicamente, a recurs\xe3o fornece um c\xf3digo mais conciso, leg\xedvel e de f\xe1cil manuten\xe7\xe3o, mas a sua utiliza\xe7\xe3o n\xe3o \xe9 obrigat\xf3ria."),(0,t.kt)("p",null,"Alguns usos t\xedpicos da recursividade em 4D s\xe3o:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo."),(0,t.kt)("li",{parentName:"ul"},"Navegar documentos e pastas no seu disco, utilizando os comandos ",(0,t.kt)("inlineCode",{parentName:"li"},"FOLDER LIST")," e ",(0,t.kt)("inlineCode",{parentName:"li"},"DOCUMENT LIST"),". Uma pasta pode conter pastas e documentos, as pr\xf3prias subpastas podem conter pastas e documentos, e assim por diante.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Importante:")," As chamadas recursivas devem sempre terminar em algum momento. No exemplo, o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogia de"),' deixa de se chamar a si pr\xf3prio quando a consulta n\xe3o devolve registos. Sem este teste de condi\xe7\xe3o, o m\xe9todo chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espa\xe7o para "empilhar" as chamadas (bem como os par\xe2metros e vari\xe1veis locais utilizados no m\xe9todo).'),(0,t.kt)("h2",n({},{id:"m\xe9todos-especializados"}),"M\xe9todos especializados"),(0,t.kt)("p",null,"In addition to generic ",(0,t.kt)("strong",{parentName:"p"},"project methods"),", 4D supports several specific method types, that are automatically called depending on events:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Contexto de chamada"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Aceita par\xe2metros"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo objecto (widget)")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, quando um evento envolve a forma a que o m\xe9todo est\xe1 ligado"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Propriedade de um objecto de formul\xe1rio (tamb\xe9m chamado widget)")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo formul\xe1rio")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, quando um evento envolve o objecto ao qual o m\xe9todo est\xe1 ligado"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Propriedade de um formul\xe1rio. Pode-se utilizar um m\xe9todo de formul\xe1rio para gerir dados e objectos, mas \xe9 geralmente mais simples e mais eficiente utilizar um m\xe9todo de objecto para estes fins.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"No"),"(default): No highlight"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Propriedade de uma tabela. Triggers are methods that can prevent \u201cillegal\u201d operations with the records of your database.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo base")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, quando ocorre um evento de sess\xe3o de trabalho"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Sim (pr\xe9-definido)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Existem 16 m\xe9todos base em 4D. Ver sec\xe7\xe3o M\xe9todos base de dados")))))}p.isMDXComponent=!0}}]);