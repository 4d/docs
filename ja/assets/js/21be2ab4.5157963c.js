"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67956"],{44091:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","description":"GET PASTEBOARD DATA TYPE ( 4Dsignatures ; nativeTypes {; formatNames} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pasteboard-data-type.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data-type","permalink":"/docs/ja/20-R7/commands/get-pasteboard-data-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","slug":"/commands/get-pasteboard-data-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA","permalink":"/docs/ja/20-R7/commands/get-pasteboard-data"},"next":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/ja/20-R7/commands/get-picture-from-pasteboard"}}'),d=t("785893"),r=t("250065");let i={id:"get-pasteboard-data-type",title:"GET PASTEBOARD DATA TYPE",slug:"/commands/get-pasteboard-data-type",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET PASTEBOARD DATA TYPE"})," ( ",(0,d.jsx)(n.em,{children:"4Dsignatures"})," ; ",(0,d.jsx)(n.em,{children:"nativeTypes"})," {; ",(0,d.jsx)(n.em,{children:"formatNames"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4Dsignatures"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E4D \u30B7\u30B0\u30CD\u30C1\u30E3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nativeTypes"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30CD\u30A4\u30C6\u30A3\u30D6\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"formatNames"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u540D (Windows\u306E\u307F), Mac OS\u3067\u306F\u7A7A\u306E\u6587\u5B57\u5217"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"GET PASTEBOARD DATA TYPE \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u542B\u307E\u308C\u308B\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E00\u822C\u7684\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u3001\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306EOn Drop \u307E\u305F\u306F On Drag Over \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u5185\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u7279\u306B\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u7279\u5B9A\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u304C\u5B58\u5728\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F2\u3064\u307E\u305F\u306F3\u3064\u306E\u914D\u5217\u306B\u3001\u8907\u6570\u306E\u7570\u306A\u308B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"4Dsignatures"}),' \u914D\u5217\u306B\u306F\u5185\u90E8\u7684\u306A4D \u30B7\u30B0\u30CD\u30C1\u30E3 (\u4F8B\u3048\u3070\u201Ccom.4d.private.picture.gif\u201D) \u3092\u4F7F\u7528\u3057\u3066\u8868\u73FE\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u304C\u8FD4\u3055\u308C\u307E\u3059\u30024D\u304C\u8A8D\u8B58\u3067\u304D\u306A\u3044\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5834\u5408\u3001\u7A7A\u306E\u6587\u5B57\u5217 ("") \u304C\u914D\u5217\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"nativeTypes"})," \u914D\u5217\u306B\u306F\u30CD\u30A4\u30C6\u30A3\u30D6\u30BF\u30A4\u30D7\u3092\u4F7F\u7528\u3057\u3066\u8868\u73FE\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30CD\u30A4\u30C6\u30A3\u30D6\u30BF\u30A4\u30D7\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306FMac OS\u3068Windows\u3067\u7570\u306A\u308A\u307E\u3059:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Mac OS\u3067\u306F\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u30BF\u30A4\u30D7\u306FUTI (Uniform Type Identifier) \u3068\u3057\u3066\u8868\u73FE\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["Windows\u3067\u306F\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u30BF\u30A4\u30D7\u306F\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u540D\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u756A\u53F7\u3068\u3057\u3066\u8868\u73FE\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"nativeTypes"})," \u914D\u5217\u306B\u306F\u3053\u306E\u756A\u53F7\u304C\u6587\u5B57\u5217 (\u201C3\u201D, \u201C12\u201D, \u7B49) \u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002\u3082\u3057\u660E\u78BA\u306A\u30E9\u30D9\u30EB\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.em,{children:"formatNames"})," \u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u306E\u914D\u5217\u306B\u306FWindows\u306B\u304A\u3051\u308B\u30CD\u30A4\u30C6\u30A3\u30BF\u30A4\u30D7\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u540D\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"nativeTypes"})," \u914D\u5217\u3067\u306F\u30014D\u304C\u53C2\u7167\u3067\u304D\u306A\u3044\u30BF\u30A4\u30D7\u3092\u542B\u3080\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u4E2D\u306E\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7 \u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Windows\u3067\u306F\u3001",(0,d.jsx)(n.em,{children:"formatNames"})," \u914D\u5217\u3092\u6E21\u3057\u3066\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u4E2D\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u540D\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u914D\u5217\u306B\u8FD4\u3055\u308C\u308B\u5024\u306F\u3001\u4F8B\u3048\u3070\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u9078\u629E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002Mac OS\u3067\u306F\u3001",(0,d.jsx)(n.em,{children:"formatNames"})," \u914D\u5217\u306B\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306E\u7BA1\u7406"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"958"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);