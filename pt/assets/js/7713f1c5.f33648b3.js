"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2518"],{258806:function(e,o,a){a.r(o),a.d(o,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"Concepts/parameters","title":"Par\xe2metros","description":"Utiliza\xe7\xe3o de par\xe2metros","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/parameters.md","sourceDirName":"Concepts","slug":"/Concepts/parameters","permalink":"/docs/pt/18/Concepts/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fparameters.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"parameters","title":"Par\xe2metros"},"sidebar":"docs","previous":{"title":"P\xe1gina M\xe9todos","permalink":"/docs/pt/18/Concepts/methods"},"next":{"title":"Objetos e cole\xe7\xf5es compartilhados","permalink":"/docs/pt/18/Concepts/shared"}}'),s=a("785893"),n=a("250065");let t={id:"parameters",title:"Par\xe2metros"},d=void 0,i={},c=[{value:"Utiliza\xe7\xe3o de par\xe2metros",id:"utiliza\xe7\xe3o-de-par\xe2metros",level:2},{value:"Express\xf5es suportadas",id:"express\xf5es-suportadas",level:3},{value:"Fun\xe7\xf5es",id:"fun\xe7\xf5es",level:2},{value:"Declara\xe7\xe3o de par\xe2metros",id:"declara\xe7\xe3o-de-par\xe2metros",level:2},{value:"Valores ou refer\xeancias",id:"valores-ou-refer\xeancias",level:2},{value:"Casos particulares: objetos e cole\xe7\xf5es",id:"casos-particulares-objetos-e-cole\xe7\xf5es",level:3},{value:"Par\xe2metros com nomes",id:"par\xe2metros-com-nomes",level:2},{value:"Par\xe2metros opcionais",id:"par\xe2metros-opcionais",level:2},{value:"Indirec\xe7\xe3o de par\xe2metros",id:"indirec\xe7\xe3o-de-par\xe2metros",level:2},{value:"Declara\xe7\xe3o de par\xe2metros gen\xe9ricos",id:"declara\xe7\xe3o-de-par\xe2metros-gen\xe9ricos",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-par\xe2metros",children:"Utiliza\xe7\xe3o de par\xe2metros"}),"\n",(0,s.jsx)(o.p,{children:"\xc9 frequente ter de passar dados para os seus m\xe9todos. Isso \xe9 facilmente feito com par\xe2metros."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Parameters"})," (or ",(0,s.jsx)(o.strong,{children:"arguments"}),") are pieces of data that a method needs in order to perform its task. Os termos ",(0,s.jsx)(o.em,{children:"par\xe1metros"})," e ",(0,s.jsx)(o.em,{children:"argumentos"}),' s\xe3o utilizados indiferentemente neste manual. Par\xe2metros tamb\xe9m s\xe3o passados para comandos integrados 4D. Neste exemplo, a stirng "Hello" \xe9 um argumento para o comando integrado ',(0,s.jsx)(o.code,{children:"ALERT"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'ALERT("Hello")\n'})}),"\n",(0,s.jsx)(o.p,{children:"Os par\xe2metros s\xe3o passados da mesma forma aos m\xe9todos. For example, if a project method named DO SOMETHING accepted three parameters, a call to the method might look like this:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"DO SOMETHING(WithThis;AndThat;ThisWay)\n"})}),"\n",(0,s.jsx)(o.p,{children:"Os par\xe2metros s\xe3o separados por ponto e v\xedrgula (;). Seu valor \xe9 avaliado no momento da chamada."}),"\n",(0,s.jsx)(o.p,{children:"In the subroutine (the method that is called), the value of each parameter is automatically copied into sequentially numbered local variables: $1, $2, $3, and so on. A numera\xe7\xe3o das vari\xe1veis locais representam a ordem dos par\xe2metros."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //Code of the method DO SOMETHING\n  //Assuming all parameters are of the text type\n C_TEXT($1;$2;$3)\n ALERT("I received "+$1+" and "+$2+" and also "+$3)\n  //$1 contains the WithThis parameter\n  //$2 contains the AndThat parameter\n  //$3 contains the ThisWay parameter\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Dentro da subrotina, pode utilizar os par\xe2metros $1, $2... da mesma maneira que utilizaria qualquer outra vari\xe1vel local. Entretanto, no caso de usar comandos que modifiquem o valor da vari\xe1vel passada como par\xe2metro (por exemplo ",(0,s.jsx)(o.code,{children:"Find in field"}),"), os par\xe2metros $1, $2, etc. n\xe3o podem ser utilizardos diretamente. Primeiro deve copi\xe1-los nas vari\xe1veis locais padr\xe3o (por exemplo: ",(0,s.jsx)(o.code,{children:"$myvar:=$1"}),")."]}),"\n",(0,s.jsx)(o.p,{children:"Os mesmos princ\xedpios s\xe3o usados quando m\xe9todos forem executados atrav\xe9s de comandos dedicados, por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  \n//passe a data !05/05/10! date as parameter to the SetCalendarDate  \n// in the context of a subform\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note:"})," For a good execution of code, you need to make sure that all ",(0,s.jsx)(o.code,{children:"$1"}),", ",(0,s.jsx)(o.code,{children:"$2"}),"... parameters are correctly declared within called methods (see ",(0,s.jsx)(o.a,{href:"#declaring-parameters",children:"Declaring parameters"})," below)."]}),"\n",(0,s.jsx)(o.h3,{id:"express\xf5es-suportadas",children:"Express\xf5es suportadas"}),"\n",(0,s.jsxs)(o.p,{children:["You can use any ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/quick-tour#expression-types",children:"expression"})," as parameter, except:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"tabelas"}),"\n",(0,s.jsx)(o.li,{children:"arrays"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Tables or array expressions can only be passed ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/pointer#pointers-as-parameters-to-methods",children:"as reference using a pointer"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"fun\xe7\xf5es",children:"Fun\xe7\xf5es"}),"\n",(0,s.jsx)(o.p,{children:"Os dados podem ser devolvidos pelos m\xe9todos. Um m\xe9todo que retorna um valor \xe9 chamado uma fun\xe7\xe3o."}),"\n",(0,s.jsx)(o.p,{children:"4D or 4D Plug-in commands that return a value are also called functions."}),"\n",(0,s.jsxs)(o.p,{children:["For example, the following line is a statement that uses the built-in function, ",(0,s.jsx)(o.code,{children:"Length"}),", to return the length of a string. As instru\xe7\xf5es p\xf5e o valor devolvido por ",(0,s.jsx)(o.code,{children:"Length"})," em uma vari\xe1vel chamada ",(0,s.jsx)(o.em,{children:"MyLength"}),". Esta \xe9 a instru\xe7\xe3o:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'MyLength:=Length("How did I get here?")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Qualquer subrotina pode retornar um valor. The value to be returned is put into the local variable ",(0,s.jsx)(o.code,{children:"$0"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["For example, the following function, called ",(0,s.jsx)(o.code,{children:"Uppercase4"}),", returns a string with the first four characters of the string passed to it in uppercase:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$0:=Uppercase(Substring($1;1;4))+Substring($1;5)\n"})}),"\n",(0,s.jsx)(o.p,{children:"Segue-se um exemplo que utiliza a fun\xe7\xe3o Uppercase4:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'NewPhrase:=Uppercase4("This is good.")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["In this example, the variable ",(0,s.jsx)(o.em,{children:"NewPhrase"})," gets \u201CTHIS is good.\u201D"]}),"\n",(0,s.jsxs)(o.p,{children:["The function result, ",(0,s.jsx)(o.code,{children:"$0"}),", is a local variable within the subroutine. Pode ser usado como tal dentro da subrotina. For example, in the previous ",(0,s.jsx)(o.code,{children:"DO SOMETHING"})," example, ",(0,s.jsx)(o.code,{children:"$0"})," was first assigned the value of ",(0,s.jsx)(o.code,{children:"$1"}),", then used as parameter to the ",(0,s.jsx)(o.code,{children:"ALERT"})," command. Dentro de la subrotina, pode utilizar ",(0,s.jsx)(o.code,{children:"$0"})," da mesma maneira que utilizaria qualquer outra vari\xe1vel local. \xc9 4D quem devolve o valor de ",(0,s.jsx)(o.code,{children:"$0"})," (como estiver quando a subrotina terminar) ao m\xe9todo chamado."]}),"\n",(0,s.jsx)(o.h2,{id:"declara\xe7\xe3o-de-par\xe2metros",children:"Declara\xe7\xe3o de par\xe2metros"}),"\n",(0,s.jsxs)(o.p,{children:["Even if it is not mandatory in ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/interpreted-compiled",children:"interpreted mode"}),", you must declare each parameter in the called methods to prevent any trouble."]}),"\n",(0,s.jsxs)(o.p,{children:["In the following example, the ",(0,s.jsx)(o.code,{children:"OneMethodAmongOthers"})," project method declares three parameters:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"  // OneMethodAmongOthers Project Method\n  // OneMethodAmongOthers ( Real ; Date { ; Long } )\n  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )\n\n C_REAL($1) // 1st parameter is of type Real\n C_DATE($2) // 2nd parameter is of type Date\n C_LONGINT($3) // 3rd parameter is of type Long Integer\n"})}),"\n",(0,s.jsxs)(o.p,{children:["No exemplo abaixo, o m\xe9todo projeto ",(0,s.jsx)(o.code,{children:"Capitalize"}),"  aceita um par\xe2metro texto e devolve um resultado texto:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"  // M\xe9todo projeto Mai\xfasculas\n  // Mai\xfasculas( Texto ) -> Texto\n  // Mai\xfasculas( Cadena fuente ) -> String com a primeira letra em mai\xfascula\n\n C_TEXT($0;$1)\n $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))\n"})}),"\n",(0,s.jsxs)(o.p,{children:["A utiliza\xe7\xe3o de comandos tais como ",(0,s.jsx)(o.code,{children:"New process"})," com m\xe9todos processo que aceitem par\xe2metros tamb\xe9m requer que os par\xe2metros se declarem explicitamente no m\xe9todo chamado. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'C_TEXT($string)\nC_LONGINT($idProc;$int)\nC_OBJECT($obj)\n\n$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)\n'})}),"\n",(0,s.jsx)(o.p,{children:'Este c\xf3digo pode ser executado em modo compilado s\xf3 se "foo_method" declarar seus par\xe2metros:'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"//foo_method C_TEXT($1)\nC_LONGINT($2)\nC_OBJECT($3)\n...\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note:"}),' For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Dentro deste m\xe9todo, pode pr\xe9-declarar os par\xe2metros de cada m\xe9todo, por exemplo:']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_REAL(OneMethodAmongOthers;$1)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["See ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/interpreted-compiled",children:"Interpreted and compiled modes"})," page for more information."]}),"\n",(0,s.jsx)(o.p,{children:'A declara\xe7\xe3o de par\xe2metros tamb\xe9m \xe9 obrigat\xf3iria nos contextos abaixo (esses contextos n\xe3o s\xe3o compat\xedveis com declara\xe7\xf5es em um m\xe9todo "Compiler"):'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Database methods For example, the ",(0,s.jsx)(o.code,{children:"On Web Connection Database Method"})," receives six parameters, $1 to $6, of the data type Text. No come\xe7o do m\xe9todo database, tem que escrever (mesmo se todos os par\xe2metros n\xe3o forem usados):"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// On Web Connection C_TEXT($1;$2;$3;$4;$5;$6)\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser declar\xe1-lo, deve fazer isso no pr\xf3prio trigger."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Form objects that accept the ",(0,s.jsx)(o.code,{children:"On Drag Over"})," form event The $0 parameter (Longint), which is the result of the ",(0,s.jsx)(o.code,{children:"On Drag Over"})," form event, is typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser fazer a declara\xe7\xe3o, deve fazer isso no m\xe9todo objeto. ",(0,s.jsx)(o.strong,{children:"Nota:"})," o compilador n\xe3o inicializa o par\xe2metro $0. Portanto, logo que utilizar o evento formul\xe1rio ",(0,s.jsx)(o.code,{children:"On Drag Over"}),", deve inicializar $0. Por exemplo:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_LONGINT($0)\n If(Form event=On Drag Over)\n    $0:=0\n    ...\n    If($DataType=Is picture)\n       $0:=-1\n    End if\n    ...\n End if\n"})}),"\n",(0,s.jsx)(o.h2,{id:"valores-ou-refer\xeancias",children:"Valores ou refer\xeancias"}),"\n",(0,s.jsxs)(o.p,{children:["When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the ",(0,s.jsx)(o.strong,{children:"resulting value"})," to the $1, $2... local variables in the subroutine (see ",(0,s.jsx)(o.a,{href:"#using-parameters",children:"Using parameters"}),"). As vari\xe1veis locais/par\xe2metros n\xe3o s\xe3o os campos, vari\xe1veis ou express\xf5es realmente passadas pelo m\xe9todo chamada; eles apenas cont\xe9m os valores que foram passados. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'    //Here is some code from the method MY_METHOD DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams" ALERT([People]Name)\n\n    //Here is the code of the method DO_SOMETHING\n $1:=Uppercase($1)\n ALERT($1)\n'})}),"\n",(0,s.jsxs)(o.p,{children:["A caixa de alerta mostrada por ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"}),' dir\xe1 "WILLIAMS" e a caixa de alerta mostrada por ',(0,s.jsx)(o.code,{children:"MY_METHOD"}),' dir\xe1 "williams". O m\xe9todo mudou localmente o valor do par\xe2metro $1, ma isso n\xe3o afeta o valor de campo ',(0,s.jsx)(o.code,{children:"[People]Name"})," passado como par\xe2metro pelo m\xe9todo ",(0,s.jsx)(o.code,{children:"MY_METHOD"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["H\xe1 duas formas de fazer com que o m\xe9todo ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"})," mude o valor de campo:"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Ao inv\xe9s de passar o campo para o m\xe9todo, passa um ponteiro para ele, por isso pode escrever:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //Esta \xe9 uma parte do c\xf3digo do m\xe9todo MY_METHOD\n DO_SOMETHING(->[People]Name) //Suponha que o valor de [People]Name value seja "williams"\n ALERT([People]Last Name)\n\n  //Este \xe9 o c\xf3digo do m\xe9todo DO_SOMETHING\n $1->:=Uppercase($1->)\n ALERT($1->)\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Aqui \xe9 o par\xe2metro n\xe3o for o campo, mas sim um ponteiro ao mesmo. Portanto, dentro do m\xe9todo ",(0,s.jsx)(o.code,{children:"DO SOMETHING"}),", $1 j\xe1 n\xe3o \xe9 o valor do campo mas um ponteiro ao campo. O objeto ",(0,s.jsx)(o.strong,{children:"referenciado"}),' por $1 ($1-> no c\xf3digo anterior) \xe9 o campo real. Portanto, mudar o objeto referenciado vai al\xe9m do escopo da subrotina, e o campo real n\xe3o \xe9 afetado. Neste exemplo, as duas caixas de alerta dir\xe3o "WILLIAMS".']}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["Ao inv\xe9s de ter o m\xe9todo ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"}),' "fa\xe7a algo", pode reescrever o m\xe9todo para que devolva um valor. Portanto escreveria:']}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'    //Esta \xe9 uma parte do c\xf3digo do m\xe9todo MY_METHO\n [People]Name:=DO_SOMETHING([People]Name) //Suponha que o valor de [People]Name seja "williams"\n ALERT([People]Name)\n\n    //Este \xe9 o c\xf3digo do m\xe9todo DO_SOMETHING\n $0:=Uppercase($1)\n ALERT($0)\n'})}),"\n",(0,s.jsxs)(o.p,{children:['Esta segunda t\xe9cnica de retornar um valor por uma subrotina se chama " utilizar uma fun\xe7\xe3o" \xc9 descrita no par\xe1grafo ',(0,s.jsx)(o.a,{href:"#functions",children:"Fun\xe7\xf5es"}),". Isso \xe9 descrito no par\xe1grafo ",(0,s.jsx)(o.a,{href:"#functions",children:"Fun\xe7\xf5es"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"casos-particulares-objetos-e-cole\xe7\xf5es",children:"Casos particulares: objetos e cole\xe7\xf5es"}),"\n",(0,s.jsxs)(o.p,{children:["Deve prestar aten\xe7\xe3o ao fato de que os tipos de dados Objeto e Cole\xe7\xe3o s\xf3 podem ser manejados atrav\xe9s de uma refer\xeancia (ou seja, um  ",(0,s.jsx)(o.em,{children:"ponteiro"})," interno)."]}),"\n",(0,s.jsxs)(o.p,{children:["Por isso, quando usar esses tipos de dados como par\xe2metros, ",(0,s.jsx)(o.code,{children:"$1, $2..."})," n\xe3o cont\xe9m ",(0,s.jsx)(o.em,{children:"valores"})," mas sim ",(0,s.jsx)(o.em,{children:"refer\xeancias"}),". A modifica\xe7\xe3o do valor dos par\xe2metros ",(0,s.jsx)(o.code,{children:"$1, $2..."})," dentro da subrotina se propagar\xe1 a qualquer lugar onde se utilize o objeto ou cole\xe7\xe3o fonte. This is the same principle as for ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/pointer#pointers-as-parameters-to-methods",children:"pointers"}),", except that ",(0,s.jsx)(o.code,{children:"$1, $2..."})," parameters do not need to be dereferenced in the subroutine."]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, considere o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"})," que cria um objeto e o envia como par\xe2metro:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,s.jsxs)(o.p,{children:["O m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," adiciona 10 ao atributo Age do objeto recebido"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"  //ChangeAge\n C_OBJECT($1)\n $1.Age:=$1.Age+10\n ALERT(String($1.Age))\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Quando executar o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"}),', as duas caixas de alerta dir\xe3o "50" j\xe1 que a mesma refer\xeancia de objeto \xe9 manejada por ambos m\xe9todos.']}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"4D Server:"}),' quando s\xe3o passados par\xe2metros entre m\xe9todos que n\xe3o s\xe3o executados na mesma m\xe1quina (utilizando por exemplo a op\xe7\xe3o "Executar no servidor"), as referencias n\xe3o s\xe3o utiliz\xe1veis. Nestes casos, s\xe3o enviadas c\xf3pias dos par\xe2metros de objetos e cole\xe7\xf5es ao inv\xe9s de refer\xeancias.']}),"\n",(0,s.jsx)(o.h2,{id:"par\xe2metros-com-nomes",children:"Par\xe2metros com nomes"}),"\n",(0,s.jsxs)(o.p,{children:["A utiliza\xe7\xe3o de objetos como par\xe2metros permite manejar ",(0,s.jsx)(o.strong,{children:"par\xe2metros com nome"}),". Este estilo de programa\xe7\xe3o \xe9 simples, flex\xedvel e f\xe1cil de ler."]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, utilizando o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,s.jsxs)(o.p,{children:["No m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," pode escrever:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Isso oferece uma poderosa maneira de definir ",(0,s.jsx)(o.a,{href:"#optional-parameters",children:"par\xe2metros opcionais"})," (ver tamb\xe9m abaixo). Para manejar os par\xe2metros que faltam, pode:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["veja se todos os par\xe2metros esperados s\xe3o fornecidos comparando-os com o valor ",(0,s.jsx)(o.code,{children:"Null"}),", ou"]}),"\n",(0,s.jsx)(o.li,{children:"pr\xe9-definir os valores dos par\xe2metros, ou"}),"\n",(0,s.jsx)(o.li,{children:"us\xe1-los como valores vazios."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["No m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," anterior, as propriedades Age e Name s\xe3o obrigat\xf3rias e produzir\xe3o erross se faltar\xe3o. Para evitar isso, pode escrever:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsx)(o.p,{children:'Ambos par\xe2metros s\xe3o opcionais: se n\xe3o forem preenchidos, o resultado ser\xe1 "\xe9 10 anos de idade", mas nenhum erro ser\xe1 gerado.'}),"\n",(0,s.jsx)(o.p,{children:"Finalmente, com par\xe2metros com nome, a manuten\xe7\xe3o ou a reprodu\xe7\xe3o das aplica\xe7\xf5es \xe9 muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos n\xe3o funciona sempre. You need another parameter to set how many years to add. You write: Escreva: Escreve:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\nC_OBJECT($1;$para)\n$para:=$1  \nIf ($para.toAdd=Null)\n    $para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsx)(o.p,{children:"N\xe3o precisar\xe1 mudar seu c\xf3digo existente. Sempre funcionar\xe1 como na vers\xe3o anterior, mas se for necess\xe1rio, \xe9 poss\xedvel usar outro valor diferente de 10 anos."}),"\n",(0,s.jsx)(o.p,{children:"Com vari\xe1veis com nome, qualquer par\xe2metro pode ser opcional. No exemplo acima, todos os par\xe2metros s\xe3o opcionais e qualquer pode ser dado em qualquer ordem."}),"\n",(0,s.jsx)(o.h2,{id:"par\xe2metros-opcionais",children:"Par\xe2metros opcionais"}),"\n",(0,s.jsxs)(o.p,{children:["No manual ",(0,s.jsx)(o.em,{children:"Linguagem de 4D"}),", os caracteres { } (chaves) indicam par\xe2metros opcionais. Por exemplo, ",(0,s.jsx)(o.code,{children:"ALERT (message{; okButtonTitle})"})," significa que o par\xe2metro ",(0,s.jsx)(o.em,{children:"okButtonTitle"})," pode omitir o chamado ao comando. Pode fazer a chamada de duas maneiras:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter\n'})}),"\n",(0,s.jsx)(o.p,{children:"4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. Uma boa pr\xe1tica \xe9 atribuir valores padr\xe3o a par\xe2metros n\xe3o utilizados."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["When optional parameters are needed in your methods, you might also consider using ",(0,s.jsx)(o.a,{href:"#named-parameters",children:"Named parameters"})," which provide a flexible way to handle variable numbers of parameters."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Utilizando o comando ",(0,s.jsx)(o.code,{children:"Count parameters"})," desde dentro do m\xe9todo chamado, pode detectar o n\xfamero real de par\xe2metros e realizar diferentes opera\xe7\xf5es dependendo do que tenha recebido."]}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma \xe1rea de 4D Write Pro:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// M\xe9todo projeto APPEND TEXT\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n C_TEXT($1;$2)\n C_OBJECT($3)\n\n ALERT($1)\n If(Count parameters>=3)\n    WP SET TEXT($3;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($2;$1)\n    End if\n End if\n"})}),"\n",(0,s.jsx)(o.p,{children:"Depois de adicionar este m\xe9todo projeto a sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea\n'})}),"\n",(0,s.jsx)(o.h2,{id:"indirec\xe7\xe3o-de-par\xe2metros",children:"Indirec\xe7\xe3o de par\xe2metros"}),"\n",(0,s.jsxs)(o.p,{children:["4D project methods accept a variable number of parameters of the same type, starting from the right. Esse princ\xedpio \xe9 chamado ",(0,s.jsx)(o.strong,{children:"indire\xe7\xe3o dos par\xe2metros"}),". Using the ",(0,s.jsx)(o.code,{children:"Count parameters"})," command you can then address those parameters with a ",(0,s.jsx)(o.code,{children:"For...End for"})," loop and the parameter indirection syntax."]}),"\n",(0,s.jsxs)(o.p,{children:["In the following example, the project method ",(0,s.jsx)(o.code,{children:"SEND PACKETS"})," accepts a time parameter followed by a variable number of text parameters:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"  //M\xe9todo projeto SEND PACKETS\n  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )\n  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )\n\n C_TIME($1)\n C_TEXT(${2})\n C_LONGINT($vlPacket)\n\n For($vlPacket;2;Count parameters)\n    SEND PACKET($1;${$vlPacket})\n End for\n"})}),"\n",(0,s.jsxs)(o.p,{children:["A indire\xe7\xe3o de par\xe2metros se gerencia melhor se respeitar a conven\xe7\xe3o abaixo: se s\xf3 alguns dos par\xe2metros forem endere\xe7ados por indire\xe7\xe3o, devem ser passados depois dos outros. Within the method, an indirection address is formatted: ${$i}, where $i is a numeric variable. ${$i} \xe9 chamado ",(0,s.jsx)(o.strong,{children:"par\xe2metro gen\xe9rico"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Cada vez que chamar a esse m\xe9todo, o n\xfamero de valores a somar pode variar. Devemos passar os valores como par\xe2metros ao m\xe9todo e o formato em forma de string dos caracteres. O n\xfamero de valores pode variar de chamada a chamada."}),"\n",(0,s.jsx)(o.p,{children:"Esta fun\xe7\xe3o \xe9 chamada da seguinte forma:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24)\n\n'})}),"\n",(0,s.jsx)(o.p,{children:"In this case, the calling method will get the string \u201C182.70\u201D, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values."}),"\n",(0,s.jsxs)(o.p,{children:["Aqui est\xe1 a fun\xe7\xe3o, denominada ",(0,s.jsx)(o.code,{children:"MySum"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $Sum:=0\n For($i;2;Count parameters)\n    $Sum:=$Sum+${$i}\n End for\n $0:=String($Sum;$1)\n"})}),"\n",(0,s.jsx)(o.p,{children:"Esta fun\xe7\xe3o pode agora ser chamada de v\xe1rias formas:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24)\n Result:=MySum("000";1;18;4;23;17)\n'})}),"\n",(0,s.jsx)(o.h3,{id:"declara\xe7\xe3o-de-par\xe2metros-gen\xe9ricos",children:"Declara\xe7\xe3o de par\xe2metros gen\xe9ricos"}),"\n",(0,s.jsx)(o.p,{children:"Da mesma forma que com outras vari\xe1veis locais, n\xe3o \xe9 obrigat\xf3rio declarar os par\xe2metros gen\xe9ricos mediante uma diretiva de compilador. Entretanto \xe9 recomendado que se evite qualquer ambiguidade. Para declarar estes par\xe2metros, se utiliza uma diretriz do compilador \xe0 qual se passa ${N} como par\xe2metro, onde N especifica o primeiro par\xe2metro gen\xe9rico."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_LONGINT(${4})\n"})}),"\n",(0,s.jsx)(o.p,{children:"Esse comando significa que a partir do quarto par\xe2metro (inclu\xeddo), o m\xe9todo pode receber um n\xfamero vari\xe1vel de par\xe2metros de tipo longint. $1, $2 e $3 podem ser de qualquer tipo de dados. Entretanto, se usar $2 por indire\xe7\xe3o, o tipo de dados usados ser\xe1 do tipo gen\xe9rico. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note:"})," The number in the declaration has to be a constant and not a variable."]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return t}});var r=a(667294);let s={},n=r.createContext(s);function t(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);