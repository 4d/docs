"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40615"],{596573:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/selection-range-to-array","title":"SELECTION RANGE TO ARRAY","description":"SELECTION RANGE TO ARRAY ( d\xe9but ; fin {; leChamp | laTable ; tableau} {; leChamp | laTable2 ; tableau2 ; ... ; leChamp | laTableN ; tableauN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/selection-range-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/selection-range-to-array","permalink":"/docs/fr/commands/selection-range-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-range-to-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"selection-range-to-array","title":"SELECTION RANGE TO ARRAY","slug":"/commands/selection-range-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MULTI SORT ARRAY","permalink":"/docs/fr/commands/multi-sort-array"},"next":{"title":"SELECTION TO ARRAY","permalink":"/docs/fr/commands/selection-to-array"}}'),l=s("785893"),t=s("250065");let a={id:"selection-range-to-array",title:"SELECTION RANGE TO ARRAY",slug:"/commands/selection-range-to-array",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," ( ",(0,l.jsx)(n.em,{children:"d\xe9but"})," ; ",(0,l.jsx)(n.em,{children:"fin"})," {; leChamp | laTable ; ",(0,l.jsx)(n.em,{children:"tableau"}),"} {; leChamp | laTable2 ; ",(0,l.jsx)(n.em,{children:"tableau2"})," ; ... ; leChamp | laTableN ; ",(0,l.jsx)(n.em,{children:"tableauN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"d\xe9but"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement sous-s\xe9lectionn\xe9 \xe0 partir duquel commencer la copie des donn\xe9es"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fin"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement sous-s\xe9lectionn\xe9 auquel arr\xeater la copie des donn\xe9es"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"leChamp | laTable"}),(0,l.jsx)(n.td,{children:"Champ, Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Champ \xe0 utiliser pour r\xe9cup\xe9rer les donn\xe9es ou Table \xe0 utiliser pour r\xe9cup\xe9rer les num\xe9ros d'enregistrements"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableau"}),(0,l.jsx)(n.td,{children:"Array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Tableau recevant les donn\xe9es ou les num\xe9ros d'enregistrements"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," cr\xe9e un ou plusieurs tableau(x) et y copie des donn\xe9es en provenance des champs de la s\xe9lection courante ou les num\xe9ros des enregistrements de la s\xe9lection courante."]}),"\n",(0,l.jsxs)(n.p,{children:["A la diff\xe9rence de ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"})," qui s'applique \xe0 l'int\xe9gralit\xe9 de la s\xe9lection courante, ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," s'applique uniquement \xe0 une sous-s\xe9lection d'enregistrements, d\xe9finie par les param\xe8tres ",(0,l.jsx)(n.em,{children:"d\xe9but"})," et ",(0,l.jsx)(n.em,{children:"fin"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous devez passer dans les param\xe8tres ",(0,l.jsx)(n.em,{children:"d\xe9but"})," et ",(0,l.jsx)(n.em,{children:"fin"})," des num\xe9ros d'enregistrements sous-s\xe9lectionn\xe9s s'inscrivant dans l'intervalle d\xe9fini par la formule ",(0,l.jsx)(n.em,{children:"1 <= d\xe9but <= fin <= Enregistrements trouves ([...])"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez des num\xe9ros correspondant \xe0 ",(0,l.jsx)(n.em,{children:"1 <= d\xe9but = fin <= Enregistrements trouves ([...])"}),", ce sont les champs ou les num\xe9ros des enregistrements de la s\xe9lection courante r\xe9pondant \xe0 ",(0,l.jsx)(n.em,{children:"d\xe9but = fin"})," qui seront charg\xe9s."]}),"\n",(0,l.jsx)(n.p,{children:"Si vous passez des num\xe9ros d'enregistrements incorrects, vous obtiendrez les r\xe9sultats suivants :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si ",(0,l.jsx)(n.em,{children:"fin > Enregistrements trouves ([...])"}),", la commande retourne toutes les valeurs, \xe0 partir de l'enregistrement sous-s\xe9lectionn\xe9 sp\xe9cifi\xe9 par ",(0,l.jsx)(n.em,{children:"d\xe9but"})," jusqu'au dernier enregistrement sous-s\xe9lectionn\xe9."]}),"\n",(0,l.jsxs)(n.li,{children:["Si ",(0,l.jsx)(n.em,{children:"d\xe9but > fin"}),", la commande ne retourne que les valeurs de l'enregistrement ",(0,l.jsx)(n.em,{children:"d\xe9but"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Si les deux param\xe8tres sont incompatibles avec la taille de la sous-s\xe9lection, les tableaux sont retourn\xe9s vides"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Comme ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),", ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," s'applique \xe0 la s\xe9lection de la table pass\xe9e en param\xe8tre. La commande peut r\xe9aliser les op\xe9rations suivantes :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Charger les valeurs d'un ou plusieurs champs,"}),"\n",(0,l.jsxs)(n.li,{children:["Charger les num\xe9ros des enregistrements, \xe0 l'aide de la syntaxe ",(0,l.jsx)(n.em,{children:"...;[table];tableau;..."})]}),"\n",(0,l.jsxs)(n.li,{children:["Charger des valeurs de champs li\xe9s, s'il existe un lien automatique de N vers 1 entre les tables, ou si vous avez pr\xe9alablement appel\xe9 la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," pour rendre automatiques les liens manuels N vers 1 (dans les deux cas, les valeurs peuvent \xeatre charg\xe9es \xe0 travers plusieurs niveaux de liens N vers 1 entre les tables)."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Chaque tableau est typ\xe9 en fonction du type de champ."}),"\n",(0,l.jsxs)(n.p,{children:["A noter toutefois que ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," appliqu\xe9e \xe0 un champ de type Heure cr\xe9era un tableau de type Heure uniquement si le tableau n\u2019a pas d\xe9j\xe0 \xe9t\xe9 d\xe9fini dans un autre type. Par exemple dans le contexte ci-dessous, le tableau ",(0,l.jsx)(n.em,{children:"monTab"})," conservera le type Entier long :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(monTab;0)\n\xa0SELECTION RANGE TO ARRAY([maTable]monChpHeure;monTab)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Si vous chargez les num\xe9ros des enregistrements, ils sont copi\xe9s dans un tableau de type Entier long."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Il est possible d\u2019appeler la commande ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," avec uniquement les param\xe8tres ",(0,l.jsx)(n.em,{children:"d\xe9but"})," et ",(0,l.jsx)(n.em,{children:"fin"}),". Cette syntaxe particuli\xe8re peut \xeatre employ\xe9e pour lancer sur une s\xe9lection limit\xe9e l\u2019ex\xe9cution d\u2019une s\xe9rie diff\xe9r\xe9e de commandes ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"})," utilisant le param\xe8tre ",(0,l.jsx)(n.em,{children:"*"})," (cf. exemple 4)."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"4D Server :"})," La commande ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," est optimis\xe9e pour 4D Server. Chaque tableau est cr\xe9\xe9 sur le serveur puis envoy\xe9 en totalit\xe9 sur le poste client."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"ATTENTION :"})," ",(0,l.jsx)(n.strong,{children:"SELECTION RANGE TO ARRAY"})," peut cr\xe9er des tableaux de taille importante, en fonction de l'intervalle d\xe9fini par ",(0,l.jsx)(n.em,{children:"d\xe9but"})," et ",(0,l.jsx)(n.em,{children:"fin"}),", ainsi que du type et de la taille des donn\xe9es \xe0 charger. Comme les tableaux r\xe9sident en m\xe9moire, il peut \xeatre utile de tester la taille des tableaux cr\xe9\xe9s apr\xe8s l'ex\xe9cution de la commande, ou d'utiliser une m\xe9thode projet d'interception d'erreurs, install\xe9e par la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Une fois la commande correctement ex\xe9cut\xe9e, la taille des tableaux r\xe9sultants est \xe9gale \xe0 ",(0,l.jsx)(n.em,{children:"(fin-d\xe9but)+1"})," \u2014 sauf si le param\xe8tre ",(0,l.jsx)(n.em,{children:"fin"})," est sup\xe9rieur au nombre d'enregistrements dans la s\xe9lection. Dans ce cas, les tableaux contiennent ",(0,l.jsx)(n.em,{children:"(Enregistrements trouves([...])-d\xe9but)+1"})," \xe9l\xe9ments."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(n.p,{children:["La ligne de code suivante utilise les 50 premiers enregistrements de la s\xe9lection courante de la table ",(0,l.jsx)(n.em,{children:"[Factures]"}),". Les valeurs du champ ",(0,l.jsx)(n.em,{children:"[Factures]R\xe9fFacture"})," et du champ li\xe9 ",(0,l.jsx)(n.em,{children:"[Clients]R\xe9fClient"})," sont charg\xe9es."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION RANGE TO ARRAY(1;50;[Factures]R\xe9fFacture;tlR\xe9fFacture;[Clients]R\xe9fClient;tlR\xe9fClient)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsxs)(n.p,{children:["Les lignes de code suivantes utilisent les 50 derniers enregistrements de la s\xe9lection courante de la table ",(0,l.jsx)(n.em,{children:"[Factures]"}),". Les num\xe9ros d'enregistrements de la table ",(0,l.jsx)(n.em,{children:"[Factures]"})," ainsi que ceux de la table li\xe9e ",(0,l.jsx)(n.em,{children:"[Clients]"})," sont charg\xe9s :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0lTailleS\xe9l:=Records in selection([Factures])\n\xa0SELECTION RANGE TO ARRAY(lTailleS\xe9l-49;lTailleS\xe9l;[Factures];taFactureNum;[Clients];taClientNum)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Les lignes de code suivantes vous permettent de travailler s\xe9quentiellement avec des portions de 1000 enregistrements d'une s\xe9lection importante qui ne peut pas \xeatre charg\xe9e dans des tableaux en une seule fois :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0lMaxPage:=1000\n\xa0lTailleS\xe9l:=Records in selection([Annuaire])\n\xa0For($lPage ;1;1+((lTailleS\xe9l-1)\\lMaxPage))\n\xa0\xa0// Charger les valeurs et/ou les num\xe9ros d'enregistrements\n\xa0\xa0\xa0\xa0SELECTION RANGE TO ARRAY(1+(lMaxPage*($lPage-1));lMaxPage*$lPage;...;...;...;...;...;...)\n\xa0\xa0// Faire quelque chose avec les tableaux\n\xa0End for\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsx)(n.p,{children:"Utilisation des 50 premiers enregistrements courants de la table [Factures] pour charger divers tableaux, en ex\xe9cution diff\xe9r\xe9e :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0\xa0\xa0\xa0// Instructions diff\xe9r\xe9es\n\xa0SELECTION TO ARRAY([Factures]RefFacture;tLRefFac;*)\n\xa0SELECTION TO ARRAY([Factures]Date;tDDateFac;*)\n\xa0SELECTION TO ARRAY([Clients]RefClient;tLRefCli;*)\n\xa0\xa0\xa0\xa0\xa0// Ex\xe9cution des instructions diff\xe9r\xe9es\n\xa0SELECTION RANGE TO ARRAY(1;50)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"368"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let l={},t=r.createContext(l);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);