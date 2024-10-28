"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78341],{768551:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=n(474848),r=n(28453);const d={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/web-get-statistics",title:"WEB GET STATISTICS",description:"WEB GET STATISTICS ( pages ; hits ; usage )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-statistics.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-statistics",permalink:"/docs/ja/commands/web-get-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB Get server info",permalink:"/docs/ja/commands/web-get-server-info"},next:{title:"WEB GET VARIABLES",permalink:"/docs/ja/commands/web-get-variables"}},a={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4}];function o(e){const s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET STATISTICS"})," ( ",(0,t.jsx)(s.em,{children:"pages"})," ; ",(0,t.jsx)(s.em,{children:"hits"})," ; ",(0,t.jsx)(s.em,{children:"usage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u5f15\u6570"}),(0,t.jsx)(s.th,{children:"\u578b"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pages"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"\u6700\u3082\u95b2\u89a7\u3055\u308c\u308b\u30da\u30fc\u30b8\u306e\u540d\u524d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hits"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"\u5404\u30da\u30fc\u30b8\u306e\u30d2\u30c3\u30c8\u6570"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"usage"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f7f\u7528\u7387"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET STATISTICS"}),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Web\u30b5\u30fc\u30d0\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f\u6700\u3082\u95b2\u89a7\u3055\u308c\u305f\u30da\u30fc\u30b8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97 \u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3053\u308c\u3089\u306e\u7d71\u8a08\u306f\u3001\u9759\u6b62\u753b\u3001GIF\u30d4\u30af\u30c1\u30e3\u3001JPEG\u30d4\u30af\u30c1\u30e3 (100KB\u672a\u6e80) \u3068\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8 (.css) \u306e\u307f\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," 4D Web\u30b5\u30fc\u30d0\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,t.jsx)(s.a,{href:"/docs/ja/commands/qr-delete-column",children:"QR DELETE COLUMN"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30b3\u30de\u30f3\u30c9\u306f\u6700\u3082\u95b2\u89a7\u3055\u308c\u305f\u30da\u30fc\u30b8\u306e\u540d\u524d\u3092\u30c6\u30ad\u30b9\u30c8\u914d\u5217",(0,t.jsx)(s.em,{children:"pages"}),"\u306b\u4ee3\u5165\u3057\u307e\u3059\u3002\u500d\u9577\u6574\u6570\u914d\u5217 ",(0,t.jsx)(s.em,{children:"hits"}),' \u306f\u5404\u30da\u30fc\u30b8\u306e "\u30d2\u30c3\u30c8" \u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u5f15\u6570 ',(0,t.jsx)(s.em,{children:"usage"})," \u306f\u5404\u30da\u30fc\u30b8\u3054\u3068\u306eWeb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f7f\u7528\u7387\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,t.jsxs)(s.p,{children:['Web\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7d71\u8a08\u3092\u8868\u793a\u3059\u308b\u30bb\u30df\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u306a\u30da\u30fc\u30b8\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u305f\u3081\u306b\u3001"stats.shtm"\u3068\u3044\u3046\u540d\u524d\u306e\u30b9\u30bf\u30c6\u30a3\u30c3\u30afHTML\u30da\u30fc\u30b8 (4D\u306f\u81ea\u52d5\u3067.shtm\u62e1\u5f35\u5b50\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u89e3\u6790\u5bfe\u8c61\u3068\u3057\u307e\u3059) \u4e2d\u306b*<!\u2013\u2013#4DSCRIPT/STATS\u2013\u2013>',(0,t.jsxs)(s.em,{children:["\u30bf\u30b0\u3068\u3001",(0,t.jsx)(s.em,{children:"vPages"}),"\u3068"]}),"vUsage*\u5909\u6570\u3078\u306e\u53c2\u7167\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-HTML",children:"<html>\n<head><title>4D Web\u7d71\u8a08</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30c3\u30b7\u30e5 (%): </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>\u6700\u3082\u53c2\u7167\u3055\u308c\u3066\u3044\u308b\u30da\u30fc\u30b8: </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n"})}),"\n",(0,t.jsx)(s.p,{children:"STATS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306b\u306f\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var vPages : Text\n\xa0ARRAY TEXT(pages;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0\n\xa0WEB GET STATISTICS(pages;hits;vUsage)\n\xa0For($i;1;Size of array(pages))\n\xa0\xa0// \u30ad\u30e3\u30c3\u30b7\u30e5\u4e2d\u306b\u73fe\u308c\u308b\u30da\u30fc\u30b8\u3054\u3068\u306b\n\xa0\xa0\xa0\xa0vPages:=vPages+pages{$i}+"\xa0\xa0\xa0"+String(hits{$i})+"\n"\n\xa0\xa0// \u30da\u30fc\u30b8\u306e\u540d\u79f0\u3068HTML\u30b3\u30fc\u30c9\u3092\u633f\u5165\u3059\u308b\n\xa0End for\n'})}),"\n",(0,t.jsxs)(s.p,{children:["URL\u30ea\u30f3\u30af\u307e\u305f\u306f",(0,t.jsx)(s.a,{href:"/docs/ja/commands/web-send-file",children:"WEB SEND FILE"}),'\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066"stats.shtm"\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002']})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(296540);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);