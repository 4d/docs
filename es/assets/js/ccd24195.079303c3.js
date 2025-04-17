"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91599"],{159489:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>t,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/ob-get","title":"OB Get","description":"OB Get ( objeto ; propiedad {; tipo} ) : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ob-get.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get","permalink":"/docs/es/commands/ob-get","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ob-get","title":"OB Get","slug":"/commands/ob-get","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Entries","permalink":"/docs/es/commands/ob-entries"},"next":{"title":"OB GET ARRAY","permalink":"/docs/es/commands/ob-get-array"}}'),s=r("785893"),d=r("250065");let o={id:"ob-get",title:"OB Get",slug:"/commands/ob-get",displayed_sidebar:"docs"},l=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ejemplo 6",id:"ejemplo-6",level:2},{value:"Ejemplo 7",id:"ejemplo-7",level:2},{value:"Ejemplo 8",id:"ejemplo-8",level:2},{value:"Ejemplo 9",id:"ejemplo-9",level:2},{value:"Ejemplo 10",id:"ejemplo-10",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB Get"})," ( ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"propiedad"})," {; ",(0,s.jsx)(n.em,{children:"tipo"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Object, Campo Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto estructurado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propiedad"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de la propiedad a leer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo al cual convertir el valor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor actual de propiedad"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OB Get"})," devuelve el valor actual de la ",(0,s.jsx)(n.em,{children:"propiedad"})," del ",(0,s.jsx)(n.em,{children:"objeto"}),", convertido opcionalmente en el ",(0,s.jsx)(n.em,{children:"tipo"})," definido.debe haber sido definido con el comando ",(0,s.jsx)(n.em,{children:"C_OBJECT"})," o designar un campo objeto 4D."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando soporta definiciones de atributo en ",(0,s.jsx)(n.em,{children:"objetos"})," 4D Write Pro, como el comando ",(0,s.jsx)(n.em,{children:"WP GET ATTRIBUTES"})," (ver el ejemplo 9)."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"}),", pase la etiqueta de la propiedad a leer. Tenga en cuenta que el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"})," es sensible a may\xfasculas y min\xfasculas"]}),"\n",(0,s.jsxs)(n.p,{children:['Por defecto, 4D devuelve el valor de la propiedad en su tipo original. Puede "forzar" la escritura del valor devuelto utilizando el par\xe1metro opcional ',(0,s.jsx)(n.em,{children:"tipo"}),". Para ello, en ",(0,s.jsx)(n.em,{children:"tipo"})," pase una de las siguientes constantes que se encuentran en el tema ",(0,s.jsx)(n.em,{children:"Tipos de campos y variables"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is Boolean"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is collection"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is date"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is longint"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is null"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"255"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is object"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"38"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is picture"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is pointer"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"23"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is real"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is text"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is time"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["El comando devuelve el valor de la ",(0,s.jsx)(n.em,{children:"propiedad"}),". Varios tipos de datos est\xe1n soportados. Tenga en cuenta que:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["un puntero se devuelve tal cual, puede ser evaluado utilizando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,s.jsxs)(n.li,{children:['dependiendo de la configuraci\xf3n de la fecha de la base, las fechas en los atributos objeto se almacenan con el tipo de fecha o el tipo de texto (a partir de 4D v16 R6). Para m\xe1s informaci\xf3n, consulte la opci\xf3n "Utilizar tipo de fecha en lugar del formato de fecha ISO en objetos" en ',(0,s.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),". Para que ",(0,s.jsx)(n.strong,{children:"OB Get"})," interprete correctamente una fecha almacenada como un texto, debe usar la constante Is date (ver ejemplo 5)."]}),"\n",(0,s.jsx)(n.li,{children:'en valores reales, el separador decimal es siempre un punto "."'}),"\n",(0,s.jsxs)(n.li,{children:["las horas se devuelven como un n\xfamero. Las horas se almacenan en segundos por defecto en los objetos (ver nota de compatibilidad abajo). Note que ",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set",children:"OB SET"})," almacena las horas en forma de milisegundos, conforme al est\xe1ndar JavaScript, mientras 4D espera un n\xfamero de segundos. Para una interpretaci\xf3n correcta por ",(0,s.jsx)(n.strong,{children:"OB Get"})," de una hora almacenada, utilice la constante Is null."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas de compatibilidad:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(4D Write Pro) En versiones anteriores a la v17, las horas eran almacenadas en milisegundos en los objetos. Por razones de compatibilidad, este comportamiento anterior puede restablecerse con ayuda del selector Times inside objects del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),". Cualquiera que sea el par\xe1metro, el resultado ser\xe1 correcto cuando se utilice la constante Is time."]}),"\n",(0,s.jsxs)(n.li,{children:["(",(0,s.jsx)(n.em,{children:"4D Write Pro"}),") En versiones anteriores a v16 R6, cuando ",(0,s.jsx)(n.em,{children:"propiedad"})," defin\xeda un atributo de imagen 4D Write Pro (como wk image), siempre se devolv\xeda un valor de texto que conten\xeda un URI de datos. A partir de 4D v16 R6, los atributos imagen 4D Write Pro siempre se devuelven como valores imagen. Debe usar una ",(0,s.jsx)(n.em,{children:"propiedad"})," espec\xedfica como wk image url ara obtener un URI de datos."]}),"\n",(0,s.jsxs)(n.li,{children:["En versiones anteriores a v16 R4, cuando ",(0,s.jsx)(n.em,{children:"propiedad"})," contiene un valor nulo y si no se utiliza el par\xe1metro ",(0,s.jsx)(n.em,{children:"tipo"}),', 4D devuelve una cadena vac\xeda. En 4D v16 R4 y superiores, la constante Is null se devuelve en este caso. Para conservar la compatibilidad, este cambio solo surte efecto si la opci\xf3n "Utilizar la notaci\xf3n objetos para acceder a las propiedades de objetos (se requiere Unicode) " est\xe1 habilitada en la base (ver el p\xe1rrafo ',(0,s.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n de un valor de tipo texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0var $FirstName : Text\n\xa0OB SET($ref;"FirstName";"Harry")\n\xa0$FirstName:=OB Get($ref;"FirstName")\xa0// $FirstName = "Harry" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n de un valor real convertido en entero largo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref ;"age";42)\n\xa0$age:=OB Get($ref ;"age")\xa0// $age es un n\xfamero real (default)\n\xa0$age:=OB Get($ref ;"age";Is longint)\xa0// $age es un entero largo\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n de los valores de un objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$ref2 : Object\n\xa0OB SET($ref1;"LastName";"Smith")\xa0// $ref1={"LastName":"Smith"}\n\xa0OB SET($ref2;"son";$ref1)\xa0// $ref2={"son":{"LastName":"Smith"}}\n\xa0$son:=OB Get($ref2;"son")\xa0// $son={"LastName":"john"} (object)\n\xa0$sonsName:=OB Get($son ;"name")\xa0// $sonsName="john" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Modificando de la edad de un empleado dos veces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_john;$ref_jim : Object\n\xa0OB SET($ref_john;"name";"John";"age";35)\n\xa0OB SET($ref_jim;"name";"Jim";"age";40)\n\xa0APPEND TO ARRAY($myArray;$ref_john)\xa0// creamos un objeto array\n\xa0APPEND TO ARRAY($myArray;$ref_jim)\n\xa0\xa0// cambiamos la edad de John de 35 a 25\n\xa0OB SET($myArray{1};"age";25)\n\xa0\xa0// cambiamos la edad de "John" en el array\n\xa0For($i;1;Size of array($myArray))\n\xa0\xa0\xa0\xa0If(OB Get($myArray{$i};"name")="John")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OB SET($myArray{$i};"age";36)\xa0// en cambio de 25\n\xa0\xa0// $ref_john={"name":"John","age":36}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Al recuperar una fecha, el valor resultante depende de la configuraci\xf3n actual de la fecha de la base."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Si la opci\xf3n "Utilizar tipo fecha en lugar del formato de fecha ISO en objetos" no est\xe1 seleccionada:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0var $birthdayString : Text\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday";Is date)\xa0//30/01/10\n\xa0$birthdayString:=OB Get($object;"Birthday")\xa0//"2010-01-29T23:00:00.000Z" (Paris time zone)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Si la opci\xf3n "Utilizar tipo fecha en lugar del formato de fecha ISO en objetos" est\xe1 seleccionada:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday")\xa0//30/01/10, no hay necesidad de Is date\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n sobre esta configuraci\xf3n, consulte ",(0,s.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,s.jsx)(n.p,{children:"Utilizaci\xf3n de objetos anidados:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$child;$children : Object\n\xa0var $childName : Text\n\xa0OB SET($ref1;"firstname";"John";"lastname";"Monroe")\n\xa0\xa0//{"firstname":"john","lastname";"Monroe"}\n\xa0OB SET($children;"children";$ref1)\n\xa0$child:=OB Get($children;"children")\n\xa0\xa0//$son = {"firstname":"John","lastname":"Monroe"} (object)\n\xa0$childName:=OB Get($child;"lastname")\n\xa0\xa0//$childName = "Monroe" (text)\n\xa0\xa0//o\n\xa0$childName:=OB Get(OB Get($children;"children");"lastname")\n\xa0\xa0// $childName = "Monroe" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n en 4D de una hora almacenada en un objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj_o : Object\n\xa0var $set_h;$get_h : Time\n\xa0\n\xa0$set_h:=?01:00:00?+1\n\xa0OB SET($obj_o;"myHour";$set_h)\n\xa0\xa0// $obj_o = {"myHour":3601}\n\xa0\xa0// La hora se almacena en segundos\n\xa0$get_h:=OB Get($obj_o;"myHour";Is time)\n\xa0\xa0// $get_h = ?01:00:01?\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-8",children:"Ejemplo 8"}),"\n",(0,s.jsx)(n.p,{children:"Ejemplos de manipulaci\xf3n de campos objeto 4D:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Definir un valor\n\xa0OB SET([People]Identity_OB;"First name";$firstName)\n\xa0OB SET([People]Identity_OB;"Last name";$lastName)\n\xa0\n\xa0\xa0// Obtener un valor\n\xa0$firstName:=OB Get([People]Identity_OB;"First name")\n\xa0$lastName:=OB Get([People]Identity_OB;"Last name")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-9",children:"Ejemplo 9"}),"\n",(0,s.jsx)(n.p,{children:"En un m\xe9todo formulario, puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n puede leer los atributos personalizados de los documentos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-10",children:"Ejemplo 10"}),"\n",(0,s.jsx)(n.p,{children:"Desea conocer el tama\xf1o de una imagen almacenada en un atributo objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vSize : Integer\n\xa0$vSize:=Picture size(OB Get($object;"photo";Is picture))\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si asigna el resultado del comando a una variable imagen, la constante Is picture no es necesaria. Ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0$vPict:=OB Get($object;"photo")\xa0//"is picture" es in\xfatil en este caso\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-copy",children:"OB Copy"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set",children:"OB SET"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Tipos de campos y variables"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1224"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var a=r(667294);let s={},d=a.createContext(s);function o(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);