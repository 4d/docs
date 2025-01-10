"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72316"],{148827:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/sql-export-selection","title":"SQL EXPORT SELECTION","description":"SQL EXPORT SELECTION ( aTable ; folderPath {; numFiles {; fileLimitSize {; fieldLimitSize}}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-export-selection.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-selection","permalink":"/docs/commands/sql-export-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-export-selection","title":"SQL EXPORT SELECTION","slug":"/commands/sql-export-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXPORT DATABASE","permalink":"/docs/commands/sql-export-database"},"next":{"title":"SQL Get current data source","permalink":"/docs/commands/sql-get-current-data-source"}}'),i=t("785893"),r=t("250065");let d={id:"sql-export-selection",title:"SQL EXPORT SELECTION",slug:"/commands/sql-export-selection",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL EXPORT SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"aTable"})," ; ",(0,i.jsx)(n.em,{children:"folderPath"})," {; ",(0,i.jsx)(n.em,{children:"numFiles"})," {; ",(0,i.jsx)(n.em,{children:"fileLimitSize"})," {; ",(0,i.jsx)(n.em,{children:"fieldLimitSize"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table from which to export selection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderPath"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:'Pathname of export folder or "" to display folder selection dialog box'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numFiles"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Maximum number of files per folder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileLimitSize"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Maximum size of Export.sql file (in KB)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldLimitSize"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Size limit (in bytes) below which the contents of a Text, BLOB or Picture field are embedded into the main file"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"SQL EXPORT SELECTION"})," command exports in SQL format the records of the current selection of the 4D table designated by the ",(0,i.jsx)(n.em,{children:"aTable"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["This command is nearly identical to the ",(0,i.jsx)(n.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," command. The file generated can be used directly by the ",(0,i.jsx)(n.a,{href:"/docs/commands/sql-execute-script",children:"SQL EXECUTE SCRIPT"})," command in order to import data into another 4D database. The main difference between these two commands is that ",(0,i.jsx)(n.strong,{children:"SQL EXPORT SELECTION"})," only exports the current selection of ",(0,i.jsx)(n.em,{children:"aTable"})," whereas ",(0,i.jsx)(n.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," exports the entire database. Also, unlike the ",(0,i.jsx)(n.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," command, this command does not work with external SQL databases. It can only be used with the main database."]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the description of the ",(0,i.jsx)(n.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," command for a detailed description of the functioning and parameters of these commands."]}),"\n",(0,i.jsx)(n.p,{children:"If the current selection is empty, the command does nothing. Note that in this case, the destination folder is not emptied."}),"\n",(0,i.jsxs)(n.p,{children:["If the export is carried out correctly, the ",(0,i.jsx)(n.em,{children:"OK"})," variable is set to 1. Otherwise, it is set to 0."]}),"\n",(0,i.jsx)(n.h5,{id:""}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1064"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);