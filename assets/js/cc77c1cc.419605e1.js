"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84649],{290952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(474848),o=n(28453);const r={id:"onMouseUp",title:"On Mouse Up"},i=void 0,c={id:"Events/onMouseUp",title:"On Mouse Up",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R7/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/docs/Events/onMouseUp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/docs/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/docs/Events/onOpenDetail"}},d={},a=[{value:"Description",id:"description",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Code"}),(0,s.jsx)(t.th,{children:"Can be called by"}),(0,s.jsx)(t.th,{children:"Definition"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," of the ",(0,s.jsx)(t.code,{children:"picture"})," ",(0,s.jsx)(t.a,{href:"/docs/FormObjects/propertiesObject#type",children:"Type"})]}),(0,s.jsx)(t.td,{children:"The user has just released the left mouse button in a Picture object"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"On Mouse Up"})," event is generated when the user has just released the left mouse button while dragging in a picture input. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."]}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"On Mouse Up"})," event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the ",(0,s.jsx)(t.code,{children:"MouseX"})," and ",(0,s.jsx)(t.code,{children:"MouseY"})," System variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0)."]}),"\n",(0,s.jsxs)(t.p,{children:["When using this event, you must also use the ",(0,s.jsx)(t.code,{children:"Is waiting mouse up"}),' command to handle cases where the "state manager" of the form is desynchronized, i.e. when the ',(0,s.jsx)(t.code,{children:"On Mouse Up"})," event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the ",(0,s.jsx)(t.code,{children:"On Mouse Up"})," event, please refer to the description of the ",(0,s.jsx)(t.code,{children:"Is waiting mouse up"})," command."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.a,{href:"/docs/FormObjects/propertiesAction#draggable",children:"Draggable"})," option is enabled for the picture object, the ",(0,s.jsx)(t.code,{children:"On Mouse Up"})," event is never generated."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(296540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);