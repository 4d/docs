"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[953],{683623:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=a(474848),o=a(28453);const i={id:"ob-set",title:"OB SET",slug:"/commands/ob-set",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/ob-set",title:"OB SET",description:"OB SET ( objeto ; propiedad ; valor {; propiedad2 ; valor2 ; ... ; propiedadN ; valorN} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set.md",sourceDirName:"commands-legacy",slug:"/commands/ob-set",permalink:"/docs/es/commands/ob-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-set",title:"OB SET",slug:"/commands/ob-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OB REMOVE",permalink:"/docs/es/commands/ob-remove"},next:{title:"OB SET ARRAY",permalink:"/docs/es/commands/ob-set-array"}},t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ejemplo 7",id:"ejemplo-7",level:4},{value:"Ejemplo 8",id:"ejemplo-8",level:4},{value:"Ejemplo 9",id:"ejemplo-9",level:4},{value:"Ejemplo 10",id:"ejemplo-10",level:4},{value:"Ejemplo 11",id:"ejemplo-11",level:4},{value:"Ejemplo 12",id:"ejemplo-12",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB SET"})," ( ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"propiedad"})," ; ",(0,s.jsx)(n.em,{children:"valor"})," {; ",(0,s.jsx)(n.em,{children:"propiedad2"})," ; ",(0,s.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"propiedadN"})," ; ",(0,s.jsx)(n.em,{children:"valorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Object, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto estructurado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propiedad"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de la propiedad a configurar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nuevo valor de la propiedad"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OB SET"})," crea o modifica uno o m\xe1s pares de ",(0,s.jsx)(n.em,{children:"propiedad"}),"/",(0,s.jsx)(n.em,{children:"valor"})," en el objeto de lenguaje designado por el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"objeto"})," debe haber sido definido usando el comando ",(0,s.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," o designar un campo objeto 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"}),", pase la etiqueta de la propiedad a crear o modificar. Si la propiedad ya existe en ",(0,s.jsx)(n.em,{children:"objeto"}),", su valor se actualiza. Si no existe, se crea."]}),"\n",(0,s.jsxs)(n.p,{children:["Tenga en cuenta, que el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"})," es sensible a las may\xfasculas y min\xfasculas."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"valor"}),", pase el valor que desea definir para la propiedad. Se admiten varios tipos de datos. Tenga en cuenta que:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["si pasa un puntero, se mantiene como es, se eval\xfaa utilizando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"})]}),"\n",(0,s.jsxs)(n.li,{children:['si pasa una fecha, se almacenar\xe1 con el tipo de fecha o como texto en formato ISO dependiendo de la configuraci\xf3n actual de la fecha de la base. Para m\xe1s informaci\xf3n, consulte la opci\xf3n "Utilizar tipo de fecha en lugar de formato de fecha ISO en objetos" en ',(0,s.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["si pasa una hora, se almacena en forma de un n\xfamero de segundos (real) en ",(0,s.jsx)(n.em,{children:"objeto"})]}),"\n",(0,s.jsx)(n.li,{children:"si pasa un objeto de lenguaje o una colecci\xf3n, el comando utiliza una referencia y no una copia. Toda modificaci\xf3n aplicada al objeto o colecci\xf3n se informar\xe1 a todas las referencias"}),"\n",(0,s.jsxs)(n.li,{children:["a partir de 4D v16 R4, puede pasar una imagen de todo tipo soportado (ver ",(0,s.jsx)(n.em,{children:"Formatos nativos soportados"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Creaci\xf3n de un objeto y adici\xf3n de una propiedad de tipo texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"FirstName";"John";"LastName";"Smith")\n\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Creaci\xf3n de un objeto y adici\xf3n de una propiedad de tipo booleano:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"smith";"age";42;"client";True)\n\xa0\xa0// $Object = {"LastName":"smith","age":42,"client":true}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Modificaci\xf3n de una propiedad:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"FirstName";"Paul")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de una propiedad:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"department";"Accounting")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Renombrando una propiedad:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"James";"age";35)\n\xa0\xa0// $Object = {"LastName":"James","age":35}\n\xa0OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))\n\xa0\xa0// $Object = {"FirstName":""James","nom":"James","age":35}\n\xa0OB REMOVE($Object ;"LastName")\n\xa0\xa0// $Object = {"FirstName":""James","age":35}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,s.jsx)(n.p,{children:"Usando un puntero:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n\xa0var $LastName : Text\n\xa0OB SET($Object ;"LastName";->$LastName)\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"->$LastName"}\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":""}\n\xa0$LastName:="Wesson"\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":"Wesson"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,s.jsx)(n.p,{children:"Usando un objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_smith : Object\n\xa0OB SET($ref_smith ;"name";"Smith")\n\xa0var $ref_emp : Object\n\xa0OB SET($ref_emp ;"employee";$ref_smith)\n\xa0$Json_string :=JSON Stringify($ref_emp)\n\xa0\xa0// $ref_emp = {"employee":{"name":"Smith"}} (object)\n\xa0\xa0// $Json_string = "{"employee":{"name":"Smith"}}" (string)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n puede cambiar un valor sobre la marcha:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref_smith ;"name";"Smyth")\n\xa0\xa0// $ref_smith = {"employee":{"name":"Smyth"}}\n\xa0$string:=JSON Stringify($ref_emp)\n\xa0\xa0// $string = "{"employee":{"name":"Smyth"}}"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-8",children:"Ejemplo 8"}),"\n",(0,s.jsx)(n.p,{children:"Si ha definido el campo [Rect]Desc como un campo objeto, puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Rect])\n\xa0[Rect]Name:="Blue square"\n\xa0OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")\n\xa0SAVE RECORD([Rect])\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-9",children:"Ejemplo 9"}),"\n",(0,s.jsxs)(n.p,{children:["Usted quiere exportar datos en JSON que contienen una fecha 4D que desea convertir en una cadena sin informaci\xf3n de zona horaria. Note que la conversi\xf3n ocurre cuando la fecha se guarda en el objeto, debe llamar al comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," antes de llamar a ",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set",children:"OB SET"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$vDateSetting:=Get database parameter(Dates inside objects)\xa0//guardar la configuraci\xf3n actual\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0OB SET($o ;"myDate";Current date)\xa0// conversi\xf3n JSON\n\xa0$json:=JSON Stringify($o)\n\xa0SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-10",children:"Ejemplo 10"}),"\n",(0,s.jsx)(n.p,{children:"En un m\xe9todo formulario, puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n puede leer los atributos personalizados de los documentos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-11",children:"Ejemplo 11"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea definir una colecci\xf3n como un valor propiedad. Puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $myCol : Collection\n\xa0\n\xa0$person:=OB New\n\xa0$myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)\n\xa0OB SET($person;"Name";"Jones";"Children";$myCol)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-12",children:"Ejemplo 12"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea almacenar una imagen en un campo objeto. Puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0READ PICTURE FILE("photo.jpg";$vPict)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OB SET([Emp]Children;"photo";$vPict)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-get",children:"OB Get"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-remove",children:"OB REMOVE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set-array",children:"OB SET ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set-null",children:"OB SET NULL"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var s=a(296540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);