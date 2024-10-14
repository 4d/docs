"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1813],{330669:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=r(474848),t=r(28453);const l={id:"filter",title:"$filter"},i=void 0,d={id:"REST/filter",title:"$filter",description:"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u307e\u3059 (\u4f8b: $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/ja/18/REST/filter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/ja/18/REST/expand"},next:{title:"$imageformat",permalink:"/docs/ja/18/REST/imageformat"}},c={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",id:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",level:3},{value:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",id:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",level:3},{value:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",id:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u307e\u3059 ",(0,s.jsx)(n.em,{children:"(\u4f8b"}),": ",(0,s.jsx)(n.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u306b\u5bfe\u3059\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",children:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u6b21\u306e\u8981\u7d20\u3067\u69cb\u6210\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(n.p,{children:["\u305f\u3068\u3048\u3070 ",(0,s.jsx)(n.code,{children:'$filter="firstName=john"'})," \u306e\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"firstName"})," \u306f ",(0,s.jsx)(n.strong,{children:"\u5c5e\u6027 (attribute)"}),"\u3001",(0,s.jsx)(n.code,{children:"="})," \u306f ",(0,s.jsx)(n.strong,{children:"\u6bd4\u8f03\u6f14\u7b97\u5b50 (comparator)"}),"\u3001",(0,s.jsx)(n.code,{children:"john"})," \u306f ",(0,s.jsx)(n.strong,{children:"\u5024 (value)"})," \u306b\u3042\u305f\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",children:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u8907\u6570\u306e\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u69cb\u6210\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(n.p,{children:["\u305f\u3068\u3048\u3070: ",(0,s.jsx)(n.code,{children:'$filter="firstName=john AND salary>20000"'})," \uff08",(0,s.jsx)(n.code,{children:"firstName"})," \u304a\u3088\u3073 ",(0,s.jsx)(n.code,{children:"salary"})," \u306f Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u5c5e\u6027\u3067\u3059)\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",children:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"4D \u306e params\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,s.jsxs)(n.p,{children:["\u305f\u3068\u3048\u3070: ",(0,s.jsx)(n.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," (firstName \u304a\u3088\u3073 salary \u306f Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u5c5e\u6027\u3067\u3059)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u3092\u30af\u30a8\u30ea\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.ja.html",children:"dataClass.query()"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5358\u4e00\u5f15\u7528\u7b26 (') \u307e\u305f\u306f\u4e8c\u91cd\u5f15\u7528\u7b26 (\") \u3092\u633f\u5165\u3059\u308b\u306b\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u305d\u308c\u3089\u3092\u30a8\u30b9\u30b1\u30fc\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:"\u5358\u4e00\u5f15\u7528\u7b26 ('): \\u0027 \u4e8c\u91cd\u5f15\u7528\u7b26 (\"): \\u0022"}),"\n",(0,s.jsxs)(n.p,{children:["\u305f\u3068\u3048\u3070\u3001\u5358\u4e00\u5f15\u7528\u7b26\u304c\u542b\u307e\u308c\u308b\u5024\u3092 ",(0,s.jsx)(n.em,{children:"params"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u6e21\u3059\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5024\u3092\u76f4\u63a5\u6e21\u3059\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u3051\u307e\u3059: ",(0,s.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u3058\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306b\u5c5e\u3057\u3066\u3044\u308b\u5c5e\u6027\u306f\u305d\u306e\u307e\u307e\u53d7\u3051\u6e21\u305b\u307e\u3059 (",(0,s.jsx)(n.em,{children:"\u4f8b"}),": ",(0,s.jsx)(n.code,{children:"firstName"}),")\u3002 \u5225\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3092\u30af\u30a8\u30ea\u3059\u308b\u5834\u5408\u306f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u540d\u3068\u5c5e\u6027\u3001\u3064\u307e\u308a\u30d1\u30b9\u3092\u6e21\u3055\u306a\u304f\u3066\u306f\u306a\u308a\u307e\u305b\u3093 (",(0,s.jsx)(n.em,{children:"\u4f8b"}),": employer.name)\u3002 \u5c5e\u6027\u540d\u306e\u6587\u5b57\u306e\u5927\u5c0f\u306f\u533a\u5225\u3055\u308c\u307e\u3059 (",(0,s.jsx)(n.code,{children:"firstName"})," \u3068 ",(0,s.jsx)(n.code,{children:"FirstName"})," \u306f\u7570\u306a\u308a\u307e\u3059)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:'\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u5c5e\u6027\u3082\u30c9\u30c3\u30c8\u8a18\u6cd5\u306b\u3088\u3063\u3066\u30af\u30a8\u30ea\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"objAttribute" \u3068\u3044\u3046\u540d\u79f0\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u304c\u6b21\u306e\u69cb\u9020\u3092\u6301\u3063\u3066\u3044\u305f\u5834\u5408:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    prop1: "\u4e00\u3064\u76ee\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30a8\u30ea\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50",children:"\u6bd4\u8f03\u6f14\u7b97\u5b50"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6bd4\u8f03\u6f14\u7b97\u5b50"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"="}),(0,s.jsx)(n.td,{children:"\u7b49\u3057\u3044"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"!="}),(0,s.jsx)(n.td,{children:"\u7b49\u3057\u304f\u306a\u3044"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:">"}),(0,s.jsx)(n.td,{children:"\u5927\u304d\u3044"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:">="}),(0,s.jsx)(n.td,{children:"\u4ee5\u4e0a"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"<"}),(0,s.jsx)(n.td,{children:"\u5c0f\u3055\u3044"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"<="}),(0,s.jsx)(n.td,{children:"\u4ee5\u4e0b"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"begin"}),(0,s.jsx)(n.td,{children:"\u524d\u65b9\u4e00\u81f4"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:'\u540d\u5b57\u304c "j" \u3067\u59cb\u307e\u308b\u793e\u54e1\u3092\u691c\u7d22\u3057\u307e\u3059:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3088\u308a\u3001\u7d66\u4e0e\u304c 20,000 \u8d85\u3067\u3001\u304b\u3064 Acme \u3068\u3044\u3046\u540d\u79f0\u306e\u4f01\u696d\u3067\u50cd\u3044\u3066\u3044\u306a\u3044\u793e\u54e1\u3092\u691c\u7d22\u3057\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Person \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3088\u308a\u3001anotherobj \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e number \u30d7\u30ed\u30d1\u30c6\u30a3\u304c 50 \u3088\u308a\u5927\u304d\u3044\u4eba\u306e\u30c7\u30fc\u30bf\u3092\u691c\u7d22\u3057\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(296540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);