"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2145],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},935714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(667294);var o=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"overview",title:"Vis\xe3o Geral"},l=void 0,c={unversionedId:"Project/overview",id:"version-18/Project/overview",title:"Vis\xe3o Geral",description:"A 4D project contains all of the source code of a 4D database application, from the database structure to the user interface, including forms, menus, user settings, or any required resources. Um projeto 4D \xe9 principalmente composto por ficheiros texto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/docs/pt/18/Project/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Foverview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"overview",title:"Vis\xe3o Geral"},sidebar:"docs",previous:{title:"Identificadores",permalink:"/docs/pt/18/Concepts/identifiers"},next:{title:"Criar um projeto 4D",permalink:"/docs/pt/18/Project/creating"}},p={},s=[{value:"Ficheiros do projecto",id:"ficheiros-do-projecto",level:2},{value:"Source control",id:"source-control",level:2},{value:"Trabalhar com projetos",id:"trabalhar-com-projetos",level:2}],u={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D project contains all of the source code of a 4D database application, from the database structure to the user interface, including forms, menus, user settings, or any required resources. Um projeto 4D \xe9 principalmente composto por ficheiros texto."),(0,o.kt)("p",null,"4D projects are created and handled using the 4D Developer application. Project files are then used to build final application deployment files, that can be opened by 4D Server or 4D Volume license (merged applications)."),(0,o.kt)("h2",n({},{id:"ficheiros-do-projecto"}),"Ficheiros do projecto"),(0,o.kt)("p",null,"4D project files are open and edited using regular 4D platform applications. Full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor..."),(0,o.kt)("p",null,"Moreover, since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor."),(0,o.kt)("h2",n({},{id:"source-control"}),"Source control"),(0,o.kt)("p",null,"4D project files make it easier to program generically, create application templates, and share code."),(0,o.kt)("p",null,"The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are particularly well suited to be managed by a ",(0,o.kt)("strong",{parentName:"p"},"source control")," repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Versioning"),(0,o.kt)("li",{parentName:"ul"},"Compara\xe7\xf5es de revis\xf5es"),(0,o.kt)("li",{parentName:"ul"},"Rollbacks")),(0,o.kt)("h2",n({},{id:"trabalhar-com-projetos"}),"Trabalhar com projetos"),(0,o.kt)("p",null,"Cria-se um projeto de base de dados 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creating a new, blank project -- see ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/Project/creating"}),"Creating a 4D project"),"."),(0,o.kt)("li",{parentName:"ul"},'exporting an existing 4D "binary" development to a project -- see "Export from a 4D database" on ',(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,o.kt)("p",null,"Project development is done locally, using the 4D Developer application -- see ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/Project/developing"}),"Developing a project"),". Team development interactions are handled by the source control tool."),(0,o.kt)("p",null,"4D projects can be compiled and easily deployed as single-user or client-server applications containing compacted versions of your project -- see ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/Project/building"}),"Building a project package"),"."))}d.isMDXComponent=!0}}]);