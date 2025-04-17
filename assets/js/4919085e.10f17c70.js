"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7432"],{455060:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-import-from-object","title":"VP IMPORT FROM OBJECT","description":"VP IMPORT FROM OBJECT ( vpAreaName Object} )","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-import-from-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-import-from-object","permalink":"/docs/20-R8/ViewPro/commands/vp-import-from-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-import-from-object","title":"VP IMPORT FROM OBJECT"},"sidebar":"docs","previous":{"title":"VP IMPORT FROM BLOB","permalink":"/docs/20-R8/ViewPro/commands/vp-import-from-blob"},"next":{"title":"VP INSERT COLUMNS","permalink":"/docs/20-R8/ViewPro/commands/vp-insert-columns"}}'),o=r("785893"),i=r("250065");let s={id:"vp-import-from-object",title:"VP IMPORT FROM OBJECT"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP IMPORT FROM OBJECT"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,o.jsx)(n.em,{children:"viewPro"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"viewPro"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View Pro object"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP IMPORT FROM OBJECT"})," command imports and displays the ",(0,o.jsx)(n.em,{children:"viewPro"})," 4D View Pro object in the ",(0,o.jsx)(n.em,{children:"vpAreaName"})," 4D View Pro area. The imported object contents replaces any data already inserted in the area."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"viewPro"}),", pass a valid 4D View Pro object. This object can have been created using ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," or manually. For more information on 4D View Pro objects, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ViewPro/configuring#4d-view-pro-object",children:"4D View Pro object"})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["An error is returned if the ",(0,o.jsx)(n.em,{children:"viewPro"})," object is invalid."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You want to import a spreadsheet that was previously saved in an object field:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'QUERY([VPWorkBooks];[VPWorkBooks]ID=10)\nVP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var t=r(667294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);