"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69862"],{319739:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/open-database","title":"OPEN DATABASE","description":"OPEN DATABASE ( cheminFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-database.md","sourceDirName":"commands-legacy","slug":"/commands/open-database","permalink":"/docs/fr/commands/open-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-database","title":"OPEN DATABASE","slug":"/commands/open-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATA FILE","permalink":"/docs/fr/commands/open-data-file"},"next":{"title":"Open datastore","permalink":"/docs/fr/commands/open-datastore"}}'),a=s("785893"),r=s("250065");let d={id:"open-database",title:"OPEN DATABASE",slug:"/commands/open-database",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Note",id:"note",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OPEN DATABASE"})," ( ",(0,a.jsx)(n.em,{children:"cheminFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"cheminFichier"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nom ou chemin d'acc\xe8s complet du fichier de base de donn\xe9es \xe0 ouvrir (.4db, .4dc, .4dbase ou .4dlink)"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"OPEN DATABASE"})," referme la base de donn\xe9es 4D courante et ouvre \xe0 la vol\xe9e la base d\xe9sign\xe9e par le param\xe8tre ",(0,a.jsx)(n.em,{children:"cheminFichier"}),". Cette commande est utile dans le cadre de tests automatiques, pour rouvrir une base apr\xe8s compilation, ou pour permettre \xe0 une application 4D fusionn\xe9e de s\xe9lectionner le serveur de la base auquel se connecter."]}),"\n",(0,a.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"filePath"}),", passez le nom le chemin d'acc\xe8s complet de la base de donn\xe9es \xe0 ouvrir. Vous pouvez utiliser un fichier ayant l'une des extensions suivantes :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:".4db (fichier de structure interpr\xe9t\xe9),"}),"\n",(0,a.jsx)(n.li,{children:".4dc (fichier de structure compil\xe9),"}),"\n",(0,a.jsx)(n.li,{children:".4dbase (package macOS),"}),"\n",(0,a.jsx)(n.li,{children:".4dproject (fichier de la base projet)"}),"\n",(0,a.jsx)(n.li,{children:".4dz (fichier de d\xe9ploiement des bases projets)"}),"\n",(0,a.jsx)(n.li,{children:".4dlink (fichier de raccourci)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Si vous passez uniquement un nom de fichier, il doit \xeatre plac\xe9 au m\xeame niveau que le fichier de structure de la base courante."}),"\n",(0,a.jsxs)(n.p,{children:["Si le chemin d'acc\xe8s est valide, 4D quitte la base ouverte et ouvre la base sp\xe9cifi\xe9e. En mode monoposte, la ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})," de la base referm\xe9e et la ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"})," (ou la ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),") de la base ouverte sont successivement appel\xe9es."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Attention :"})," Comme la commande entra\xeene la fermeture de l'application courant avant d'ouvrir la base sp\xe9cifi\xe9e, il est g\xe9n\xe9ralement d\xe9conseill\xe9 de l'appeler dans la ou dans une m\xe9thode appel\xe9e par cette m\xe9thode base."]}),"\n",(0,a.jsxs)(n.p,{children:["La commande est ex\xe9cut\xe9e de mani\xe8re asynchrone : apr\xe8s son appel, 4D continue d'ex\xe9cuter le reste de la m\xe9thode. Ensuite, l'application se comporte comme si la commande ",(0,a.jsx)(n.strong,{children:"Quitter"})," du menu ",(0,a.jsx)(n.strong,{children:"Fichier"})," avait \xe9t\xe9 s\xe9lectionn\xe9e : les bo\xeetes de dialogue d'ouverture sont annul\xe9es, tous les process ouverts sont tenus de se terminer en moins de dix secondes, etc."]}),"\n",(0,a.jsx)(n.p,{children:"Si le fichier de base cible n'est pas trouv\xe9 ou est invalide, une erreur syst\xe8me standard du gestionnaire de fichiers est retourn\xe9e et 4D ne fait rien."}),"\n",(0,a.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN DATABASE("C:\\\\databases\\\\Invoices\\\\Invoices.4db")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsxs)(n.p,{children:["Vous souhaitez s\xe9lectionner un serveur au d\xe9marrage, \xe0 partir d'une application monoposte. Vous pouvez ex\xe9cuter ce code avec un process lanc\xe9 par la ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $xml : Text\n\xa0$xml:=""\n\xa0$databaseName:="myServer"\n\xa0$IP:="192.168.6.7:19813"\n\xa0\n\xa0If(Shift down)\n\xa0\xa0\xa0\xa0$IP:=Request("Adresse IP \xe0 connecter \xe0 "+$databaseName;$IP)\n\xa0Else\n\xa0\xa0\xa0\xa0ok:=1\n\xa0End if\n\xa0\n\xa0If(ok=1)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{databaseName}";$databaseName)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{IP}";$IP)\n\xa0\xa0\xa0\xa0var $link : Object\n\xa0\xa0\xa0\xa0$link:=Folder(fk user preferences folder).file("server.4dlink")\n\xa0\xa0\xa0\xa0$link.setText($xml)\n\xa0\xa0\xa0\xa0OPEN DATABASE($link.platformPath)\n\xa0Else\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"1321"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let a={},r=t.createContext(a);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);