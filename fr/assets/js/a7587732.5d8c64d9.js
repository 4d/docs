"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10617"],{550318:function(e,n,d){d.r(n),d.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"Concepts/null-undefined","title":"Null et Undefined","description":"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d\'une expression n\'est pas connue.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_null_undefined.md","sourceDirName":"Concepts","slug":"/Concepts/null-undefined","permalink":"/docs/fr/20-R6/Concepts/null-undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"null-undefined","title":"Null et Undefined"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/fr/20-R6/Concepts/date"},"next":{"title":"Num\xe9rique (R\xe9el, Entier, Entier long)","permalink":"/docs/fr/20-R6/Concepts/number"}}'),l=d("785893"),r=d("250065");let i={id:"null-undefined",title:"Null et Undefined"},t=void 0,a={},c=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Op\xe9rateurs sur les Null",id:"op\xe9rateurs-sur-les-null",level:2},{value:"Op\xe9rateurs sur les Undefined",id:"op\xe9rateurs-sur-les-undefined",level:2},{value:"Exemples",id:"exemples",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."}),"\n",(0,l.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,l.jsxs)(n.p,{children:["Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,l.jsx)(n.strong,{children:"null"}),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur. Essayer de lire une propri\xe9t\xe9 d'une valeur ",(0,l.jsx)(n.strong,{children:"null"})," retourne une erreur."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans le langage 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la fonction ",(0,l.jsx)(n.code,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"attributs d'objets"}),"\n",(0,l.jsx)(n.li,{children:"\xe9l\xe9ments de collections"}),"\n",(0,l.jsxs)(n.li,{children:["variables de type object, collection, pointer, picture ou variant (voir aussi ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/data-types#null-as-default-value",children:"Null comme valeur par d\xe9faut"}),")."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,l.jsxs)(n.p,{children:["Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Il indique une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. L'\xe9valuation d'une propri\xe9t\xe9 d'objet peut \xe9galement produire une valeur undefined. La lecture d'une propri\xe9t\xe9 dont la valeur est ind\xe9finie renvoie ",(0,l.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Une variable de type Variant a ",(0,l.jsx)(n.strong,{children:"undefined"})," comme ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/data-types#valeurs-par-d%C3%A9faut",children:"valeur par d\xe9faut"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,l.jsx)(n.code,{children:"Undefined"})," retourne toujours Faux pour un champ)."]}),"\n",(0,l.jsx)(n.p,{children:"En r\xe8gle g\xe9n\xe9rale, lorsque le code tente de lire ou d'assigner des expressions ind\xe9finies, 4D g\xe9n\xe9rera des erreurs, except\xe9 dans les cas suivants :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Affecter une valeur ind\xe9finie aux variables (\xe0 l'exception des tableaux) a le m\xeame effet que d'appeler ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page89.html",children:(0,l.jsx)(n.code,{children:"CLEAR VARIABLE"})})," avec elles :"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a est undefined (pas d'erreur), assigner cette valeur efface la variable\n      //$val=0\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Objet, collection, pointeur : Null"}),"\n",(0,l.jsx)(n.li,{children:"Image : image vide"}),"\n",(0,l.jsx)(n.li,{children:"Bool\xe9en : False"}),"\n",(0,l.jsx)(n.li,{children:'Cha\xeene : ""'}),"\n",(0,l.jsx)(n.li,{children:"Num\xe9rique : 0"}),"\n",(0,l.jsx)(n.li,{children:'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'}),"\n",(0,l.jsx)(n.li,{children:"Heure : 0 (nombre de ms)"}),"\n",(0,l.jsx)(n.li,{children:"Ind\xe9fini, Null : pas de changement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     mymethod($o.a) //passage d\'un param\xe8tre undefined\n     \n      //Dans la m\xe9thode mymethod\n     #Declare ($myText : Text) //Param\xe8tre de type texte\n      // $myText contient ""\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Une expression de condition est automatiquement convertie \xe0 Faux lorsqu'elle est \xe9valu\xe9e undefined avec les mots-cl\xe9s If et Case of :"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Undefined en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,l.jsx)(n.code,{children:"String"}),", ",(0,l.jsx)(n.code,{children:"Num"}),", ",(0,l.jsx)(n.code,{children:"Date"}),", ",(0,l.jsx)(n.code,{children:"Time"}),", ",(0,l.jsx)(n.code,{children:"Bool"}),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n"})})]}),"\n",(0,l.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-null",children:"Op\xe9rateurs sur les Null"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Op\xe9ration"}),(0,l.jsx)(n.th,{children:"Syntaxe"}),(0,l.jsx)(n.th,{children:"Retourne"}),(0,l.jsx)(n.th,{children:"Expression"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Egalit\xe9"}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"="})," Null"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"="})," Undefined"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"="})," ",(0,l.jsx)(n.em,{children:"valeur scalaire"})]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"="})," 42"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"#"})," Null"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"#"})," Undefined"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Null ",(0,l.jsx)(n.code,{children:"#"})," ",(0,l.jsx)(n.em,{children:"valeur scalaire"})]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.nullProp ",(0,l.jsx)(n.code,{children:"#"})," 42"]}),(0,l.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Les ",(0,l.jsx)(n.em,{children:"valeurs scalaires"})," sont des valeurs de type cha\xeene, date, heure, bool\xe9en, num\xe9rique ou Blob. Lorsqu'elles sont d\xe9clar\xe9es, leur ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/data-types#valeurs-par-defaut",children:"valeur par d\xe9faut"})," n'est ni undefined ni null. Les autres types (pointeur, image, objet, collection) ont une valeur par d\xe9faut undefined ou null. Ex :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Les comparaisons avec les op\xe9rateurs Sup\xe9rieur \xe0 (",(0,l.jsx)(n.code,{children:">"}),"), Inf\xe9rieur \xe0 (",(0,l.jsx)(n.code,{children:"<"}),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,l.jsx)(n.code,{children:">="}),"), et Inf\xe9rieur ou \xe9gal \xe0 (",(0,l.jsx)(n.code,{children:"<="}),") ne sont pas prises en charge avec des valeurs Null et renvoient une erreur."]})}),"\n",(0,l.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-undefined",children:"Op\xe9rateurs sur les Undefined"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Op\xe9ration"}),(0,l.jsx)(n.th,{children:"Syntaxe"}),(0,l.jsx)(n.th,{children:"Retourne"}),(0,l.jsx)(n.th,{children:"Expression"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Egalit\xe9"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"="})," Undefined"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"="})," Null"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"="})," ",(0,l.jsx)(n.em,{children:"autres valeurs"})]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"="})," 42"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"#"})," Undefined"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"#"})," Null"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"#"})," ",(0,l.jsx)(n.em,{children:"autres valeurs"})]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"#"})," 42"]}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:">"})," string, Date, Time, number"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:">"}),' "abc"']}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"<"})," string, Date, Time, number"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"<"}),' "abc"']}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:">="})," string, Date, Time, number"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:">="}),' "abc"']}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,l.jsxs)(n.td,{children:["Undefined ",(0,l.jsx)(n.code,{children:"<="})," string, Date, Time, number"]}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsxs)(n.td,{children:["a.undefinedProp ",(0,l.jsx)(n.code,{children:"<="}),' "abc"']}),(0,l.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"autres valeurs"})," sont des expressions de tout type dont la valeur n'est ni Undefined ni Null."]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Comparisons of Undefined values with Pointer, Picture, Boolean, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,l.jsx)(n.code,{children:">"}),"), Less than (",(0,l.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,l.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,l.jsx)(n.code,{children:"<="}),") operators are not supported and return an error."]})}),"\n",(0,l.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,l.jsx)(n.code,{children:"Undefined"})," ainsi que de la commande ",(0,l.jsx)(n.code,{children:"Null"})," avec les propri\xe9t\xe9s d'objet, en fonction du contexte :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,l.jsx)(n.p,{children:"Exemples de r\xe9sultats de comparaisons avec des valeurs undefined et null :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//noter que $vVar n\'est pas assign\xe9e \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Erreur\n$result:=($vObj.undefined>$vObj.null)  //Erreur\n$result:=($vVar < 42) //False\n\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return i}});var s=d(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);