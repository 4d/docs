"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11630"],{383209:function(n,e,s){s.r(e),s.d(e,{metadata:()=>d,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var d=JSON.parse('{"id":"Concepts/data-types","title":"Tipos de datos","description":"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/es/19/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"data-types","title":"Tipos de datos"},"sidebar":"docs","previous":{"title":"Un recorrido r\xe1pido","permalink":"/docs/es/19/Concepts/quick-tour"},"next":{"title":"BLOB","permalink":"/docs/es/19/Concepts/blob"}}'),r=s("785893"),t=s("250065");let c={id:"data-types",title:"Tipos de datos"},i=void 0,l={},o=[{value:"Valores por defecto",id:"valores-por-defecto",level:2},{value:"Convertir los tipos de datos",id:"convertir-los-tipos-de-datos",level:2}];function a(n){let e={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D."}),"\n",(0,r.jsx)(e.p,{children:"Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no est\xe1n disponibles directamente en el lenguaje y se convierten autom\xe1ticamente. Por el contrario, algunos tipos de datos s\xf3lo pueden manejarse a trav\xe9s del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y c\xf3mo se soportan/declaran:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Tipos de datos"}),(0,r.jsx)(e.th,{children:"Soporte para la base (1)"}),(0,r.jsx)(e.th,{children:"Soporte para el lenguaje"}),(0,r.jsx)(e.th,{children:(0,r.jsxs)(e.a,{href:"/docs/es/19/Concepts/variables#using-the-var-keyword",children:["declaraci\xf3n ",(0,r.jsx)(e.code,{children:"var"})]})}),(0,r.jsx)(e.th,{children:(0,r.jsxs)(e.a,{href:"/docs/es/19/Concepts/variables#using-a-c_-directive",children:["declaraci\xf3n ",(0,r.jsx)(e.code,{children:"C_"})," o ",(0,r.jsx)(e.code,{children:"ARRAY"})]})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/string",children:"Alfanum\xe9rico"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Convertido en texto"}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/string",children:"Text"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_TEXT"}),", ",(0,r.jsx)(e.code,{children:"ARRAY TEXT"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/date",children:"Fecha"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Fecha"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_DATE"}),", ",(0,r.jsx)(e.code,{children:"ARRAY DATE"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/time",children:"Hora"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Hora"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_TIME"}),", ",(0,r.jsx)(e.code,{children:"ARRAY TIME"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/boolean",children:"Boolean"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_BOOLEAN"}),", ",(0,r.jsx)(e.code,{children:"ARRAY BOOLEAN"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/number",children:"Integer"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Convertido en entero largo"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ARRAY INTEGER"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/number",children:"Longint"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_LONGINT"}),", ",(0,r.jsx)(e.code,{children:"ARRAY LONGINT"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/number",children:"Entero largo 64 bits"})}),(0,r.jsx)(e.td,{children:"S\xed (SQL)"}),(0,r.jsx)(e.td,{children:"Convertido en real"}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/number",children:"Real"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_REAL"}),", ",(0,r.jsx)(e.code,{children:"ARRAY REAL"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/null-undefined",children:"Indefinido"})}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/null-undefined",children:"Null"})}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/pointer",children:"Puntero"})}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Puntero"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_POINTER"}),", ",(0,r.jsx)(e.code,{children:"ARRAY POINTER"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/picture",children:"Picture"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Picture"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_PICTURE"}),", ",(0,r.jsx)(e.code,{children:"ARRAY PICTURE"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/blob",children:"BLOB"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_BLOB"}),", ",(0,r.jsx)(e.code,{children:"ARRAY BLOB"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/object",children:"Object"})}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"C_OBJECT"}),", ",(0,r.jsx)(e.code,{children:"ARRAY OBJECT"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/collection",children:"Collection"})}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"C_COLLECTION"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/variant",children:"Variant"}),"(2)"]}),(0,r.jsx)(e.td,{children:"-"}),(0,r.jsx)(e.td,{children:"S\xed"}),(0,r.jsx)(e.td,{children:"Variant"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["(1) Tenga en cuenta que ORDA maneja los campos de la base a trav\xe9s de objetos (entidades) y por lo tanto, s\xf3lo soporta los tipos de datos disponibles para estos objetos. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del tipo de datos ",(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/object",children:"Objeto"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["(2) La variante no es en realidad un tipo de ",(0,r.jsx)(e.em,{children:"datos"})," sino un tipo de ",(0,r.jsx)(e.em,{children:"variable"})," que puede contener un valor de cualquier otro tipo de datos."]}),"\n",(0,r.jsx)(e.h2,{id:"valores-por-defecto",children:"Valores por defecto"}),"\n",(0,r.jsxs)(e.p,{children:["Cuando las ",(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/variables",children:"variables"})," o los ",(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/parameters",children:"par\xe1metros"})," se digitan mediante una ",(0,r.jsx)(e.a,{href:"/docs/es/19/Concepts/variables#declaring-variables",children:"declaraci\xf3n expl\xedcita"}),", reciben un valor por defecto, que conservar\xe1n durante la sesi\xf3n mientras no hayan sido asignados."]}),"\n",(0,r.jsx)(e.p,{children:"El valor por defecto depende del tipo de variable:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{children:"Valor por defecto"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Booleano"}),(0,r.jsx)(e.td,{children:"False"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Fecha"}),(0,r.jsx)(e.td,{children:"00-00-00"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Longint"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hora"}),(0,r.jsx)(e.td,{children:"00:00:00"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Picture"}),(0,r.jsx)(e.td,{children:"picture size=0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Puntero"}),(0,r.jsx)(e.td,{children:"Nil=true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:'""'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsx)(e.td,{children:"Tama\xf1o Blob=0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"null"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:"null"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Variant"}),(0,r.jsx)(e.td,{children:"indefinido"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"convertir-los-tipos-de-datos",children:"Convertir los tipos de datos"}),"\n",(0,r.jsx)(e.p,{children:'El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificaci\xf3n de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generar\xe1 errores de sintaxis.'}),"\n",(0,r.jsx)(e.p,{children:"La siguiente tabla lista los tipos de datos b\xe1sicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Tipos a convertir"}),(0,r.jsx)(e.th,{children:"en Cadena"}),(0,r.jsx)(e.th,{children:"en N\xfamero"}),(0,r.jsx)(e.th,{children:"en Fecha"}),(0,r.jsx)(e.th,{children:"en Hora"}),(0,r.jsx)(e.th,{children:"en Booleano"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"String (1)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Num"}),(0,r.jsx)(e.td,{children:"Fecha"}),(0,r.jsx)(e.td,{children:"Hora"}),(0,r.jsx)(e.td,{children:"Bool"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"N\xfamero (2)"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Bool"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Fecha"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Bool"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hora"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Bool"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Num"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando ",(0,r.jsx)(e.code,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"(2) Los valores de tipo Hora pueden tratarse como n\xfameros."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Nota:"})," adem\xe1s de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos m\xe1s sofisticadas combinando operadores y otros comandos."]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var d=s(667294);let r={},t=d.createContext(r);function c(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);