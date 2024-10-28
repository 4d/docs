"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97057],{331577:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(474848),d=s(28453);const r={id:"soap-send-fault",title:"SOAP SEND FAULT",slug:"/commands/soap-send-fault",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/soap-send-fault",title:"SOAP SEND FAULT",description:"SOAP SEND FAULT ( faultType ; description )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-send-fault.md",sourceDirName:"commands-legacy",slug:"/commands/soap-send-fault",permalink:"/docs/ja/commands/soap-send-fault",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-send-fault.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"soap-send-fault",title:"SOAP SEND FAULT",slug:"/commands/soap-send-fault",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SOAP Request",permalink:"/docs/ja/commands/soap-request"},next:{title:"CLOSE WINDOW",permalink:"/docs/ja/commands/close-window"}},l={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SOAP SEND FAULT"})," ( ",(0,t.jsx)(n.em,{children:"faultType"})," ; ",(0,t.jsx)(n.em,{children:"description"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5f15\u6570"}),(0,t.jsx)(n.th,{children:"\u578b"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"faultType"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"1 = \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30a8\u30e9\u30fc, 2 = \u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30a8\u30e9\u30fc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"SOAP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3059\u308b\u3001\u30a8\u30e9\u30fc\u306e\u8aac\u660e"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SOAP SEND FAULT"}),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001SOAP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u30a8\u30e9\u30fc\u306e\u767a\u751f\u5143 (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u307e\u305f\u306f\u30b5\u30fc\u30d0) \u3092\u793a\u3059\u30a8\u30e9\u30fc\u3092\u9001\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u7d50\u679c\u3092\u8fd4\u3055\u306a\u304f\u3066\u3082\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u30a8\u30e9\u30fc\u793a\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3001\u201cSquare_root\u201d Web\u30b5\u30fc\u30d3\u30b9\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u6642\u306b\u8ca0\u6570\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u9001\u4fe1\u3055\u308c\u305f\u5834\u5408\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3088\u308b\u30a8\u30e9\u30fc\u304c\u691c\u77e5\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3001\u6b63\u6570\u304c\u5fc5\u8981\u3067\u3042\u308b\u3053\u3068\u3092\u901a\u77e5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30b5\u30fc\u30d0\u5074\u306e\u30a8\u30e9\u30fc\u3068\u3057\u3066\u306f\u3001\u4f8b\u3048\u3070\u3001\u30e1\u30bd\u30c3\u30c9\u5b9f\u884c\u6642\u306e\u30e1\u30e2\u30ea\u4e0d\u8db3\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"faultType"}),"\u306b\u30a8\u30e9\u30fc\u306e\u767a\u751f\u5143\u3092\u6e21\u3057\u307e\u3059\u3002*Web Services (Server)*\u30c6\u30fc\u30de\u306e\u5b9a\u7fa9\u6e08\u307f\u5b9a\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5b9a\u6570"}),(0,t.jsx)(n.th,{children:"\u578b"}),(0,t.jsx)(n.th,{children:"\u5024"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP client fault"}),(0,t.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP server fault"}),(0,t.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"description"}),"\u306b\u306f\u30a8\u30e9\u30fc\u306e\u8aac\u660e\u3092\u6e21\u3057\u307e\u3059\u3002\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u88c5\u304c\u5bfe\u5fdc\u3057\u3066\u3044\u308c\u3070\u3001\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,t.jsx)(n.p,{children:"\u201cSquare_root\u201d Web\u30b5\u30fc\u30d3\u30b9\u306e\u4f8b\u984c\u306b\u304a\u3044\u3066\u3001\u8ca0\u6570\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SOAP SEND FAULT(SOAP client fault;"Positive values required")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/soap-declaration",children:"SOAP DECLARATION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/soap-get-info",children:"SOAP Get info"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var t=s(296540);const d={},r=t.createContext(d);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);