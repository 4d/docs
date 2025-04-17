"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78723"],{223904:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/spell-checking","title":"SPELL CHECKING","description":"SPELL CHECKING","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-checking.md","sourceDirName":"commands-legacy","slug":"/commands/spell-checking","permalink":"/docs/ja/20-R8/commands/spell-checking","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-checking.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-checking","title":"SPELL CHECKING","slug":"/commands/spell-checking","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL CHECK TEXT","permalink":"/docs/ja/20-R8/commands/spell-check-text"},"next":{"title":"SPELL Get current dictionary","permalink":"/docs/ja/20-R8/commands/spell-get-current-dictionary"}}'),c=t("785893"),d=t("250065");let r={id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"SPELL CHECKING"})}),"\n\n\n\n\n\n\n\n",(0,c.jsx)(n.table,{children:(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,c.jsx)(n.th,{})]})})}),"\n",(0,c.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"SPELL CHECKING"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30FC\u30E0\u3067\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u6301\u3064\u5909\u6570\u306E\u30B9\u30DA\u30EB\u30C1\u30A7\u30C3\u30AF\u3092\u884C\u3044\u307E\u3059\u3002\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u6587\u5B57\u5217\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30BF\u30A4\u30D7\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6CE8:"}),' \u30D5\u30A9\u30FC\u30E0\u5185\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u4E8B\u306B\u5BC4\u3063\u3066\u30B9\u30DA\u30EB\u30C1\u30A7\u30C3\u30AF\u3092\u30C8\u30EA\u30AC\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30DC\u30BF\u30F3\u304C"\u30D5\u30A9\u30FC\u30AB\u30B9\u53EF"\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,c.jsxs)(n.p,{children:["\u30B9\u30DA\u30EB\u30C1\u30A7\u30C3\u30AF\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u6700\u521D\u306E\u6587\u5B57\u304B\u3089\u59CB\u307E\u308A\u307E\u3059\u3002\u4E0D\u660E\u306A\u5358\u8A9E\u304C\u691C\u77E5\u3055\u308C\u308B\u3068\u3001\u30B9\u30DA\u30EB\u30C1\u30C3\u30AF\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059 (\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u30014D\u306EDesign Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044) \u3002",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u9650\u308A\u306F\u30014D\u306F\u30AB\u30EC\u30F3\u30C8\u30C7\u30A3\u30AF\u30B7\u30E7\u30CA\u30EA\u3092\u4F7F\u7528\u3057\u307E\u3059(\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A00\u8A9E\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059) \u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8B66\u544A:"})," ",(0,c.jsx)(n.strong,{children:"SPELL CHECKING"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u305F\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9(\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570)\u3067\u306F\u306A\u304F\u3001\u30D5\u30A9\u30FC\u30E0\u5185\u306B\u5165\u529B\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u5F71\u97FF\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092On Data Change \u307E\u305F\u306F On Losing Focus\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304B\u3089\u547C\u3073\u51FA\u3057\u305F\u5834\u5408(\u63A8\u5968\u3055\u308C\u307E\u305B\u3093)\u30014D\u306F\u65E2\u306B\u3053\u306E\u6642\u70B9\u3067\u5165\u529B\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3078\u3068\u5272\u308A\u5F53\u3066\u3066\u3057\u307E\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u4FDD\u5B58\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u7DE8\u96C6\u3055\u308C\u305F\u7D50\u679C\u3092",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/get-edited-text",children:"Get edited text"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u81EA\u8EAB\u3078\u3068\u5272\u308A\u5F53\u3066\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0SPELL CHECKING\n\xa0\xa0\xa0\xa0theVariable:=Get edited text\n\xa0End if\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/spell-check-text",children:"SPELL CHECK TEXT"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"900"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let c={},d=s.createContext(c);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);