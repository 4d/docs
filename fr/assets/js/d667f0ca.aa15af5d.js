/*! For license information please see d667f0ca.aa15af5d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77250],{218134:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var r=d(474848),l=d(28453);const s={id:"null-undefined",title:"Null et Undefined"},i=void 0,t={id:"Concepts/null-undefined",title:"Null et Undefined",description:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/20-R4/Concepts/null-undefined",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"null-undefined",title:"Null et Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/20-R4/Concepts/date"},next:{title:"Number (Real, Longint, Integer)",permalink:"/docs/fr/20-R4/Concepts/number"}},a={},c=[{value:"Null",id:"Null",level:2},{value:"Undefined",id:"Undefined",level:2},{value:"Op\xe9rateurs sur les Null",id:"Op\xe9rateurs-sur-les-Null",level:2},{value:"Op\xe9rateurs sur les Undefined",id:"Op\xe9rateurs-sur-les-Undefined",level:2},{value:"Exemples",id:"Exemples",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."}),"\n",(0,r.jsx)(n.h2,{id:"Null",children:"Null"}),"\n",(0,r.jsxs)(n.p,{children:["Null is a special data type with only one possible value: ",(0,r.jsx)(n.strong,{children:"null"}),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur. Trying to read a property of a ",(0,r.jsx)(n.strong,{children:"null"})," value returns an error."]}),"\n",(0,r.jsxs)(n.p,{children:["In the 4D language and for object field attributes, null values are managed through the ",(0,r.jsx)(n.code,{children:"Null"})," function. Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"attributs d'objets"}),"\n",(0,r.jsx)(n.li,{children:"\xe9l\xe9ments de collections"}),"\n",(0,r.jsxs)(n.li,{children:["variables of the object, collection, pointer, picture, or variant type (see also ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/data-types#null-as-default-value",children:"Null as default value"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"Undefined",children:"Undefined"}),"\n",(0,r.jsxs)(n.p,{children:["Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Une variable dite \"ind\xe9finie\" est une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,r.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A variant variable has ",(0,r.jsx)(n.strong,{children:"undefined"})," as ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/data-types#default-values",children:"default value"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A field cannot be undefined (the ",(0,r.jsx)(n.code,{children:"Undefined"})," command always returns False for a field)."]}),"\n",(0,r.jsx)(n.p,{children:"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,r.jsx)(n.code,{children:"CLEAR VARIABLE"})})," with them:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Objet, collection, pointeur : Null"}),"\n",(0,r.jsx)(n.li,{children:"Image : image vide"}),"\n",(0,r.jsx)(n.li,{children:"Bool\xe9en : False"}),"\n",(0,r.jsx)(n.li,{children:'Cha\xeene : ""'}),"\n",(0,r.jsx)(n.li,{children:"Num\xe9rique : 0"}),"\n",(0,r.jsx)(n.li,{children:'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'}),"\n",(0,r.jsx)(n.li,{children:"Heure : 0 (nombre de ms)"}),"\n",(0,r.jsx)(n.li,{children:"Ind\xe9fini, Null : pas de changement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une expression de condition est automatiquement convertie \xe0 Faux lorsque son \xe9valuation donne Ind\xe9finie avec les mots-cl\xe9s Si et Au cas ou :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: ",(0,r.jsx)(n.code,{children:"String"}),", ",(0,r.jsx)(n.code,{children:"Num"}),", ",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", ",(0,r.jsx)(n.code,{children:"Bool"}),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"Op\xe9rateurs-sur-les-Null",children:"Op\xe9rateurs sur les Null"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Egalit\xe9"}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," Null"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," Undefined"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," ",(0,r.jsx)(n.em,{children:"scalar value"})]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," 42"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," Null"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," Undefined"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," ",(0,r.jsx)(n.em,{children:"scalar value"})]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," 42"]}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"scalar values"})," are values of type string, Date, Time, Boolean, number, or Blob. When declared, their ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/data-types#default-values",children:"default value"})," is neither undefined nor null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par d\xe9faut undefined ou null. Ex :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Comparisons with Greater than (",(0,r.jsx)(n.code,{children:">"}),"), Less than (",(0,r.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,r.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,r.jsx)(n.code,{children:"<="}),") operators are not supported with Null values and return an error."]})}),"\n",(0,r.jsx)(n.h2,{id:"Op\xe9rateurs-sur-les-Undefined",children:"Op\xe9rateurs sur les Undefined"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Egalit\xe9"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," Undefined"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," Null"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," ",(0,r.jsx)(n.em,{children:"other values"})]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," 42"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," Undefined"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," Null"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," ",(0,r.jsx)(n.em,{children:"other values"})]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," 42"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:">"})," string, Date, Time, Boolean, number"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:">"}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"<"})," string, Date, Time, Boolean, number"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"<"}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:">="})," string, Date, Time, Boolean, number"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:">="}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"<="})," string, Date, Time, Boolean, number"]}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"<="}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"other values"})," are expressions of any type with a value neither Undefined nor Null."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,r.jsx)(n.code,{children:">"}),"), Less than (",(0,r.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,r.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,r.jsx)(n.code,{children:"<="}),") operators are not supported and return an error."]})}),"\n",(0,r.jsx)(n.h2,{id:"Exemples",children:"Exemples"}),"\n",(0,r.jsxs)(n.p,{children:["Here are the different results of the ",(0,r.jsx)(n.code,{children:"Undefined"})," command as well as the ",(0,r.jsx)(n.code,{children:"Null"})," command with object properties, depending on the context:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,r.jsx)(n.p,{children:"Exemples de r\xe9sultats de comparaisons avec des valeurs ind\xe9finies et nulles :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,n,d)=>{var r=d(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,d){var r,s={},c=null,o=null;for(r in void 0!==d&&(c=""+d),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:c,ref:o,props:s,_owner:t.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,d)=>{e.exports=d(221020)},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>t});var r=d(296540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);