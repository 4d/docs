"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4793],{47018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(474848),s=t(28453);const o={id:"vp-get-formula",title:"VP Get formula"},d=void 0,l={id:"ViewPro/commands/vp-get-formula",title:"VP Get formula",description:"VP Get formula ( rangeObj Text",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-formula.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-formula",permalink:"/docs/ja/ViewPro/commands/vp-get-formula",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-formula",title:"VP Get formula"},sidebar:"docs",previous:{title:"VP Get default style",permalink:"/docs/ja/ViewPro/commands/vp-get-default-style"},next:{title:"VP Get formula by name",permalink:"/docs/ja/ViewPro/commands/vp-get-formula-by-name"}},c={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function i(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get formula"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Formula"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP Get formula"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u30ec\u30f3\u30b8\u306e\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u5f15\u6570\u3067\u3001\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u3092\u53d6\u5f97\u3057\u305f\u3044\u30ec\u30f3\u30b8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 ",(0,r.jsx)(n.em,{children:"rangeObj"})," \u5f15\u6570\u306e\u30ec\u30f3\u30b8\u304c\u8907\u6570\u30bb\u30eb\u3042\u308b\u3044\u306f\u8907\u6570\u30ec\u30f3\u30b8\u3092\u6307\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u6700\u521d\u306e\u30bb\u30eb\u306e\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002 ",(0,r.jsx)(n.em,{children:"rangeObj"})," \u5f15\u6570\u304c\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u306e\u306a\u3044\u30bb\u30eb\u3092\u6307\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u7a7a\u306e\u6587\u5b57\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  // \u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\nVP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")\n\n$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(296540);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);