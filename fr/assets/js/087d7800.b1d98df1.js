"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99355],{301971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(474848),r=n(28453);const i={id:"wa-get-last-filtered-url",title:"WA Get last filtered URL",slug:"/commands/wa-get-last-filtered-url",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/wa-get-last-filtered-url",title:"WA Get last filtered URL",description:"WA Get last filtered URL ( { ;} objet* ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-last-filtered-url.md",sourceDirName:"commands-legacy",slug:"/commands/wa-get-last-filtered-url",permalink:"/docs/fr/commands/wa-get-last-filtered-url",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-filtered-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wa-get-last-filtered-url",title:"WA Get last filtered URL",slug:"/commands/wa-get-last-filtered-url",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WA GET EXTERNAL LINKS FILTERS",permalink:"/docs/fr/commands/wa-get-external-links-filters"},next:{title:"WA GET LAST URL ERROR",permalink:"/docs/fr/commands/wa-get-last-url-error"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WA Get last filtered URL"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"objet"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Op\xe9rateur"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objet"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Dernier URL filtr\xe9"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"WA Get last filtered URL"})," retourne le dernier URL ayant \xe9t\xe9 filtr\xe9 dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,s.jsx)(t.em,{children:"*"})," et ",(0,s.jsx)(t.em,{children:"objet"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"L\u2019URL peut avoir \xe9t\xe9 filtr\xe9 pour l\u2019une des raisons suivantes :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["l\u2019URL est interdit \xe0 cause d\u2019un filtre (commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-set-url-filters",children:"WA SET URL FILTERS"}),"),"]}),"\n",(0,s.jsxs)(t.li,{children:["le lien est ouvert dans le navigateur par d\xe9faut (commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"}),"),"]}),"\n",(0,s.jsx)(t.li,{children:"l\u2019URL tentait d\u2019ouvrir une fen\xeatre pop up."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Il est judicieux d\u2019appeler cette commande dans le contexte des \xe9v\xe9nements formulaire On URL Filtering, On Open External Link et On Window Opening Denied afin de conna\xeetre l\u2019URL filtr\xe9. Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(296540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);