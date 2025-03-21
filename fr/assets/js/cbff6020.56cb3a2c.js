"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85679"],{776597:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/break-level","title":"BREAK LEVEL","description":"BREAK LEVEL ( niveau {; sautPage} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/break-level.md","sourceDirName":"commands-legacy","slug":"/commands/break-level","permalink":"/docs/fr/20-R7/commands/break-level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbreak-level.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"break-level","title":"BREAK LEVEL","slug":"/commands/break-level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to print settings","permalink":"/docs/fr/20-R7/commands/blob-to-print-settings"},"next":{"title":"CLOSE PRINTING JOB","permalink":"/docs/fr/20-R7/commands/close-printing-job"}}'),t=r("785893"),i=r("250065");let a={id:"break-level",title:"BREAK LEVEL",slug:"/commands/break-level",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," ( ",(0,t.jsx)(n.em,{children:"niveau"})," {; ",(0,t.jsx)(n.em,{children:"sautPage"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"niveau"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de niveaux de rupture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sautPage"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Niveau de saut de page"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," sp\xe9cifie le nombre de niveaux de rupture dans un \xe9tat cr\xe9\xe9 \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous ",(0,t.jsx)(n.strong,{children:"devez"})," appeler ",(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/accumulate",children:"ACCUMULATE"})," avant la g\xe9n\xe9ration de chaque \xe9tat dans lequel vous voulez utiliser des ruptures. Ces commandes activent le traitement des ruptures pour un \xe9tat. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/subtotal",children:"Subtotal"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"niveau"})," indique le dernier niveau de rupture pour lequel vous voulez utiliser des ruptures. Ce nombre doit \xeatre inf\xe9rieur ou \xe9gal aux niveaux de tris que vous aurez effectu\xe9s avant l'impression. Si vous avez effectu\xe9 un tri sur davantage de niveaux, ces niveaux seront imprim\xe9s tri\xe9s, mais ne comporteront pas de rupture."]}),"\n",(0,t.jsxs)(n.p,{children:["Chaque niveau de rupture g\xe9n\xe9r\xe9 provoquera l'impression de zones de rupture et d'en-t\xeate dans le formulaire. Il doit y avoir au moins autant de zones de rupture dans le formulaire que la valeur que vous avez pass\xe9e dans ",(0,t.jsx)(n.em,{children:"niveau"}),". S'il y a davantage de zones de rupture, elles seront ignor\xe9es et ne seront pas imprim\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Le second param\xe8tre (optionnel), ",(0,t.jsx)(n.em,{children:"sautPage"}),", permet de provoquer un saut de page sur le niveau de rupture de votre choix."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant imprime un \xe9tat avec deux niveaux de rupture. La s\xe9lection est tri\xe9e sur quatre champs, mais la commande ",(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," ne sp\xe9cifie que deux niveaux de rupture. Seul un champ est cumul\xe9 \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/accumulate",children:"ACCUMULATE"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ORDER BY([Emp]Service;>;[Emp]Titre;>;[Emp]Nom;>;Emp]Pr\xe9nom;>)\xa0// Trier sur quatre champs\n\xa0BREAK LEVEL(2)\xa0// Fixer 2 niveaux de rupture (Service et Titre)\n\xa0ACCUMULATE([Emp]Salaire)\xa0// Cumuler sur les salaires\n\xa0FORM SET OUTPUT([Emp];"ServiceRessHum")\xa0// S\xe9lectionner le formulaire \xe0 imprimer\n\xa0PRINT SELECTION([Emp])\xa0// Imprimer l\'\xe9tat\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/accumulate",children:"ACCUMULATE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/subtotal",children:"Subtotal"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"302"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);