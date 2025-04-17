"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73930"],{20818:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-query-and-lock","title":"SET QUERY AND LOCK","description":"SET QUERY AND LOCK ( verrou )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-query-and-lock.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-and-lock","permalink":"/docs/fr/20-R8/commands/set-query-and-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-and-lock.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-query-and-lock","title":"SET QUERY AND LOCK","slug":"/commands/set-query-and-lock","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY WITH ARRAY","permalink":"/docs/fr/20-R8/commands/query-with-array"},"next":{"title":"SET QUERY DESTINATION","permalink":"/docs/fr/20-R8/commands/set-query-destination"}}'),t=r("785893"),i=r("250065");let l={id:"set-query-and-lock",title:"SET QUERY AND LOCK",slug:"/commands/set-query-and-lock",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK"})," ( ",(0,t.jsx)(n.em,{children:"verrou"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"verrou"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai = verrouiller les enregistrements trouv\xe9s par les recherches, Faux = ne pas les verrouiller"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK"})," vous permet de demander le verrouillage automatique des enregistrements trouv\xe9s par toutes les recherches qui suivent son appel dans la transaction courante. Ce m\xe9canisme permet de s\u2019assurer que les enregistrements ne puissent pas \xeatre modifi\xe9s par un process autre que le process courant entre une recherche et la manipulation des r\xe9sultats."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, les enregistrements trouv\xe9s par les recherches ne sont pas verrouill\xe9s. Passez ",(0,t.jsx)(n.strong,{children:"Vrai"})," dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"verrou"})," pour activer le verrouillage."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande doit imp\xe9rativement \xeatre utilis\xe9e \xe0 l\u2019int\xe9rieur d\u2019une transaction. Si elle est appel\xe9e hors du contexte d\u2019une transaction, une erreur est g\xe9n\xe9r\xe9e. Ce principe permet un meilleur contr\xf4le du verrouillage des enregistrements. Les enregistrements trouv\xe9s restent verrouill\xe9s tant que la transaction n\u2019a pas \xe9t\xe9 termin\xe9e (qu\u2019elle ait \xe9t\xe9 valid\xe9e ou annul\xe9e). A l\u2019issue de la transaction, tous les enregistrements sont d\xe9verrouill\xe9s, except\xe9 l'enregistrement courant."}),"\n",(0,t.jsx)(n.p,{children:"Le verrouillage des enregistrements est effectif pour toutes les tables dans la transaction courante."}),"\n",(0,t.jsxs)(n.p,{children:["Lorsqu'une instruction ",(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK(Vrai)"})," a \xe9t\xe9 ex\xe9cut\xe9e, les commandes de recherche (par exemple ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"}),") adoptent un fonctionnement sp\xe9cifique si un enregistrement d\xe9j\xe0 verrouill\xe9 est trouv\xe9 :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"la recherche est stopp\xe9e et la variable syst\xe8me OK prend la valeur 0,"}),"\n",(0,t.jsx)(n.li,{children:"la s\xe9lection courante est vid\xe9e,"}),"\n",(0,t.jsx)(n.li,{children:"l'ensemble syst\xe8me LockedSet contient l'enregistrement verrouill\xe9 \xe0 l'origine de l'arr\xeat de la recherche."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Par cons\xe9quent, dans ce contexte il est n\xe9cessaire de tester l'ensemble LockedSet \xe0 l'issue d'une recherche infructueuse (s\xe9lection courante vide et/ou variable OK \xe0 0) afin de d\xe9terminer la cause de l'\xe9chec."}),"\n",(0,t.jsxs)(n.p,{children:["Appelez ",(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK(Faux)"})," afin de d\xe9sactiver le m\xe9canisme apr\xe8s usage."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK"})," modifie uniquement le comportement des commandes de recherche, c'est-\xe0-dire :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En revanche, ",(0,t.jsx)(n.strong,{children:"SET QUERY AND LOCK"})," n'affecte pas les autres commandes qui modifient la s\xe9lection courante telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/all-records",children:"ALL RECORDS"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/relate-many",children:"RELATE MANY"}),", etc."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Dans cet exemple, il n\u2019est pas possible de supprimer un client qui aurait \xe9t\xe9 pass\xe9 de la cat\xe9gorie \u201CC\u201D \xe0 la cat\xe9gorie \u201CA\u201D par un autre process entre le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"})," et le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/delete-selection",children:"DELETE SELECTION"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0START TRANSACTION\n\xa0SET QUERY AND LOCK(True)\n\xa0QUERY([Clients];[Clients]Cat\xe9gorie=\u201CC\u201D)\n\xa0\xa0//A cet instant, les enregistrements trouv\xe9s sont automatiquement verrouill\xe9s pour tous les autres process\n\xa0DELETE SELECTION([Clients])\n\xa0SET QUERY AND LOCK(False)\n\xa0VALIDATE TRANSACTION\n"})}),"\n",(0,t.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsx)(n.p,{children:"Si la commande est appel\xe9e hors du contexte d\u2019une transaction, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"661"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);