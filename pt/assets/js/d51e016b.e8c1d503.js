"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63784"],{364034:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"commands/super","title":"Super","description":"Super( ...param Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/super.md","sourceDirName":"commands","slug":"/commands/super","permalink":"/docs/pt/commands/super","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsuper.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"super","title":"Super","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Self","permalink":"/docs/pt/commands/self"},"next":{"title":"This","permalink":"/docs/pt/commands/this"}}'),t=n("785893"),a=n("250065");let o={id:"super",title:"Super",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function i(e){let s={a:"a",br:"br",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Super"}),"( ...param : any )",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Super"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"param"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Par\xe2metro(s) a passar para o construtor pai"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Resultados"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"<-"}),(0,t.jsx)(s.td,{children:"Pai do objecto"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["A palavra-chave ",(0,t.jsx)(s.code,{children:"Super"})," permite chamadas \xe0 ",(0,t.jsx)(s.code,{children:"superclasse"}),", ou seja, a classe pai."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Super"})," tem dois objectivos diferentes:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Inside a [constructor code]((../Concepts/classes.md#class-constructor), ",(0,t.jsx)(s.code,{children:"Super"})," is a command that allows to call the constructor of the superclass. When used in a constructor, the ",(0,t.jsx)(s.code,{children:"Super"})," command appears alone and must be used before the ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/this",children:(0,t.jsx)(s.code,{children:"This"})})," keyword is used."]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Se todos os construtores de classe na \xe1rvore de heran\xe7a n\xe3o forem correctamente chamados, \xe9 gerado o erro -10748. \xc9 o programador 4D que se certifica de que as chamadas s\xe3o v\xe1lidas."}),"\n",(0,t.jsxs)(s.li,{children:["Se o comando ",(0,t.jsx)(s.code,{children:"This"})," for chamado em um objeto cujas superclasses n\xe3o foram constru\xeddas, o erro -10743 ser\xe1 gerado."]}),"\n",(0,t.jsxs)(s.li,{children:["Se o ",(0,t.jsx)(s.code,{children:"Super"})," \xe9 chamado fora do escopo do objeto, ou em um objeto cujo construtor de superclasse j\xe1 foi chamado, erro -10746 \xe9 gerado."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"// dentro do construtor myClass\nvar $text1; $text2 : Text\nSuper($text1) //chama o construtor da superclasse com um par\xe2metro de texto\nThis.param:=$text2 // usa o segundo par\xe2metro\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["Inside a ",(0,t.jsx)(s.a,{href:"#class-function",children:"class function"}),", ",(0,t.jsx)(s.code,{children:"Super"})," designates the prototype of the ",(0,t.jsx)(s.a,{href:"/docs/pt/API/ClassClass#superclass",children:(0,t.jsx)(s.code,{children:"superclass"})})," and allows to call a function of the superclass hierarchy."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'Super.doSomething(42) //chamada a fun\xe7\xe3o "doSomething"  \n//declarada em superclasses\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(s.p,{children:["Este exemplo ilustra o uso do ",(0,t.jsx)(s.code,{children:"Super"})," em um construtor de classe. O comando \xe9 chamado para evitar duplicar as partes do construtor que s\xe3o comuns entre as classes ",(0,t.jsx)(s.code,{children:"Rectangle"})," e ",(0,t.jsx)(s.code,{children:"Square"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'// Class: Rectangle\nClass constructor($width : Integer; $height : Integer)\n This.name:="Rectangle"\n This.height:=$height\n This.width:=$width\n\n\nFunction sayName()\n ALERT("Hi, I am a "+This.name+".")\n\n// Function definition\nFunction getArea() : Integer\n\n return (This.height)*(This.width)\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"//Class: Square\n\nClass extends Rectangle\n\nClass constructor ($side : Integer)\n\n // It calls the parent class's constructor with lengths\n // provided for the Rectangle's width and height\n Super($side;$side)\n // In derived classes, Super must be called \n // before you can use 'This'\n This.name:=\"Square\"\n\nFunction getArea() : Integer\n return This.height*This.width\n"})}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(s.p,{children:["This example illustrates the use of ",(0,t.jsx)(s.code,{children:"Super"})," in a class function. Voc\xea criou a classe ",(0,t.jsx)(s.code,{children:"Rectangle"})," com uma fun\xe7\xe3o:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'//Class: Rectangle\n\nFunction nbSides() : Text\n return "I have 4 sides"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Voc\xea tamb\xe9m criou a classe ",(0,t.jsx)(s.code,{children:"Square"})," com uma fun\xe7\xe3o que chama a fun\xe7\xe3o da superclasse:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'//Class: Square\n\nClass extends Rectangle\n\nFunction description() : Text\n  return Super.nbSides()+" which are all equal"\n'})}),"\n",(0,t.jsx)(s.p,{children:"Depois pode escrever num m\xe9todo projecto:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"Par\xe2metros\n"})}),"\n",(0,t.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/pt/Concepts/classes",children:(0,t.jsx)(s.strong,{children:"Concept page for Classes"})}),"."]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var r=n(667294);let t={},a=r.createContext(t);function o(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);