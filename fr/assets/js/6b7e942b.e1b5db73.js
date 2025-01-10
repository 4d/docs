"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82905"],{991191:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-document-properties","title":"GET DOCUMENT PROPERTIES","description":"GET DOCUMENT PROPERTIES ( nomFichier ; verrouill\xe9 ; invisible ; cr\xe9\xe9\xa0le ; cr\xe9\xe9\xa0\xe0\xa0 ; modifi\xe9\xa0le ; modifi\xe9\xa0\xe0 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-document-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-properties","permalink":"/docs/fr/commands/get-document-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-document-properties","title":"GET DOCUMENT PROPERTIES","slug":"/commands/get-document-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get document position","permalink":"/docs/fr/commands/get-document-position"},"next":{"title":"Get document size","permalink":"/docs/fr/commands/get-document-size"}}'),s=r("785893"),i=r("250065");let d={id:"get-document-properties",title:"GET DOCUMENT PROPERTIES",slug:"/commands/get-document-properties",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"nomFichier"})," ; ",(0,s.jsx)(n.em,{children:"verrouill\xe9"})," ; ",(0,s.jsx)(n.em,{children:"invisible"})," ; cr\xe9\xe9\xa0le ; cr\xe9\xe9\xa0\xe0\xa0 ; modifi\xe9\xa0le ; modifi\xe9\xa0\xe0 )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomFichier"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom du document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"verrouill\xe9"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Verrouill\xe9 (Vrai) ou non verrouill\xe9 (Faux)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"invisible"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Invisible (Vrai) ou visible (Faux)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cr\xe9\xe9\xa0le"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Date de cr\xe9ation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cr\xe9\xe9\xa0\xe0"}),(0,s.jsx)(n.td,{children:"Heure"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Heure de cr\xe9ation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifi\xe9\xa0le"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Date de la derni\xe8re modification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifi\xe9\xa0\xe0"}),(0,s.jsx)(n.td,{children:"Heure"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Heure de la derni\xe8re modification"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," retourne des informations sur le document dont le nom ou le chemin d'acc\xe8s est pass\xe9 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Apr\xe8s l'appel :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"verrouill\xe9"})," retourne Vrai si le document est verrouill\xe9. Un document verrouill\xe9 ne peut pas \xeatre modifi\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"invisible"})," retourne Vrai si le document est cach\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"cr\xe9\xe9 le"})," et ",(0,s.jsx)(n.em,{children:"cr\xe9\xe9 \xe0"})," retournent la date et l'heure de cr\xe9ation du document."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"modifi\xe9 le"})," et ",(0,s.jsx)(n.em,{children:"modifi\xe9 \xe0"})," retournent la date et l'heure de la derni\xe8re modification du document."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous avez cr\xe9\xe9 une base de documentation et vous voulez exporter tous les enregistrements cr\xe9\xe9s dans le base vers un document sur disque. Comme la base est r\xe9guli\xe8rement mise \xe0 jour, vous voulez \xe9crire un algorithme d'export qui cr\xe9e ou recr\xe9e chaque document sur disque si le document n'existe pas ou si l'enregistrement correspondant a \xe9t\xe9 modifi\xe9 depuis la derni\xe8re sauvegarde du document. Par cons\xe9quent, vous devez comparer la date et l'heure de modification du document (s'il existe) avec celles de l'enregistrement correspondant. Pour illustrer cet exemple, nous allons utiliser la table suivante :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(928121).Z+"",width:"182",height:"175"})}),"\n",(0,s.jsx)(n.p,{children:"Plut\xf4t que de sauvegarder une date et une heure dans chaque enregistrement, vous pouvez stocker un \"marqueur\" dont la valeur exprime le nombre de secondes \xe9coul\xe9es depuis une date ant\xe9rieure arbitraire (dans cet exemple, le 1er janvier 1995 \xe0 00:00:00) ainsi que la date et l'heure de la sauvegarde de l'enregistrement."}),"\n",(0,s.jsxs)(n.p,{children:["Dans notre exemple, le champ ",(0,s.jsx)(n.em,{children:"[Documents]Marqueur cr\xe9ation"})," contient le marqueur de cr\xe9ation de l'enregistrement et le champ ",(0,s.jsx)(n.em,{children:"[Documents]Marqueur modification"})," contient le marqueur de la derni\xe8re modification de l'enregistrement."]}),"\n",(0,s.jsx)(n.p,{children:"La m\xe9thode projet marqueurTemps suivante calcule le marqueur de temps par rapport \xe0 une date et une heure sp\xe9cifiques ou par rapport \xe0 la date et l'heure courantes si aucun param\xe8tre n'est pass\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet marqueurTemps\n\xa0\xa0// marqueurTemps { ( Date ; Heure ) } -> Entier long\n\xa0\xa0// marqueurTemps { ( Date ; Heure ) } -> Nombre de secondes depuis le 1er janvier 1995\n\xa0\n\xa0var $1;$vdDate : Date\n\xa0var $2;$vhTime : Time\n\xa0var $0 : Integer\n\xa0\n\xa0If(Count parameters=0)\n\xa0\xa0\xa0\xa0$vdDate:=Current date\n\xa0\xa0\xa0\xa0$vhTime:=Current time\n\xa0Else\n\xa0\xa0\xa0\xa0$vdDate:=$1\n\xa0\xa0\xa0\xa0$vhTime:=$2\n\xa0End if\n\xa0$0:=(($vdDate-!01/01/95!)*86400)+$vhTime\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Avec cette m\xe9thode, vous pouvez encoder toutes les dates et les heures situ\xe9es entre le ",(0,s.jsx)(n.em,{children:"01/01/95"})," \xe0 ",(0,s.jsx)(n.em,{children:"00:00:00"})," et le ",(0,s.jsx)(n.em,{children:"19/01/2063"})," \xe0 ",(0,s.jsx)(n.em,{children:"03:14:07"}),", ce qui repr\xe9sente l'intervalle de donn\xe9es exploitables par un entier long (de ",(0,s.jsx)(n.em,{children:"0"})," \xe0 ",(0,s.jsx)(n.em,{children:"2^31"})," moins 1)."]}),"\n",(0,s.jsx)(n.p,{children:"A l'inverse, les m\xe9thodes projet Marqueur vers date et Marqueur vers heure vous permettent d'extraire la date et l'heure stock\xe9es dans un marqueur :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Marqueur vers date\n\xa0\xa0// Marqueur vers date ( Entier long ) -> Date\n\xa0\xa0// Marqueur vers date ( Marqueur ) -> Date extraite\n\xa0\n\xa0var $0 : Date\n\xa0var $1 : Integer\n\xa0\n\xa0$0:=!01/01/95!+($1\\86400)\n\xa0\n\xa0\xa0// M\xe9thode projet Marqueur vers heure\n\xa0\xa0// Marqueur vers heure ( Entier long ) -> Heure\n\xa0\xa0// Marqueur vers heure ( Marqueur ) -> Heure extraite\n\xa0\n\xa0var $0 : Time\n\xa0var $1 : Integer\n\xa0\n\xa0$0:=Time(Time string(\u202000:00:00\u2020+($1%86400)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Pour vous assurer que les marqueurs des enregistrements sont correctement mis \xe0 jour, quelle que soit la mani\xe8re dont ils sont cr\xe9\xe9s ou modifi\xe9s, il suffit de faire appliquer cette r\xe8gle par le trigger de la table ",(0,s.jsx)(n.em,{children:"[Documents]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Trigger de la table [Documents]\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving New Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Marqueur cr\xe9ation:=marqueurTemps\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Marqueur modification:=marqueurTemps\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving Existing Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Marqueur modification:=marqueurTemps\n\xa0End case\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Une fois que cela est impl\xe9ment\xe9 dans votre base, il suffit d'\xe9crire la m\xe9thode projet CREER DOCUMENTATION list\xe9e ci-dessous. Nous utilisons ",(0,s.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})," pour g\xe9rer la date et l'heure de cr\xe9ation et de modification des documents."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode projet CREER DOCUMENTATION\n\xa0\n\xa0C_STRING(255;$vsPath;$vsDocPathName;$vsDocName)\n\xa0var $vlDoc : Integer\n\xa0var $vbOnWindows;$vbDoIt;$vbLocked;$vbInvisible : Boolean\n\xa0var $vhDocRef;$vhCreatedAt;$vhModifiedAt : Time\n\xa0var $vdCreatedOn;$vdModifiedOn : Date\n\xa0\n\xa0If(Application type=4D Client)\n\xa0\xa0// Si 4D Client est utilis\xe9, sauvegarder les documents localement\n\xa0\xa0// c\'est-\xe0-dire sur le poste client o\xf9 se trouve 4D Client\n\xa0\xa0\xa0\xa0$vsPath:=Nom long vers chemin d\'acc\xe8s(Application type)\n\xa0Else\n\xa0\xa0// Else, sauvegarder les documents l\xe0 o\xf9 se trouve le fichier de donn\xe9es\n\xa0\xa0\xa0\xa0$vsPath:=Nom long vers chemin d\'acc\xe8s(Data file)\n\xa0End if\n\xa0\xa0// Stocker les documents dans un r\xe9pertoire nomm\xe9 arbitrairement "Documentation"\n\xa0$vsPath:=$vsPath+"Documentation"+Char(Symbole s\xe9parateur)\n\xa0\xa0// Si ce r\xe9pertoire n\'existe pas, le cr\xe9er\n\xa0If(Test path name($vsPath)\xa0#Is a folder)\n\xa0\xa0\xa0\xa0CREATE FOLDER($vsPath)\n\xa0End if\n\xa0\xa0// Etablir la liste des documents existants\n\xa0\xa0// car nous allons devoir supprimer ceux qui sont obsol\xe8tes, autrement dit\n\xa0\xa0// ceux dont les enregistrements correspondants ont \xe9t\xe9 supprim\xe9s.\n\xa0ARRAY STRING(255;$asDocument;0)\n\xa0DOCUMENT LIST($vsPath;$asDocument)\n\xa0\xa0// S\xe9lection de tous les enregistrements de la table [Documents]\n\xa0ALL RECORDS([Documents])\n\xa0\xa0// For each enregistremnt\n\xa0$vlNbRecords:=Records in selection([Documents])\n\xa0$vlNbDocs:=0\n\xa0$vbOnWindows:=Sous Windows\n\xa0For($vlDoc;1;$vlNbRecords)\n\xa0\xa0// Supposons que nous aurons \xe0 (re)cr\xe9er le document sur disque\n\xa0\xa0\xa0\xa0$vbDoIt:=True\n\xa0\xa0// Calcul du nom et du chemin d\'acc\xe8s au document\n\xa0\xa0\xa0\xa0$vsDocName:="DOC"+String([Documents]Num\xe9ro;"00000")\n\xa0\xa0\xa0\xa0$vsDocPathName:=$vsPath+$vsDocName\n\xa0\xa0// Est-ce que ce document existe d\xe9j\xe0 ?\n\xa0\xa0\xa0\xa0If(Test path name($vsDocPathName+".HTM")=Is a document)\n\xa0\xa0// Si oui, retirer le document de la liste des documents\n\xa0\xa0// qui peuvent \xeatre supprim\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlElem:=Find in array($asDocument;$vsDocName+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asDocument;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Est-ce que le document a \xe9t\xe9 stock\xe9 apr\xe8s la derni\xe8re modification de l\'enregistrement?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;$vdCreatedOn;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhCreatedAt;$vdModifiedOn;$vhModifiedAt)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(marqueurTemps($vdModifiedOn;$vhModifiedAt)>=[Documents]Marqueur modification)\n\xa0\xa0//Si oui, nous n\'avons pas besoin de recr\xe9er le document\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vbDoIt:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0//Le document n\'existe pas, mettre ces deux variables \xe0 z\xe9ro, pour que\n\xa0\xa0// nous sachions que nous devrons les traiter avant de fixer les propri\xe9t\xe9s finales\n\xa0\xa0// du document\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn:=!00/00/00!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModifiedAt:=\u202000:00:00\u2020\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Avons-nous besoin de (re)cr\xe9er le document?\n\xa0\xa0\xa0\xa0If($vbDoIt)\n\xa0\xa0// Si oui, incr\xe9menter le nombre de documents mis \xe0 jour\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbDocs:=$vlNbDocs+1\n\xa0\xa0// Supprimer le document s\'il existe d\xe9j\xe0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocPathName+".HTM")\n\xa0\xa0// Et le recr\xe9er\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vbOnWindows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocPathName;"HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocPathName+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0//...\n\xa0\xa0// Ecrivons ici le contenu du document\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vdModifiedOn=!00/00/00!)\n\xa0\xa0// Le document n\'existait pas, fixer les valeurs correctes pour\n\xa0\xa0// la date et l\'heure de modification\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn:=Current date\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModifiedAt:=Current time\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Changer les propri\xe9t\xe9s du document de telle mani\xe8re que sa date et son heure de cr\xe9ation\n\xa0\xa0// soit \xe9gales \xe0 celles de l\'enregistrement correspondant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;Marqueur vers date([Documents]Marqueur cr\xe9ation);Marqueur vers heure([Documents]Marqueur cr\xe9ation);$vdModifiedOn;$vhModifiedAt)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Juste pour savoir ce qui se passe\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Traitement du document "+String($vlDoc)+" sur "+Chaine($vlNbRecords))\n\xa0\xa0\xa0\xa0NEXT RECORD([Documents])\n\xa0End for\n\xa0\xa0//Suppression des documents obsol\xe8tes, c\'est-\xe0-dire ceux\n\xa0\xa0// qui sont toujours dans le tableau $asDocument\n\xa0For($vlDoc;1;Size of array($asDocument))\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsPath+$asDocument{$vlDoc})\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Suppression du document obsol\xe8te: "+Char(34)+$asDocument{$vlDoc}+Char(34))\n\xa0End for\n\xa0\xa0//C\'est la fin\n\xa0ALERT("Nombre de documents trait\xe9s : "+String($vlNbRecords)+Caractere(13)+"Nombre de documents mis \xe0 jour : "+Chaine($vlNbDocs)+Caractere(13)+"Nombre de documents supprim\xe9s : "+Chaine(Taille tableau($asDocument)))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"477"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},928121:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);