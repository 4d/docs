"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33805"],{52758:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"commands/super","title":"Super","description":"Super( ...param Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/super.md","sourceDirName":"commands","slug":"/commands/super","permalink":"/docs/fr/commands/super","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsuper.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"super","title":"Super","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Self","permalink":"/docs/fr/commands/self"},"next":{"title":"This","permalink":"/docs/fr/commands/this"}}'),t=s("785893"),l=s("250065");let c={id:"super",title:"Super",displayed_sidebar:"docs"},a=void 0,d={},i=[{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Super"}),"( ...param : any )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Super"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Param\xe8tre(s) \xe0 passer au constructeur de la classe parente"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Parent de l'objet"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"Super"})," permet les appels \xe0 la ",(0,t.jsx)(n.code,{children:"superclass"}),", c'est-\xe0-dire \xe0 la classe parente."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Super"})," peut \xeatre utilis\xe9 de deux diff\xe9rentes mani\xe8res :"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A l'int\xe9rieur d'un ",(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/classes#classe-constructeur",children:"code constructeur"}),", ",(0,t.jsx)(n.code,{children:"Super"})," est une commande qui permet d'appeler le constructeur de la superclasse. When used in a constructor, the ",(0,t.jsx)(n.code,{children:"Super"})," command appears alone and must be used before the ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/this",children:(0,t.jsx)(n.code,{children:"This"})})," keyword is used."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si tous les class constructors dans l'arbre des h\xe9ritages ne sont pas appel\xe9s correctement, l'erreur -10748 et g\xe9n\xe9r\xe9e. Il est de la responsabilit\xe9 du d\xe9veloppeur 4D de s'assurer que tous les appels sont valides."}),"\n",(0,t.jsxs)(n.li,{children:["Si la commande ",(0,t.jsx)(n.code,{children:"This"})," est appel\xe9e sur un objet dont les superclasses n'ont pas \xe9t\xe9 construites, l'erreur -10743 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.code,{children:"Super"})," est appel\xe9e en dehors d'un contexte d'objet, ou sur un objet dont le constructeur de la superclasse a d\xe9j\xe0 \xe9t\xe9 appel\xe9, l'erreur -10746 est g\xe9n\xe9r\xe9e."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// dans la fonction constructor de myClass\nvar $text1; $text2 : Text\nSuper($text1) //appel du constructeur de la superclasse avec un param\xe8tre text\nThis.param:=$text2 // utilisation d'un second param\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Inside a ",(0,t.jsx)(n.a,{href:"#class-function",children:"class function"}),", ",(0,t.jsx)(n.code,{children:"Super"})," designates the prototype of the ",(0,t.jsx)(n.a,{href:"/docs/fr/API/ClassClass#superclass",children:(0,t.jsx)(n.code,{children:"superclass"})})," and allows to call a function of the superclass hierarchy."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Super.doSomething(42) //appelle la fonction "doSomething"   \n//d\xe9clar\xe9e parmi les superclasses\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["Cet exemple illustre l'utilisation de ",(0,t.jsx)(n.code,{children:"Super"})," dans un class constructor. La commande est appel\xe9e pour \xe9viter de dupliquer les parties du constructeur qui sont communes aux classes ",(0,t.jsx)(n.code,{children:"Rectangle"})," et ",(0,t.jsx)(n.code,{children:"Square"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Class: Rectangle\nClass constructor($width : Integer; $height : Integer)\n This.name:="Rectangle"\n This.height:=$height\n This.width:=$width\n\n\nFunction sayName()\n ALERT("Hi, I am a "+This.name+".")\n\n// Function definition\nFunction getArea() : Integer\n\n return (This.height)*(This.width)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"//Class: Square\n\nClass extends Rectangle\n\nClass constructor ($side : Integer)\n\n // It calls the parent class's constructor with lengths\n // provided for the Rectangle's width and height\n Super($side;$side)\n // In derived classes, Super must be called \n // before you can use 'This'\n This.name:=\"Square\"\n\nFunction getArea() : Integer\n return This.height*This.width\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Cet exemple illustre l'utilisation de ",(0,t.jsx)(n.code,{children:"Super"})," dans une fonction de classe. Vous avez cr\xe9\xe9 la classe ",(0,t.jsx)(n.code,{children:"Rectangle"})," contenant une fonction :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Class: Rectangle\n\nFunction nbSides() : Text\n return "I have 4 sides"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Vous avez \xe9galement cr\xe9\xe9 la classe ",(0,t.jsx)(n.code,{children:"Square"})," contenant une fonction qui appelle la fonction superclass :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Class: Square\n\nClass extends Rectangle\n\nFunction description() : Text\n  return Super.nbSides()+" which are all equal"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez donc \xe9crire dans une m\xe9thode projet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $square : Object\nvar $message : Text\n$square:=cs.Square.new()\n$message:=$square.description() //I have 4 sides which are all equal\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/classes",children:(0,t.jsx)(n.strong,{children:"Concept page for Classes"})}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1706"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var r=s(667294);let t={},l=r.createContext(t);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);