"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39131"],{903305:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/ldap-search","title":"LDAP Search","description":"LDAP Search ( dnRootEntry ; filter {; scope {; attributes {; attributesAsArray}}} ) : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ldap-search.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-search","permalink":"/docs/ja/commands/ldap-search","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-search.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ldap-search","title":"LDAP Search","slug":"/commands/ldap-search","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP LOGOUT","permalink":"/docs/ja/commands/ldap-logout"},"next":{"title":"LDAP SEARCH ALL","permalink":"/docs/ja/commands/ldap-search-all"}}'),s=r("785893"),d=r("250065");let l={id:"ldap-search",title:"LDAP Search",slug:"/commands/ldap-search",displayed_sidebar:"docs"},c=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"LDAP Search"})," ( ",(0,s.jsx)(e.em,{children:"dnRootEntry"})," ; ",(0,s.jsx)(e.em,{children:"filter"})," {; ",(0,s.jsx)(e.em,{children:"scope"})," {; ",(0,s.jsx)(e.em,{children:"attributes"})," {; ",(0,s.jsx)(e.em,{children:"attributesAsArray"}),"}}} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dnRootEntry"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u7D22\u3092\u958B\u59CB\u3059\u308B\u30EB\u30FC\u30C8\u30A8\u30F3\u30C8\u30EA\u30FC\u306E\u8B58\u5225\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"filter"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"LDAP\u691C\u7D22\u30D5\u30A3\u30EB\u30BF\u30FC"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scope"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:'\u691C\u7D22\u306E\u30B9\u30B3\u30FC\u30D7: "base" (\u30C7\u30D5\u30A9\u30EB\u30C8)\u3001"one"\u3001\u307E\u305F\u306F"sub"'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"attributes"}),(0,s.jsx)(e.td,{children:"Text array"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"attributesAsArray"}),(0,s.jsx)(e.td,{children:"Boolean array"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsxs)(e.td,{children:["True = \u5C5E\u6027\u3092\u5F37\u5236\u7684\u306B\u914D\u5217\u3068\u3057\u3066\u8FD4\u3059;",(0,s.jsx)(e.br,{}),"False = \u5C5E\u6027\u3092\u5F37\u5236\u7684\u306B\u5358\u7D14\u306A\u5909\u6570\u3068\u3057\u3066\u8FD4\u3059"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30AD\u30FC/\u5024 \u5C5E\u6027"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"LDAP Search"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u3068\u306A\u308BLDAP\u30B5\u30FC\u30D0\u30FC\u5185\u306B\u3066\u3001\u5B9A\u7FA9\u3055\u308C\u305F\u6761\u4EF6\u306B\u5408\u81F4\u3059\u308B\u6700\u521D\u306E\u30AA\u30AB\u30EC\u30F3\u30B9\u3092\u691C\u7D22\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(e.em,{children:"RuntimeVLIncludeIt"})," \u306B\u3088\u3063\u3066\u958B\u304B\u308C\u305FLDAP\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u63A5\u7D9A\u306E\u4E2D\u3067\u5B9F\u884C\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC1003\u304C\u8FD4\u3055\u308C\u307E\u3059)\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"dnRootEntry"})," \u5F15\u6570\u306B\u306F\u3001LDAP\u30B5\u30FC\u30D0\u30FC\u30EB\u30FC\u30C8\u30A8\u30F3\u30C8\u30EA\u30FC\u306E",(0,s.jsx)(e.em,{children:"\u8B58\u5225\u540D"}),"\u3092\u6E21\u3057\u307E\u3059\u3002\u691C\u7D22\u306F\u3053\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u304B\u3089\u958B\u59CB\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"filter"})," \u5F15\u6570\u306B\u306F\u3001\u5B9F\u884C\u3059\u308BLDAP\u691C\u7D22\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A3\u30EB\u30BF\u30FC\u6587\u5B57\u5217\u306F",(0,s.jsx)(e.a,{href:"http://tools.ietf.org/search/rfc2254",children:"rfc2225"}),' \u306B\u6E96\u62E0\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217("")\u3092\u6E21\u3059\u3053\u3068\u306B\u5BC4\u3063\u3066\u691C\u7D22\u306B\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u304B\u3051\u306A\u3044\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"*"\u306F\u90E8\u5206\u5217\u306E\u691C\u7D22\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"scope"}),' \u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E"LDAP"\u30C6\u30FC\u30DE\u306E\u3069\u308C\u304B\u4E00\u3064\u3092\u6E21\u3057\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LDAP all levels"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,s.jsx)(e.td,{children:"sub"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"dnRootEntry"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30EB\u30FC\u30C8\u30A8\u30F3\u30C8\u30EA\u30FC\u30EC\u30D9\u30EB\u3068\u3001\u305D\u308C\u4EE5\u4E0B\u306E\u5168\u3066\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u5185\u3092\u691C\u7D22"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LDAP root and next"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,s.jsx)(e.td,{children:"one"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"dnRootEntry"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30EB\u30FC\u30C8\u30A8\u30F3\u30C8\u30EA\u30FC\u30EC\u30D9\u30EB\u3068\u3001\u305D\u306E\u4E00\u3064\u4E0B\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u5185\u3092\u691C\u7D22"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LDAP root only"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,s.jsx)(e.td,{children:"base"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"dnRootEntry"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30EB\u30FC\u30C8\u30A8\u30F3\u30C8\u30EA\u30FC\u30EC\u30D9\u30EB\u5185\u306E\u307F\u3092\u691C\u7D22"]})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"attributes"})," \u5F15\u6570\u306B\u306F\u9069\u5408\u3057\u305F\u30A8\u30F3\u30C8\u30EA\u30FC\u304B\u3089\u53D6\u5F97\u3059\u308B\u5168\u3066\u306ELDAP\u5C5E\u6027\u3092\u4E00\u89A7\u3092\u683C\u7D0D\u3059\u308B\u305F\u3081\u306E\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u5168\u3066\u306E\u5C5E\u6027\u304C\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," LDAP \u5C5E\u6027\u540D\u306F\u5927\u6587\u5B57/\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3059\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002LDAP \u5C5E\u6027\u306B\u3064\u3044\u3066\u306E\u3088\u308A\u8A73\u7D30\u306A\u8B72\u6B69\u904B\u95A2\u3057\u3066\u306F\u3001MS Active directory\u7528\u306E\u5168\u3066\u306E\u5C5E\u6027\u3092\u307E\u3068\u3081\u3066\u3042\u308B",(0,s.jsx)(e.a,{href:"https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx",children:"\u3053\u3061\u3089\u306E\u30DA\u30FC\u30B8"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u8907\u6570\u306E\u7D50\u679C\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u5C5E\u6027\u3092\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u8FD4\u3057\u3001\u5358\u4E00\u306E\u7D50\u679C\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u5358\u7D14\u306A\u5909\u6570\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002",(0,s.jsx)(e.em,{children:"attributesAsArray"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u5B9A\u7FA9\u3057\u305F\u305D\u308C\u305E\u308C\u306E\u5C5E\u6027\u306B\u5BFE\u3057\u3001\u8FD4\u3055\u308C\u308B\u5C5E\u6027\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u3001\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u5909\u6570\u306B\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8981\u7D20\u306B",(0,s.jsx)(e.strong,{children:"true"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E",(0,s.jsx)(e.em,{children:"attributes"})," \u5F15\u6570\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002\u5358\u4E00\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5358\u4E00\u306E\u8981\u7D20\u3092\u542B\u3080\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8981\u7D20\u306B",(0,s.jsx)(e.strong,{children:"false"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E",(0,s.jsx)(e.em,{children:"attributes"})," \u5F15\u6570\u306F\u5358\u7D14\u306A\u5909\u6570\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002\u8907\u6570\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6700\u521D\u306E\u8981\u7D20\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(e.p,{children:'\u30AB\u30F3\u30D1\u30CB\u30FC\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u5185\u304B\u3089\u3001"smith"\u3068\u3044\u3046\u30E6\u30FC\u30B6\u30FC\u306E\u96FB\u8A71\u756A\u53F7\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN($url;$dn;$pwd)\n\xa0$filter:="cn=*smith*"\n\xa0$vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(e.p,{children:'"memberOf"\u5C5E\u6027\u3067\u898B\u3064\u304B\u3063\u305F\u5168\u3066\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u683C\u7D0D\u3057\u305F\u914D\u5217\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0var $entry : Object\n\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"memberOf")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;True)\n\xa0\n\xa0LDAP LOGIN($url;$login;$pwd;LDAP password plain text)\n\xa0$entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)\n\xa0LDAP LOGOUT\n\xa0\n\xa0ARRAY TEXT($_arrMemberOf;0)\n\xa0OB GET ARRAY($entry;"memberOf";$_arrMemberOf)\n\xa0\xa0// $_arrMemberOf \u5185\u306B\u306F\u3001\u5168\u3066\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u30B0\u30EB\u30FC\u30D7\u3092\u683C\u7D0D\u3057\u305F\u914D\u5217\u304C\u5165\u3063\u3066\u3044\u307E\u3059\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"LDAP"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/ldap-search-all",children:"LDAP SEARCH ALL"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"1328"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return l}});var t=r(667294);let s={},d=t.createContext(s);function l(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);