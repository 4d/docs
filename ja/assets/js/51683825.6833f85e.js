"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35032"],{994041:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/activity-snapshot","title":"ACTIVITY SNAPSHOT","description":"ACTIVITY SNAPSHOT ( arrActivities | arrUUID ; arrStart ; arrDuration ; arrInfo {; arrDetails}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/activity-snapshot.md","sourceDirName":"commands-legacy","slug":"/commands/activity-snapshot","permalink":"/docs/ja/20-R7/commands/activity-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factivity-snapshot.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"activity-snapshot","title":"ACTIVITY SNAPSHOT","slug":"/commands/activity-snapshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"\u30C4\u30FC\u30EB","permalink":"/docs/ja/20-R7/commands/theme/Tools"},"next":{"title":"BASE64 DECODE","permalink":"/docs/ja/20-R7/commands/base64-decode"}}'),i=r("785893"),t=r("250065");let d={id:"activity-snapshot",title:"ACTIVITY SNAPSHOT",slug:"/commands/activity-snapshot",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9: ACTIVITY SNAPSHOT ( arrActivities {; *})",id:"\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9-activity-snapshot--arractivities--",level:3},{value:"\u7B2C\u4E8C\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9: ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} {; *})",id:"\u7B2C\u4E8C\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9-activity-snapshot--arruuid--arrstart--arrduration--arrinfo-arrsubop--",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"ACTIVITY SNAPSHOT"})," ( arrActivities | arrUUID ; ",(0,i.jsx)(e.em,{children:"arrStart"})," ; ",(0,i.jsx)(e.em,{children:"arrDuration"})," ; ",(0,i.jsx)(e.em,{children:"arrInfo"})," {; ",(0,i.jsx)(e.em,{children:"arrDetails"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arrActivities | arrUUID"}),(0,i.jsx)(e.td,{children:"Object array, \u30C6\u30AD\u30B9\u30C8\u914D\u5217"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsxs)(e.td,{children:["\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u8A73\u7D30\u306A\u60C5\u5831(\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u914D\u5217)",(0,i.jsx)(e.br,{}),"\u307E\u305F\u306F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E UUID(\u30C6\u30AD\u30B9\u30C8\u914D\u5217)"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arrStart"}),(0,i.jsx)(e.td,{children:"Text array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u6642\u523B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arrDuration"}),(0,i.jsx)(e.td,{children:"Integer array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6240\u8981\u6642\u9593(\u30DF\u30EA\u79D2\u5358\u4F4D)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arrInfo"}),(0,i.jsx)(e.td,{children:"Text array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8AAC\u660E\u3059\u308B\u30E9\u30D9\u30EB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"arrDetails"}),(0,i.jsx)(e.td,{children:"Object array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3068\u3001(\u3042\u308C\u3070)\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u8A73\u7D30"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"*"}),(0,i.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u6E21\u3057\u305F\u5834\u5408\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u3092\u53D6\u5F97"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"ACTIVITY SNAPSHOT"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30014D \u4E0A\u3067\u9032\u884C\u4E2D\u306E\u30C7\u30FC\u30BF\u64CD\u4F5C\u306E\u8A73\u7D30\u3092\u8A18\u8F09\u3057\u305F\u914D\u5217\u3092\u3001\u4E00\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u3001\u901A\u5E38\u9032\u6357\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306E\u60C5\u5831\u306F\u3001\u3082\u3063\u3068\u3082\u6642\u9593\u306E\u304B\u304B\u3063\u3066\u3044\u308B\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u983B\u7E41\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3(\u30AD\u30E3\u30C3\u30B7\u30E5\u66F8\u304D\u8FBC\u307F\u3084\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u306A\u3069)\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u53D6\u308B\u306E\u306B\u4F7F\u308F\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,i.jsx)(e.strong,{children:"ACTIVITY SNAPSHOT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u305F\u60C5\u5831\u306F\u30014D Server \u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u306E\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3068\u540C\u3058\u3067\u3059\u3002 ( ",(0,i.jsx)(e.em,{children:"4D Server Reference Guide"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002)"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066\u3001 ",(0,i.jsx)(e.strong,{children:"ACTIVITY SNAPSHOT"})," \u306F\u30ED\u30FC\u30AB\u30EB\u306B\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u64CD\u4F5C\u306E\u307F\u51E6\u7406\u3057\u307E\u3059(4D \u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u30014D \u30B5\u30FC\u30D0\u30FC\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u306A\u3069)\u3002\u305D\u308C\u306B\u52A0\u3048\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u3067\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u64CD\u4F5C\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u53D6\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u306B\u306F\u6700\u5F8C\u306E\u5F15\u6570\u3068\u3057\u3066\u3001 ",(0,i.jsx)(e.em,{children:"*"})," \u6F14\u7B97\u5B50\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002\u30B5\u30FC\u30D0\u30FC\u306E\u30C7\u30FC\u30BF\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u5FA9\u5143\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.em,{children:"*"})," \u6F14\u7B97\u5B50\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u304C4D\u30B5\u30FC\u30D0\u30FC\u30844D\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"ACTIVITY SNAPSHOT"})," \u30B3\u30DE\u30F3\u30C9\u3067\u306F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u914D\u5217\u306E\u307F\u3092\u4F7F\u7528\u3059\u308B\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),"\n",(0,i.jsx)(e.li,{children:"\u8907\u6570\u306E\u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9-activity-snapshot--arractivities--",children:"\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9: ACTIVITY SNAPSHOT ( arrActivities {; *})"}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306E\u8A18\u6CD5\u3067\u306F\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u306E\u5168\u3066\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u69CB\u9020\u5316\u3055\u308C\u305F\u5F62\u5F0F\u30674D \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u914D\u5217( ",(0,i.jsx)(e.em,{children:"arrActivities"})," \u5F15\u6570\u3067\u6307\u5B9A\uFF09\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002\u914D\u5217\u306E\u5404\u8981\u7D20\u306F\u3001\u4EE5\u4E0B\u306E\u69D8\u306B\u69CB\u7BC9\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306A\u3063\u3066\u3044\u307E\u3059:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 "message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 "maxValue":12321,\xa0\xa0\xa0 \xa0\xa0\xa0 "currentValue":63212,\xa0\xa0\xa0 \xa0\xa0\xa0 "interruptible:0,\xa0\xa0\xa0 \xa0\xa0\xa0 "remote":0,\xa0\xa0\xa0 \xa0\xa0\xa0 "uuid":"deadbeef",\xa0\xa0\xa0 \xa0\xa0\xa0 "taskId":xxx,\xa0\xa0\xa0 \xa0\xa0\xa0 "startTime":"2014-03-20 13:37:00:123",\xa0\xa0\xa0 \xa0\xa0\xa0 "duration":92132,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbContextInfo":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_id": xxx,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user_name": Jean,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "host_name": HAL,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_name": "CreateIndexLocal",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_uid": "DE4DB33F33F"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user4d_id ": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_version ": 123456\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbOperationDetails":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 table: "myTable"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 field: "Field_1"\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 "subOperations":[\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 {"message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ...}\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ]\xa0\xa0\xa0 },\xa0\xa0\xa0 {...}]\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u3055\u308C\u305F\u305D\u308C\u305E\u308C\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A73\u7D30\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"message"})," (\u30C6\u30AD\u30B9\u30C8): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30E9\u30D9\u30EB"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"maxValue"})," (\u6570\u5024): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u7E70\u308A\u8FD4\u3057\u306E\u56DE\u6570(\u7E70\u308A\u8FD4\u3057\u3057\u306A\u3044\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u306F-1\u304C\u8FD4\u3055\u308C\u307E\u3059)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"currentValue"})," (\u6570\u5024): \u30AB\u30EC\u30F3\u30C8\u306E\u7E70\u308A\u8FD4\u3057\u56DE\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"interruptible"})," (\u6570\u5024): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u5272\u308A\u8FBC\u307F\u53EF\u80FD\u304B\u3069\u3046\u304B(0=true, 1=false)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"remote"})," (\u6570\u5024): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u30B5\u30FC\u30D0\u30FC\u9593\u3067\u30DA\u30A2\u306B\u306A\u3063\u3066\u3044\u308B\u304B\u3069\u3046\u304B(0=true, 1=false)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"uuid"})," (\u30C6\u30AD\u30B9\u30C8): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306EUUID\u8B58\u5225\u5B50"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"taskId"})," (\u6570\u5024): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u6642\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u5185\u90E8\u8B58\u5225\u5B50"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"startTime"}),' (\u30C6\u30AD\u30B9\u30C8): "yyyy-mm-dd hh:mm:ss:mls" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u6642\u523B']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"duration"})," (\u6570\u5024): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6301\u7D9A\u6642\u9593(\u30DF\u30EA\u79D2\u5358\u4F4D)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"dbContextInfo"})," (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8): \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u7BA1\u7406\u3055\u308C\u308B\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u4FC2\u3059\u308B\u60C5\u5831\u3002\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u307E\u3059:\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"host_name"})," (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u30DB\u30B9\u30C8\u306E\u540D\u524D"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"user_name"})," (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u30BB\u30C3\u30B7\u30E7\u30F3\u306E4D\u30E6\u30FC\u30B6\u30FC\u540D"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"task_name"})," (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u540D"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"task_id"})," (\u6570\u5B57): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306EID\u756A\u53F7"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"client_uid"})," (\u6587\u5B57\u5217): \u4EFB\u610F\u3002\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EUUID"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"is_remote_context"})," (\u30D6\u30FC\u30EB\u30010 \u307E\u305F\u306F 1): \u4EFB\u610F\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u3063\u3066\u8D77\u52D5\u3055\u308C\u305F\u306E\u304B(\u50241)\u3001\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u304B\u3089\u8D77\u52D5\u3055\u308C\u305F\u306E\u304B(\u50240)\u3092\u8868\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"user4d_id"})," (\u6570\u5B57): \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5074\u306E\u30AB\u30EC\u30F3\u30C8\u306E4D\u30E6\u30FC\u30B6\u30FC\u306EID\u756A\u53F7"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"client_version"})," (\u6587\u5B57\u5217): \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E4D\u30A8\u30F3\u30B8\u30F3\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u8868\u30594\u6841\u306E\u6570\u5B57\u3002 ",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/application-version",children:"Application version"})," \u30B3\u30DE\u30F3\u30C9\u3067\u8FD4\u3055\u308C\u308B\u3082\u306E\u3068\u540C\u3058",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"\u6CE8:"})," client_uid \u3068 is_remote_context \u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30E2\u30FC\u30C9\u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002client_uid \u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u958B\u59CB\u3055\u308C\u305F\u5834\u5408\u306E\u307F\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"dbOperationDetails"})," (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8): \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u3092\u547C\u3073\u51FA\u3057\u305F\u5834\u5408\u306B\u306E\u307F\u8FD4\u3055\u308C\u307E\u3059(\u4F8B\u3048\u3070\u30AF\u30A8\u30EA\u3084\u4E26\u3079\u66FF\u3048\u306A\u3069\u304C\u76F8\u5F53\u3057\u307E\u3059)\u3002\u3053\u308C\u306F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u81EA\u8EAB\u306B\u95A2\u9023\u3059\u308B\u7279\u5B9A\u306E\u60C5\u5831\u3092\u542B\u3093\u3060\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002\u8FD4\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u5B9F\u884C\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30D7\u306B\u3088\u308A\u307E\u3059\u3002\u5177\u4F53\u7684\u306B\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F\u4EE5\u4E0B\u304C\u542B\u307E\u308C\u307E\u3059:\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"table (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D"}),"\n",(0,i.jsx)(e.li,{children:"field (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u540D\u524D"}),"\n",(0,i.jsx)(e.li,{children:"queryPlan (\u6587\u5B57\u5217): \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30AF\u30A8\u30EA\u30D7\u30E9\u30F3"}),"\n",(0,i.jsx)(e.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"subOperations"})," (\u914D\u5217): \u30AB\u30EC\u30F3\u30C8\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3(\u3042\u308C\u3070)\u3092\u542B\u3093\u3060\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u914D\u5217\u3002\u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u8981\u7D20\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u306F\u30E1\u30A4\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306A\u3044\u306E\u3082\u306E\u3068\u540C\u3058\u3067\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u4F55\u3082\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"subOperations"})," \u306F\u7A7A\u306E\u914D\u5217\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7B2C\u4E8C\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9-activity-snapshot--arruuid--arrstart--arrduration--arrinfo-arrsubop--",children:"\u7B2C\u4E8C\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9: ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} {; *})"}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306E\u8A18\u6CD5\u3067\u306F\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u306E\u5168\u3066\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u3001\u540C\u671F\u3057\u305F\u8907\u6570\u306E\u914D\u5217\u306B\u8FD4\u3055\u308C\u307E\u3059(\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u3042\u308B\u305F\u3073\u3001\u5168\u3066\u306E\u914D\u5217\u306B\u8981\u7D20\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u304D\u307E\u3059)\u3002\u8FD4\u3055\u308C\u308B\u914D\u5217\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrUUID"}),": \u305D\u308C\u305E\u308C\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3059\u308B UUID \u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059(\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306E",(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E",(0,i.jsx)(e.em,{children:"uuid"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrStart"}),": \u305D\u308C\u305E\u308C\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u6642\u523B\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059(\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306E",(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E",(0,i.jsx)(e.em,{children:"startTime"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrDuration"}),": \u305D\u308C\u305E\u308C\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6240\u8981\u6642\u9593\u304C\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u683C\u7D0D\u3055\u308C\u307E\u3059(\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306E",(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E",(0,i.jsx)(e.em,{children:"duration"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrInfo"})," : \u305D\u308C\u305E\u308C\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8AAC\u660E\u3059\u308B\u30E9\u30D9\u30EB\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059(\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306E",(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E",(0,i.jsx)(e.em,{children:"message"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrSubOp"}),' (\u4EFB\u610F): \u3053\u306E\u914D\u5217\u306E\u8981\u7D20\u306B\u306F\u3001 "subOperations" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5165\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u306F\u30AB\u30EC\u30F3\u30C8\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30D6\u51E6\u7406\u3092\u5168\u3066\u542B\u3093\u3060 object \u914D\u5217\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u30B5\u30D6\u51E6\u7406\u304C\u4F55\u3082\u306A\u3044\u5834\u5408\u3001 subOperations \u306E\u5024\u306F\u7A7A\u306E\u914D\u5217\u3068\u306A\u308A\u307E\u3059(\u7B2C\u4E00\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306E',(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,i.jsx)(e.em,{children:"subOperations"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"arrDetails"})," (\u4EFB\u610F): \u3053\u306E\u914D\u5217\u306E\u305D\u308C\u305E\u308C\u306E\u8981\u7D20\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u542B\u3080\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059:\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:'"dbContextInfo"'})," (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8): \u4E0A\u8A18\u3092\u53C2\u7167\u306E\u3053\u3068"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:'"dbOperationDetails"'})," (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8): \u4E0A\u8A18\u3092\u53C2\u7167\u306E\u3053\u3068"]}),"\n",(0,i.jsxs)(e.li,{children:['"subOperations": \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3059\u308B\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5168\u3066\u542B\u3093\u3060\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u914D\u5217\u3067\u3059\u3002\u3082\u3057\u30AB\u30EC\u30F3\u30C8\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u4F55\u3082\u306A\u3044\u5834\u5408\u3001',(0,i.jsx)(e.em,{children:"subOperations"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u306F\u7A7A\u306E\u914D\u5217\u3068\u306A\u308A\u307E\u3059(",(0,i.jsx)(e.em,{children:"arrActivities"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,i.jsx)(e.em,{children:"subOperations"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u5BFE\u5FDC\u3057\u307E\u3059)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(e.p,{children:"4D \u304B 4D\u30B5\u30FC\u30D0\u30FC\u306B\u304A\u3051\u308B\u500B\u5225\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408\u3001\u4E0B\u56F3\u306E\u69D8\u306B\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrUUID;0)\n\xa0ARRAY TEXT(arrStart;0)\n\xa0ARRAY LONGINT(arrDuration;0)\n\xa0ARRAY TEXT(arrInfo;0)\n\xa0\n\xa0Repeat\n\xa0\xa0\xa0\xa0ACTIVITY SNAPSHOT(arrUUID;arrStart;arrDuration;arrInfo)\n\xa0\xa0\xa0\xa0If(Size of array(arrUUID)>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// \u30C7\u30D0\u30C3\u30AC\u3092\u547C\u3073\u51FA\u3057\n\xa0\xa0\xa0\xa0End if\n\xa0Until(False)\xa0// \u7121\u9650\u30EB\u30FC\u30D7\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u69D8\u306A\u914D\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:r(300813).Z+"",width:"585",height:"705"})}),"\n",(0,i.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(e.td,{children:"1277"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},300813:function(n,e,r){r.d(e,{Z:function(){return s}});let s=r.p+"assets/images/pict1213741.en-fb4452c45d68e10d51b10a4a335109a6.png"},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);