"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49269"],{613294:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/form-get-names","title":"FORM GET NAMES","description":"FORM GET NAMES ( {aTable ;} arrNames {; filter {; marker}}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/form-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-names","permalink":"/docs/commands/form-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-names","title":"FORM GET NAMES","slug":"/commands/form-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM EDIT","permalink":"/docs/commands/form-edit"},"next":{"title":"METHOD Get attribute","permalink":"/docs/commands/method-get-attribute"}}'),s=t("785893"),a=t("250065");let i={id:"form-get-names",title:"FORM GET NAMES",slug:"/commands/form-get-names",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM GET NAMES"})," ( {",(0,s.jsx)(n.em,{children:"aTable"})," ;} ",(0,s.jsx)(n.em,{children:"arrNames"})," {; ",(0,s.jsx)(n.em,{children:"filter"})," {; ",(0,s.jsx)(n.em,{children:"marker"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrNames"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array of form names"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filter"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name filter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"marker"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Marker for minimum version to return"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"New value"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"FORM GET NAMES"})," command fills the ",(0,s.jsx)(n.em,{children:"arrNames"})," array with the names of forms in the application."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the ",(0,s.jsx)(n.em,{children:"aTable"})," parameter, the command returns the names of the table forms associated with this table. If you omit this parameter, the command returns the names of the database project forms."]}),"\n",(0,s.jsxs)(n.p,{children:["You can limit this list of forms by passing a comparison string in the ",(0,s.jsx)(n.em,{children:"filter"}),' parameter: in this case, only forms whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the ',(0,s.jsx)(n.em,{children:"filter"})," parameter is ignored."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also limit the list of forms using the optional ",(0,s.jsx)(n.em,{children:"marker"})," parameter, which allows you to limit forms returned in ",(0,s.jsx)(n.em,{children:"arrNames"})," to those that were modified after a given time. As part of a version control system, this parameter lets you update only forms that were modified since the last backup.",(0,s.jsx)(n.br,{}),"\nThis principle works as follows: 4D internally maintains a counter of database resource modifications. Since forms are resources, each time a form is created or saved, this counter is incremented. If you pass the ",(0,s.jsx)(n.em,{children:"marker"})," parameter, the command returns, in ",(0,s.jsx)(n.em,{children:"arrNames"}),", only forms corresponding to marker values that are greater than or equal to that of the ",(0,s.jsx)(n.em,{children:"marker"}),". In addition, if you pass a variable in ",(0,s.jsx)(n.em,{children:"marker"}),", the command returns the new value of the modification counter, i.e., the highest one, in this variable. You can then save this value and use it in the next call of the ",(0,s.jsx)(n.strong,{children:"FORM GET NAMES"})," command to retrieve only new or modified forms."]}),"\n",(0,s.jsxs)(n.p,{children:["If the command is executed from a component, it returns by default the names of the component project forms. If you pass the ",(0,s.jsx)(n.em,{children:"*"})," parameter, the array contains the forms of the host database."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Forms placed in the trash are not listed."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Examples of typical use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// List all the project forms of the database\n\xa0FORM GET NAMES(arr_Names)\n\xa0\n\xa0\xa0// List forms of the [Employees] table\n\xa0FORM GET NAMES([Employees] ;arr_Names)\n\xa0\n\xa0\xa0// List "input" forms of the [Employees] table\n\xa0FORM GET NAMES([Employees] ;arr_Names;"input_@")\n\xa0\n\xa0\xa0// List specific project forms of the database\n\xa0FORM GET NAMES(arr_Names;"dialogue_@")\n\xa0\n\xa0\xa0// List all project forms in database that were modified since the last synchronization\n\xa0\xa0// vMarker contains a numeric value\n\xa0FORM GET NAMES(arr_Names;"";vMarker)\n\xa0\n\xa0\xa0// List table forms from a component\n\xa0\xa0// A pointer is necessary because the table name is unknown\n\xa0FORM GET NAMES(tablePtr->;arr_Names;*)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Forms"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/method-get-paths-form",children:"METHOD GET PATHS FORM"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);