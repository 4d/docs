"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65990"],{333474:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/selection-to-array","title":"SELECTION TO ARRAY","description":"SELECTION TO ARRAY {( leChamp | laTable ; tableau {; leChamp ; tableau {; leChamp2 ; tableau2 ; ... ; leChampN ; tableauN}}{; *})}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/selection-to-array","permalink":"/docs/fr/20-R7/commands/selection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selection-to-array","title":"SELECTION TO ARRAY","slug":"/commands/selection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECTION RANGE TO ARRAY","permalink":"/docs/fr/20-R7/commands/selection-range-to-array"},"next":{"title":"Size of array","permalink":"/docs/fr/20-R7/commands/size-of-array"}}'),t=s("785893"),a=s("250065");let l={id:"selection-to-array",title:"SELECTION TO ARRAY",slug:"/commands/selection-to-array",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," {( leChamp | laTable ; ",(0,t.jsx)(n.em,{children:"tableau"})," {; ",(0,t.jsx)(n.em,{children:"leChamp"})," ; ",(0,t.jsx)(n.em,{children:"tableau"})," {; ",(0,t.jsx)(n.em,{children:"leChamp2"})," ; ",(0,t.jsx)(n.em,{children:"tableau2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"leChampN"})," ; ",(0,t.jsx)(n.em,{children:"tableauN"}),"}}{; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leChamp | laTable"}),(0,t.jsx)(n.td,{children:"Champ, Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Champ \xe0 r\xe9cup\xe9rer dans le tableau ou Table dont les num\xe9ros d'enregistrements sont \xe0 r\xe9cup\xe9rer dans le tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Tableau recevant les valeurs des champs ou les num\xe9ros d'enregistrements"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Champ \xe0 r\xe9cup\xe9rer dans le tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Tableau recevant les valeurs du champ"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Attente d\u2019ex\xe9cution"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," cr\xe9e un ou plusieurs tableau(x) et y copie les valeurs des champ(s) ou les num\xe9ros d'enregistrement(s) de la s\xe9lection courante.s'applique \xe0 la s\xe9lection courante de la table d\xe9sign\xe9e par le premier param\xe8tre (nom de table ou nom de champ). La commande peut r\xe9aliser les op\xe9rations suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Charger les valeurs d'un ou plusieurs champs,"}),"\n",(0,t.jsxs)(n.li,{children:["Charger les num\xe9ros des enregistrements de la table, \xe0 l'aide de la syntaxe ",(0,t.jsx)(n.em,{children:"[table];tableau"})]}),"\n",(0,t.jsxs)(n.li,{children:["Charger des valeurs de champs li\xe9s, s'il existe un lien automatique de N vers 1 entre les tables, ou si vous avez pr\xe9alablement appel\xe9 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," pour rendre automatiques les liens manuels N vers 1 (dans les deux cas, les valeurs peuvent \xeatre charg\xe9es \xe0 travers plusieurs niveaux de liens N vers 1 entre les tables)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Chaque tableau est typ\xe9 en fonction du type de champ."}),"\n",(0,t.jsxs)(n.p,{children:["A noter toutefois que ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," appliqu\xe9e \xe0 un champ de type Heure cr\xe9era un tableau de type Heure uniquement si le tableau n\u2019a pas d\xe9j\xe0 \xe9t\xe9 d\xe9fini dans un autre type. Par exemple dans le contexte ci-dessous, le tableau ",(0,t.jsx)(n.em,{children:"monTab"})," conservera le type Entier long :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(monTab;0)\n\xa0SELECTION TO ARRAY([maTable]monChpHeure;monTab)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Si vous chargez les num\xe9ros des enregistrements, ils sont copi\xe9s dans un tableau de type Entier long."}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez un ",(0,t.jsx)(n.em,{children:"*"})," en dernier param\xe8tre, 4D n\u2019ex\xe9cute pas imm\xe9diatement la ligne d\u2019instruction correspondante mais la stocke en m\xe9moire ; vous pouvez ainsi empiler plusieurs lignes se terminant par un ",(0,t.jsx)(n.em,{children:"*"}),". L\u2019ensemble des lignes en attente sera ex\xe9cut\xe9 par une instruction ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," finale sans param\xe8tre ",(0,t.jsx)(n.em,{children:"*"}),". A cette fin, la commande peut \xeatre appel\xe9e sans aucun param\xe8tre. Dans ce cas, les types des tableaux sont v\xe9rifi\xe9s au moment de l\u2019ex\xe9cution de la ligne finale (ne contenant pas de ",(0,t.jsx)(n.em,{children:"*"}),").",(0,t.jsx)(n.br,{}),"\nA l\u2019image de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"}),", ce principe vous permet de scinder une instruction complexe en un ensemble de lignes, plus lisibles et plus faciles \xe0 maintenir. Il est \xe9galement possible d\u2019ins\xe9rer des instructions interm\xe9diaires ou de construire un tableau dans une boucle (cf. exemple 2 de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/array-to-selection",children:"ARRAY TO SELECTION"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"})," La commande ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," est optimis\xe9e pour 4D Server. Chaque tableau est cr\xe9\xe9 sur le serveur puis envoy\xe9 en totalit\xe9 sur le poste client."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION :"})," ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," peut cr\xe9er des tableaux de taille importante, en fonction de la taille de la s\xe9lection courante, ainsi que du type et de la taille des donn\xe9es \xe0 charger. Comme les tableaux r\xe9sident en m\xe9moire, il peut \xeatre utile de tester la taille des tableaux cr\xe9\xe9s apr\xe8s l'ex\xe9cution de la commande, ou d'utiliser une m\xe9thode projet d'appel sur erreur."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Apr\xe8s un appel \xe0 ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"}),", la s\xe9lection courante et l'enregistrement courant ne sont pas modifi\xe9s, mais l'enregistrement courant n'est plus charg\xe9. Utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/load-record",children:"LOAD RECORD"})," apr\xe8s un ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," si vous souhaitez utiliser les valeurs des champs de l'enregistrement courant."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["Dans l'exemple suivant, la table ",(0,t.jsx)(n.em,{children:"[Personnes]"})," dispose d'un lien automatique vers la table ",(0,t.jsx)(n.em,{children:"[Soci\xe9t\xe9s]"}),". Les deux tableaux ",(0,t.jsx)(n.em,{children:"tabNoms"})," et ",(0,t.jsx)(n.em,{children:"tabAdresseSoci\xe9t\xe9s"})," sont dimensionn\xe9s en fonction du nombre d'enregistrements dans la s\xe9lection de la table ",(0,t.jsx)(n.em,{children:"[Personnes]"})," et contiennent des informations venant des deux tables :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Personnes]Nom;tabNoms;[Soci\xe9t\xe9s]Adresse;tabAdresseSoci\xe9t\xe9s)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple ci-dessous retourne les num\xe9ros d'enregistrements de la table ",(0,t.jsx)(n.em,{children:"[Clients]"})," dans le tableau ",(0,t.jsx)(n.em,{children:"tabNumEnr"})," et les valeurs du champ ",(0,t.jsx)(n.em,{children:"[Clients]Noms"})," dans le tableau ",(0,t.jsx)(n.em,{children:"tabNoms"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clients];tabNumEnr;[Clients]Noms;tabNoms)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Le m\xeame exemple peut \xeatre \xe9crit :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clients];tabNumEnr;*)\n\xa0SELECTION TO ARRAY([Clients]Noms;tabNoms;*)\n\xa0SELECTION TO ARRAY\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/array-to-selection",children:"ARRAY TO SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"260"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);