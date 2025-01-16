"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17201"],{567629:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/export-structure-file","title":"Export structure file","description":"Export structure file ( cheminDossier {; options} ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/export-structure-file.md","sourceDirName":"commands-legacy","slug":"/commands/export-structure-file","permalink":"/docs/fr/commands/export-structure-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"export-structure-file","title":"Export structure file","slug":"/commands/export-structure-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ds","permalink":"/docs/fr/commands/ds"},"next":{"title":"Get 4D file","permalink":"/docs/fr/commands/get-4d-file"}}'),t=r("785893"),i=r("250065");let d={id:"export-structure-file",title:"Export structure file",slug:"/commands/export-structure-file",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"R\xe9sultat",id:"r\xe9sultat",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Export structure file"})," ( ",(0,t.jsx)(n.em,{children:"cheminDossier"})," {; ",(0,t.jsx)(n.em,{children:"options"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cheminDossier"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin du dossier de destination pour les fichiers projets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Options d'export"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Statuts et messages de validation (le cas \xe9ch\xe9ant)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Export structure file"})," d\xe9compose la structure de la base de donn\xe9es 4D courante en un ensemble de fichiers de type texte ou de fichiers natifs de type image et les stocke dans le ",(0,t.jsx)(n.em,{children:"cheminDossier"})," sp\xe9cifi\xe9. Par d\xe9faut, la structure de la base (m\xe9thodes, formulaires, catalogues, etc.) est int\xe9gralement export\xe9e. Vous pouvez filtrer les contenus \xe0 exporter \xe0 l'aide du param\xe8tre ",(0,t.jsx)(n.em,{children:"options"})," (voir ci-dessous)."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande vous permet de stocker des fichiers de structure de base de donn\xe9es dans un syst\xe8me de gestion de version (",(0,t.jsx)(n.em,{children:"i.e."}),", ",(0,t.jsx)(n.em,{children:"Git, Perforce,"})," etc.). Il est alors possible de comparer les modifications successives ou les modifications apport\xe9es par plusieurs sources \xe0 l'aide d'outils standards de gestion de version."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande peut \xeatre utilis\xe9e dans les cas suivants :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"4D en mode local ou 4D Server (une erreur est retourn\xe9e si elle est appel\xe9e depuis 4D en mode distant),"}),"\n",(0,t.jsx)(n.li,{children:"Base de donn\xe9es interpr\xe9t\xe9e (la commande ne fait rien si elle est appel\xe9e depuis une base de donn\xe9es .4DC)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Notez \xe9galement que lorsque la commande est appel\xe9e depuis un composant, elle exporte toujours la structure de la base de donn\xe9es h\xf4te."}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"cheminDossier"}),", passez le chemin du syst\xe8me du dossier o\xf9 les fichiers d'export doivent \xeatre stock\xe9s."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"options"})," vous permet de personnaliser le processus de conversion. L'objet ",(0,t.jsx)(n.em,{children:"options"})," peut contenir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"withLog"}),(0,t.jsx)(n.td,{children:"bool\xe9en ou cha\xeene"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:'vrai ou "always" : cr\xe9e un fichier log de conversion dans le dossier de destination Logs.'})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:'"ifNotEmpty" : cr\xe9e un fichier log de conversion uniquement s\'il contient des messages'})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"faux ou omis (d\xe9faut) : ne cr\xe9e pas de fichier log de conversion "})})]})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"makeProject"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:'vrai pour g\xe9n\xe9rer un fichier .4DProject dans le dossier "Project"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filter"}),(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Contenus \xe0 exporter. Si omis (d\xe9faut), tout est export\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"projectMethods"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les m\xe9thodes projet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databaseMethods"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les m\xe9thodes base de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"triggerMethods"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les m\xe9thodes trigger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"forms"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les formulaires"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pageFormat"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:'vrai pour exporter le format de page des formulaires dans la propri\xe9t\xe9 "pageFormat" de chaque fichier json du formulaire'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"catalog"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les d\xe9finitions de tables et de champs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"folders"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les d\xe9finitions de dossiers de l'Explorateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"settings"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les param\xe8tres de structure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menus"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les menus"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tips"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les infobulles"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lists"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les listes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filters"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les filtres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pictures"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les images \xe0 partir d'une biblioth\xe8que d'images"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resources"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter le dossier Ressources"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trash"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les m\xe9thodes et des formulaires plac\xe9s dans la corbeille (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"windowPositions"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les emplacements de fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"methodPreferences"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les pr\xe9f\xe9rences de l'\xe9diteur de m\xe9thodes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"buildSettings"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter le fichier buildApp.xml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataPath"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour copier, dans le fichier de pr\xe9f\xe9rences utilisateur du projet, le dernier chemin du fichier de donn\xe9es ouvert"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"directory"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les groupes et utilisateurs 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleSheets"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsxs)(n.td,{children:["vrai pour exporter les feuilles de style (",(0,t.jsx)(n.em,{children:"style sheets"}),") en CSS"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documentation"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"vrai pour exporter les commentaires de l'Explorateur en fichiers markdown"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:'(*) Le filtre "corbeille" est utile uniquement si les filtres "projectMethods" ou "forms" sont \xe9galement s\xe9lectionn\xe9s.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Lorsque le param\xe8tre ",(0,t.jsx)(n.em,{children:"options"})," est pass\xe9 et que l'objet \"filter\" est utilis\xe9, vous devez d\xe9clarer explicitement chaque propri\xe9t\xe9 destin\xe9e \xe0 l'export avec la valeur ",(0,t.jsx)(n.strong,{children:"vrai"}),". Lorsque cet objet est pass\xe9, 4D consid\xe8re que toutes les propri\xe9t\xe9s sont, par d\xe9faut, fix\xe9es \xe0 ",(0,t.jsx)(n.strong,{children:"faux"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,t.jsx)(n.p,{children:"La commande retourne un objet qui indique le statut final de l'export ainsi que des informations sur les irr\xe9gularit\xe9s et les erreurs survenues, le cas \xe9ch\xe9ant. Les propri\xe9t\xe9s suivantes sont retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"Vrai si l'export est r\xe9ussi, sinon Faux."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"messages"}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsx)(n.td,{children:"Collection d'objets d\xe9crivant les irr\xe9gularit\xe9s survenues durant l'export"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].severity"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsx)(n.td,{children:'Niveau d\'irr\xe9gularit\xe9. Valeurs possibles : "info", "erreur". Seul le niveau "erreur" d\xe9finit la propri\xe9t\xe9 "success" comme Faux.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].message"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsx)(n.td,{children:"Description de l'irr\xe9gularit\xe9 ou de l'erreur, par exemple \"Unsupported for object type\""})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].errors"}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsx)(n.td,{children:"Pile d'erreurs (le cas \xe9ch\xe9ant)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les objets listant des irr\xe9gularit\xe9s peuvent contenir des propri\xe9t\xe9s suppl\xe9mentaires selon le contexte."]}),"\n",(0,t.jsx)(n.p,{children:"Les erreurs peuvent \xeatre notamment :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"des \xe9l\xe9ments dupliqu\xe9s"}),"\n",(0,t.jsx)(n.li,{children:"des erreurs li\xe9es \xe0 la gestion de fichier (fichier d\xe9j\xe0 existant, fichier verrouill\xe9, disque plein, etc.)"}),"\n",(0,t.jsx)(n.li,{children:"une propri\xe9t\xe9 ou un objet formulaire non pris en charge (voir \xe9galement )."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:'Vous souhaitez exporter le fichier de structure de la base de donn\xe9es dans un dossier "Export" avec les param\xe8tres par d\xe9faut :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Object\n\xa0$result:=Export structure file("Export")\n\xa0If($result.success=True)\n\xa0\xa0\xa0\xa0ALERT("Export r\xe9ussi")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Erreur durant l\'export")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez exporter uniquement les m\xe9thodes projet et les m\xe9thodes base, ainsi qu'un fichier historique :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $option;$result : Object\n\xa0$option:=New object("filter";New object)\n\xa0$option.filter.projectMethods:=True\n\xa0$option.filter.databaseMethods:=True\n\xa0$option.withLog:="always"\n\xa0$result:=Export structure file("exportWithLog";$option)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-convert-to-dynamic",children:"FORM Convert to dynamic"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1565"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);