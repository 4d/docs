"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71223"],{772753:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands/zip-read-archive","title":"ZIP Read archive","description":"ZIP Read archive ( zipFile Text }) : 4D.ZipArchive","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/zip-read-archive.md","sourceDirName":"commands","slug":"/commands/zip-read-archive","permalink":"/docs/ja/commands/zip-read-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-read-archive.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"zip-read-archive","title":"ZIP Read archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ZIP Create archive","permalink":"/docs/ja/commands/zip-create-archive"},"next":{"title":"Form Events","permalink":"/docs/ja/category/form-events"}}'),i=r("785893"),d=r("250065");let c={id:"zip-read-archive",title:"ZIP Read archive",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u30D5\u30A1\u30A4\u30EB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u30D1\u30B9\u30EF\u30FC\u30C9 (\u5FC5\u8981\u3067\u3042\u308C\u3070)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"4D.ZipArchive"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,i.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ZIP Read archive"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"zipFile"})," \u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u53D6\u5F97\u3057\u3001",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5F62\u5F0F\u3067\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u5C55\u958B\u3059\u308B\u3053\u3068\u306F\u3057\u307E\u305B\u3093\u3002\u305D\u306E\u4E2D\u8EAB\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u306E\u307F\u3067\u3059\u3002 \u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u4E2D\u8EAB\u3092\u53D6\u308A\u51FA\u3059\u305F\u3081\u306B\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/API/Document#copyto",children:"file.copyTo()"})," \u3084 ",(0,i.jsx)(n.a,{href:"/docs/ja/API/Directory#copyto",children:"folder.copyTo()"}),"\u306A\u3069\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipFile"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u5727\u7E2E\u3055\u308C\u305F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u53C2\u7167\u3057\u3066\u3044\u308B ",(0,i.jsx)(n.code,{children:"4D.File"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u30D5\u30A1\u30A4\u30EB\u306F ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," \u304C\u5B9F\u884C\u3092\u7D42\u3048\u308B\u307E\u3067 (\u5168\u30B3\u30F3\u30C6\u30F3\u30C4/\u53C2\u7167\u304C\u53D6\u5F97/\u89E3\u653E\u3055\u308C\u308B\u307E\u3067) \u306F\u958B\u3044\u305F\u72B6\u614B\u3068\u306A\u308A\u3001\u305D\u306E\u5F8C\u81EA\u52D5\u7684\u306B\u9589\u3058\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipFile"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F ZIP\u30D5\u30A1\u30A4\u30EB\u304C\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u4FDD\u8B77\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u4EFB\u610F\u306E ",(0,i.jsx)(n.em,{children:"password"})," \u5F15\u6570\u3092\u6E21\u3057\u3066\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u306B\u3082\u95A2\u308F\u3089\u305A\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u8AAD\u307F\u51FA\u3057\u6642\u306B\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u63D0\u793A\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD4\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5358\u4E00\u306E",(0,i.jsx)(n.a,{href:"/docs/ja/API/ZipArchiveClass#root",children:(0,i.jsx)(n.code,{children:"root"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3060\u3051\u3092\u683C\u7D0D\u3057\u3066\u304A\u308A\u3001\u305D\u306E\u5024\u306F",(0,i.jsx)(n.code,{children:"4D.ZipFolder"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.p,{children:"ZIPFile \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3057\u3001\u305D\u306E\u4E2D\u8EAB\u3092\u78BA\u8A8D\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u3001root \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u53D6\u308A\u51FA\u3059\u3053\u3068\u306A\u304F\u8AAD\u307F\u51FA\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"root \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u53D6\u308A\u51FA\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  // \u7279\u5B9A\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97\u3057\u307E\u3059\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  // \u3059\u3079\u3066\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97\u3057\u307E\u3059\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/zip-create-archive",children:(0,i.jsx)(n.code,{children:"ZIP Create archive"})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"1637"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,i.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var s=r(667294);let i={},d=s.createContext(i);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);