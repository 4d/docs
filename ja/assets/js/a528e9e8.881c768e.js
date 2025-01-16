"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74627"],{344812:function(t,e,n){n.r(e),n.d(e,{default:()=>l,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/convert-path-system-to-posix","title":"Convert path system to POSIX","description":"Convert path system to POSIX ( systemPath {; *} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-path-system-to-posix.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-system-to-posix","permalink":"/docs/ja/commands/convert-path-system-to-posix","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-system-to-posix.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-path-system-to-posix","title":"Convert path system to POSIX","slug":"/commands/convert-path-system-to-posix","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path POSIX to system","permalink":"/docs/ja/commands/convert-path-posix-to-system"},"next":{"title":"COPY DOCUMENT","permalink":"/docs/ja/commands/copy-document"}}'),r=n("785893"),o=n("250065");let d={id:"convert-path-system-to-posix",title:"Convert path system to POSIX",slug:"/commands/convert-path-system-to-posix",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(t){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Convert path system to POSIX"})," ( ",(0,r.jsx)(e.em,{children:"systemPath"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"systemPath"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u3001\u76F8\u5BFE\u307E\u305F\u306F\u7D76\u5BFE\u30D1\u30B9\u540D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u30AA\u30D7\u30B7\u30E7\u30F3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"POSIX (Unix) \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u30D1\u30B9\u540D"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(e.p,{children:"Convert path system to POSIX \u30B3\u30DE\u30F3\u30C9\u306F\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u30D1\u30B9\u540D\u3092POSIX (Unix) \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u30D1\u30B9\u540D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"systemPath"}),"\u5F15\u6570\u306B\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3057\u305F\u3001\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u306E\u30D1\u30B9\u540D\u3092\u6E21\u3057\u307E\u3059 (Mac OS \u3084Windows)\u3002\u3053\u306E\u30D1\u30B9\u306F\u7D76\u5BFE\u30D1\u30B9\u3001\u3042\u308B\u3044\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A9\u30EB\u30C0 (\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u3080\u30D5\u30A9\u30EB\u30C0) \u304B\u3089\u306E\u76F8\u5BFE\u30D1\u30B9\u3067\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6642\u306B\u3001\u30D1\u30B9\u306E\u8981\u7D20\u304C\u5B9F\u969B\u306B\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u5B58\u5728\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30B3\u30DE\u30F3\u30C9\u306F\u30D1\u30B9\u540D\u306E\u59A5\u5F53\u6027\u3092\u30C6\u30B9\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u306EPOSIX\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3057\u305F\u5B8C\u5168\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"systemPath"}),"\u306B\u6E21\u3055\u308C\u305F\u30D1\u30B9\u306E\u30BF\u30A4\u30D7\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5E38\u306B\u7D76\u5BFE\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"systemPath"}),"\u306B\u76F8\u5BFE\u30D1\u30B9\u540D\u3092\u6E21\u3059\u3068\u30014D\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A9\u30EB\u30C0\u306E\u30D1\u30B9\u540D\u3092\u8FFD\u52A0\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066POSIX\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001Convert path system to POSIX\u306FPOSIX\u30D1\u30B9\u306E\u7279\u5225\u6587\u5B57\u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u307E\u305B\u3093\u3002",(0,r.jsx)(e.em,{children:"*"}),'\u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u7279\u5225\u6587\u5B57\u306F\u5909\u63DB\u3055\u308C\u307E\u3059 (\u4F8B\u3048\u3070"My folder"\u306F"My%20folder"\u306B\u306A\u308A\u307E\u3059)\u3002']}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.p,{children:"OS X \u3067\u306E\u4F8B\u984C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("machd:file 2.txt")\n\xa0\xa0//machd \u306F\u8D77\u52D5\u30C7\u30A3\u30B9\u30AF\n\xa0\xa0//"/file 2.txt" \u3092\u8FD4\u3059\n\xa0$path:=Convert path system to POSIX("disk2:file 2.txt")\n\xa0\xa0//disk2 \u306F(\u8D77\u52D5\u30C7\u30A3\u30B9\u30AF\u3067\u306A\u3044)\u8FFD\u52A0\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30AF\n\xa0\xa0//"/Volumes/disk2/file 2.txt"\u3092\u8FD4\u3059\n\xa0$path:=Convert path system to POSIX("machd:file 2.txt";*)\n\xa0\xa0//"/file%202.txt"\u3092\u8FD4\u3059\n\xa0$path:=Convert path system to POSIX(":resources:images")\xa0//\u76F8\u5BFE\u30D1\u30B9\n\xa0\xa0//"/User/mark/Documents/videodatabase/resources/images" \u3092\u8FD4\u3059\n\xa0$path:=Convert path system to POSIX("resources:images")\xa0//\u7D76\u5BFE\u30D1\u30B9\n\xa0\xa0//"/resources/images" \u3092\u8FD4\u3059\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"Windows\u3067\u306E\u4F8B\u984C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("c:\\docs\\file 2.txt")\n\xa0\xa0// "c:/docs/file 2.txt" \u3092\u8FD4\u3059\n\xa0$path:=Convert path system to POSIX("\\\\srv\\tempo\\file.txt")\n\xa0\xa0// "//srv/tempo/file.txt" \u3092\u8FD4\u3059\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/path-to-object",children:"Path to object"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/test-path-name",children:"Test path name"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1106"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function l(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return c},a:function(){return d}});var s=n(667294);let r={},o=s.createContext(r);function d(t){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);