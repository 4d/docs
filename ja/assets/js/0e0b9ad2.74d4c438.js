"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1575"],{910730:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands/ds","title":"ds","description":"ds { ( localID cs.DataStore","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands/ds.md","sourceDirName":"commands","slug":"/commands/ds","permalink":"/docs/ja/commands/ds","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fds.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ds","title":"ds","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DROP REMOTE USER","permalink":"/docs/ja/commands/drop-remote-user"},"next":{"title":"Export structure file","permalink":"/docs/ja/commands/export-structure-file"}}'),d=s("785893"),r=s("250065");let c={id:"ds",title:"ds",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ds"})," { ( ",(0,d.jsx)(n.em,{children:"localID"})," : Text ) } : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"localID"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u53C2\u7167\u3092\u53D6\u5F97\u3057\u305F\u3044\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u30ED\u30FC\u30AB\u30EBID"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"cs.DataStore"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u53C2\u7167"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ds"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E 4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3001\u307E\u305F\u306F ",(0,d.jsx)(n.em,{children:"localID"})," \u3067\u6307\u5B9A\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5408\u81F4\u3059\u308B\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"localID"}),' \u3092\u7701\u7565\u3057\u305F (\u307E\u305F\u306F\u7A7A\u306E\u6587\u5B57\u5217 "" \u3092\u6E21\u3057\u305F) \u5834\u5408\u306B\u306F\u3001\u30ED\u30FC\u30AB\u30EB4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9 (4D Server \u3067\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u3044\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u305D\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9) \u306B\u5408\u81F4\u3059\u308B\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306F\u81EA\u52D5\u7684\u306B\u958B\u304B\u308C\u3001',(0,d.jsx)(n.code,{children:"ds"})," \u3092\u4ECB\u3057\u3066\u76F4\u63A5\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u958B\u304B\u308C\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u30ED\u30FC\u30AB\u30EBID\u3092 ",(0,d.jsx)(n.em,{children:"localID"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u6E21\u3059\u3068\u3001\u305D\u306E\u53C2\u7167\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306F\u3001\u3042\u3089\u304B\u3058\u3081\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9 (\u30DB\u30B9\u30C8\u307E\u305F\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8) \u306B\u3088\u3063\u3066 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/open-datastore",children:(0,d.jsx)(n.code,{children:"Open datastore"})})," \u30B3\u30DE\u30F3\u30C9\u3067\u958B\u304B\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306B\u30ED\u30FC\u30AB\u30EBID\u304C\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u30ED\u30FC\u30AB\u30EBID\u306E\u30B9\u30B3\u30FC\u30D7\u306F\u3001\u5F53\u8A72\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3092\u958B\u3044\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u3059\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"localID"})," \u306B\u5408\u81F4\u3059\u308B\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F ",(0,d.jsx)(n.strong,{children:"Null"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"cs.Datastore"})," \u304C\u63D0\u4F9B\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/ORDA/dsmapping#%E5%A4%89%E6%8F%9B%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB",children:"ORDA\u30DE\u30C3\u30D4\u30F3\u30B0\u30EB\u30FC\u30EB"})," \u306B\u57FA\u3065\u3044\u3066\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u30DE\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E1\u30A4\u30F3\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3092\u4F7F\u7528\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $result : cs.EmployeeSelection\n$result:=ds.Employee.query("firstName = :1";"S@")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' var $connectTo; $firstFrench; $firstForeign : Object\n\n var $frenchStudents; $foreignStudents : cs.DataStore\n\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n  //...\n  //...\n $firstFrench:=getFirst("french";"Students")\n $firstForeign:=getFirst("foreign";"Students")\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"  //getFirst \u30E1\u30BD\u30C3\u30C9\n  //getFirst(localID;dataclass) -> entity\n #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity\n\n $entity:=ds($localId)[$dataClassName].all().first()\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/open-datastore",children:"Open datastore"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1482"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,d.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let d={},r=t.createContext(d);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);