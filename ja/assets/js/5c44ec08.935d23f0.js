"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69725"],{270887:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/relate-many","title":"RELATE MANY","description":"RELATE MANY ( oneTable )RELATE MANY ( Field )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-many.md","sourceDirName":"commands-legacy","slug":"/commands/relate-many","permalink":"/docs/ja/20-R7/commands/relate-many","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-many.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-many","title":"RELATE MANY","slug":"/commands/relate-many","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OLD RELATED ONE","permalink":"/docs/ja/20-R7/commands/old-related-one"},"next":{"title":"RELATE MANY SELECTION","permalink":"/docs/ja/20-R7/commands/relate-many-selection"}}'),t=s("785893"),d=s("250065");let l={id:"relate-many",title:"RELATE MANY",slug:"/commands/relate-many",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RELATE MANY"})," ( ",(0,t.jsx)(n.em,{children:"oneTable"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"RELATE MANY"})," ( ",(0,t.jsx)(n.em,{children:"Field"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oneTable | Field"}),(0,t.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB, \u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306E1\u5BFEn\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u30C6\u30FC\u30D6\u30EB \u307E\u305F\u306F1\u30D5\u30A3\u30FC\u30EB\u30C9"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(n.p,{children:"RELATE MANY\u306B\u306F\u30012\u3064\u306E\u5F62\u5F0F\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B2C1\u306E\u5F62\u5F0FRELATE MANY(oneTable)\u306F\u3001",(0,t.jsx)(n.em,{children:"oneTable"}),"\u306B\u5BFE\u3057\u3066\u3059\u3079\u3066\u306E1\u5BFEn\u306E\u30EA\u30EC\u30FC\u30C8\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"oneTable"}),"\u306B\u5BFE\u3057\u30661\u5BFEn\u306E\u30EA\u30EC\u30FC\u30C8\u3092\u6301\u3064\u5404\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002n\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u30011\u30C6\u30FC\u30D6\u30EB\u306E\u305D\u308C\u305E\u308C\u306E\u30EA\u30EC\u30FC\u30C8\u5148\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u73FE\u5728\u5024\u3092\u53CD\u6620\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u5EA6\u306B\u3001n\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u518D\u69CB\u6210\u3055\u308C\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u521D\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3068\u3057\u3066\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7B2C2\u306E\u5F62\u5F0FRELATE MANY(oneField)\u306F\u3001",(0,t.jsx)(n.em,{children:"oneField"}),"\u306B\u5BFE\u3057\u30661\u5BFEn\u306E\u30EA\u30EC\u30FC\u30C8\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001",(0,t.jsx)(n.em,{children:"oneField"}),"\u3068\u95A2\u9023\u3092\u6301\u3064\u30C6\u30FC\u30D6\u30EB\u306E\u307F\u306B\u5BFE\u3057\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30EA\u30EC\u30FC\u30C8\u5148\u30C6\u30FC\u30D6\u30EB\u306E\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304Cn\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u306A\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," RELATE MANY\u3092\u5B9F\u884C\u3059\u308B\u969B\u306B\u30011\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u7A7A\u306E\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:""}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u30013\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u81EA\u52D5\u30EA\u30EC\u30FC\u30C8\u3067\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u307E\u3059\u3002[People]\u30C6\u30FC\u30D6\u30EB\u3068[Parts]\u30C6\u30FC\u30D6\u30EB\u306F\u4E21\u65B9\u3068\u3082[Companies]\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u3057\u3066n\u5BFE1\u306E\u30EA\u30EC\u30FC\u30C8\u95A2\u4FC2\u306B\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(679341).Z+"",width:"543",height:"276"})}),"\n",(0,t.jsx)(n.p,{children:"[Companies]\u30C6\u30FC\u30D6\u30EB\u306E\u3053\u306E\u30D5\u30A9\u30FC\u30E0\u306F\u3001[People]\u30C6\u30FC\u30D6\u30EB\u3068[Parts]\u30C6\u30FC\u30D6\u30EB\u4E21\u65B9\u306E\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(171221).Z+"",width:"801",height:"485"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A\u3059\u308B\u3068\u3001[People]\u30C6\u30FC\u30D6\u30EB\u3068[Parts]\u30C6\u30FC\u30D6\u30EB\u306E\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30FC\u30C9\u3055\u308C\u3001\u305D\u308C\u305E\u308C\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ED6\u65B9\u30D7\u30ED\u30B0\u30E9\u30E0\u3067[Companies]\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u9078\u629E\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30EA\u30EC\u30FC\u30C8\u5148\u30EC\u30B3\u30FC\u30C9\u306F\u30ED\u30FC\u30C9\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u306FRELATE MANY\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RELATE MANY\u304C\u7A7A\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5B9F\u884C\u3055\u308C\u305A\u3001n\u30C6\u30FC\u30D6\u30EB\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u52D5\u4F5C\u3059\u308B\u305F\u3081\u306B\u306F\u3001n\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u5C5E\u6027\u304C\u4ED8\u3044\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001[Companies]\u30C6\u30FC\u30D6\u30EB\u306E\u5404\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u3057\u3001\u8B66\u544A\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u8B66\u544A\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u306F\u793E\u54E1\u6570\uFF08[People]\u30C6\u30FC\u30D6\u30EB\u4E2D\u306E\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u6570\uFF09\u3001\u4F9B\u7D66\u3059\u308B\u90E8\u54C1\u306E\u7A2E\u985E\u6570\uFF08[Parts]\u30C6\u30FC\u30D6\u30EB\u4E2D\u306E\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u6570\uFF09\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u4F8B\u3067\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/alert",title:"ALERT",children:"ALERT"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5F15\u6570\u304C\u8907\u6570\u884C\u306B\u308F\u305F\u3063\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u81EA\u52D5\u30EA\u30EC\u30FC\u30C8\u306E\u5834\u5408\u3067\u3082RELATE MANY\u30B3\u30DE\u30F3\u30C9\u304C\u5FC5\u8981\u306A\u3053\u3068\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Companies])\xa0// Select all records in the \u30C6\u30FC\u30D6\u30EB\n\xa0ORDER BY([Companies];[Companies]Name)\xa0// Order records in alphabetical order\n\xa0For($i;1;Records in table([Companies]))\xa0// Loop once for each record\n\xa0\xa0\xa0\xa0RELATE MANY([Companies]Name)\xa0// Select the related records\n\xa0\xa0\xa0\xa0ALERT("Company: "+[Companies]Name+Char(13)+"People in company: "\n\xa0\xa0\xa0\xa0+String(Records in selection([People]))+Char(13)+\n\xa0\xa0\xa0\xa0"\u6570\u5024 of parts they supply: "+String(Records in selection([Parts])))\n\xa0\xa0\xa0\xa0NEXT RECORD([Companies])\xa0// Move to the next record\n\xa0End for\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/old-related-many",children:"OLD RELATED MANY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/relate-one",children:"RELATE ONE"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"262"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},679341:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2286855.fr-d70e4f5dcaaca401891de48e2f80cc18.png"},171221:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2287703.fr-b606aae28294d3c413593928bc5eed2f.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);