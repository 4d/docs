"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72358"],{912912:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-open-xml-element","title":"SAX OPEN XML ELEMENT","description":"SAX OPEN XML ELEMENT ( document ; tag {; attribName ; attribValue} {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-open-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element","permalink":"/docs/ja/20-R7/commands/sax-open-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-open-xml-element","title":"SAX OPEN XML ELEMENT","slug":"/commands/sax-open-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML PROCESSING INSTRUCTION","permalink":"/docs/ja/20-R7/commands/sax-get-xml-processing-instruction"},"next":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/ja/20-R7/commands/sax-open-xml-element-arrays"}}'),l=t("785893"),d=t("250065");let r={id:"sax-open-xml-element",title:"SAX OPEN XML ELEMENT",slug:"/commands/sax-open-xml-element",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT"})," ( ",(0,l.jsx)(n.em,{children:"document"})," ; ",(0,l.jsx)(n.em,{children:"tag"})," {; ",(0,l.jsx)(n.em,{children:"attribName"})," ; ",(0,l.jsx)(n.em,{children:"attribValue"}),"} {; ",(0,l.jsx)(n.em,{children:"attribName2"})," ; ",(0,l.jsx)(n.em,{children:"attribValue2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"attribNameN"})," ; ",(0,l.jsx)(n.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"document"}),(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tag"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u958B\u304F\u8981\u7D20\u306E\u540D\u524D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"attribName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5C5E\u6027\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"attribValue"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:["SAX OPEN XML ELEMENT \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,l.jsx)(n.em,{children:"document"})," \u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u4E2D\u306B\u65B0\u3057\u3044\u8981\u7D20\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u5C5E\u6027\u3068\u305D\u306E\u5024\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8FFD\u52A0\u3055\u308C\u305F\u8981\u7D20\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u4E2D\u3067\u958B\u304B\u308C\u305F\u72B6\u614B\u3067\u3059 (\u7D42\u4E86\u30BF\u30B0\u306F\u8FFD\u52A0\u3055\u308C\u307E\u305B\u3093)\u3002\u4F5C\u6210\u3057\u305F\u8981\u7D20\u3092\u9589\u3058\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sax-close-xml-element",title:"SAX CLOSE XML ELEMENT",children:"SAX CLOSE XML ELEMENT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B"]}),"\n",(0,l.jsx)(n.li,{children:"XML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9589\u3058\u308B\u30024D\u306F\u81EA\u52D5\u3067\u5FC5\u8981\u306AXML\u7D42\u4E86\u30BF\u30B0\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"tag"}),"\u306B\u306F\u3001\u4F5C\u6210\u3059\u308B\u8981\u7D20\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u540D\u524D\u306B\u306F\u6587\u5B57\u3001\u6570\u5B57 \u201C.\u201D, \u201C-\u201C,\u201D_\u201D a\u3084 \u201C:\u201D.\u306A\u3069\u306E\u6587\u5B57\u306E\u307F\u3092\u6E21\u305B\u307E\u3059\u3002\u540D\u524D\u306FXML\u306E\u4ED5\u69D8\u306B\u5F93\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u7121\u52B9\u306A\u6587\u5B57\u304C",(0,l.jsx)(n.em,{children:"tag"}),"\u306B\u6E21\u3055\u308C\u308B\u3068\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u3067",(0,l.jsx)(n.em,{children:"attribName"}),"\u3068",(0,l.jsx)(n.em,{children:"attribValue"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3001(\u5909\u6570\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u307E\u305F\u306F\u30EA\u30C6\u30E9\u30EB\u5024\u3067) \u30B3\u30DE\u30F3\u30C9\u306B1\u3064\u4EE5\u4E0A\u306E\u5C5E\u6027\u540D/\u5024\u306E\u30DA\u30A2\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0vElement:="Book"\n\xa0SAX OPEN XML ELEMENT($DocRef;vElement)\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4EE5\u4E0B\u306E\u884C\u3092\u66F8\u304D\u8FBC\u307F\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Book\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"tag"}),"\u306B\u7121\u52B9\u306A\u6587\u5B57\u304C\u6E21\u3055\u308C\u308B\u3068\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sax-open-xml-element-arrays",children:"SAX OPEN XML ELEMENT ARRAYS"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"853"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,l.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},d=s.createContext(l);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);