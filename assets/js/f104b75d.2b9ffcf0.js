"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65274],{369245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var c=t(474848),r=t(28453);const s={id:"onClicked",title:"On Clicked"},o=void 0,d={id:"Events/onClicked",title:"On Clicked",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onClicked.md",sourceDirName:"Events",slug:"/Events/onClicked",permalink:"/docs/19/Events/onClicked",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonClicked.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onClicked",title:"On Clicked"},sidebar:"docs",previous:{title:"On Bound Variable Change",permalink:"/docs/19/Events/onBoundVariableChange"},next:{title:"On Close Box",permalink:"/docs/19/Events/onCloseBox"}},i={},l=[{value:"Description",id:"description",level:2},{value:"On Clicked and On Double Clicked",id:"on-clicked-and-on-double-clicked",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Code"}),(0,c.jsx)(n.th,{children:"Can be called by"}),(0,c.jsx)(n.th,{children:"Definition"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"4"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,c.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/ruler",children:"Ruler"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/spinner",children:"Spinner"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/splitters",children:"Splitter"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/stepper",children:"Stepper"})," - ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/tabControl",children:"Tab control"})]}),(0,c.jsx)(n.td,{children:"A click occurred on an object"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"On Clicked"})," event is generated when the user clicks on an object."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Some form objects can be activated with the keyboard. For example, once a check box gets the focus, it can be entered using the space bar. In such a case, the ",(0,c.jsx)(n.code,{children:"On Clicked"})," event is still generated."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"On Clicked"})," event usually occurs once the mouse button is released. However, there are several exceptions:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/propertiesDisplay#not-rendered",children:"Invisible buttons"}),": The ",(0,c.jsx)(n.code,{children:"On Clicked"})," event occurs as soon as the click is made and does not wait for the mouse button to be released."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/ruler",children:"Rulers"}),": If the ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," option is set to ",(0,c.jsx)(n.strong,{children:"true"}),", the ",(0,c.jsx)(n.code,{children:"On Clicked"})," event occurs as soon as the click is made."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"Combo boxes"}),": The ",(0,c.jsx)(n.code,{children:"On Clicked"})," event occurs only if the user selects another value in the associated menu. A ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"combo box"})," must be treated as an enterable text area whose associated drop-down list provides default values. Consequently, you handle data entry within a combo box through the ",(0,c.jsx)(n.code,{children:"On Before Keystroke"}),", ",(0,c.jsx)(n.code,{children:"On After Keystroke"})," and ",(0,c.jsx)(n.code,{children:"On Data Change"})," events."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/dropdownListOverview",children:"Drop-down lists"}),": The ",(0,c.jsx)(n.code,{children:"On Clicked"})," event occurs only if the user selects another value in the menu. The ",(0,c.jsx)(n.code,{children:"On Data Change"})," event allows you to detect the activation of the object when a value different from the current value is selected"]}),"\n",(0,c.jsxs)(n.li,{children:["When a list box input cell is ",(0,c.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview#managing-entry",children:"being edited"}),", the ",(0,c.jsx)(n.code,{children:"On Clicked"})," event is generated when the mouse button is pressed, allowing to use the ",(0,c.jsx)(n.code,{children:"Contextual click"})," command for example."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["In the context of an ",(0,c.jsx)(n.code,{children:"On Clicked"})," event, you can test the number of clicks made by the user by means of the ",(0,c.jsx)(n.code,{children:"Clickcount"})," command."]}),"\n",(0,c.jsx)(n.h3,{id:"on-clicked-and-on-double-clicked",children:"On Clicked and On Double Clicked"}),"\n",(0,c.jsxs)(n.p,{children:["After the ",(0,c.jsx)(n.code,{children:"On Clicked"})," or ",(0,c.jsx)(n.a,{href:"/docs/19/Events/onDoubleClicked",children:(0,c.jsx)(n.code,{children:"On Double Clicked"})})," object event property is selected for an object, you can detect and handle the clicks within or on the object, using the ",(0,c.jsx)(n.code,{children:"FORM event"})," command that returns ",(0,c.jsx)(n.code,{children:"On Clicked"})," or ",(0,c.jsx)(n.a,{href:"/docs/19/Events/onDoubleClicked",children:(0,c.jsx)(n.code,{children:"On Double Clicked"})}),", depending on the case."]}),"\n",(0,c.jsxs)(n.p,{children:["If both events are selected for an object, the ",(0,c.jsx)(n.code,{children:"On Clicked"})," and then the ",(0,c.jsx)(n.code,{children:"On Double Clicked"})," events will be generated when the user double-clicks the object."]}),"\n",(0,c.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,c.jsxs)(n.p,{children:["This event is generated when the user clicks anywhere on a 4D View Pro document. On this context, the ",(0,c.jsx)(n.a,{href:"/docs/19/Events/overview#event-object",children:"event object"})," returned by the ",(0,c.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Property"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"code"}),(0,c.jsx)(n.td,{children:"longint"}),(0,c.jsx)(n.td,{children:"On Clicked"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"description"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:'"On Clicked"'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"objectName"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"sheetName"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"range"}),(0,c.jsx)(n.td,{children:"object"}),(0,c.jsx)(n.td,{children:"Cell range"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Clicked)\n    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))\n End if\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var c=t(296540);const r={},s=c.createContext(r);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);