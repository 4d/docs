"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84796"],{865352:function(n,e,d){d.r(e),d.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>a,contentTitle:()=>E});var s=JSON.parse('{"id":"commands-legacy/receive-record","title":"RECEIVE RECORD","description":"RECEIVE RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/receive-record.md","sourceDirName":"commands-legacy","slug":"/commands/receive-record","permalink":"/docs/ja/commands/receive-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"receive-record","title":"RECEIVE RECORD","slug":"/commands/receive-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE PACKET","permalink":"/docs/ja/commands/receive-packet"},"next":{"title":"RECEIVE VARIABLE","permalink":"/docs/ja/commands/receive-variable"}}'),r=d("785893"),c=d("250065");let i={id:"receive-record",title:"RECEIVE RECORD",slug:"/commands/receive-record",displayed_sidebar:"docs"},E=void 0,t={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"RECEIVE RECORD"})," {( ",(0,r.jsx)(e.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"aTable"}),(0,r.jsx)(e.td,{children:"Table"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u3057\u305F\u5834\u5408\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["RECEIVE RECORD\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u958B\u3044\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089",(0,r.jsx)(e.em,{children:"table"}),"\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3057\u307E\u3059\u3002\u53D7\u4FE1\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"}),"\u3067\u9001\u4FE1\u3057\u305F\u3082\u306E\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002RECEIVE RECORD\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001",(0,r.jsx)(e.em,{children:"table"}),"\u306B\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u304C\u81EA\u52D5\u3067\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u30EC\u30B3\u30FC\u30C9\u3092\u6B63\u3057\u304F\u53D7\u4FE1\u3057\u305F\u6642\u70B9\u3067\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/save-record",title:"SAVE RECORD",children:"SAVE RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5B8C\u5168\u306A\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u30EC\u30B3\u30FC\u30C9\u306B\u3042\u308B\u3044\u306F\u30EC\u30B3\u30FC\u30C9\u3068\u3068\u3082\u306B\u683C\u7D0D\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u3084BLOB\u3082\u53D7\u4FE1\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u91CD\u8981"}),": ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," \u3068 RECEIVE RECORD\u3092\u4F7F\u7528\u3057\u3066\u30EC\u30B3\u30FC\u30C9\u304C\u9001\u53D7\u4FE1\u3055\u308C\u308B\u5834\u5408\u3001\u9001\u4FE1\u5143\u3068\u9001\u4FE1\u5148\u306E\u30C6\u30FC\u30D6\u30EB\u69CB\u9020\u306F\u4E92\u63DB\u6027\u306E\u3042\u308B\u3082\u306E\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u4E92\u63DB\u6027\u304C\u306A\u3044\u5834\u5408\u3001RECEIVE RECORD\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u66424D\u304C\u30C6\u30FC\u30D6\u30EB\u5B9A\u7FA9\u306B\u5FDC\u3058\u3066\u5024\u3092\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3059\u308B\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u958B\u304B\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,r.jsx)(e.a,{href:"/docs/ja/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/append-document",title:"Append document",children:"Append document"})," \u307E\u305F\u306F ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/create-document",title:"Create document",children:"Create document"}),"\u3067\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u3001RECEIVE RECORD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["RECEIVE RECORD\u306E\u5B9F\u884C\u4E2D\u3001Ctrl-Alt-Shift (Windows) \u307E\u305F\u306FCommand-Option-Shift (Macintosh) \u3092\u62BC\u3057\u3066\u3001\u53D7\u4FE1\u3092\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4E2D\u65AD\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u30A8\u30E9\u30FC-9994\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u308A\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u901A\u5E38\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u7D4C\u7531\u3067\u306E\u901A\u4FE1\u306E\u5834\u5408\u306B\u306E\u307F\u3001\u53D7\u4FE1\u306E\u4E2D\u65AD\u51E6\u7406\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u4F5C\u6210\u3084\u3001\u7570\u306A\u308B\u5834\u6240\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u540C\u3058\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9593\u3067\u30C7\u30FC\u30BF\u3092\u3084\u308A\u53D6\u308A\u3059\u308B\u969B\u306B\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),", ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"}),", ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})," \u305D\u3057\u3066 RECEIVE RECORD\u30B3\u30DE\u30F3\u30C9\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u7528\u3059\u308B\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002",(0,r.jsx)(e.a,{href:"/docs/ja/commands/export-text",title:"EXPORT TEXT",children:"EXPORT TEXT"})," \u3084 ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/import-text",title:"IMPORT TEXT",children:"IMPORT TEXT"}),"\u7B49\u306E\u8AAD\u307F\u8FBC\u307F/\u66F8\u304D\u51FA\u3057\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3057\u3066\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9593\u3067\u30C7\u30FC\u30BF\u4EA4\u63DB\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u30C7\u30FC\u30BF\u4E2D\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u3084\u30EA\u30EC\u30FC\u30C8\u30C6\u30FC\u30D6\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," \u3068 RECEIVE RECORD\u3092\u4F7F\u3046\u65B9\u304C\u306F\u308B\u304B\u306B\u4FBF\u5229\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B\u3048\u3070\u30014D\u30684D Write\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30B7\u30B9\u30C6\u30E0\u3092\u8003\u3048\u3066\u307F\u307E\u3059\u3002\u5225\u3005\u306E\u5834\u6240\u306B\u3044\u308B\u8907\u6570\u306E\u88FD\u4F5C\u8005\u304C\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u3001\u7570\u306A\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9593\u3067\u30C7\u30FC\u30BF\u3092\u3084\u308A\u53D6\u308A\u3059\u308B\u7C21\u5358\u306A\u65B9\u6CD5\u304C\u5FC5 \u8981\u3068\u306A\u308A\u307E\u3057\u305F\u3002\u4EE5\u4E0B\u306E\u56F3\u306F\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u7C21\u5358\u306B\u8868\u308F\u3057\u305F\u3082\u306E\u3067\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:d(631243).Z+"",width:"434",height:"295"})}),"\n",(0,r.jsxs)(e.p,{children:["\u30C6\u30FC\u30D6\u30EB*[Commands]",(0,r.jsx)(e.em,{children:"\u306B\u306F\u3001\u5404\u30B3\u30DE\u30F3\u30C9\u3084\u30C8\u30D4\u30C3\u30AF\u306B\u95A2\u3059\u308B\u8AAC\u660E\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB"}),"[CM US Params]",(0,r.jsx)(e.em,{children:"\u304A\u3088\u3073"}),"[CM FR Params]",(0,r.jsx)(e.em,{children:"\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u82F1\u8A9E\u7248\u307E\u305F\u306F\u30D5\u30E9\u30F3\u30B9\u8A9E\u7248\u306E\u5404\u30B3\u30DE\u30F3\u30C9\u306B\u5BFE\u3059\u308B\u5F15\u6570\u306E\u30EA\u30B9\u30C8\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u307E\u305F\u3001\u30C6\u30FC\u30D6\u30EB"}),"[CM See Also]",(0,r.jsx)(e.em,{children:"\u306B\u306F\u3001\u5404\u30B3\u30DE\u30F3\u30C9\u306B\u5BFE\u3059\u308B\u53C2\u7167\u3068\u3057\u3066\u30EA\u30B9\u30C8\u3055\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u304C\u7D0D\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9593\u3067\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u3084\u308A\u53D6\u308A\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001"}),"[Commands]*\u30EC\u30B3\u30FC\u30C9\u3068\u305D\u308C\u306B\u30EA\u30EC\u30FC\u30C8\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"}),"\u3068RECEIVE RECORD\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u3055\u3089\u306B",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),"\u3068",(0,r.jsx)(e.a,{href:"/docs/ja/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u8AAD\u307F\u8FBC\u307F\uFF0F\u66F8\u304D\u51FA\u3057\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30BF\u30B0\u3092\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u66F8\u304D\u51FA\u3057\u3092\u5B9F\u884C\u3059\u308B\u7C21\u7565\u5316\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// CM_EXPORT_SEL \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\xa0// \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F [Commands] \u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u51E6\u7406\u5BFE\u8C61\u3068\u3059\u308B\n\xa0\n\xa0SET CHANNEL(12;"")\xa0// \u30E6\u30FC\u30B6\u306B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u4F5C\u6210\u3055\u305B\u3001\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u958B\u304F\n\xa0If(OK=1)\n\xa0\xa0// \u5185\u5BB9\u3092\u793A\u3059\u30BF\u30B0\u3092\u5909\u6570\u3067\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u6307\u5B9A\u3059\u308B\n\xa0\xa0// Note: BUILD_LANG \u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306F\u9001\u4FE1\u3059\u308B\u30C7\u30FC\u30BF\u306E\u8A00\u8A9E\u3001US (English) \u307E\u305F\u306F FR (French)\u3092\u793A\u3059\n\xa0\xa0\xa0\xa0$vsTag:="4DV6COMMAND"+BUILD_LANG\n\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0// \u66F8\u304D\u51FA\u3059 [Commands] \u30EC\u30B3\u30FC\u30C9\u6570\u3092\u793A\u3059\u5909\u6570\u3092\u9001\u4FE1\n\xa0\xa0\xa0\xa0$vlNbCmd:=Records in selection([Commands])\n\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbCmd)\n\xa0\xa0\xa0\xa0FIRST RECORD([Commands])\n\xa0\xa0// \u30B3\u30DE\u30F3\u30C9\u3054\u3068\u306B\n\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\n\xa0\xa0// [Commands] \u30EC\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([Commands])\n\xa0\xa0// \u30EA\u30EC\u30FC\u30C8\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u9078\u629E\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Commands])\n\xa0\xa0// \u30E9\u30F3\u30B2\u30FC\u30B8\u3054\u3068\u306B\u3001\u5F15\u6570\u306E\u6570\u3092\u3057\u3081\u3059\u5909\u6570\u3092\u9001\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbParm)\n\xa0\xa0// parameter \u30EC\u30B3\u30FC\u30C9\u304C\u3042\u308C\u3070\u9001\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlParm;1;$vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// "See Also"\u306E\u6570\u3092\u793A\u3059\u5909\u6570\u3092\u9001\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbSee:=Records in selection([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbSee)\n\xa0\xa0// [See Also] \u30EC\u30B3\u30FC\u30C9\u304C\u3042\u308C\u3070\u9001\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlSee;1;$vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// \u6B21\u306E[Commands] \u30EC\u30B3\u30FC\u30C9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Commands])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u3092\u5B9F\u884C\u3059\u308B\u7C21\u7565\u5316\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// CM_IMPORT_SEL \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\n\xa0SET CHANNEL(10;"")\xa0// \u30E6\u30FC\u30B6\u306B\u8AAD\u307F\u8FBC\u3080\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9078\u629E\u3055\u305B\u308B\n\xa0If(OK=1)\xa0// \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u958B\u304B\u308C\u308C\u3070\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\xa0// \u30BF\u30B0\u5909\u6570\u3092\u8AAD\u307F\u8FBC\u3080\n\xa0\xa0\xa0\xa0If($vsTag="4DV6COMMAND@")\xa0// \u6B63\u3057\u3044\u30BF\u30B0\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u304B\u30C1\u30A7\u30C3\u30AF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CurLang:=Substring($vsTag;Length($vsTag)-1)\xa0// \u30BF\u30B0\u304B\u3089\u30E9\u30F3\u30B2\u30FC\u30B8\u3092\u53D6\u308A\u51FA\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($CurLang="US")&NBSP;|&NBSP;($CurLang="FR"))\xa0// \u6709\u52B9\u306A\u30E9\u30F3\u30B2\u30FC\u30B8\u306A\u3089\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbCmd)\xa0// \u3044\u304F\u3064\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u304B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbCmd>0)\xa0// 1\u3064\u4EE5\u4E0A\u5B58\u5728\u3059\u308C\u3070\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\xa0// \u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F [Commands] \u30EC\u30B3\u30FC\u30C9\u6BCE\u306B\n\xa0\xa0// \u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD([Commands])\n\xa0\xa0// \u65B0\u898F\u30EC\u30B3\u30FC\u30C9\u307E\u305F\u306F\u65E2\u5B58\u306E\u30EC\u30B3\u30FC\u30C9\u3078\u306E\u4E0A\u66F8\u304D\u3092\u4FDD\u5B58\u3059\u308B\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u306E\u547C\u3073\u51FA\u3057\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_CMD($CurLang)\n\xa0\xa0// \u30D1\u30E9\u30E1\u30BF\u6570\u306E\u8AAD\u307F\u8FBC\u307F\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbParm>=0)\n\xa0\xa0// RECEIVE RECORD\u3092\u4F7F\u7528\u3057\u3066\u65B0\u898F\u30EC\u30B3\u30FC\u30C9\u307E\u305F\u306F\u65E2\u5B58\u306E\n\xa0\xa0// \u30EC\u30B3\u30FC\u30C9\u3078\u306E\u4E0A\u66F8\u304D\u3092\u4FDD\u5B58\u3059\u308B\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u306E\u547C\u3073\u51FA\u3057\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_PARM($vlNbParm;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// "See Also"\u306E\u6570\u3092\u8AAD\u307F\u8FBC\u307F\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbSee>0)\n\xa0\xa0// RECEIVE RECORD\u3092\u4F7F\u7528\u3057\u3066\u65B0\u898F\u30EC\u30B3\u30FC\u30C9\u307E\u305F\u306F\n\xa0\xa0// \u65E2\u5B58\u306E\u30EC\u30B3\u30FC\u30C9\u3078\u306E\u4E0A\u66F8\u304D\u3092\u4FDD\u5B58\u3059\u308B\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u306E\u547C\u3073\u51FA\u3057\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_SEEA($vlNbSee;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u3053\u306E\u66F8\u304D\u51FA\u3057\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E\u30B3\u30DE\u30F3\u30C9\u6570\u304C\u7121\u52B9\u3067\u3059\u3002")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u3053\u306E\u66F8\u304D\u51FA\u3057\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u8A00\u8A9E\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u3053\u308C\u306F\u30B3\u30DE\u30F3\u30C9\u66F8\u304D\u51FA\u3057\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9589\u3058\u308B\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u30C7\u30FC \u30BF\u53D7\u4FE1\u4E2D\u306B\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306E\u8A55\u4FA1\u3082\u884C\u308F\u305A\u3001\u307E\u305F\u30A8\u30E9\u30FC\u306E\u691C\u51FA\u3082\u884C\u3063\u3066\u3044\u306A\u3044\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3057\u304B\u3057\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u305D\u306E\u3082\u306E\u3092\u8868\u308F\u3059\u5909\u6570\u3092\u30C9\u30AD\u30E5\u30E1 \u30F3\u30C8\u306B\u4FDD\u5B58\u3059\u308B\u305F\u3081\u3001\u3053\u308C\u3089\u306E\u5909\u6570\u304C\u3044\u3063\u305F\u3093\u53D7\u4FE1\u3055\u308C\u610F\u5473\u3092\u6301\u3064\u5834\u5408\u306B\u306F\u3001\u30A8\u30E9\u30FC\u306E\u53EF\u80FD\u6027\u306F\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u30E6\u30FC\u30B6\u304C\u8AA4\u3063\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u30AA\u30FC\u30D7\u30F3 \u3057\u305F\u5834\u5408\u3001\u3053\u306E\u51E6\u7406\u306F\u6700\u521D\u306E\u5224\u5B9A\u5F0F\u3067\u5373\u5EA7\u306B\u4E2D\u65AD\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(e.p,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3059\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-record",children:"SEND RECORD"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"79"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(e.td,{children:"OK\u3001error"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},631243:function(n,e,d){d.d(e,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(n,e,d){d.d(e,{Z:function(){return E},a:function(){return i}});var s=d(667294);let r={},c=s.createContext(r);function i(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function E(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);