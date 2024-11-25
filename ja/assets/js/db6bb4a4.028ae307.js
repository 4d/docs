"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76643"],{917475:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"REST/expand","title":"$expand","description":"\u753B\u50CF\u5C5E\u6027\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u5C55\u958B\u3057\u307E\u3059 (\u4F8B: Employee(1)/photo?$imageformat=best&$expand=photo) \u307E\u305F\u306F  \u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B BLOB\u5C5E\u6027\u3092\u5C55\u958B\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/$expand.md","sourceDirName":"REST","slug":"/REST/expand","permalink":"/docs/ja/18/REST/expand","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"expand","title":"$expand"},"sidebar":"docs","previous":{"title":"$entityset","permalink":"/docs/ja/18/REST/entityset"},"next":{"title":"$filter","permalink":"/docs/ja/18/REST/filter"}}'),r=t("785893"),s=t("250065");let i={id:"expand",title:"$expand"},d=void 0,a={},c=[{value:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",id:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",level:2},{value:"BLOB\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",id:"blob\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u753B\u50CF\u5C5E\u6027\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u5C55\u958B\u3057\u307E\u3059 (",(0,r.jsx)(n.em,{children:"\u4F8B"}),": ",(0,r.jsx)(n.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,r.jsx)(n.br,{})," \u307E\u305F\u306F ",(0,r.jsx)(n.br,{})," \u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B BLOB\u5C5E\u6027\u3092\u5C55\u958B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u8A18"}),": \u4E92\u63DB\u6027\u306E\u305F\u3081\u3001$expand \u306F\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u5C5E\u6027\u3092\u5C55\u958B\u3059\u308B\u306E\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059 (",(0,r.jsx)(n.em,{children:"\u4F8B"}),": ",(0,r.jsx)(n.code,{children:"Company(1)?$expand=staff"})," \u307E\u305F\u306F ",(0,r.jsx)(n.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),")\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u3053\u308C\u3089\u306E\u5834\u5408\u306B\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/18/REST/attributes",children:(0,r.jsx)(n.code,{children:"$attributes"})})," \u3092\u4F7F\u7528\u3059\u308B\u306E\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",children:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A"}),"\n",(0,r.jsx)(n.p,{children:"\u753B\u50CF\u5C5E\u6027\u306E\u5168\u4F53\u50CF\u3092\u8868\u793A\u3055\u305B\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(n.p,{children:["\u753B\u50CF\u5F62\u5F0F\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/18/REST/imageformat",children:(0,r.jsx)(n.code,{children:"$imageformat"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 version \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/18/REST/version",children:(0,r.jsx)(n.code,{children:"$version"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"blob\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",children:"BLOB\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58"}),"\n",(0,r.jsx)(n.p,{children:'\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B BLOB \u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3059\u308B\u306B\u306F\u3001$binary \u306B "true" \u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u3051\u307E\u3059:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var o=t(667294);let r={},s=o.createContext(r);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);