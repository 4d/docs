"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60283"],{326898:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-string-resource","title":"Get string resource","description":"Get string resource ( resID {; resFile} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-string-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-string-resource","permalink":"/docs/commands/get-string-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-string-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-string-resource","title":"Get string resource","slug":"/commands/get-string-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource properties","permalink":"/docs/commands/get-resource-properties"},"next":{"title":"Get text resource","permalink":"/docs/commands/get-text-resource"}}'),t=r("785893"),i=r("250065");let d={id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Get string resource"})," ( ",(0,t.jsx)(s.em,{children:"resID"})," {; ",(0,t.jsx)(s.em,{children:"resFile"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resID"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Resource ID number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFile"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Resource file reference number, or all open resource files, if omitted"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Function result"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Contents of the STR  resource"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Get string resource"})," command returns the string stored in the string (\u201CSTR \u201D) resource whose ID is passed in ",(0,t.jsx)(s.em,{children:"resID"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"If the resource is not found, an empty string is returned and the OK variable is set to 0 (zero)."}),"\n",(0,t.jsxs)(s.p,{children:["If you pass a valid resource file reference number in ",(0,t.jsx)(s.em,{children:"resFile"}),", the resource is searched for in that file only. If you do not pass ",(0,t.jsx)(s.em,{children:"resFile"}),", the first occurrence of the resource found in the resource files chain is returned."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," A string resource can contain up to 255 characters."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"The following example displays the contents of the string resource ID=20911, which must be located in at least one of the currently open resource files:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0ALERT(Get string resource(20911))\n"})}),"\n",(0,t.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(s.p,{children:"If the resource is found, OK is set to 1. Otherwise, it is set to 0 (zero)."}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/get-text-resource",children:"Get text resource"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"506"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifies variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);