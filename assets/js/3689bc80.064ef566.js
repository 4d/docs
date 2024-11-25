"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98415"],{613845:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/method-get-comments","title":"METHOD GET COMMENTS","description":"METHOD GET COMMENTS ( path ; comments {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/method-get-comments.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-comments","permalink":"/docs/commands/method-get-comments","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-comments.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-comments","title":"METHOD GET COMMENTS","slug":"/commands/method-get-comments","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET CODE","permalink":"/docs/commands/method-get-code"},"next":{"title":"METHOD GET FOLDERS","permalink":"/docs/commands/method-get-folders"}}'),o=n("785893"),d=n("250065");let r={id:"method-get-comments",title:"METHOD GET COMMENTS",slug:"/commands/method-get-comments",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function m(e){let t={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"METHOD GET COMMENTS"})," ( ",(0,o.jsx)(t.em,{children:"path"})," ; ",(0,o.jsx)(t.em,{children:"comments"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"path"}),(0,o.jsx)(t.td,{children:"Text, Text array"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Text or Text array containing one or more method path(s)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"comments"}),(0,o.jsx)(t.td,{children:"Text, Text array"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Documentation of designated method(s)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operator"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"METHOD GET COMMENTS"})," command returns, in the ",(0,o.jsx)(t.em,{children:"comments"})," parameter, the documentation of the method(s) designated by the ",(0,o.jsx)(t.em,{children:"path"})," parameter."]}),"\n",(0,o.jsxs)(t.p,{children:["The documentation retrieved by this command is displayed in the 4D Explorer (not to be confused with lines of comments in the code that are retrieved using ",(0,o.jsx)(t.a,{href:"/docs/commands/method-get-code",children:"METHOD GET CODE"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"It contains:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"markdown text in project databases"}),"\n",(0,o.jsx)(t.li,{children:"styled text in binary databases"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(595321).Z+"",width:"869",height:"271"})}),"\n",(0,o.jsx)(t.p,{children:"This documentation can be generated for methods ot type triggers, project methods, form methods, database methods, and classes."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," Forms and form methods share the same documentation."]}),"\n",(0,o.jsx)(t.p,{children:"You can use two types of syntaxes, based either on text arrays, or text variables:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// text variables\n\xa0var tVcomments : Text\n\xa0METHOD GET COMMENTS(tVpath;tVcomments)\xa0// documentation of a single method\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// text arrays\n\xa0ARRAY TEXT(arrComments;0)\n\xa0METHOD GET COMMENTS(arrPaths;arrComments)\xa0// documentation\xa0of several methods\n"})}),"\n",(0,o.jsx)(t.p,{children:"You cannot mix the two syntaxes."}),"\n",(0,o.jsxs)(t.p,{children:["If the command is executed from a component, it applies by default to the component methods. If you pass the ",(0,o.jsx)(t.em,{children:"*"})," parameter, it accesses the methods of the host database."]}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/commands/method-set-comments",children:"METHOD SET COMMENTS"})})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},595321:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/pict4968699.en-4ba2c70a2c9224e453d4a0b950fced20.png"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let o={},d=s.createContext(o);function r(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);