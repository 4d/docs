/*! For license information please see 95e800c8.5505cbe3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48647],{278967:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(474848),s=t(28453);const i={id:"comboBoxOverview",title:"Combo Box"},n=void 0,c={id:"FormObjects/comboBoxOverview",title:"Combo Box",description:"A combo box is similar to a drop-down list, except that it accepts text entered from the keyboard and has additional options.",source:"@site/versioned_docs/version-19/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/19/FormObjects/comboBoxOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Check Box",permalink:"/docs/19/FormObjects/checkboxOverview"},next:{title:"Drop-down List",permalink:"/docs/19/FormObjects/dropdownListOverview"}},a={},d=[{value:"Handling combo boxes",id:"Handling-combo-boxes",level:2},{value:"Using an object",id:"Using-an-object",level:3},{value:"Using an array",id:"Using-an-array",level:3},{value:"Using a choice list",id:"Using-a-choice-list",level:3},{value:"Options",id:"Options",level:2},{value:"Supported Properties",id:"Supported-Properties",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["A combo box is similar to a ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview#overview",children:"drop-down list"}),", except that it accepts text entered from the keyboard and has additional options."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:t(95173).A+"",width:"173",height:"106"})}),"\n",(0,r.jsx)(o.p,{children:"Fundamentally, you treat a combo box as an enterable area that uses its object, array or a choice list as the set of default values."}),"\n",(0,r.jsx)(o.h2,{id:"Handling-combo-boxes",children:"Handling combo boxes"}),"\n",(0,r.jsxs)(o.p,{children:["Use the ",(0,r.jsx)(o.a,{href:"/docs/19/Events/onDataChange",children:(0,r.jsx)(o.code,{children:"On Data Change"})})," event to manage entries into the enterable area, as you would for any input form object."]}),"\n",(0,r.jsxs)(o.p,{children:["You initialize a combo box in exactly the same way as a ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview#overview",children:"drop-down list"}),": using an object, an array, or a choice list."]}),"\n",(0,r.jsx)(o.h3,{id:"Using-an-object",children:"Using an object"}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"This feature is only available in 4D projects."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["An ",(0,r.jsx)(o.a,{href:"/docs/19/Concepts/object",children:"object"})," encapsulating a ",(0,r.jsx)(o.a,{href:"Concepts/dt_collection",children:"collection"})," can be used as the data source of a combo box. The object must contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Property"}),(0,r.jsx)(o.th,{children:"Type"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"values"})}),(0,r.jsx)(o.td,{children:"Collection"}),(0,r.jsxs)(o.td,{children:["Mandatory - Collection of scalar values. All values must be of the same type. Supported types:",(0,r.jsx)(o.li,{children:"strings"}),(0,r.jsx)(o.li,{children:"numbers"}),(0,r.jsx)(o.li,{children:"dates"}),(0,r.jsx)(o.li,{children:"times"}),"If empty or not defined, the combo box is empty"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"currentValue"})}),(0,r.jsx)(o.td,{children:"same as Collection"}),(0,r.jsx)(o.td,{children:"Text entered by the user"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:"If the object contains other properties, they are ignored."}),"\n",(0,r.jsxs)(o.p,{children:["When the user enters text into the combo box, the ",(0,r.jsx)(o.code,{children:"currentValue"})," property of the object gets the entered text."]}),"\n",(0,r.jsx)(o.h3,{id:"Using-an-array",children:"Using an array"}),"\n",(0,r.jsxs)(o.p,{children:["Please refer to ",(0,r.jsx)(o.strong,{children:"Using an array"})," in the ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview#using-an-array",children:"drop-down list page"})," for information about how to initialize the array."]}),"\n",(0,r.jsx)(o.p,{children:"When the user enters text into the combo box, the 0th element of the array gets the entered text."}),"\n",(0,r.jsx)(o.h3,{id:"Using-a-choice-list",children:"Using a choice list"}),"\n",(0,r.jsx)(o.p,{children:"If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. This makes it easier to manage listed fields/variables."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"If you use a hierarchical list, only the first level is displayed and can be selected."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," of the form object in the Property List."]}),"\n",(0,r.jsx)(o.p,{children:"When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:"}),"\n",(0,r.jsxs)(o.p,{children:["Please refer to ",(0,r.jsx)(o.strong,{children:"Using a choice"})," in the ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview#using-a-choice-list",children:"drop-down list page"})," for more information."]}),"\n",(0,r.jsx)(o.h2,{id:"Options",children:"Options"}),"\n",(0,r.jsx)(o.p,{children:"Combo box type objects accept two specific options:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDataSource#automatic-insertion",children:"Automatic insertion"}),": enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Associating a ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesRangeOfValues#required-list",children:"list of required values"})," is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview#overview",children:"drop-down list"})," object."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"Supported-Properties",children:"Supported Properties"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#font",children:"Font"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,r.jsx)(o.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,o,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)n.call(o,r)&&!a.hasOwnProperty(r)&&(i[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}o.Fragment=i,o.jsx=d,o.jsxs=d},474848:(e,o,t)=>{e.exports=t(221020)},95173:(e,o,t)=>{t.d(o,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,o,t)=>{t.d(o,{R:()=>n,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function n(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);