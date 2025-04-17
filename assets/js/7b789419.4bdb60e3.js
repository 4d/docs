"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30641"],{794675:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/folder-list","title":"FOLDER LIST","description":"FOLDER LIST ( pathname ; directories )","source":"@site/versioned_docs/version-20-R9/commands-legacy/folder-list.md","sourceDirName":"commands-legacy","slug":"/commands/folder-list","permalink":"/docs/commands/folder-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffolder-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"folder-list","title":"FOLDER LIST","slug":"/commands/folder-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Document to text","permalink":"/docs/commands/document-to-text"},"next":{"title":"GET DOCUMENT ICON","permalink":"/docs/commands/get-document-icon"}}'),r=t("785893"),d=t("250065");let i={id:"folder-list",title:"FOLDER LIST",slug:"/commands/folder-list",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FOLDER LIST"})," ( ",(0,r.jsx)(n.em,{children:"pathname"})," ; ",(0,r.jsx)(n.em,{children:"directories"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pathname"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Pathname to volume, directory or folder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directories"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Names of the directories present at this location"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"FOLDER LIST"})," command populates the Text or String array ",(0,r.jsx)(n.em,{children:"directories"})," with the names of the folders located at the pathname you pass in ",(0,r.jsx)(n.em,{children:"pathname"}),".The ",(0,r.jsx)(n.em,{children:"pathname"})," parameter only accepts absolute pathnames."]}),"\n",(0,r.jsxs)(n.p,{children:["If there are no folders at the specified location, the command returns an empty array. If the pathname you pass in ",(0,r.jsx)(n.em,{children:"pathname"})," is invalid, ",(0,r.jsx)(n.strong,{children:"FOLDER LIST"})," generate a file manager error that you can intercept using an ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/document-list",children:"DOCUMENT LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/volume-list",children:"VOLUME LIST"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"473"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);