"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27901],{267434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(474848),r=n(28453);const o={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,d={id:"Events/onAfterKeystroke",title:"On After Keystroke",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R6/Events/onAfterKeystroke.md",sourceDirName:"Events",slug:"/Events/onAfterKeystroke",permalink:"/docs/20-R6/Events/onAfterKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onAfterKeystroke",title:"On After Keystroke"},sidebar:"docs",previous:{title:"On After Edit",permalink:"/docs/20-R6/Events/onAfterEdit"},next:{title:"On After Sort",permalink:"/docs/20-R6/Events/onAfterSort"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Keystroke sequence",id:"keystroke-sequence",level:3},{value:"See also",id:"see-also",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Code"}),(0,s.jsx)(t.th,{children:"Can be called by"}),(0,s.jsx)(t.th,{children:"Definition"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"28"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,s.jsxs)(t.td,{children:["A character is about to be entered in the object that has the focus. ",(0,s.jsx)(t.code,{children:"Get edited text"})," returns the object's text ",(0,s.jsx)(t.strong,{children:"including"})," this character."]})]})})]}),"\n",(0,s.jsxs)(t.details,{children:[(0,s.jsx)(t.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Release"}),(0,s.jsx)(t.th,{children:"Changes"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"18 R5"}),(0,s.jsx)(t.td,{children:"- Support in non-enterable list boxes - The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"On After Keystroke"})," event can generally be replaced by the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/Events/onAfterEdit",children:(0,s.jsx)(t.code,{children:"On After Edit"})})," event (see below)."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/Events/onBeforeKeystroke",children:(0,s.jsx)(t.code,{children:"On Before Keystroke"})})," and ",(0,s.jsx)(t.code,{children:"On After Keystroke"})," event properties are selected for an object, you can detect and handle the keystrokes within the object, using the ",(0,s.jsx)(t.code,{children:"FORM event"})," command that will return ",(0,s.jsx)(t.code,{children:"On Before Keystroke"})," and then ",(0,s.jsx)(t.code,{children:"On After Keystroke"})," (for more information, please refer to the description of the ",(0,s.jsx)(t.code,{children:"Get edited text"})," command)."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["These events are also activated by language commands that simulate a user action like ",(0,s.jsx)(t.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"On After Keystroke"})," event is not generated:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["in ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview#list-box-columns",children:"list box columns"})," method except when a cell is being edited (however it is generated in any cases in the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"list box"})," method),"]}),"\n",(0,s.jsxs)(t.li,{children:["when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use ",(0,s.jsx)(t.a,{href:"/docs/20-R6/Events/onAfterEdit",children:(0,s.jsx)(t.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"keystroke-sequence",children:"Keystroke sequence"}),"\n",(0,s.jsxs)(t.p,{children:["When an entry requires a sequence of keystrokes, the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/Events/onBeforeKeystroke",children:(0,s.jsx)(t.code,{children:"On Before Keystroke"})})," and [",(0,s.jsx)(t.code,{children:"On After Keystroke event"}),"] events are generated only when the entry is fully validaded by the user. The ",(0,s.jsx)(t.code,{children:"Keystroke"})," command returns the validated character. This case mainly occurs:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "\xea" or \xf1),'}),"\n",(0,s.jsx)(t.li,{children:"when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R6/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(296540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);