"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78230"],{6847:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>c});var d=JSON.parse('{"id":"commands/license-info","title":"License info","description":"License info : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/license-info.md","sourceDirName":"commands","slug":"/commands/license-info","permalink":"/docs/ja/20-R7/commands/license-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Flicense-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"license-info","title":"License info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is license available","permalink":"/docs/ja/20-R7/commands/is-license-available"},"next":{"title":"License usage","permalink":"/docs/ja/20-R7/commands/license-usage"}}'),r=s("785893"),i=s("250065");let t={id:"license-info",title:"License info",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"License info"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u95A2\u3059\u308B\u60C5\u5831"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"License info"})," command returns an object providing detailed information about the active license."]}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u3001\u30ED\u30FC\u30AB\u30EB\u3067\u306F\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u4F7F\u7528\u3057\u306A\u30444D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408(\u4F8B: 4D \u30EA\u30E2\u30FC\u30C8\u306A\u3069)\u3001\u30B3\u30DE\u30F3\u30C9\u306FNull \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u623B\u308A\u5024\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "name": "string",\n    "key": 0,\n    "licenseNumber": "string",\n    "version": "string",\n    "attributes": ["string1", "string2"], // \u30AA\u30D7\u30B7\u30E7\u30F3\n    "userName": "string",\n    "userMail": "string",\n    "companyName": "string",\n    "platforms": ["string1", "string2"],\n    "expirationDate": { \n        // \u8A73\u7D30\u304C\u3053\u3053\u306B\u8FD4\u3055\u308C\u308B\n    }, // \u30AA\u30D7\u30B7\u30E7\u30F3\n    "renewalFailureCount": 0, // \u30AA\u30D7\u30B7\u30E7\u30F3\n    "products": [\n        { // \u305D\u308C\u305E\u308C\u306E\u767B\u9332\u3055\u308C\u305F\u30A8\u30AD\u30B9\u30D1\u30F3\u30B7\u30E7\u30F3\u30D7\u30ED\u30C0\u30AF\u30C8\u306B\u3064\u304D\u8FD4\u3055\u308C\u308B\n            "id": 0,\n            "name": "string",\n            "usedCount": 0,\n            "allowedCount": 0,\n            "rights": [\n                {\n                    "count": 0,\n                    "expirationDate": { \n                        // \u8A73\u7D30\u304C\u3053\u3053\u306B\u8FD4\u3055\u308C\u308B\n                    } // \u30AA\u30D7\u30B7\u30E7\u30F3\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u578B"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Example"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"name"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u540D"}),(0,r.jsx)(e.td,{children:'"4D Developer Professional vXX"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"key"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30C0\u30AF\u30C8\u306EID 4D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3(4D Server\u3001\u30ED\u30FC\u30AB\u30EB4D\u30014D \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306A\u3069) \u306B\u306F\u56FA\u6709\u306E\u756A\u53F7\u304C \u30DE\u30B7\u30F3\u4E0A\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5272\u308A\u632F\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u756A\u53F7\u306F\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),(0,r.jsx)(e.td,{children:"12356789"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"licenseNumber"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:'"4DDP16XXXXX1123456789"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"version"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u88FD\u54C1\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7"}),(0,r.jsx)(e.td,{children:'"16", "16R2"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"attributes"}),(0,r.jsx)(e.td,{children:"collection of strings"}),(0,r.jsx)(e.td,{children:"(\u8A72\u5F53\u3059\u308B\u5834\u5408\u3067\u3042\u308C\u3070) \u30E9\u30A4\u30BB\u30F3\u30B9\u306E\u30BF\u30A4\u30D7(\u30AA\u30D7\u30B7\u30E7\u30F3)"}),(0,r.jsx)(e.td,{children:'["application","OEM"]'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"userName"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"4D \u30B9\u30C8\u30A2\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306E\u540D\u524D"}),(0,r.jsx)(e.td,{children:'"John Smith"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"userMail"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"4D \u30B9\u30C8\u30A2\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"}),(0,r.jsxs)(e.td,{children:['"',(0,r.jsx)(e.a,{href:"mailto:john.smith@gmail.com",children:"john.smith@gmail.com"}),'"']})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"companyName"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"4D \u30B9\u30C8\u30A2\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306E\u4F1A\u793E\u540D"}),(0,r.jsx)(e.td,{children:'"Alpha Cie"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"platforms"}),(0,r.jsx)(e.td,{children:"collection of strings"}),(0,r.jsx)(e.td,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0"}),(0,r.jsx)(e.td,{children:'["macOS", "windows"]'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"expirationDate"}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"\u6709\u52B9\u671F\u9650(\u30AA\u30D7\u30B7\u30E7\u30F3)"}),(0,r.jsx)(e.td,{children:'{"day":2, "month":6, "year":2018}'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"renewalFailureCount"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u5C11\u306A\u304F\u3068\u3082\u4E00\u3064\u306E\u88FD\u54C1\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u5BFE\u3057\u3066\u81EA\u52D5\u66F4\u65B0\u306B\u5931\u6557\u3057\u305F\u56DE\u6570(\u30AA\u30D7\u30B7\u30E7\u30F3)"}),(0,r.jsx)(e.td,{children:"3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"products"}),(0,r.jsx)(e.td,{children:"Object \u306E Collection"}),(0,r.jsx)(e.td,{children:"\u88FD\u54C1\u30E9\u30A4\u30BB\u30F3\u30B9\u306E\u8A73\u7D30(\u5404\u8981\u7D20\u304C\u88FD\u54C1\u30E9\u30A4\u30BB\u30F3\u30B9\u305D\u308C\u305E\u308C\u306E\u8A73\u7D30\u3092\u8868\u3059) \u4EE5\u4E0B\u53C2\u7167\u3002"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"products"})," \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5404\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"})}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u578B"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Example"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"id"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u756A\u53F7"}),(0,r.jsxs)(e.td,{children:["\u53D6\u308A\u3046\u308B\u5024\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-license-available",children:"Is license available"})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"name"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u540D"}),(0,r.jsx)(e.td,{children:'"4D Write - 4D Write Pro"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"usedCount"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u6D88\u8CBB\u63A5\u7D9A\u6570"}),(0,r.jsx)(e.td,{children:"8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"allowedCount"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u6709\u52B9\u671F\u9650\u5185\u306B\u304A\u3044\u3066\u305D\u306E\u88FD\u54C1\u306B\u5BFE\u3057\u3066\u8A31\u53EF\u3055\u308C\u308B\u7DCF\u63A5\u7D9A\u6570"}),(0,r.jsx)(e.td,{children:"15"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rights"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Object \u306E Collection"}),(0,r.jsx)(e.td,{children:"\u88FD\u54C1\u306B\u5BFE\u3059\u308B\u6A29\u5229(\u6709\u52B9\u671F\u96501\u3064\u306B\u3064\u304D\u8981\u7D201\u3064)"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].count"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u8A31\u53EF\u3055\u308C\u305F\u63A5\u7D9A\u6570"}),(0,r.jsx)(e.td,{children:"15 (32767 \u306F\u7121\u5236\u9650\u3092\u610F\u5473\u3057\u307E\u3059)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].expirationDate"}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"\u6709\u52B9\u671F\u9650(\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u4E0A\u8A18\u306E\u3082\u306E\u3068\u540C\u3058\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8)"}),(0,r.jsx)(e.td,{children:'{"day":1, "month":11, "year":2017}'})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u73FE\u5728\u306E4D Server \u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u305F\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0var $obj : Object\n\xa0$obj:=License info\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"$obj"})," \u306B\u306F\u3001\u4E00\u4F8B\u3068\u3057\u3066\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5185\u5BB9\u304C\u8FD4\u3055\u308C\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "name": "4D Server v16 R3",\n\xa0\xa0\xa0 "key": 123456789,\n\xa0\xa0\xa0 "licenseNumber": "xxxx",\n\xa0\xa0\xa0 "version": "16R3",\n\xa0\xa0\xa0 "userName": "John DOE",\n\xa0\xa0\xa0 "userMail": "john.doe@alpha.com",\n\xa0\xa0\xa0 "companyName": "Alpha",\n\xa0\xa0\xa0 "platforms": ["macOS", "windows"],\n\xa0\xa0\xa0 "expirationDate": {"day":1, "month":1, "year":2018},\n\xa0\xa0\xa0 "products":[\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "allowedCount": 15,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 808464697,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name": "4D Write - 4D Write Pro",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 5,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":2, "year":2018}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2017}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2015} //\u5931\u52B9\u3057\u3066\u3044\u308B\u306E\u3067\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u305B\u3093\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "usedCount": 12\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {...}\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/change-licenses",children:"CHANGE LICENSES"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-license-available",children:"Is license available"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/web-get-server-info",children:"WEB Get server info"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1489"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,r.jsx)(e.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return t}});var d=s(667294);let r={},i=d.createContext(r);function t(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);