"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30414"],{995468:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/select-document","title":"Select document","description":"Select document ( r\xe9pertoire ; typesFichiers ; titre ; options {; s\xe9lectionn\xe9s} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-document.md","sourceDirName":"commands-legacy","slug":"/commands/select-document","permalink":"/docs/fr/commands/select-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-document","title":"Select document","slug":"/commands/select-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOLVE ALIAS","permalink":"/docs/fr/commands/resolve-alias"},"next":{"title":"Select folder","permalink":"/docs/fr/commands/select-folder"}}'),t=n("785893"),r=n("250065");let l={id:"select-document",title:"Select document",slug:"/commands/select-document",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Select document"})," ( ",(0,t.jsx)(s.em,{children:"r\xe9pertoire"})," ; ",(0,t.jsx)(s.em,{children:"typesFichiers"})," ; ",(0,t.jsx)(s.em,{children:"titre"})," ; ",(0,t.jsx)(s.em,{children:"options"})," {; ",(0,t.jsx)(s.em,{children:"s\xe9lectionn\xe9s"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"r\xe9pertoire"}),(0,t.jsx)(s.td,{children:"Text, Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"\u2022 Chemin d\u2019acc\xe8s du r\xe9pertoire \xe0 afficher par d\xe9faut dans la bo\xeete de dialogue de s\xe9lection, ou\u2022 Cha\xeene vide pour afficher le dossier d\u2019utilisateur par d\xe9faut (\u201CMes documents\u201D sous Windows, \u201CDocuments\u201D sous Mac OS), ou\u2022 Num\xe9ro de chemin d\u2019acc\xe8s m\xe9moris\xe9"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"typesFichiers"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:'Liste des types de documents \xe0 filtrer, ou "*" pour ne pas filtrer les documents'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"titre"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Titre de la bo\xeete de dialogue de s\xe9lection"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"options"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Option(s) de s\xe9lection"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"s\xe9lectionn\xe9s"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Tableau contenant la liste des chemins d\u2019acc\xe8s + les noms des fichiers s\xe9lectionn\xe9s"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom du fichier s\xe9lectionn\xe9 (premier fichier de la liste en cas de s\xe9lection multiple)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Select document"})," affiche une bo\xeete de dialogue standard d\u2019ouverture de documents, permettant \xe0 l\u2019utilisateur de d\xe9signer un ou plusieurs fichier(s), et retourne le nom et/ou le chemin d\u2019acc\xe8s complet du ou des fichier(s) s\xe9lectionn\xe9(s)."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"r\xe9pertoire"})," indique le dossier dont le contenu doit \xeatre affich\xe9 initialement dans la bo\xeete de dialogue d\u2019ouverture de documents. Vous pouvez passer trois types de valeurs :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"un texte contenant le chemin d\u2019acc\xe8s complet du r\xe9pertoire \xe0 afficher."}),"\n",(0,t.jsx)(s.li,{children:'une cha\xeene vide ("") pour afficher le dossier d\u2019utilisateur par d\xe9faut du syst\xe8me (\u201CMes documents\u201D sous Windows, \u201CDocuments\u201D sous Mac OS).'}),"\n",(0,t.jsxs)(s.li,{children:["un num\xe9ro de chemin d\u2019acc\xe8s m\xe9moris\xe9 (de 1 \xe0 32000) pour afficher le dossier associ\xe9.",(0,t.jsx)(s.br,{}),"\nAvec ce principe, vous pouvez conserver en m\xe9moire le chemin d\u2019acc\xe8s du dossier ouvert au moment o\xf9 l\u2019utilisateur a cliqu\xe9 sur le bouton de s\xe9lection, c\u2019est-\xe0-dire le dossier choisi par l\u2019utilisateur. Lors du premier appel d\u2019un num\xe9ro arbitraire (par exemple 5), la commande affiche le dossier d\u2019utilisateur par d\xe9faut du syst\xe8me (\xe9quivaut \xe0 passer une cha\xeene vide). L\u2019utilisateur pourra alors \xe9ventuellement naviguer parmi les dossiers de son disque dur. Au moment o\xf9 il cliquera sur le bouton de s\xe9lection, le chemin d\u2019acc\xe8s sera m\xe9moris\xe9 et associ\xe9 au num\xe9ro 5. Lors des appels suivants du num\xe9ro 5, le chemin d\u2019acc\xe8s m\xe9moris\xe9 sera utilis\xe9 par d\xe9faut. En cas de s\xe9lection d\u2019un nouvel emplacement, le chemin num\xe9ro 5 sera mis \xe0 jour, et ainsi de suite.",(0,t.jsx)(s.br,{}),"\nCe m\xe9canisme vous permet de m\xe9moriser jusqu\u2019\xe0 32000 chemins d\u2019acc\xe8s. Sous Windows, chaque chemin est conserv\xe9 durant la session uniquement. Sous Mac OS, les chemins sont conserv\xe9s par le syst\xe8me, ils restent m\xe9moris\xe9s d\u2019une session \xe0 l\u2019autre."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Ce m\xe9canisme est identique \xe0 celui utilis\xe9 par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/select-folder",children:"Select folder"}),". Les num\xe9ros de chemins d\u2019acc\xe8s m\xe9moris\xe9s sont partag\xe9s entre les deux commandes."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"typeFichiers"})," le ou les type(s) de fichier(s) pouvant \xeatre s\xe9lectionn\xe9s dans la bo\xeete de dialogue d\u2019ouverture. Vous pouvez passer une liste de plusieurs types s\xe9par\xe9s par un ",(0,t.jsx)(s.em,{children:";"})," (point virgule). Pour chaque type d\xe9fini, une ligne sera ajout\xe9e dans le menu de choix de type de la bo\xeete de dialogue."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Sous Mac OS, vous pouvez passer soit un type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont \xe9t\xe9 d\xe9finis par Apple afin de r\xe9pondre aux besoins d'uniformisation des types de fichiers. Par exemple, \"public.text\" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, reportez-vous \xe0 ",(0,t.jsx)(s.a,{href:"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html",children:"cette page sur developer.apple.com"})," (documentation en anglais)."]}),"\n",(0,t.jsx)(s.li,{children:"Sous Windows, vous pouvez \xe9galement passer un type de fichier classique Mac OS \u2014 4D effectue la correspondance en interne \u2014 ou l\u2019extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l\u2019utilisateur aura la possibilit\xe9 de \u201Cforcer\u201D l\u2019affichage de tous les types de fichiers en saisissant *.* dans la bo\xeete de dialogue. Toutefois dans ce cas, 4D effectuera une v\xe9rification suppl\xe9mentaire des types des fichiers s\xe9lectionn\xe9s : si l\u2019utilisateur s\xe9lectionne un type de fichier non autoris\xe9, la commande retourne une erreur."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:['Si vous ne souhaitez pas restreindre les fichiers affich\xe9s \xe0 un ou plusieurs types, passez la cha\xeene "*" (\xe9toile) ou ".*" dans ',(0,t.jsx)(s.em,{children:"typeFichiers"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"titre"})," le libell\xe9 devant appara\xeetre dans la bo\xeete de dialogue. Par d\xe9faut, si vous passez une cha\xeene vide, le libell\xe9 \u201COuvrir\u201D est affich\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"options"})," permet de sp\xe9cifier les fonctions avanc\xe9es autoris\xe9es dans la bo\xeete de dialogue d\u2019ouverture. 4D vous propose les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(s.em,{children:"Documents syst\xe8me"}),". Vous pouvez passer une constante ou une combinaison de constantes."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constante"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Valeur"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Alias selection"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"Autorise la s\xe9lection de raccourcis (Windows) ou d\u2019alias (Mac OS) en tant que documents. Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande n\u2019autorise pas la s\xe9lection de raccourcis ou d\u2019alias en tant que tels. Si l\u2019utilisateur s\xe9lectionne ce type de document, la commande retourne le chemin de l\u2019\xe9l\xe9ment cible. Lorsque vous passez la constante, la commande retourne le chemin de l\u2019alias ou du raccourci lui-m\xeame."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"File name entry"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"32"}),(0,t.jsxs)(s.td,{children:["Permet \xe0 l\u2019utilisateur \xe0 saisir un nom de fichier dans une bo\xeete de dialogue de sauvegarde. Aucun fichier n\u2019est sauvegard\xe9, il revient au d\xe9veloppeur de cr\xe9er un fichier en r\xe9ponse \xe0 cette action (la variable syst\xe8me Document est mise \xe0 jour). Dans ce contexte, il est possible de passer un chemin de fichier dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"r\xe9pertoire"}),". Le nom du fichier sera sugg\xe9r\xe9 dans la bo\xeete de dialogue de sauvegarde et son r\xe9pertoire parent sera utilis\xe9 comme chemin par d\xe9faut."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Multiple files"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsxs)(s.td,{children:["Autorise la s\xe9lection simultan\xe9e de plusieurs fichiers \xe0 l\u2019aide des combinaisons ",(0,t.jsx)(s.strong,{children:"Maj+clic"})," (s\xe9lection contigu\xeb) et ",(0,t.jsx)(s.strong,{children:"Ctrl+clic"})," (Windows) ou ",(0,t.jsx)(s.strong,{children:"Commande+clic"})," (Mac OS). Dans ce cas, le param\xe8tre ",(0,t.jsx)(s.em,{children:"s\xe9lectionn\xe9s"}),", s\u2019il est pass\xe9, contient la liste de tous les fichiers s\xe9lectionn\xe9s. Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande n\u2019autorise pas la s\xe9lection de plusieurs fichiers."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Package open"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"(Mac OS uniquement) Autorise l\u2019ouverture des progiciels (packages) en tant que dossiers et donc la visualisation/s\xe9lection de leur contenu. Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande n\u2019autorise pas l\u2019ouverture des progiciels."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Package selection"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"(macOS uniquement) Autorise la s\xe9lection de progiciels (packages) en tant qu\u2019entit\xe9s (par d\xe9faut, si omise). Utilisez la constante Ouverture progiciel si vous souhaitez autoriser les utilisateurs \xe0 visualisre/s\xe9lectionner le contenu des progiciels."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Use sheet window"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsxs)(s.td,{children:["(Mac OS uniquement) Affiche la bo\xeete de dialogue de s\xe9lection sous forme de fen\xeatre feuille (cette option est ignor\xe9e sous Windows). ",(0,t.jsx)(s.br,{}),"Les fen\xeatres feuilles sont des fen\xeatres sp\xe9cifiques de l\u2019interface Mac OS X, b\xe9n\xe9ficiant notamment d\u2019une animation graphique (pour plus d\u2019informations, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Types de fen\xeatres (compatibilit\xe9)"}),"). Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande affiche une bo\xeete de dialogue standard."]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne souhaitez pas utiliser d\u2019option, passez 0 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"options"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"s\xe9lectionn\xe9s"})," permet de r\xe9cup\xe9rer le chemin d\u2019acc\xe8s complet (chemin d\u2019acc\xe8s + nom) de chaque fichier s\xe9lectionn\xe9 par l\u2019utilisateur. La commande cr\xe9e, dimensionne et remplit le tableau en fonction de la s\xe9lection de l\u2019utilisateur. Ce param\xe8tre est utile lorsque l\u2019option Multiple files est utilis\xe9e, ou lorsque vous souhaitez conna\xeetre le chemin d\u2019acc\xe8s du fichier s\xe9lectionn\xe9 (il suffit dans ce cas de soustraire de la valeur du tableau le nom du fichier retourn\xe9 par la commande). Si aucun fichier n\u2019a \xe9t\xe9 s\xe9lectionn\xe9, le tableau est retourn\xe9 vide."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Sous Mac OS, un progiciel s\xe9lectionn\xe9 est consid\xe9r\xe9 comme un dossier. Le chemin d'acc\xe8s retourn\xe9 dans le tableau ",(0,t.jsx)(s.em,{children:"s\xe9lectionn\xe9s"}),' comporte un caract\xe8re ":" final. Par exemple : Disque:Applications:4D:4D v11.4:FR:4D Volume Desktop.app:']}),"\n",(0,t.jsxs)(s.p,{children:["La commande retourne le nom (nom+extension sous Windows) du fichier s\xe9lectionn\xe9. Si plusieurs fichiers ont \xe9t\xe9 s\xe9lectionn\xe9s, la commande retourne le nom du premier fichier de la liste des fichiers s\xe9lectionn\xe9s. La liste des fichiers peut \xeatre r\xe9cup\xe9r\xe9e dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"s\xe9lectionn\xe9s"}),". Si aucun fichier n\u2019a \xe9t\xe9 s\xe9lectionn\xe9, la commande retourne une cha\xeene vide."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple permet de d\xe9signer un fichier de donn\xe9es 4D :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' var $platForm : Integer\n PLATFORM PROPERTIES($platForm)\n If($platForm=Windows)\n    $DocType:=".4DD"\n Else\n    $DocType:="com.4d.4d.data-file" //Type UTI\n End if\n $Options:=Alias selection+Package open+Use fen\xeatre feuille\n $Doc:=Select document("";$DocType;"S\xe9lectionner le fichier de donn\xe9es";$Options)\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:"Cr\xe9ation d\u2019un document personnalis\xe9 par l\u2019utilisateur :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Nom de l\u2019\xe9tat :";File name entry)\n If(OK=1)\n    BLOB TO DOCUMENT(Document;$blob) // $blob contient le document \xe0 enregistrer\n End if\n'})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsxs)(s.p,{children:["Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e et qu\u2019un document valide a \xe9t\xe9 s\xe9lectionn\xe9, la variable syst\xe8me OK prend la valeur 1 et la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s complet du fichier s\xe9lectionn\xe9.",(0,t.jsx)(s.br,{}),"\nSi aucun fichier n\u2019a \xe9t\xe9 s\xe9lectionn\xe9 (par exemple si l\u2019utilisateur a cliqu\xe9 sur le bouton ",(0,t.jsx)(s.strong,{children:"Annuler"})," dans la bo\xeete de dialogue d\u2019ouverture), la variable syst\xe8me OK prend la valeur 0 et la variable syst\xe8me Document est vide."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/select-folder",children:"Select folder"})]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return l}});var i=n(667294);let t={},r=i.createContext(t);function l(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);