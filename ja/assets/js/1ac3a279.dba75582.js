"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15009"],{319048:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES","description":"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-show-print-lines","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES"},"sidebar":"docs","previous":{"title":"VP SET SHEET OPTIONS","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-sheet-options"},"next":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-table-column-attributes"}}'),i=s("785893"),r=s("250065");let d={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"visible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\u5370\u5237\u7DDA\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u306F true (\u30C7\u30D5\u30A9\u30EB\u30C8)\u3001\u975E\u8868\u793A\u306E\u5834\u5408\u306F false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VP SET SHOW PRINT LINES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 \u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u5185\u3067\u5370\u5237\u30D7\u30EC\u30D3\u30E5\u30FC\u7DDA\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"visible"})," \u306B\u306F\u3001\u5370\u5237\u7DDA\u3092\u8868\u793A\u3059\u308B\u306B\u306F ",(0,i.jsx)(n.code,{children:"True"}),"\u3001\u975E\u8868\u793A\u306B\u3059\u308B\u306B\u306F ",(0,i.jsx)(n.code,{children:"False"})," \u3092\u6E21\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F ",(0,i.jsx)(n.code,{children:"True"})," \u304C\u6E21\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"sheet"})," \u306B\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002 index \u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306F 0 \u8D77\u70B9\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u306E\u5370\u5237\u7DDA\u306E\u4F4D\u7F6E\u306F\u3001\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u306E\u6539\u30DA\u30FC\u30B8\u306E\u4F4D\u7F6E\u306B\u3088\u3063\u3066\u5909\u5316\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E 2\u756A\u76EE\u306E\u30B7\u30FC\u30C8\u306E\u5370\u5237\u7DDA\u3092\u8868\u793A\u3055\u305B\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines",src:s(198196).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.p,{children:"\u6539\u30DA\u30FC\u30B8\u304C\u3042\u308B\u5834\u5408:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines-with-page-break",src:s(416845).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-show-print-lines",children:"VP Get show print lines"})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},416845:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},198196:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);