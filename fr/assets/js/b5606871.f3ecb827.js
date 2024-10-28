"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1308],{769342:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(474848),i=s(28453);const t={id:"launch-external-process",title:"LAUNCH EXTERNAL PROCESS",slug:"/commands/launch-external-process",displayed_sidebar:"docs"},l=void 0,c={id:"commands-legacy/launch-external-process",title:"LAUNCH EXTERNAL PROCESS",description:"LAUNCH EXTERNAL PROCESS ( nomFichier {; fluxEntr\xe9e {; fluxSortie {; fluxErreur}}}{; pid} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/launch-external-process.md",sourceDirName:"commands-legacy",slug:"/commands/launch-external-process",permalink:"/docs/fr/commands/launch-external-process",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flaunch-external-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"launch-external-process",title:"LAUNCH EXTERNAL PROCESS",slug:"/commands/launch-external-process",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET MACRO PARAMETER",permalink:"/docs/fr/commands/get-macro-parameter"},next:{title:"Load 4D View document",permalink:"/docs/fr/commands/load-4d-view-document"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemples sous macOS",id:"exemples-sous-macos",level:4},{value:"Exemples sous Windows",id:"exemples-sous-windows",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," ( ",(0,r.jsx)(n.em,{children:"nomFichier"})," {; ",(0,r.jsx)(n.em,{children:"fluxEntr\xe9e"})," {; ",(0,r.jsx)(n.em,{children:"fluxSortie"})," {; ",(0,r.jsx)(n.em,{children:"fluxErreur"}),"}}}{; ",(0,r.jsx)(n.em,{children:"pid"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s et arguments du fichier \xe0 lancer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fluxEntr\xe9e"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Flux d\u2019entr\xe9e (stdin)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fluxSortie"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Flux de sortie (stdout)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fluxErreur"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Flux d\u2019erreur (stderr)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pid"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Identifiant unique du process externe"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(n.p,{children:["\xc0 partir de 4D v19 R4, nous recommandons l'utilisation de la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/API/SystemWorkerClass",children:(0,r.jsx)(n.code,{children:"4D.SystemWorker class"})})," pour ex\xe9cuter et contr\xf4ler les process externes. N\xe9anmoins, cette commande est toujours prise en charge."]})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," permet de lancer un process externe depuis 4D, sous macOS et Windows.",(0,r.jsx)(n.br,{}),"\nSous macOS, cette commande donne acc\xe8s \xe0 toutes les applications ex\xe9cutables pouvant \xeatre lanc\xe9es depuis le Terminal."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomFichier"})," le chemin d\u2019acc\xe8s absolu de l\u2019application \xe0 ex\xe9cuter ainsi que les arguments n\xe9cessaires, le cas \xe9ch\xe9ant.",(0,r.jsx)(n.br,{}),"\nSous macOS, vous pouvez \xe9galement passer uniquement le nom de l\u2019application \xe0 ex\xe9cuter, 4D utilisera alors la variable d\u2019environnement PATH pour localiser l\u2019ex\xe9cutable."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," Cette commande permet uniquement de lancer des applications ex\xe9cutables, elle ne peut pas ex\xe9cuter d'instructions d\xe9pendantes du shell (l'interpr\xe9teur de commandes). Par exemple, sous macOS il n'est pas possible d'utiliser cette commande pour ex\xe9cuter l'instruction ",(0,r.jsx)(n.em,{children:"echo"})," ou des indirections."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"fluxEntr\xe9e"})," (facultatif) contient le ",(0,r.jsx)(n.em,{children:"stdin"})," du process externe. Apr\xe8s l\u2019ex\xe9cution de la commande, les param\xe8tres ",(0,r.jsx)(n.em,{children:"fluxSortie"})," et ",(0,r.jsx)(n.em,{children:"fluxErreur"})," (s\u2019ils sont pass\xe9s) retournent respectivement le ",(0,r.jsx)(n.em,{children:"stdout"})," et le ",(0,r.jsx)(n.em,{children:"stderr"})," du process externe. Vous pouvez utiliser des param\xe8tres de type BLOBs au lieu de cha\xeenes de caract\xe8res si vous traitez des donn\xe9es binaires (telles que des images)."]}),"\n",(0,r.jsx)(n.p,{children:"XXX"}),"\n",(0,r.jsxs)(n.p,{children:["4D fournit trois variables d'environnement sp\xe9cifiques qui peuvent \xeatre d\xe9finies \xe0 l'aide de ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})," et utilis\xe9es dans le contexte de ",(0,r.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"_4D_OPTION_CURRENT_DIRECTORY"})," : permet de d\xe9finir le r\xe9pertoire courant du process externe \xe0 lancer. Vous devez passer dans ",(0,r.jsx)(n.em,{children:"valeurVar"})," le chemin d\u2019acc\xe8s du r\xe9pertoire (syntaxe type HFS sous Mac OS et DOS sous Windows)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"_4D_OPTION_HIDE_CONSOLE"}),' (Windows uniquement) : permet de masquer la fen\xeatre de la console DOS. Vous devez passer "true" dans ',(0,r.jsx)(n.em,{children:"valeurVar"}),' pour masquer la console ou "false" pour l\u2019afficher.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"})," : permet d'ex\xe9cuter le process externe en mode asynchrone, c'est-\xe0-dire non bloquant pour les autres applications. Vous devez passer \"false\" dans ",(0,r.jsx)(n.em,{children:"valeurVar"}),' pour d\xe9finir une ex\xe9cution asynchrone ou "true" pour une ex\xe9cution synchrone (par d\xe9faut). Passer "" dans ',(0,r.jsx)(n.em,{children:"valeurVar"})," ne fera rien.",(0,r.jsx)(n.br,{}),"\nSi vous d\xe9finissez la variable d'environnement ",(0,r.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"}),' sur "faux" via la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})," (ex\xe9cution asynchrone), les param\xe8tres ",(0,r.jsx)(n.em,{children:"fluxSortie"})," et ",(0,r.jsx)(n.em,{children:"fluxErreur"})," ne sont pas retourn\xe9s."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Ces variables sont valides dans le process courant pour le prochain appel \xe0 ",(0,r.jsx)(n.strong,{children:"LANCER PROCESS EXTERNE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsqu'il est pass\xe9, le param\xe8tre ",(0,r.jsx)(n.em,{children:"pid"})," (entier long) retourne l'identifiant unique du process (PID) affect\xe9 au niveau de l'OS, quel que soit le statut de l'option ",(0,r.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"}),". Avec cette information, il est plus facile d'interagir avec les process externes cr\xe9\xe9s par la commande, par exemple pour les stopper. Si le lancement du process externe \xe9choue, le param\xe8tre ",(0,r.jsx)(n.em,{children:"pid"})," n'est pas retourn\xe9."]}),"\n",(0,r.jsx)(n.h4,{id:"exemples-sous-macos",children:"Exemples sous macOS"}),"\n",(0,r.jsx)(n.p,{children:"Tous les exemples suivants utilisent le Terminal de macOS, accessible dans le dossier Applications/Utilitaires."}),"\n",(0,r.jsxs)(n.p,{children:["(1) Pour modifier les acc\xe8s \xe0 un fichier (",(0,r.jsx)(n.em,{children:"chmod"})," est la commande macOS permettant de modifier les acc\xe8s des fichiers) :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("chmod +x /dossier/monfichier.txt")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["(2) Pour \xe9diter un fichier texte (",(0,r.jsx)(n.em,{children:"cat"})," est la commande macOS permettant d\u2019\xe9diter les fichiers). Dans cet exemple, le chemin d\u2019acc\xe8s absolu de la commande est pass\xe9 :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vtentr\xe9e;vtsortie : Text\n\xa0vtentr\xe9e:=""\n\xa0LAUNCH EXTERNAL PROCESS("/bin/cat /dossier/monfichier.txt";vtentr\xe9e;vtsortie)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["(3) Pour r\xe9cup\xe9rer la liste du contenu du dossier \u201cUsers\u201d (",(0,r.jsx)(n.em,{children:"ls -l"})," est semblable \xe0 la commande ",(0,r.jsx)(n.em,{children:"dir"})," du DOS) :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $In;$Out : Text\n\xa0LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)\n'})}),"\n",(0,r.jsxs)(n.p,{children:['(4) Pour lancer une application "graphique" ind\xe9pendante, il est pr\xe9f\xe9rable d\'utiliser la commande syst\xe8me ',(0,r.jsx)(n.em,{children:"open"})," (dans ce cas l'instruction ",(0,r.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," a le m\xeame effet qu'un double-clic sur l'application) :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemples-sous-windows",children:"Exemples sous Windows"}),"\n",(0,r.jsx)(n.p,{children:"(5) Pour lancer l\u2019application NotePad :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("C:\\\\WINDOWS\\\\notepad.exe")\n'})}),"\n",(0,r.jsx)(n.p,{children:"(6) Pour lancer l\u2019application NotePad et ouvrir un document sp\xe9cifique :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("C:\\\\WINDOWS\\\\notepad.exe C:\\\\Docs\\\\nouveau dossier\\\\res.txt")\n'})}),"\n",(0,r.jsx)(n.p,{children:'(7) Pour lancer l\u2019application Microsoft\xae Word\xae et ouvrir un document sp\xe9cifique (\xe0 noter l\u2019emploi de deux "") :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$mondoc:="C:\\\\Program Files\\\\Microsoft Office\\\\Office10\\\\WINWORD.EXE \\"C:\\\\Documents and\n\xa0Settings\\\\JeanMarc\\\\Bureau\\\\MesDocs\\\\Nouveau dossier\\\\essai.xml\\""\n\xa0LAUNCH EXTERNAL PROCESS($mondoc;$tIn;$tOut)\n'})}),"\n",(0,r.jsx)(n.p,{children:"(8) Pour ex\xe9cuter un script Perl (requiert l\u2019installation pr\xe9alable d\u2019ActivePerl) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $entr\xe9e;$sortie : Text\n\xa0SET ENVIRONMENT VARIABLE("mavariable";"valeur")\n\xa0LAUNCH EXTERNAL PROCESS("D:\\\\Perl\\\\bin\\\\perl.exe D:\\\\Perl\\\\eg\\\\cgi\\\\env.pl";$entr\xe9e;$sortie)\n'})}),"\n",(0,r.jsx)(n.p,{children:"(9) Pour lancer une commande avec un r\xe9pertoire courant d\xe9fini et sans afficher la console :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\\\4D_VCS")\n\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")\n\xa0LAUNCH EXTERNAL PROCESS("C:\\\\MesApplis\\\\macommande.exe")\n'})}),"\n",(0,r.jsx)(n.p,{children:"(10) Pour permettre \xe0 l'utilisateur d'ouvrir un document externe sous Windows :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$nomdoc:=Select document("";"*.*";"Choisissez le fichier \xe0 ouvrir";0)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")\n\xa0\xa0\xa0\xa0LAUNCH EXTERNAL PROCESS("cmd.exe /C start \\"\\" \\""+$nomdoc+"\\"")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"(11) Les exemples suivants r\xe9cup\xe8rent la liste des process sous Windows :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $pid : Integer\n\xa0var $stdin;$stdout;$stderr : Text\n\xa0\n\xa0LAUNCH EXTERNAL PROCESS("tasklist";$pid)\xa0//obtenir uniquement le PID\n\xa0LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid)\xa0//obtenir toutes les informations\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1. Sinon (fichier non trouv\xe9, m\xe9moire insuffisante, etc.), elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/open-url",children:"OPEN URL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(296540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);