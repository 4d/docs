"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66595"],{13032:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-subrecord-key","title":"Get subrecord key","description":"Get subrecord key ( idField ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-subrecord-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-subrecord-key","permalink":"/docs/20-R7/commands/get-subrecord-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-subrecord-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-subrecord-key","title":"Get subrecord key","slug":"/commands/get-subrecord-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Subrecords","permalink":"/docs/20-R7/category/subrecords"},"next":{"title":"System Documents","permalink":"/docs/20-R7/category/system-documents"}}'),r=t("785893"),i=t("250065");let o={id:"get-subrecord-key",title:"Get subrecord key",slug:"/commands/get-subrecord-key",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Assigning values to the id_added_by_converter field",id:"assigning-values-to-the-id_added_by_converter-field",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get subrecord key"})," ( ",(0,r.jsx)(n.em,{children:"idField"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'"Subtable Relation" or "Longint" type field of a former subtable relation'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Internal key of relation"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:'The Get subrecord key command facilitates the migration of 4D code using converted subtables to standard code for working with tables.Beginning with version 11 of 4D, subtables are not supported. When a older database is converted, any existing subtables are transformed into standard tables that are linked with the original tables by an automatic relation. The former subtable becomes the Many table and the original table is the One table. In the One table, the former subtable field is transformed into a special field of the "Subtable Relation" type and in the Many field, a special "Subtable Relation" type field is added named \u201Cid_added_by_converter\u201D.'}),"\n",(0,r.jsx)(n.p,{children:"This allows converted databases to function but we strongly recommend that you replace any subtable mechanisms in your converted databases by those used for standard tables."}),"\n",(0,r.jsx)(n.p,{children:"The first step in this process consists in deleting the special automatic relations, which permanently disables the mechanisms inherited from subtables. After this you need to rewrite the associated code. The Get subrecord key command accompanies this rewriting by returning the internal ID used by the relation. This internal ID makes the actual relation unnecessary and you can then work with the selection of the former subtable even when the relation is no longer present."}),"\n",(0,r.jsx)(n.p,{children:"Let's look for example at the following converted structure:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(669056).Z+"",width:"440",height:"360"})}),"\n",(0,r.jsx)(n.p,{children:"In 4D, the following code still works but it must be updated:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL SUBRECORDS([Employees]Children)\n\xa0$total:=Records in subselection([Employees]Children)\n\xa0vFirstnames:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vFirstnames:=vFirstnames+[Employees]Children\'FirstName+" "\n\xa0\xa0\xa0\xa0NEXT SUBRECORD([Employees]Children)\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can now replace this code with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Employees_Children];[Employees_Children]id_added_by_converter=Get subrecord key([Employees]Children))\n\xa0$total:=Records in selection([Employees_Children])\n\xa0vFirstnames:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vFirstnames:=vFirstnames+[Employees_Children]FirstName+" "\n\xa0\xa0\xa0\xa0NEXT RECORD(Employees_Children)\n\xa0End for\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Get subrecord key returns 0 if there is no current recorded loaded when it is executed."]}),"\n",(0,r.jsx)(n.p,{children:"The second piece of code has the advantage of using standard 4D commands and it works the same way whether the relation is present or not. When you remove the relation, the command simply returns the key value stored in the Longint field."}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"idField"})," parameter, the command accepts either a field of the Subtable Relation type (if the relation still exists) or of the Longint type (if the relation has been removed). In any other case, an error is generated."]}),"\n",(0,r.jsx)(n.p,{children:"This lets you write the transition code. During the final stage of upgrading the application, you can remove the calls to this command."}),"\n",(0,r.jsx)(n.h4,{id:"assigning-values-to-the-id_added_by_converter-field",children:"Assigning values to the id_added_by_converter field"}),"\n",(0,r.jsxs)(n.p,{children:['Starting with 4D v14 R3, you can assign a value to the "id_added_by_converter" field. Previously, this value could only be assigned by 4D itself, which forced developers to use obsolete commands such as ',(0,r.jsx)(n.em,{children:"_o_CREATE SUBRECORD"})," to be able to add records into converted subtables."]}),"\n",(0,r.jsx)(n.p,{children:'Thanks to this possibility, you can convert former databases containing subtables progressively: at first, you can keep the special "Subtable relation", while adding or modifying related records as if they were standard ones. Then, once all your methods are up to date, you can replace this special relation with a standard one, without having to change your code.'}),"\n",(0,r.jsx)(n.p,{children:"For example, with the structure above you can write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Employees])\n\xa0[Employees]LastName:="Jones"\n\xa0CREATE RECORD([Employees_Children])\n\xa0[Employees_Children]FirstName:="Natacha"\n\xa0[Employees_Children]BirthDate:=!12/24/2013!\n\xa0[Employees_Children]id_added_by_converter:=Get subrecord key([Employees]Children)\n\xa0SAVE RECORD([Employees_Children])\n\xa0SAVE RECORD([Employees]\n'})}),"\n",(0,r.jsx)(n.p,{children:"This code will work with either a special relation or a standard one."}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1137"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},669056:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict473713.en-a08eee8e9d2820c5ac071a522974824f.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);