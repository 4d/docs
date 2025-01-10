"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18424"],{815424:function(s,e,n){n.r(e),n.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"API/ClassClass","title":"Class","description":"When a user class is defined in the project, it is loaded in the 4D language environment. A class is an object itself, of \\"Class\\" class, which has properties and a function.","source":"@site/versioned_docs/version-20-R6/API/ClassClass.md","sourceDirName":"API","slug":"/API/ClassClass","permalink":"/docs/20-R6/API/ClassClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FClassClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"ClassClass","title":"Class"},"sidebar":"docs","previous":{"title":"Blob","permalink":"/docs/20-R6/API/BlobClass"},"next":{"title":"Collection","permalink":"/docs/20-R6/API/CollectionClass"}}'),l=n("785893"),i=n("250065");let c={id:"ClassClass",title:"Class"},t=void 0,d={},a=[{value:"Summary",id:"summary",level:3},{value:".isShared",id:"isshared",level:2},{value:"Description",id:"description",level:4},{value:".isSingleton",id:"issingleton",level:2},{value:"Description",id:"description-1",level:4},{value:".me",id:"me",level:2},{value:"Description",id:"description-2",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-3",level:4},{value:".new()",id:"new",level:2},{value:"Description",id:"description-4",level:4},{value:"Examples",id:"examples",level:4},{value:".superclass",id:"superclass",level:2},{value:"Description",id:"description-5",level:4},{value:"Examples",id:"examples-1",level:4}];function h(s){let e={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["When a user class is ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#class-definition",children:"defined"}),' in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.']}),"\n",(0,l.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsx)(e.tr,{children:(0,l.jsx)(e.th,{})})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#isshared",children:[(0,l.jsx)(e.strong,{children:".isShared"})," : Boolean"]}),(0,l.jsx)(e.br,{}),"returns ",(0,l.jsx)(e.code,{children:"true"})," if the user class has been defined as ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#shared-classes",children:"shared class"})]})}),(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#issingleton",children:[(0,l.jsx)(e.strong,{children:".isSingleton"})," : Boolean"]}),(0,l.jsx)(e.br,{}),"returns ",(0,l.jsx)(e.code,{children:"true"})," if the user class has been defined as a ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#singleton-classes",children:"singleton class"})]})}),(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#me",children:[(0,l.jsx)(e.strong,{children:".me"})," : 4D.Class"]}),(0,l.jsx)(e.br,{}),"returns the singleton instance of the ",(0,l.jsx)(e.code,{children:"cs.className"})," singleton class"]})}),(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#name",children:[(0,l.jsx)(e.strong,{children:".name"})," : Text"]}),(0,l.jsx)(e.br,{}),"contains the name of the ",(0,l.jsx)(e.code,{children:"4D.Class"})," object"]})}),(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#new",children:[(0,l.jsx)(e.strong,{children:".new"}),"( { ",(0,l.jsx)(e.em,{children:"...param"})," : any } ) : 4D.Class"]}),(0,l.jsx)(e.br,{}),"creates and returns a ",(0,l.jsx)(e.code,{children:"cs.className"})," object which is a new instance of the class on which it is called"]})}),(0,l.jsx)(e.tr,{children:(0,l.jsxs)(e.td,{children:[(0,l.jsxs)(e.a,{href:"#superclass",children:[(0,l.jsx)(e.strong,{children:".superclass"})," : 4D.Class"]}),(0,l.jsx)(e.br,{}),"returns the parent class of the class"]})})]})]}),"\n",(0,l.jsx)(e.h2,{id:"isshared",children:".isShared"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"20 R5"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".isShared"})," : Boolean"]}),"\n",(0,l.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".isShared"})," property returns ",(0,l.jsx)(e.code,{children:"true"})," if the user class has been defined as ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#shared-classes",children:"shared class"}),", and ",(0,l.jsx)(e.code,{children:"false"})," otherwise."]}),"\n",(0,l.jsxs)(e.p,{children:["This property is ",(0,l.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"issingleton",children:".isSingleton"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"20 R5"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".isSingleton"})," : Boolean"]}),"\n",(0,l.jsx)(e.h4,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".isSingleton"})," property returns ",(0,l.jsx)(e.code,{children:"true"})," if the user class has been defined as a ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#singleton-classes",children:"singleton class"}),", and ",(0,l.jsx)(e.code,{children:"false"})," otherwise."]}),"\n",(0,l.jsxs)(e.p,{children:["This property is ",(0,l.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"me",children:".me"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"20 R5"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".me"})," : 4D.Class"]}),"\n",(0,l.jsx)(e.h4,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".me"})," property returns the singleton instance of the ",(0,l.jsx)(e.code,{children:"cs.className"})," singleton class. If the singleton class was never instantiated beforehand, this property calls the class constructor without parameters and creates the instance. Otherwise, it returns the existing singleton instance."]}),"\n",(0,l.jsxs)(e.p,{children:["If ",(0,l.jsx)(e.code,{children:"cs.className"})," is not a ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#singleton-classes",children:"singleton class"}),", ",(0,l.jsx)(e.code,{children:".me"})," is ",(0,l.jsx)(e.strong,{children:"undefined"})," by default."]}),"\n",(0,l.jsxs)(e.p,{children:["This property is ",(0,l.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"name",children:".name"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"18 R3"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".name"})," : Text"]}),"\n",(0,l.jsx)(e.h4,{id:"description-3",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".name"})," property contains the name of the ",(0,l.jsx)(e.code,{children:"4D.Class"})," object. Class names are case sensitive."]}),"\n",(0,l.jsxs)(e.p,{children:["This property is ",(0,l.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"new",children:".new()"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"18 R3"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".new"}),"( { ",(0,l.jsx)(e.em,{children:"...param"})," : any } ) : 4D.Class"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Type"}),(0,l.jsx)(e.th,{style:{textAlign:"center"}}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"param"}),(0,l.jsx)(e.td,{children:"any"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(e.td,{children:"Parameter(s) to pass to the constructor function"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Result"}),(0,l.jsx)(e.td,{children:"4D.Class"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(e.td,{children:"New object of the class"})]})]})]}),"\n",(0,l.jsx)(e.h4,{id:"description-4",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".new()"})," function creates and returns a ",(0,l.jsx)(e.code,{children:"cs.className"})," object which is a new instance of the class on which it is called. This function is automatically available on all classes from the ",(0,l.jsxs)(e.a,{href:"/docs/20-R6/Concepts/classes#cs",children:[(0,l.jsx)(e.code,{children:"cs"})," class store"]}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["You can pass one or more optional ",(0,l.jsx)(e.em,{children:"param"})," parameters, which will be passed to the ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#class-constructor",children:"class constructor"})," function (if any) in the ",(0,l.jsx)(e.em,{children:"className"})," class definition. Within the constructor function, the ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#this",children:(0,l.jsx)(e.code,{children:"This"})})," is bound to the new object being constructed."]}),"\n",(0,l.jsx)(e.admonition,{title:"Notes",type:"note",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["If ",(0,l.jsx)(e.code,{children:".new()"})," is called on a ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#singleton-classes",children:"singleton class"})," that has already been instantiated, the singleton instance is returned, not a new instance."]}),"\n",(0,l.jsxs)(e.li,{children:["If ",(0,l.jsx)(e.code,{children:".new()"})," is called on a non-existing class, an error is returned."]}),"\n"]})}),"\n",(0,l.jsx)(e.h4,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.p,{children:"To create a new instance of the Person class:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:"var $person : cs.Person  \n$person:=cs.Person.new() //create the new instance  \n//$person contains functions of the class\n"})}),"\n",(0,l.jsx)(e.p,{children:"To create a new instance of the Person class with parameters:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:"//Class: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n	This.firstName:=$firstname\n	This.lastName:=$lastname\n	This.age:=$age\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:'//In a method\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n//$person.firstName = "John"\n//$person.lastName = "Doe"\n//$person.age = 40\n'})}),"\n",(0,l.jsx)(e.h2,{id:"superclass",children:".superclass"}),"\n",(0,l.jsxs)(e.details,{children:[(0,l.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Release"}),(0,l.jsx)(e.th,{children:"Changes"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"18 R3"}),(0,l.jsx)(e.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:".superclass"})," : 4D.Class"]}),"\n",(0,l.jsx)(e.h4,{id:"description-5",children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:".superclass"})," property returns the parent class of the class. A superclass can be a ",(0,l.jsx)(e.code,{children:"4D.Class"})," object, or a ",(0,l.jsx)(e.code,{children:"cs.className"})," object. If the class does not have a parent class, the property returns ",(0,l.jsx)(e.strong,{children:"null"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["A superclass of a user class is declared in a class by using the ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#class-extends-classname",children:(0,l.jsx)(e.code,{children:"Class extends <superclass>"})})," keyword."]}),"\n",(0,l.jsxs)(e.p,{children:["This property is ",(0,l.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(e.h4,{id:"examples-1",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:"$sup:=4D.File.superclass //Document\n$sup:=4D.Document.superclass //Object\n$sup:=4D.Object.superclass //null\n\n// If you created a MyFile class  \n// with `Class extends File`\n$sup:=cs.MyFile.superclass //File\n\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"See also:"})," ",(0,l.jsx)(e.a,{href:"/docs/20-R6/Concepts/classes#super",children:"Super"})]})]})}function o(s={}){let{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},250065:function(s,e,n){n.d(e,{Z:function(){return t},a:function(){return c}});var r=n(667294);let l={},i=r.createContext(l);function c(s){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),r.createElement(i.Provider,{value:e},s.children)}}}]);