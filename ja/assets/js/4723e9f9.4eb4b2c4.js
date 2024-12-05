"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["238"],{51012:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"REST/queryplan","title":"$queryplan","description":"4D Server \u306B\u6E21\u3057\u305F\u30AF\u30A8\u30EA\u3092\u8FD4\u3057\u307E\u3059 (\u4F8B: $queryplan=true)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/REST/$queryplan.md","sourceDirName":"REST","slug":"/REST/queryplan","permalink":"/docs/ja/20/REST/queryplan","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"queryplan","title":"$queryplan"},"sidebar":"docs","previous":{"title":"$querypath","permalink":"/docs/ja/20/REST/querypath"},"next":{"title":"$savedfilter","permalink":"/docs/ja/20/REST/savedfilter"}}'),l=t("785893"),s=t("250065");let i={id:"queryplan",title:"$queryplan"},d=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30EC\u30B9\u30DD\u30F3\u30B9:",id:"\u30EC\u30B9\u30DD\u30F3\u30B9",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["4D Server \u306B\u6E21\u3057\u305F\u30AF\u30A8\u30EA\u3092\u8FD4\u3057\u307E\u3059 (",(0,l.jsx)(n.em,{children:"\u4F8B"}),": ",(0,l.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsx)(n.p,{children:"$queryplan \u306F\u30014D Server \u306B\u6E21\u3057\u305F\u30AF\u30A8\u30EA\u30D7\u30E9\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"item"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u6E21\u3055\u308C\u305F\u5B9F\u969B\u306E\u30AF\u30A8\u30EA"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"subquery"}),(0,l.jsx)(n.td,{children:"\u914D\u5217"}),(0,l.jsx)(n.td,{children:"(\u30B5\u30D6\u30AF\u30A8\u30EA\u304C\u5B58\u5728\u3059\u308B\u5834\u5408) item \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3059\u308B\u8FFD\u52A0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u30AF\u30A8\u30EA\u30D7\u30E9\u30F3\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,l.jsx)(n.a,{href:"/docs/ja/20/REST/genInfo#querypath-%E3%81%A8-queryplan",children:"queryPlan \u3068 queryPath"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30AF\u30A8\u30EA\u3092\u6E21\u3057\u305F\u5834\u5408:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,l.jsx)(n.h4,{id:"\u30EC\u30B9\u30DD\u30F3\u30B9",children:"\u30EC\u30B9\u30DD\u30F3\u30B9:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let l={},s=r.createContext(l);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);