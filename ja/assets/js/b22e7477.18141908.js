"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49281"],{574161:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"settings/sql","title":"SQL \u30DA\u30FC\u30B8","description":"\u3053\u306E\u30DA\u30FC\u30B8\u3067\u306F 4D SQL\u30B5\u30FC\u30D0\u30FC \u306E\u516C\u958B\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3084\u30A2\u30AF\u30BB\u30B9\u6A29\u3001\u304A\u3088\u3073 4D SQL\u30A8\u30F3\u30B8\u30F3\u306E\u52D5\u4F5C\u306B\u95A2\u3059\u308B\u8A2D\u5B9A\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/settings/sql.md","sourceDirName":"settings","slug":"/settings/sql","permalink":"/docs/ja/20/settings/sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsql.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"sql","title":"SQL \u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"Web \u30DA\u30FC\u30B8","permalink":"/docs/ja/20/settings/web"},"next":{"title":"PHP \u30DA\u30FC\u30B8","permalink":"/docs/ja/20/settings/php"}}'),i=n("785893"),o=n("250065");let r={id:"sql",title:"SQL \u30DA\u30FC\u30B8"},l=void 0,c={},d=[{value:"SQL\u30B5\u30FC\u30D0\u30FC\u516C\u958B",id:"sql\u30B5\u30FC\u30D0\u30FC\u516C\u958B",level:2},{value:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30B9\u30AD\u30FC\u30DE\u7528\u306ESQL\u30B5\u30FC\u30D0\u30FC\u30A2\u30AF\u30BB\u30B9\u6A29",id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30B9\u30AD\u30FC\u30DE\u7528\u306Esql\u30B5\u30FC\u30D0\u30FC\u30A2\u30AF\u30BB\u30B9\u6A29",level:2},{value:"SQL\u30A8\u30F3\u30B8\u30F3\u30AA\u30D7\u30B7\u30E7\u30F3",id:"sql\u30A8\u30F3\u30B8\u30F3\u30AA\u30D7\u30B7\u30E7\u30F3",level:2}];function a(e){let t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u3053\u306E\u30DA\u30FC\u30B8\u3067\u306F ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/What-s-new/4D-SQL-Reference-19-R3/Using-SQL-in-4D.200-5680718.ja.html",children:"4D SQL\u30B5\u30FC\u30D0\u30FC"})," \u306E\u516C\u958B\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3084\u30A2\u30AF\u30BB\u30B9\u6A29\u3001\u304A\u3088\u3073 4D SQL\u30A8\u30F3\u30B8\u30F3\u306E\u52D5\u4F5C\u306B\u95A2\u3059\u308B\u8A2D\u5B9A\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"sql\u30B5\u30FC\u30D0\u30FC\u516C\u958B",children:"SQL\u30B5\u30FC\u30D0\u30FC\u516C\u958B"}),"\n",(0,i.jsxs)(t.p,{children:["doc.4d.com \u306E ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.ja.html",children:(0,i.jsx)(t.strong,{children:"4D SQL\u30B5\u30FC\u30D0\u306E\u8A2D\u5B9A"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30B9\u30AD\u30FC\u30DE\u7528\u306Esql\u30B5\u30FC\u30D0\u30FC\u30A2\u30AF\u30BB\u30B9\u6A29",children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30B9\u30AD\u30FC\u30DE\u7528\u306ESQL\u30B5\u30FC\u30D0\u30FC\u30A2\u30AF\u30BB\u30B9\u6A29"}),"\n",(0,i.jsxs)(t.p,{children:["doc.4d.com \u306E ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.ja.html",children:(0,i.jsx)(t.strong,{children:"4D SQL\u30B5\u30FC\u30D0\u306E\u8A2D\u5B9A"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"sql\u30A8\u30F3\u30B8\u30F3\u30AA\u30D7\u30B7\u30E7\u30F3",children:"SQL\u30A8\u30F3\u30B8\u30F3\u30AA\u30D7\u30B7\u30E7\u30F3"}),"\n",(0,i.jsxs)(t.p,{children:["doc.4d.com \u306E ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SQL-engine-implementation.300-5680725.ja.html",children:(0,i.jsx)(t.strong,{children:"SQL\u30A8\u30F3\u30B8\u30F3\u30AA\u30D7\u30B7\u30E7\u30F3"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);