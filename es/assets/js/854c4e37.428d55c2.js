"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68208"],{3270:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/on-server-close-connection-database-method","title":"On Server Close Connection database method","description":"$1, $2, $3 -> On Server Close Connection database method","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-close-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-close-connection-database-method","permalink":"/docs/es/20-R7/commands/on-server-close-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-close-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-close-connection-database-method","title":"On Server Close Connection database method","slug":"/commands/on-server-close-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On REST Authentication database method","permalink":"/docs/es/20-R7/commands/on-rest-authentication-database-method"},"next":{"title":"On Server Open Connection database method","permalink":"/docs/es/20-R7/commands/on-server-open-connection-database-method"}}'),r=t("785893"),o=t("250065");let d={id:"on-server-close-connection-database-method",title:"On Server Close Connection database method",slug:"/commands/on-server-close-connection-database-method",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function l(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"$1, $2, $3 -> On Server Close Connection database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$1"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$2"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$3"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Obsolete: Always returns 0 but must be declared"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"On Server Close Connection database method"})," is called once on the Server machine each time a 4D Client process ends."]}),"\n",(0,r.jsxs)(n.p,{children:["As for the ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),", 4D Server passes three Long Integer parameters to the ",(0,r.jsx)(n.strong,{children:"On Server Close Connection database method"}),". On the other hand, no result is expected by 4D Server."]}),"\n",(0,r.jsx)(n.p,{children:"The method must therefore be explicitly declared with three Long Integer parameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $1;$2;$3 : Integer\n"})}),"\n",(0,r.jsx)(n.p,{children:"This table details the information provided by the three parameters passed to the database method:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$1"}),(0,r.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$2"}),(0,r.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$3"}),(0,r.jsx)(n.td,{children:"Obsolete: Always returns 0 but must be declared"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"On Server Close Connection database method"})," is the exact counterpoint to the ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),". For more information and a description of the ",(0,r.jsx)(n.strong,{children:"4D Client processes"}),", see the description of this database method."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See the first example for ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);