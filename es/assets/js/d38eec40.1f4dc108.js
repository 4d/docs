"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22787"],{552595:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"commands/this","title":"This","description":"This : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/this.md","sourceDirName":"commands","slug":"/commands/this","permalink":"/docs/es/commands/this","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fthis.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"this","title":"This","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Super","permalink":"/docs/es/commands/super"},"next":{"title":"TRACE","permalink":"/docs/es/commands/trace"}}'),r=s("785893"),c=s("250065");let o={id:"this",title:"This",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Funci\xf3n de clase",id:"funci\xf3n-de-clase",level:4},{value:"Objeto f\xf3rmula",id:"objeto-f\xf3rmula",level:4},{value:"List box",id:"list-box",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"This"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Elemento u objeto actual"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"This"})," command returns a reference to the currently processed object."]}),"\n",(0,r.jsxs)(n.p,{children:["En la mayor\xeda de los casos, el valor de ",(0,r.jsx)(n.code,{children:"This"})," est\xe1 determinado por c\xf3mo se llama una funci\xf3n. No se puede definir por asignaci\xf3n durante la ejecuci\xf3n, y puede ser diferente cada vez que se llame a la funci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["This command can be used in different contexts, described below. Within these contexts, you will access object/collection element properties or entity attributes through ",(0,r.jsxs)(n.strong,{children:["This.<",(0,r.jsx)(n.em,{children:"propertyPath"}),">"]}),". For example, ",(0,r.jsx)(n.em,{children:"This.name"})," or ",(0,r.jsx)(n.em,{children:"This.employer.lastName"})," are valid pathes to object, element or entity properties."]}),"\n",(0,r.jsxs)(n.p,{children:["In any other context, the command returns ",(0,r.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"funci\xf3n-de-clase",children:"Funci\xf3n de clase"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se utiliza una ",(0,r.jsx)(n.a,{href:"#class-constructor",children:"funci\xf3n constructora de clase"})," (con la funci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/API/ClassClass#new",children:(0,r.jsx)(n.code,{children:"new()"})}),"), su ",(0,r.jsx)(n.code,{children:"This"})," est\xe1 vinculado al nuevo objeto que se est\xe1 construyendo."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//Class: ob\n\nClass Constructor  \n\n // Create properties on This as\n // desired by assigning to them\n\n This.a:=42\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"// en un m\xe9todo 4D  \n$o:=cs.ob.new()\n$val:=$o.a //42\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Al llamar a la superclase del constructor en un constructor utilizando la palabra clave ",(0,r.jsx)(n.a,{href:"#super",children:"Super"}),", tenga en cuenta que ",(0,r.jsx)(n.code,{children:"This"})," no debe ser llamado antes del constructor de la superclase, de lo contrario se genera un error. Ver ",(0,r.jsx)(n.a,{href:"/docs/es/commands/super#example-1",children:"este ejemplo"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En todos los casos, ",(0,r.jsx)(n.code,{children:"This"})," se refiere al objeto sobre el que se ha llamado el m\xe9todo, como si el m\xe9todo fuera una funci\xf3n del objeto."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//Clase: ob\n\nFunction f() : Integer\n return This.a+This.b\n"})}),"\n",(0,r.jsx)(n.p,{children:"Entonces puede escribir en un m\xe9todo proyecto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$o:=cs.ob.new()\n$o.a:=5\n$o.b:=3\n$val:=$o.f() //8\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad ",(0,r.jsx)(n.em,{children:"f"}),", la hereda de su clase. Como ",(0,r.jsx)(n.em,{children:"f"})," es llamado como un m\xe9todo de $o, su ",(0,r.jsx)(n.code,{children:"This"})," se refiere a $o."]}),"\n",(0,r.jsx)(n.h4,{id:"objeto-f\xf3rmula",children:"Objeto f\xf3rmula"}),"\n",(0,r.jsxs)(n.p,{children:["En el contexto de la ejecuci\xf3n de un objeto f\xf3rmula creado por los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/formula",children:"Formula"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/formula-from-string",children:"Formula from string"}),", ",(0,r.jsx)(n.code,{children:"This"})," devuelve una referencia al objeto actualmente procesado por la f\xf3rmula."]}),"\n",(0,r.jsx)(n.p,{children:"For example, you want to use a project method as a formula encapsulated in an object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $person : Object := New object\n $person.firstName:="John"\n $person.lastName:="Smith"\n $person.greeting:=Formula(Greeting)\n $g:=$person.greeting("hello") // devuelve "hola John Smith"\n $g:=$person.greeting("hi") // devuelve "hi John Smith"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.em,{children:"Greeting"})," project method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' #DECLARE($greeting : Text) : Text\n return $greeting+" "+This.firstName+" "+This.lastName\n'})}),"\n",(0,r.jsx)(n.h4,{id:"list-box",children:"List box"}),"\n",(0,r.jsxs)(n.p,{children:["En el contexto de un list box asociado a una colecci\xf3n o una selecci\xf3n de entidades, durante los eventos ",(0,r.jsx)(n.a,{href:"/docs/es/Events/onDisplayDetail",children:(0,r.jsx)(n.code,{children:"On Display Detail"})})," o ",(0,r.jsx)(n.a,{href:"/docs/es/Events/onDataChange",children:(0,r.jsx)(n.code,{children:"On Data Change"})}),", ",(0,r.jsx)(n.code,{children:"This"})," devuelve una referencia al elemento de colecci\xf3n o entidad a la que accede el list box para mostrar la l\xednea actual."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you use a collection of scalar values in a list box, 4D creates an object for each element with a single ",(0,r.jsx)(n.strong,{children:"value"})," property. Thus, the element value is returned by the ",(0,r.jsx)(n.strong,{children:"This.value"})," non-assignable expression."]})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"A collection of objects, each with this structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{  \n"ID": 1234\n"name": "Xavier",  \n"revenues": 47300,  \n"employees": [  \n             "Allan",  \n             "Bob", \n             "Charlie"  \n            ] \n},{  \n"ID": 2563\n"name": "Carla",  \n"revenues": 55000,  \n"isFemale": true\n"employees": [  \n             "Igor",  \n             "Jane"  \n            ] \n},...\n \n'})}),"\n",(0,r.jsxs)(n.p,{children:["En el list box, cada columna se refiere a una de las propiedades del objeto, ya sea directamente (This.name), indirectamente (This.employees.length), o a trav\xe9s de una expresi\xf3n (",(0,r.jsx)(n.em,{children:"getPicture"}),") en la que se puede usar directamente. The list box looks like:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(8100).Z+"",width:"687",height:"63"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"GetPicture"})," project method is automatically executed during the ",(0,r.jsx)(n.strong,{children:"On display detail"})," event:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  //GetPicture Method\n #DECLARE -> $genderPict : Picture\n If(This.isFemale)\n    $genderPict:=Form.genericFemaleImage\n Else\n    $genderPict:=Form.genericMaleImage\n End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the form is executed, you can see the result:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(961153).Z+"",width:"683",height:"162"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to display entities from the following structure in a list box:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(487255).Z+"",width:"366",height:"561"})}),"\n",(0,r.jsx)(n.p,{children:'You build a list box of the "Collection or entity selection" type with the following definition:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(271338).Z+"",width:"818",height:"195"})}),"\n",(0,r.jsx)(n.p,{children:"Note que:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"This.ID"}),", ",(0,r.jsx)(n.em,{children:"This.Title"})," and ",(0,r.jsx)(n.em,{children:"This.Date"})," directly refers to the corresponding attributes in the ds.Event dataclass."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"This.meetings"})," es un atributo relacionado (basado en el nombre de una relaci\xf3n de Uno a Muchos) que devuelve una selecci\xf3n de entidad de la base de datos ds.Meeting."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Form.eventList"})," is the entity selection that is attached to the list box. The initialization code can be put in the on load form event:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" Case of  \n    :(Form event code=On Load)  \n       Form.eventList:=ds.Event.all() //devuelve una selecci\xf3n de entidad con todas las entidades  \n End case  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the form is executed, the list box is automatically filled with the entity selection:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(160150).Z+"",width:"457",height:"139"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/self",children:"Self"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/super",children:"Super"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1470"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8100:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},961153:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3783169.en-d54ca77bf3b51d0a3ab51f4185882eef.png"},487255:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3872836.en-82c4e3bf050f4de490736c9fa7db5aee.png"},271338:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3872844.en-bcf9c4a039acc9f80cae5c3fef705224.png"},160150:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let r={},c=t.createContext(r);function o(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);