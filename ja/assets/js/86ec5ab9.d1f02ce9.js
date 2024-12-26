"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25000"],{172277:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-element","title":"SAX GET XML ELEMENT","description":"SAX GET XML ELEMENT ( document ; name ; prefix ; attrNames ; attrValues )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-element","permalink":"/docs/ja/commands/sax-get-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-element","title":"SAX GET XML ELEMENT","slug":"/commands/sax-get-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML DOCUMENT VALUES","permalink":"/docs/ja/commands/sax-get-xml-document-values"},"next":{"title":"SAX GET XML ELEMENT VALUE","permalink":"/docs/ja/commands/sax-get-xml-element-value"}}'),d=t("785893"),r=t("250065");let l={id:"sax-get-xml-element",title:"SAX GET XML ELEMENT",slug:"/commands/sax-get-xml-element",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML ELEMENT"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"name"})," ; ",(0,d.jsx)(n.em,{children:"prefix"})," ; ",(0,d.jsx)(n.em,{children:"attrNames"})," ; ",(0,d.jsx)(n.em,{children:"attrValues"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u8981\u7D20\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prefix"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u540D\u524D\u7A7A\u9593"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"attrNames"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5C5E\u6027\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"attrValues"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["SAX GET XML ELEMENT \u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.em,{children:"document"})," \u5F15\u6570\u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u73FE\u308C\u308B\u3001",(0,d.jsx)(n.em,{children:"name"}),"\u8981\u7D20\u306B\u3064\u3044\u3066\u306E\u3055\u307E\u3056\u307E\u306A\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FXML Start Element\u307E\u305F\u306FXML End Element SAX\u30A4\u30D9\u30F3\u30C8\u3067\u547C\u3073\u51FA\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002XML End Element\u306E\u7279\u5B9A\u306E\u30B1\u30FC\u30B9\u3067\u306F\u3001\u5C5E\u6027\u5F15\u6570\u306F\u51E6\u7406\u3055\u308C\u307E\u305B\u3093\u3002SAX\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/sax-get-xml-node",title:"SAX Get XML node",children:"SAX Get XML node"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"name"})," \u5F15\u6570\u306B\u306F\u8981\u7D20\u540D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"prefix"})," \u5F15\u6570\u306B\u306F\u8981\u7D20\u306E\u540D\u524D\u7A7A\u9593\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u8981\u7D20\u306B\u540D\u524D\u7A7A\u9593\u304C\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"attrNames"})," \u914D\u5217\u306B\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u8981\u7D20\u306E\u5C5E\u6027\u540D\u30EA\u30B9\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u3092\u4F5C\u6210\u3057\u30B5\u30A4\u30BA\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"attrValues"})," \u914D\u5217\u306B\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u8981\u7D20\u306E\u5C5E\u6027\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u3092\u4F5C\u6210\u3057\u30B5\u30A4\u30BA\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306EXML\u30B3\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:'<RootElement>\n\xa0\xa0\xa0<Child Att1="111" Att2="222" Att3="333">MyText</Child>\n</RootElement>\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ELEMENT(DocRef;vName;vPrefix;tAttrNames;tAttrValues)\n"})}),"\n",(0,d.jsxs)(n.p,{children:['vName\u306B\u306F"Child"\u304C\u3001',(0,d.jsx)(n.br,{}),'\nvPrefix\u306B\u306F""\u304C\u3001',(0,d.jsx)(n.br,{}),'\ntAttrNames{1} \u306B\u306F "Att1"\u3001',(0,d.jsx)(n.br,{}),'\ntAttrNames{2} \u306B\u306F "Att2"\u3001',(0,d.jsx)(n.br,{}),'\ntAttrNames{3} \u306B\u306F "Att3"\u304C',(0,d.jsx)(n.br,{}),'\ntAttrValues{1} \u306B\u306F "111",',(0,d.jsx)(n.br,{}),'\ntAttrValues{2} \u306B\u306F "222"\u3001',(0,d.jsx)(n.br,{}),'\ntAttrValues{3} \u306B\u306F "333"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/sax-get-xml-node",children:"SAX Get XML node"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"876"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);