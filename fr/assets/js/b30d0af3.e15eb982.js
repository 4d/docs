"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64680"],{116702:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","description":"APPEND DATA TO PASTEBOARD ( typeDonn\xe9es ; donn\xe9es )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/append-data-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/append-data-to-pasteboard","permalink":"/docs/fr/commands/append-data-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-data-to-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","slug":"/commands/append-data-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Conteneur de donn\xe9es","permalink":"/docs/fr/commands/theme/Pasteboard"},"next":{"title":"CLEAR PASTEBOARD","permalink":"/docs/fr/commands/clear-pasteboard"}}'),t=s("785893"),a=s("250065");let i={id:"append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",slug:"/commands/append-data-to-pasteboard",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function p(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"APPEND DATA TO PASTEBOARD"})," ( ",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"})," ; ",(0,t.jsx)(n.em,{children:"donn\xe9es"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeDonn\xe9es"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type des donn\xe9es \xe0 ajouter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"donn\xe9es"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Donn\xe9es \xe0 ajouter au conteneur"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"APPEND DATA TO PASTEBOARD"})," ajoute dans le conteneur les donn\xe9es du type sp\xe9cifi\xe9 dans ",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"})," pr\xe9sentes dans le BLOB ",(0,t.jsx)(n.em,{children:"donn\xe9es"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Dans le cadre d'une op\xe9ration de copier/coller, le conteneur de donn\xe9es correspond au Presse-papiers."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"})," une valeur d\xe9finissant le type de donn\xe9es \xe0 ajouter. Vous pouvez passer une signature 4D, un type UTI (Mac OS), un nom/num\xe9ro de format (Windows), ou un type de 4 caract\xe8res (compatibilit\xe9). Pour plus d'informations sur ces types, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Gestion du conteneur de donn\xe9es"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note pour les utilisateurs Windows :"})," Lorsque la commande est utilis\xe9e avec des donn\xe9es de type texte (",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"}),' vaut "TEXT", com.4d.private.text.native ou com.4d.private.text.utf16), la cha\xeene contenue dans le param\xe8tre BLOB ',(0,t.jsx)(n.em,{children:"donn\xe9es"})," doit se terminer par le caract\xe8re NULL sous Windows."]}),"\n",(0,t.jsxs)(n.p,{children:["G\xe9n\xe9ralement, vous utilisez la commande ",(0,t.jsx)(n.strong,{children:"APPEND DATA TO PASTEBOARD"})," pour placer plusieurs instances des m\xeames donn\xe9es dans le conteneur de donn\xe9es ou pour y ajouter des valeurs qui ne sont pas du texte ou une image. Pour ajouter de nouvelles donn\xe9es au conteneur, il faut d'abord l'effacer \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si vous voulez effacer le conteneur et y ajouter :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["du texte, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["une image, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["un chemin d'acc\xe8s de fichier (glisser-d\xe9poser), utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Notez cependant que si un BLOB contient du texte ou une image, vous pouvez utiliser la commande ",(0,t.jsx)(n.strong,{children:"APPEND DATA TO PASTEBOARD"})," pour y ajouter du texte ou une image."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"A l'aide des commandes du th\xe8me Conteneur de donn\xe9es et des BLOBs, vous pouvez \xe9crire des m\xe9thodes de Couper/Copier/Coller pour g\xe9rer des donn\xe9es structur\xe9es au lieu d'une seule information. Dans l'exemple suivant, les deux m\xe9thodes projet \xe9crire enregistrement dans Presse papiers et lire enregistrement dans Presse papiers vous permettent de traiter un enregistrement comme une information \xe0 copier dans le Presse-papiers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet \xe9crire enregistrement dans Presse papiers\n\xa0\xa0// \xe9crire enregistrement dans Presse papiers ( Num\xe9rique )\n\xa0\xa0// \xe9crire enregistrement dans Presse papiers ( Num\xe9ro de table )\n\xa0\n\xa0var $1;$vlChamp;$vlTypeChamp : Integer\n\xa0var $vpTable;$vpChamp : Pointer\n\xa0C_STRING(255;$vaNomDoc)\n\xa0var $vtDonn\xe9esEnregistrement;$vtDonn\xe9esChamp : Text\n\xa0var $vxDonn\xe9esEnregistrement : Blob\n\xa0\n\xa0\xa0// Effacer le Presse-papiers (il restera vide s'il n'y a pas d'enregistrement courant)\n\xa0CLEAR PASTEBOARD\n\xa0\xa0// Obtenir un pointeur vers la table dont le num\xe9ro est pass\xe9 en param\xe8tre\n\xa0$vpTable:=Table($1)\n\xa0\xa0// S'il y a un enregistrement courant pour cette table\n\xa0If((Record number($vpTable->)>=0)\xa0|\xa0(Is new record($vpTable->)))\n\xa0\xa0// Initialiser la variable Texte qui contiendra l'image de texte de l'enregistrement\n\xa0\xa0\xa0\xa0$vtDonn\xe9esEnregistrement:=\"\"\n\xa0\xa0// For each champ de l'enregistrement :\n\xa0\xa0\xa0\xa0For($vlChamp;1;Last field number($1))\n\xa0\xa0// Obtenir le type du champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlChamp;$vlTypeChamp)\n\xa0\xa0// Obtenir un pointeur vers le champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp:=Field($1;$vlChamp)\n\xa0\xa0// Selon le type du champ, copier (ou non) ses donn\xe9es de fa\xe7on appropri\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlTypeChamp=Is alpha field)\xa0|\xa0($vlTypeChamp=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=$vpChamp->\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlTypeChamp=Is real)\xa0|\xa0($vlTypeChamp=Is integer)\xa0|\xa0($vlTypeChamp=Is longint)|\xa0($vlTypeChamp=Is date)|($vlTypeChamp=Is time))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=String($vpChamp->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTypeChamp=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=String(Num($vpChamp->);\"Oui;;Non\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Passer et ignorer les autres types de champs\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=\"\"\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// Accumuler les donn\xe9es sur le champ dans une variable texte qui stocke l'image de texte de l'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esEnregistrement:=$vtDonn\xe9esEnregistrement+Field name($1;$vlChamp)+\":\"+Char(9)+$vtDonn\xe9esChamp+CR\n\xa0\xa0// Note : La m\xe9thode CR retourne Caractere(13) sous Mac OS et Caractere(13)+Caractere(10) sous Windows\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Mettre l'image de texte de l'enregistrement dans le Presse-papiers\n\xa0\xa0\xa0\xa0SET TEXT TO PASTEBOARD($vtDonn\xe9esEnregistrement)\xa0\xa0\n\xa0\xa0// Nommez le fichier d'Album dans le Dossier temporaire\n\xa0\xa0\xa0\xa0$vaNomDoc:=Temporary folder+\"Album\"+String(1+(Hasard%99))\n\xa0\xa0// Supprimer le fichier d'Album s'il existe (il faut tester une erreur ici)\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vaNomDoc)\n\xa0\xa0// Cr\xe9ez le fichier d'Album\n\xa0\xa0\xa0\xa0SET CHANNEL(10;$vaNomDoc)\n\xa0\xa0// Envoyer l'enregistrement entier dans le Presse-papiers\n\xa0\xa0\xa0\xa0SEND RECORD($vpTable->)\n\xa0\xa0// Fermer le fichier d'Album\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// Charger le fichier d'Album dans un BLOB\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($vaNomDoc;$vxDonn\xe9esEnregistrement)\n\xa0\xa0// Nous n'avons plus besoin du fichier d'Album\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vaNomDoc)\n\xa0\xa0// Ajouter l'image compl\xe8te de l'enregistrement dans le Presse-papiers\n\xa0\xa0// Note: nous utilisons le type de donn\xe9es \"4Drc\" de fa\xe7on arbitraire\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD(\"4Drc\";$vxDonn\xe9esEnregistrement)\n\xa0\xa0// Le Presse-papiers contient :\n\xa0\xa0// (1) Une image de texte de l'enregistrement (comme illustr\xe9 dans les copies d'\xe9cran ci-dessous)\n\xa0\xa0// (2) Une image enti\xe8re de l'enregistrement (y compris les images, sous-tables et les champs de type BLOB)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lors de la saisie d'un enregistrement, si vous appliquez la m\xe9thode \xe9crire enregistrement dans Presse papiers \xe0 la table, le Presse-papiers contiendra le texte de l'enregistrement et \xe9galement l'image enti\xe8re de l'enregistrement."}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez coller cette image de l'enregistrement dans un autre enregistrement, \xe0 l'aide de la m\xe9thode lire enregistrement dans Presse papiers, qui est la suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode lire enregistrement dans Presse papiers\n\xa0\xa0// lire enregistrement dans Presse papiers ( Num\xe9ro )\n\xa0\xa0// lire enregistrement dans Presse papiers ( Num\xe9ro de table )\n\xa0var $1;$vlChamp;$vlTypeChamp;$vlPosCR;$vlPosColon : Integer\n\xa0var $vpTable;$vpChamp : Pointer\n\xa0C_STRING(255;$vaNomDoc)\n\xa0var $vxDonn\xe9eesPressePapiers : Blob\n\xa0var $vtDonn\xe9eesPressePapiers;$vtDonn\xe9esChamp : Text\n\xa0\n\xa0\xa0// Obtenir un pointeur vers la table dont le num\xe9ro est pass\xe9 en tant que param\xe8tre\n\xa0$vpTable:=Table($1)\n\xa0\xa0// S\'il y a un enregistrement courant pour cette table\n\xa0If((Record number($vpTable->)>=0)\xa0|\xa0(Is new record($vpTable->)))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// Est-ce que le Presse-papiers contient une image enti\xe8re de l\'enregistrement ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("4Drc")>0)\n\xa0\xa0// Si oui, extraire le contenu du Presse-papiers\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("4Drc";$vxDonn\xe9esPressePapiers)\n\xa0\xa0// Nommer le fichier d\'Album dans le Dossier temporaire\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vaNomDoc:=Temporary folder+"Album"+String(1+(Hasard%99))\xa0\xa0\n\xa0\xa0// Supprimer le fichier d\'Album s\'il existe (il faut tester l\'erreur ici)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vaNomDoc)\n\xa0\xa0// Enregistrer le BLOB dans le fichier d\'Album\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vaNomDoc;$vxDonn\xe9esPressePapiers)\n\xa0\xa0// Ouvrir le fichier d\'Album\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(10;$vaNomDoc)\n\xa0\xa0// Recevoir l\'enregistrement entier du fichier d\'Album\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD($vpTable->)\n\xa0\xa0// Fermer le fichier d\'Album\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// Nous n\'avons plus besoin du fichier d\'Album\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vaNomDoc)\n\xa0\xa0// Est-ce que le Presse-papiers contient du texte ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("TEXT")>0)\n\xa0\xa0// Extraire le texte du Presse-papiers\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esPressePapiers:=Get text from pasteboard\n\xa0\xa0// Initialiser le num\xe9ro de champ \xe0 incr\xe9menter\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlChamp:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0// Chercher la ligne de champ suivante dans le texte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosCR:=Position(CR;$vtDonn\xe9esPressePapiers)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosCR>0)\n\xa0\xa0// Extraire la ligne de champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=Substring($vtDonn\xe9esPressePapiers;1;$vlPosCR-1)\n\xa0\xa0// S\'il y a un signe deux points ":"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosColon:=Position(":";$vtDonn\xe9esChamp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosColon>0)\n\xa0\xa0// R\xe9cup\xe9rer seulement les donn\xe9es de champ (supprimer le nom du champ)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esChamp:=Substring($vtDonn\xe9esChamp;$vlPosColon+2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Incr\xe9menter le num\xe9ro du champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlChamp:=$vlChamp+1\n\xa0\xa0// Le Presse-papiers peut contenir plus de donn\xe9es dont nous n\'avons pas besoin...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlChamp<=Last field number($vpTable))\n\xa0\xa0// Obtenir le type du champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlChamp;$vlTypeChamp)\n\xa0\xa0// Obtenir un pointeur vers le champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp:=Field($1;$vlChamp)\n\xa0\xa0// Selon le type du champ, copier (ou non) le texte d\'une mani\xe8re appropri\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlTypeChamp=Is alpha field)\xa0|\xa0($vlTypeChamp=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp->:=$vtDonn\xe9esChamp\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlTypeChamp=Is real)\xa0|\xa0($vlTypeChamp=Is integer)\xa0|\xa0($vlTypeChamp=Is longint))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp->:=Num($vtDonn\xe9esChamp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTypeChamp=Is date)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp->:=Date($vtDonn\xe9esChamp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTypeChamp=Is time)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp->:=Time($vtDonn\xe9esChamp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTypeChamp=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpChamp->:=($vtDonn\xe9esChamp="Oui")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Passer et ignorer les autres types de donn\xe9es\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Tous les champs ont \xe9t\xe9 affect\xe9s, sortir de la boucle\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esPressePapiers:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Eliminer le texte qui vient d\'\xeatre extrait\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9eesPressePapiers:=Substring($vtDonn\xe9eesPressePapiers;$vlPosCR+Length(CR))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Aucun d\xe9limiteur trouv\xe9, sortir de la boucle\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtDonn\xe9esPressePapiers:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// R\xe9p\xe9ter jusqu\'\xe0 ce que nous ayons des donn\xe9es\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Length($vtDonn\xe9esPressePapiers)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le Presse-papiers ne contient pas de donn\xe9es pouvant \xeatre coll\xe9es en tant qu\'enregistrement.")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si les donn\xe9es dans le BLOB sont correctement ajout\xe9es au conteneur, la variable syst\xe8me OK prend la valeur 1. Sinon, OK est mise \xe0 0 et une erreur peut \xeatre g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"403"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);