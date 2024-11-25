"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64433"],{664733:function(e,r,a){a.r(r),a.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>l,assets:()=>d,toc:()=>c,frontMatter:()=>t});var n=JSON.parse('{"id":"ViewPro/advanced-programming","title":"Javascript \u306B\u3088\u308B\u9AD8\u5EA6\u306A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0","description":"4D View Pro \u30A8\u30EA\u30A2\u306F\u3001\u57CB\u3081\u8FBC\u307FWeb\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3 \u3092\u4F7F\u7528\u3059\u308B Web\u30A8\u30EA\u30A2\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 \u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u4ED6\u306EWeb\u30A8\u30EA\u30A2\u3068\u540C\u69D8\u306B\u3001WA Evaluate Javascript 4D\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001Javascript \u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/advanced-programming.md","sourceDirName":"ViewPro","slug":"/ViewPro/advanced-programming","permalink":"/docs/ja/20-R6/ViewPro/advanced-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"advanced-programming","title":"Javascript \u306B\u3088\u308B\u9AD8\u5EA6\u306A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"},"sidebar":"docs","previous":{"title":"\u30AF\u30E9\u30B9","permalink":"/docs/ja/20-R6/ViewPro/classes"},"next":{"title":"\u30B3\u30DE\u30F3\u30C9","permalink":"/docs/ja/20-R6/ViewPro/commands"}}'),s=a("785893"),i=a("250065");let t={id:"advanced-programming",title:"Javascript \u306B\u3088\u308B\u9AD8\u5EA6\u306A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"},o=void 0,d={},c=[{value:"\u4F8B\u984C: \u30EA\u30DC\u30F3\u3092\u975E\u8868\u793A\u306B\u3059\u308B",id:"\u4F8B\u984C-\u30EA\u30DC\u30F3\u3092\u975E\u8868\u793A\u306B\u3059\u308B",level:2},{value:"SpreadJS \u306E Javascript\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057",id:"spreadjs-\u306E-javascript\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"4D View Pro Tips \u306E\u30EA\u30DD\u30B8\u30C8\u30EA",id:"4d-view-pro-tips-\u306E\u30EA\u30DD\u30B8\u30C8\u30EA",level:2}];function p(e){let r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["4D View Pro \u30A8\u30EA\u30A2\u306F\u3001",(0,s.jsx)(r.a,{href:"/docs/ja/20-R6/FormObjects/propertiesWebArea#%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BFweb%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E3%82%92%E4%BD%BF%E7%94%A8",children:"\u57CB\u3081\u8FBC\u307FWeb\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3"})," \u3092\u4F7F\u7528\u3059\u308B ",(0,s.jsx)(r.a,{href:"/docs/ja/20-R6/FormObjects/webAreaOverview",children:"Web\u30A8\u30EA\u30A2\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u4ED6\u306EWeb\u30A8\u30EA\u30A2\u3068\u540C\u69D8\u306B\u3001",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page1029.html",children:(0,s.jsx)(r.code,{children:"WA Evaluate Javascript"})})," 4D\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001Javascript \u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["4D View Pro\u306F ",(0,s.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs",children:"SpreadJS \u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3"})," \u306B\u57FA\u3065\u3044\u3066\u52D5\u4F5C\u3059\u308B\u305F\u3081\u30014D View Pro \u30A8\u30EA\u30A2\u5185\u3067 SpreadJS \u306E Javascript\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4F8B\u984C-\u30EA\u30DC\u30F3\u3092\u975E\u8868\u793A\u306B\u3059\u308B",children:"\u4F8B\u984C: \u30EA\u30DC\u30F3\u3092\u975E\u8868\u793A\u306B\u3059\u308B"}),"\n",(0,s.jsxs)(r.p,{children:["4D View Pro \u306F Web\u30A8\u30EA\u30A2\u3067\u3042\u308B\u305F\u3081\u3001Web\u30DA\u30FC\u30B8\u8981\u7D20\u3092\u9078\u629E\u3057\u3001Javascript \u3092\u4F7F\u3063\u3066\u305D\u306E\u52D5\u4F5C\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001spreadJS \u306E ",(0,s.jsx)(r.a,{href:"/docs/ja/20-R6/ViewPro/configuring#%E3%83%AA%E3%83%9C%E3%83%B3",children:"\u30EA\u30DC\u30F3"})," \u3092\u975E\u8868\u793A\u306B\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"// \u30DC\u30BF\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"spreadjs-\u306E-javascript\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057",children:"SpreadJS \u306E Javascript\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,s.jsx)(r.p,{children:"Javascript \u30E1\u30BD\u30C3\u30C9\u306E SpreadJS\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u5229\u7528\u3057\u3001\u3053\u308C\u3089\u3092\u76F4\u63A5\u547C\u3073\u51FA\u3057\u3066\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u5236\u5FA1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["4D \u306F\u30014D View Pro \u30A8\u30EA\u30A2\u5185\u306E\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8 (\u30EF\u30FC\u30AF\u30D6\u30C3\u30AF\u3068\u3082\u547C\u3070\u308C\u307E\u3059) \u3092\u6307\u3059\u30D3\u30EB\u30C8\u30A4\u30F3\u306E ",(0,s.jsx)(r.code,{children:"Utils.spread"})," \u5F0F\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u3053\u308C\u3092\u4F7F\u3046\u3053\u3068\u3067\u3088\u308A\u7C21\u5358\u306B SpreadJS \u306E ",(0,s.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs/api/modules/GC.Data",children:"Workbook\u30E1\u30BD\u30C3\u30C9"})," \u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(r.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(r.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3067\u306E\u6700\u5F8C\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5143\u306B\u623B\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,s.jsx)(r.h2,{id:"4d-view-pro-tips-\u306E\u30EA\u30DD\u30B8\u30C8\u30EA",children:"4D View Pro Tips \u306E\u30EA\u30DD\u30B8\u30C8\u30EA"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," \u306F GitHub \u306E\u30EA\u30DD\u30B8\u30C8\u30EA\u3067\u3001\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u7BA1\u7406\u3001\u5217\u3084\u884C\u306E\u30BD\u30FC\u30C8\u3001\u30AB\u30B9\u30BF\u30E0\u30AB\u30EB\u30C1\u30E3\u306E\u4F5C\u6210\u306A\u3069\u3001\u4FBF\u5229\u306A\u6A5F\u80FD\u3092\u6E80\u8F09\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u81EA\u7531\u306B\u30AF\u30ED\u30FC\u30F3\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5B9F\u9A13\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})]})}function l(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return o},a:function(){return t}});var n=a(667294);let s={},i=n.createContext(s);function t(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);