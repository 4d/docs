"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60083"],{258713:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/hide-tool-bar","title":"HIDE TOOL BAR","description":"HIDE TOOL BAR","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/hide-tool-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-tool-bar","permalink":"/docs/fr/commands/hide-tool-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-tool-bar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"hide-tool-bar","title":"HIDE TOOL BAR","slug":"/commands/hide-tool-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get window title","permalink":"/docs/fr/commands/get-window-title"},"next":{"title":"HIDE WINDOW","permalink":"/docs/fr/commands/hide-window"}}'),s=r("785893"),o=r("250065");let d={id:"hide-tool-bar",title:"HIDE TOOL BAR",slug:"/commands/hide-tool-bar",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"HIDE TOOL BAR"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"HIDE TOOL BAR"})," permet de g\xe9rer l'affichage des barres d'outils personnalis\xe9es cr\xe9\xe9es par la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/open-form-window",children:"Open form window"})," pour le process courant."]}),"\n",(0,s.jsxs)(n.p,{children:["Si une fen\xeatre barre d'outils a \xe9t\xe9 cr\xe9\xe9e par la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/open-form-window",children:"Open form window"})," avec l'option Toolbar form window, la commande masque la fen\xeatre. Si la fen\xeatre barre d'outils \xe9tait d\xe9j\xe0 masqu\xe9e ou si aucune fen\xeatre de ce type n'a \xe9t\xe9 cr\xe9\xe9e, la commande ne fait rien"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Sous OS X, vous avez d\xe9fini une barre d'outils personnalis\xe9e ainsi qu'une fen\xeatre standard ayant l'option Has full screen mode Mac. Lorsque la fen\xeatre standard est pass\xe9e en plein \xe9cran par un utilisateur alors que la barre d'outils est affich\xe9e, vous ne voulez pas que la barre d'outils empi\xe8te sur la fen\xeatre plein \xe9cran."}),"\n",(0,s.jsxs)(n.p,{children:["Pour cela, dans l'\xe9v\xe9nement On Resize du formulaire de la fen\xeatre standard, il suffit de d\xe9tecter le passage en mode plein \xe9cran et d'appeler ",(0,s.jsx)(n.strong,{children:"HIDE TOOL BAR"})," dans ce cas :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Resize)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($left;$top;$right;$bottom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Screen height=($bottom-$top))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIDE TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/show-tool-bar",children:"SHOW TOOL BAR"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"434"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);