"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39697"],{373567:function(n,e,r){r.r(e),r.d(e,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/qr-set-totals-data","title":"QR SET TOTALS DATA","description":"QR SET TOTALS DATA ( area ; colNum ; breakNum ; operator | value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-totals-data.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-totals-data","permalink":"/docs/ja/20-R7/commands/qr-set-totals-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-totals-data","title":"QR SET TOTALS DATA","slug":"/commands/qr-set-totals-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET TEXT PROPERTY","permalink":"/docs/ja/20-R7/commands/qr-set-text-property"},"next":{"title":"QR SET TOTALS SPACING","permalink":"/docs/ja/20-R7/commands/qr-set-totals-spacing"}}'),d=r("785893"),t=r("250065");let l={id:"qr-set-totals-data",title:"QR SET TOTALS DATA",slug:"/commands/qr-set-totals-data",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30EA\u30B9\u30C8\u30E2\u30FC\u30C9",id:"\u30EA\u30B9\u30C8\u30E2\u30FC\u30C9",level:5},{value:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",level:5},{value:"Supported Types of Data",id:"supported-types-of-data",level:5},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(n){let e={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",operator:"operator",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR SET TOTALS DATA"})," ( ",(0,d.jsx)(e.em,{children:"area"})," ; ",(0,d.jsx)(e.em,{children:"colNum"})," ; ",(0,d.jsx)(e.em,{children:"breakNum"})," ; operator | value )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"area"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"colNum"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30AB\u30E9\u30E0\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"breakNum"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D6\u30EC\u30FC\u30AF\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"operator | value"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570, \u6587\u5B57"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30BB\u30EB\u306E\u6F14\u7B97\u5B50\u306E\u5024\u307E\u305F\u306F\u30BB\u30EB\u306E\u5185\u5BB9"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5C0F\u8A08\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(e.h5,{id:"\u30EA\u30B9\u30C8\u30E2\u30FC\u30C9",children:"\u30EA\u30B9\u30C8\u30E2\u30FC\u30C9"}),"\n",(0,d.jsx)(e.p,{children:"QR SET TOTALS DATA \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u30D6\u30EC\u30FC\u30AF (\u7DCF\u8A08\u307E\u305F\u306F\u5C0F\u8A08) \u306B\u95A2\u3059\u308B\u8A73\u7D30\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"area"}),"\u306B\u306F\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u306E\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"colNum"}),"\u306B\u306F\u30C7\u30FC\u30BF\u3092\u30BB\u30C3\u30C8\u3059\u30BB\u30EB\u306E\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"breakNum"}),"\u306B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u30BB\u30C3\u30C8\u3059\u308B\u30D6\u30EC\u30FC\u30AF\u306E\u756A\u53F7 (\u5C0F\u8A08\u307E\u305F\u306F\u7DCF\u8A08) \u3092\u6E21\u3057\u307E\u3059\u3002\u5C0F\u8A08\u306E\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"breaknum"}),"\u306B\u306F\u30BD\u30FC\u30C8\u756A\u53F7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7DCF\u8A08\u306E\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"breaknum"})," \u306B\u306F-3\u307E\u305F\u306F\u5B9A\u6570",(0,d.jsx)(e.em,{children:"qr grand total"}),"\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"operator"}),"\u306B\u306F\u3001\u30BB\u30EB\u5185\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u6F14\u7B97\u5B50\u306E\u548C\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,d.jsx)(e.operator,{children:"\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr average"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr count"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"16"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr max"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr min"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr standard deviation"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"32"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr sum"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"operator"}),"\u304C0\u306E\u5834\u5408\u3001\u6F14\u7B97\u5B50\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"value"}),"\u306B\u306F\u30BB\u30EB\u306B\u683C\u7D0D\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," ",(0,d.jsx)(e.em,{children:"operator"}),"\u3068",(0,d.jsx)(e.em,{children:"value"}),"\u306F\u76F8\u4E92\u306B\u6392\u4ED6\u7684\u306A\u5F15\u6570\u3067\u3059\u3001\u3057\u305F\u304C\u3063\u3066",(0,d.jsx)(e.em,{children:"operator"}),"\u307E\u305F\u306F",(0,d.jsx)(e.em,{children:"value"}),"\u306E\u3044\u305A\u308C\u304B\u4E00\u65B9\u3060\u3051\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u6B21\u306E\u5024\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:",(0,d.jsx)(e.br,{}),"\n- # \u2026\u30D6\u30EC\u30FC\u30AF\u307E\u305F\u306F\u5C0F\u8A08\u3092\u30C8\u30EA\u30AC\u3059\u308B\u5024\u3002",(0,d.jsx)(e.br,{}),"\n- ##S \u2026\u5408\u8A08\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##A \u2026\u5E73\u5747\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##C \u2026\u56DE\u6570\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##X \u2026\u6700\u5927\u5024\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##N \u2026\u6700\u5C0F\u5024\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##D \u2026\u6A19\u6E96\u504F\u5DEE\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n- ##xx \u2026xx\u306B\u306F\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6307\u5B9A\u3057\u3001\u305D\u306E\u756A\u53F7\u306E\u30AB\u30E9\u30E0\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u7528\u3044\u3066\u3001\u30AB\u30E9\u30E0\u306E\u5024\u3067\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30AB\u30E9\u30E0\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u7F6E\u304D\u63DB\u3048\u306F\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(e.h5,{id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",children:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9"}),"\n",(0,d.jsx)(e.p,{children:"QR SET TOTALS DATA \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u7279\u5B9A\u306E\u30BB\u30EB\u306E\u8A73\u7D30\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"area"}),"\u306B\u306F\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u306E\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"colNum"}),"\u306B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u30BB\u30EB\u306E\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"breakNum"}),"\u306B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u30BB\u30EB\u306E\u884C\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"operator"}),"\u306B\u306F\u3001\u30BB\u30EB\u5185\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u6F14\u7B97\u5B50\u306E\u548C\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059 (\u4E0A\u8A18\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"value"}),"\u306B\u306F\u30BB\u30EB\u306B\u683C\u7D0D\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u6B21\u306E\u56F3\u306F\u3001\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9\u3067\u30AB\u30E9\u30E0\u3068\u30D6\u30EC\u30FC\u30AF\u5F15\u6570\u306E\u7D44\u307F\u5408\u308F\u305B\u65B9\u306B\u3064\u3044\u3066\u793A\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:r(908646).Z+"",width:"713",height:"329"})}),"\n",(0,d.jsx)(e.h5,{id:"supported-types-of-data",children:"Supported Types of Data"}),"\n",(0,d.jsx)(e.p,{children:"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u30BF\u30A4\u30C8\u30EB",(0,d.jsx)(e.br,{}),"\n\u30BF\u30A4\u30C8\u30EB\u306F\u3001\u5F15\u6570",(0,d.jsx)(e.em,{children:"value"}),"\u3092\u7528\u3044\u3066\u6E21\u3057\u307E\u3059\u3002\u5B9F\u969B\u306E\u3068\u3053\u308D",(0,d.jsx)(e.em,{children:"value"}),"\u306B\u306F\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3001\u6B21\u306B\u793A\u3059\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u306E\u307F\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"colNum=3 breakNum=1"}),"\u304A\u3088\u3073",(0,d.jsx)(e.em,{children:"colNum=1"})," ",(0,d.jsx)(e.em,{children:"breakNum=3"})]}),"\n",(0,d.jsxs)(e.li,{children:["\u6F14\u7B97\u5B50",(0,d.jsx)(e.br,{}),"\n\u5358\u72EC\u306E\u6F14\u7B97\u5B50\u3001\u307E\u305F\u306F\u6F14\u7B97\u5B50\u306E\u7D44\u307F\u5408\u308F\u305B (\u4E0A\u56F3\u3092\u53C2\u7167) \u306F\u3001\u6B21\u306E\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"colNum"}),"=2, ",(0,d.jsx)(e.em,{children:"breakNum"}),"=2",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"colNum"}),"=3, ",(0,d.jsx)(e.em,{children:"breakNum"}),"=2",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"colNum"}),"=2, ",(0,d.jsx)(e.em,{children:"breakNum"}),"=3",(0,d.jsx)(e.br,{}),"\n\u3053\u308C\u3089\u6700\u5F8C\u306E2\u3064\u306E\u5024\u306F\u3001\u30BB\u30EB (Column 3; Row 3) \u306B\u5BFE\u3057\u3066\u3082\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30BB\u30EB (Column 2; Row 3) \u306B\u96C6\u8A08\u8A08\u7B97\u3092\u5B9A\u7FA9\u3059\u308B\u5834\u5408\u3001\u30BB\u30EB (Column 2; Row 3) \u306E\u5185\u5BB9\u306F\u5E38\u306B\u30BB\u30EB(Column 3; Row 3) \u3092\u3082\u5B9A\u7FA9\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"colNum"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"breakNum"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9853\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-get-totals-data",children:"QR GET TOTALS DATA"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"767"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},908646:function(n,e,r){r.d(e,{Z:function(){return s}});let s=r.p+"assets/images/pict31186.ja-b77ba323a8613e5285250011cf1f8ca4.png"},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var s=r(667294);let d={},t=s.createContext(d);function l(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);