"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71530"],{28055:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>j,assets:()=>h,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"Concepts/number","title":"Number (Real, Integer)","description":"\u6570\u5024\u3068\u306F\u3001\u4EE5\u4E0B\u3092\u793A\u3059\u7DCF\u79F0\u3067\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/ja/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"number","title":"Number (Real, Integer)"},"sidebar":"docs","previous":{"title":"Null \u3068 \u672A\u5B9A\u7FA9","permalink":"/docs/ja/Concepts/null-undefined"},"next":{"title":"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8","permalink":"/docs/ja/Concepts/object"}}'),d=s("785893"),i=s("250065");let r={id:"number",title:"Number (Real, Integer)"},l=void 0,h={},c=[{value:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",id:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",level:2},{value:"\u6570\u5024\u6F14\u7B97\u5B50",id:"\u6570\u5024\u6F14\u7B97\u5B50",level:2},{value:"\u30E2\u30B8\u30E5\u30FC\u30ED",id:"\u30E2\u30B8\u30E5\u30FC\u30ED",level:3},{value:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",id:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",level:3},{value:"\u5B9F\u6570\u306E\u6BD4\u8F03",id:"\u5B9F\u6570\u306E\u6BD4\u8F03",level:3},{value:"\u512A\u5148\u9806\u4F4D",id:"\u512A\u5148\u9806\u4F4D",level:3},{value:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",id:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",level:2},{value:"\u6CE8\u8A18",id:"\u6CE8\u8A18",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3}];function x(n){let e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u6570\u5024\u3068\u306F\u3001\u4EE5\u4E0B\u3092\u793A\u3059\u7DCF\u79F0\u3067\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5B9F\u6570\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u307E\u305F\u306F\u5F0F\u3002 \u5B9F\u6570\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u7BC4\u56F2\u306F\u3001\xb11.7e\xb1308 (\u6709\u52B9\u6570\u5B5713\u6841) \u3067\u3059\u3002"}),"\n",(0,d.jsxs)(e.li,{children:["Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka ",(0,d.jsx)(e.em,{children:"Long"})," or ",(0,d.jsx)(e.em,{children:"Longint"}),")."]}),"\n"]}),"\n",(0,d.jsxs)(e.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:[(0,d.jsxs)(e.p,{children:["Usually when working with Integers, you handle ",(0,d.jsx)(e.em,{children:"Long"})," values (4-byte Integer). However, there are two cases where Integers are stored as ",(0,d.jsx)(e.em,{children:"Shorts"})," values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):"]}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["Database fields with ",(0,d.jsx)(e.code,{children:"Integer"})," type,"]}),"\n",(0,d.jsxs)(e.li,{children:["Elements of arrays declared with ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/array-integer",children:(0,d.jsx)(e.code,{children:"ARRAY INTEGER"})}),"."]}),"\n"]}),(0,d.jsxs)(e.p,{children:["These legacy data types are automatically converted in ",(0,d.jsx)(e.em,{children:"Longs"})," when used in the 4D Language."]})]}),"\n",(0,d.jsx)(e.p,{children:"\u6570\u5024\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u3001\u7570\u306A\u308B\u6570\u5024\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306B\u4EE3\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u3068\u304D\u30014D\u304C\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u5909\u63DB\u3001\u5207\u308A\u6368\u3066\u3001\u4E38\u3081\u51E6\u7406\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5024\u304C\u7BC4\u56F2\u5916\u306E\u5834\u5408\u306B\u306F\u3001\u5909\u63DB\u306F\u6B63\u3057\u3044\u5024\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002 You can mix number data types in expressions."}),"\n",(0,d.jsx)(e.h2,{id:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB",children:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB"}),"\n",(0,d.jsx)(e.p,{children:"\u6570\u5024\u30EA\u30C6\u30E9\u30EB\u5B9A\u6570\u306F\u3001\u5B9F\u6570\u3068\u3057\u3066\u8A18\u8FF0\u3057\u307E\u3059\u3002 \u4E0B\u8A18\u306B\u6570\u5024\u5B9A\u6570\u306E\u4F8B\u3092\u3044\u304F\u3064\u304B\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsxs)(e.p,{children:['\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5C0F\u6570\u70B9\u306F\u30B7\u30B9\u30C6\u30E0\u8A00\u8A9E\u306B\u95A2\u4FC2\u306A\u304F\u30D4\u30EA\u30AA\u30C9 (.) \u3067\u3059\u3002 "\u5730\u57DF\u7279\u6709\u306E\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A\u3092\u4F7F\u3046" \u30AA\u30D7\u30B7\u30E7\u30F3 (',(0,d.jsx)(e.a,{href:"https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html",children:"\u30E1\u30BD\u30C3\u30C9\u30DA\u30FC\u30B8"})," \u53C2\u7167) \u306B\u30C1\u30A7\u30C3\u30AF\u304C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5C0F\u6570\u70B9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8CA0\u306E\u6570\u5024\u306F\u3001\u30DE\u30A4\u30CA\u30B9\u8A18\u53F7 (-) \u3092\u4ED8\u3051\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u6570\u5024\u6F14\u7B97\u5B50",children:"\u6570\u5024\u6F14\u7B97\u5B50"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,d.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,d.jsx)(e.th,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.th,{children:"\u5F0F"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u52A0\u7B97 (\u8DB3\u3057\u7B97)"}),(0,d.jsx)(e.td,{children:"Number + Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"2 + 3"}),(0,d.jsx)(e.td,{children:"5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u6E1B\u7B97 (\u5F15\u304D\u7B97)"}),(0,d.jsx)(e.td,{children:"Number - Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"3 \u2013 2"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u4E57\u7B97 (\u304B\u3051\u7B97)"}),(0,d.jsx)(e.td,{children:"Number * Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"5 * 2"}),(0,d.jsx)(e.td,{children:"10"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u9664\u7B97 (\u5272\u308A\u7B97)"}),(0,d.jsx)(e.td,{children:"Number / Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"5 / 2"}),(0,d.jsx)(e.td,{children:"2.5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97"}),(0,d.jsx)(e.td,{children:"Number \\ Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"5 \\ 2"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30E2\u30B8\u30E5\u30FC\u30ED"}),(0,d.jsx)(e.td,{children:"Number % Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"5 % 2"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u6307\u6570"}),(0,d.jsx)(e.td,{children:"Number ^ Number"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"2 ^ 3"}),(0,d.jsx)(e.td,{children:"8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u7B49\u3057\u3044"}),(0,d.jsx)(e.td,{children:"Number = Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"10 = 10"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"10 = 11"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u7570\u306A\u308B"}),(0,d.jsx)(e.td,{children:"Number # Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"10 # 11"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"10 # 10"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5927\u304D\u3044"}),(0,d.jsx)(e.td,{children:"Number > Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"11 > 10"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"10 > 11"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5C0F\u3055\u3044"}),(0,d.jsx)(e.td,{children:"Number < Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"10 < 11"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"11 < 10"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u4EE5\u4E0A"}),(0,d.jsx)(e.td,{children:"Number >= Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"11 >= 10"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"10 >= 11"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u4EE5\u4E0B"}),(0,d.jsx)(e.td,{children:"Number <= Number"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"10 <= 11"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"11 <= 10"}),(0,d.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u30E2\u30B8\u30E5\u30FC\u30ED",children:"\u30E2\u30B8\u30E5\u30FC\u30ED"}),"\n",(0,d.jsx)(e.p,{children:"\u30E2\u30B8\u30E5\u30FC\u30ED\u6F14\u7B97\u5B50 % \u306F\u6700\u521D\u306E\u6570\u5024\u3092 2\u756A\u76EE\u306E\u6570\u5024\u3067\u9664\u7B97\u3057\u3001\u305D\u306E\u4F59\u308A\u306E\u6574\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002 \u6B21\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"10 % 2\u306F\u30010\u3092\u8FD4\u3057\u307E\u3059\u300210 \u306F 2 \u3067\u5272\u308A\u5207\u308C\u308B\u304B\u3089\u3067\u3059\u3002"}),"\n",(0,d.jsx)(e.li,{children:"10 % 3\u306F\u30011\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F59\u308A\u304C 1 \u3060\u304B\u3089\u3067\u3059\u3002"}),"\n",(0,d.jsx)(e.li,{children:"10.5 % 2\u306F\u30010\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F59\u308A\u304C\u6574\u6570\u3067\u306F\u306A\u3044 (0.25) \u304B\u3089\u3067\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.admonition,{type:"warning",children:(0,d.jsxs)(e.p,{children:["\u30E2\u30B8\u30E5\u30FC\u30ED\u6F14\u7B97\u5B50 % \u306F\u500D\u9577\u6574\u6570\u306E\u7BC4\u56F2\u5185 (-2^31 \u304B\u3089 (2^31)-1 \u307E\u3067) \u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u6709\u52B9\u306A\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 To calculate the modulo with numbers outside of this range, use the ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/mod",children:(0,d.jsx)(e.code,{children:"Mod"})})," command."]})}),"\n",(0,d.jsx)(e.h3,{id:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97",children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97"}),"\n",(0,d.jsx)(e.p,{children:"\u500D\u9577\u6574\u6570\u3092\u8FD4\u3059\u9664\u7B97\u6F14\u7B97\u5B50 \\ \u306F\u3001\u6574\u6570\u5024\u306E\u6709\u52B9\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u5B9F\u6570\u306E\u6BD4\u8F03",children:"\u5B9F\u6570\u306E\u6BD4\u8F03"}),"\n",(0,d.jsxs)(e.p,{children:["To compare two reals for equality, the 4D language actually compares the absolute value of the difference with ",(0,d.jsx)(e.em,{children:"epsilon"}),". See the ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,d.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," command."]}),"\n",(0,d.jsx)(e.admonition,{type:"note",children:(0,d.jsxs)(e.p,{children:["For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for ",(0,d.jsx)(e.em,{children:"epsilon"})," and does not take the ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-real-comparison-level",children:(0,d.jsx)(e.code,{children:"SET REAL COMPARISON LEVEL"})})," setting into account."]})}),"\n",(0,d.jsx)(e.h3,{id:"\u512A\u5148\u9806\u4F4D",children:"\u512A\u5148\u9806\u4F4D"}),"\n",(0,d.jsx)(e.p,{children:"\u5F0F\u3092\u8A55\u4FA1\u3059\u308B\u9806\u756A\u3092\u512A\u5148\u9806\u4F4D\u3068\u547C\u3073\u307E\u3059\u3002 4D \u306B\u304A\u3051\u308B\u512A\u5148\u9806\u4F4D\u306F\u53B3\u5BC6\u306B\u5DE6\u304B\u3089\u53F3\u3067\u3001\u4EE3\u6570\u7684\u9806\u5E8F\u306F\u63A1\u7528\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u308C\u306F 35 \u3092\u8FD4\u3057\u307E\u3059\u3002\u6700\u521D\u306B\u5F0F 3+4 \u306E\u7D50\u679C 7 \u3092\u6C42\u3081\u3001\u305D\u308C\u306B 5 \u3092\u4E57\u3058\u308B\u306E\u3067\u3001\u7D50\u679C\u306F 35 \u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5DE6\u304B\u3089\u53F3\u306E\u512A\u5148\u9806\u4F4D\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001\u5FC5\u305A\u30AB\u30C3\u30B3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u5F0F\u306F\u300123 \u3092\u8FD4\u3057\u307E\u3059\u3002\u30AB\u30C3\u30B3\u304C\u3042\u308B\u305F\u3081\u3001\u6700\u521D\u306B\u5F0F (4*5) \u306E\u7D50\u679C 20 \u3092\u6C42\u3081\u3001 \u305D\u308C\u306B 3 \u3092\u52A0\u3048\u3066\u3001\u7D50\u679C\u306F 23 \u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u30AB\u30C3\u30B3\u306F\u3001\u4ED6\u306E\u30AB\u30C3\u30B3\u306E\u7D44\u306E\u5185\u5074\u306B\u30CD\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5F0F\u306E\u8A55\u4FA1\u304C\u6B63\u3057\u304F\u304A\u3053\u306A\u308F\u308C\u308B\u3088\u3046\u306B\u3001\u5FC5\u305A\u5404\u5DE6\u30AB\u30C3\u30B3\u306B\u5BFE\u5FDC\u3059\u308B\u53F3\u30AB\u30C3\u30B3\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30AB\u30C3\u30B3\u306E\u4E0D\u8DB3\u307E\u305F\u306F\u8AA4\u7528\u306F\u3001\u4E88\u6E2C\u3067\u304D\u306A\u3044\u7D50\u679C\u3084\u3001\u5F0F\u306E\u7121\u52B9\u5316\u306B\u3064\u306A\u304C\u308A\u307E\u3059\u3002 \u307E\u305F\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5834\u5408\u306F\u3001\u5DE6\u30AB\u30C3\u30B3\u3068\u53F3\u30AB\u30C3\u30B3\u306F\u540C\u3058\u6570\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u7D44\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u30AB\u30C3\u30B3\u306F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u3068\u3057\u3066\u691C\u51FA\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50",children:"\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50"}),"\n",(0,d.jsx)(e.p,{children:"The bitwise operators operates on (Long) Integers expressions or values."}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator."}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"While using the bitwise operators, you must think about a Long value as an array of 32 bits. \u3053\u308C\u3089\u306E\u30D3\u30C3\u30C8\u306B\u306F\u3001\u53F3\u304B\u3089\u5DE6\u306B0~31\u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u305D\u308C\u305E\u308C\u306E\u30D3\u30C3\u30C8\u306F0\u304B1\u306A\u306E\u3067\u3001\u500D\u9577\u6574\u6570\u5024\u306F32\u306E\u30D6\u30FC\u30EB\u5024\u3092\u683C\u7D0D\u3067\u304D\u308B\u5024\u3068\u8003\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 A bit equal to 1 means ",(0,d.jsx)(e.strong,{children:"True"})," and a bit equal to 0 means ",(0,d.jsx)(e.strong,{children:"False"}),"."]}),"\n",(0,d.jsx)(e.p,{children:"An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. \u6B21\u306E\u8868\u306B\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,d.jsx)(e.th,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,d.jsx)(e.th,{children:"\u623B\u308A\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise AND"}),(0,d.jsx)(e.td,{children:"&"}),(0,d.jsx)(e.td,{children:"Long & Long"}),(0,d.jsx)(e.td,{children:"Long"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,d.jsx)(e.td,{children:"&#124"}),(0,d.jsx)(e.td,{children:"Long | Long"}),(0,d.jsx)(e.td,{children:"Long"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,d.jsx)(e.td,{children:"^ &#124"}),(0,d.jsx)(e.td,{children:"Long ^ | Long"}),(0,d.jsx)(e.td,{children:"Long"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Left Bit Shift"}),(0,d.jsx)(e.td,{children:"<<"}),(0,d.jsx)(e.td,{children:"Long << Long"}),(0,d.jsx)(e.td,{children:"Long (\u6CE8\u8A181 \u53C2\u7167)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right Bit Shift"}),(0,d.jsx)(e.td,{children:"> >"}),(0,d.jsx)(e.td,{children:"Long >> Long"}),(0,d.jsx)(e.td,{children:"Long (\u6CE8\u8A181 \u53C2\u7167)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Set"}),(0,d.jsx)(e.td,{children:"?+"}),(0,d.jsx)(e.td,{children:"Long ?+ Long"}),(0,d.jsx)(e.td,{children:"Long (\u6CE8\u8A182 \u53C2\u7167)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Clear"}),(0,d.jsx)(e.td,{children:"?-"}),(0,d.jsx)(e.td,{children:"Long ?- Long"}),(0,d.jsx)(e.td,{children:"Long (\u6CE8\u8A182 \u53C2\u7167)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Test"}),(0,d.jsx)(e.td,{children:"??"}),(0,d.jsx)(e.td,{children:"Long ?? Long"}),(0,d.jsx)(e.td,{children:"Boolean (\u6CE8\u8A182 \u53C2\u7167)"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u6CE8\u8A18",children:"\u6CE8\u8A18"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["For the ",(0,d.jsx)(e.code,{children:"Left Bit Shift"})," and ",(0,d.jsx)(e.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F\u30010~31\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 0\u30D3\u30C3\u30C8\u30B7\u30D5\u30C8\u3059\u308B\u3068\u305D\u306E\u5024\u304C\u305D\u306E\u307E\u307E\u8FD4\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u300131\u30D3\u30C3\u30C8\u3088\u308A\u591A\u304F\u30B7\u30D5\u30C8\u3059\u308B\u3068\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308B\u306E\u3067\u30010x00000000\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u305D\u308C\u4EE5\u5916\u306E\u5024\u30922\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3068\u3057\u3066\u6E21\u3057\u305F\u5834\u5408\u3001\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u5024\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["For the ",(0,d.jsx)(e.code,{children:"Bit Set"}),", ",(0,d.jsx)(e.code,{children:"Bit Clear"})," and ",(0,d.jsx)(e.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306F0 ~ 31\u306E\u9593\u3067\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u5F0F\u306E\u7D50\u679C\u306F\u610F\u5473\u306E\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u6B21\u306E\u8868\u306F\u3001\u30D3\u30C3\u30C8\u30EF\u30A4\u30BA\u6F14\u7B97\u5B50\u3068\u305D\u306E\u52B9\u679C\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise AND"}),(0,d.jsxs)(e.td,{children:["\u305D\u308C\u305E\u308C\u306E\u7D50\u679C\u30D3\u30C3\u30C8\u306F2\u3064\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u30D3\u30C3\u30C8\u306E\u8AD6\u7406AND\u3067\u3059\u3002 Here is the logical AND table:",(0,d.jsx)(e.li,{children:"1 & 1 --\x3e 1"}),(0,d.jsx)(e.li,{children:"0 & 1 --\x3e 0"}),(0,d.jsx)(e.li,{children:"1 & 0 --\x3e 0"}),(0,d.jsx)(e.li,{children:"0 & 0 --\x3e 0"}),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,d.jsxs)(e.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,d.jsx)(e.li,{children:"1 | 1 --\x3e 1"}),(0,d.jsx)(e.li,{children:"0 | 1 --\x3e 1"}),(0,d.jsx)(e.li,{children:"1 | 0 --\x3e 1"}),(0,d.jsx)(e.li,{children:"0 | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,d.jsxs)(e.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,d.jsx)(e.li,{children:"1 ^ | 1 --\x3e 0"}),(0,d.jsx)(e.li,{children:"0 ^ | 1 --\x3e 1"}),(0,d.jsx)(e.li,{children:"1 ^ | 0 --\x3e 1"}),(0,d.jsx)(e.li,{children:"0 ^ | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Left Bit Shift"}),(0,d.jsxs)(e.td,{children:["\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u304C2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u5DE6\u306B\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002 \u5DE6\u5074\u306E\u30D3\u30C3\u30C8\u304C\u306A\u304F\u306A\u308A\u3001\u53F3\u5074\u306E\u65B0\u3057\u3044\u30D3\u30C3\u30C8\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 ",(0,d.jsx)(e.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right Bit Shift"}),(0,d.jsxs)(e.td,{children:["\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u304C2\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u53F3\u306B\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002 The bits on the right are lost and the new bits on the left are set to 0.",(0,d.jsx)(e.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Set"}),(0,d.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u306E\u3046\u30612\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u4ED6\u306E\u30D3\u30C3\u30C8\u306F\u305D\u306E\u307E\u307E\u3067\u3059\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Clear"}),(0,d.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u5024\u304C\u7D50\u679C\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u6B21\u306B\u7D50\u679C\u30D3\u30C3\u30C8\u306E\u3046\u30612\u756A\u76EE\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u4ED6\u306E\u30D3\u30C3\u30C8\u306F\u305D\u306E\u307E\u307E\u3067\u3059\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Test"}),(0,d.jsx)(e.td,{children:"\u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u3046\u3061\u30012\u756A\u76EE\u306E\u30D3\u30C3\u30C8\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C1\u306E\u5834\u5408\u3001true\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u6700\u521D\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u306E\u3046\u3061\u30012\u756A\u76EE\u306E\u30D3\u30C3\u30C8\u3067\u793A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u304C0\u306E\u5834\u5408\u3001false\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,d.jsx)(e.th,{children:"\u4F8B\u984C"}),(0,d.jsx)(e.th,{children:"\u623B\u308A\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise AND"}),(0,d.jsx)(e.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,d.jsx)(e.td,{children:"0x0000FF00"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (inclusive)"}),(0,d.jsx)(e.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,d.jsx)(e.td,{children:"0xFF00FFFF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bitwise OR (exclusive)"}),(0,d.jsx)(e.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,d.jsx)(e.td,{children:"0xFF0000FF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Left Bit Shift"}),(0,d.jsx)(e.td,{children:"0x0000FFFF << 8"}),(0,d.jsx)(e.td,{children:"0x00FFFF00"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right Bit Shift"}),(0,d.jsx)(e.td,{children:"0x0000FFFF >> 8"}),(0,d.jsx)(e.td,{children:"0x000000FF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Set"}),(0,d.jsx)(e.td,{children:"0x00000000 ?+ 16"}),(0,d.jsx)(e.td,{children:"0x00010000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Clear"}),(0,d.jsx)(e.td,{children:"0x00010000 ?- 16"}),(0,d.jsx)(e.td,{children:"0x00000000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Bit Test"}),(0,d.jsx)(e.td,{children:"0x00010000 ?? 16"}),(0,d.jsx)(e.td,{children:"true"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var t=s(667294);let d={},i=t.createContext(d);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);