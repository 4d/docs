"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32471"],{128132:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/restore-info","title":"RESTORE INFO","description":"RESTORE INFO ( s\xe9lecteur ; info1 ; info2 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/restore-info.md","sourceDirName":"commands-legacy","slug":"/commands/restore-info","permalink":"/docs/fr/commands/restore-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"restore-info","title":"RESTORE INFO","slug":"/commands/restore-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/fr/commands/restore"},"next":{"title":"SELECT LOG FILE","permalink":"/docs/fr/commands/select-log-file"}}'),r=t("785893"),i=t("250065");let d={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,r.jsx)(n.em,{children:"info1"})," ; ",(0,r.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"s\xe9lecteur"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type d\u2019information \xe0 r\xe9cup\xe9rer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info1"}),(0,r.jsx)(n.td,{children:"Integer, Date"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur 1 du s\xe9lecteur"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info2"}),(0,r.jsx)(n.td,{children:"Text, Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur 2 du s\xe9lecteur"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"RESTORE INFO"})," permet de r\xe9cup\xe9rer des informations relatives \xe0 la derni\xe8re restitution automatique de la base."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," le type d\u2019information \xe0 r\xe9cup\xe9rer. Vous pouvez utiliser une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,r.jsx)(n.em,{children:"Sauvegarde et restitution"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore date"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore status"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type et le contenu des param\xe8tres ",(0,r.jsx)(n.em,{children:"info1"})," et ",(0,r.jsx)(n.em,{children:"info2"})," d\xe9pendent de la valeur de ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," = 0 (Last Restore Date), ",(0,r.jsx)(n.em,{children:"info1"})," retourne la date et ",(0,r.jsx)(n.em,{children:"info2"})," l\u2019heure de la derni\xe8re restitution automatique de la base."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," = 2 (Last Restore Status), ",(0,r.jsx)(n.em,{children:"info1"})," retourne le num\xe9ro et ",(0,r.jsx)(n.em,{children:"info2"})," le texte du statut de la derni\xe8re restitution automatique de la base."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande ne tient pas compte des restitutions manuelles de la base."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/restore",children:"RESTORE"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"889"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);