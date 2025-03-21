"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10231"],{562795:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"ViewPro/commands/vp-convert-from-4d-view","title":"VP Convert from 4D View","description":"VP Convert from 4D View ( 4DViewDocument Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-convert-from-4d-view.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-from-4d-view","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-convert-from-4d-view","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-convert-from-4d-view","title":"VP Convert from 4D View"},"sidebar":"docs","previous":{"title":"VP Combine ranges","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-combine-ranges"},"next":{"title":"VP Convert to picture","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-convert-to-picture"}}'),o=t("785893"),i=t("250065");let c={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},s=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function m(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Convert from 4D View"})," ( ",(0,o.jsx)(n.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5F15\u6570"}),(0,o.jsx)(n.th,{children:"\u578B"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"4DViewDocument"}),(0,o.jsx)(n.td,{children:"BLOB"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VP Convert from 4D View"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u65E7\u5F0F\u306E 4D View \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u3068\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u65E7\u5F0F\u306E 4D View \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u73FE\u74B0\u5883\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u306A\u304F\u3066\u3082\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"4DViewDocument"})," \u306B\u306F\u5909\u63DB\u3059\u308B 4D View \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u683C\u7D0D\u3059\u308B BLOB\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002 \u30B3\u30DE\u30F3\u30C9\u306F\u30014D View \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u305F\u60C5\u5831\u3092\u3059\u3079\u3066 4D View Pro \u5C5E\u6027\u3078\u3068\u5909\u63DB\u3057\u305F 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,o.jsx)(n.p,{children:"BLOB \u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B 4D View \u30A8\u30EA\u30A2\u304B\u3089 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var r=t(667294);let o={},i=r.createContext(o);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);