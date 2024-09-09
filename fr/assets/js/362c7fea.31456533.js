/*! For license information please see 362c7fea.31456533.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20344],{47766:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(474848),i=s(28453);const r={id:"client-server-optimization",title:"Optimisation client/serveur"},o=void 0,a={id:"ORDA/client-server-optimization",title:"Optimisation client/serveur",description:"4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou chargent des entit\xe9s dans l'architecture client/serveur. Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ORDA/client-server-optimization.md",sourceDirName:"ORDA",slug:"/ORDA/client-server-optimization",permalink:"/docs/fr/20-R5/ORDA/client-server-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"client-server-optimization",title:"Optimisation client/serveur"},sidebar:"docs",previous:{title:"Privil\xe8ges",permalink:"/docs/fr/20-R5/ORDA/privileges"},next:{title:"Glossaire",permalink:"/docs/fr/20-R5/ORDA/glossary"}},l={},c=[{value:"Architectures prises en charge",id:"architectures-prises-en-charge",level:2},{value:"Contexte d&#39;optimisation",id:"contexte-doptimisation",level:2},{value:"Exemple",id:"exemple",level:3},{value:"R\xe9utilisation de la propri\xe9t\xe9 <code>context</code>",id:"r\xe9utilisation-de-la-propri\xe9t\xe9-context",level:3},{value:"List box de type entity selection",id:"list-box-de-type-entity-selection",level:3},{value:"Pr\xe9configuration des contextes",id:"pr\xe9configuration-des-contextes",level:3},{value:"Cache ORDA",id:"cache-orda",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou chargent des entit\xe9s dans l'architecture client/serveur. Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["le ",(0,n.jsx)(t.strong,{children:"contexte d'optimisation"})]}),"\n",(0,n.jsxs)(t.li,{children:["le ",(0,n.jsx)(t.strong,{children:"Cache ORDA"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architectures-prises-en-charge",children:"Architectures prises en charge"}),"\n",(0,n.jsx)(t.p,{children:"Les architectures client/serveur de l'ORDA qui prennent en charge l'optimisation sont :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Les datastores serveur auxquels acc\xe8dent les applications 4D distantes via ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#ds",children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ds"})})}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Les ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/ORDA/datastores",children:"datastores distants"}),", ouverts via la commande ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Open datastore"})})})," (requ\xeates clientes REST)."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"contexte-doptimisation",children:"Contexte d'optimisation"}),"\n",(0,n.jsx)(t.p,{children:"Le contexte d'optimisation est fond\xe9 sur ce qui suit :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Lorsqu'un client requ\xeate une entity selection au serveur, 4D \"apprend\" automatiquement quels attributs de l'entity selection sont r\xe9ellement utilis\xe9s c\xf4t\xe9 client lors de l'ex\xe9cution du code, et g\xe9n\xe8re un \"contexte d'optimisation\" correspondant. Ce contexte est li\xe9 \xe0 l'entity selection et stocke les attributs utilis\xe9s. Il sera mis \xe0 jour dynamiquement si d'autres attributs sont utilis\xe9s par la suite. Les commandes et fonctions suivantes d\xe9clenchent la phase d'apprentissage :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#create-entity-selection",children:(0,n.jsx)(t.code,{children:"Create entity selection"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#fromcollection",children:(0,n.jsx)(t.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#query",children:(0,n.jsx)(t.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Les requ\xeates ult\xe9rieures envoy\xe9es au serveur sur la m\xeame entity selection r\xe9utilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs n\xe9cessaires depuis le serveur, ce qui acc\xe9l\xe8re le traitement. Par exemple, dans une ",(0,n.jsx)(t.a,{href:"#entity-selection-based-list-box",children:"list box de type entity selection"}),", la phase d'apprentissage a lieu pendant l'affichage de la premi\xe8re ligne. L'affichage des lignes suivantes est optimis\xe9. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine \xe0 l'entity selection retourn\xe9e :"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#and",children:(0,n.jsx)(t.code,{children:"entitySelection.and()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#minus",children:(0,n.jsx)(t.code,{children:"entitySelection.minus()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#or",children:(0,n.jsx)(t.code,{children:"entitySelection.or()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#orderBy",children:(0,n.jsx)(t.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#slice",children:(0,n.jsx)(t.code,{children:"entitySelection.slice()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#drop",children:(0,n.jsx)(t.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.jsx)(t.a,{href:"#reusing-the-context-property",children:"Reusing the context property"})," below)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Vous pouvez cr\xe9er des contextes d'optimisation manuellement \xe0 l'aide de la fonction ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," (voir ",(0,n.jsx)(t.a,{href:"#preconfiguring-contexts",children:"Pr\xe9configuration des contextes"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(338856).A+"",width:"3439",height:"2018"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note de compatibilit\xe9",type:"note",children:(0,n.jsxs)(t.p,{children:["Les contextes g\xe9r\xe9s dans les connexions \xe9tablies via ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.code,{children:"Open datastore"})})," peuvent uniquement \xeatre utilis\xe9s entre des versions principales similaires de 4D. Par exemple, une application distante 4D 20.x ne peut utiliser que les contextes d'un datastore 4D Server 20.x."]})}),"\n",(0,n.jsx)(t.h3,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(t.p,{children:"Consid\xe9rons le code suivant :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie \xe0 la table Company \n End for each\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Gr\xe2ce \xe0 l'optimisation, cette requ\xeate r\xe9cup\xe9rera uniquement les donn\xe9es des attributs utilis\xe9s (firstname, lastname, employer, employer.name) dans ",(0,n.jsx)(t.em,{children:"$sel"})," \xe0 partir de la deuxi\xe8me it\xe9ration de la boucle."]}),"\n",(0,n.jsxs)(t.h3,{id:"r\xe9utilisation-de-la-propri\xe9t\xe9-context",children:["R\xe9utilisation de la propri\xe9t\xe9 ",(0,n.jsx)(t.code,{children:"context"})]}),"\n",(0,n.jsxs)(t.p,{children:["Vous pouvez augmenter les avantages de l'optimisation en utilisant la propri\xe9t\xe9 ",(0,n.jsx)(t.strong,{children:"context"}),". Cette propri\xe9t\xe9 r\xe9f\xe9rence un contexte d'optimisation \"appris\" pour une entity selection. Elle peut \xeatre pass\xe9e comme param\xe8tre aux fonctions ORDA qui retournent de nouvelles entity selections, afin que les entity selections demandent directement au serveur les attributs utilis\xe9s, sans passer par la phase d'apprentissage."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Vous pouvez \xe9galement cr\xe9er des contextes en utilisant la fonction ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:".setRemoteContextInfo()"})}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Une m\xeame propri\xe9t\xe9 de contexte d'optimisation peut \xeatre pass\xe9e \xe0 un nombre illimit\xe9 d\"entity selections de la m\xeame dataclass. Toutes les fonctions ORDA qui g\xe8rent les entity selections prennent en charge la propri\xe9t\xe9 ",(0,n.jsx)(t.strong,{children:"context"})," (par exemple ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})," ou ",(0,n.jsx)(t.a,{href:"../API/DataClass.md#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})}),"). Il est toutefois important de garder \xe0 l'esprit qu'un contexte est automatiquement mis \xe0 jour lorsque de nouveaux attributs sont utilis\xe9s dans d'autres parties du code. Si le m\xeame contexte est r\xe9utilis\xe9 dans diff\xe9rents codes, il risque d'\xeatre surcharg\xe9 et de perdre en efficacit\xe9."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Un m\xe9canisme similaire est impl\xe9ment\xe9 pour les entit\xe9s qui sont charg\xe9es, de sorte que seuls les attributs utilis\xe9s sont demand\xe9s (voir la fonction ",(0,n.jsx)(t.a,{href:"../API/DataClass.md#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Exemple avec ",(0,n.jsx)(t.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n'})}),"\n",(0,n.jsx)(t.h3,{id:"list-box-de-type-entity-selection",children:"List box de type entity selection"}),"\n",(0,n.jsx)(t.p,{children:"L'optimisation d'entity selection s'applique automatiquement aux listbox bas\xe9es sur une entity selection dans les applications desktop client/serveur, au moment d'afficher et de d\xe9rouler le contenu d'une listbox : seuls les attributs affich\xe9s dans la listbox sont demand\xe9s au serveur."}),"\n",(0,n.jsxs)(t.p,{children:["Un contexte sp\xe9cifique nomm\xe9 \"page mode\" est \xe9galement fourni lorsque l'entit\xe9 courante de la s\xe9lection est charg\xe9e \xe0 l'aide de l'expression de la propri\xe9t\xe9 ",(0,n.jsx)(t.strong,{children:"El\xe9ment courant"})," de la list box (voir ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/FormObjects/listboxOverview#list-box-types",children:"List box de type collection ou entity selection"}),"). Cette fonctionnalit\xe9 vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas pr\xe9cis, notamment si la \"page\" requiert des attributs suppl\xe9mentaires. A noter que seule l'utilisation de l'expression ",(0,n.jsx)(t.strong,{children:"El\xe9ment courant"})," permettra de cr\xe9er/utiliser le contexte de la page (l'acc\xe8s via ",(0,n.jsx)(t.code,{children:"entitySelection[index]"})," modifiera le contexte de l'entity selection)."]}),"\n",(0,n.jsx)(t.p,{children:"Les requ\xeates ult\xe9rieures adress\xe9es au serveur par les fonctions de navigation parmi les entit\xe9s prendront \xe9galement en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entit\xe9 source \xe0 l'entit\xe9 retourn\xe9e :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntityClass#next",children:(0,n.jsx)(t.code,{children:"entity.next()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntityClass#first",children:(0,n.jsx)(t.code,{children:"entity.first()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntityClass#last",children:(0,n.jsx)(t.code,{children:"entity.last()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntityClass#previous",children:(0,n.jsx)(t.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Par exemple, le code suivant charge l'entit\xe9 s\xe9lectionn\xe9e et permet de naviguer dans l'entity selection. Les entit\xe9s sont charg\xe9es dans un contexte s\xe9par\xe9 et le contexte initial de la listbox demeure inchang\xe9 :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //expression de l'\xe9l\xe9ment courant \n  //... faire quelque chose\n $myEntity:=$myEntity.next() //charge l'entit\xe9 suivante \xe0 l'aide du m\xeame contexte\n"})}),"\n",(0,n.jsx)(t.h3,{id:"pr\xe9configuration-des-contextes",children:"Pr\xe9configuration des contextes"}),"\n",(0,n.jsx)(t.p,{children:"Un contexte d'optimisation doit \xeatre d\xe9fini pour chaque fonctionnalit\xe9 ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut \xeatre utilis\xe9 pour les requ\xeates sur les clients, un autre contexte pour les requ\xeates sur les produits, etc."}),"\n",(0,n.jsx)(t.p,{children:"Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez pr\xe9configurer vos contextes et ainsi \xe9conomiser des phases d'apprentissage en suivant ces \xe9tapes :"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Concevez vos algorithmes."}),"\n",(0,n.jsx)(t.li,{children:"Ex\xe9cutez votre application et laissez le m\xe9canisme d'apprentissage automatique remplir les contextes d'optimisation."}),"\n",(0,n.jsxs)(t.li,{children:["Appelez la fonction ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#getremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.getRemoteContextInfo()"})})," ou ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#getallremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.getAllRemoteContexts()"})})," pour collecter les contextes. Vous pouvez utiliser les fonctions ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entitySelection.getRemoteContextAttributes()"})})," et ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntityClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entity.getRemoteContextAttributes()"})})," pour analyser comment vos algorithmes utilisent les attributs."]}),"\n",(0,n.jsxs)(t.li,{children:["Dans la derni\xe8re \xe9tape, appelez la fonction ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," pour construire des contextes au d\xe9marrage de l'application et ",(0,n.jsx)(t.a,{href:"#reutilisation-de-la-propriete-context",children:"utilisez-les"})," dans vos algorithmes."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cache-orda",children:"Cache ORDA"}),"\n",(0,n.jsx)(t.p,{children:"Pour des raisons d'optimisation, les donn\xe9es demand\xe9es au serveur via ORDA sont charg\xe9es dans le cache distant ORDA (qui est diff\xe9rent du cache 4D). Le cache ORDA est organis\xe9 par dataclass et expire au bout de 30 secondes."}),"\n",(0,n.jsx)(t.p,{children:"Les donn\xe9es contenues dans le cache sont consid\xe9r\xe9es comme expir\xe9es lorsque le d\xe9lai d'attente est atteint. Tout acc\xe8s \xe0 des donn\xe9es p\xe9rim\xe9es provoquera l'envoi d'une requ\xeate au serveur. Les donn\xe9es p\xe9rim\xe9es restent dans le cache jusqu'\xe0 ce que l'on ait besoin d'espace."}),"\n",(0,n.jsxs)(t.p,{children:["You can force entity selection data in the ORDA cache to expire at any moment by using the ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/EntitySelectionClass#refresh",children:(0,n.jsx)(t.code,{children:"refresh()"})})," function."]}),"\n",(0,n.jsx)(t.p,{children:"Par d\xe9faut, le cache ORDA est g\xe9r\xe9 de mani\xe8re transparente par 4D. Cependant, vous pouvez contr\xf4ler son contenu en utilisant les fonctions ORDA suivantes :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,s)=>{var n=s(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,r={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,s)=>{e.exports=s(221020)},338856:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(296540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);