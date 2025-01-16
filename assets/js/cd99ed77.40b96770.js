"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13978"],{373160:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-query-destination","title":"GET QUERY DESTINATION","description":"GET QUERY DESTINATION ( destinationType ; destinationObject ; destinationPtr )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/get-query-destination","permalink":"/docs/commands/get-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-query-destination.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-query-destination","title":"GET QUERY DESTINATION","slug":"/commands/get-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in field","permalink":"/docs/commands/find-in-field"},"next":{"title":"Get query limit","permalink":"/docs/commands/get-query-limit"}}'),i=t("785893"),r=t("250065");let d={id:"get-query-destination",title:"GET QUERY DESTINATION",slug:"/commands/get-query-destination",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," ( ",(0,i.jsx)(n.em,{children:"destinationType"})," ; ",(0,i.jsx)(n.em,{children:"destinationObject"})," ; ",(0,i.jsx)(n.em,{children:"destinationPtr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationType"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"0=current selection, 1=set, 2=named selection, 3=variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationObject"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Name of the set or Name of the named selection or Empty string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationPtr"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Pointer to local variable if destinationType=3"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," command returns the current destination of query results for the process underway. By default, query results modify the current selection, but you can change this using the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"destinationType"})," parameter, 4D returns a value indicating the current destination of queries and in the ",(0,i.jsx)(n.em,{children:"destinationObject"})," parameter it returns the name of the destination (if applicable). You can compare the value of the ",(0,i.jsx)(n.em,{children:"destinationType"})," parameter with the constants of the ",(0,i.jsx)(n.em,{children:"Queries"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Into current selection"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Into named selection"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Into set"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Into variable"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The value returned in the ",(0,i.jsx)(n.em,{children:"destinationObject"})," parameter depends on the value of the ",(0,i.jsx)(n.em,{children:"destinationType"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"destinationType parameter"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"destinationObject parameter"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0 (current selection )"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"destinationObject"})," is an empty string"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1 (set)"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"destinationObject"})," contains the name of the set"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2 (named selection )"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"destinationObject"})," contains the name of the selection"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3 (variable)"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"destinationObject"})," is an empty string (use the ",(0,i.jsx)(n.em,{children:"destinationPtr"})," parameter)"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["When the query destination is a local variable (",(0,i.jsx)(n.em,{children:"destinationType"})," returns 3), 4D returns a pointer to this variable in the ",(0,i.jsx)(n.em,{children:"destinationPtr"})," parameter."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"We want to modify the query destination temporarily and then restore the previous parameters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0GET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//retrieval of current parameters\n\xa0SET QUERY DESTINATION(Into set;"$temp")\n\xa0\xa0//temporary modification of destination\n\xa0QUERY(...)\xa0//query\n\xa0SET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//restoring parameters\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1155"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);