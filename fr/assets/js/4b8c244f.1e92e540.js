"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60250"],{699475:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/print-option-values","title":"PRINT OPTION VALUES","description":"PRINT OPTION VALUES ( option ; tabNoms {; tabInfo1 {; tabInfo2}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-option-values.md","sourceDirName":"commands-legacy","slug":"/commands/print-option-values","permalink":"/docs/fr/commands/print-option-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-option-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-option-values","title":"PRINT OPTION VALUES","slug":"/commands/print-option-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print object","permalink":"/docs/fr/commands/print-object"},"next":{"title":"PRINT RECORD","permalink":"/docs/fr/commands/print-record"}}'),t=s("785893"),i=s("250065");let o={id:"print-option-values",title:"PRINT OPTION VALUES",slug:"/commands/print-option-values",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," ( ",(0,t.jsx)(n.em,{children:"option"})," ; ",(0,t.jsx)(n.em,{children:"tabNoms"})," {; ",(0,t.jsx)(n.em,{children:"tabInfo1"})," {; ",(0,t.jsx)(n.em,{children:"tabInfo2"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"option"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d\u2019option"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabNoms"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Noms des valeurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabInfo1"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeurs 1 de l\u2019option"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabInfo2"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeurs 2 de l\u2019option"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," retourne dans le tableau ",(0,t.jsx)(n.em,{children:"tabNoms"})," la liste des noms de valeurs disponibles pour l\u2019",(0,t.jsx)(n.em,{children:"option"})," d\u2019impression d\xe9finie. Facultativement, vous pouvez r\xe9cup\xe9rer des informations sur chaque valeur dans les tableaux ",(0,t.jsx)(n.em,{children:"tabInfo1"})," et ",(0,t.jsx)(n.em,{children:"tabInfo2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"option"})," vous permet de d\xe9signer l\u2019option \xe0 lire. Vous devez passer une des constantes du th\xe8me ",(0,t.jsx)(n.em,{children:"Options d'impression"})," suivantes (options pouvant retourner des listes de noms de valeurs) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Paper option"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Si vous passez uniquement ",(0,t.jsx)(n.em,{children:"valeur1"}),", il contient le nom du papier. Si vous passez les deux param\xe8tres, ",(0,t.jsx)(n.em,{children:"valeur1"})," contient la largeur du papier et ",(0,t.jsx)(n.em,{children:"valeur2"})," contient la hauteur du papier. La largeur et la hauteur sont exprim\xe9es en pixels \xe9cran. Utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"})," pour conna\xeetre le nom, la hauteur et la largeur de tous les formats de papier propos\xe9s par l\u2019imprimante."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Paper source option"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsxs)(n.td,{children:["(Windows uniqument) ",(0,t.jsx)(n.em,{children:"valeur1"})," uniquement : num\xe9ro correspondant \xe0 l\u2019indice, dans le tableau des bacs retourn\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),", du bac papier \xe0 utiliser. Cette option est utilisable sous Windows uniquement."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s ex\xe9cution de la commande, le tableau ",(0,t.jsx)(n.em,{children:"tabNoms"})," ainsi que, le cas \xe9ch\xe9ant, les tableaux ",(0,t.jsx)(n.em,{children:"tabInfo1"})," et ",(0,t.jsx)(n.em,{children:"tabInfo2"})," seront remplis par la commande avec les noms et informations des valeurs disponibles."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez la valeur 1 (Paper option) dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"option"}),", la commande retournera les informations suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["dans le tableau ",(0,t.jsx)(n.em,{children:"tabNoms"}),", les noms des formats de papiers disponibles ;"]}),"\n",(0,t.jsxs)(n.li,{children:["dans le tableau ",(0,t.jsx)(n.em,{children:"tabInfo1"}),", les hauteurs de chaque format de papier ;"]}),"\n",(0,t.jsxs)(n.li,{children:["dans le tableau ",(0,t.jsx)(n.em,{children:"tabInfo2"}),", les largeurs de chaque format de papier."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour que vous puissiez obtenir ces informations, le pilote d\u2019imprimante doit avoir acc\xe8s \xe0 un fichier de description PostScript (PPD) valide de l\u2019imprimante."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour utiliser un format de papier sp\xe9cifique \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"}),", vous pouvez passer soit une des valeurs du tableau ",(0,t.jsx)(n.em,{children:"tabNoms"}),", soit les valeurs correspondantes des tableaux ",(0,t.jsx)(n.em,{children:"tabInfo1"})," et ",(0,t.jsx)(n.em,{children:"tabInfo2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez la valeur 5 (Paper source option) dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"option"}),", la commande retourne dans le tableau ",(0,t.jsx)(n.em,{children:"tabNoms"})," les noms des diff\xe9rents bacs disponibles et leur num\xe9ro Windows interne dans ",(0,t.jsx)(n.em,{children:"tabInfo1"})," (",(0,t.jsx)(n.em,{children:"tabInfo2"})," reste vide).",(0,t.jsx)(n.br,{}),"\nL\u2019ordre des valeurs dans les tableaux est d\xe9fini par le pilote d\u2019impression. Pour d\xe9signer un bac \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"}),", vous devez passer l\u2019indice de l\u2019\xe9l\xe9ment souhait\xe9 dans tableau ",(0,t.jsx)(n.em,{children:"tabNoms"})," ou ",(0,t.jsx)(n.em,{children:"tabInfo1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette option est utilisable sous Windows uniquement."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d\u2019informations sur les diff\xe9rentes options d\u2019impression, reportez-vous \xe0 la description des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Toutes les informations retourn\xe9es par ces commandes sont fournies par le syst\xe8me d\u2019exploitation. Reportez-vous \xe0 la documentation de votre syst\xe8me pour plus de d\xe9tails sur certaines options."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La commande ",(0,t.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," fonctionne avec les imprimantes PostScript uniquement."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"785"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);