"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35802],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},989214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"backup",title:"Backup Page"},i=void 0,p={unversionedId:"MSC/backup",id:"version-20-R4/MSC/backup",title:"Backup Page",description:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",source:"@site/versioned_docs/version-20-R4/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/docs/MSC/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fbackup.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"backup",title:"Backup Page"},sidebar:"docs",previous:{title:"Verify Page",permalink:"/docs/MSC/verify"},next:{title:"Compact Page",permalink:"/docs/MSC/compact"}},u={},l=[],s={toc:l};function f(e){var{components:t}=e,c=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(112939).Z,width:"882",height:"666"})),(0,r.kt)("p",null,"This page consists of the following three areas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup File Destination"),": displays information about the location of the application backup file. It also indicates the free/used space on the backup disk."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Backup Information"),": provides the date and time of the last backup (automatic or manual) carried out on the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contents of the backup file"),": lists the files and folders included in the backup file.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Backup")," button is used to launch a manual backup."),(0,r.kt)("p",null,"This page cannot be used to modify the backup parameters. To do this, you must click on the ",(0,r.kt)("strong",{parentName:"p"},"Database properties...")," button."))}f.isMDXComponent=!0},112939:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);