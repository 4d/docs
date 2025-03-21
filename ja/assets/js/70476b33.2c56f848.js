"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66615"],{4835:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/picture-to-blob","title":"PICTURE TO BLOB","description":"PICTURE TO BLOB ( picture ; pictureBlob ; codec )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/picture-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/picture-to-blob","permalink":"/docs/ja/commands/picture-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"picture-to-blob","title":"PICTURE TO BLOB","slug":"/commands/picture-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Picture size","permalink":"/docs/ja/commands/picture-size"},"next":{"title":"READ PICTURE FILE","permalink":"/docs/ja/commands/read-picture-file"}}'),c=t("785893"),s=t("250065");let d={id:"picture-to-blob",title:"PICTURE TO BLOB",slug:"/commands/picture-to-blob",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"PICTURE TO BLOB"})," ( ",(0,c.jsx)(n.em,{children:"picture"})," ; ",(0,c.jsx)(n.em,{children:"pictureBlob"})," ; ",(0,c.jsx)(n.em,{children:"codec"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"picture"}),(0,c.jsx)(n.td,{children:"Picture"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"pictureBlob"}),(0,c.jsx)(n.td,{children:"Blob"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"\u5909\u63DB\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u3092\u53D7\u3051\u53D6\u308BBLOB"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"codec"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3Codec ID"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsx)(n.p,{children:"PICTURE TO BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u3092\u4ED6\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3057\u3001\u5909\u63DB\u5F8C\u306E\u30D4\u30AF\u30C1\u30E3\u3092BLOB\u5185\u306B\u7D0D\u3081\u307E\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u30D4\u30AF\u30C1\u30E3\u30BF\u30A4\u30D7\u306E4D\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3092",(0,c.jsx)(n.em,{children:"picture"}),"\u5F15\u6570\u306B\u6E21\u3057\u307E\u3059\u3002",(0,c.jsx)(n.em,{children:"pictureBlob"}),"\u5F15\u6570\u306B\u306F\u3001\u5909\u63DB\u5F8C\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u7D0D\u3081\u308BBLOB\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"codec"})," \u5F15\u6570\u306B\u306F\u5909\u63DB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3059\u308B\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002",(0,c.jsx)(n.br,{}),"\nCodec\u306F\u62E1\u5F35\u5B50 (\u4F8B \u201C.gif\u201D), \u307E\u305F\u306F Mime\u30BF\u30A4\u30D7 (\u4F8B \u201Cimage/jpeg\u201D) \u3067\u3059\u3002\u5229\u7528\u53EF\u80FD\u306ACodec\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," \u30B3\u30DE\u30F3\u30C9\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001",(0,c.jsx)(n.em,{children:"picturBlob"}),"\u306B\u306F\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D4\u30AF\u30C1\u30E3\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5909\u63DB\u304C\u6B63\u5E38\u306B\u7D42\u4E86\u3059\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u5909\u63DB\u304C\u5931\u6557\u3057\u305F(\u5909\u63DB\u3067\u304D\u306A\u3044)\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u4EE3\u5165\u3055\u308C\u3001\u751F\u6210\u3055\u308C\u305FBLOB\u306F\u7A7A\u3067\u3059(0\u30D0\u30A4\u30C8)\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.p,{children:"\u7279\u5B9A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u3092GIF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3078\u3068\u5909\u63DB\u3057\u3001\u9759\u7684\u306AWeb \u30DA\u30FC\u30B8\u306B\u8868\u793A\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u8003\u3048\u3089\u308C\u307E\u3059:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var $picture : Picture\n\xa0var $BLOB : Blob\n\xa0var $path : Text\n\xa0\n\xa0$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd"\xa0//Resources \u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306E\u753B\u50CF\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u63A2\u3059\n\xa0READ PICTURE FILE($path;$picture)\xa0//\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u30D4\u30AF\u30C1\u30E3\u30FC\u5909\u6570\u3078\u3068\u4EE3\u5165\n\xa0\n\xa0PICTURE TO BLOB($picture;$BLOB;".gif")\xa0//\u30D4\u30AF\u30C1\u30E3\u30FC\u3092".gif" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3078\u3068\u5909\u63DB\n\xa0WEB SEND BLOB($BLOB;"image/gif")\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/write-picture-file",children:"WRITE PICTURE FILE"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"692"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,c.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let c={},s=r.createContext(c);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);