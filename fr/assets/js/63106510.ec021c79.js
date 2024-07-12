/*! For license information please see 63106510.ec021c79.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94033],{52602:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=r(474848),t=r(28453);const s={id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},c=void 0,a={id:"ViewPro/commands/vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS",description:"VP RECOMPUTE FORMULAS ( vpAreaName : Text )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-recompute-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-recompute-formulas",permalink:"/docs/fr/ViewPro/commands/vp-recompute-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-recompute-formulas.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},sidebar:"docs",previous:{title:"R",permalink:"/docs/fr/commands/R"},next:{title:"VP REMOVE NAME",permalink:"/docs/fr/ViewPro/commands/vp-remove-name"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP RECOMPUTE FORMULAS"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tres"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,o.jsx)(n.td,{})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," command immediately evaluates all formulas in ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". Par d\xe9faut, 4D calcule automatiquement les formules lorsqu'elles sont ins\xe9r\xe9es, import\xe9es ou export\xe9es. ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the ",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-flush-commands",children:"VP FLUSH COMMANDS"})," command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Be sure the ",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," command has not been executed before using ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"}),", otherwise the command does nothing."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:"Pour actualiser toutes les forumules du workbook, saisissez le code suivant :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'VP RECOMPUTE FORMULAS("ViewProArea")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var o=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var o,s={},d=null,l=null;for(o in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var o=r(296540);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);