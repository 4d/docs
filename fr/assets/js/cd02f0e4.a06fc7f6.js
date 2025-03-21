"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17500"],{771284:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/hide-menu-bar","title":"HIDE MENU BAR","description":"HIDE MENU BAR","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/hide-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-menu-bar","permalink":"/docs/fr/20-R7/commands/hide-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-menu-bar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"hide-menu-bar","title":"HIDE MENU BAR","slug":"/commands/hide-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE TITLES","permalink":"/docs/fr/20-R7/commands/get-table-titles"},"next":{"title":"Macintosh command down","permalink":"/docs/fr/20-R7/commands/macintosh-command-down"}}'),t=s("785893"),d=s("250065");let i={id:"hide-menu-bar",title:"HIDE MENU BAR",slug:"/commands/hide-menu-bar",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HIDE MENU BAR"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"HIDE MENU BAR"})," rend invisible la barre de menus."]}),"\n",(0,t.jsx)(n.p,{children:"Si la barre de menus \xe9tait d\xe9j\xe0 cach\xe9e, la commande est sans effet."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode suivante passe un enregistrement en plein \xe9cran (sous Mac OS) jusqu'\xe0 ce que l'utilisateur clique sur le bouton de la souris :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0HIDE TOOL BAR\n\xa0CACHER BARRE DE MENUS\n\xa0Open window(-1;-1;1+Screen width;1+Screen height;Modal dialog box)\n\xa0FORM SET INPUT([Tableaux];"Plein \xe9cran 800")\n\xa0DISPLAY RECORD([Tableaux])\n\xa0Repeat\n\xa0\xa0\xa0\xa0MOUSE POSITION($vlX;$vlY;$vlBouton)\n\xa0Until($vlBouton#0)\n\xa0CLOSE WINDOW\n\xa0SHOW MENU BAR\n\xa0SHOW TOOL BAR\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Sous Windows, la taille de la fen\xeatre sera limit\xe9e par celle de la fen\xeatre de l'application."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/hide-tool-bar",children:"HIDE TOOL BAR"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/show-menu-bar",children:"SHOW MENU BAR"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/show-tool-bar",children:"SHOW TOOL BAR"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"432"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);