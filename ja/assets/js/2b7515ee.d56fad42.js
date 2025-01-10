"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58387"],{861605:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>c,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands/open-datastore","title":"Open datastore","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/open-datastore.md","sourceDirName":"commands","slug":"/commands/open-datastore","permalink":"/docs/ja/commands/open-datastore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fopen-datastore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-datastore","title":"Open datastore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATABASE","permalink":"/docs/ja/commands/open-database"},"next":{"title":"OPEN RUNTIME EXPLORER","permalink":"/docs/ja/commands/open-runtime-explorer"}}'),s=t("785893"),r=t("250065");let c={id:"open-datastore",title:"Open datastore",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"20 R6"}),(0,s.jsx)(e.td,{children:"Qodly \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u30B5\u30DD\u30FC\u30C8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"20 R4"}),(0,s.jsxs)(e.td,{children:["\u65B0\u3057\u3044 ",(0,s.jsx)(e.em,{children:"passwordAlgorithm"})," \u30D7\u30ED\u30D1\u30C6\u30A3"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"18"}),(0,s.jsx)(e.td,{children:"\u8FFD\u52A0"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Open datastore"}),"( ",(0,s.jsx)(e.em,{children:"connectionInfo"})," : Object ; ",(0,s.jsx)(e.em,{children:"localID"})," : Text ) : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connectionInfo"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3078\u306E\u63A5\u7D9A\u306B\u4F7F\u7528\u3059\u308B\u63A5\u7D9A\u30D7\u30ED\u30D1\u30C6\u30A3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"localID"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30ED\u30FC\u30AB\u30EB\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u3001\u958B\u304B\u308C\u305F\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u308B ID (\u5FC5\u9808)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"cs.DataStore"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\n",(0,s.jsx)(e.em,{children:"connectionInfo"})," \u5F15\u6570\u304C\u6307\u5B9A\u3059\u308B\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u63A5\u7D9A\u3057\u307E\u3059\u3002\u623B\u308A\u5024\u306F\u3001",(0,s.jsx)(e.em,{children:"localID"})," \u30ED\u30FC\u30AB\u30EB\u30A8\u30A4\u30EA\u30A2\u30B9\u306B\u7D10\u3065\u3051\u3089\u308C\u305F ",(0,s.jsx)(e.code,{children:"cs.DataStore"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u304C\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u7A2E\u985E"}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30EA\u30E2\u30FC\u30C84D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),(0,s.jsxs)(e.td,{children:["\u6B21\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3057\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3068\u3057\u3066\u5229\u7528\u53EF\u80FD\u306A 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3:",(0,s.jsx)(e.li,{children:"http \u304A\u3088\u3073/\u307E\u305F\u306F https \u304C\u6709\u52B9\u306A\u72B6\u614B\u3067 Web\u30B5\u30FC\u30D0\u30FC\u304C\u8D77\u52D5\u3055\u308C\u3066\u3044\u308B\u3002"}),(0,s.jsxs)(e.li,{children:["\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u304C REST \u306B\u516C\u958B\u3055\u308C\u3066\u3044\u308B (",(0,s.jsx)(e.a,{href:"/docs/ja/REST/configuration#rest%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%99%E3%82%8B",children:(0,s.jsx)(e.strong,{children:"REST\u30B5\u30FC\u30D0\u30FC\u3068\u3057\u3066\u516C\u958B"})})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B)\u3002"]}),"\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059 (\u6CE8\u8A18\u53C2\u7167)\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://developer.qodly.com/docs/cloud/getStarted",children:"Qodly \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"})}),(0,s.jsxs)(e.td,{children:["\u5B9A\u7FA9\u3055\u308C\u305F\u30ED\u30FC\u30EB\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u6709\u52B9\u306A ",(0,s.jsx)(e.strong,{children:"API\u30AD\u30FC"})," \u3068 ",(0,s.jsx)(e.strong,{children:"API\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8"})," \u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B Qodly Server\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3002 ",(0,s.jsx)(e.em,{children:"connectionInfo"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,s.jsx)(e.code,{children:"api-key"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u3063\u3066 API\u30AD\u30FC\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u305D\u306E\u30ED\u30FC\u30EB\u306B\u4ED8\u4E0E\u3055\u308C\u305F\u6A29\u9650\u306E\u7BC4\u56F2\u3067\u3001\u8FD4\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002"]})]})]})]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Open datastore"})," \u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306F 4D REST API \u306B\u4F9D\u5B58\u3057\u3001\u30EA\u30E2\u30FC\u30C8\u306E 4D Server\u4E0A\u3067\u63A5\u7D9A\u3092\u958B\u304F\u306B\u3042\u305F\u3063\u3066\u30014D \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u9078\u629E\u3057\u305F\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u30FC\u30ED\u30B0\u30A4\u30F3\u30E2\u30FC\u30C9\u306B\u5FDC\u3058\u3066\u8A8D\u8A3C\u3092\u69CB\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/REST/authUsers#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%89",children:"\u30E6\u30FC\u30B6\u30FC\u30ED\u30B0\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30BB\u30AF\u30B7\u30E7\u30F3"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"connectionInfo"})," \u306B\u306F\u3001\u63A5\u7D9A\u3057\u305F\u3044\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u8A73\u7D30\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,s.jsx)(e.em,{children:"hostname"})," \u3092\u9664\u304D\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EFB\u610F\u3067\u3059):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u30EA\u30E2\u30FC\u30C84D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),(0,s.jsx)(e.th,{children:"Qodly \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"hostname"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:'\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u540D\u524D\u307E\u305F\u306F IP\u30A2\u30C9\u30EC\u30B9 + ":" + \u30DD\u30FC\u30C8\u756A\u53F7 (\u30DD\u30FC\u30C8\u756A\u53F7\u306F\u5FC5\u9808)'}),(0,s.jsx)(e.td,{children:"Qodly \u30AF\u30E9\u30A6\u30C9\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E API\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"user"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u30E6\u30FC\u30B6\u30FC\u540D"}),(0,s.jsx)(e.td,{children:"- (\u7121\u8996\u3055\u308C\u307E\u3059)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"password"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u30E6\u30FC\u30B6\u30FC\u30D1\u30B9\u30EF\u30FC\u30C9"}),(0,s.jsx)(e.td,{children:"- (\u7121\u8996\u3055\u308C\u307E\u3059)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"idleTimeout"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsxs)(e.td,{children:["\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u304C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3059\u308B\u307E\u3067\u306E\u6642\u9593 (\u5206\u5358\u4F4D)\u3002\u3053\u306E\u6642\u9593\u3092\u904E\u304E\u308B\u3068\u30014D \u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u9589\u3058\u3089\u308C\u307E\u3059\u3002 \u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F 60 (1\u6642\u9593) \u3067\u3059\u3002 60 (\u5206) \u672A\u6E80\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 (60 \u672A\u6E80\u306E\u5024\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 60 (\u5206) \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059)\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/ORDA/datastores#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E7%B5%82%E4%BA%86",children:(0,s.jsx)(e.strong,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u7D42\u4E86"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),(0,s.jsx)(e.td,{children:"- (\u7121\u8996\u3055\u308C\u307E\u3059)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tls"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30BB\u30AD\u30E5\u30A2\u306A\u63A5\u7D9A\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F true (1)\u3002 \u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F false \u3067\u3059\u3002 \u53EF\u80FD\u306A\u304B\u304E\u308A\u5B89\u5168\u306A\u63A5\u7D9A\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"}),(0,s.jsx)(e.td,{children:"\u30BB\u30AD\u30E5\u30A2\u306A\u63A5\u7D9A\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F true\u3002 \u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F false \u3067\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"type"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:'"4D Server" \u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093'}),(0,s.jsx)(e.td,{children:"- (\u7121\u8996\u3055\u308C\u307E\u3059)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"api-key"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"- (\u7121\u8996\u3055\u308C\u307E\u3059)"}),(0,s.jsx)(e.td,{children:"Qodly \u30AF\u30E9\u30A6\u30C9\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E API\u30AD\u30FC"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(*) ",(0,s.jsx)(e.code,{children:"tls"})," \u304C true \u3067\u3042\u308B\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u3066\u3044\u308C\u3070\u3001HTTPS\u30D7\u30ED\u30C8\u30B3\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3067 HTTPS \u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6307\u5B9A\u3055\u308C\u305F\u30DD\u30FC\u30C8\u756A\u53F7\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u3067\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B HTTPS \u30DD\u30FC\u30C8\u3068\u5408\u81F4\u3057\u3066\u3044\u308B\u3002"}),"\n",(0,s.jsx)(e.li,{children:'4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6709\u52B9\u306A\u8A3C\u660E\u66F8\u3068\u975E\u516C\u958B\u6697\u53F7\u9375\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3002 \u6761\u4EF6\u3092\u6E80\u305F\u3055\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC "1610 - \u30DB\u30B9\u30C8 xxx \u3078\u306E\u30EA\u30E2\u30FC\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5931\u6557\u3057\u307E\u3057\u305F" \u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"localID"})," \u5F15\u6570\u306F\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u4E0A\u3067\u958B\u304B\u308C\u308B\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30ED\u30FC\u30AB\u30EB\u30A8\u30A4\u30EA\u30A2\u30B9\u3067\u3059\u3002 ",(0,s.jsx)(e.em,{children:"localID"})," \u5F15\u6570\u306E ID \u304C\u3059\u3067\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E ID \u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u4F7F\u7528\u3055\u308C\u305F\u3068\u304D\u306B ",(0,s.jsx)(e.em,{children:"localID"})," \u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u65B0\u898F\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E00\u65E6\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u304B\u308C\u308B\u3068\u3001\u4EE5\u4E0B\u306E 2\u884C\u306E\u5BA3\u8A00\u306F\u540C\u7B49\u306E\u3082\u306E\u3068\u306A\u308A\u3001\u540C\u3058\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:' $myds:=Open datastore(connectionInfo;"myLocalId")\n $myds2:=ds("myLocalId")\n  //$myds \u3068 $myds2 \u306F\u540C\u4E00\u306E\u3082\u306E\u3067\u3059\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"cs.Datastore"})," \u304C\u63D0\u4F9B\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/ORDA/dsmapping#%E5%A4%89%E6%8F%9B%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB",children:"ORDA\u30DE\u30C3\u30D4\u30F3\u30B0\u30EB\u30FC\u30EB"})," \u306B\u57FA\u3065\u3044\u3066\u30DE\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5408\u81F4\u3059\u308B\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001",(0,s.jsx)(e.code,{children:"Open datastore"})," \u306F ",(0,s.jsx)(e.strong,{children:"Null"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(e.p,{children:"user / password \u3092\u6307\u5B9A\u305B\u305A\u306B\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("\u3053\u306E\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F "+String($remoteDS.Students.all().length)+" \u540D\u306E\u751F\u5F92\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(e.p,{children:"user / password / timeout / tls \u3092\u6307\u5B9A\u3057\u3066\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";\\"192.168.18.11:4443";\\  \n  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("\u3053\u306E\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F "+String($remoteDS.Students.all().length)+" \u540D\u306E\u751F\u5F92\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,s.jsx)(e.p,{children:"\u8907\u6570\u306E\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3068\u63A5\u7D9A\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:' var $connectTo : Object\n var $frenchStudents; $foreignStudents : cs.DataStore\n $connectTo:=New object("hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n ALERT("\u30D5\u30E9\u30F3\u30B9\u306E\u751F\u5F92\u306F "+String($frenchStudents.Students.all().length)+" \u540D\u3067\u3059")\n ALERT("\u5916\u56FD\u306E\u751F\u5F92\u306F "+String($foreignStudents.Students.all().length)+" \u540D\u3067\u3059")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,s.jsx)(e.p,{children:"Qodly \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u63A5\u7D9A:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}\n\nvar $remoteDS : 4D.DataStoreImplementation\nvar $data : 4D.EntitySelection\n\n$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" // \u5B9F\u969B\u306B\u306F\u30CF\u30FC\u30C9\u30B3\u30FC\u30C9\u305B\u305A \n  // API\u30AD\u30FC\u3092\u5B89\u5168\u306A\u5834\u6240 (\u30D5\u30A1\u30A4\u30EB\u306A\u3069) \u306B\u4FDD\u5B58\u3057\u3001\n  // \u30B3\u30FC\u30C9\u3067\u8AAD\u307F\u8FBC\u3080\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\n\n$remoteDS:=Open datastore($connectTo; "remoteId")\n$data:=$remoteDS.item.all()\n\nALERT(String($data.length)+" \u4EF6\u306E\u9805\u76EE\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3057\u305F")\n\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,s.jsxs)(e.p,{children:["\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F ",(0,s.jsx)(e.strong,{children:"Null"}),' \u3092\u8FD4\u3057\u307E\u3059\u3002 \u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408 (\u30A2\u30C9\u30EC\u30B9\u9055\u3044\u3001Web\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u306A\u3044\u3001http/https \u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u3001\u7B49)\u3001\u30A8\u30E9\u30FC1610 "\u30DB\u30B9\u30C8 XXX \u3078\u306E\u30EA\u30E2\u30FC\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5931\u6557\u3057\u307E\u3057\u305F" \u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30A8\u30E9\u30FC\u306F ',(0,s.jsx)(e.code,{children:"ON ERR CALL"})," \u3067\u5B9F\u88C5\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u5272\u308A\u8FBC\u307F\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/ja/commands/ds",children:"ds"})}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"1452"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,s.jsx)(e.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u66F4\u65B0\u3059\u308B\u30B7\u30B9\u30C6\u30E0\u5909\u6570"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var d=t(667294);let s={},r=d.createContext(s);function c(n){let e=d.useContext(r);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);