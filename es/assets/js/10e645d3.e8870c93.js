/*! For license information please see 10e645d3.e8870c93.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84371],{333091:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var d=s(474848),r=s(28453);const t={id:"data-types",title:"Tipos de datos"},c=void 0,o={id:"Concepts/data-types",title:"Tipos de datos",description:"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/es/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"data-types",title:"Tipos de datos"},sidebar:"docs",previous:{title:"Operadores",permalink:"/docs/es/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/es/Concepts/blob"}},i={},l=[{value:"Valores por defecto",id:"valores-por-defecto",level:2},{value:"Null como valor por defecto",id:"null-como-valor-por-defecto",level:3},{value:"Convertir los tipos de datos",id:"convertir-los-tipos-de-datos",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D."}),"\n",(0,d.jsx)(n.p,{children:"Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no est\xe1n disponibles directamente en el lenguaje y se convierten autom\xe1ticamente. Por el contrario, algunos tipos de datos s\xf3lo pueden manejarse a trav\xe9s del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y c\xf3mo se soportan/declaran:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Tipos de datos"}),(0,d.jsx)(n.th,{children:"Soporte para la base (1)"}),(0,d.jsx)(n.th,{children:"Soporte para el lenguaje"}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/variables#using-the-var-keyword",children:"Declaraci\xf3n var`"})}),(0,d.jsx)(n.th,{children:(0,d.jsxs)(n.a,{href:"/docs/es/Concepts/variables#using-a-c_-directive",children:["Declaraci\xf3n ",(0,d.jsx)(n.code,{children:"C_"})," o ",(0,d.jsx)(n.code,{children:"ARRAY"})]})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/string",children:"Alfanum\xe9rico"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"Convertido en texto"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/string",children:"Text"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Text"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_TEXT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY TEXT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/date",children:"Fecha"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_DATE"}),", ",(0,d.jsx)(n.code,{children:"ARRAY DATE"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/time",children:"Hora"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_TIME"}),", ",(0,d.jsx)(n.code,{children:"ARRAY TIME"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/boolean",children:"Boolean"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_BOOLEAN"}),", ",(0,d.jsx)(n.code,{children:"ARRAY BOOLEAN"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Integer"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"Convertido en entero largo"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Integer"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Longint"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Integer"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_LONGINT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY LONGINT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Entero largo 64 bits"})}),(0,d.jsx)(n.td,{children:"S\xed (SQL)"}),(0,d.jsx)(n.td,{children:"Convertido en real"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Real"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Real"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_REAL"}),", ",(0,d.jsx)(n.code,{children:"ARRAY REAL"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Indefinido"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Null"})}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/pointer",children:"Pointer"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pointer"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_POINTER"}),", ",(0,d.jsx)(n.code,{children:"ARRAY POINTER"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/picture",children:"Picture"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Picture"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_PICTURE"}),", ",(0,d.jsx)(n.code,{children:"ARRAY PICTURE"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/blob",children:"BLOB"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Blob"}),", ",(0,d.jsx)(n.code,{children:"4D.Blob"})]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_BLOB"}),", ",(0,d.jsx)(n.code,{children:"ARRAY BLOB"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/object",children:"Object"})}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Object"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"C_OBJECT"}),", ",(0,d.jsx)(n.code,{children:"ARRAY OBJECT"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/Concepts/collection",children:"Collection"})}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Collection"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"C_COLLECTION"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.a,{href:"/docs/es/Concepts/variant",children:"Variant"}),"(2)"]}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"S\xed"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Variant"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["(1) Tenga en cuenta que ORDA maneja los campos de la base a trav\xe9s de objetos (entidades) y por lo tanto, s\xf3lo soporta los tipos de datos disponibles para estos objetos. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del tipo de datos ",(0,d.jsx)(n.a,{href:"/docs/es/Concepts/object",children:"Objeto"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["(2) Variant no es en realidad un tipo ",(0,d.jsx)(n.em,{children:"data"})," sino un tipo ",(0,d.jsx)(n.em,{children:"variable"})," que puede contener un valor de cualquier otro tipo de datos."]}),"\n",(0,d.jsx)(n.h2,{id:"valores-por-defecto",children:"Valores por defecto"}),"\n",(0,d.jsxs)(n.p,{children:["Cuando las ",(0,d.jsx)(n.a,{href:"/docs/es/Concepts/variables",children:"variables"})," o los ",(0,d.jsx)(n.a,{href:"/docs/es/Concepts/parameters",children:"par\xe1metros"})," se tipifican mediante una ",(0,d.jsx)(n.a,{href:"/docs/es/Concepts/variables#declaring-variables",children:"declaraci\xf3n expl\xedcita"}),", reciben un valor por defecto, que mantendr\xe1n durante la sesi\xf3n mientras no hayan sido asignados."]}),"\n",(0,d.jsx)(n.p,{children:"El valor por defecto depende del tipo de variable:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor por defecto"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"00-00-00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Longint"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hora"}),(0,d.jsx)(n.td,{children:"00:00:00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"picture size=0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Puntero"}),(0,d.jsx)(n.td,{children:"Nil=true"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:'""'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"Tama\xf1o Blob=0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"null"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"null"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Variant"}),(0,d.jsx)(n.td,{children:"indefinido"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"null-como-valor-por-defecto",children:"Null como valor por defecto"}),"\n",(0,d.jsxs)(n.p,{children:["Las variables de tipo Object, Collection, Pointer y Picture tienen ",(0,d.jsx)(n.strong,{children:"null"})," como valor por defecto, pero en realidad obtienen un estado intermedio cuando se declaran y no se asignan. Se ",(0,d.jsx)(n.em,{children:"comportan como"})," los valores ",(0,d.jsx)(n.strong,{children:"null"}),", pero con algunas diferencias, generando menos errores cuando el c\xf3digo intenta acceder a ellos."]}),"\n",(0,d.jsx)(n.h2,{id:"convertir-los-tipos-de-datos",children:"Convertir los tipos de datos"}),"\n",(0,d.jsx)(n.p,{children:'El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificaci\xf3n de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generar\xe1 errores de sintaxis.'}),"\n",(0,d.jsx)(n.p,{children:"La siguiente tabla lista los tipos de datos b\xe1sicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Tipos a convertir"}),(0,d.jsx)(n.th,{children:"en Cadena"}),(0,d.jsx)(n.th,{children:"en N\xfamero"}),(0,d.jsx)(n.th,{children:"en Fecha"}),(0,d.jsx)(n.th,{children:"en Hora"}),(0,d.jsx)(n.th,{children:"en Booleano"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"String (1)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Num"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero (2)"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hora"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bool"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Num"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando ",(0,d.jsx)(n.code,{children:"JSON Parse"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"(2) Los valores de tipo Hora pueden tratarse como n\xfameros."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": adem\xe1s de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos m\xe1s sofisticadas combinando operadores y otros comandos."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var d=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var d,t={},l=null,a=null;for(d in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,d)&&!i.hasOwnProperty(d)&&(t[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===t[d]&&(t[d]=n[d]);return{$$typeof:r,type:e,key:l,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var d=s(296540);const r={},t=d.createContext(r);function c(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);