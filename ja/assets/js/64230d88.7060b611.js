"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14063"],{514646:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-subrecord-key","title":"Get subrecord key","description":"Get subrecord key ( idField ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-subrecord-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-subrecord-key","permalink":"/docs/ja/commands/get-subrecord-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-subrecord-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-subrecord-key","title":"Get subrecord key","slug":"/commands/get-subrecord-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Subrecords","permalink":"/docs/ja/category/subrecords"},"next":{"title":"System Documents","permalink":"/docs/ja/category/system-documents"}}'),d=r("785893"),t=r("250065");let i={id:"get-subrecord-key",title:"Get subrecord key",slug:"/commands/get-subrecord-key",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"id_added_by_converter \u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u308B",id:"id_added_by_converter-\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u308B",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get subrecord key"})," ( ",(0,d.jsx)(n.em,{children:"idField"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"idField"}),(0,d.jsx)(n.td,{children:"Field"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:'\u4EE5\u524D\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E"\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3"\u307E\u305F\u306F"\u500D\u9577\u6574\u6570"\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u5185\u90E8\u30AD\u30FC"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get subrecord key"}),'\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5909\u63DB\u3055\u308C\u305F\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3059\u308B4D\u30B3\u30FC\u30C9\u304B\u3089\u3001\u6A19\u6E96\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u3057\u3066\u4F5C\u696D\u3092\u884C\u3046\u30B3\u30FC\u30C9\u3078\u306E\u79FB\u884C\u3092\u5BB9\u6613\u306B\u3057\u307E\u3059\u30024D\u30D0\u30FC\u30B8\u30E7\u30F311\u3088\u308A\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u5909\u63DB\u3059\u308B\u3068\u3001\u65E2\u5B58\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306F\u6A19\u6E96\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5909\u63DB\u3055\u308C\u3001\u81EA\u52D5\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308A\u89AA\u30C6\u30FC\u30D6\u30EB\u3068\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002\u4EE5\u524D\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306FN\u30C6\u30FC\u30D6\u30EB\u3068\u306A\u308A\u3001\u89AA\u30C6\u30FC\u30D6\u30EB\u306F1\u30C6\u30FC\u30D6\u30EB\u306B\u306A\u308A\u307E\u3059\u30021\u30C6\u30FC\u30D6\u30EB\u4E2D\u3001\u4EE5\u524D\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30D5\u30A3\u30FC\u30EB\u30C9\u306F"\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3"\u578B\u306E\u7279\u5225\u306A\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5909\u63DB\u3055\u308C\u3001N\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u7279\u5225\u306A"\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3"\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u201Cid_added_by_converter\u201D\u3068\u3044\u3046\u540D\u79F0\u3067\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u308C\u306F\u5909\u63DB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306E\u52D5\u4F5C\u306E\u4E92\u63DB\u6027\u3092\u4FDD\u6301\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002\u3057\u304B\u3057\u5909\u63DB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u3001\u3059\u3079\u3066\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u6A19\u6E96\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30AB\u30CB\u30BA\u30E0\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u3092\u5F37\u304F\u63A8\u5968\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u4F5C\u696D\u3067\u306F\u307E\u305A\u7279\u5225\u306A\u81EA\u52D5\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3057\u3066\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u7D99\u627F\u3057\u305F\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u6052\u4E45\u7684\u306B\u7121\u52B9\u306B\u3057\u3001\u305D\u306E\u5F8C\u95A2\u9023\u3059\u308B\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u63DB\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,d.jsx)(n.strong,{children:"Get subrecord key"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u308B\u5185\u90E8ID\u3092\u8FD4\u3057\u3001\u3053\u306EID\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u66F8\u304D\u63DB\u3048\u3092\u5BB9\u6613\u306B\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5185\u90E8ID\u306F\u5B9F\u969B\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u4E0D\u8981\u3068\u3057\u3001\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u3082\u3046\u5B58\u5728\u3057\u306A\u3044\u306B\u3082\u304B\u304B\u308F\u3089\u305A\u3001\u958B\u767A\u8005\u306F\u4EE5\u524D\u306E\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u4F5C\u696D\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5909\u63DB\u3055\u308C\u305F\u4EE5\u4E0B\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3067\u4F8B\u984C\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(589847).Z+"",width:"440",height:"360"})}),"\n",(0,d.jsx)(n.p,{children:"4D \u3067\u306F\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u304C\u4F9D\u7136\u52D5\u4F5C\u3057\u307E\u3059\u304C\u3001\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALL SUBRECORDS([Employees]Children)\n\xa0$total:=Records in subselection([Employees]Children)\n\xa0vFirstnames:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vFirstnames:=vFirstnames+[Employees]Children\'FirstName+" "\n\xa0\xa0\xa0\xa0NEXT SUBRECORD([Employees]Children)\n\xa0End for\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30FC\u30C9\u3092\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Employees_Children];[Employees_Children]id_added_by_converter=Get subrecord key([Employees]Children))\n\xa0$total:=Records in selection([Employees_Children])\n\xa0vFirstnames:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vFirstnames:=vFirstnames+[Employees_Children]FirstName+" "\n\xa0\xa0\xa0\xa0NEXT RECORD(Employees_Children)\n\xa0End for\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(n.strong,{children:"Get subrecord key"}),"\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6642\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F0\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"2\u756A\u76EE\u306E\u30B3\u30FC\u30C9\u306F\u6A19\u6E96\u306E4D\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3059\u308B\u3057\u306A\u3044\u306B\u304B\u304B\u308F\u3089\u305A\u4EE5\u524D\u3068\u540C\u69D8\u306B\u52D5\u4F5C\u3057\u307E\u3059\u3002\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u53D6\u308A\u9664\u304F\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u500D\u9577\u6574\u6570\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3055\u308C\u305F\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"idField"}),"\u5F15\u6570\u306B\u306F\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9 (\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u307E\u3060\u5B58\u5728\u3059\u308B\u5834\u5408) \u307E\u305F\u306F\u500D\u9577\u6574\u6570\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9 (\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u53D6\u308A\u9664\u3044\u305F\u5834\u5408) \u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u308C\u4EE5\u5916\u306E\u5834\u5408\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u9077\u79FB\u7684\u306A\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306E\u6700\u7D42\u30B9\u30C6\u30FC\u30B8\u3067\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057\u3092\u53D6\u308A\u9664\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"id_added_by_converter-\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u308B",children:"id_added_by_converter \u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u308B"}),"\n",(0,d.jsxs)(n.p,{children:['4D v14 R3 \u4EE5\u964D\u3001"id_added_by_converter" \u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u304C\u51FA\u6765\u308B\u3088\u3046\u306B\u306A\u308A\u3057\u305F\u3002\u4EE5\u524D\u306F\u3001\u3053\u306E\u5024\u306F4D\u81EA\u8EAB\u306B\u3088\u3063\u3066\u306E\u307F\u5272\u308A\u5F53\u3066\u3089\u308C\u3001\u30C7\u30D9\u30ED\u30C3\u30D1\u306F\u5909\u63DB\u3055\u308C\u305F\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B\u305F\u3081\u306B\u306F\u5EC3\u6B62\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9 ',(0,d.jsx)(n.em,{children:"_o_CREATE SUBRECORD"})," \u306A\u3069\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3057\u305F\u3002"]}),"\n",(0,d.jsx)(n.p,{children:'\u3053\u306E\u6539\u826F\u306B\u3088\u308A\u3001\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u3092\u542B\u3080\u53E4\u3044\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u3088\u308A\u81EA\u5728\u306B\u5909\u63DB\u3059\u308B\u4E8B\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u307E\u305A\u3001\u7279\u6B8A\u306A"\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3"\u3092\u4FDD\u6301\u3057\u305F\u307E\u307E\u3001\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u901A\u5E38\u306E\u3082\u306E\u3068\u540C\u3058\u3088\u3046\u306B\u8FFD\u52A0\u3057\u305F\u308A\u4FEE\u6B63\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002\u5168\u3066\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u66F4\u65B0\u3057\u7D42\u3048\u305F\u3089\u3001\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u63DB\u3048\u308B\u3053\u3068\u306A\u304F\u3001\u3053\u306E\u7279\u6B8A\u306A\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u901A\u5E38\u306A\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u3048\u3070\u3001\u4E0A\u8A18\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u5BFE\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u69D8\u306A\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u4E8B\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Employees])\n\xa0[Employees]LastName:="Jones"\n\xa0CREATE RECORD([Employees_Children])\n\xa0[Employees_Children]FirstName:="Natacha"\n\xa0[Employees_Children]BirthDate:=!12/24/2013!\n\xa0[Employees_Children]id_added_by_converter:=Get subrecord key([Employees]Children)\n\xa0SAVE RECORD([Employees_Children])\n\xa0SAVE RECORD([Employees]\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4E0A\u8A18\u306E\u30B3\u30FC\u30C9\u306F\u3001\u7279\u6B8A\u306A\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u3082\u901A\u5E38\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u3082\u6709\u52B9\u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1137"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},589847:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict473713.en-a08eee8e9d2820c5ac071a522974824f.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);