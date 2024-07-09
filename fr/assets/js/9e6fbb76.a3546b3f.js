/*! For license information please see 9e6fbb76.a3546b3f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62018],{780063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var t=r(474848),s=r(28453);const l={id:"vp-set-value",title:"VP SET VALUE"},o=void 0,a={id:"ViewPro/commands/vp-set-value",title:"VP SET VALUE",description:"VP SET VALUE ( rangeObj Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-value",permalink:"/docs/fr/ViewPro/commands/vp-set-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-value",title:"VP SET VALUE"},sidebar:"docs",previous:{title:"VP SET TIME VALUE",permalink:"/docs/fr/ViewPro/commands/vp-set-time-value"},next:{title:"VP SET VALUES",permalink:"/docs/fr/ViewPro/commands/vp-set-values"}},c={},i=[{value:"Description",id:"Description",level:4},{value:"Exemple",id:"Exemple",level:4},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET VALUE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"valueObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Valeurs de la cellule et options de formatage"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET VALUE"})," command assigns a specified value to a designated cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["The command allows you to use a generic code to set and format the types of values in ",(0,t.jsx)(n.em,{children:"rangeObj"}),", whereas other commands, such as ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-text-value",children:(0,t.jsx)(n.code,{children:"VP SET TEXT VALUE"})})," and ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-num-value",children:(0,t.jsx)(n.code,{children:"VP SET NUM VALUE"})}),", reduce the values to specific types."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,t.jsx)(n.a,{href:"vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})})," or ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-column",children:(0,t.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,t.jsxs)(n.p,{children:["The parameter ",(0,t.jsx)(n.em,{children:"valueObj"})," is an object that includes properties for the value and the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#cell-format",children:"format"})," to assign to ",(0,t.jsx)(n.em,{children:"rangeObj"}),". Il peut contenir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,t.jsxs)(n.td,{children:["Value to assign to ",(0,t.jsx)(n.em,{children:"rangeObj"})," (except- time). Passez null pour effacer le contenu de la cellule."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsxs)(n.td,{children:["Time value (in seconds) to assign to ",(0,t.jsx)(n.em,{children:"rangeObj"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"format"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Mod\xe8le pour la propri\xe9t\xe9 value/time. For information on patterns and formatting characters, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#cell-format",children:"Cell Format"})," paragraph."]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Set the cell value as False\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))\n \n//Set the cell value as 2\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))\n \n//Set the cell value as $125,571.35\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))\n \n//Set the cell value as Hello World!\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))\n \n//Set the cell value as current date\nVP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))\n \n//Set the cell value as current hour\nVP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))\n \n//Set the cell value as specific date and time\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))\n \n//Erase cell content\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-value",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-boolean-value",children:"VP SET BOOLEAN VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-field",children:"VP SET FIELD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-num-value",children:"VP SET NUM VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-text-value",children:"VP SET TEXT VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,l={},i=null,d=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:s,type:e,key:i,ref:d,props:l,_owner:a.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(296540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);