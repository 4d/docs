"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61837"],{244282:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>l});var n=JSON.parse('{"id":"Concepts/control-flow","title":"Control flow overview","description":"Regardless of the simplicity or complexity of a method, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:","source":"@site/versioned_docs/version-19/Concepts/flow-control.md","sourceDirName":"Concepts","slug":"/Concepts/control-flow","permalink":"/docs/19/Concepts/control-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fflow-control.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"control-flow","title":"Control flow overview"},"sidebar":"docs","previous":{"title":"Classes","permalink":"/docs/19/Concepts/classes"},"next":{"title":"Branching structures","permalink":"/docs/19/Concepts/branching"}}'),r=o("785893"),s=o("250065");let i={id:"control-flow",title:"Control flow overview"},l=void 0,c={},a=[];function d(e){let t={a:"a",br:"br",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Regardless of the simplicity or complexity of a method, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Sequential"}),": a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: ",(0,r.jsx)(t.code,{children:"[People]lastName:=Uppercase([People]lastName)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/19/Concepts/branching",children:"Branching"})}),": A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the ",(0,r.jsx)(t.code,{children:"If...Else...End if"})," structure, which directs program flow along one of two paths. The other branching structure is the ",(0,r.jsx)(t.code,{children:"Case of...Else...End case"})," structure, which directs program flow to one of many paths."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/19/Concepts/looping",children:"Looping"})}),": When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"While...End while"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"Repeat...Until"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"For...End for"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"For each...End for each"}),(0,r.jsx)(t.br,{}),"\nThe loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but ",(0,r.jsx)(t.code,{children:"While"})," loops and ",(0,r.jsx)(t.code,{children:"Repeat"})," loops are more appropriate for repeating until a condition is met, and ",(0,r.jsx)(t.code,{children:"For"})," loops are more appropriate for looping a specified number of times. ",(0,r.jsx)(t.code,{children:"For each...End for each"})," allows mixing both ways and is designed to loop within objects and collections."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"}),' 4D allows you to embed programming structures up to a "depth" of 512 levels.']})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return l},a:function(){return i}});var n=o(667294);let r={},s=n.createContext(r);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);