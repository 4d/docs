"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51498"],{673304:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/cut-named-selection","title":"CUT NAMED SELECTION","description":"CUT NAMED SELECTION ( {laTable ;} nom )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/cut-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/cut-named-selection","permalink":"/docs/fr/20-R8/commands/cut-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cut-named-selection","title":"CUT NAMED SELECTION","slug":"/commands/cut-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY NAMED SELECTION","permalink":"/docs/fr/20-R8/commands/copy-named-selection"},"next":{"title":"USE NAMED SELECTION","permalink":"/docs/fr/20-R8/commands/use-named-selection"}}'),c=s("785893"),r=s("250065");let d={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,c.jsx)(n.em,{children:"laTable"})," ;} ",(0,c.jsx)(n.em,{children:"nom"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param\xe8tre"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"laTable"}),(0,c.jsx)(n.td,{children:"Table"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Table de la s\xe9lection ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nom"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Nom de la s\xe9lection temporaire \xe0 cr\xe9er"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," cr\xe9e la s\xe9lection temporaire ",(0,c.jsx)(n.em,{children:"nom"})," et y place la s\xe9lection courante de ",(0,c.jsx)(n.em,{children:"laTable"}),". A la diff\xe9rence de ",(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),", cette commande ne copie pas la s\xe9lection, mais la d\xe9place."]}),"\n",(0,c.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de cette commande, la s\xe9lection courante de ",(0,c.jsx)(n.em,{children:"laTable"})," dans le process courant est vide. En cons\xe9quence, ",(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ne doit pas \xeatre utilis\xe9e lorsqu'un enregistrement est en cours de modification."]}),"\n",(0,c.jsxs)(n.p,{children:["En termes d'utilisation de la m\xe9moire, ",(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," est plus \xe9conomique que ",(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),". En effet, ",(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"})," utilise 4 octets de m\xe9moire pour chaque enregistrement de la s\xe9lection. Avec ",(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"}),", seule la r\xe9f\xe9rence \xe0 la s\xe9lection est d\xe9plac\xe9e."]}),"\n",(0,c.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsxs)(n.p,{children:["La m\xe9thode suivante vide la s\xe9lection courante de la table ",(0,c.jsx)(n.em,{children:"[Clients]"})," :"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Clients];"AEffacer")\n\xa0CLEAR NAMED SELECTION("AEffacer")\n'})}),"\n",(0,c.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/fr/20-R8/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,c.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,c.jsx)(n.td,{children:"334"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Thread safe"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,c.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let c={},r=t.createContext(c);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);