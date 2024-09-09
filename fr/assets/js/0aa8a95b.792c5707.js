/*! For license information please see 0aa8a95b.792c5707.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30258],{984444:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(474848),o=r(28453);const s={id:"vp-resume-computing",title:"VP RESUME COMPUTING"},i=void 0,c={id:"ViewPro/commands/vp-resume-computing",title:"VP RESUME COMPUTING",description:"VP RESUME COMPUTING ( vpAreaName : Text )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-resume-computing.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-resume-computing",permalink:"/docs/fr/ViewPro/commands/vp-resume-computing",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-resume-computing.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-resume-computing",title:"VP RESUME COMPUTING"},sidebar:"docs",previous:{title:"VP RESIZE TABLE",permalink:"/docs/fr/ViewPro/commands/vp-resize-table"},next:{title:"VP Row",permalink:"/docs/fr/ViewPro/commands/vp-row"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP RESUME COMPUTING"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP RESUME COMPUTING"})," command  restarts the calculation of formulas in ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande r\xe9active le service de calcul de 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after ",(0,t.jsx)(n.code,{children:"VP RESUME COMPUTING"})," is executed are calculated."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Le service de calcul de 4D View Pro maintient un compteur d'actions de suspension/reprise. Therefore, each execution of ",(0,t.jsx)(n.code,{children:"VP RESUME COMPUTING"})," must be balanced by a corresponding execution of the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," command."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["See example in ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,s={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);