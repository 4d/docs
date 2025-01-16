"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28601"],{213995:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/uppercase","title":"Uppercase","description":"Uppercase ( aString {; *} ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/uppercase.md","sourceDirName":"commands-legacy","slug":"/commands/uppercase","permalink":"/docs/commands/uppercase","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuppercase.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"uppercase","title":"Uppercase","slug":"/commands/uppercase","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Substring","permalink":"/docs/commands/substring"},"next":{"title":"Structure Access","permalink":"/docs/category/structure-access"}}'),r=s("785893"),c=s("250065");let a={id:"uppercase",title:"Uppercase",slug:"/commands/uppercase",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Uppercase"})," ( ",(0,r.jsx)(n.em,{children:"aString"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"String to convert to uppercase"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed: keep accents"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"String in uppercase"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Uppercase takes ",(0,r.jsx)(n.em,{children:"aString"})," and returns the string with all alphabetic characters in uppercase."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, if passed, indicates that any accented characters present in ",(0,r.jsx)(n.em,{children:"aString"})," must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters \u201Close\u201D their accents after the conversion is carried out."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["This example compares the results obtained according to whether or not the ",(0,r.jsx)(n.em,{children:"*"})," parameter has been passed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$thestring:=Uppercase("h\xe9l\xe8ne")\xa0// $thestring is "HELENE"\n\xa0$thestring:=Uppercase("h\xe9l\xe8ne";*)\xa0// $thestring is "H\xc9L\xc8NE"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["See the example for ",(0,r.jsx)(n.a,{href:"/docs/commands/lowercase",children:"Lowercase"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/lowercase",children:"Lowercase"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"13"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let r={},c=t.createContext(r);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);