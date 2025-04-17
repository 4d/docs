"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89186"],{146674:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>E,toc:()=>l,contentTitle:()=>t});var i=JSON.parse('{"id":"FormEditor/forms","title":"Forms","description":"\u30D5\u30A9\u30FC\u30E0\u306F\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3044\u3066\u3001\u30C7\u30FC\u30BF\u306E\u5165\u529B\u30FB\u4FEE\u6B63\u30FB\u5370\u5237\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3068\u306A\u308A\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u3092\u3084\u308A\u53D6\u308A\u3057\u3001\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3057\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30B9\u30BF\u30E0\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3084\u30D1\u30EC\u30C3\u30C8\u3001\u305D\u306E\u307B\u304B\u306E\u30AB\u30B9\u30BF\u30E0\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/FormEditor/forms.md","sourceDirName":"FormEditor","slug":"/FormEditor/forms","permalink":"/docs/ja/20-R8/FormEditor/forms","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"forms","title":"Forms"},"sidebar":"docs","previous":{"title":"4D\u30E6\u30FC\u30B6\u30FC\uFF06\u30B0\u30EB\u30FC\u30D7\u306E\u7BA1\u7406","permalink":"/docs/ja/20-R8/Users/editing"},"next":{"title":"\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8","permalink":"/docs/ja/20-R8/FormEditor/stylesheets"}}'),o=n("785893"),s=n("250065");let d={id:"forms",title:"Forms"},t=void 0,E={},l=[{value:"\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B",id:"\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B",level:2},{value:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0",id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0",level:2},{value:"\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8",id:"\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8",level:2},{value:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0",id:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",id:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"\u30D5\u30A9\u30FC\u30E0\u306F\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3044\u3066\u3001\u30C7\u30FC\u30BF\u306E\u5165\u529B\u30FB\u4FEE\u6B63\u30FB\u5370\u5237\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3068\u306A\u308A\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u3092\u3084\u308A\u53D6\u308A\u3057\u3001\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3057\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30B9\u30BF\u30E0\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3084\u30D1\u30EC\u30C3\u30C8\u3001\u305D\u306E\u307B\u304B\u306E\u30AB\u30B9\u30BF\u30E0\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:n(212190).Z+"",width:"1114",height:"896"})}),"\n",(0,o.jsx)(r.p,{children:"\u307E\u305F\u3001\u4EE5\u4E0B\u306E\u6A5F\u80FD\u306B\u3088\u308A\u3001\u30D5\u30A9\u30FC\u30E0\u306F\u4ED6\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormObjects/subformOverview",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#inherited-form-name",children:"inherited forms"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B",children:"\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B"}),"\n",(0,o.jsx)(r.p,{children:"4D\u30D5\u30A9\u30FC\u30E0\u306E\u8FFD\u52A0\u3084\u5909\u66F4\u306F\u3001\u4EE5\u4E0B\u306E\u8981\u7D20\u3092\u4F7F\u3063\u3066\u304A\u3053\u306A\u3044\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4D Developer \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9:"})," ",(0,o.jsx)(r.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u307E\u305F\u306F ",(0,o.jsx)(r.strong,{children:"\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9"})," \u30A6\u30A3\u30F3\u30C9\u30A6\u304B\u3089\u65B0\u898F\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"\u30D5\u30A9\u30FC\u30E0\u30A8\u30C7\u30A3\u30BF\u30FC"}),": \u30D5\u30A9\u30FC\u30E0\u306E\u7DE8\u96C6\u306F ",(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/overview",children:"\u30D5\u30A9\u30FC\u30E0\u30A8\u30C7\u30A3\u30BF\u30FC"})})," \u3092\u4F7F\u3063\u3066\u304A\u3053\u306A\u3044\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"JSON code:"})," Create and design your forms using JSON and save the form files at the ",(0,o.jsx)(r.a,{href:"Project/architecture#sources",children:"appropriate location"}),". \u4F8B:"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0"}),"\n",(0,o.jsx)(r.p,{children:"2\u3064\u306E\u30AB\u30C6\u30B4\u30EA\u30FC\u306E\u30D5\u30A9\u30FC\u30E0\u304C\u5B58\u5728\u3057\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0"})," - \u30C6\u30FC\u30D6\u30EB\u306B\u5C5E\u3055\u306A\u3044\u72EC\u7ACB\u3057\u305F\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002 \u3053\u306E\u30BF\u30A4\u30D7\u306E\u30D5\u30A9\u30FC\u30E0\u306F\u3001\u304A\u3082\u306B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3084\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3088\u308A\u7C21\u5358\u306B OS\u6A19\u6E96\u306B\u6E96\u62E0\u3059\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0"})," - \u7279\u5B9A\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5C5E\u3057\u3066\u3044\u3066\u3001\u305D\u308C\u306B\u3088\u308A\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u57FA\u3065\u304F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u306B\u4FBF\u5229\u306A\u81EA\u52D5\u6A5F\u80FD\u306E\u6069\u6075\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u901A\u5E38\u3001\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3068\u51FA\u529B\u30D5\u30A9\u30FC\u30E0\u304C\u5225\u3005\u306B\u5B58\u5728\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u30D5\u30A9\u30FC\u30E0\u30AB\u30C6\u30B4\u30EA\u30FC\u3092\u9078\u629E\u3057\u307E\u3059\u304C\u3001\u5F8C\u304B\u3089\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,o.jsx)(r.h2,{id:"\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8",children:"\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8"}),"\n",(0,o.jsx)(r.p,{children:"\u5404\u30D5\u30A9\u30FC\u30E0\u306F\u3001\u5C11\u306A\u304F\u3068\u3082 2\u3064\u306E\u30DA\u30FC\u30B8\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"\u30DA\u30FC\u30B81: \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8868\u793A\u3055\u308C\u308B\u30E1\u30A4\u30F3\u30DA\u30FC\u30B8"}),"\n",(0,o.jsx)(r.li,{children:"\u30DA\u30FC\u30B80: \u80CC\u666F\u30DA\u30FC\u30B8\u3002\u3053\u306E\u30DA\u30FC\u30B8\u4E0A\u306B\u7F6E\u304B\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3059\u3079\u3066\u306E\u30DA\u30FC\u30B8\u3067\u8868\u793A\u3055\u308C\u307E\u3059"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"1\u3064\u306E\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u306B\u8907\u6570\u306E\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4E00\u753B\u9762\u306B\u7D0D\u307E\u308A\u304D\u3089\u306A\u3044\u6570\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u3053\u308C\u3089\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u30DA\u30FC\u30B8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u8907\u6570\u306E\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"\u3082\u3063\u3068\u3082\u91CD\u8981\u306A\u60C5\u5831\u3092\u6700\u521D\u306E\u30DA\u30FC\u30B8\u306B\u914D\u7F6E\u3057\u3001\u4ED6\u306E\u60C5\u5831\u3092\u5F8C\u308D\u306E\u30DA\u30FC\u30B8\u306B\u914D\u7F6E\u3059\u308B\u3002"}),"\n",(0,o.jsx)(r.li,{children:"\u30C8\u30D4\u30C3\u30AF\u3054\u3068\u306B\u3001\u5C02\u7528\u30DA\u30FC\u30B8\u306B\u307E\u3068\u3081\u308B\u3002"}),"\n",(0,o.jsxs)(r.li,{children:["Reduce or eliminate scrolling during data entry by setting the ",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/overview#data-entry-order",children:"entry order"}),"."]}),"\n",(0,o.jsx)(r.li,{children:"\u30D5\u30A9\u30FC\u30E0\u8981\u7D20\u306E\u5468\u308A\u306E\u7A7A\u9593\u3092\u5E83\u3052\u3001\u6D17\u7DF4\u3055\u308C\u305F\u753B\u9762\u3092\u30C7\u30B6\u30A4\u30F3\u3059\u308B\u3002"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u8907\u6570\u30DA\u30FC\u30B8\u306F\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306E\u307F\u5F79\u7ACB\u3061\u307E\u3059\u3002 \u5370\u5237\u51FA\u529B\u306B\u306F\u5411\u304D\u307E\u305B\u3093\u3002 \u30DE\u30EB\u30C1\u30DA\u30FC\u30B8\u30D5\u30A9\u30FC\u30E0\u3092\u5370\u5237\u3059\u308B\u3068\u3001\u6700\u521D\u306E\u30DA\u30FC\u30B8\u3057\u304B\u5370\u5237\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8\u6570\u306B\u306F\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u30D5\u30A9\u30FC\u30E0\u5185\u306E\u8907\u6570\u30DA\u30FC\u30B8\u4E0A\u306B\u540C\u3058\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F55\u5EA6\u3067\u3082\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u30D5\u30A9\u30FC\u30E0\u306E\u30DA\u30FC\u30B8\u6570\u304C\u591A\u304F\u306A\u308B\u307B\u3069\u3001\u30D5\u30A9\u30FC\u30E0\u306E\u8868\u793A\u306B\u8981\u3059\u308B\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u30DE\u30EB\u30C1\u30DA\u30FC\u30B8\u30D5\u30A9\u30FC\u30E0\u306B\u306F\u30011\u3064\u306E\u80CC\u666F\u30DA\u30FC\u30B8\u3068\u8907\u6570\u306E\u8868\u793A\u30DA\u30FC\u30B8\u304C\u5B58\u5728\u3057\u307E\u3059\u3002 \u80CC\u666F\u30DA\u30FC\u30B8\u4E0A\u306B\u7F6E\u304B\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3059\u3079\u3066\u306E\u8868\u793A\u30DA\u30FC\u30B8\u306B\u73FE\u308C\u307E\u3059\u304C\u3001\u305D\u308C\u3089\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9078\u629E\u3084\u7DE8\u96C6\u306F\u80CC\u666F\u30DA\u30FC\u30B8\u3067\u306E\u307F\u53EF\u80FD\u3067\u3059\u3002 \u8907\u6570\u30DA\u30FC\u30B8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u30DC\u30BF\u30F3\u30D1\u30EC\u30C3\u30C8\u3092\u80CC\u666F\u30DA\u30FC\u30B8\u306B\u7F6E\u304F\u3079\u304D\u3067\u3059\u3002 \u307E\u305F\u3001\u30DA\u30FC\u30B8\u79FB\u52D5\u30C4\u30FC\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u80CC\u666F\u30DA\u30FC\u30B8\u306B\u914D\u7F6E\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,o.jsx)(r.h2,{id:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0",children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0"}),"\n",(0,o.jsxs)(r.p,{children:['4D \u3067\u306F "\u7D99\u627F\u30D5\u30A9\u30FC\u30E0" \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u3001',(0,o.jsx)(r.em,{children:"\u30D5\u30A9\u30FC\u30E0A"})," \u306E\u5168\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C ",(0,o.jsx)(r.em,{children:"\u30D5\u30A9\u30FC\u30E0B"})," \u3067\u4F7F\u7528\u53EF\u80FD\u3067\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u5834\u5408\u3001",(0,o.jsx)(r.em,{children:"\u30D5\u30A9\u30FC\u30E0B"})," \u306F ",(0,o.jsx)(r.em,{children:"\u30D5\u30A9\u30FC\u30E0A"}),' \u304B\u3089\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092 "\u7D99\u627F" \u3057\u307E\u3059\u3002']}),"\n",(0,o.jsx)(r.p,{children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3078\u306E\u53C2\u7167\u306F\u5E38\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306E\u8981\u7D20\u304C\u5909\u66F4\u3055\u308C\u308B\u3068 (\u305F\u3068\u3048\u3070\u3001\u30DC\u30BF\u30F3\u30B9\u30BF\u30A4\u30EB)\u3001\u3053\u306E\u8981\u7D20\u3092\u4F7F\u7528\u3059\u308B\u5168\u30D5\u30A9\u30FC\u30E0\u304C\u81EA\u52D5\u7684\u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u304A\u3088\u3073\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u4E21\u65B9\u3092\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306B\u542B\u307E\u308C\u308B\u8981\u7D20\u306F\u3001\u7570\u306A\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u3067\u306E\u4F7F\u7528\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u30D5\u30A9\u30FC\u30E0\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30ED\u30FC\u30C9\u3055\u308C\u3001\u6B21\u306E\u9806\u5E8F\u3067\u7D44\u307F\u7ACB\u3066\u3089\u308C\u307E\u3059:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306E 0\u30DA\u30FC\u30B8"}),"\n",(0,o.jsx)(r.li,{children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306E 1\u30DA\u30FC\u30B8"}),"\n",(0,o.jsx)(r.li,{children:"\u958B\u304B\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u306E 0\u30DA\u30FC\u30B8"}),"\n",(0,o.jsx)(r.li,{children:"\u958B\u304B\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u306E\u30AB\u30EC\u30F3\u30C8\u30DA\u30FC\u30B8"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["This order determines the default ",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/overview#data-entry-order",children:"entry order"})," of objects in the form."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306E 0\u30DA\u30FC\u30B8\u3068 1\u30DA\u30FC\u30B8\u3060\u3051\u304C\u4ED6\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u8868\u793A\u53EF\u80FD\u3067\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u5834\u5408\u3001\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002 \u4ED6\u65B9\u3001\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u306B\u542B\u307E\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001\u4ED6\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u7D99\u627F\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066\u3001",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u540D"})," \u304A\u3088\u3073 ",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u30C6\u30FC\u30D6\u30EB"})," (\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u306E\u5834\u5408) \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u7D99\u627F\u3059\u308B\u306B\u306F ",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u30C6\u30FC\u30D6\u30EB"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3067 ",(0,o.jsx)(r.code,{children:"\\<\u306A\u3057>"}),' \u3092\u9078\u629E\u3057\u307E\u3059 (JSON \u306E\u5834\u5408\u306F " ")\u3002']}),"\n",(0,o.jsxs)(r.p,{children:["\u30D5\u30A9\u30FC\u30E0\u306E\u7D99\u627F\u3092\u3084\u3081\u308B\u306B\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u306E ",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u540D"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3067 ",(0,o.jsx)(r.code,{children:"\\<\u306A\u3057>"}),' \u30AA\u30D7\u30B7\u30E7\u30F3 (JSON\u306E\u5834\u5408\u306F " ") \u3092\u9078\u629E\u3057\u307E\u3059\u3002']}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u4EFB\u610F\u306E\u30D5\u30A9\u30FC\u30E0\u3067\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3092\u8A2D\u5B9A\u3057\u3001\u305D\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u7B2C3\u306E\u30D5\u30A9\u30FC\u30E0\u306E\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u518D\u5E30\u7684\u306A\u65B9\u6CD5\u3067\u5404\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u9023\u7D50\u3055\u308C\u307E\u3059\u3002 4D\u306F\u3001\u518D\u5E30\u7684\u30EB\u30FC\u30D7\u3092\u898B\u3064\u3051\u51FA\u3057 (\u305F\u3068\u3048\u3070\u3001[\u30C6\u30FC\u30D6\u30EB1]\u30D5\u30A9\u30FC\u30E01 \u304C [\u30C6\u30FC\u30D6\u30EB1]\u30D5\u30A9\u30FC\u30E01 \u3092\u7D99\u627F\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u5B9A\u7FA9\u3057\u3066\u3044\u308B\u3001\u3064\u307E\u308A\u81EA\u5206\u81EA\u8EAB\u3092\u7D99\u627F\u3057\u3066\u3044\u308B\u5834\u5408)\u3001\u30D5\u30A9\u30FC\u30E0\u306E\u9023\u9396\u3092\u4E2D\u65AD\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%BF%E3%82%A4%E3%83%97",children:"\u30D5\u30A9\u30FC\u30E0\u30BF\u30A4\u30D7"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D",children:"\u30D5\u30A9\u30FC\u30E0\u540D"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u30C6\u30FC\u30D6\u30EB"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D",children:"\u7D99\u627F\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u540D"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB",children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u30BF\u30A4\u30C8\u30EB"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E9%85%8D%E7%BD%AE%E3%82%92%E8%A8%98%E6%86%B6",children:"\u914D\u7F6E\u3092\u8A18\u61B6"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#%E3%82%B5%E3%83%96%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u516C\u958B"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E5%9B%BA%E5%AE%9A%E5%B9%85",children:"\u56FA\u5B9A\u5E45"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E5%B9%85-%E6%9C%80%E5%B0%8F%E5%B9%85",children:"\u6700\u5C0F\u5E45"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E5%B9%85-%E6%9C%80%E5%B0%8F%E5%B9%85",children:"\u6700\u5927\u5E45"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E5%9B%BA%E5%AE%9A%E9%AB%98%E3%81%95",children:"\u56FA\u5B9A\u9AD8\u3055"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E9%AB%98%E3%81%95-%E6%9C%80%E5%B0%8F%E9%AB%98%E3%81%95",children:"\u6700\u5C0F\u9AD8\u3055"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E9%AB%98%E3%81%95-%E6%9C%80%E5%B0%8F%E9%AB%98%E3%81%95",children:"\u6700\u5927\u9AD8\u3055"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/print#%E8%A8%AD%E5%AE%9A",children:"\u5370\u5237\u8A2D\u5B9A"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/menu#%E9%80%A3%E7%B5%90%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%90%E3%83%BC",children:"\u9023\u7D50\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%98%E3%83%83%E3%83%80%E3%83%BC",children:"\u30D5\u30A9\u30FC\u30E0\u30D8\u30C3\u30C0\u30FC"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E8%A9%B3%E7%B4%B0",children:"\u30D5\u30A9\u30FC\u30E0\u8A73\u7D30"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AF",children:"\u30D5\u30A9\u30FC\u30E0\u30D6\u30EC\u30FC\u30AF"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%95%E3%83%83%E3%82%BF%E3%83%BC",children:"\u30D5\u30A9\u30FC\u30E0\u30D5\u30C3\u30BF\u30FC"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/action#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89",children:"\u30E1\u30BD\u30C3\u30C9"})," -\n",(0,o.jsx)(r.a,{href:"/docs/ja/20-R8/FormEditor/propertiesForm#pages",children:"Pages"})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},212190:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return d}});var i=n(667294);let o={},s=i.createContext(o);function d(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);