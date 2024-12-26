"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6428"],{940934:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/bring-to-front","title":"BRING TO FRONT","description":"BRING TO FRONT ( process )","source":"@site/versioned_docs/version-20-R7/commands-legacy/bring-to-front.md","sourceDirName":"commands-legacy","slug":"/commands/bring-to-front","permalink":"/docs/commands/bring-to-front","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbring-to-front.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"bring-to-front","title":"BRING TO FRONT","slug":"/commands/bring-to-front","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process (User Interface)","permalink":"/docs/category/process-user-interface"},"next":{"title":"Frontmost process","permalink":"/docs/commands/frontmost-process"}}'),r=s("785893"),o=s("250065");let d={id:"bring-to-front",title:"BRING TO FRONT",slug:"/commands/bring-to-front",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BRING TO FRONT"})," ( ",(0,r.jsx)(n.em,{children:"process"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process number of the process to pass to the frontmost level"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BRING TO FRONT"})," brings all the windows belonging to ",(0,r.jsx)(n.em,{children:"process"})," to the front. If the process is already the frontmost process, the command does nothing. If the process is hidden, you must use ",(0,r.jsx)(n.a,{href:"/docs/commands/show-process",children:"SHOW PROCESS"})," to display the process, otherwise ",(0,r.jsx)(n.strong,{children:"BRING TO FRONT"})," has no effect."]}),"\n",(0,r.jsx)(n.p,{children:"The Main and Design processes can be brought to the front using this command."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When the process contains several windows and you want to pass a specific one to the front, it is preferable to use, for example, the ",(0,r.jsx)(n.a,{href:"/docs/commands/set-window-rect",children:"SET WINDOW RECT"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example is a method that can be executed from a menu. It checks to see if ",(0,r.jsx)(n.em,{children:"\u25CAvlAddCust_PID"})," is the frontmost process. If not, the method brings it to the front:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Frontmost process#\u25CAvlAddCust_PID)\n\xa0\xa0\xa0\xa0BRING TO FRONT(\u25CAvlAddCust_PID)\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/hide-process",children:"HIDE PROCESS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/process-state",children:"Process state"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/show-process",children:"SHOW PROCESS"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"326"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);