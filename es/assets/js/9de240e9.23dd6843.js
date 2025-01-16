"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30193"],{902705:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>r,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"API/ClassClass","title":"Class","description":"Cuando una clase usuario es definida en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en s\xed mismo, de la clase \\"Class\\", que tiene propiedades y una funci\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/API/ClassClass.md","sourceDirName":"API","slug":"/API/ClassClass","permalink":"/docs/es/20-R7/API/ClassClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FClassClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ClassClass","title":"Class"},"sidebar":"docs","previous":{"title":"Blob","permalink":"/docs/es/20-R7/API/BlobClass"},"next":{"title":"Collection","permalink":"/docs/es/20-R7/API/CollectionClass"}}'),l=n("785893"),c=n("250065");let d={id:"ClassClass",title:"Class"},a=void 0,r={},o=[{value:"Resumen",id:"resumen",level:3},{value:".isSessionSingleton",id:"issessionsingleton",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".isShared",id:"isshared",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".isSingleton",id:"issingleton",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".me",id:"me",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".name",id:"name",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".new()",id:"new",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:".superclass",id:"superclass",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4}];function t(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Cuando una clase usuario es ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#class-definition",children:"definida"}),' en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en s\xed mismo, de la clase "Class", que tiene propiedades y una funci\xf3n.']}),"\n",(0,l.jsx)(s.h3,{id:"resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsx)(s.tr,{children:(0,l.jsx)(s.th,{})})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#issessionsingleton",children:[(0,l.jsx)(s.strong,{children:".isSessionSingleton"})," : Boolean"]}),(0,l.jsx)(s.br,{}),"devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase usuario ha sido definida como una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton de sesi\xf3n"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#isshared",children:[(0,l.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),(0,l.jsx)(s.br,{}),"devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase de usuario ha sido definida como ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#shared-classes",children:"clase compartida"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#issingleton",children:[(0,l.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),(0,l.jsx)(s.br,{}),"devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase usuario ha sido definida como una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#me",children:[(0,l.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),(0,l.jsx)(s.br,{}),"devuelve la instancia \xfanica de la clase singleton ",(0,l.jsx)(s.code,{children:"cs.className"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#name",children:[(0,l.jsx)(s.strong,{children:".name"})," : Text"]}),(0,l.jsx)(s.br,{}),"contiene el nombre del objeto ",(0,l.jsx)(s.code,{children:"4D.Class"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#new",children:[(0,l.jsx)(s.strong,{children:".new"}),"( { ",(0,l.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),(0,l.jsx)(s.br,{}),"crea y devuelve un objeto ",(0,l.jsx)(s.code,{children:"cs.className"})," que es una nueva instancia de la clase sobre la que se llama"]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#superclass",children:[(0,l.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),(0,l.jsx)(s.br,{}),"devuelve la clase padre de la clase"]})})]})]}),"\n",(0,l.jsx)(s.h2,{id:"issessionsingleton",children:".isSessionSingleton"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R7"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".isSessionSingleton"})," : Boolean"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".isSessionSingleton"})," devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase usuario ha sido definida como una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton de sesi\xf3n"}),", y ",(0,l.jsx)(s.code,{children:"false"})," en caso contrario."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"isshared",children:".isShared"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".isShared"})," devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase de usuario ha sido definida como ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#shared-classes",children:"clase compartida"}),", y ",(0,l.jsx)(s.code,{children:"false"})," en caso contrario."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"issingleton",children:".isSingleton"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".isSingleton"})," devuelve ",(0,l.jsx)(s.code,{children:"true"})," si la clase usuario ha sido definida como una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton"}),", y ",(0,l.jsx)(s.code,{children:"false"})," en caso contrario."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"me",children:".me"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".me"})," devuelve la instancia \xfanica de la clase singleton ",(0,l.jsx)(s.code,{children:"cs.className"}),". Si la clase singleton nunca fue instanciada de antemano, esta propiedad llama al constructor de la clase sin par\xe1metros y crea la instancia. En caso contrario, devuelve la instancia singleton existente."]}),"\n",(0,l.jsxs)(s.p,{children:["Si ",(0,l.jsx)(s.code,{children:"cs.className"})," no es una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton"}),", ",(0,l.jsx)(s.code,{children:".me"})," es ",(0,l.jsx)(s.strong,{children:"undefined"})," por defecto."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"name",children:".name"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".name"})," : Text"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".name"})," contiene el nombre del objeto ",(0,l.jsx)(s.code,{children:"4D.Class"}),". ."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"new",children:".new()"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".new"}),"( { ",(0,l.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Par\xe1metros"}),(0,l.jsx)(s.th,{children:"Tipo"}),(0,l.jsx)(s.th,{style:{textAlign:"center"}}),(0,l.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"param"}),(0,l.jsx)(s.td,{children:"any"}),(0,l.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(s.td,{children:"Par\xe1metro(s) a pasar a la funci\xf3n constructor"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Result"}),(0,l.jsx)(s.td,{children:"4D.Class"}),(0,l.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(s.td,{children:"Nuevo objeto de la clase"})]})]})]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La funci\xf3n ",(0,l.jsx)(s.code,{children:".new()"})," crea y devuelve un objeto ",(0,l.jsx)(s.code,{children:"cs.className"})," que es una nueva instancia de la clase sobre la que se llama. Esta funci\xf3n est\xe1 disponible autom\xe1ticamente en todas las clases a partir del ",(0,l.jsxs)(s.a,{href:"/docs/es/20-R7/Concepts/classes#cs",children:["class store ",(0,l.jsx)(s.code,{children:"cs"})]}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Puede pasar uno o m\xe1s par\xe1metros opcionales ",(0,l.jsx)(s.em,{children:"param"}),", que se pasar\xe1n a la ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#class-constructor",children:"funci\xf3n class constructor"})," (si existe) en la definici\xf3n de la clase ",(0,l.jsx)(s.em,{children:"className"}),". Dentro de la funci\xf3n constructor, el ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#this",children:(0,l.jsx)(s.code,{children:"This"})})," est\xe1 vinculado al nuevo objeto que se est\xe1 construyendo."]}),"\n",(0,l.jsx)(s.admonition,{title:"Notas",type:"note",children:(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Si se llama a ",(0,l.jsx)(s.code,{children:".new()"})," en una ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#singleton-classes",children:"clase singleton"})," que ya ha sido instanciada, se devuelve la instancia singleton, no una nueva instancia."]}),"\n",(0,l.jsxs)(s.li,{children:["Si se llama a ",(0,l.jsx)(s.code,{children:".new()"})," en una clase inexistente, se devuelve un error."]}),"\n"]})}),"\n",(0,l.jsx)(s.h4,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(s.p,{children:"Para crear una nueva instancia de la clase Person:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $person : cs.Person  \n$person:=cs.Person.new() //crear la nueva instancia  \n//$person contiene las funciones de la clase\n"})}),"\n",(0,l.jsx)(s.p,{children:"Para crear una nueva instancia de la clase Person con par\xe1metros:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"//Class: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n	This.firstName:=$firstname\n	This.lastName:=$lastname\n	This.age:=$age\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'//En un m\xe9todo\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n//$person.firstName = "John"\n//$person.lastName = "Doe"\n//$person.age = 40\n'})}),"\n",(0,l.jsx)(s.h2,{id:"superclass",children:".superclass"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Lanzamiento"}),(0,l.jsx)(s.th,{children:"Modificaciones"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["La propiedad ",(0,l.jsx)(s.code,{children:".superclass"})," devuelve la clase padre de la clase. Una superclase puede ser un objeto ",(0,l.jsx)(s.code,{children:"4D.Class"}),", o un objeto ",(0,l.jsx)(s.code,{children:"cs.className"}),". Si la clase no tiene una clase padre, la propiedad devuelve ",(0,l.jsx)(s.strong,{children:"null"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Una superclase de una clase usuario se declara en una clase utilizando la palabra clave ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#class-extends-classname",children:(0,l.jsx)(s.code,{children:"Class extends <superclass>"})}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Esta propiedad es de ",(0,l.jsx)(s.strong,{children:"solo lectura"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"ejemplos-1",children:"Ejemplos"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"$sup:=4D.File.superclass //Document\n$sup:=4D.Document.superclass //Object\n$sup:=4D.Object.superclass //null\n\n// Si cre\xf3 una clase MyFile\n// with `Class extends File`\n$sup:=cs.MyFile.superclass //File\n\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Ver tambi\xe9n:"})," ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/classes#super",children:"Super"})]})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var i=n(667294);let l={},c=i.createContext(l);function d(e){let s=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);