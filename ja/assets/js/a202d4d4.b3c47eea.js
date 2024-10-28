"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[908],{217210:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var d=r(474848),s=r(28453);const t={id:"qr-get-borders",title:"QR GET BORDERS",slug:"/commands/qr-get-borders",displayed_sidebar:"docs"},l=void 0,c={id:"commands-legacy/qr-get-borders",title:"QR GET BORDERS",description:"QR GET BORDERS ( area ; column ; row ; border ; line {; color} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-borders.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-borders",permalink:"/docs/ja/commands/qr-get-borders",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-borders.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-borders",title:"QR GET BORDERS",slug:"/commands/qr-get-borders",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR Get area property",permalink:"/docs/ja/commands/qr-get-area-property"},next:{title:"QR Get command status",permalink:"/docs/ja/commands/qr-get-command-status"}},i={},h=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function j(n){const e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR GET BORDERS"})," ( ",(0,d.jsx)(e.em,{children:"area"})," ; ",(0,d.jsx)(e.em,{children:"column"})," ; ",(0,d.jsx)(e.em,{children:"row"})," ; ",(0,d.jsx)(e.em,{children:"border"})," ; ",(0,d.jsx)(e.em,{children:"line"})," {; ",(0,d.jsx)(e.em,{children:"color"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5f15\u6570"}),(0,d.jsx)(e.th,{children:"\u578b"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"area"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30a8\u30ea\u30a2\u53c2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"column"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30ab\u30e9\u30e0\u756a\u53f7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"row"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u884c\u756a\u53f7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"border"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u7f6b\u7dda\u306e\u5024"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"line"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u7dda\u306e\u592a\u3055"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"color"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u7f6b\u7dda\u306e\u30ab\u30e9\u30fc"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,d.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,d.jsx)(e.p,{children:"QR GET BORDERS \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3001\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u306e\u7f6b\u7dda\u30b9\u30bf\u30a4\u30eb\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"area"}),"\u306b\u306f\u30af\u30a4\u30c3\u30af\u30ec\u30dd\u30fc\u30c8\u30a8\u30ea\u30a2\u306e\u53c2\u7167\u756a\u53f7\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"column"}),"\u306b\u306f\u30bb\u30eb\u306e\u30ab\u30e9\u30e0\u756a\u53f7\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"row"}),"\u306b\u306f\u30bb\u30eb\u306e\u884c\u756a\u53f7\u3092\u6e21\u3057\u307e\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5bfe\u8c61\u306e\u5c0f\u8a08 (\u30d6\u30ec\u30fc\u30af) \u30ec\u30d9\u30eb\u305d\u6307\u5b9a\u3059\u308b\u6b63\u306e\u6574\u6570\u3092\u6e21\u3059\u3001\u307e\u305f\u306f"}),"\n",(0,d.jsxs)(e.li,{children:["\u30c6\u30fc\u30de\u306e\u4ee5\u4e0b\u306e\u5b9a\u6570\u306e\u3044\u305a\u308c\u304b\u3092\u6e21\u3059",(0,d.jsx)(e.br,{}),"\n| \u5b9a\u6570             | \u578b    | \u5024   | \u30b3\u30e1\u30f3\u30c8       |",(0,d.jsx)(e.br,{}),"\n| -------------- | ---- | --- | ---------- |",(0,d.jsx)(e.br,{}),"\n| qr detail      | \u500d\u9577\u6574\u6570 | -2 | \u30ec\u30dd\u30fc\u30c8\u306e\u8a73\u7d30\u30a8\u30ea\u30a2 |",(0,d.jsx)(e.br,{}),"\n| qr grand total | \u500d\u9577\u6574\u6570 | -3 | \u7dcf\u8a08\u30a8\u30ea\u30a2      |",(0,d.jsx)(e.br,{}),"\n| qr title       | \u500d\u9577\u6574\u6570 | -1 | \u30ec\u30dd\u30fc\u30c8\u30bf\u30a4\u30c8\u30eb   |"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"border"}),"\u306b\u306f\u3001\u9069\u7528\u3059\u308b\u30bb\u30eb\u306e\u7f6b\u7dda\u3092\u793a\u3059\u5024\u3092\u6e21\u3057\u307e\u3059\u3002\u30c6\u30fc\u30de\u306e\u3044\u305a\u308c\u304b\u306e\u5024\u3092\u6e21\u3057\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5b9a\u6570"}),(0,d.jsx)(e.th,{children:"\u578b"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr bottom border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"\u4e0b\u7f6b\u7dda"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr inside horizontal border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"32"}),(0,d.jsx)(e.td,{children:"\u5185\u5074\u7e26\u7f6b\u7dda"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr inside vertical border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"16"}),(0,d.jsx)(e.td,{children:"\u5185\u5074\u6a2a\u7f6b\u7dda"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr left border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u5de6\u7f6b\u7dda"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr right border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"\u53f3\u7f6b\u7dda"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr top border"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"\u4e0a\u7f6b\u7dda"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/qr-set-borders",title:"QR SET BORDERS",children:"QR SET BORDERS"}),"\u30b3\u30de\u30f3\u30c9\u3068\u306f\u7570\u306a\u308a\u3001QR GET BORDERS\u306f\u7d2f\u8a08\u5024\u3092\u53d7\u3051\u4ed8\u3051\u307e\u305b\u3093\u3002\u7f6b\u7dda\u306e\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u77e5\u308b\u306b\u306f\u3001\u5168\u3066\u306e\u7f6b\u7dda\u5024\u3092\u4f7f\u3063\u3066\u500b\u5225\u306b\u30c6\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"line"}),"\u306b\u306f\u305d\u306e\u7dda\u306e\u592a\u3055\u3092\u8fd4\u3057\u307e\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"0 = \u7dda\u306a\u3057"}),"\n",(0,d.jsx)(e.li,{children:"1 = 1/4\u30dd\u30a4\u30f3\u30c8"}),"\n",(0,d.jsx)(e.li,{children:"2 = 1/2\u30dd\u30a4\u30f3\u30c8"}),"\n",(0,d.jsx)(e.li,{children:"3 = 1\u30dd\u30a4\u30f3\u30c8"}),"\n",(0,d.jsx)(e.li,{children:"4 = 2\u30dd\u30a4\u30f3\u30c8"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"color"}),"\u306f\u305d\u306e\u7dda\u306e\u8272\u3092\u8fd4\u3057\u307e\u3059\u3002\u8fd4\u3055\u308c\u308b\u5024\u306f\u3001\u6307\u5b9a\u3057\u305f\u7f6b\u7dda\u90e8\u5206\u306e\u30ab\u30e9\u30fc\u5024\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u7121\u52b9\u306a",(0,d.jsx)(e.em,{children:"area"}),"\u756a\u53f7\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u756a\u53f7-9850\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52b9\u306a",(0,d.jsx)(e.em,{children:"column"}),"\u5f15\u6570\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u756a\u53f7-9852\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52b9\u306a",(0,d.jsx)(e.em,{children:"row"}),"\u5f15\u6570\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u756a\u53f7-9853\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52b9\u306a",(0,d.jsx)(e.em,{children:"border"}),"\u5f15\u6570\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u756a\u53f7-9854\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/qr-set-borders",children:"QR SET BORDERS"})})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(j,{...n})}):j(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var d=r(296540);const s={},t=d.createContext(s);function l(n){const e=d.useContext(t);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);