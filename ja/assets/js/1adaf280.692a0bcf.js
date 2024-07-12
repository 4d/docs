/*! For license information please see 1adaf280.692a0bcf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23600],{223197:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var l=d(474848),s=d(28453);const r={id:"paths",title:"\u30d1\u30b9\u540d"},c=void 0,i={id:"Concepts/paths",title:"\u30d1\u30b9\u540d",description:"File \u304a\u3088\u3073 Folder \u306e\u95a2\u6570\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3001\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u7ba1\u7406\u3092\u5f37\u529b\u304b\u3064\u67d4\u8edf\u306b\u304a\u3053\u306a\u3048\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30ab\u30ec\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/ja/19/Concepts/paths",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"paths",title:"\u30d1\u30b9\u540d"},sidebar:"docs",previous:{title:"\u8b58\u5225\u5b50\u306e\u547d\u540d\u898f\u5247",permalink:"/docs/ja/19/Concepts/identifiers"},next:{title:"ORDA\u3068\u306f\u4f55\u304b",permalink:"/docs/ja/19/ORDA/overview"}},o={},t=[{value:"\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d",id:"\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d",level:2},{value:"POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9",id:"posix-\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",level:2},{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",level:2},{value:"Windows",id:"windows",level:3},{value:"Windows \u306e\u30d1\u30b9\u540d\u306e\u5165\u529b\u3068\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9",id:"windows-\u306e\u30d1\u30b9\u540d\u306e\u5165\u529b\u3068\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9",level:4},{value:"macOS",id:"macos",level:3},{value:"\u76f8\u5bfe\u30d1\u30b9\u540d\u304a\u3088\u3073\u7d76\u5bfe\u30d1\u30b9\u540d\u306b\u3064\u3044\u3066",id:"\u76f8\u5bfe\u30d1\u30b9\u540d\u304a\u3088\u3073\u7d76\u5bfe\u30d1\u30b9\u540d\u306b\u3064\u3044\u3066",level:2},{value:"<code>File</code> \u304a\u3088\u3073 <code>Folder</code> \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",id:"file-\u304a\u3088\u3073-folder-\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",level:3},{value:"<code>.file()</code> \u304a\u3088\u3073 <code>.folder()</code> \u30d5\u30a9\u30eb\u30c0\u30fc\u95a2\u6570",id:"file-\u304a\u3088\u3073-folder-\u30d5\u30a9\u30eb\u30c0\u30fc\u95a2\u6570",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"File \u304a\u3088\u3073 Folder \u306e\u95a2\u6570\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3001\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u7ba1\u7406\u3092\u5f37\u529b\u304b\u3064\u67d4\u8edf\u306b\u304a\u3053\u306a\u3048\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30ab\u30ec\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u3055\u3089\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u30d5\u30a9\u30eb\u30c0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e3b\u306a\u30d5\u30a9\u30eb\u30c0\u30fc\u3078\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30b9\u3092\u63d0\u4f9b\u3059\u308b ",(0,l.jsx)(n.code,{children:"filesystem"})," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d",children:"\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d"}),"\n",(0,l.jsx)(n.p,{children:'4D \u306f\u3001macOS \u304a\u3088\u3073 Windows\u4e0a\u3067\u69d8\u3005\u306a\u5834\u6240\u306b\u3042\u308b\u7279\u5b9a\u306e 4D\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u6307\u5b9a\u3059\u308b\u3044\u304f\u3064\u304b\u306e "filesystem" \u30d1\u30b9\u540d\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002 \u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d\u306e\u4f7f\u7528\u306f\u3001\u4e3b\u306b\u4e8c\u3064\u306e\u7406\u7531\u304b\u3089\u6709\u7528\u3067\u3059:'}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u72ec\u7acb\u6027: OS \u306e\u9055\u3044\u3084\u30d1\u30b9\u306e\u5fc3\u914d\u306a\u304f\u3001\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u4e00\u3064\u306e\u5834\u6240\u304b\u3089\u4ed6\u306e\u5834\u6240\u3078\u3068\u79fb\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5b89\u5168\u6027: \u30b3\u30fc\u30c9\u306b\u3088\u308a\u3001\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u30eb\u30fc\u30c8\u3088\u308a\u4e0a\u306e\u968e\u5c64\u306b\u3042\u308b\u8981\u7d20\u3078\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093 (\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u5316)\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u30d1\u30b9\u540d\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"filesystem"}),(0,l.jsx)(n.th,{children:"\u6307\u5b9a\u5148"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/DATA"'}),(0,l.jsx)(n.td,{children:"\u30ab\u30ec\u30f3\u30c8\u30c7\u30fc\u30bf\u30d5\u30a9\u30eb\u30c0\u30fc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/LOGS"'}),(0,l.jsx)(n.td,{children:"Logs \u30d5\u30a9\u30eb\u30c0\u30fc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/PACKAGE"'}),(0,l.jsx)(n.td,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc (\u62e1\u5f35\u5b50 4dbase \u306e\u6709\u7121\u306b\u95a2\u308f\u3089\u305a)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/PROJECT"'}),(0,l.jsx)(n.td,{children:"Project \u30d5\u30a9\u30eb\u30c0\u30fc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/RESOURCES"'}),(0,l.jsx)(n.td,{children:"\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e Resources \u30d5\u30a9\u30eb\u30c0\u30fc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/SOURCES"'}),(0,l.jsx)(n.td,{children:"\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e Sources \u30d5\u30a9\u30eb\u30c0\u30fc"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"posix-\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",children:"POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9"}),"\n",(0,l.jsxs)(n.p,{children:["POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306f\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3082\u3063\u3068\u3082\u67d4\u8edf\u6027\u306b\u512a\u308c\u308b\u305f\u3081\u3001",(0,l.jsx)(n.strong,{children:"POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059"}),"\u3002 POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059 (",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FileClass#path",children:"file.path"})," \u304a\u3088\u3073 ",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#path",children:"folder.path"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u307e\u3059)\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u306f:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'\u30d5\u30a9\u30eb\u30c0\u30fc\u306f "/" \u3067\u533a\u5207\u3089\u308c\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.li,{children:'\u7d76\u5bfe\u30d1\u30b9\u540d\u306f "/" \u3067\u59cb\u307e\u308a\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.li,{children:'\u76f8\u5bfe\u30d1\u30b9\u306b\u304a\u3044\u3066 1\u968e\u5c64\u4e0a\u306b\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001\u30d1\u30b9\u540d\u306e\u524d\u306b "../" \u3092\u4f7f\u7528\u3057\u307e\u3059 (\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001filesystem \u304b\u3089\u4e0a\u3078\u306f\u79fb\u52d5\u3067\u304d\u307e\u305b\u3093)\u3002'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["POSIX \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u306f\u4e00\u822c\u7684\u306b\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FileClass#file",children:(0,l.jsx)(n.code,{children:"File"})})," \u304a\u3088\u3073 ",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," \u30b3\u30de\u30f3\u30c9\u306b ",(0,l.jsx)(n.code,{children:"filesystem"})," \u30d1\u30b9\u540d\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u4f8b:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9"}),"\n",(0,l.jsxs)(n.p,{children:["\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306f\u3001\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b OS \u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3057\u3066 File \u307e\u305f\u306f Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u3001",(0,l.jsx)(n.code,{children:"fk platform path"})," \u5b9a\u6570\u3092\u5f15\u6570\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u305d\u308c\u3092\u5ba3\u8a00\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30d1\u30bf\u30fc\u30f3\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'\u30d5\u30a9\u30eb\u30c0\u30fc\u306f "" \u3067\u533a\u5207\u3089\u308c\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.li,{children:'\u30d1\u30b9\u306f 2\u756a\u76ee\u3068 3\u756a\u76ee\u306e\u6587\u5b57\u306b\u305d\u308c\u305e\u308c ":" \u3068 "" \u3092\u542b\u307f\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.li,{children:'\u30d1\u30b9\u306f "\\" \u3067\u59cb\u307e\u308a\u307e\u3059\u3002'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," \u3092\u4f7f\u7528\u3057\u305f\u4f8b:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,l.jsx)(n.h4,{id:"windows-\u306e\u30d1\u30b9\u540d\u306e\u5165\u529b\u3068\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9",children:"Windows \u306e\u30d1\u30b9\u540d\u306e\u5165\u529b\u3068\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9"}),"\n",(0,l.jsxs)(n.p,{children:['4D \u306e\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u306f\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3068\u306f\u3001"\u7279\u6b8a" \u6587\u5b57\u3092\u7f6e\u304d\u63db\u3048\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u6587\u5b57\u306e\u30bb\u30c3\u30c8\u3067\u3059\u3002 \u30b7\u30fc\u30b1\u30f3\u30b9\u306f\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5 (',(0,l.jsx)(n.code,{children:"\\"}),": \u65e5\u672c\u8a9e\u30d5\u30a9\u30f3\u30c8\u74b0\u5883\u3067\u306f\u5186\u30de\u30fc\u30af) \u3067\u59cb\u307e\u308a\u3001\u305d\u306e\u5f8c\u306b\u6587\u5b57\u304c\u7d9a\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,l.jsx)(n.code,{children:"\\t"})," \u306f\u3001",(0,l.jsx)(n.code,{children:"Tab"})," \u6587\u5b57\u306e\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["Windows \u3067\u306f\u3001",(0,l.jsx)(n.code,{children:"\\"})," \u6587\u5b57\u3092\u30d1\u30b9\u306e\u533a\u5207\u308a\u6587\u5b57\u3068\u3057\u3066\u3082\u4f7f\u7528\u3057\u307e\u3059\u3002 \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u306b\u304a\u3044\u3066 4D \u306f\u3001\u30b7\u30f3\u30b0\u30eb\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5 ",(0,l.jsx)(n.code,{children:"\\"})," \u3092\u30c0\u30d6\u30eb\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5 ",(0,l.jsx)(n.code,{children:"\\"})," \u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u5165\u529b\u3055\u308c\u305f Windows \u306e\u30d1\u30b9\u540d\u3092\u6b63\u78ba\u306b\u5224\u65ad\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,l.jsx)(n.code,{children:"C:\\Folder"})," \u306f ",(0,l.jsx)(n.code,{children:"C:\\\\Folder"})," \u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u3057\u304b\u3057\u3001",(0,l.jsx)(n.code,{children:"C:\\MyDocuments\\New"})," \u3068\u66f8\u3044\u305f\u5834\u5408\u30014D \u306f ",(0,l.jsx)(n.code,{children:"C:\\\\MyDocuments\\New"})," \u3068\u8868\u793a\u3057\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u4e8c\u3064\u76ee\u306e ",(0,l.jsx)(n.code,{children:"\\"})," \u306f\u3001\u8aa4\u3063\u3066 ",(0,l.jsx)(n.code,{children:"\\N"})," (\u5b58\u5728\u3059\u308b\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9) \u3068\u8a8d\u8b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u5f93\u3063\u3066\u30014D \u306e\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u306e\u524d\u306b\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5\u3092\u633f\u5165\u3057\u305f\u3044\u3068\u304d\u306f\u3001",(0,l.jsx)(n.code,{children:"\\"})," \u3068\u306a\u308b\u3088\u3046\u624b\u5165\u529b\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"4D \u306f\u6b21\u306e\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u8a8d\u8b58\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9"}),(0,l.jsx)(n.th,{children:"\u610f\u5473\u3059\u308b\u6587\u5b57"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\n"})}),(0,l.jsx)(n.td,{children:"LF (\u30e9\u30a4\u30f3\u30d5\u30a3\u30fc\u30c9)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\t"})}),(0,l.jsx)(n.td,{children:"HT (\u6c34\u5e73\u30bf\u30d6)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\r"})}),(0,l.jsx)(n.td,{children:"CR (\u6539\u884c)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"``\\`"}),(0,l.jsx)(n.td,{children:"``` (\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:'\\"'})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"'})," (\u4e8c\u91cd\u5f15\u7528\u7b26)"]})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30d1\u30bf\u30fc\u30f3\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059 (HFS + \u30b7\u30f3\u30bf\u30c3\u30af\u30b9):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'\u30d5\u30a9\u30eb\u30c0\u30fc\u306f ":" \u3067\u533a\u5207\u3089\u308c\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.li,{children:'\u30d1\u30b9\u306f ":" \u3067\u59cb\u307e\u3063\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," \u3092\u4f7f\u7528\u3057\u305f\u4f8b:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() // \u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u540d\u524d\u306f Monday \u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u5bfe\u30d1\u30b9\u540d\u304a\u3088\u3073\u7d76\u5bfe\u30d1\u30b9\u540d\u306b\u3064\u3044\u3066",children:"\u76f8\u5bfe\u30d1\u30b9\u540d\u304a\u3088\u3073\u7d76\u5bfe\u30d1\u30b9\u540d\u306b\u3064\u3044\u3066"}),"\n",(0,l.jsxs)(n.h3,{id:"file-\u304a\u3088\u3073-folder-\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",children:[(0,l.jsx)(n.code,{children:"File"})," \u304a\u3088\u3073 ",(0,l.jsx)(n.code,{children:"Folder"})," \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FileClass#file",children:(0,l.jsx)(n.code,{children:"File"})})," \u304a\u3088\u3073 ",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," \u30b3\u30de\u30f3\u30c9\u306f ",(0,l.jsx)(n.strong,{children:"\u7d76\u5bfe\u30d1\u30b9\u540d"})," \u306e\u307f\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3059\u3002 \u76f8\u5bfe\u30d1\u30b9\u540d\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'    //ERROR\n$ko:=Folder("myFolder").create() // \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u3067\u76f8\u5bfe\u30d1\u30b9\u540d\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u69d8\u3005\u306a\u5834\u6240 (\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u3001\u30b7\u30b9\u30c6\u30e0\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u3001\u306a\u3069) \u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u6271\u3044\u305f\u3044\u5834\u5408\u306f\u3001",(0,l.jsx)(n.code,{children:"filesystems"})," (\u4e0a\u8ff0\u53c2\u7167) \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() // \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30ec\u30d9\u30eb\u3067\u30d5\u30a9\u30eb\u30c0\u30fc\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\n$okFile:=File("/DATA/Prefs/tempo.txt").create() // \u30c7\u30fc\u30bf\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"file-\u304a\u3088\u3073-folder-\u30d5\u30a9\u30eb\u30c0\u30fc\u95a2\u6570",children:[(0,l.jsx)(n.code,{children:".file()"})," \u304a\u3088\u3073 ",(0,l.jsx)(n.code,{children:".folder()"})," \u30d5\u30a9\u30eb\u30c0\u30fc\u95a2\u6570"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#file",children:(0,l.jsx)(n.code,{children:"folder.file()"})})," \u304a\u3088\u3073 ",(0,l.jsx)(n.a,{href:"/docs/ja/19/API/FolderClass#folder-1",children:(0,l.jsx)(n.code,{children:"folder.folder()"})})," \u306a\u3069\u306e Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u95a2\u6570\u306f\u3001\u76f8\u5bfe POSIX \u30d1\u30b9\u540d\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u4f8b:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'  // \u30e6\u30fc\u30b6\u30fc\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u3042\u308b "Picture" \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u53c2\u7167\u3059\u308b\u306b\u306f\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  // \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306b\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u7d76\u5bfe\u30d1\u30b9\u540d\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,l.jsx)(n.p,{children:"File \u304a\u3088\u3073 Folder \u306e\u30b3\u30de\u30f3\u30c9\u3084\u95a2\u6570\u306b\u3088\u308a\u3001\u4ee5\u4e0b\u306e\u4f8b\u984c\u306e\u3088\u3046\u306b\u69d8\u3005\u306a\u65b9\u6cd5\u3067\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n\n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n\n$f3:=Folder("/DATA/archive/jan2019")\n\n$f4:=File("/DATA/info.txt")\n\n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n\n$f6:=File(fk backup log file)\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},221020:(e,n,d)=>{var l=d(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,d){var l,r={},t=null,h=null;for(l in void 0!==d&&(t=""+d),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,l)&&!o.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:s,type:e,key:t,ref:h,props:r,_owner:i.current}}n.Fragment=r,n.jsx=t,n.jsxs=t},474848:(e,n,d)=>{e.exports=d(221020)},28453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>i});var l=d(296540);const s={},r=l.createContext(s);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);