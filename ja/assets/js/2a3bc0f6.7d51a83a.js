"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74555"],{246499:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>x,assets:()=>t,toc:()=>h,frontMatter:()=>l});var r=JSON.parse('{"id":"API/ZipArchiveClass","title":"ZIPArchive","description":"4D ZIP \u30A2\u30FC\u30AB\u30A4\u30D6\u306F\u3001\u4E00\u3064\u4EE5\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B File \u307E\u305F\u306F Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3001\u5143\u306E\u30B5\u30A4\u30BA\u3088\u308A\u5C0F\u3055\u304F\u306A\u308B\u3088\u3046\u306B\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B\u3082\u306E\u3092\u3044\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u306F \\".zip\\" \u62E1\u5F35\u5B50\u3092\u6301\u3064\u3088\u3046\u306B\u4F5C\u6210\u3055\u308C\u3001\u30C7\u30A3\u30B9\u30AF\u30B9\u30DA\u30FC\u30B9\u306E\u78BA\u4FDD\u3084\u3001\u30B5\u30A4\u30BA\u5236\u9650\u304C\u3042\u308B\u30E1\u30C7\u30A3\u30A2 (\u4F8B: \u30E1\u30FC\u30EB\u307E\u305F\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306A\u3069) \u7D4C\u7531\u306E\u30D5\u30A1\u30A4\u30EB\u8EE2\u9001\u3092\u5BB9\u6613\u306B\u3059\u308B\u7528\u9014\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/API/ZipArchiveClass.md","sourceDirName":"API","slug":"/API/ZipArchiveClass","permalink":"/docs/ja/19/API/ZipArchiveClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"ZipArchiveClass","title":"ZIPArchive"},"sidebar":"docs","previous":{"title":"WebServer","permalink":"/docs/ja/19/API/WebServerClass"},"next":{"title":"ZIPFile","permalink":"/docs/ja/19/API/ZipFileClass"}}'),s=i("785893"),d=i("250065");let l={id:"ZipArchiveClass",title:"ZIPArchive"},c=void 0,t={},h=[{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C-5",level:4},{value:".root",id:"root",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["4D ZIP \u30A2\u30FC\u30AB\u30A4\u30D6\u306F\u3001\u4E00\u3064\u4EE5\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B ",(0,s.jsx)(n.code,{children:"File"})," \u307E\u305F\u306F ",(0,s.jsx)(n.code,{children:"Folder"}),' \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3001\u5143\u306E\u30B5\u30A4\u30BA\u3088\u308A\u5C0F\u3055\u304F\u306A\u308B\u3088\u3046\u306B\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B\u3082\u306E\u3092\u3044\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u306F ".zip" \u62E1\u5F35\u5B50\u3092\u6301\u3064\u3088\u3046\u306B\u4F5C\u6210\u3055\u308C\u3001\u30C7\u30A3\u30B9\u30AF\u30B9\u30DA\u30FC\u30B9\u306E\u78BA\u4FDD\u3084\u3001\u30B5\u30A4\u30BA\u5236\u9650\u304C\u3042\u308B\u30E1\u30C7\u30A3\u30A2 (\u4F8B: \u30E1\u30FC\u30EB\u307E\u305F\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306A\u3069) \u7D4C\u7531\u306E\u30D5\u30A1\u30A4\u30EB\u8EE2\u9001\u3092\u5BB9\u6613\u306B\u3059\u308B\u7528\u9014\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["4D ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306F ",(0,s.jsx)(n.a,{href:"#zip-create-archive",children:"ZIP Create archive"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["4D ",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/ZipFileClass",children:(0,s.jsx)(n.code,{children:"ZIPFile"})})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/ZipFolderClass",children:(0,s.jsx)(n.code,{children:"ZIPFolder"})})," \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306F\u3001",(0,s.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,s.jsx)(n.a,{href:"#root",children:(0,s.jsx)(n.code,{children:"root"})})," \u30D7\u30ED\u30D1\u30C6\u30A3 (",(0,s.jsx)(n.code,{children:"ZIPFolder"}),") \u3092\u901A\u3057\u3066\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"ZIPFile \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3057\u3001\u305D\u306E\u4E2D\u8EAB\u3092\u78BA\u8A8D\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // \u5727\u7E2E\u30D5\u30A1\u30A4\u30EB\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4FDD\u5B58\u3057\u307E\u3059\n$zipFile:=$zipFolder.files()[0] // \u6700\u521D\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u53D6\u308A\u307E\u3059\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#root",children:[(0,s.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),"\xa0\xa0\xa0\xa0ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306E\u30D0\u30FC\u30C1\u30E3\u30EB\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059"]})})})]}),"\n",(0,s.jsx)(n.h2,{id:"zip-create-archive",children:"ZIP Create archive"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileToZip"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\u5727\u7E2E\u3059\u308B File \u307E\u305F\u306F Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folderToZip"}),(0,s.jsx)(n.td,{children:"4D.Folder"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\u5727\u7E2E\u3059\u308B File \u307E\u305F\u306F Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipStructure"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\u5727\u7E2E\u3059\u308B File \u307E\u305F\u306F Folder \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destinationFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u4FDD\u5B58\u5148\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"folderToZip"})," \u30AA\u30D7\u30B7\u30E7\u30F3: ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})," (\u5916\u5074\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u9664\u5916\u3057\u3066 ZIP\u5727\u7E2E\u3092\u304A\u3053\u306A\u3046)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"\u30B9\u30C6\u30FC\u30BF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ZIP Create archive"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 \u5727\u7E2E\u3055\u308C\u305F ZIPArchive \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u51E6\u7406\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7B2C1\u5F15\u6570\u3068\u3057\u3066\u30014D.File\u30014D.Folder\u3001\u3042\u308B\u3044\u306F zipStructure \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"fileToZip"}),": \u5727\u7E2E\u3059\u308B ",(0,s.jsx)(n.code,{children:"4D.File"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"folderToZip"}),": \u5727\u7E2E\u3059\u308B ",(0,s.jsx)(n.code,{children:"4D.Folder"})," \u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"options"})," \u5F15\u6570\u3092\u6E21\u3057\u3066\u3001\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u307F\u3092\u5727\u7E2E (\u3064\u307E\u308A\u3001\u5916\u5074\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u9664\u5916) \u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 ",(0,s.jsx)(n.code,{children:"ZIP Create archive"})," \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u305D\u306E\u4E2D\u8EAB\u3092\u5727\u7E2E\u3059\u308B\u306E\u3067\u3001\u5C55\u958B\u51E6\u7406\u3092\u3057\u305F\u3068\u304D\u306B\u306F\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u518D\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u4E2D\u8EAB\u306E\u307F\u3092\u89E3\u51CD\u51E6\u7406\u3067\u5FA9\u5143\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.em,{children:"options"})," \u5F15\u6570\u306B ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})," \u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipStructure"}),": ZIPArchive \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8868\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5229\u7528\u3057\u3066\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compression"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"}),": Deflate\u5727\u7E2E (\u30C7\u30D5\u30A9\u30EB\u30C8)"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),": LZMA\u5727\u7E2E"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression XZ"}),": XZ\u5727\u7E2E"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression none"}),": \u5727\u7E2E\u306A\u3057"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"level"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["\u5727\u7E2E\u30EC\u30D9\u30EB\u3002 \u3068\u308A\u3046\u308B\u5024: 1 - 10\u3002 \u4F4E\u3044\u5024\u3067\u306F\u30D5\u30A1\u30A4\u30EB\u304C\u5927\u304D\u304F\u306A\u308A\u3001\u9AD8\u3044\u5024\u3067\u306F\u30D5\u30A1\u30A4\u30EB\u304C\u5C0F\u3055\u304F\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5727\u7E2E\u30EC\u30D9\u30EB\u306F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u5024 (\u7701\u7565\u6642): ",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encryption"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u4F7F\u7528\u3059\u308B\u6697\u53F7\u5316\u65B9\u6CD5:",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES128"}),": 128-bit \u30AD\u30FC\u3092\u4F7F\u3063\u305F AES \u306B\u3088\u308B\u6697\u53F7\u5316"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES192"}),": 192-bit \u30AD\u30FC\u3092\u4F7F\u3063\u305F AES \u306B\u3088\u308B\u6697\u53F7\u5316"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES256"}),": 256-bit \u30AD\u30FC\u3092\u4F7F\u3063\u305F AES \u306B\u3088\u308B\u6697\u53F7\u5316 (\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8)"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption none"}),": \u6697\u53F7\u5316\u306A\u3057 (\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u306A\u3044\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8)"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u6697\u53F7\u5316\u304C\u5FC5\u8981\u306A\u5834\u5408\u306B\u4F7F\u7528\u3059\u308B\u30D1\u30B9\u30EF\u30FC\u30C9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"files"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"4D.File"})," \u307E\u305F\u306F ",(0,s.jsx)(n.code,{children:"4D.Folder"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"]}),(0,s.jsx)(n.li,{children:"\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3063\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3:"}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(n.td,{children:"\u578B"}),(0,s.jsx)(n.td,{children:"\u8AAC\u660E"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"4D.File \u307E\u305F\u306F 4D.Folder"}),(0,s.jsx)(n.td,{children:"File \u307E\u305F\u306F Folder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destination"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"(\u4EFB\u610F) - \u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u69CB\u6210\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306E\u76F8\u5BFE\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["(\u4EFB\u610F) - ",(0,s.jsx)(n.code,{children:"ZIP Ignore invisible files"})," \u3067\u975E\u8868\u793A\u30D5\u30A1\u30A4\u30EB\u3092\u7121\u8996\u30010 \u3092\u6E21\u3059\u3068\u5168\u30D5\u30A1\u30A4\u30EB\u3092\u5727\u7E2E"]})]})]})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsx)(n.td,{children:"$1 \u306B\u5727\u7E2E\u306E\u9032\u6357 (0 - 100) \u3092\u53D7\u3051\u53D6\u308B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"destinationFile"})," \u306B\u306F\u3001\u4F5C\u6210\u3059\u308B ZIP\u30A2\u30FC\u30AB\u30A4\u30D6 (\u540D\u524D\u3084\u4F4D\u7F6E\u306A\u3069) \u3092\u8A18\u8FF0\u3059\u308B ",(0,s.jsx)(n.code,{children:"4D.File"}),' \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u4F5C\u6210\u3057\u305F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u3042\u3089\u3086\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3067\u81EA\u52D5\u7684\u306B\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u3001".zip" \u62E1\u5F35\u5B50\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(n.p,{children:["\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u4F5C\u6210\u3055\u308C\u308B\u3068\u3001",(0,s.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," \u3092\u4F7F\u7528\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u30B9\u30C6\u30FC\u30BF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),"\n",(0,s.jsx)(n.p,{children:"\u623B\u308A\u5024\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"statusText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8 (\u3042\u308C\u3070):",(0,s.jsx)(n.li,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u958B\u3051\u307E\u305B\u3093"}),(0,s.jsx)(n.li,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093"}),(0,s.jsx)(n.li,{children:"\u6697\u53F7\u5316\u306B\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"status"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u6B63\u5E38\u306B\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F true\u3001\u305D\u308C\u4EE5\u5916\u306F false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4D.File"})," \u3092\u5727\u7E2E\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A9\u30EB\u30C0\u30FC\u81EA\u4F53\u306F\u5727\u7E2E\u305B\u305A\u306B ",(0,s.jsx)(n.code,{children:"4D.Folder"})," \u306E\u4E2D\u8EAB\u3060\u3051\u3092\u5727\u7E2E\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,s.jsx)(n.p,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5727\u7E2E\u306B\u30D1\u30B9\u30EF\u30FC\u30C9\u3068\u9032\u6357\u30D0\u30FC\u3092\u4F7F\u3044\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New // 4D Progress \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u3044\u307E\u3059\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipStructure"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3001\u5727\u7E2E\u3057\u305F\u3044\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u30D5\u30A1\u30A4\u30EB\u3092\u683C\u7D0D\u3057\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"zip-read-archive",children:"ZIP Read archive"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,s.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30D1\u30B9\u30EF\u30FC\u30C9 (\u5FC5\u8981\u3067\u3042\u308C\u3070)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"4D.ZipArchive"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ZIP Read archive"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,s.jsx)(n.em,{children:"zipFile"})," \u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u53D6\u5F97\u3057\u3001",(0,s.jsx)(n.code,{children:"4D.ZipArchive"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5F62\u5F0F\u3067\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u5C55\u958B\u3059\u308B\u3053\u3068\u306F\u3057\u307E\u305B\u3093\u3002\u305D\u306E\u4E2D\u8EAB\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u306E\u307F\u3067\u3059\u3002 \u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u53D6\u308A\u51FA\u3059\u306B\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/Document#copyto",children:"file.copyTo()"})," \u3042\u308B\u3044\u306F ",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/Directory#copyto",children:"folder.copyTo()"})," \u306A\u3069\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipFile"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u5727\u7E2E\u3055\u308C\u305F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u53C2\u7167\u3057\u3066\u3044\u308B ",(0,s.jsx)(n.code,{children:"4D.File"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u30D5\u30A1\u30A4\u30EB\u306F ",(0,s.jsx)(n.code,{children:"ZIP Read archive"})," \u304C\u5B9F\u884C\u3092\u7D42\u3048\u308B\u307E\u3067 (\u5168\u30B3\u30F3\u30C6\u30F3\u30C4/\u53C2\u7167\u304C\u53D6\u5F97/\u89E3\u653E\u3055\u308C\u308B\u307E\u3067) \u306F\u958B\u3044\u305F\u72B6\u614B\u3068\u306A\u308A\u3001\u305D\u306E\u5F8C\u81EA\u52D5\u7684\u306B\u9589\u3058\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipFile"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F ZIP\u30D5\u30A1\u30A4\u30EB\u304C\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u4FDD\u8B77\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"password"})," \u5F15\u6570\u3092\u6E21\u3057\u3066\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u306B\u3082\u95A2\u308F\u3089\u305A\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u8AAD\u307F\u51FA\u3057\u6642\u306B\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u63D0\u793A\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),"\n",(0,s.jsxs)(n.p,{children:["\u623B\u308A\u5024\u306E ",(0,s.jsx)(n.code,{children:"4D.ZipArchive"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5358\u4E00\u306E ",(0,s.jsx)(n.a,{href:"#root",children:(0,s.jsx)(n.code,{children:"root"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u3066\u304A\u308A\u3001\u305D\u306E\u5024\u306F ",(0,s.jsx)(n.code,{children:"4D.ZipFolder"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"ZIPFile \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3057\u3001\u305D\u306E\u4E2D\u8EAB\u3092\u78BA\u8A8D\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u3001root \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u53D6\u308A\u51FA\u3059\u3053\u3068\u306A\u304F\u8AAD\u307F\u51FA\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"root \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u53D6\u308A\u51FA\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // \u7279\u5B9A\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97\u3057\u307E\u3059\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  // \u3059\u3079\u3066\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97\u3057\u307E\u3059\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"root",children:".root"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".root"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306E\u30D0\u30FC\u30C1\u30E3\u30EB\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"root"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u305D\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/ZipFileClass",children:"ZipFile"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/19/API/ZipFolderClass",children:"ZipFolder"})," \u306E\u95A2\u6570\u3068\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u64CD\u4F5C\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,s.jsx)(n.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var r=i(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);