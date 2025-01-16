"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14556"],{356863:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/ob-is-empty","title":"OB Is empty","description":"OB Is empty ( object ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-is-empty.md","sourceDirName":"commands-legacy","slug":"/commands/ob-is-empty","permalink":"/docs/20-R7/commands/ob-is-empty","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-is-empty.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-is-empty","title":"OB Is empty","slug":"/commands/ob-is-empty","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Is defined","permalink":"/docs/20-R7/commands/ob-is-defined"},"next":{"title":"OB Is shared","permalink":"/docs/20-R7/commands/ob-is-shared"}}'),d=s("785893"),r=s("250065");let i={id:"ob-is-empty",title:"OB Is empty",slug:"/commands/ob-is-empty",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OB Is empty"})," ( ",(0,d.jsx)(n.em,{children:"object"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Object, Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Structured object"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True if object is empty or undefined, otherwise False"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"OB Is empty"})," command returns True if ",(0,d.jsx)(n.em,{children:"object"})," is undefined or empty, and False if ",(0,d.jsx)(n.em,{children:"object"})," is defined (initialized) and contains at least one property.can be an object varialble or a 4D object field."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.p,{children:["Here are the different results of this command as well as the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/ob-is-defined",children:"OB Is defined"})," command, depending on the context:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0$empty:=OB Is empty($ref)\xa0// True\n\xa0$def:=OB Is defined($ref)\xa0// False\n\xa0\n\xa0OB SET($ref;"name";"Susie";"age";4)\n\xa0\xa0// $ref="{"name":"Susie","age":4}"\n\xa0$empty:=OB Is empty($ref)\xa0// False\n\xa0$def:=OB Is defined($ref)\xa0// True\n\xa0\n\xa0OB REMOVE($ref;"name")\n\xa0OB REMOVE($ref;"age")\n\xa0$empty:=OB Is empty($ref)\xa0// True\n\xa0$def:=OB Is defined($ref)\xa0// True\n'})}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/ob-is-defined",children:"OB Is defined"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1297"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);