"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88054"],{935476:function(e,t,n){n.r(t),n.d(t,{metadata:()=>d,contentTitle:()=>l,default:()=>x,assets:()=>c,toc:()=>h,frontMatter:()=>i});var d=JSON.parse('{"id":"commands-legacy/method-set-attribute","title":"METHOD SET ATTRIBUTE","description":"METHOD SET ATTRIBUTE ( path ; attribType ; attribValue {; attribType2 ; attribValue2 ; ... ; attribTypeN ; attribValueN}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attribute","permalink":"/docs/ja/commands/method-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attribute","title":"METHOD SET ATTRIBUTE","slug":"/commands/method-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/ja/commands/method-set-access-mode"},"next":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/ja/commands/method-set-attributes"}}'),s=n("785893"),r=n("250065");let i={id:"method-set-attribute",title:"METHOD SET ATTRIBUTE",slug:"/commands/method-set-attribute",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"})," ( ",(0,s.jsx)(t.em,{children:"path"})," ; ",(0,s.jsx)(t.em,{children:"attribType"})," ; ",(0,s.jsx)(t.em,{children:"attribValue"})," {; ",(0,s.jsx)(t.em,{children:"attribType2"})," ; ",(0,s.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"attribTypeN"})," ; ",(0,s.jsx)(t.em,{children:"attribValueN"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5F15\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u30D1\u30B9"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attribType"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u5C5E\u6027\u30BF\u30A4\u30D7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attribValue"}),(0,s.jsx)(t.td,{children:"Boolean, Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"True: \u5C5E\u6027\u3092\u9078\u629EFalse: \u5C5E\u6027\u306E\u9078\u629E\u89E3\u9664"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"\u6F14\u7B97\u5B50"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u6307\u5B9A\u6642 = \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9069\u7528\u3059\u308B (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u3067\u306F\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,s.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(t.em,{children:"path"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E",(0,s.jsx)(t.em,{children:"attribType"}),"\u5C5E\u6027\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u5BFE\u3057\u3066\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002\u7121\u52B9\u306A ",(0,s.jsx)(t.em,{children:"path"}),"\u3092\u6E21\u3059\u3068\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"attribType"}),"\u5F15\u6570\u306B\u306F\u8A2D\u5B9A\u3092\u884C\u3046\u5C5E\u6027\u306E\u30BF\u30A4\u30D7\u3092\u793A\u3059\u5024\u3092\u6E21\u3057\u307E\u3059\u3002",(0,s.jsx)(t.em,{children:"Design Object Access"}),"\u30C6\u30FC\u30DE\u306B\u3042\u308B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{children:"\u5024"}),(0,s.jsx)(t.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute executed on server"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:'"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute folder name"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"1024"}),(0,s.jsxs)(t.td,{children:["\u30E1\u30BD\u30C3\u30C9\u306E\u305F\u3081\u306E\u30D5\u30A9\u30EB\u30C0\u540D(\u300C\u30D5\u30A9\u30EB\u30C0\u300D\u5C5E\u6027)\u3002\u3053\u306E\u5B9A\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30D5\u30A9\u30EB\u30C0\u540D\u3092 ",(0,s.jsx)(t.em,{children:"attribValue"})," \u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,s.jsx)(t.br,{}),"\u3053\u306E\u540D\u524D\u304C\u6709\u52B9\u306A\u30D5\u30A9\u30EB\u30C0\u306B\u5BFE\u5FDC\u3059\u308B\u5834\u5408\u3001\u30E1\u30BD\u30C3\u30C9\u306F\u305D\u306E\u89AA\u30D5\u30A9\u30EB\u30C0\u306B\u7F6E\u304B\u308C\u307E\u3059\u3002\u30D5\u30A9\u30EB\u30C0\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u89AA\u30D5\u30A9\u30EB\u30C0\u306E\u968E\u5C64\u306F\u4F55\u3082\u5909\u66F4\u3057\u307E\u305B\u3093\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30E1\u30BD\u30C3\u30C9\u306F\u30EB\u30FC\u30C8\u968E\u5C64\u306B\u7F6E\u304B\u308C\u307E\u3059\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute invisible"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:'"\u96A0\u3059"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SOAP"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:'"Web\u30B5\u30FC\u30D3\u30B9\u3068\u3057\u3066\u63D0\u4F9B"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SQL"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:'"SQL\u5229\u7528\u53EF"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published Web"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:'"4D\u30BF\u30B0\u304A\u3088\u3073URL (4DACTION...) \u3067\u5229\u7528\u53EF"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published WSDL"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:'"WSDL\u3067\u516C\u958B\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute shared"}),(0,s.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:'"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u5171\u6709\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"attribValue"})," \u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u5024\u3092\u6E21\u3059\u3053\u3068\u304C\u51FA\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5BFE\u5FDC\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u306B\u306F",(0,s.jsx)(t.strong,{children:"True"}),"\u3092\u6E21\u3057\u307E\u3059\u3002\u9078\u629E\u3092\u89E3\u9664\u3059\u308B\u306B\u306F",(0,s.jsx)(t.strong,{children:"False"}),"\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["Attribute folder name \u5B9A\u6570\u3092 ",(0,s.jsx)(t.em,{children:"attribType"})," \u306B\u4F7F\u7528\u3057\u305F\u5834\u5408\u306F\u6587\u5B57\u5217(\u30D5\u30A9\u30EB\u30C0\u540D)\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4E00\u5EA6\u306E\u547C\u3073\u51FA\u3057\u306B\u8907\u6570\u306E",(0,s.jsx)(t.em,{children:"attribType"}),";",(0,s.jsx)(t.em,{children:"attribValue"})," \u30DA\u30A2\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u304C\u3001\u3053\u306E\u5834\u5408 (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30B3\u30FC\u30C9\u306B\u306F\u66F8\u304D\u8FBC\u307F\u30A2\u30AF\u30BB\u30B9\u304C\u3067\u304D\u306A\u3044\u305F\u3081) ",(0,s.jsx)(t.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u72B6\u6CC1\u3067 ",(0,s.jsx)(t.em,{children:"*"})," \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u30A8\u30E9\u30FC-9763\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.h5,{id:""}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u30E2\u30FC\u30C9\u3067\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u3001\u30A8\u30E9\u30FC -9762 \u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(t.p,{children:'"Choose dialog"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u5171\u6709"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3057\u307E\u3059:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD SET ATTRIBUTE("Choose dialog";Attribute shared;True)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(t.p,{children:"\u8907\u6570\u306E\u5C5E\u6027/\u5024\u306E\u30DA\u30A2\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Design Object Access"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ja/commands/method-get-attribute",children:"METHOD Get attribute"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ja/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})]})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var d=n(667294);let s={},r=d.createContext(s);function i(e){let t=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);