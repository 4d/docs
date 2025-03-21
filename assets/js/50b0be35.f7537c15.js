"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1215"],{558724:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/regenerate-missing-table","title":"REGENERATE MISSING TABLE","description":"REGENERATE MISSING TABLE ( tableName )","source":"@site/versioned_docs/version-20-R7/commands-legacy/regenerate-missing-table.md","sourceDirName":"commands-legacy","slug":"/commands/regenerate-missing-table","permalink":"/docs/20-R7/commands/regenerate-missing-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregenerate-missing-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"regenerate-missing-table","title":"REGENERATE MISSING TABLE","slug":"/commands/regenerate-missing-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PAUSE INDEXES","permalink":"/docs/20-R7/commands/pause-indexes"},"next":{"title":"RELOAD EXTERNAL DATA","permalink":"/docs/20-R7/commands/reload-external-data"}}'),a=s("785893"),r=s("250065");let i={id:"regenerate-missing-table",title:"REGENERATE MISSING TABLE",slug:"/commands/regenerate-missing-table",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"REGENERATE MISSING TABLE"})," ( ",(0,a.jsx)(n.em,{children:"tableName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tableName"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of missing table to be regenerated"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"REGENERATE MISSING TABLE"})," command rebuilds the missing table whose name is passed in the ",(0,a.jsx)(n.em,{children:"tableName"})," parameter. When a missing table is rebuilt, it becomes visible in the Structure editor and its data can once again be accessed."]}),"\n",(0,a.jsxs)(n.p,{children:["Missing tables are tables whose data are present in the data file but that do not exist at the structure level. You can identify any missing tables that may be present in the application by using the ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:["If the table designated by the ",(0,a.jsx)(n.em,{children:"tableName"})," parameter is not a missing table of the database, the command does nothing."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"This method regenerates all the missing tables that may be present in the database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrMissingTables;0)\n\xa0GET MISSING TABLE NAMES($arrMissingTables)\n\xa0$SizeArray:=Size of array($arrMissingTables)\n\xa0If($SizeArray#0)\n\xa0\xa0// Fills the array with the names of all the tables in the database\n\xa0\xa0\xa0\xa0ARRAY TEXT(arrTables;Last table number)\n\xa0\xa0\xa0\xa0If(Last table number>0)\xa0//If there are actually tables\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlTables;Size of array(arrTables);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTables))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0arrTables{$vlTables}:=Table name($vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(arrTables;$vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0For($i;1;$SizeArray)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Find in array(arrTables;$arrMissingTables{$i})=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Regenerate the table"+$arrMissingTables{$i}+"?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REGENERATE MISSING TABLE($arrMissingTables{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Impossible to regenerate table "+$arrMissingTables{$i}+" because there is already a table with this name in the database.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("No tables to regenerate.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"})}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"1126"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);