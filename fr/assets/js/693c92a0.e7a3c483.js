"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29980"],{291460:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>t});var r=JSON.parse('{"id":"Concepts/paths","title":"Chemins d\'acc\xe8s","description":"Les fonctions, propri\xe9t\xe9s et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour cr\xe9er un nouveau fichier dans le dossier Documents de l\'utilisateur courant, vous pouvez \xe9crire :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/paths.md","sourceDirName":"Concepts","slug":"/Concepts/paths","permalink":"/docs/fr/20/Concepts/paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"paths","title":"Chemins d\'acc\xe8s"},"sidebar":"docs","previous":{"title":"Identifiants","permalink":"/docs/fr/20/Concepts/identifiers"},"next":{"title":"ORDA","permalink":"/docs/fr/20/ORDA/overview"}}'),i=n("785893"),l=n("250065");let d={id:"paths",title:"Chemins d'acc\xe8s"},t=void 0,c={},o=[{value:"Chemins des filesystem",id:"chemins-des-filesystem",level:2},{value:"Syntaxe POSIX",id:"syntaxe-posix",level:2},{value:"Syntaxe sp\xe9cifique \xe0 la plate-forme",id:"syntaxe-sp\xe9cifique-\xe0-la-plate-forme",level:2},{value:"Windows",id:"windows",level:3},{value:"Chemins d&#39;acc\xe8s Windows et s\xe9quences d&#39;\xe9chappement",id:"chemins-dacc\xe8s-windows-et-s\xe9quences-d\xe9chappement",level:4},{value:"macOS",id:"macos",level:3},{value:"Chemins absolus et relatifs",id:"chemins-absolus-et-relatifs",level:2},{value:"Constructeurs <code>File</code> et <code>Folder</code>",id:"constructeurs-file-et-folder",level:3},{value:"Fonctions de dossier <code>.file()</code> et <code>.folder()</code>",id:"fonctions-de-dossier-file-et-folder",level:3},{value:"Exemples",id:"exemples",level:2}];function a(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Les fonctions, propri\xe9t\xe9s et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour cr\xe9er un nouveau fichier dans le dossier Documents de l'utilisateur courant, vous pouvez \xe9crire :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,i.jsxs)(s.p,{children:["De plus, les objets fichier et dossier prennent en charge les ",(0,i.jsx)(s.code,{children:"fileSystems"}),", fournissant un chemin contextuel aux principaux dossiers de l'application."]}),"\n",(0,i.jsx)(s.h2,{id:"chemins-des-filesystem",children:"Chemins des filesystem"}),"\n",(0,i.jsxs)(s.p,{children:["4D accepte plusieurs chemins de ",(0,i.jsx)(s.code,{children:"filesystem"})," qui d\xe9signent des dossiers 4D sp\xe9cifiques avec un emplacement variable sur macOS et Windows. Un chemin d'acc\xe8s filesystem est \xe9valu\xe9 par rapport au contexte et est renvoy\xe9 sous forme de chemin absolu."]}),"\n",(0,i.jsx)(s.p,{children:"Les chemins des filesystem sont utiles pour deux raisons principales :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ind\xe9pendance : Vous pouvez d\xe9placer votre solution d'un emplacement \xe0 un autre, ind\xe9pendamment du syst\xe8me d'exploitation, sans vous pr\xe9occuper des chemins,"}),"\n",(0,i.jsx)(s.li,{children:"S\xe9curit\xe9 : Aucun code ne peut acc\xe9der aux \xe9l\xe9ments situ\xe9s au-dessus de la racine des filesystem sur disque (sandboxing)."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Les filesystem suivants sont pris en charge :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"filesystem"}),(0,i.jsx)(s.th,{children:"D\xe9signe"}),(0,i.jsx)(s.th,{children:"Exemple"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/DATA"'}),(0,i.jsx)(s.td,{children:"Dossier data courant"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/LOGS"'}),(0,i.jsx)(s.td,{children:"Dossier Logs"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\Logs\\"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/PACKAGE"'}),(0,i.jsx)(s.td,{children:"Dossier racine du projet (avec ou sans extension 4dbase)"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/PROJECT"'}),(0,i.jsx)(s.td,{children:"Dossier Project"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/RESOURCES"'}),(0,i.jsx)(s.td,{children:"Dossier de ressources du projet courant"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Resources\\"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"/SOURCES"'}),(0,i.jsx)(s.td,{children:"Dossier des sources du projet courant"}),(0,i.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\Sources\\"'})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"syntaxe-posix",children:"Syntaxe POSIX"}),"\n",(0,i.jsxs)(s.p,{children:["La syntaxe POSIX est prise en charge sur toutes les plates-formes. ",(0,i.jsx)(s.strong,{children:"La syntaxe POSIX est recommand\xe9e"})," car elle est la plus flexible. Elle est utilis\xe9e par d\xe9faut (retourn\xe9e par les propri\xe9t\xe9s ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FileClass#path",children:"file.path"})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#path",children:"folder.path"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"Avec cette syntaxe :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'les dossiers sont s\xe9par\xe9s par "/"'}),"\n",(0,i.jsx)(s.li,{children:'les chemins absolus commencent par un "/"'}),"\n",(0,i.jsx)(s.li,{children:'pour remonter d\'un dossier dans un chemin relatif, utilisez "../" devant le nom du chemin (par s\xe9curit\xe9, vous ne pouvez pas remonter au-dessus du filesystem).'}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Dans la syntaxe POSIX, vous utiliserez g\xe9n\xe9ralement les chemins ",(0,i.jsx)(s.code,{children:"filesystem"})," avec les commandes ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FileClass#file",children:(0,i.jsx)(s.code,{children:"File"})})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#folder",children:(0,i.jsx)(s.code,{children:"Folder"})}),", par exemple :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'var $pathFile : 4D.File\nvar $pathFolder : 4D.Folder\n\n$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"syntaxe-sp\xe9cifique-\xe0-la-plate-forme",children:"Syntaxe sp\xe9cifique \xe0 la plate-forme"}),"\n",(0,i.jsxs)(s.p,{children:["La syntaxe sp\xe9cifique \xe0 la plate-forme d\xe9pend du syst\xe8me d'exploitation sur lequel la commande est ex\xe9cut\xe9e. Notez que lorsque vous cr\xe9ez un objet fichier ou dossier avec cette syntaxe, vous devez le d\xe9clarer en utilisant la constante ",(0,i.jsx)(s.code,{children:"fk platform path"})," comme param\xe8tre."]}),"\n",(0,i.jsx)(s.h3,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(s.p,{children:"Les r\xe8gles suivantes sont pris en charge :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'les s\xe9parateurs de dossiers sont ""'}),"\n",(0,i.jsx)(s.li,{children:'le texte contient " :" et "" comme deuxi\xe8me et troisi\xe8me caract\xe8re,'}),"\n",(0,i.jsx)(s.li,{children:'le texte commence par "".'}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Exemples avec ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#folder",children:(0,i.jsx)(s.code,{children:"Folder"})})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,i.jsx)(s.h4,{id:"chemins-dacc\xe8s-windows-et-s\xe9quences-d\xe9chappement",children:"Chemins d'acc\xe8s Windows et s\xe9quences d'\xe9chappement"}),"\n",(0,i.jsxs)(s.p,{children:["Le langage 4D permet l'utilisation de ",(0,i.jsx)(s.a,{href:"/docs/fr/20/Concepts/quick-tour#sequences-dechappement",children:"s\xe9quences d'\xe9chappement"}),". Les s\xe9quences d'\xe9chappement commencent par une barre oblique inverse ",(0,i.jsx)(s.code,{children:"\\"}),", suivie d'un caract\xe8re. Par exemple, ",(0,i.jsx)(s.code,{children:"\\t"})," est la s\xe9quence d'\xe9chappement pour le caract\xe8re ",(0,i.jsx)(s.code,{children:"Tab"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["\xc9tant donn\xe9 que le caract\xe8re ",(0,i.jsx)(s.code,{children:"\\"})," est \xe9galement utilis\xe9 comme s\xe9parateur dans les noms de chemins sous Windows, vous devez saisir un double ",(0,i.jsx)(s.code,{children:"\\\\"})," dans ces noms de chemins."]}),"\n",(0,i.jsx)(s.h3,{id:"macos",children:"macOS"}),"\n",(0,i.jsx)(s.p,{children:"Les r\xe8gles suivantes s'appliquent (syntaxe HFS+) :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'les s\xe9parateurs de dossiers sont ":"'}),"\n",(0,i.jsx)(s.li,{children:'le chemin ne doit pas commencer par un ":"'}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Exemples avec ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#folder",children:(0,i.jsx)(s.code,{children:"Folder"})})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume doit s\'appeler Monday\n'})}),"\n",(0,i.jsx)(s.h2,{id:"chemins-absolus-et-relatifs",children:"Chemins absolus et relatifs"}),"\n",(0,i.jsxs)(s.h3,{id:"constructeurs-file-et-folder",children:["Constructeurs ",(0,i.jsx)(s.code,{children:"File"})," et ",(0,i.jsx)(s.code,{children:"Folder"})]}),"\n",(0,i.jsxs)(s.p,{children:["Les commandes ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FileClass#file",children:(0,i.jsx)(s.code,{children:"File"})})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#folder",children:(0,i.jsx)(s.code,{children:"Folder"})})," n'acceptent que les ",(0,i.jsx)(s.strong,{children:"chemins absolus"}),". Les chemins relatifs ne sont pas pris en charge et provoqueront des erreurs. Par exemple, le code suivant n'est pas autoris\xe9 :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'    //ERROR\n$ko:=Folder("myFolder").create() //nom de chemin relatif avec constructeur\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Si vous souhaitez g\xe9rer des fichiers ou des dossiers situ\xe9s \xe0 diff\xe9rents endroits (dossier de projet, dossiers syst\xe8me, etc.), vous pouvez utiliser ",(0,i.jsx)(s.code,{children:"filesystems"})," (voir ci-dessus). Par exemple, vous pouvez \xe9crire :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() //dossier cr\xe9\xe9 au niveau de la structure\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //fichier cr\xe9\xe9 dans le dossier data\n'})}),"\n",(0,i.jsxs)(s.h3,{id:"fonctions-de-dossier-file-et-folder",children:["Fonctions de dossier ",(0,i.jsx)(s.code,{children:".file()"})," et ",(0,i.jsx)(s.code,{children:".folder()"})]}),"\n",(0,i.jsxs)(s.p,{children:["Les fonctions des objets dossier telles que ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#file",children:(0,i.jsx)(s.code,{children:"folder.file()"})})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/FolderClass#folder-1",children:(0,i.jsx)(s.code,{children:"folder.folder()"})})," attendent des noms de chemin POSIX relatifs. Par exemple :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'var $userImages : 4D.Folder\nvar $ok : Boolean\n\n  //to reference a "Picture" folder within the user documents folder\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //to create a folder on the desktop\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,i.jsx)(s.p,{children:"Les chemins absolus ne sont pas pris en charge et provoqueront des erreurs."}),"\n",(0,i.jsx)(s.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(s.p,{children:"La flexibilit\xe9 des fonctions de fichiers et de dossiers vous offre diverses possibilit\xe9s de manipulation des fichiers et des dossiers, comme dans les exemples suivants :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'var $fold : 4D.Folder\nvar $file : 4D.File\n\n$fold:=Folder(fk desktop folder).folder("archive/jan2019")\n$fold:=Folder("/DATA/archive/jan2019")\n$file:=Folder("/DATA/archive/jan2019").file("total.txt")\n$file:=File("/DATA/info.txt")\n$file:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n$file:=File(fk backup log file)\n'})})]})}function u(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var r=n(667294);let i={},l=r.createContext(i);function d(e){let s=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);