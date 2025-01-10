"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96538"],{837077:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"FormObjects/propertiesRangeOfValues","title":"Range of Values","description":"Default value","source":"@site/versioned_docs/version-20-R7/FormObjects/properties_RangeOfValues.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesRangeOfValues","permalink":"/docs/FormObjects/propertiesRangeOfValues","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_RangeOfValues.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"propertiesRangeOfValues","title":"Range of Values"},"sidebar":"docs","previous":{"title":"Print","permalink":"/docs/FormObjects/propertiesPrint"},"next":{"title":"Resizing Options","permalink":"/docs/FormObjects/propertiesResizingOptions"}}'),r=n("785893"),i=n("250065");let l={id:"propertiesRangeOfValues",title:"Range of Values"},a=void 0,o={},d=[{value:"Default value",id:"default-value",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Excluded List",id:"excluded-list",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Required List",id:"required-list",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4}];function c(e){let t={a:"a",blockquote:"blockquote",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"default-value",children:"Default value"}),"\n",(0,r.jsxs)(t.p,{children:["You can assign a default value to be entered in an input object. This property is useful for example when the input ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesObject#variable-or-expression",children:"data source"})," is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesEntry#enterable",children:"non-enterable"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The default value can only be used if the ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesObject#expression-type",children:"data source type"})," is:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"text/string"}),"\n",(0,r.jsx)(t.li,{children:"number/integer"}),"\n",(0,r.jsx)(t.li,{children:"date"}),"\n",(0,r.jsx)(t.li,{children:"time"}),"\n",(0,r.jsx)(t.li,{children:"boolean"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Stamp"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"#D"}),(0,r.jsx)(t.td,{children:"Current date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"#H"}),(0,r.jsx)(t.td,{children:"Current time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"#N"}),(0,r.jsx)(t.td,{children:"Sequence number"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029",children:"Autoincrement"})," paragraph."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:['Do not make confusion between this property and the "',(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesDataSource#default-list-of-values",children:"default values"}),'" property that allows to fill a list box column with static values.']}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultValue"}),(0,r.jsx)(t.td,{children:"string, number, date, time, boolean"}),(0,r.jsx)(t.td,{children:'Any value and/or a stamp: "#D", "#H", "#N"'})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"excluded-list",children:"Excluded List"}),"\n",(0,r.jsx)(t.p,{children:"Allows setting a list whose values cannot be entered in the object. If an excluded value is entered, it is not accepted and an error message is displayed."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"If a specified list is hierarchical, only the items of the first level are taken into account."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"excludedList"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsx)(t.td,{children:"A list of values to be excluded."})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"required-list",children:"Required List"}),"\n",(0,r.jsx)(t.p,{children:"Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management."}),"\n",(0,r.jsxs)(t.p,{children:["Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list to the ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," property.\nHowever, unlike the ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," and Required List properties, the Required List property has priority."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"If a specified list is hierarchical, only the items of the first level are taken into account."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"requiredList"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsx)(t.td,{children:"A list of mandatory values."})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"objects-supported-2",children:"Objects Supported"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);