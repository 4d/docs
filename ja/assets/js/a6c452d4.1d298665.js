"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5346"],{225347:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"ViewPro/commands/vp-create-table","title":"VP CREATE TABLE","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-create-table.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-create-table","permalink":"/docs/ja/20-R8/ViewPro/commands/vp-create-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-create-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-create-table","title":"VP CREATE TABLE"},"sidebar":"docs","previous":{"title":"VP Copy to object","permalink":"/docs/ja/20-R8/ViewPro/commands/vp-copy-to-object"},"next":{"title":"D","permalink":"/docs/ja/20-R8/commands-legacy/D"}}'),r=s("785893"),t=s("250065");let i={id:"vp-create-table",title:"VP CREATE TABLE"},c=void 0,d={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsxs)(n.td,{children:["\u30C6\u30FC\u30DE\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30B5\u30DD\u30FC\u30C8: ",(0,r.jsx)(n.code,{children:"bandColumn"}),", ",(0,r.jsx)(n.code,{children:"bandRows"}),", ",(0,r.jsx)(n.code,{children:"highlightFirstColumn"}),", ",(0,r.jsx)(n.code,{children:"highlightLastColumn"}),", ",(0,r.jsx)(n.code,{children:"theme"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"allowAutoExpand"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R6"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP CREATE TABLE"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text {; ",(0,r.jsx)(n.em,{children:"source"})," : Text} {; ",(0,r.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableOptions} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u8868\u7D44\u307F\u306E\u540D\u79F0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u8868\u306B\u8868\u793A\u3059\u308B\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u540D"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/classes#tableoptions",children:"cs.ViewPro.TableOptions"})}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0\u306E\u30AA\u30D7\u30B7\u30E7\u30F3"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP CREATE TABLE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u306E\u30EC\u30F3\u30B8\u5185\u306B\u8868\u7D44\u307F\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u8868\u7D44\u307F\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067\u3001\u95A2\u9023\u3059\u308B\u30C7\u30FC\u30BF\u306E\u7BA1\u7406\u3084\u5206\u6790\u3092\u3088\u308A\u7C21\u5358\u306B\u304A\u3053\u306A\u3048\u307E\u3059\u3002 \u8868\u7D44\u307F\u306F\u901A\u5E38\u3001\u95A2\u9023\u3059\u308B\u30C7\u30FC\u30BF\u3092\u884C\u3068\u5217\u306B\u542B\u307F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-data-context",children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8"})," \u3092\u5229\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(514897).Z+"",width:"1078",height:"324"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u306F\u3001\u8868\u306E\u4F5C\u6210\u5834\u6240\u3068\u3057\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tableName"})," \u306B\u306F\u3001\u8868\u7D44\u307F\u306E\u540D\u79F0\u3092\u6E21\u3057\u307E\u3059\u3002 \u540D\u79F0\u306F\u6B21\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3055\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30B7\u30FC\u30C8\u306B\u304A\u3044\u3066\u56FA\u6709\u306E\u3082\u306E\u3067\u3042\u308B"}),"\n",(0,r.jsx)(n.li,{children:"5\u6587\u5B57\u4EE5\u4E0A\u3067\u3042\u308B"}),"\n",(0,r.jsx)(n.li,{children:"\u5148\u982D\u304C\u6570\u5B57\u3067\u306A\u304F\u3001\u30B9\u30DA\u30FC\u30B9\u3092\u542B\u307E\u306A\u3044"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"source"})," \u306B\u306F\u3001\u8868\u7D44\u307F\u306B\u30C7\u30FC\u30BF\u3092\u63D0\u4F9B\u3059\u308B ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-data-context",children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8"})," \u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u8868\u3092\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u30D0\u30A4\u30F3\u30C9\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u66F4\u65B0\u3055\u308C\u308B\u3068\u3001\u8868\u306B\u8868\u793A\u3055\u308C\u308B\u30C7\u30FC\u30BF\u3082\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u3001\u5404\u8981\u7D20\u304C\u884C\u3092\u8868\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"source"})," \u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F ",(0,r.jsx)(n.em,{children:"rangeObj"})," \u304C\u5B9A\u7FA9\u3059\u308B\u30B5\u30A4\u30BA\u306E\u7A7A\u306E\u8868\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6307\u5B9A\u3055\u308C\u305F ",(0,r.jsx)(n.em,{children:"source"})," \u3092\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306B\u5B8C\u5168\u306B\u8868\u793A\u3067\u304D\u306A\u3044\u5834\u5408\u3001\u8868\u306F\u4F5C\u6210\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"options"})," \u306B\u306F\u3001\u8A2D\u5B9A\u3059\u308B\u8868\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3059\u308B ",(0,r.jsxs)(n.a,{href:"/docs/ja/20-R8/ViewPro/classes#tableoptions",children:[(0,r.jsx)(n.code,{children:"cs.ViewPro.TableOptions"})," \u30AF\u30E9\u30B9"]})," \u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"options"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u3067\u3001",(0,r.jsx)(n.em,{children:"tableColumns"})," \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u3001\u8868\u306E\u5217\u306E\u30C7\u30FC\u30BF\u69CB\u9020\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.em,{children:"tableColumns"})," \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u9577\u3055\u306F\u3001\u30EC\u30F3\u30B8\u306E\u5217\u6570\u3068\u7B49\u3057\u304F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306E\u5217\u6570\u304C ",(0,r.jsx)(n.em,{children:"tableColumns"})," \u306E\u5217\u6570\u3088\u308A\u591A\u3044\u5834\u5408\u3001\u8868\u306F\u8FFD\u52A0\u306E\u7A7A\u5217\u3067\u57CB\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306E\u5217\u6570\u304C ",(0,r.jsx)(n.em,{children:"tableColumns"})," \u306E\u5217\u6570\u3088\u308A\u5C11\u306A\u3044\u5834\u5408\u3001\u8868\u306F\u30EC\u30F3\u30B8\u306E\u5217\u6570\u306E\u307F\u3092\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"source"})," \u3092\u6E21\u3057\u306A\u304C\u3089\u3001",(0,r.jsx)(n.em,{children:"tableColumn"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u6E21\u3055\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u81EA\u52D5\u7684\u306B\u5217\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"rangeObj"})," \u306F\u30BB\u30EB\u30EC\u30F3\u30B8\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u30EC\u30F3\u30B8\u306E\u5148\u982D\u30BB\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u5217\u3092\u81EA\u52D5\u751F\u6210\u3059\u308B\u5834\u5408\u3001\u6B21\u306E\u30EB\u30FC\u30EB\u304C\u9069\u7528\u3055\u308C\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3055\u308C\u308B\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3042\u308B\u5834\u5408\u3001\u5217\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u3057\u3066\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u4F8B:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'([{ LastName: \\"Freehafer\\", FirstName: \\"Nancy\\"},{ LastName: \\"John\\", FirstName: \\"Doe\\"})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u5834\u5408\u3001\u5217\u306E\u30BF\u30A4\u30C8\u30EB\u306F ",(0,r.jsx)(n.code,{children:"LastName"})," \u3068 ",(0,r.jsx)(n.code,{children:"FirstName"})," \u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30B9\u30AB\u30E9\u30FC\u5024\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5404\u884C\u306E\u30C7\u30FC\u30BF\u3068\u3057\u3066\u6E21\u3059\u306B\u306F\u3001\u305D\u308C\u3089\u306F\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7B2C1\u30EC\u30D9\u30EB\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u5024\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u884C\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u884C\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u306B\u306F\u7A7A\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u307E\u3059\u3002 \u6700\u521D\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5024\u306E\u6570\u306B\u3088\u308A\u3001\u751F\u6210\u3055\u308C\u308B\u30AB\u30E9\u30E0\u6570\u304C\u6C7A\u5B9A\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5217\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u3057\u3066\u3001\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u884C\u306B\u304A\u3051\u308B\u30BB\u30EB\u306E\u5024\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.code,{children:"Integer"}),", ",(0,r.jsx)(n.code,{children:"Real"}),", ",(0,r.jsx)(n.code,{children:"Boolean"}),", ",(0,r.jsx)(n.code,{children:"Text"}),", ",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Null"}),", ",(0,r.jsx)(n.code,{children:"Time"})," \u307E\u305F\u306F ",(0,r.jsx)(n.code,{children:"Picture"})," \u306E\u5024\u304C\u53EF\u80FD\u3067\u3059\u3002 ",(0,r.jsx)(n.code,{children:"Time"})," \u306E\u5024\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})," \u3067\u3082\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001time \u5C5E\u6027\u3092\u542B\u3080\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u3053\u308C\u306F\u5217\u3092\u81EA\u52D5\u751F\u6210\u3059\u308B\u3068\u304D\u306B\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.em,{children:"tableColumns"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30B9\u30AB\u30E9\u30FC\u30C7\u30FC\u30BF\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u305F\u8868\u7D44\u307F\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Set a data context\nvar $data : Object\n\n$data:=New object()\n$data.people:=New collection()\n$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))\n$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))\n\n\nVP SET DATA CONTEXT("ViewProArea"; $data)\n\n// Define the columns for the table\nvar $options : cs.ViewPro.TableOptions\n\n$options:=cs.ViewPro.TableOptions.new()\n$options.tableColumns:=New collection()\n$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "First name"; "dataField"; "firstName"))\n$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Last name"; "dataField"; "lastName"))\n$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Email"; "dataField"; "email"))\n\n// Create a table from the "people" collection\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(514897).Z+"",width:"1078",height:"324"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-get-table-column-index",children:"VP Get table column index"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-remove-table",children:"VP REMOVE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},514897:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/vp-create-table-58d4f5dc15eb48b9682accf08d7b8926.png"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);