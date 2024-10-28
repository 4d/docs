"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88816],{480633:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=s(474848),d=s(28453);const a={id:"variance",title:"Variance",slug:"/commands/variance",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/variance",title:"Variance",description:"Variance ( series ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/variance.md",sourceDirName:"commands-legacy",slug:"/commands/variance",permalink:"/docs/ja/commands/variance",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariance.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"variance",title:"Variance",slug:"/commands/variance",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Sum squares",permalink:"/docs/ja/commands/sum-squares"},next:{title:"PHP Execute",permalink:"/docs/ja/commands/php-execute"}},t={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variance"})," ( ",(0,r.jsx)(n.em,{children:"series"})," ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"series"}),(0,r.jsx)(n.td,{children:"Field, Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5206\u6563\u3092\u6c42\u3081\u308b\u30c7\u30fc\u30bf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"series\u306e\u5206\u6563"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variance"}),"\u306f\u3001",(0,r.jsx)(n.em,{children:"series"}),"\u306e\u5206\u6563\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"series"}),"\u304c\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a3\uff0d\u30eb\u30c9\u306e\u5834\u5408\u3001\u5206\u6563\u3092\u6c42\u3081\u308b\u305f\u3081\u306b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["(\u4e00\u6b21\u5143\u307e\u305f\u306f\u4e8c\u6b21\u5143\u306e) \u914d\u5217\u3092 ",(0,r.jsx)(n.em,{children:"series"})," \u306b\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u914d\u5217\u306f\u6574\u6570\u3001\u500d\u9577\u6574\u6570\u3001\u307e\u305f\u306f\u5b9f\u6570\u578b\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u6563\u306f\u4e00\u9023\u306e\u5024\u304c\u671f\u5f85\u5024\u304b\u3089\u3069\u308c\u3060\u3051\u6563\u3089\u3070\u3063\u3066\u3044\u308b\u304b\u3092\u793a\u3059\u5024\u3067\u3001\u5e73\u5747\u304b\u3089\u306e\u5206\u6563\u3092\u8a08\u6e2c\u3057\u307e\u3059\u30024D\u306f\u4ee5\u4e0b\u306e\u5206\u6563\u8a08\u7b97\u5f0f\u3092\u4f7f\u7528\u3057\u307e\u3059:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variance(x) = Sum (x-m)*(x-m)/(n-1)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"m = \u5e73\u5747"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"n = \u6a19\u672c\u6570"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8003\u616e\u3055\u308c\u308b\u5024\u304c\u6a19\u672c\u3067\u306a\u3044\u5834\u5408\u3001",(0,r.jsx)(n.strong,{children:"Variance"}),"\u304b\u3089\u8fd4\u3055\u308c\u308b\u5024\u3092 (n-1)/n \u3067\u304b\u3051\u5408\u308f\u305b\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u4f8b\u306f\u5909\u6570",(0,r.jsx)(n.em,{children:"var"}),"\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306f",(0,r.jsx)(n.em,{children:"var"}),"\u306b\u4e00\u9023\u306e\u30c7\u30fc\u30bf\u306e\u5206\u6563\u3092\u4ee3\u5165\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var:=Variance(Students]Grades)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30d6\u30ec\u30fc\u30af\u51e6\u7406\u3092\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u3057\u3066\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u5370\u5237\u3059\u308b\u305f\u3081\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Students])\n\xa0ORDER BY([Students];[Students]Class;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Students]Grades)\n\xa0OUTPUT FORM([Students];"PrintForm")\n\xa0PRINT SELECTION([Students])\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8:"})," ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/break-level",children:"BREAK LEVEL"}),"\u30b3\u30de\u30f3\u30c9\u306e\u5f15\u6570\u306f\u3001\u5370\u5237\u3059\u308b\u30ec\u30dd\u30fc\u30c8\u306e\u30d6\u30ec\u30fc\u30af\u6570\u3068\u540c\u3058\u6570\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30d6\u30ec\u30fc\u30af\u51e6\u7406\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,r.jsx)(n.em,{children:"\u5370\u5237"}),"\u30b3\u30de\u30f3\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u984c\u3067\u306f\u914d\u5217\u306b\u683c\u7d0d\u3055\u308c\u305f\u5024\u306e\u5206\u6563\u3092\u6c42\u3081\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vVariance:=Variance($ArrGrades)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/average",children:"Average"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/std-deviation",children:"Std deviation"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/sum",children:"Sum"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/sum-squares",children:"Sum squares"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(296540);const d={},a=r.createContext(d);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);