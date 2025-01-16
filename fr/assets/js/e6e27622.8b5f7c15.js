"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86167"],{915942:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/wa-set-url-filters","title":"WA SET URL FILTERS","description":"WA SET URL FILTERS ( { ;} objet ; tabFiltres ; tabAutorisRefus* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-set-url-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-url-filters","permalink":"/docs/fr/20-R7/commands/wa-set-url-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-url-filters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-set-url-filters","title":"WA SET URL FILTERS","slug":"/commands/wa-set-url-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PREFERENCE","permalink":"/docs/fr/20-R7/commands/wa-set-preference"},"next":{"title":"WA STOP LOADING URL","permalink":"/docs/fr/20-R7/commands/wa-stop-loading-url"}}'),l=s("785893"),t=s("250065");let i={id:"wa-set-url-filters",title:"WA SET URL FILTERS",slug:"/commands/wa-set-url-filters",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WA SET URL FILTERS"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"tabFiltres"})," ; ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tabFiltres"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Tableau de filtres"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tabAutorisRefus"}),(0,l.jsx)(n.td,{children:"Boolean array"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Tableau autoriser-refuser"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"WA SET URL FILTERS"})," permet de mettre en place un ou plusieurs filtre(s) pour la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"*"})," et ",(0,l.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Avant le chargement de toute page, 4D consulte la liste des filtres afin de v\xe9rifier si l\u2019URL cible est autoris\xe9 ou non. L\u2019\xe9valuation de l\u2019URL est bas\xe9e sur le contenu des tableaux ",(0,l.jsx)(n.em,{children:"tabFiltres"})," et ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"})," s'ils ont \xe9t\xe9 d\xe9finis."]}),"\n",(0,l.jsxs)(n.p,{children:["Si l\u2019URL demand\xe9 n\u2019est pas autoris\xe9, il n\u2019est pas charg\xe9 et l\u2019\xe9v\xe9nement formulaire On URL Filtering est g\xe9n\xe9r\xe9 (cf. commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"}),")."]}),"\n",(0,l.jsxs)(n.p,{children:["Les tableaux ",(0,l.jsx)(n.em,{children:"tabFiltres"})," et ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"})," doivent \xeatre synchronis\xe9s."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Chaque ligne du tableau ",(0,l.jsx)(n.em,{children:"tabFiltres"})," doit contenir un URL devant \xeatre filtr\xe9. Vous pouvez utiliser le * comme joker de remplacement pour un ou plusieurs caract\xe8re(s)."]}),"\n",(0,l.jsxs)(n.li,{children:["Chaque ligne correspondante dans le tableau ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"})," doit contenur un bool\xe9en indiquant si l\u2019URL doit \xeatre autoris\xe9 (Vrai) ou refus\xe9 (Faux)."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"En cas de contradiction au niveau des param\xe9trages (autorisation et refus d\u2019un m\xeame URL), le param\xe9trage pris en compte est le dernier."}),"\n",(0,l.jsxs)(n.p,{children:['Pour d\xe9sactiver le filtrage des URLs, appelez la commande en lui passant des tableaux vides ou en passant respectivement les valeurs "',(0,l.jsx)(n.em,{children:"*"}),'" et Vrai dans la derni\xe8re ligne des tableaux ',(0,l.jsx)(n.em,{children:"tabFiltres"})," et ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Une fois la commande ex\xe9cut\xe9e, les filtres deviennent une propri\xe9t\xe9 de la zone Web. Si les tableaux ",(0,l.jsx)(n.em,{children:"tabFiltres"})," et ",(0,l.jsx)(n.em,{children:"tabAutorisRefus"})," sont supprim\xe9s ou r\xe9initialis\xe9s, les filtres restent actifs tant que la commande n\u2019a pas \xe9t\xe9 ex\xe9cut\xe9e \xe0 nouveau. Pour conna\xeetre les filtres actifs pour une zone, vous devez utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Important :"})," Le filtrage des URLs effectu\xe9 par cette commande s\u2019applique \xe0 toute demande de changement de l'URL principal de la page, qu'elle provienne de l'utilisateur, du code javascript ou du code 4D, \xe0 l'exception de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-open-url",children:"WA OPEN URL"}),' et des URLs commen\xe7ant par "javascript:".']}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez interdire l\u2019acc\xe8s \xe0 tous les sites web .org, .net et .fr :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*.org")\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0APPEND TO ARRAY($filters;"*.net")\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0APPEND TO ARRAY($filters;"*.fr")\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez interdire l\u2019acc\xe8s \xe0 tous les sites web sauf les sites russes (.ru) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*")\xa0//Tout s\xe9lectionner\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Tout interdire\n\xa0APPEND TO ARRAY($filters;"www.*.ru")\xa0//S\xe9lectionner *.ru\n\xa0APPEND TO ARRAY($AllowDeny;True)\xa0//Autoriser\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez donner acc\xe8s aux sites Web 4D uniquement (.com, .fr, .es, etc.) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*")\xa0//Tout s\xe9lectionner\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Tout interdire\n\xa0APPEND TO ARRAY($filters;"www.4D.*")\xa0//S\xe9lectionner 4d.fr, 4d.com...\n\xa0APPEND TO ARRAY($AllowDeny;True)\xa0//Autoriser\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez autoriser l\u2019acc\xe8s local \xe0 la documentation uniquement (situ\xe9e dans le dossier C://doc) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*")\xa0//Tout s\xe9lectionner\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Tout interdire\n\xa0APPEND TO ARRAY($filters;"file://C:/doc/*")\xa0//S\xe9lectionner le chemin file:// autoris\xe9\n\xa0APPEND TO ARRAY($AllowDeny;True)->Autoriser\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez autoriser tous les sites sauf un, par exemple celui d\u2019Elcaro :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*")\n\xa0APPEND TO ARRAY($AllowDeny;True)\xa0//Tout autoriser\n\xa0APPEND TO ARRAY($filters;"*elcaro*")\xa0//Interdire tout ce qui contient elcaro\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez interdire des adresses IP sp\xe9cifiques :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*")\xa0//Tout s\xe9lectionner\n\xa0APPEND TO ARRAY($AllowDeny;True)\xa0//Tout autoriser\n\xa0APPEND TO ARRAY($filters;"86.83.*")\xa0//S\xe9lectionner les IP d\xe9butant par 86.83.\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Interdire\n\xa0APPEND TO ARRAY($filters;"86.1*")\xa0//S\xe9lectionner les IP d\xe9butant par 86.1 (86.10, 86.135 etc.)\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Interdire\n\xa0\xa0//A noter que l\u2019adresse IP d\u2019un domaine peut varier\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"1030"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let l={},t=r.createContext(l);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);