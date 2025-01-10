"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7738"],{392138:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands/super","title":"Super","description":"Super( ...param Object","source":"@site/versioned_docs/version-20-R7/commands/super.md","sourceDirName":"commands","slug":"/commands/super","permalink":"/docs/commands/super","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsuper.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"super","title":"Super","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Self","permalink":"/docs/commands/self"},"next":{"title":"This","permalink":"/docs/commands/this"}}'),t=s("785893"),c=s("250065");let a={id:"super",title:"Super",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Super"}),"( ...param : any )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Super"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Parameter(s) to pass to the parent constructor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Object's parent"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Super"})," keyword allows calls to the ",(0,t.jsx)(n.code,{children:"superclass"}),", i.e. the parent class."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Super"})," serves two different purposes:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Inside a [constructor code]((../Concepts/classes.md#class-constructor), ",(0,t.jsx)(n.code,{children:"Super"})," is a command that allows to call the constructor of the superclass. When used in a constructor, the ",(0,t.jsx)(n.code,{children:"Super"})," command appears alone and must be used before the ",(0,t.jsx)(n.a,{href:"/docs/commands/this",children:(0,t.jsx)(n.code,{children:"This"})})," keyword is used."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid."}),"\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.code,{children:"This"})," command is called on an object whose superclasses have not been constructed, error -10743 is generated."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"Super"})," is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// inside myClass constructor\nvar $text1; $text2 : Text\nSuper($text1) //calls superclass constructor with a text param\nThis.param:=$text2 // use second param\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Inside a ",(0,t.jsx)(n.a,{href:"#class-function",children:"class function"}),", ",(0,t.jsx)(n.code,{children:"Super"})," designates the prototype of the ",(0,t.jsx)(n.a,{href:"/docs/API/ClassClass#superclass",children:(0,t.jsx)(n.code,{children:"superclass"})})," and allows to call a function of the superclass hierarchy."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Super.doSomething(42) //calls "doSomething" function  \n//declared in superclasses\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["This example illustrates the use of ",(0,t.jsx)(n.code,{children:"Super"})," in a class constructor. The command is called to avoid duplicating the constructor parts that are common between ",(0,t.jsx)(n.code,{children:"Rectangle"})," and ",(0,t.jsx)(n.code,{children:"Square"})," classes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Class: Rectangle\nClass constructor($width : Integer; $height : Integer)\n This.name:="Rectangle"\n This.height:=$height\n This.width:=$width\n\n\nFunction sayName()\n ALERT("Hi, I am a "+This.name+".")\n\n// Function definition\nFunction getArea() : Integer\n\n return (This.height)*(This.width)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"//Class: Square\n\nClass extends Rectangle\n\nClass constructor ($side : Integer)\n\n // It calls the parent class's constructor with lengths\n // provided for the Rectangle's width and height\n Super($side;$side)\n // In derived classes, Super must be called \n // before you can use 'This'\n This.name:=\"Square\"\n\nFunction getArea() : Integer\n return This.height*This.width\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["This example illustrates the use of ",(0,t.jsx)(n.code,{children:"Super"})," in a class function. You created the ",(0,t.jsx)(n.code,{children:"Rectangle"})," class with a function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Class: Rectangle\n\nFunction nbSides() : Text\n return "I have 4 sides"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You also created the ",(0,t.jsx)(n.code,{children:"Square"})," class with a function calling the superclass function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Class: Square\n\nClass extends Rectangle\n\nFunction description() : Text\n  return Super.nbSides()+" which are all equal"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then you can write in a project method:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $square : Object\nvar $message : Text\n$square:=cs.Square.new()\n$message:=$square.description() //I have 4 sides which are all equal\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/Concepts/classes",children:(0,t.jsx)(n.strong,{children:"Concept page for Classes"})}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1706"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},c=r.createContext(t);function a(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);