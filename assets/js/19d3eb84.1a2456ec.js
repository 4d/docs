"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99474],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"shortcuts",title:"Shortcuts Page"},a=void 0,i={unversionedId:"Preferences/shortcuts",id:"version-20-R2/Preferences/shortcuts",title:"Shortcuts Page",description:'This page lists all the shortcuts used in the 4D Design environment (except for standard "system" shortcuts, such as Ctrl+C/Command+C for the Copy command).',source:"@site/versioned_docs/version-20-R2/Preferences/shortcuts.md",sourceDirName:"Preferences",slug:"/Preferences/shortcuts",permalink:"/docs/20-R2/Preferences/shortcuts",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Preferences%2Fshortcuts.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"shortcuts",title:"Shortcuts Page"},sidebar:"docs",previous:{title:"Methods Page",permalink:"/docs/20-R2/Preferences/methods"},next:{title:"Administration",permalink:"/docs/20-R2/category/administration"}},l={},u=[],p={toc:u};function f(e){var{components:t}=e,c=s(e,["components"]);return(0,n.kt)("wrapper",o({},p,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'This page lists all the shortcuts used in the 4D Design environment (except for standard "system" shortcuts, such as Ctrl+C/Command+C for the Copy command). '),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(433847).Z,width:"1944",height:"1648"})),(0,n.kt)("p",null,"To modify a shortcut, you can select/deselect the item to modify (Shift, Alt or letter key) in the list. You can also double-click on a shortcut to configure it using a specific dialog box. "),(0,n.kt)("p",null,"Note that each shortcut implicitly includes the ",(0,n.kt)("strong",{parentName:"p"},"Ctrl")," (Windows) or ",(0,n.kt)("strong",{parentName:"p"},"Command")," (macOS) key."),(0,n.kt)("p",null,"If you edit this list, your custom shortcuts settings are stored in a ",(0,n.kt)("em",{parentName:"p"},"4DShortcutsvXX.xml")," file, created at the same level as the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20-R2/Preferences/overview#storage"}),"user preferences file"),". Hence, each time 4D is updated your keyboard shortcut preferences remain."))}f.isMDXComponent=!0},433847:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shortcuts-699d5db0ff3b62e2e03811fcec5f9cd6.png"}}]);