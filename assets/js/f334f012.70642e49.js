"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97789"],{845674:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/method-get-folders","title":"METHOD GET FOLDERS","description":"METHOD GET FOLDERS ( arrNames {; filter}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-get-folders.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-folders","permalink":"/docs/commands/method-get-folders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-folders.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-folders","title":"METHOD GET FOLDERS","slug":"/commands/method-get-folders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET COMMENTS","permalink":"/docs/commands/method-get-comments"},"next":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/commands/method-get-modification-date"}}'),r=n("785893"),d=n("250065");let i={id:"method-get-folders",title:"METHOD GET FOLDERS",slug:"/commands/method-get-folders",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD GET FOLDERS"})," ( ",(0,r.jsx)(t.em,{children:"arrNames"})," {; ",(0,r.jsx)(t.em,{children:"filter"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"arrNames"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array of Home page folder names"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name filter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD GET FOLDERS"})," command returns, in the ",(0,r.jsx)(t.em,{children:"arrNames"})," array, the names of folders created on the Home page of the 4D Explorer:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(794820).Z+"",width:"412",height:"199"})}),"\n",(0,r.jsx)(t.p,{children:"Since folder names must be unique, the hierarchy is not returned in this array."}),"\n",(0,r.jsxs)(t.p,{children:["You can limit this list of folders by passing a comparison string in the ",(0,r.jsx)(t.em,{children:"filter"}),' parameter: in this case, only folders whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the ',(0,r.jsx)(t.em,{children:"filter"})," parameter is ignored."]}),"\n",(0,r.jsxs)(t.p,{children:["If the command is executed from a component, it returns by default the paths of the component methods. If you pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter, the array contains the paths of the methods of the host database."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/method-get-paths",children:"METHOD GET PATHS"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1206"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},794820:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/pict837666.en-9c130d4be6c1369318d9aa15a0073fc3.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(667294);let r={},d=s.createContext(r);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);