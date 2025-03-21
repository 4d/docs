"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50526"],{655394:function(n,e,d){d.r(e),d.d(e,{default:()=>x,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>j,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-action","title":"OBJECT SET ACTION","description":"OBJECT SET ACTION ( { ;} object ; action* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-action","permalink":"/docs/ja/20-R7/commands/object-set-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-action","title":"OBJECT SET ACTION","slug":"/commands/object-set-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT MOVE","permalink":"/docs/ja/20-R7/commands/object-move"},"next":{"title":"OBJECT SET AUTO SPELLCHECK","permalink":"/docs/ja/20-R7/commands/object-set-auto-spellcheck"}}'),t=d("785893"),r=d("250065");let c={id:"object-set-action",title:"OBJECT SET ACTION",slug:"/commands/object-set-action",displayed_sidebar:"docs"},i=void 0,l={},j=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"OBJECT SET ACTION"})," ( {* ;} ",(0,t.jsx)(e.em,{children:"object"})," ; ",(0,t.jsx)(e.em,{children:"action"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6642: object \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57\u5217)\u3001\u7701\u7565\u6642: object \u306F\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"object"}),(0,t.jsx)(e.td,{children:"any"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D( * \u6307\u5B9A\u6642)\u3001\u307E\u305F\u306F\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9( * \u7701\u7565\u6642)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"action"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u95A2\u9023\u4ED8\u3051\u308B\u30A2\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"OBJECT SET ACTION"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570 ",(0,t.jsx)(e.em,{children:"object"})," \u3068 ",(0,t.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u304B\u3089\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059(",(0,t.jsx)(e.em,{children:"\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u6F14\u7B97\u5B50\u3092\u6E21\u3057\u305F\u5834\u5408\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6587\u5B57\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u6642\u306B\u306F ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u3042\u308B\u3044\u306F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059(\u30D5\u30A3\u30FC\u30EB\u30C9\u3042\u308B\u3044\u306F\u5909\u6570\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F)\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"action"})," \u5F15\u6570\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u95A2\u9023\u4ED8\u3051\u305F\u3044\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8868\u3059\u30B3\u30FC\u30C9\u3092\u6587\u5B57\u5217\u3067\u6E21\u3057\u307E\u3059\u3002\u307E\u305F\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(e.em,{children:"4D\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),'\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u307E\u305F\u3001"',(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),'"\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u306E\u4E00\u3064\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_o_Object Open next URL action"}),(0,t.jsx)(e.td,{children:"38"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_o_Object Paste action"}),(0,t.jsx)(e.td,{children:"20"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak accept"}),(0,t.jsx)(e.td,{children:"accept"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak add subrecord"}),(0,t.jsx)(e.td,{children:"addSubrecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak automatic splitter"}),(0,t.jsx)(e.td,{children:"automaticSplitter"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak cancel"}),(0,t.jsx)(e.td,{children:"cancel"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak clear"}),(0,t.jsx)(e.td,{children:"clear"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak compute expressions"}),(0,t.jsx)(e.td,{children:"computeExpressions"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u5185\u306E\u5168\u3066\u306E\u52D5\u7684\u306A\u5F0F\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak copy"}),(0,t.jsx)(e.td,{children:"copy"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak cut"}),(0,t.jsx)(e.td,{children:"cut"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak database settings"}),(0,t.jsx)(e.td,{children:"databaseSettings"}),(0,t.jsx)(e.td,{children:"\u6A19\u6E96\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak delete record"}),(0,t.jsx)(e.td,{children:"deleteRecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak delete subrecord"}),(0,t.jsx)(e.td,{children:"deleteSubrecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak display subrecord"}),(0,t.jsx)(e.td,{children:"displaySubrecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak edit subrecord"}),(0,t.jsx)(e.td,{children:"editSubrecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak first page"}),(0,t.jsx)(e.td,{children:"firstPage"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak first record"}),(0,t.jsx)(e.td,{children:"firstRecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font bold"}),(0,t.jsx)(e.td,{children:"fontBold"}),(0,t.jsx)(e.td,{children:"\u592A\u5B57\u30D5\u30A9\u30F3\u30C8\u5C5E\u6027\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font color dialog"}),(0,t.jsx)(e.td,{children:"color/showDialog"}),(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font italic"}),(0,t.jsx)(e.td,{children:"fontItalic"}),(0,t.jsx)(e.td,{children:"\u30A4\u30BF\u30EA\u30C3\u30AF\u30D5\u30A9\u30F3\u30C8\u5C5E\u6027\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font linethrough"}),(0,t.jsx)(e.td,{children:"fontLinethrough"}),(0,t.jsx)(e.td,{children:"\u6253\u3061\u6D88\u3057\u7DDA\u30D5\u30A9\u30F3\u30C8\u5C5E\u6027\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font show dialog"}),(0,t.jsx)(e.td,{children:"font/showDialog"}),(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u30D4\u30C3\u30AB\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font style"}),(0,t.jsx)(e.td,{children:"fontStyle"}),(0,t.jsx)(e.td,{children:"\u6A19\u6E96\u306E\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak font underline"}),(0,t.jsx)(e.td,{children:"fontUnderline"}),(0,t.jsx)(e.td,{children:"\u4E0B\u7DDA\u30D5\u30A9\u30F3\u30C8\u5C5E\u6027\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak freeze expressions"}),(0,t.jsx)(e.td,{children:"freezeExpressions"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u5185\u306E\u5168\u3066\u306E\u52D5\u7684\u306A\u5F0F\u3092\u8A55\u4FA1\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak goto page"}),(0,t.jsx)(e.td,{children:"gotoPage"}),(0,t.jsx)(e.td,{children:'\u5F15\u6570: "?value=pageNumber"'})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak last page"}),(0,t.jsx)(e.td,{children:"lastPage"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak last record"}),(0,t.jsx)(e.td,{children:"lastRecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak msc"}),(0,t.jsx)(e.td,{children:"msc"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.em,{children:"Maintenance & Security Center"})," \u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u8868\u793A\u3057\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak next page"}),(0,t.jsx)(e.td,{children:"nextPage"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak next record"}),(0,t.jsx)(e.td,{children:"nextRecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak none"}),(0,t.jsx)(e.td,{children:'""'}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak open back url"}),(0,t.jsx)(e.td,{children:"openBackURL"}),(0,t.jsx)(e.td,{children:"Web\u30A8\u30EA\u30A2\u5185\u306B\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u305F\u30D6\u30E9\u30A6\u30B6\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3067\u524D\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305FURL\u3092\u958B\u304D\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak open forward url"}),(0,t.jsx)(e.td,{children:"openForwardURL"}),(0,t.jsx)(e.td,{children:"Web\u30A8\u30EA\u30A2\u5185\u306B\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u305F\u30D6\u30E9\u30A6\u30B6\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u3067\u306E\u6B21\u306EURL\u3092\u958B\u304D\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak paste"}),(0,t.jsx)(e.td,{children:"paste"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak previous page"}),(0,t.jsx)(e.td,{children:"previousPage"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak previous record"}),(0,t.jsx)(e.td,{children:"previousRecord"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak quit"}),(0,t.jsx)(e.td,{children:"quit"}),(0,t.jsx)(e.td,{children:'"\u3088\u308D\u3057\u3044\u3067\u3059\u304B?" \u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u3001\u78BA\u5B9A\u304C\u767A\u751F\u3057\u305F\u30894D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002'})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak redo"}),(0,t.jsx)(e.td,{children:"redo"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak refresh current url"}),(0,t.jsx)(e.td,{children:"refreshCurrentURL"}),(0,t.jsx)(e.td,{children:"Web\u30A8\u30EA\u30A2\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak return to design mode"}),(0,t.jsx)(e.td,{children:"design"}),(0,t.jsx)(e.td,{children:"4D\u30C7\u30B6\u30A4\u30F3\u74B0\u5883\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u3068\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u6700\u524D\u9762\u306B\u6301\u3063\u3066\u304D\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak select all"}),(0,t.jsx)(e.td,{children:"selectAll"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak show clipboard"}),(0,t.jsx)(e.td,{children:"showClipboard"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak show reference"}),(0,t.jsx)(e.td,{children:"visibleReferences"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u5185\u306E\u5168\u3066\u306E\u52D5\u7684\u306A\u5F0F\u3092\u53C2\u7167\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak stop loading url"}),(0,t.jsx)(e.td,{children:"stopLoadingURL"}),(0,t.jsx)(e.td,{children:"Web\u30A8\u30EA\u30A2\u5185\u306E\u30AB\u30EC\u30F3\u30C8\u306EURL\u306E\u30DA\u30FC\u30B8\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u3092\u4E2D\u6B62\u3057\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak undo"}),(0,t.jsx)(e.td,{children:"undo"}),(0,t.jsx)(e.td,{children:"\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\u5E38\u306B\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u30EC\u30AC\u30B7\u30FC\u30B3\u30F3\u30C6\u30F3\u30C4(\u30C6\u30FC\u30DE\u5185\u3067 _o_ \u306E\u63A5\u982D\u8F9E\u304C\u3064\u3044\u3066\u3044\u308B\u3082\u306E)\u306F4D v16 R3\u4EE5\u964D\u306F\u5EC3\u6B62\u4E88\u5B9A\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u3053\u308C\u3089\u306F\u4E92\u63DB\u6027\u306E\u305F\u3081\u306B\u30B5\u30DD\u30FC\u30C8\u306F\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(e.p,{children:["\u30DC\u30BF\u30F3\u306E\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092",(0,t.jsx)(e.strong,{children:"OK"}),"\u306B\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0OBJECT SET ACTION(*;"bValidate";ak accept)\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/object-get-action",children:"OBJECT Get action"})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1259"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return i},a:function(){return c}});var s=d(667294);let t={},r=s.createContext(t);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);