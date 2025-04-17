"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16979"],{882242:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/copy-set","title":"COPY SET","description":"COPY SET ( srcSet ; dstSet )","source":"@site/versioned_docs/version-20-R9/commands-legacy/copy-set.md","sourceDirName":"commands-legacy","slug":"/commands/copy-set","permalink":"/docs/commands/copy-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"copy-set","title":"COPY SET","slug":"/commands/copy-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SET","permalink":"/docs/commands/clear-set"},"next":{"title":"CREATE EMPTY SET","permalink":"/docs/commands/create-empty-set"}}'),i=t("785893"),r=t("250065");let c={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"COPY SET"})," ( ",(0,i.jsx)(n.em,{children:"srcSet"})," ; ",(0,i.jsx)(n.em,{children:"dstSet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"srcSet"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Source set name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dstSet"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Destination set name"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The COPY SET command copies the contents of the set ",(0,i.jsx)(n.em,{children:"srcSet"})," into the set ",(0,i.jsx)(n.em,{children:"dstSet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['Each of these sets can be of the process, interprocess or local/client type. The two sets do not have to be the same type (as shown in the examples below), so long as they are both visible on the machine. For more information about this point, refer to "',(0,i.jsx)(n.em,{children:"Visibility of Sets"}),'".']}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:['The following example, in Client/Server, copies the local set "',(0,i.jsx)(n.em,{children:'$SetA",'})," maintained on the client machine, to the process set ",(0,i.jsx)(n.em,{children:'"SetB",'})," maintained on the server machine:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("$SetA";"SetB")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:['The following example, in Client/Server, copies the process set "',(0,i.jsx)(n.em,{children:"SetA"}),'", maintained on the server machine, to the local process set ',(0,i.jsx)(n.em,{children:'"$SetB",'})," maintained on the client machine:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("SetA";"$SetB")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Sets"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"600"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);