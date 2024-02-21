"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59601],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"php",title:"PHP page"},p=void 0,s={unversionedId:"settings/php",id:"version-20-R4/settings/php",title:"PHP page",description:"You can execute PHP scripts in 4D. Essa p\xe1gina permite que voc\xea configure o interpretador.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/pt/settings/php",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fphp.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"php",title:"PHP page"},sidebar:"docs",previous:{title:"SQL page",permalink:"/docs/pt/settings/sql"},next:{title:"Security page",permalink:"/docs/pt/settings/security"}},c={},l=[{value:"Int\xe9rprete",id:"int\xe9rprete",level:2},{value:"Endere\xe7o IP",id:"endere\xe7o-ip",level:3},{value:"N\xfamero da porta",id:"n\xfamero-da-porta",level:3}],d={toc:l};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html"}),"execute PHP scripts in 4D"),". Essa p\xe1gina permite que voc\xea configure o interpretador."),(0,n.kt)("admonition",o({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"These settings are specified for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page642.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"SET DATABASE PARAMETER"))," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page643.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get database parameter"))," commands. The parameters modified by the ",(0,n.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," command have priority for the current session.")),(0,n.kt)("h2",o({},{id:"int\xe9rprete"}),"Int\xe9rprete"),(0,n.kt)("h3",o({},{id:"endere\xe7o-ip"}),"Endere\xe7o IP"),(0,n.kt)("p",null,"Endere\xe7o do interpretador PHP em que as solicita\xe7\xf5es de execu\xe7\xe3o PHP devem ser endere\xe7adas. Por padr\xe3o, 4D usa o endere\xe7o 127.0.0.1."),(0,n.kt)("p",null,"Observe que o endere\xe7o HTTP deve estar na mesma m\xe1quina que o 4D."),(0,n.kt)("h3",o({},{id:"n\xfamero-da-porta"}),"N\xfamero da porta"),(0,n.kt)("p",null,"N\xfamero da porta do interpretador PHP. Por padr\xe3o, 4D usa a porta 8002."),(0,n.kt)("p",null,"You can change the address and/or port if they are already used by another service or if you have several interpreters on the same machine."))}u.isMDXComponent=!0}}]);