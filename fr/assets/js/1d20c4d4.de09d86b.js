"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99856],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},211628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"cli",title:"Command Line Interface"},o=void 0,s={unversionedId:"Admin/cli",id:"version-20-R4/Admin/cli",title:"Command Line Interface",description:"Vous pouvez utiliser le terminal macOS ou la console Windows pour piloter vos applications 4D (4D, 4D Server, application fusionn\xe9e et tool4d) \xe0 l'aide de lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/docs/fr/20-R4/Admin/cli",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/docs/fr/20-R4/Admin/dataExplorer"},next:{title:"TLS Protocol (HTTPS)",permalink:"/docs/fr/20-R4/Admin/tls"}},d={},u=[{value:"Informations de base",id:"informations-de-base",level:2},{value:"Lancer une application 4D",id:"lancer-une-application-4d",level:2},{value:"Exemples",id:"exemples",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Utilisation de tool4d",id:"utilisation-de-tool4d",level:3},{value:"Fonctionnalit\xe9s 4D d\xe9sactiv\xe9es",id:"fonctionnalit\xe9s-4d-d\xe9sactiv\xe9es",level:3},{value:"4D Server en mode utilitaire",id:"4d-server-en-mode-utilitaire",level:2}],p={toc:u};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vous pouvez utiliser le terminal macOS ou la console Windows pour piloter vos applications 4D (4D, 4D Server, application fusionn\xe9e et ",(0,n.kt)("a",r({parentName:"p"},{href:"#tool4d"}),"tool4d"),") \xe0 l'aide de lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"de lancer une base de donn\xe9es \xe0 distance, ce qui peut \xeatre particuli\xe8rement utile pour administrer des serveurs Web."),(0,n.kt)("li",{parentName:"ul"},"d'ex\xe9cuter des tests automatiques pour vos applications.")),(0,n.kt)("h2",r({},{id:"informations-de-base"}),"Informations de base"),(0,n.kt)("p",null,"Vous pouvez ex\xe9cuter des lignes de commande pour les applications 4D \xe0 l'aide du terminal macOS ou de la console Windows."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS, vous devez utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"open"),"."),(0,n.kt)("li",{parentName:"ul"},"Sous Windows, vous pouvez simplement passer les arguments directement.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, \xe0 l'int\xe9rieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier ",(0,n.kt)("inlineCode",{parentName:"p"},"MyFolder"),", vous devez \xe9crire la ligne de commande comme suit : ",(0,n.kt)("inlineCode",{parentName:"p"},"/MyFolder/4D.app/Contents/MacOS/4D"),". Nous vous recommandons cependant d'utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," chaque fois que vous n'avez pas besoin d'acc\xe9der au flux stderr.")),(0,n.kt)("h2",r({},{id:"lancer-une-application-4d"}),"Lancer une application 4D"),(0,n.kt)("p",null,"Voici une description des lignes de commande et des arguments pris en charge pour lancer les applications 4D."),(0,n.kt)("p",null,"Syntaxe :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] \n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>] \n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Argument","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valeur"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"applicationPath")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin d'acc\xe8s \xe0 4D, 4D Server, application fusionn\xe9e ou tool4d"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance l'application.",(0,n.kt)("br",null),"S'il ne s'agit pas d'une application headless : identique \xe0 un double-clic sur l'application ; lorsqu'elle est appel\xe9e sans argument de fichier de structure, l'application est ex\xe9cut\xe9e et la bo\xeete de dialogue \"s\xe9lectionner une base de donn\xe9es\" appara\xeet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--version")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Affiche la version de l'application et quitte")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--help")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Affiche le message d'aide et quitte. Autres arguments : -?, -h")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--project")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"projectPath ","|"," packagePath ","|"," 4dlinkPath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fichier de projet \xe0 ouvrir avec le fichier de donn\xe9es courant. Aucune bo\xeete de dialogue n'appara\xeet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--data")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dataPath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fichier de donn\xe9es \xe0 ouvrir avec le fichier de projet d\xe9sign\xe9. S'il n'est pas sp\xe9cifi\xe9, le dernier fichier de donn\xe9es ouvert est utilis\xe9.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--opening-mode")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"interpreted ","|"," compiled"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Base de donn\xe9es de requ\xeates \xe0 ouvrir en mode interpr\xe9t\xe9 ou compil\xe9. Aucune erreur n'est g\xe9n\xe9r\xe9e si le mode demand\xe9 n'est pas disponible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--create-data")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cr\xe9e automatiquement un nouveau fichier de donn\xe9es si aucun fichier de donn\xe9es valide n'est trouv\xe9. Aucune bo\xeete de dialogue n'appara\xeet. 4D utilise le nom de fichier pass\xe9 dans l'argument \"--data\" s'il en exise un (g\xe9n\xe8re une erreur si un fichier du m\xeame nom existe d\xe9j\xe0).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--user-param")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cha\xeene utilisateur personnalis\xe9e"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Une cha\xeene qui sera disponible dans l'application par l'interm\xe9diaire de la commande ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get database parameter")),' (la cha\xeene ne doit pas commencer par un caract\xe8re "-", qui est r\xe9serv\xe9).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--headless")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance 4D, 4D Server ou l'application fusionn\xe9e sans interface (mode headless). Dans ce mode :",(0,n.kt)("li",null," Le mode D\xe9veloppement n'est pas disponible, la base de donn\xe9es d\xe9marre en mode Application"),(0,n.kt)("li",null," Aucune barre d'outils, barre de menus, fen\xeatre MDI ou \xe9cran de d\xe9marrage ne s'affiche"),(0,n.kt)("li",null,"Aucune ic\xf4ne n'est affich\xe9e dans le dock ou la barre des t\xe2ches"),(0,n.kt)("li",null,'La base de donn\xe9es ouverte n\'est pas enregistr\xe9e dans le menu "Bases de donn\xe9es r\xe9centes"'),(0,n.kt)("li",null,"Le journal de diagnostic est automatiquement lanc\xe9 (voir ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER"),", s\xe9lecteur 79)"),(0,n.kt)("li",null,"Chaque appel \xe0 une bo\xeete de dialogue est intercept\xe9 et une r\xe9ponse automatique est fournie (par exemple OK pour la commande ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page41.html"}),"ALERT"),", Abort pour un bo\xeete de dialogue d'erreur, etc.). Toutes les commandes intercept\xe9es (*) sont enregistr\xe9es dans le journal de diagnostic."),(0,n.kt)("br",null),"Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte aux flux de sortie standard \xe0 l'aide de la commande ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT"),". A noter que les applications 4D headless ne peuvent \xeatre ferm\xe9es qu'en appelant ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page291.html"}),"QUIT 4D")," ou en utilisant le gestionnaire de t\xe2ches du syst\xe8me d'exploitation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--dataless")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance 4D, 4D Server, une application fusionn\xe9e ou tool4d en mode sans donn\xe9es. Le mode Dataless est utile lorsque 4D ex\xe9cute des t\xe2ches sans donn\xe9es (compilation de projet par exemple). Dans ce mode : ",(0,n.kt)("li",null,"Aucun fichier contenant des donn\xe9es n'est ouvert, m\xeame s'il est sp\xe9cifi\xe9 dans la ligne de commande ou le fichier ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", ou lors de l'utilisation des commandes ",(0,n.kt)("inlineCode",{parentName:"td"},"CREATE DATA FILE")," et ",(0,n.kt)("inlineCode",{parentName:"td"},"OPEN DATA FILE"),"."),(0,n.kt)("li",null,"Les commandes qui manipulent les donn\xe9es g\xe9n\xe9reront une erreur. Par exemple, ",(0,n.kt)("inlineCode",{parentName:"td"},"CREATE RECORD"),' renvoie le message "aucune table \xe0 laquelle appliquer la commande".'),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note")," :",(0,n.kt)("li",null,"S'il est pass\xe9 en ligne de commande, le mode dataless s'applique \xe0 toutes les bases de donn\xe9es ouvertes dans 4D, tant que l'application n'est pas ferm\xe9e."),(0,n.kt)("li",null,"S'il est pass\xe9 \xe0 l'aide du fichier ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", le mode dataless ne s'applique qu'\xe0 la base de donn\xe9es sp\xe9cifi\xe9e dans le fichier",(0,n.kt)("inlineCode",{parentName:"td"}," .4DLink"),". Pour plus d'informations sur les fichiers ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", voir ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/fr/20-R4/GettingStarted/creating#project-opening-shortcuts"}),"Raccourcis d'ouverture de projet"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-file")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin de fichier"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin d'acc\xe8s du fichier personnalis\xe9 WebAdmin ",(0,n.kt)("inlineCode",{parentName:"td"},".4DSettings")," pour le ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/fr/20-R4/Admin/webAdmin"}),"serveur web WebAdmin"),". Non disponible avec ",(0,n.kt)("a",r({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-access-key")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cl\xe9 d'acc\xe8s du ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/fr/20-R4/Admin/webAdmin"}),"serveur web WebAdmin"),". Non disponible avec ",(0,n.kt)("a",r({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-auto-start")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Statut du d\xe9marrage automatique du ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/fr/20-R4/Admin/webAdmin"}),"serveur web WebAdmin"),". Non disponible avec ",(0,n.kt)("a",r({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Stocke la cl\xe9 d'acc\xe8s et les param\xe8tres de d\xe9marrage automatique dans le fichier de param\xe8tres courant (c'est-\xe0-dire le fichier ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/fr/20-R4/Admin/webAdmin#webadmin-settings"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebAdmin.4DSettings"))," par d\xe9faut ou un fichier personnalis\xe9 d\xe9sign\xe9 par le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-path"),"). Utilisez l'argument ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")," pour enregistrer ces param\xe8tres si n\xe9cessaire. Non disponible avec ",(0,n.kt)("a",r({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--utility")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Disponible uniquement avec 4D Server. Lance ",(0,n.kt)("a",r({parentName:"td"},{href:"#4d-server-in-utility-mode"}),"4D Server en mode utilitaire"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--skip-onstartup")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Lance le projet sans ex\xe9cuter aucune m\xe9thode "automatique", y compris les m\xe9thodes base ',(0,n.kt)("inlineCode",{parentName:"td"},"On Startup")," et ",(0,n.kt)("inlineCode",{parentName:"td"},"On Exit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--startup-method")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nom de m\xe9thode projet (cha\xeene)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xe9thode projet \xe0 ex\xe9cuter imm\xe9diatement apr\xe8s la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"td"},"On Startup")," (si elle n'est pas ignor\xe9e avec ",(0,n.kt)("inlineCode",{parentName:"td"},"--skip-onstartup"),").")))),(0,n.kt)("p",null,"(*) Certaines bo\xeetes de dialogue sont affich\xe9es avant l'ouverture de la base de donn\xe9es, de sorte qu'il est impossible d'\xe9crire dans le ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"fichier journal de diagnostic")," (alerte de licence, bo\xeete de dialogue de conversion, s\xe9lection de la base de donn\xe9es, s\xe9lection du fichier de donn\xe9es). Dans ce cas, un message d'erreur est envoy\xe9 \xe0 la fois dans le flux stderr et dans le journal d'\xe9v\xe9nements syst\xe8me, puis l'application se ferme."),(0,n.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Le dossier courant de l\'utilisateur est atteint \xe0 l\'aide de la commande "~" sous macOS et de la commande "%HOMEPATH%" sous Windows.')),(0,n.kt)("p",null,"Lancez une application 4D stock\xe9e sur le bureau :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n')),(0,n.kt)("p",null,"Ouvrez un paquet sur macOS :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--args ~/Documents/myDB.4dbase\n")),(0,n.kt)("p",null,"Ouvrez un fichier de projet :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--args ~/Documents/myProj/Project/myProj.4DProject\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n")),(0,n.kt)("p",null,"Ouvrez un fichier de projet et un fichier de donn\xe9es :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nou :\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n")),(0,n.kt)("p",null,"Ouvrez un fichier .4DLink :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"~/Desktop/MyDatabase.4DLink\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n")),(0,n.kt)("p",null,"Lancez l'application en mode compil\xe9 et cr\xe9er un fichier de donn\xe9es s'il n'est pas disponible :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n")),(0,n.kt)("p",null,"Lancez l'application avec un fichier projet et un fichier de donn\xe9es :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n')),(0,n.kt)("p",null,"Ouverture sans interface (mode headless) :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n")),(0,n.kt)("h2",r({},{id:"tool4d"}),"tool4d"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tool4d")," est une application gratuite, l\xe9g\xe8re et autonome qui vous permet d'ouvrir un projet 4D en mode headless et d'ex\xe9cuter du code 4D \xe0 l'aide de la CLI."),(0,n.kt)("p",null,"tool4d est disponible sur Windows et macOS et est toujours associ\xe9 \xe0 une version de 4D (m\xeame version et m\xeame num\xe9ro de build). Il n'est disponible qu'en anglais."),(0,n.kt)("p",null,"tool4d est l'outil parfait si vous souhaitez :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mettre en place une cha\xeene CI/CD pour votre application 4D,"),(0,n.kt)("li",{parentName:"ul"},"utiliser un ex\xe9cutable 4D l\xe9ger pour lancer des scripts 4D, par exemple pour ex\xe9cuter des tests unitaires automatiques.")),(0,n.kt)("h3",r({},{id:"utilisation-de-tool4d"}),"Utilisation de tool4d"),(0,n.kt)("p",null,"Vous pouvez obtenir tool4d \xe0 partir de la ",(0,n.kt)("a",r({parentName:"p"},{href:"https://product-download.4d.com/"}),"page de t\xe9l\xe9chargement")," des produits 4D."),(0,n.kt)("p",null,"Vous utilisez tool4d en ex\xe9cutant une ",(0,n.kt)("a",r({parentName:"p"},{href:"#launch-a-4d-application"}),"ligne de commande")," avec un projet 4D standard. Vous pouvez utiliser tous les arguments d\xe9crits dans le tableau ci-dessus, \xe0 l'exception de --",(0,n.kt)("inlineCode",{parentName:"p"},"webadmin")," puisque ce composant est ",(0,n.kt)("a",r({parentName:"p"},{href:"#disabled-4d-features"}),"d\xe9sactiv\xe9 dans tool4d"),". Avec tool4d, la s\xe9quence sp\xe9cifique suivante est lanc\xe9e :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"tool4d ex\xe9cute la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Startup"),' (et toutes les m\xe9thodes "automatiques" telles que la ',(0,n.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R4/Users/editing#user-properties"}),"m\xe9thode utilisateur"),"), sauf si l'argument ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," est pass\xe9."),(0,n.kt)("li",{parentName:"ol"},"tool4d ex\xe9cute la m\xe9thode d\xe9sign\xe9e par l'argument ",(0,n.kt)("inlineCode",{parentName:"li"},"--startup-method")," , le cas \xe9ch\xe9ant."),(0,n.kt)("li",{parentName:"ol"},"tool4d ex\xe9cute la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Exit"),", sauf si l'argument ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," est fourni."),(0,n.kt)("li",{parentName:"ol"},"tool4d quitte.")),(0,n.kt)("p",null,"Sous Windows, tool4d est une application console de sorte que le flux ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout")," est affich\xe9 dans le terminal (cmd, powershell...)."),(0,n.kt)("admonition",r({},{title:"Notes",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"tool4d est toujours ex\xe9cut\xe9 headless (l'option de ligne de commande ",(0,n.kt)("inlineCode",{parentName:"li"},"headless")," est inutile)."),(0,n.kt)("li",{parentName:"ul"},"La commande ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Application type"))," renvoie la valeur 6 (\"tool4d\") lorsqu'elle est appel\xe9e \xe0 partir de l'application tool4d."),(0,n.kt)("li",{parentName:"ul"},"le ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R4/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"fichier journal de diagnostic"),' est pr\xe9fix\xe9 par "4DDiagnosticLogTool".'))),(0,n.kt)("h3",r({},{id:"fonctionnalit\xe9s-4d-d\xe9sactiv\xe9es"}),"Fonctionnalit\xe9s 4D d\xe9sactiv\xe9es"),(0,n.kt)("p",null,"N'oubliez pas que tool4d s'ex\xe9cute automatiquement en mode ",(0,n.kt)("strong",{parentName:"p"},"headless")," (voir ",(0,n.kt)("inlineCode",{parentName:"p"},"--headless")," dans ",(0,n.kt)("a",r({parentName:"p"},{href:"#launch-a-4d-application"}),"ce tableau"),"), et ne donne acc\xe8s ni \xe0 l'IDE 4D ni \xe0 aucun de ses serveurs. En particulier, les fonctions suivantes ne sont pas accessibles :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"serveur d'application, serveur Web, serveur SQL,"),(0,n.kt)("li",{parentName:"ul"},"planificateur de sauvegarde,"),(0,n.kt)("li",{parentName:"ul"},"ODBC et SQL pass-through,"),(0,n.kt)("li",{parentName:"ul"},"tous les composants tels que 4D View Pro, 4D SVG, 4D NetKit...,"),(0,n.kt)("li",{parentName:"ul"},"correcteur orthographique hunspell,"),(0,n.kt)("li",{parentName:"ul"},"correcteur orthographique japonais (",(0,n.kt)("em",{parentName:"li"},"mecab")," library),"),(0,n.kt)("li",{parentName:"ul"},"WebAdmin,"),(0,n.kt)("li",{parentName:"ul"},"CEF,"),(0,n.kt)("li",{parentName:"ul"},"PHP,"),(0,n.kt)("li",{parentName:"ul"},"d\xe9bogueur distant (le d\xe9bogueur local, ",(0,n.kt)("inlineCode",{parentName:"li"},"TRACE")," et les points d'arr\xeat sont ignor\xe9s dans les applications headless).")),(0,n.kt)("h2",r({},{id:"4d-server-en-mode-utilitaire"}),"4D Server en mode utilitaire"),(0,n.kt)("p",null,"Vous pouvez lancer une instance de 4D Server en mode utilitaire (headless) en utilisant l'option CLI ",(0,n.kt)("inlineCode",{parentName:"p"},"--utility")," . Dans ce cas, la s\xe9quence suivante est d\xe9clench\xe9e :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"4D Server ex\xe9cute la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Startup"),' (et toutes les m\xe9thodes "automatiques" telles que la ',(0,n.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R4/Users/editing#user-properties"}),"m\xe9thode utilisateur"),"), sauf si le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," est pass\xe9."),(0,n.kt)("li",{parentName:"ol"},"4D Server ex\xe9cute la m\xe9thode d\xe9sign\xe9e par l'option ",(0,n.kt)("inlineCode",{parentName:"li"},"--startup-method"),", le cas \xe9ch\xe9ant."),(0,n.kt)("li",{parentName:"ol"},"4D Server ex\xe9cute la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Exit")," , sauf si le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," est pass\xe9."),(0,n.kt)("li",{parentName:"ol"},"4D Server quitte.")),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Contrairement \xe0 tool4d, 4D Server en mode utilitaire a toutes ses fonctionnalit\xe9s activ\xe9es. Cependant, le serveur d'application et tous les autres serveurs ne sont pas d\xe9marr\xe9s.")),(0,n.kt)("admonition",r({},{title:"Voir aussi",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Voir ",(0,n.kt)("a",r({parentName:"p"},{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/"}),"ce billet de blog")," pour des exemples d'utilisation de tool4d et 4D Server en mode utilitaire.")))}m.isMDXComponent=!0}}]);