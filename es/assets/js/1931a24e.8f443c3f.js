/*! For license information please see 1931a24e.8f443c3f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52617],{84791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var r=s(474848),o=s(28453);const t={id:"vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS"},a=void 0,d={id:"ViewPro/commands/vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS",description:"VP SET CUSTOM FUNCTIONS ( vpAreaName Object  )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-custom-functions.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-custom-functions",permalink:"/docs/es/20-R5/ViewPro/commands/vp-set-custom-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-custom-functions.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS"},sidebar:"docs",previous:{title:"VP SET CURRENT SHEET",permalink:"/docs/es/20-R5/ViewPro/commands/vp-set-current-sheet"},next:{title:"VP SET DATA CONTEXT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-set-data-context"}},l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET CUSTOM FUNCTIONS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"formulaObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formulaObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto f\xf3rmula"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," designa las f\xf3rmulas 4D que pueden ser llamadas directamente desde las f\xf3rmulas de 4D View Pro. Dado que las funciones personalizadas no se almacenan en el documento, ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," debe ejecutarse en el evento de formulario ",(0,r.jsx)(n.code,{children:"On Load"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Las f\xf3rmulas especificadas por ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," aparecen en un men\xfa emergente cuando se introduce la primera letra de su nombre. Ver la ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/formulas",children:"p\xe1gina F\xf3rmulas y funciones"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Si se llama varias veces a ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," para la misma \xe1rea, en la misma sesi\xf3n, s\xf3lo se tiene en cuenta la \xfaltima llamada."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Pase el nombre del \xe1rea de 4D View Pro en ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"formulaObj"}),", pase un objeto que contenga las f\xf3rmulas 4D que pueden ser llamadas desde las f\xf3rmulas 4D View Pro as\xed como las propiedades adicionales. Cada propiedad ",(0,r.jsx)(n.code,{children:"customFunction"})," pasada en ",(0,r.jsx)(n.em,{children:"formulaObj"})," se convierte en el nombre de una funci\xf3n en el \xe1rea 4D View Pro."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<customFunction>"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Definici\xf3n de la funci\xf3n personalizada. ",(0,r.jsx)(n.code,{children:"<customFunction>"})," define el nombre de la funci\xf3n personalizada que se mostrar\xe1 en las f\xf3rmulas 4D View Pro (no se permiten espacios)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Objeto f\xf3rmula 4D (obligatorio). Ver el comando ",(0,r.jsx)(n.code,{children:"Formula"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"parameters"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,r.jsxs)(n.td,{children:["Colecci\xf3n de par\xe1metros (en el orden en que est\xe1n definidos en la f\xf3rmula). Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/formulas#parameters",children:"Par\xe1metros"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].name"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nombre del par\xe1metro a mostrar en 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].type"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["Tipo de par\xe1metro. Tipos soportados:",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is Boolean"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is collection"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is date"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is Integer"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is object"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is real"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is text"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is time"})}),(0,r.jsx)(n.code,{children:"*type* puede omitirse o puede pasarse el valor por defecto (-1) (excepto cuando al menos un par\xe1metro es de tipo collection, en cuyo caso la declaraci\xf3n del tipo del par\xe1metro es obligatoria). <br/>Si se omite *type* o -1, el valor se env\xeda autom\xe1ticamente con su tipo, excepto los valores de fecha u hora que se env\xedan como un objeto. Si *type* es "}),"Is object",(0,r.jsx)(n.code,{children:", el objeto es enviado en una propiedad "}),".value`. Ver la secci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/formulas#parameters",children:"Par\xe1metros"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"summary"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de la F\xf3rmula a mostrar en 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"minParams"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero m\xednimo de par\xe1metros"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"maxParams"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["N\xfamero m\xe1ximo de par\xe1metros. Pasar un n\xfamero superior a la longitud de los ",(0,r.jsx)(n.em,{children:"par\xe1metros"}),' permite declarar par\xe1metros "opcionales" con tipo por defecto']})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ATENCI\xd3N"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En cuanto se llama a ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"}),", los m\xe9todos permitidos por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"})," (si los hay) son ignorados en el \xe1rea 4D View Pro."]}),"\n",(0,r.jsxs)(n.li,{children:["En cuanto se llama a ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"}),", las funciones basadas en los comandos ",(0,r.jsx)(n.code,{children:"SET TABLE TITLES"})," y ",(0,r.jsx)(n.code,{children:"SET FIELD TITLES"})," son ignoradas en el \xe1rea 4D View Pro."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Desea utilizar objetos f\xf3rmula en un \xe1rea 4D View Pro para a\xf1adir n\xfameros, recuperar el apellido y el sexo de un cliente y el mes pico de la empresa:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Case of\n    :(FORM Event.code=On Load)\n \n       var $o : Object\n       $o:=New object\n \n// Define la funci\xf3n "addnum" de un m\xe9todo llamado "addnum"\n       $o.addnum:=New object\n       $o.addnum.formula:=Formula(addnum)\n       $o.addnum.parameters:=New collection\n       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))\n       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))\n \n// Definir la funci\xf3n "ClientLastName" desde un campo base de datos\n       $o.ClientLastName:=New object\n       $o.ClientLastName.formula:=Formula([Customers]lastname)\n       $o.ClientLastName.summary:="Lastname of the current client"\n \n// Define la funci\xf3n "label" de una expresi\xf3n 4D con un par\xe1metro\n       $o.label:=New object\n       $o.label.formula:=Formula(ds.Customers.get($1).label)\n       $o.label.parameters:=New collection\n       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))\n \n// Define la funci\xf3n "AverageValues" de un m\xe9todo llamado "AverageValues"\n       $o.AverageValues:=New object\n       $o.AverageValues.formula:=Formula(AverageValues)\n       $o.AverageValues.parameters:=New collection\n       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))\n        \n// Define la funci\xf3n "Title" de una variable llamada "Title"\n       $o.Title:=New object\n       $o.Title.formula:=Formula(Title)\n \n       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)\n \nEnd case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/formulas#4d-functions",children:"4D functions"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions",children:"4D View Pro: enhancement of custom functions (blog post)"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var r,t={},i=null,c=null;for(r in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:c,props:t,_owner:d.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(296540);const o={},t=r.createContext(o);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);