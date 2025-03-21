"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68472"],{962427:function(e,n,l){l.r(n),l.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>t,contentTitle:()=>c});var d=JSON.parse('{"id":"Concepts/paths","title":"\u30D1\u30B9\u540D","description":"File \u304A\u3088\u3073 Folder \u306E\u95A2\u6570\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3001\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u3001\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u7BA1\u7406\u3092\u5F37\u529B\u304B\u3064\u67D4\u8EDF\u306B\u304A\u3053\u306A\u3048\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Concepts/paths.md","sourceDirName":"Concepts","slug":"/Concepts/paths","permalink":"/docs/ja/20/Concepts/paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"paths","title":"\u30D1\u30B9\u540D"},"sidebar":"docs","previous":{"title":"\u8B58\u5225\u5B50\u306E\u547D\u540D\u898F\u5247","permalink":"/docs/ja/20/Concepts/identifiers"},"next":{"title":"ORDA","permalink":"/docs/ja/20/ORDA/overview"}}'),s=l("785893"),r=l("250065");let i={id:"paths",title:"\u30D1\u30B9\u540D"},c=void 0,o={},t=[{value:"\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D",id:"\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D",level:2},{value:"POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",id:"posix-\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",level:2},{value:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",id:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",level:2},{value:"Windows",id:"windows",level:3},{value:"Windows \u306E\u30D1\u30B9\u540D\u3068\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9",id:"windows-\u306E\u30D1\u30B9\u540D\u3068\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9",level:4},{value:"macOS",id:"macos",level:3},{value:"\u76F8\u5BFE\u30D1\u30B9\u540D\u304A\u3088\u3073\u7D76\u5BFE\u30D1\u30B9\u540D\u306B\u3064\u3044\u3066",id:"\u76F8\u5BFE\u30D1\u30B9\u540D\u304A\u3088\u3073\u7D76\u5BFE\u30D1\u30B9\u540D\u306B\u3064\u3044\u3066",level:2},{value:"<code>File</code> \u304A\u3088\u3073 <code>Folder</code> \u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC",id:"file-\u304A\u3088\u3073-folder-\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC",level:3},{value:"<code>.file()</code> \u304A\u3088\u3073 <code>.folder()</code> \u30D5\u30A9\u30EB\u30C0\u30FC\u95A2\u6570",id:"file-\u304A\u3088\u3073-folder-\u30D5\u30A9\u30EB\u30C0\u30FC\u95A2\u6570",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"File \u304A\u3088\u3073 Folder \u306E\u95A2\u6570\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3001\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u3001\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u7BA1\u7406\u3092\u5F37\u529B\u304B\u3064\u67D4\u8EDF\u306B\u304A\u3053\u306A\u3048\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3055\u3089\u306B\u3001\u30D5\u30A1\u30A4\u30EB\u304A\u3088\u3073\u30D5\u30A9\u30EB\u30C0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4E3B\u306A\u30D5\u30A9\u30EB\u30C0\u30FC\u3078\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30D1\u30B9\u3092\u63D0\u4F9B\u3059\u308B ",(0,s.jsx)(n.code,{children:"filesystem"})," \u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D",children:"\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D"}),"\n",(0,s.jsx)(n.p,{children:'4D \u306F\u3001macOS \u304A\u3088\u3073 Windows\u4E0A\u3067\u69D8\u3005\u306A\u5834\u6240\u306B\u3042\u308B\u7279\u5B9A\u306E 4D\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u6307\u5B9A\u3059\u308B\u3044\u304F\u3064\u304B\u306E "filesystem" \u30D1\u30B9\u540D\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u306F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u57FA\u3065\u3044\u3066\u8A55\u4FA1\u3055\u308C\u3001\u7D76\u5BFE\u30D1\u30B9\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D\u306E\u4F7F\u7528\u306F\u3001\u4E3B\u306B\u4E8C\u3064\u306E\u7406\u7531\u304B\u3089\u6709\u7528\u3067\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u72EC\u7ACB\u6027: OS \u306E\u9055\u3044\u3084\u30D1\u30B9\u306E\u5FC3\u914D\u306A\u304F\u3001\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u4E00\u3064\u306E\u5834\u6240\u304B\u3089\u4ED6\u306E\u5834\u6240\u3078\u3068\u79FB\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5B89\u5168\u6027: \u30B3\u30FC\u30C9\u306B\u3088\u308A\u3001\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u306E\u30EB\u30FC\u30C8\u3088\u308A\u4E0A\u306E\u968E\u5C64\u306B\u3042\u308B\u8981\u7D20\u3078\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 (\u30B5\u30F3\u30C9\u30DC\u30C3\u30AF\u30B9\u5316)\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30D1\u30B9\u540D\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"filesystem"}),(0,s.jsx)(n.th,{children:"\u6307\u5B9A\u5148"}),(0,s.jsx)(n.th,{children:"\u4F8B\u984C"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/DATA"'}),(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D5\u30A9\u30EB\u30C0\u30FC"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Data\\"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/LOGS"'}),(0,s.jsx)(n.td,{children:"Logs \u30D5\u30A9\u30EB\u30C0\u30FC"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Data\\Logs\\"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/PACKAGE"'}),(0,s.jsx)(n.td,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC (\u62E1\u5F35\u5B50 4dbase \u306E\u6709\u7121\u306B\u95A2\u308F\u3089\u305A)"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/PROJECT"'}),(0,s.jsx)(n.td,{children:"Project \u30D5\u30A9\u30EB\u30C0\u30FC"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Project\\"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/RESOURCES"'}),(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E Resources \u30D5\u30A9\u30EB\u30C0\u30FC"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Resources\\"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"/SOURCES"'}),(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E Sources \u30D5\u30A9\u30EB\u30C0\u30FC"}),(0,s.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Project\\Sources\\"'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"posix-\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",children:"POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),"\n",(0,s.jsxs)(n.p,{children:["POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3082\u3063\u3068\u3082\u67D4\u8EDF\u6027\u306B\u512A\u308C\u308B\u305F\u3081\u3001",(0,s.jsx)(n.strong,{children:"POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059"}),"\u3002 POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059 (",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FileClass#path",children:"file.path"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#path",children:"folder.path"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u307E\u3059)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306F:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u30D5\u30A9\u30EB\u30C0\u30FC\u306F "/" \u3067\u533A\u5207\u3089\u308C\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u7D76\u5BFE\u30D1\u30B9\u540D\u306F "/" \u3067\u59CB\u307E\u308A\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u76F8\u5BFE\u30D1\u30B9\u306B\u304A\u3044\u3066 1\u968E\u5C64\u4E0A\u306B\u79FB\u52D5\u3059\u308B\u306B\u306F\u3001\u30D1\u30B9\u540D\u306E\u524D\u306B "../" \u3092\u4F7F\u7528\u3057\u307E\u3059 (\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001filesystem \u304B\u3089\u4E0A\u3078\u306F\u79FB\u52D5\u3067\u304D\u307E\u305B\u3093)\u3002'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306F\u4E00\u822C\u7684\u306B\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FileClass#file",children:(0,s.jsx)(n.code,{children:"File"})})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#folder",children:(0,s.jsx)(n.code,{children:"Folder"})})," \u30B3\u30DE\u30F3\u30C9\u306B ",(0,s.jsx)(n.code,{children:"filesystem"})," \u30D1\u30B9\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u4F8B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $pathFile : 4D.File\nvar $pathFolder : 4D.Folder\n\n$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9",children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),"\n",(0,s.jsxs)(n.p,{children:["\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B OS \u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002 \u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u3066 File \u307E\u305F\u306F Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u3001",(0,s.jsx)(n.code,{children:"fk platform path"})," \u5B9A\u6570\u3092\u5F15\u6570\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u305D\u308C\u3092\u5BA3\u8A00\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30D1\u30BF\u30FC\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u30D5\u30A9\u30EB\u30C0\u30FC\u306F "" \u3067\u533A\u5207\u3089\u308C\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u30D1\u30B9\u306F 2\u756A\u76EE\u3068 3\u756A\u76EE\u306E\u6587\u5B57\u306B\u305D\u308C\u305E\u308C ":" \u3068 "" \u3092\u542B\u307F\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u30D1\u30B9\u306F "\\" \u3067\u59CB\u307E\u308A\u307E\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#folder",children:(0,s.jsx)(n.code,{children:"Folder"})})," \u3092\u4F7F\u7528\u3057\u305F\u4F8B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,s.jsx)(n.h4,{id:"windows-\u306E\u30D1\u30B9\u540D\u3068\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9",children:"Windows \u306E\u30D1\u30B9\u540D\u3068\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9"}),"\n",(0,s.jsxs)(n.p,{children:["4D\u30E9\u30F3\u30B2\u30FC\u30B8\u3067\u306F ",(0,s.jsx)(n.a,{href:"/docs/ja/20/Concepts/quick-tour#%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%E3%82%B7%E3%83%BC%E3%82%B1%E3%83%B3%E3%82%B9",children:"\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9"})," \u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9\u306F\u30D0\u30C3\u30AF\u30B9\u30E9\u30C3\u30B7\u30E5 (",(0,s.jsx)(n.code,{children:"\\"}),": \u65E5\u672C\u8A9E\u30D5\u30A9\u30F3\u30C8\u74B0\u5883\u3067\u306F\u5186\u30DE\u30FC\u30AF) \u3067\u59CB\u307E\u308A\u3001\u305D\u306E\u5F8C\u306B\u6587\u5B57\u304C\u7D9A\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001",(0,s.jsx)(n.code,{children:"\\t"})," \u306F\u3001",(0,s.jsx)(n.code,{children:"Tab"})," \u6587\u5B57\u306E\u30A8\u30B9\u30B1\u30FC\u30D7\u30B7\u30FC\u30B1\u30F3\u30B9\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Windows \u3067\u306F\u3001",(0,s.jsx)(n.code,{children:"\\"})," \u6587\u5B57\u3092\u30D1\u30B9\u306E\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u3082\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001Windows \u306E\u30D1\u30B9\u540D\u3092\u5165\u529B\u3059\u308B\u306B\u306F\u30C0\u30D6\u30EB\u30D0\u30C3\u30AF\u30B9\u30E9\u30C3\u30B7\u30E5 ",(0,s.jsx)(n.code,{children:"\\"})," \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30D1\u30BF\u30FC\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059 (HFS + \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ":" \u3067\u533A\u5207\u3089\u308C\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u30D1\u30B9\u306F ":" \u3067\u59CB\u307E\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#folder",children:(0,s.jsx)(n.code,{children:"Folder"})})," \u3092\u4F7F\u7528\u3057\u305F\u4F8B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() // \u30DC\u30EA\u30E5\u30FC\u30E0\u306E\u540D\u524D\u306F Monday \u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5BFE\u30D1\u30B9\u540D\u304A\u3088\u3073\u7D76\u5BFE\u30D1\u30B9\u540D\u306B\u3064\u3044\u3066",children:"\u76F8\u5BFE\u30D1\u30B9\u540D\u304A\u3088\u3073\u7D76\u5BFE\u30D1\u30B9\u540D\u306B\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.h3,{id:"file-\u304A\u3088\u3073-folder-\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC",children:[(0,s.jsx)(n.code,{children:"File"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.code,{children:"Folder"})," \u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FileClass#file",children:(0,s.jsx)(n.code,{children:"File"})})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#folder",children:(0,s.jsx)(n.code,{children:"Folder"})})," \u30B3\u30DE\u30F3\u30C9\u306F ",(0,s.jsx)(n.strong,{children:"\u7D76\u5BFE\u30D1\u30B9\u540D"})," \u306E\u307F\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3059\u3002 \u76F8\u5BFE\u30D1\u30B9\u540D\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u304A\u3089\u305A\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'    //ERROR\n$ko:=Folder("myFolder").create() // \u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u3067\u76F8\u5BFE\u30D1\u30B9\u540D\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u69D8\u3005\u306A\u5834\u6240 (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u3001\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u3001\u306A\u3069) \u306B\u3042\u308B\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u6271\u3044\u305F\u3044\u5834\u5408\u306F\u3001",(0,s.jsx)(n.code,{children:"filesystems"})," (\u4E0A\u8FF0\u53C2\u7167) \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() // \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30EC\u30D9\u30EB\u3067\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\n$okFile:=File("/DATA/Prefs/tempo.txt").create() // \u30C7\u30FC\u30BF\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"file-\u304A\u3088\u3073-folder-\u30D5\u30A9\u30EB\u30C0\u30FC\u95A2\u6570",children:[(0,s.jsx)(n.code,{children:".file()"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.code,{children:".folder()"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u95A2\u6570"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#file",children:(0,s.jsx)(n.code,{children:"folder.file()"})})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/20/API/FolderClass#folder-1",children:(0,s.jsx)(n.code,{children:"folder.folder()"})})," \u306A\u3069\u306E Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u95A2\u6570\u306F\u3001\u76F8\u5BFE POSIX \u30D1\u30B9\u540D\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002 \u4F8B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $userImages : 4D.Folder\nvar $ok : Boolean\n\n  // \u30E6\u30FC\u30B6\u30FC\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u3042\u308B "Picture" \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u53C2\u7167\u3059\u308B\u306B\u306F\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  // \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306B\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7D76\u5BFE\u30D1\u30B9\u540D\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u304A\u3089\u305A\u3001\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"File \u304A\u3088\u3073 Folder \u306E\u30B3\u30DE\u30F3\u30C9\u3084\u95A2\u6570\u306B\u3088\u308A\u3001\u4EE5\u4E0B\u306E\u4F8B\u984C\u306E\u3088\u3046\u306B\u69D8\u3005\u306A\u65B9\u6CD5\u3067\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $fold : 4D.Folder\nvar $file : 4D.File\n\n$fold:=Folder(fk desktop folder).folder("archive/jan2019")\n$fold:=Folder("/DATA/archive/jan2019")\n$file:=Folder("/DATA/archive/jan2019").file("total.txt")\n$file:=File("/DATA/info.txt")\n$file:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n$file:=File(fk backup log file)\n'})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return i}});var d=l(667294);let s={},r=d.createContext(s);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);