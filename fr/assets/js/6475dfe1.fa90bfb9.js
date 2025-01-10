"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53302"],{230705:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-adjusted-blobs-cache-priority","title":"Get adjusted blobs cache priority","description":"Get adjusted blobs cache priority ( laTable ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-adjusted-blobs-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/get-adjusted-blobs-cache-priority","permalink":"/docs/fr/commands/get-adjusted-blobs-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-adjusted-blobs-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-adjusted-blobs-cache-priority","title":"Get adjusted blobs cache priority","slug":"/commands/get-adjusted-blobs-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FLUSH CACHE","permalink":"/docs/fr/commands/flush-cache"},"next":{"title":"Get adjusted index cache priority","permalink":"/docs/fr/commands/get-adjusted-index-cache-priority"}}'),r=n("785893"),d=n("250065");let i={id:"get-adjusted-blobs-cache-priority",title:"Get adjusted blobs cache priority",slug:"/commands/get-adjusted-blobs-cache-priority",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Get adjusted blobs cache priority"})," ( ",(0,r.jsx)(t.em,{children:"laTable"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"laTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:'Table pour laquelle conna\xeetre la valeur de priorit\xe9 des "blobs"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:'Valeur de priorit\xe9 courante pour les champs "blobs"'})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"Get adjusted blobs cache priority"}),' retourrne la valeur ajust\xe9e de priorit\xe9 de cache appliqu\xe9e par le gestionnaire de cache aux donn\xe9es de type "blobs" de ',(0,r.jsx)(t.em,{children:"laTable"}),". Cette commande est destin\xe9e uniquement \xe0 la phase de d\xe9bogage et de mise au point de l'application."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note :"})," Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas \xeatre utilis\xe9e avec 4D en mode distant."]}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:"Gestion des priorit\xe9s dans le cache de la base"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"})]}),"\n",(0,r.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1428"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var s=n(667294);let r={},d=s.createContext(r);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);