"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6796"],{143610:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-pasteboard-data","title":"GET PASTEBOARD DATA","description":"GET PASTEBOARD DATA ( dataType ; data )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pasteboard-data.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data","permalink":"/docs/ja/commands/get-pasteboard-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pasteboard-data","title":"GET PASTEBOARD DATA","slug":"/commands/get-pasteboard-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get file from pasteboard","permalink":"/docs/ja/commands/get-file-from-pasteboard"},"next":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/ja/commands/get-pasteboard-data-type"}}'),d=t("785893"),a=t("250065");let r={id:"get-pasteboard-data",title:"GET PASTEBOARD DATA",slug:"/commands/get-pasteboard-data",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET PASTEBOARD DATA"})," ( ",(0,d.jsx)(n.em,{children:"dataType"})," ; ",(0,d.jsx)(n.em,{children:"data"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dataType"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u304B\u3089\u53D6\u308A\u51FA\u3059\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u304B\u3089\u53D6\u308A\u51FA\u3055\u308C\u305F\u30C7\u30FC\u30BF"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["GET PASTEBOARD DATA \u30B3\u30DE\u30F3\u30C9\u306F\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u4E2D",(0,d.jsx)(n.em,{children:"dataType"}),"\u3067\u6307\u5B9A\u3057\u305F\u30BF\u30A4\u30D7\u306E\u30C7\u30FC\u30BF\u3092\u3001BLOB \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 ",(0,d.jsx)(n.em,{children:"data"})," \u306B\u8FD4\u3057\u307E\u3059\u3002 (\u4F8B\u3048\u3070\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B4D\u5185\u3067\u30B3\u30D4\u30FC\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001BLOB\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306FUTF-16\u3067\u3059)"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30B3\u30D4\u30FC/\u30DA\u30FC\u30B9\u30C8\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"dataType"}),"\u306B\u306F\u53D6\u308A\u51FA\u3059\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u30024D \u30B7\u30B0\u30CD\u30C1\u30E3\u3001UTI \u30BF\u30A4\u30D7 (Mac OS), \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u540D/\u756A\u53F7 (Windows), \u307E\u305F\u306F4\u6587\u5B57\u306E\u30BF\u30A4\u30D7 (\u4E92\u63DB\u6027)\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30BF\u30A4\u30D7\u306B\u3064\u3044\u3066\u306F ",(0,d.jsx)(n.em,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306E\u7BA1\u7406"})," \u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u30D5\u30A1\u30A4\u30EB\u578B\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u51FA\u3059\u3053\u3068\u306F\u51FA\u6765\u307E\u305B\u3093\u3002\u305D\u308C\u3092\u3059\u308B\u305F\u3081\u306B\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E2\u3064\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u305D\u308C\u305E\u308C\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E",(0,d.jsx)(n.em,{children:"asOptions"})," \u914D\u5217 (\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3042\u308B\u3044\u306F\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30EA\u30B9\u30C8) \u304B\u3089\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3042\u308B\u3044\u306F\u914D\u5217\u3078\u30C7\u30FC\u30BF\u3092\u30DA\u30FC\u30B9\u30C8\u3057\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// bCopyasOptions \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0If(Size of array(asOptions)>0)\xa0// \u30B3\u30D4\u30FC\u3059\u308B\u3082\u306E\u304C\u3042\u308B\u304B?\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(asOptions;$vxClipData)\xa0// \u914D\u5217\u8981\u7D20\u3092BLOB\u306B\u683C\u7D0D\n\xa0\xa0\xa0\xa0CLEAR PASTEBOARD\xa0// \u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u3092\u7A7A\u306B\u3059\u308B\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("artx";$vxClipData)\xa0// \u30C7\u30FC\u30BF\u578B\u306F\u4EFB\u610F\u306B\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\n\xa0End if\n\xa0\n\xa0\xa0// bPasteasOptions \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0If(Pasteboard data size("artx")>0)\xa0// \u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B"artx" \u30BF\u30A4\u30D7\u306E\u30C7\u30FC\u30BF\u304C\u3042\u308B\u304B?\n\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("artx";$vxClipData)\xa0// \u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u51FA\u3059\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vxClipData;asOptions)\xa0// BLOB\u30C7\u30FC\u30BF\u304B\u3089\u914D\u5217\u3092\u4F5C\u6210\n\xa0\xa0\xa0\xa0asOptions:=0\xa0// \u914D\u5217\u306E\u9078\u629E\u8981\u7D20\u3092\u30EA\u30BB\u30C3\u30C8\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u304C\u6B63\u3057\u304F\u53D6\u308A\u51FA\u305B\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"401"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let d={},a=s.createContext(d);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);