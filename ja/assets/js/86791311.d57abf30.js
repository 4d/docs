"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40375],{717913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>j});var r=t(474848),s=t(28453);const l={id:"wp-get-elements",title:"WP Get elements",slug:"/WritePro/commands/wp-get-elements",displayed_sidebar:"docs"},d=void 0,i={id:"WritePro/commands-legacy/wp-get-elements",title:"WP Get elements",description:"WP Get elements ( targetObj {; elementType} ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-elements.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-get-elements",permalink:"/docs/ja/WritePro/commands/wp-get-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-elements.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-get-elements",title:"WP Get elements",slug:"/WritePro/commands/wp-get-elements",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Get element by ID",permalink:"/docs/ja/WritePro/commands/wp-get-element-by-id"},next:{title:"WP Get footer",permalink:"/docs/ja/WritePro/commands/wp-get-footer"}},c={},j=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u8981\u7d20\u306e\u4e26\u3079\u66ff\u3048\u9806",id:"\u8981\u7d20\u306e\u4e26\u3079\u66ff\u3048\u9806",level:5},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Get elements"})," ( ",(0,r.jsx)(n.em,{children:"targetObj"})," {; ",(0,r.jsx)(n.em,{children:"elementType"}),"} ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3001\u30ec\u30f3\u30b8\u3001\u307e\u305f\u306f\u8981\u7d20"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u53d6\u5f97\u3057\u305f\u3044\u8981\u7d20\u306e\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u8981\u7d20\u306e\u53c2\u7167\u3092\u683c\u7d0d\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Get elements"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u6bb5\u843d\u3001\u753b\u50cf\u3001\u8868\u304a\u3088\u3073\u884c\u306a\u3069\u3092\u683c\u7d0d\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30ec\u30f3\u30b8"}),"\n",(0,r.jsx)(n.li,{children:"\u8981\u7d20 ( \u8868 / \u884c / \u6bb5\u843d / \u672c\u6587 / \u30d8\u30c3\u30c0\u30fc / \u30d5\u30c3\u30bf\u30fc / \u30bb\u30af\u30b7\u30e7\u30f3 / \u30b5\u30d6\u30bb\u30af\u30b7\u30e7\u30f3 / \u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9)"}),"\n",(0,r.jsx)(n.li,{children:"4D Write Pro \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8:"})," ",(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b\u30b5\u30d6\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u305d\u306e\u89aa\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u8981\u7d20\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u578b\u6307\u5b9a\u3055\u308c\u305f\u30ec\u30f3\u30b8\u3042\u308b\u3044\u306f\u8981\u7d20\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u578b\u306e\u8981\u7d20\u306e\u307f\u3092\u683c\u7d0d\u3057\u305f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059(\u305f\u3060\u3057",(0,r.jsx)(n.em,{children:"elementType"})," \u5f15\u6570\u3067\u578b\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3092\u9664\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u53c2\u7167)\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f",(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u5185\u306b\u3042\u308b\u5229\u7528\u53ef\u80fd\u306a\u5168\u3066\u306e\u8981\u7d20\u3092\u683c\u7d0d\u3057\u305f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u3057\u3066\u3001",(0,r.jsx)(n.em,{children:"elementType"})," \u5f15\u6570\u3092\u6e21\u3059\u3053\u3068\u3067\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u8fd4\u3055\u308c\u308b\u8981\u7d20\u306e\u578b\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u578b\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5b9a\u6570"}),(0,r.jsx)(n.th,{children:"\u5024"}),(0,r.jsx)(n.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type default"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ec\u30f3\u30b8\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type image"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u305f\u753b\u50cf/\u30a4\u30f3\u30e9\u30a4\u30f3\u753b\u50cf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type image anchored"}),(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3059\u308b\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u305f\u753b\u50cf\u306e\u53c2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type image inline"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3059\u308b\u30a4\u30f3\u30e9\u30a4\u30f3\u753b\u50cf\u306e\u53c2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type paragraph"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u6bb5\u843d\u30bf\u30a4\u30d7\u30ec\u30f3\u30b8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type table"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"\u30c6\u30fc\u30d6\u30eb\u53c2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type table row"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"\u30c6\u30fc\u30d6\u30eb\u306e\u884c\u53c2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk type text box"}),(0,r.jsx)(n.td,{children:"300"}),(0,r.jsx)(n.td,{children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9(wk type \u7528\u306e\u5024)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"wk type default \u30bb\u30ec\u30af\u30bf\u30fc\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u4f55\u3082\u30d5\u30a3\u30eb\u30bf\u30fc\u3055\u308c\u3066\u3044\u306a\u3044\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["wk type paragraph, wk type image \u3042\u308b\u3044\u306f wk type table \u30bb\u30ec\u30af\u30bf\u30fc\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u8fd4\u3055\u308c\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u306f\u305d\u306e\u578b\u306e\u8981\u7d20\u306e\u307f\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f",(0,r.jsx)(n.em,{children:"elementType"})," \u5f15\u6570\u3067\u306e\u6307\u5b9a\u3088\u308a\u512a\u5148\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u3067\u6e21\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u683c\u7d0d\u3055\u308c\u308b\u8981\u7d20\u304c\u30ec\u30f3\u30b8\u5185\u306b\u5b8c\u5168\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u8fd4\u3055\u308c\u308b\u7d50\u679c\u306b\u306f\u305d\u306e\u8981\u7d20\u5168\u4f53\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30ec\u30f3\u30b8\u5185\u306b\u8868\u306e\u4e00\u90e8(\u5168\u4f53\u3067\u306f\u306a\u3044)\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u8868\u5168\u4f53\u3078\u306e\u53c2\u7167\u304c\u8fd4\u3055\u308c\u307e\u3059\u304c\u3001\u542b\u307e\u308c\u308b\u306e\u306f\u30bb\u30eb(\u6bb5\u843d)\u53c2\u7167\u306e\u307f\u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"elementType"})," \u5f15\u6570\u306bwk type text box \u3092\u6e21\u3059\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"targetObj"})," \u306b\u6e21\u305b\u308b\u306e\u306f4D Write Pro \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3060\u3051\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u306b",(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u4ee5\u5916\u306e\u3082\u306e\u3092\u6e21\u3057\u305f\u5834\u5408\u306b\u306f\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"\u8981\u7d20\u306e\u4e26\u3079\u66ff\u3048\u9806",children:"\u8981\u7d20\u306e\u4e26\u3079\u66ff\u3048\u9806"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u3055\u308c\u305f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u306f\u3001",(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u8eab\u306b\u5fdc\u3058\u3066\u4e26\u3079\u66ff\u3048\u3089\u308c\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b\u30ec\u30f3\u30b8\u3042\u308b\u3044\u306f\u8981\u7d20(\u6bb5\u843d\u3001\u8868\u3001\u672c\u6587\u3001\u30d8\u30c3\u30c0\u30fc\u3001\u30d5\u30c3\u30bf\u30fc\u3001\u7b49)\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d5\u30ed\u30fc(\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u3067\u8981\u7d20\u304c\u73fe\u308c\u308b\u9806\u756a)\u3068\u540c\u3058\u9806\u756a\u306b\u4e26\u3079\u66ff\u3048\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b4D Write Pro \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30a8\u30ea\u30a2\u5168\u4f53\u304c\u8fd4\u3055\u308c\u308b\u305f\u3081\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u306f\u305d\u306eID \u9806\u306b\u4e26\u3079\u66ff\u3048\u3089\u308c\u307e\u3059(\u305f\u3060\u3057wk type image anchored \u5f15\u6570\u304c\u4f7f\u7528\u3055\u308c\u305f\u969b\u306e\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u305f\u753b\u50cf\u306e\u5834\u5408\u3092\u9664\u304d\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u753b\u50cf\u306fZ\u9806\u306b\u30bd\u30fc\u30c8\u3055\u308c\u307e\u3059)\u3002",(0,r.jsx)(n.strong,{children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"}),"\u5185\u306b\u3042\u308b",(0,r.jsx)(n.em,{children:"elementType"})," \u578b\u306e\u30a4\u30f3\u30e9\u30a4\u30f3\u8981\u7d20(\u3042\u308c\u3070)\u306f\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u5f8c\u306b\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u672c\u6587\u5185\u306e\u6bb5\u843d\u306e\u80cc\u666f\u8272\u3092\u4ea4\u4e92\u306b\u5165\u308c\u66ff\u3048\u305f\u3044\u5834\u5408\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u306e\u9806\u756a\u304c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6bb5\u843d\u306e\u51fa\u73fe\u9806\u3068\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u3001",(0,r.jsx)(n.em,{children:"targetObj"})," \u5f15\u6570\u306b\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u306a\u304f\u672c\u6587\u8981\u7d20\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,r.jsx)(n.p,{children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306b\u3042\u308b\u5168\u3066\u306e\u6bb5\u843d\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $docElements : Collection\n\xa0$docElements:=WP Get elements($myDoc;wk type paragraph)\n\xa0\xa0//\u6bb5\u843d\u8981\u7d20\u306e\u307f\u3092\u683c\u7d0d\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3059\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,r.jsx)(n.p,{children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306e\u6bb5\u843d\u3067\u3001\u6587\u5b57\u306e\u63c3\u3048\u65b9\u3068\u30ab\u30e9\u30fc\u3092\u4ea4\u4e92\u306b\u5207\u308a\u66ff\u3048\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0var $obj : Object\n\xa0var $body : Object\n\xa0var $i;$n : Integer\n\xa0$col:=New collection\n\xa0$body:=WP Get body(myDoc)\n\xa0$col:=WP Get elements($body;wk type paragraph)\n\xa0$i:=0\n\xa0$n:=$col.length\n\xa0For($i;0;$n-1)\n\xa0\xa0\xa0\xa0$obj:=$col[$i]\n\xa0\xa0\xa0\xa0WP RESET ATTRIBUTES($obj)\n\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk font bold;wk false)\n\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk font italic;wk false)\n\xa0\xa0\xa0\xa0If($i%2=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk text align;wk left)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk font bold;wk true)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk text color;"#804040")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk margin right;"5cm")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk margin left;"1cm")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk text align;wk right)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk font italic;wk true)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk text color;"#404020")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk margin left;"5cm")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($obj;wk margin right;"1cm")\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-breaks",children:"WP Get breaks"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-element-by-id",children:"WP Get element by ID"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-table-range",children:"WP Table range"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const s={},l=r.createContext(s);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);