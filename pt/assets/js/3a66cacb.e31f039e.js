"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8399"],{933906:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>t,contentTitle:()=>i});var n=JSON.parse('{"id":"Concepts/identifiers","title":"Identificadores","description":"Esta se\xe7\xe3o descreve as conven\xe7\xf5es e regras para nomear os v\xe1rios elementos da linguagem 4D (vari\xe1veis, tabelas, objetos, formul\xe1rios, etc)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Concepts/identifiers.md","sourceDirName":"Concepts","slug":"/Concepts/identifiers","permalink":"/docs/pt/20-R8/Concepts/identifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"identifiers","title":"Identificadores"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/pt/20-R8/Concepts/plug-ins"},"next":{"title":"Pathnames","permalink":"/docs/pt/20-R8/Concepts/paths"}}'),r=s("785893"),a=s("250065");let d={id:"identifiers",title:"Identificadores"},i=void 0,c={},t=[{value:"Arrays",id:"arrays",level:2},{value:"Classes",id:"classes",level:2},{value:"Fun\xe7\xf5es",id:"fun\xe7\xf5es",level:2},{value:"Propriedades dos objectos",id:"propriedades-dos-objectos",level:2},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"M\xe9todos projeto",id:"m\xe9todos-projeto",level:2},{value:"Tabela",id:"tabela",level:2},{value:"Vari\xe1veis.",id:"vari\xe1veis",level:2},{value:"Compatibidade",id:"compatibidade",level:3},{value:"Outros nomes",id:"outros-nomes",level:2}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Esta se\xe7\xe3o descreve as conven\xe7\xf5es e regras para nomear os v\xe1rios elementos da linguagem 4D (vari\xe1veis, tabelas, objetos, formul\xe1rios, etc)"}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Se forem utilizados caracteres n\xe3o romanos nos nomes dos identificadores, o seu comprimento m\xe1ximo pode ser inferior."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"arrays",children:"Arrays"}),"\n",(0,r.jsxs)(o.p,{children:["Os nomes dos arrays seguem as mesmas regras que as ",(0,r.jsx)(o.a,{href:"#variables",children:"vari\xe1veis"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"classes",children:"Classes"}),"\n",(0,r.jsx)(o.p,{children:"Um nome de processo pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsx)(o.p,{children:"O nome de uma classe deve estar em conformidade com as regras normais de nomea\xe7\xe3o de propriedades para nota\xe7\xe3o de pontos."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["N\xe3o se recomenda dar o mesmo nome a uma classe e a ",(0,r.jsx)(o.a,{href:"#tables-and-fields",children:"tabela de base de dados"}),", a fim de evitar qualquer conflito."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"fun\xe7\xf5es",children:"Fun\xe7\xf5es"}),"\n",(0,r.jsx)(o.p,{children:"Nomes de fun\xe7\xe3o devem estar em conformidade com as regras normais de nomea\xe7\xe3o de propriedades para nota\xe7\xe3o de pontos."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:'**Dica: Come\xe7ar o nome da fun\xe7\xe3o com um caractere de sublinhado ("_") excluir\xe1 a fun\xe7\xe3o dos recursos de preenchimento autom\xe1tico no editor de c\xf3digo 4D.'}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades-dos-objectos",children:"Propriedades dos objectos"}),"\n",(0,r.jsxs)(o.p,{children:["O nome de uma propriedade de objeto (tamb\xe9m chamada de ",(0,r.jsx)(o.em,{children:"atributo"})," de objeto) pode conter at\xe9 255 caracteres."]}),"\n",(0,r.jsxs)(o.p,{children:["As propriedades dos objetos podem fazer refer\xeancia a valores escalares, elementos ORDA, fun\xe7\xf5es de classe, outros objetos, etc. Seja qual for sua natureza, os nomes das propriedades do objeto devem seguir as seguintes regras ",(0,r.jsxs)(o.strong,{children:["se voc\xea quiser usar a ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/Concepts/object#propriedades-do-objeto",children:"nota\xe7\xe3o de ponto"})]}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:'Um nome deve come\xe7ar por um caractere alfab\xe9tico, um subscrito ou um sinal de d\xf3lar ("$") (lembre que um sinal de d\xf3lar pode denotar um elemento local, ver abaixo).'}),"\n",(0,r.jsx)(o.li,{children:'Depois disso, o nome pode incluir caracteres alfab\xe9ticos, num\xe9ricos, o caractere espa\xe7o e o caractere de sublinhado/tra\xe7o baixo ("_") .'}),"\n",(0,r.jsx)(o.li,{children:"Os nomes s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n'})}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:['Come\xe7ar o nome de uma propriedade de objecto com um car\xe1cter de sublinhado ("_") excluir\xe1 a propriedade das funcionalidades de preenchimento autom\xe1tico no editor de c\xf3digo 4D. Por exemplo, se voc\xea declarar ',(0,r.jsx)(o.code,{children:"$o._myPrivateProperty"}),", isso n\xe3o ser\xe1 proposto no editor de c\xf3digo quando voc\xea digitar ",(0,r.jsx)(o.code,{children:'"$o. "'}),"."]})}),"\n",(0,r.jsxs)(o.p,{children:["Ver tambi\xe9n ",(0,r.jsx)(o.a,{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6",children:"ECMA Script standard"}),"."]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Se voc\xea usar ",(0,r.jsx)(o.strong,{children:"nota\xe7\xe3o de string"})," dentro de colchetes, os nomes das propriedades podem conter qualquer caractere (ex: ",(0,r.jsx)(o.code,{children:'meuObjeto["1-" First property"]'}),")."]})}),"\n",(0,r.jsx)(o.h2,{id:"par\xe2metros",children:"Par\xe2metros"}),"\n",(0,r.jsxs)(o.p,{children:["Os nomes dos par\xe2metros devem come\xe7ar com um caracter $ e seguir as mesmas regras que os ",(0,r.jsx)(o.a,{href:"#variables",children:"nomes das vari\xe1veis"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n"})}),"\n",(0,r.jsx)(o.h2,{id:"m\xe9todos-projeto",children:"M\xe9todos projeto"}),"\n",(0,r.jsx)(o.p,{children:"Um m\xe9todo projeto (procedimento ou fun\xe7\xe3o) se designa utilizando seu nome. Um nome de m\xe9todo pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Um nome de m\xe9todo projecto deve come\xe7ar com uma letra, um d\xedgito, ou um sublinhado"}),"\n",(0,r.jsx)(o.li,{children:'A partir da\xed, o nome pode incluir qualquer letra ou d\xedgito, o car\xe1cter de sublinhado ("_") ou o car\xe1cter de espa\xe7o.'}),"\n",(0,r.jsxs)(o.li,{children:["N\xe3o use nomes reservados, por exemplo, nomes de comandos 4D (",(0,r.jsx)(o.code,{children:"Date"}),", ",(0,r.jsx)(o.code,{children:"Time"}),", etc), palavras-chave (",(0,r.jsx)(o.code,{children:"If"}),", ",(0,r.jsx)(o.code,{children:"for"}),", etc.), ou nomes constantes (",(0,r.jsx)(o.code,{children:"Euro"}),", ",(0,r.jsx)(o.code,{children:"Black"}),", ",(0,r.jsx)(o.code,{children:"Sexta"}),", etc.)."]}),"\n",(0,r.jsx)(o.li,{children:"Os nomes dos m\xe9todos projecto s\xe3o insens\xedveis a mai\xfasculas e min\xfasculas."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Dica:"})," \xc9 uma boa t\xe9cnica de programa\xe7\xe3o adotar a mesma conven\xe7\xe3o de nomenclatura que a utilizada por 4D para os m\xe9todos integrados. Use mai\xfasculas para nomear seus m\xe9todos, entretanto, se um m\xe9todo for uma fun\xe7\xe3o, coloque em mai\xfasculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manuten\xe7\xe3o depois de alguns meses, j\xe1 saber\xe1 se um m\xe9todo retorna um resultado, simplesmente olhando seu nome na janela do Explorer."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Quando chamar um m\xe9todo, apenas digite seu nome. Entretanto, alguns comandos integrados em 4D, como ON EVENT CALL, assim como todos os comandos de Plug-In, esperam o nome de um m\xe9todo como uma string quando se passar um par\xe2metro de tipo m\xe9todo."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'// Este comando espera um m\xe9todo (fun\xe7\xe3o) ou f\xf3rmula QUERY BY FORMULA([aTable];Special query)\n // Este comando espera um m\xe9todo (procedimento) ou declara\xe7\xe3o APPLY TO SELECTION([Employees];INCREASE SALARIES)\n //Mas este comando espera um nome de m\xe9todo ON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,r.jsx)(o.h2,{id:"tabela",children:"Tabela"}),"\n",(0,r.jsx)(o.p,{children:"Uma tabela se designa colocando seu nome entre par\xeanteses: [...]. Um nome de tabela pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsx)(o.p,{children:"O nome do campo segue imediatamene o nome da tabela. Um nome campo pode conter at\xe9 31 caracteres."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:'O nome de uma tabela ou de um campo deve come\xe7ar por uma letra, um sublinhado ou um d\xf3lar ("$")'}),"\n",(0,r.jsx)(o.li,{children:'Depois disso, o nome pode incluir caracteres alfab\xe9ticos, num\xe9ricos, o caractere espa\xe7o e o caractere de sublinhado/tra\xe7o baixo ("_") .'}),"\n",(0,r.jsxs)(o.li,{children:["N\xe3o use nomes reservados, por exemplo, nomes de comandos 4D (",(0,r.jsx)(o.code,{children:"Date"}),", ",(0,r.jsx)(o.code,{children:"Time"}),", etc), palavras-chave (",(0,r.jsx)(o.code,{children:"If"}),", ",(0,r.jsx)(o.code,{children:"for"}),", etc.), ou nomes constantes (",(0,r.jsx)(o.code,{children:"Euro"}),", ",(0,r.jsx)(o.code,{children:"Black"}),", ",(0,r.jsx)(o.code,{children:"Sexta"}),", etc.)."]}),"\n",(0,r.jsx)(o.li,{children:"Nomes n\xe3o devem incluir palavras chave SQL (comando, atributo, etc)."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n'})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["N\xe3o \xe9 recomend\xe1vel dar o mesmo nome a uma tabela e a uma ",(0,r.jsx)(o.a,{href:"#classes",children:"classe"}),", para evitar qualquer conflito."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"vari\xe1veis",children:"Vari\xe1veis."}),"\n",(0,r.jsx)(o.p,{children:"O nome de uma vari\xe1vel interprocessada pode ter at\xe9 31 caracteres, n\xe3o incluindo os s\xedmbolos  ."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:['A variable name must begin with a letter, an underscore, or a dollar ("$") for ',(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/Concepts/parameters",children:"parameters"})," and ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/Concepts/variables#local-variables",children:"local variables"}),", or ",(0,r.jsx)(o.code,{children:"<>"})," for ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/Concepts/variables#interprocess-variables",children:"interprocess variables"})," (deprecated)."]}),"\n",(0,r.jsx)(o.li,{children:'A partir da\xed, o nome pode incluir qualquer letra ou d\xedgito e o car\xe1cter de sublinhado ("_").'}),"\n",(0,r.jsxs)(o.li,{children:["Do not use reserved names, i.e. 4D command names (",(0,r.jsx)(o.code,{children:"Date"}),", ",(0,r.jsx)(o.code,{children:"Time"}),", etc), keywords (",(0,r.jsx)(o.code,{children:"If"}),", ",(0,r.jsx)(o.code,{children:"For"}),", etc.), system variable names (",(0,r.jsx)(o.code,{children:"OK"}),", ",(0,r.jsx)(o.code,{children:"document"}),"...), or constant names (",(0,r.jsx)(o.code,{children:"Euro"}),", ",(0,r.jsx)(o.code,{children:"Black"}),", ",(0,r.jsx)(o.code,{children:"Friday"}),", etc.)."]}),"\n",(0,r.jsxs)(o.li,{children:["O nome de uma vari\xe1vel interprocessada pode ter at\xe9 31 caracteres, n\xe3o incluindo os s\xedmbolos ",(0,r.jsx)(o.code,{children:"<>"})," ."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'For($vlRecord;1;100) //local variable\n$vsMyString:="Hello there" //local variable\nvar $vName; $vJob : Text //local variales\nIf(bValidate=1) //process variable\n<>vlProcessID:=Current process() //interprocess variable\n'})}),"\n",(0,r.jsx)(o.h3,{id:"compatibidade",children:"Compatibidade"}),"\n",(0,r.jsxs)(o.p,{children:["Some naming practices were previously allowed but are no longer supported when the ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/Project/compiler#enabling-direct-typing",children:"direct typing mode is enabled"})," (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"a variable name has a digit as first character,"}),"\n",(0,r.jsx)(o.li,{children:"a variable name contains space characters,"}),"\n",(0,r.jsx)(o.li,{children:"you declared variables named $0, $1, etc."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"outros-nomes",children:"Outros nomes"}),"\n",(0,r.jsx)(o.p,{children:"Na linguagem 4D, v\xe1rios elementos t\xeam seus nomes manejados como strings: forms, form objects, named selections, processes, sets, menu bars, etc."}),"\n",(0,r.jsxs)(o.p,{children:["O nome de um conjunto interprocesso pode ter at\xe9 255 caracteres, n\xe3o incluindo os s\xedmbolos ",(0,r.jsx)(o.code,{})," (se houver)."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Os nomes das cadeias de caracteres podem conter quaisquer caracteres."}),"\n",(0,r.jsx)(o.li,{children:"Os caracteres de espa\xe7o n\xe3o est\xe3o permitidos."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'DIALOG([Storage];"Caixa de notas"+String($vlStage))\nOBJETIVO SET FONT(*;"Binfo";"Tempos")\nUSE SELEC\xc7\xc3O NOMED ([Customers];"Fechado")//Processo da Sele\xe7\xe3o Nomeada\nUSE SELEC\xc7\xc3O NOTON([Customers]; <>ByZipcode") /// Interprocess Nomeado Sele\xe7\xe3o\n //Iniciando o processo global "Adicionar Clientes"\n$vlProcessID:=Novo processo ("P_ADD_CUSTOMERS";48*1024; Adicionar Clientes")\n //Iniciando o processo local "$Follow Movimentos de Mouse"\n$vlProcessID:=Novo processo ("P_MOUSE_SNIFFER"; 6*1024;"$Follow Movimentos de mouse")\nCONFIGURA\xc7\xc3O CRIADA ([Customers]; Pedidos de clientes")///Processo definir\nUSE SET("<>Registros Exclu\xeddos") //Interprocess set\nIf(Registros no conjunto("$Selection"+String($i))>0) //Cliente definido\n\n'})})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var n=s(667294);let r={},a=n.createContext(r);function d(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);