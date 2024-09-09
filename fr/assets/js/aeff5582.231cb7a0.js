/*! For license information please see aeff5582.231cb7a0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26621],{377469:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=n(474848),i=n(28453);const d={id:"architecture",title:"Architecture d'un projet"},t=void 0,l={id:"Project/architecture",title:"Architecture d'un projet",description:"Un projet 4D est compos\xe9 de plusieurs dossiers et fichiers, stock\xe9s dans un dossier racine de projet (dossier package). Par exemple :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/fr/20/Project/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"architecture",title:"Architecture d'un projet"},sidebar:"docs",previous:{title:"Gestion des projets",permalink:"/docs/fr/20/Project/overview"},next:{title:"Documenter un projet",permalink:"/docs/fr/20/Project/documentation"}},c={},o=[{value:"<code>Project</code>",id:"project",level:2},{value:"fichier <code>&lt;applicationName&gt;.4DProject</code>",id:"fichier-applicationname4dproject",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>Methods</code>",id:"methods",level:4},{value:"<code>Classes</code>",id:"classes",level:4},{value:"<code>Formulaires</code>",id:"formulaires",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Data</code>",id:"data",level:2},{value:"<code>Settings</code> (user data)",id:"settings-user-data",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code> (user)",id:"settings-user",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Composants</code>",id:"composants",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"Fichier <code>.gitignore</code> (optionnel)",id:"fichier-gitignore-optionnel",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Un projet 4D est compos\xe9 de plusieurs dossiers et fichiers, stock\xe9s dans un dossier racine de projet (dossier package). Par exemple :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["MyPackage (",(0,r.jsx)(s.em,{children:"dossier racine du projet"}),")\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Composants"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Data"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Logs"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Propri\xe9t\xe9s"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Plugins"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Project"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Sources"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Trash"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Resources"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Propri\xe9t\xe9s"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"userPreferences.jSmith"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"WebFolder"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:['Si votre projet a \xe9t\xe9 converti depuis une base binaire, des dossiers suppl\xe9mentaires peuvent \xeatre pr\xe9sents. Voir "Conversion de bases en projets" sur ',(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"project",children:(0,r.jsx)(s.code,{children:"Project"})}),"\n",(0,r.jsx)(s.p,{children:"La hi\xe9rarchie du dossier Project se pr\xe9sente g\xe9n\xe9ralement comme suit :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["fichier ",(0,r.jsx)(s.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Sources"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Classes"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DatabaseMethods"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Methods"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Formulaires"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Triggers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Trash"})," (le cas \xe9ch\xe9ant)"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"fichier-applicationname4dproject",children:["fichier ",(0,r.jsx)(s.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsx)(s.p,{children:"Le fichier de d\xe9veloppement de projet, utilis\xe9 pour d\xe9signer et lancer le projet. Ce fichier peut \xeatre ouvert par :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"4D"}),"\n",(0,r.jsxs)(s.li,{children:["4D Server (lecture seule, voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/clientServer#opening-a-remote-project",children:"Ouvrir un projet distant"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Dans les projets 4D, le d\xe9veloppement est r\xe9alis\xe9 avec 4D et le d\xe9veloppement multi-utilisateurs est g\xe9r\xe9 par des outils de contr\xf4le de version. 4D Server peut ouvrir des fichiers .4DProject \xe0 des fins de test."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['Ce fichier texte peut \xe9galement contenir des cl\xe9s de configuration, notamment "',(0,r.jsx)(s.a,{href:"/docs/fr/20/Preferences/general#excluding-tokens-in-existing-projects",children:(0,r.jsx)(s.code,{children:'tokenizedText" : false'})}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"sources",children:(0,r.jsx)(s.code,{children:"Sources"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(s.td,{children:"D\xe9finit des tables et des champs"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"folders.json"}),(0,r.jsx)(s.td,{children:"D\xe9finitions des dossiers de l'Explorateur"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"menus.json"}),(0,r.jsx)(s.td,{children:"D\xe9finit les menus"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsxs)(s.td,{children:["Propri\xe9t\xe9s de la base ",(0,r.jsx)(s.em,{children:"Structure"}),". Elles ne sont pas prises en compte si les ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-user",children:"param\xe8tres utilisateur"})})," ou les ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-user-data",children:"param\xe8tres utilisateur pour les donn\xe9es"})})," sont d\xe9finis (voir \xe9galement ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#priorite-des-parametres",children:"Priorit\xe9 des param\xe8tres"}),"). ",(0,r.jsx)(s.strong,{children:"Attention"})," : dans les applications compil\xe9es, les param\xe8tres de structure sont stock\xe9s dans le fichier .4dz (lecture seule). Pour les besoins du d\xe9ploiement, il est n\xe9cessaire d'",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#enabling-user-settings",children:"activer"})," et d'utiliser les ",(0,r.jsx)(s.em,{children:"param\xe8tres utilisateurs"})," ou les ",(0,r.jsx)(s.em,{children:"param\xe8tres utilisateurs pour les donn\xe9es"})," pour d\xe9finir des param\xe8tres personnalis\xe9s."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tips.json"}),(0,r.jsx)(s.td,{children:"D\xe9finit les messages d'aide"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lists.json"}),(0,r.jsx)(s.td,{children:"Listes d\xe9finies"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filters.json"}),(0,r.jsx)(s.td,{children:"Filtres d\xe9finis"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets.css"}),(0,r.jsx)(s.td,{children:"Feuilles de style CSS"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(s.td,{children:"Feuilles de style css sur Windows (\xe0 partir d'une base binaire convertie)"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(s.td,{children:"Feuilles de style css sur Mac (\xe0 partir d'une base binaire convertie)"}),(0,r.jsx)(s.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"databasemethods",children:(0,r.jsx)(s.code,{children:"DatabaseMethods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes base d\xe9finies dans le projet. Un fichier par m\xe9thode base"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"methods",children:(0,r.jsx)(s.code,{children:"Methods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes projet d\xe9finies dans le projet. Un fichier par m\xe9thode"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"classes",children:(0,r.jsx)(s.code,{children:"Classes"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"className"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thode de d\xe9finition de classe utilisateur, permettant d'instancier des objets sp\xe9cifiques. Un fichier par classe, le nom du fichier est le nom de la classe"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"formulaires",children:(0,r.jsx)(s.code,{children:"Formulaires"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Description du formulaire projet"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thode formulaire projet"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Image statique du formulaire projet"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes objet. Un fichier par m\xe9thode objet"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"tableforms",children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Description du formulaire d'entr\xe9e de la table (n \xe9tant le num\xe9ro de table)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Images statiques du formulaire d'entr\xe9e de la table"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thode du formulaire d'entr\xe9e de la table"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes objet du formulaire d'entr\xe9e. Un fichier par m\xe9thode objet"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Description du formulaire de sortie de la table (n \xe9tant le num\xe9ro de table)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Images statiques du formulaire de sortie de la table"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thode du formulaire de sortie de la table"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes objet du formulaire de sortie. Un fichier par m\xe9thode objet"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"triggers",children:(0,r.jsx)(s.code,{children:"Triggers"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["table_",(0,r.jsx)(s.em,{children:"n"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9thodes trigger d\xe9finies dans le projet. Un fichier de trigger par table (n \xe9tant le num\xe9ro de table)"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," The .4dm file extension is a text-based file format, containing the code of a 4D method. Il est compatible avec les outils de contr\xf4le de version."]}),"\n",(0,r.jsx)(s.h3,{id:"trash",children:(0,r.jsx)(s.code,{children:"Trash"})}),"\n",(0,r.jsx)(s.p,{children:"Le dossier Trash contient des m\xe9thodes et des formulaires qui ont \xe9t\xe9 supprim\xe9s du projet (le cas \xe9ch\xe9ant). Il peut contenir les dossiers suivants :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Methods"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Formulaires"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['Dans ces dossiers, les noms des \xe9l\xe9ments supprim\xe9s sont entre parenth\xe8ses, par exemple. "(myMethod).4dm". L\'organisation des dossiers est identique \xe0 celle du dossier ',(0,r.jsx)(s.a,{href:"#sources",children:"Sources"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"deriveddata",children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(s.p,{children:"Le dossier DerivedData contient des donn\xe9es en cache utilis\xe9es en interne par 4D pour optimiser le traitement. Il est automatiquement cr\xe9\xe9 ou recr\xe9\xe9 si n\xe9cessaire. Vous pouvez ignorer ce dossier."}),"\n",(0,r.jsx)(s.h2,{id:"libraries",children:(0,r.jsx)(s.code,{children:"Libraries"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Ce dossier n'est utilis\xe9 que sur macOS."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Le dossier Librairies contient le fichier r\xe9sultant d'une compilation avec le ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Project/compiler#silicon-compiler",children:"compilateur Silicon"})," sur macOS."]}),"\n",(0,r.jsx)(s.h2,{id:"resources",children:(0,r.jsx)(s.code,{children:"Resources"})}),"\n",(0,r.jsxs)(s.p,{children:["Le dossier Resources contient tous les fichiers et dossiers de ressources personnalis\xe9s du projet. Dans ce dossier, vous pouvez placer tous les fichiers n\xe9cessaires \xe0 la traduction ou \xe0 la personnalisation de l'interface de l'application (fichiers image, fichiers texte, fichiers XLIFF, etc.). 4D utilise des m\xe9canismes automatiques pour manipuler le contenu de ce dossier, notamment pour le traitement des fichiers XLIFF et des images statiques. Pour l'utilisation en mode distant, le dossier Resources vous permet de partager des fichiers entre le serveur et tous les ordinateurs clients. Voir le ",(0,r.jsx)(s.em,{children:"Manuel 4D Server - R\xe9f\xe9rence"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"item"})}),(0,r.jsx)(s.td,{children:"Fichiers et dossiers de ressources de la base"}),(0,r.jsx)(s.td,{children:"vari\xe9s"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Images/Library/",(0,r.jsx)(s.em,{children:"item"})]}),(0,r.jsx)(s.td,{children:"Images de la biblioth\xe8que d'images sous forme de fichiers s\xe9par\xe9s(*). Les noms de ces \xe9l\xe9ments deviennent des noms de fichiers. Si un \xe9l\xe9ment dupliqu\xe9 existe, un num\xe9ro est ajout\xe9 au nom."}),(0,r.jsx)(s.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) uniquement si le projet a \xe9t\xe9 export\xe9 depuis une base binaire .4db."}),"\n",(0,r.jsx)(s.h2,{id:"data",children:(0,r.jsx)(s.code,{children:"Data"})}),"\n",(0,r.jsx)(s.p,{children:"Le dossier Data contient le fichier de donn\xe9es ainsi que tous les fichiers et dossiers relatifs aux donn\xe9es."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.4dd(*)"}),(0,r.jsxs)(s.td,{children:["Fichier de donn\xe9es contenant les donn\xe9es saisies dans les enregistrements et toutes les donn\xe9es appartenant aux enregistrements. Lorsque vous ouvrez un projet 4D, l'application ouvre par d\xe9faut le fichier de donn\xe9es courant. Si vous modifiez le nom ou l'emplacement de ce fichier, la bo\xeete de dialogue ",(0,r.jsx)(s.em,{children:"Ouvrir un fichier de donn\xe9es"})," appara\xeet alors pour vous permettre de s\xe9lectionner le fichier de donn\xe9es \xe0 utiliser ou d'en cr\xe9er un nouveau"]}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.journal"}),(0,r.jsx)(s.td,{children:"Cr\xe9\xe9 uniquement lorsque la base de donn\xe9es utilise un fichier journal. Le fichier journal est utilis\xe9 pour assurer la s\xe9curit\xe9 des donn\xe9es entre les sauvegardes. Toutes les op\xe9rations effectu\xe9es sur les donn\xe9es sont enregistr\xe9es s\xe9quentiellement dans ce fichier. Par cons\xe9quent, chaque op\xe9ration sur les donn\xe9es entra\xeene deux actions simultan\xe9es : la premi\xe8re sur les donn\xe9es (l'instruction est ex\xe9cut\xe9e normalement) et la seconde dans le fichier journal (une description de l'op\xe9ration est enregistr\xe9e). Le fichier journal est construit ind\xe9pendamment, sans perturber ni ralentir le travail de l'utilisateur. Une base de donn\xe9es ne peut fonctionner qu'avec un seul fichier journal \xe0 la fois. Le fichier journal enregistre des op\xe9rations telles que des ajouts, des modifications ou des suppressions d'enregistrements, des transactions, etc. Il est g\xe9n\xe9r\xe9 par d\xe9faut lors de la cr\xe9ation d'une base de donn\xe9es."}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.match"}),(0,r.jsx)(s.td,{children:"(interne) UUID correspondant au num\xe9ro de la table"}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) Lorsque le projet est cr\xe9\xe9 depuis une base binaire .4b, le fichier de donn\xe9es demeure inchang\xe9. Ainsi, il peut \xeatre nomm\xe9 diff\xe9remment et plac\xe9 dans un autre emplacement."}),"\n",(0,r.jsxs)(s.h3,{id:"settings-user-data",children:[(0,r.jsx)(s.code,{children:"Settings"})," (user data)"]}),"\n",(0,r.jsxs)(s.p,{children:["Ce dossier contient les ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#user-settings-for-data-file",children:(0,r.jsx)(s.strong,{children:"param\xe8tres utilisateur pour les donn\xe9es"})})," utilis\xe9es pour l'administration de l'application."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Ces param\xe8tres ont la priorit\xe9 sur les ",(0,r.jsx)(s.a,{href:"#settings-user",children:"param\xe8tres utilisateur "})," et sur les ",(0,r.jsx)(s.a,{href:"#sources",children:"param\xe8tres de structure"}),". Voir aussi ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#priorite-des-parametres",children:"Priorit\xe9 des param\xe8tres"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Description des groupes et utilisateurs 4D et de leurs droits d'acc\xe8s lorsque l'application est lanc\xe9e avec ce fichier de donn\xe9es."}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Param\xe8tres de sauvegarde de la base de donn\xe9es, utilis\xe9s pour d\xe9finir les ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Backup/settings",children:"options de sauvegarde"}),") lorsque la base est lanc\xe9e avec ce fichier de donn\xe9es. Les cl\xe9s concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.jsx)(s.em,{children:"Sauvegarde des cl\xe9s XML 4D"}),"."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsx)(s.td,{children:"Propri\xe9t\xe9s de la base personnalis\xe9es pour ce fichier de donn\xe9es."}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"logs",children:(0,r.jsx)(s.code,{children:"Logs"})}),"\n",(0,r.jsx)(s.p,{children:"Le dossier Logs contient tous les fichiers journaux utilis\xe9s par le projet. Les fichiers journaux comprennent notamment :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"conversion de base de donn\xe9es,"}),"\n",(0,r.jsx)(s.li,{children:"requ\xeates de serveur Web,"}),"\n",(0,r.jsxs)(s.li,{children:["journal des activit\xe9s de sauvegarde/restitution (",(0,r.jsx)(s.em,{children:"Journal de sauvegarde[xxx].txt"}),", voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Backup/backup#backup-journal",children:"Journal de sauvegarde"}),")"]}),"\n",(0,r.jsx)(s.li,{children:"d\xe9bogage de commandes,"}),"\n",(0,r.jsx)(s.li,{children:"Requ\xeates 4D Server (g\xe9n\xe9r\xe9es sur les postes clients et sur le serveur)."}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Un dossier Logs suppl\xe9mentaire est disponible dans le dossier des pr\xe9f\xe9rences syst\xe8me de l'utilisateur (dossier 4D actif, voir commande ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page485.html",children:"Get 4D folder"}),") pour les fichiers journaux de maintenance et dans les cas o\xf9 le dossier de donn\xe9es est en lecture seule."]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"settings-user",children:[(0,r.jsx)(s.code,{children:"Settings"})," (user)"]}),"\n",(0,r.jsxs)(s.p,{children:["Ce dossier contient les ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#user-settings",children:"param\xe8tres utilisateur****"})," utilis\xe9s pour l'administration de l'application."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Ces param\xe8tres ont la priorit\xe9 sur les ",(0,r.jsx)(s.a,{href:"#sources",children:"param\xe8tres de structure"}),". Toutefois, s'il existe des ",(0,r.jsx)(s.a,{href:"#settings-user-data",children:"param\xe8tres utilisateur pour les donn\xe9es"}),", ils ont la priorit\xe9 sur ces param\xe8tres utilisateur. Voir aussi ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/user-settings#priorite-des-parametres",children:"Priorit\xe9 des param\xe8tres"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Description des groupes et utilisateurs 4D pour l'application, ainsi que leurs droits d'acc\xe8s"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Param\xe8tres de sauvegarde de la base de donn\xe9es, utilis\xe9s pour d\xe9finir les ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Backup/settings",children:"options de sauvegarde"}),") \xe0 chaque lancement de sauvegarde. Ce fichier peut \xe9galement \xeatre utilis\xe9 pour lire ou d\xe9finir des options suppl\xe9mentaires, telles que la quantit\xe9 d'informations stock\xe9es dans le ",(0,r.jsx)(s.em,{children:"journal de sauvegarde"}),". Les cl\xe9s concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.jsx)(s.em,{children:"Sauvegarde des cl\xe9s XML 4D"}),"."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(s.td,{children:["Fichier de param\xe8tres de g\xe9n\xe9ration, cr\xe9\xe9 automatiquement lors de l'utilisation de la bo\xeete de dialogue du g\xe9n\xe9rateur d'applications ou de la commande ",(0,r.jsx)(s.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsx)(s.td,{children:"Param\xe8tres personnalis\xe9s pour ce projet (tous les fichiers de donn\xe9es)"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"logConfig.json"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20/Debugging/debugLogFiles#using-a-log-configuration-file",children:"Fichier de configuration du journal"})," personnalis\xe9"]}),(0,r.jsx)(s.td,{children:"json"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"userpreferencesusername",children:(0,r.jsx)(s.code,{children:"userPreferences.<userName>"})}),"\n",(0,r.jsx)(s.p,{children:"Ce dossier contient des fichiers qui m\xe9morisent les configurations utilisateur, par exemple la position des points de rupture ou de la fen\xeatre. Vous pouvez simplement ignorer ce dossier. Il contient par exemple :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Contenu"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Format"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodPreferences.json"}),(0,r.jsx)(s.td,{children:"Pr\xe9f\xe9rences de l'\xe9diteur de code de l'utilisateur courant"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Position de la fen\xeatre de l'utilisateur courant pour les m\xe9thodes"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"formWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Position de la fen\xeatre de l'utilisateur courant pour les formulaires"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"workspace.json"}),(0,r.jsx)(s.td,{children:"Liste de fen\xeatres ouvertes : sous macOS, ordre des fen\xeatres \xe0 onglets"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"debuggerCatches.json"}),(0,r.jsx)(s.td,{children:"Appels vers commandes"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"recentTables.json"}),(0,r.jsx)(s.td,{children:"Liste ordon\xe9e de tables"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(s.td,{children:"Chemin de donn\xe9es courant et position de la fen\xeatre principale"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CompilerIntermediateFiles"}),(0,r.jsx)(s.td,{children:"Fichiers interm\xe9diaires r\xe9sultant de la compilation Apple Silicon"}),(0,r.jsx)(s.td,{children:"Folder"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"composants",children:(0,r.jsx)(s.code,{children:"Composants"})}),"\n",(0,r.jsx)(s.p,{children:"Ce dossier contient les composants qui seront disponibles dans le projet d'application. Il doit \xeatre stock\xe9 au m\xeame niveau que le dossier Project."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - \xe0 des fins de d\xe9ploiement : ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Desktop/building#build-component",children:"cr\xe9er le composant"})," et ins\xe9rer le fichier .4dz r\xe9sultant dans un dossier .4dbase dans le dossier Components de l'application h\xf4te."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"plugins",children:(0,r.jsx)(s.code,{children:"Plugins"})}),"\n",(0,r.jsx)(s.p,{children:"Ce dossier contient les plug-ins qui seront disponibles dans le projet d'application. Il doit \xeatre stock\xe9 au m\xeame niveau que le dossier Project."}),"\n",(0,r.jsx)(s.h2,{id:"documentation",children:(0,r.jsx)(s.code,{children:"Documentation"})}),"\n",(0,r.jsx)(s.p,{children:"Ce dossier contient tous les fichiers de documentation (.md) cr\xe9\xe9s pour les \xe9l\xe9ments du projet, tels que les classes, les m\xe9thodes ou les formulaires. Les fichiers de documentation sont g\xe9r\xe9s et affich\xe9s dans l'Explorateur 4D."}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations, reportez-vous \xe0 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Project/documentation",children:"Documenter un projet"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"webfolder",children:(0,r.jsx)(s.code,{children:"WebFolder"})}),"\n",(0,r.jsx)(s.p,{children:"Il s'agit du dossier racine par d\xe9faut du serveur Web 4D pour les pages, les images, etc. Il est automatiquement cr\xe9\xe9 lors du premier lancement du serveur Web."}),"\n",(0,r.jsxs)(s.h2,{id:"fichier-gitignore-optionnel",children:["Fichier ",(0,r.jsx)(s.code,{children:".gitignore"})," (optionnel)"]}),"\n",(0,r.jsxs)(s.p,{children:["Fichier qui sp\xe9cifie les fichiers qui seront ignor\xe9s par git. Vous pouvez inclure un fichier gitignore dans vos projets en utilisant l'option ",(0,r.jsx)(s.strong,{children:"Cr\xe9er un fichier .gitignore"})," sur la page ",(0,r.jsx)(s.strong,{children:"G\xe9n\xe9ral"})," des pr\xe9f\xe9rences. Pour configurer le contenu de ce fichier, voir ",(0,r.jsxs)(s.a,{href:"/docs/fr/20/Preferences/general#create-gitignore-file",children:["Cr\xe9er un fichier ",(0,r.jsx)(s.code,{children:".gitignore"})]}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var r=n(296540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var r,d={},o=null,a=null;for(r in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,r)&&!c.hasOwnProperty(r)&&(d[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===d[r]&&(d[r]=s[r]);return{$$typeof:i,type:e,key:o,ref:a,props:d,_owner:l.current}}s.Fragment=d,s.jsx=o,s.jsxs=o},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var r=n(296540);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);