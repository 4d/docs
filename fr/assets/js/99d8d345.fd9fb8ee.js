"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20759"],{769430:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/read-only-state","title":"Read only state","description":"Read only state {( laTable )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-only-state.md","sourceDirName":"commands-legacy","slug":"/commands/read-only-state","permalink":"/docs/fr/commands/read-only-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only-state.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-only-state","title":"Read only state","slug":"/commands/read-only-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ ONLY","permalink":"/docs/fr/commands/read-only"},"next":{"title":"READ WRITE","permalink":"/docs/fr/commands/read-write"}}'),s=n("785893"),l=n("250065");let a={id:"read-only-state",title:"Read only state",slug:"/commands/read-only-state",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Read only state"})," {( ",(0,s.jsx)(t.em,{children:"laTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"laTable"}),(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table pour laquelle il faut tester l'\xe9tat ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Acc\xe8s \xe0 la table est lecture seulement (Vrai) ou Acc\xe8s \xe0 la table est lecture-\xe9criture (Faux)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La fonction ",(0,s.jsx)(t.strong,{children:"Read only state"})," est utilis\xe9 pour tester si ",(0,s.jsx)(t.em,{children:"laTable"})," est en mode lecture seulement dans le process o\xf9 la fonction est appel\xe9e.retourne Vrai si ",(0,s.jsx)(t.em,{children:"laTable"})," est en lecture seulement, et Faux si ",(0,s.jsx)(t.em,{children:"laTable"})," est en lecture-\xe9criture."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"L'exemple suivant teste le statut de la table [Factures]. Si elle est en lecture seulement, le mode lecture-\xe9criture lui est appliqu\xe9 et l'enregistrement courant est recharg\xe9."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0If(Read only state([Factures]))\n\xa0\xa0\xa0\xa0READ WRITE([Factures])\n\xa0\xa0\xa0\xa0LOAD RECORD([Factures])\n\xa0End if\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," L'enregistrement courant est recharg\xe9 pour permettre \xe0 l'utilisateur de le modifier. En effet, un enregistrement pr\xe9c\xe9demment charg\xe9 en mode lecture seulement reste verrouill\xe9 jusqu'\xe0 ce qu'il soit recharg\xe9 en mode lecture-\xe9criture."]}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Verrouillage d'enregistrements"})]}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"362"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var r=n(667294);let s={},l=r.createContext(s);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);