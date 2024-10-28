"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83577],{25699:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var s=o(474848),r=o(28453);const t={id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},c=void 0,i={id:"ViewPro/commands/vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS",description:"VP RECOMPUTE FORMULAS ( vpAreaName : Text )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-recompute-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-recompute-formulas",permalink:"/docs/fr/ViewPro/commands/vp-recompute-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-recompute-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},sidebar:"docs",previous:{title:"R",permalink:"/docs/fr/commands-legacy/R"},next:{title:"VP REMOVE NAME",permalink:"/docs/fr/ViewPro/commands/vp-remove-name"}},a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP RECOMPUTE FORMULAS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," command immediately evaluates all formulas in ",(0,s.jsx)(n.em,{children:"vpAreaName"}),". Par d\xe9faut, 4D calcule automatiquement les formules lorsqu'elles sont ins\xe9r\xe9es, import\xe9es ou export\xe9es. ",(0,s.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-flush-commands",children:"VP FLUSH COMMANDS"})," command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Be sure the ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," command has not been executed before using ",(0,s.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"}),", otherwise the command does nothing."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour actualiser toutes les forumules du workbook, saisissez le code suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP RECOMPUTE FORMULAS("ViewProArea")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var s=o(296540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);