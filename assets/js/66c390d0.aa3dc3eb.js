"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46559"],{601579:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-resource-name","title":"Get resource name","description":"Get resource name ( resType ; resID {; resFile} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-resource-name.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource-name","permalink":"/docs/commands/get-resource-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-resource-name","title":"Get resource name","slug":"/commands/get-resource-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RESOURCE","permalink":"/docs/commands/get-resource"},"next":{"title":"Get resource properties","permalink":"/docs/commands/get-resource-properties"}}'),t=r("785893"),c=r("250065");let i={id:"get-resource-name",title:"Get resource name",slug:"/commands/get-resource-name",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4}];function a(e){let n={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get resource name"})," ( ",(0,t.jsx)(n.em,{children:"resType"})," ; ",(0,t.jsx)(n.em,{children:"resID"})," {; ",(0,t.jsx)(n.em,{children:"resFile"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4-character resource type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Resource ID number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resFile"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Resource file reference number, or all open resource files, if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Name of the resource"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Get resource name"})," command returns the name of the resource whose type is passed in ",(0,t.jsx)(n.em,{children:"resType"})," and whose ID number is passed in ",(0,t.jsx)(n.em,{children:"resID"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass a valid resource file reference number in the parameter ",(0,t.jsx)(n.em,{children:"resFile"}),", the resource is searched for within that file only. If you do not pass the parameter ",(0,t.jsx)(n.em,{children:"resFile"}),", the resource is searched for within the current open resource files."]}),"\n",(0,t.jsxs)(n.p,{children:["If the resource does not exist, ",(0,t.jsx)(n.strong,{children:"Get resource name"})," returns an empty string."]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let t={},c=s.createContext(t);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);