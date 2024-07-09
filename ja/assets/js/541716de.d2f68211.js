/*! For license information please see 541716de.d2f68211.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46356],{559717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(474848),o=t(28453);const s={id:"atomic_$atonce",title:"$atomic/$atOnce"},c=void 0,a={id:"REST/atomic_$atonce",title:"$atomic/$atOnce",description:"REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u542b\u307e\u308c\u308b\u64cd\u4f5c\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u5185\u3067\u51e6\u7406\u3057\u307e\u3059\u3002 \u30a8\u30e9\u30fc\u304c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u53d7\u3051\u5165\u308c\u3089\u308c\u307e\u3059\u3002 \u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/ja/20-R4/REST/atomic_$atonce",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/ja/20-R4/REST/asArray"},next:{title:"$attributes",permalink:"/docs/ja/20-R4/REST/attributes"}},i={},d=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u542b\u307e\u308c\u308b\u64cd\u4f5c\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u5185\u3067\u51e6\u7406\u3057\u307e\u3059\u3002 \u30a8\u30e9\u30fc\u304c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u53d7\u3051\u5165\u308c\u3089\u308c\u307e\u3059\u3002 \u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8907\u6570\u306e\u64cd\u4f5c\u3092\u4e00\u56de\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u51e6\u7406\u3059\u308b\u969b\u306b\u306f ",(0,r.jsx)(n.code,{children:"$atomic/$atOnce"})," \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\uff11\u3064\u3067\u3082\u64cd\u4f5c\u306b\u554f\u984c\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u3059\u3079\u3066\u306e\u64cd\u4f5c\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"$atomic"})," \u304a\u3088\u3073 ",(0,r.jsx)(n.code,{children:"$atOnce"})," \u306e\u3069\u3061\u3089\u3067\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u5185\u3067\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"POST \u30c7\u30fc\u30bf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"2\u3064\u76ee\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u64cd\u4f5c\u4e2d\u306b\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u30011\u3064\u76ee\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3082\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'1\u3064\u76ee\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u540d\u524d\u306f "John" \u3067\u3059\u304c\u3001\u3053\u306e\u5024\u306f\u30b5\u30fc\u30d0\u30fc\u4e0a\u306b\u4fdd\u5b58\u3055\u308c\u305a\u3001\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3082\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ea\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3001\u3082\u3068\u306e\u5024\u306b\u623b\u308a\u307e\u3059\u3002'}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(296540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);