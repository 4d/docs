/*! For license information please see c8a11ba1.91426de7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47499],{110221:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(474848),o=s(28453);const i={id:"inputOverview",title:"Input"},n=void 0,c={id:"FormObjects/inputOverview",title:"Input",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/18/FormObjects/inputOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/docs/18/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/docs/18/FormObjects/listOverview"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"JSON Example",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["Inputs allow you to add enterable or non-enterable expressions such as database ",(0,t.jsx)(r.a,{href:"/docs/18/Concepts/identifiers#fields",children:"fields"})," and ",(0,t.jsx)(r.a,{href:"/docs/18/Concepts/variables",children:"variables"})," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(863536).A+"",width:"279",height:"175"})}),"\n",(0,t.jsxs)(r.p,{children:["Inputs can contain ",(0,t.jsx)(r.a,{href:"/docs/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"assignable or non-assignable expressions"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["In addition, inputs can be ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#enterable",children:"enterable or non-enterable"}),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."]}),"\n",(0,t.jsxs)(r.p,{children:["You can manage the data with object or form ",(0,t.jsx)(r.a,{href:"/docs/18/Concepts/methods",children:"methods"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' "myText": {\n  "type": "input", //define the type of object\n  "spellcheck": true, //enable spelling verification\n  "left": 60,   //left position on the form  \n  "top": 160,   //top position on the form\n  "width": 100,  //width of the object\n  "height": 20  //height of the object\n  }\n'})}),"\n",(0,t.jsx)(r.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#auto-spellcheck",children:"Auto Spellcheck"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#boolean-format",children:"Boolean Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#default-value",children:"Default value"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"Expression type"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#fill-color",children:"Fill Color"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#font",children:"Font"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#multi-style",children:"Multi-style"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#picture-format",children:"Picture Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#placeholder",children:"Placeholder"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesRangeOfValues#required-list",children:"Required List"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDataSource#save-as",children:"Save as"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesEntry#selection-always-visible",children:"Selection always visible"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#store-with-default-style-tags",children:"Store with default style tags"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#text-when-false-text-when-true",children:"Text when False/Text when True"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"input-alternatives",children:"Input alternatives"}),"\n",(0,t.jsx)(r.p,{children:"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["You can display and enter data from database fields directly in columns of ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/listboxOverview",children:"selection type List boxes"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["You can represent a list field or variable directly in a form using ",(0,t.jsx)(r.a,{href:"popupMenuDropdownList_overview",children:"Pop-up Menus/Drop-down Lists"})," and ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/comboBoxOverview",children:"Combo Boxes"})," objects."]}),"\n",(0,t.jsxs)(r.li,{children:["You can represent a boolean expression as a ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/checkboxOverview",children:"check box"})," or as a ",(0,t.jsx)(r.a,{href:"/docs/18/FormObjects/radiobuttonOverview",children:"radio button"})," object."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,s)=>{var t=s(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,i={},l=null,d=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)n.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:c.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},863536:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var t=s(296540);const o={},i=t.createContext(o);function n(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);