"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44172],{216862:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var i=n(474848),r=n(28453);const t={id:"set-default-century",title:"SET DEFAULT CENTURY",slug:"/commands/set-default-century",displayed_sidebar:"docs"},l=void 0,a={id:"commands-legacy/set-default-century",title:"SET DEFAULT CENTURY",description:"SET DEFAULT CENTURY ( si\xe8cle {; anPivot} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-default-century.md",sourceDirName:"commands-legacy",slug:"/commands/set-default-century",permalink:"/docs/fr/commands/set-default-century",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-default-century.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-default-century",title:"SET DEFAULT CENTURY",slug:"/commands/set-default-century",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Month of",permalink:"/docs/fr/commands/month-of"},next:{title:"Tickcount",permalink:"/docs/fr/commands/tickcount"}},d={},u=[{value:"Description",id:"description",level:4}];function c(e){const s={br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,i.jsx)(s.em,{children:"si\xe8cle"})," {; ",(0,i.jsx)(s.em,{children:"anPivot"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"si\xe8cle"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si\xe8cle par d\xe9faut (moins un) lors de la saisie d'ann\xe9es sur 2 chiffres"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"anPivot"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Ann\xe9e pivot lors de la saisie d'ann\xe9es sur 2 chiffres"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," vous permet de d\xe9finir le si\xe8cle courant par d\xe9faut et l'ann\xe9e pivot adopt\xe9s par 4D lorsque des dates sont saisies avec seulement deux chiffres pour l'ann\xe9e."]}),"\n",(0,i.jsx)(s.p,{children:"L'ann\xe9e pivot indique la valeur au-dessous de laquelle une ann\xe9e saisie sur deux chiffres sera interpr\xe9t\xe9e comme appartenant au si\xe8cle suivant :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"si l'ann\xe9e saisie est sup\xe9rieure ou \xe9gale \xe0 l'ann\xe9e pivot, elle appartient au si\xe8cle courant,"}),"\n",(0,i.jsx)(s.li,{children:"si l'ann\xe9e saisie est inf\xe9rieure \xe0 l'ann\xe9e pivot, elle appartient au si\xe8cle suivant (relativement au si\xe8cle courant par d\xe9faut)."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Par d\xe9faut, 4D pr\xe9sume que les dates appartiennent au 20e si\xe8cle et utilise la valeur 30 comme ann\xe9e pivot :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/97, 4D consid\xe8re que vous voulez indiquer le 25 janvier 1997"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/30, 4D consid\xe8re que vous voulez indiquer le 25 janvier 1930"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/29, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2029"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/07, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2007"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," permet de modifier ce comportement par d\xe9faut. Une fois ex\xe9cut\xe9e, elle prend effet imm\xe9diatement.",(0,i.jsx)(s.br,{}),"\nVous pouvez passer uniquement un si\xe8cle par d\xe9faut, ou un si\xe8cle par d\xe9faut et une ann\xe9e pivot."]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez uniquement un nouveau si\xe8cle par d\xe9faut moins un dans ",(0,i.jsx)(s.em,{children:"si\xe8cle"}),", 4D interpr\xe9tera toutes les ann\xe9es saisies sur deux chiffres comme appartenant \xe0 ce si\xe8cle.",(0,i.jsx)(s.br,{}),"\nPar exemple, apr\xe8s l'appel :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(20)\xa0// Fixer le 21e si\xe8cle comme si\xe8cle par d\xe9faut\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/97, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2097"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/07, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2007"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["En outre, vous pouvez sp\xe9cifier le param\xe8tre ",(0,i.jsx)(s.em,{children:"anPivot"}),".",(0,i.jsx)(s.br,{}),"\nPar exemple, apr\xe8s l'appel :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(19;95)\xa0// Fixer le 21e si\xe8cle comme si\xe8cle par d\xe9faut si l'ann\xe9e est inf\xe9rieure \xe0 95\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/97, 4D consid\xe8re que vous voulez indiquer le 25 janvier 1997"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/07, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2007"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Notez que cette commande n'affecte que l'interpr\xe9tation des dates lorsque les ann\xe9es sont saisies sur 2 chiffres. Quels que soient les param\xe8tres pass\xe9s \xe0 ",(0,i.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/1997, 4D consid\xe8re que vous voulez indiquer le 25 janvier 1997"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/2097, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2097"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/1907, 4D consid\xe8re que vous voulez indiquer le 25 janvier 1907"}),"\n",(0,i.jsx)(s.li,{children:"Si vous saisissez la date 25/01/2007, 4D consid\xe8re que vous voulez indiquer le 25 janvier 2007"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Cette commande affecte uniquement la saisie des donn\xe9es. Elle n'influe pas sur le stockage des donn\xe9es, les calculs, etc."})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(296540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);