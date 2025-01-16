"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37190"],{322328:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/wa-set-external-links-filters","title":"WA SET EXTERNAL LINKS FILTERS","description":"WA SET EXTERNAL LINKS FILTERS ( { ;} objet ; tabFiltres ; tabAutorisRefus* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-set-external-links-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-external-links-filters","permalink":"/docs/fr/20-R7/commands/wa-set-external-links-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-external-links-filters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-set-external-links-filters","title":"WA SET EXTERNAL LINKS FILTERS","slug":"/commands/wa-set-external-links-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Run offscreen area","permalink":"/docs/fr/20-R7/commands/wa-run-offscreen-area"},"next":{"title":"WA SET PAGE CONTENT","permalink":"/docs/fr/20-R7/commands/wa-set-page-content"}}'),t=s("785893"),l=s("250065");let i={id:"wa-set-external-links-filters",title:"WA SET EXTERNAL LINKS FILTERS",slug:"/commands/wa-set-external-links-filters",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"tabFiltres"})," ; ",(0,t.jsx)(n.em,{children:"tabAutorisRefus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabFiltres"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau de filtres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabAutorisRefus"}),(0,t.jsx)(n.td,{children:"Boolean array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau autoriser-refuser"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," permet de mettre en place un ou plusieurs filtre(s) de liens externes pour la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"*"})," et ",(0,t.jsx)(n.em,{children:"objet"}),". Les filtres de liens externes d\xe9terminent si un URL associ\xe9 \xe0 la page courante via un lien doit \xeatre ouvert dans la zone Web ou dans le navigateur Web par d\xe9faut de la machine."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque l\u2019utilisateur clique sur un lien dans la page courante, 4D consulte la liste des filtres de liens externes afin de v\xe9rifier si l\u2019URL demand\xe9 doit \xeatre ouvert dans le navigateur de la machine. Si c\u2019est le cas, la page correspondant \xe0 l\u2019URL est affich\xe9e dans le navigateur Web et l\u2019\xe9v\xe9nement formulaire On Open External Link est g\xe9n\xe9r\xe9 (cf. commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"}),"). Sinon (fonctionnement par d\xe9faut), la page correspondant \xe0 l\u2019URL est affich\xe9e dans la zone Web. L\u2019\xe9valuation de l\u2019URL est bas\xe9e sur le contenu des tableaux ",(0,t.jsx)(n.em,{children:"tabFiltres"})," et t",(0,t.jsx)(n.em,{children:"abAutorisRefus"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Les tableaux ",(0,t.jsx)(n.em,{children:"tabFiltres"})," et ",(0,t.jsx)(n.em,{children:"tabAutorisRefus"})," doivent \xeatre synchronis\xe9s."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Chaque ligne du tableau ",(0,t.jsx)(n.em,{children:"tabFiltres"})," doit contenir un URL devant \xeatre filtr\xe9. Vous pouvez utiliser le * comme joker de remplacement pour un ou plusieurs caract\xe8re(s)."]}),"\n",(0,t.jsxs)(n.li,{children:["Chaque ligne correspondante dans le tableau ",(0,t.jsx)(n.em,{children:"tabAutorisRefus"})," doit contenur un bool\xe9en indiquant si l\u2019URL doit \xeatre ouvert dans la zone Web (Vrai) ou dans le navigateur Web (Faux)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"En cas de contradiction au niveau des param\xe9trages (autorisation et refus d\u2019un m\xeame URL), le param\xe9trage pris en compte est le dernier."}),"\n",(0,t.jsxs)(n.p,{children:['Pour d\xe9sactiver le filtrage des URLs, appelez la commande en lui passant des tableaux vides ou en passant respectivement les valeurs "',(0,t.jsx)(n.em,{children:"*"}),'" et Vrai dans la derni\xe8re ligne des tableaux ',(0,t.jsx)(n.em,{children:"tabFiltres"})," et ",(0,t.jsx)(n.em,{children:"tabAutorisRefus"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," Le filtrage \xe9tabli par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})," est pris en compte avant celui de ",(0,t.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"}),". Cela signifie que si un URL est refus\xe9 \xe0 cause d\u2019un filtre de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"}),", il ne pourra pas \xeatre ouvert dans un navigateur m\xeame s\u2019il est explicitement d\xe9fini par la commande ",(0,t.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," (cf. exemple 2)."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple provoquera l\u2019ouverture de sites dans des navigateurs externes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//S\xe9lectionner "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Faux : ce lien sera ouvert dans un navigateur externe\n\xa0APPEND TO ARRAY($filters;"*www.apple.*")\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Faux : ce lien sera ouvert dans un navigateur externe\n\xa0WA SET EXTERNAL LINKS FILTERS(MaZoneW;$filters;$AllowDeny)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple combine des filtrages de sites et de liens externes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//S\xe9lectionner "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Interdire ce lien\n\xa0WA SET URL FILTERS(MaZoneW;$filters;$AllowDeny)\n\xa0\n\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//S\xe9lectionner "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0\xa0//Faux : ce lien devrait \xeatre ouvert dans un navigateur externe, mais ce param\xe9trage est sans effet car le lien sera bloqu\xe9\n\xa0\xa0//du fait du filtrage d\u2019URL.\n\xa0WA SET EXTERNAL LINKS FILTERS(MaZoneW;$filters;$AllowDeny)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1032"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);