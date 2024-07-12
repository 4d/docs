/*! For license information please see 22ebea87.2e6ee2f0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59407],{600574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(474848),o=r(28453);const i={id:"propertiesPrint",title:"Print"},s=void 0,a={id:"FormObjects/propertiesPrint",title:"Print",description:"Print frame",source:"@site/versioned_docs/version-18/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/18/FormObjects/propertiesPrint",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"propertiesPrint",title:"Print"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/18/FormObjects/propertiesPlugIns"},next:{title:"Range of Values",permalink:"/docs/18/FormObjects/propertiesRangeOfValues"}},c={},l=[{value:"Print frame",id:"print-frame",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"print-frame",children:"Print frame"}),"\n",(0,n.jsx)(t.p,{children:"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. These objects can be set to print with either a fixed or variable frame. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."}),"\n",(0,n.jsx)(t.p,{children:"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Print object"})," and ",(0,n.jsx)(t.code,{children:"Print form"})," commands do not support this property."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The print options are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Variable"})," option / ",(0,n.jsx)(t.strong,{children:"Print Variable Frame"})," checked: 4D enlarges or reduces the form object area in order to print all the subrecords."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Fixed (Truncation)"})," option / ",(0,n.jsx)(t.strong,{children:"Print Variable Frame"})," unchecked: 4D only prints the contents that appear in the object area. The form is only printed once and the contents not printed are ignored."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Fixed (Multiple Records)"})," (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This property can be set by programming using the ",(0,n.jsx)(t.code,{children:"OBJECT SET PRINT VARIABLE FRAME"})," command."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"}),(0,n.jsx)(t.th,{children:"Possible Values"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"printFrame"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsx)(t.td,{children:'"fixed", "variable", (subform only) "fixedMultiple"'})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/18/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(t.a,{href:"/docs/18/FormObjects/subformOverview",children:"Subforms"})," (list subforms only) - ",(0,n.jsx)(t.a,{href:"/docs/18/FormObjects/writeProAreaOverview",children:"4D Write Pro areas"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(296540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);