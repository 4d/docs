"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67571"],{796023:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"REST/compute","title":"$compute","description":"\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u3092\u5BFE\u8C61\u306B\u8A08\u7B97\u3092\u304A\u3053\u306A\u3044\u307E\u3059 (\u4F8B Employee/objectAtt.property1/?$compute=sum)\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/$compute.md","sourceDirName":"REST","slug":"/REST/compute","permalink":"/docs/ja/18/REST/compute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"compute","title":"$compute"},"sidebar":"docs","previous":{"title":"$binary","permalink":"/docs/ja/18/REST/binary"},"next":{"title":"$distinct","permalink":"/docs/ja/18/REST/distinct"}}'),s=t("785893"),c=t("250065");let d={id:"compute",title:"$compute"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function h(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u3092\u5BFE\u8C61\u306B\u8A08\u7B97\u3092\u304A\u3053\u306A\u3044\u307E\u3059 (",(0,s.jsx)(n.em,{children:"\u4F8B"}),": ",(0,s.jsx)(n.code,{children:"Employee/salary/?$compute=sum"}),"\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306E\u4F8B: ",(0,s.jsx)(n.code,{children:"Employee/objectAtt.property1/?$compute=sum"}),")\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u3092\u5BFE\u8C61\u306B\u8A08\u7B97\u3092\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u8A08\u7B97\u3092\u304A\u3053\u306A\u3046\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306E\u5834\u5408\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,s.jsx)(n.p,{children:"\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30AD\u30FC\u30EF\u30FC\u30C9"}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$all"}),(0,s.jsx)(n.td,{children:"\u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u8A08\u7B97\u3092\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u304A\u3053\u306A\u3044\u3001\u7D50\u679C\u3092\u683C\u7D0D\u3057\u305F JSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u6570\u5024\u578B\u306E\u5C5E\u6027\u306B\u3064\u3044\u3066\u306F\u5E73\u5747 (average)\u3001\u30AB\u30A6\u30F3\u30C8 (count)\u3001\u6700\u5C0F (min)\u3001\u6700\u5927 (max)\u3001\u5408\u8A08 (sum)\u3001\u6587\u5B57\u5217\u578B\u306E\u5C5E\u6027\u306B\u3064\u3044\u3066\u306F\u30AB\u30A6\u30F3\u30C8 (count)\u3001\u6700\u5C0F (min)\u3001\u6700\u5927 (max) \u304C\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"average"}),(0,s.jsx)(n.td,{children:"\u6570\u5024\u578B\u5C5E\u6027\u306E\u5E73\u5747\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u8981\u7D20\u6570\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u5185\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u6570\u3092\u53D6\u5F97\u3057\u307E\u3059 (\u3069\u3061\u3089\u306E\u5834\u5408\u3082\u5C5E\u6027\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"min"}),(0,s.jsx)(n.td,{children:"\u6570\u5024\u578B\u5C5E\u6027\u3042\u308B\u3044\u306F\u6587\u5B57\u5217\u578B\u5C5E\u6027\u306E\u6700\u5C0F\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"max"}),(0,s.jsx)(n.td,{children:"\u6570\u5024\u578B\u5C5E\u6027\u3042\u308B\u3044\u306F\u6587\u5B57\u5217\u578B\u5C5E\u6027\u306E\u6700\u5927\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sum"}),(0,s.jsx)(n.td,{children:"\u6570\u5024\u578B\u5C5E\u6027\u306E\u5408\u8A08\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u5024\u578B\u306E\u5C5E\u6027\u3092\u5BFE\u8C61\u306B\u3059\u3079\u3066\u306E\u8A08\u7B97\u5024\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u5B57\u5217\u578B\u306E\u5C5E\u6027\u3092\u5BFE\u8C61\u306B\u3059\u3079\u3066\u306E\u8A08\u7B97\u5024\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u7279\u5B9A\u306E\u8A08\u7B97\u306E\u307F\u3092\u304A\u3053\u306A\u3046\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"235000"})}),"\n",(0,s.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u7279\u5B9A\u306E\u8A08\u7B97\u306E\u307F\u3092\u304A\u3053\u306A\u3046\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,s.jsx)(n.p,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"45"})})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},c=r.createContext(s);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);