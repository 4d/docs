"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67474"],{140164:function(e,s,t){t.r(s),t.d(s,{default:()=>l,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>u});var i=JSON.parse('{"id":"Users/overview","title":"Vue d\u2019ensemble","description":"Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d\'interfaces Web, vous devez contr\xf4ler ses acc\xe8s ou proposer diff\xe9rentes fonctionnalit\xe9s selon les utilisateurs connect\xe9s. Il peut \xeatre \xe9galement essentiel de prot\xe9ger des donn\xe9es importantes. Vous pouvez fournir cette protection en assignant des mots de passe aux utilisateurs et en cr\xe9ant des groupes qui poss\xe8dent des niveaux d\u2019acc\xe8s correspondant \xe0 des degr\xe9s de confidentialit\xe9 diff\xe9rents.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Users/overview.md","sourceDirName":"Users","slug":"/Users/overview","permalink":"/docs/fr/19/Users/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"overview","title":"Vue d\u2019ensemble"},"sidebar":"docs","previous":{"title":"Description des fichiers d\'historique","permalink":"/docs/fr/19/Admin/debugLogFiles"},"next":{"title":"Gestion des groupes et utilisateurs 4D","permalink":"/docs/fr/19/Users/editing"}}'),n=t("785893"),r=t("250065");let o={id:"overview",title:"Vue d\u2019ensemble"},u=void 0,d={},c=[{value:"D\xe9finition des acc\xe8s aux groupes",id:"d\xe9finition-des-acc\xe8s-aux-groupes",level:2},{value:"Activer le contr\xf4le des acc\xe8s",id:"activer-le-contr\xf4le-des-acc\xe8s",level:2},{value:"Utilisateurs et groupes dans l&#39;architecture projet",id:"utilisateurs-et-groupes-dans-larchitecture-projet",level:2},{value:"\xc9diteur de bo\xeete \xe0 outils",id:"\xe9diteur-de-bo\xeete-\xe0-outils",level:2},{value:"Fichier directory.json",id:"fichier-directoryjson",level:2}];function a(e){let s={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contr\xf4ler ses acc\xe8s ou proposer diff\xe9rentes fonctionnalit\xe9s selon les utilisateurs connect\xe9s. Il peut \xeatre \xe9galement essentiel de prot\xe9ger des donn\xe9es importantes. Vous pouvez fournir cette protection en assignant des mots de passe aux utilisateurs et en cr\xe9ant des groupes qui poss\xe8dent des niveaux d\u2019acc\xe8s correspondant \xe0 des degr\xe9s de confidentialit\xe9 diff\xe9rents."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Consultez le document ",(0,n.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"})," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"d\xe9finition-des-acc\xe8s-aux-groupes",children:"D\xe9finition des acc\xe8s aux groupes"}),"\n",(0,n.jsx)(s.p,{children:"Le syst\xe8me de gestion des acc\xe8s de 4D est bas\xe9 sur les notions d\u2019utilisateurs et de groupes. Cr\xe9ez des noms d\u2019utilisateurs et affectez-leur un mot de passe, placez les utilisateurs dans des groupes, et assignez \xe0 chaque groupe les privil\xe8ges d\u2019acc\xe8s appropri\xe9s aux objets de l'application."}),"\n",(0,n.jsx)(s.p,{children:"Les groupes peuvent alors se voir affecter des privil\xe8ges d'acc\xe8s \xe0 des parties sp\xe9cifiques ou des fonctionnalit\xe9s de l'application (acc\xe8s au mode D\xe9veloppement, serveur HTTP, serveur SQL, etc.), ou \xe0 toute partie personnalis\xe9e."}),"\n",(0,n.jsx)(s.p,{children:"L'exemple suivant pr\xe9sente les droits d'acc\xe8s \xe0 l'explorateur d'ex\xe9cution et au D\xe9veloppement assign\xe9s au groupe \"Devs\" :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(974753).Z+"",width:"552",height:"121"})}),"\n",(0,n.jsx)(s.h2,{id:"activer-le-contr\xf4le-des-acc\xe8s",children:"Activer le contr\xf4le des acc\xe8s"}),"\n",(0,n.jsxs)(s.p,{children:["Le contr\xf4le effectif des acc\xe8s par mots de passe de 4D est activ\xe9 par ",(0,n.jsx)(s.strong,{children:"l\u2019affectation d\u2019un mot de passe au Super_Utilisateur"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Tant que le Super_Utilisateur n\u2019a pas de mot de passe, 4D permet \xe0 tout utilisateur d\u2019acc\xe9der \xe0 toutes les parties de l'application, m\xeame si vous avez d\xe9fini des utilisateurs et des groupes (\xe0 l'ouverture de l'application, aucune identification n'est requise). N'importe quelle partie de l'application peut \xeatre ouverte."}),"\n",(0,n.jsx)(s.p,{children:"Lorsqu\u2019un mot de passe est affect\xe9 au Super_Utilisateur, tous les privil\xe8ges d\u2019acc\xe8s que vous avez affect\xe9s prennent effet. Pour pouvoir utiliser l'application, les utilisateurs distants doivent alors saisir un mot de passe."}),"\n",(0,n.jsx)(s.p,{children:"Pour d\xe9sactiver le syst\xe8me de restriction d\u2019acc\xe8s, il suffit de supprimer (mettre \xe0 blanc) le mot de passe du Super_Utilisateur."}),"\n",(0,n.jsx)(s.h2,{id:"utilisateurs-et-groupes-dans-larchitecture-projet",children:"Utilisateurs et groupes dans l'architecture projet"}),"\n",(0,n.jsx)(s.p,{children:"Dans les applications projet (fichiers .4DProject ou .4dz), les utilisateurs et groupes 4D peuvent \xeatre configur\xe9s \xe0 la fois en monoposte ou en client-serveur. Toutefois, le contr\xf4le d'acc\xe8s ne prend effet qu'avec 4D Server. Le tableau suivant liste les principales fonctionnalit\xe9s des utilisateurs et groupes ainsi que leur disponibilit\xe9 :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"4D (monoposte)"}),(0,n.jsx)(s.th,{children:"4D Server"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Ajouter/modifier des utilisateurs et groupes"}),(0,n.jsx)(s.td,{children:"oui"}),(0,n.jsx)(s.td,{children:"oui"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Affecter l'acc\xe8s des utilisateurs/groupes aux serveurs"}),(0,n.jsx)(s.td,{children:"oui"}),(0,n.jsx)(s.td,{children:"oui"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Identification de l'utilisateur"}),(0,n.jsx)(s.td,{children:"non (tous les utilisateurs sont des Super_Utilisateur)"}),(0,n.jsx)(s.td,{children:"oui"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Contr\xf4le d'acc\xe8s une fois qu'un mot de passe a \xe9t\xe9 affect\xe9 au Super_Utilisateur"}),(0,n.jsx)(s.td,{children:"non (tous les acc\xe8s sont accord\xe9s au Super_Utilisateur)"}),(0,n.jsx)(s.td,{children:"oui"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\xe9diteur-de-bo\xeete-\xe0-outils",children:"\xc9diteur de bo\xeete \xe0 outils"}),"\n",(0,n.jsx)(s.p,{children:"Les \xe9diteurs des utilisateurs et groupes sont plac\xe9s dans la bo\xeete \xe0 outils de 4D. Ces \xe9diteurs peuvent \xeatre utilis\xe9s pour la cr\xe9ation d'utilisateurs et de groupes, l'affectation de mots de passe aux utilisateurs, le placement d'utilisateurs dans des groupes, etc."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(817334).Z+"",width:"778",height:"276"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["L'\xe9diteur d'utilisateurs et de groupes peut s'afficher \xe0 l'ex\xe9cution \xe0 l'aide de la commande ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html",children:"EDIT ACCESS"}),". L'ensemble de la configuration des utilisateurs et des groupes peut \xe9galement \xeatre modifi\xe9e pendant l'ex\xe9cution de l'application \xe0 l'aide des commandes 4D du th\xe8me ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html",children:"Utilisateurs et groupes"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"fichier-directoryjson",children:"Fichier directory.json"}),"\n",(0,n.jsxs)(s.p,{children:["Les utilisateurs, les groupes ainsi que leurs droits d'acc\xe8s sont stock\xe9s dans un fichier sp\xe9cifique du projet nomm\xe9 ",(0,n.jsx)(s.strong,{children:"directory.json"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Ce fichier peut \xeatre stock\xe9 dans les emplacements suivants :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'dans le dossier de propri\xe9t\xe9s utilisateur, c\'est-\xe0-dire le dossier "Settings", au m\xeame niveau que le dossier "Project". Ces propri\xe9t\xe9s sont utilis\xe9es par d\xe9faut dans l\'application.'}),"\n",(0,n.jsxs)(s.li,{children:['dans le dossier de propri\xe9t\xe9s des donn\xe9es, c\'est-\xe0-dire dans le dossier "Settings" du dossier "Data". Si un fichier ',(0,n.jsx)(s.strong,{children:"directory.json"})," se trouve \xe0 cet emplacement, il est prioritaire par rapport au fichier du dossier Settings utilisateur. Cette fonctionnalit\xe9 vous permet de d\xe9finir des configurations Utilisateurs et Groupes personnalis\xe9es/locales. La configuration personnalis\xe9e ne sera pas affect\xe9e par des mises \xe0 niveau de l'application."]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Si la gestion de l'acc\xe8s au mot de passe 4D est inactive, le fichier ",(0,n.jsx)(s.strong,{children:"directory.json"})," n'est pas cr\xe9\xe9."]}),"\n"]})]})}function l(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},974753:function(e,s,t){t.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},817334:function(e,s,t){t.d(s,{Z:function(){return i}});let i=t.p+"assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png"},250065:function(e,s,t){t.d(s,{Z:function(){return u},a:function(){return o}});var i=t(667294);let n={},r=i.createContext(n);function o(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);