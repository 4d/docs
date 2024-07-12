/*! For license information please see 42b4b528.8d349505.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9182],{865059:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(474848),t=r(28453);const s={id:"pluginAreaOverview",title:"Plug-in Area"},o=void 0,a={id:"FormObjects/pluginAreaOverview",title:"Plug-in Area",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/pluginArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/pluginAreaOverview",permalink:"/docs/18/FormObjects/pluginAreaOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FpluginArea_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"pluginAreaOverview",title:"Plug-in Area"},sidebar:"docs",previous:{title:"Picture Pop-up Menu",permalink:"/docs/18/FormObjects/picturePopupMenuOverview"},next:{title:"Progress Indicator",permalink:"/docs/18/FormObjects/progressIndicator"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Advanced properties",id:"advanced-properties",level:3},{value:"Installing plug-ins",id:"installing-plug-ins",level:2},{value:"Creating plug-ins",id:"creating-plug-ins",level:2},{value:"Supported Properties",id:"supported-properties",level:2}];function l(e){const i={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"A plug-in area is an area on the form that is completely controlled by a plug-in. The ability to incorporate plug-ins into forms gives you unlimited possibilities when creating custom applications. A plug-in can perform a simple task such as displaying a digital clock on a form, or a complex task such as providing full-featured word processing, spreadsheet, or graphics capabilities."}),"\n",(0,n.jsxs)(i.p,{children:["When opening a database, 4D creates an internal list of the plug-ins ",(0,n.jsx)(i.a,{href:"#installing-plug-ins",children:"installed in your database"}),". Once you have inserted a Plug-in Area in a form, you can assign a plug-in to the area directly in the Type list in the Property List:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(880808).A+"",width:"406",height:"191"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Some plug-ins, such as 4D Internet Commands, cannot be used in forms or external windows. When a plug-in cannot be used in a form, it does not appear in the plug-in list of the Property List."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"If you draw a plug-in area that is too small, 4D will display it as a button whose title is the name of the variable associated with the area. During execution, the user can click on this button in order to open a specific window displaying the plug-in."}),"\n",(0,n.jsx)(i.h3,{id:"advanced-properties",children:"Advanced properties"}),"\n",(0,n.jsxs)(i.p,{children:["If advanced options are provided by the author of the plug-in, a ",(0,n.jsx)(i.strong,{children:"Plug-in"})," theme containing an ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesPlugIns",children:(0,n.jsx)(i.strong,{children:"Advanced Properties"})})," button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box."]}),"\n",(0,n.jsx)(i.h2,{id:"installing-plug-ins",children:"Installing plug-ins"}),"\n",(0,n.jsxs)(i.p,{children:["To add a plug-in in your 4D environment, you first need to quit 4D. Plug-ins are loaded when you launch 4D. For more information about the installation of plug-ins, refer to ",(0,n.jsx)(i.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html",children:"Installing plugins or components"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"creating-plug-ins",children:"Creating plug-ins"}),"\n",(0,n.jsxs)(i.p,{children:["If you are interested in designing your own plug-ins, you can receive extensive information about writing and implementing plug-ins. 4D provides a ",(0,n.jsx)(i.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:"complete kit (on github)"})," to help you write custom plug-ins."]}),"\n",(0,n.jsx)(i.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesPlugIns",children:"Advanced Properties"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesAction#draggable-and-droppable",children:"Draggable"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesAction#draggable-and-droppable",children:"Droppable"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#plug-in-kind",children:"Plug-in Kind"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,n.jsx)(i.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,i,r)=>{var n=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,r){var n,s={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(l=i.ref),i)o.call(i,n)&&!c.hasOwnProperty(n)&&(s[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:a.current}}i.Fragment=s,i.jsx=d,i.jsxs=d},474848:(e,i,r)=>{e.exports=r(221020)},880808:(e,i,r)=>{r.d(i,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var n=r(296540);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);