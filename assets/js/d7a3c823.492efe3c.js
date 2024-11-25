"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41878"],{190629:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var n=JSON.parse('{"id":"FormObjects/propertiesAction","title":"Action","description":"---","source":"@site/versioned_docs/version-20-R6/FormObjects/properties_Action.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesAction","permalink":"/docs/20-R6/FormObjects/propertiesAction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Action.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"propertiesAction","title":"Action"},"sidebar":"docs","previous":{"title":"Form object JSON property list","permalink":"/docs/20-R6/FormObjects/propertiesReference"},"next":{"title":"Animation","permalink":"/docs/20-R6/FormObjects/propertiesAnimation"}}'),s=t("785893"),o=t("250065");let i={id:"propertiesAction",title:"Action"},d=void 0,c={},a=[{value:"Draggable",id:"draggable",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"See also",id:"see-also",level:4},{value:"Droppable",id:"droppable",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also-1",level:4},{value:"Execute object method",id:"execute-object-method",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4},{value:"Movable Rows",id:"movable-rows",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4},{value:"Objects Supported",id:"objects-supported-4",level:4},{value:"Multi-selectable",id:"multi-selectable",level:2},{value:"JSON Grammar",id:"json-grammar-5",level:4},{value:"Objects Supported",id:"objects-supported-5",level:4},{value:"Sortable",id:"sortable",level:2},{value:"JSON Grammar",id:"json-grammar-6",level:4},{value:"Objects Supported",id:"objects-supported-6",level:4},{value:"Standard action",id:"standard-action",level:2},{value:"JSON Grammar",id:"json-grammar-7",level:4},{value:"Objects Supported",id:"objects-supported-7",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"draggable",children:"Draggable"}),"\n",(0,s.jsx)(r.p,{children:"Control whether and how the user can drag the object. By default, no drag operation is allowed."}),"\n",(0,s.jsx)(r.p,{children:"Two drag modes are available:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Custom"}),": In this mode, any drag operation performed on the object triggers the ",(0,s.jsx)(r.code,{children:"On Begin Drag"})," form event in the context of the object. You then manage the drag action using a method.",(0,s.jsx)(r.br,{}),"\nIn custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the ",(0,s.jsx)(r.code,{children:"Pasteboard"})," theme."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Automatic"}),": In this mode, 4D ",(0,s.jsx)(r.strong,{children:"copies"})," text or pictures directly from the form object. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:t(582948).Z+"",width:"421",height:"63"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:t(652932).Z+"",width:"421",height:"27"}),"\nIn this mode, the ",(0,s.jsx)(r.code,{children:"On Begin Drag"}),' form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the ',(0,s.jsx)(r.strong,{children:"Alt"})," (Windows) or ",(0,s.jsx)(r.strong,{children:"Option"})," (macOS) key during the action. This option is not available for pictures."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For more information, refer to ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Drag and Drop"})," in the ",(0,s.jsx)(r.em,{children:"4D Language Reference"})," manual."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dragging"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:'"none" (default), "custom", "automatic" (excluding list box)'})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/writeProAreaOverview",children:"4D Write Pro areas"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})]}),"\n",(0,s.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"#droppable",children:"Droppable"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"droppable",children:"Droppable"}),"\n",(0,s.jsx)(r.p,{children:"Control whether and how the object can be the destination of a drag and drop operation."}),"\n",(0,s.jsx)(r.p,{children:"Two drop modes are available:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Custom"}),": In this mode, any drop operation performed on the object triggers the ",(0,s.jsx)(r.code,{children:"On Drag Over"})," and ",(0,s.jsx)(r.code,{children:"On Drop"})," form events in the context of the object. You then manage the drop action using a method.",(0,s.jsx)(r.br,{}),"\nIn custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the ",(0,s.jsx)(r.code,{children:"Pasteboard"})," theme."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Automatic"}),": In this mode, 4D automatically manages \u2014 if possible \u2014 the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The ",(0,s.jsx)(r.code,{children:"On Drag Over"})," and ",(0,s.jsx)(r.code,{children:"On Drop"})," form events are NOT generated. On the other hand, the ",(0,s.jsx)(r.code,{children:"On After Edit"})," (during the drop) and ",(0,s.jsx)(r.code,{children:"On Data Change"})," (when the object loses the focus) events are generated."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For more information, refer to ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Drag and Drop"})," in the ",(0,s.jsx)(r.em,{children:"4D Language Reference"})," manual."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dropping"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:'"none" (default), "custom", "automatic" (excluding list box)'})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/writeProAreaOverview",children:"4D Write Pro areas"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})]}),"\n",(0,s.jsx)(r.h4,{id:"see-also-1",children:"See also"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"#draggable",children:"Draggable"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"execute-object-method",children:"Execute object method"}),"\n",(0,s.jsxs)(r.p,{children:["When this option is enabled, the object method is executed with the ",(0,s.jsx)(r.code,{children:"On Data Change"})," event ",(0,s.jsx)(r.em,{children:"at the same moment"})," the user changes the value of the indicator. When the option is disabled, the method is executed ",(0,s.jsx)(r.em,{children:"after"})," the modification."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"continuousExecution"}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-2",children:"Objects Supported"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/progressIndicator",children:"Progress bar"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/stepper",children:"Stepper"})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"method",children:"Method"}),"\n",(0,s.jsx)(r.p,{children:'Reference of a method attached to the object. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method\u20144D calls it automatically when an event involves the object to which the object method is attached.'}),"\n",(0,s.jsx)(r.p,{children:"Several types of method references are supported:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["a standard object method file path, i.e. that uses the following pattern:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:"ObjectMethods/objectName.4dm"}),(0,s.jsx)(r.br,{}),"\n... where ",(0,s.jsx)(r.code,{children:"objectName"})," is the actual ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#object-name",children:"object name"}),'. This type of reference indicates that the method file is located at the default location ("sources/forms/',(0,s.jsx)(r.em,{children:"formName"}),'/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)']}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["a project method name: name of an existing project method without file extension, i.e.:\n",(0,s.jsx)(r.code,{children:"myMethod"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:"../../CustomMethods/myMethod.4dm"}),"\nYou can also use a filesystem:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:"/RESOURCES/Buttons/bOK.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-3",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"method"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"Object method standard or custom file path, or project method name"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-3",children:"Objects Supported"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormEditor/forms",children:"Forms"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/subformOverview",children:"Subform"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/tabControl",children:"Tab control"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"movable-rows",children:"Movable Rows"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Array type list boxes"})}),"\n",(0,s.jsxs)(r.p,{children:["Authorizes the movement of rows during execution. This option is selected by default. It is not available for ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#selection-list-boxes",children:"selection type list boxes"})," nor for ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesHierarchy#hierarchical-list-box",children:"list boxes in hierarchical mode"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-4",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"movableRows"}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-4",children:"Objects Supported"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"multi-selectable",children:"Multi-selectable"}),"\n",(0,s.jsxs)(r.p,{children:["Allows the selection of multiple records/options in a ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listOverview",children:"hierarchical list"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-5",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"selectionMode"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:'"multiple", "single", "none"'})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-5",children:"Objects Supported"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listOverview",children:"Hierarchical List"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"sortable",children:"Sortable"}),"\n",(0,s.jsxs)(r.p,{children:["Allows sorting column data by clicking a ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"listbox"})," header. This option is selected by default. Picture type arrays (columns) cannot be sorted using this feature."]}),"\n",(0,s.jsx)(r.p,{children:"In list boxes based on a selection of records, the standard sort function is available only:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["When the data source is ",(0,s.jsx)(r.em,{children:"Current Selection"}),","]}),"\n",(0,s.jsx)(r.li,{children:"With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type)."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns."}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-6",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortable"}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-6",children:"Objects Supported"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"standard-action",children:"Standard action"}),"\n",(0,s.jsxs)(r.p,{children:["Typical activities to be performed by active objects (",(0,s.jsx)(r.em,{children:"e.g."}),", letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"Standard actions"})," section of the ",(0,s.jsx)(r.em,{children:"Design Reference"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed."}),"\n",(0,s.jsxs)(r.p,{children:["You can also set this property using the ",(0,s.jsx)(r.code,{children:"OBJECT SET ACTION"})," command."]}),"\n",(0,s.jsx)(r.h4,{id:"json-grammar-7",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data Type"}),(0,s.jsx)(r.th,{children:"Possible Values"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"action"}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsxs)(r.td,{children:["The name of a ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"valid standard action"}),"."]})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objects-supported-7",children:"Objects Supported"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/dropdownListOverview",children:"Drop-down List"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/picturePopupMenuOverview",children:"Picture Pop-up Menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/20-R6/FormObjects/tabControl",children:"Tab control"})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},582948:function(e,r,t){t.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAA/CAIAAADPOkBoAAADZElEQVR42u3csW7TQBwH4BjxBiCYmGHuyGt06Bt06TtUWVgRCxMPQxkoAxIzXelE1YrSFwhGFpY520ma5u6c3PepipKLk1wq99f/+eyrrn9+nwEU4FHuDgAkIu+AUsg7oBTyDiiFvANK8Th3B1Y4+/gpdxdI4fDo+ObqIncvQna/PdDdtaaed7XPX77m7gJxzeenubswyu6304Jdawfyrvb23YeDk/OUn/jt/evcX7ogd7eXubuwTL375e4CGwp2LcfvgFI8KO+ePn+1ZmNKSjO2rqqq3F1gC8K8q9Oq+zN7cH5tK/76Kbb1XBOUsN8Gjt9d/39F7fWmF9hmL/TWJ+mgBKvnK+rYaiKvm19BCA5GW/9VY++8joOT8zqV2lmL4H67Tbt9d4Puw260tRv0nwL2z7rzs0E2dR/2n0r8HQZDcNBYCAIlGMi7JXXcdkV9c4DA6uN3rezH49ohbb9MW/9NDFqhWPc433ia5djggbwlDGChWBuefzdW692rBkxWMI7loFoPirJufVcXd2PH9bpPde8Hd7ZSHvYHs03L2JbB/WDjfmHYbhbnt00pqqpaLBa5e0EozLt+KrUtaz61ZPuVn7WOfhgFLcFZJksal7wnPJDImyDXz0IUddi5Cm1qdmB9lPn89O728uzNi5QfOvEVO0hss0qtiTxV3nRMPe8Oj45zd4GiNf9uN355E3m/f/3I/T34q5rmWSYwBU+evdzshUFZp8rLa5fWN4ZctrXEfFPlqS2yM18BKdSRl/0KJeQdJCLyspN3kI7Iy0veQQrVP7MJLL1RLPMVEFF3ZtZ8RXbqO4ilmZNtajoj2SmQdxCFE1AmSN5BFN2FM5R4EyHvYPtUdtNkvgJiqau5dsmA5rZdNKXbLhyTUd9BLN1QG2t3XW1K6juIpYmzm6uLpoJrU69pqW/Vd4nJO4gliLN+rrWBmLunpZB3EMtYnHVnaQfXQFbxReL4HcSyZEn3xbjcvd5n8g5iMR0xNcazEEswDzs4VzsTiwmp7yCWwbATbRmZC4fUmvOQZ73JirbRX2UkxrOQTRtwir40jGeBUsg7yExxl4y8A0rh+B1kMHYeMlGZCQJKYTwLlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1Qij9Ru9BheP253gAAAABJRU5ErkJggg=="},652932:function(e,r,t){t.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAAbCAIAAABTBwdIAAAB/ElEQVR42u3cwU3DMBSAYYLYAAQjwD49dIOOUWUCxJ1hgAPiwALlzKmoSBULlEiVrPQ5dt008bPj/zsljhMe6OnZTkKqzXp1AQAFuNQOAAAiod4BKAX1DkAprrQD8Hl9edMOATHM5ovfny/tKCTSbwJEaiVd7xrvH5/aIWBcdb3UDsGJ9MuanVqp17vG49OzdggY0d/2WzsEH9IvX3Zqcf8OQCn617ubu4fAxpiqqtINACUj/RJ3sJ4V1WqzXjUtmzNeSD7zdKNJo91u528Z/EcAe6TfZMj7d6I89a5W6hO9cIzJUET6xXTkeYWZoLXrlyiCnaXNPst15RDN0NceAMW26WP6i9HS7LZzy3SwDwFtpN9kBD2fFbWpvWsfivwLdGZhJ1cWAr2RfnmR9c4zjxvWqBcHANuR+3eG+v04s6awx8nwi7BqQD+k3zSEvm+c5nSs806KBysIDIj0y06f9+9cc72T5oDRJoyuRGSwRQSkX1KC5nf7F/Hau52H2ttiY5Dpob2a2Le4eopt0dkemU230f7ayBjpNwEH9c6uSqYl8JCnv+v0k9jZIFrEY35Po+eaQCfSL3f8/yyAUqT+fZS6Xib+/QwAuUi63s3mC+0QUDSG24mp0nzRBFB3fXuvHQIGkNP3jQEtCX5iHmfieQWAUlDvAJSCegegFP8tyFk+nAzT1QAAAABJRU5ErkJggg=="},250065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return i}});var n=t(667294);let s={},o=n.createContext(s);function i(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);