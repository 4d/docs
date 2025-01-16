"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96255"],{809576:function(n,e,d){d.r(e),d.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>t});var s=JSON.parse('{"id":"Concepts/number","title":"\u6570\u5024(\u5B9F\u6570\u3001\u6574\u6570)","description":"\u6570\u5024\u3068\u306F\u3001\u4EE5\u4E0B\u3092\u793A\u3059\u7DCF\u79F0\u3067\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/ja/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"number","title":"\u6570\u5024(\u5B9F\u6570\u3001\u6574\u6570)"},"sidebar":"docs","previous":{"title":"Null \u3068 \u672A\u5B9A\u7FA9","permalink":"/docs/ja/Concepts/null-undefined"},"next":{"title":"Object","permalink":"/docs/ja/Concepts/object"}}'),r=d("785893"),i=d("250065");let l={id:"number",title:"\u6570\u5024(\u5B9F\u6570\u3001\u6574\u6570)"},t=void 0,c={},h=[{value:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",id:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",level:2},{value:"\u6570\u5024\u6F14\u7B97\u5B50",id:"\u6570\u5024\u6F14\u7B97\u5B50",level:2},{value:"\u30E2\u30B8\u30E5\u30FC\u30ED",id:"\u30E2\u30B8\u30E5\u30FC\u30ED",level:3},{value:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",id:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",level:3},{value:"\u5B9F\u6570\u306E\u6BD4\u8F03",id:"\u5B9F\u6570\u306E\u6BD4\u8F03",level:3},{value:"\u512A\u5148\u9806\u4F4D",id:"\u512A\u5148\u9806\u4F4D",level:3},{value:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",id:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",level:2},{value:"\u6CE8\u8A18",id:"\u6CE8\u8A18",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3}];function x(n){let e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u6570\u5024\u3068\u306F\u3001\u4EE5\u4E0B\u3092\u793A\u3059\u7DCF\u79F0\u3067\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5B9F\u6570\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u307E\u305F\u306F\u5F0F\u3002 \u5B9F\u6570\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u7BC4\u56F2\u306F\u3001\xb11.7e\xb1308 (\u6709\u52B9\u6570\u5B5713\u6841) \u3067\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u306E\u5909\u6570\u307E\u305F\u306F\u5F0F\u3002 \u6574\u6570\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u7BC4\u56F2\u306F -2^31..(2^31)-1 \u3067\u3059(4-\u30D0\u30A4\u30C8\u6574\u6570\u3001\u5225\u540D",(0,r.jsx)(e.em,{children:"Long"})," \u307E\u305F\u306F ",(0,r.jsx)(e.em,{children:"Longint"}),")\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:[(0,r.jsxs)(e.p,{children:["\u901A\u5E38\u3001\u6574\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"Long"})," \u3092\u6271\u3044\u307E\u3059(4-\u30D0\u30A4\u30C8\u6574\u6570)\u3002 \u901A\u5E38\u3001\u6574\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"Long"})," \u3092\u6271\u3044\u307E\u3059(4-\u30D0\u30A4\u30C8\u6574\u6570)\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u6574\u6570\u304C",(0,r.jsx)(e.em,{children:"Shots"})," \u5024(2-\u30D0\u30A4\u30C8\u6574\u6570)\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u5834\u5408\u304C\u4E8C\u3064\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u969B\u3001\u7BC4\u56F2\u306F-32,768..32,767 (2^15..(2^15)-1) \u3068\u306A\u308A\u307E\u3059: \u901A\u5E38\u3001\u6574\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"Long"})," \u3092\u6271\u3044\u307E\u3059(4-\u30D0\u30A4\u30C8\u6574\u6570)\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u6574\u6570\u304C",(0,r.jsx)(e.em,{children:"Shots"})," \u5024(2-\u30D0\u30A4\u30C8\u6574\u6570)\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u5834\u5408\u304C\u4E8C\u3064\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u969B\u3001\u7BC4\u56F2\u306F-32,768..32,767 (2^15..(2^15)-1) \u3068\u306A\u308A\u307E\u3059:"]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Integer"})," \u578B\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/array-integer",children:(0,r.jsx)(e.code,{children:"ARRAY INTEGER"})})," \u3068\u3057\u3066\u5BA3\u8A00\u3057\u305F\u914D\u5217\u306E\u8981\u7D20"]}),"\n"]}),(0,r.jsxs)(e.p,{children:["\u65E7\u5F0F\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u30014D \u30E9\u30F3\u30B2\u30FC\u30B8\u3067\u4F7F\u7528\u3055\u308C\u308B\u969B\u306B\u81EA\u52D5\u7684\u306B",(0,r.jsx)(e.em,{children:"Long"})," \u3078\u3068\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"]})]}),"\n",(0,r.jsx)(e.p,{children:"\u6570\u5024\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u3001\u7570\u306A\u308B\u6570\u5024\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306B\u4EE3\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u3068\u304D\u30014D\u304C\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u5909\u63DB\u3001\u5207\u308A\u6368\u3066\u3001\u4E38\u3081\u51E6\u7406\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5024\u304C\u7BC4\u56F2\u5916\u306E\u5834\u5408\u306B\u306F\u3001\u5909\u63DB\u306F\u6B63\u3057\u3044\u5024\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002 \u6570\u5024\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u5F0F\u306E\u4E2D\u306B\u304A\u3044\u3066\u6DF7\u5728\u3055\u305B\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",children:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB"}),"\n",(0,r.jsx)(e.p,{children:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB\u5B9A\u6570\u306F\u3001\u5B9F\u6570\u3068\u3057\u3066\u8A18\u8FF0\u3057\u307E\u3059\u3002 \u4E0B\u8A18\u306B\u6570\u5024\u5B9A\u6570\u306E\u4F8B\u3092\u3044\u304F\u3064\u304B\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:'\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5C0F\u6570\u70B9\u306F\u30B7\u30B9\u30C6\u30E0\u8A00\u8A9E\u306B\u95A2\u4FC2\u306A\u304F\u30D4\u30EA\u30AA\u30C9 (.) \u3067\u3059\u3002 \u74B0\u5883\u8A2D\u5B9A\u306E"\u5730\u57DF\u7279\u6709\u306E\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A\u3092\u4F7F\u3046" \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u30C1\u30A7\u30C3\u30AF\u304C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u81EA\u5206\u306E\u30B7\u30B9\u30C6\u30E0\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5C0F\u6570\u70B9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002'}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8CA0\u306E\u6570\u5024\u306F\u3001\u30DE\u30A4\u30CA\u30B9\u8A18\u53F7 (-) \u3092\u4ED8\u3051\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6570\u5024\u6F14\u7B97\u5B50",children:"\u6570\u5024\u6F14\u7B97\u5B50"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,r.jsx)(e.th,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.th,{children:"\u5F0F"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u52A0\u7B97 (\u8DB3\u3057\u7B97)"}),(0,r.jsx)(e.td,{children:"Number + Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"2 + 3"}),(0,r.jsx)(e.td,{children:"5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u6E1B\u7B97 (\u5F15\u304D\u7B97)"}),(0,r.jsx)(e.td,{children:"Number - Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"3 \u2013 2"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u4E57\u7B97 (\u304B\u3051\u7B97)"}),(0,r.jsx)(e.td,{children:"Number * Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"5 * 2"}),(0,r.jsx)(e.td,{children:"10"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u9664\u7B97 (\u5272\u308A\u7B97)"}),(0,r.jsx)(e.td,{children:"Number / Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"5 / 2"}),(0,r.jsx)(e.td,{children:"2.5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97"}),(0,r.jsx)(e.td,{children:"Number \\ Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"5 \\ 2"}),(0,r.jsx)(e.td,{children:"2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30E2\u30B8\u30E5\u30FC\u30ED"}),(0,r.jsx)(e.td,{children:"Number % Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"5 % 2"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u6307\u6570"}),(0,r.jsx)(e.td,{children:"Number ^ Number"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"2 ^ 3"}),(0,r.jsx)(e.td,{children:"8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u7B49\u3057\u3044"}),(0,r.jsx)(e.td,{children:"Number = Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"10 = 10"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"10 = 11"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u7570\u306A\u308B"}),(0,r.jsx)(e.td,{children:"Number # Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"10 # 11"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"10 # 10"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5927\u304D\u3044"}),(0,r.jsx)(e.td,{children:"Number > Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"11 > 10"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"10 > 11"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5C0F\u3055\u3044"}),(0,r.jsx)(e.td,{children:"Number < Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"10 < 11"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"11 < 10"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u4EE5\u4E0A"}),(0,r.jsx)(e.td,{children:"Number >= Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"11 >= 10"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"10 >= 11"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u4EE5\u4E0B"}),(0,r.jsx)(e.td,{children:"Number <= Number"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"10 <= 11"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"11 <= 10"}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u30E2\u30B8\u30E5\u30FC\u30ED",children:"\u30E2\u30B8\u30E5\u30FC\u30ED"}),"\n",(0,r.jsx)(e.p,{children:"\u30E2\u30B8\u30E5\u30FC\u30ED\u6F14\u7B97\u5B50 % \u306F\u6700\u521D\u306E\u6570\u5024\u3092 2\u756A\u76EE\u306E\u6570\u5024\u3067\u9664\u7B97\u3057\u3001\u305D\u306E\u4F59\u308A\u306E\u6574\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002 \u6B21\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"10 % 2\u306F\u30010\u3092\u8FD4\u3057\u307E\u3059\u300210 \u306F 2 \u3067\u5272\u308A\u5207\u308C\u308B\u304B\u3089\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"10 % 3\u306F\u30011\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F59\u308A\u304C 1 \u3060\u304B\u3089\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"10.5 % 2\u306F\u30010\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F59\u308A\u304C\u6574\u6570\u3067\u306F\u306A\u3044 (0.25) \u304B\u3089\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsxs)(e.p,{children:["\u30E2\u30B8\u30E5\u30FC\u30ED\u6F14\u7B97\u5B50 % \u306F\u500D\u9577\u6574\u6570\u306E\u7BC4\u56F2\u5185 (-2^31 \u304B\u3089 (2^31)-1 \u307E\u3067) \u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u6709\u52B9\u306A\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 \u7BC4\u56F2\u5916\u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u30E2\u30B8\u30E5\u30FC\u30ED\u3092\u8A08\u7B97\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/mod",children:(0,r.jsx)(e.code,{children:"Mod"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(e.h3,{id:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97"}),"\n",(0,r.jsx)(e.p,{children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97\u6F14\u7B97\u5B50 \\ \u306F\u3001\u6574\u6570\u5024\u306E\u6709\u52B9\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u5B9F\u6570\u306E\u6BD4\u8F03",children:"\u5B9F\u6570\u306E\u6BD4\u8F03"}),"\n",(0,r.jsxs)(e.p,{children:["2\u3064\u306E\u5B9F\u6570\u304C\u7B49\u3057\u3044\u304B\u3069\u3046\u304B\u3092\u6BD4\u8F03\u3059\u308B\u305F\u3081\u306B\u30014D\u30E9\u30F3\u30B2\u30FC\u30B8\u306F\u5B9F\u969B\u306B\u306F\u5DEE\u306E\u7D76\u5BFE\u5024\u3092 ",(0,r.jsx)(e.em,{children:"\u30A4\u30D7\u30B7\u30ED\u30F3\u5024"})," \u3068\u6BD4\u8F03\u3057\u307E\u3059\u3002 \u8A73\u7D30\u95A2\u3057\u3066\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,r.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u95A2\u3057\u3066\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,r.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u95A2\u3057\u3066\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,r.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["\u4E00\u8CAB\u6027\u306E\u305F\u3081\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u306F\u5B9F\u6570\u578B\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6BD4\u8F03\u3059\u308B\u969B\u306B\u306F\u5E38\u306B ",(0,r.jsx)(e.em,{children:"\u30A4\u30D7\u30B7\u30ED\u30F3\u5024"})," \u3068\u3057\u3066 10^-6 \u306E\u5024\u3092\u4F7F\u7528\u3057\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,r.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," \u306E\u8A2D\u5B9A\u3092\u8003\u616E\u3057\u307E\u305B\u3093\u3002"]})}),"\n",(0,r.jsx)(e.h3,{id:"\u512A\u5148\u9806\u4F4D",children:"\u512A\u5148\u9806\u4F4D"}),"\n",(0,r.jsx)(e.p,{children:"\u5F0F\u3092\u8A55\u4FA1\u3059\u308B\u9806\u756A\u3092\u512A\u5148\u9806\u4F4D\u3068\u547C\u3073\u307E\u3059\u3002 4D \u306B\u304A\u3051\u308B\u512A\u5148\u9806\u4F4D\u306F\u53B3\u5BC6\u306B\u5DE6\u304B\u3089\u53F3\u3067\u3001\u4EE3\u6570\u7684\u9806\u5E8F\u306F\u63A1\u7528\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308C\u306F 35 \u3092\u8FD4\u3057\u307E\u3059\u3002\u6700\u521D\u306B\u5F0F 3+4 \u306E\u7D50\u679C 7 \u3092\u6C42\u3081\u3001\u305D\u308C\u306B 5 \u3092\u4E57\u3058\u308B\u306E\u3067\u3001\u7D50\u679C\u306F 35 \u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5DE6\u304B\u3089\u53F3\u306E\u512A\u5148\u9806\u4F4D\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001\u5FC5\u305A\u30AB\u30C3\u30B3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u5F0F\u306F\u300123 \u3092\u8FD4\u3057\u307E\u3059\u3002\u30AB\u30C3\u30B3\u304C\u3042\u308B\u305F\u3081\u3001\u6700\u521D\u306B\u5F0F (4*5) \u306E\u7D50\u679C 20 \u3092\u6C42\u3081\u3001 \u305D\u308C\u306B 3 \u3092\u52A0\u3048\u3066\u3001\u7D50\u679C\u306F 23 \u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30AB\u30C3\u30B3\u306F\u3001\u4ED6\u306E\u30AB\u30C3\u30B3\u306E\u7D44\u306E\u5185\u5074\u306B\u30CD\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5F0F\u306E\u8A55\u4FA1\u304C\u6B63\u3057\u304F\u304A\u3053\u306A\u308F\u308C\u308B\u3088\u3046\u306B\u3001\u5FC5\u305A\u5404\u5DE6\u30AB\u30C3\u30B3\u306B\u5BFE\u5FDC\u3059\u308B\u53F3\u30AB\u30C3\u30B3\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30AB\u30C3\u30B3\u306E\u4E0D\u8DB3\u307E\u305F\u306F\u8AA4\u7528\u306F\u3001\u4E88\u6E2C\u3067\u304D\u306A\u3044\u7D50\u679C\u3084\u3001\u5F0F\u306E\u7121\u52B9\u5316\u306B\u3064\u306A\u304C\u308A\u307E\u3059\u3002 \u307E\u305F\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5834\u5408\u306F\u3001\u5DE6\u30AB\u30C3\u30B3\u3068\u53F3\u30AB\u30C3\u30B3\u306F\u540C\u3058\u6570\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u7D44\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u30AB\u30C3\u30B3\u306F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u3068\u3057\u3066\u691C\u51FA\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",children:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50"}),"\n",(0,r.jsx)(e.p,{children:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u306F\u3001(\u500D\u9577)\u6574\u6570\u306E\u5F0F\u3084\u5024\u306B\u5BFE\u3057\u3066\u6F14\u7B97\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u306B(\u30B7\u30E7\u30FC\u30C8)\u6574\u6570\u5024\u307E\u305F\u306F\u5B9F\u6570\u5024\u3092\u6E21\u3059\u3068\u30014D\u306F\u5024\u3092\u500D\u9577\u6574\u6570\u5024\u3068\u3057\u3066\u8A55\u4FA1\u3057\u3066\u304B\u3089\u3001\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3057\u305F\u5F0F\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u500D\u9577\u6574\u6570\u5024\u309232\u30D3\u30C3\u30C8\u306E\u914D\u5217\u3068\u8003\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D3\u30C3\u30C8\u306B\u306F\u3001\u53F3\u304B\u3089\u5DE6\u306B0",(0,r.jsx)(e.del,{children:"31\u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D3\u30C3\u30C8\u306B\u306F\u3001\u53F3\u304B\u3089\u5DE6\u306B0"}),"31\u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D3\u30C3\u30C8\u306B\u306F\u3001\u53F3\u304B\u3089\u5DE6\u306B0~31\u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u305D\u308C\u305E\u308C\u306E\u30D3\u30C3\u30C8\u306F0\u304B1\u306A\u306E\u3067\u3001\u500D\u9577\u6574\u6570\u5024\u306F32\u306E\u30D6\u30FC\u30EB\u5024\u3092\u683C\u7D0D\u3067\u304D\u308B\u5024\u3068\u8003\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 1\u306B\u7B49\u3057\u3044\u30D3\u30C3\u30C8\u306F",(0,r.jsx)(e.strong,{children:"True"})," \u30010\u306B\u7B49\u3057\u3044\u30D3\u30C3\u30C8\u306F",(0,r.jsx)(e.strong,{children:"False"})," \u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3059\u308B\u5F0F\u306F\u500D\u9577\u6574\u6570\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 Bit Test \u6F14\u7B97\u5B50\u306E\u5834\u5408\u3001\u5F0F\u306F\u4F8B\u5916\u7684\u306B\u30D6\u30FC\u30EB\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 \u6B21\u306E\u8868\u306B\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u793A\u3057\u307E\u3059: \u6B21\u306E\u8868\u306B\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u793A\u3057\u307E\u3059: \u6B21\u306E\u8868\u306B\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,r.jsx)(e.th,{children:"\u623B\u308A\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise AND"}),(0,r.jsx)(e.td,{children:"&"}),(0,r.jsx)(e.td,{children:"Long & Long"}),(0,r.jsx)(e.td,{children:"Long"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,r.jsx)(e.td,{children:"&#124"}),(0,r.jsx)(e.td,{children:"Long | Long"}),(0,r.jsx)(e.td,{children:"Long"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,r.jsx)(e.td,{children:"^ &#124"}),(0,r.jsx)(e.td,{children:"Long ^ | Long"}),(0,r.jsx)(e.td,{children:"Long"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Left Bit Shift"}),(0,r.jsx)(e.td,{children:"<<"}),(0,r.jsx)(e.td,{children:"Long << Long"}),(0,r.jsx)(e.td,{children:"Long (\u6CE8\u8A181 \u53C2\u7167)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Right Bit Shift"}),(0,r.jsx)(e.td,{children:"> >"}),(0,r.jsx)(e.td,{children:"Long >> Long"}),(0,r.jsx)(e.td,{children:"Long (\u6CE8\u8A181 \u53C2\u7167)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Set"}),(0,r.jsx)(e.td,{children:"?+"}),(0,r.jsx)(e.td,{children:"Long ?+ Long"}),(0,r.jsx)(e.td,{children:"Long (\u6CE8\u8A182 \u53C2\u7167)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Clear"}),(0,r.jsx)(e.td,{children:"?-"}),(0,r.jsx)(e.td,{children:"Long ?- Long"}),(0,r.jsx)(e.td,{children:"Long (\u6CE8\u8A182 \u53C2\u7167)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Test"}),(0,r.jsx)(e.td,{children:"??"}),(0,r.jsx)(e.td,{children:"Long ?? Long"}),(0,r.jsx)(e.td,{children:"Boolean (\u6CE8\u8A182 \u53C2\u7167)"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u6CE8\u8A18",children:"\u6CE8\u8A18"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u304C2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u53F3\u306B\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002 \u53F3\u5074\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308A\u3001\u5DE6\u5074\u306E\u65B0\u3057\u3044\u30D3\u30C3\u30C8\u306F 0 \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u6CE8\u8A18:"})," \u6B63\u306E\u6570\u3060\u3051\u3092\u8003\u3048\u308B\u3068\u3001N\u30D3\u30C3\u30C8\u53F3\u306B\u30B7\u30D5\u30C8\u3059\u308B\u3053\u3068\u306F\u30012^N\u3067\u5272\u308B\u3053\u3068\u3068\u540C\u3058\u3067\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F\u30010~31\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 0\u30D3\u30C3\u30C8\u30B7\u30D5\u30C8\u3059\u308B\u3068\u305D\u306E\u5024\u304C\u305D\u306E\u307E\u307E\u8FD4\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u300131\u30D3\u30C3\u30C8\u3088\u308A\u591A\u304F\u30B7\u30D5\u30C8\u3059\u308B\u3068\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308B\u306E\u3067\u30010x00000000\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u305D\u308C\u4EE5\u5916\u306E\u5024\u30922\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3068\u3057\u3066\u6E21\u3057\u305F\u5834\u5408\u3001\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u5024\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Bit Set"}),"\u3001",(0,r.jsx)(e.code,{children:"Bit Clear"}),"\u3001",(0,r.jsx)(e.code,{children:"Bit Test"})," \u6F14\u7B97\u3067\u306F\u30012\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F\u3001\u4F5C\u7528\u306E\u5BFE\u8C61\u3068\u306A\u308B\u30D3\u30C3\u30C8\u756A\u53F7\u3092\u793A\u3057\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F0 ~ 31\u306E\u9593\u3067\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u5F0F\u306E\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F0 ~ 31\u306E\u9593\u3067\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u5F0F\u306E\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F0 ~ 31\u306E\u9593\u3067\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u5F0F\u306E\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u8868\u306F\u3001\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u52B9\u679C\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise AND"}),(0,r.jsxs)(e.td,{children:["\u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 \u8AD6\u7406AND \u306E\u8868\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:",(0,r.jsx)(e.li,{children:"1 & 1 --\x3e 1"}),(0,r.jsx)(e.li,{children:"0 & 1 --\x3e 0"}),(0,r.jsx)(e.li,{children:"1 & 0 --\x3e 0"}),(0,r.jsx)(e.li,{children:"0 & 0 --\x3e 0"}),"\u8A00\u3044\u63DB\u3048\u308B\u3068\u3001\u7D50\u679C\u306E\u30D3\u30C3\u30C8\u306F\u4E21\u65B9\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u304C1\u3067\u3042\u308C\u30701\u3068\u306A\u308A\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306F\u7D50\u679C\u306E\u30D3\u30C3\u30C8\u306F0 \u3068\u306A\u308A\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,r.jsxs)(e.td,{children:["\u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406OR \u3067\u3059\u3002\u8AD6\u7406OR \u306E\u8868\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002:",(0,r.jsx)(e.li,{children:"1 \\"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,r.jsxs)(e.td,{children:["\u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u8AD6\u7406XOR \u3067\u3059\u3002\u8AD6\u7406XOR \u306E\u8868\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:",(0,r.jsx)(e.li,{children:"1 ^ \\"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Left Bit Shift"}),(0,r.jsxs)(e.td,{children:["\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u304C2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u5DE6\u306B\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002 \u5DE6\u5074\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308A\u3001\u53F3\u5074\u306E\u65B0\u3057\u3044\u30D3\u30C3\u30C8\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u6CE8\u8A18:"})," \u6B63\u306E\u6570\u3060\u3051\u3092\u8003\u3048\u308B\u3068\u3001N\u30D3\u30C3\u30C8\u5DE6\u306B\u30B7\u30D5\u30C8\u3059\u308B\u3053\u3068\u306F\u30012^N \u3092\u639B\u3051\u308B\u3053\u3068\u3068\u540C\u3058\u3067\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Right Bit Shift"}),(0,r.jsxs)(e.td,{children:["\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u304C2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u53F3\u306B\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002 \u53F3\u5074\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308A\u3001\u5DE6\u5074\u306E\u65B0\u3057\u3044\u30D3\u30C3\u30C8\u306F 0 \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u6CE8\u8A18:"})," \u6B63\u306E\u6570\u3060\u3051\u3092\u8003\u3048\u308B\u3068\u3001N\u30D3\u30C3\u30C8\u53F3\u306B\u30B7\u30D5\u30C8\u3059\u308B\u3053\u3068\u306F\u30012^N\u3067\u5272\u308B\u3053\u3068\u3068\u540C\u3058\u3067\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Set"}),(0,r.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u306E\u3046\u30612\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u4ED6\u306E\u30D3\u30C3\u30C8\u306F\u305D\u306E\u307E\u307E\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Clear"}),(0,r.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u306E\u3046\u30612\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u4ED6\u306E\u30D3\u30C3\u30C8\u306F\u305D\u306E\u307E\u307E\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Test"}),(0,r.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u3046\u3061\u30012\u756A\u76EE\u306E\u30D3\u30C3\u30C8\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C1\u306E\u5834\u5408\u3001true\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u3046\u3061\u30012\u756A\u76EE\u306E\u30D3\u30C3\u30C8\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C0\u306E\u5834\u5408\u3001false\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u4F8B\u984C"}),(0,r.jsx)(e.th,{children:"\u623B\u308A\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise AND"}),(0,r.jsx)(e.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,r.jsx)(e.td,{children:"0x0000FF00"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,r.jsx)(e.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,r.jsx)(e.td,{children:"0xFF00FFFF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,r.jsx)(e.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,r.jsx)(e.td,{children:"0xFF0000FF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Left Bit Shift"}),(0,r.jsx)(e.td,{children:"0x0000FFFF << 8"}),(0,r.jsx)(e.td,{children:"0x00FFFF00"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Right Bit Shift"}),(0,r.jsx)(e.td,{children:"0x0000FFFF >> 8"}),(0,r.jsx)(e.td,{children:"0x000000FF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Set"}),(0,r.jsx)(e.td,{children:"0x00000000 ?+ 16"}),(0,r.jsx)(e.td,{children:"0x00010000"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Clear"}),(0,r.jsx)(e.td,{children:"0x00010000 ?- 16"}),(0,r.jsx)(e.td,{children:"0x00000000"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit Test"}),(0,r.jsx)(e.td,{children:"0x00010000 ?? 16"}),(0,r.jsx)(e.td,{children:"true"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return t},a:function(){return l}});var s=d(667294);let r={},i=s.createContext(r);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);