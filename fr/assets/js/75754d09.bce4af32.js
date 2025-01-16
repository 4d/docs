"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96805"],{802047:function(e,s,t){t.r(s),t.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-table-titles","title":"GET TABLE TITLES","description":"GET TABLE TITLES ( titresTables ; numTables )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-titles","permalink":"/docs/fr/commands/get-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-titles.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-table-titles","title":"GET TABLE TITLES","slug":"/commands/get-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD TITLES","permalink":"/docs/fr/commands/get-field-titles"},"next":{"title":"HIDE MENU BAR","permalink":"/docs/fr/commands/hide-menu-bar"}}'),r=t("785893"),l=t("250065");let i={id:"get-table-titles",title:"GET TABLE TITLES",slug:"/commands/get-table-titles",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET TABLE TITLES"})," ( ",(0,r.jsx)(s.em,{children:"titresTables"})," ; ",(0,r.jsx)(s.em,{children:"numTables"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"titresTables"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Noms courants des tables"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numTables"}),(0,r.jsx)(s.td,{children:"Integer array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Num\xe9ros des tables"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"GET TABLE TITLES"})," remplit les tableaux ",(0,r.jsx)(s.em,{children:"titresTables"})," et ",(0,r.jsx)(s.em,{children:"numTables"})," avec les noms et les num\xe9ros des tables de la base d\xe9finis dans la fen\xeatre de Structure ou via la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"SET TABLE TITLES"}),". Le contenu des deux tableaux est synchronis\xe9."]}),"\n",(0,r.jsxs)(s.p,{children:["Si la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"SET TABLE TITLES"})," a \xe9t\xe9 appel\xe9e lors de la session, ",(0,r.jsx)(s.strong,{children:"GET TABLE TITLES"})," retourne uniquement les noms \u201Cmodifi\xe9s\u201D et les num\xe9ros des tables ayant \xe9t\xe9 d\xe9finies via cette commande.",(0,r.jsx)(s.br,{}),"\nSinon, ",(0,r.jsx)(s.strong,{children:"GET TABLE TITLES"})," retourne le nom d\xe9fini dans la fen\xeatre de Structure de toutes les tables de la base.",(0,r.jsx)(s.br,{}),"\nDans les deux cas, la commande ne retourne pas les tables d\xe9clar\xe9es invisibles."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"SET TABLE TITLES"})]}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"803"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return d},a:function(){return i}});var n=t(667294);let r={},l=n.createContext(r);function i(e){let s=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);