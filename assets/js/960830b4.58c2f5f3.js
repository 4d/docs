"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14162],{603905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),i=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=i(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},517815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});t(667294);var o=t(603905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const a={id:"components",title:"Components"},c=void 0,p={unversionedId:"Concepts/components",id:"version-20-R4/Concepts/components",title:"Components",description:"A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. For example, the 4D SVG component adds advanced commands and an integrated rendering engine that can be used to display SVG files.",source:"@site/versioned_docs/version-20-R4/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/20-R4/Concepts/components",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Interpreted and Compiled modes",permalink:"/docs/20-R4/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/20-R4/Concepts/plug-ins"}},i={},l=[{value:"Where to find components?",id:"where-to-find-components",level:2},{value:"Installing components",id:"installing-components",level:2},{value:"Using components",id:"using-components",level:2}],m={toc:l};function d(e){var{components:n}=e,a=s(e,["components"]);return(0,o.kt)("wrapper",r({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. For example, the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html"}),"4D SVG component")," adds advanced commands and an integrated rendering engine that can be used to display SVG files."),(0,o.kt)("h2",r({},{id:"where-to-find-components"}),"Where to find components?"),(0,o.kt)("p",null,"Several components are ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Extensions/overview"}),"preinstalled in the 4D development environment"),", but a lot of 4D components from the 4D community ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/search?q=4d-component&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Extensions/develop-components"}),"develop your own 4D components"),"."),(0,o.kt)("h2",r({},{id:"installing-components"}),"Installing components"),(0,o.kt)("p",null,"To install a component, you simply need to copy the component files into the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Project/architecture"}),(0,o.kt)("inlineCode",{parentName:"a"},"Components")," folder of the project"),". You can use aliases or shortcuts."),(0,o.kt)("p",null,"A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used. "),(0,o.kt)("h2",r({},{id:"using-components"}),"Using components"),(0,o.kt)("p",null,"Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development. "),(0,o.kt)("p",null,"When an installed component contains methods, classes, and functions, they appear in the ",(0,o.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:t(923700).Z,width:"352",height:"411"})),(0,o.kt)("admonition",r({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"If the component is compiled, its ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Extensions/develop-components#declaring-the-component-namespace"}),"namespace")," is written between parentheses after its name. Use this namespace to access the component's functions. ")),(0,o.kt)("p",null,"You can select a component ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Concepts/methods"}),"project method")," or ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Concepts/classes"}),"class")," and click on the ",(0,o.kt)("strong",{parentName:"p"},"Documentation")," button of the Explorer to get information about it, ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/Project/documentation"}),"if any"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:t(411578).Z,width:"868",height:"569"})))}d.isMDXComponent=!0},923700:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/components-explorer-855ea8e2a6155a2d44c0b5540983924e.png"},411578:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/compDoc-a7c75dc713078bc430fe37a9e103b856.png"}}]);