"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96134"],{593570:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/sql-get-data-source-list","title":"SQL GET DATA SOURCE LIST","description":"SQL GET DATA SOURCE LIST ( sourceType ; sourceNamesArr ; driversArr )","source":"@site/versioned_docs/version-20-R8/commands-legacy/sql-get-data-source-list.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-data-source-list","permalink":"/docs/commands/sql-get-data-source-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-data-source-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-get-data-source-list","title":"SQL GET DATA SOURCE LIST","slug":"/commands/sql-get-data-source-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL Get current data source","permalink":"/docs/commands/sql-get-current-data-source"},"next":{"title":"SQL GET LAST ERROR","permalink":"/docs/commands/sql-get-last-error"}}'),t=s("785893"),d=s("250065");let a={id:"sql-get-data-source-list",title:"SQL GET DATA SOURCE LIST",slug:"/commands/sql-get-data-source-list",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SQL GET DATA SOURCE LIST"})," ( ",(0,t.jsx)(n.em,{children:"sourceType"})," ; ",(0,t.jsx)(n.em,{children:"sourceNamesArr"})," ; ",(0,t.jsx)(n.em,{children:"driversArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sourceType"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Source type: user or system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sourceNamesArr"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array of data source names"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"driversArr"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array of drivers for sources"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SQL GET DATA SOURCE LIST"})," command returns, in the ",(0,t.jsx)(n.em,{children:"sourceNamesArr"})," and ",(0,t.jsx)(n.em,{children:"driversArr"})," arrays, the names and drivers of the ",(0,t.jsx)(n.em,{children:"sourceType"})," type data sources defined in the ODBC manager of the operating system."]}),"\n",(0,t.jsxs)(n.p,{children:["4D allows you to connect to an external ODBC data source directly via the language and execute SQL queries within a ",(0,t.jsx)(n.strong,{children:"Begin SQL/End SQL"})," tag structure. This works as follows: the SQL GET DATA SOURCE LIST command can be used to get a list of data sources present on the machine. The ",(0,t.jsx)(n.a,{href:"/docs/commands/sql-login",children:"SQL LOGIN"})," command can then be used to designate the source to be used. You can then execute SQL queries using a ",(0,t.jsx)(n.strong,{children:"Begin SQL/End SQL"})," tag structure in the \u201Ccurrent\u201D source. To carry out queries using the 4D internal engine again, simply pass the ",(0,t.jsx)(n.a,{href:"/docs/commands/sql-logout",children:"SQL LOGOUT"})," command. For more information about SQL commands in the Method editor, please refer to the ",(0,t.jsx)(n.em,{children:"4D SQL Reference"})," manual."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"sourceType"}),", pass the type of data source that you want to retrieve. You can use one of the following constants, found in the \u201C",(0,t.jsx)(n.em,{children:"SQL"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System data source"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User data source"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command does not take file type data sources into account."]}),"\n",(0,t.jsxs)(n.p,{children:["The command fills and sizes the ",(0,t.jsx)(n.em,{children:"sourceNamesArr"})," and ",(0,t.jsx)(n.em,{children:"driversArr"})," arrays with the corresponding values."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you want to connect to an external 4D data source via ODBC, you will need to have installed the 4D ODBC Driver on your machine. For more information, please refer to the 4D ODBC Driver Installation manual."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example using a user data source:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrDSN;0)\n\xa0ARRAY TEXT(arrDSNDrivers;0)\n\xa0SQL GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(n.p,{children:"If the command is executed correctly, the OK system variable is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/sql-login",children:"SQL LOGIN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/sql-logout",children:"SQL LOGOUT"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"989"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},d=r.createContext(t);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);