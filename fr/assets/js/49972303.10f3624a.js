"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38248"],{641049:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-about","title":"SET ABOUT","description":"SET ABOUT ( libell\xe9El\xe9ment ; m\xe9thode )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-about.md","sourceDirName":"commands-legacy","slug":"/commands/set-about","permalink":"/docs/fr/20-R7/commands/set-about","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-about.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-about","title":"SET ABOUT","slug":"/commands/set-about","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDRAW","permalink":"/docs/fr/20-R7/commands/redraw"},"next":{"title":"SET APPLICATION COLOR SCHEME","permalink":"/docs/fr/20-R7/commands/set-application-color-scheme"}}'),r=s("785893"),d=s("250065");let o={id:"set-about",title:"SET ABOUT",slug:"/commands/set-about",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET ABOUT"})," ( ",(0,r.jsx)(n.em,{children:"libell\xe9El\xe9ment"})," ; ",(0,r.jsx)(n.em,{children:"m\xe9thode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"libell\xe9El\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nouvelle ligne de menu A propos..."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"m\xe9thode"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la m\xe9thode \xe0 ex\xe9cuter lorsque la ligne est choisie"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET ABOUT"})," remplace la ligne de menu ",(0,r.jsx)(n.strong,{children:"A propos de 4D..."})," du menu ",(0,r.jsx)(n.strong,{children:"Aide"})," (sous Windows) ou du menu ",(0,r.jsx)(n.strong,{children:"application"})," (Mac OS X) par ",(0,r.jsx)(n.em,{children:"libell\xe9Ligne"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s l'appel de cette commande, lorsqu'un utilisateur s\xe9lectionne la ligne de menu en mode D\xe9veloppement ou Application, la m\xe9thode ",(0,r.jsx)(n.em,{children:"m\xe9thode"})," est appel\xe9e. Typiquement, cette m\xe9thode affiche une bo\xeete de dialogue qui fournit des informations sur les versions de votre application."]}),"\n",(0,r.jsx)(n.p,{children:"Cette commande est utilisable avec 4D (tous modes), 4D Desktop et 4D Server. Son ex\xe9cution sur le poste serveur provoque la cr\xe9ation d\u2019un nouveau process."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"}),' Sous Windows, cette commande modifie la ligne "A propos de 4D" du menu ',(0,r.jsx)(n.strong,{children:"Aide"})," cr\xe9\xe9 par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-help-menu",children:"SET HELP MENU"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant remplace la commande de menu ",(0,r.jsx)(n.strong,{children:"A propos"})," par la commande de menu ",(0,r.jsx)(n.strong,{children:"A propos du programmateur"}),". La m\xe9thode A PROPOS affiche une fen\xeatre d'A propos personnalis\xe9e :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET ABOUT("A propos du programmateur";"A PROPOS")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant r\xe9initialise la commande de menu d'A propos de 4D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET ABOUT("A propos de 4D\xae";"")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-help-menu",children:"SET HELP MENU"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"316"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},d=t.createContext(r);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);