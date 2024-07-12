/*! For license information please see 93dd13b3.05f5cd8a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21678],{34433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"vp-set-time-value",title:"VP SET TIME VALUE"},l=void 0,o={id:"ViewPro/commands/vp-set-time-value",title:"VP SET TIME VALUE",description:"VP SET TIME VALUE ( rangeObj Text { ; formatPattern : Text }  )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-time-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-time-value",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-time-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-time-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-time-value",title:"VP SET TIME VALUE"},sidebar:"docs",previous:{title:"VP SET TEXT VALUE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-text-value"},next:{title:"VP SET VALUE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-value"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET TIME VALUE"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"timeValue"})," : Text { ; ",(0,r.jsx)(n.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeValue"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Valeur heure \xe0 fixer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatPattern"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Format de la valeur"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET TIME VALUE"})," command assigns a specified time value to a designated cell range."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-cell",children:(0,r.jsx)(n.code,{children:"VP Cell"})})," or ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-column",children:(0,r.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,r.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"timeValue"})," parameter specifies a time expressed in seconds to be assigned to the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"formatPattern"})," defines a ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,r.jsx)(n.em,{children:"timeValue"})," parameter."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//Set the value to the current time\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)\n \n//Set the value to a specific time with a designated format\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);