"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32114],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(667294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=l,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},968417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});a(667294);var n=a(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={id:"global-stamp",title:"Using the Global Stamp"},o=void 0,s={unversionedId:"ORDA/global-stamp",id:"version-20-R4/ORDA/global-stamp",title:"Using the Global Stamp",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/ORDA/global-stamp.md",sourceDirName:"ORDA",slug:"/ORDA/global-stamp",permalink:"/docs/fr/20-R4/ORDA/global-stamp",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglobal-stamp.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"global-stamp",title:"Using the Global Stamp"},sidebar:"docs",previous:{title:"Working with data",permalink:"/docs/fr/20-R4/ORDA/entities"},next:{title:"Using a remote datastore",permalink:"/docs/fr/20-R4/ORDA/datastores"}},d={},u=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Configuration du suivi des changements de donn\xe9es",id:"configuration-du-suivi-des-changements-de-donn\xe9es",level:2},{value:"Configuration de la structure",id:"configuration-de-la-structure",level:3},{value:"Utilisation de l&#39;Editeur de structure",id:"utilisation-de-lediteur-de-structure",level:3},{value:"Exemple",id:"exemple",level:2}],p={toc:u};function m(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,n.kt)("p",null,"4D automatically manages an internal ",(0,n.kt)("strong",{parentName:"p"},"global modification stamp"),", useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc."),(0,n.kt)("p",null,"Le marqueur de modification global est un nombre, toujours maintenu par 4D, m\xeame en cas de restitution de la base de donn\xe9es, d'importation, etc. Note however that the stamp can be modified using the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/fr/20-R4/API/DataStoreClass#setglobalstamp"}),(0,n.kt)("inlineCode",{parentName:"a"},".setGlobalStamp()"))," function."),(0,n.kt)("p",null,"Once the ",(0,n.kt)("a",l({parentName:"p"},{href:"#configuring-data-change-tracking"}),"data change tracking is configured and enabled"),", the following actions are automatically executed by 4D at each record modification (add, modify, delete):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"La valeur courante du marqueur de modification globale est stock\xe9e dans l'attribut sp\xe9cial \"",(0,n.kt)("strong",{parentName:"p"},"GlobalStamp\" de l'entit\xe9 concern\xe9e. In case of a deletion, a new entity is also added to the `"),'DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"La valeur du marqueur de modification global est incr\xe9ment\xe9e."))),(0,n.kt)("p",null,"Ce m\xe9canisme vous permet d'identifier les entit\xe9s qui ont \xe9t\xe9 modifi\xe9es, ajout\xe9es ou supprim\xe9es depuis un point dans le temps, et de mettre en \u0153uvre toute action appropri\xe9e (voir exemple)."),(0,n.kt)("admonition",l({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Do not confuse the ",(0,n.kt)("strong",{parentName:"p"},"global modification stamp")," with the internal ",(0,n.kt)("strong",{parentName:"p"},"entity stamp"),", used for the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/fr/20-R4/ORDA/entities#automatic-optimistic-lock"}),"optimistic locking feature"),".")),(0,n.kt)("h2",l({},{id:"configuration-du-suivi-des-changements-de-donn\xe9es"}),"Configuration du suivi des changements de donn\xe9es"),(0,n.kt)("p",null,"By default, the global modification stamp is not created (the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/fr/20-R4/API/DataStoreClass#getglobalstamp"}),(0,n.kt)("inlineCode",{parentName:"a"},".getGlobalStamp()"))," function returns 0. Pour activer le suivi des changements de donn\xe9es, vous devez ajouter des champs sp\xe9ciaux et une table \xe0 votre structure. Vous pouvez utiliser le menu contextuel de l'\xe9diteur de structure pour cr\xe9er automatiquement tous les \xe9l\xe9ments n\xe9cessaires."),(0,n.kt)("h3",l({},{id:"configuration-de-la-structure"}),"Configuration de la structure"),(0,n.kt)("p",null,"To enable data change tracking, the application structure must contain at least one table with a ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," field."),(0,n.kt)("p",null,"De plus, pour assurer la bonne marche de la fonctionnalit\xe9, les conditions suivantes sont requises :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"__GlobalStamp")," field must must be of type ",(0,n.kt)("em",{parentName:"li"},"Integer 64 bits"),", with ",(0,n.kt)("em",{parentName:"li"},"automatic index"),", ",(0,n.kt)("em",{parentName:"li"},"Expose as REST resource"),", and ",(0,n.kt)("em",{parentName:"li"},"Invisible")," properties selected."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"__DeletedRecords")," table must be added, with the following fields:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__PrimaryKey"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Cl\xe9 primaire de l'entit\xe9 supprim\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__Stamp"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer 64 bits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Marqueur global juste avant la suppression")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__TableName"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nom de la table de l'entit\xe9 supprim\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__TableNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Longint"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Num\xe9ro de la table de l'entit\xe9 supprim\xe9e")))),(0,n.kt)("p",null,"You can only track changes for data in tables having the ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," field."),(0,n.kt)("admonition",l({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"In the 4D language, the ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," field value should be handled through a ",(0,n.kt)("inlineCode",{parentName:"p"},"Real")," type variable.")),(0,n.kt)("h3",l({},{id:"utilisation-de-lediteur-de-structure"}),"Utilisation de l'Editeur de structure"),(0,n.kt)("p",null,"L'Editeur de structure de 4D vous permet d'activer ou de d\xe9sactiver le suivi du changement de donn\xe9es \xe0 l'aide d'une commande de menu."),(0,n.kt)("p",null,"Pour activer le suivi des changements de donn\xe9es :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"S\xe9lectionnez la ou les table(s) pour lesquelles vous souhaitez activer le suivi des changements de donn\xe9es."),(0,n.kt)("li",{parentName:"ol"},"Right-click on a selected table and select ",(0,n.kt)("strong",{parentName:"li"},"Enable data change tracking")," in the contextual menu."),(0,n.kt)("li",{parentName:"ol"},"Une bo\xeete de dialogue de confirmation s'affiche. Cliquez sur ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("p",null,"4D effectue alors les modifications suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A preconfigured ",(0,n.kt)("inlineCode",{parentName:"li"},"__GlobalStamp")," field is added to the table(s)."),(0,n.kt)("li",{parentName:"ul"},"If not already existing, a ",(0,n.kt)("inlineCode",{parentName:"li"},"__DeletedRecords")," table is added to the structure.")),(0,n.kt)("p",null,"Pour d\xe9sactiver le suivi des changements de donn\xe9es :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"S\xe9lectionnez la ou les table(s) pour lesquelles vous souhaitez supprimer le suivi des changements de donn\xe9es."),(0,n.kt)("li",{parentName:"ol"},"Right-click on a selected table and select ",(0,n.kt)("strong",{parentName:"li"},"Disable data change tracking")," in the contextual menu."),(0,n.kt)("li",{parentName:"ol"},"Une bo\xeete de dialogue de confirmation s'affiche. Cliquez sur ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("p",null,"4D then removes the ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," field from the table(s). Note that if you want to remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"__DeletedRecords")," table, you need to do it manually."),(0,n.kt)("h2",l({},{id:"exemple"}),"Exemple"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d",metastring:"var $oldStamp : Real var $tableName : Text var $modifiedEmps : cs.EmployeeSelection var $deletedEmpsInfo : cs.__DeletedRecordsSelection",var:!0,$oldStamp:!0,":":!0,Real:!0,$tableName:!0,Text:!0,$modifiedEmps:!0,"cs.EmployeeSelection":!0,$deletedEmpsInfo:!0,"cs.__DeletedRecordsSelection":!0}),'\n$tableName:="Employee" $oldStamp:=... //load the previous stamp value  \n//from which you want to compare the current stamp\n\nIf ($oldStamp # ds.getGlobalStamp()) //get all new or modified entities $modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp) //get all deleted entities     $deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\\\n    $oldStamp; $tableName) End if\n')))}m.isMDXComponent=!0}}]);