"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return a?n.createElement(m,c(c({ref:t},l),{},{components:a})):n.createElement(m,c({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>l});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c={id:"backup",title:"P\xe1gina de Backup",sidebar_label:"P\xe1gina de Backup"},i=void 0,p={unversionedId:"MSC/backup",id:"version-18/MSC/backup",title:"P\xe1gina de Backup",description:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/docs/pt/18/MSC/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fbackup.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"backup",title:"P\xe1gina de Backup",sidebar_label:"P\xe1gina de Backup"},sidebar:"docs",previous:{title:"P\xe1gina Verifica\xe7\xe3o",permalink:"/docs/pt/18/MSC/verify"},next:{title:"P\xe1gina compactado",permalink:"/docs/pt/18/MSC/compact"}},u={},l=[],s={toc:l};function d(e){var{components:t}=e,c=o(e,["components"]);return(0,n.kt)("wrapper",r({},s,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29194).Z,width:"882",height:"666"})),(0,n.kt)("p",null,"This page consists of the following three areas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Destino do arquivo de c\xf3pia de seguran\xe7a"),": mostra informa\xe7\xe3o sobre a localiza\xe7\xe3o do arquivo de c\xf3pia de seguran\xe7a do banco de dados. It also indicates the free/used space on the backup disk."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Informa\xe7\xe3o da \xfaltima copia de seguran\xe7a"),": oferece a data e a hora da \xfaltima c\xf3pia de seguran\xe7a (autom\xe1tica ou manual) realizada no banco de dados."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contents of the backup file"),": lists the files and folders included in the backup file.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Backup")," button is used to launch a manual backup."),(0,n.kt)("p",null,"This page cannot be used to modify the backup parameters. To do this, you must click on the ",(0,n.kt)("strong",{parentName:"p"},"Database properties...")," button."))}d.isMDXComponent=!0},29194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);