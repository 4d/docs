"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29805],{603905:(A,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>p});var r=t(667294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var a=r.createContext({}),c=function(A){var e=r.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},u=function(A){var e=c(A.components);return r.createElement(a.Provider,{value:e},A.children)},E={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,a=A.parentName,u=l(A,["components","mdxType","originalType","parentName"]),g=c(t),p=n,s=g["".concat(a,".").concat(p)]||g[p]||E[p]||o;return t?r.createElement(s,i(i({ref:e},u),{},{components:t})):r.createElement(s,i({ref:e},u))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=A,l.mdxType="string"==typeof A?A:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},479859:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>u});t(667294);var r=t(603905);function n(){return n=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A},n.apply(this,arguments)}function o(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}const i={id:"developing",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u767a"},l=void 0,a={unversionedId:"Project/developing",id:"version-18/Project/developing",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u767a",description:"\u958b\u767a\u30c4\u30fc\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Project/developing.md",sourceDirName:"Project",slug:"/Project/developing",permalink:"/docs/ja/18/Project/developing",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdeveloping.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"developing",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u767a"},sidebar:"docs",previous:{title:"4D \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc",permalink:"/docs/ja/18/Project/architecture"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9",permalink:"/docs/ja/18/Project/building"}},c={},u=[{value:"\u958b\u767a\u30c4\u30fc\u30eb",id:"\u958b\u767a\u30c4\u30fc\u30eb",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9",level:2}],E={toc:u};function g(A){var{components:e}=A,i=o(A,["components"]);return(0,r.kt)("wrapper",n({},E,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"\u958b\u767a\u30c4\u30fc\u30eb"}),"\u958b\u767a\u30c4\u30fc\u30eb"),(0,r.kt)("p",null,"4D \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f ",(0,r.kt)("strong",{parentName:"p"},"4D Developer")," \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u3066\u30ed\u30fc\u30ab\u30eb\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002 4D Developer \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f\u306b\u306f\u3001",(0,r.kt)("em",{parentName:"p"},"databaseName.4DProject")," \u3068\u3044\u3046\u540d\u79f0\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059 (",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/18/Project/architecture"}),"4D \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc")," \u53c2\u7167)\u3002 4D \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5927\u591a\u6570\u306f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306a\u305f\u3081\u3001\u4efb\u610f\u306e\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u4f5c\u696d\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002 \u30d5\u30a1\u30a4\u30eb\u3078\u306e\u540c\u6642\u30a2\u30af\u30bb\u30b9\u306f\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"),(0,r.kt)("p",null,"4D Server \u3082 ",(0,r.kt)("em",{parentName:"p"},"databaseName.4DProject")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059: \u30ea\u30e2\u30fc\u30c8\u306e 4D \u30de\u30b7\u30f3\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u63a5\u7d9a\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30d5\u30a1\u30a4\u30eb\u306f\u3059\u3079\u3066\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u305f\u3081\u3001\u958b\u767a\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30de\u30eb\u30c1\u30e6\u30fc\u30b6\u30fc\u958b\u767a\u306f\u6a19\u6e96\u7684\u306a\u30bd\u30fc\u30b9\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u304a\u3053\u306a\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u7570\u306a\u308b\u30d6\u30e9\u30f3\u30c1\u3067\u958b\u767a\u3057\u3001\u6bd4\u8f03\u3057\u3066\u30de\u30fc\u30b8\u307e\u305f\u306f\u5909\u66f4\u3092\u623b\u3059\u3068\u3044\u3063\u305f\u51e6\u7406\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",n({},{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9"),(0,r.kt)("p",null,"4D Developer \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u767a\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8981\u7d20\u3084\u30e1\u30bd\u30c3\u30c9\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u4f5c\u6210\u30fb\u5909\u66f4\u30fb\u4fdd\u5b58\u306b\u306f 4D \u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u4f5c\u696d\u5bfe\u8c61\u306f\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u306a\u305f\u3081\u3001\u540c\u3058\u30d5\u30a1\u30a4\u30eb\u304c\u540c\u6642\u306b\u7de8\u96c6\u3055\u308c\u3066\u3044\u305f\u308a\u524a\u9664\u3055\u308c\u3066\u3044\u305f\u308a\u3068\u3044\u3063\u305f\u5834\u5408\u306b\u306f\u7af6\u5408\u304c\u767a\u751f\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u30011\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u30e1\u30bd\u30c3\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u7de8\u96c6\u3057\u3064\u3064\u3001\u6a19\u6e96\u306e\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u3082\u958b\u3044\u3066\u5909\u66f4\u3057\u305f\u5834\u5408\u306b\u7af6\u5408\u304c\u8d77\u3053\u308a\u3048\u307e\u3059\u3002"),(0,r.kt)("p",null,"4D Developer \u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u306f\u540c\u6642\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u958b\u304b\u308c\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c OS \u30ec\u30d9\u30eb\u3067\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u5834\u5408\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u306f\u9375\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059: ",(0,r.kt)("img",{src:t(310062).Z,width:"22",height:"31"})),(0,r.kt)("li",{parentName:"ul"},"\u958b\u304b\u308c\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u8907\u6570\u306e\u30a2\u30af\u30bb\u30b9\u306b\u3088\u3063\u3066\u540c\u6642\u306b\u7de8\u96c6\u3092\u53d7\u3051\u3066\u3044\u308b\u5834\u5408\u30014D \u306f\u4fdd\u5b58\u6642\u306b\u8b66\u544a\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u307e\u3059: ",(0,r.kt)("img",{src:t(938166).Z,width:"352",height:"185"}),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u306f\u3044"),": \u7de8\u96c6\u5185\u5bb9\u3092\u7834\u68c4\u3057\u3066\u30ea\u30ed\u30fc\u30c9\u3057\u307e\u3059"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u3044\u3044\u3048"),": \u7de8\u96c6\u5185\u5bb9\u3067\u4e0a\u66f8\u304d\u4fdd\u5b58\u3057\u307e\u3059"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30ad\u30e3\u30f3\u30bb\u30eb"),": \u4fdd\u5b58\u3057\u307e\u305b\u3093")))),(0,r.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306f\u3059\u3079\u3066\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u304a\u3044\u3066\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u30a8\u30c7\u30a3\u30bf\u30fc"),(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30bd\u30c3\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc"),(0,r.kt)("li",{parentName:"ul"},"\u74b0\u5883\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb\u30dc\u30c3\u30af\u30b9")))}g.isMDXComponent=!0},310062:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},938166:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);