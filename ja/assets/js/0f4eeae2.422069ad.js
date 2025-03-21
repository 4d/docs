"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68768"],{470917:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-attributes","title":"WP SET ATTRIBUTES","description":"WP SET ATTRIBUTES ( targetObj ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-attributes","permalink":"/docs/ja/20-R7/WritePro/commands/wp-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-attributes","title":"WP SET ATTRIBUTES","slug":"/WritePro/commands/wp-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Selection range","permalink":"/docs/ja/20-R7/WritePro/commands/wp-selection-range"},"next":{"title":"WP SET DATA CONTEXT","permalink":"/docs/ja/20-R7/WritePro/commands/wp-set-data-context"}}'),i=t("785893"),d=t("250065");let s={id:"wp-set-attributes",title:"WP SET ATTRIBUTES",slug:"/WritePro/commands/wp-set-attributes",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP SET ATTRIBUTES"})," ( ",(0,i.jsx)(n.em,{children:"targetObj"})," ; ",(0,i.jsx)(n.em,{children:"attribName"})," ; ",(0,i.jsx)(n.em,{children:"attribValue"})," {; ",(0,i.jsx)(n.em,{children:"attribName2"})," ; ",(0,i.jsx)(n.em,{children:"attribValue2"})," ; ... ; ",(0,i.jsx)(n.em,{children:"attribNameN"})," ; ",(0,i.jsx)(n.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"targetObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u30EC\u30F3\u30B8 \u307E\u305F\u306F\u8981\u7D20"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"attribName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u5C5E\u6027\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"attribValue"}),(0,i.jsx)(n.td,{children:"Text, Number, Object, Collection, Picture, Date"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u5C5E\u6027\u306E\u5024"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP SET ATTRIBUTES"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30EC\u30F3\u30B8\u3001\u8981\u7D20\u3001\u3042\u308B\u3044\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u3042\u3089\u3086\u308B\u5C5E\u6027\u306E\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u3042\u3089\u3086\u308B4D Write Pro\u5185\u90E8\u306E\u5C5E\u6027(\u6587\u5B57\u3001\u6BB5\u843D\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u307E\u305F\u306F\u30D4\u30AF\u30C1\u30E3\u30FC)\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7B2C\u4E00\u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u7D20(\u30D8\u30C3\u30C0\u30FC / \u30D5\u30C3\u30BF\u30FC / \u672C\u6587 / \u8868 / \u884C / \u6BB5\u843D / \u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u753B\u50CF\u3042\u308B\u3044\u306F\u30A4\u30F3\u30E9\u30A4\u30F3\u753B\u50CF / \u30BB\u30AF\u30B7\u30E7\u30F3 / \u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3 / \u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8)"}),"\n",(0,i.jsx)(n.li,{children:"4D Write \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"attribName"}),"\u306B\u306F\u8A2D\u5B9A\u3059\u308B\u5C5E\u6027\u540D\u3092\u3001",(0,i.jsx)(n.em,{children:"attribValue"}),"\u306B\u306F\u8A2D\u5B9A\u3059\u308B\u5024\u3092\u6E21\u3057\u307E\u3059\u3002",(0,i.jsx)(n.em,{children:"attribName"}),"\u5F15\u6570\u306B\u6E21\u3059\u5C5E\u6027\u306E\u5305\u62EC\u7684\u306A\u4E00\u89A7\u3068\u3001\u305D\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u5024\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(n.em,{children:"4D Write Pro\u5C5E\u6027"}),"\u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53D7\u3051\u6E21\u3059\u3053\u3068\u306E\u3067\u304D\u308B ",(0,i.jsx)(n.em,{children:"attribName"})," / ",(0,i.jsx)(n.em,{children:"attribValue"})," \u30DA\u30A2\u306E\u6570\u306B\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u540C\u3058\u5BFE\u8C61\u306B\u3064\u3044\u3066\u8907\u6570\u306E\u5C5E\u6027\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"WP SET ATTRIBUTES"})," \u3092\u8907\u6570\u56DE\u547C\u3073\u51FA\u3059\u3088\u308A\u3082\u3001\u4E00\u56DE\u306E\u547C\u3073\u51FA\u3057\u3067\u8907\u6570\u306E",(0,i.jsx)(n.em,{children:"attribName"})," / ",(0,i.jsx)(n.em,{children:"attribValue"})," \u30DA\u30A2\u3092\u4E00\u62EC\u6307\u5B9A\u3059\u308B\u307B\u3046\u304C\u51E6\u7406\u304C\u6700\u9069\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E4D Write Pro\u30A8\u30EA\u30A2\u306B\u3066\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5358\u8A9E\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(17495).Z+"",width:"497",height:"286"})}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Get selection(*;"WParea")\xa0//\u9078\u629E\u3055\u308C\u305F\u30EC\u30F3\u30B8\u3092\u53D6\u5F97\n\xa0\n\xa0\xa0// \u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u5F71\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u3092pt\u5358\u4F4D\u3067\u8A2D\u5B9A\n\xa0WP SET ATTRIBUTES($range;wk text shadow offset;1)\n\xa0\xa0//\u6BB5\u843D\u306E\u30D1\u30C3\u30C7\u30A3\u30F3\u30B0\u3092\u8A2D\u5B9A\n\xa0WP SET ATTRIBUTES($range;wk padding;1)\n\xa0\xa0//10 pt\u306E\u5883\u754C\u7DDA\u3092\u5B9A\u7FA9\n\xa0WP SET ATTRIBUTES($range;wk border style;wk solid;wk border width;10)\n\xa0\xa0//\u5883\u754C\u7DDA\u30AB\u30E9\u30FC\u3092\u8A2D\u5B9A\n\xa0WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u69D8\u306A\u7D50\u679C\u304C\u5F97\u3089\u308C\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(155353).Z+"",width:"497",height:"416"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001wk inside\u3068wk outside\u5B9A\u6570\u306E\u4F7F\u7528\u3092\u8AAC\u660E\u3057\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$wpRange:=WP Get selection(writeProdoc)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)\n\xa0WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5168\u4F53\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(118171).Z+"",width:"519",height:"282"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,i.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u80CC\u666F\u753B\u50CF\u3092\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(709611).Z+"",width:"929",height:"1209"})}),"\n",(0,i.jsx)(n.p,{children:"\u80CC\u666F\u753B\u50CF\u3092\u3001\u5370\u5237\u53EF\u80FD\u30A8\u30EA\u30A2\u5168\u4F53\u306B\u5BFE\u3057\u3066\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n\xa0WP SET ATTRIBUTES(WParea;wk background clip;wk paper box)\n\xa0WP SET ATTRIBUTES(WParea;wk background origin;wk paper box)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(179505).Z+"",width:"930",height:"1208"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8"}),": paper box \u306E\u5024\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3042\u308B\u3044\u306F\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u306E\u307F\u9069\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,i.jsx)(n.p,{children:"\u7570\u306A\u308B\u9593\u9694\u306E\u30BF\u30D6\u3092\u8A2D\u5B9A\u3057\u3001\u5225\u3005\u306E\u6587\u5B57\u3092\u5148\u982D\u6587\u5B57\u3068\u3057\u3066\u5B9A\u7FA9\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0\n\xa0ARRAY TEXT(_position;0)\n\xa0ARRAY LONGINT(_type;0)\n\xa0ARRAY TEXT(_leadings;0)\n\xa0\n\xa0APPEND TO ARRAY(_position;"3cm")\n\xa0APPEND TO ARRAY(_type;wk left)\n\xa0APPEND TO ARRAY(_leadings;".")\n\xa0\n\xa0APPEND TO ARRAY(_position;"7.5cm")\n\xa0APPEND TO ARRAY(_type;wk right)\n\xa0APPEND TO ARRAY(_leadings;".")\n\xa0\n\xa0APPEND TO ARRAY(_position;"9cm")\n\xa0APPEND TO ARRAY(_type;wk center)\n\xa0APPEND TO ARRAY(_leadings;".")\n\xa0\n\xa0APPEND TO ARRAY(_position;"12cm")\n\xa0APPEND TO ARRAY(_type;wk decimal)\n\xa0APPEND TO ARRAY(_leadings;"~")\n\xa0\n\xa0APPEND TO ARRAY(_position;"2cm")\n\xa0APPEND TO ARRAY(_type;wk left)\n\xa0APPEND TO ARRAY(_leadings;"")\n\xa0\n\xa0$range:=WP Get selection(WParea)\n\xa0WP SET ATTRIBUTES($range;wk tab stop offsets;_position)\n\xa0WP SET ATTRIBUTES($range;wk tab stop types;_type)\n\xa0WP SET ATTRIBUTES($range;wk tab stop leadings;_leadings)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(707568).Z+"",width:"434",height:"206"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"4D Write Pro\u5C5E\u6027"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},17495:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict2643639.en-bc19ba21b2a04a6458119054fbb3c295.png"},155353:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict2643642.en-0233353f6bad20669469ae6fdbefc392.png"},118171:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict2821715.en-7c7e1af2be6980c3402bb508c021fb75.png"},709611:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict3514231.en-46d2c539799f5d0e85d2c69910adf85f.png"},179505:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict3514233.en-e2399b1a60b8eff205d2192ae0493b08.png"},707568:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let i={},d=r.createContext(i);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);