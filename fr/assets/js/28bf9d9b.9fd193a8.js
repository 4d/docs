"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25818"],{482183:function(e,s,t){t.r(s),t.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"ORDA/datastores","title":"Utiliser un datastore distant","description":"Un datastore expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/fr/20/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"datastores","title":"Utiliser un datastore distant"},"sidebar":"docs","previous":{"title":"Travailler avec les donn\xe9es","permalink":"/docs/fr/20/ORDA/entities"},"next":{"title":"Privil\xe8ges","permalink":"/docs/fr/20/ORDA/privileges"}}'),i=t("785893"),r=t("250065");let a={id:"datastores",title:"Utiliser un datastore distant"},l=void 0,o={},c=[{value:"Ouverture des sessions",id:"ouverture-des-sessions",level:2},{value:"Visualiser les sessions",id:"visualiser-les-sessions",level:3},{value:"Verrouillage et transactions",id:"verrouillage-et-transactions",level:3},{value:"Fermeture des sessions",id:"fermeture-des-sessions",level:3},{value:"Optimisation client/serveur",id:"optimisation-clientserveur",level:2},{value:"Contexte",id:"contexte",level:3},{value:"Exemple",id:"exemple",level:4},{value:"R\xe9utiliser la propri\xe9t\xe9 context",id:"r\xe9utiliser-la-propri\xe9t\xe9-context",level:4},{value:"List box de type entity selection",id:"list-box-de-type-entity-selection",level:4},{value:"Pr\xe9configuration des contextes",id:"pr\xe9configuration-des-contextes",level:4},{value:"Cache ORDA",id:"cache-orda",level:3}];function d(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Un ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/dsmapping#datastore",children:"datastore"})," expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Les applications 4D distantes utilisant ORDA pour acc\xe9der au datastore principal \xe0 l\u2019aide de la commande ",(0,i.jsx)(s.code,{children:"ds"}),". A noter que l'application 4D distante peut toujours acc\xe9der \xe0 la base de donn\xe9es en mode classique. Ces acc\xe8s sont g\xe9r\xe9s par le ",(0,i.jsx)(s.strong,{children:"serveur d'applications 4D"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#open-datastore",children:(0,i.jsx)(s.code,{children:"Open datastore"})}),". Ces acc\xe8s sont transmis par le ",(0,i.jsx)(s.strong,{children:"serveur HTTP REST"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Les requ\xeates ",(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/",children:"4D for iOS ou 4D for Android"})," pour la mise \xe0 jour des applications mobiles. Ces acc\xe8s sont remis par le ",(0,i.jsx)(s.strong,{children:"serveur HTTP"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ouverture-des-sessions",children:"Ouverture des sessions"}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque vous travaillez avec un datastore distant r\xe9f\xe9renc\xe9 par des appels \xe0 la commande ",(0,i.jsx)(s.code,{children:"Open datastore"}),", la connexion entre les process qui effectuent la requ\xeate et le datastore distant est g\xe9r\xe9e par des sessions."]}),"\n",(0,i.jsxs)(s.p,{children:["Une session est cr\xe9\xe9e sur le datastore distant pour g\xe9rer la connexion. Cette session est identifi\xe9e \xe0 l'aide d'un ID de session interne, associ\xe9 au ",(0,i.jsx)(s.code,{children:"localID"})," de l'application 4D. Cette session g\xe8re automatiquement l'acc\xe8s aux donn\xe9es, aux entity selections et aux entit\xe9s."]}),"\n",(0,i.jsxs)(s.p,{children:["Le ",(0,i.jsx)(s.code,{children:"localID"})," est local \xe0 la machine qui se connecte au datastore distant, ce qui signifie que :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["si d'autres process de la m\xeame application doivent acc\xe9der au m\xeame datastore distant, ils peuvent utiliser le m\xeame ",(0,i.jsx)(s.code,{children:"localID"})," et partager alors la m\xeame session."]}),"\n",(0,i.jsxs)(s.li,{children:["si un autre process de la m\xeame application ouvre le m\xeame datastore distant, mais avec un autre ",(0,i.jsx)(s.code,{children:"localID"}),", il cr\xe9era une nouvelle session sur le datastore distant."]}),"\n",(0,i.jsxs)(s.li,{children:["si un autre poste se connecte au m\xeame datastore distant avec le m\xeame ",(0,i.jsx)(s.code,{children:"localID"}),", il cr\xe9era une autre session avec un autre cookie."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Ces principes sont illustr\xe9s dans les graphiques suivants :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(756022).Z+"",width:"962",height:"719"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Pour les sessions ouvertes par des requ\xeates REST, veuillez consulter la page ",(0,i.jsx)(s.a,{href:"/docs/fr/20/REST/authUsers",children:"Utilisateurs et sessions"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"visualiser-les-sessions",children:"Visualiser les sessions"}),"\n",(0,i.jsx)(s.p,{children:"Les process qui g\xe8rent les sessions d'acc\xe8s aux datastore apparaissent dans la fen\xeatre d'administration de 4D Server :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'nom : "REST Handler : <nom du process>"'}),"\n",(0,i.jsx)(s.li,{children:"type : type Worker Server HTTP"}),"\n",(0,i.jsxs)(s.li,{children:["session : le nom de session est le nom d'utilisateur pass\xe9 \xe0 la commande ",(0,i.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Dans l'exemple suivant, deux process sont en cours d'ex\xe9cution pour la m\xeame session :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(284359).Z+"",width:"1402",height:"708"})}),"\n",(0,i.jsx)(s.h3,{id:"verrouillage-et-transactions",children:"Verrouillage et transactions"}),"\n",(0,i.jsx)(s.p,{children:"Les fonctionnalit\xe9s ORDA relatives au verrouillage d'entit\xe9 et aux transactions sont g\xe9r\xe9es au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si un process verrouille une entit\xe9 \xe0 partir d'un datastore distant, l'entit\xe9 est verrouill\xe9e pour tous les autres process, m\xeame lorsque ces process partagent la m\xeame session (voir ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/entities#entity-locking",children:"Verrouillage d'entit\xe9s"}),"). Si plusieurs entit\xe9s pointant vers le m\xeame enregistrement ont \xe9t\xe9 verrouill\xe9es dans un process, elles doivent toutes \xeatre d\xe9verrouill\xe9es dans le process pour supprimer le verrou. Si un verrou a \xe9t\xe9 mis sur une entit\xe9, il est supprim\xe9 lorsqu'il n'existe plus de r\xe9f\xe9rence \xe0 cette entit\xe9 en m\xe9moire."]}),"\n",(0,i.jsxs)(s.li,{children:["Les transactions peuvent \xeatre lanc\xe9es, valid\xe9es ou annul\xe9es s\xe9par\xe9ment sur chaque datastore distant \xe0 l'aide des m\xe9thodes ",(0,i.jsx)(s.code,{children:"dataStore.startTransaction( )"}),", ",(0,i.jsx)(s.code,{children:"dataStore.cancelTransaction( )"}),", et ",(0,i.jsx)(s.code,{children:"dataStore.validateTransaction( )"}),". Elles n\u2019ont pas d\u2019incidences sur les autres datastore."]}),"\n",(0,i.jsxs)(s.li,{children:["Les commandes classiques du langage 4D (",(0,i.jsx)(s.code,{children:"START TRANSACTION"}),", ",(0,i.jsx)(s.code,{children:"VALIDATE TRANSACTION"}),", ",(0,i.jsx)(s.code,{children:"CANCEL TRANSACTION"}),") s'appliquent uniquement au datastore principal (renvoy\xe9 par ",(0,i.jsx)(s.code,{children:"ds"}),"). Si une entit\xe9 d'un datastore distant est verrouill\xe9e par une transaction dans un process, les autres process ne peuvent pas la mettre \xe0 jour, m\xeame si ces process partagent la m\xeame session."]}),"\n",(0,i.jsxs)(s.li,{children:["Les verrous sur les entit\xe9s sont supprim\xe9s et les transactions sont annul\xe9es :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"lorsque le process est tu\xe9."}),"\n",(0,i.jsx)(s.li,{children:"quand la session est ferm\xe9e sur le serveur"}),"\n",(0,i.jsx)(s.li,{children:"lorsque la session est arr\xeat\xe9e \xe0 partir de la fen\xeatre d\u2019administration du serveur."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"fermeture-des-sessions",children:"Fermeture des sessions"}),"\n",(0,i.jsxs)(s.p,{children:["Une session est automatiquement ferm\xe9e par 4D lorsqu'il n'y a pas eu d'activit\xe9 durant son timeout. Le timeout par d\xe9faut est de 60 mn mais cette valeur peut \xeatre param\xe9tr\xe9e \xe0 l'aide du param\xe8tre ",(0,i.jsx)(s.em,{children:"connectionInfo"})," de la commande ",(0,i.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Si une demande est envoy\xe9e au datastore distant apr\xe8s la fermeture de la session, elle est automatiquement recr\xe9\xe9e si possible (licence disponible, serveur non arr\xeat\xe9, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus)."}),"\n",(0,i.jsx)(s.h2,{id:"optimisation-clientserveur",children:"Optimisation client/serveur"}),"\n",(0,i.jsxs)(s.p,{children:["4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou qui chargent des entit\xe9s dans des configurations client/serveur (datastore accessible \xe0 distance \xe0 l'aide de ",(0,i.jsx)(s.code,{children:"ds"})," ou de ",(0,i.jsx)(s.code,{children:"Open datastore"}),"). Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["le ",(0,i.jsx)(s.strong,{children:"contexte d'optimisation"})]}),"\n",(0,i.jsxs)(s.li,{children:["le ",(0,i.jsx)(s.strong,{children:"cache ORDA"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"contexte",children:"Contexte"}),"\n",(0,i.jsx)(s.p,{children:"Le contexte d'optimisation est fond\xe9 sur ce qui suit :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Lorsqu'un client requ\xeate une entity selection au serveur, 4D \"apprend\" automatiquement quels attributs de l'entity selection sont r\xe9ellement utilis\xe9s c\xf4t\xe9 client lors de l'ex\xe9cution du code, et g\xe9n\xe8re un \"contexte d'optimisation\" correspondant. Ce contexte est li\xe9 \xe0 l'entity selection et stocke les attributs utilis\xe9s. Il sera mis \xe0 jour dynamiquement si d'autres attributs sont utilis\xe9s par la suite. Les commandes et fonctions suivantes d\xe9clenchent la phase d'apprentissage :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#create-entity-selection",children:(0,i.jsx)(s.code,{children:"Create entity selection"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#fromcollection",children:(0,i.jsx)(s.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#all",children:(0,i.jsx)(s.code,{children:"dataClass.all()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#get",children:(0,i.jsx)(s.code,{children:"dataClass.get()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#query",children:(0,i.jsx)(s.code,{children:"dataClass.query()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#query",children:(0,i.jsx)(s.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Les requ\xeates ult\xe9rieures envoy\xe9es au serveur sur la m\xeame entity selection r\xe9utilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs n\xe9cessaires depuis le serveur, ce qui acc\xe9l\xe8re le traitement. Par exemple, dans une ",(0,i.jsx)(s.a,{href:"#entity-selection-based-list-box",children:"list box de type entity selection"}),", la phase d'apprentissage a lieu pendant l'affichage de la premi\xe8re ligne. L'affichage des lignes suivantes est optimis\xe9. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine \xe0 l'entity selection retourn\xe9e :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#and",children:(0,i.jsx)(s.code,{children:"entitySelection.and()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#minus",children:(0,i.jsx)(s.code,{children:"entitySelection.minus()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#or",children:(0,i.jsx)(s.code,{children:"entitySelection.or()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#orderby",children:(0,i.jsx)(s.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#slice",children:(0,i.jsx)(s.code,{children:"entitySelection.slice()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#drop",children:(0,i.jsx)(s.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Un contexte d'optimisation existant peut \xeatre pass\xe9 en tant que propri\xe9t\xe9 \xe0 une autre s\xe9lection d'entit\xe9 de la m\xeame dataclass, ce qui permet d'\xe9viter la phase d'apprentissage et d'acc\xe9l\xe9rer l'application (voir ",(0,i.jsx)(s.a,{href:"#reusing-the-context-property",children:"Utilisation de la propri\xe9t\xe9 context"})," ci-dessous)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Vous pouvez cr\xe9er des contextes d'optimisation manuellement \xe0 l'aide de la fonction ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(s.code,{children:"dataStore.setRemoteContextInfo()"})})," (voir ",(0,i.jsx)(s.a,{href:"#preconfiguring-contexts",children:"Pr\xe9configuration des contextes"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(834465).Z+"",width:"3439",height:"2018"})}),"\n",(0,i.jsx)(s.admonition,{title:"Note de compatibilit\xe9",type:"warning",children:(0,i.jsxs)(s.p,{children:["Les contextes g\xe9r\xe9s dans les connexions \xe9tablies via ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#open-datastore",children:(0,i.jsx)(s.code,{children:"Open datastore"})})," ne peuvent \xeatre utilis\xe9s qu'entre les versions principales similaires de 4D. Par exemple, une application distante 4D 20.x ne peut utiliser que des contextes d'un datastore 4D Server 20.x."]})}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Consid\xe9rons le code suivant :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie \xe0 la table Company \n End for each\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Gr\xe2ce \xe0 l'optimisation, cette requ\xeate r\xe9cup\xe9rera uniquement les donn\xe9es des attributs utilis\xe9s (firstname, lastname, employer, employer.name) dans ",(0,i.jsx)(s.em,{children:"$sel"})," \xe0 partir de la deuxi\xe8me it\xe9ration de la boucle."]}),"\n",(0,i.jsx)(s.h4,{id:"r\xe9utiliser-la-propri\xe9t\xe9-context",children:"R\xe9utiliser la propri\xe9t\xe9 context"}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez tirer un meilleur parti de l'optimisation en utilisant la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:"context"}),". Cette propri\xe9t\xe9 r\xe9f\xe9rence un contexte d'optimisation \"appris\" pour une entity selection. Elle peut \xeatre pass\xe9e comme param\xe8tre aux fonctions ORDA qui retournent de nouvelles entity selections, afin que les entity selections demandent directement au serveur les attributs utilis\xe9s, sans passer par la phase d'apprentissage."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Vous pouvez \xe9galement cr\xe9er des contextes \xe0 l'aide de la fonction ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(s.code,{children:".setRemoteContextInfo()"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Une m\xeame propri\xe9t\xe9 de contexte d'optimisation peut \xeatre pass\xe9e \xe0 un nombre illimit\xe9 d\"entity selections de la m\xeame dataclass. Toutes les fonctions ORDA qui g\xe8rent les entity selections prennent en charge la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:"context"})," (par exemple ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#query",children:(0,i.jsx)(s.code,{children:"dataClass.query()"})})," ou ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#all",children:(0,i.jsx)(s.code,{children:"dataClass.all()"})}),"). Il est toutefois important de garder \xe0 l'esprit qu'un contexte est automatiquement mis \xe0 jour lorsque de nouveaux attributs sont utilis\xe9s dans d'autres parties du code. Si le m\xeame contexte est r\xe9utilis\xe9 dans diff\xe9rents codes, il risque d'\xeatre surcharg\xe9 et de perdre en efficacit\xe9."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Un m\xe9canisme similaire est mis en \u0153uvre pour les entit\xe9s charg\xe9es, de sorte que seuls les attributs utilis\xe9s sont demand\xe9s (voir la fonction ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#get",children:(0,i.jsx)(s.code,{children:"dataClass.get()"})}),")."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["Exemple avec ",(0,i.jsx)(s.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context" ; "shortList")\n $querysettings2:=New object("context" ; "longList")\n\n $sel1:=ds.Employee.query("lastname = S@" ;$querysettings)\n $data:=extractData($sel1) // Dans la m\xe9thode extractData, une optimisation est \n // d\xe9clench\xe9e et associ\xe9e au contexte "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@" ;$querysettings)\n $data:=extractData($sel2) // Dans la m\xe9thode extractData l\'optimisation associ\xe9e   \n // au contexte "shortList" est appliqu\xe9e\n\n $sel3:=ds.Employee.query("lastname = Smith" ;$querysettings2)\n $data:=extractDetailedData($sel3) // Dans la m\xe9thode extractDetailedData une \n // optimisation est d\xe9clench\xe9e et associ\xe9e au contexte "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown" ;$querysettings2)\n $data:=extractDetailedData($sel4) // Dans la m\xe9thode extractDetailedData l\'optimisation  \n // associ\xe9e au contexte "longList" est appliqu\xe9e\n'})}),"\n",(0,i.jsx)(s.h4,{id:"list-box-de-type-entity-selection",children:"List box de type entity selection"}),"\n",(0,i.jsx)(s.p,{children:"L'optimisation d'entity selection s'applique automatiquement aux listbox bas\xe9es sur une entity selection dans les configurations client/serveur, au moment d'afficher et de d\xe9rouler le contenu d'une listbox : seuls les attributs affich\xe9s dans la listbox sont demand\xe9s depuis le serveur."}),"\n",(0,i.jsxs)(s.p,{children:["Un contexte sp\xe9cifique nomm\xe9 \"mode page\" est \xe9galement propos\xe9 lorsque l'entit\xe9 courante de la s\xe9lection est charg\xe9e \xe0 l'aide de l'expression ",(0,i.jsx)(s.strong,{children:"\xe9l\xe9ment courant"})," de la listbox (voir ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-types",children:"List box de type collection ou entity selection"}),"). Cette fonctionnalit\xe9 vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas pr\xe9cis, notamment si la \"page\" requiert des attributs suppl\xe9mentaires. A noter que seule l'utilisation de l'expression ",(0,i.jsx)(s.strong,{children:"Current item"})," permettra de cr\xe9er/utiliser le contexte de la page (l'acc\xe8s via ",(0,i.jsx)(s.code,{children:"entitySelection[index]"})," modifiera le contexte de l'entity selection)."]}),"\n",(0,i.jsx)(s.p,{children:"Les requ\xeates ult\xe9rieures adress\xe9es au serveur par les fonctions de navigation parmi les entit\xe9s prendront \xe9galement en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entit\xe9 source \xe0 l'entit\xe9 retourn\xe9e :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntityClass#next",children:(0,i.jsx)(s.code,{children:"entity.next()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntityClass#first",children:(0,i.jsx)(s.code,{children:"entity.first()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntityClass#last",children:(0,i.jsx)(s.code,{children:"entity.last()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntityClass#previous",children:(0,i.jsx)(s.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Par exemple, le code suivant charge l'entit\xe9 s\xe9lectionn\xe9e et permet de naviguer dans l'entity selection. Les entit\xe9s sont charg\xe9es dans un contexte s\xe9par\xe9 et le contexte initial de la listbox demeure inchang\xe9 :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //expression de l'\xe9l\xe9ment courant \n  //... faire quelque chose\n $myEntity:=$myEntity.next() //charge la prochaine entit\xe9 \xe0 l'aide du m\xeame contexte\n"})}),"\n",(0,i.jsx)(s.h4,{id:"pr\xe9configuration-des-contextes",children:"Pr\xe9configuration des contextes"}),"\n",(0,i.jsx)(s.p,{children:"Un contexte d'optimisation doit \xeatre d\xe9fini pour chaque fonctionnalit\xe9 ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut \xeatre utilis\xe9 pour les requ\xeates sur les clients, un autre contexte pour les requ\xeates sur les produits, etc."}),"\n",(0,i.jsx)(s.p,{children:"Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez pr\xe9configurer vos contextes et ainsi \xe9conomiser des phases d'apprentissage en suivant ces \xe9tapes :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Concevez vos algorithmes."}),"\n",(0,i.jsx)(s.li,{children:"Ex\xe9cutez votre application et laissez le m\xe9canisme d'apprentissage automatique remplir les contextes d'optimisation."}),"\n",(0,i.jsxs)(s.li,{children:["Appelez la fonction ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#getremotecontextinfo",children:(0,i.jsx)(s.code,{children:"dataStore.getRemoteContextInfo()"})})," ou ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#getallremotecontexts",children:(0,i.jsx)(s.code,{children:"dataStore.getAllRemoteContexts()"})})," pour collecter les contextes. Vous pouvez utiliser les fonctions ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntitySelectionClass#getremotecontextattributes",children:(0,i.jsx)(s.code,{children:"entitySelection.getRemoteContextAttributes()"})})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/EntityClass#getremotecontextattributes",children:(0,i.jsx)(s.code,{children:"entity.getRemoteContextAttributes()"})})," pour analyser la mani\xe8re dont vos algorithmes utilisent les attributs."]}),"\n",(0,i.jsxs)(s.li,{children:["Dans la derni\xe8re \xe9tape, appelez la fonction ",(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(s.code,{children:"dataStore.setRemoteContextInfo()"})})," pour cr\xe9er des contextes au d\xe9marrage de l'application et ",(0,i.jsx)(s.a,{href:"#reusing-the-context-property",children:"les utiliser"})," dans vos algorithmes."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"cache-orda",children:"Cache ORDA"}),"\n",(0,i.jsx)(s.p,{children:"Pour des raisons d'optimisation, les donn\xe9es demand\xe9es au serveur via ORDA sont charg\xe9es dans le cache distant ORDA (qui est diff\xe9rent du cache 4D). Le cache ORDA est organis\xe9 par dataclass et expire au bout de 30 secondes."}),"\n",(0,i.jsx)(s.p,{children:"Les donn\xe9es contenues dans le cache sont consid\xe9r\xe9es comme expir\xe9es lorsque le d\xe9lai d'attente est atteint. Tout acc\xe8s \xe0 des donn\xe9es p\xe9rim\xe9es provoquera l'envoi d'une requ\xeate au serveur. Les donn\xe9es p\xe9rim\xe9es restent dans le cache jusqu'\xe0 ce que l'on ait besoin d'espace."}),"\n",(0,i.jsx)(s.p,{children:"Par d\xe9faut, le cache ORDA est g\xe9r\xe9 de mani\xe8re transparente par 4D. Cependant, vous pouvez contr\xf4ler son contenu en utilisant les fonctions ORDA suivantes :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},834465:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},284359:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},756022:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return a}});var n=t(667294);let i={},r=n.createContext(i);function a(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);