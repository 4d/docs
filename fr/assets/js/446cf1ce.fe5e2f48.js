"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13769"],{915375:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>i});var d=JSON.parse('{"id":"Concepts/data-types","title":"Types de donn\xe9es","description":"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/fr/18/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"data-types","title":"Types de donn\xe9es"},"sidebar":"docs","previous":{"title":"Tour d\'horizon","permalink":"/docs/fr/18/Concepts/quick-tour"},"next":{"title":"BLOB","permalink":"/docs/fr/18/Concepts/blob"}}'),r=s("785893"),t=s("250065");let i={id:"data-types",title:"Types de donn\xe9es"},l=void 0,c={},o=[{value:"Valeurs par d\xe9faut",id:"valeurs-par-d\xe9faut",level:2},{value:"Convertir les types de donn\xe9es",id:"convertir-les-types-de-donn\xe9es",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D."}),"\n",(0,r.jsx)(n.p,{children:"Bien qu'ils soient g\xe9n\xe9ralement \xe9quivalents, certains types de donn\xe9es de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de donn\xe9es sont g\xe9r\xe9s uniquement par le langage. Le tableau suivant liste tous les types de donn\xe9es disponibles, leur prise en charge et leur d\xe9claration :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Types de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Pris en charge par la base(1)"}),(0,r.jsx)(n.th,{children:"Pris en charge par le langage"}),(0,r.jsx)(n.th,{children:"D\xe9claration de la variable"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/string",children:"Alphanum\xe9rique"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Converti en texte"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/string",children:"Text"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_TEXT"}),", ",(0,r.jsx)(n.code,{children:"ARRAY TEXT"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/date",children:"Date"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_DATE"}),", ",(0,r.jsx)(n.code,{children:"ARRAY DATE"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/time",children:"Time"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_TIME"}),", ",(0,r.jsx)(n.code,{children:"ARRAY TIME"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/boolean",children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_BOOLEAN"}),", ",(0,r.jsx)(n.code,{children:"ARRAY BOOLEAN"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/number",children:"Integer"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Converti en entier long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/number",children:"Longint"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_LONGINT"}),", ",(0,r.jsx)(n.code,{children:"ARRAY LONGINT"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/number",children:"Longint 64 bits"})}),(0,r.jsx)(n.td,{children:"Oui (SQL)"}),(0,r.jsx)(n.td,{children:"Converti en r\xe9el"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/number",children:"Real"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_REAL"}),", ",(0,r.jsx)(n.code,{children:"ARRAY REAL"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/null-undefined",children:"Undefined"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/null-undefined",children:"Null"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/pointer",children:"Pointer"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_POINTER"}),", ",(0,r.jsx)(n.code,{children:"ARRAY POINTER"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/picture",children:"Picture"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_PICTURE"}),", ",(0,r.jsx)(n.code,{children:"ARRAY PICTURE"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/blob",children:"BLOB"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_BLOB"}),", ",(0,r.jsx)(n.code,{children:"ARRAY BLOB"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/object",children:"Object"})}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"C_OBJECT"}),", ",(0,r.jsx)(n.code,{children:"ARRAY OBJECT"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/collection",children:"Collection"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"C_COLLECTION"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/variant",children:"Variant"}),"(2)"]}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) A noter que ORDA g\xe8re les champs de la base via des objets (entit\xe9s). Par cons\xe9quent, seuls les types de donn\xe9es disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter \xe0 la description du type ",(0,r.jsx)(n.a,{href:"/docs/fr/18/Concepts/object",children:"Objet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["(2) Le variant n'est pas un type de ",(0,r.jsx)(n.em,{children:"donn\xe9es"})," un type de ",(0,r.jsx)(n.em,{children:"variable"})," qui peut contenir une valeur de n'importe quel autre type."]}),"\n",(0,r.jsx)(n.h2,{id:"valeurs-par-d\xe9faut",children:"Valeurs par d\xe9faut"}),"\n",(0,r.jsx)(n.p,{children:"Au moment de leur typage via une directive de compilation, les variables re\xe7oivent une valeur par d\xe9faut, qu'elles conserveront au cours de la session tant qu'elles n'auront pas \xe9t\xe9 affect\xe9es."}),"\n",(0,r.jsx)(n.p,{children:"La valeur par d\xe9faut d\xe9pend du type et de la cat\xe9gorie de la variable, du contexte d'ex\xe9cution (interpr\xe9t\xe9 ou compil\xe9), ainsi que, pour le mode compil\xe9, des options de compilation d\xe9finies dans la Page Compilateur des Propri\xe9t\xe9s de la base :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Les variables process et interprocess sont toujours positionn\xe9es "\xe0 z\xe9ro" (qui signifie selon les cas 0, cha\xeene vide, blob vide, pointeur nil, date 00-00-00\u2026)'}),"\n",(0,r.jsxs)(n.li,{children:["Les variables locales sont positionn\xe9es :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"en mode interpr\xe9t\xe9 : \xe0 z\xe9ro"}),"\n",(0,r.jsxs)(n.li,{children:["en mode compil\xe9, d\xe9pendant de l'option ",(0,r.jsx)(n.strong,{children:"Initialiser les variables locales"})," des Propri\xe9t\xe9s de la base :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'\xe0 z\xe9ro lorsque "\xe0 z\xe9ro" est s\xe9lectionn\xe9,'}),"\n",(0,r.jsx)(n.li,{children:'\xe0 une valeur arbitraire fixe lorsque "\xe0 une valeur aberrante" est s\xe9lectionn\xe9 (0x72677267 pour les num\xe9riques et les heures, toujours vrai pour les bool\xe9ens), \xe9quivalent de "\xe0 z\xe9ro" pour les autres,'}),"\n",(0,r.jsxs)(n.li,{children:["\xe0 \"non\" : pas d'initialisation, c'est-\xe0-dire que tout ce qui est dans la RAM est utilis\xe9 pour les variables; c'est le cas des valeurs d\xe9j\xe0 utilis\xe9es pour les autres variables. ",(0,r.jsx)(n.strong,{children:"Note :"}),' Il est recommand\xe9 d\'utiliser "\xe0 z\xe9ro".']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Le tableau suivant illustre ces valeurs par d\xe9faut :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:'Interprocess/Process (interpr\xe9t\xe9/compil\xe9), Local (interpr\xe9t\xe9/compil\xe9 "\xe0 z\xe9ro")'}),(0,r.jsx)(n.th,{children:'Local compil\xe9 "aberrant"'}),(0,r.jsx)(n.th,{children:'Local compil\xe9 "non"'})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Booleen"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True (varie)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"00-00-00"}),(0,r.jsx)(n.td,{children:"00-00-00"}),(0,r.jsx)(n.td,{children:"00-00-00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1919382119"}),(0,r.jsx)(n.td,{children:"909540880 (varie)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"00:00:00"}),(0,r.jsx)(n.td,{children:"533161:41:59"}),(0,r.jsx)(n.td,{children:"249345:34:24 (varie)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"picture size=0"}),(0,r.jsx)(n.td,{children:"picture size=0"}),(0,r.jsx)(n.td,{children:"picture size=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.250753659382e+243"}),(0,r.jsx)(n.td,{children:"1.972748538022e-217 (varie)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"Nil=true"}),(0,r.jsx)(n.td,{children:"Nil=true"}),(0,r.jsx)(n.td,{children:"Nil=true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'""'}),(0,r.jsx)(n.td,{children:'""'}),(0,r.jsx)(n.td,{children:'""'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob size=0"}),(0,r.jsx)(n.td,{children:"Blob size=0"}),(0,r.jsx)(n.td,{children:"Blob size=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"Null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"Null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variant"}),(0,r.jsx)(n.td,{children:"undefined"}),(0,r.jsx)(n.td,{children:"undefined"}),(0,r.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"convertir-les-types-de-donn\xe9es",children:"Convertir les types de donn\xe9es"}),"\n",(0,r.jsx)(n.p,{children:'Le langage de 4D comporte des fonctions et des op\xe9rateurs vous permettant de convertir des types de donn\xe9es en d\u2019autres types, dans la mesure o\xf9 de telles conversions ont un sens. 4D assure la v\xe9rification des types de donn\xe9es. Ainsi, vous ne pouvez pas \xe9crire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette op\xe9ration g\xe9n\xe8re une erreur de syntaxe.'}),"\n",(0,r.jsx)(n.p,{children:"Le tableau ci-dessous liste les types de donn\xe9es pouvant \xeatre convertis, le type dans lequel ils peuvent \xeatre convertis, ainsi que les fonctions 4D \xe0 utiliser :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Types \xe0 convertir"}),(0,r.jsx)(n.th,{children:"en Cha\xeene"}),(0,r.jsx)(n.th,{children:"en Num\xe9rique"}),(0,r.jsx)(n.th,{children:"en Date"}),(0,r.jsx)(n.th,{children:"en Heure"}),(0,r.jsx)(n.th,{children:"en Bool\xe9en"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cha\xeene (1)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Num"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"Bool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9rique (2)"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Bool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Bool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Bool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Num"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Les cha\xeenes format\xe9es en JSON peuvent \xeatre converties en donn\xe9es scalaires, objets ou collections \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"(2) Les valeurs de type Heure peuvent \xeatre utilis\xe9es en tant que num\xe9riques."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Ce tableau ne traite pas les conversions de donn\xe9es plus complexes obtenues \xe0 l'aide d'une combinaison d'op\xe9rateurs et d'autres commandes."]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);