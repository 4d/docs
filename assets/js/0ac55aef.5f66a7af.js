/*! For license information please see 0ac55aef.5f66a7af.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26237],{177309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(474848),o=t(28453);const c={id:"onClicked",title:"On Clicked"},s=void 0,i={id:"Events/onClicked",title:"On Clicked",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onClicked.md",sourceDirName:"Events",slug:"/Events/onClicked",permalink:"/docs/20/Events/onClicked",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonClicked.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onClicked",title:"On Clicked"},sidebar:"docs",previous:{title:"On Bound Variable Change",permalink:"/docs/20/Events/onBoundVariableChange"},next:{title:"On Close Box",permalink:"/docs/20/Events/onCloseBox"}},d={},l=[{value:"Description",id:"Description",level:2},{value:"On Clicked and On Double Clicked",id:"On-Clicked-and-On-Double-Clicked",level:3},{value:"4D View Pro",id:"4D-View-Pro",level:3},{value:"Example",id:"Example",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Can be called by"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,r.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/ruler",children:"Ruler"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/tabControl",children:"Tab control"})]}),(0,r.jsx)(n.td,{children:"A click occurred on an object"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"On Clicked"})," event is generated when the user clicks on an object."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Some form objects can be activated with the keyboard. For example, once a check box gets the focus, it can be entered using the space bar. In such a case, the ",(0,r.jsx)(n.code,{children:"On Clicked"})," event is still generated."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"On Clicked"})," event usually occurs once the mouse button is released. However, there are several exceptions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/propertiesDisplay#not-rendered",children:"Invisible buttons"}),": The ",(0,r.jsx)(n.code,{children:"On Clicked"})," event occurs as soon as the click is made and does not wait for the mouse button to be released."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/ruler",children:"Rulers"}),": If the ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," option is set to ",(0,r.jsx)(n.strong,{children:"true"}),", the ",(0,r.jsx)(n.code,{children:"On Clicked"})," event occurs as soon as the click is made."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/comboBoxOverview",children:"Combo boxes"}),": The ",(0,r.jsx)(n.code,{children:"On Clicked"})," event occurs only if the user selects another value in the associated menu. A ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/comboBoxOverview",children:"combo box"})," must be treated as an enterable text area whose associated drop-down list provides default values. Consequently, you handle data entry within a combo box through the ",(0,r.jsx)(n.code,{children:"On Before Keystroke"}),", ",(0,r.jsx)(n.code,{children:"On After Keystroke"})," and ",(0,r.jsx)(n.code,{children:"On Data Change"})," events."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/dropdownListOverview",children:"Drop-down lists"}),": The ",(0,r.jsx)(n.code,{children:"On Clicked"})," event occurs only if the user selects another value in the menu. The ",(0,r.jsx)(n.code,{children:"On Data Change"})," event allows you to detect the activation of the object when a value different from the current value is selected"]}),"\n",(0,r.jsxs)(n.li,{children:["When a list box input cell is ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/listboxOverview#managing-entry",children:"being edited"}),", the ",(0,r.jsx)(n.code,{children:"On Clicked"})," event is generated when the mouse button is pressed, allowing to use the ",(0,r.jsx)(n.code,{children:"Contextual click"})," command for example."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the context of an ",(0,r.jsx)(n.code,{children:"On Clicked"})," event, you can test the number of clicks made by the user by means of the ",(0,r.jsx)(n.code,{children:"Clickcount"})," command."]}),"\n",(0,r.jsx)(n.h3,{id:"On-Clicked-and-On-Double-Clicked",children:"On Clicked and On Double Clicked"}),"\n",(0,r.jsxs)(n.p,{children:["After the ",(0,r.jsx)(n.code,{children:"On Clicked"})," or ",(0,r.jsx)(n.a,{href:"/docs/20/Events/onDoubleClicked",children:(0,r.jsx)(n.code,{children:"On Double Clicked"})})," object event property is selected for an object, you can detect and handle the clicks within or on the object, using the ",(0,r.jsx)(n.code,{children:"FORM event"})," command that returns ",(0,r.jsx)(n.code,{children:"On Clicked"})," or ",(0,r.jsx)(n.a,{href:"/docs/20/Events/onDoubleClicked",children:(0,r.jsx)(n.code,{children:"On Double Clicked"})}),", depending on the case."]}),"\n",(0,r.jsxs)(n.p,{children:["If both events are selected for an object, the ",(0,r.jsx)(n.code,{children:"On Clicked"})," and then the ",(0,r.jsx)(n.code,{children:"On Double Clicked"})," events will be generated when the user double-clicks the object."]}),"\n",(0,r.jsx)(n.h3,{id:"4D-View-Pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when the user clicks anywhere on a 4D View Pro document. On this context, the ",(0,r.jsx)(n.a,{href:"/docs/20/Events/overview#event-object",children:"event object"})," returned by the ",(0,r.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"On Clicked"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Clicked"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Clicked)\n    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))\n End if\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,c={},l=null,h=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:h,props:c,_owner:i.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(296540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);