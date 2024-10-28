"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82606],{790592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=t(474848),s=t(28453);const r={id:"onCloseBox",title:"On Close Box"},l=void 0,d={id:"Events/onCloseBox",title:"On Close Box",description:"| \u30b3\u30fc\u30c9 | \u547c\u3073\u51fa\u3057\u5143 | \u5b9a\u7fa9                     |",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/ja/20-R6/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/ja/20-R6/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/ja/20-R6/Events/onCloseDetail"}},i={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,o.jsx)(n.th,{children:"\u547c\u3073\u51fa\u3057\u5143"}),(0,o.jsx)(n.th,{children:"\u5b9a\u7fa9"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"22"}),(0,o.jsx)(n.td,{children:"\u30d5\u30a9\u30fc\u30e0"}),(0,o.jsx)(n.td,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30af\u30ed\u30fc\u30ba\u30dc\u30c3\u30af\u30b9\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"On Close Box"})," \u30a4\u30d9\u30f3\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30af\u30ed\u30fc\u30ba\u30dc\u30c3\u30af\u30b9\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u984c\u3067\u306f\u3001\u30ec\u30b3\u30fc\u30c9\u306e\u30c7\u30fc\u30bf\u5165\u529b\u306b\u4f7f\u308f\u308c\u308b\u30d5\u30a9\u30fc\u30e0\u3067\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u9589\u3058\u308b\u30a4\u30d9\u30f3\u30c8\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'  // \u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306e\u30e1\u30bd\u30c3\u30c9\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("\u30ec\u30b3\u30fc\u30c9\u304c\u5909\u66f4\u3055\u308c\u307e\u3057\u305f\u3002 \u5909\u66f4\u3092\u4fdd\u5b58\u3057\u307e\u3059\u304b\uff1f")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var o=t(296540);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);