"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73762"],{472279:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-get-name","title":"OBJECT Get name","description":"OBJECT Get name {( selector )} : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-name","permalink":"/docs/ja/commands/object-get-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-name","title":"OBJECT Get name","slug":"/commands/object-get-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get multiline","permalink":"/docs/ja/commands/object-get-multiline"},"next":{"title":"OBJECT Get placeholder","permalink":"/docs/ja/commands/object-get-placeholder"}}'),c=t("785893"),r=t("250065");let d={id:"object-get-name",title:"OBJECT Get name",slug:"/commands/object-get-name",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"OBJECT Get name"})," {( ",(0,c.jsx)(n.em,{children:"selector"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"selector"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30AB\u30C6\u30B4\u30EA"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsx)(n.p,{children:"OBJECT Get name \u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,c.jsx)(n.em,{children:"selector"}),"\u5F15\u6570\u306E\u5024\u306B\u57FA\u3065\u304D\u30012\u30BF\u30A4\u30D7\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u6E21\u305B\u307E\u3059 (\u30C6\u30FC\u30DE):"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Object current (",(0,c.jsx)(n.em,{children:"selector"})," \u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8): \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3059\u304B",(0,c.jsx)(n.em,{children:"selector"}),"\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u547C\u3070\u308C\u305F\u30B5\u30D6\u30E1\u30BD\u30C3\u30C9) \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u547C\u3070\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"Object with focus: \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.p,{children:'"bValidateForm" \u30DC\u30BF\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9:'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0$btnName:=OBJECT Get name(Object current)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u5B9F\u884C\u5F8C\u3001",(0,c.jsx)(n.em,{children:"$btnName"}),'\u5909\u6570\u306B\u306F"bValidateForm"\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002']}),"\n",(0,c.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"Form Objects (Access)"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/object-get-pointer",children:"OBJECT Get pointer"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(\u30D5\u30A9\u30FC\u30E0)"})]}),"\n",(0,c.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"1087"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let c={},r=s.createContext(c);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);