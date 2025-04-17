"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27538"],{58381:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/filter","title":"$filter","description":"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u307E\u305F\u306F\u30E1\u30BD\u30C3\u30C9\u304C\u8FD4\u3059\u30C7\u30FC\u30BF\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3057\u307E\u3059 (\u4F8B: $filter=\\"firstName!=\'\' AND salary>30000\\")","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/REST/$filter.md","sourceDirName":"REST","slug":"/REST/filter","permalink":"/docs/ja/20-R8/REST/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"filter","title":"$filter"},"sidebar":"docs","previous":{"title":"$expand","permalink":"/docs/ja/20-R8/REST/expand"},"next":{"title":"$format","permalink":"/docs/ja/20-R8/REST/format"}}'),t=r("785893"),l=r("250065");let i={id:"filter",title:"$filter"},d=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u5358\u7D14\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",id:"\u5358\u7D14\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",level:3},{value:"\u8907\u96D1\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",id:"\u8907\u96D1\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",level:3},{value:"params\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",id:"params\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",level:3},{value:"\u5C5E\u6027",id:"\u5C5E\u6027",level:2},{value:"\u6BD4\u8F03\u6F14\u7B97\u5B50",id:"\u6BD4\u8F03\u6F14\u7B97\u5B50",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u307E\u305F\u306F\u30E1\u30BD\u30C3\u30C9\u304C\u8FD4\u3059\u30C7\u30FC\u30BF\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3057\u307E\u3059 ",(0,t.jsx)(n.em,{children:"(\u4F8B"}),": ",(0,t.jsx)(n.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u307E\u305F\u306F\u30E1\u30BD\u30C3\u30C9\u304C\u8FD4\u3059\u30C7\u30FC\u30BF\u306B\u5BFE\u3059\u308B\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5358\u7D14\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",children:"\u5358\u7D14\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u6B21\u306E\u8981\u7D20\u3067\u69CB\u6210\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,t.jsxs)(n.p,{children:["\u305F\u3068\u3048\u3070 ",(0,t.jsx)(n.code,{children:'$filter="firstName=john"'})," \u306E\u5834\u5408\u3001",(0,t.jsx)(n.code,{children:"firstName"})," \u306F ",(0,t.jsx)(n.strong,{children:"\u5C5E\u6027 (attribute)"}),"\u3001",(0,t.jsx)(n.code,{children:"="})," \u306F ",(0,t.jsx)(n.strong,{children:"\u6BD4\u8F03\u6F14\u7B97\u5B50 (comparator)"}),"\u3001",(0,t.jsx)(n.code,{children:"john"})," \u306F ",(0,t.jsx)(n.strong,{children:"\u5024 (value)"})," \u306B\u3042\u305F\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8907\u96D1\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528",children:"\u8907\u96D1\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u5229\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u8907\u96D1\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u8907\u6570\u306E\u5358\u7D14\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u69CB\u6210\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,t.jsxs)(n.p,{children:["\u305F\u3068\u3048\u3070: ",(0,t.jsx)(n.code,{children:'$filter="firstName=john AND salary>20000"'})," \uFF08",(0,t.jsx)(n.code,{children:"firstName"})," \u304A\u3088\u3073 ",(0,t.jsx)(n.code,{children:"salary"})," \u306F Employee \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u5C5E\u6027\u3067\u3059)\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"params\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",children:"params\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528"}),"\n",(0,t.jsx)(n.p,{children:"4D \u306E params\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,t.jsxs)(n.p,{children:["\u305F\u3068\u3048\u3070: ",(0,t.jsx)(n.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," (firstName \u304A\u3088\u3073 salary \u306F Employee \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u5C5E\u6027\u3067\u3059)\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["4D \u306B\u304A\u3044\u3066\u30C7\u30FC\u30BF\u3092\u30AF\u30A8\u30EA\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/API/DataClassClass#query",children:"dataClass.query()"})," \u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5358\u4E00\u5F15\u7528\u7B26 (') \u307E\u305F\u306F\u4E8C\u91CD\u5F15\u7528\u7B26 (\") \u3092\u633F\u5165\u3059\u308B\u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u3063\u3066\u305D\u308C\u3089\u3092\u30A8\u30B9\u30B1\u30FC\u30D7\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,t.jsx)(n.li,{children:"\u5358\u4E00\u5F15\u7528\u7B26 ('): \\u0027"}),"\n",(0,t.jsx)(n.li,{children:'\u4E8C\u91CD\u5F15\u7528\u7B26 ("): \\u0022'}),"\n",(0,t.jsxs)(n.p,{children:["\u305F\u3068\u3048\u3070\u3001\u5358\u4E00\u5F15\u7528\u7B26\u304C\u542B\u307E\u308C\u308B\u5024\u3092 ",(0,t.jsx)(n.em,{children:"params"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u6E21\u3059\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5024\u3092\u76F4\u63A5\u6E21\u3059\u5834\u5408\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u3051\u307E\u3059: ",(0,t.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5C5E\u6027",children:"\u5C5E\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u540C\u3058\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306B\u5C5E\u3057\u3066\u3044\u308B\u5C5E\u6027\u306F\u305D\u306E\u307E\u307E\u53D7\u3051\u6E21\u305B\u307E\u3059 (",(0,t.jsx)(n.em,{children:"\u4F8B"}),": ",(0,t.jsx)(n.code,{children:"firstName"}),")\u3002 \u5225\u306E\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3092\u30AF\u30A8\u30EA\u3059\u308B\u5834\u5408\u306F\u3001\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u540D\u3068\u5C5E\u6027\u3001\u3064\u307E\u308A\u30D1\u30B9\u3092\u6E21\u3055\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093 (",(0,t.jsx)(n.em,{children:"\u4F8B"}),": employer.name)\u3002 \u5C5E\u6027\u540D\u306E\u6587\u5B57\u306E\u5927\u5C0F\u306F\u533A\u5225\u3055\u308C\u307E\u3059 (",(0,t.jsx)(n.code,{children:"firstName"})," \u3068 ",(0,t.jsx)(n.code,{children:"FirstName"})," \u306F\u7570\u306A\u308A\u307E\u3059)\u3002"]}),"\n",(0,t.jsx)(n.p,{children:'\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u5C5E\u6027\u3082\u30C9\u30C3\u30C8\u8A18\u6CD5\u306B\u3088\u3063\u3066\u30AF\u30A8\u30EA\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001"objAttribute" \u3068\u3044\u3046\u540D\u79F0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u304C\u6B21\u306E\u69CB\u9020\u3092\u6301\u3063\u3066\u3044\u305F\u5834\u5408:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    prop1: "\u4E00\u3064\u76EE\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30AF\u30A8\u30EA\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:' GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6BD4\u8F03\u6F14\u7B97\u5B50",children:"\u6BD4\u8F03\u6F14\u7B97\u5B50"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u6BD4\u8F03\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u6BD4\u8F03\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"="}),(0,t.jsx)(n.td,{children:"\u7B49\u3057\u3044"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"!="}),(0,t.jsx)(n.td,{children:"\u7B49\u3057\u304F\u306A\u3044"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:">"}),(0,t.jsx)(n.td,{children:"\u5927\u304D\u3044"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> ="}),(0,t.jsx)(n.td,{children:"\u4EE5\u4E0A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<"}),(0,t.jsx)(n.td,{children:"\u5C0F\u3055\u3044"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<="}),(0,t.jsx)(n.td,{children:"\u4EE5\u4E0B"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"begin"}),(0,t.jsx)(n.td,{children:"\u524D\u65B9\u4E00\u81F4"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:'\u540D\u5B57\u304C "j" \u3067\u59CB\u307E\u308B\u793E\u54E1\u3092\u691C\u7D22\u3057\u307E\u3059:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Employee \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3088\u308A\u3001\u7D66\u4E0E\u304C 20,000 \u8D85\u3067\u3001\u304B\u3064 Acme \u3068\u3044\u3046\u540D\u79F0\u306E\u4F01\u696D\u3067\u50CD\u3044\u3066\u3044\u306A\u3044\u793E\u54E1\u3092\u691C\u7D22\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Person \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3088\u308A\u3001anotherobj \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306E number \u30D7\u30ED\u30D1\u30C6\u30A3\u304C 50 \u3088\u308A\u5927\u304D\u3044\u4EBA\u306E\u30C7\u30FC\u30BF\u3092\u691C\u7D22\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);