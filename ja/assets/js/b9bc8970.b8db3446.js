"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82461"],{825908:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/web-get-statistics","title":"WEB GET STATISTICS","description":"WEB GET STATISTICS ( pages ; hits ; usage )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-statistics","permalink":"/docs/ja/20-R7/commands/web-get-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-statistics","title":"WEB GET STATISTICS","slug":"/commands/web-get-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get server info","permalink":"/docs/ja/20-R7/commands/web-get-server-info"},"next":{"title":"WEB GET VARIABLES","permalink":"/docs/ja/20-R7/commands/web-get-variables"}}'),r=s("785893"),d=s("250065");let i={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB GET STATISTICS"})," ( ",(0,r.jsx)(n.em,{children:"pages"})," ; ",(0,r.jsx)(n.em,{children:"hits"})," ; ",(0,r.jsx)(n.em,{children:"usage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pages"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u6700\u3082\u95B2\u89A7\u3055\u308C\u308B\u30DA\u30FC\u30B8\u306E\u540D\u524D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hits"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u5404\u30DA\u30FC\u30B8\u306E\u30D2\u30C3\u30C8\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"usage"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4F7F\u7528\u7387"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB GET STATISTICS"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Web\u30B5\u30FC\u30D0\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u6700\u3082\u95B2\u89A7\u3055\u308C\u305F\u30DA\u30FC\u30B8\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u53D6\u5F97 \u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u3053\u308C\u3089\u306E\u7D71\u8A08\u306F\u3001\u9759\u6B62\u753B\u3001GIF\u30D4\u30AF\u30C1\u30E3\u3001JPEG\u30D4\u30AF\u30C1\u30E3 (100KB\u672A\u6E80) \u3068\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8 (.css) \u306E\u307F\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," 4D Web\u30B5\u30FC\u30D0\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/qr-delete-column",children:"QR DELETE COLUMN"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F\u6700\u3082\u95B2\u89A7\u3055\u308C\u305F\u30DA\u30FC\u30B8\u306E\u540D\u524D\u3092\u30C6\u30AD\u30B9\u30C8\u914D\u5217",(0,r.jsx)(n.em,{children:"pages"}),"\u306B\u4EE3\u5165\u3057\u307E\u3059\u3002\u500D\u9577\u6574\u6570\u914D\u5217 ",(0,r.jsx)(n.em,{children:"hits"}),' \u306F\u5404\u30DA\u30FC\u30B8\u306E "\u30D2\u30C3\u30C8" \u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u5F15\u6570 ',(0,r.jsx)(n.em,{children:"usage"})," \u306F\u5404\u30DA\u30FC\u30B8\u3054\u3068\u306EWeb\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4F7F\u7528\u7387\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:['Web\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u7D71\u8A08\u3092\u8868\u793A\u3059\u308B\u30BB\u30DF\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u30DA\u30FC\u30B8\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u884C\u3046\u305F\u3081\u306B\u3001"stats.shtm"\u3068\u3044\u3046\u540D\u524D\u306E\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFHTML\u30DA\u30FC\u30B8 (4D\u306F\u81EA\u52D5\u3067.shtm\u62E1\u5F35\u5B50\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u5BFE\u8C61\u3068\u3057\u307E\u3059) \u4E2D\u306B*<!\u2013\u2013#4DSCRIPT/STATS\u2013\u2013>',(0,r.jsxs)(n.em,{children:["\u30BF\u30B0\u3068\u3001",(0,r.jsx)(n.em,{children:"vPages"}),"\u3068"]}),"vUsage*\u5909\u6570\u3078\u306E\u53C2\u7167\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:"<html>\n<head><title>4D Web\u7D71\u8A08</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30AD\u30E3\u30C3\u30B7\u30E5 (%): </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>\u6700\u3082\u53C2\u7167\u3055\u308C\u3066\u3044\u308B\u30DA\u30FC\u30B8: </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n"})}),"\n",(0,r.jsx)(n.p,{children:"STATS\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u306F\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var vPages : Text\n\xa0ARRAY TEXT(pages;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0\n\xa0WEB GET STATISTICS(pages;hits;vUsage)\n\xa0For($i;1;Size of array(pages))\n\xa0\xa0// \u30AD\u30E3\u30C3\u30B7\u30E5\u4E2D\u306B\u73FE\u308C\u308B\u30DA\u30FC\u30B8\u3054\u3068\u306B\n\xa0\xa0\xa0\xa0vPages:=vPages+pages{$i}+"\xa0\xa0\xa0"+String(hits{$i})+"\n"\n\xa0\xa0// \u30DA\u30FC\u30B8\u306E\u540D\u79F0\u3068HTML\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3059\u308B\n\xa0End for\n'})}),"\n",(0,r.jsxs)(n.p,{children:["URL\u30EA\u30F3\u30AF\u307E\u305F\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-send-file",children:"WEB SEND FILE"}),'\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066"stats.shtm"\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"658"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);