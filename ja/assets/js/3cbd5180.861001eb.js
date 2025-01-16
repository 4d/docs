"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63974"],{217636:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/validate-password","title":"Validate password","description":"Validate password ( userID ; password {; digest} ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-password.md","sourceDirName":"commands-legacy","slug":"/commands/validate-password","permalink":"/docs/ja/20-R7/commands/validate-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"validate-password","title":"Validate password","slug":"/commands/validate-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"USERS TO BLOB","permalink":"/docs/ja/20-R7/commands/users-to-blob"},"next":{"title":"Variables","permalink":"/docs/ja/20-R7/category/variables"}}'),r=s("785893"),t=s("250065");let a={id:"validate-password",title:"Validate password",slug:"/commands/validate-password",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Validate password"})," ( ",(0,r.jsx)(n.em,{children:"userID"})," ; ",(0,r.jsx)(n.em,{children:"password"})," {; ",(0,r.jsx)(n.em,{children:"digest"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userID"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"digest"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Digest password = True, ",(0,r.jsx)(n.br,{}),"Plain-text password (default) = False"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = \u6709\u52B9\u306A\u30D1\u30B9\u30EF\u30FC\u30C9 False = \u7121\u52B9\u306A\u30D1\u30B9\u30EF\u30FC\u30C9"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["Validate password \u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"password"})," \u306B\u6E21\u3055\u308C\u305F\u6587\u5B57\u5217\u304C\u3001\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"userID"})," \u306B\u6E21\u3055\u308C\u305FID\u756A\u53F7\u307E\u305F\u306F\u540D\u524D\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u3042\u308B\u5834\u5408\u3001True\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"digest"})," \u5F15\u6570\u306F\u3001 ",(0,r.jsx)(n.em,{children:"password"})," \u5F15\u6570\u306B\u542B\u307E\u308C\u308B\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u304B\u30CF\u30C3\u30B7\u30E5\u30C9\u30D1\u30B9\u30EF\u30FC\u30C9(\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30E2\u30FC\u30C9)\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"True"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001 ",(0,r.jsx)(n.em,{children:"password"})," \u306B\u306F\u30CF\u30C3\u30B7\u30E5\u30C9\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u3053\u3068(\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30E2\u30FC\u30C9)\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"False"})," \u3092\u6E21\u3059\u304B\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001 ",(0,r.jsx)(n.em,{children:"password"})," \u306B\u306F\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u5F15\u6570\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9\u3001\u7279\u306B ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/on-rest-authentication-database-method",children:"On REST Authentication \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u3068\u304D\u306B\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30D5\u30E9\u30C3\u30C7\u30A3\u30F3\u30B0 ( \u30D6\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30B9\u653B\u6483 ) \u3001\u8A00\u3044\u63DB\u3048\u308C\u3070\u8907\u6570\u306E\u30E6\u30FC\u30B6\u540D\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u7D44\u307F\u5408\u308F\u305B\u306B\u3088\u308B\u8A66\u307F\u3092\u9632\u3050\u305F\u3081\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u9045\u308C\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u30924\u56DE\u547C\u3073\u51FA\u3059 \u3068\u300110\u79D2\u9593\u306E\u9045\u5EF6\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u3053\u306E\u9045\u308C\u306F\u3001\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u3092\u901A\u3057\u3066\u767A\u751F\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E6\u30FC\u30B6 \u201CHardy\u201D \u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u304C \u201CLaurel\u201D \u3067\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GET USER LIST(atUserName;alUserID)\n\xa0$vlElem:=Find in array(atUserName;"Hardy")\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0If(Validate password(alUserID{$vlElem};"Laurel"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Yep!")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Too bad!")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Unknown user name")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/on-rest-authentication-database-method",children:"On REST Authentication \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u306B\u304A\u3044\u3066\u3001\u63A5\u7D9A\u30EA\u30AF\u30A8\u30B9\u30C8\u3092(\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E4D\u30E6\u30FC\u30B6\u30FC\u3092\u4F7F\u7528\u3057\u3066)\u30C6\u30B9\u30C8\u3057\u305F\u3044\u5834\u5408:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$0:=Validate password($1;$2;$3)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-user-properties",children:"Set user properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"638"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var d=s(667294);let r={},t=d.createContext(r);function a(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);