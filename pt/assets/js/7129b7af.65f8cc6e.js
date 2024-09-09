/*! For license information please see 7129b7af.65f8cc6e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75244],{931092:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(474848),r=s(28453);const o={id:"vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS"},d=void 0,a={id:"ViewPro/commands/vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS",description:"VP SET CUSTOM FUNCTIONS ( vpAreaName Object  )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-custom-functions.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-custom-functions",permalink:"/docs/pt/ViewPro/commands/vp-set-custom-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-custom-functions.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS"},sidebar:"docs",previous:{title:"VP SET CURRENT SHEET",permalink:"/docs/pt/ViewPro/commands/vp-set-current-sheet"},next:{title:"VP SET DATA CONTEXT",permalink:"/docs/pt/ViewPro/commands/vp-set-data-context"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET CUSTOM FUNCTIONS"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"formulaObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formulaObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objecto f\xf3rmula"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," command designates the 4D formulas that can be called directly from 4D View Pro formulas. Because custom functions are not stored in the document,",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," must be executed in the ",(0,t.jsx)(n.code,{children:"On Load"})," form event."]}),"\n",(0,t.jsxs)(n.p,{children:["As f\xf3rmulas especificadas por ",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," aparecem em um menu pop-up quando a primeira letra de seu nome \xe9 inserida. Veja a p\xe1gina ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas",children:"F\xf3rmulas e Fun\xe7\xf5es"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called multiple times for the same area, in the same session, only the last call is taken into account."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passe o nome da \xe1rea 4D View Pro em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"formulaObj"})," parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each ",(0,t.jsx)(n.code,{children:"customFunction"})," property passed in ",(0,t.jsx)(n.em,{children:"formulaObj"})," becomes the name of a function in the 4D View Pro area."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<customFunction>"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsxs)(n.td,{children:["Defini\xe7\xe3o da fun\xe7\xe3o personalizada. ",(0,t.jsx)(n.code,{children:"<customFunction>"})," defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsxs)(n.td,{children:["Objeto f\xf3rmula 4D (obrigat\xf3rio). Ver o comando ",(0,t.jsx)(n.code,{children:"Formula"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"parameters"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,t.jsxs)(n.td,{children:["Cole\xe7\xe3o de par\xe2metros (pela ordem em que s\xe3o definidos na f\xf3rmula). For more information, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#parameters",children:"Parameters"})," section."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"[ ].name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome do par\xe2metro a mostrar no 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"[ ].type"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Tipo do par\xe2metro. Supported types:",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is Boolean"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is collection"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is date"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is Integer"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is object"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is real"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is text"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Is time"})}),(0,t.jsx)(n.em,{children:"type"})," can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). ",(0,t.jsx)(n.br,{})," If ",(0,t.jsx)(n.em,{children:"type"})," is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. Se ",(0,t.jsx)(n.em,{children:"type"})," \xe9 ",(0,t.jsx)(n.code,{children:"Is object"}),", o objeto \xe9 enviado em uma propriedade ",(0,t.jsx)(n.code,{children:".value"}),". Consulte a se\xe7\xe3o ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#parameters",children:"Par\xe2metros"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"resumo"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Descri\xe7\xe3o da f\xf3rmula a mostrar no 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minParams"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"N\xfamero m\xednimo de par\xe2metros"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"maxParams"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["N\xfamero m\xe1ximo de par\xe2metros. Passing a number higher than the length of ",(0,t.jsx)(n.em,{children:"parameters"}),' allows declaring "optional" parameters with default type']})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"AVISO"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["As soon as ",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called, the methods allowed by the ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"})," command (if any) are ignored in the 4D View Pro area."]}),"\n",(0,t.jsxs)(n.li,{children:["As soon as ",(0,t.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called, the functions based upon ",(0,t.jsx)(n.code,{children:"SET TABLE TITLES"})," and ",(0,t.jsx)(n.code,{children:"SET FIELD TITLES"})," commands are ignored in the 4D View Pro area."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender and the company's peak month:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Case of\n    :(FORM Event.code=On Load)\n \n       var $o : Object\n       $o:=New object\n \n// Define "addnum" function from a method named "addnum"\n       $o.addnum:=New object\n       $o.addnum.formula:=Formula(addnum)\n       $o.addnum.parameters:=New collection\n       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))\n       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))\n \n// Define "ClientLastName" function from a database field\n       $o.ClientLastName:=New object\n       $o.ClientLastName.formula:=Formula([Customers]lastname)\n       $o.ClientLastName.summary:="Lastname of the current client"\n \n// Define "label" function from a 4D expression with one parameter\n       $o.label:=New object\n       $o.label.formula:=Formula(ds.Customers.get($1).label)\n       $o.label.parameters:=New collection\n       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))\n \n// Define "AverageValues" function from a method named "AverageValues"\n       $o.AverageValues:=New object\n       $o.AverageValues.formula:=Formula(AverageValues)\n       $o.AverageValues.parameters:=New collection\n       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))\n        \n// Define "Title" function from a variable named "Title"\n       $o.Title:=New object\n       $o.Title.formula:=Formula(Title)\n \n       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)\n \nEnd case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#4d-functions",children:"4D functions"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions",children:"4D View Pro: enhancement of custom functions (blog post)"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,o={},c=null,l=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(296540);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);