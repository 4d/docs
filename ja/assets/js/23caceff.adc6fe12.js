"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72380"],{558970:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/set-macro-parameter","title":"SET MACRO PARAMETER","description":"SET MACRO PARAMETER ( selector ; textParam )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-macro-parameter","permalink":"/docs/ja/commands/set-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-macro-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-macro-parameter","title":"SET MACRO PARAMETER","slug":"/commands/set-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/ja/commands/set-environment-variable"},"next":{"title":"START MONITORING ACTIVITY","permalink":"/docs/ja/commands/start-monitoring-activity"}}'),s=n("785893"),d=n("250065");let c={id:"set-macro-parameter",title:"SET MACRO PARAMETER",slug:"/commands/set-macro-parameter",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u6CE8",id:"\u6CE8",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SET MACRO PARAMETER"})," ( ",(0,s.jsx)(t.em,{children:"selector"})," ; ",(0,s.jsx)(t.em,{children:"textParam"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5F15\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selector"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u4F7F\u7528\u3059\u308B\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textParam"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u9001\u3089\u308C\u305F\u30C6\u30AD\u30B9\u30C8"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,s.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:["SET MACRO PARAMETER\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u547C\u3073\u51FA\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306B\u30C6\u30AD\u30B9\u30C8",(0,s.jsx)(t.em,{children:"textParam"}),"\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u30C6\u30AD\u30B9\u30C8\u304C\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u9078\u629E\u3055\u308C\u305F\u5834\u5408\u3001\u5F15\u6570",(0,s.jsx)(t.em,{children:"selector"}),"\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C6\u30AD\u30B9\u30C8",(0,s.jsx)(t.em,{children:"textParam"}),'\u304C\u3059\u3079\u3066\u306E\u30E1\u30BD\u30C3\u30C9\u30C6\u30AD\u30B9\u30C8\u3092\u7F6E\u304D\u63DB\u3048\u308B\u304B\u3001\u305D\u308C\u3068\u3082\u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u3092\u7F6E\u304D\u63DB\u3048\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30BB\u30EC\u30AF\u30BF\u306B\u306F\u3001\u30C6\u30FC\u30DE"" \u306B\u8FFD\u52A0\u3055\u308C\u3066\u3044\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4E00\u3064\u6E21\u3057\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{children:"\u5024"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Full method text"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Highlighted method text"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["\u30C6\u30AD\u30B9\u30C8\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,s.jsx)(t.em,{children:"textParam"}),"\u304C\u30E1\u30BD\u30C3\u30C9\u3078\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.h4,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ja/commands/get-macro-parameter",title:"GET MACRO PARAMETER",children:"GET MACRO PARAMETER"}),'\u3068SET MACRO PARAMETER\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u78BA\u306B\u8D77\u52D5\u3059\u308B\u306B\u306F\u3001\u65B0\u3057\u3044"\u30D0\u30FC\u30B8\u30E7\u30F3" \u306E\u5C5E\u6027\u304C\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30DE\u30AF\u30ED\u81EA\u4F53\u306B\u8A18\u8FF0\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<macro name="MyMacro" version="2">\n--- Text of macro ---\n</macro>\n'})}),"\n",(0,s.jsx)(t.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306E\u30DE\u30AF\u30ED\u306F\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u3078\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $input_text : Text\n\xa0var $output_text : Text\n\xa0GET MACRO PARAMETER(Highlighted method text;$input_text)\n\xa0\xa0//\u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306F\u30C6\u30FC\u30D6\u30EB\u3001\u3064\u307E\u308A \u201C[Customers]\u201D \u3068\u4EEE\u5B9A\u3059\u308B\n\xa0$output_text:=""\n\xa0$output_text:=$output_text+Command name(47)+"("+$input_text+")"\xa0//\u3059\u3079\u3066\u9078\u629E\u3059\u308B ([Customers])\n\xa0$output_text:=$output_text+"$i:="+Command name(76)+"("+$input_text+")"\xa0//\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3 ([Customers]) \u5185\u306B\u3042\u308B$i:=Records\n\xa0SET MACRO PARAMETER(Highlighted method text;$output_text)\n\xa0\xa0//\u65B0\u3057\u3044\u30B3\u30FC\u30C9\u3067\u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u7F6E\u304D\u63DB\u3048\u308B\n'})}),"\n",(0,s.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/ja/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var r=n(667294);let s={},d=r.createContext(s);function c(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);