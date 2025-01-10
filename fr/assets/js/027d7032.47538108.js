"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33339"],{220076:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/read-write","title":"READ WRITE","description":"READ WRITE {( laTable | * )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-write.md","sourceDirName":"commands-legacy","slug":"/commands/read-write","permalink":"/docs/fr/commands/read-write","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-write.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-write","title":"READ WRITE","slug":"/commands/read-write","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Read only state","permalink":"/docs/fr/commands/read-only-state"},"next":{"title":"UNLOAD RECORD","permalink":"/docs/fr/commands/unload-record"}}'),s=r("785893"),i=r("250065");let a={id:"read-write",title:"READ WRITE",slug:"/commands/read-write",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"READ WRITE"})," {( laTable | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"laTable | *"}),(0,s.jsx)(t.td,{children:"Table, Op\xe9rateur"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table \xe0 d\xe9finir en mode lecture/\xe9criture ou * pour toutes les tables ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"READ WRITE"})," place ",(0,s.jsx)(t.em,{children:"laTable"})," en mode lecture/\xe9criture pour le process dans lequel la commande a \xe9t\xe9 appel\xe9e. Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(t.em,{children:"*"}),", toutes les tables sont plac\xe9es en mode lecture/\xe9criture."]}),"\n",(0,s.jsxs)(t.p,{children:["Apr\xe8s un appel \xe0 ",(0,s.jsx)(t.strong,{children:"READ WRITE"}),", lorsqu'un enregistrement est charg\xe9, il n'est pas verrouill\xe9 \u2014 sauf si un autre utilisateur l'a d\xe9j\xe0 charg\xe9. Cette commande ne modifie pas le statut des enregistrements d\xe9j\xe0 charg\xe9s, seuls les enregistrements charg\xe9s par la suite sont affect\xe9s."]}),"\n",(0,s.jsx)(t.p,{children:"Par d\xe9faut, toutes les tables sont en mode lecture/\xe9criture."}),"\n",(0,s.jsxs)(t.p,{children:["Utilisez ",(0,s.jsx)(t.strong,{children:"READ WRITE"})," lorsque vous devez modifier un enregistrement et sauvegarder les modifications. Vous pouvez \xe9galement appeler cette commande lorsque vous voulez qu'un enregistrement soit verrouill\xe9 pour les autres utilisateurs, m\xeame si vous ne souhaitez pas effectuer de modifications. Placer une table en mode lecture/\xe9criture vous permet d'emp\xeacher les autres utilisateurs d'effectuer des modifications sur cette table. Cependant, ils peuvent continuer \xe0 cr\xe9er des nouveaux enregistrements."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Cette commande n'est pas r\xe9troactive. Les privil\xe8ges de lecture/\xe9criture pour un enregistrement sont d\xe9finis par ceux de la table au moment o\xf9 l'enregistrement est charg\xe9. Pour qu'un enregistrement soit charg\xe9 en mode lecture/\xe9criture alors que la table est en mode lecture seulement, vous devez placer la table en mode lecture/\xe9criture avant que l'enregistrement soit charg\xe9."]}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/read-only-state",children:"Read only state"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Verrouillage d'enregistrements"})]}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"146"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var n=r(667294);let s={},i=n.createContext(s);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);