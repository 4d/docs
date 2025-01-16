"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13250"],{486468:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/execute-on-server","title":"Execute on server","description":"Execute on server ( proc\xe9dure ; pile {; nom {; param {; param2 ; ... ; paramN}}}{; *} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-on-server.md","sourceDirName":"commands-legacy","slug":"/commands/execute-on-server","permalink":"/docs/fr/20-R7/commands/execute-on-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-on-server.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-on-server","title":"Execute on server","slug":"/commands/execute-on-server","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE ON CLIENT","permalink":"/docs/fr/20-R7/commands/execute-on-client"},"next":{"title":"GET REGISTERED CLIENTS","permalink":"/docs/fr/20-R7/commands/get-registered-clients"}}'),t=n("785893"),o=n("250065");let l={id:"execute-on-server",title:"Execute on server",slug:"/commands/execute-on-server",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"M\xe9thode du process",id:"m\xe9thode-du-process",level:5},{value:"Pile du process",id:"pile-du-process",level:5},{value:"Nom du process :",id:"nom-du-process-",level:5},{value:"Param\xe8tres de la m\xe9thode process :",id:"param\xe8tres-de-la-m\xe9thode-process-",level:5},{value:"Param\xe8tre optionnel *",id:"param\xe8tre-optionnel-",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Execute on server"})," ( ",(0,t.jsx)(r.em,{children:"proc\xe9dure"})," ; ",(0,t.jsx)(r.em,{children:"pile"})," {; ",(0,t.jsx)(r.em,{children:"nom"})," {; ",(0,t.jsx)(r.em,{children:"param"})," {; ",(0,t.jsx)(r.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(r.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"proc\xe9dure"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Proc\xe9dure \xe0 ex\xe9cuter dans le process"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pile"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Taille de la pile en octets (0 = taille par d\xe9faut)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nom"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nom du process cr\xe9\xe9"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"param"}),(0,t.jsx)(r.td,{children:"Expression"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Param\xe8tre(s) de la proc\xe9dure"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Op\xe9rateur"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Process unique"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"R\xe9sultat"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Num\xe9ro du process pour un process nouvellement cr\xe9\xe9 ou un process d\xe9j\xe0 en cours d'ex\xe9cution"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"Execute on server"})," lance un nouveau process sur la machine serveur (lorsqu'elle est appel\xe9e en environnement client/serveur) et retourne le num\xe9ro de ce process."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Execute on server"})," vous permet de d\xe9marrer une proc\xe9dure stock\xe9e. Pour plus d'informations sur les proc\xe9dures stock\xe9es, reportez-vous \xe0 la section ",(0,t.jsx)(r.em,{children:"Proc\xe9dures stock\xe9es"})," dans le manuel de r\xe9f\xe9rence de 4D Server."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous appelez ",(0,t.jsx)(r.strong,{children:"Execute on server"})," sur un poste client, la commande retourne un num\xe9ro de process n\xe9gatif. Si vous appelez ",(0,t.jsx)(r.strong,{children:"Execute on server"})," sur le poste serveur, la commande retourne un num\xe9ro de process positif. A noter que l'appel de la fonction ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/new-process",children:"New process"})," sur le poste serveur est \xe9quivalent \xe0 l'appel de ",(0,t.jsx)(r.strong,{children:"Execute on server"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si le process n'a pas pu \xeatre cr\xe9\xe9 (par exemple s'il n'y a pas assez de m\xe9moire), ",(0,t.jsx)(r.strong,{children:"Execute on server"})," retourne z\xe9ro et une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h5,{id:"m\xe9thode-du-process",children:"M\xe9thode du process"}),"\n",(0,t.jsxs)(r.p,{children:["Vous passez le nom de la m\xe9thode de gestion du nouveau process dans ",(0,t.jsx)(r.em,{children:"proc\xe9dure"}),". Une fois que 4D a d\xe9fini le contexte pour le nouveau process, il d\xe9marre l'ex\xe9cution de cette m\xe9thode qui devient alors la m\xe9thode du process."]}),"\n",(0,t.jsx)(r.h5,{id:"pile-du-process",children:"Pile du process"}),"\n",(0,t.jsxs)(r.p,{children:["Le param\xe8tre ",(0,t.jsx)(r.em,{children:"pile"}),' permet d\'indiquer la quantit\xe9 de m\xe9moire allou\xe9e pour la pile du process. Cette valeur repr\xe9sente la place utilis\xe9e en m\xe9moire pour "empiler" les appels de m\xe9thode, les variables locales, les param\xe8tres des sous-routines et les enregistrements empil\xe9s.']}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Passez 0 dans ",(0,t.jsx)(r.em,{children:"pile"})," pour utiliser une taille de pile par d\xe9faut, adapt\xe9e \xe0 la plupart des applications (param\xe9trage recommand\xe9)."]}),"\n",(0,t.jsx)(r.li,{children:"Dans certains cas particuliers, vous pouvez souhaiter fixer une valeur personnalis\xe9e. Elle doit \xeatre exprim\xe9e en octets. Ce param\xe8tre doit \xeatre utilis\xe9 avec pr\xe9caution, il d\xe9pend de la cha\xeene d'appel dans le process et de la plateforme."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," La pile n'est pas la m\xe9moire totale r\xe9serv\xe9e au process. Les process se partagent la m\xe9moire pour les enregistrements, les variables interprocess, etc. Un process utilise \xe9galement de la m\xe9moire suppl\xe9mentaire pour stocker ses variables process. La pile contient diverses informations internes \xe0 4D ; la taille de ces informations varie en fonction du nombre d'appels de m\xe9thodes imbriqu\xe9es."]}),"\n",(0,t.jsx)(r.h5,{id:"nom-du-process-",children:"Nom du process :"}),"\n",(0,t.jsxs)(r.p,{children:["Vous passez le nom du nouveau process dans ",(0,t.jsx)(r.em,{children:"nom"}),". Avec 4D monoposte, ce nom s'affichera dans la liste des process de l'Explorateur d'ex\xe9cution et sera retourn\xe9 par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/process-info",children:"Process info"})," appliqu\xe9e \xe0 ce process. En client/serveur, ce nom appara\xeetra en bleu dans la liste des ",(0,t.jsx)(r.strong,{children:"Proc\xe9dures stock\xe9es"})," de la fen\xeatre principale de 4D Server."]}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez omettre ce param\xe8tre ; dans ce cas, le nom du process sera une cha\xeene vide."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Attention :"})," A la diff\xe9rence de la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/new-process",children:"New process"}),", vous ne devez pas avec ",(0,t.jsx)(r.strong,{children:"Execute on server"})," cr\xe9er un process local en pr\xe9fixant son nom du symbole dollar (",(0,t.jsx)(r.em,{children:"$"}),"). Cela fonctionnerait correctement en version monoposte, car ",(0,t.jsx)(r.strong,{children:"Execute on server"})," se comporte comme ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/new-process",children:"New process"})," dans cet environnement, mais, en client/serveur, cela g\xe9n\xe8rerait une erreur."]}),"\n",(0,t.jsx)(r.h5,{id:"param\xe8tres-de-la-m\xe9thode-process-",children:"Param\xe8tres de la m\xe9thode process :"}),"\n",(0,t.jsxs)(r.p,{children:["Vous pouvez passer des param\xe8tres \xe0 la m\xe9thode process. Vous pouvez le faire de la m\xeame mani\xe8re que pour les sous-routines. Notez cependant qu'il y a une restriction : vous ne pouvez pas passer d'expression de type Pointeur. Rappelez-vous \xe9galement que les tableaux ne peuvent pas \xeatre pass\xe9s comme param\xe8tres \xe0 une m\xe9thode. Une fois qu'elle a commenc\xe9 \xe0 s'ex\xe9cuter dans le contexte du nouveau process, la m\xe9thode process re\xe7oit les valeurs des param\xe8tres dans ",(0,t.jsx)(r.em,{children:"$1"}),", ",(0,t.jsx)(r.em,{children:"$2"}),", etc."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note"})," ",(0,t.jsx)(r.strong,{children:":"})," Si vous passez des param\xe8tres \xe0 la m\xe9thode process, vous devez passer le param\xe8tre ",(0,t.jsx)(r.em,{children:"nom"}),", il ne peut \xeatre omis dans ce cas."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez un objet 4D (",(0,t.jsx)(r.em,{children:"C_OBJECT"}),") ou une collection (",(0,t.jsx)(r.em,{children:"C_COLLECTION"}),") comme ",(0,t.jsx)(r.em,{children:"param"}),", une copie est envoy\xe9e (et non une r\xe9f\xe9rence) et la forme JSON est utilis\xe9e en utf-8 pour le serveur. Si l\u2019objet ou la collection contient des pointeurs, leur valeurs d\xe9point\xe9es sont envoy\xe9es, pas les pointeurs eux-m\xeames."]}),"\n",(0,t.jsx)(r.h5,{id:"param\xe8tre-optionnel-",children:"Param\xe8tre optionnel *"}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez le dernier param\xe8tre (optionnel) ",(0,t.jsx)(r.em,{children:"*"}),", vous indiquez \xe0 4D de v\xe9rifier en premier lieu si un process du m\xeame nom que celui que vous avez pass\xe9 dans ",(0,t.jsx)(r.em,{children:"nom"})," est d\xe9j\xe0 en cours d'ex\xe9cution. Si c'est le cas, 4D ne d\xe9marre pas de nouveau process et retourne le num\xe9ro du process existant."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(r.p,{children:"Vous souhaitez enregistrer certaines informations relatives \xe0 la machine distante dans un fichier texte sur la machine serveur."}),"\n",(0,t.jsx)(r.p,{children:"Vous ex\xe9cutez la m\xe9thode avec des informations locales en tant que param\xe8tres sur la machine distante :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0$process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))\n'})}),"\n",(0,t.jsx)(r.p,{children:"La m\xe9thode WriteLog sera ex\xe9cut\xe9e sur le serveur. Elle contient, par exemple :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $1;$2;$3 : Text\n\xa0TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)\n'})}),"\n",(0,t.jsx)(r.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(r.p,{children:["L'exemple suivant d\xe9montre comment l'import de donn\xe9es peut \xeatre acc\xe9l\xe9r\xe9 de mani\xe8re spectaculaire en environnement client/serveur. La m\xe9thode Import classique list\xe9e ci-dessous vous permet de mesurer combien de temps prend un import d'enregistrements bas\xe9 sur la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/import-text",children:"IMPORT TEXT"})," :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet Import classique\n\xa0$vhDocRef:=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0FORM SET INPUT([Table1];"Import")\n\xa0\xa0\xa0\xa0$vhStartTime:=Current time\n\xa0\xa0\xa0\xa0IMPORT TEXT([Table1];Document)\n\xa0\xa0\xa0\xa0$vhEndTime:=Current time\n\xa0\xa0\xa0\xa0ALERT("L\'op\xe9ration a dur\xe9 "+String(0+($vhEndTime-$vhStartTime))+" secondes.")\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.p,{children:"Avec l'import de donn\xe9es classique, 4D Client analyse le fichier ASCII puis, pour chaque enregistrement, cr\xe9e un nouvel enregistrement, remplit les champs avec les valeurs import\xe9es et envoie l'enregistrement au poste serveur afin qu'il soit ajout\xe9 \xe0 la base. Par cons\xe9quent, de nombreuses requ\xeates circulent sur le r\xe9seau. Afin d'optimiser l'op\xe9ration, vous pouvez utiliser des proc\xe9dures stock\xe9es pour effectuer l'import localement sur le poste serveur. Le poste client charge le document dans un BLOB et d\xe9clenche une proc\xe9dure stock\xe9e en passant le BLOB comme param\xe8tre. La proc\xe9dure stock\xe9e place le BLOB dans un document sur le disque du poste serveur, puis importe le document en local. L'import des donn\xe9es est par cons\xe9quent effectu\xe9 localement \xe0 une vitesse comparable \xe0 celle d'une version monoposte de 4D, car la plupart des requ\xeates transitant sur le r\xe9seau ont \xe9t\xe9 \xe9limin\xe9es. Voici la m\xe9thode projet CLIENT IMPORT. Lanc\xe9e sur le poste client, elle d\xe9clenche l'ex\xe9cution de la proc\xe9dure stock\xe9e SERVER IMPORT, list\xe9e \xe0 la suite :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet CLIENT IMPORT\n\xa0\xa0// CLIENT IMPORT ( Pointeur ; Alpha )\n\xa0\xa0// CLIENT IMPORT ( -> [Table] ; Formulaire entr\xe9e )\n\xa0\n\xa0var $1 : Pointer\n\xa0var $2 : Text\n\xa0var $vhDocRef : Time\n\xa0var $vxData : Blob\n\xa0var spErrCode : Integer\n\xa0\n\xa0\xa0// S\xe9lectionnez le document \xe0 importer\n\xa0$vhDocRef:=Open document("")\n\xa0If(OK=1)\n\xa0\xa0// Si un document \xe9tait s\xe9lectionn\xe9, ne pas le garder ouvert\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0$vhStartTime:=Current time\n\xa0\xa0// Essayons de le charger en m\xe9moire\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vxData)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// Si le document a pu \xeatre charg\xe9 dans le BLOB,\n\xa0\xa0// D\xe9marrer la proc\xe9dure stock\xe9e qui va importer les donn\xe9es sur le poste serveur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$spProcessID:=Execute on server("SERVER IMPORT";0;"Serveur Import Services";Table($1);$2;$vxData)\n\xa0\xa0// Nous n\'avons alors plus besoin du BLOB dans ce process\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE($vxData)\n\xa0\xa0// Attendons l\'ach\xe8vement de l\'op\xe9ration effectu\xe9e par la proc\xe9dure stock\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;300)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Undefined(spErrCode))\n\xa0\xa0// Note: si la proc\xe9dure stock\xe9e n\'a pas initialis\xe9 sa propre instance\n\xa0\xa0// de la variable spErrCode, il se peut qu\'une variable ind\xe9finie soit retourn\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0spErrCode:=1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(spErrCode<=0)\n\xa0\xa0// Envoyons un accus\xe9 de r\xe9ception \xe0 la proc\xe9dure stock\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0spErrCode:=1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhEndTime:=Current time\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("L\'op\xe9ration a dur\xe9 "+String(0+($vhEndTime-$vhStartTime))+" secondes.")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Il n\'y a pas assez de m\xe9moire pour charger le document.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.p,{children:"Voici la m\xe9thode projet SERVER IMPORT ex\xe9cut\xe9e en tant que proc\xe9dure stock\xe9e :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet SERVER IMPORT\n\xa0\xa0// SERVER IMPORT ( Entier long ; Alpha ; BLOB )\n\xa0\xa0// SERVER IMPORT ( Num\xe9ro de table ; Formulaire entr\xe9e ; Donn\xe9es import\xe9es )\n\xa0\n\xa0var $1 : Integer\n\xa0var $2 : Text\n\xa0var $3 : Blob\n\xa0var spErrCode : Integer\n\xa0\n\xa0\xa0// L'op\xe9ration n'est pas encore termin\xe9e, affectons 1 \xe0 spErrCode\n\xa0spErrCode:=1\n\xa0$vpTable:=Table($1)\n\xa0FORM SET INPUT($vpTable->;$2)\n\xa0$vsDocName:=\"Fichier Import \"+String(1+Random)\n\xa0DELETE DOCUMENT($vsDocName)\n\xa0BLOB TO DOCUMENT($vsDocName;$3)\n\xa0IMPORT TEXT($vpTable->;$vsDocName)\n\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// L'op\xe9ration est termin\xe9e, affectons 0 \xe0 spErrCode\n\xa0spErrCode:=0\n\xa0\xa0// Attendons que le poste client \xe0 l'origine de la requ\xeate ait re\xe7u les r\xe9sultats\n\xa0Repeat\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;1)\n\xa0Until(spErrCode>0)\n"})}),"\n",(0,t.jsx)(r.p,{children:"Une fois que ces deux m\xe9thodes projet ont \xe9t\xe9 impl\xe9ment\xe9es dans votre base, vous pouvez effectuer un import bas\xe9 sur une proc\xe9dure stock\xe9e, en \xe9crivant par exemple :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0CLIENT IMPORT(->[Table1];"Import")\n'})}),"\n",(0,t.jsx)(r.p,{children:"Si vous r\xe9alisez quelques tests comparatifs, vous pourrez constater qu'avec ce type de m\xe9thode, l'import des enregistrements est jusqu'\xe0 60 fois plus rapide qu'un import \"classique\"."}),"\n",(0,t.jsx)(r.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(r.p,{children:["Reportez-vous \xe0 la section ",(0,t.jsx)(r.em,{children:"Services bas\xe9s sur les proc\xe9dures stock\xe9es (exemple)"})," dans le ",(0,t.jsx)(r.em,{children:"Guide de r\xe9f\xe9rence"})," de 4D Server."]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/new-process",children:"New process"})]}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"373"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return l}});var s=n(667294);let t={},o=s.createContext(t);function l(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);