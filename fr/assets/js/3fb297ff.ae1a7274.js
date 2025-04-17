"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13476"],{228611:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/sql-execute-script","title":"SQL EXECUTE SCRIPT","description":"SQL EXECUTE SCRIPT ( cheminScript ; actionErreur {; nomAttribut ; valAttribut} {; nomAttribut2 ; valAttribut2 ; ... ; nomAttributN ; valAttributN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-execute-script.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute-script","permalink":"/docs/fr/20-R8/commands/sql-execute-script","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute-script.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-execute-script","title":"SQL EXECUTE SCRIPT","slug":"/commands/sql-execute-script","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE","permalink":"/docs/fr/20-R8/commands/sql-execute"},"next":{"title":"SQL EXPORT DATABASE","permalink":"/docs/fr/20-R8/commands/sql-export-database"}}'),s=r("785893"),i=r("250065");let c={id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQL EXECUTE SCRIPT"})," ( ",(0,s.jsx)(n.em,{children:"cheminScript"})," ; ",(0,s.jsx)(n.em,{children:"actionErreur"})," {; ",(0,s.jsx)(n.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(n.em,{children:"valAttribut"}),"} {; ",(0,s.jsx)(n.em,{children:"nomAttribut2"})," ; ",(0,s.jsx)(n.em,{children:"valAttribut2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomAttributN"})," ; ",(0,s.jsx)(n.em,{children:"valAttributN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminScript"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Chemin d'acc\xe8s complet du fichier contenant le script SQL \xe0 ex\xe9cuter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"actionErreur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Action \xe0 effectuer en cas d\u2019erreur durant l\u2019ex\xe9cution du script"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAttribut"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d\u2019attribut \xe0 utiliser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valAttribut"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur de l\u2019attribut"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SQL EXECUTE SCRIPT"})," vous permet d\u2019ex\xe9cuter une suite d\u2019instructions SQL plac\xe9es dans le fichier de script d\xe9sign\xe9 par ",(0,s.jsx)(n.em,{children:"cheminScript"}),". Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur un poste local (4D local ou proc\xe9dure stock\xe9e sur 4D Server). Elle fonctionne avec la base courante (base interne ou base externe)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec une connexion externe ouverte directement ou via ODBC."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"cheminScript"}),' le chemin d\u2019acc\xe8s complet du fichier texte contenant les instructions SQL \xe0 ex\xe9cuter. Le chemin d\u2019acc\xe8s doit \xeatre exprim\xe9 \xe0 l\u2019aide de syntaxe du syst\xe8me courant. Si vous passez une cha\xeene vide ("") dans ',(0,s.jsx)(n.em,{children:"cheminScript"}),", une bo\xeete de dialogue standard d\u2019ouverture de documents s\u2019affiche, permettant \xe0 l\u2019utilisateur de s\xe9lectionner le fichier de script \xe0 ex\xe9cuter."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Les commandes ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})," g\xe9n\xe8rent automatiquement ce fichier de script."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"actionErreur"})," vous permet de param\xe9trer le fonctionnement de la commande lorsqu\u2019elle rencontre une erreur au cours de l\u2019ex\xe9cution du script. Vous pouvez passer l\u2019une des trois constantes ci-dessous, plac\xe9es dans le th\xe8me ",(0,s.jsx)(n.em,{children:"SQL"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL On error abort"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"En cas d\u2019erreur, 4D stoppe imm\xe9diatement l\u2019ex\xe9cution du script."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL On error confirm"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"En cas d\u2019erreur, 4D affiche une bo\xeete de dialogue d\xe9taillant l\u2019erreur et permettant \xe0 l\u2019utilisateur d\u2019interrompre ou de poursuivre l\u2019ex\xe9cution du script."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL On error continue"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"En cas d\u2019erreur, 4D l\u2019ignore et poursuit l\u2019ex\xe9cution du script."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Les param\xe8tres ",(0,s.jsx)(n.em,{children:"nomAttribut"})," et ",(0,s.jsx)(n.em,{children:"valAttribut"})," doivent \xeatre pass\xe9s par paires. Ces param\xe8tres sont destin\xe9s \xe0 permettre de d\xe9finir des attributs sp\xe9cifiques pour l\u2019ex\xe9cution du script. Dans la version actuelle de 4D, un seul attribut peut \xeatre pass\xe9 dans ",(0,s.jsx)(n.em,{children:"nomAttribut"}),", disponible via la constante suivante, plac\xe9e dans le th\xe8me ",(0,s.jsx)(n.em,{children:"SQL"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL use access rights"}),(0,s.jsx)(n.td,{children:"Cha\xeene"}),(0,s.jsx)(n.td,{children:"SQL_Use_Access_Rights"}),(0,s.jsxs)(n.td,{children:["Permet de restreindre les droits d\u2019acc\xe8s \xe0 appliquer lors de l\u2019ex\xe9cution des commandes SQL du script. Lorsque vous utilisez cet attribut, vous devez passer 0 ou 1 dans ",(0,s.jsx)(n.em,{children:"valAttribut"})," :",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.em,{children:"valAttribut"})," = 1 : 4D utilise les droits d\u2019acc\xe8s de l\u2019utilisateur 4D courant. ",(0,s.jsx)(n.em,{children:"valAttribut"})," = 0 (ou attribut non d\xe9fini) : 4D ne restreint pas les acc\xe8s, les droits du Super_Utilisateur sont utilis\xe9s."]})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Si le fichier d\u2019enregistrement des requ\xeates de 4D est activ\xe9 (via les s\xe9lecteurs 28 ou 45 de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"), chaque commande SQL ex\xe9cut\xe9e g\xe9n\xe8rera une entr\xe9e avec les informations suivantes :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Type de commande SQL"}),"\n",(0,s.jsx)(n.li,{children:"Nombre d\u2019enregistrements affect\xe9s par la commande"}),"\n",(0,s.jsx)(n.li,{children:"Dur\xe9e d\u2019ex\xe9cution de la commande"}),"\n",(0,s.jsxs)(n.li,{children:["Pour chaque erreur rencontr\xe9e :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"le code d\u2019erreur"}),"\n",(0,s.jsx)(n.li,{children:"le texte de l\u2019erreur s\u2019il est disponible"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si le script est correctement ex\xe9cut\xe9 (aucune erreur rencontr\xe9e), la variable syst\xe8me ",(0,s.jsx)(n.em,{children:"OK"})," prend la valeur 1. En cas d\u2019erreur, la variable syst\xe8me ",(0,s.jsx)(n.em,{children:"OK"})," prend ou non la valeur 0 en fonction du param\xe8tre ",(0,s.jsx)(n.em,{children:"actionErreur"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"actionErreur"})," vaut SQL On error abort (valeur 1), ",(0,s.jsx)(n.em,{children:"OK"})," prend la valeur 0."]}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"actionErreur"})," vaut SQL On error confirm (valeur 2), la variable ",(0,s.jsx)(n.em,{children:"OK"})," prend la valeur 0 si l\u2019utilisateur choisit de stopper l\u2019op\xe9ration et 1 s\u2019il choisit de la poursuivre."]}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"actionErreur"})," vaut SQL On error continue (valeur 3), la variable ",(0,s.jsx)(n.em,{children:"OK"})," vaut toujours 1."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Si vous utilisez cette commande pour ex\xe9cuter des actions consommatrices de m\xe9moire telles que l\u2019importation massive de donn\xe9es, vous pouvez envisager de faire appel \xe0 la nouvelle commande SQL ",(0,s.jsx)(n.em,{children:"ALTER DATABASE"})," afin de d\xe9sactiver temporairement des options SQL."]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1089"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var t=r(667294);let s={},i=t.createContext(s);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);