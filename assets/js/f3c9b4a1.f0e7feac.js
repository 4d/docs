"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20236"],{221996:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/set-field-titles","title":"SET FIELD TITLES","description":"SET FIELD TITLES ( aTable ; fieldTitles ; fieldNumbers {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-titles","permalink":"/docs/20-R8/commands/set-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-titles.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-field-titles","title":"SET FIELD TITLES","slug":"/commands/set-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CURSOR","permalink":"/docs/20-R8/commands/set-cursor"},"next":{"title":"SET TABLE TITLES","permalink":"/docs/20-R8/commands/set-table-titles"}}'),i=s("785893"),r=s("250065");let d={id:"set-field-titles",title:"SET FIELD TITLES",slug:"/commands/set-field-titles",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," ( ",(0,i.jsx)(n.em,{children:"aTable"})," ; ",(0,i.jsx)(n.em,{children:"fieldTitles"})," ; ",(0,i.jsx)(n.em,{children:"fieldNumbers"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table for which to set the field titles"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldTitles"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field names as they must appear in dialog boxes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNumbers"}),(0,i.jsx)(n.td,{children:"Array integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Actual field numbers"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Use the custom names in the formula editor"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," lets you mask, rename, and reorder the fields of the table passed in ",(0,i.jsx)(n.em,{children:"aTable"})," when they appear in standard 4D dialog boxes, such as the Query editor, within the Application environment (i.e. when the startup mode is ",(0,i.jsx)(n.strong,{children:"Application"}),", or after you select ",(0,i.jsx)(n.strong,{children:"Test application"})," in the ",(0,i.jsx)(n.strong,{children:"Run"})," menu)."]}),"\n",(0,i.jsxs)(n.p,{children:["Using this command, you can also rename the labels of the fields in your forms on the fly, if you used dynamic names. For more information about inserting dynamic field and table names in forms, refer to ",(0,i.jsx)(n.em,{children:"Using references in static text"})," in the ",(0,i.jsx)(n.em,{children:"4D Design Reference"})," manual."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"fieldTitles"})," and ",(0,i.jsx)(n.em,{children:"fieldNumbers"})," arrays must be synchronized. In the ",(0,i.jsx)(n.em,{children:"fieldTitles"})," array, you pass the name of the fields as you would like them to appear. If you do not want to show a particular field, do not include its name or new title in the array. The fields appear in the order you specify in this array. In each element of the ",(0,i.jsx)(n.em,{children:"fieldNumbers"})," array, you pass the actual field number corresponding to the field name or new title passed in the same element number in the ",(0,i.jsx)(n.em,{children:"fieldTitles"})," array."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you have a table composed of the fields F, G, and H, created in that order. You want these fields to appear as M, N, and O. In addition you do not want to show field N. Finally, you want to show O and M in that order. To do so, pass O and M in a two-element ",(0,i.jsx)(n.em,{children:"fieldTitles"})," array and pass 3 and 1 in a two-element ",(0,i.jsx)(n.em,{children:"fieldNumbers"})," array."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"*"}),' parameter indicates whether or not custom names ("virtual" structure) defined using this command can be used in 4D formulas. By default, when this parameter is omitted, formulas executed in 4D cannot use these custom names; it is necessary to use the real field names. You need to pass this parameter if you want to control information provided to users and ensure interface consistency wherever formulas or expressions are used, i.e.:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"if your application provides access to the formula editor (for example via the Quick report editor),"}),"\n",(0,i.jsx)(n.li,{children:"if your application displays expression references, such as in 4D Write Pro documents."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When the ",(0,i.jsx)(n.em,{children:"*"})," parameter is passed, the names defined by this command can be used in the formulas executed by 4D. ",(0,i.jsx)(n.strong,{children:"Be careful in this case"}),', the custom names must not contain characters that are \u201Cforbidden\u201D by the 4D language interpreter, like -?*%! For example, the name "Rate_in_%" could not be used in a formula (for more information, refer to the ',(0,i.jsx)(n.em,{children:"Identifiers"})," section)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," does NOT change the actual structure of your database. It is designed to affect subsequent uses of the standard 4D editors and forms using dynamic names when they are used in Application environment. The scope of the ",(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," command is the worksession. One benefit in Client/Server mode is that several remote 4D stations can simultaneously \u201Csee\u201D your table in different ways. You can call ",(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," as many times as you want."]}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," command for:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dynamically localizing a table."}),"\n",(0,i.jsx)(n.li,{children:"Showing fields the way you want, independent of the actual definition of your table."}),"\n",(0,i.jsx)(n.li,{children:"Showing fields in a way that depends on the identity or custom privileges of a user."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"WARNING:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"})," does NOT override the Invisible property of a field. When a field is set to be invisible at the Design level of your database, even though it is included in a call to ",(0,i.jsx)(n.strong,{children:"SET FIELD TITLES"}),", it will not appear in Application mode."]}),"\n",(0,i.jsx)(n.li,{children:'Plug-ins always access the "virtual" structure as specified by this command.'}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-table-titles",children:"SET TABLE TITLES"}),' command is called without any parameters, the "virtual" structure (including table and field custom names) is completely removed from the Application environment.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["See example for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-table-titles",children:"SET TABLE TITLES"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/field-name",children:"Field name"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/last-field-number",children:"Last field number"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/parse-formula",children:"Parse formula"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-table-titles",children:"SET TABLE TITLES"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"602"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);