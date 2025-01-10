"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64800"],{158477:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","description":"GET PASTEBOARD DATA TYPE ( 4Dsignatures ; nativeTypes {; formatNames} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-pasteboard-data-type.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data-type","permalink":"/docs/commands/get-pasteboard-data-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","slug":"/commands/get-pasteboard-data-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA","permalink":"/docs/commands/get-pasteboard-data"},"next":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/commands/get-picture-from-pasteboard"}}'),r=n("785893"),a=n("250065");let d={id:"get-pasteboard-data-type",title:"GET PASTEBOARD DATA TYPE",slug:"/commands/get-pasteboard-data-type",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET PASTEBOARD DATA TYPE"})," ( ",(0,r.jsx)(t.em,{children:"4Dsignatures"})," ; ",(0,r.jsx)(t.em,{children:"nativeTypes"})," {; ",(0,r.jsx)(t.em,{children:"formatNames"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4Dsignatures"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"4D signatures of data types"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nativeTypes"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Native data types"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"formatNames"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Format names (Windows only), empty strings under Mac OS"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"GET PASTEBOARD DATA TYPE"})," command gets the list of data types present in the pasteboard. This command should generally be used in the context of a drag and drop operation, within the On Drop or On Drag Over form events of the destination object. More particularly, it allows the pasteboard to be checked for the presence of a specific type of data."]}),"\n",(0,r.jsx)(t.p,{children:"This command returns the data types in several different forms via two (or three) arrays:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"4Dsignatures"})," array contains the data types expressed using the internal 4D signature (for example, \u201Ccom.4d.private.picture.gif\u201D). If a data type found is not recognized by 4D, an empty string (\u201C\u201D) is returned in the array."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"nativeTypes"})," array contains the data types expressed using their native types. The format of native types differs between Mac OS and Windows.\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Under Mac OS, native types are expressed as UTIs (Uniform Type Identifier)."}),"\n",(0,r.jsxs)(t.li,{children:["Under Windows, native types are expressed as numbers, with each number being associated with a format name. The ",(0,r.jsx)(t.em,{children:"nativeTypes"})," array contains these numbers in the form of strings (\u201C3\u201D, \u201C12\u201D, and so on). If you want to use more explicit labels, it is recommended to use the optional ",(0,r.jsx)(t.em,{children:"formatNames"})," array, which contains the format names of the native types under Windows.",(0,r.jsx)(t.br,{}),"\nThe ",(0,r.jsx)(t.em,{children:"nativeTypes"})," array lets any type of data found in the pasteboard to be supported, including data whose type is not referenced by 4D."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Under Windows, you can also pass the ",(0,r.jsx)(t.em,{children:"formatNames"})," array, which receives the names of the data types found in the pasteboard. The values returned in this array can be used, for example, to build a format selection pop-up menu. Under Mac OS, the ",(0,r.jsx)(t.em,{children:"formatNames"})," array returns empty strings."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more information about the data types supported, please refer to the ",(0,r.jsx)(t.em,{children:"Managing Pasteboards"})," section."]}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Managing Pasteboards"})}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"958"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);