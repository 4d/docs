"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69179"],{928901:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/on-system-event-database-method","title":"On System Event database method","description":"$1 -> On System Event database method","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-system-event-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-system-event-database-method","permalink":"/docs/fr/commands/on-system-event-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-system-event-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-system-event-database-method","title":"On System Event database method","slug":"/commands/on-system-event-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Startup database method","permalink":"/docs/fr/commands/on-startup-database-method"},"next":{"title":"On Web Authentication database method","permalink":"/docs/fr/commands/on-web-authentication-database-method"}}'),a=t("785893"),d=t("250065");let r={id:"on-system-event-database-method",title:"On System Event database method",slug:"/commands/on-system-event-database-method",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:4}];function c(e){let n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"$1 -> On System Event database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Code d'\xe9v\xe9nement"})]})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La ",(0,a.jsx)(n.strong,{children:"On System Event database method"})," est appel\xe9e \xe0 chaque fois qu\u2019un \xe9v\xe9nement syst\xe8me se produit. Tous les environnements 4D sont concern\xe9s : 4D (tous modes), 4D Server ainsi que les applications 4D compil\xe9es et fusionn\xe9es avec 4D Volume Desktop."]}),"\n",(0,a.jsxs)(n.p,{children:["Pour traiter un \xe9v\xe9nement, vous devez tester la valeur du param\xe8tre $1 \xe0 l\u2019int\xe9rieur de la m\xe9thode, et la comparer \xe0 l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,a.jsx)(n.em,{children:"Ev\xe9nements de la base"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Valeur"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"On application background move"}),(0,a.jsx)(n.td,{children:"Entier long"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"L\u2019application 4D passe \xe0 l\u2019arri\xe8re plan"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"On application foreground move"}),(0,a.jsx)(n.td,{children:"Entier long"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"L\u2019application 4D passe au premier plan"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Ces \xe9v\xe9nements sont g\xe9n\xe9r\xe9s lorsque l\u2019application 4D change de plan, quelle que soit l\u2019action utilisateur \xe0 l\u2019origine du changement :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"clic dans la fen\xeatre de l\u2019application ou d\u2019une autre application,"}),"\n",(0,a.jsxs)(n.li,{children:["s\xe9lection via le raccourci clavier ",(0,a.jsx)(n.strong,{children:"Alt+Tab"})," (Windows) ou ",(0,a.jsx)(n.strong,{children:"Commande+Tab"})," (Mac OS),"]}),"\n",(0,a.jsxs)(n.li,{children:["s\xe9lection de la commande ",(0,a.jsx)(n.strong,{children:"Masquer"})," dans le dock (Mac OS),"]}),"\n",(0,a.jsx)(n.li,{children:"clic sur l\u2019ic\xf4ne de l\u2019application dans le dock ou la barre des t\xe2ches,"}),"\n",(0,a.jsx)(n.li,{children:"clic sur le bouton de r\xe9duction de la fen\xeatre principale (Windows)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Vous devez imp\xe9rativement d\xe9clarer le param\xe8tre $1 (entier long) dans la m\xe9thode base. La structure du code de la m\xe9thode base sera donc :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode base Sur \xe9v\xe9nement syst\xe8me\n\xa0\n\xa0var $1 : Integer\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1=On application background move)\n\xa0\xa0//Faire quelque chose\n\xa0\xa0\xa0\xa0:($1=On application foreground move)\n\xa0\xa0//Faire autre chose\n\xa0End case\n"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(667294);let a={},d=s.createContext(a);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);