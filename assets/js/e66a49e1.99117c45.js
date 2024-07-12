/*! For license information please see e66a49e1.99117c45.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22910],{649997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(474848),l=t(28453);const a={id:"vp-create-table",title:"VP CREATE TABLE"},o=void 0,i={id:"ViewPro/commands/vp-create-table",title:"VP CREATE TABLE",description:"History",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-create-table.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-create-table",permalink:"/docs/20-R5/ViewPro/commands/vp-create-table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-create-table.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-create-table",title:"VP CREATE TABLE"},sidebar:"docs",previous:{title:"VP Copy to object",permalink:"/docs/20-R5/ViewPro/commands/vp-copy-to-object"},next:{title:"D",permalink:"/docs/20-R5/commands/D"}},r={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R8"}),(0,s.jsxs)(n.td,{children:["Support of theme options: ",(0,s.jsx)(n.code,{children:"bandColumns"}),", ",(0,s.jsx)(n.code,{children:"bandRows"}),", ",(0,s.jsx)(n.code,{children:"highlightFirstColumn"}),", ",(0,s.jsx)(n.code,{children:"highlightLastColumn"}),", ",(0,s.jsx)(n.code,{children:"theme"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R7"}),(0,s.jsxs)(n.td,{children:["Support of ",(0,s.jsx)(n.code,{children:"allowAutoExpand"})," option"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R6"}),(0,s.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP CREATE TABLE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text {; ",(0,s.jsx)(n.em,{children:"source"})," : Text} {; ",(0,s.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableOptions} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Name for the table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Data context property name to display in the table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/classes#tableoptions",children:"cs.ViewPro.TableOptions"})}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Additional options"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP CREATE TABLE"})," command creates a table in the specified range. You can create a table in a range of cells to make managing and analyzing a group of related data easier. A table typically contains related data in rows and columns, and takes advantage of a ",(0,s.jsx)(n.a,{href:"vp-set-data-context",children:"data context"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(94313).A+"",width:"1078",height:"324"})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass the cell range where the table will be created."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"tableName"}),", pass a name for the table. The name must:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be unique in the sheet"}),"\n",(0,s.jsx)(n.li,{children:"include at least 5 characters"}),"\n",(0,s.jsx)(n.li,{children:"not include spaces or start with a number"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"source"}),", you can pass a property name of a ",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-data-context",children:"data context"})," to display its data in the table. This binds the table to the data context. When the data context is updated, the data displayed in the table is updated accordingly. The ",(0,s.jsx)(n.em,{children:"source"})," property must contain a collection of objects and each element represents a row."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you don't specify a ",(0,s.jsx)(n.em,{children:"source"}),", the command creates an empty table with the size defined in ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If the specified ",(0,s.jsx)(n.em,{children:"source"})," cannot be fully displayed in the document, no table is created."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"options"})," parameter, pass an object of the ",(0,s.jsxs)(n.a,{href:"/docs/20-R5/ViewPro/classes#tableoptions",children:[(0,s.jsx)(n.code,{children:"cs.ViewPro.TableOptions"})," class"]})," that contains the table properties to set."]}),"\n",(0,s.jsxs)(n.p,{children:["Within the ",(0,s.jsx)(n.em,{children:"options"})," object, the ",(0,s.jsx)(n.em,{children:"tableColumns"})," collection determines the structure of the table's columns. The length of the ",(0,s.jsx)(n.em,{children:"tableColumns"})," collection must be equal to the range column count:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When the column count in ",(0,s.jsx)(n.em,{children:"rangeObj"})," exceeds the number of columns in ",(0,s.jsx)(n.em,{children:"tableColumns"}),", the table is filled with additional empty columns."]}),"\n",(0,s.jsxs)(n.li,{children:["When the column count in ",(0,s.jsx)(n.em,{children:"rangeObj"})," is inferior to the number of ",(0,s.jsx)(n.em,{children:"tableColumns"}),", the table displays a number of columns that match the range's column count."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass a ",(0,s.jsx)(n.em,{children:"source"})," but no ",(0,s.jsx)(n.em,{children:"tableColumn"})," option, the command generates columns automatically. In this case, ",(0,s.jsx)(n.em,{children:"rangeObj"})," must be a cell range. Otherwise, the first cell of the range is used. When generating columns automatically, the following rules apply:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the data passed to the command is a collection of objects, the property names are used as column titles. For example:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'([{ LastName: \\"Freehafer\\", FirstName: \\"Nancy\\"},{ LastName: \\"John\\", FirstName: \\"Doe\\"})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here the titles of the columns would be ",(0,s.jsx)(n.code,{children:"LastName"})," and ",(0,s.jsx)(n.code,{children:"FirstName"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the data passed to the command is a collection of scalar values, it must contain a collection of subcollections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row. The number of values in the first subcollection determines how many columns are created."}),"\n",(0,s.jsx)(n.li,{children:"The subcollections' indices are used as column titles."}),"\n",(0,s.jsxs)(n.li,{children:["Each subcollection defines cell values for the row. Values can be ",(0,s.jsx)(n.code,{children:"Integer"}),", ",(0,s.jsx)(n.code,{children:"Real"}),", ",(0,s.jsx)(n.code,{children:"Boolean"}),", ",(0,s.jsx)(n.code,{children:"Text"}),", ",(0,s.jsx)(n.code,{children:"Date"}),", ",(0,s.jsx)(n.code,{children:"Null"}),", ",(0,s.jsx)(n.code,{children:"Time"})," or ",(0,s.jsx)(n.code,{children:"Picture"}),". A ",(0,s.jsx)(n.code,{children:"Time"})," value must be an a object containing a time attribute, as described in ",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This only works when generating columns automatically. You cannot use a collection of scalar data with the ",(0,s.jsx)(n.em,{children:"tableColumns"})," option."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"To create a table using a data context:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Set a data context\nvar $data : Object\n\n$data:=New object()\n$data.people:=New collection()\n$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))\n$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))\n\n\nVP SET DATA CONTEXT("ViewProArea"; $data)\n\n// Define the columns for the table\nvar $options : cs.ViewPro.TableOptions\n\n$options:=cs.ViewPro.TableOptions.new()\n$options.tableColumns:=New collection()\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))\n\n// Create a table from the "people" collection\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here's the result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(94313).A+"",width:"1078",height:"324"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-table-column-index",children:"VP Get table column index"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-remove-table",children:"VP REMOVE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,a={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!r.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:l,type:e,key:c,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},94313:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vp-create-table-58d4f5dc15eb48b9682accf08d7b8926.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(296540);const l={},a=s.createContext(l);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);