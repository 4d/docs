/*! For license information please see 8a75dea2.944c1ad1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21378],{386239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(474848),s=n(28453);const o={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,d={id:"Events/onAfterKeystroke",title:"On After Keystroke",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onAfterKeystroke.md",sourceDirName:"Events",slug:"/Events/onAfterKeystroke",permalink:"/docs/Events/onAfterKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onAfterKeystroke",title:"On After Keystroke"},sidebar:"docs",previous:{title:"On After Edit",permalink:"/docs/Events/onAfterEdit"},next:{title:"On After Sort",permalink:"/docs/Events/onAfterSort"}},c={},l=[{value:"Description",id:"Description",level:2},{value:"Keystroke sequence",id:"Keystroke-sequence",level:3},{value:"See also",id:"See-also",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Can be called by"}),(0,r.jsx)(t.th,{children:"Definition"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"28"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,r.jsxs)(t.td,{children:["A character is about to be entered in the object that has the focus. ",(0,r.jsx)(t.code,{children:"Get edited text"})," returns the object's text ",(0,r.jsx)(t.strong,{children:"including"})," this character."]})]})})]}),"\n",(0,r.jsxs)(t.details,{children:[(0,r.jsx)(t.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Release"}),(0,r.jsx)(t.th,{children:"Changes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"18 R5"}),(0,r.jsx)(t.td,{children:"- Support in non-enterable list boxes - The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"On After Keystroke"})," event can generally be replaced by the ",(0,r.jsx)(t.a,{href:"/docs/Events/onAfterEdit",children:(0,r.jsx)(t.code,{children:"On After Edit"})})," event (see below)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.a,{href:"/docs/Events/onBeforeKeystroke",children:(0,r.jsx)(t.code,{children:"On Before Keystroke"})})," and ",(0,r.jsx)(t.code,{children:"On After Keystroke"})," event properties are selected for an object, you can detect and handle the keystrokes within the object, using the ",(0,r.jsx)(t.code,{children:"FORM event"})," command that will return ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," and then ",(0,r.jsx)(t.code,{children:"On After Keystroke"})," (for more information, please refer to the description of the ",(0,r.jsx)(t.code,{children:"Get edited text"})," command)."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["These events are also activated by language commands that simulate a user action like ",(0,r.jsx)(t.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"On After Keystroke"})," event is not generated:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["in ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"list box columns"})," method except when a cell is being edited (however it is generated in any cases in the ",(0,r.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview",children:"list box"})," method),"]}),"\n",(0,r.jsxs)(t.li,{children:["when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use ",(0,r.jsx)(t.a,{href:"/docs/Events/onAfterEdit",children:(0,r.jsx)(t.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"Keystroke-sequence",children:"Keystroke sequence"}),"\n",(0,r.jsxs)(t.p,{children:["When an entry requires a sequence of keystrokes, the ",(0,r.jsx)(t.a,{href:"/docs/Events/onBeforeKeystroke",children:(0,r.jsx)(t.code,{children:"On Before Keystroke"})})," and [",(0,r.jsx)(t.code,{children:"On After Keystroke event"}),"] events are generated only when the entry is fully validaded by the user. The ",(0,r.jsx)(t.code,{children:"Keystroke"})," command returns the validated character. This case mainly occurs:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "\xea" or \xf1),'}),"\n",(0,r.jsx)(t.li,{children:"when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"See-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:d.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);