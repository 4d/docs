"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99598"],{686695:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-table-column-attributes","title":"VP Get column attributes","description":"History","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-table-column-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-column-attributes","permalink":"/docs/20-R7/ViewPro/commands/vp-get-table-column-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-column-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-table-column-attributes","title":"VP Get column attributes"},"sidebar":"docs","previous":{"title":"VP Get stylesheet","permalink":"/docs/20-R7/ViewPro/commands/vp-get-stylesheets"},"next":{"title":"VP Get table column index","permalink":"/docs/20-R7/ViewPro/commands/vp-get-table-column-index"}}'),r=t("785893"),i=t("250065");let d={id:"vp-get-table-column-attributes",title:"VP Get column attributes"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get table column attributes"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"column"})," : Integer {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Index of the column in the table"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Attributes of the ",(0,r.jsx)(n.em,{children:"column"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get table column attributes"})," command returns the current attributes of the specified ",(0,r.jsx)(n.em,{children:"column"})," in the ",(0,r.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The command returns an object describing the current attributes of the ",(0,r.jsx)(n.em,{children:"column"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataField"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Table column's property name in the data context. Not returned if the table is displayed automatically"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Table column's name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"footerText"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Column footer value."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"footerFormula"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Column footer formula."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filterButtonVisible"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True if the table column's filter button is displayed, False otherwise."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"tableName"})," is not found or if ",(0,r.jsx)(n.em,{children:"column"})," index is higher than the number of columns, the command returns ",(0,r.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $attributes : Object\n$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)\nIf ($attributes.dataField#"")\n     ...\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);