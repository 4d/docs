"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9087"],{871765:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"WebServer/allowProject","title":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u8A31\u53EF","description":"4DEVAL, 4DTEXT, 4DHTML \u306A\u3069\u306E 4D\u30BF\u30B0\u3084  /4DACTION URL \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Web\u306B\u516C\u958B\u3055\u308C\u305F 4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3042\u3089\u3086\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30EA\u30AF\u30A8\u30B9\u30C8 http://www.server.com/4DACTION/login \u306F login \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092 (\u5B58\u5728\u3059\u308C\u3070) \u5B9F\u884C\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WebServer/allowProject.md","sourceDirName":"WebServer","slug":"/WebServer/allowProject","permalink":"/docs/ja/WebServer/allowProject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"allowProject","title":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u8A31\u53EF"},"sidebar":"docs","previous":{"title":"HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u51E6\u7406","permalink":"/docs/ja/WebServer/httpRequests"},"next":{"title":"\u30AB\u30B9\u30BF\u30E0 HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/WebServer/errorPages"}}'),s=r("785893"),c=r("250065");let i={id:"allowProject",title:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u8A31\u53EF"},o=void 0,l={},d=[];function a(e){let n={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4DEVAL"}),", ",(0,s.jsx)(n.code,{children:"4DTEXT"}),", ",(0,s.jsx)(n.code,{children:"4DHTML"})," \u306A\u3069\u306E 4D\u30BF\u30B0\u3084  ",(0,s.jsx)(n.a,{href:"/docs/ja/WebServer/httpRequests#/4daction",children:(0,s.jsx)(n.code,{children:"/4DACTION URL"})})," \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Web\u306B\u516C\u958B\u3055\u308C\u305F 4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3042\u3089\u3086\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30EA\u30AF\u30A8\u30B9\u30C8 ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," \u306F ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"login"})})," \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092 (\u5B58\u5728\u3059\u308C\u3070) \u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u5177\u4F53\u7684\u306B\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u6545\u610F\u306B (\u3042\u308B\u3044\u306F\u4E88\u671F\u305B\u305A) Web\u7528\u3067\u306A\u3044\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3057\u307E\u3046\u3068\u3044\u3046\u3088\u3046\u306A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u8105\u304B\u3059\u30EA\u30B9\u30AF\u3092\u3082\u305F\u3089\u3057\u307E\u3059\u3002 \u3053\u306E\u30EA\u30B9\u30AF\u306F\u4EE5\u4E0B\u306E 3\u3064\u306E\u65B9\u6CD5\u3067\u56DE\u907F\u3067\u304D\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066 URL \u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u308B\u30E1\u30BD\u30C3\u30C9\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3059\u308B\u3002 \u6B20\u70B9: \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u591A\u304F\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u306E\u65B9\u6CD5\u306F\u7BA1\u7406\u304C\u56F0\u96E3\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u516C\u958B\u30AA\u30D7\u30B7\u30E7\u30F3: 4D\u30BF\u30B0\u3068URL (4DACTION...)"})," (\u30E1\u30BD\u30C3\u30C9\u30D7\u30ED\u30D1\u30C6\u30A3) \u3092\u4F7F\u7528\u3059\u308B:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(482940).Z+"",width:"577",height:"575"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3054\u3068\u306B\u3001\u7279\u5225\u306A URL ",(0,s.jsx)(n.code,{children:"4DACTION"})," \u3084 ",(0,s.jsx)(n.code,{children:"4DTEXT"}),", ",(0,s.jsx)(n.code,{children:"4DHTML"}),", ",(0,s.jsx)(n.code,{children:"4DEVAL"}),", ",(0,s.jsx)(n.code,{children:"4DSCRIPT"}),", ",(0,s.jsx)(n.code,{children:"4DIF"}),", ",(0,s.jsx)(n.code,{children:"4DELSEIF"}),", ",(0,s.jsx)(n.code,{children:"4DLOOP"})," \u306A\u3069\u306E 4D\u30BF\u30B0\u3092\u4F7F\u7528\u3057\u305F\u547C\u3073\u51FA\u3057\u3092\u8A31\u53EF\u3059\u308B\u304B\u3057\u306A\u3044\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u305D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u304B\u3089\u76F4\u63A5\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u4ED6\u65B9\u3001\u4ED6\u306E\u30BF\u30A4\u30D7\u306E\u547C\u3073\u51FA\u3057 (\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3084\u4ED6\u306E\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u306E\u547C\u3073\u51FA\u3057\u306A\u3069) \u3067\u306F\u3053\u308C\u3089\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 ",(0,s.jsx)(n.code,{children:"4DACTION"})," \u3084\u30BF\u30B0\u306A\u3069\u3092\u4F7F\u7528\u3057\u3066\u547C\u3073\u51FA\u3059\u3053\u3068\u306E\u3067\u304D\u308B\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u660E\u793A\u7684\u306B\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u3067\u4EE5\u4E0B\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(927459).Z+"",width:"54",height:"48"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},927459:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},482940:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},c=t.createContext(s);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);