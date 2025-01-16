"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1941"],{17908:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/log-file-to-json","title":"LOG FILE TO JSON","description":"LOG FILE TO JSON ( cheminDossierDest {; tailleMax {; cheminHistorique {; attribChamp}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-file-to-json.md","sourceDirName":"commands-legacy","slug":"/commands/log-file-to-json","permalink":"/docs/fr/20-R7/commands/log-file-to-json","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file-to-json.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-file-to-json","title":"LOG FILE TO JSON","slug":"/commands/log-file-to-json","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log File","permalink":"/docs/fr/20-R7/commands/log-file"},"next":{"title":"New log file","permalink":"/docs/fr/20-R7/commands/new-log-file"}}'),r=i("785893"),t=i("250065");let l={id:"log-file-to-json",title:"LOG FILE TO JSON",slug:"/commands/log-file-to-json",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOG FILE TO JSON"})," ( ",(0,r.jsx)(n.em,{children:"cheminDossierDest"})," {; ",(0,r.jsx)(n.em,{children:"tailleMax"})," {; ",(0,r.jsx)(n.em,{children:"cheminHistorique"})," {; ",(0,r.jsx)(n.em,{children:"attribChamp"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminDossierDest"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d'acc\xe8s du dossier de destination du fichier sauvegard\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tailleMax"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Taille maximale du fichier JSON \xe0 cr\xe9er (octets)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminHistorique"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d'acc\xe8s du fichier d'historique \xe0 exporter ; utiliser l'historique courant si omis"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribChamp"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Attribut de description du champ : 1 = utiliser num\xe9ro (d\xe9faut), 2 = utiliser nom"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LOG FILE TO JSON"})," sauvegarde au format JSON le fichier d'historique courant ou tout fichier d'historique sp\xe9cifi\xe9."]}),"\n",(0,r.jsx)(n.p,{children:"Lorsqu'un fichier d'historique (fichier binaire) est sauvegard\xe9 au format JSON, son contenu peut alors \xeatre lu et interpr\xe9t\xe9 par l'administrateur de la base ou tout utilisateur afin d'analyser les \xe9v\xe9nements de la base, par exemple."}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"cheminDossierDest"}),", passez le chemin du dossier dans lequel vous souhaitez stocker le fichier JSON. Le fichier sera nomm\xe9 ",(0,r.jsx)(n.strong,{children:"JournalExport.json"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, la taille maximale du fichier JSON export\xe9 est de 10 Mo. Lorsque cette taille est atteinte, le fichier est referm\xe9 et un nouveau fichier est cr\xe9\xe9. Limiter la taille de chaque fichier JSON r\xe9duit la quantit\xe9 de m\xe9moire requise pour analyser les fichiers. Vous pouvez modifier la taille maximale du fichier export\xe9 en passant une valeur (en octets) dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"tailleMax"}),". Passer 0 r\xe9tablit la valeur par d\xe9faut (10 Mo). Passer une valeur n\xe9gative indique une taille illimit\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminHistorique"})," est omis, la commande sauvegarde le fichier d'historique courant. Si vous voulez exporter en JSON un fichier d'historique sp\xe9cifique, passez son chemin d'acc\xe8s dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminHistorique"}),". Ce fichier d'historique doit avoir l'extension \".journal\". Si vous souhaitez exporter un fichier d'historique archiv\xe9 (extension \".4bl\"), vous devez au pr\xe9alable le convertir \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/restore",children:"RESTORE"}),". Vous pouvez passer une cha\xeene vide (\"\") afin d'afficher la bo\xeete de dialogue standard d'ouverture de fichier, permettant \xe0 l'utilisateur de s\xe9lectionner le fichier d'historique \xe0 traiter. Le chemin du fichier s\xe9lectionn\xe9 est retourn\xe9 dans la variable syst\xe8me ",(0,r.jsx)(n.strong,{children:"Document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Lorsque la commande sauvegarde le fichier d'historique courant, la base n'est pas verrouill\xe9e. De nouvelles op\xe9rations peuvent \xeatre ex\xe9cut\xe9es tandis que le fichier est \xe9crit sur le disque -- ces op\xe9rations ne seront pas incluses dans le fichier sauvegard\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque vous exportez le fichier d'historique courant, le param\xe8tre ",(0,r.jsx)(n.em,{children:"attribChamp"}),' vous permet de d\xe9finir la mani\xe8re dont les champs doivent \xeatre d\xe9sign\xe9s dans les attributs export\xe9s : via leur num\xe9ro (d\xe9faut) ou via leur nom. Vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me de constantes "',(0,r.jsx)(n.em,{children:"Sauvegarde et restitution"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Field attribute with name"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'Les champs sont identifi\xe9s par leur nom. Exemple: {"Nom":"Jones"}'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Field attribute with number"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'Les champs sont identifi\xe9s par leur num\xe9ro (d\xe9faut si omis). Exemple: {"5":"Jones"}.'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Lorsque vous exportez un fichier d'historique externe, les champs sont toujours d\xe9sign\xe9s par leur num\xe9ro."]}),"\n",(0,r.jsx)(n.p,{children:"Le fichier JSON sauvegard\xe9 contient toutes les op\xe9rations enregistr\xe9es dans l'historique sous la forme d'un tableau d'objets JSON. Chaque objet contient plusieurs propri\xe9t\xe9s d\xe9crivant l'op\xe9ration. Exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":25,\xa0\xa0\xa0\xa0\xa0 "operationName":"Modify record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":45,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":42,\xa0\xa0\xa0\xa0\xa0 "recordNumber":4,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": "primkey5",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": -5,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "5": "data 25"\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "8"\xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":23,\xa0\xa0\xa0\xa0\xa0 "operationName":"Save seqnum",\xa0\xa0\xa0\xa0\xa0 "operationNumber":46,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:18.155Z",\xa0\xa0\xa0\xa0\xa0 "sequenceNumber":23,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem" \xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":47,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:19.228Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":570,\xa0\xa0\xa0\xa0\xa0 "recordNumber":7,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0 "extraData": {\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "Vanessa Smith",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_alias": "Default 4D User",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac-VSmith-0833",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "Application process",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1610541776\xa0\xa0\xa0 \xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "9"\xa0\xa0 }]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Note : Si vous passez Field attribute with name dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"attribChamp"}),', l\'objet "fields" contiendra :']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'...\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "ID": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Date_Field": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_8": "BlobID: 2"\xa0\xa0\xa0\xa0\xa0\xa0 },...\n'})}),"\n",(0,r.jsx)(n.h5,{id:""}),"\n",(0,r.jsx)(n.p,{children:"La liste effective des propri\xe9t\xe9s d\xe9pend du type d'op\xe9ration (i.e.: cr\xe9ation, suppression ou modification de l'enregistrement, cr\xe9er Blob, etc.). Les principales propri\xe9t\xe9s sont les suivantes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"operationType"})," : Code interne de l'op\xe9ration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"operationName"}),' : Type d\'op\xe9ration, par exemple "create record," "modify record"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"operationNumber"})," : Num\xe9ro interne de l'op\xe9ration dans le fichier d'historique"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"contextID"})," : ID du contexte d'ex\xe9cution ; le contexte est d\xe9taill\xe9 dans la section ",(0,r.jsx)(n.em,{children:"extraData"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"timeStamp"})," : horodatage de l'op\xe9ration dans le fichier d'historique"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"dataLen"})," : taille interne des donn\xe9es"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"recordNumber"})," : num\xe9ro interne d'enregistrement"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"tableID"})," : ID interne de la table"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"tableName"})," : nom de la table"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"fields"})," : objet contenant la liste des num\xe9ros de champs (ou des noms de champs) ainsi que leur valeur. Tous les champs de la table dont la valeur a \xe9t\xe9 modifi\xe9e sont list\xe9s. Dans le cas de valeurs de type Blob ou image, diff\xe9rentes informations sont stock\xe9es en fonction de leur mode de stockage :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'si le Blob ou l\'image est stock\xe9(e) dans le fichier de donn\xe9es, la propri\xe9t\xe9 sera "BlobID:"+ un num\xe9ro de Blob interne, par exemple : "BlobID:1"'}),"\n",(0,r.jsx)(n.li,{children:'si le Blob ou l\'image est stock\xe9(e) \xe0 l\'ext\xe9rieur du fichier de donn\xe9es, la propri\xe9t\xe9 sera "BlobPath:" + chemin du fichier, par exemple : "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"extraData"})," : donn\xe9es du contexte de l'utilisateur, incluant son nom et son alias(*), le nom et l'ID de la t\xe2che, le nom de la machine h\xf4te ainsi que la version du client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"sequenceNumber"})," : num\xe9ro courant au sein d'une s\xe9quence d'incr\xe9mentation automatique."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"primaryKey"})," : valeur de cl\xe9 primaire."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'(*) Dans les bases projets, la propri\xe9t\xe9 "user4d_id" n\'est pas retourn\xe9e.'}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous voulez sauvegarder le fichier d'historique courant en JSON :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Vous voulez sauvegarder un fichier d'historique sp\xe9cifique en JSON avec les champs identifi\xe9s par nom :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs";0;"c:\\\\4Dv15\\\\Backup\\\\old_myDB.journal";Field attribute with name)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LOG FILE TO JSON"}),' modifie la valeur des variables syst\xe8me OK et Document : si le fichier JSON a \xe9t\xe9 correctement sauvegard\xe9, OK prend la valeur 1 et Document contient le chemin du fichier d\'historique. Si vous avez pass\xe9 "" dans le param\xe8tre ',(0,r.jsx)(n.em,{children:"logPath"})," et que l'utilisateur a annul\xe9 la bo\xeete de dialogue de s\xe9lection de fichier, OK prend la valeur 0 et Document contient une cha\xeene vide. Si l'utilisateur a s\xe9lectionn\xe9 un fichier invalide, OK prend la valeur 0 et Document contient le chemin du fichier invalide."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/integrate-mirror-log-file",children:"INTEGRATE MIRROR LOG FILE"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1352"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);