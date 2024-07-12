/*! For license information please see 5f720079.3ffbd547.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4025],{184227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(474848),s=n(28453);const l={id:"vp-set-text-value",title:"VP SET TEXT VALUE"},i=void 0,o={id:"ViewPro/commands/vp-set-text-value",title:"VP SET TEXT VALUE",description:"VP SET TEXT VALUE ( rangeObj Text { ; formatPattern : Text }  )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-text-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-text-value",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-text-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-text-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-text-value",title:"VP SET TEXT VALUE"},sidebar:"docs",previous:{title:"VP SET TABLE THEME",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-table-theme"},next:{title:"VP SET TIME VALUE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-time-value"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP SET TEXT VALUE"})," ( ",(0,r.jsx)(t.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(t.em,{children:"textValue"})," : Text { ; ",(0,r.jsx)(t.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tres"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rangeObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Objet plage"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"textValue"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Valeur texte \xe0 fixer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"formatPattern"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Format de la valeur"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP SET TEXT VALUE"})," command assigns a specified text value to a designated cell range."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-cell",children:(0,r.jsx)(t.code,{children:"VP Cell"})})," or ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-column",children:(0,r.jsx)(t.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,r.jsx)(t.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"textValue"})," parameter specifies a text value to be assigned to the ",(0,r.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"formatPattern"})," defines a ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,r.jsx)(t.em,{children:"textValue"})," parameter."]}),"\n",(0,r.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,a=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:a,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(296540);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);