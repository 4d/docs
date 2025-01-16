"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81053"],{925037:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","description":"DISTINCT ATTRIBUTE PATHS ( objectField ; pathArray )","source":"@site/versioned_docs/version-20-R7/commands-legacy/distinct-attribute-paths.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-paths","permalink":"/docs/20-R7/commands/distinct-attribute-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-paths.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","slug":"/commands/distinct-attribute-paths","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM ARRAY","permalink":"/docs/20-R7/commands/delete-from-array"},"next":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/20-R7/commands/distinct-attribute-values"}}'),r=t("785893"),i=t("250065");let d={id:"distinct-attribute-paths",title:"DISTINCT ATTRIBUTE PATHS",slug:"/commands/distinct-attribute-paths",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," ( ",(0,r.jsx)(n.em,{children:"objectField"})," ; ",(0,r.jsx)(n.em,{children:"pathArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Indexed object field"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pathArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array to receive list of distinct paths"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," command returns the list of distinct paths found in the indexed object field you passed in ",(0,r.jsx)(n.em,{children:"objectField"})," for the current selection of the table to which this field belongs."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"objectField"}),", you must pass an Object type field that is indexed; otherwise, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["After the call, the size of ",(0,r.jsx)(n.em,{children:"pathArray"}),' is equal to the number of distinct paths found in the selection. Paths to nested object attributes are returned using the standard dot notation, for example "company.address.number". Keep in mind that object attribute names are case-sensitive. The command does not change the current selection or the current record.']}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"pathArray"}),", the list of distinct paths is returned in alphabetical (diacritic) order."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Records with an undefined value in the ",(0,r.jsx)(n.em,{children:"objectField"})," are not taken into account."]}),"\n",(0,r.jsx)(n.li,{children:"Attribute paths created during a transaction are taken into account by the command. It is important to note that these paths are kept in the index of the object field even if the transation has been canceled."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Your database contains a [Customer]full_Data (indexed) object field with 15 records:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(386601).Z+"",width:"892",height:"416"})}),"\n",(0,r.jsx)(n.p,{children:"If you execute this code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(aTPaths;0)\n\xa0ALL RECORDS([Customer])\n\xa0DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"aTPaths"})," array receives the following elements:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Element"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'"age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Children"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Children[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Children[].age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Children[].Name"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:'"Children.length"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:'"client"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:'"FirstName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:'"LastName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:'"Sex"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:'"telephone"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:'"telephone[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:'"telephone.length"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' "length" is a ',(0,r.jsx)(n.em,{children:"virtual property"})," that is automatically available for all array type attributes. It provides the size of the array, i.e. the number of elements, and can be used in queries. For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Using the .length virtual property"})," paragraph."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/distinct-attribute-values",children:"DISTINCT ATTRIBUTE VALUES"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1395"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},386601:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);