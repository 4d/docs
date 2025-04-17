"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29645"],{945709:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/string-list-to-array","title":"STRING LIST TO ARRAY","description":"STRING LIST TO ARRAY ( resID ; strings {; resFile} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/string-list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/string-list-to-array","permalink":"/docs/20-R8/commands/string-list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring-list-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"string-list-to-array","title":"STRING LIST TO ARRAY","slug":"/commands/string-list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE TYPE LIST","permalink":"/docs/20-R8/commands/resource-type-list"},"next":{"title":"SQL","permalink":"/docs/20-R8/commands/theme/SQL"}}'),t=r("785893"),i=r("250065");let d={id:"string-list-to-array",title:"STRING LIST TO ARRAY",slug:"/commands/string-list-to-array",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Compatibility with XLIFF architecture",id:"compatibility-with-xliff-architecture",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," ( ",(0,t.jsx)(s.em,{children:"resID"})," ; ",(0,t.jsx)(s.em,{children:"strings"})," {; ",(0,t.jsx)(s.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resID"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Resource ID number or 'id' attribute of the 'group' element (XLIFF)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"strings"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Strings from the STR# resource or Strings from the 'group' element (XLIFF)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFile"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Resource file reference number If omitted: all the XLIFF files or open resources files"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," command populates the array ",(0,t.jsx)(s.em,{children:"strings"})," with:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:['Either the strings stored in the string list ("STR#") resource whose ID is passed in ',(0,t.jsx)(s.em,{children:"resID"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Or a string stored in an open XLIFF file whose 'id' attribute of the 'group' element is passed in ",(0,t.jsx)(s.em,{children:"resID"}),' (see "Compatibility with XLIFF architecture" below).']}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If the resource is not found, the array ",(0,t.jsx)(s.em,{children:"strings"})," is left unchanged and the OK variable is set to 0 (zero)."]}),"\n",(0,t.jsxs)(s.p,{children:["If you pass a valid resource file reference number in ",(0,t.jsx)(s.em,{children:"resFile"}),", the resource is searched for in that file only. If you do not pass ",(0,t.jsx)(s.em,{children:"resFile"}),", the first occurrence of the resource found in the resource files chain is returned."]}),"\n",(0,t.jsxs)(s.p,{children:["Before calling ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"}),", you can predeclare the array ",(0,t.jsx)(s.em,{children:"strings"})," as a String or Text array. If you do not predeclare the array, the command creates ",(0,t.jsx)(s.em,{children:"strings"})," as a Text array."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Each string of a string list resource can contain up to 255 characters."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," Limit your use of string list resources to those up to 32K in total size, and a maximum of a few hundred strings per resource."]}),"\n",(0,t.jsx)(s.h2,{id:"compatibility-with-xliff-architecture",children:"Compatibility with XLIFF architecture"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," command is compatible with the XLIFF architecture of 4D v11: the command first looks for values corresponding to ",(0,t.jsx)(s.em,{children:"resID"})," and ",(0,t.jsx)(s.em,{children:"strID"})," in all the open XLIFF files (when the ",(0,t.jsx)(s.em,{children:"resFile"})," parameter is omitted) and fills the ",(0,t.jsx)(s.em,{children:"strings"})," array with the corresponding values. In this case, ",(0,t.jsx)(s.em,{children:"resID"})," specifies the ",(0,t.jsx)(s.strong,{children:"id"})," attribute of the ",(0,t.jsx)(s.strong,{children:"group"})," element and the ",(0,t.jsx)(s.em,{children:"strings"})," array contains all the strings of the element. If the value is not found, the command continues searching in the open resources files.",(0,t.jsx)(s.br,{}),"\nFor more information about XLIFF architecture in 4D, refer to the Design Reference manual."]}),"\n",(0,t.jsx)(s.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(s.p,{children:"If the resource is found, OK is set to 1. Otherwise, it is set to 0 (zero)."}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/get-string-resource",children:"Get string resource"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/get-text-resource",children:"Get text resource"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"511"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifies variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);