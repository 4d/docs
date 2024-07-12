/*! For license information please see 532a4252.772b6176.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41847],{307238:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var i=s(474848),o=s(28453);const r={id:"dropdownListOverview",title:"Drop-down List"},a=void 0,n={id:"FormObjects/dropdownListOverview",title:"Drop-down List",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/18/FormObjects/dropdownListOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"dropdownListOverview",title:"Drop-down List"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/18/FormObjects/comboBoxOverview"},next:{title:"Group Box",permalink:"/docs/18/FormObjects/groupBox"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Using an array",id:"using-an-array",level:2},{value:"Using a choice list",id:"using-a-choice-list",level:2},{value:"Save as",id:"save-as",level:3},{value:"Using a standard action",id:"using-a-standard-action",level:2},{value:"Supported Properties",id:"supported-properties",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Drop-down lists are objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an array, a choice list, or a standard action."}),"\n",(0,i.jsx)(t.p,{children:'On macOS, drop-down lists are also sometimes called "pop-up menu". Both names refer to the same objects. As the following example shows, the appearance of these objects can differ slightly according to the platform:'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(923972).A+"",width:"458",height:"158"})}),"\n",(0,i.jsx)(t.h2,{id:"using-an-array",children:"Using an array"}),"\n",(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.a,{href:"/docs/18/Concepts/arrays",children:"array"})," is a list of values in memory that is referenced by the name of the array. A drop-down list displays an array as a list of values when you click on it."]}),"\n",(0,i.jsx)(t.p,{children:"Drop-down list objects are initialized by loading a list of values into an array. You can do this in several ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Enter a list of default values in the object properties by selecting ",(0,i.jsx)(t.code,{children:'"\\<Static List>"'})," in the ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource",children:"Data Source"})," theme of the Property List. The default values are loaded into an array automatically. You can refer to the array using the name of the variable associated with the object."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Before the object is displayed, execute code that assigns values to the array elements. For example:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'  ARRAY TEXT($aCities;6)\n  $aCities{1}:="Philadelphia"\n  $aCities{2}:="Pittsburg"\n  $aCities{3}:="Grand Blanc"\n  $aCities{4}:="Bad Axe"\n  $aCities{5}:="Frostbite Falls"\n  $aCities{6}:="Green Bay"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this case, the name of the variable associated with the object in the form must be ",(0,i.jsx)(t.em,{children:"$aCities"}),". This code could be placed in the form method and be executed when the ",(0,i.jsx)(t.code,{children:"On Load"})," form event runs."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Before the object is displayed, load the values of a list into the array using the ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/LIST-TO-ARRAY.301-4127385.en.html",children:"LIST TO ARRAY"})," command. For example:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'   LIST TO ARRAY("Cities";$aCities)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this case also, the name of the variable associated with the object in the form must be ",(0,i.jsx)(t.em,{children:"$aCities"}),". This code would be run in place of the assignment statements shown above."]}),"\n",(0,i.jsx)(t.p,{children:"If you need to save the user\u2019s choice into a field, you would use an assignment statement that runs after the record is accepted. The code might look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `new record\n          aCities:=3 `display a default value\n       Else `existing record, display stored value\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `user modified selection\n       City:=aCities{aCities} `field gets new value\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n'})}),"\n",(0,i.jsx)(t.p,{children:"You must select each [event] that you test for in your Case statement. Arrays always contain a finite number of items. The list of items is dynamic and can be changed by a method. Items in an array can be modified, sorted, and added to."}),"\n",(0,i.jsx)(t.h2,{id:"using-a-choice-list",children:"Using a choice list"}),"\n",(0,i.jsx)(t.p,{children:"If you want to use a drop-down list to manage the values of a listed field or variable, 4D lets you reference the field or variable directly as the object's data source. This makes it easier to manage listed fields/variables."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"If you use a hierarchical list, only the first level is displayed and can be selected."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is now possible to create a list containing these values and associate it with a pop-up menu object that references the 4D "Color" field. 4D then automatically takes care of managing the input and display of the current value in the form.'}),"\n",(0,i.jsxs)(t.p,{children:["To associate a pop-up menu/drop-down list or a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," of the object in the Property List."]}),"\n",(0,i.jsx)(t.p,{children:"When the form is executed, 4D automatically manages the pop-up menu or combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the pop-up menu when the form is displayed:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(998207).A+"",width:"755",height:"171"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"It is not possible to combine this principle with using an array to initialize the object. If you enter a field name in the Variable Name area, then you must use a choice list."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"save-as",children:"Save as"}),"\n",(0,i.jsxs)(t.p,{children:["When you have associated a pop-up menu/drop-down list with a choice list and with a field, you can use the ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource#save-as",children:"Save as Value/Reference property"}),". This option lets you optimize the size of the data saved."]}),"\n",(0,i.jsx)(t.h2,{id:"using-a-standard-action",children:"Using a standard action"}),"\n",(0,i.jsxs)(t.p,{children:["You can assign a standard action to a pop-up menu/drop-down list (",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesAction#standard-action",children:"Action"})," theme of the Property List). Only actions that display a sublist of items (except the goto page action) are supported by this object. For example, if you select the ",(0,i.jsx)(t.code,{children:"backgroundColor"})," standard action, at runtime the object will display an automatic list of background colors. You can can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, please refer to the ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"Standard actions"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesTextAndPicture#button-style",children:"Button Style"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#font",children:"Font"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#not-rendered",children:"Not rendered"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesAction#standard-action",children:"Standard action"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource#save-as",children:"Save as"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var i=s(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var i,r={},d=null,l=null;for(i in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:l,props:r,_owner:n.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},923972:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},998207:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>n});var i=s(296540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);