"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18076"],{761275:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/picture-codec-list","title":"PICTURE CODEC LIST","description":"PICTURE CODEC LIST ( codecArray {; namesArray}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/picture-codec-list.md","sourceDirName":"commands-legacy","slug":"/commands/picture-codec-list","permalink":"/docs/commands/picture-codec-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-codec-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"picture-codec-list","title":"PICTURE CODEC LIST","slug":"/commands/picture-codec-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is picture file","permalink":"/docs/commands/is-picture-file"},"next":{"title":"PICTURE LIBRARY LIST","permalink":"/docs/commands/picture-library-list"}}'),r=t("785893"),i=t("250065");let c={id:"picture-codec-list",title:"PICTURE CODEC LIST",slug:"/commands/picture-codec-list",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PICTURE CODEC LIST"})," ( ",(0,r.jsx)(n.em,{children:"codecArray"})," {; ",(0,r.jsx)(n.em,{children:"namesArray"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codecArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"IDs of available picture Codecs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"namesArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Names of picture Codecs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Return list of reading (decoding) Codecs"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"PICTURE CODEC LIST"})," command fills the ",(0,r.jsx)(n.em,{children:"codecArray"})," array with the list of picture Codec IDs that are available on the machine where it is executed. This list includes the Codec IDs of picture formats that are managed natively by 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["The Codec IDs can be returned in the ",(0,r.jsx)(n.em,{children:"codecArray"})," array in the following forms:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"As an extension (for example, \u201C.gif\u201D)"}),"\n",(0,r.jsx)(n.li,{children:"As a Mime type (for example, \u201Cimage/jpeg\u201D)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibility note:"})," If QuickTime has been enabled in the database (see the ",(0,r.jsx)(n.em,{children:"Pictures"})," section), 4-character QuickTime codes can also be returned (for example \u201CPNTG\u201D)."]}),"\n",(0,r.jsxs)(n.p,{children:["The form returned by the command will depend on the way the Codec is recorded at the operating system level. The optional ",(0,r.jsx)(n.em,{children:"namesArray"})," array can be used to retrieve the name of each Codec. These names are more explicit than the IDs. This array can be used, for example, to build and display a menu listing the available Codecs."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, if you do not pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter, the command returns only the Codecs that can be used to encode (write) pictures. These IDs can be used in the ",(0,r.jsx)(n.em,{children:"format"})," parameter of the picture export commands ",(0,r.jsx)(n.a,{href:"/docs/commands/write-picture-file",children:"WRITE PICTURE FILE"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/picture-to-blob",children:"PICTURE TO BLOB"}),".",(0,r.jsx)(n.br,{}),"\nIf you pass the ",(0,r.jsx)(n.em,{children:"*"}),' parameter, the command also returns the list of codecs used for decoding (reading) the pictures. The two lists are not exclusive, certain reading and writing Codecs are identical. Codecs intended for encoding pictures may usually be used for decoding. On the other hand, decoding Codecs cannot necessarily be used for encoding. For example, the ".jpg" Codec will be found in both lists, whereas the ".xbmp" Codec will only be found in the list of reading (decoding) Codecs.']}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/is-picture-file",children:"Is picture file"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Pictures"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);