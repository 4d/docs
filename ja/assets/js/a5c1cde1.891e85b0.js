"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92847"],{540148:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/set-database-localization","title":"SET DATABASE LOCALIZATION","description":"SET DATABASE LOCALIZATION ( languageCode {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-database-localization.md","sourceDirName":"commands-legacy","slug":"/commands/set-database-localization","permalink":"/docs/ja/commands/set-database-localization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-database-localization.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-database-localization","title":"SET DATABASE LOCALIZATION","slug":"/commands/set-database-localization","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND MESSAGE TO REMOTE USER","permalink":"/docs/ja/commands/send-message-to-remote-user"},"next":{"title":"SET DATABASE PARAMETER","permalink":"/docs/ja/commands/set-database-parameter"}}'),r=s("785893"),a=s("250065");let l={id:"set-database-localization",title:"SET DATABASE LOCALIZATION",slug:"/commands/set-database-localization",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"})," ( ",(0,r.jsx)(n.em,{children:"languageCode"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"languageCode"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8A00\u8A9E\u30BB\u30EC\u30AF\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30AB\u30EC\u30F3\u30C8\u8A00\u8A9E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u8A00\u8A9E\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u8981\u7D20 (\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30D4\u30AF\u30C1\u30E3) \u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u304C\u691C\u7D22\u3059\u308B\u5834\u6240\u3067\u3042\u308B.lproj\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u30674D\u306F\u3001 Resources\u306E\u5185\u5BB9\u304A\u3088\u3073\u30B7\u30B9\u30C6\u30E0\u74B0\u5883\u306B\u57FA\u3065\u304D\u81EA\u52D5\u3067\u30AB\u30EC\u30F3\u30C8\u8A00\u8A9E\u3092\u6C7A\u5B9A\u3057\u307E\u3059 (",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-database-localization",children:"Get database localization"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u53C2\u7167)\u3002",(0,r.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"}),"\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u8A00\u8A9E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F\u65E2\u306B\u30ED\u30FC\u30C9\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u306E\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u5F8C\u306B\u8868\u793A\u3055\u308C\u305F\u8981\u7D20\u306E\u307F\u304C\u3001\u65B0\u3057\u3044\u8A2D\u5B9A\u306E\u52B9\u679C\u3092\u5F97\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"language"}),'\u306B\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3059\u308B\u3001RFC 3066\u3001ISO639 \u305D\u3057\u3066 ISO3166\u6A19\u6E96\u3067\u898F\u5B9A\u3055\u308C\u305F\u8A00\u8A9E\u30B3\u30FC\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u65E5\u672C\u8A9E\u3067\u3042\u308C\u3070"ja"\u3001\u30D5\u30E9\u30F3\u30B9\u8A9E\u306A\u3089"fr"\u3001\u30A2\u30E1\u30EA\u30AB\u82F1\u8A9E\u306A\u3089"en-us"\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u6A19\u6E96\u306B\u95A2\u3059\u308B\u8A73\u7D30\u3084\u3001\u6E21\u3059\u3053\u3068\u304C\u53EF\u80FD\u306A\u5024\u306B\u3064\u3044\u3066\u306F',(0,r.jsx)(n.em,{children:"Design Reference"}),"\u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,r.jsx)(n.em,{children:"\u4ED8\u9332 B: XLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u958B\u304B\u308C\u305F\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001\u304A\u3088\u3073\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E*** \u5F15\u6570\u304C\u6E21\u3055\u308C\u308B\u3068\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u7279\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5225\u3005\u306B\u8A00\u8A9E\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' RFC\u306B\u5F93\u3044\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u8A00\u8A9E\u30B3\u30FC\u30C9\u3068\u5730\u57DF\u30B3\u30FC\u30C9\u3092\u5206\u3051\u308B\u305F\u3081\u306B"-" (\u30CF\u30A4\u30D5\u30F3) \u3092\u4F7F\u7528\u3057\u307E\u3059 (\u4F8B\u3048\u3070"fr-ca"\u3084"en-us")\u3002\u4ED6\u65B9\u3001',(0,r.jsx)(n.strong,{children:"Resources"}),'\u30D5\u30A9\u30EB\u30C0\u5185\u306E"lproj"\u30D5\u30A9\u30EB\u30C0\u306F"_" (\u30A2\u30F3\u30C0\u30FC\u30B9\u30B3\u30A2)\u3092\u4F7F\u7528\u3057\u307E\u3059 (\u4F8B\u3048\u3070"fr_ca.lproj"\u3084"en_us.lproj")\u3002']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"})," 4D Server\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u306B\u5B58\u5728\u3059\u308B\u8A00\u8A9E\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001",(0,r.jsx)(n.strong,{children:"Resources"}),"\u30D5\u30A9\u30EB\u30C0\u304C \u540C\u671F\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u304B\u3081\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u65E5\u672C\u8A9E\u3092\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u8A00\u8A9E\u3068\u3057\u3066\u8A2D\u5B9A\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("ja")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:'\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u6587\u5B57\u5217\u53C2\u7167":xliff:shopping"\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u3066\u3001XLIFF\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u60C5\u5831\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JA folder:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:'  <trans-unit id="15" resname="Shopping">  \n<source>Shopping</source>  \n<target>\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0</target>  \n</trans-unit>  \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"FR folder:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:' <trans-unit id="15" resname="Shopping">  \n<source>Shopping</source>  \n<target>Faire les courses</target>  \n</trans-unit>  \n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("fr")\n\xa0\xa0// \u6587\u5B57\u5217":xliff:shopping"\u306F"Faire les courses"\u3092\u8868\u793A\u3059\u308B\n\xa0SET DATABASE LOCALIZATION("ja")\n\xa0\xa0// \u6587\u5B57\u5217":xliff:shopping"\u306F"\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0"\u3092\u8868\u793A\u3059\u308B\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-database-localization",children:"Get database localization"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1104"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);