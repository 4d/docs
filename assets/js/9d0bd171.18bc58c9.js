"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72297"],{113351:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/union","title":"UNION","description":"UNION ( set1 ; set2 ; resultSet )","source":"@site/versioned_docs/version-20-R7/commands-legacy/union.md","sourceDirName":"commands-legacy","slug":"/commands/union","permalink":"/docs/commands/union","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funion.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"union","title":"UNION","slug":"/commands/union","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE SET","permalink":"/docs/commands/save-set"},"next":{"title":"USE SET","permalink":"/docs/commands/use-set"}}'),r=s("785893"),d=s("250065");let i={id:"union",title:"UNION",slug:"/commands/union",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UNION"})," ( ",(0,r.jsx)(n.em,{children:"set1"})," ; ",(0,r.jsx)(n.em,{children:"set2"})," ; ",(0,r.jsx)(n.em,{children:"resultSet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set1"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"First set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set2"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Second set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultSet"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Resulting set"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UNION"})," creates a set that contains all records from ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),". The following table shows all possible results of a set Union operation."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Set1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Set2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Result Set"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The result of a Union operation is depicted here. The shaded area is the result set."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(317455).Z+"",width:"149",height:"107"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"resultSet"})," is created by ",(0,r.jsx)(n.strong,{children:"UNION"}),". The ",(0,r.jsx)(n.em,{children:"resultSet"})," replaces any existing set having the same name, including ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),". Both ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"})," must be from the same table. The ",(0,r.jsx)(n.em,{children:"resultSet"})," belongs to the same table as ",(0,r.jsx)(n.em,{children:"set1"})," and ",(0,r.jsx)(n.em,{children:"set2"}),". The current record for the ",(0,r.jsx)(n.em,{children:"resultSet"})," is the current record from Set1."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"}),' In Client/Server mode, sets are "visible" depending on their type (interprocess, process and local) and where they were created (server or client). ',(0,r.jsx)(n.strong,{children:"UNION"})," requires that all three sets be visible on the same machine. See the paragraph ",(0,r.jsx)(n.em,{children:"4D Server, Sets and Named Selections"})," in the 4D Server Reference manual for more information."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example adds records to a set of best customers. The records are displayed on screen with the first line. After the records are displayed, a set of the best customers is loaded from disk, and any records that the user selected (the set named \u201CUserSet\u201D) are added to the set. Finally, the new set is saved on disk:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Customers])\xa0// Select all the customers\n\xa0DISPLAY SELECTION([Customers])\xa0// Display all the customers in a list\n\xa0LOAD SET("$Best";"$SaveBest")\xa0// Load the set of best customers\n\xa0UNION("$Best";"UserSet";"$Best")\xa0// Add any selected to the set\n\xa0SAVE SET("$Best";"$SaveBest")\xa0// Save the set of best customers\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/difference",children:"DIFFERENCE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/intersection",children:"INTERSECTION"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"120"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},317455:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAABrCAIAAADxWFdxAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFw0yJozOPx4AAAOdSURBVHic7Z3hcuMgDIRFp+//yrnLcaXUwkQhnvBpuvunzudEJdqCvUOmKSaFdbvddg/hqGJfwyqlDMcnPud79VF/0JoC5B4SdPcP2KwUnKC7f6imZOEQfQwprVk0ztHAP1qzaBylo3+0ZtE4TT/8ozWLxoH69o/WLBpnSvkvyj0kSPlvnROk/LfIIVL+W+EcfXoUfzP9VWF41tepL4nUb8+UeROt579m3u2f7JGdcw3Ne2o87+E0/ZgNT72Z+UzqH/b1PVyr/37OdHQ9/53pbF72dR6aN6+vmdf0av4rnV6p4/lwuMp/B33PlcG51eXUv9vDEtqeNqnv18+910LmvLws/3m19ZNzDbuQQ7Se/9qaadPlbniWZkZS8+yV/b/++tcTc6uof5VlNhWlY35/6s3MrwovNityjXw/p0n7f4nNM+3/xTlT2v+Lcg8J0v7fOidI+3+LHCLt/61wjvT5z8TmmT7/mdo8U/5LbZ4p/8U5U7jPmGCTFlB349qRP73F1AL72ETjwz+17ePB5T/aeOAcl/9o44Fz5b/cXPkvN1f+S8xN+S/ODXZjVaX9vyj3kDAe7f/l5sp/ubnyX26u/JebK//l5sp/ibkp/8W5wW6sqpT/otxDwniU/3Jz5b/cXPkvN1f+y82V/3Jz5b/E3JT/4txgN1ZVyn9R7iFhPMp/ubnyX26u/JebK//l5sp/ubnyX2Juyn9xbrAbqyrlvyj3kDAe5b/cXPkvN1f+y82V/3Jz5b/k3CNpIo55FX5OssUWtbHi/tJhvGp8/7JdtGYBeT0g+gdsFpYT/dvelESc6J8XpFlAnsA/TrOAnO4fqllAjvaP1iwaN7J/tGbReBXUP1qzgLweEP0DNgvLif5tb0oiPvj+cKC2N6ucf6PoWZ0S+6bRvnj/WuW/y3hzourCcdaDVrbZGa9Dn3/bzXvI/dTsYcS8V8aDnn8ck854PzVt5MqkznA2K/9dzw+L23DCxTX8veX5/7pfBV0/OeY19TcXh6d5R888vsq8Vp/oH828tWvY0NSrzGv1iesn0KSIGeVL8frL5n0/nKytW3T2PgkRotch53l+OHVm3rBsZJz1mLh+HrTdPHOu9A8noXtuhl2x0hDXz14E88gc7R+tWTRuZP9ozaLxKqh/tGYBeT0g+gdsFpYT/dvelESc6J8XpFlAnsA/TrOAnO4fqllAjvaP1iwaN7J/tGbR+P+zk3NbVF7bHf1V+uvdH6Pfxc4DeTnJAAAAAElFTkSuQmCC"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);