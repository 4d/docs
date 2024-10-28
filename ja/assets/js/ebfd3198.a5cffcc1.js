"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10071],{686109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(474848),d=t(28453);const r={id:"web-get-http-body",title:"WEB GET HTTP BODY",slug:"/commands/web-get-http-body",displayed_sidebar:"docs"},c=void 0,o={id:"commands-legacy/web-get-http-body",title:"WEB GET HTTP BODY",description:"WEB GET HTTP BODY ( body )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-http-body.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-http-body",permalink:"/docs/ja/commands/web-get-http-body",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-http-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-http-body",title:"WEB GET HTTP BODY",slug:"/commands/web-get-http-body",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB Get Current Session ID",permalink:"/docs/ja/commands/web-get-current-session-id"},next:{title:"WEB GET HTTP HEADER",permalink:"/docs/ja/commands/web-get-http-header"}},i={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB GET HTTP BODY"})," ( ",(0,s.jsx)(n.em,{children:"body"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"Blob, Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB GET HTTP BODY"}),"\u30b3\u30de\u30f3\u30c9\u306f\u3001 \u51e6\u7406\u4e2d\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u3092\u8fd4\u3057\u307e\u3059\u3002 HTTP\u30dc\u30c7\u30a3\u306f\u3001\u51e6\u7406\u3084\u89e3\u6790\u3055\u308c\u308b\u3053\u3068\u306a\u304f\u3001\u305d\u306e\u307e\u307e\u306e\u72b6\u614b\u3067\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306fWeb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9 (",(0,s.jsx)(n.em,{children:"On Web Authentication\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"}),"\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/qr-set-destination",children:"QR SET DESTINATION"}),") \u3001\u307e\u305f\u306fWeb\u30ea\u30af\u30a8\u30b9\u30c8\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3067\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f15\u6570 ",(0,s.jsx)(n.em,{children:"body"})," \u306b\u306fBLOB\u307e\u305f\u306f\u30c6\u30ad\u30b9\u30c8\u30bf\u30a4\u30d7\u306e\u5909\u6570\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u3001\u30c6\u30ad\u30b9\u30c8\u578b\u5f15\u6570\u306e\u5229\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059 (",(0,s.jsx)(n.em,{children:"body"}),"\u5f15\u6570\u306f2GB\u3092\u4e0a\u9650\u3068\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u5185\u3092\u691c\u7d22\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u4e0a\u7d1a\u30e6\u30fc\u30b6\u30fc\u306f\u30014D\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u3067WebDAV\u30b5\u30fc\u30d0\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsxs)(n.p,{children:["4D Web\u30b5\u30fc\u30d0\u30fc\u306b\u7c21\u5358\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u3001HTTP\u30dc\u30c7\u30a3\u306e\u5185\u5bb9\u3092\u30c7\u30d0\u30c3\u30ac\u30fc\u3067\u8868\u793a\u3057\u307e\u3059\u3002",(0,s.jsx)(n.br,{}),"\n\u4ee5\u4e0b\u306f4D Web\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u3089\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u3068\u5bfe\u5fdc\u3059\u308bHTML\u30b3\u30fc\u30c9\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(119266).A+"",width:"618",height:"158"})}),"\n",(0,s.jsx)(n.p,{children:"\u6b21\u306fTest4Dv11\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $requestText : Text\n\xa0\n\xa0WEB GET HTTP BODY($requestText)\n\xa0WEB SEND FILE("page.html")\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8:"}),' \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b"4DHTML\u30bf\u30b0\u304a\u3088\u3073URL (4DACTION) \u3067\u5229\u7528\u53ef\u80fd"\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002']}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30a9\u30fc\u30e0\u304cWeb\u30b5\u30fc\u30d0\u30fc\u306b\u63d0\u51fa\u3055\u308c\u308b\u3068\u3001\u5909\u6570$requestText\u306fHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-body-part",children:"WEB GET BODY PART"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},119266:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict38463.ja-85723653afce0b9700a018de563c881a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(296540);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);