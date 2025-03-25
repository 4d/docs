"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96163"],{698575:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","description":"REMOVE PICTURE FROM LIBRARY ( picRef )REMOVE PICTURE FROM LIBRARY ( picName )","source":"@site/versioned_docs/version-20-R7/commands-legacy/remove-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/remove-picture-from-library","permalink":"/docs/20-R7/commands/remove-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fremove-picture-from-library.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","slug":"/commands/remove-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ PICTURE FILE","permalink":"/docs/20-R7/commands/read-picture-file"},"next":{"title":"SET PICTURE FILE NAME","permalink":"/docs/20-R7/commands/set-picture-file-name"}}'),s=n("785893"),t=n("250065");let c={id:"remove-picture-from-library",title:"REMOVE PICTURE FROM LIBRARY",slug:"/commands/remove-picture-from-library",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"REMOVE PICTURE FROM LIBRARY"})," ( ",(0,s.jsx)(r.em,{children:"picRef"})," )",(0,s.jsx)(r.br,{}),(0,s.jsx)(r.strong,{children:"REMOVE PICTURE FROM LIBRARY"})," ( ",(0,s.jsx)(r.em,{children:"picName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"picRef | picName"}),(0,s.jsx)(r.td,{children:"Integer, Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Reference number of Picture Library graphic or Name of Picture Library graphic"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The REMOVE PICTURE FROM LIBRARY command removes from the Picture Library the picture whose reference number is passed in ",(0,s.jsx)(r.em,{children:"picRef"})," or whose name is passed in ",(0,s.jsx)(r.em,{children:"picName"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"If there is no picture with that reference number or name, the command does nothing."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"4D Server:"})," REMOVE PICTURE FROM LIBRARY cannot be used from within a method executed on the server machine (stored procedure or trigger). If you call REMOVE PICTURE FROM LIBRARY on a server machine, nothing happens\u2014the call is ignored."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Warning:"})," Design objects (hierarchical list items, menu items, etc.) may refer to Picture Library graphics. Use caution when deleting a Picture Library graphic programmatically."]}),"\n",(0,s.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(r.p,{children:"The following example deletes the picture #4444 from the Picture Library."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0REMOVE PICTURE FROM LIBRARY(4444)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(r.p,{children:["The following example deletes from the Picture Library any pictures whose names begin with a dollar sign (",(0,s.jsx)(r.em,{children:"$"}),"):"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alPicRef;$asPicName)\n\xa0For($vlPicture;1;Size of array($alPicRef))\n\xa0\xa0\xa0\xa0If($asPicName{$vlPicture}="$@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REMOVE PICTURE FROM LIBRARY($alPicRef{$vlPicture})\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"567"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2717"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Forbidden on the server"}),(0,s.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var i=n(667294);let s={},t=i.createContext(s);function c(e){let r=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);