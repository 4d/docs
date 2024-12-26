"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21816"],{122622:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/integrate-mirror-log-file","title":"INTEGRATE MIRROR LOG FILE","description":"INTEGRATE MIRROR LOG FILE ( cheminAcc\xe8s ; numOp\xe9ration {; mode {; objErreur}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/integrate-mirror-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/integrate-mirror-log-file","permalink":"/docs/fr/commands/integrate-mirror-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fintegrate-mirror-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"integrate-mirror-log-file","title":"INTEGRATE MIRROR LOG FILE","slug":"/commands/integrate-mirror-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHECK LOG FILE","permalink":"/docs/fr/commands/check-log-file"},"next":{"title":"Log File","permalink":"/docs/fr/commands/log-file"}}'),s=r("785893"),t=r("250065");let l={id:"integrate-mirror-log-file",title:"INTEGRATE MIRROR LOG FILE",slug:"/commands/integrate-mirror-log-file",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," ( ",(0,s.jsx)(n.em,{children:"cheminAcc\xe8s"})," ; ",(0,s.jsx)(n.em,{children:"numOp\xe9ration"})," {; ",(0,s.jsx)(n.em,{children:"mode"})," {; ",(0,s.jsx)(n.em,{children:"objErreur"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminAcc\xe8s"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s du fichier d\u2019historique \xe0 int\xe9grer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numOp\xe9ration"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la derni\xe8re op\xe9ration int\xe9gr\xe9e ou -2 pour tout int\xe9grer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nouveau num\xe9ro de la derni\xe8re op\xe9ration int\xe9gr\xe9e"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0=mode strict (mode par d\xe9faut), 1=mode r\xe9paration auto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objErreur"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Op\xe9ration(s) manquante(s)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note pr\xe9liminaire :"})," Cette commande ne fonctionne qu\u2019avec 4D Server. Elle ne peut \xeatre ex\xe9cut\xe9e que via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/execute-on-server",children:"Execute on server"})," ou dans une proc\xe9dure stock\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," permet d\u2019int\xe9grer le fichier d\u2019historique d\xe9sign\xe9 par ",(0,s.jsx)(n.em,{children:"cheminAcc\xe8s"})," dans une base 4D Server, \xe0 la suite de l\u2019op\xe9ration ",(0,s.jsx)(n.em,{children:"numOp\xe9ration"}),". La commande accepte d\u2019int\xe9grer tout fichier d\u2019historique dans la base, m\xeame s\u2019il ne correspond pas au fichier de donn\xe9es. Cette commande est particuli\xe8rement destin\xe9e \xe0 une utilisation dans le contexte d\u2019une base miroir."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"}),' Depuis 4D v14, il est possible d\u2019utiliser un fichier d\u2019historique dans le contexte d\u2019une base miroir : l\u2019option "Utiliser fichier d\u2019historique" peut d\xe9sormais \xeatre coch\xe9e dans les propri\xe9t\xe9s d\u2019une base 4D Server utilis\xe9e comme miroir logique, permettant la mise en place de serveurs miroirs en s\xe9rie (cf. section ',(0,s.jsx)(n.em,{children:"Mise en place d'un miroir logique"})," dans le manuel de 4D Server)."]}),"\n",(0,s.jsxs)(n.p,{children:["A la diff\xe9rence de la commande ",(0,s.jsx)(n.em,{children:"_o_INTEGRATE LOG FILE"}),", la commande ",(0,s.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," ne substitue pas le fichier d\u2019historique int\xe9gr\xe9 \xe0 l\u2019historique courant \xe0 l\u2019issue de son ex\xe9cution : le fichier d\u2019historique de la base continue d\u2019\xeatre utilis\xe9. Par cons\xe9quent, les modifications effectu\xe9es lors de l\u2019int\xe9gration sont enregistr\xe9es dans le fichier d\u2019historique courant."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"cheminAcc\xe8s"})," un chemin d\u2019acc\xe8s absolu ou relatif au dossier de la base. Si vous passez une cha\xeene vide dans ce param\xe8tre, une bo\xeete de dialogue standard d\u2019ouverture de fichier s\u2019affiche, permettant de d\xe9signer le fichier \xe0 int\xe9grer. Si la bo\xeete de dialogue est annul\xe9e, aucun fichier n\u2019est int\xe9gr\xe9 et la variable syst\xe8me ",(0,s.jsx)(n.em,{children:"OK"})," prend la valeur 0."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans la variable ",(0,s.jsx)(n.em,{children:"numOp\xe9ration"})," le num\xe9ro de la derni\xe8re op\xe9ration int\xe9gr\xe9e, afin que l\u2019int\xe9gration d\xe9bute \xe0 l'op\xe9ration suivante. A l\u2019issue de l\u2019int\xe9gration, la valeur de la variable ",(0,s.jsx)(n.em,{children:"numOp\xe9ration"})," est mise \xe0 jour avec le num\xe9ro de la derni\xe8re op\xe9ration int\xe9gr\xe9e. Vous devez alors stocker cette variable puis la r\xe9utiliser directement comme param\xe8tre ",(0,s.jsx)(n.em,{children:"numOp\xe9ration"})," lors de l'op\xe9ration d'int\xe9gration suivante. Ce principe vous permet d\u2019encha\xeener les int\xe9grations d\u2019historiques \xe0 l'aide de ",(0,s.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"}),". Passez la valeur -2 dans la variable si vous souhaitez int\xe9grer la totalit\xe9 du fichier."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.em,{children:"Note de compatibilit\xe9 :"})," Dans les versions de 4D ant\xe9rieures \xe0 la v15 R4, le param\xe8tre numOp\xe9ration \xe9tait optionnel. D\xe9sormais, si le param\xe8tre numOp\xe9ration est omis, une erreur est g\xe9n\xe9r\xe9e. Pour r\xe9tablir le fonctionnement initial de votre ancien code, passez simplement une variable avec la valeur -2 dans le param\xe8tre numOp\xe9ration."]})}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"mode"})," vous permet de sp\xe9cifier le mode d'int\xe9gration que vous souhaitez utiliser. Vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me \"",(0,s.jsx)(n.em,{children:"Sauvegarde et restitution"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Auto repair mode"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Utiliser le mode flexible avec r\xe9paration automatique et remplir le param\xe8tre ",(0,s.jsx)(n.em,{children:"objErreur"})," (si pass\xe9)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Strict mode"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Utiliser le mode d'int\xe9gration avec contr\xf4le strict des op\xe9rations (option par d\xe9faut). Recommand\xe9 dans la plupart des cas."})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Strict mode : Dans ce mode, d\xe8s qu'une erreur se produit au cours de l'int\xe9gration, la proc\xe9dure est stopp\xe9e et vous devez utiliser le CSM pour tracer l'erreur. Ce mode s\xe9curis\xe9 est utilis\xe9 par d\xe9faut et est recommand\xe9 dans la plupart des cas."}),"\n",(0,s.jsxs)(n.li,{children:["Auto repair mode : Dans ce mode, lorsqu'une erreur non critique est d\xe9tect\xe9e, elle est \"r\xe9par\xe9e\" et l'int\xe9gration se poursuit. Si vous avez pass\xe9 le param\xe8tre ",(0,s.jsx)(n.em,{children:"objErreur"}),", chaque erreur est enregistr\xe9e et pourra \xeatre analys\xe9e par la suite.",(0,s.jsx)(n.br,{}),"\nLes cas d'erreurs non critiques sont les suivants :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le fichier d'historique demande \xe0 ajouter un enregistrement mais l'enregistrement existe d\xe9j\xe0 dans les donn\xe9es.",(0,s.jsx)(n.br,{}),"\nAction de r\xe9paration : 4D met \xe0 jour l'enregistrement."]}),"\n",(0,s.jsxs)(n.li,{children:["Le fichier d'historique demande \xe0 mettre \xe0 jour un enregistrement mais l'enregistrement n'existe pas.",(0,s.jsx)(n.br,{}),"\nAction de r\xe9paration : 4D ajoute l'enregistrement."]}),"\n",(0,s.jsxs)(n.li,{children:["Le fichier d'historique demande \xe0 supprimer un enregistrement mais l'enregistrement n'existe pas.",(0,s.jsx)(n.br,{}),"\nAction de r\xe9paration : 4D ne fait rien."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," En mode strict (mode par d\xe9faut), l\u2019int\xe9gration stoppe \xe0 la premi\xe8re erreur rencontr\xe9e. Si vous souhaitez poursuivre l\u2019int\xe9gration dans ce cas, il sera n\xe9cessaire d\u2019utiliser le CSM."]}),"\n",(0,s.jsxs)(n.p,{children:["Lorsqu'une anomalie se produit en mode r\xe9paration auto, l'enregistrement concern\xe9 est automatiquement \"r\xe9par\xe9\" et l'op\xe9ration associ\xe9e est enregistr\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"objErreur"}),". Une fois l'int\xe9gration termin\xe9e, le param\xe8tre ",(0,s.jsx)(n.em,{children:"objErreur"})," contient la liste de tous les enregistrements r\xe9par\xe9s. Il se compose d'un unique tableau d'objets nomm\xe9 \"operations\", structur\xe9 de la mani\xe8re suivante :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"operations":\xa0\xa0\xa0 [\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationNumber":2,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID":48,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "timeStamp":"2015-07-10T07:53:02.413Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "dataLen":24,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber":0,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "tableID":"F4CXXXXX",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "tableName":"Customers",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "fields": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "8": "BlobID: 2"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 {...} \xa0\xa0\xa0 ]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attention :"})," Le mode r\xe9paration auto doit \xeatre activ\xe9 dans des cas sp\xe9cifiques car il contourne les s\xe9curit\xe9s int\xe9gr\xe9es de 4D charg\xe9es de contr\xf4ler l'int\xe9grit\xe9 des donn\xe9es. Il peut \xeatre utilis\xe9, par exemple, lorsqu'un fichier d'historique interm\xe9diaire a \xe9t\xe9 perdu ou corrompu et que vous souhaitez r\xe9cup\xe9rer autant d'op\xe9rations que possible. Dans tous les cas, vous devez \xeatre particuli\xe8rement vigilant en ce qui concerne l'int\xe9grit\xe9 des donn\xe9es lorsque ce mode est activ\xe9."]}),"\n",(0,s.jsx)(n.h5,{id:""}),"\n",(0,s.jsx)(n.p,{children:"La liste effective des propri\xe9t\xe9s pr\xe9sentes dans l'objet \"operations\" d\xe9pend du type d'op\xe9ration (i.e.: cr\xe9ation, suppression ou modification de l'enregistrement, cr\xe9er Blob, etc.). Les principales propri\xe9t\xe9s sont les suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationType"})," : Code interne de l'op\xe9ration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationName"}),' : Type d\'op\xe9ration, par exemple "create record," "modify record"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationNumber"})," : Num\xe9ro interne de l'op\xe9ration dans le fichier d'historique"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"contextID"})," : ID du contexte d'ex\xe9cution ; le contexte est d\xe9taill\xe9 dans la section ",(0,s.jsx)(n.em,{children:"extraData"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"timeStamp"})," : horodatage de l'op\xe9ration dans le fichier d'historique"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"dataLen"})," : taille interne des donn\xe9es"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"recordNumber"})," : num\xe9ro interne d'enregistrement"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableID"})," : ID interne de la table"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableName"})," : nom de la table"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"fields"})," : objet contenant la liste des num\xe9ros de champ ainsi que leur valeur. Tous les champs de la table sont list\xe9s.",(0,s.jsx)(n.br,{}),"\nDans le cas de valeurs de type Blob ou image, diff\xe9rentes informations sont stock\xe9es en fonction de leur mode de stockage :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'si le Blob ou l\'image est stock\xe9(e) dans le fichier de donn\xe9es, la propri\xe9t\xe9 sera "BlobID:"+ un num\xe9ro de Blob interne, par exemple : "BlobID:1"'}),"\n",(0,s.jsx)(n.li,{children:'si le Blob ou l\'image est stock\xe9(e) \xe0 l\'ext\xe9rieur du fichier de donn\xe9es, la propri\xe9t\xe9 sera "BlobPath:" + chemin du fichier, par exemple : "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"extraData"})," : donn\xe9es du contexte de l'utilisateur, incluant son nom et son ID, le nom et l'ID de la t\xe2che, le nom de la machine h\xf4te ainsi que la version du client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"sequenceNumber"})," : num\xe9ro courant au sein d'une s\xe9quence d'incr\xe9mentation automatique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"primaryKey"})," : valeur de cl\xe9 primaire."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez int\xe9grer un fichier d'historique sur le serveur miroir en mode r\xe9paration auto :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//\xe0 ex\xe9cuter sur le serveur\n\xa0var $err : Object\n\xa0var $num : Integer\xa0//-2 pour tout int\xe9grer\n\xa0INTEGRATE MIRROR LOG FILE("c:\\\\mirror\\\\logNew.journal";$num;Auto repair mode;$err)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(n.p,{children:"Si l'int\xe9gration s'effectue correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/log-file-to-json",children:"LOG FILE TO JSON"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1312"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var i=r(667294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);