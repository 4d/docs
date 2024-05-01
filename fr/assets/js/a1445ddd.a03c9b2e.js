"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93642],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(667294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},454085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});a(667294);var n=a(603905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const r={id:"security",title:"Page s\xe9curit\xe9"},i=void 0,l={unversionedId:"settings/security",id:"version-20-R5/settings/security",title:"Page s\xe9curit\xe9",description:"Cette page regroupe les options relatives \xe0 la protection des acc\xe8s et des donn\xe9es de vos applications desktop.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/fr/settings/security",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"security",title:"Page s\xe9curit\xe9"},sidebar:"docs",previous:{title:"Page PHP",permalink:"/docs/fr/settings/php"},next:{title:"Page de compatibilit\xe9",permalink:"/docs/fr/settings/compatibility"}},p={},c=[{value:"Acc\xe8s des utilisateurs distants",id:"acc\xe8s-des-utilisateurs-distants",level:2},{value:"Options",id:"options",level:2}],d={toc:c};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",s({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cette page regroupe les options relatives \xe0 la protection des acc\xe8s et des donn\xe9es de vos applications desktop."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": For a general overview of 4D's security features, see the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),"."),(0,n.kt)("h2",s({},{id:"acc\xe8s-des-utilisateurs-distants"}),"Acc\xe8s des utilisateurs distants"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ces param\xe8tres ne s'appliquent pas aux bases projets ouvertes en monoposte.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Design and Runtime Explorer Access"),": Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer."),(0,n.kt)("p",{parentName:"li"},"A noter que :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Setting an access group in the Design environment also lets you deactivate the ",(0,n.kt)("strong",{parentName:"p"},"Create table")," option in the data import dialog box. For more information about this dialog box, refer to ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html"}),"Importing data from files"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html"}),"Users and groups")," chapter.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Default User"),": When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. Il n\u2019est alors plus n\xe9cessaire de saisir un nom d\u2019utilisateur. De plus, si vous n\u2019avez pas associ\xe9 de mot de passe \xe0 l\u2019utilisateur par d\xe9faut, la bo\xeete de dialogue de saisie du mot de passe n\u2019appara\xeet pas, la base s\u2019ouvre directement.\nL\u2019int\xe9r\xeat de cette option est de simplifier les acc\xe8s multiples \xe0 la base tout en maintenant un syst\xe8me complet de contr\xf4le des donn\xe9es."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Si vous avez associ\xe9 un mot de passe \xe0 l\u2019utilisateur par d\xe9faut, une bo\xeete de dialogue appara\xeet \xe0 l\u2019ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe."),(0,n.kt)("li",{parentName:"ul"},"If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,n.kt)("strong",{parentName:"li"},"Note:"),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the ',(0,n.kt)("strong",{parentName:"li"},"Shift")," key while opening the database or connecting to it."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Display User List in Password Dialog Box"),': If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. Si cette option n\u2019est pas coch\xe9e, les utilisateurs doivent saisir leur nom et leur mot de passe. For more information about the two versions of the password dialog box, see the section "Access system overview" in ',(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"}),"Access system overview"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User List in Alphabetical Order")," (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Users can change their password"),": When this option is checked, a ",(0,n.kt)("strong",{parentName:"p"},"Change"),' button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"}),"Ensuring system maintenance"),"). If desired, you can hide the ",(0,n.kt)("strong",{parentName:"p"},"Change")," button so that users cannot modify their passwords. Il suffit pour cela de d\xe9s\xe9lectionner cette option."))),(0,n.kt)("h2",s({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"),":\nFor security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html"}),"Formula editor")," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html"}),"ST INSERT EXPRESSION")," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html"}),"SET ALLOWED METHODS")," command can be used. A l'aide des options suivantes, vous pouvez supprimer compl\xe8tement ou partiellement ce filtrage."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enabled for all")," (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disable for the Designer and the Administrator"),": This option grants full access to 4D commands and to methods only for the Designer and Administrator. Elle peut \xeatre utilis\xe9e pour d\xe9finir un mode d'acc\xe8s illimit\xe9 aux commandes et m\xe9thodes tout en gardant le contr\xf4le des actions effectu\xe9es. En phase de d\xe9veloppement, ce mode peut \xeatre utilis\xe9 pour tester librement toutes les formules, les \xe9tats, ets. En cours d'exploitation, il peut \xeatre utilis\xe9 pour mettre en oeuvre des solutions s\xe9curis\xe9es permettant un acc\xe8s temporaire \xe0 toutes les commandes et m\xe9thodes. This consists in changing the user (via the ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html"}),"CHANGE CURRENT USER")," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.\n",(0,n.kt)("strong",{parentName:"li"},"Note:")," If full access has been enabled using the previous option, this option will have no effect."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled for all"),": This option disables control within formulas. Lorsque cette option est coch\xe9e, les utilisateurs ont acc\xe8s \xe0 l'ensemble des commandes, plug-ins et m\xe9thodes projets (\xe0 l'exception de ceux qui sont invisibles).\n",(0,n.kt)("strong",{parentName:"li"},"Note:")," This option takes priority over the ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html"}),"SET ALLOWED METHODS")," command. Lorsqu'elle est coch\xe9e, cette commande ne fait rien."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enable User Settings"),": You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: ",(0,n.kt)("strong",{parentName:"p"},"Structure Settings"),", ",(0,n.kt)("strong",{parentName:"p"},"User Settings"),", and ",(0,n.kt)("strong",{parentName:"p"},"User Settings for Data File"),". For more information, refer to ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/settings/overview#user-settings"}),"User settings"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},'Execute "On Host Database Event" method of the components'),": The ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html"}),"On Host Database Event database method")," facilitates the initialization and backup phases for 4D components. Pour des raisons de s\xe9curit\xe9, vous devez autoriser explicitement l\u2019ex\xe9cution de cette m\xe9thode dans chaque base h\xf4te. Pour cela, vous devez cocher l'option. Cette option n'est pas coch\xe9e par d\xe9faut."),(0,n.kt)("p",{parentName:"li"},"Lorsque cette option est coch\xe9e :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"les composants 4D sont charg\xe9s,"),(0,n.kt)("li",{parentName:"ul"},"each ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html"}),"On Host Database Event database method")," of the component (if any) is called by the host database,"),(0,n.kt)("li",{parentName:"ul"},"le code de la m\xe9thode est ex\xe9cut\xe9.")),(0,n.kt)("p",{parentName:"li"},"Lorsque cette option n\u2019est pas coch\xe9e :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"les composants 4D sont charg\xe9s mais ils doivent g\xe9rer eux-m\xeames leurs phases d\u2019initialisation et de sauvegarde."),(0,n.kt)("li",{parentName:"ul"},"le d\xe9veloppeur du composant doit publier les m\xe9thodes du composant qui doivent \xeatre appel\xe9es par la base h\xf4te lors de ces phases (d\xe9marrage et fermeture)"),(0,n.kt)("li",{parentName:"ul"},"le d\xe9veloppeur de la base h\xf4te doit appeler les m\xe9thodes appropri\xe9es du composant au bon moment (doit \xeatre expos\xe9 dans la documentation du composant).")))))}u.isMDXComponent=!0}}]);