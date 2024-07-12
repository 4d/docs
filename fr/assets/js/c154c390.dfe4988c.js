/*! For license information please see c154c390.dfe4988c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26365],{636641:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var d=s(474848),r=s(28453);const l={id:"null-undefined",title:"Null et Undefined"},i=void 0,t={id:"Concepts/null-undefined",title:"Null et Undefined",description:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/20/Concepts/null-undefined",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"null-undefined",title:"Null et Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/20/Concepts/date"},next:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/20/Concepts/number"}},a={},c=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Op\xe9rateurs sur les Null",id:"op\xe9rateurs-sur-les-null",level:2},{value:"Op\xe9rateurs sur les Undefined",id:"op\xe9rateurs-sur-les-undefined",level:2},{value:"Exemples",id:"exemples",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."}),"\n",(0,d.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,d.jsxs)(n.p,{children:["Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,d.jsx)(n.strong,{children:"null"}),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur. Trying to read a property of a ",(0,d.jsx)(n.strong,{children:"null"})," value returns an error."]}),"\n",(0,d.jsxs)(n.p,{children:["Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,d.jsx)(n.code,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"attributs d'objets"}),"\n",(0,d.jsx)(n.li,{children:"\xe9l\xe9ments de collections"}),"\n",(0,d.jsxs)(n.li,{children:["variables of the object, collection, pointer, picture, or variant type (see also ",(0,d.jsx)(n.a,{href:"/docs/fr/20/Concepts/data-types#null-as-default-value",children:"Null as default value"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,d.jsxs)(n.p,{children:["Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Une variable dite \"ind\xe9finie\" est une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,d.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["A variant variable has ",(0,d.jsx)(n.strong,{children:"undefined"})," as ",(0,d.jsx)(n.a,{href:"/docs/fr/20/Concepts/data-types#default-values",children:"default value"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,d.jsx)(n.code,{children:"Indefinie"})," retourne toujours Faux pour un champ)."]}),"\n",(0,d.jsx)(n.p,{children:"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,d.jsx)(n.code,{children:"CLEAR VARIABLE"})})," with them:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Objet, collection, pointeur : Null"}),"\n",(0,d.jsx)(n.li,{children:"Image : image vide"}),"\n",(0,d.jsx)(n.li,{children:"Bool\xe9en : False"}),"\n",(0,d.jsx)(n.li,{children:'Cha\xeene : ""'}),"\n",(0,d.jsx)(n.li,{children:"Num\xe9rique : 0"}),"\n",(0,d.jsx)(n.li,{children:'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'}),"\n",(0,d.jsx)(n.li,{children:"Heure : 0 (nombre de ms)"}),"\n",(0,d.jsx)(n.li,{children:"Ind\xe9fini, Null : pas de changement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.'}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n\n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Une expression de condition est automatiquement convertie \xe0 Faux lorsque son \xe9valuation donne Ind\xe9finie avec les mots-cl\xe9s Si et Au cas ou :"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsxs)(n.p,{children:["Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Ind\xe9finie en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,d.jsx)(n.code,{children:"String"}),", ",(0,d.jsx)(n.code,{children:"Num"}),", ",(0,d.jsx)(n.code,{children:"Time"}),", ",(0,d.jsx)(n.code,{children:"Date"}),", ",(0,d.jsx)(n.code,{children:"Bool"}),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n"})})]}),"\n",(0,d.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-null",children:"Op\xe9rateurs sur les Null"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Op\xe9ration"}),(0,d.jsx)(n.th,{children:"Syntaxe"}),(0,d.jsx)(n.th,{children:"Retourne"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valeur"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Egalit\xe9"}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"="})," Null"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"="})," Undefined"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"="})," ",(0,d.jsx)(n.em,{children:"valeur scalaire"})]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"="})," 42"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"#"})," Null"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"#"})," Undefined"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Null ",(0,d.jsx)(n.code,{children:"#"})," ",(0,d.jsx)(n.em,{children:"scalar value"})]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.nullProp ",(0,d.jsx)(n.code,{children:"#"})," 42"]}),(0,d.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Les ",(0,d.jsx)(n.em,{children:"valeurs scalaires"})," sont des valeurs de type cha\xeene, date, heure, bool\xe9en, nombre ou Blob. Lorsqu'elles sont d\xe9clar\xe9es, leur ",(0,d.jsx)(n.a,{href:"/docs/fr/20/Concepts/data-types#valeurs-par-defaut",children:"valeur par d\xe9faut"})," n'est ni undefined ni null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par d\xe9faut undefined ou null. Ex :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["Les comparaisons avec les op\xe9rateurs Sup\xe9rieur \xe0 (",(0,d.jsx)(n.code,{children:">"}),"), Inf\xe9rieur \xe0 (",(0,d.jsx)(n.code,{children:"<"}),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,d.jsx)(n.code,{children:">="}),"), et Inf\xe9rieur ou \xe9gal \xe0 (",(0,d.jsx)(n.code,{children:"<="}),") ne sont pas prises en charge avec des valeurs Null et renvoient une erreur."]})}),"\n",(0,d.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-undefined",children:"Op\xe9rateurs sur les Undefined"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Op\xe9ration"}),(0,d.jsx)(n.th,{children:"Syntaxe"}),(0,d.jsx)(n.th,{children:"Retourne"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valeur"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Egalit\xe9"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"="})," Undefined"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"="})," Null"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"="})," ",(0,d.jsx)(n.em,{children:"autres valeurs"})]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"="})," 42"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"#"})," Undefined"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"#"})," Null"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"#"})," ",(0,d.jsx)(n.em,{children:"autres valeurs"})]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"#"})," 42"]}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:">"})," string, Date, Time, Boolean, number"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:">"}),' "abc"']}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"<"})," string, Date, Time, Boolean, number"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"<"}),' "abc"']}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:">="})," string, Date, Time, Boolean, number"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:">="}),' "abc"']}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,d.jsxs)(n.td,{children:["Undefined ",(0,d.jsx)(n.code,{children:"<="})," string, Date, Time, Boolean, number"]}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["a.undefinedProp ",(0,d.jsx)(n.code,{children:"<="}),' "abc"']}),(0,d.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"autres valeurs"})," sont des expressions de tout type dont la valeur n'est ni Undefined ni Null."]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["Les comparaisons de valeurs Undefined avec des pointeurs, des images, des Blobs, des objets, des collections, d'autres valeurs Undefined ou Null \xe0 l'aide des op\xe9rateurs Sup\xe9rieur \xe0 (",(0,d.jsx)(n.code,{children:">"}),"), Inf\xe9rieur \xe0 (",(0,d.jsx)(n.code,{children:"<"}),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,d.jsx)(n.code,{children:">="}),") et Inf\xe9rieur ou \xe9gal \xe0 (",(0,d.jsx)(n.code,{children:"<="}),") ne sont pas prises en charge et renvoient une erreur."]})}),"\n",(0,d.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,d.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,d.jsx)(n.code,{children:"Undefined"})," et de la commande ",(0,d.jsx)(n.code,{children:"Null"})," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n\n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n\n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n\n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,d.jsx)(n.p,{children:"Exemples de r\xe9sultats de comparaisons avec des valeurs ind\xe9finies et nulles :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var d=s(296540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var d,l={},c=null,o=null;for(d in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,d)&&!a.hasOwnProperty(d)&&(l[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===l[d]&&(l[d]=n[d]);return{$$typeof:r,type:e,key:c,ref:o,props:l,_owner:t.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var d=s(296540);const r={},l=d.createContext(r);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);