"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86302],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},875205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});n(667294);var a=n(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={id:"client-server-optimization",title:"Optimisation client/serveur"},o=void 0,l={unversionedId:"ORDA/client-server-optimization",id:"version-20-R5/ORDA/client-server-optimization",title:"Optimisation client/serveur",description:"4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou chargent des entit\xe9s dans l'architecture client/serveur. Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ORDA/client-server-optimization.md",sourceDirName:"ORDA",slug:"/ORDA/client-server-optimization",permalink:"/docs/fr/ORDA/client-server-optimization",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"client-server-optimization",title:"Optimisation client/serveur"},sidebar:"docs",previous:{title:"Privil\xe8ges",permalink:"/docs/fr/ORDA/privileges"},next:{title:"Glossaire",permalink:"/docs/fr/ORDA/glossary"}},p={},c=[{value:"Architectures prises en charge",id:"architectures-prises-en-charge",level:2},{value:"Contexte d&#39;optimisation",id:"contexte-doptimisation",level:2},{value:"Exemple",id:"exemple",level:3},{value:"R\xe9utilisation de la propri\xe9t\xe9 <code>context</code>",id:"r\xe9utilisation-de-la-propri\xe9t\xe9-context",level:3},{value:"List box de type entity selection",id:"list-box-de-type-entity-selection",level:3},{value:"Pr\xe9configuration des contextes",id:"pr\xe9configuration-des-contextes",level:3},{value:"Cache ORDA",id:"cache-orda",level:2}],u={toc:c};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou chargent des entit\xe9s dans l'architecture client/serveur. Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le ",(0,a.kt)("strong",{parentName:"li"},"contexte d'optimisation")),(0,a.kt)("li",{parentName:"ul"},"le ",(0,a.kt)("strong",{parentName:"li"},"Cache ORDA"))),(0,a.kt)("h2",i({},{id:"architectures-prises-en-charge"}),"Architectures prises en charge"),(0,a.kt)("p",null,"Les architectures client/serveur de l'ORDA qui prennent en charge l'optimisation sont :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les datastores serveur auxquels acc\xe8dent les applications 4D distantes via ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataStoreClass#ds"}),(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"ds"))),","),(0,a.kt)("li",{parentName:"ul"},"Les ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/ORDA/datastores"}),"datastores distants"),", ouverts via la commande ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataStoreClass#open-datastore"}),(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Open datastore")))," (requ\xeates clientes REST).")),(0,a.kt)("h2",i({},{id:"contexte-doptimisation"}),"Contexte d'optimisation"),(0,a.kt)("p",null,"Le contexte d'optimisation est fond\xe9 sur ce qui suit :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsqu'un client requ\xeate une entity selection au serveur, 4D \"apprend\" automatiquement quels attributs de l'entity selection sont r\xe9ellement utilis\xe9s c\xf4t\xe9 client lors de l'ex\xe9cution du code, et g\xe9n\xe8re un \"contexte d'optimisation\" correspondant. Ce contexte est li\xe9 \xe0 l'entity selection et stocke les attributs utilis\xe9s. Il sera mis \xe0 jour dynamiquement si d'autres attributs sont utilis\xe9s par la suite. Les commandes et fonctions suivantes d\xe9clenchent la phase d'apprentissage :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#create-entity-selection"}),(0,a.kt)("inlineCode",{parentName:"a"},"Create entity selection"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#fromcollection"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#all"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#get"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#query"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#query"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Les requ\xeates ult\xe9rieures envoy\xe9es au serveur sur la m\xeame entity selection r\xe9utilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs n\xe9cessaires depuis le serveur, ce qui acc\xe9l\xe8re le traitement. Par exemple, dans une ",(0,a.kt)("a",i({parentName:"p"},{href:"#entity-selection-based-list-box"}),"list box de type entity selection"),", la phase d'apprentissage a lieu pendant l'affichage de la premi\xe8re ligne. L'affichage des lignes suivantes est optimis\xe9. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine \xe0 l'entity selection retourn\xe9e :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#and"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#minus"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#or"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#orderBy"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#slice"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#drop"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Un contexte d'optimisation existant peut \xeatre pass\xe9 en tant que propri\xe9t\xe9 \xe0 une autre entity selection de la m\xeame dataclass, ce qui permet d'\xe9viter la phase d'apprentissage et d'acc\xe9l\xe9rer l'application (voir ",(0,a.kt)("a",i({parentName:"p"},{href:"#reusing-the-context-property"}),"Utilisation de la propri\xe9t\xe9 context")," ci-dessous).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez cr\xe9er des contextes d'optimisation manuellement \xe0 l'aide de la fonction ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/fr/API/DataStoreClass#setremotecontextinfo"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," (voir ",(0,a.kt)("a",i({parentName:"p"},{href:"#preconfiguring-contexts"}),"Pr\xe9configuration des contextes"),")."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(240826).Z,width:"3439",height:"2018"})),(0,a.kt)("admonition",i({},{title:"Note de compatibilit\xe9",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Les contextes g\xe9r\xe9s dans les connexions \xe9tablies via ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/fr/API/DataStoreClass#open-datastore"}),(0,a.kt)("inlineCode",{parentName:"a"},"Open datastore"))," peuvent uniquement \xeatre utilis\xe9s entre des versions principales similaires de 4D. Par exemple, une application distante 4D 20.x ne peut utiliser que les contextes d'un datastore 4D Server 20.x.")),(0,a.kt)("h3",i({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"Consid\xe9rons le code suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie \xe0 la table Company \n End for each\n')),(0,a.kt)("p",null,"Gr\xe2ce \xe0 l'optimisation, cette requ\xeate r\xe9cup\xe9rera uniquement les donn\xe9es des attributs utilis\xe9s (firstname, lastname, employer, employer.name) dans ",(0,a.kt)("em",{parentName:"p"},"$sel")," \xe0 partir de la deuxi\xe8me it\xe9ration de la boucle."),(0,a.kt)("h3",i({},{id:"r\xe9utilisation-de-la-propri\xe9t\xe9-context"}),"R\xe9utilisation de la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"Vous pouvez augmenter les avantages de l'optimisation en utilisant la propri\xe9t\xe9 ",(0,a.kt)("strong",{parentName:"p"},"context"),". Cette propri\xe9t\xe9 r\xe9f\xe9rence un contexte d'optimisation \"appris\" pour une entity selection. Elle peut \xeatre pass\xe9e comme param\xe8tre aux fonctions ORDA qui retournent de nouvelles entity selections, afin que les entity selections demandent directement au serveur les attributs utilis\xe9s, sans passer par la phase d'apprentissage."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement cr\xe9er des contextes en utilisant la fonction ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/fr/API/DataStoreClass#setremotecontextinfo"}),(0,a.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()")),".")),(0,a.kt)("p",null,"Une m\xeame propri\xe9t\xe9 de contexte d'optimisation peut \xeatre pass\xe9e \xe0 un nombre illimit\xe9 d\"entity selections de la m\xeame dataclass. Toutes les fonctions ORDA qui g\xe8rent les entity selections prennent en charge la propri\xe9t\xe9 ",(0,a.kt)("strong",{parentName:"p"},"context")," (par exemple ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/fr/API/DataClassClass#query"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," ou ",(0,a.kt)("a",i({parentName:"p"},{href:"../API/DataClass.md#all"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). Il est toutefois important de garder \xe0 l'esprit qu'un contexte est automatiquement mis \xe0 jour lorsque de nouveaux attributs sont utilis\xe9s dans d'autres parties du code. Si le m\xeame contexte est r\xe9utilis\xe9 dans diff\xe9rents codes, il risque d'\xeatre surcharg\xe9 et de perdre en efficacit\xe9."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Un m\xe9canisme similaire est impl\xe9ment\xe9 pour les entit\xe9s qui sont charg\xe9es, de sorte que seuls les attributs utilis\xe9s sont demand\xe9s (voir la fonction ",(0,a.kt)("a",i({parentName:"p"},{href:"../API/DataClass.md#get"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataClass.get()")),").")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemple avec ",(0,a.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n \n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // dans la m\xe9thode extractData un contexte d\'optimisation    \n // est g\xe9n\xe9r\xe9 et associ\xe9 au contexte "shortList"\n \n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // dans la m\xe9thode extractData le contexte d\'optimisation   \n // associ\xe9 au contexte "shortList" est appliqu\xe9\n \n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // dans la m\xe9thode extractDetailedData un contexte d\'optimisation  \n // est g\xe9n\xe9r\xe9 et associ\xe9 au contexte "longList"\n \n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // dans extractDetailedData  le contexte d\'optimisation  \n // associ\xe9 au contexte "longList" est appliqu\xe9\n')),(0,a.kt)("h3",i({},{id:"list-box-de-type-entity-selection"}),"List box de type entity selection"),(0,a.kt)("p",null,"L'optimisation d'entity selection s'applique automatiquement aux listbox bas\xe9es sur une entity selection dans les applications desktop client/serveur, au moment d'afficher et de d\xe9rouler le contenu d'une listbox : seuls les attributs affich\xe9s dans la listbox sont demand\xe9s au serveur."),(0,a.kt)("p",null,"Un contexte sp\xe9cifique nomm\xe9 \"page mode\" est \xe9galement fourni lorsque l'entit\xe9 courante de la s\xe9lection est charg\xe9e \xe0 l'aide de l'expression de la propri\xe9t\xe9 ",(0,a.kt)("strong",{parentName:"p"},"El\xe9ment courant")," de la list box (voir ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/fr/FormObjects/listboxOverview#list-box-types"}),"List box de type collection ou entity selection"),"). Cette fonctionnalit\xe9 vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas pr\xe9cis, notamment si la \"page\" requiert des attributs suppl\xe9mentaires. A noter que seule l'utilisation de l'expression ",(0,a.kt)("strong",{parentName:"p"},"El\xe9ment courant")," permettra de cr\xe9er/utiliser le contexte de la page (l'acc\xe8s via ",(0,a.kt)("inlineCode",{parentName:"p"},"entitySelection[index]")," modifiera le contexte de l'entity selection)."),(0,a.kt)("p",null,"Les requ\xeates ult\xe9rieures adress\xe9es au serveur par les fonctions de navigation parmi les entit\xe9s prendront \xe9galement en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entit\xe9 source \xe0 l'entit\xe9 retourn\xe9e :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntityClass#next"}),(0,a.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntityClass#first"}),(0,a.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntityClass#last"}),(0,a.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntityClass#previous"}),(0,a.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,a.kt)("p",null,"Par exemple, le code suivant charge l'entit\xe9 s\xe9lectionn\xe9e et permet de naviguer dans l'entity selection. Les entit\xe9s sont charg\xe9es dans un contexte s\xe9par\xe9 et le contexte initial de la listbox demeure inchang\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //expression de l'\xe9l\xe9ment courant \n  //... faire quelque chose\n $myEntity:=$myEntity.next() //charge l'entit\xe9 suivante \xe0 l'aide du m\xeame contexte\n")),(0,a.kt)("h3",i({},{id:"pr\xe9configuration-des-contextes"}),"Pr\xe9configuration des contextes"),(0,a.kt)("p",null,"Un contexte d'optimisation doit \xeatre d\xe9fini pour chaque fonctionnalit\xe9 ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut \xeatre utilis\xe9 pour les requ\xeates sur les clients, un autre contexte pour les requ\xeates sur les produits, etc."),(0,a.kt)("p",null,"Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez pr\xe9configurer vos contextes et ainsi \xe9conomiser des phases d'apprentissage en suivant ces \xe9tapes :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Concevez vos algorithmes."),(0,a.kt)("li",{parentName:"ol"},"Ex\xe9cutez votre application et laissez le m\xe9canisme d'apprentissage automatique remplir les contextes d'optimisation."),(0,a.kt)("li",{parentName:"ol"},"Appelez la fonction ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataStoreClass#getremotecontextinfo"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," ou ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataStoreClass#getallremotecontextinfo"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," pour collecter les contextes. Vous pouvez utiliser les fonctions ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntitySelectionClass#getremotecontextattributes"}),(0,a.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," et ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/EntityClass#getremotecontextattributes"}),(0,a.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," pour analyser comment vos algorithmes utilisent les attributs."),(0,a.kt)("li",{parentName:"ol"},"Dans la derni\xe8re \xe9tape, appelez la fonction ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataStoreClass#setremotecontextinfo"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," pour construire des contextes au d\xe9marrage de l'application et ",(0,a.kt)("a",i({parentName:"li"},{href:"#reutilisation-de-la-propriete-context"}),"utilisez-les")," dans vos algorithmes.")),(0,a.kt)("h2",i({},{id:"cache-orda"}),"Cache ORDA"),(0,a.kt)("p",null,"Pour des raisons d'optimisation, les donn\xe9es demand\xe9es au serveur via ORDA sont charg\xe9es dans le cache distant ORDA (qui est diff\xe9rent du cache 4D). Le cache ORDA est organis\xe9 par dataclass et expire au bout de 30 secondes."),(0,a.kt)("p",null,"Les donn\xe9es contenues dans le cache sont consid\xe9r\xe9es comme expir\xe9es lorsque le d\xe9lai d'attente est atteint. Tout acc\xe8s \xe0 des donn\xe9es p\xe9rim\xe9es provoquera l'envoi d'une requ\xeate au serveur. Les donn\xe9es p\xe9rim\xe9es restent dans le cache jusqu'\xe0 ce que l'on ait besoin d'espace."),(0,a.kt)("p",null,"Par d\xe9faut, le cache ORDA est g\xe9r\xe9 de mani\xe8re transparente par 4D. Cependant, vous pouvez contr\xf4ler son contenu en utilisant les fonctions ORDA suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/docs/fr/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}m.isMDXComponent=!0},240826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"}}]);