"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79194"],{740817:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/relate-one","title":"RELATE ONE","description":"RELATE ONE ( manyTable | Field {; choiceField} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/relate-one.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one","permalink":"/docs/commands/relate-one","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-one","title":"RELATE ONE","slug":"/commands/relate-one","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE MANY SELECTION","permalink":"/docs/commands/relate-many-selection"},"next":{"title":"RELATE ONE SELECTION","permalink":"/docs/commands/relate-one-selection"}}'),i=t("785893"),r=t("250065");let d={id:"relate-one",title:"RELATE ONE",slug:"/commands/relate-one",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RELATE ONE"})," ( manyTable | Field {; ",(0,i.jsx)(n.em,{children:"choiceField"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"manyTable | Field"}),(0,i.jsx)(n.td,{children:"Table, Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table for which to establish all automatic relations, or Field with manual relation to one table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"choiceField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Choice field from the one table"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RELATE ONE"})," has two forms."]}),"\n",(0,i.jsxs)(n.p,{children:["The first form, ",(0,i.jsx)(n.strong,{children:"RELATE ONE"}),"(manyTable), establishes all automatic Many-to-One relations for ",(0,i.jsx)(n.em,{children:"manyTable"})," in the current process. This means that for each field in ",(0,i.jsx)(n.em,{children:"manyTable"})," that has an automatic Many-to-One relation, the command will select the related record in each related table. This changes the current record in the related tables for the process."]}),"\n",(0,i.jsxs)(n.p,{children:["The second form, ",(0,i.jsx)(n.strong,{children:"RELATE ONE"}),"(manyField{;choiceField}), looks for the record related to ",(0,i.jsx)(n.em,{children:"manyField"}),". The relation does not need to be automatic. If it exists, ",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," loads the related record into memory, making it the current record and current selection for its table."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"choiceField"})," parameter must be a field in the related table. It can only be an Alpha, Text, Numeric, Date, Time, or Boolean field. More specifically, it cannot be a Picture or BLOB type field."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"choiceField"})," is specified and more than one record is found in the related table, ",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," displays a list of records that match the value in ",(0,i.jsx)(n.em,{children:"manyField"})," so that the user can select a record. In this list, the left column displays related field values, and the right column displays ",(0,i.jsx)(n.em,{children:"choiceField"})," values."]}),"\n",(0,i.jsxs)(n.p,{children:["More than one record may be found if ",(0,i.jsx)(n.em,{children:"manyField"})," ends with the wildcard character (@). If there is only one match, the list does not appear."]}),"\n",(0,i.jsx)(n.p,{children:"In the screen below, a record is being entered and a selection list is displayed in the foreground."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(252235).Z+"",width:"887",height:"528"})}),"\n",(0,i.jsx)(n.p,{children:"The following command is used to make the selection list appear:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Personnel]Company;[Companies]Region)\n"})}),"\n",(0,i.jsx)(n.p,{children:"A user entered LLC@ to see a list of companies whose names begin with LLC, as well as their region."}),"\n",(0,i.jsxs)(n.p,{children:["Specifying ",(0,i.jsx)(n.em,{children:"choiceField"})," is the same as specifying a wildcard choice when establishing the table relation. For information about specifying a wildcard choice, refer to the ",(0,i.jsx)(n.em,{children:"4D Design Reference"})," manual."]}),"\n",(0,i.jsx)(n.h5,{id:""}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s say you have an ",(0,i.jsx)(n.em,{children:"[Invoice]"})," table related to a ",(0,i.jsx)(n.em,{children:"[Customers]"})," table with two non-automatic relations. One relation is from ",(0,i.jsx)(n.em,{children:"[Invoice]Bill to"})," to ",(0,i.jsx)(n.em,{children:"[Customers]Number"}),", and the other relation is from ",(0,i.jsx)(n.em,{children:"[Invoice]Ship to"})," to ",(0,i.jsx)(n.em,{children:"[Customers]Number"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(878287).Z+"",width:"313",height:"232"})}),"\n",(0,i.jsx)(n.p,{children:'Here is the form for the [Invoice] table displaying the "Bill to" and "Send to" information:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(642371).Z+"",width:"682",height:"460"})}),"\n",(0,i.jsxs)(n.p,{children:["Since both relations are to the same table, ",(0,i.jsx)(n.em,{children:"[Customers]"}),", you cannot obtain the billing and shipment information at the same time. Therefore, displaying both addresses in a form should be performed using variables and calls to ",(0,i.jsx)(n.strong,{children:"RELATE ONE"}),". If the ",(0,i.jsx)(n.em,{children:"[Customers]"})," fields were displayed instead, data from only one of the relations would be displayed."]}),"\n",(0,i.jsxs)(n.p,{children:["The following two methods are the object methods for the ",(0,i.jsx)(n.em,{children:"[Invoice]Bill to"})," and ",(0,i.jsx)(n.em,{children:"[Invoice]Ship to"})," fields. They are executed when the fields are entered."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is the object method for the ",(0,i.jsx)(n.em,{children:"[Invoice]Bill to"})," field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Invoice]Bill to)\n\xa0vAddress1:=[Customers]Address\n\xa0vCity1:=[Customers]City\n\xa0vState1:=[Customers]State\n\xa0vZIP1:=[Customers]ZIP\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the object method for the ",(0,i.jsx)(n.em,{children:"[Invoice]Ship to"})," field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Invoice]Ship to)\n\xa0vAddress2:=[Customers]Address\n\xa0vCity2:=[Customers]City\n\xa0vState2:=[Customers]State\n\xa0vZIP2:=[Customers]ZIP\n"})}),"\n",(0,i.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsxs)(n.p,{children:["If the command has been executed correctly and if the related records have been loaded, the OK system variable is set to 1. If the user clicked on ",(0,i.jsx)(n.strong,{children:"Cancel"})," in the record selection dialog box (that appears when the related record has been modified), the OK variable is set to 0."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/old-related-one",children:"OLD RELATED ONE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/relate-many",children:"RELATE MANY"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"42"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current record"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current selection"}),(0,i.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},252235:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2287719.en-6e09cc9b4743086722961e64980d580b.png"},878287:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2287721.en-495f83a4d066dd485334d9285e0e856d.png"},642371:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2287723.en-67f2b7a642ceea2256f7896cbcd6065e.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);