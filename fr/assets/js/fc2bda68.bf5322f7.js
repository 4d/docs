"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37523"],{711223:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/memory-statistics","title":"MEMORY STATISTICS","description":"MEMORY STATISTICS ( typeInfo ; tabNoms ; tabValeurs ; tabNombre )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/memory-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/memory-statistics","permalink":"/docs/fr/commands/memory-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmemory-statistics.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"memory-statistics","title":"MEMORY STATISTICS","slug":"/commands/memory-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get cache size","permalink":"/docs/fr/commands/get-cache-size"},"next":{"title":"SET BLOBS CACHE PRIORITY","permalink":"/docs/fr/commands/set-blobs-cache-priority"}}'),r=s("785893"),i=s("250065");let d={id:"memory-statistics",title:"MEMORY STATISTICS",slug:"/commands/memory-statistics",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MEMORY STATISTICS"})," ( ",(0,r.jsx)(n.em,{children:"typeInfo"})," ; ",(0,r.jsx)(n.em,{children:"tabNoms"})," ; ",(0,r.jsx)(n.em,{children:"tabValeurs"})," ; ",(0,r.jsx)(n.em,{children:"tabNombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeInfo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"S\xe9lecteur d\u2019information \xe0 obtenir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabNoms"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Libell\xe9s des informations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabValeurs"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeurs des informations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabNombre"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre d\u2019objets concern\xe9s (si disponible)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"MEMORY STATISTICS"})," permet de r\xe9cup\xe9rer des informations relatives \xe0 l\u2019utilisation du cache de donn\xe9es par 4D. Ces informations peuvent \xeatre utiles \xe0 l\u2019analyse du fonctionnement de l\u2019application."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"typeInfo"})," indique le type d'informations que vous souhaitez obtenir. Dans les versions 4D actuelles, un seul type est pris en charge (",(0,r.jsx)(n.em,{children:"typeInfo"})," =1)"]}),"\n",(0,r.jsxs)(n.p,{children:["A l\u2019issue de l\u2019ex\xe9cution de la commande, les statistiques demand\xe9es sont fournies dans les tableaux ",(0,r.jsx)(n.em,{children:"tabNoms"}),", ",(0,r.jsx)(n.em,{children:"tabValeurs"})," et ",(0,r.jsx)(n.em,{children:"tabNombre"}),". Ces informations sont \xe9galement disponibles via l\u2019Explorateur d\u2019ex\xe9cution : taille de m\xe9moire physique, virtuelle, libre, occup\xe9e, m\xe9moire pile (stack memory) et m\xe9moire pile disponible (free stack memory). Pour plus d\u2019informations sur l\u2019interpr\xe9tation avanc\xe9e de ces donn\xe9es, veuillez contacter le service technique de 4D SAS."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/cache-info",children:"Cache info"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1118"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);