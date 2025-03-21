"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57478"],{37369:function(e,s,t){t.r(s),t.d(s,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"settings/security","title":"Page s\xe9curit\xe9","description":"Cette page regroupe les options relatives \xe0 la protection des acc\xe8s et des donn\xe9es de vos applications desktop.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/settings/security.md","sourceDirName":"settings","slug":"/settings/security","permalink":"/docs/fr/20/settings/security","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"security","title":"Page s\xe9curit\xe9"},"sidebar":"docs","previous":{"title":"Page PHP","permalink":"/docs/fr/20/settings/php"},"next":{"title":"Page Compatibilit\xe9","permalink":"/docs/fr/20/settings/compatibility"}}'),i=t("785893"),o=t("250065");let r={id:"security",title:"Page s\xe9curit\xe9"},a=void 0,d={},l=[{value:"Acc\xe8s des utilisateurs distants",id:"acc\xe8s-des-utilisateurs-distants",level:2},{value:"Options",id:"options",level:2}];function u(e){let s={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Cette page regroupe les options relatives \xe0 la protection des acc\xe8s et des donn\xe9es de vos applications desktop."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," : Consultez le document ",(0,i.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"})," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D."]}),"\n",(0,i.jsx)(s.h2,{id:"acc\xe8s-des-utilisateurs-distants",children:"Acc\xe8s des utilisateurs distants"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Ces param\xe8tres ne s'appliquent pas aux bases projets ouvertes en monoposte."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Acc\xe8s D\xe9veloppement et Explorateur d'ex\xe9cution"})," : permet au groupe d\u2019utilisateurs sp\xe9cifi\xe9 d\u2019acc\xe9der au mode D\xe9veloppement de la base et d'afficher l'Explorateur d'ex\xe9cution."]}),"\n",(0,i.jsx)(s.p,{children:"A noter que :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["La d\xe9finition d\u2019un groupe d\u2019acc\xe8s en D\xe9veloppement permet \xe9galement de d\xe9sactiver l\u2019option ",(0,i.jsx)(s.strong,{children:"Cr\xe9er une table"})," de la bo\xeete de dialogue d\u2019import de donn\xe9es. Pour plus d\u2019informations sur cette bo\xeete de dialogue, reportez-vous \xe0 la section ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importer-des-donnees-depuis-des-fichiers.300-5416859.fe.html",children:"Importer des donn\xe9es depuis des fichiers"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Le Super_Utilisateur et l\u2019Administrateur ont toujours acc\xe8s au mode D\xe9veloppement et \xe0 l'Explorateur d'ex\xe9cution, m\xeame s\u2019ils ne font pas explicitement partie du groupe d\u2019acc\xe8s d\xe9fini."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Utilisateur par d\xe9faut"})," : lorsqu\u2019un utilisateur est d\xe9fini dans ce menu, chaque utilisateur ouvrant ou se connectant \xe0 la base dispose des privil\xe8ges et restrictions d\u2019acc\xe8s qui ont \xe9t\xe9 assign\xe9s \xe0 cet utilisateur par d\xe9faut. Il n\u2019est alors plus n\xe9cessaire de saisir un nom d\u2019utilisateur. De plus, si vous n\u2019avez pas associ\xe9 de mot de passe \xe0 l\u2019utilisateur par d\xe9faut, la bo\xeete de dialogue de saisie du mot de passe n\u2019appara\xeet pas, la base s\u2019ouvre directement. L\u2019int\xe9r\xeat de cette option est de simplifier les acc\xe8s multiples \xe0 la base tout en maintenant un syst\xe8me complet de contr\xf4le des donn\xe9es."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si vous avez associ\xe9 un mot de passe \xe0 l\u2019utilisateur par d\xe9faut, une bo\xeete de dialogue appara\xeet \xe0 l\u2019ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe."}),"\n",(0,i.jsxs)(s.li,{children:["Si vous n\u2019avez pas associ\xe9 de mot de passe \xe0 l\u2019utilisateur par d\xe9faut, aucune bo\xeete de dialogue n\u2019appara\xeet.",(0,i.jsx)(s.strong,{children:"Note"})," : Vous pouvez \u201Cforcer\u201D l\u2019affichage de la bo\xeete de dialogue standard de saisie du mot de passe lorsque le mode \u201CUtilisateur par d\xe9faut\u201D est actif, par exemple pour pouvoir vous connecter en tant que Super_Utilisateur ou Administrateur. Pour cela, ouvrez (ou connectez-vous \xe0) la base de donn\xe9es tout en maintenant la touche ",(0,i.jsx)(s.strong,{children:"Majuscule"})," enfonc\xe9e."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Afficher les utilisateurs dans la fen\xeatre Mots de passe"}),' : si cette option est coch\xe9e, les utilisateurs doivent choisir leur nom dans une liste d\u2019utilisateurs et saisir leur mot de passe dans la bo\xeete de dialogue de saisie des mots de passe. Si cette option n\u2019est pas coch\xe9e, les utilisateurs doivent saisir leur nom et leur mot de passe. Pour plus d\u2019informations sur les deux versions de la bo\xeete de dialogue de mots de passe, reportez-vous au paragraphe "Acc\xe8s aux bases prot\xe9g\xe9es\u201D dans la section ',(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Pr\xe9sentation du contr\xf4le des acc\xe8s"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Trier la liste des utilisateurs par ordre alphab\xe9tique"})," (option utilisable uniquement si la pr\xe9c\xe9dente est coch\xe9e) : lorsque cette option est s\xe9lectionn\xe9e, la liste des utilisateurs dans la bo\xeete de dialogue de saisie des mots de passe est tri\xe9e par ordre alphab\xe9tique."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Les utilisateurs peuvent changer leur mot de passe"})," : lorsque cette option est coch\xe9e, un bouton ",(0,i.jsx)(s.strong,{children:"Changer"})," est affich\xe9 dans la bo\xeete de dialogue d\u2019ouverture ou de connexion \xe0 la base. Ce bouton permet \xe0 l\u2019utilisateur d\u2019acc\xe9der \xe0 la bo\xeete de dialogue lui permettant de modifier son mot de passe (cf. paragraphe \u201CModification du mot de passe par l\u2019utilisateur\u201D dans la section ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Assurer la maintenance du syst\xe8me"}),"). Si vous le souhaitez, vous pouvez masquer le bouton ",(0,i.jsx)(s.strong,{children:"Changer"})," afin de ne pas permettre aux utilisateurs de modifier leur mot du passe. Il suffit pour cela de d\xe9s\xe9lectionner cette option."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents"}),": For security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Formula editor"})," in Application mode or added to multistyle areas (using ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"}),"), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command can be used. A l'aide des options suivantes, vous pouvez supprimer compl\xe8tement ou partiellement ce filtrage."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Activ\xe9 pour tous"})," (par d\xe9faut) : L'acc\xe8s aux commandes, fonctions et m\xe9thodes projets est limit\xe9 pour tous les utilisateurs, y compris au Super Utilisateur et \xe0 l'Administrateur."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xe9sactiv\xe9 pour le Super Utilisateur et l'Administrateur"})," : Cette option accorde, uniquement au Super Utilisateur et \xe0 l'Administrateur, un acc\xe8s complet aux commandes et m\xe9thodes 4D. Elle peut \xeatre utilis\xe9e pour d\xe9finir un mode d'acc\xe8s illimit\xe9 aux commandes et m\xe9thodes tout en gardant le contr\xf4le des actions effectu\xe9es. En phase de d\xe9veloppement, ce mode peut \xeatre utilis\xe9 pour tester librement toutes les formules, les \xe9tats, etc. En cours d'exploitation, il peut \xeatre utilis\xe9 pour mettre en oeuvre des solutions s\xe9curis\xe9es permettant un acc\xe8s temporaire \xe0 toutes les commandes et m\xe9thodes. Le principe consiste \xe0 changer l'utilisateur courant (via la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"}),") avant d'appeler un dialogue ou de d\xe9marrer un process d'impression qui requiert un acc\xe8s total aux commandes, puis de retourner \xe0 l'utilisateur initial une fois l'op\xe9ration termin\xe9e. ",(0,i.jsx)(s.strong,{children:"Note :"})," Si l'acc\xe8s complet a \xe9t\xe9 activ\xe9 \xe0 l'aide de l'option pr\xe9c\xe9dente, cette option n'aura pas d'effet."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xe9sactiv\xe9 pour tous"})," : Cette option d\xe9sactive le contr\xf4le dans les formules. Lorsque cette option est coch\xe9e, les utilisateurs ont acc\xe8s \xe0 l'ensemble des commandes, plug-ins et m\xe9thodes projets (\xe0 l'exception de ceux qui sont invisibles). ",(0,i.jsx)(s.strong,{children:"Note :"})," Cette option est prioritaire sur la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"}),". Lorsqu'elle est coch\xe9e, cette commande ne fait rien."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Autoriser les propri\xe9t\xe9s utilisateur"})," : Vous devez cocher cette option si vous souhaitez utiliser la fonctionnalit\xe9 d\u2019externalisation des propri\xe9t\xe9s utilisateur. Lorsque cette option est coch\xe9e, jusqu'\xe0 trois bo\xeetes de dialogue sont disponibles pour d\xe9finir les propri\xe9t\xe9s : ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s structure"}),", ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"}),", et ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es"}),". For more information, refer to ",(0,i.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings",children:"User settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:'Ex\xe9cuter la m\xe9thode "Sur \xe9v\xe9nement base h\xf4te" des composants'})," : La m\xe9thode base ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.fe.html",children:"Sur \xe9v\xe9nement base h\xf4te"})," permet de faciliter les phases d\u2019initialisation et de sauvegarde des composants 4D. Pour des raisons de s\xe9curit\xe9, vous devez autoriser explicitement l\u2019ex\xe9cution de cette m\xe9thode dans chaque base h\xf4te. Pour cela, vous devez cocher l'option. Cette option n'est pas coch\xe9e par d\xe9faut."]}),"\n",(0,i.jsx)(s.p,{children:"Lorsque cette option est coch\xe9e :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"les composants 4D sont charg\xe9s,"}),"\n",(0,i.jsxs)(s.li,{children:["chaque m\xe9thode base ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.fe.html",children:"Sur \xe9v\xe9nement base h\xf4te"})," des composants (s'il y en a) est appel\xe9e par la base h\xf4te,"]}),"\n",(0,i.jsx)(s.li,{children:"le code de la m\xe9thode est ex\xe9cut\xe9."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Lorsque cette option n\u2019est pas coch\xe9e :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"les composants 4D sont charg\xe9s mais ils doivent g\xe9rer eux-m\xeames leurs phases d\u2019initialisation et de sauvegarde."}),"\n",(0,i.jsx)(s.li,{children:"le d\xe9veloppeur du composant doit publier les m\xe9thodes du composant qui doivent \xeatre appel\xe9es par la base h\xf4te lors de ces phases (d\xe9marrage et fermeture)"}),"\n",(0,i.jsx)(s.li,{children:"le d\xe9veloppeur de la base h\xf4te doit appeler les m\xe9thodes appropri\xe9es du composant au bon moment (doit \xeatre expos\xe9 dans la documentation du composant)."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return r}});var n=t(667294);let i={},o=n.createContext(i);function r(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);