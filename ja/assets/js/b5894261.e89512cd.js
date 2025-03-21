"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93078"],{61517:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>h,contentTitle:()=>r});var i=JSON.parse('{"id":"ViewPro/commands/vp-get-data-context","title":"VP Get data context","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-data-context.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-data-context","permalink":"/docs/ja/ViewPro/commands/vp-get-data-context","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-data-context.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-data-context","title":"VP Get data context"},"sidebar":"docs","previous":{"title":"VP Get current sheet","permalink":"/docs/ja/ViewPro/commands/vp-get-current-sheet"},"next":{"title":"VP Get default style","permalink":"/docs/ja/ViewPro/commands/vp-get-default-style"}}'),d=t("785893"),s=t("250065");let c={id:"vp-get-data-context",title:"VP Get data context"},r=void 0,a={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function o(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,d.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R5"}),(0,d.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"VP Get data context"})," ( ",(0,d.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,d.jsx)(n.em,{children:"sheet"})," : Integer } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"vpAreaName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sheet"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Variant"}),(0,d.jsx)(n.td,{children:"<-"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8. Object or Collection"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"VP Get data context"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 \u30EF\u30FC\u30AF\u30B7\u30FC\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u8FD4\u3055\u308C\u308B\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u3001\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u5185\u5BB9\u306B\u5BFE\u3057\u3066\u304A\u3053\u306A\u308F\u308C\u305F\u5909\u66F4\u3092\u542B\u307F\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"sheet"})," \u306B\u306F\u3001\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002 \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8\u306E\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30EF\u30FC\u30AF\u30B7\u30FC\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F ",(0,d.jsx)(n.code,{children:"Null"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"})," \u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u7A2E\u985E\u306B\u3088\u3063\u3066\u3001\u95A2\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u30BB\u30EB\u306B\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(279777).Z+"",width:"300",height:"81"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $dataContext : Object\n\n$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-binding-path",children:"VP Get binding path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},279777:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var i=t(667294);let d={},s=i.createContext(d);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);