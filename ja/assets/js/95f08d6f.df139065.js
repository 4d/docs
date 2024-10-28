"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4779],{335073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=t(474848),s=t(28453);const d={id:"get-pasteboard-data",title:"GET PASTEBOARD DATA",slug:"/commands/get-pasteboard-data",displayed_sidebar:"docs"},r=void 0,o={id:"commands-legacy/get-pasteboard-data",title:"GET PASTEBOARD DATA",description:"GET PASTEBOARD DATA ( dataType ; data )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pasteboard-data.md",sourceDirName:"commands-legacy",slug:"/commands/get-pasteboard-data",permalink:"/docs/ja/commands/get-pasteboard-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-pasteboard-data",title:"GET PASTEBOARD DATA",slug:"/commands/get-pasteboard-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get file from pasteboard",permalink:"/docs/ja/commands/get-file-from-pasteboard"},next:{title:"GET PASTEBOARD DATA TYPE",permalink:"/docs/ja/commands/get-pasteboard-data-type"}},i={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GET PASTEBOARD DATA"})," ( ",(0,a.jsx)(n.em,{children:"dataType"})," ; ",(0,a.jsx)(n.em,{children:"data"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u5f15\u6570"}),(0,a.jsx)(n.th,{children:"\u578b"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"dataType"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u304b\u3089\u53d6\u308a\u51fa\u3059\u30c7\u30fc\u30bf\u306e\u30bf\u30a4\u30d7"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"data"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u304b\u3089\u53d6\u308a\u51fa\u3055\u308c\u305f\u30c7\u30fc\u30bf"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,a.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,a.jsxs)(n.p,{children:["GET PASTEBOARD DATA \u30b3\u30de\u30f3\u30c9\u306f\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u4e2d",(0,a.jsx)(n.em,{children:"dataType"}),"\u3067\u6307\u5b9a\u3057\u305f\u30bf\u30a4\u30d7\u306e\u30c7\u30fc\u30bf\u3092\u3001BLOB \u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5909\u6570 ",(0,a.jsx)(n.em,{children:"data"})," \u306b\u8fd4\u3057\u307e\u3059\u3002 (\u4f8b\u3048\u3070\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u306b4D\u5185\u3067\u30b3\u30d4\u30fc\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001BLOB\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u306fUTF-16\u3067\u3059)"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u6ce8:"})," \u30b3\u30d4\u30fc/\u30da\u30fc\u30b9\u30c8\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u306f\u3001\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"dataType"}),"\u306b\u306f\u53d6\u308a\u51fa\u3059\u30c7\u30fc\u30bf\u306e\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u30024D \u30b7\u30b0\u30cd\u30c1\u30e3\u3001UTI \u30bf\u30a4\u30d7 (Mac OS), \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u540d/\u756a\u53f7 (Windows), \u307e\u305f\u306f4\u6587\u5b57\u306e\u30bf\u30a4\u30d7 (\u4e92\u63db\u6027)\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30bf\u30a4\u30d7\u306b\u3064\u3044\u3066\u306f ",(0,a.jsx)(n.em,{children:"\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u306e\u7ba1\u7406"})," \u306e\u7bc0\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u6ce8:"})," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u3067\u306f\u30d5\u30a1\u30a4\u30eb\u578b\u306e\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u51fa\u3059\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093\u3002\u305d\u308c\u3092\u3059\u308b\u305f\u3081\u306b\u306f",(0,a.jsx)(n.a,{href:"/docs/ja/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e2\u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306f\u305d\u308c\u305e\u308c\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e",(0,a.jsx)(n.em,{children:"asOptions"})," \u914d\u5217 (\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30e1\u30cb\u30e5\u30fc\u3042\u308b\u3044\u306f\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8) \u304b\u3089\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3042\u308b\u3044\u306f\u914d\u5217\u3078\u30c7\u30fc\u30bf\u3092\u30da\u30fc\u30b9\u30c8\u3057\u307e\u3059:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// bCopyasOptions \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\n\xa0If(Size of array(asOptions)>0)\xa0// \u30b3\u30d4\u30fc\u3059\u308b\u3082\u306e\u304c\u3042\u308b\u304b?\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(asOptions;$vxClipData)\xa0// \u914d\u5217\u8981\u7d20\u3092BLOB\u306b\u683c\u7d0d\n\xa0\xa0\xa0\xa0CLEAR PASTEBOARD\xa0// \u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u3092\u7a7a\u306b\u3059\u308b\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("artx";$vxClipData)\xa0// \u30c7\u30fc\u30bf\u578b\u306f\u4efb\u610f\u306b\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\n\xa0End if\n\xa0\n\xa0\xa0// bPasteasOptions \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\n\xa0If(Pasteboard data size("artx")>0)\xa0// \u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u306b"artx" \u30bf\u30a4\u30d7\u306e\u30c7\u30fc\u30bf\u304c\u3042\u308b\u304b?\n\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("artx";$vxClipData)\xa0// \u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vxClipData;asOptions)\xa0// BLOB\u30c7\u30fc\u30bf\u304b\u3089\u914d\u5217\u3092\u4f5c\u6210\n\xa0\xa0\xa0\xa0asOptions:=0\xa0// \u914d\u5217\u306e\u9078\u629e\u8981\u7d20\u3092\u30ea\u30bb\u30c3\u30c8\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8"}),"\n",(0,a.jsx)(n.p,{children:"\u30c7\u30fc\u30bf\u304c\u6b63\u3057\u304f\u53d6\u308a\u51fa\u305b\u308b\u3068OK\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u306f1\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3051\u308c\u30700\u304c\u8a2d\u5b9a\u3055\u308c\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/ja/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/ja/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/ja/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(296540);const s={},d=a.createContext(s);function r(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);