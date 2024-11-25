"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77028"],{110133:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/copy-set","title":"COPY SET","description":"COPY SET ( srcSet ; dstSet )","source":"@site/versioned_docs/version-20-R7/commands-legacy/copy-set.md","sourceDirName":"commands-legacy","slug":"/commands/copy-set","permalink":"/docs/commands/copy-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-set","title":"COPY SET","slug":"/commands/copy-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SET","permalink":"/docs/commands/clear-set"},"next":{"title":"CREATE EMPTY SET","permalink":"/docs/commands/create-empty-set"}}'),i=n("785893"),c=n("250065");let o={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},r=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let t={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"COPY SET"})," ( ",(0,i.jsx)(t.em,{children:"srcSet"})," ; ",(0,i.jsx)(t.em,{children:"dstSet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcSet"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Source set name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dstSet"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Destination set name"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The COPY SET command copies the contents of the set ",(0,i.jsx)(t.em,{children:"srcSet"})," into the set ",(0,i.jsx)(t.em,{children:"dstSet"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['Each of these sets can be of the process, interprocess or local/client type. The two sets do not have to be the same type (as shown in the examples below), so long as they are both visible on the machine. For more information about this point, refer to "',(0,i.jsx)(t.em,{children:"Visibility of Sets"}),'".']}),"\n",(0,i.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:['The following example, in Client/Server, copies the local set "',(0,i.jsx)(t.em,{children:'$SetA",'})," maintained on the client machine, to the process set ",(0,i.jsx)(t.em,{children:'"SetB",'})," maintained on the server machine:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0COPY SET("$SetA";"SetB")\n'})}),"\n",(0,i.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(t.p,{children:['The following example, in Client/Server, copies the process set "',(0,i.jsx)(t.em,{children:"SetA"}),'", maintained on the server machine, to the local process set ',(0,i.jsx)(t.em,{children:'"$SetB",'})," maintained on the client machine:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0COPY SET("SetA";"$SetB")\n'})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Sets"})})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var s=n(667294);let i={},c=s.createContext(i);function o(e){let t=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);