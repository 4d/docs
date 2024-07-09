/*! For license information please see 8bbf1d8d.00d69f7f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58865],{332861:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var d=s(474848),r=s(28453);const t={id:"data-types",title:"Types de donn\xe9es"},i=void 0,c={id:"Concepts/data-types",title:"Types de donn\xe9es",description:"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/fr/20-R4/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"data-types",title:"Types de donn\xe9es"},sidebar:"docs",previous:{title:"Operators",permalink:"/docs/fr/20-R4/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/fr/20-R4/Concepts/blob"}},l={},h=[{value:"Valeurs par d\xe9faut",id:"Valeurs-par-d\xe9faut",level:2},{value:"Null comme valeur par d\xe9faut",id:"Null-comme-valeur-par-d\xe9faut",level:3},{value:"Convertir les types de donn\xe9es",id:"Convertir-les-types-de-donn\xe9es",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D."}),"\n",(0,d.jsx)(n.p,{children:"Bien qu'ils soient g\xe9n\xe9ralement \xe9quivalents, certains types de donn\xe9es de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de donn\xe9es sont g\xe9r\xe9s uniquement par le langage. Le tableau suivant liste tous les types de donn\xe9es disponibles, leur prise en charge et leur d\xe9claration :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Types de donn\xe9es"}),(0,d.jsx)(n.th,{children:"Pris en charge par la base(1)"}),(0,d.jsx)(n.th,{children:"Pris en charge par le langage"}),(0,d.jsx)(n.th,{children:(0,d.jsxs)(n.a,{href:"/docs/fr/20-R4/Concepts/variables#using-the-var-keyword",children:[(0,d.jsx)(n.code,{children:"var"})," declaration"]})}),(0,d.jsx)(n.th,{children:(0,d.jsxs)(n.a,{href:"/docs/fr/20-R4/Concepts/variables#using-a-c_-directive",children:[(0,d.jsx)(n.code,{children:"C_"})," or ",(0,d.jsx)(n.code,{children:"ARRAY"})," declaration"]})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/string",children:"Alphanumeric"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Converti en texte"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/string",children:"Text"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Text"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_TEXT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY TEXT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/date",children:"Date"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_DATE"}),", ",(0,d.jsx)(n.code,{children:"ARRAY DATE"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/time",children:"Time"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_TIME"}),", ",(0,d.jsx)(n.code,{children:"ARRAY TIME"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/boolean",children:"Boolean"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_BOOLEAN"}),", ",(0,d.jsx)(n.code,{children:"ARRAY BOOLEAN"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/number",children:"Integer"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Converti en entier long"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Entier"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/number",children:"Longint"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Entier"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_LONGINT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY LONGINT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/number",children:"Longint 64 bits"})}),(0,d.jsx)(n.td,{children:"Oui (SQL)"}),(0,d.jsx)(n.td,{children:"Converti en r\xe9el"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/number",children:"Real"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Real"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_REAL"}),", ",(0,d.jsx)(n.code,{children:"ARRAY REAL"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/null-undefined",children:"Undefined"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/null-undefined",children:"Null"})}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/pointer",children:"Pointer"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pointer"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_POINTER"}),", ",(0,d.jsx)(n.code,{children:"ARRAY POINTER"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/picture",children:"Picture"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Picture"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_PICTURE"}),", ",(0,d.jsx)(n.code,{children:"ARRAY PICTURE"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/blob",children:"BLOB"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Blob"}),", ",(0,d.jsx)(n.code,{children:"4D.Blob"})]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_BLOB"}),", ",(0,d.jsx)(n.code,{children:"ARRAY BLOB"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/object",children:"Object"})}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Object"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_OBJECT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY OBJECT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/collection",children:"Collection"})}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Collection"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"C_COLLECTION"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/variant",children:"Variant"}),"(2)"]}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"Oui"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Variant"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["(1) A noter que ORDA g\xe8re les champs de la base via des objets (entit\xe9s). Par cons\xe9quent, seuls les types de donn\xe9es disponibles pour ces objets sont pris en charge. For more information, see the ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/object",children:"Object"})," data type description."]}),"\n",(0,d.jsxs)(n.p,{children:["(2) Variant is actually not a ",(0,d.jsx)(n.em,{children:"data"})," type but a ",(0,d.jsx)(n.em,{children:"variable"})," type that can contain a value of any other data type."]}),"\n",(0,d.jsx)(n.h2,{id:"Valeurs-par-d\xe9faut",children:"Valeurs par d\xe9faut"}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/variables",children:"variables"})," or ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/parameters",children:"parameters"})," are typed by means of an ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R4/Concepts/variables#declaring-variables",children:"explicit declaration"}),", they receive a default value, which they will keep during the session as long as they have not been assigned."]}),"\n",(0,d.jsx)(n.p,{children:"La valeur par d\xe9faut d\xe9pend du type de variable :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"La valeur par d\xe9faut"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bool\xe9en"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"00-00-00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Longint"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"00:00:00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"picture size=0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"Nil=true"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:'""'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"Blob size=0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"Null"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"Null"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Variant"}),(0,d.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"Null-comme-valeur-par-d\xe9faut",children:"Null comme valeur par d\xe9faut"}),"\n",(0,d.jsxs)(n.p,{children:["Variables of type Object, Collection, Pointer, and Picture have ",(0,d.jsx)(n.strong,{children:"null"})," as default value, but actually get an intermediary status when declared and not assigned. They ",(0,d.jsx)(n.em,{children:"behave like"})," ",(0,d.jsx)(n.strong,{children:"null"})," values, but with some differences, generating less errors when the code tries do access them."]}),"\n",(0,d.jsx)(n.h2,{id:"Convertir-les-types-de-donn\xe9es",children:"Convertir les types de donn\xe9es"}),"\n",(0,d.jsx)(n.p,{children:'Le langage de 4D comporte des fonctions et des op\xe9rateurs vous permettant de convertir des types de donn\xe9es en d\u2019autres types, dans la mesure o\xf9 de telles conversions ont un sens. 4D assure la v\xe9rification des types de donn\xe9es. Ainsi, vous ne pouvez pas \xe9crire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette op\xe9ration g\xe9n\xe8re une erreur de syntaxe.'}),"\n",(0,d.jsx)(n.p,{children:"Le tableau ci-dessous liste les types de donn\xe9es pouvant \xeatre convertis, le type dans lequel ils peuvent \xeatre convertis, ainsi que les fonctions 4D \xe0 utiliser :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Types \xe0 convertir"}),(0,d.jsx)(n.th,{children:"en Cha\xeene"}),(0,d.jsx)(n.th,{children:"en Num\xe9rique"}),(0,d.jsx)(n.th,{children:"en Date"}),(0,d.jsx)(n.th,{children:"en Heure"}),(0,d.jsx)(n.th,{children:"en Bool\xe9en"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cha\xeene (1)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Num"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9rique (2)"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Cha\xeene"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Cha\xeene"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Cha\xeene"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Num"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the ",(0,d.jsx)(n.code,{children:"JSON Parse"})," command."]}),"\n",(0,d.jsx)(n.p,{children:"(2) Les valeurs de type Heure peuvent \xeatre utilis\xe9es en tant que num\xe9riques."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var d=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var d,t={},h=null,o=null;for(d in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,d)&&!l.hasOwnProperty(d)&&(t[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===t[d]&&(t[d]=n[d]);return{$$typeof:r,type:e,key:h,ref:o,props:t,_owner:c.current}}n.Fragment=t,n.jsx=h,n.jsxs=h},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var d=s(296540);const r={},t=d.createContext(r);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);