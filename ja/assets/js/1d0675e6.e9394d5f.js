"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5035"],{532546:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"Events/onMouseUp","title":"On Mouse Up","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                  | \u5B9A\u7FA9                             |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/Events/onMouseUp.md","sourceDirName":"Events","slug":"/Events/onMouseUp","permalink":"/docs/ja/Events/onMouseUp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onMouseUp","title":"On Mouse Up"},"sidebar":"docs","previous":{"title":"On Mouse Move","permalink":"/docs/ja/Events/onMouseMove"},"next":{"title":"On Open Detail","permalink":"/docs/ja/Events/onOpenDetail"}}'),o=t("785893"),r=t("250065");let c={id:"onMouseUp",title:"On Mouse Up"},i=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u30B3\u30FC\u30C9"}),(0,o.jsx)(n.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,o.jsx)(n.th,{children:"\u5B9A\u7FA9"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesObject#%E5%BC%8F%E3%81%AE%E5%9E%8B%E5%BC%8F%E3%82%BF%E3%82%A4%E3%83%97",children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u578B"}),"\u306E",(0,o.jsx)(n.a,{href:"/docs/ja/FormObjects/inputOverview",children:"\u5165\u529B"})]}),(0,o.jsx)(n.td,{children:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D4\u30AF\u30C1\u30E3\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u3066\u5DE6\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u96E2\u3057\u305F"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:["\u30D4\u30AF\u30C1\u30E3\u30FC\u578B\u306E\u5165\u529B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u3001\u30C9\u30E9\u30C3\u30B0\u4E2D\u306B\u5DE6\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u30EA\u30EA\u30FC\u30B9\u3057\u305F\u3068\u304D\u306B ",(0,o.jsx)(n.code,{children:"On Mouse Up"})," \u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u305F\u3068\u3048\u3070\u3001SVG\u30A8\u30EA\u30A2\u5185\u3067\u30E6\u30FC\u30B6\u30FC\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u79FB\u52D5\u3001\u30EA\u30B5\u30A4\u30BA\u3001\u63CF\u753B\u3059\u308B\u3053\u3068\u3092\u53EF\u80FD\u306B\u3057\u305F\u3044\u5834\u5408\u306B\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"On Mouse Up"})," \u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u3001\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F\u30ED\u30FC\u30AB\u30EB\u306E\u5EA7\u6A19\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5EA7\u6A19\u306F ",(0,o.jsx)(n.code,{children:"MouseX"})," \u3068 ",(0,o.jsx)(n.code,{children:"MouseY"})," \u30B7\u30B9\u30C6\u30E0\u5909\u6570 \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002 \u5EA7\u6A19\u306F\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u8868\u73FE\u3055\u308C\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u5DE6\u4E0A\u9685\u304C\u8D77\u70B9 (0,0) \u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:['\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30D5\u30A9\u30FC\u30E0\u306E "\u30B9\u30C6\u30FC\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC" \u304C\u975E\u540C\u671F\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u5834\u5408 (\u3064\u307E\u308A\u3001\u30AF\u30EA\u30C3\u30AF\u5F8C\u306B ',(0,o.jsx)(n.code,{children:"On Mouse Up"})," \u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u3051\u53D6\u3089\u306A\u304B\u3063\u305F\u5834\u5408) \u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306B\u3001",(0,o.jsx)(n.code,{children:"Is waiting mouse up"})," \u30B3\u30DE\u30F3\u30C9\u3082\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u305F\u3068\u3048\u3070\u3001\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u308B\u524D\u306B\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u30A2\u30E9\u30FC\u30C8\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u305F\u5834\u5408\u306A\u3069\u3067\u3059\u3002 ",(0,o.jsx)(n.code,{children:"On Mouse Up"})," \u30A4\u30D9\u30F3\u30C8\u306E\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u3068\u4F7F\u7528\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001",(0,o.jsx)(n.code,{children:"Is waiting mouse up"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u30D4\u30AF\u30C1\u30E3\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,o.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesAction#%E3%83%89%E3%83%A9%E3%83%83%E3%82%B0%E6%9C%89%E5%8A%B9",children:"\u30C9\u30E9\u30C3\u30B0\u6709\u52B9"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,o.jsx)(n.code,{children:"On Mouse Up"})," \u30A4\u30D9\u30F3\u30C8\u306F\u3044\u304B\u306A\u308B\u5834\u5408\u3082\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let o={},r=s.createContext(o);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);