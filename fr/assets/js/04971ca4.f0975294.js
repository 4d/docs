"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24322"],{586315:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>i});var d=JSON.parse('{"id":"Concepts/data-types","title":"Types de donn\xe9es","description":"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/fr/20-R7/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"data-types","title":"Types de donn\xe9es"},"sidebar":"docs","previous":{"title":"Op\xe9rateurs","permalink":"/docs/fr/20-R7/Concepts/operators"},"next":{"title":"BLOB","permalink":"/docs/fr/20-R7/Concepts/blob"}}'),r=s("785893"),t=s("250065");let l={id:"data-types",title:"Types de donn\xe9es"},i=void 0,c={},o=[{value:"Commandes",id:"commandes",level:2},{value:"Valeurs par d\xe9faut",id:"valeurs-par-d\xe9faut",level:2},{value:"Null comme valeur par d\xe9faut",id:"null-comme-valeur-par-d\xe9faut",level:3},{value:"Convertir les types de donn\xe9es",id:"convertir-les-types-de-donn\xe9es",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D."}),"\n",(0,r.jsx)(n.p,{children:"Bien qu'ils soient g\xe9n\xe9ralement \xe9quivalents, certains types de donn\xe9es de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de donn\xe9es sont g\xe9r\xe9s uniquement par le langage. Le tableau suivant liste tous les types de donn\xe9es disponibles, leur prise en charge et leur d\xe9claration :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Types de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Pris en charge par la base(1)"}),(0,r.jsx)(n.th,{children:"Pris en charge par le langage"}),(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.a,{href:"/docs/fr/20-R7/Concepts/variables",children:[(0,r.jsx)(n.code,{children:"var"})," declaration"]})}),(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.a,{href:"/docs/fr/20-R7/Concepts/arrays",children:["D\xe9claration ",(0,r.jsx)(n.code,{children:"ARRAY"})]})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/string",children:"Alphanum\xe9rique"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Converti en texte"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/string",children:"Text"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Text"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY TEXT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/date",children:"Date"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY DATE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/time",children:"Time"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY TIME"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/boolean",children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY BOOLEAN"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/number",children:"Integer"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Converti en entier long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/number",children:"Longint"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY LONGINT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/number",children:"Longint 64 bits"})}),(0,r.jsx)(n.td,{children:"Oui (SQL)"}),(0,r.jsx)(n.td,{children:"Converti en r\xe9el"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/number",children:"Real"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Real"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY REAL"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/null-undefined",children:"Undefined"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/null-undefined",children:"Null"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/pointer",children:"Pointer"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Pointer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY POINTER"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/picture",children:"Picture"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Picture"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY PICTURE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/blob",children:"BLOB"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Blob"}),", ",(0,r.jsx)(n.code,{children:"4D.Blob"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY BLOB"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/object",children:"Object"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Object"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY OBJECT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/collection",children:"Collection"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Collection"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variant",children:"Variant"}),"(2)"]}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Variant"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) A noter que ORDA g\xe8re les champs de la base via des objets (entit\xe9s). Par cons\xe9quent, seuls les types de donn\xe9es disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter \xe0 la description du type ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/object",children:"Object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["(2) Variant n'est pas un type de ",(0,r.jsx)(n.em,{children:"donn\xe9es"})," \xe0 proprement parler mais un type de ",(0,r.jsx)(n.em,{children:"variable"})," qui peut contenir une valeur de n'importe quel autre type de donn\xe9es."]}),"\n",(0,r.jsx)(n.h2,{id:"commandes",children:"Commandes"}),"\n",(0,r.jsx)(n.p,{children:"You can always know the type of a field or variable using the following commands:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/type",children:(0,r.jsx)(n.code,{children:"Type"})})," for fields and scalar variables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/value-type",children:(0,r.jsx)(n.code,{children:"Value type"})})," for expressions"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"valeurs-par-d\xe9faut",children:"Valeurs par d\xe9faut"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque les ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variables",children:"variables"})," ou les ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/parameters",children:"param\xe8tres"})," sont typ\xe9s au moyen d'une ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variables#d%C3%A9claration-des-variables",children:"d\xe9claration explicite"}),", ils re\xe7oivent une valeur par d\xe9faut, qu'ils conserveront au cours de la session tant qu'ils n'auront pas \xe9t\xe9 assign\xe9s."]}),"\n",(0,r.jsx)(n.p,{children:"La valeur par d\xe9faut d\xe9pend du type de variable :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"La valeur par d\xe9faut"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Booleen"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"00-00-00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"00:00:00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"picture size=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"Nil=true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'""'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob size=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variant"}),(0,r.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"null-comme-valeur-par-d\xe9faut",children:"Null comme valeur par d\xe9faut"}),"\n",(0,r.jsxs)(n.p,{children:["Les variables de type Object, Collection, Pointer et Picture ont ",(0,r.jsx)(n.strong,{children:"null"})," comme valeur par d\xe9faut, mais ont en fait un statut interm\xe9diaire lorsqu'elles sont d\xe9clar\xe9es et non assign\xe9es. Elles ",(0,r.jsx)(n.em,{children:"se comportent comme"})," des valeurs ",(0,r.jsx)(n.strong,{children:"null"}),", mais avec quelques diff\xe9rences, g\xe9n\xe9rant moins d'erreurs lorsque le code tente d'y acc\xe9der."]}),"\n",(0,r.jsx)(n.h2,{id:"convertir-les-types-de-donn\xe9es",children:"Convertir les types de donn\xe9es"}),"\n",(0,r.jsx)(n.p,{children:'Le langage de 4D comporte des fonctions et des op\xe9rateurs vous permettant de convertir des types de donn\xe9es en d\u2019autres types, dans la mesure o\xf9 de telles conversions ont un sens. 4D assure la v\xe9rification des types de donn\xe9es. Ainsi, vous ne pouvez pas \xe9crire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette op\xe9ration g\xe9n\xe8re une erreur de syntaxe.'}),"\n",(0,r.jsx)(n.p,{children:"Le tableau ci-dessous liste les types de donn\xe9es pouvant \xeatre convertis, le type dans lequel ils peuvent \xeatre convertis, ainsi que les fonctions 4D \xe0 utiliser :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Types \xe0 convertir"}),(0,r.jsx)(n.th,{children:"en Cha\xeene"}),(0,r.jsx)(n.th,{children:"en Num\xe9rique"}),(0,r.jsx)(n.th,{children:"en Date"}),(0,r.jsx)(n.th,{children:"en Heure"}),(0,r.jsx)(n.th,{children:"en Bool\xe9en"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cha\xeene (1)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Num"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9rique (2)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Cha\xeene"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Cha\xeene"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Cha\xeene"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Num"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Les cha\xeenes format\xe9es en JSON peuvent \xeatre converties en donn\xe9es scalaires, objets ou collections \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"(2) Les valeurs de type Heure peuvent \xeatre utilis\xe9es en tant que num\xe9riques."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Ce tableau ne traite pas les conversions de donn\xe9es plus complexes obtenues \xe0 l'aide d'une combinaison d'op\xe9rateurs et d'autres commandes."]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var d=s(667294);let r={},t=d.createContext(r);function l(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);