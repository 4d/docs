"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72209"],{329172:function(s,n,e){e.r(n),e.d(n,{default:()=>j,frontMatter:()=>c,metadata:()=>l,assets:()=>h,toc:()=>t,contentTitle:()=>i});var l=JSON.parse('{"id":"API/ClassClass","title":"Class","description":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u3044\u3066\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C \u5B9A\u7FA9 \u3055\u308C\u3066\u3044\u308C\u3070\u3001\u305D\u308C\u306F 4D\u30E9\u30F3\u30B2\u30FC\u30B8\u74B0\u5883\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002 \u30AF\u30E9\u30B9\u3068\u306F\u3001\u305D\u308C\u81EA\u8EAB\u304C \\"Class\\" \u30AF\u30E9\u30B9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308A\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u95A2\u6570\u3092\u6301\u3061\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/API/ClassClass.md","sourceDirName":"API","slug":"/API/ClassClass","permalink":"/docs/ja/API/ClassClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FClassClass.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ClassClass","title":"Class"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/ja/API/BlobClass"},"next":{"title":"Collection","permalink":"/docs/ja/API/CollectionClass"}}'),r=e("785893"),d=e("250065");let c={id:"ClassClass",title:"Class"},i=void 0,h={},t=[{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:".isSessionSingleton",id:"issessionsingleton",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:".isShared",id:"isshared",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".isSingleton",id:"issingleton",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".me",id:"me",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4},{value:".name",id:"name",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-4",level:4},{value:".new()",id:"new",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-5",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:".superclass",id:"superclass",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-6",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C-1",level:4}];function a(s){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u3044\u3066\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%AF%E3%83%A9%E3%82%B9%E5%AE%9A%E7%BE%A9",children:"\u5B9A\u7FA9"}),' \u3055\u308C\u3066\u3044\u308C\u3070\u3001\u305D\u308C\u306F 4D\u30E9\u30F3\u30B2\u30FC\u30B8\u74B0\u5883\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002 \u30AF\u30E9\u30B9\u3068\u306F\u3001\u305D\u308C\u81EA\u8EAB\u304C "Class" \u30AF\u30E9\u30B9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308A\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u95A2\u6570\u3092\u6301\u3061\u307E\u3059\u3002']}),"\n",(0,r.jsx)(n.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#issessionsingleton",children:[(0,r.jsx)(n.strong,{children:".isSessionSingleton"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#isshared",children:[(0,r.jsx)(n.strong,{children:".isShared"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E5%85%B1%E6%9C%89%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u5171\u6709\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#issingleton",children:[(0,r.jsx)(n.strong,{children:".isSingleton"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#me",children:[(0,r.jsx)(n.strong,{children:".me"})," : 4D.Class"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.code,{children:"cs.className"})," \u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9\u306E\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#name",children:[(0,r.jsx)(n.strong,{children:".name"})," : Text"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.code,{children:"4D.Class"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u79F0\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#new",children:[(0,r.jsx)(n.strong,{children:".new"}),"( { ",(0,r.jsx)(n.em,{children:"...param"})," : any } ) : 4D.Class"]}),(0,r.jsx)(n.br,{}),"\u5BFE\u8C61\u30AF\u30E9\u30B9\u306E\u65B0\u898F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3067\u3042\u308B ",(0,r.jsx)(n.code,{children:"cs.className"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#superclass",children:[(0,r.jsx)(n.strong,{children:".superclass"})," : 4D.Class"]}),(0,r.jsx)(n.br,{}),"\u5BFE\u8C61\u30AF\u30E9\u30B9\u306E\u89AA\u30AF\u30E9\u30B9\u3092\u8FD4\u3057\u307E\u3059"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"issessionsingleton",children:".isSessionSingleton"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R7"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".isSessionSingleton"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".isSessionSingleton"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"false"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"isshared",children:".isShared"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R5"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".isShared"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".isShared"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E5%85%B1%E6%9C%89%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u5171\u6709\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"false"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"issingleton",children:".isSingleton"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R5"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".isSingleton"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".isSingleton"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"}),"\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"true"})," \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F ",(0,r.jsx)(n.code,{children:"false"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"me",children:".me"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R5"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".me"})," : 4D.Class"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".me"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001",(0,r.jsx)(n.code,{children:"cs.className"})," \u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9\u306E\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9\u304C\u524D\u3082\u3063\u3066\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u5F15\u6570\u306A\u3057\u3067\u30AF\u30E9\u30B9\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u3092\u547C\u3073\u51FA\u3057\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u65E2\u5B58\u306E\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cs.className"})," \u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"})," \u3067\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.code,{children:".me"})," \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067 ",(0,r.jsx)(n.strong,{children:"\u672A\u5B9A\u7FA9"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R3"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-4",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".name"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001",(0,r.jsx)(n.code,{children:"4D.Class"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u79F0\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u30AF\u30E9\u30B9\u540D\u306E\u5927\u6587\u5B57\u30FB\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"new",children:".new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R3"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".new"}),"( { ",(0,r.jsx)(n.em,{children:"...param"})," : any } ) : 4D.Class"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u95A2\u6570\u306B\u6E21\u3059\u5F15\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"4D.Class"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"\u30AF\u30E9\u30B9\u306E\u65B0\u898F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-5",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".new()"})," \u95A2\u6570\u306F\u3001\u5BFE\u8C61\u30AF\u30E9\u30B9\u306E\u65B0\u898F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3067\u3042\u308B ",(0,r.jsx)(n.code,{children:"cs.className"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306F\u3001",(0,r.jsxs)(n.a,{href:"/docs/ja/Concepts/classes#cs",children:[(0,r.jsx)(n.code,{children:"cs"})," \u30AF\u30E9\u30B9\u30B9\u30C8\u30A2"]})," \u306B\u5C5E\u3059\u308B\u5168\u30AF\u30E9\u30B9\u3067\u81EA\u52D5\u7684\u306B\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"param"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u6E21\u3057\u305F\u5F15\u6570\u306F\u3001\u5F53\u8A72 ",(0,r.jsx)(n.em,{children:"className"}),"\u30AF\u30E9\u30B9\u5B9A\u7FA9\u5185\u306E ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#class-constructor",children:"Class Constructor"})," \u95A2\u6570 (\u3042\u308C\u3070) \u304C\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002 \u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u95A2\u6570\u306B\u304A\u3044\u3066\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#this",children:(0,r.jsx)(n.code,{children:"This"})})," \u306F\u65B0\u898F\u306B\u4F5C\u6210\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u6CE8\u8A18",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u3059\u3067\u306B\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3055\u308C\u3066\u3044\u308B ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%88%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9"})," \u306B\u5BFE\u3057\u3066 ",(0,r.jsx)(n.code,{children:".new()"})," \u3092\u547C\u3073\u51FA\u3059\u3068\u3001\u65B0\u3057\u3044\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3067\u306F\u306A\u304F\u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5B58\u5728\u3057\u306A\u3044\u30AF\u30E9\u30B9\u3092\u5BFE\u8C61\u306B ",(0,r.jsx)(n.code,{children:".new()"})," \u3092\u547C\u3073\u51FA\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"Person \u30AF\u30E9\u30B9\u306E\u65B0\u898F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $person : cs.Person \n$person:=cs.Person.new() // \u65B0\u898F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u4F5C\u6210  \n//$person \u306F\u30AF\u30E9\u30B9\u95A2\u6570\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u3063\u3066\u3001Person\u30AF\u30E9\u30B9\u306E\u65B0\u898F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"// \u30AF\u30E9\u30B9: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n	This.firstName:=$firstname\n	This.lastName:=$lastname\n	This.age:=$age\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// \u30E1\u30BD\u30C3\u30C9\u5185\u306E\u4F7F\u7528\u4F8B\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n// $person.firstName = "John"\n// $person.lastName = "Doe"\n// $person.age = 40\n'})}),"\n",(0,r.jsx)(n.h2,{id:"superclass",children:".superclass"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R3"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".superclass"})," : 4D.Class"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-6",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".superclass"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u5BFE\u8C61\u30AF\u30E9\u30B9\u306E\u89AA\u30AF\u30E9\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30B9\u30FC\u30D1\u30FC\u30AF\u30E9\u30B9\u306F\u3001",(0,r.jsx)(n.code,{children:"4D.Class"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001\u3042\u308B\u3044\u306F ",(0,r.jsx)(n.code,{children:"cs.className"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u3044\u305A\u308C\u304B\u3067\u3059\u3002 \u89AA\u30AF\u30E9\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"null"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u306E\u30B9\u30FC\u30D1\u30FC\u30AF\u30E9\u30B9\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#class-extends-classname",children:(0,r.jsx)(n.code,{children:"Class extends <superclass>"})})," \u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u4F7F\u3063\u3066\u30AF\u30E9\u30B9\u5185\u3067\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$sup:=4D.File.superclass // Document\n$sup:=4D.Document.superclass // Object\n$sup:=4D.Object.superclass // null\n\n// `Class extends File` \u3092\u4F7F\u3063\u3066\n// MyFile \u30AF\u30E9\u30B9\u3092\u4F5C\u6210\u3057\u305F\u5834\u5408  \n$sup:=cs.MyFile.superclass // File\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u53C2\u7167:"})," ",(0,r.jsx)(n.a,{href:"/docs/ja/Concepts/classes#super",children:"Super"})]})]})}function j(s={}){let{wrapper:n}={...(0,d.a)(),...s.components};return n?(0,r.jsx)(n,{...s,children:(0,r.jsx)(a,{...s})}):a(s)}},250065:function(s,n,e){e.d(n,{Z:function(){return i},a:function(){return c}});var l=e(667294);let r={},d=l.createContext(r);function c(s){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof s?s(n):{...n,...s}},[n,s])}function i(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:c(s.components),l.createElement(d.Provider,{value:n},s.children)}}}]);