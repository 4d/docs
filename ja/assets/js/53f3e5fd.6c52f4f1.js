"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11952"],{766566:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-attributes","title":"WP GET ATTRIBUTES","description":"WP GET ATTRIBUTES ( targetObj ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-attributes","permalink":"/docs/ja/WritePro/commands/wp-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-attributes","title":"WP GET ATTRIBUTES","slug":"/WritePro/commands/wp-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP FREEZE FORMULAS","permalink":"/docs/ja/WritePro/commands/wp-freeze-formulas"},"next":{"title":"WP Get body","permalink":"/docs/ja/WritePro/commands/wp-get-body"}}'),i=n("785893"),s=n("250065");let d={id:"wp-get-attributes",title:"WP GET ATTRIBUTES",slug:"/WritePro/commands/wp-get-attributes",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WP GET ATTRIBUTES"})," ( ",(0,i.jsx)(t.em,{children:"targetObj"})," ; ",(0,i.jsx)(t.em,{children:"attribName"})," ; ",(0,i.jsx)(t.em,{children:"attribValue"})," {; ",(0,i.jsx)(t.em,{children:"attribName2"})," ; ",(0,i.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,i.jsx)(t.em,{children:"attribNameN"})," ; ",(0,i.jsx)(t.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u5F15\u6570"}),(0,i.jsx)(t.th,{children:"\u578B"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetObj"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u30EC\u30F3\u30B8 \u307E\u305F\u306F\u8981\u7D20"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attribName"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027\u306E\u540D\u524D"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attribValue"}),(0,i.jsx)(t.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u6570\u5024, \u914D\u5217, \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3, \u30D4\u30AF\u30C1\u30E3\u30FC, \u65E5\u4ED8"}),(0,i.jsx)(t.td,{children:"\uD83E\uDC58"}),(0,i.jsx)(t.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u30EC\u30F3\u30B8\u306E\u5C5E\u6027\u306E\u30AB\u30EC\u30F3\u30C8\u5024"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WP GET ATTRIBUTES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30014D Write Pro\u30EC\u30F3\u30B8\u3001\u30D8\u30C3\u30C0\u30FC/\u30D5\u30C3\u30BF\u30FC/\u672C\u6587/\u8868\u3001\u3042\u308B\u3044\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E\u3042\u3089\u3086\u308B\u5C5E\u6027\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u30684D Write Pro\u306E\u3069\u306E\u3088\u3046\u306A\u5185\u90E8\u5C5E\u6027(\u6587\u5B57\u3001\u6BB5\u843D\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u753B\u50CF\u306A\u3069)\u306B\u3082\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"targetObj"})," \u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,i.jsx)(t.li,{children:"\u8981\u7D20 (\u30D8\u30C3\u30C0\u30FC / \u30D5\u30C3\u30BF\u30FC / \u672C\u6587 / \u8868 / \u6BB5\u843D / \u30A2\u30F3\u30AB\u30FC\u753B\u50CF\u3042\u308B\u3044\u306F\u30A4\u30F3\u30E9\u30A4\u30F3\u753B\u50CF/\u30BB\u30AF\u30B7\u30E7\u30F3/\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3/\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8)"}),"\n",(0,i.jsx)(t.li,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"attribName"})," \u5F15\u6570\u306B\u6E21\u3059\u3053\u3068\u306E\u3067\u304D\u308B\u5C5E\u6027\u306E\u5305\u62EC\u7684\u306A\u4E00\u89A7\u3068\u3001\u305D\u306E\u30B9\u30B3\u30FC\u30D7\u304A\u3088\u3073\u5024\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(t.em,{children:"4D Write Pro\u5C5E\u6027"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u305F\u8981\u7D20\u5185\u306E\u540C\u3058\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u7570\u306A\u308B\u5024\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5BFE\u5FDC\u3057\u307E\u3059:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u6570\u5024\u306B\u5BFE\u3057\u3066\u306F\u3001wk mixed \u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(t.li,{children:["\u914D\u5217\u306E\u5834\u5408\u3001\u7A7A\u306E\u914D\u5217\u3092\u8FD4\u3057\u307E\u3059(",(0,i.jsx)(t.em,{children:"attribValue"}),"\u304C\u914D\u5217\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u30BF\u30D6\u30B9\u30C8\u30C3\u30D7\u3001\u30AB\u30E9\u30FC)\u3002\u305F\u3060\u3057wk text shadow offset \u306B\u95A2\u3057\u3066\u306F\u3001\u914D\u5217\u306E\u5024\u306F\u5E38\u306B2\u3064\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u542B\u307F\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u306F\u6C34\u5E73\u65B9\u5411\u3042\u308B\u3044\u306F\u5782\u76F4\u65B9\u5411\u306E\u30AA\u30D5\u30BB\u30C3\u30C8(\u3042\u308B\u3044\u306F\u305D\u306E\u4E21\u65B9)\u304C\u30DF\u30C3\u30AF\u30B9\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306Fwk mixed\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(t.li,{children:"\u6587\u5B57\u5217\u306E\u5024\u306B\u5BFE\u3057\u3066\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u5024\u306B\u5BFE\u3057\u3066\u306F\u3001\u7A7A\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u6CE8"}),": ",(0,i.jsx)(t.em,{children:"targetObj"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u6BB5\u843D\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3068\u6587\u5B57\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u6BB5\u843D\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u540D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(t.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(t.p,{children:"\u9078\u629E\u3055\u308C\u305F\u30A8\u30EA\u30A2\u306E\u80CC\u666F\u8272\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n\xa0WP GET ATTRIBUTES($range;wk background color;$bcol)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"4D Write Pro"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:"4D Write Pro\u5C5E\u6027"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"wp-reset-attributes.md",children:"WP RESET ATTRIBUTES"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/ja/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let i={},s=r.createContext(i);function d(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);