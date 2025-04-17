"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32269"],{21426:function(e,r,s){s.r(r),s.d(r,{default:()=>j,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"commands/theme/Queries_theme","title":"Queries","description":"||","source":"@site/versioned_docs/version-20-R9/commands/theme/Queries.md","sourceDirName":"commands/theme","slug":"/commands/theme/Queries","permalink":"/docs/commands/theme/Queries","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FQueries.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"Queries_theme","title":"Queries","slug":"/commands/theme/Queries"},"sidebar":"docs","previous":{"title":"UNREGISTER CLIENT","permalink":"/docs/commands/unregister-client"},"next":{"title":"DESCRIBE QUERY EXECUTION","permalink":"/docs/commands/describe-query-execution"}}'),d=s("785893"),t=s("250065");let i={id:"Queries_theme",title:"Queries",slug:"/commands/theme/Queries"},c=void 0,l={},h=[];function o(e){let r={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsx)(r.tr,{children:(0,d.jsx)(r.th,{})})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/describe-query-execution",children:[(0,d.jsx)(r.strong,{children:"DESCRIBE QUERY EXECUTION"})," ( ",(0,d.jsx)(r.em,{children:"status"})," )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/find-in-field",children:[(0,d.jsx)(r.strong,{children:"Find in field"})," ( ",(0,d.jsx)(r.em,{children:"targetField"})," ; ",(0,d.jsx)(r.em,{children:"value"})," ) : Integer"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/get-query-destination",children:[(0,d.jsx)(r.strong,{children:"GET QUERY DESTINATION"})," ( ",(0,d.jsx)(r.em,{children:"destinationType"})," ; ",(0,d.jsx)(r.em,{children:"destinationObject"})," ; ",(0,d.jsx)(r.em,{children:"destinationPtr"})," )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/get-query-limit",children:[(0,d.jsx)(r.strong,{children:"Get query limit"})," : Integer"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/last-query-path",children:[(0,d.jsx)(r.strong,{children:"Last query path"})," ( ",(0,d.jsx)(r.em,{children:"descFormat"})," ) : Text"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/last-query-plan",children:[(0,d.jsx)(r.strong,{children:"Last query plan"})," ( ",(0,d.jsx)(r.em,{children:"descFormat"})," ) : Text"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/order-by",children:[(0,d.jsx)(r.strong,{children:"ORDER BY"})," ( {",(0,d.jsx)(r.em,{children:"aTable"})," ;}{ ",(0,d.jsx)(r.em,{children:"aField"})," }{; >\xa0or\xa0< }{; ",(0,d.jsx)(r.em,{children:"aField2"})," ; >\xa0or\xa0<2 ; ... ; ",(0,d.jsx)(r.em,{children:"aFieldN"})," ; >\xa0or\xa0<N}{; *} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/order-by-attribute",children:[(0,d.jsx)(r.strong,{children:"ORDER BY ATTRIBUTE"})," ( {",(0,d.jsx)(r.em,{children:"aTable"})," ;} ",(0,d.jsx)(r.em,{children:"objectField"})," ; ",(0,d.jsx)(r.em,{children:"attributePath"})," ; > or < {; ",(0,d.jsx)(r.em,{children:"objectField2"})," ; ",(0,d.jsx)(r.em,{children:"attributePath2"})," ; > or <2 ; ... ; ",(0,d.jsx)(r.em,{children:"objectFieldN"})," ; ",(0,d.jsx)(r.em,{children:"attributePathN"})," ; > or <N} {; *} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/order-by-formula",children:[(0,d.jsx)(r.strong,{children:"ORDER BY FORMULA"})," ( ",(0,d.jsx)(r.em,{children:"aTable"})," ; ",(0,d.jsx)(r.em,{children:"formula"})," {; >\xa0or\xa0<}{; ",(0,d.jsx)(r.em,{children:"formula2"})," ; >\xa0or\xa0<2 ; ... ; ",(0,d.jsx)(r.em,{children:"formulaN"})," ; >\xa0or\xa0<N} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query",children:[(0,d.jsx)(r.strong,{children:"QUERY"})," ( {",(0,d.jsx)(r.em,{children:"aTable"})," }{;}{ ",(0,d.jsx)(r.em,{children:"queryArgument"})," {; *}} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-by-attribute",children:[(0,d.jsx)(r.strong,{children:"QUERY BY ATTRIBUTE"})," ( {",(0,d.jsx)(r.em,{children:"aTable"}),"}{;}{",(0,d.jsx)(r.em,{children:"conjOp"})," ;} ",(0,d.jsx)(r.em,{children:"objectField"})," ; ",(0,d.jsx)(r.em,{children:"attributePath"})," ; ",(0,d.jsx)(r.em,{children:"queryOp"})," ; ",(0,d.jsx)(r.em,{children:"value"})," {; *} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-by-example",children:[(0,d.jsx)(r.strong,{children:"QUERY BY EXAMPLE"})," ( {",(0,d.jsx)(r.em,{children:"aTable"}),"}{;}{*} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-by-formula",children:[(0,d.jsx)(r.strong,{children:"QUERY BY FORMULA"})," ( ",(0,d.jsx)(r.em,{children:"aTable"})," {; ",(0,d.jsx)(r.em,{children:"queryFormula"}),"} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-selection",children:[(0,d.jsx)(r.strong,{children:"QUERY SELECTION"})," ( {",(0,d.jsx)(r.em,{children:"aTable"})," }{;}{ ",(0,d.jsx)(r.em,{children:"queryArgument"})," {; *}} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-selection-by-attribute",children:[(0,d.jsx)(r.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," ( {",(0,d.jsx)(r.em,{children:"aTable"}),"}{;}{",(0,d.jsx)(r.em,{children:"conjOp"})," ;} ",(0,d.jsx)(r.em,{children:"objectField"})," ; ",(0,d.jsx)(r.em,{children:"attributePath"})," ; ",(0,d.jsx)(r.em,{children:"queryOp"})," ; ",(0,d.jsx)(r.em,{children:"value"})," {; *} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-selection-by-formula",children:[(0,d.jsx)(r.strong,{children:"QUERY SELECTION BY FORMULA"})," ( ",(0,d.jsx)(r.em,{children:"aTable"})," {; ",(0,d.jsx)(r.em,{children:"queryFormula"}),"} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-selection-with-array",children:[(0,d.jsx)(r.strong,{children:"QUERY SELECTION WITH ARRAY"})," ( ",(0,d.jsx)(r.em,{children:"targetField"})," ; ",(0,d.jsx)(r.em,{children:"array"})," )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/query-with-array",children:[(0,d.jsx)(r.strong,{children:"QUERY WITH ARRAY"})," ( ",(0,d.jsx)(r.em,{children:"targetField"})," ; ",(0,d.jsx)(r.em,{children:"array"})," )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/set-query-and-lock",children:[(0,d.jsx)(r.strong,{children:"SET QUERY AND LOCK"})," ( ",(0,d.jsx)(r.em,{children:"lock"})," )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/set-query-destination",children:[(0,d.jsx)(r.strong,{children:"SET QUERY DESTINATION"})," ( ",(0,d.jsx)(r.em,{children:"destinationType"})," {; ",(0,d.jsx)(r.em,{children:"destinationObject"})," {; ",(0,d.jsx)(r.em,{children:"destinationPtr"}),"}} )"]}),(0,d.jsx)(r.br,{})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"/docs/commands/set-query-limit",children:[(0,d.jsx)(r.strong,{children:"SET QUERY LIMIT"})," ( ",(0,d.jsx)(r.em,{children:"limit"})," )"]}),(0,d.jsx)(r.br,{})]})})]})]})}function j(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var n=s(667294);let d={},t=n.createContext(d);function i(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);