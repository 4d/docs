"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51289],{140217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(474848),t=r(28453);const i={id:"php-execute",title:"PHP Execute",slug:"/commands/php-execute",displayed_sidebar:"docs"},a=void 0,l={id:"commands-legacy/php-execute",title:"PHP Execute",description:"PHP Execute ( cheminScript {; nomFonction {; r\xe9sultatPHP {; param} {; param2 ; ... ; paramN}}} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-execute.md",sourceDirName:"commands-legacy",slug:"/commands/php-execute",permalink:"/docs/fr/commands/php-execute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"php-execute",title:"PHP Execute",slug:"/commands/php-execute",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Variance",permalink:"/docs/fr/commands/variance"},next:{title:"PHP GET FULL RESPONSE",permalink:"/docs/fr/commands/php-get-full-response"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Conversion des donn\xe9es retourn\xe9es",id:"conversion-des-donn\xe9es-retourn\xe9es",level:5},{value:"Utiliser les variables d\u2019environnement",id:"utiliser-les-variables-denvironnement",level:5},{value:"Fonctions sp\xe9ciales",id:"fonctions-sp\xe9ciales",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Exemple 8",id:"exemple-8",level:4},{value:"Exemple 9",id:"exemple-9",level:4},{value:"Exemple 10",id:"exemple-10",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PHP Execute"})," ( ",(0,s.jsx)(n.em,{children:"cheminScript"})," {; ",(0,s.jsx)(n.em,{children:"nomFonction"})," {; ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})," {; ",(0,s.jsx)(n.em,{children:"param"}),"} {; ",(0,s.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"paramN"}),"}}} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminScript"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:'Chemin d\u2019acc\xe8s au script PHP ou "" pour ex\xe9cuter une fonction PHP'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomFonction"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Fonction PHP \xe0 ex\xe9cuter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"r\xe9sultatPHP"}),(0,s.jsx)(n.td,{children:"*, Variable, Field"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"R\xe9sultat d\u2019ex\xe9cution de la fonction PHP ou * pour ne pas recevoir de r\xe9sultat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param"}),(0,s.jsx)(n.td,{children:"Text, Boolean, Real, Integer, Date, Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Param\xe8tre(s) de la fonction PHP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = ex\xe9cution correcte, Faux = erreur d\u2019ex\xe9cution"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PHP est obsol\xe8te dans 4D"}),". Il est d\xe9sormais recommand\xe9 d'utiliser la classe ",(0,s.jsx)(n.a,{href:"/docs/fr/API/SystemWorkerClass",children:(0,s.jsx)(n.code,{children:"4D.SystemWorker"})}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"PHP Execute"})," permet d\u2019ex\xe9cuter un script ou une fonction PHP."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"cheminScript"})," le chemin d\u2019acc\xe8s du fichier de script PHP \xe0 ex\xe9cuter. Il peut s\u2019agir d\u2019un chemin d\u2019acc\xe8s relatif si le fichier est situ\xe9 \xe0 c\xf4t\xe9 de la structure de la base ou d\u2019un chemin absolu. Le chemin d\u2019acc\xe8s peut \xeatre exprim\xe9 en syntaxe syst\xe8me ou Posix.",(0,s.jsx)(n.br,{}),'\nSi vous souhaitez ex\xe9cuter directement une fonction PHP standard, passez une cha\xeene vide ("") dans ',(0,s.jsx)(n.em,{children:"cheminScript"}),". Le nom de la fonction doit \xeatre pass\xe9 en deuxi\xe8me param\xe8tre."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomFonction"})," un nom de fonction PHP si vous souhaitez ex\xe9cuter une fonction sp\xe9cifique dans le script ",(0,s.jsx)(n.em,{children:"cheminScript"}),". Si vous passez une cha\xeene vide ou omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomFonction"}),", le script est ex\xe9cut\xe9 enti\xe8rement."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," : PHP tient compte de la casse des caract\xe8res dans le nom de la fonction. N\u2019utilisez pas de parenth\xe8ses, saisissez uniquement le nom de la fonction."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})," re\xe7oit le r\xe9sultat de l\u2019ex\xe9cution de la fonction PHP. Vous pouvez passer soit :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"une variable, un tableau ou un champ afin de recevoir le r\xe9sultat,"}),"\n",(0,s.jsx)(n.li,{children:"le caract\xe8re * si la fonction ne retourne pas de r\xe9sultat ou si vous ne souhaitez pas le r\xe9cup\xe9rer."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})," peut \xeatre de type texte, entier long, r\xe9el, bool\xe9en, date ainsi que (hormis pour les tableaux) BLOB et heure. 4D effectuera la conversion des donn\xe9es et les ajustements n\xe9cessaires suivant les principes d\xe9crits dans le paragraphe ",(0,s.jsx)(n.em,{children:"Conversion of data returned"})," ci-dessous."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si vous avez pass\xe9 un nom de fonction dans ",(0,s.jsx)(n.em,{children:"nomFonction"}),", ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})," recevra ce que le d\xe9veloppeur PHP a retourn\xe9 avec la commande ",(0,s.jsx)(n.strong,{children:"return"})," depuis le corps de la fonction."]}),"\n",(0,s.jsxs)(n.li,{children:["Si vous utilisez la commande sans passer de nom de fonction dans ",(0,s.jsx)(n.em,{children:"nomFonction"}),", ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})," recevra ce que le d\xe9veloppeur PHP a retourn\xe9 avec la commande ",(0,s.jsx)(n.strong,{children:"echo"})," (ou une commande similaire)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous appelez une fonction PHP qui attend des arguments, utilisez le(s) param\xe8tre(s) ",(0,s.jsx)(n.em,{children:"param1...N"})," pour passer une ou plusieurs valeur(s). Les valeurs doivent \xeatre s\xe9par\xe9es par des points-virgules. Vous pouvez passer des valeurs de type alpha, texte, bool\xe9en, r\xe9el, entier, entier long, date ou heure. Les images, BLOBs et objets ne sont pas admis. Vous pouvez envoyer un tableau, il est n\xe9cessaire dans ce cas de passer un pointeur sur le tableau \xe0 la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"}),", sinon c'est l'index courant du tableau qui est envoy\xe9 sous forme d'entier (cf. exemple). La commande accepte tous les types de tableaux sauf les tableaux pointeur, les tableaux image et les tableaux 2D.",(0,s.jsx)(n.br,{}),"\nLes param\xe8tres ",(0,s.jsx)(n.em,{children:"param1...N"})," sont envoy\xe9s au PHP au format JSON en utf-8. Ils sont automatiquement d\xe9cod\xe9s avec la commande PHP ",(0,s.jsx)(n.strong,{children:"json_decode"})," avant d'\xeatre pass\xe9s \xe0 la fonction PHP ",(0,s.jsx)(n.em,{children:"nomFonction"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Pour des raisons techniques, la taille des param\xe8tres pass\xe9s via le protocole fast cgi ne doit pas d\xe9passer 64 Ko. Vous devez tenir compte de cette limitation si vous utilisez des param\xe8tres de type Texte."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande retourne Vrai si l\u2019ex\xe9cution s\u2019est d\xe9roul\xe9e correctement c\xf4t\xe9 4D, c\u2019est-\xe0-dire si le lancement de l\u2019environnement d\u2019ex\xe9cution, l\u2019ouverture du script et l\u2019\xe9tablissement de la communication avec l\u2019interpr\xe9teur PHP ont \xe9t\xe9 r\xe9ussis. Dans le cas contraire, une erreur est g\xe9n\xe9r\xe9e, que vous pouvez intercepter avec la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"})," et analyser avec ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/last-errors",children:"Last errors"})," .",(0,s.jsx)(n.br,{}),"\nEn outre, le script lui-m\xeame peut g\xe9n\xe9rer des erreurs PHP. Dans ce cas, vous devez utiliser la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"})," afin d\u2019analyser la source de l\u2019erreur (voir exemple 4)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," PHP permet de configurer la gestion d\u2019erreurs. Pour plus d\u2019informations, reportez-vous par exemple \xe0 la page ",(0,s.jsx)(n.a,{href:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting",children:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"conversion-des-donn\xe9es-retourn\xe9es",children:"Conversion des donn\xe9es retourn\xe9es"}),"\n",(0,s.jsxs)(n.p,{children:["Le tableau suivant pr\xe9cise comment 4D interpr\xe8te et convertit les donn\xe9es retourn\xe9es en fonction du type du param\xe8tre ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsxs)(n.strong,{children:["Type param\xe8tre ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"})]})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Traitement 4D"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Exemple"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BLOB"}),(0,s.jsx)(n.td,{children:"4D r\xe9cup\xe8re les donn\xe9es re\xe7ues sans aucune modification (*)."}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Texte"}),(0,s.jsxs)(n.td,{children:["4D attend des donn\xe9es encod\xe9es en utf-8 (*). Le d\xe9veloppeur PHP peut avoir besoin d'utiliser la commande PHP ",(0,s.jsx)(n.strong,{children:"utf8_encode"}),"."]}),(0,s.jsx)(n.td,{children:"Exemple de script PHP : echo utf8_encode(monTexte)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:'4D attend une date envoy\xe9e sous forme de cha\xeene au format RFC 3339 (appel\xe9 parfois DATE_ATOM en PHP). Ce format est de type "AAAA-MM-JJTHH:MM:SS", par exemple : 2005-08-15T15:52:01+00:00. 4D ignorera la partie heure et retournera la date en UTC.'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Heure"}),(0,s.jsx)(n.td,{children:"4D attend une heure envoy\xe9e sous forme de cha\xeene au format RFC 3339 (cf. type Date). 4D ignorera la partie date et retournera le nombre de secondes \xe9coul\xe9es depuis minuit en consid\xe9rant la date dans la zone horaire locale."}),(0,s.jsx)(n.td,{children:"Exemple de script PHP pour envoyer 2h30'45\" : echo date( DATE_ATOM, mktime( 2,30,45))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Entier ou R\xe9el"}),(0,s.jsx)(n.td,{children:"4D interpr\xe8te le num\xe9rique exprim\xe9 avec des chiffres, signe - ou +, exposant pr\xe9fix\xe9 par 'e'. Tout caract\xe8re '.' ou ',' est interpr\xe9t\xe9 comme un s\xe9parateur d\xe9cimal."}),(0,s.jsx)(n.td,{children:"Exemple de script PHP : echo -1.4e-16;"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bool\xe9en"}),(0,s.jsx)(n.td,{children:"4D retournera Vrai s'il re\xe7oit la chaine \"true\" depuis PHP ou si l'\xe9valuation sous forme de num\xe9rique donne une valeur non nulle."}),(0,s.jsx)(n.td,{children:"Exemple de script PHP : echo (a==b);"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Tableau"}),(0,s.jsx)(n.td,{children:"4D consid\xe8re que le tableau PHP a \xe9t\xe9 retourn\xe9 au format JSON."}),(0,s.jsx)(n.td,{children:'Exemple de script PHP pour retourner un tableau de deux textes : echo json_encode( array( "hello", "world"));'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) Par d\xe9faut, les en-t\xeates HTTP ne sont pas retourn\xe9s :",(0,s.jsx)(n.br,{}),"\n- si vous utilisez ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"})," en passant une fonction dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomFonction"}),", les ent\xeates HTTP ne sont jamais retourn\xe9s dans ",(0,s.jsx)(n.em,{children:"r\xe9sultatPHP"}),". Ils ne sont accessibles que via ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),".",(0,s.jsx)(n.br,{}),"\n- si vous utilisez ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"})," sans nom de fonction (",(0,s.jsx)(n.em,{children:"nomFonction"})," omis ou contenant une cha\xeene vide), vous pouvez retourner les en-t\xeates HTTP en fixant l'option PHP raw result \xe0 Vrai \xe0 l'aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-set-option",children:"PHP SET OPTION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Si vous devez r\xe9cup\xe9rer de gros volumes de donn\xe9es via PHP, il est g\xe9n\xe9ralement plus efficace de passer par le canal du buffer ",(0,s.jsx)(n.em,{children:"stdOut"})," (commande ",(0,s.jsx)(n.strong,{children:"echo"})," ou similaire) que par le retour de fonction. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"utiliser-les-variables-denvironnement",children:"Utiliser les variables d\u2019environnement"}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez utiliser la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})," pour d\xe9finir des variables d\u2019environment utilis\xe9es par le script. Attention : apr\xe8s un appel \xe0 ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," ou ",(0,s.jsx)(n.strong,{children:"PHP Execute"}),", l\u2019ensemble des variables d\u2019environment est effac\xe9."]}),"\n",(0,s.jsx)(n.h5,{id:"fonctions-sp\xe9ciales",children:"Fonctions sp\xe9ciales"}),"\n",(0,s.jsx)(n.p,{children:"4D propose les fonctions sp\xe9ciales suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"quit_4d_php"})," : permet de quitter l\u2019interpr\xe9teur PHP et tous ses process enfants. Si un process enfant au moins est en train d\u2019ex\xe9cuter un script, l\u2019interpr\xe9teur ne quitte pas et la commande ",(0,s.jsx)(n.strong,{children:"PHP Execute"})," retourne Faux."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"relaunch_4d_php"})," permet de relancer l\u2019interpr\xe9teur PHP."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A noter que l\u2019interpr\xe9teur est relanc\xe9 automatiquement \xe0 la premi\xe8re requ\xeate envoy\xe9e par ",(0,s.jsx)(n.strong,{children:"PHP Execute"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:'Appel du script "myPhpFile.php" sans fonction. Voici le contenu du script :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP",children:"<\n"})}),"\n",(0,s.jsx)(n.p,{children:"Le code 4D suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $isOK : Boolean\n\xa0$isOK:=PHP Execute("C:\\\\php\\\\myPhpFile.php";"";$result)\n\xa0ALERT($Result)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... affichera la version php courante."}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsxs)(n.p,{children:["Appel de la fonction ",(0,s.jsx)(n.em,{children:"myPhpFunction"}),' dans le script "myNewScript.php" avec des param\xe8tres. Voici le contenu du script :']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(n.p,{children:"Appel avec fonction :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $param1 : Text\n\xa0var $param2 : Text\n\xa0var $isOk : Boolean\n\xa0$param1:="Hello"\n\xa0$param2 :="4D world !"\n\xa0$isOk:=PHP Execute("C:\\\\MonDossier\\\\myNewScript.php";"myPhpFunction";$result;$param1;$param2 )\n\xa0ALERT($result)\xa0// Affiche "Hello 4D world!"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Faire quitter l\u2019interpr\xe9teur PHP :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$ifOk:=PHP Execute("";"quit_4d_php")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsx)(n.p,{children:"Gestion des erreurs :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0// Installation de la m\xe9thode de gestion d\u2019erreurs\n\xa0phpCommError:=""\xa0// Modifi\xe9e par PHPErrorHandler\n\xa0$T_saveErrorHandler :=Method called on error\n\xa0ON ERR CALL("PHPErrorHandler")\n\xa0\n\xa0\xa0\xa0\xa0\xa0// Ex\xe9cution du script\n\xa0var $T_result : Text\n\xa0If(PHP Execute("C:\\\\MyScripts\\\\MiscInfos.php";"";$T_result))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Pas d\u2019erreur, $T_Result contient le r\xe9sultat\n\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Une erreur a \xe9t\xe9 d\xe9tect\xe9e, g\xe9r\xe9e par PHPErrorHandler\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(phpCommError="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0// erreur PHP, utilisez PHP LIRE REPONSE COMPLETE\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(phpCommError)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// D\xe9sinstallation de la m\xe9thode\n\xa0ON ERR CALL($T_saveErrorHandler)\n'})}),"\n",(0,s.jsx)(n.p,{children:"La m\xe9thode PHP_errHandler est la suivante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0phpCommError:=""\n\xa0GET LAST ERROR STACK(tabCodes;tabComps;tabLibell\xe9s)\n\xa0For($i;1;Size of array(tabCodes))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0phpCommError:=phpCommError+String(tabCodes{$i})+" "+tabComps{$i}+" "+tabLibell\xe9s{$i}+Caractere(Retour chariot)\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9ation dynamique par 4D d\u2019un script avant son ex\xe9cution :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT TO BLOB("C:\\\\Scripts\\\\MonScript.php";$blobDoc)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$strDoc:=BLOB to text($blobDoc;UTF8 text without length)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$strPosition:=Position("function2Rename";$strDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("C:\\\\Scripts\\\\MonScript.php";$blobDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK#1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Erreur \xe0 la cr\xe9ation du script")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Le script est ensuite ex\xe9cut\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$err:=PHP Execute("C:\\\\Scripts\\\\MonScript.php";"function2Rename_v2";*)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,s.jsx)(n.p,{children:"R\xe9cup\xe9ration directe d\u2019une valeur de type date et heure. Voici le contenu du script :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(n.p,{children:"R\xe9ception de la date c\xf4t\xe9 4D :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $phpResult_date : Date\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_date)\n\xa0\xa0\xa0\xa0\xa0//$phpResult_date vaut !05/04/2009 !\n\xa0\n\xa0var $phpResult_time : Time\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_time)\n\xa0\n\xa0\xa0\xa0\xa0\xa0//$phpResult_time vaut ?01 :02 :03 ?\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,s.jsx)(n.p,{children:"R\xe9partition de donn\xe9es dans des tableaux :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0ARRAY LONGINT($arLong ;0)\n\xa0$p1 :=","\n\xa0$p2 :="11,22,33,44,55"\n\xa0$phpok :=PHP Execute("";"explode";$arText;$p1;$p2)\n\xa0$phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// $arText contient les valeurs alpha "11", "22", "33", etc.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// $arLong contient les num\xe9riques, 11, 22, 33, etc.\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,s.jsx)(n.p,{children:"Initialisation d\u2019un tableau :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0$phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"ind\xe9fini")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Ex\xe9cute en php : $arrTest = array_pad($arrTest, 50, \u2019ind\xe9fini\u2019);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Remplit le tableau $arText avec 50 \xe9l\xe9ments "ind\xe9fini"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-9",children:"Exemple 9"}),"\n",(0,s.jsx)(n.p,{children:"Passage de param\xe8tres via un tableau :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY INTEGER($arInt;0)\n\xa0$phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Ex\xe9cute en php : $arInt = json_decode(\u2019[13,51,69,42,7]\u2019);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Remplit le tableau avec des valeurs initiales\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-10",children:"Exemple 10"}),"\n",(0,s.jsxs)(n.p,{children:["Utilisation basique de la fonction ",(0,s.jsx)(n.em,{children:"trim"})," de PHP permettant d'enlever les espaces et/ou caract\xe8res invisibles de part et d'autre d'une cha\xeene de caract\xe8res :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $T_String : Text\n\xa0$T_String:="\xa0\xa0 Bonjour\xa0 "\n\xa0var $B : Boolean\n\xa0$B:=PHP Execute("";"trim";$T_String;$T_String)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Pour plus d'informations sur la fonction ",(0,s.jsx)(n.em,{children:"trim"}),", veuillez vous reporter \xe0 la documentation PHP."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Ex\xe9cuter des scripts PHP dans 4D"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/php-set-option",children:"PHP SET OPTION"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);