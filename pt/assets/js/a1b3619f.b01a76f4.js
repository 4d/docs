/*! For license information please see a1b3619f.b01a76f4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50418],{624056:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=s(474848),r=s(28453);const o={id:"vp-get-stylesheets",title:"VP Get stylesheet"},l=void 0,d={id:"ViewPro/commands/vp-get-stylesheets",title:"VP Get stylesheet",description:"VP Get stylesheet ( vpAreaName Text { ; sheet Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-stylesheets",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-stylesheets",title:"VP Get stylesheet"},sidebar:"docs",previous:{title:"VP Get stylesheets",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-stylesheet"},next:{title:"VP Get column attributes",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-table-column-attributes"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,n.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,n.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,n.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe2metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vpAreaName"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"styleName"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"Nome do estilo"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sheet"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resultados"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"<-"}),(0,n.jsx)(t.td,{children:"Objeto da folha de estilo"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"VP Get stylesheet"})," command returns the ",(0,n.jsx)(t.em,{children:"styleName"})," style sheet object containing the property values which have been defined."]}),"\n",(0,n.jsxs)(t.p,{children:["Em ",(0,n.jsx)(t.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.em,{children:"styleName"}),", pass the name of the style sheet to get."]}),"\n",(0,n.jsxs)(t.p,{children:["You can define where to get the style sheet in the optional ",(0,n.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:"O seguinte c\xf3digo:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["... will return the ",(0,n.jsx)(t.em,{children:"GreenDashDotStyle"})," style object from the current sheet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,t,s)=>{var n=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,o={},c=null,h=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:h,props:o,_owner:d.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var n=s(296540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);