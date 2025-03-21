"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46009"],{196448:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"commands/file","title":"File","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/file.md","sourceDirName":"commands","slug":"/commands/file","permalink":"/docs/fr/20-R7/commands/file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffile.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"file","title":"File","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Fichier et dossier","permalink":"/docs/fr/20-R7/commands/theme/File-and-Folder"},"next":{"title":"Folder","permalink":"/docs/fr/20-R7/commands/folder"}}'),r=s("785893"),d=s("250065");let t={id:"file",title:"File",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsxs)(n.td,{children:["Nouvelle constante ",(0,r.jsx)(n.code,{children:"HTTP Client log file"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"File"})," ( ",(0,r.jsx)(n.em,{children:"path"})," : Text { ; ",(0,r.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.File",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"File"})," ( ",(0,r.jsx)(n.em,{children:"fileConstant"})," : Integer { ; * } ) : 4D.File"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin de fichier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fileConstant"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Constante de fichier 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pathType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"fk posix path"})," (par d\xe9faut) ou ",(0,r.jsx)(n.code,{children:"fk platform path"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"operator"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"* pour retourner le fichier de la base h\xf4te"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/API/FileClass",children:"4D.File"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nouvel objet fichier"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"File"})," cr\xe9e et retourne un nouvel objet de type ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/API/FileClass",children:(0,r.jsx)(n.code,{children:"4D.File"})}),". La commande accepte deux syntaxes :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"File ( path { ; pathType } { ; * })"})}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"path"}),", passez un chemin de fichier. Vous pouvez utiliser une chaine personnalis\xe9e ou un ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/paths#filesystem-pathnames",children:"filesystem"}),' (ex : "/DATA/myfile.txt").']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Seuls les noms de chemin absolus sont pris en charge par la commande ",(0,r.jsx)(n.code,{children:"File"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, 4D attend un chemin exprim\xe9 avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les d\xe9clarer \xe0 l'aide du param\xe8tre ",(0,r.jsx)(n.em,{children:"pathType"}),". Les constantes suivantes sont disponibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Commentaire"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk platform path"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Chemin exprim\xe9 dans une syntaxe sp\xe9cifique \xe0 la plate-forme (obligatoire en cas de chemin de plate-forme)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk posix path"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Chemin exprim\xe9 avec la syntaxe POSIX (par d\xe9faut)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"File ( fileConstant { ; * } )"})}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"fileConstant"}),", passez un fichier 4D interne ou un fichier syst\xe8me, \xe0 l'aide d'une des constantes suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Commentaire"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup history file"}),(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"Fichier d'historique des sauvegardes (voir Fichiers de configuration et de suivi). Stock\xe9 dans le dossier de destination de sauvegarde."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup log file"}),(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"Fichier journal des sauvegardes courant. Stock\xe9 dans le dossier Logs de l'application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup settings file"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Fichier backup.4DSettings par d\xe9faut (format xml), stock\xe9 dans le dossier Settings du projet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup settings file for data"}),(0,r.jsx)(n.td,{children:"17"}),(0,r.jsx)(n.td,{children:"fichier backup.4DSettings du fichier de donn\xe9es (format xml), stock\xe9 dans le dossier Settings du dossier data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Build application log file"}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"Fichier d'historique courant au format xml du g\xe9n\xe9rateur d'application. Stock\xe9 dans le dossier Logs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Build application settings file"}),(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:'Fichier de configuration par d\xe9faut du g\xe9n\xe9rateur d\'application ("buildApp.4DSettings"). Stock\xe9 dans le dossier Settings du projet.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Compacting log file"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"Fichier d'historique du compactage le plus r\xe9cent de la base, effectu\xe9 avec la commande Compact data file ou le Centre de s\xe9curit\xe9 et de maintenance (CSM). Stock\xe9 dans le dossier Logs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Current backup settings file"}),(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"fichier backup.4DSettings utilis\xe9 actuellement par l'application. Il peut s'agir du fichier backup.4DSettings par d\xe9faut ou d'un fichier de settings de backup utilisateur d\xe9fini pour le fichier de donn\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Debug log file"}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsxs)(n.td,{children:["Fichier d'enregistrement des \xe9v\xe9nements pour le d\xe9bogage cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(Debug log recording)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Diagnostic log file"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsxs)(n.td,{children:["Fichier de diagnostic de 4D, cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(Diagnostic log recording)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Directory file"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"fichier directory.json, contenant la description des groupes et utilisateurs (le cas \xe9ch\xe9ant) du projet. Il se situe soit dans le dossier Settings de l'utilisateur (par d\xe9faut, s'applique \xe0 tout le projet), soit dans le dossier Settings du data (sp\xe9cifique \xe0 un fichier de donn\xe9es)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP Client log file"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsxs)(n.td,{children:["Fichier journal cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"HTTP SET OPTION(HTTP client log)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP debug log file"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsxs)(n.td,{children:["Fichier d'enregistrement des requ\xeates Web cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"WEB SET OPTION(Web log recording)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP log file"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsxs)(n.td,{children:["Fichier de d\xe9bogage des requ\xeates HTTP, cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"WEB SET OPTION(Web debug log)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IMAP Log file"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsxs)(n.td,{children:["Fichier d'historique cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(IMAP Log)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last backup file"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Dernier fichier de sauvegarde g\xe9n\xe9r\xe9, nomm\xe9 ",(0,r.jsx)(n.code,{children:"\\<applicationName>[bkpNum].4BK"}),", stock\xe9 \xe0 un emplacement personnalis\xe9."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last journal integration log file"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"Chemin complet du dernier fichier journal d'int\xe9gration de l'historique (stock\xe9 dans le dossier Logs de l'application restaur\xe9e), le cas \xe9ch\xe9ant. Ce fichier est cr\xe9\xe9 en mode auto-repair, d\xe8s qu'une int\xe9gration de fichier d'historique a lieu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Repair log file"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"Fichier d'historique des r\xe9parations effectu\xe9es sur la base par le Centre de s\xe9curit\xe9 et de maintenance (CSM). Stock\xe9 dans le dossier Logs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request log file"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsxs)(n.td,{children:["Fichier des requ\xeates client/server standard (hors requ\xeates Web), cr\xe9\xe9 par ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(4D Server log recording)"})," ou ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(Client log recording)"}),". Si la commande est appel\xe9e sur le serveur, le chemin du fichier des requ\xeates du serveur est retourn\xe9 (stock\xe9 dans le dossier Logs du serveur). Si la commande est appel\xe9e sur un client, le chemin du fichier des requ\xeates du client est retourn\xe9 (stock\xe9 dans le dossier Logs local du client)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SMTP log file"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsxs)(n.td,{children:["Fichier des requ\xeates SMTP cr\xe9\xe9 par la commande ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER(SMTP Log)"}),". Stock\xe9 dans le dossier Logs."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User settings file"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Fichier settings.4DSettings pour tous les fichiers de donn\xe9es (si activ\xe9), stock\xe9 dans le dossier Preferences \xe0 c\xf4t\xe9 du fichier de structure."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User settings file for data"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Fichier settings.4DSettings file pour le fichier de donn\xe9es courant, stock\xe9 dans le dossier Preferences \xe0 c\xf4t\xe9 du fichier de donn\xe9es."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Verification log file"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:["Fichier d'historique de v\xe9rification le plus r\xe9cent de la base, cr\xe9\xe9 par les commandes ",(0,r.jsx)(n.code,{children:"VERIFY CURRENT DATA FILE"})," et ",(0,r.jsx)(n.code,{children:"VERIFY DATA FILE"})," ou via le Centre de s\xe9curit\xe9 et de maintenance de la base (CSM). Stock\xe9 dans le dossier Logs."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si le fichier ",(0,r.jsx)(n.em,{children:"fileConstant"})," cible n'existe pas, un objet null est retourn\xe9. Aucune erreur n'est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la commande est appel\xe9e \xe0 partir d'un composant, passez le param\xe8tre optionnel ",(0,r.jsx)(n.code,{children:"*"})," pour lire le chemin de la base h\xf4te. Sinon, si vous omettez le param\xe8tre ",(0,r.jsx)(n.code,{children:"*"}),", un objet null est syst\xe9matiquement retourn\xe9."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.a,{href:"/docs/fr/20-R7/API/FileClass",children:[(0,r.jsx)(n.code,{children:"4D.File"})," class"]}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/folder",children:"Folder"}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-4d-file",children:"Get 4D file"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/path-to-object",children:"Path to object"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1566"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(667294);let r={},d=i.createContext(r);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);