"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96000"],{514493:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-get-names","title":"METHOD GET NAMES","description":"METHOD GET NAMES ( arrNames {; filter}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-names","permalink":"/docs/20-R8/commands/method-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-names","title":"METHOD GET NAMES","slug":"/commands/method-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/20-R8/commands/method-get-modification-date"},"next":{"title":"METHOD Get path","permalink":"/docs/20-R8/commands/method-get-path"}}'),r=n("785893"),d=n("250065");let i={id:"method-get-names",title:"METHOD GET NAMES",slug:"/commands/method-get-names",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD GET NAMES"})," ( ",(0,r.jsx)(t.em,{children:"arrNames"})," {; ",(0,r.jsx)(t.em,{children:"filter"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"arrNames"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array of project method names"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name filter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD GET NAMES"})," command fills the ",(0,r.jsx)(t.em,{children:"arrNames"})," array with the names of project methods created in the application."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, all methods are listed. You can restrict this list by passing a comparison string in the ",(0,r.jsx)(t.em,{children:"filter"}),' parameter: in this case, the command only returns methods whose name matches the filter. You must use the @ character in order to set filters of the "starts with", "ends with" or "contains" type.']}),"\n",(0,r.jsxs)(t.p,{children:["If this command is executed from a component, it returns by default the names of the component project methods. If you pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter, the array contains the host database project methods."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Methods placed in the trash are not listed."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Here are a few typical examples of use:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// List of all project methods of the database\n\xa0METHOD GET NAMES(t_Names)\n\xa0\n\xa0\xa0//\xa0 List of project methods beginning with a specific string\n\xa0METHOD GET NAMES(t_Names;"web_@")\n\xa0\n\xa0\xa0// List of project methods in the host database beginning with a specific string\n\xa0METHOD GET NAMES(t_Names;"web_@";*)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1166"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var s=n(667294);let r={},d=s.createContext(r);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);