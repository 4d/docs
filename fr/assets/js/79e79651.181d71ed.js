"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85189"],{136905:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/sql-export-database","title":"SQL EXPORT DATABASE","description":"SQL EXPORT DATABASE ( cheminDossier {; nbFichiers {; tailleLimiteFichiers {; tailleLimiteChamps}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-export-database.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-database","permalink":"/docs/fr/commands/sql-export-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-export-database","title":"SQL EXPORT DATABASE","slug":"/commands/sql-export-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/fr/commands/sql-execute-script"},"next":{"title":"SQL EXPORT SELECTION","permalink":"/docs/fr/commands/sql-export-selection"}}'),r=n("785893"),i=n("250065");let a={id:"sql-export-database",title:"SQL EXPORT DATABASE",slug:"/commands/sql-export-database",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,r.jsx)(s.em,{children:"cheminDossier"})," {; ",(0,r.jsx)(s.em,{children:"nbFichiers"})," {; ",(0,r.jsx)(s.em,{children:"tailleLimiteFichiers"})," {; ",(0,r.jsx)(s.em,{children:"tailleLimiteChamps"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cheminDossier"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Chemin d'acc\xe8s du dossier d'export ou \"\" pour afficher une bo\xeete de dialogue de s\xe9lection de dossier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nbFichiers"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nombre maximum de fichiers par dossier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tailleLimiteFichiers"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Valeur de limite de taille des fichiers d'exportation (en Ko)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tailleLimiteChamps"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Limite de taille au-dessous de laquelle le contenu d'un champ Texte, BLOB ou Image sera int\xe9gr\xe9 au fichier principal (en octets)"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"SQL EXPORT DATABASE"}),' exporte au format SQL tous les enregistrements de toutes les tables de la base. En SQL, cette op\xe9ration d\u2019exportation globale est appel\xe9e "Dump".']}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec une connexion externe ouverte directement ou via ODBC."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour chaque table, la commande g\xe9n\xe8re un fichier texte contenant les instructions SQL n\xe9cessaires \xe0 l\u2019importation des donn\xe9es dans une autre base. Ce fichier peut \xeatre utilis\xe9 directement par la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/sql-execute-script",children:"SQL EXECUTE SCRIPT"})," afin d\u2019importer les donn\xe9es dans une autre base 4D."]}),"\n",(0,r.jsxs)(s.p,{children:['Les fichiers d\u2019export seront plac\xe9s dans un dossier nomm\xe9 "SQLExport" cr\xe9\xe9 dans le dossier de destination d\xe9sign\xe9 par le param\xe8tre ',(0,r.jsx)(s.em,{children:"cheminDossier"}),'. A noter que si un dossier "SQLExport" existe d\xe9j\xe0 \xe0 l\u2019emplacement d\xe9fini, la commande le remplace sans qu\u2019aucun message d\u2019alerte n\u2019apparaisse.',(0,r.jsx)(s.br,{}),'\nSi vous passez une cha\xeene vide dans ce param\xe8tre, 4D affiche une bo\xeete de dialogue standard permettant \xe0 l\u2019utilisateur de d\xe9signer le dossier de destination. Par d\xe9faut, la bo\xeete de dialogue affiche le dossier courant de l\u2019utilisateur ayant ouvert la session ("Mes Documents" sous Windows ou "Documents" sous Mac OS).']}),"\n",(0,r.jsx)(s.p,{children:"Pour chaque table export\xe9e, la commande effectue les actions suivantes :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"un sous-dossier du nom de la table est cr\xe9\xe9 dans le dossier de destination."}),"\n",(0,r.jsxs)(s.li,{children:['un fichier texte nomm\xe9 "Export.sql" est cr\xe9\xe9 dans le sous-dossier. Ce fichier est encod\xe9 en UTF-8 avec BOM (marque d\'ordre des octets). Il contient des ordres SQL ',(0,r.jsx)(s.em,{children:"INSERT"})," correspondant aux donn\xe9es export\xe9es. Les valeurs des champs sont s\xe9par\xe9es par des caract\xe8res deux-points. Il peut y avoir moins de valeurs que de champs dans la table. Dans ce cas, les champs restants seront consid\xe9r\xe9s NULL."]}),"\n",(0,r.jsxs)(s.li,{children:['si la table contient des champs BLOB, image ou texte (textes \xe0 stockage externe, c\'est-\xe0-dire stock\xe9s en-dehors des enregistrements), par d\xe9faut la commande cr\xe9e un sous-dossier suppl\xe9mentaire nomm\xe9 "BLOBS" \xe0 c\xf4t\xe9 du fichier "Export.sql" et y cr\xe9e autant de sous-dossiers que n\xe9cessaire nomm\xe9s "BlobsN\u201D. Ces sous-dossiers stockeront sous forme de fichiers s\xe9par\xe9s le contenu de tous les champs BLOB, image ou texte externe des enregistrements de la table. Les fichiers BLOB sont nomm\xe9s "BlobNNNNN.BLOB", les fichiers texte sont nomm\xe9s "TEXTNNNNN.TXT" (o\xf9 NNNNN est un nombre unique g\xe9n\xe9r\xe9 par l\u2019application). Les fichiers image sont nomm\xe9s PICTNNNNN.ZZZZ (o\xf9 NNNNN est un nombre unique g\xe9n\xe9r\xe9 par l\u2019application et ZZZZ est l\u2019extension). Lorsque c\u2019est possible, les images sont export\xe9es dans leur format natif d\u2019origine avec l\u2019extension correspondant au type d\u2019image (.jpg, .png, etc.). Si l\u2019export au format natif n\u2019est pas possible, les images sont export\xe9es dans le format 4D interne avec l\u2019extension .4PCT.',(0,r.jsx)(s.br,{}),"\nCe fonctionnement par d\xe9faut peut \xeatre modul\xe9 en fonction de la taille des donn\xe9es contenues dans le champ \xe0 l'aide du param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"tailleLimiteChamps"})," (cf. ci-dessous).",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Note :"})," Ce fonctionnement diff\xe8re lorsque vous ex\xe9cutez ",(0,r.jsx)(s.strong,{children:"SQL EXPORT DATABASE"}),' depuis un 4D en mode distant. Dans ce contexte, les donn\xe9es \xe0 stockage externe sont automatiquement incluses dans le fichier "Export.sql".']}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre ",(0,r.jsx)(s.em,{children:"nbFichiers"}),', la commande cr\xe9era autant de sous-dossiers "BlobsN" que n\xe9cessaire afin que chacun d\u2019eux ne contienne pas plus de ',(0,r.jsx)(s.em,{children:"nbFichiers"})," fichiers BLOBs, images ou textes externes. Par d\xe9faut, si le param\xe8tre ",(0,r.jsx)(s.em,{children:"nbFichiers"})," est omis, la commande limite le nombre de fichiers \xe0 200. Si vous passez 0, chaque sous-dossier contiendra au plus un seul fichier."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"tailleLimiteFichiers"}),' vous permet de d\xe9finir une limite de taille (en ko) pour chaque fichier "Export.sql" cr\xe9\xe9 sur le disque. Lorsque la taille du fichier d\u2019export en cours de cr\xe9ation atteint la valeur d\xe9finie dans ',(0,r.jsx)(s.em,{children:"tailleLimiteFichiers"}),', 4D stoppe l\u2019\xe9criture des enregistrements, referme le fichier et en cr\xe9e un nouveau nomm\xe9 "ExportN.sql" (o\xf9 N repr\xe9sente le num\xe9ro de s\xe9quence) \xe0 c\xf4t\xe9 du pr\xe9c\xe9dent. A noter qu\'il s\'agit d\'une limite th\xe9orique : la taille effective des fichiers "ExportN.sql" d\xe9passe la valeur d\xe9finie dans ',(0,r.jsx)(s.em,{children:"tailleLimiteFichiers"})," car le fichier n\u2019est referm\xe9 qu\u2019\xe0 l\u2019issue de l\u2019\xe9criture compl\xe8te de l\u2019enregistrement en cours d\u2019exportation (le contenu des enregistrements n'est pas fractionn\xe9). La valeur minimale accept\xe9e est de 100 et la valeur maximale (valeur par d\xe9faut) est de 100 000 (100 Mo)."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"tailleLimiteChamps"})," vous permet de d\xe9finir une taille pivot au-dessous de laquelle le contenu d'un champ BLOB, image ou texte externe sera int\xe9gr\xe9 au fichier principal \"Export.sql\" et non sauvegard\xe9 en tant que fichier s\xe9par\xe9. Ce param\xe8tre a pour but d'optimiser l'op\xe9ration d'export en limitant le nombre de sous-dossiers et de fichiers cr\xe9\xe9s sur le disque.",(0,r.jsx)(s.br,{}),"\nLe param\xe8tre doit \xeatre exprim\xe9 en octets. Par exemple, si vous passez 1000, tous les champs BLOB, image ou texte externe contenant des donn\xe9es d'une taille inf\xe9rieure ou \xe9gale \xe0 1000 octets seront int\xe9gr\xe9s au fichier d'export principal.",(0,r.jsx)(s.br,{}),"\nA noter que les donn\xe9es des champs binaires (BLOB et image) int\xe9gr\xe9es au fichier d'export sont \xe9crites au format hexad\xe9cimal, sous la forme X'0f20' (notation hexad\xe9cimale SQL standard, cf. ",(0,r.jsx)(s.em,{children:"literal"}),"). Ce format est automatiquement pris en charge par le moteur SQL de 4D.",(0,r.jsx)(s.br,{}),"\nPar d\xe9faut, si le param\xe8tre ",(0,r.jsx)(s.em,{children:"tailleLimiteChamps"})," est omis, les champs BLOB, image et texte externe sont toujours export\xe9s sous forme de fichiers externes, quelle que soit leur taille."]}),"\n",(0,r.jsx)(s.p,{children:"Dans le fichier d\u2019export, il peut y avoir moins de valeurs que de champs dans la table. Dans ce cas, les champs vides seront consid\xe9r\xe9s comme NULL. Vous pouvez \xe9galement passer la valeur NULL dans un champ."}),"\n",(0,r.jsxs)(s.p,{children:["Si l\u2019export s\u2019est d\xe9roul\xe9 correctement, la variable ",(0,r.jsx)(s.em,{children:"OK"})," prend la valeur 1. Dans le cas contraire, elle prend la valeur 0."]}),"\n",(0,r.jsx)(s.h5,{id:""}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Cette commande ne prend pas en charge les champs de type Objet."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var t=n(667294);let r={},i=t.createContext(r);function a(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);