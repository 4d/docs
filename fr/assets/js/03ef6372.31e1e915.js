"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97414"],{839954:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/wa-get-url-history","title":"WA GET URL HISTORY","description":"WA GET URL HISTORY ( { ;} objet ; tabsUrls {; sens {; tabTitres*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-get-url-history.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-url-history","permalink":"/docs/fr/commands/wa-get-url-history","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-url-history.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-url-history","title":"WA GET URL HISTORY","slug":"/commands/wa-get-url-history","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET URL FILTERS","permalink":"/docs/fr/commands/wa-get-url-filters"},"next":{"title":"WA OPEN BACK URL","permalink":"/docs/fr/commands/wa-open-back-url"}}'),r=s("785893"),i=s("250065");let d={id:"wa-get-url-history",title:"WA GET URL HISTORY",slug:"/commands/wa-get-url-history",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA GET URL HISTORY"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"tabsUrls"})," {; ",(0,r.jsx)(n.em,{children:"sens"})," {; ",(0,r.jsx)(n.em,{children:"tabTitres"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabsUrls"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau des URLs visit\xe9s"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sens"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 ou omis=Liste des URLs pr\xe9c\xe9dents, 1=Liste des URLs suivants"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabTitres"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau des titres de fen\xeatres"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WA GET URL HISTORY"})," retourne un ou deux tableaux contenant les URLs visit\xe9s au cours de la session dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"*"})," et ",(0,r.jsx)(n.em,{children:"objet"}),". Elle permet de construire une interface de navigation personnalis\xe9e."]}),"\n",(0,r.jsx)(n.p,{children:"Les informations fournies concernent la session, c\u2019est-\xe0-dire la navigation effectu\xe9e dans une m\xeame zone Web tant que le formulaire n\u2019a pas \xe9t\xe9 referm\xe9."}),"\n",(0,r.jsxs)(n.p,{children:["Le tableau ",(0,r.jsx)(n.em,{children:"tabUrls"})," est rempli avec la liste des URLs visit\xe9s. En fonction de la valeur du param\xe8tre ",(0,r.jsx)(n.em,{children:"direction"})," (s\u2019il est pass\xe9), le tableau r\xe9cup\xe8re la liste des URLs pr\xe9c\xe9dents (fonctionnement par d\xe9faut) ou la liste des URLs suivants. Ces listes correspondent au contenu des boutons standard Pr\xe9c\xe9dent et Suivant des navigateurs."]}),"\n",(0,r.jsx)(n.p,{children:"Les URLs sont class\xe9s par ordre chronologique."}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"direction"}),' une valeur indiquant la liste \xe0 r\xe9cup\xe9rer. Vous pouvez utiliser l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Zone Web"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WA next URLs"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WA previous URLs"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"direction"}),", la valeur 0 est utilis\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["S\u2019il est pass\xe9, le param\xe8tre ",(0,r.jsx)(n.em,{children:"tabTitres"})," contient la liste des noms de fen\xeatres associ\xe9s aux URLs. Ce tableau est synchronis\xe9 avec le tableau ",(0,r.jsx)(n.em,{children:"tabUrls"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.em,{children:"Note de compatibilit\xe9 :"})," A partir de 4D v19 R5, cette commande retourne uniquement l'URL courante dans des tableaux urlsArr et titlesArr pour des zones web \xe0 l'aide du moteur de rendu du syst\xe8me de Windows."]})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/wa-create-url-history-menu",children:"WA Create URL history menu"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1048"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);