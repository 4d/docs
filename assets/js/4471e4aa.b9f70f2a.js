/*! For license information please see 4471e4aa.b9f70f2a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10038],{826784:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(474848),i=t(28453);const r={id:"propertiesDataSource",title:"Data Source"},l=void 0,o={id:"FormObjects/propertiesDataSource",title:"Data Source",description:"Automatic Insertion",source:"@site/versioned_docs/version-18/FormObjects/properties_DataSource.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesDataSource",permalink:"/docs/18/FormObjects/propertiesDataSource",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_DataSource.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"propertiesDataSource",title:"Data Source"},sidebar:"docs",previous:{title:"Crop",permalink:"/docs/18/FormObjects/propertiesCrop"},next:{title:"Display",permalink:"/docs/18/FormObjects/propertiesDisplay"}},a={},c=[{value:"Automatic Insertion",id:"automatic-insertion",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Choice List",id:"choice-list",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Choice List (static list)",id:"choice-list-static-list",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Current item",id:"current-item",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4},{value:"Current item position",id:"current-item-position",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4},{value:"Objects Supported",id:"objects-supported-4",level:4},{value:"Data Type",id:"data-type",level:2},{value:"Objects Supported",id:"objects-supported-5",level:4},{value:"Default (list of) values",id:"default-list-of-values",level:2},{value:"JSON Grammar",id:"json-grammar-5",level:4},{value:"Objects Supported",id:"objects-supported-6",level:4},{value:"Expression",id:"expression",level:2},{value:"JSON Grammar",id:"json-grammar-6",level:4},{value:"Objects Supported",id:"objects-supported-7",level:4},{value:"Master Table",id:"master-table",level:2},{value:"JSON Grammar",id:"json-grammar-7",level:4},{value:"Objects Supported",id:"objects-supported-8",level:4},{value:"Save as",id:"save-as",level:2},{value:"JSON Grammar",id:"json-grammar-8",level:4},{value:"Objects Supported",id:"objects-supported-9",level:4},{value:"Selected Items",id:"selected-items",level:2},{value:"JSON Grammar",id:"json-grammar-9",level:4},{value:"Objects Supported",id:"objects-supported-10",level:4},{value:"Selection Name",id:"selection-name",level:2},{value:"JSON Grammar",id:"json-grammar-10",level:4},{value:"Objects Supported",id:"objects-supported-11",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"automatic-insertion",children:"Automatic Insertion"}),"\n",(0,n.jsx)(s.p,{children:"When this option is selected, if a user enters a value that is not found in the choice list associated with the object, this value is automatically added to the list stored in memory. You can associate choice lists to objects using:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," JSON property"]}),"\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html",children:"OBJECT SET LIST BY NAME"})," or ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html",children:"OBJECT SET LIST BY REFERENCE"})," commands."]}),"\n",(0,n.jsx)(s.li,{children:"the form editor's Property List."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:['For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the ',(0,n.jsx)(s.strong,{children:"automatic insertion"}),' property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:']}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(270603).A+"",width:"485",height:"109"})}),"\n",(0,n.jsxs)(s.p,{children:["Naturally, the value entered must not belong to the list of ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#excluded-list",children:"excluded values"})," associated with the object, if one has been set."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"If the list was created from a list defined in Design mode, the original list is not modified."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["When the ",(0,n.jsx)(s.strong,{children:"automatic insertion"})," option is not selected (default), the value entered is stored in the object but not in the list in memory."]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"automaticInsertion"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"choice-list",children:"Choice List"}),"\n",(0,n.jsx)(s.p,{children:"Associates a choice list with an object. It can be a choice list name (a list reference) or a collection of default values."}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"choiceList"}),(0,n.jsx)(s.td,{children:"list, collection"}),(0,n.jsx)(s.td,{children:"A list of possible values"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"list"}),(0,n.jsx)(s.td,{children:"list, collection"}),(0,n.jsx)(s.td,{children:"A list of possible values (hierarchical lists only)"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/dropdownListOverview",children:"Drop-down List"})," -\n",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"choice-list-static-list",children:"Choice List (static list)"}),"\n",(0,n.jsx)(s.p,{children:"List of static values to use as labels for the tab control object."}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"labels"}),(0,n.jsx)(s.td,{children:"list, collection"}),(0,n.jsx)(s.td,{children:"A list of values to fill the tab control"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-2",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/tabControl",children:"Tab Control"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"current-item",children:"Current item"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Collection or entity selection list boxes"})}),"\n",(0,n.jsx)(s.p,{children:"Specifies a variable or expression that will be assigned the collection element/entity selected by the user. You must use an object variable or an assignable expression that accepts objects. If the user does not select anything or if you used a collection of scalar values, the Null value is assigned."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.'}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-3",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"currentItemSource"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Object expression"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-3",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"current-item-position",children:"Current item position"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Collection or entity selection list boxes"})}),"\n",(0,n.jsx)(s.p,{children:"Specifies a variable or expression that will be assigned a longint indicating the position of the collection element/entity selected by the user."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"if no element/entity is selected, the variable or expression receives zero,"}),"\n",(0,n.jsx)(s.li,{children:"if a single element/entity is selected, the variable or expression receives its location,"}),"\n",(0,n.jsx)(s.li,{children:"if multiple elements/entities are selected, the variable or expression receives the position of element/entity that was last selected."}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.'}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-4",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"currentItemPositionSource"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Number expression"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-4",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"data-type",children:"Data Type"}),"\n",(0,n.jsxs)(s.p,{children:["Please refer to ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," section."]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-5",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"default-list-of-values",children:"Default (list of) values"}),"\n",(0,n.jsxs)(s.p,{children:["List of values that will be used as default values for the list box column (array type only). These values are automatically available in the ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"array variable"})," associated with this column when the form is executed. Using the language, you can manage the object by referring to this array."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:['Do not make confusion between this property and the "',(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#default-list-of-values",children:"default value"}),'" property that allows to define a field value in new records.']}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You must enter a list of values. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(65613).A+"",width:"396",height:"335"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["You can also define a ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list",children:"choice list"})," with the list box column. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-5",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"values"}),(0,n.jsx)(s.td,{children:"collection"}),(0,n.jsx)(s.td,{children:'A collection of default values (strings), ex: "a", "b", "c", "d"'})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-6",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column (array type only)"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"expression",children:"Expression"}),"\n",(0,n.jsxs)(s.p,{children:["This description is specific to ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#selection-list-boxes",children:"selection"}),"\nand ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#collection-or-entity-selection-list-boxes",children:"collection"})," type list box columns. See also ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})})," section."]}),"\n",(0,n.jsx)(s.p,{children:"A 4D expression to be associated with a column. You can enter:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"simple variable"})," (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the ",(0,n.jsx)(s.code,{children:"On Display Detail"})," event."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"field"})," using the standard [Table]Field syntax (",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#selection-list-boxes",children:"selection type list box"}),"\nonly), for example: ",(0,n.jsx)(s.code,{children:"[Employees]LastName"}),". The following types of fields can be used:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"String"}),"\n",(0,n.jsx)(s.li,{children:"Numeric"}),"\n",(0,n.jsx)(s.li,{children:"Date"}),"\n",(0,n.jsx)(s.li,{children:"Time"}),"\n",(0,n.jsx)(s.li,{children:"Picture"}),"\n",(0,n.jsxs)(s.li,{children:["Boolean",(0,n.jsx)(s.br,{}),"\nYou can use fields from the Master Table or from other tables."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"4D expression"})," (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the ",(0,n.jsx)(s.code,{children:"On Display Detail"})," and ",(0,n.jsx)(s.code,{children:"On Data Change"})," events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.\nThe following expression types are supported:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"String"}),"\n",(0,n.jsx)(s.li,{children:"Numeric"}),"\n",(0,n.jsx)(s.li,{children:"Date"}),"\n",(0,n.jsx)(s.li,{children:"Picture"}),"\n",(0,n.jsx)(s.li,{children:"Boolean"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.",(0,n.jsx)(s.br,{}),"\nWhen using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html",children:"This"}),". ",(0,n.jsx)(s.code,{children:"This"})," is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use ",(0,n.jsx)(s.code,{children:"**This.\\<propertyPath>**"})," where ",(0,n.jsx)(s.code,{children:"**\\<propertyPath>**"}),' is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.\nIf you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use ',(0,n.jsx)(s.strong,{children:"This.value"})," as expression."]}),"\n",(0,n.jsxs)(s.p,{children:["If a ",(0,n.jsx)(s.a,{href:"/docs/18/Concepts/quick-tour#expressions",children:"non-assignable expression"})," is used (e.g. ",(0,n.jsx)(s.code,{children:'[Person]FirstName+" "+[Person]LastName'}),"), the column is never enterable even if the ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesEntry#enterable",children:"Enterable"})," property is enabled."]}),"\n",(0,n.jsxs)(s.p,{children:["If a field, a variable, or an assignable expression (",(0,n.jsx)(s.em,{children:"e.g. Person.lastName"}),") is used, the column can be enterable or not depending on the ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesEntry#enterable",children:"Enterable"})," property."]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-6",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"dataSource"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"A 4D variable, field name, or an arbitrary complex language expression."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-7",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"master-table",children:"Master Table"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Current selection list boxes"})}),"\n",(0,n.jsx)(s.p,{children:"Specifies the table whose current selection will be used. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table."}),"\n",(0,n.jsx)(s.p,{children:"All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form)."}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-7",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"table"}),(0,n.jsx)(s.td,{children:"number"}),(0,n.jsx)(s.td,{children:"Table number"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-8",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"save-as",children:"Save as"}),"\n",(0,n.jsx)(s.p,{children:"This property is available in the following conditions:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["a ",(0,n.jsx)(s.a,{href:"#choice-list",children:"choice list"})," is associated with the object"]}),"\n",(0,n.jsxs)(s.li,{children:["for ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/inputOverview",children:"inputs"})," and ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"list box columns"}),", a ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#required-list",children:"required list"})," is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Save as Value"}),' (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Save as Reference"}),": the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the ",(0,n.jsx)(s.em,{children:"itemRef"})," parameter of the ",(0,n.jsx)(s.code,{children:"APPEND TO LIST"})," or ",(0,n.jsx)(s.code,{children:"SET LIST ITEM"})," commands, or in the lists editor."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application."}),"\n",(0,n.jsx)(s.p,{children:"Using this property requires compliance with the following principles:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list)."}),"\n",(0,n.jsx)(s.li,{children:"Valid and unique references must be associated with list items."}),"\n",(0,n.jsxs)(s.li,{children:["If you use this property for a ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/dropdownListOverview",children:"drop-down list"}),", it must be associated with a field."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-8",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"saveAs"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:'"value", "reference"'})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-9",children:"Objects Supported"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/dropdownListOverview",children:"Drop-down List"})," - ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"selected-items",children:"Selected Items"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Collection or entity selection list boxes"})}),"\n",(0,n.jsx)(s.p,{children:"Specifies a variable or expression that will be assigned the elements or entities selected by the user."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"for a collection list box, you must use a collection variable or an assignable expression that accepts collections,"}),"\n",(0,n.jsx)(s.li,{children:"for an entity selection list box, an entity selection object is built. You must use an object variable or an assignable expression that accepts objects."}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.'}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-9",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"selectedItemsSource"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Collection expression"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-10",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"selection-name",children:"Selection Name"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Named selection list boxes"})}),"\n",(0,n.jsx)(s.p,{children:"Specifies the named selection to be used. You must enter the name of a valid named selection. It can be a process or interprocess named selection. The contents of the list box will be based on this selection. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Named selections are ordered lists of records. They are used to keep the order and current record of a selection in memory. For more information, refer to ",(0,n.jsx)(s.strong,{children:"Named Selections"})," section in the ",(0,n.jsx)(s.em,{children:"4D Language Reference manual"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-grammar-10",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Data Type"}),(0,n.jsx)(s.th,{children:"Possible Values"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"namedSelection"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Named selection name"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objects-supported-11",children:"Objects Supported"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/18/FormObjects/listboxOverview#overview",children:"List Box"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,s,t)=>{var n=t(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var n,r={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)l.call(s,n)&&!a.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:o.current}}s.Fragment=r,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},270603:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeUAAABtCAIAAAAQxu40AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAtlSURBVHhe7Z3PbyRHFYD9P+WUFf8H0h4R8oETN26x4MjFRuKyByQfE5koghAjFAfkJCgHJF+QEi2OTLwLq2w2rJ0ACwSb4dXPrp7unu0az4+uV9+np/XrquqxNG/qc0319M7ODAAASgBfAwCUAb4GUMX19fXHnzx89733j958myg9pI5STV9afA2gDPH1o8dfPP3y2h9DyUgdz//8xB/gawBlOF9L8scnX7sWKBp8DaCW6GvHKw/WErAx8DWAWvC1MvA1gFrwtTLwNYBaenx94nNhr63dRXE0u5zNDo867TZgY+BrALXM+9pq12v6aHZ40tLu0gEbo9/Xvz67+MEbf/j2T39HTCe+tfeLJeI7P/mVVNPXFSpj3teyuH4+u98R7h0DNka/r3//p7/xAaCpIfL95vZ/ufG9n33wo9c/8A8BldHdDzmdzS7PWraVFlloy7pbiF178U/8RTLM7oeY5Mx3uvGwMQZ97TOYDM7XX7y4zQo5RU70DwGV0Xu98fC5yU/DZoj41y+6+zapW5oOiZe43Qrfw9cbBF8Xg/P15y9uswJf10yvr01YNTtlRxFLyLLaezy5LNn1dRzvclgJO334vgC+Lgbn6yf/vM0KfF0zg75+MLt/5pfJqX9l6W18nVyWlBZ8vTG8pAO+NQFfF4Pz9V/+cZMV+LpmutcbUzW73Wdxrt+2jpqOlyWTHRJ8vRm8qvtkLeDrYnC+vvz7TVbg65rpvd7oSS4knoari3FT2+1xi7VPWV9vnCFZC/i6GJyvL76+yQp8XTML9kNipP5dLmBj4OtiwNeQC75WBr4uBufrT7+6yQp8XTP4Whn4uhicrx9e32QFvq6ZOV9D6eDrYuj1tbuUPEc6AF/XDL5WBr4uBufr3z65nQsv6cBcL76uGXytDHxdDM7XJ3+96YZX9c7OXLsEvq4ZfK0MfF0MC3wt0StrCXxdM87XfN+uDga/bxdfTxDn6988/m9W4OuaEV8/e/b88dMrQkdINX1p8fXEcb5+59E3WYGva0Z8/V3QhS8tvp44zte//Ow/WYGva8b52h9A+eDrYnC+fuvi31mBr2sGXysDXxeD8/XPP/1XVuDrmsHXysDXxeB8/cb5i6zA1zWDr5WBr4sBX0Mufb4+3nWf1be8un/um6EEBn3N9+1ODefr3Pj+4Yc/fP1D/xBQGQO+xtKl0u/rzz6/+ujRV8SkQny9RPz4rY+kmr6uUBn4Whn9vpZW0ISvK1TGOF+blt3dV3d2do/T7RJz5Hv3931rcub5vpxh8QM7DbBy0mq2fO0zKB+qWS0v3b+2ZjUtnSW31bRps+OdgU3qMuPm9ilxvEk7jwarAV/rh2pWy/j1ddNi/WxxjWlvyI2u24voZnFtYYW9HvC1fqhmtWT7uhGxZLm+RtJrB1/rh2pWS7avY2r867I+XyfdAemaa4HVg6/1QzWrJX8/xIjYYC5AusZeX7vc49fV4VQDS+31gK/1QzWrpc/XUDD4Wj+91ZSZDMrwpU2QRuayJsb7unn7I8y9oYIpM+Trjz95+O577x+9+TZRekgdpZq+tAn4WhlZvsbSRTLka74pSg1z3xQVwdfKwNf6WeBrfwDlg69r4C6+Ni3cxjp9tujrvb09n8Gawdc1kOXrBmtW09JZcltNmzY73hnYpC7r/dhmaOA21vWwRV/LS8BnsGbwdQ1k+XpOp+0W62eLa0x7Q2503V5Ep5/ZFFhhrwF8XQP4ugZW5OtGxJLl+hpJr5exvpYqeXIqcn5wb+feQeuF0SCP5TNYM/i6Blbk65ga/7osHd/THZCuuRZYMaN8bbQbNH1+cLCiP6H4emPg6xpYka+tiA3cxjo9RvlayjK4Sl4eKanPYM3k+TqddHPTGibMeF9DqYzytf072ja2VfixrLsNsavz9zaa3iYHvts1SWLHwNrJ8HX7Xe7xLqukYsDX+hnna8HsiQhh+lozO+/2bFK3Ne2TcLJJTYavN8ZoXxtbY+hCwdf6Ge1ri5W2nc9RxAY58JPcatnS9XUc73MZ5I7hLrinew7fFxjr6wW6bjZJ3AApYrzBwuT7x36AHMexwxud9pTWHRjt3237/ckwDnytnzxfO2ObWSXzKfo3tIWfNsPXm8NZL+JbEzJ8HSwZnOuOE336OyGkJWlKB8Z2kzcGtsTHseNcZxwmSRiepDAWfK2fUb4+PkjVbL1rJpkXcNS0tLmmOKppikmTy4R1x3B35Ml0+OM2y66vpVJWr3HB7DBDQlc6bEEuqce19A6TxP127o5bBnytn1G+TmZbmM7Scm93111ujFPceNpgevD1plnwfI7ev5bSpKYMh/MeF9KRL8ub0yVzvf2nuO44CLLA1/oZ5+suMseif5cEX2+M0b52K+mo5mhSSRq/WvqF25/HNvPoLhs4xag6fuoX8sDX+sHXNTDe1wapbaARpxW5x/h8QLj9eTj55XdgmIP5pTyMA1/rB1/XQJ6vt4q8sND1cuBr/Szr6xXA/6e6MYrxtdkPiUttyCPT1+k7Jp70Qtiir2FjlOBrpw/EsTw5vjbPdroJxXuaMsDXNVDQfggszXhfG1tj6BLB1zWAr2tgtK8X6LrZJHEDzLVgbmOdDgt8zfft6oDv262EHF8HSwbnuuNEn9zGOkmGfP3s2fPHT68IHSHV9KVNwNfKyPF1y5NBr3HB7DBDQlc6bEEuqce19A6TxP12bmPNhhlbLfhaGaN93dKoEA7nPS70Cncgb06XzPX2n+K64yAYDzO2WvC1Msb72q2ko5qjSSVp/GrpF25/HtvMo7ts4BSjam5jXQZmbLXga2Vk+Nog/gw04rQi92Tvh4STuY11bTBjq6Xr6zDd4qwaojX1YCJk+nqryCsIXS8Bvq6WvvV1FPFiI+PrKVKOr81+CK+fZcDX1YKvlVGEr92eCa+eJcHX1TLsa/k3YN+0Nsf+PawbZqZe86YWh2+bInwNd4JqVkv++rrTKz+DsJMUtgO+1g/VrJYMX8uRZ643WppbH7YPvtYP1ayWsb5utj3iZaKm1zXFDtgi+Fo/VLNaxvo6pkbcnV6jam59mAT4Wj9Us1q6vk4/fy1KNpiFtfG0of82CDuSresJgK/1QzWrpW99vQzia3Q9BfC1fqhmtazG12xdT4axvk7fRi2k9TYKpgC+rpY7+9rtkzCjp8JYXyciXmxkfD058HW1rGo/BCYCvtYPM7Za8LUycn0t/wbsBYjm2F+PcMPM26jmAgUO3yrM2GpJff3KA6L4yPV1mqR0euVnEHaSwhbA19WCr5XFnX0tR5653mhpbmPdMvi6WvC1sribr5ttj/iRn6bXNcUO2Bb4ulrwtbK4m69jasTd6TWq5jbW7YOvqwVfK4uxvk4/fy1KNpiFtfG0gdtYJwy+rpZ+X5+4BsNrsfGlcTS7nM0OjzrtxAZjrK+XQ3yNrrcOvq6WHl9b7XpNH80OT0I7UUKs09dsXU8DfF0tPb6WxfXV7H6iAKKgWJOv3T4Jtp4E+LpaevdDTmezy7Pm0LXIQlvW3ULseu3CHgsXyTC7H2KSM98591DEWmNNvoYJQTWrZeh64+GVaTkNmyHiX7/o7tukbmk6JF7idis8YxOcuFvga/1QzWoZ8rUJq2an7ChiCVlWe48nlyW7vo7j05xYd+Br/VDNalnk6wez+2d+mZw6V5bextfJZUlpwdcTCXytH6pZLb3XG1M1u91nca7fho6ajpclkx0SfL31wNf6oZrVMnS90ZNcSDwNVxfjprbb4xZrn7K+nkwM+ho04esKlbF4PyQGzi0l0rnc+BoAFICvlQW+BlALvlYW+BpALSN9TZQS+BpALamvQQH4GkAt+FoZ+BpALfhaGfgaQC34Whn4GkAtztegCV9afA0AUAr4GgCgDPA1AEAJzGb/B2jJkPllaiPlAAAAAElFTkSuQmCC"},65613:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var n=t(296540);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);