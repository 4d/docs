"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82098"],{986505:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>c,assets:()=>d,toc:()=>a,contentTitle:()=>l});var c=JSON.parse('{"id":"ViewPro/commands/vp-get-active-cell","title":"VP Get active cell","description":"VP Get active cell (  vpAreaName Integer } ) : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-active-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-active-cell","permalink":"/docs/ja/20-R8/ViewPro/commands/vp-get-active-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-active-cell.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-active-cell","title":"VP Get active cell"},"sidebar":"docs","previous":{"title":"G","permalink":"/docs/ja/20-R8/commands-legacy/G"},"next":{"title":"VP Get binding path","permalink":"/docs/ja/20-R8/ViewPro/commands/vp-get-binding-path"}}'),s=t("785893"),r=t("250065");let i={id:"vp-get-active-cell",title:"VP Get active cell"},l=void 0,d={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get active cell"})," (  ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"\u5358\u4E00\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP Get active cell"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u6301\u3061\u3001\u30C7\u30FC\u30BF\u5165\u529B\u3055\u308C\u3088\u3046\u3068\u3057\u3066\u308B\u30BB\u30EB (\u30A2\u30AF\u30C6\u30A3\u30D6\u30BB\u30EB) \u3092\u53C2\u7167\u3059\u308B\u65B0\u3057\u3044\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"sheet"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u5B9A\u7FA9\u3055\u308C\u308B\u30EC\u30F3\u30B8\u304C\u5C5E\u3059\u308B\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u307E\u305F\u306F ",(0,s.jsx)(n.code,{children:"vk current sheet"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(678203).Z+"",width:"548",height:"359"})}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u30A2\u30AF\u30C6\u30A3\u30D6\u30BB\u30EB\u306E\u5EA7\u6A19\u304C\u53D6\u5F97\u3067\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Get active cell("myVPArea")\n\n  // \u8FD4\u3055\u308C\u308B\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u4EE5\u4E0B\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:\n  //$activeCell.ranges[0].column=3\n  //$activeCell.ranges[0].row=4\n  //$activeCell.ranges[0].sheet=0\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},678203:function(e,n,t){t.d(n,{Z:function(){return c}});let c=t.p+"assets/images/cmd_vpGetActiveCell-8ebb4e93425aab7ecfcd2a337e26e6a9.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var c=t(667294);let s={},r=c.createContext(s);function i(e){let n=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);