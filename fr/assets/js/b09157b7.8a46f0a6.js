"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7489"],{423255:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"ORDA/privileges","title":"Privil\xe8ges","description":"La protection des donn\xe9es tout en permettant un acc\xe8s rapide et facile aux utilisateurs autoris\xe9s est un d\xe9fi majeur pour les applications Web. L\'architecture de s\xe9curit\xe9 ORDA est impl\xe9ment\xe9e au c\u0153ur de votre datastore et vous permet de d\xe9finir des privil\xe8ges sp\xe9cifiques \xe0 toutes les sessions utilisateur web ou REST pour les diff\xe9rentes ressources de votre projet (datastore, dataclasses, fonctions, etc.).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ORDA/privileges.md","sourceDirName":"ORDA","slug":"/ORDA/privileges","permalink":"/docs/fr/20-R7/ORDA/privileges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"privileges","title":"Privil\xe8ges"},"sidebar":"docs","previous":{"title":"Datastores distants","permalink":"/docs/fr/20-R7/ORDA/datastores"},"next":{"title":"Optimisation client/serveur","permalink":"/docs/fr/20-R7/ORDA/client-server-optimization"}}'),r=n("785893"),t=n("250065");let l={id:"privileges",title:"Privil\xe8ges"},d=void 0,o={},c=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3},{value:"Resources",id:"resources",level:2},{value:"Actions de permission",id:"actions-de-permission",level:2},{value:"Privil\xe8ges et R\xf4les",id:"privil\xe8ges-et-r\xf4les",level:2},{value:"Exemple",id:"exemple",level:3},{value:"<code>roles.json</code>",id:"rolesjson",level:2},{value:"Fichier par d\xe9faut",id:"fichier-par-d\xe9faut",level:3},{value:"Syntaxe",id:"syntaxe",level:3},{value:"<code>Roles_Errors.json</code>",id:"roles_errorsjson",level:3},{value:"Exemple de configuration de privil\xe8ges",id:"exemple-de-configuration-de-privil\xe8ges",level:2}];function a(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"La protection des donn\xe9es tout en permettant un acc\xe8s rapide et facile aux utilisateurs autoris\xe9s est un d\xe9fi majeur pour les applications Web. L'architecture de s\xe9curit\xe9 ORDA est impl\xe9ment\xe9e au c\u0153ur de votre datastore et vous permet de d\xe9finir des privil\xe8ges sp\xe9cifiques \xe0 toutes les sessions utilisateur web ou REST pour les diff\xe9rentes ressources de votre projet (datastore, dataclasses, fonctions, etc.)."}),"\n",(0,r.jsx)(s.h2,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,r.jsx)(s.p,{children:"L'architecture de s\xe9curit\xe9 ORDA est bas\xe9e sur les concepts de privil\xe8ges, d'actions de permission (lecture, cr\xe9ation, etc.) et de ressources."}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque les utilisateurs web ou REST sont enregistr\xe9s, leur session est automatiquement charg\xe9e avec les privil\xe8ges associ\xe9s. Les privil\xe8ges sont assign\xe9s \xe0 la session en utilisant la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/API/SessionClass#setprivileges",children:(0,r.jsx)(s.code,{children:"session.setPrivileges()"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Chaque requ\xeate utilisateur envoy\xe9e dans la session est \xe9valu\xe9e par rapport aux privil\xe8ges d\xe9finis dans le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," du projet."]}),"\n",(0,r.jsx)(s.p,{children:"Si un utilisateur tente d'ex\xe9cuter une action et ne dispose pas des droits d'acc\xe8s appropri\xe9s, une erreur de privil\xe8ge est g\xe9n\xe9r\xe9e ou, en cas de permission de lecture manquante sur les attributs, ils ne sont pas envoy\xe9s."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"schema",src:n(436963).Z+"",width:"960",height:"540"})}),"\n",(0,r.jsx)(s.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(s.p,{children:["Pour un aper\xe7u d\xe9taill\xe9 de l'architecture des permissions, veuillez lire l'article de blog ",(0,r.jsx)(s.a,{href:"https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/",children:(0,r.jsx)(s.strong,{children:"Filtrer l'acc\xe8s \xe0 vos donn\xe9es avec un syst\xe8me complet de permissions"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez assigner des actions de permission sp\xe9cifiques aux ressources suivantes dans votre projet :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"le datastore"}),"\n",(0,r.jsx)(s.li,{children:"une dataclass"}),"\n",(0,r.jsx)(s.li,{children:"un attribut (y compris calcul\xe9 et alias)"}),"\n",(0,r.jsx)(s.li,{children:"une fonction de classe du mod\xe8le de donn\xe9es"}),"\n",(0,r.jsxs)(s.li,{children:["une fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/singleton",children:"singleton"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Chaque fois qu'on acc\xe8de \xe0 une ressource dans une session (quelle que soit la mani\xe8re dont on y acc\xe8de), 4D v\xe9rifie que la session dispose des autorisations appropri\xe9es et rejette l'acc\xe8s s'il n'est pas autoris\xe9."}),"\n",(0,r.jsx)(s.p,{children:"Une action de permission d\xe9finie \xe0 un certain niveau est h\xe9rit\xe9e par d\xe9faut aux niveaux inf\xe9rieurs, mais plusieurs niveaux de permissions peuvent \xeatre d\xe9finis :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Une action de permission d\xe9finie au niveau du datastore est automatiquement assign\xe9e \xe0 toutes les dataclass."}),"\n",(0,r.jsx)(s.li,{children:"Une action de permission d\xe9finie au niveau dataclass remplace le param\xe9trage du datastore (le cas \xe9ch\xe9ant). Par d\xe9faut, tous les attributs de la dataclass h\xe9ritent des permissions de la dataclass."}),"\n",(0,r.jsx)(s.li,{children:'Contrairement aux permissions des dataclass, une action de permission d\xe9finie au niveau de l\'attribut ne remplace pas la permission de la dataclass parente, mais y est ajout\xe9e. Par exemple, si vous avez attribu\xe9 le privil\xe8ge "g\xe9n\xe9ral" \xe0 une dataclass et le privil\xe8ge "d\xe9tail" \xe0 un attribut de la dataclass, les deux privil\xe8ges, "g\xe9n\xe9ral" et "d\xe9tail", doivent \xeatre d\xe9finis dans la session afin d\'acc\xe9der \xe0 l\'attribut.'}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Les permissions contr\xf4lent l'acc\xe8s aux objets ou fonctions du datastore. Si vous voulez filtrer les donn\xe9es de lecture selon certains crit\xe8res, vous pouvez envisager d'utiliser les ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/entities#restricting-entity-selections",children:"entity selections restreintes"})," qui peuvent \xeatre plus appropri\xe9es dans ce cas."]})}),"\n",(0,r.jsx)(s.h2,{id:"actions-de-permission",children:"Actions de permission"}),"\n",(0,r.jsx)(s.p,{children:"Les actions disponibles sont li\xe9es \xe0 la ressource cible."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Actions"}),(0,r.jsx)(s.th,{children:"datastore"}),(0,r.jsx)(s.th,{children:"dataclass"}),(0,r.jsx)(s.th,{children:"attribut"}),(0,r.jsx)(s.th,{children:"fonction du mod\xe8le de donn\xe9es ou fonction singleton"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"create"})}),(0,r.jsx)(s.td,{children:"Cr\xe9er une entit\xe9 dans n'importe quelle dataclass"}),(0,r.jsx)(s.td,{children:"Cr\xe9er une entit\xe9 dans cette dataclass"}),(0,r.jsx)(s.td,{children:"Cr\xe9er une entit\xe9 avec une valeur diff\xe9rente de la valeur par d\xe9faut autoris\xe9e pour cet attribut (ignor\xe9 pour les attributs alias)."}),(0,r.jsx)(s.td,{children:"n/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"read"})}),(0,r.jsx)(s.td,{children:"Lire les attributs de n'importe quelle dataclass"}),(0,r.jsx)(s.td,{children:"Lire les attributs de cette dataclass"}),(0,r.jsx)(s.td,{children:"Lire ce contenu d'attribut"}),(0,r.jsx)(s.td,{children:"n/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"update"})}),(0,r.jsx)(s.td,{children:"Mettre \xe0 jour les attributs dans n'importe quelle dataclass."}),(0,r.jsx)(s.td,{children:"Mettre \xe0 jour les attributs de cette dataclass."}),(0,r.jsx)(s.td,{children:"Mettre \xe0 jour le contenu de cet attribut (ignor\xe9 pour les attributs alias)."}),(0,r.jsx)(s.td,{children:"n/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"drop"})}),(0,r.jsx)(s.td,{children:"Supprimer des donn\xe9es dans n'importe quelle dataclass."}),(0,r.jsx)(s.td,{children:"Supprimer des donn\xe9es dans cette dataclass."}),(0,r.jsx)(s.td,{children:"Supprimer une valeur non nulle pour cet attribut (sauf pour les attributs alias et calcul\xe9s)."}),(0,r.jsx)(s.td,{children:"n/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"execute"})}),(0,r.jsx)(s.td,{children:"Ex\xe9cuter n'importe quelle fonction du projet (datastore, dataclass, entity selection, entity)"}),(0,r.jsx)(s.td,{children:"Ex\xe9cuter n'importe quelle fonction de dataclass. Les fonctions de dataclass, d'entit\xe9 et d'entity selection sont consid\xe9r\xe9es comme des fonctions de dataclass"}),(0,r.jsx)(s.td,{children:"n/a"}),(0,r.jsx)(s.td,{children:"Ex\xe9cuter cette fonction"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"promote"})}),(0,r.jsx)(s.td,{children:"n/a"}),(0,r.jsx)(s.td,{children:"n/a"}),(0,r.jsx)(s.td,{children:"n/a"}),(0,r.jsx)(s.td,{children:"Associe un privil\xe8ge donn\xe9 lors de l'ex\xe9cution de la fonction. Le privil\xe8ge est temporairement ajout\xe9 \xe0 la session et supprim\xe9 \xe0 la fin de l'ex\xe9cution de la fonction. Par mesure de s\xe9curit\xe9, seul le process ex\xe9cutant la fonction re\xe7oit le privil\xe8ge, et non toute la session."})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Un alias peut \xeatre lu d\xe8s que les privil\xe8ges de session permettent l'acc\xe8s \xe0 l'alias lui-m\xeame, m\xeame si les privil\xe8ges de session ne permettent pas l'acc\xe8s aux attributs r\xe9solvant l'alias."}),"\n",(0,r.jsx)(s.li,{children:"Il est possible d'acc\xe9der \xe0 un attribut calcul\xe9 m\xeame s'il n'y a pas de permissions sur les attributs sur lesquels il est construit."}),"\n",(0,r.jsxs)(s.li,{children:["Vous pouvez assigner une action de permission \xe0 une classe singleton (type ",(0,r.jsx)(s.code,{children:"singleton"}),"), auquel cas elle sera appliqu\xe9e \xe0 toutes ses fonctions expos\xe9es, ou bien \xe0 une fonction de singleton (type ",(0,r.jsx)(s.code,{children:"singletonMethod"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:["Valeurs par d\xe9faut : dans l'impl\xe9mentation actuelle, seul ",(0,r.jsx)(s.em,{children:"Null"})," est disponible en tant que valeur par d\xe9faut."]}),"\n",(0,r.jsxs)(s.li,{children:["En mode REST ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/authUsers#force-login-mode",children:"force login"}),", la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/authUsers#function-authentify",children:(0,r.jsx)(s.code,{children:"authentify()"})})," est toujours ex\xe9cutable par les utilisateurs guest, quelle que soit la configuration des permissions."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe9trage des permissions n\xe9cessite d'\xeatre coh\xe9rent, en particulier les permissions ",(0,r.jsx)(s.strong,{children:"update"})," et ",(0,r.jsx)(s.strong,{children:"drop"})," ont \xe9galement besoin d'une permission ",(0,r.jsx)(s.strong,{children:"read"})," (mais ",(0,r.jsx)(s.strong,{children:"create"})," n'en a pas besoin)."]}),"\n",(0,r.jsx)(s.h2,{id:"privil\xe8ges-et-r\xf4les",children:"Privil\xe8ges et R\xf4les"}),"\n",(0,r.jsxs)(s.p,{children:["Un ",(0,r.jsx)(s.strong,{children:"privil\xe8ge"})," est la capacit\xe9 technique d'ex\xe9cuter des ",(0,r.jsx)(s.strong,{children:"actions"})," sur des ",(0,r.jsx)(s.strong,{children:"ressources"}),", tandis qu'un ",(0,r.jsx)(s.strong,{children:"r\xf4le"}),' est un privil\xe8ge public destin\xe9 \xe0 \xeatre utilis\xe9 par un administrateur. Fondamentalement, un r\xf4le rassemble plusieurs privil\xe8ges pour d\xe9finir un profil utilisateur m\xe9tier. Par exemple, "manageInvoices" pourrait \xeatre un privil\xe8ge tandis que "secr\xe9taire" pourrait \xeatre un r\xf4le (qui inclut "manageInvoices" et d\'autres privil\xe8ges).']}),"\n",(0,r.jsx)(s.p,{children:'Un privil\xe8ge ou un r\xf4le peut \xeatre associ\xe9 \xe0 plusieurs combinaisons "action + ressource". Plusieurs privil\xe8ges peuvent \xeatre associ\xe9s \xe0 une action. Un privil\xe8ge peut inclure d\'autres privil\xe8ges.'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Vous ",(0,r.jsx)(s.strong,{children:"cr\xe9ez"})," des privil\xe8ges et/ou des r\xf4les dans le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," (voir ci-dessous). Vous ",(0,r.jsx)(s.strong,{children:"configurez"})," leur port\xe9e en les assignant aux actions de permission appliqu\xe9es aux ressources."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Vous ",(0,r.jsx)(s.strong,{children:"autorisez"})," les privil\xe8ges et/ou les r\xf4les pour chaque session utilisateur \xe0 l'aide de la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/API/SessionClass#setprivileges",children:(0,r.jsx)(s.code,{children:".setPrivileges()"})})," de la classe ",(0,r.jsx)(s.code,{children:"Session"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Pour permettre un r\xf4le dans une session :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,r.jsx)(s.h2,{id:"rolesjson",children:(0,r.jsx)(s.code,{children:"roles.json"})}),"\n",(0,r.jsxs)(s.p,{children:["Le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," d\xe9crit l'ensemble des param\xe8tres de s\xe9curit\xe9 du projet."]}),"\n",(0,r.jsx)(s.h3,{id:"fichier-par-d\xe9faut",children:"Fichier par d\xe9faut"}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque vous cr\xe9ez un projet, un fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," par d\xe9faut est cr\xe9\xe9 \xe0 l'emplacement suivant : ",(0,r.jsx)(s.code,{children:"<project folder>/Project/Sources/"})," (voir la section ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/Project/architecture#sources",children:"Architecture"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Le fichier par d\xe9faut a le contenu suivant :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [\n            {\n                "applyTo": "ds",\n                "type": "datastore",\n                "read": ["none"],\n                "create": ["none"],\n                "update": ["none"],\n                "drop": ["none"],\n                "execute": ["none"],\n                "promote": ["none"]                \n            }\n        ]\n    },\n\n    "forceLogin": true\n\n}\n\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Pour un niveau de s\xe9curit\xe9 maximal, le privil\xe8ge \"none\" est attribu\xe9 \xe0 toutes les permissions du datastore, d\xe9sactivant ainsi l'acc\xe8s aux donn\xe9es pour tout l'objet ",(0,r.jsx)(s.code,{children:"ds"})," par d\xe9faut. Il est recommand\xe9 de ne pas modifier ou utiliser ce privil\xe8ge de verrouillage, mais d'ajouter des permissions sp\xe9cifiques \xe0 chaque ressource que vous souhaitez rendre disponible \xe0 partir de requ\xeates web ou REST (",(0,r.jsx)(s.a,{href:"#example-of-privilege-configuration",children:"voir l'exemple ci-dessous"}),")."]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["Si aucun param\xe8tre sp\xe9cifique n'est d\xe9fini dans le fichier ",(0,r.jsx)(s.code,{children:"roles.json"}),", les acc\xe8s ne sont pas limit\xe9s. Cette configuration vous permet de d\xe9velopper l'application sans avoir \xe0 vous soucier des acc\xe8s, mais est fortement d\xe9conseill\xe9e dans un environnement de production."]})}),"\n",(0,r.jsx)(s.admonition,{title:"Compatibilit\xe9",type:"note",children:(0,r.jsxs)(s.p,{children:["Dans les versions pr\xe9c\xe9dentes, le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," n'\xe9tait pas cr\xe9\xe9 par d\xe9faut. Depuis 4D 20 R6, lors de l'ouverture d'un projet existant qui ne contient pas de fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," ou les param\xe8tres ",(0,r.jsx)(s.code,{children:'"forceLogin" : true'}),", le bouton ",(0,r.jsx)(s.strong,{children:"Activer l'authentification REST via la fonction ds.authentify()"})," est disponible dans la page ",(0,r.jsxs)(s.a,{href:"/docs/fr/20-R7/settings/web#access",children:[(0,r.jsx)(s.strong,{children:"Fonctionnalit\xe9s Web"})," de la bo\xeete de dialogue Param\xe8tres"]}),". Ce bouton met automatiquement \xe0 jour vos param\xe8tres de s\xe9curit\xe9 (vous devrez peut-\xeatre modifier votre code, ",(0,r.jsx)(s.a,{href:"https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/",children:"voir cet article de blog"}),")."]})}),"\n",(0,r.jsx)(s.admonition,{title:"Qodly Studio",type:"note",children:(0,r.jsxs)(s.p,{children:["Dans Qodly Studio for 4D, le mode peut \xeatre d\xe9fini en utilisant l'option ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/qodly-studio#force-login",children:(0,r.jsx)(s.strong,{children:"Force login"})})," dans l'onglet Privileges."]})}),"\n",(0,r.jsx)(s.h3,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,r.jsxs)(s.p,{children:["La syntaxe du fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," est la suivante:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nom de propri\xe9t\xe9"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Obligatoire"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"privileges"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Collection d'objets ",(0,r.jsx)(s.code,{children:"privilege"})]}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges d\xe9finis"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].privilege"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Nom de privil\xe8ge"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].includes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de noms de privil\xe8ges inclus"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"roles"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Collection d'objets ",(0,r.jsx)(s.code,{children:"role"})]}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de r\xf4les d\xe9finis"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].role"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Nom de r\xf4le"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].privileges"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de noms de privil\xe8ges inclus"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"permissions"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Liste d'actions autoris\xe9es"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"allowed"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Collection d'objets ",(0,r.jsx)(s.code,{children:"permission"})]}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de permissions autoris\xe9es"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].applyTo"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsxs)(s.td,{children:["Nom de ",(0,r.jsx)(s.a,{href:"#resources",children:"ressource"})," cible"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].type"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsxs)(s.td,{children:["Type de ",(0,r.jsx)(s.a,{href:"#ressources",children:"ressource"}),' : "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton"']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].read"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].create"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].update"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].drop"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].execute"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"[].promote"}),(0,r.jsx)(s.td,{children:"Collection de cha\xeenes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Liste de privil\xe8ges"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"forceLogin"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["True pour activer le ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/authUsers#force-login-mode",children:'mode "forceLogin"'})]})]})]})]}),"\n",(0,r.jsx)(s.admonition,{title:"Rappel",type:"caution",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Le nom de privil\xe8ge \"WebAdmin\" est r\xe9serv\xe9 \xe0 l'application. Il est d\xe9conseill\xe9 d'utiliser ce nom pour les privil\xe8ges personnalis\xe9s."}),"\n",(0,r.jsxs)(s.li,{children:["Les noms ",(0,r.jsx)(s.code,{children:"privileges"})," et ",(0,r.jsx)(s.code,{children:"roles"})," sont insensibles \xe0 la casse."]}),"\n"]})}),"\n",(0,r.jsx)(s.h3,{id:"roles_errorsjson",children:(0,r.jsx)(s.code,{children:"Roles_Errors.json"})}),"\n",(0,r.jsxs)(s.p,{children:["Le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," est analys\xe9 par 4D au d\xe9marrage. Vous devez red\xe9marrer l'application pour que les modifications dans ce fichier soient prises en compte."]}),"\n",(0,r.jsxs)(s.p,{children:["En cas d'erreur(s) lors de l'analyse du fichier ",(0,r.jsx)(s.code,{children:"roles.json"}),", 4D charge le projet mais d\xe9sactive la protection globale d'acc\xe8s - cela permet au d\xe9veloppeur d'acc\xe9der aux fichiers et de corriger l'erreur. Un fichier d'erreur nomm\xe9 ",(0,r.jsx)(s.code,{children:"Roles_Errors.json"})," est g\xe9n\xe9r\xe9 dans le ",(0,r.jsxs)(s.a,{href:"/docs/fr/20-R7/Project/architecture#logs",children:["dossier ",(0,r.jsx)(s.code,{children:"Logs"})," du projet"]})," et d\xe9crit les lignes d'erreur. Ce fichier est automatiquement supprim\xe9 lorsque le fichier ",(0,r.jsx)(s.code,{children:"roles.json"})," ne contient plus d'erreur."]}),"\n",(0,r.jsxs)(s.p,{children:["Il est recommand\xe9 de v\xe9rifier au d\xe9marrage si un fichier ",(0,r.jsx)(s.code,{children:"Roles_Errors.json"})," existe dans le dossier [Logs](.. Project/architecture.md#logs), ce qui signifie qu'il y a eu une erreur d'analyse et que les acc\xe8s ne seront pas limit\xe9s. Vous pouvez \xe9crire par exemple :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // vous pouvez emp\xeacher l\'ouverture du projet\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-de-configuration-de-privil\xe8ges",children:"Exemple de configuration de privil\xe8ges"}),"\n",(0,r.jsxs)(s.p,{children:['La bonne pratique est de garder verrouill\xe9s tous les acc\xe8s aux donn\xe9es par d\xe9faut gr\xe2ce au privil\xe8ge "none" et de configurer le fichier ',(0,r.jsx)(s.code,{children:"roles.json"})," pour n'ouvrir que les parties contr\xf4l\xe9es aux sessions autoris\xe9es. Par exemple, pour autoriser certains acc\xe8s aux sessions guest :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n  "privileges": [\n    {\n      "privilege": "none",\n      "includes": []\n    }\n  ],\n  "roles": [],\n  "permissions": {\n    "allowed": [\n      {\n        "applyTo": "ds",\n        "type": "datastore",\n        "read": [\n          "none"\n        ],\n        "create": [\n          "none"\n        ],\n        "update": [\n          "none"\n        ],\n        "drop": [\n          "none"\n        ],\n        "execute": [\n          "none"\n        ],\n        "promote": [\n          "none"\n        ]\n      },\n      {\n        "applyTo": "ds.loginAs",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.hasPrivilege",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.clearPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.isGuest",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.getPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.setAllPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "mySingletonClass.createID",\n        "type": "singletonMethod",\n        "execute": [\n          "guest"\n        ]\n      }\n    ]\n  },\n  "forceLogin": true\n}\n'})})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},436963:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var i=n(667294);let r={},t=i.createContext(r);function l(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);