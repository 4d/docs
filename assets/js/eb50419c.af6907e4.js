"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62192"],{675982:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/method-get-paths-form","title":"METHOD GET PATHS FORM","description":"METHOD GET PATHS FORM ( {aTable ;} arrPaths {; filter}{; stamp}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/method-get-paths-form.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-paths-form","permalink":"/docs/20-R7/commands/method-get-paths-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-paths-form.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-paths-form","title":"METHOD GET PATHS FORM","slug":"/commands/method-get-paths-form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS","permalink":"/docs/20-R7/commands/method-get-paths"},"next":{"title":"METHOD OPEN PATH","permalink":"/docs/20-R7/commands/method-open-path"}}'),r=n("785893"),a=n("250065");let o={id:"method-get-paths-form",title:"METHOD GET PATHS FORM",slug:"/commands/method-get-paths-form",displayed_sidebar:"docs"},d=void 0,i={},h=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD GET PATHS FORM"})," ( {",(0,r.jsx)(t.em,{children:"aTable"})," ;} ",(0,r.jsx)(t.em,{children:"arrPaths"})," {; ",(0,r.jsx)(t.em,{children:"filter"}),"}{; ",(0,r.jsx)(t.em,{children:"stamp"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table reference"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"arrPaths"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array of method paths and names"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name filter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stamp"}),(0,r.jsx)(t.td,{children:"Real"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Minimum value of stamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"New current value"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD GET PATHS FORM"})," command fills the ",(0,r.jsx)(t.em,{children:"arrPaths"})," array with the internal pathnames and names of the methods for all form objects as well as form methods. Form methods are labeled {formMethod}."]}),"\n",(0,r.jsx)(t.p,{children:"Only objects containing code are listed. For example, buttons that are only associated with a standard action are not returned."}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the ",(0,r.jsx)(t.em,{children:"aTable"})," parameter, the command returns the objects of the table forms associated with this table. If you omit this parameter, the command returns objects of the database project forms."]}),"\n",(0,r.jsxs)(t.p,{children:["You can limit this list of forms by passing a comparison string in the ",(0,r.jsx)(t.em,{children:"filter"}),' parameter: in this case, only forms whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the ',(0,r.jsx)(t.em,{children:"filter"})," parameter is ignored."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"stamp"})," parameter lets you only get the paths of methods modified after a specific point in time. As part of a version control system, this means that you can update only methods that were modified since the last backup.",(0,r.jsx)(t.br,{}),"\nHere is how it works: 4D maintains a counter of method modifications. Each time a method is created or saved again, this counter is incremented and its current value is stored in the internal stamp of the method.",(0,r.jsx)(t.br,{}),"\nIf you pass the ",(0,r.jsx)(t.em,{children:"stamp"})," parameter, the command only returns methods whose stamp is greater than or equal to the value passed in this parameter. Moreover, the command returns, in ",(0,r.jsx)(t.em,{children:"stamp"}),", the new current value of the modification counter, i.e. the highest value. If you save this value, you can pass it the next time this command is called so that you only get new or modified methods."]}),"\n",(0,r.jsxs)(t.p,{children:["If the command is executed from a component, it returns by default the paths of the component methods. If you pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter, the array contains the paths of the methods of the host database."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The command does not list objects of inherited forms or of subforms."]}),"\n",(0,r.jsx)(t.p,{children:'If the command detects a duplicated method name, the error -9802 is generated ("Object path not unique"). In this case, it is advisable to use the MSC in order to verify the database structure.'}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:'List of all objects of the "input" form for the [Employees] table. Note that table form methods (and project form methods) are processed as objects belonging to the form:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM([Employees];arrPaths;"input")\n\xa0\xa0// Contents of arrPaths (for example)\n\xa0\xa0// [tableForm]/input/{formMethod} -> Form method\n\xa0\xa0// [tableForm]/input/bOK -> Object method\n\xa0\xa0// [tableForm]/input/bCancel -> Object method\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:'List of objects of the "dial" project form:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(arrPaths;"dial")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.p,{children:'List of all objects of the "input" form for the [Employees] table from a component:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(([Employees];arrPaths;"input@";*)\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/form-get-names",children:"FORM GET NAMES"})}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1168"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},a=s.createContext(r);function o(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);