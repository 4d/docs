"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20266"],{890658:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-print-info","title":"VP SET PRINT INFO","description":"VP SET PRINT INFO ( vpAreaName Object { ; sheet : Integer }  )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-print-info.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-print-info","permalink":"/docs/ja/ViewPro/commands/vp-set-print-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-print-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-print-info","title":"VP SET PRINT INFO"},"sidebar":"docs","previous":{"title":"VP SET NUM VALUE","permalink":"/docs/ja/ViewPro/commands/vp-set-num-value"},"next":{"title":"VP SET ROW ATTRIBUTES","permalink":"/docs/ja/ViewPro/commands/vp-set-row-attributes"}}'),i=t("785893"),s=t("250065");let o={id:"vp-set-print-info",title:"VP SET PRINT INFO"},d=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"VP SET PRINT INFO"})," ( ",(0,i.jsx)(e.em,{children:"vpAreaName"})," : Text ; ",(0,i.jsx)(e.em,{children:"printInfo"})," : Object { ; ",(0,i.jsx)(e.em,{children:"sheet"})," : Integer }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"vpAreaName"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"4D View Pro \u30A8\u30EA\u30A2\u540D"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"printInfo"}),(0,i.jsx)(e.td,{children:"Object"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"\u5370\u5237\u5C5E\u6027\u3092\u683C\u7D0D\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sheet"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,i.jsx)(e.td,{})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"VP SET PRINT INFO"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(e.em,{children:"vpAreaName"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30A8\u30EA\u30A2\u3092\u5370\u5237\u3059\u308B\u969B\u306B\u4F7F\u7528\u3059\u308B\u5C5E\u6027\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"vpAreaName"})," \u306B\u306F\u3001\u5370\u5237\u3059\u308B 4D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"printInfo"})," \u306B\u306F\u3001\u69D8\u3005\u306A\u5370\u5237\u5C5E\u6027\u306E\u5B9A\u7FA9\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u5229\u7528\u53EF\u80FD\u306A\u5C5E\u6027\u306E\u4E00\u89A7\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/ViewPro/configuring#%E5%8D%B0%E5%88%B7%E5%B1%9E%E6%80%A7",children:"4D View Pro \u5370\u5237\u5C5E\u6027"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,i.jsx)(e.em,{children:"sheet"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u5370\u5237\u3059\u308B\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30AB\u30EC\u30F3\u30C8\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30AB\u30EC\u30F3\u30C8\u306E\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u660E\u793A\u7684\u306B\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u30014D View Pro \u30A8\u30EA\u30A2\u3092 PDF\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u51FA\u529B\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'var $printInfo : Object\n\n// \u5370\u5237\u5C5E\u6027\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5BA3\u8A00\u3057\u307E\u3059\n$printInfo:=New object\n\n// \u5370\u5237\u5C5E\u6027\u3092\u5B9A\u7FA9\u3057\u307E\u3059\n$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"\n$printInfo.firstPageNumber:=1\n$printInfo.footerRight:="page &P of &N"\n$printInfo.orientation:=vk print page orientation landscape\n$printInfo.centering:=vk print centering horizontal\n$printInfo.columnStart:=0\n$printInfo.columnEnd:=8\n$printInfo.rowStart:=0\n$printInfo.rowEnd:=24\n\n$printInfo.showGridLine:=True\n\n// \u4F1A\u793E\u306E\u30ED\u30B4\u3092\u8FFD\u52A0\u3057\u307E\u3059\n$printInfo.headerLeftImage:=logo.png\n$printInfo.headerLeft:="&G"\n\n$printInfo.showRowHeader:=vk print visibility hide\n$printInfo.showColumnHeader:=vk print visibility hide\n$printInfo.fitPagesWide:=1\n$printInfo.fitPagesTall:=1\n\n// \u5370\u5237\u60C5\u5831\u3092\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET PRINT INFO ("ViewProArea";$printInfo)\n\n// PDF \u3092\u66F8\u304D\u51FA\u3057\u307E\u3059\nVP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u51FA\u529B\u3055\u308C\u305FPDF:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:t(614195).Z+"",width:"815",height:"640"})}),"\n",(0,i.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/ViewPro/configuring#%E5%8D%B0%E5%88%B7%E5%B1%9E%E6%80%A7",children:"4D View Pro \u5370\u5237\u5C5E\u6027"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/ViewPro/commands/vp-get-print-info",children:"VP Get print info"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/ViewPro/commands/vp-print",children:"VP PRINT"})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},614195:function(n,e,t){t.d(e,{Z:function(){return r}});let r=t.p+"assets/images/cmd_vpSetPrintInfo-e383247d68f82d8918fb9f62a1a0039c.PNG"},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);