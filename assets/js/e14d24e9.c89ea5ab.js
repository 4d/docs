"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41964],{603905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(667294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=s(a),c=n,N=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return a?r.createElement(N,o(o({ref:e},m),{},{components:a})):r.createElement(N,o({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},857780:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});a(667294);var r=a(603905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"ZipFileClass",title:"ZIPFile"},i=void 0,p={unversionedId:"API/ZipFileClass",id:"version-20-R5/API/ZipFileClass",title:"ZIPFile",description:"The following properties and functions from the File class are available to ZIPFile objects:",source:"@site/versioned_docs/version-20-R5/API/ZipFileClass.md",sourceDirName:"API",slug:"/API/ZipFileClass",permalink:"/docs/API/ZipFileClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFileClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"docs",previous:{title:"ZIPArchive",permalink:"/docs/API/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/API/ZipFolderClass"}},s={},m=[],d={toc:m};function k(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following properties and functions from the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/API/FileClass"}),"File")," class are available to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIPFile")," objects:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Available ",(0,r.kt)("a",n({parentName:"th"},{href:"/docs/API/FileClass"}),"File")," APIs for ZIPFile"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#copyto"}),(0,r.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,r.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,r.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,r.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D.File")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#creationdate"}),(0,r.kt)("strong",{parentName:"a"},".creationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#creationtime"}),(0,r.kt)("strong",{parentName:"a"},".creationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#exists"}),(0,r.kt)("strong",{parentName:"a"},".exists")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#extension"}),(0,r.kt)("strong",{parentName:"a"},".extension")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#fullname"}),(0,r.kt)("strong",{parentName:"a"},".fullName")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#getcontent"}),(0,r.kt)("strong",{parentName:"a"},".getContent( )")," : 4D.Blob")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#geticon"}),(0,r.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,r.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#gettext"}),(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetName")," : Text { ; ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetNum")," : Integer { ; ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#hidden"}),(0,r.kt)("strong",{parentName:"a"},".hidden")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#isalias"}),(0,r.kt)("strong",{parentName:"a"},".isAlias")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#isfile"}),(0,r.kt)("strong",{parentName:"a"},".isFile")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#isfolder"}),(0,r.kt)("strong",{parentName:"a"},".isFolder")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#iswritable"}),(0,r.kt)("strong",{parentName:"a"},".isWritable")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Always false with ZIP archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#modificationdate"}),(0,r.kt)("strong",{parentName:"a"},".modificationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#modificationtime"}),(0,r.kt)("strong",{parentName:"a"},".modificationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#name"}),(0,r.kt)("strong",{parentName:"a"},".name")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#original"}),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.File",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#parent"}),(0,r.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#path"}),(0,r.kt)("strong",{parentName:"a"},".path")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns a path relative to the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FileClass#platformpath"}),(0,r.kt)("strong",{parentName:"a"},".platformPath")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))))}k.isMDXComponent=!0}}]);