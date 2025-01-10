"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62126"],{554683:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"Concepts/identifiers","title":"Identificadores","description":"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.).","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/identifiers.md","sourceDirName":"Concepts","slug":"/Concepts/identifiers","permalink":"/docs/es/19/Concepts/identifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"identifiers","title":"Identificadores"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/es/19/Concepts/plug-ins"},"next":{"title":"Rutas de acceso","permalink":"/docs/es/19/Concepts/paths"}}'),o=n("785893"),a=n("250065");let c={id:"identifiers",title:"Identificadores"},l=void 0,i={},d=[{value:"Arrays",id:"arrays",level:2},{value:"Clases",id:"clases",level:2},{value:"Funciones",id:"funciones",level:2},{value:"Propiedades de los objetos",id:"propiedades-de-los-objetos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"M\xe9todos proyecto",id:"m\xe9todos-proyecto",level:2},{value:"Tablas y campos",id:"tablas-y-campos",level:2},{value:"Variables",id:"variables",level:2},{value:"Otros nombres",id:"otros-nombres",level:2}];function t(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.)."}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud m\xe1xima puede ser menor."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"arrays",children:"Arrays"}),"\n",(0,o.jsxs)(s.p,{children:["Los nombres de los arrays siguen las mismas reglas que las ",(0,o.jsx)(s.a,{href:"#variables",children:"variables"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"clases",children:"Clases"}),"\n",(0,o.jsx)(s.p,{children:"El nombre de una clase puede contener hasta 31 caracteres."}),"\n",(0,o.jsxs)(s.p,{children:["Un nombre de clase debe cumplir con el est\xe1ndar ",(0,o.jsx)(s.a,{href:"#object-properties",children:"reglas de nomenclatura de propiedades"})," para la notaci\xf3n de puntos."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["No se recomienda dar el mismo nombre a una clase y a una ",(0,o.jsx)(s.a,{href:"#tables",children:"tabla de la base"}),", para evitar conflictos."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"funciones",children:"Funciones"}),"\n",(0,o.jsxs)(s.p,{children:["Los nombres de funci\xf3n deben cumplir con el est\xe1ndar ",(0,o.jsx)(s.a,{href:"#object-properties",children:"reglas de nomenclatura de propiedades"})," para la notaci\xf3n de puntos."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Consejo:"}),' comenzar el nombre de la funci\xf3n con un car\xe1cter de subrayado ("_") excluir\xe1 la funci\xf3n de las funcionalidades de autocompletado en el editor de c\xf3digo 4D.']}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"propiedades-de-los-objetos",children:"Propiedades de los objetos"}),"\n",(0,o.jsxs)(s.p,{children:["El nombre de una propiedad objeto (tambi\xe9n llamado objeto ",(0,o.jsx)(s.em,{children:"atributo"}),") puede contener hasta 255 caracteres."]}),"\n",(0,o.jsxs)(s.p,{children:["Las propiedades de los objetos pueden hacer referencia a valores escalares, elementos ORDA, funciones de clase, otros objetos, etc. Sea cual sea su naturaleza, los nombres de las propiedades de los objetos deben seguir las siguientes reglas ",(0,o.jsxs)(s.strong,{children:["si se quiere utilizar la ",(0,o.jsx)(s.a,{href:"/docs/es/19/Concepts/object#object-properties",children:"notaci\xf3n de punto"})]}),":"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'El nombre de una propiedad debe comenzar con una letra, un gui\xf3n bajo o un d\xf3lar "$".'}),"\n",(0,o.jsx)(s.li,{children:'A partir de ah\xed, el nombre puede incluir cualquier letra, d\xedgito, el caracter de subrayado ("_"), o el caracter de d\xf3lar ("$").'}),"\n",(0,o.jsx)(s.li,{children:"Los nombres de propiedades son sensibles a las may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n'})}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:['Comenzar el nombre de una propiedad objeto con un car\xe1cter de subrayado ("_") excluir\xe1 la propiedad de las caracter\xedsticas de autocompletado en el editor de c\xf3digo de 4D. Por ejemplo, si declara ',(0,o.jsx)(s.code,{children:"$o._myPrivateProperty"}),", no se propondr\xe1 en el editor de c\xf3digo cuando escriba ",(0,o.jsx)(s.code,{children:'"$o. "'}),"."]})}),"\n",(0,o.jsxs)(s.p,{children:["Ver tambi\xe9n ",(0,o.jsx)(s.a,{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6",children:"ECMA Script standard"}),"."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Si utiliza ",(0,o.jsx)(s.strong,{children:"notaci\xf3n de cadena"})," entre corchetes, los nombres de las propiedades pueden contener cualquier caracter (ej.: ",(0,o.jsx)(s.code,{children:'miObjeto["1. First property"]'}),")."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,o.jsxs)(s.p,{children:["Los nombres de los par\xe1metros deben comenzar con un caracter ",(0,o.jsx)(s.code,{children:"$"})," y seguir las mismas reglas que los ",(0,o.jsx)(s.a,{href:"#variables",children:"nombres de variables"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n"})}),"\n",(0,o.jsx)(s.h2,{id:"m\xe9todos-proyecto",children:"M\xe9todos proyecto"}),"\n",(0,o.jsx)(s.p,{children:"El nombre de un m\xe9todo proyecto puede contener hasta 31 caracteres."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Un nombre de m\xe9todo proyecto debe comenzar por una letra, un d\xedgito o un gui\xf3n bajo"}),"\n",(0,o.jsx)(s.li,{children:'A partir de ah\xed, el nombre puede incluir cualquier letra o d\xedgito, el caracter de subrayado ("_"), o el caracter de espacio.'}),"\n",(0,o.jsxs)(s.li,{children:["No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,o.jsx)(s.code,{children:"Date"}),", ",(0,o.jsx)(s.code,{children:"Time"}),", etc), keywords (",(0,o.jsx)(s.code,{children:"If"}),", ",(0,o.jsx)(s.code,{children:"For"}),", etc.), o nombres de constantes (",(0,o.jsx)(s.code,{children:"Euro"}),", ",(0,o.jsx)(s.code,{children:"Black"}),", ",(0,o.jsx)(s.code,{children:"Friday"}),", etc.)."]}),"\n",(0,o.jsx)(s.li,{children:"Los nombres de m\xe9todos proyecto son sensibles a las may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Consejo:"})," es una buena t\xe9cnica de programaci\xf3n adoptar la misma convenci\xf3n de nomenclatura que la utilizada por 4D para los m\xe9todos integrados. Utilice may\xfasculas para nombrar sus m\xe9todos; sin embargo, si un m\xe9todo devuelve un valor, ponga en may\xfascula el primer car\xe1cter de su nombre. De este modo, cuando vuelva a abrir un proyecto para su mantenimiento despu\xe9s de unos meses, ya sabr\xe1 si un m\xe9todo devuelve un resultado simplemente mirando su nombre en la ventana del Explorador."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Cuando se llama a un m\xe9todo, s\xf3lo hay que escribir su nombre. Sin embargo, algunos comandos integrados en 4D, como ",(0,o.jsx)(s.code,{children:"ON EVENT CALL"}),", as\xed como tambi\xe9n todos los comandos del plug-in, esperan el nombre de un m\xe9todo como una cadena cuando se pasa un par\xe1metro de tipo m\xe9todo."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:' //Este comando espera un m\xe9todo (funci\xf3n) o una f\xf3rmula\nQUERY BY FORMULA([aTable];Special query)\n //Este comando espera un m\xe9todo (procedimiento) o una instrucci\xf3n\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n //Pero este comando espera un nombre de m\xe9todo\nON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,o.jsx)(s.h2,{id:"tablas-y-campos",children:"Tablas y campos"}),"\n",(0,o.jsx)(s.p,{children:"Una tabla se designa colocando su nombre entre par\xe9ntesis: [...]. Para designar un campo hay que especificar primero la tabla a la que pertenece (el nombre del campo sigue inmediatamente al nombre de la tabla)."}),"\n",(0,o.jsx)(s.p,{children:"Un nombre de tabla y un nombre de campo pueden contener hasta 31 caracteres."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Un nombre de tabla o campo debe comenzar con una letra, un gui\xf3n bajo o un signo d\xf3lar ("$")'}),"\n",(0,o.jsx)(s.li,{children:'A partir de ah\xed, el nombre puede incluir caracteres alfab\xe9ticos, num\xe9ricos, el car\xe1cter espacio y el car\xe1cter de subrayado ("_").'}),"\n",(0,o.jsxs)(s.li,{children:["No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,o.jsx)(s.code,{children:"Date"}),", ",(0,o.jsx)(s.code,{children:"Time"}),", etc), keywords (",(0,o.jsx)(s.code,{children:"If"}),", ",(0,o.jsx)(s.code,{children:"For"}),", etc.), o nombres de constantes (",(0,o.jsx)(s.code,{children:"Euro"}),", ",(0,o.jsx)(s.code,{children:"Black"}),", ",(0,o.jsx)(s.code,{children:"Friday"}),", etc.)."]}),"\n",(0,o.jsx)(s.li,{children:"Deben respetarse reglas adicionales cuando la base deba manejarse v\xeda SQL: s\xf3lo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz, y el nombre no debe incluir ninguna palabra clave SQL (comando, atributo, etc.)."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n'})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["No se recomienda dar el mismo nombre a una tabla y a una ",(0,o.jsx)(s.a,{href:"#classes",children:"clase"}),", para evitar conflictos."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,o.jsxs)(s.p,{children:["El nombre de una variable puede tener hasta 31 caracteres, sin incluir los s\xedmbolos de alcance (",(0,o.jsx)(s.code,{children:"$"})," or ",(0,o.jsx)(s.code,{children:"<>"}),")."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:['Un nombre de variable debe comenzar con una letra, un gui\xf3n bajo o un d\xf3lar ("$") para ',(0,o.jsx)(s.a,{href:"/docs/es/19/Concepts/parameters",children:"par\xe1metros"})," y ",(0,o.jsx)(s.a,{href:"/docs/es/19/Concepts/variables#local-variables",children:"variables locales"}),", o ",(0,o.jsx)(s.code,{children:"<>"})," para ",(0,o.jsx)(s.a,{href:"/docs/es/19/Concepts/variables#interprocess-variables",children:"variables de interproceso"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Un d\xedgito como primer car\xe1cter est\xe1 permitido pero no se recomienda, y no es soportado por la ",(0,o.jsxs)(s.a,{href:"/docs/es/19/Concepts/variables#using-the-var-keyword",children:["sintaxis de declaraci\xf3n ",(0,o.jsx)(s.code,{children:"var"})," "]}),"."]}),"\n",(0,o.jsx)(s.li,{children:'A partir de ah\xed, el nombre puede incluir cualquier letra o d\xedgito, y el caracter de subrayado ("_").'}),"\n",(0,o.jsxs)(s.li,{children:["Un caracter de espacio est\xe1 permitido pero no se recomienda, y no es soportado por la ",(0,o.jsxs)(s.a,{href:"/docs/es/19/Concepts/variables#using-the-var-keyword",children:[" sintaxis de declaraci\xf3n ",(0,o.jsx)(s.code,{children:"var"})," "]}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,o.jsx)(s.code,{children:"Date"}),", ",(0,o.jsx)(s.code,{children:"Time"}),", etc), keywords (",(0,o.jsx)(s.code,{children:"If"}),", ",(0,o.jsx)(s.code,{children:"For"}),", etc.), o nombres de constantes (",(0,o.jsx)(s.code,{children:"Euro"}),", ",(0,o.jsx)(s.code,{children:"Black"}),", ",(0,o.jsx)(s.code,{children:"Friday"}),", etc.)."]}),"\n",(0,o.jsx)(s.li,{children:"Los nombres de las variables son sensibles a las may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'For($vlRecord;1;100) //variable local\n$vsMyString:="Hello there" //variable local\nvar $vName; $vJob : Text //variables locales \nIf(bValidate=1) //variable proceso \n<>vlProcessID:=Current process() //variable interproceso\n'})}),"\n",(0,o.jsx)(s.h2,{id:"otros-nombres",children:"Otros nombres"}),"\n",(0,o.jsxs)(s.p,{children:["En el lenguaje 4D, varios elementos tienen sus nombres manejados como cadenas: ",(0,o.jsx)(s.strong,{children:"formularios"}),", ",(0,o.jsx)(s.strong,{children:"objetos de formulario"}),", ",(0,o.jsx)(s.strong,{children:"selecciones temporales"}),", ",(0,o.jsx)(s.strong,{children:"procesos"}),", ",(0,o.jsx)(s.strong,{children:"conjuntos"}),", ",(0,o.jsx)(s.strong,{children:"barras de men\xfa"}),", etc."]}),"\n",(0,o.jsxs)(s.p,{children:["Estos nombres de cadena pueden contener hasta 255 caracteres, sin incluir los caracteres ",(0,o.jsx)(s.code,{children:"$"})," or ",(0,o.jsx)(s.code,{children:"<>"})," (si los hay)."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Los nombres de las cadenas pueden contener cualquier car\xe1cter."}),"\n",(0,o.jsx)(s.li,{children:"Los nombres de las cadenas son sensibles a las may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//Selecci\xf3n temporal process\nUSE NAMED SELECTION([Customers];"<>ByZipcode") //Selecci\xf3n temporal interproceso\n //Iniciar el proceso global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Iniciar el proceso local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Conjunto process\nUSE SET("<>Deleted Records") //Conjunto interprocess\nIf(Records in set("$Selection"+String($i))>0) //Conjunto client\n\n'})})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return c}});var r=n(667294);let o={},a=r.createContext(o);function c(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);