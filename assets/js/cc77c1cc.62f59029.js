"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12613"],{805463:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"Events/onMouseUp","title":"On Mouse Up","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R7/Events/onMouseUp.md","sourceDirName":"Events","slug":"/Events/onMouseUp","permalink":"/docs/Events/onMouseUp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onMouseUp","title":"On Mouse Up"},"sidebar":"docs","previous":{"title":"On Mouse Move","permalink":"/docs/Events/onMouseMove"},"next":{"title":"On Open Detail","permalink":"/docs/Events/onOpenDetail"}}'),o=n("785893"),r=n("250065");let i={id:"onMouseUp",title:"On Mouse Up"},c=void 0,d={},a=[{value:"Description",id:"description",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Can be called by"}),(0,o.jsx)(t.th,{children:"Definition"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"2"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," of the ",(0,o.jsx)(t.code,{children:"picture"})," ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/propertiesObject#type",children:"Type"})]}),(0,o.jsx)(t.td,{children:"The user has just released the left mouse button in a Picture object"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Mouse Up"})," event is generated when the user has just released the left mouse button while dragging in a picture input. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."]}),"\n",(0,o.jsxs)(t.p,{children:["When the ",(0,o.jsx)(t.code,{children:"On Mouse Up"})," event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the ",(0,o.jsx)(t.code,{children:"MouseX"})," and ",(0,o.jsx)(t.code,{children:"MouseY"})," System variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0)."]}),"\n",(0,o.jsxs)(t.p,{children:["When using this event, you must also use the ",(0,o.jsx)(t.code,{children:"Is waiting mouse up"}),' command to handle cases where the "state manager" of the form is desynchronized, i.e. when the ',(0,o.jsx)(t.code,{children:"On Mouse Up"})," event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the ",(0,o.jsx)(t.code,{children:"On Mouse Up"})," event, please refer to the description of the ",(0,o.jsx)(t.code,{children:"Is waiting mouse up"})," command."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["If the ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/propertiesAction#draggable",children:"Draggable"})," option is enabled for the picture object, the ",(0,o.jsx)(t.code,{children:"On Mouse Up"})," event is never generated."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var s=n(667294);let o={},r=s.createContext(o);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);