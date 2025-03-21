"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22525"],{56344:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"Concepts/parameters","title":"Par\xe2metros","description":"Frequentemente ser\xe1 preciso passar dados para seus m\xe9todos. Isso \xe9 facilmente feito com par\xe2metros.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Concepts/parameters.md","sourceDirName":"Concepts","slug":"/Concepts/parameters","permalink":"/docs/pt/20-R7/Concepts/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fparameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"parameters","title":"Par\xe2metros"},"sidebar":"docs","previous":{"title":"P\xe1gina M\xe9todos","permalink":"/docs/pt/20-R7/Concepts/methods"},"next":{"title":"Objetos e cole\xe7\xf5es compartilhados","permalink":"/docs/pt/20-R7/Concepts/shared"}}'),s=a("785893"),n=a("250065");let d={id:"parameters",title:"Par\xe2metros"},t=void 0,i={},c=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Declara\xe7\xe3o de par\xe2metros",id:"declara\xe7\xe3o-de-par\xe2metros",level:2},{value:"Valor retornado",id:"valor-retornado",level:3},{value:"Tipos de datos compat\xedveis",id:"tipos-de-datos-compat\xedveis",level:3},{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:3},{value:"<code>return {expression}</code>",id:"return-expression",level:2},{value:"Indire\xe7\xe3o dos par\xe2metros",id:"indire\xe7\xe3o-dos-par\xe2metros",level:2},{value:"Uso de par\xe2metros vari\xe1veis",id:"uso-de-par\xe2metros-vari\xe1veis",level:3},{value:"Declara\xe7\xe3o de par\xe2metros vari\xe1veis",id:"declara\xe7\xe3o-de-par\xe2metros-vari\xe1veis",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Triggers e On Drag Over",id:"triggers-e-on-drag-over",level:2},{value:"Tipo de par\xe1metro equivocado",id:"tipo-de-par\xe1metro-equivocado",level:2},{value:"Usando propriedades objeto como par\xe2metros nomeados",id:"usando-propriedades-objeto-como-par\xe2metros-nomeados",level:2},{value:"Par\xe2metros opcionais",id:"par\xe2metros-opcionais",level:2},{value:"Valores ou refer\xeancias",id:"valores-ou-refer\xeancias",level:2},{value:"Casos particulares: objetos e cole\xe7\xf5es",id:"casos-particulares-objetos-e-cole\xe7\xf5es",level:3}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Frequentemente ser\xe1 preciso passar dados para seus m\xe9todos. Isso \xe9 facilmente feito com par\xe2metros."}),"\n",(0,s.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,s.jsxs)(o.p,{children:["Os ",(0,s.jsx)(o.strong,{children:"par\xe2metros"})," (ou ",(0,s.jsx)(o.strong,{children:"argumentos"}),") s\xe3o partes de dados que um m\xe9todo ou uma fun\xe7\xe3o de classe precisa para executar sua tarefa. Os termos ",(0,s.jsx)(o.em,{children:"par\xe2metro"})," e ",(0,s.jsx)(o.em,{children:"argumento"}),' s\xe3o usados de forma intercambi\xe1vel ao longo deste manual. Par\xe2metros tamb\xe9m s\xe3o passados para comandos integrados 4D. Neste exemplo, a cadeia de caracteres "Hello" \xe9 um argumento para o comando interno ',(0,s.jsx)(o.code,{children:"ALERT"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'ALERT("Hello")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Os par\xe2metros s\xe3o passados aos m\xe9todos da mesma maneira. Por exemplo, se uma fun\xe7\xe3o de classe chamada ",(0,s.jsx)(o.code,{children:"getArea()"})," aceita dois par\xe2metros, uma chamada para a fun\xe7\xe3o de classe pode se parecer com isso:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Ou, se um m\xe9todo de projeto chamado ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"})," aceitar tr\xeas par\xe2metros, uma chamada ao m\xe9todo poder\xe1 ter a seguinte apar\xeancia:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Essa fun\xe7\xe3o \xe9 chamada da maneira abaixo:\n"})}),"\n",(0,s.jsx)(o.p,{children:"Os par\xe2metros est\xe3o separados por ponto e v\xedrgula (;)."}),"\n",(0,s.jsx)(o.p,{children:"Os mesmos princ\xedpios s\xe3o usados quando m\xe9todos forem executados atrav\xe9s de comandos dedicados, por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'EXECUTE METHOD IN SUBFORM("Cal2"; "SetCalendarDate";*;!05/05/20!)  \n//passa a data !05/05/20! como par\xe2metro para SetCalendarDate  \n//no contexto de um subformul\xe1rio\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Os dados tamb\xe9m podem ser ",(0,s.jsx)(o.strong,{children:"retornados"})," a partir de m\xe9todos e fun\xe7\xf5es de classe. Por exemplo, a linha a seguir \xe9 uma instru\xe7\xe3o que usa o comando interno, ",(0,s.jsx)(o.code,{children:"Length"}),", para retornar o comprimento de uma cadeia de caracteres. A instru\xe7\xe3o coloca o valor retornado por ",(0,s.jsx)(o.code,{children:"Length"})," em uma vari\xe1vel chamada ",(0,s.jsx)(o.em,{children:"MyLength"}),". Esta \xe9 a instru\xe7\xe3o:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'MyLength:=Length("How did I get here?")\n'})}),"\n",(0,s.jsx)(o.p,{children:"Qualquer subrotina pode retornar um valor. S\xf3 se pode declarar um \xfanico par\xe1metro de sa\xedda por m\xe9todo ou fun\xe7\xe3o de classe."}),"\n",(0,s.jsxs)(o.p,{children:["Os valores de entrada e sa\xedda s\xe3o ",(0,s.jsx)(o.a,{href:"#valores-ou-refer%C3%AAncias",children:"avaliados"})," no momento da chamada e copiados para ou de vari\xe1veis locais dentro da fun\xe7\xe3o ou m\xe9todo da classe chamada. Os par\xe2metros das vari\xe1veis devem ser [declarados] (#declaring-parameters) no c\xf3digo chamado."]}),"\n",(0,s.jsx)(o.admonition,{title:"Compatibidade",type:"info",children:(0,s.jsxs)(o.p,{children:["The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as ",(0,s.jsx)(o.code,{children:"C_TEXT($1;$2)"}),", is ",(0,s.jsx)(o.strong,{children:"deprecated"})," as of 4D 20 R7."]})}),"\n",(0,s.jsx)(o.h2,{id:"declara\xe7\xe3o-de-par\xe2metros",children:"Declara\xe7\xe3o de par\xe2metros"}),"\n",(0,s.jsxs)(o.p,{children:["Dentro de m\xe9todos ou fun\xe7\xf5es de classe chamados, valores par\xe2metros s\xe3o atribuidos \xe0 vari\xe1veis locais. Normalmente, voc\xea declara os par\xe2metros usando um ",(0,s.jsx)(o.strong,{children:"nome do par\xe2metro"})," junto com um ",(0,s.jsx)(o.strong,{children:"tipo de par\xe2metro"}),", separados por dois pontos."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["For class functions, parameters are declared along with the function prototype, i.e. when using the ",(0,s.jsx)(o.code,{children:"Function"})," or ",(0,s.jsx)(o.code,{children:"Class Constructor"})," keywords."]}),"\n",(0,s.jsxs)(o.li,{children:["Para m\xe9todos (m\xe9todos de projeto, m\xe9todos de objeto de formul\xe1rio, m\xe9todos de banco de dados e acionadores), os par\xe2metros s\xe3o declarados usando a palavra-chave ",(0,s.jsx)(o.code,{children:"#DECLARE"})," no in\xedcio do c\xf3digo do m\xe9todo."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer) -> $area : Integer\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" //myProjectMethod\n#DECLARE ($i : Integer) -> $myResult : Object\n"})}),"\n",(0,s.jsx)(o.p,{children:"As regras abaixo s\xe3o v\xe1lidas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"A linha de declara\xe7\xe3o deve ser a primeira linha do m\xe9todo ou c\xf3digo da fun\xe7\xe3o, sen\xe3o um erro \xe9 exibido (s\xf3 coment\xe1rios ou quebras de linha podem preceder a declara\xe7\xe3o)."}),"\n",(0,s.jsxs)(o.li,{children:["Os nomes dos par\xe2metros devem come\xe7ar com um caractere ",(0,s.jsx)(o.code,{children:"$"})," e estar em conformidade com as [regras de nomea\xe7\xe3o de propriedades] (identifiers.md#object-properties)."]}),"\n",(0,s.jsx)(o.li,{children:"Os par\xe2metros (e tipos) m\xfaltiplos s\xe3o separados por ponto e v\xedrgula (;)."}),"\n",(0,s.jsx)(o.li,{children:'Sintaxes multilinha s\xe3o aceitas (usando "\\").'}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, quando voc\xea chama uma fun\xe7\xe3o ",(0,s.jsx)(o.code,{children:"getArea()"})," com dois par\xe2metros:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,s.jsx)(o.p,{children:"No c\xf3digo da fun\xe7\xe3o classe, o valor de cada par\xe2metro se copia no par\xe2metro declarado correspondente:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// Class: Polygon\nFunction getArea($width : Integer; $height : Integer)-> $area : Integer\n	$area:=$width*$height\n"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Se o tipo n\xe3o for definido, o par\xe2metro ser\xe1 definido como [",(0,s.jsx)(o.code,{children:"Variant"}),"] (dt_variant.md)."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Todos los tipos de m\xe9todos de 4D soportan la palabra clave ",(0,s.jsx)(o.code,{children:"#DECLARE"}),", incluidos los m\xe9todos base. Por exemplo, no m\xe9todo de database ",(0,s.jsx)(o.code,{children:"On Web Authentication"}),", voc\xea pode declarar par\xe2metros nomeados:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'	// M\xe9todo  banco de dados On Web Authentication\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n$entitySelection:=ds.User.query("login=:1"; $user)\n// Verificar a senha hash...\n'})}),"\n",(0,s.jsx)(o.h3,{id:"valor-retornado",children:"Valor retornado"}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea declara o par\xe2metro de retorno de uma fun\xe7\xe3o adicionando uma seta (->) e a defini\xe7\xe3o do par\xe2metro ap\xf3s a lista de par\xe2metros de entrada. Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer) -> $result : Integer\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Tamb\xe9m \xe9 poss\xedvel declarar o par\xe2metro de retorno apenas acrescentando ",(0,s.jsx)(o.code,{children:": type"}),", caso em que pode ser tratado por uma ",(0,s.jsx)(o.a,{href:"#return-expression",children:"declara\xe7\xe3o de retorno"}),". Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer): Integer\n	return $x+$y\n"})}),"\n",(0,s.jsxs)(o.admonition,{type:"warning",children:[(0,s.jsx)(o.p,{children:"Os par\xe2metros, que incluem o valor retornado, devem ser declarados apenas uma vez. Em particular, voc\xea n\xe3o pode declarar o mesmo par\xe2metro como entrada e sa\xedda, mesmo com o mesmo tipo. Por exemplo:"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-qs",children:"	//invalid declaration\nFunction myTransform ($x : Integer) -> $x : Integer\n	//error: $x is declared twice\n"})})]}),"\n",(0,s.jsx)(o.h3,{id:"tipos-de-datos-compat\xedveis",children:"Tipos de datos compat\xedveis"}),"\n",(0,s.jsxs)(o.p,{children:["Com par\xe2metros nomeados, voc\xea pode usar os mesmos tipos de dados que s\xe3o [suportados pela palavra-chave ",(0,s.jsx)(o.code,{children:"var"}),"] (variables.md), incluindo objetos de classe. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function saveToFile($entity : cs. ShapesEntity; $file : 4D. File)\n"})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsx)(o.p,{children:"As tabelas ou express\xf5es de matriz s\xf3 podem ser passadas [como refer\xeancia usando um ponteiro] (dt_pointer.md#pointers-as-parameters-to-methods)."})}),"\n",(0,s.jsx)(o.h3,{id:"inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Quando os par\xe2metros s\xe3o declarados, eles s\xe3o inicializados com o [",(0,s.jsx)(o.strong,{children:"valor padr\xe3o correspondente ao seu tipo"}),"] (data-types.md#default-values), que eles manter\xe3o durante a sess\xe3o, desde que n\xe3o tenham sido atribu\xeddos."]}),"\n",(0,s.jsx)(o.h2,{id:"return-expression",children:(0,s.jsx)(o.code,{children:"return {expression}"})}),"\n",(0,s.jsxs)(o.details,{children:[(0,s.jsx)(o.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Release"}),(0,s.jsx)(o.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"19 R4"}),(0,s.jsx)(o.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["A instru\xe7\xe3o ",(0,s.jsx)(o.code,{children:"return"})," encerra a execu\xe7\xe3o da fun\xe7\xe3o ou do m\xe9todo e pode ser usada para retornar uma express\xe3o ao chamador."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, a seguinte fun\xe7\xe3o devolve o quadrado de seu argumento, $x, onde $x \xe9 um n\xfamero."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function square($x : Integer) -> $result : Integer\n   return $x * $x\n"})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Internally, ",(0,s.jsx)(o.code,{children:"return x"})," executes ",(0,s.jsx)(o.code,{children:"myReturnValue:=x"}),", and returns to the caller. Se ",(0,s.jsx)(o.code,{children:"return"})," for usado sem uma express\xe3o, a fun\xe7\xe3o ou o m\xe9todo retornar\xe1 um valor nulo do tipo de retorno declarado (se houver), caso contr\xe1rio, ",(0,s.jsx)(o.em,{children:"indefinido"}),"."]})}),"\n",(0,s.jsxs)(o.p,{children:["A instru\xe7\xe3o ",(0,s.jsx)(o.code,{children:"return"})," pode ser usada junto com a sintaxe padr\xe3o para ",(0,s.jsx)(o.a,{href:"#valorretornado",children:"valores retornados"})," (o valor retornado deve ser do tipo declarado). Entretanto lembre que isso finaliza imediatamente a execu\xe7\xe3o de c\xf3digo. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function getValue -> $v : Integer\n	$v:=10\n	return 20\n	// returns 20\n\nFunction getValue -> $v : Integer\n	return 10\n	$v:=20 // never executed\n	// returns 10\n"})}),"\n",(0,s.jsx)(o.h2,{id:"indire\xe7\xe3o-dos-par\xe2metros",children:"Indire\xe7\xe3o dos par\xe2metros"}),"\n",(0,s.jsxs)(o.p,{children:["Os m\xe9todos e fun\xe7\xf5es 4D aceitam um n\xfamero vari\xe1vel de par\xe2metros. Voc\xea pode abordar esses par\xe2metros com um loop ",(0,s.jsx)(o.code,{children:"For...End for"}),", o comando ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,s.jsx)(o.code,{children:"Count parameters"})})," e a sintaxe de indire\xe7\xe3o de ",(0,s.jsx)(o.strong,{children:"par\xe2metro"}),". Dentro do m\xe9todo, um endere\xe7o de indire\xe7\xe3o \xe9 formatado ",(0,s.jsx)(o.code,{children:"${N}"}),", onde ",(0,s.jsx)(o.code,{children:"N"})," \xe9 uma express\xe3o num\xe9rica."]}),"\n",(0,s.jsx)(o.h3,{id:"uso-de-par\xe2metros-vari\xe1veis",children:"Uso de par\xe2metros vari\xe1veis"}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, considere uma fun\xe7\xe3o que some os valores e devolva a soma formatada segundo um formato que se passa como par\xe2metro. Cada vez que chamar a esse m\xe9todo, o n\xfamero de valores a somar pode variar. Devemos passar os valores como par\xe2metros ao m\xe9todo e o formato em forma de string dos caracteres. O n\xfamero de valores pode variar de chamada a chamada."}),"\n",(0,s.jsxs)(o.p,{children:["Aqui est\xe1 a fun\xe7\xe3o, chamada ",(0,s.jsx)(o.code,{children:"MySum"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" #DECLARE($format : Text) -> $result : Text\n $sum:=0\n For($i;2;Count parameters)\n    $sum:=$sum+${$i}\n End for\n $result:=String($sum;$format)\n"})}),"\n",(0,s.jsx)(o.p,{children:"Os par\xe2metros da fun\xe7\xe3o devem ser passados na ordem correta: primeiro o formato e depois os valores."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24) //"182.70"\n Result:=MySum("000";1;2;200) //"203"\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Observe que, mesmo que tenha declarado 0, 1 ou mais par\xe2metros, voc\xea sempre poder\xe1 passar o n\xfamero de par\xe2metros que desejar. Os par\xe2metros est\xe3o todos dispon\xedveis no c\xf3digo chamado por meio da sintaxe ",(0,s.jsx)(o.code,{children:"${N}"})," e o tipo de par\xe2metros extras \xe9 ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/variant",children:"Variant"})," por padr\xe3o (voc\xea pode declar\xe1-los usando a ",(0,s.jsx)(o.a,{href:"#declaring-variadic-parameters",children:"nota\xe7\xe3o variadic"}),"). Voc\xea s\xf3 precisa garantir que os par\xe2metros existam, gra\xe7as ao comando ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,s.jsx)(o.code,{children:"Count parameters"})}),". Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//m\xe9todo foo\n#DECLARE($p1: Text;$p2 : Text; $p3 : Date)\nFor($i;1;Count parameters)\n	ALERT("param "+String($i)+" = "+String(${$i}))\nEnd for\n'})}),"\n",(0,s.jsx)(o.p,{children:"Esta fun\xe7\xe3o pode ser chamada agora de v\xe1rias formas:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'foo("hello";"world";!01/01/2021!;42;?12:00:00?) //par\xe2metros extras foram passados\n'})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"A indire\xe7\xe3o de par\xe2metros se gerencia melhor se respeitar a conven\xe7\xe3o abaixo: se s\xf3 alguns dos par\xe2metros forem endere\xe7ados por indire\xe7\xe3o, devem ser passados depois dos outros."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"declara\xe7\xe3o-de-par\xe2metros-vari\xe1veis",children:"Declara\xe7\xe3o de par\xe2metros vari\xe1veis"}),"\n",(0,s.jsx)(o.p,{children:"N\xe3o \xe9 obrigat\xf3rio declarar par\xe2metros vari\xe1veis. Os par\xe2metros variadic n\xe3o declarados recebem automaticamente o tipo [Variant] (dt_variant.md)."}),"\n",(0,s.jsx)(o.p,{children:'Entretanto, para evitar erros de incompatibilidade de tipos durante a execu\xe7\xe3o do c\xf3digo, voc\xea pode declarar um n\xfamero vari\xe1vel de par\xe2metros usando a nota\xe7\xe3o "..." nos prot\xf3tipos de suas fun\xe7\xf5es, construtores de classes e m\xe9todos (par\xe2metros vari\xe1dicos). Voc\xea especifica o tipo do par\xe2metro seguindo a nota\xe7\xe3o "..." com o tipo desejado.'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"#DECLARE ( ... : Text ) // N\xfamero indefinido de par\xe2metros 'Text'\n\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function myfunction ( ... : Text)\n\n"})}),"\n",(0,s.jsx)(o.p,{children:"Ao declarar v\xe1rios par\xe2metros, a nota\xe7\xe3o variadic deve ser empregada na \xfaltima posi\xe7\xe3o, por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"#DECLARE ( param: Real ; ... : Text )\n\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"Function myfunction (var1: Integer ; ... : Text)\n"})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(o.p,{children:["Aqui temos um m\xe9todo chamado ",(0,s.jsx)(o.code,{children:"SumNumbers"})," que retorna o total calculado para todos os n\xfameros passados como par\xe2metros:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\n#DECLARE( ... : Real) : Real\n\n\n\nvar $number; $total : Real\n\nFor each ($number; 1; Count parameters)\n	$total+=${$number}\nEnd for each\n\nreturn $total\n\n"})}),"\n",(0,s.jsx)(o.p,{children:"Esse m\xe9todo pode ser chamado com um n\xfamero vari\xe1vel de par\xe2metros Real. No caso de um tipo de par\xe2metro incorreto, um erro ser\xe1 retornado antes que o m\xe9todo seja executado:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\n$total1:=SumNumbers // returns 0\n$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15\n$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error\n\n'})}),"\n",(0,s.jsx)(o.admonition,{title:"Compatibidade",type:"note",children:(0,s.jsxs)(o.p,{children:["The legacy syntax for declaring variadic parameters (",(0,s.jsx)(o.code,{children:"C_TEXT(${4})"}),") is deprecated as of 4D 20 R7."]})}),"\n",(0,s.jsx)(o.h2,{id:"triggers-e-on-drag-over",children:"Triggers e On Drag Over"}),"\n",(0,s.jsx)(o.p,{children:'Alguns contextos n\xe3o suportam a declara\xe7\xe3o em um m\xe9todo "Compiler_", portanto, s\xe3o tratados especificamente:'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Triggers - O par\xe2metro $0 (Longint), o resultado de um trigger, ser\xe1 tipado pelo compilador se o par\xe2metro n\xe3o tiver sido declarado explicitamente. Entretanto, se quiser declar\xe1-lo, deve fazer isso no pr\xf3prio trigger."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"tipo-de-par\xe1metro-equivocado",children:"Tipo de par\xe1metro equivocado"}),"\n",(0,s.jsx)(o.p,{children:"Chamar um par\xe2metro com um tipo errado \xe9 um [erro] (error-handling.md) que impede a execu\xe7\xe3o correta. Por exemplo se executar os m\xe9todos"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// method1\n#DECLARE($value : Text)\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// method2\nmethod1(42) //tipo incorrecto, texto esperado\n"})}),"\n",(0,s.jsx)(o.p,{children:"Este caso es tratado por 4D dependendo do contexto:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["em ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/interpreted-compiled",children:"projetos compilados"}),", um erro \xe9 gerado na etapa de compila\xe7\xe3o sempre que poss\xedvel. Sen\xe3o, um erro \xe9 gerado quando o m\xe9todo for chamado."]}),"\n",(0,s.jsx)(o.li,{children:"em projetos interpretados:"}),"\n",(0,s.jsxs)(o.li,{children:["if the parameter was declared using the named syntax (",(0,s.jsx)(o.code,{children:"#DECLARE"})," or ",(0,s.jsx)(o.code,{children:"Function"}),"), an error is generated when the method is called."]}),"\n",(0,s.jsxs)(o.li,{children:["if the parameter was declared using a legacy (",(0,s.jsx)(o.code,{children:"_C_XXX"}),") syntax, no error is generated, the called method receives an empty value of the expected type."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"usando-propriedades-objeto-como-par\xe2metros-nomeados",children:"Usando propriedades objeto como par\xe2metros nomeados"}),"\n",(0,s.jsxs)(o.p,{children:["O uso de objetos como par\xe2metros permite que voc\xea manipule ",(0,s.jsx)(o.strong,{children:"par\xe2metros nomeados"}),". Este estilo de programa\xe7\xe3o \xe9 simples, flex\xedvel e f\xe1cil de ler."]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, utilizando o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,s.jsxs)(o.p,{children:["No m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," voc\xea pode escrever:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsx)(o.p,{children:"Isso proporciona uma maneira eficiente de definir [par\xe2metros opcionais] (#optional-parameters) (veja tamb\xe9m abaixo). Para manejar os par\xe2metros que faltam, pode:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["verifique se todos os par\xe2metros esperados s\xe3o fornecidos comparando-os com o valor ",(0,s.jsx)(o.code,{children:"Null"}),", ou"]}),"\n",(0,s.jsx)(o.li,{children:"pr\xe9-definir os valores dos par\xe2metros, ou"}),"\n",(0,s.jsx)(o.li,{children:"us\xe1-los como valores vazios."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["No m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," acima, as propriedades Age e Name s\xe3o obrigat\xf3rias e produziriam erros se estivessem faltando. Para evitar isso, pode escrever:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsx)(o.p,{children:'Ambos par\xe2metros s\xe3o opcionais: se n\xe3o forem preenchidos, o resultado ser\xe1 "\xe9 10 anos de idade", mas nenhum erro ser\xe1 gerado.'}),"\n",(0,s.jsx)(o.p,{children:"Finalmente, com par\xe2metros com nome, a manuten\xe7\xe3o ou a reprodu\xe7\xe3o das aplica\xe7\xf5es \xe9 muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos n\xe3o funciona sempre. You need another parameter to set how many years to add. You write: Escreva: Escreve:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\n#DECLARE ($para : Object)  \nIf ($para.toAdd=Null)\n	$para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,s.jsx)(o.p,{children:"N\xe3o precisar\xe1 mudar seu c\xf3digo existente. Sempre funcionar\xe1 como na vers\xe3o anterior, mas se for necess\xe1rio, \xe9 poss\xedvel usar outro valor diferente de 10 anos."}),"\n",(0,s.jsx)(o.p,{children:"Com vari\xe1veis com nome, qualquer par\xe2metro pode ser opcional. No exemplo acima, todos os par\xe2metros s\xe3o opcionais e qualquer pode ser dado em qualquer ordem."}),"\n",(0,s.jsx)(o.h2,{id:"par\xe2metros-opcionais",children:"Par\xe2metros opcionais"}),"\n",(0,s.jsxs)(o.p,{children:["No manual Linguagem de 4D, os caracteres { } (chaves) indicam par\xe2metros opcionais. Por ejemplo, ",(0,s.jsx)(o.code,{children:"ALERT (message{; okButtonTitle})"})," significa que el par\xe1metro ",(0,s.jsx)(o.em,{children:"okButtonTitle"})," puede omitirse al llamar al comando. Pode fazer a chamada de duas maneiras:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter\n'})}),"\n",(0,s.jsx)(o.p,{children:"Os m\xe9todos projeto 4D tamb\xe9m aceitam esses par\xe2metros opcionais, come\xe7ando pela direita. Pode declarar qualquer n\xfamero de par\xe2metros. Se voc\xea chamar um m\xe9todo ou fun\xe7\xe3o com menos par\xe2metros do que o declarado, os par\xe2metros ausentes ser\xe3o processados como valores padr\xe3o no c\xf3digo chamado, [de acordo com seu tipo] (data-types.md#default-values). Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'// funci\xf3n "concate" de myClass\nFunction concate ($param1 : Text ; $param2 : Text)->$result : Text\n$result:=$param1+" "+$param2\n'})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  // M\xe9todo de chamada\n $class:=cs.myClass.new()\n $class.concate("Hello") // "Hello "\n $class.concate() // Mostra " "\n'})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Tamb\xe9m se pode chamar um m\xe9todo ou fun\xe7\xe3o com mais par\xe2metros do que os declarados. Eles estar\xe3o dispon\xedveis no c\xf3digo chamado por meio da ",(0,s.jsx)(o.a,{href:"#parameter-indirection-n",children:"${N} syntax"}),"."]})}),"\n",(0,s.jsxs)(o.p,{children:["Usando o comando ",(0,s.jsx)(o.code,{children:"Count parameters"})," de dentro do m\xe9todo chamado, voc\xea pode detectar o n\xfamero real de par\xe2metros e executar diferentes opera\xe7\xf5es, dependendo do que recebeu."]}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma \xe1rea de 4D Write Pro:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n #DECLARE ($message : Text; $path : Text; $wpArea : Object)\n\n ALERT($message)\n If(Count parameters>=3)\n    WP SET TEXT($wpArea;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($path;$message)\n    End if\n End if\n"})}),"\n",(0,s.jsx)(o.p,{children:"Ap\xf3s adicionar este m\xe9todo projeto a sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea\n'})}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["Quando par\xe2metros opcionais s\xe3o necess\xe1rios em seus m\xe9todos, voc\xea tamb\xe9m pode considerar o uso de ",(0,s.jsx)(o.a,{href:"#using-object-properties-as-named-parameters",children:"propriedades do objeto como par\xe2metros com nome"}),", que fornecem uma maneira flex\xedvel de lidar com um n\xfamero vari\xe1vel de par\xe2metros."]})}),"\n",(0,s.jsx)(o.h2,{id:"valores-ou-refer\xeancias",children:"Valores ou refer\xeancias"}),"\n",(0,s.jsxs)(o.p,{children:["Quando voc\xea passa um par\xe2metro, 4D sempre avalia a express\xe3o do par\xe2metro no contexto do m\xe9todo de chamada e define o ",(0,s.jsx)(o.strong,{children:"valor resultante"})," para as vari\xe1veis locais na fun\xe7\xe3o de classe ou subrotina. As vari\xe1veis locais/par\xe2metros n\xe3o s\xe3o os campos, vari\xe1veis ou express\xf5es realmente passadas pelo m\xe9todo chamada; eles apenas cont\xe9m os valores que foram passados. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'	//Here is some code from the method MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n\n	//Here is the code of the method DO_SOMETHING\n #DECLARE($param : Text)\n $param:=Uppercase($param)\n ALERT($param)\n'})}),"\n",(0,s.jsxs)(o.p,{children:["A caixa de alerta exibida por ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"}),' mostrar\xe1 "WILLIAMS" e a caixa de alerta exibida por ',(0,s.jsx)(o.code,{children:"MY_METHOD"}),' mostrar\xe1 "williams". The method locally changed the value of the parameter $param, but this does not affect the value of the field ',(0,s.jsx)(o.code,{children:"[People]Name"})," passed as parameter by the method ",(0,s.jsx)(o.code,{children:"MY_METHOD"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["H\xe1 duas formas de fazer com que o m\xe9todo ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"})," mude o valor de campo:"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Ao inv\xe9s de passar o campo para o m\xe9todo, passa um ponteiro para ele, por isso pode escrever:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //Here is some code from the method MY_METHOD\nDO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Last Name)\n\n  //Here the code of the method DO_SOMETHING\n#DECLARE($param : Text)\n$param->:=Uppercase($param->)\nALERT($param->)\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Aqui \xe9 o par\xe2metro n\xe3o for o campo, mas sim um ponteiro ao mesmo. Therefore, within the ",(0,s.jsx)(o.code,{children:"DO SOMETHING"})," method, $param is no longer the value of the field but a pointer to the field. The object ",(0,s.jsx)(o.strong,{children:"referenced"}),' by $param ($param-> in the code above) is the actual field. Portanto, mudar o objeto referenciado vai al\xe9m do escopo da subrotina, e o campo real n\xe3o \xe9 afetado. Neste exemplo, as duas caixas de alerta dir\xe3o "WILLIAMS".']}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["Ao inv\xe9s de ter o m\xe9todo ",(0,s.jsx)(o.code,{children:"DO_SOMETHING"}),' "fazendo algo", voc\xea pode reescrever o m\xe9todo para que ele retorne um valor. Portanto escreveria:']}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'	//Here is some code from the method MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n	//Here the code of the method DO SOMETHING\n #DECLARE ($param : Text) -> ($result : Text)\n $result:=Uppercase($param)\n ALERT($result)\n'})}),"\n",(0,s.jsxs)(o.p,{children:['This second technique of returning a value by a subroutine is called "using a function". Isso \xe9 descrito no par\xe1grafo ',(0,s.jsx)(o.a,{href:"#returned-value",children:"Returning values"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"casos-particulares-objetos-e-cole\xe7\xf5es",children:"Casos particulares: objetos e cole\xe7\xf5es"}),"\n",(0,s.jsx)(o.p,{children:"Deve prestar aten\xe7\xe3o ao fato de que os tipos de dados Objeto e Cole\xe7\xe3o s\xf3 podem ser manejados atrav\xe9s de uma refer\xeancia (ou seja, um  ponteiro interno*)."}),"\n",(0,s.jsxs)(o.p,{children:["Por isso, quando usar esses tipos de dados como par\xe2metros, ",(0,s.jsx)(o.code,{children:"$param, $return..."})," n\xe3o cont\xe9m ",(0,s.jsx)(o.em,{children:"valores"})," mas sim ",(0,s.jsx)(o.em,{children:"refer\xeancias"}),". Modifying the value of the ",(0,s.jsx)(o.code,{children:"$param, $return..."})," parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/pointer#pointers-as-parameters-to-methods",children:"pointers"}),", except that ",(0,s.jsx)(o.code,{children:"$param, $return..."})," parameters do not need to be dereferenced in the subroutine."]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, considere o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"})," que cria um objeto e o envia como par\xe2metro:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,s.jsxs)(o.p,{children:["O m\xe9todo ",(0,s.jsx)(o.code,{children:"ChangeAge"})," adiciona 10 ao atributo Age do objeto recebido"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"  //ChangeAge\n #DECLARE ($person : Object)\n $person.Age:=$person.Age+10\n ALERT(String($person.Age))\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Quando voc\xea executar o m\xe9todo ",(0,s.jsx)(o.code,{children:"CreatePerson"}),', ambas as caixas de alerta exibir\xe3o "50", pois a mesma refer\xeancia de objeto \xe9 tratada por ambos os m\xe9todos.']}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"4D Server:"}),' Quando os par\xe2metros s\xe3o passados entre m\xe9todos que n\xe3o s\xe3o executados na mesma m\xe1quina (usando, por exemplo, a op\xe7\xe3o "Execute on Server"), as refer\xeancias n\xe3o podem ser usadas. Nestes casos, s\xe3o enviadas c\xf3pias dos par\xe2metros de objetos e cole\xe7\xf5es ao inv\xe9s de refer\xeancias.']})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return d}});var r=a(667294);let s={},n=r.createContext(s);function d(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);