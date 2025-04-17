"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25265"],{192645:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/last-query-path","title":"Last query path","description":"Last query path ( formatDesc ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/last-query-path.md","sourceDirName":"commands-legacy","slug":"/commands/last-query-path","permalink":"/docs/fr/20-R8/commands/last-query-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-query-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"last-query-path","title":"Last query path","slug":"/commands/last-query-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get query limit","permalink":"/docs/fr/20-R8/commands/get-query-limit"},"next":{"title":"Last query plan","permalink":"/docs/fr/20-R8/commands/last-query-plan"}}'),s=t("785893"),d=t("250065");let i={id:"last-query-path",title:"Last query path",slug:"/commands/last-query-path",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Last query path"})," ( ",(0,s.jsx)(n.em,{children:"formatDesc"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatDesc"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Format de description (Texte ou XML)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Description du chemin de la derni\xe8re recherche ex\xe9cut\xe9e"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Last query path"})," retourne la description interne d\xe9taill\xe9e du chemin r\xe9el de la derni\xe8re recherche effectu\xe9e sur les donn\xe9es. Pour plus d\u2019informations sur les descriptions de recherches, reportez-vous \xe0 la documentation de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Cette description est retourn\xe9e au format Texte ou XML en fonction de la valeur pass\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"formatDesc"}),". Vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,s.jsx)(n.em,{children:"Recherches"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description in text format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description in XML format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande retourne une valeur significative si la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"})," a \xe9t\xe9 ex\xe9cut\xe9e au cours de la session."]}),"\n",(0,s.jsxs)(n.p,{children:["La description du chemin de la derni\xe8re recherche peut \xeatre compar\xe9e \xe0 la description du plan pr\xe9vu de la derni\xe8re recherche (obtenue \xe0 l\u2019aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-plan",children:"Last query plan"}),") \xe0 des fins d\u2019optimisations."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1045"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);