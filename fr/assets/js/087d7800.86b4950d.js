"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38557"],{511625:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/wa-get-last-filtered-url","title":"WA Get last filtered URL","description":"WA Get last filtered URL ( { ;} objet* ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-last-filtered-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-filtered-url","permalink":"/docs/fr/20-R7/commands/wa-get-last-filtered-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-filtered-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-last-filtered-url","title":"WA Get last filtered URL","slug":"/commands/wa-get-last-filtered-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET EXTERNAL LINKS FILTERS","permalink":"/docs/fr/20-R7/commands/wa-get-external-links-filters"},"next":{"title":"WA GET LAST URL ERROR","permalink":"/docs/fr/20-R7/commands/wa-get-last-url-error"}}'),s=t("785893"),i=t("250065");let l={id:"wa-get-last-filtered-url",title:"WA Get last filtered URL",slug:"/commands/wa-get-last-filtered-url",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA Get last filtered URL"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Dernier URL filtr\xe9"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WA Get last filtered URL"})," retourne le dernier URL ayant \xe9t\xe9 filtr\xe9 dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,s.jsx)(n.em,{children:"*"})," et ",(0,s.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"L\u2019URL peut avoir \xe9t\xe9 filtr\xe9 pour l\u2019une des raisons suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["l\u2019URL est interdit \xe0 cause d\u2019un filtre (commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"}),"),"]}),"\n",(0,s.jsxs)(n.li,{children:["le lien est ouvert dans le navigateur par d\xe9faut (commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"}),"),"]}),"\n",(0,s.jsx)(n.li,{children:"l\u2019URL tentait d\u2019ouvrir une fen\xeatre pop up."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Il est judicieux d\u2019appeler cette commande dans le contexte des \xe9v\xe9nements formulaire On URL Filtering, On Open External Link et On Window Opening Denied afin de conna\xeetre l\u2019URL filtr\xe9. Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1035"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);