/*! For license information please see d76ee912.d4812e7b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87368],{822371:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var l=n(474848),r=n(28453);const i={id:"ClassClass",title:"Class"},t=void 0,c={id:"API/ClassClass",title:"Class",description:"Lorsqu'une classe utilisateur est d\xe9finie dans le projet, elle est charg\xe9e dans l'environnement de langage 4D. Une classe est un objet lui-m\xeame, de la classe \"Class\", qui a des propri\xe9t\xe9s et une fonction.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/API/ClassClass.md",sourceDirName:"API",slug:"/API/ClassClass",permalink:"/docs/fr/20-R5/API/ClassClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FClassClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ClassClass",title:"Class"},sidebar:"docs",previous:{title:"Blob",permalink:"/docs/fr/20-R5/API/BlobClass"},next:{title:"Collection",permalink:"/docs/fr/20-R5/API/CollectionClass"}},d={},a=[{value:"Sommaire",id:"sommaire",level:3},{value:".isShared",id:"isshared",level:2},{value:"Description",id:"description",level:4},{value:".isSingleton",id:"issingleton",level:2},{value:"Description",id:"description-1",level:4},{value:".me",id:"me",level:2},{value:"Description",id:"description-2",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-3",level:4},{value:".new()",id:"new",level:2},{value:"Description",id:"description-4",level:4},{value:"Exemples",id:"exemples",level:4},{value:".superclass",id:"superclass",level:2},{value:"Description",id:"description-5",level:4},{value:"Exemples",id:"exemples-1",level:4}];function o(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Lorsqu'une classe utilisateur est ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#class-definition",children:"d\xe9finie"}),' dans le projet, elle est charg\xe9e dans l\'environnement de langage 4D. Une classe est un objet lui-m\xeame, de la classe "Class", qui a des propri\xe9t\xe9s et une fonction.']}),"\n",(0,l.jsx)(s.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsx)(s.tr,{children:(0,l.jsx)(s.th,{})})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#isshared",children:[(0,l.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),(0,l.jsx)(s.br,{}),"renvoie ",(0,l.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#shared-classes",children:"classe partag\xe9e"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#issingleton",children:[(0,l.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),(0,l.jsx)(s.br,{}),"renvoie ",(0,l.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme une ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#singleton-classes",children:"classe singleton"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#me",children:[(0,l.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),(0,l.jsx)(s.br,{}),"renvoie l'instance unique de la classe singleton ",(0,l.jsx)(s.code,{children:"cs.className"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#name",children:[(0,l.jsx)(s.strong,{children:".name"})," : Text"]}),(0,l.jsx)(s.br,{}),"contient le nom de l'objet ",(0,l.jsx)(s.code,{children:"4D.Class"})]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#new",children:[(0,l.jsx)(s.strong,{children:".new"}),"( { ",(0,l.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),(0,l.jsx)(s.br,{}),"cr\xe9e et retourne un objet ",(0,l.jsx)(s.code,{children:"cs.className"})," qui est une nouvelle instance de la classe sur laquelle elle est appel\xe9e"]})}),(0,l.jsx)(s.tr,{children:(0,l.jsxs)(s.td,{children:[(0,l.jsxs)(s.a,{href:"#superclass",children:[(0,l.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),(0,l.jsx)(s.br,{}),"retourne la classe parente de la classe"]})})]})]}),"\n",(0,l.jsx)(s.h2,{id:"isshared",children:".isShared"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".isShared"})," : Boolean"]}),"\n",(0,l.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(s.code,{children:".isShared"})," renvoie ",(0,l.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#shared-classes",children:"classe partag\xe9e"}),", et ",(0,l.jsx)(s.code,{children:"false"})," sinon."]}),"\n",(0,l.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"issingleton",children:".isSingleton"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".isSingleton"})," : Boolean"]}),"\n",(0,l.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(s.code,{children:".isSingleton"})," renvoie ",(0,l.jsx)(s.code,{children:"true"})," si la classe utilisateur a \xe9t\xe9 d\xe9finie comme une ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#singleton-classes",children:"classe singleton"}),", et ",(0,l.jsx)(s.code,{children:"false"})," sinon."]}),"\n",(0,l.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"me",children:".me"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"20 R5"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".me"})," : 4D.Class"]}),"\n",(0,l.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(s.code,{children:".me"})," renvoie l'instance unique de la classe singleton ",(0,l.jsx)(s.code,{children:"cs.className"}),". Si la classe singleton n'a jamais \xe9t\xe9 instanci\xe9e au pr\xe9alable, cette propri\xe9t\xe9 appelle le constructeur de la classe sans param\xe8tres et cr\xe9e l'instance. Sinon, elle renvoie l'instance singleton existante."]}),"\n",(0,l.jsxs)(s.p,{children:["Si ",(0,l.jsx)(s.code,{children:"cs.className"})," n'est pas une ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#singleton-classes",children:"classe singleton"}),", ",(0,l.jsx)(s.code,{children:".me"})," est ",(0,l.jsx)(s.strong,{children:"undefined"})," par d\xe9faut."]}),"\n",(0,l.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"name",children:".name"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".name"})," : Text"]}),"\n",(0,l.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(s.code,{children:".name"})," contient le nom de l'objet ",(0,l.jsx)(s.code,{children:"4D.Class"}),". Les noms de classe sont sensibles \xe0 la casse."]}),"\n",(0,l.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"new",children:".new()"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".new"}),"( { ",(0,l.jsx)(s.em,{children:"...param"})," : any } ) : 4D.Class"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tres"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{style:{textAlign:"center"}}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"param"}),(0,l.jsx)(s.td,{children:"any"}),(0,l.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(s.td,{children:"Param\xe8tre(s) \xe0 passer \xe0 la fonction constructeur"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"R\xe9sultat"}),(0,l.jsx)(s.td,{children:"4D.Class"}),(0,l.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(s.td,{children:"Nouvel objet de la classe"})]})]})]}),"\n",(0,l.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La fonction ",(0,l.jsx)(s.code,{children:".new()"})," cr\xe9e et retourne un objet ",(0,l.jsx)(s.code,{children:"cs.className"})," qui est une nouvelle instance de la classe sur laquelle elle est appel\xe9e. Cette fonction est automatiquement disponible sur toutes les classes \xe0 partir du ",(0,l.jsxs)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#cs",children:["class store ",(0,l.jsx)(s.code,{children:"cs"})]}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Vous pouvez passer un ou plusieurs param\xe8tres optionnels ",(0,l.jsx)(s.em,{children:"param"}),", qui seront pass\xe9s \xe0 la fonction ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#class-constructor",children:"class constructor"})," (le cas \xe9ch\xe9ant) dans la d\xe9finition de la classe ",(0,l.jsx)(s.em,{children:"className"}),". Dans la fonction constructor, le ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#this",children:(0,l.jsx)(s.code,{children:"This"})})," est li\xe9 au nouvel objet en cours de construction."]}),"\n",(0,l.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Si ",(0,l.jsx)(s.code,{children:".new()"})," est appel\xe9 sur une ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#singleton-classes",children:"classe singleton"})," qui a d\xe9j\xe0 \xe9t\xe9 instanci\xe9e, l'instance singleton est retourn\xe9e, et non une nouvelle instance."]}),"\n",(0,l.jsxs)(s.li,{children:["Si ",(0,l.jsx)(s.code,{children:".new()"})," est appel\xe9 sur une classe inexistante, une erreur est retourn\xe9e."]}),"\n"]})}),"\n",(0,l.jsx)(s.h4,{id:"exemples",children:"Exemples"}),"\n",(0,l.jsx)(s.p,{children:"Pour cr\xe9er une nouvelle instance de la classe Person :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $person : cs.Person  \n$person:=cs.Person.new() //cr\xe9er la nouvelle instance  \n//$person contient les fonctions de la classe\n"})}),"\n",(0,l.jsx)(s.p,{children:"Pour cr\xe9er une nouvelle instance de la classe Person avec des param\xe8tres :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"//Class: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n\tThis.firstName:=$firstname\n\tThis.lastName:=$lastname\n\tThis.age:=$age\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'//Dans une m\xe9thode\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n//$person.firstName = "John"\n//$person.lastName = "Doe"\n//$person.age = 40\n'})}),"\n",(0,l.jsx)(s.h2,{id:"superclass",children:".superclass"}),"\n",(0,l.jsxs)(s.details,{children:[(0,l.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Release"}),(0,l.jsx)(s.th,{children:"Modifications"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"18 R3"}),(0,l.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:".superclass"})," : 4D.Class"]}),"\n",(0,l.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(s.code,{children:".superclass"})," retourne la classe parente de la classe. Une superclasse peut \xeatre un objet ",(0,l.jsx)(s.code,{children:"4D.Class"}),", ou un objet ",(0,l.jsx)(s.code,{children:"cs.className"}),". Si la classe n'a pas de classe parente, la propri\xe9t\xe9 retourne ",(0,l.jsx)(s.strong,{children:"null"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Une superclasse d'une classe utilisateur est d\xe9clar\xe9e dans une classe en utilisant le mot-cl\xe9 ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#class-extends-classname",children:(0,l.jsx)(s.code,{children:"Class extends <superclass>"})}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(s.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"exemples-1",children:"Exemples"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"$sup:=4D.File.superclass //Document\n$sup:=4D.Document.superclass //Object\n$sup:=4D.Object.superclass //null\n\n// Si vous avez cr\xe9\xe9 une classe MyFile \n// avec `Class extends File`\n$sup:=cs.MyFile.superclass //File\n\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Voir aussi :"})," ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#super",children:"Super"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},221020:(e,s,n)=>{var l=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var l,i={},a=null,o=null;for(l in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(o=s.ref),s)t.call(s,l)&&!d.hasOwnProperty(l)&&(i[l]=s[l]);if(e&&e.defaultProps)for(l in s=e.defaultProps)void 0===i[l]&&(i[l]=s[l]);return{$$typeof:r,type:e,key:a,ref:o,props:i,_owner:c.current}}s.Fragment=i,s.jsx=a,s.jsxs=a},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var l=n(296540);const r={},i=l.createContext(r);function t(e){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);