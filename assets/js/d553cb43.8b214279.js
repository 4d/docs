"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24459"],{792343:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-picture-formats","title":"GET PICTURE FORMATS","description":"GET PICTURE FORMATS ( picture ; codecIDs )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-picture-formats.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-formats","permalink":"/docs/20-R7/commands/get-picture-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-formats.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-formats","title":"GET PICTURE FORMATS","slug":"/commands/get-picture-formats","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get picture file name","permalink":"/docs/20-R7/commands/get-picture-file-name"},"next":{"title":"GET PICTURE FROM LIBRARY","permalink":"/docs/20-R7/commands/get-picture-from-library"}}'),s=t("785893"),i=t("250065");let c={id:"get-picture-formats",title:"GET PICTURE FORMATS",slug:"/commands/get-picture-formats",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET PICTURE FORMATS"})," ( ",(0,s.jsx)(n.em,{children:"picture"})," ; ",(0,s.jsx)(n.em,{children:"codecIDs"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"picture"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Picture field or variable to analyze"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"codecIDs"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Picture codec IDs"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET PICTURE FORMATS"})," command returns an array of all the codec IDs (picture formats) contained in the ",(0,s.jsx)(n.em,{children:"picture"})," passed as parameter. A 4D picture (field or variable) can contain the same picture encoded in different formats, such as PNG, BMP, GIF, etc."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"picture"})," parameter, you pass a picture field or a picture variable whose included formats you want to be returned in the ",(0,s.jsx)(n.em,{children:"codecIDs"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["The codec IDs returned are established by 4D in exactly the same way as for the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command. They can be returned in the following forms:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As extensions (for example, \u201C.gif\u201D)"}),"\n",(0,s.jsx)(n.li,{children:"As Mime types (for example, \u201Cimage/jpeg\u201D)"}),"\n",(0,s.jsx)(n.li,{children:"As 4-character QuickTime codes"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The following codecs, handled internally by 4D, are always returned as extensions: JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF."}),"\n",(0,s.jsxs)(n.li,{children:["4-character QuickTime codes may be returned in databases where the QuickTime support compatibility option has been set (using the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command). However, QuickTime is no longer supported in 4D and we do not recommend using QuickTime codecs."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about picture codec IDs, refer to the ",(0,s.jsx)(n.em,{children:"Pictures"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to know the picture formats stored in a field for the current record:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($aTPictureFormats;0)\n\xa0\xa0//Get all the formats saved\n\xa0GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1406"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(667294);let s={},i=r.createContext(s);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);