"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11297"],{594826:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/goto-xy","title":"GOTO XY","description":"GOTO XY ( x ; y )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-xy.md","sourceDirName":"commands-legacy","slug":"/commands/goto-xy","permalink":"/docs/fr/commands/goto-xy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-xy.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-xy","title":"GOTO XY","slug":"/commands/goto-xy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISPLAY NOTIFICATION","permalink":"/docs/fr/commands/display-notification"},"next":{"title":"MESSAGE","permalink":"/docs/fr/commands/message"}}'),t=s("785893"),d=s("250065");let i={id:"goto-xy",title:"GOTO XY",slug:"/commands/goto-xy",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GOTO XY"})," ( ",(0,t.jsx)(n.em,{children:"x"})," ; ",(0,t.jsx)(n.em,{children:"y"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e x (horizontale) du curseur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"y"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e y (verticale) du curseur"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"GOTO XY"})," est destin\xe9e \xe0 \xeatre utilis\xe9e conjointement avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/message",children:"MESSAGE"})," lorsque vous affichez des messages dans une fen\xeatre ouverte par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-window",children:"Open window"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"GOTO XY"})," d\xe9termine l'emplacement du curseur d'insertion des caract\xe8res (ce curseur est invivible) : elle d\xe9finit les coordonn\xe9es auxquelles le prochain message s'affichera \xe0 l'int\xe9rieur de la fen\xeatre."]}),"\n",(0,t.jsxs)(n.p,{children:["L'angle sup\xe9rieur gauche de la fen\xeatre repr\xe9sente les coordonn\xe9es 0,0. Le curseur est automatiquement positionn\xe9 \xe0 0,0 lorsqu'une fen\xeatre est cr\xe9\xe9e ou apr\xe8s l'ex\xe9cution de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/erase-window",children:"ERASE WINDOW"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s que ",(0,t.jsx)(n.strong,{children:"GOTO XY"})," ait d\xe9fini l'emplacement du curseur, la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/message",children:"MESSAGE"})," peut \xeatre appel\xe9e pour afficher des caract\xe8res dans la fen\xeatre."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/message",children:"MESSAGE"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la fonction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/milliseconds",children:"Milliseconds"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple ci-dessous :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Open window(50;50;300;300;5;\"Ce n'est qu'un test\")\n\xa0For($vlColonne;0;9)\n\xa0\xa0\xa0\xa0GOTO XY($vlColonne;0)\n\xa0\xa0\xa0\xa0MESSAGE(String($vlColonne))\n\xa0End for\n\xa0For($vlLigne;0;9)\n\xa0\xa0\xa0\xa0GOTO XY(0;$vlLigne)\n\xa0\xa0\xa0\xa0MESSAGE(String($vlLigne))\n\xa0End for\n\xa0$vhHeureD\xe9but:=Current time\n\xa0Repeat\n\xa0Until((Current time-$vhHeureD\xe9but)>?00:00:30?)\n"})}),"\n",(0,t.jsx)(n.p,{children:"... affiche la fen\xeatre suivante (sous Mac OS) pendant 30 secondes :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(108742).Z+"",width:"266",height:"281"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/message",children:"MESSAGE"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"161"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},108742:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);