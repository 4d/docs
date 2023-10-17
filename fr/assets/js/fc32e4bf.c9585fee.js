"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69836],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},375164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});n(667294);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"shared",title:"Objets et collections partag\xe9s"},l=void 0,i={unversionedId:"Concepts/shared",id:"version-20-R3/Concepts/shared",title:"Objets et collections partag\xe9s",description:"Les objets partag\xe9s et les collections partag\xe9es sont des objets et des collections sp\xe9cifiques dont le contenu est partag\xe9 entre les process. Compar\xe9s aux Variables interprocess, les objets partag\xe9s et les collections partag\xe9es ont l'avantage d'\xeatre compatibles avec les process 4D pr\xe9emptifs : il peuvent \xeatre pass\xe9s en param\xe8tres (par r\xe9f\xe9rence) aux commandes telles que New process ou CALL WORKER.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/fr/Concepts/shared",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"shared",title:"Objets et collections partag\xe9s"},sidebar:"docs",previous:{title:"Param\xe8tres",permalink:"/docs/fr/Concepts/parameters"},next:{title:"Classes",permalink:"/docs/fr/Concepts/classes"}},p={},u=[{value:"Utilisation des objets et collections partag\xe9s",id:"utilisation-des-objets-et-collections-partag\xe9s",level:2},{value:"Modification",id:"modification",level:3},{value:"Lecture",id:"lecture",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2}],c={toc:u};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Les objets partag\xe9s")," et ",(0,r.kt)("strong",{parentName:"p"},"les collections partag\xe9es")," sont des ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/Concepts/object"}),"objets")," et des ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/Concepts/collection"}),"collections")," sp\xe9cifiques dont le contenu est partag\xe9 entre les process. Compar\xe9s aux ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/Concepts/variables#interprocess-variables"}),"Variables interprocess"),", les objets partag\xe9s et les collections partag\xe9es ont l'avantage d'\xeatre compatibles avec les ",(0,r.kt)("strong",{parentName:"p"},"process 4D pr\xe9emptifs")," : il peuvent \xeatre pass\xe9s en param\xe8tres (par r\xe9f\xe9rence) aux commandes telles que ",(0,r.kt)("inlineCode",{parentName:"p"},"New process")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,r.kt)("p",null,"Shared objects and shared collections can be stored in standard ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," type variables, but must be instantiated using specific commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to create a shared object, use the ",(0,r.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"New shared object"))," command,"),(0,r.kt)("li",{parentName:"ul"},"to create a shared collection, use the ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/fr/API/CollectionClass#new-shared-collection"}),(0,r.kt)("inlineCode",{parentName:"a"},"New shared collection"))," command.")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Shared objects and collections can be set as properties of standard (not shared) objects or collections.")),(0,r.kt)("p",null,"Toute modification d'un objet/d'une collection partag\xe9(e) doit s'effectuer \xe0 l'int\xe9rieur d'une structure ",(0,r.kt)("strong",{parentName:"p"},"Use...End use"),". La lecture d'une valeur d'objet/collection ne n\xe9cessite pas de structure ",(0,r.kt)("strong",{parentName:"p"},"Use...End use"),"."),(0,r.kt)("p",null,"Un catalogue unique et global, retourn\xe9 par la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),", est disponible \xe0 tout moment et depuis tout process de l'application et de ses composants."),(0,r.kt)("h2",o({},{id:"utilisation-des-objets-et-collections-partag\xe9s"}),"Utilisation des objets et collections partag\xe9s"),(0,r.kt)("p",null,"Once instantiated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"New shared object")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"New shared collection")," commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions."),(0,r.kt)("h3",o({},{id:"modification"}),"Modification"),(0,r.kt)("p",null,"Les modifications suivantes peuvent \xeatre effectu\xe9es sur les objets partag\xe9s et les collections partag\xe9es :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ajout ou suppression de propri\xe9t\xe9s d'objets,"),(0,r.kt)("li",{parentName:"ul"},"ajout ou modification de valeurs (prises en charge par les objets/collections partag\xe9(e) s), y compris d'autres objets et collections partag\xe9(s) (ce qui cr\xe9e un groupe partag\xe9, cf. ci-dessous).")),(0,r.kt)("p",null,"All modification instructions in a shared object or collection require to be protected inside a ",(0,r.kt)("a",o({parentName:"p"},{href:"#use-end-use"}),(0,r.kt)("inlineCode",{parentName:"a"},"Use...End use"))," block, otherwise an error is generated."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\nEnd Use\n')),(0,r.kt)("p",null,"For conveniency, all ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/API/CollectionClass"}),"collection functions")," that modify the shared object or collection insert an internal ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," block so you do not have to code it yourself. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$col:=New shared collection()\n$col.push("alpha") //.push() internally triggers Use/End use, so no need to do it yourselves\n')),(0,r.kt)("p",null,"If you need to execute several modifications on the same collection, you can protect all modifications with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," so that modifications are performed atomically."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$col:=Storage.mySharedCollection\nUse($col)\n    $col[0]:="omega" //modifying an element requires to be performed inside Use/End use\n    $col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically\nEnd Use\n')),(0,r.kt)("p",null,"Un objet/une collection partag\xe9(e) ne peut \xeatre modifi\xe9(e) que par un seul process \xe0 la fois. ",(0,r.kt)("inlineCode",{parentName:"p"},"Use")," verrouille l'objet/la collection partag\xe9(e) pour les autres threads, tandis que ",(0,r.kt)("inlineCode",{parentName:"p"},"End use")," d\xe9verrouille l'objet/la collection partag\xe9(e) (si le compteur de verrouillage est \xe0 0, voir ci-dessous). . Toute tentative de modification d'un objet/d'une collection partag\xe9(e) sans au moins un appel \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," g\xe9n\xe8re une erreur. Lorsqu'un process appelle ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," avec un objet/une collection partag\xe9(e) qui est d\xe9j\xe0 \"utilis\xe9(e)\" par un autre process, il est simplement mis en attente jusqu'\xe0 ce qu'il soit d\xe9verrouill\xe9 par l'appel \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"End use")," (aucune erreur n'est g\xe9n\xe9r\xe9e). En cons\xe9quence, les instructions situ\xe9es \xe0 l'int\xe9rieur des structures ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," doivent toujours s'ex\xe9cuter rapidement et d\xe9verrouiller les \xe9l\xe9ments d\xe8s que possible. Il est donc fortement d\xe9conseill\xe9 de modifier un objet ou une collection partag\xe9(e) directement depuis l'interface, par exemple depuis une bo\xeete de dialogue."),(0,r.kt)("p",null,"L'assignation d'objets/collections partag\xe9(e) s \xe0 des propri\xe9t\xe9s ou \xe9l\xe9ments d'autres objets/collections partag\xe9(e) s est autoris\xe9e et entra\xeene la cr\xe9ation de ",(0,r.kt)("strong",{parentName:"p"},"groupes partag\xe9s"),". Un groupe partag\xe9 est automatiquement cr\xe9\xe9 lorsqu'un objet ou une collection partag\xe9(e) est assign\xe9(e) en tant que valeur de propri\xe9t\xe9 ou \xe9l\xe9ment \xe0 un autre objet ou collection partag\xe9(e). Les groupes partag\xe9s permettent d'imbriquer des objets et collections partag\xe9(e)s mais n\xe9cessitent d'observer des r\xe8gles suppl\xe9mentaires :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L'appel de ",(0,r.kt)("inlineCode",{parentName:"li"},"Use")," avec un(e) objet/collection partag\xe9(e) appartenant \xe0 un groupe provoquera le verrouillage des propri\xe9t\xe9s/\xe9l\xe9ments de tous/toutes les objets/collections partag\xe9(e) s du groupe et incr\xe9mente son compteur de verrouillage. L'appel \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"End use")," d\xe9cr\xe9mente le compteur de verrouillage du groupe et lorsque le compteur est \xe0 0, tous les objets ou collections partag\xe9s partag\xe9s sont d\xe9verrouill\xe9s."),(0,r.kt)("li",{parentName:"ul"},"Un objet ou une collection partag\xe9(e) peut appartenir \xe0 un seul groupe partag\xe9. Une erreur est g\xe9n\xe9r\xe9e si vous tentez d'assigner un objet ou une collection appartenant d\xe9j\xe0 \xe0 un groupe \xe0 un groupe diff\xe9rent."),(0,r.kt)("li",{parentName:"ul"},"Les objets/collections group\xe9(e)s ne peuvent plus \xeatre d\xe9group\xe9(e)s. Une fois inclus dans un groupe partag\xe9, un objet ou une collection partag\xe9(e) est li\xe9(e) d\xe9finitivement au groupe pendant toute la dur\xe9e de la session. M\xeame si toutes les r\xe9f\xe9rences de l'objet/la collection sont supprim\xe9(e)s des objets/collections parent(e)s, ils resteront li\xe9s.")),(0,r.kt)("p",null,"Reportez-vous \xe0 l'exemple 2 pour l'illustration des r\xe8gles des groupes partag\xe9s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Les groupes partag\xe9s sont g\xe9r\xe9s via une propri\xe9t\xe9 interne nomm\xe9e ",(0,r.kt)("em",{parentName:"p"},"locking identifier"),". For detailed information on this value, please refer to the 4D Language Reference."),(0,r.kt)("h3",o({},{id:"lecture"}),"Lecture"),(0,r.kt)("p",null,"La lecture de propri\xe9t\xe9s ou d'\xe9l\xe9ments d'un objet ou d'une collection partag\xe9(e) est possible sans appel de la structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use"),', m\xeame si l\'objet ou la collection partag\xe9(e) est "utilis\xe9(e)" par un autre process.'),(0,r.kt)("p",null,"Cependant, lorsque plusieurs valeurs sont interd\xe9pendantes et doivent \xeatre lues simultan\xe9ment, il est n\xe9cessaire d'encadrer l'acc\xe8s en lecture par une structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," pour des raisons de coh\xe9rence."),(0,r.kt)("h3",o({},{id:"duplication"}),"Duplication"),(0,r.kt)("p",null,"Appeler ",(0,r.kt)("inlineCode",{parentName:"p"},"OB Copy")," avec un objet partag\xe9 (ou avec un objet dont des propri\xe9t\xe9s sont des objets partag\xe9s) est possible, mais dans ce cas un objet standard (non partag\xe9) est retourn\xe9."),(0,r.kt)("h3",o({},{id:"storage"}),"Storage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Storage")," est un objet partag\xe9 unique, disponible automatiquement pour chaque application et machine. This shared object is returned by the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1525.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Storage"))," command. Il est destin\xe9 \xe0 r\xe9f\xe9rencer les objets ou collections partag\xe9(e)s d\xe9fini(e)s durant la session que vous souhaitez rendre accessibles \xe0 tous les process, pr\xe9emptifs ou standard."),(0,r.kt)("p",null,"A noter que, \xe0 la diff\xe9rence de objets partag\xe9s standard, l'objet ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," ne cr\xe9e par de groupe partag\xe9 lorsque des objets/collection lui sont assign\xe9(e)s en tant que propri\xe9t\xe9s. Cette exception permet \xe0 l'objet ",(0,r.kt)("strong",{parentName:"p"},"Storage")," d'\xeatre utilis\xe9 sans verrouiller les objets/collections partag\xe9(e)s connect\xe9(e)s."),(0,r.kt)("p",null,"Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),"."),(0,r.kt)("h2",o({},{id:"useend-use"}),"Use...End use"),(0,r.kt)("p",null,"La syntaxe de la structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," est la suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Use(Shared_object_or_Shared_collection)\n    instruction(s)\n End use\n")),(0,r.kt)("p",null,"La structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," d\xe9finit une s\xe9quence d'instructions qui ex\xe9cutera des t\xe2ches sur le param\xe8tre ",(0,r.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," sous la protection d'un s\xe9maphore interne. ",(0,r.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," peut \xeatre tout objet partag\xe9 ou collection partag\xe9e valide."),(0,r.kt)("p",null,"Les objets partag\xe9s et les collections partag\xe9es permettent d'\xe9tablir des communications entre les process, en particulier les ",(0,r.kt)("strong",{parentName:"p"},"process 4D pr\xe9emptifs"),". Ils peuvent \xeatre pass\xe9s par r\xe9f\xe9rence en param\xe8tre d'un process \xe0 un autre. Encadrer les modifications d'objets partag\xe9s et de collections partag\xe9es \xe0 l'aide des mots-cl\xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"Use...End use")," est obligatoire pour emp\xeacher les acc\xe8s concurrents entre les process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une fois que la ligne ",(0,r.kt)("strong",{parentName:"li"},"Use")," est ex\xe9cut\xe9e avec succ\xe8s, toutes les propri\xe9t\xe9s/\xe9l\xe9ments de ",(0,r.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," sont verrouill\xe9(e)s en \xe9criture pour tous les autres process jusqu'\xe0 ce que la ligne ",(0,r.kt)("inlineCode",{parentName:"li"},"End use")," correspondante soit ex\xe9cut\xe9e."),(0,r.kt)("li",{parentName:"ul"},"La s\xe9quence d'",(0,r.kt)("em",{parentName:"li"},"instructions")," peut alors effectuer toute modification dans les propri\xe9t\xe9s/\xe9l\xe9ments de Shared_object_or_Shared_collection sans risque d'acc\xe8s concurrent."),(0,r.kt)("li",{parentName:"ul"},"If another shared object or collection is added as a property of the ",(0,r.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," parameter, they become connected within the same shared group."),(0,r.kt)("li",{parentName:"ul"},"Si un autre process tente d'acc\xe9der \xe0 une propri\xe9t\xe9 de ",(0,r.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," ou une propri\xe9t\xe9 connect\xe9e alors qu'une s\xe9quence ",(0,r.kt)("strong",{parentName:"li"},"Use...End use")," est en cours d'ex\xe9cution sur le m\xeame Shared_object_or_Shared_collection, il est automatiquement plac\xe9 en attente et attendra jusqu'\xe0 ce que la s\xe9quence courante soit termin\xe9e."),(0,r.kt)("li",{parentName:"ul"},"La ligne ",(0,r.kt)("strong",{parentName:"li"},"End use")," d\xe9verrouille les propri\xe9t\xe9s de ",(0,r.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," et tous les objets du m\xeame groupe."),(0,r.kt)("li",{parentName:"ul"},"Plusieurs structures ",(0,r.kt)("strong",{parentName:"li"},"Use...End use")," peuvent \xeatre imbriqu\xe9es dans le code 4D. Toute modification d'un objet/d'une collection partag\xe9(e) doit s'effectuer \xe0 l'int\xe9rieur d'une structure ",(0,r.kt)("strong",{parentName:"li"},"Use...End use"),".")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/API/CollectionClass"}),"collection functions")," that modify shared collections automatically trigger an internal ",(0,r.kt)("strong",{parentName:"p"},"Use")," for this shared collection while the function is executed.")),(0,r.kt)("h2",o({},{id:"exemple-1"}),"Exemple 1"),(0,r.kt)("p",null,"Vous souhaitez lancer plusieurs process qui vont effectuer des t\xe2ches d'inventaire parmi diff\xe9rents produits et mettre \xe0 jour le m\xeame objet partag\xe9. Le process principal instancie un objet partag\xe9 vide et ensuite lance les autres process, passant en param\xe8tre l'objet partag\xe9 et les produits \xe0 comptabiliser :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($_items;0)\n ... //fill the array with items to count\n $nbItems:=Size of array($_items)\n var $inventory : Object\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Create processes\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n')),(0,r.kt)("p",null,"Dans la m\xe9thode \"HowMany\", l'inventaire est effectu\xe9 et l'objet partag\xe9 $inventory est mis \xe0 jour d\xe8s que possible :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"    //HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //method to count products\n Use($inventory) //use shared object\n    $inventory[$what]:=$count  //save the results for this item\n End use\n")),(0,r.kt)("h2",o({},{id:"exemple-2"}),"Exemple 2"),(0,r.kt)("p",null,"Les exemples suivants illustrent les r\xe8gles sp\xe9cifiques \xe0 observer lorsque vous utilisez des groupes partag\xe9s :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //un premier groupe est cr\xe9\xe9\n  End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //un 2e groupe est cr\xe9\xe9\n End use\n\n Use($ob1) //Utilisation d'un objet du groupe 1\n    $ob1.b:=$ob4  //ERREUR\n  //$ob4 appartient d\xe9j\xe0 \xe0 un autre groupe\n  //son assignation n'est pas permise\nEnd use\n\n Use($ob3)\n    $ob3.a:=Null //on enl\xe8ve la r\xe9f\xe9rence de $ob4 du groupe 2\n End use\n\n Use($ob1) //Utilisation d'un objet du groupe 1\n    $ob1.b:=$ob4  //ERREUR\n  //$ob4 appartient toujours au groupe 2\n  //son assignation n'est pas permise\n End use\n")))}d.isMDXComponent=!0}}]);