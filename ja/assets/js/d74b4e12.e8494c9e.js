"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99044"],{744126:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands/session-storage.md","sourceDirName":"commands","slug":"/commands/session-storage","permalink":"/docs/ja/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-storage.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"session-storage","title":"Session storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/ja/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/ja/commands/unregister-client"}}'),r=s("785893"),i=s("250065");let d={id:"session-storage",title:"Session storage",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Session storage"})," ( ",(0,r.jsx)(n.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u56FA\u6709ID(UUID)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306EStorage \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R8"}),(0,r.jsx)(n.td,{children:"\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30B5\u30DD\u30FC\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Session storage"})," command returns the storage object of the session whose unique identifier you passed in the ",(0,r.jsx)(n.em,{children:"id"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"id"})," \u5F15\u6570\u306B\u306F\u3001Storage \u3092\u53D6\u5F97\u3057\u305F\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u306EUUID \u3092\u6E21\u3057\u307E\u3059 \u3002 \u3053\u308C\u306F4D (4D Server\u3001\u307E\u305F\u306F\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u306F\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u72484D )\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u5272\u308A\u632F\u3089\u308C\u308B\u3082\u306E\u3067\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/API/SessionClass",children:"session \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u306E",(0,r.jsx)(n.a,{href:"/docs/ja/API/SessionClass#id",children:(0,r.jsx)(n.strong,{children:".id"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9",(0,r.jsx)(n.strong,{children:"Null"})," \u306F\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8\u610F:"})," \u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u8B58\u5225\u5B50\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/process-activity",children:"Process activity"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(n.a,{href:"/docs/ja/API/SessionClass#storage",children:(0,r.jsx)(n.strong,{children:".storage"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059\u3002  \u3053\u308C\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u5229\u7528\u53EF\u80FD\u306A\u60C5\u5831\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u5171\u6709\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:'\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u7279\u5B9A\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306EStorage \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E"settings" \u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u3092\u5909\u66F4\u3057\u307E\u3059:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066storage \u3092\u8A2D\u5B9A\n\xa0\xa0// "\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C" \u30E1\u30BD\u30C3\u30C9\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3082\u306E\u3068\u3059\u308B\n\xa0\n\xa0#DECLARE($id : Text; $text : Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/process-activity",children:"Process activity"}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/session",children:"Session"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1839"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);