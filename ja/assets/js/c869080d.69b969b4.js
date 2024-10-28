"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31298],{104381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=t(474848),s=t(28453);const c={id:"compute",title:"$compute"},d=void 0,i={id:"REST/compute",title:"$compute",description:"\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (\u4f8b Employee/objectAtt.property1/?$compute=sum)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/ja/20/REST/compute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/ja/20/REST/binary"},next:{title:"$distinct",permalink:"/docs/ja/20/REST/distinct"}},l={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (",(0,r.jsx)(n.em,{children:"\u4f8b"}),": ",(0,r.jsx)(n.code,{children:"Employee/salary/?$compute=sum"}),"\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u4f8b: ",(0,r.jsx)(n.code,{children:"Employee/objectAtt.property1/?$compute=sum"}),")\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsx)(n.p,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u5834\u5408\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f8b:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30ad\u30fc\u30ef\u30fc\u30c9"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$all"}),(0,r.jsx)(n.td,{children:"\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u8a08\u7b97\u3092\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u304a\u3053\u306a\u3044\u3001\u7d50\u679c\u3092\u683c\u7d0d\u3057\u305f JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u6570\u5024\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u5e73\u5747 (average)\u3001\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max)\u3001\u5408\u8a08 (sum)\u3001\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max) \u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"average"}),(0,r.jsx)(n.td,{children:"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5e73\u5747\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u6570\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u6570\u3092\u53d6\u5f97\u3057\u307e\u3059 (\u3069\u3061\u3089\u306e\u5834\u5408\u3082\u5c5e\u6027\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min"}),(0,r.jsx)(n.td,{children:"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5c0f\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max"}),(0,r.jsx)(n.td,{children:"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5927\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sum"}),(0,r.jsx)(n.td,{children:"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5408\u8a08\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u5024\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"235000"})}),"\n",(0,r.jsx)(n.p,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"45"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const s={},c=r.createContext(s);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);