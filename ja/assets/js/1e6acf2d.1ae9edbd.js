"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81107"],{418404:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/length","title":"Length","description":"Length ( string ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/length.md","sourceDirName":"commands-legacy","slug":"/commands/length","permalink":"/docs/ja/commands/length","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flength.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"length","title":"Length","slug":"/commands/length","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Insert string","permalink":"/docs/ja/commands/insert-string"},"next":{"title":"Localized string","permalink":"/docs/ja/commands/localized-string"}}'),r=t("785893"),l=t("250065");let d={id:"length",title:"Length",slug:"/commands/length",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4}];function h(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Length"})," ( ",(0,r.jsx)(n.em,{children:"string"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9577\u3055\u3092\u8ABF\u3079\u308B\u6587\u5B57\u5217"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u6587\u5B57\u5217\u306E\u9577\u3055"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["Length\u306F",(0,r.jsx)(n.em,{children:"aString"}),"\u306E\u9577\u3055\u3092\u77E5\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002Length\u306F",(0,r.jsx)(n.em,{children:"aString"}),"\u4E2D\u306E\u6587\u5B57\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),': Unicode \u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u6587\u5B57\u5217\u306B (\u7121\u8996\u53EF\u80FD\u306A\u6587\u5B57\u3092\u542B\u3081) \u4F55\u3089\u304B\u306E\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u305F\u3044\u5834\u5408\u3001If (vtAnyText="")\u3067\u306F\u306A\u304FIf (Length(vtAnyText)=0)\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u6587\u5B57\u5217\u304C\u7121\u8996\u53EF\u80FD\u306A\u6587\u5B57\u5217\u3067\u3042\u308BChar(1)\u304C1\u3064\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001Length(vtAnyText)\u306F1\u3092\u8FD4\u3057\u307E\u3059\u304C\u3001vtAnyText=""\u306FTrue\u3092\u8FD4\u3057\u307E\u3059\u3002']}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:["Length\u306E\u4F7F\u7528\u4F8B\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002\u7D50\u679C\u3092\u5909\u6570",(0,r.jsx)(n.em,{children:"vlResult"}),"\u306B\u4EE3\u5165\u3057\u307E\u3059\u3002\u30B3\u30E1\u30F3\u30C8\u306F\u3001\u5909\u6570",(0,r.jsx)(n.em,{children:"vlResult"}),"\u306B\u4EE3\u5165\u3055\u308C\u308B\u5024\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vlResult:=Length("Topaz")\xa0// vlResult\u306F5\n\xa0vlResult:=Length("Citizen")\xa0// vlResult\u306F7\n'})})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);