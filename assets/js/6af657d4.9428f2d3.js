"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54537"],{605274:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/intersection","title":"INTERSECTION","description":"INTERSECTION ( set1 ; set2 ; resultSet )","source":"@site/versioned_docs/version-20-R8/commands-legacy/intersection.md","sourceDirName":"commands-legacy","slug":"/commands/intersection","permalink":"/docs/commands/intersection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fintersection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"intersection","title":"INTERSECTION","slug":"/commands/intersection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIFFERENCE","permalink":"/docs/commands/difference"},"next":{"title":"Is in set","permalink":"/docs/commands/is-in-set"}}'),r=s("785893"),i=s("250065");let d={id:"intersection",title:"INTERSECTION",slug:"/commands/intersection",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INTERSECTION"})," ( ",(0,r.jsx)(n.em,{children:"set1"})," ; ",(0,r.jsx)(n.em,{children:"set2"})," ; ",(0,r.jsx)(n.em,{children:"resultSet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set1"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"First set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set2"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Second set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultSet"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Resulting set"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INTERSECTION"})," compares ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"})," and selects only the records that are in both. The following table lists all possible results of a set Intersection operation."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Set1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Set2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Result Set"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The graphical result of an Intersection operation is displayed here. The shaded area is the result set."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(685641).Z+"",width:"148",height:"107"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"resultSet"})," is created by ",(0,r.jsx)(n.strong,{children:"INTERSECTION"}),". The ",(0,r.jsx)(n.em,{children:"resultSet"})," replaces any existing set having the same name, including ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),". Both ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"})," must be from the same table. The ",(0,r.jsx)(n.em,{children:"resultSet"})," belongs to the same table as ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),". If the same current record is set in both ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),", it remains memorized in the ",(0,r.jsx)(n.em,{children:"resultSet"}),". Otherwise, ",(0,r.jsx)(n.em,{children:"resultSet"})," does not have a current record."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"}),' In Client/Server mode, sets are "visible" depending on their type (interprocess, process and local) and where they were created (server or client). ',(0,r.jsx)(n.strong,{children:"INTERSECTION"})," requires all three sets to be visible on the same machine. See the ",(0,r.jsx)(n.em,{children:"4D Server, Sets and Named Selections"})," section in the 4D Server Reference manual for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the customers who are served by two sales representatives, Joe and Abby. Each sales representative has a set that represents his or her customers. The customers that are in both sets are represented by both Joe and Abby:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0INTERSECTION("Joe";"Abby";"Both")\xa0// Put customers in both sets in Both\n\xa0USE SET("Both")\xa0// Use the set\n\xa0CLEAR SET("Both")\xa0// Clear this set but save the others\n\xa0DISPLAY SELECTION([Customers])\xa0// Display customers served by both\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/difference",children:"DIFFERENCE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/union",children:"UNION"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"121"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},685641:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABrCAIAAAAemjxPAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFw0kGSYwp/QAAAKeSURBVHic7d3tbqMwGAVhXO3933K2EhJi+bBdDMmc7cy/pglCPH0h0CiUybp7vV6fXoV/KhNvnZiVUmgb6uvTK2DXEy848YITLzjxghMvOPGCEy848YITLzjxghMvuD8jLy6lrH/suW47v+TeZ/7ark/esnHnpp3lSDcu6j9uaPLWbUZkvfWXXy0PNv+98v1b/Zo9csxbD+W0MlvA3Bne0vXJm4fjcMLsPQ3tNtdaM+TmkZGFW7Pbjnn7HMSnG3q32TNbnU+zCw2dS1XO8yrHwv37l8rCOeML/AASawORA+J5eSw48YITLzjxghMvOPGCEy848YITLzjxgsNdHvMqdn8P/kvocod/TGeXFt/2OO3a5vf6ZOw2Py7HLABPubPoeMpVQuMpV4+Lp1wzKB5NjnkCQ8QDyjFnkYiHEsLKTUy8fcodFoCn3Fl0POUqofGUq8fFU64ZFI8m53leb0A55iwS8VBCWLmJibdPucMC8JQ7i46nXCU0nnL1uHjKNYPi0eQ8z+sNKMecRSIeSggrNzHx9il3WACecmfR8ZSrhMZTrh4XT7lmUDyanOd5vQHlmLNIxEMJYeUmJt4+5Q4LwFPuLDqecpXQeMrVI74DxoYSLcA/MeAqMSsp3wZhh4kXnHjBiReceMGJF5x4wYkXnHjBiReceMERv+kWWHnspuJl4L6tTl678thNxcvJnZE7c/J+3GY+DkendNxUvHM0Kzl5Q52NzkJSsVledTknr93r+ZuKX5tC8bpab9YZcvPIyMIv7z/Fu6GRQRw58nnMa7fZZw4+bfOSaeRu2bQPjDA/w1I5z6scC/fvXyrLrDzzbJVwWwq4Ssz8AFJ24gUnXnDiBSdecOIFJ15w4gUnXnDiBSdecLgLicyvq2H2F2tBiwee2pq5AAAAAElFTkSuQmCC"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);