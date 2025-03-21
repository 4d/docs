"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40626"],{113722:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-delete-columns","title":"VP DELETE COLUMNS","description":"VP DELETE COLUMNS ( rangeObj : Object )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-delete-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-delete-columns","permalink":"/docs/20-R7/ViewPro/commands/vp-delete-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-delete-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-delete-columns","title":"VP DELETE COLUMNS"},"sidebar":"docs","previous":{"title":"D","permalink":"/docs/20-R7/commands-legacy/D"},"next":{"title":"VP DELETE ROWS","permalink":"/docs/20-R7/ViewPro/commands/vp-delete-rows"}}'),r=t("785893"),l=t("250065");let i={id:"vp-delete-columns",title:"VP DELETE COLUMNS"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function A(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP DELETE COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Range object"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP DELETE COLUMNS"})," command removes the columns in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of columns to remove. If the passed range contains:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"both columns and rows, only the columns are removed."}),"\n",(0,r.jsx)(n.li,{children:"only rows, the command does nothing."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Columns are deleted from right to left."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"To delete columns selected by the user (in the image below columns B, C, and D):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(909455).Z+"",width:"387",height:"77"})}),"\n",(0,r.jsx)(n.p,{children:"use the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP DELETE COLUMNS(VP Get selection("ViewProArea"))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-insert-columns",children:"VP INSERT COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-insert-rows",children:"VP INSERT ROWS"})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},909455:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);