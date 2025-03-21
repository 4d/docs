"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54141"],{79324:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/graph-settings","title":"GRAPH SETTINGS","description":"GRAPH SETTINGS ( graphImage ; xmin ; xmax ; ymin ; ymax ; xprop ; grilleX ; grilleY ; titre {; titre2 ; ... ; titreN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/graph-settings.md","sourceDirName":"commands-legacy","slug":"/commands/graph-settings","permalink":"/docs/fr/commands/graph-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgraph-settings.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"graph-settings","title":"GRAPH SETTINGS","slug":"/commands/graph-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GRAPH","permalink":"/docs/fr/commands/graph"},"next":{"title":"HTTP","permalink":"/docs/fr/commands/theme/HTTP"}}'),t=r("785893"),i=r("250065");let l={id:"graph-settings",title:"GRAPH SETTINGS",slug:"/commands/graph-settings",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GRAPH SETTINGS"})," ( ",(0,t.jsx)(n.em,{children:"graphImage"})," ; ",(0,t.jsx)(n.em,{children:"xmin"})," ; ",(0,t.jsx)(n.em,{children:"xmax"})," ; ",(0,t.jsx)(n.em,{children:"ymin"})," ; ",(0,t.jsx)(n.em,{children:"ymax"})," ; ",(0,t.jsx)(n.em,{children:"xprop"})," ; ",(0,t.jsx)(n.em,{children:"grilleX"})," ; ",(0,t.jsx)(n.em,{children:"grilleY"})," ; ",(0,t.jsx)(n.em,{children:"titre"})," {; ",(0,t.jsx)(n.em,{children:"titre2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"titreN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"graphImage"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Variable image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xmin"}),(0,t.jsx)(n.td,{children:"Integer, Date, Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur minimale de l'\xe9chelle des X pour graphe proportionnel (lignes ou points)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xmax"}),(0,t.jsx)(n.td,{children:"Integer, Date, Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur maximale de l'\xe9chelle des X pour graphe proportionnel (lignes ou points)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ymin"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur minimale de l'\xe9chelle des Y"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ymax"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur maximale de l'\xe9chelle des Y"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xprop"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"VRAI pour l'\xe9chelle des X proportionnelle ; FAUX pour l'\xe9chelle des X normale (lignes ou points)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"grilleX"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"VRAI pour la grille sur l'axe des X ; FAUX pour pas de grille sur l'axe des X (seulement si xprop est VRAI)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"grilleY"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"VRAI pour la grille sur l'axe des Y; FAUX pour pas de grille sur l'axe des Y"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"titre"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Titre(s) pour les titre(s) des s\xe9rie(s)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"GRAPH SETTINGS"})," permet de param\xe9trer les \xe9chelles et les grilles d'un graphe plac\xe9 dans un formulaire. Le graphe doit d\xe9j\xe0 avoir \xe9t\xe9 d\xe9fini \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/graph",children:"GRAPH"}),". ",(0,t.jsx)(n.strong,{children:"GRAPH SETTINGS"})," ne fait rien s'il s'agit d'un graphe de type secteurs. Cette commande doit imp\xe9rativement \xeatre appel\xe9e dans le m\xeame process que le formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous ne devez pas appeler cette commande si le graphe a \xe9t\xe9 g\xe9n\xe9r\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/graph",children:"GRAPH"})," avec le param\xe8tre ",(0,t.jsx)(n.em,{children:"graphParams"})," de type ",(0,t.jsx)(n.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"Objet"}),". Reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/graph",children:"GRAPH"})," pour plus d'informations."]}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres ",(0,t.jsx)(n.em,{children:"xmin"}),", ",(0,t.jsx)(n.em,{children:"xmax"}),", ",(0,t.jsx)(n.em,{children:"ymin"})," et ",(0,t.jsx)(n.em,{children:"ymax"})," fixent les valeurs minimales et maximales pour les axes des X ou Y. Si la valeur des deux param\xe8tres correspondants au m\xeame axe est nulle (0, ?00:00:00? ou !00/00/00! selon le type de donn\xe9es), les valeurs de graphe par d\xe9faut seront utilis\xe9es. Les param\xe8tres ",(0,t.jsx)(n.em,{children:"xmin"})," et ",(0,t.jsx)(n.em,{children:"xmax"})," ne sont pris en compte que pour les graphes proportionnels (",(0,t.jsx)(n.em,{children:"xprop"})," est ",(0,t.jsx)(n.strong,{children:"Vrai"}),").",(0,t.jsx)(n.br,{}),"\nLe param\xe8tre ",(0,t.jsx)(n.em,{children:"xprop"})," fixe l'axe des X comme proportionnel (sont concern\xe9s par cette option les graphes de type 4, 5 et 6). Lorsque ce param\xe8tre est Vrai, chaque point sera plac\xe9 sur l'axe des X par rapport aux valeurs des points si elles sont de type num\xe9rique, heure ou date."]}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres ",(0,t.jsx)(n.em,{children:"grilleX"})," et ",(0,t.jsx)(n.em,{children:"grilleY"})," montrent ou cachent les grilles. Une grille pour l'axe des X sera affich\xe9e s'il s'agit d'un graphe en points ou en lignes proportionnel."]}),"\n",(0,t.jsxs)(n.p,{children:["Le(s) param\xe8tre(s) ",(0,t.jsx)(n.em,{children:"titre"})," sp\xe9cifient les titres des l\xe9gendes."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Reportez-vous \xe0 l'exemple de la commande GRAPHE."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/graph",children:"GRAPH"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"298"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);