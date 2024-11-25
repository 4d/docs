"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82862"],{460494:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"ViewPro/commands/vp-set-table-column-attributes","title":"VP SET TABLE COLUMN ATTRIBUTES","description":"History","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-set-table-column-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-table-column-attributes","permalink":"/docs/20-R6/ViewPro/commands/vp-set-table-column-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-table-column-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-table-column-attributes","title":"VP SET TABLE COLUMN ATTRIBUTES"},"sidebar":"docs","previous":{"title":"VP SET SHOW PRINT LINES","permalink":"/docs/20-R6/ViewPro/commands/vp-set-show-print-lines"},"next":{"title":"VP SET TABLE THEME","permalink":"/docs/20-R6/ViewPro/commands/vp-set-table-theme"}}'),s=t("785893"),r=t("250065");let l={id:"vp-set-table-column-attributes",title:"VP SET TABLE COLUMN ATTRIBUTES"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function m(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R7"}),(0,s.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TABLE COLUMN ATTRIBUTES"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"column"})," : Integer ; ",(0,s.jsx)(n.em,{children:"attributes"})," : Object {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Table name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Index of the column in the table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attributes"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsxs)(n.td,{children:["Attribute(s) to apply to the ",(0,s.jsx)(n.em,{children:"column"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET TABLE COLUMN ATTRIBUTES"})," command applies the defined ",(0,s.jsx)(n.em,{children:"attributes"})," to the ",(0,s.jsx)(n.em,{children:"column"})," in the ",(0,s.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"attributes"})," parameter, pass an object that contains the properties to set:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataField"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Table column's property name in the data context."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Table column's name. Must be unique in the table. If this name already used by another column, it is not applied and a default name is automaticaly used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Sets the formula for each column cell. See ",(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/tablegen/structref",children:"Structured Reference Formulas in the SpreadJS documentation"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"footerText"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Column footer value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"footerFormula"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Column footer formula."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filterButtonVisible"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["Sets whether the table column's filter button is displayed (default is ",(0,s.jsx)(n.code,{children:"True"})," when the table is created)."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"tableName"})," is not found or if ",(0,s.jsx)(n.em,{children:"column"})," is higher than the number of columns, the command does nothing."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You create a table with a data context:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $context;$options : Object\n\n$context:=New object()\n$context.col:=New collection()\n$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))\n$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))\n$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))\nVP SET DATA CONTEXT("ViewProArea"; $context)\n\n	//Define the columns for the table\n$options:=New object()\n$options.tableColumns:=New collection()\n$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))\n$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))\n\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(187192).Z+"",width:"307",height:"130"})}),"\n",(0,s.jsx)(n.p,{children:"Then you want to insert a column with data from the data context and hide some filter buttons:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'	//insert a column\nVP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)\n\nvar $param : Object\n$param:=New object()\n	// Bind the column to the firstname field from the datacontext\n$param.dataField:="firstname"\n	// Change the default name of the column to "First name"\n	// and hide the filter button\n$param.name:="First Name"\n$param.filterButtonVisible:=False\n\nVP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)\n\n	// Hide the filter button of the first column\nVP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \\\n	New object("filterButtonVisible"; False))\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(150217).Z+"",width:"365",height:"128"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"})]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},187192:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},150217:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);