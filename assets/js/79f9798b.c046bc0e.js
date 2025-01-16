"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85771"],{916874:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-table-dirty-rows","title":"VP Get table dirty rows","description":"History","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-table-dirty-rows.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-dirty-rows","permalink":"/docs/20-R7/ViewPro/commands/vp-get-table-dirty-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-dirty-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-table-dirty-rows","title":"VP Get table dirty rows"},"sidebar":"docs","previous":{"title":"VP Get table column index","permalink":"/docs/20-R7/ViewPro/commands/vp-get-table-column-index"},"next":{"title":"VP Get table range","permalink":"/docs/20-R7/ViewPro/commands/vp-get-table-range"}}'),s=t("785893"),i=t("250065");let d={id:"vp-get-table-dirty-rows",title:"VP Get table dirty rows"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R8"}),(0,s.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get table dirty rows"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"reset"})," : Boolean {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Table name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reset"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"True to clear the dirty status from the current table, False to keep it untouched. Default=True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Collection of objects with all the items modified since the last reset"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get table dirty rows"})," command returns a collection of ",(0,s.jsx)(n.em,{children:"dirty row"})," objects, containing items that were modified since the last reset in the specified ",(0,s.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"tableName"}),", pass the name of the table for which you want to get the dirty rows. Only modified columns bound to a ",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-data-context",children:"data context"})," will be taken into account."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, calling the command will clear the ",(0,s.jsx)(n.em,{children:"dirty"})," status from the current table. To keep this status untouched, pass ",(0,s.jsx)(n.code,{children:"False"})," in the ",(0,s.jsx)(n.em,{children:"reset"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.em,{children:"dirty row"})," object in the returned collection contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"item"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Modified object of the modified row"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"originalItem"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Object before modification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Index of the modified row"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"tableName"})," is not found or if it does not contain a modified column, the command returns an empty collection."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to count the number of edited rows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $dirty : Collection\n$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)\nVP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);