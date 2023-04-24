"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const o={id:"php",title:"Page PHP"},i=void 0,p={unversionedId:"settings/php",id:"version-20/settings/php",title:"Page PHP",description:"Dans 4D, vous pouvez ex\xe9cuter des scripts PHP en configurant directement la page PHP des Propri\xe9t\xe9s de la base de donn\xe9es (voir Ex\xe9cution de scripts PHP dans 4D dans le manuel Langage de 4D).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/fr/settings/php",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fphp.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"php",title:"Page PHP"},sidebar:"docs",previous:{title:"Page SQL",permalink:"/docs/fr/settings/sql"},next:{title:"Page s\xe9curit\xe9",permalink:"/docs/fr/settings/security"}},u={},l=[{value:"Interpr\xe9teur",id:"interpr\xe9teur",level:2},{value:"Options",id:"options",level:2}],c={toc:l};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",s({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dans 4D, vous pouvez ex\xe9cuter des scripts PHP en configurant directement la page PHP des Propri\xe9t\xe9s de la base de donn\xe9es (voir ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html"}),"Ex\xe9cution de scripts PHP dans 4D")," dans le manuel ",(0,n.kt)("em",{parentName:"p"},"Langage")," de 4D)."),(0,n.kt)("h2",s({},{id:"interpr\xe9teur"}),"Interpr\xe9teur"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"IP Address")," and Port number By default, 4D provides a PHP interpreter, compiled in FastCGI. Pour des raisons li\xe9es \xe0 l'architecture interne, les demandes d'ex\xe9cution vont vers l'interpr\xe9teur PHP \xe0 une adresse HTTP sp\xe9cifique. Par d\xe9faut, 4D utilise l'adresse 127.0.0.1 et le port 8002. Vous pouvez modifier cette adresse et/ou ce port s'ils sont d\xe9j\xe0 utilis\xe9s par un autre service ou si vous avez plusieurs interpr\xe9teurs sur la m\xeame machine. To do this, you modify the ",(0,n.kt)("strong",{parentName:"p"},"IP Address")," and ",(0,n.kt)("strong",{parentName:"p"},"Port number")," parameters.\\\nNote that the HTTP address must be on the same machine as 4D.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"External interpreter"),' If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in ',(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Executing PHP scripts in 4D"),"). S\xe9lectionnez cette option pour que 4D ne tente pas de se connecter avec l'interpr\xe9teur interne lors de l'ex\xe9cution d'une requ\xeate PHP. A noter que cette configuration n\xe9cessite une ex\xe9cution et un contr\xf4le manuels de l'interpr\xe9teur externe."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D Server")," : Ces param\xe8tres sont partag\xe9s entre 4D Server et les machines distantes 4D ; il n'est donc pas possible d'utiliser un interpr\xe9teur externe sur le serveur et d'utiliser simultan\xe9ment l'interpr\xe9teur interne sur les machines clientes (et vice versa). De plus, si le serveur utilise un interpr\xe9teur externe sur le port 9002, les machines clientes doivent \xe9galement utiliser un interpr\xe9teur sur ce port."),(0,n.kt)("h2",s({},{id:"options"}),"Options"),(0,n.kt)("p",null,"Ces options sont li\xe9es \xe0 la gestion automatique de l'interpr\xe9teur PHP 4D et sont d\xe9sactiv\xe9es lorsque l'option ",(0,n.kt)("strong",{parentName:"p"},"Interpr\xe9teur externe")," est s\xe9lectionn\xe9e."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Nombre de process")," : L'interpr\xe9teur PHP 4D pilote un ensemble de process d'ex\xe9cution syst\xe8me appel\xe9s \"process enfants\". A des fins d'optimisation, il peut ex\xe9cuter et conserver jusqu'\xe0 cinq process enfants simultan\xe9ment par d\xe9faut. Vous pouvez modifier le nombre de process enfants en fonction de vos besoins. Par exemple, vous pouvez augmenter cette valeur si vous faites appel \xe0 l'interpr\xe9teur PHP de mani\xe8re intensive. Pour plus d'informations, reportez-vous \xe0 la section \"Architecture\" dans ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Ex\xe9cution de scripts PHP dans 4D"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note")," : Sous Mac OS, tous les process enfants partagent le m\xeame port. Sous Windows, chaque process enfant utilise un num\xe9ro de port sp\xe9cifique. Le premier num\xe9ro est celui d\xe9fini pour l'interpr\xe9teur PHP ; les autres process enfant incr\xe9mentent ce num\xe9ro. Par exemple, si le port par d\xe9faut est 8002 et que vous lancez 5 process enfants, ils utiliseront les ports 8002 \xe0 8006."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Relancer l'interpr\xe9teur apr\xe8s X requ\xeates")," : pour d\xe9finir le nombre maximum de requ\xeates accept\xe9es par l'interpr\xe9teur PHP de 4D. Lorsque ce nombre est atteint, l'interpr\xe9teur red\xe9marre. Pour plus d'informations sur ce param\xe8tre, reportez-vous \xe0 la documentation FastCGI-PHP."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": Dans cette bo\xeete de dialogue, les param\xe8tres sont sp\xe9cifi\xe9s par d\xe9faut pour toutes les machines connect\xe9es et toutes les sessions. Vous pouvez \xe9galement les modifier et les lire s\xe9par\xe9ment pour chaque machine et chaque session en utilisant les commandes ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," et ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"}),"Get database parameter"),". Les param\xe8tres modifi\xe9s par la commande ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," sont prioritaires pour la session courante.")))))}m.isMDXComponent=!0}}]);