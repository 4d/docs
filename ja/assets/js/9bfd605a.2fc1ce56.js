"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,c=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(c,p(p({ref:t},u),{},{components:n})):a.createElement(c,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"arrays",title:"\u914d\u5217"},o=void 0,i={unversionedId:"Concepts/arrays",id:"version-18/Concepts/arrays",title:"\u914d\u5217",description:"\u914d\u5217 \u3068\u306f\u3001\u540c\u3058\u30bf\u30a4\u30d7\u306e \u5909\u6570 \u3092\u756a\u53f7\u4ed8\u304d\u3067\u4e26\u3079\u305f\u3082\u306e\u3067\u3059\u3002 \u5404\u5909\u6570\u306f\u3001\u914d\u5217\u306e \u8981\u7d20 \u3068\u3044\u3044\u307e\u3059\u3002 \u914d\u5217\u306e\u30b5\u30a4\u30ba\u3068\u306f\u3001\u914d\u5217\u304c\u6301\u3064\u8981\u7d20\u306e\u6570\u3092\u6307\u3057\u307e\u3059\u3002\u914d\u5217\u306f\u4f5c\u6210\u6642\u306b\u30b5\u30a4\u30ba\u304c\u4e0e\u3048\u3089\u308c\u3001\u8981\u7d20\u306e\u8ffd\u52a0\u30fb\u633f\u5165\u30fb\u524a\u9664\u306b\u3088\u3063\u3066\u3001\u307e\u305f\u306f\u4f5c\u6210\u6642\u306b\u4f7f\u7528\u3057\u305f\u30b3\u30de\u30f3\u30c9\u306e\u518d\u4f7f\u7528\u306b\u3088\u3063\u3066\u3001\u4f55\u5ea6\u3067\u3082\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u914d\u5217\u8981\u7d20\u306b\u306f\u30011 \u304b\u3089 N \u306e\u756a\u53f7\u304c\u4ed8\u3051\u3089\u308c\u307e\u3059 (N \u306f\u914d\u5217\u306e\u30b5\u30a4\u30ba)\u3002 \u914d\u5217\u306f\u5fc5\u305a\u3001\u7279\u5225\u306a \u8981\u7d20\u30bc\u30ed \u3092\u6301\u3061\u307e\u3059\u3002 \u914d\u5217\u306f 4D \u306e\u5909\u6570\u3067\u3059\u3002 \u4ed6\u306e\u5909\u6570\u3068\u540c\u69d8\u3001\u914d\u5217\u306b\u3082\u30b9\u30b3\u30fc\u30d7\u304c\u3042\u308a\u30014D \u30e9\u30f3\u30b2\u30fc\u30b8\u306e\u898f\u5247\u306b\u5f93\u3044\u307e\u3059\u304c\u3001\u4ed6\u3068\u7570\u306a\u308b\u3068\u3053\u308d\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/ja/18/Concepts/arrays",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"arrays",title:"\u914d\u5217"},sidebar:"docs",previous:{title:"\u5909\u6570",permalink:"/docs/ja/18/Concepts/variables"},next:{title:"\u30e1\u30bd\u30c3\u30c9",permalink:"/docs/ja/18/Concepts/methods"}},m={},u=[{value:"\u914d\u5217\u306e\u4f5c\u6210",id:"\u914d\u5217\u306e\u4f5c\u6210",level:2},{value:"\u914d\u5217\u8981\u7d20\u3078\u306e\u5024\u306e\u4ee3\u5165",id:"\u914d\u5217\u8981\u7d20\u3078\u306e\u5024\u306e\u4ee3\u5165",level:2},{value:"\u914d\u5217\u3078\u306e\u914d\u5217\u306e\u4ee3\u5165",id:"\u914d\u5217\u3078\u306e\u914d\u5217\u306e\u4ee3\u5165",level:3},{value:"\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed",id:"\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed",level:2},{value:"\u4e8c\u6b21\u5143\u914d\u5217",id:"\u4e8c\u6b21\u5143\u914d\u5217",level:2},{value:"\u914d\u5217\u3068\u30e1\u30e2\u30ea",id:"\u914d\u5217\u3068\u30e1\u30e2\u30ea",level:2}],s={toc:u};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u914d\u5217")," \u3068\u306f\u3001\u540c\u3058\u30bf\u30a4\u30d7\u306e ",(0,a.kt)("strong",{parentName:"p"},"\u5909\u6570")," \u3092\u756a\u53f7\u4ed8\u304d\u3067\u4e26\u3079\u305f\u3082\u306e\u3067\u3059\u3002 \u5404\u5909\u6570\u306f\u3001\u914d\u5217\u306e ",(0,a.kt)("strong",{parentName:"p"},"\u8981\u7d20")," \u3068\u3044\u3044\u307e\u3059\u3002 \u914d\u5217\u306e\u30b5\u30a4\u30ba\u3068\u306f\u3001\u914d\u5217\u304c\u6301\u3064\u8981\u7d20\u306e\u6570\u3092\u6307\u3057\u307e\u3059\u3002\u914d\u5217\u306f\u4f5c\u6210\u6642\u306b\u30b5\u30a4\u30ba\u304c\u4e0e\u3048\u3089\u308c\u3001\u8981\u7d20\u306e\u8ffd\u52a0\u30fb\u633f\u5165\u30fb\u524a\u9664\u306b\u3088\u3063\u3066\u3001\u307e\u305f\u306f\u4f5c\u6210\u6642\u306b\u4f7f\u7528\u3057\u305f\u30b3\u30de\u30f3\u30c9\u306e\u518d\u4f7f\u7528\u306b\u3088\u3063\u3066\u3001\u4f55\u5ea6\u3067\u3082\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u914d\u5217\u8981\u7d20\u306b\u306f\u30011 \u304b\u3089 N \u306e\u756a\u53f7\u304c\u4ed8\u3051\u3089\u308c\u307e\u3059 (N \u306f\u914d\u5217\u306e\u30b5\u30a4\u30ba)\u3002 \u914d\u5217\u306f\u5fc5\u305a\u3001\u7279\u5225\u306a ",(0,a.kt)("a",r({parentName:"p"},{href:"#%E9%85%8D%E5%88%97%E3%81%AE%E8%A6%81%E7%B4%A0%E3%82%BC%E3%83%AD"}),"\u8981\u7d20\u30bc\u30ed")," \u3092\u6301\u3061\u307e\u3059\u3002 \u914d\u5217\u306f 4D \u306e\u5909\u6570\u3067\u3059\u3002 \u4ed6\u306e\u5909\u6570\u3068\u540c\u69d8\u3001\u914d\u5217\u306b\u3082\u30b9\u30b3\u30fc\u30d7\u304c\u3042\u308a\u30014D \u30e9\u30f3\u30b2\u30fc\u30b8\u306e\u898f\u5247\u306b\u5f93\u3044\u307e\u3059\u304c\u3001\u4ed6\u3068\u7570\u306a\u308b\u3068\u3053\u308d\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u306b\u304a\u3044\u3066\u3001",(0,a.kt)("strong",{parentName:"p"},"\u914d\u5217")," \u3088\u308a ",(0,a.kt)("strong",{parentName:"p"},"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3")," \u306e\u5229\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 \u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306f\u914d\u5217\u3088\u308a\u67d4\u8edf\u306a\u3060\u3051\u3067\u306a\u304f\u3001\u305f\u304f\u3055\u3093\u306e\u5c02\u7528\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3061\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/18/Concepts/collection"}),"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h2",r({},{id:"\u914d\u5217\u306e\u4f5c\u6210"}),"\u914d\u5217\u306e\u4f5c\u6210"),(0,a.kt)("p",null,'\u914d\u5217\u306f\u3001"\u914d\u5217" \u30c6\u30fc\u30de\u306e\u914d\u5217\u5ba3\u8a00\u30b3\u30de\u30f3\u30c9\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002 \u914d\u5217\u5ba3\u8a00\u30b3\u30de\u30f3\u30c9\u306f\u30011\u6b21\u5143\u307e\u305f\u306f 2\u6b21\u5143\u306e\u914d\u5217\u306e\u4f5c\u6210\u3084\u30b5\u30a4\u30ba\u5909\u66f4\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 2\u6b21\u5143\u914d\u5217\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ',(0,a.kt)("a",r({parentName:"p"},{href:"#%E4%BA%8C%E6%AC%A1%E5%85%83%E9%85%8D%E5%88%97"}),"\u4e8c\u6b21\u5143\u914d\u5217")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u300110\u500b\u306e\u8981\u7d20\u304b\u3089\u306a\u308b\u6574\u6570\u914d\u5217\u3092\u4f5c\u6210 (\u5ba3\u8a00) \u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY INTEGER(aiAnArray;10)\n")),(0,a.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001\u3055\u304d\u307b\u3069\u4f5c\u6210\u3057\u305f\u914d\u5217\u309220\u8981\u7d20\u306b\u30b5\u30a4\u30ba\u5909\u66f4\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;20)\n")),(0,a.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001\u3053\u306e\u914d\u5217\u3092\u8981\u7d20\u306a\u3057\u306b\u30b5\u30a4\u30ba\u5909\u66f4\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;0)\n")),(0,a.kt)("h2",r({},{id:"\u914d\u5217\u8981\u7d20\u3078\u306e\u5024\u306e\u4ee3\u5165"}),"\u914d\u5217\u8981\u7d20\u3078\u306e\u5024\u306e\u4ee3\u5165"),(0,a.kt)("p",null,"\u914d\u5217\u4e2d\u306e\u8981\u7d20\u306f\u4e2d\u30ab\u30c3\u30b3 ({\u2026}) \u3092\u4f7f\u7528\u3057\u3066\u53c2\u7167\u3057\u307e\u3059\u3002 \u4e2d\u30ab\u30c3\u30b3\u306e\u4e2d\u306b\u306f\u6570\u5b57\u3092\u5165\u308c\u3066\u7279\u5b9a\u306e\u8981\u7d20\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u6570\u5b57\u3092\u8981\u7d20\u756a\u53f7\u3068\u3044\u3044\u307e\u3059\u3002 \u6b21\u306e\u30b3\u30fc\u30c9\u306f\u30015\u3064\u306e\u540d\u524d\u3092 atNames \u3068\u3044\u3046\u914d\u5217\u306b\u5165\u308c\u3001\u305d\u308c\u3089\u3092\u8b66\u544a\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u8868\u793a\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("\u8981\u7d20\u756a\u53f7 #"+String($vlElem)+" \u306e\u5024\u306f "+atNames{$vlElem}+" \u3067\u3059\u3002")\n End for\n')),(0,a.kt)("p",null,"atNames{$vlElem} \u3068\u3044\u3046\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002 atNames{3} \u306e\u3088\u3046\u306b\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u3092\u4f7f\u3046\u3060\u3051\u3067\u306a\u304f\u3001\u6570\u5024\u5909\u6570\u306b\u3088\u3063\u3066\u914d\u5217\u306e\u8981\u7d20\u756a\u53f7\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30eb\u30fc\u30d7\u69cb\u9020\u306b\u3088\u308b\u53cd\u5fa9\u3092\u4f7f\u7528\u3059\u308b\u3068 (",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," \u307e\u305f\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while"),")\u3001\u77ed\u3044\u30b3\u30fc\u30c9\u3067\u914d\u5217\u306e\u5168\u8981\u7d20\u3001\u307e\u305f\u306f\u4e00\u90e8\u306e\u8981\u7d20\u3092\u5bfe\u8c61\u3068\u3057\u305f\u51e6\u7406\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981:")," \u4ee3\u5165\u6f14\u7b97\u5b50 (:=) \u3068\u6bd4\u8f03\u6f14\u7b97\u5b50 (=) \u3068\u3092\u6df7\u540c\u3057\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u4ee3\u5165\u3068\u6bd4\u8f03\u306f\u3001\u307e\u3063\u305f\u304f\u7570\u306a\u3063\u305f\u6027\u8cea\u306e\u51e6\u7406\u3067\u3059\u3002"),(0,a.kt)("h3",r({},{id:"\u914d\u5217\u3078\u306e\u914d\u5217\u306e\u4ee3\u5165"}),"\u914d\u5217\u3078\u306e\u914d\u5217\u306e\u4ee3\u5165"),(0,a.kt)("p",null,"\u6587\u5b57\u5217\u3084\u30c6\u30ad\u30b9\u30c8\u5909\u6570\u3068\u9055\u3063\u3066\u3001\u914d\u5217\u306b\u914d\u5217\u3092\u4ee3\u5165\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u914d\u5217\u3092\u305d\u3063\u304f\u308a\u305d\u306e\u307e\u307e\u5225\u306e\u914d\u5217\u306b\u30b3\u30d4\u30fc\u3059\u308b\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY ARRAY")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed"}),"\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed"),(0,a.kt)("p",null,"\u914d\u5217\u306f\u5fc5\u305a\u3001\u8981\u7d20\u30bc\u30ed\u3092\u6301\u3061\u307e\u3059\u3002 \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306a\u3069\u306e\u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u914d\u5217\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001\u8981\u7d20\u30bc\u30ed\u304c\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u306e\u5229\u7528\u306b\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093 (*)\u3002"),(0,a.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u6307\u5b9a\u305b\u305a\u306b\u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u521d\u671f\u5316\u3057\u305f\u3044\u3068\u3057\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed\u304c\u5229\u7528\u3067\u304d\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // atName \u914d\u5217\u3068\u7d10\u3065\u3044\u3066\u3044\u308b\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u307e\u305f\u306f\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e \n  // \u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u3059\n Case of\n    :(Form event code=On Load)\n  // \u8981\u7d20\u30bc\u30ed\u3092\u542b\u3081\n  // \u914d\u5217\u3092\u521d\u671f\u5316\u3057\u307e\u3059\n        ARRAY TEXT(atName;5)\n        atName{0}:=\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"\n        atName{1}:="Text1"\n        atName{2}:="Text2"\n        atName{3}:="Text3"\n        atName{4}:="Text4"\n        atName{5}:="Text5"\n    // \u914d\u5217\u306e\u9078\u629e\u8981\u7d20\u3092\u8981\u7d20\u30bc\u30ed\u306b\u8a2d\u5b9a\u3057\u307e\u3059\n        atName:=0\n End case\n')),(0,a.kt)("p",null,"(*) \u3072\u3068\u3064\u3060\u3051\u4f8b\u5916\u304c\u3042\u308a\u307e\u3059\u3002\u914d\u5217\u30bf\u30a4\u30d7\u306e\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3067\u306f\u3001\u7de8\u96c6\u4e2d\u306e\u5143\u306e\u5024\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u3001\u5185\u90e8\u7684\u306b\u914d\u5217\u306e\u8981\u7d20\u30bc\u30ed\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u7279\u5225\u306a\u30b1\u30fc\u30b9\u3067\u306f\u3001\u958b\u767a\u8005\u306f 0\u756a\u76ee\u306e\u8981\u7d20\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",r({},{id:"\u4e8c\u6b21\u5143\u914d\u5217"}),"\u4e8c\u6b21\u5143\u914d\u5217"),(0,a.kt)("p",null,"\u914d\u5217\u5ba3\u8a00\u30b3\u30de\u30f3\u30c9\u306f\u305d\u308c\u305e\u308c\u30011\u6b21\u5143\u304a\u3088\u3073 2\u6b21\u5143\u306e\u914d\u5217\u3092\u4f5c\u6210\u3001\u307e\u305f\u306f\u30b5\u30a4\u30ba\u5909\u66f4\u304c\u3067\u304d\u307e\u3059\u3002 \u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT(atTopics;100;50) // 100\u884c\u3068 50\u5217\u304b\u3089\u306a\u308b\u30c6\u30ad\u30b9\u30c8\u914d\u5217\u3092\u4f5c\u6210\u3057\u307e\u3059\n")),(0,a.kt)("p",null,"2\u6b21\u5143\u914d\u5217\u306f\u3001\u672c\u8cea\u7684\u306b\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308a\u3001\u8868\u793a\u3084\u5370\u5237\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u4e0a\u306e\u30b3\u30fc\u30c9\u3067\u4f5c\u6210\u3057\u305f atTopics \u914d\u5217\u306b\u3064\u3044\u3066\u3001\u6b21\u306e\u3053\u3068\u304c\u8a00\u3048\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"atTopics \u306f\u30012\u6b21\u5143\u914d\u5217\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"atTopics{8}{5} \u306f\u30018\u884c5\u5217\u76ee\u306e\u8981\u7d20\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"atTopics{20} \u306f 20\u884c\u76ee\u3092\u6307\u3057\u3001\u305d\u308c\u81ea\u4f53\u304c 1\u6b21\u5143\u306e\u914d\u5217\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics)")," \u306f\u3001\u884c\u6570\u306e 100\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics{17})")," \u306f\u300117\u884c\u76ee\u306e\u5217\u6570\u3067\u3042\u308b50\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u5404\u30c6\u30fc\u30d6\u30eb\u306e\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u304c 2\u6b21\u5143\u914d\u5217\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // \u30c6\u30fc\u30d6\u30eb\u3068\u540c\u3058\u6570\u306e\u7a7a\u884c (\u3064\u307e\u308a\u3001\u5217\u306a\u3057) \u3092\u6301\u3064\u914d\u5217\u4f5c\u6210\u3057\u307e\u3059\n $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) // X\u884c 0\u5217\u306e 2D\u914d\u5217\n  // \u30c6\u30fc\u30d6\u30eb\u6bce\u306b\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // \u5168\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  // \u5f53\u8a72\u30c6\u30fc\u30d6\u30eb\u306e\u884c\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5bfe\u5fdc\u3059\u308b\u5217\u3092\u633f\u5165\u3057\u3066\u3044\u304d\u307e\u3059\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  // \u4f5c\u6210\u3057\u305f "\u30bb\u30eb" \u306b\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n')),(0,a.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u521d\u671f\u5316\u3055\u308c\u305f 2\u6b21\u5143\u914d\u5217\u3092\u4f7f\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3067\u7279\u5b9a\u306e\u30c6\u30fc\u30d6\u30eb\u304c\u6301\u3064\u5168\u30d5\u30a3\u30fc\u30eb\u30c9\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // \u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u30c6\u30fc\u30d6\u30eb\u306e\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059:\n COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // \u30d6\u30fc\u30eb\u3068\u65e5\u4ed8\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u521d\u671f\u5316\u3057\u307e\u3059\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8:")," \u3053\u306e\u4f8b\u3067\u308f\u304b\u308b\u3088\u3046\u306b\u30012\u6b21\u5143\u914d\u5217\u306e\u884c\u306e\u5217\u6570\u306f\u305d\u308c\u305e\u308c\u304c\u540c\u3058\u30b5\u30a4\u30ba\u3067\u3082\u7570\u306a\u308b\u30b5\u30a4\u30ba\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",r({},{id:"\u914d\u5217\u3068\u30e1\u30e2\u30ea"}),"\u914d\u5217\u3068\u30e1\u30e2\u30ea"),(0,a.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u3084\u30ec\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30a3\u30b9\u30af\u4e0a\u306b\u683c\u7d0d\u3059\u308b\u30c7\u30fc\u30bf\u3068\u7570\u306a\u308a\u3001\u914d\u5217\u306f\u5e38\u306b\u5168\u4f53\u304c\u30e1\u30e2\u30ea\u306b\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u7c73\u56fd\u5185\u306e\u90f5\u4fbf\u756a\u53f7\u304c\u3059\u3079\u3066 ","[Zip Codes]"," \u30c6\u30fc\u30d6\u30eb\u306b\u5165\u529b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u7d04100,000\u4ef6\u306e\u30ec\u30b3\u30fc\u30c9\u306b\u306a\u308a\u307e\u3059\u3002 \u52a0\u3048\u3066\u3001\u305d\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u306f\u90f5\u4fbf\u756a\u53f7\u306e\u307b\u304b\u306b\u3001\u5bfe\u5fdc\u3059\u308b\u5e02\u30fb\u90e1\u30fb\u5dde\u3068\u3044\u3046\u8907\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002 \u30ab\u30ea\u30d5\u30a9\u30eb\u30cb\u30a2\u306e\u90f5\u4fbf\u756a\u53f7\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u30014D \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a8\u30f3\u30b8\u30f3\u306f ","[Zip Codes]"," \u30c6\u30fc\u30d6\u30eb\u304b\u3089\u8a72\u5f53\u3059\u308b\u30ec\u30b3\u30fc\u30c9\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u3001\u5fc5\u8981\u306a\u5834\u5408\u306b\u306e\u307f\u5404\u30ec\u30b3\u30fc\u30c9\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059 (\u305f\u3068\u3048\u3070\u8868\u793a\u3084\u5370\u5237\u6642)\u3002 \u3064\u307e\u308a\u30014D\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u30c7\u30a3\u30b9\u30af\u304b\u3089\u30e1\u30e2\u30ea\u306b\u90e8\u5206\u7684\u306b\u30ed\u30fc\u30c9\u3055\u308c\u305f (\u30d5\u30a3\u30fc\u30eb\u30c9\u3054\u3068\u306b\u540c\u3058\u30bf\u30a4\u30d7\u306e) \u9806\u5e8f\u3065\u3051\u3089\u308c\u305f\u4e00\u9023\u306e\u5024\u3067\u4f5c\u696d\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u540c\u3058\u3053\u3068\u3092\u914d\u5217\u3067\u5b9f\u884c\u3059\u308b\u306e\u306f\u3001\u6b21\u306e\u7406\u7531\u3067\u7981\u6b62\u3059\u3079\u304d\u3067\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4\u3064\u306e\u60c5\u5831\u30bf\u30a4\u30d7 (\u90f5\u4fbf\u756a\u53f7\u3001\u5e02\u3001\u90e1\u3001\u5dde) \u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u306f\u30014\u3064\u306e\u5927\u304d\u306a\u914d\u5217\u3092\u30e1\u30e2\u30ea\u5185\u3067\u7dad\u6301\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u5217\u306f\u3001\u5e38\u306b\u5168\u4f53\u304c\u30e1\u30e2\u30ea\u5185\u306b\u7dad\u6301\u3055\u308c\u308b\u305f\u3081\u3001\u5e38\u6642\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u4f5c\u696d\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u9593\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u3092\u30e1\u30e2\u30ea\u306b\u7f6e\u3044\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u5217\u5168\u4f53\u304c\u5e38\u306b\u30e1\u30e2\u30ea\u5185\u306b\u7dad\u6301\u3055\u308c\u308b\u3053\u3068\u304b\u3089\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u958b\u59cb\u3055\u308c\u308b\u305f\u3073\u306b 4\u3064\u306e\u914d\u5217\u3092\u30c7\u30a3\u30b9\u30af\u304b\u3089\u30ed\u30fc\u30c9\u3057\u3066\u3001\u7d42\u4e86\u6642\u306b\u306f\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5f53\u8a72\u30c7\u30fc\u30bf\u304c\u4f5c\u696d\u30bb\u30c3\u30b7\u30e7\u30f3\u4e2d\u306b\u4f7f\u7528\u30fb\u5909\u66f4\u3055\u308c\u306a\u3044\u5834\u5408\u3082\u3053\u308c\u3092\u7701\u7565\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7d50\u8ad6:")," \u914d\u5217\u306f\u3001\u307b\u3069\u3088\u3044\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u77ed\u6642\u9593\u7dad\u6301\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002 \u4ed6\u65b9\u3001\u914d\u5217\u306f\u30e1\u30e2\u30ea\u5185\u306b\u7f6e\u304b\u308c\u308b\u305f\u3081\u3001\u6271\u3044\u3084\u3059\u304f\u9ad8\u901f\u64cd\u4f5c\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u72b6\u6cc1\u306b\u3088\u3063\u3066\u306f\u4f55\u767e\u3001\u4f55\u5343\u3068\u3044\u3046\u8981\u7d20\u3092\u6301\u3063\u305f\u914d\u5217\u3067\u4f5c\u696d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306e\u8868\u306b\u3001\u5404\u914d\u5217\u30bf\u30a4\u30d7\u304c\u30e1\u30e2\u30ea\u4e0a\u306b\u5360\u3081\u308b\u30d0\u30a4\u30c8\u6570\u3092\u6c42\u3081\u308b\u305f\u3081\u306e\u8a08\u7b97\u5f0f\u3092\u793a\u3057\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u914d\u5217\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306e\u8a08\u7b97\u5f0f (\u30d0\u30a4\u30c8\u5358\u4f4d)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"BLOB"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 12 + \u5168BLOB\u8981\u7d20\u306e\u5408\u8a08\u30b5\u30a4\u30ba")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30d6\u30fc\u30eb"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(31+\u8981\u7d20\u6570) \\ 8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u65e5\u4ed8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6574\u6570"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u500d\u9577\u6574\u6570"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 8 + \u5168\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5408\u8a08\u30b5\u30a4\u30ba")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30d4\u30af\u30c1\u30e3\u30fc"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 8 + \u5168\u30d4\u30af\u30c1\u30e3\u30fc\u306e\u5408\u8a08\u30b5\u30a4\u30ba")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30dd\u30a4\u30f3\u30bf\u30fc"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 8 + \u5168\u30dd\u30a4\u30f3\u30bf\u30fc\u306e\u5408\u8a08\u30b5\u30a4\u30ba")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5b9f\u6570"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) ",(0,a.kt)("em",{parentName:"td"}," 20 + (\u5168\u30c6\u30ad\u30b9\u30c8\u306e\u5408\u8a08\u30b5\u30a4\u30ba) ")," 2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6642\u9593"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2\u6b21\u5143"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(1+\u8981\u7d20\u6570) * 16 + \u914d\u5217\u30b5\u30a4\u30ba\u306e\u5408\u8a08")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30e1\u30e2\u30ea\u4e2d\u306e\u30c6\u30ad\u30b9\u30c8\u30b5\u30a4\u30ba\u306f\u4ee5\u4e0b\u306e\u5f0f\u3067\u8a08\u7b97\u3055\u308c\u307e\u3059: ((Length + 1) * 2)"),(0,a.kt)("li",{parentName:"ul"},"\u9078\u629e\u3057\u305f\u8981\u7d20\u3084\u8981\u7d20\u6570\u3001\u914d\u5217\u81ea\u4f53\u306e\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u3001\u3055\u3089\u306b\u6570\u30d0\u30a4\u30c8\u3092\u8981\u3057\u307e\u3059\u3002")))}d.isMDXComponent=!0}}]);