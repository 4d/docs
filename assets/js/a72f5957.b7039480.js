"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43250"],{942046:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-combine-ranges","title":"VP Combine ranges","description":"VP Combine ranges ( rangeObj Object {;...otherRangeObjN Object","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-combine-ranges.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-combine-ranges","permalink":"/docs/ViewPro/commands/vp-combine-ranges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-combine-ranges.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-combine-ranges","title":"VP Combine ranges"},"sidebar":"docs","previous":{"title":"VP COLUMN AUTOFIT","permalink":"/docs/ViewPro/commands/vp-column-autofit"},"next":{"title":"VP Convert from 4D View","permalink":"/docs/ViewPro/commands/vp-convert-from-4d-view"}}'),o=r("785893"),t=r("250065");let c={id:"vp-combine-ranges",title:"VP Combine ranges"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Combine ranges"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"otherRangeObj"})," : Object {;...",(0,o.jsx)(n.em,{children:"otherRangeObjN"})," : Object }  ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Range object"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"otherRangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Range object"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Result"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Object containing a combined range"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP Combine Ranges"})," command returns a new range object that incorporates two or more existing range objects. All of the ranges must be from the same 4D View Pro area."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"rangeObj"}),", pass the first range object."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"otherRangeObj"}),", pass another range object(s) to combine with ",(0,o.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The command incorporates ",(0,o.jsx)(n.em,{children:"rangeObj"})," and ",(0,o.jsx)(n.em,{children:"otherRangeObj"})," objects by reference."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You want to combine cell, column, and row range objects in a new, distinct range object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $cell:=VP Cell("ViewProArea";2;4) // C5\n $column:=VP Column("ViewProArea";3) // column D\n $row:=VP Row("ViewProArea";9) // row 10\n \n $combine:=VP Combine ranges($cell;$column;$row)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-all",children:"VP All"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-column",children:"VP Column"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-name",children:"VP Name"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-row",children:"VP Row"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(667294);let o={},t=s.createContext(o);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);