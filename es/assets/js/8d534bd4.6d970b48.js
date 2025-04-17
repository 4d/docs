"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83727"],{450199:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"Concepts/data-types","title":"Tipos de datos","description":"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/es/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"data-types","title":"Tipos de datos"},"sidebar":"docs","previous":{"title":"Operadores","permalink":"/docs/es/Concepts/operators"},"next":{"title":"BLOB","permalink":"/docs/es/Concepts/blob"}}'),r=s("785893"),t=s("250065");let c={id:"data-types",title:"Tipos de datos"},l=void 0,i={},o=[{value:"Comandos",id:"comandos",level:2},{value:"Valores por defecto",id:"valores-por-defecto",level:2},{value:"Null como valor por defecto",id:"null-como-valor-por-defecto",level:3},{value:"Convertir los tipos de datos",id:"convertir-los-tipos-de-datos",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D."}),"\n",(0,r.jsx)(n.p,{children:"Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no est\xe1n disponibles directamente en el lenguaje y se convierten autom\xe1ticamente. Por el contrario, algunos tipos de datos s\xf3lo pueden manejarse a trav\xe9s del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y c\xf3mo se soportan/declaran:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipos de datos"}),(0,r.jsx)(n.th,{children:"Soporte para la base (1)"}),(0,r.jsx)(n.th,{children:"Soporte para el lenguaje"}),(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.a,{href:"/docs/es/Concepts/variables",children:["declaraci\xf3n ",(0,r.jsx)(n.code,{children:"var"})]})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/arrays",children:"Declaraci\xf3n ARRAY`"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/string",children:"Alfanum\xe9rico"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"Convertido en texto"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/string",children:"Text"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Text"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY TEXT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/date",children:"Fecha"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY DATE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/time",children:"Hora"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY TIME"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/boolean",children:"Boolean"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY BOOLEAN"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Integer"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"Convertido en entero largo"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Longint"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY LONGINT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Entero largo 64 bits"})}),(0,r.jsx)(n.td,{children:"S\xed (SQL)"}),(0,r.jsx)(n.td,{children:"Convertido en real"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/number",children:"Real"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Real"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY REAL"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Indefinido"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Null"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/pointer",children:"Pointer"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Pointer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY POINTER"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/picture",children:"Picture"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Picture"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY PICTURE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/blob",children:"BLOB"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Blob"}),", ",(0,r.jsx)(n.code,{children:"4D.Blob"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY BLOB"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/object",children:"Object"})}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Object"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ARRAY OBJECT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/Concepts/collection",children:"Collection"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Collection"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/es/Concepts/variant",children:"Variant"}),"(2)"]}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Variant"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Tenga en cuenta que ORDA maneja los campos de la base a trav\xe9s de objetos (entidades) y por lo tanto, s\xf3lo soporta los tipos de datos disponibles para estos objetos. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del tipo de datos ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/object",children:"Objeto"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["(2) Variant no es en realidad un tipo ",(0,r.jsx)(n.em,{children:"data"})," sino un tipo ",(0,r.jsx)(n.em,{children:"variable"})," que puede contener un valor de cualquier otro tipo de datos."]}),"\n",(0,r.jsx)(n.h2,{id:"comandos",children:"Comandos"}),"\n",(0,r.jsx)(n.p,{children:"You can always know the type of a field or variable using the following commands:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/type",children:(0,r.jsx)(n.code,{children:"Type"})})," for fields and scalar variables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/value-type",children:(0,r.jsx)(n.code,{children:"Value type"})})," for expressions"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"valores-por-defecto",children:"Valores por defecto"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando las ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/variables",children:"variables"})," o los ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/parameters",children:"par\xe1metros"})," se tipifican mediante una ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/variables#declaring-variables",children:"declaraci\xf3n expl\xedcita"}),", reciben un valor por defecto, que mantendr\xe1n durante la sesi\xf3n mientras no hayan sido asignados."]}),"\n",(0,r.jsx)(n.p,{children:"El valor por defecto depende del tipo de variable:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor por defecto"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fecha"}),(0,r.jsx)(n.td,{children:"00-00-00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:"00:00:00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"picture size=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Puntero"}),(0,r.jsx)(n.td,{children:"Nil=true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'""'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Tama\xf1o Blob=0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"null"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variant"}),(0,r.jsx)(n.td,{children:"indefinido"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"null-como-valor-por-defecto",children:"Null como valor por defecto"}),"\n",(0,r.jsxs)(n.p,{children:["Las variables de tipo Object, Collection, Pointer y Picture tienen ",(0,r.jsx)(n.strong,{children:"null"})," como valor por defecto, pero en realidad obtienen un estado intermedio cuando se declaran y no se asignan. Se ",(0,r.jsx)(n.em,{children:"comportan como"})," los valores ",(0,r.jsx)(n.strong,{children:"null"}),", pero con algunas diferencias, generando menos errores cuando el c\xf3digo intenta acceder a ellos."]}),"\n",(0,r.jsx)(n.h2,{id:"convertir-los-tipos-de-datos",children:"Convertir los tipos de datos"}),"\n",(0,r.jsx)(n.p,{children:'El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificaci\xf3n de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generar\xe1 errores de sintaxis.'}),"\n",(0,r.jsx)(n.p,{children:"La siguiente tabla lista los tipos de datos b\xe1sicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipos a convertir"}),(0,r.jsx)(n.th,{children:"en Cadena"}),(0,r.jsx)(n.th,{children:"en N\xfamero"}),(0,r.jsx)(n.th,{children:"en Fecha"}),(0,r.jsx)(n.th,{children:"en Hora"}),(0,r.jsx)(n.th,{children:"en Booleano"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String (1)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Num"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero (2)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fecha"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Num"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando ",(0,r.jsx)(n.code,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"(2) Los valores de tipo Hora pueden tratarse como n\xfameros."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": adem\xe1s de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos m\xe1s sofisticadas combinando operadores y otros comandos."]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var d=s(667294);let r={},t=d.createContext(r);function c(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);