"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7129"],{379483:function(e,s,n){n.r(s),n.d(s,{metadata:()=>l,contentTitle:()=>t,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"API/ClassClass","title":"Class","description":"Lorsqu\'une classe utilisateur est d\xe9finie dans le projet, elle est charg\xe9e dans l\'environnement de langage 4D. Une classe est un objet lui-m\xeame, de la classe \\"Class\\", qui a des propri\xe9t\xe9s et une fonction.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/API/ClassClass.md","sourceDirName":"API","slug":"/API/ClassClass","permalink":"/docs/fr/20-R6/API/ClassClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FClassClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"ClassClass","title":"Class"},"sidebar":"docs","previous":{"title":"Blob","permalink":"/docs/fr/20-R6/API/BlobClass"},"next":{"title":"Collection","permalink":"/docs/fr/20-R6/API/CollectionClass"}}'),r=n("785893"),i=n("250065");let c={id:"ClassClass",title:"Class"},t=void 0,d={},a=[{value:"Sommaire",id:"sommaire",level:3},{value:".isShared",id:"isshared",level:2},{value:"Description",id:"description",level:4},{value:".isSingleton",id:"issingleton",level:2},{value:"Description",id:"description-1",level:4},{value:".me",id:"me",level:2},{value:"Description",id:"description-2",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-3",level:4},{value:".new()",id:"new",level:2},{value:"Description",id:"description-4",level:4},{value:"Exemples",id:"exemples",level:4},{value:".superclass",id:"superclass",level:2},{value:"Description",id:"description-5",level:4},{value:"Exemples",id:"exemples-1",level:4}];function o(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Lorsqu'une classe utilisateur est ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#class-definition",children:"d\xe9finie"}),' dans le projet, elle est charg\xe9e dans l\'environnement de langage 4D. Une classe est un objet lui-m\xeame, de la classe "Class", qui a des propri\xe9t\xe9s et une fonction.']}),"\n",(0,r.jsx)(s.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#isshared",children:[(0,r.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),(0,r.jsx)(s.br,{}),"renvoie ",(0,r.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#shared-classes",children:"classe partag\xe9e"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#issingleton",children:[(0,r.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),(0,r.jsx)(s.br,{}),"renvoie ",(0,r.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme une ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#singleton-classes",children:"classe singleton"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#me",children:[(0,r.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),(0,r.jsx)(s.br,{}),"renvoie l'instance unique de la classe singleton ",(0,r.jsx)(s.code,{children:"cs.className"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#name",children:[(0,r.jsx)(s.strong,{children:".name"})," : Text"]}),(0,r.jsx)(s.br,{}),"contient le nom de l'objet ",(0,r.jsx)(s.code,{children:"4D.Class"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#new",children:[(0,r.jsx)(s.strong,{children:".new"}),"( { ",(0,r.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),(0,r.jsx)(s.br,{}),"cr\xe9e et retourne un objet ",(0,r.jsx)(s.code,{children:"cs.className"})," qui est une nouvelle instance de la classe sur laquelle elle est appel\xe9e"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#superclass",children:[(0,r.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),(0,r.jsx)(s.br,{}),"retourne la classe parente de la classe"]})})]})]}),"\n",(0,r.jsx)(s.h2,{id:"isshared",children:".isShared"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".isShared"})," renvoie ",(0,r.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#shared-classes",children:"classe partag\xe9e"}),", et ",(0,r.jsx)(s.code,{children:"false"})," sinon."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,r.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"issingleton",children:".isSingleton"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),"\n",(0,r.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".isSingleton"})," renvoie ",(0,r.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme une ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#singleton-classes",children:"classe singleton"}),", et ",(0,r.jsx)(s.code,{children:"false"})," sinon."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,r.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"me",children:".me"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),"\n",(0,r.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".me"})," renvoie l'instance unique de la classe singleton ",(0,r.jsx)(s.code,{children:"cs.className"}),". Si la classe singleton n'a jamais \xe9t\xe9 instanci\xe9e au pr\xe9alable, cette propri\xe9t\xe9 appelle le constructeur de la classe sans param\xe8tres et cr\xe9e l'instance. Sinon, elle renvoie l'instance singleton existante."]}),"\n",(0,r.jsxs)(s.p,{children:["Si ",(0,r.jsx)(s.code,{children:"cs.className"})," n'est pas une ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#singleton-classes",children:"classe singleton"}),", ",(0,r.jsx)(s.code,{children:".me"})," est ",(0,r.jsx)(s.strong,{children:"undefined"})," par d\xe9faut."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,r.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"name",children:".name"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R3"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".name"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".name"})," contient le nom de l'objet ",(0,r.jsx)(s.code,{children:"4D.Class"}),". Les noms de classe sont sensibles \xe0 la casse."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,r.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"new",children:".new()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R3"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".new"}),"( { ",(0,r.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tres"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"param"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(s.td,{children:"Param\xe8tre(s) \xe0 passer \xe0 la fonction constructeur"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"R\xe9sultat"}),(0,r.jsx)(s.td,{children:"4D.Class"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(s.td,{children:"Nouvel objet de la classe"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La fonction ",(0,r.jsx)(s.code,{children:".new()"})," cr\xe9e et retourne un objet ",(0,r.jsx)(s.code,{children:"cs.className"})," qui est une nouvelle instance de la classe sur laquelle elle est appel\xe9e. Cette fonction est automatiquement disponible sur toutes les classes \xe0 partir du ",(0,r.jsxs)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#cs",children:["class store ",(0,r.jsx)(s.code,{children:"cs"})]}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez passer un ou plusieurs param\xe8tres optionnels ",(0,r.jsx)(s.em,{children:"param"}),", qui seront pass\xe9s \xe0 la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#class-constructor",children:"class constructor"})," (le cas \xe9ch\xe9ant) dans la d\xe9finition de la classe ",(0,r.jsx)(s.em,{children:"className"}),". Dans la fonction constructor, le ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#this",children:(0,r.jsx)(s.code,{children:"This"})})," est li\xe9 au nouvel objet en cours de construction."]}),"\n",(0,r.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.code,{children:".new()"})," est appel\xe9 sur une ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#singleton-classes",children:"classe singleton"})," qui a d\xe9j\xe0 \xe9t\xe9 instanci\xe9e, l'instance singleton est retourn\xe9e, et non une nouvelle instance."]}),"\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.code,{children:".new()"})," est appel\xe9 sur une classe inexistante, une erreur est retourn\xe9e."]}),"\n"]})}),"\n",(0,r.jsx)(s.h4,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsx)(s.p,{children:"Pour cr\xe9er une nouvelle instance de la classe Person :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $person : cs.Person  \n$person:=cs.Person.new() //cr\xe9er la nouvelle instance  \n//$person contient les fonctions de la classe\n"})}),"\n",(0,r.jsx)(s.p,{children:"Pour cr\xe9er une nouvelle instance de la classe Person avec des param\xe8tres :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"//Class: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n	This.firstName:=$firstname\n	This.lastName:=$lastname\n	This.age:=$age\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'//Dans une m\xe9thode\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n//$person.firstName = "John"\n//$person.lastName = "Doe"\n//$person.age = 40\n'})}),"\n",(0,r.jsx)(s.h2,{id:"superclass",children:".superclass"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R3"}),(0,r.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),"\n",(0,r.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".superclass"})," retourne la classe parente de la classe. Une superclasse peut \xeatre un objet ",(0,r.jsx)(s.code,{children:"4D.Class"}),", ou un objet ",(0,r.jsx)(s.code,{children:"cs.className"}),". Si la classe n'a pas de classe parente, la propri\xe9t\xe9 retourne ",(0,r.jsx)(s.strong,{children:"null"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Une superclasse d'une classe utilisateur est d\xe9clar\xe9e dans une classe en utilisant le mot-cl\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#class-extends-classname",children:(0,r.jsx)(s.code,{children:"Class extends <superclass>"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,r.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemples-1",children:"Exemples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"$sup:=4D.File.superclass //Document\n$sup:=4D.Document.superclass //Object\n$sup:=4D.Object.superclass //null\n\n// Si vous avez cr\xe9\xe9 une classe MyFile \n// avec `Class extends File`\n$sup:=cs.MyFile.superclass //File\n\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Voir aussi :"})," ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#super",children:"Super"})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return c}});var l=n(667294);let r={},i=l.createContext(r);function c(e){let s=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);