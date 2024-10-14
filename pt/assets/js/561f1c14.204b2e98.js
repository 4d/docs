"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98952],{965939:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=o(474848),s=o(28453);const r={id:"onMouseUp",title:"On Mouse Up"},i=void 0,d={id:"Events/onMouseUp",title:"On Mouse Up",description:"| Code | Pode ser chamado por                                                                                  | Defini\xe7\xe3o                                                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/docs/pt/19/Events/onMouseUp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/docs/pt/19/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/docs/pt/19/Events/onOpenDetail"}},c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Pode ser chamado por"}),(0,n.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," of the ",(0,n.jsx)(t.code,{children:"picture"})," ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/propertiesObject#type",children:"Type"})]}),(0,n.jsx)(t.td,{children:"O usu\xe1rio acabou de soltar o bot\xe3o esquerdo do mouse em um objeto Imagem"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"On Mouse Up"})," event is generated when the user has just released the left mouse button while dragging in a picture input. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."]}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"On Mouse Up"})," event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the ",(0,n.jsx)(t.code,{children:"MouseX"})," and ",(0,n.jsx)(t.code,{children:"MouseY"})," System variables. As coordenadas s\xe3o expressas em p\xedxeis em rela\xe7\xe3o ao canto superior esquerdo da imagem (0,0)."]}),"\n",(0,n.jsxs)(t.p,{children:["When using this event, you must also use the ",(0,n.jsx)(t.code,{children:"Is waiting mouse up"}),' command to handle cases where the "state manager" of the form is desynchronized, i.e. when the ',(0,n.jsx)(t.code,{children:"On Mouse Up"})," event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the ",(0,n.jsx)(t.code,{children:"On Mouse Up"})," event, please refer to the description of the ",(0,n.jsx)(t.code,{children:"Is waiting mouse up"})," command."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/propertiesAction#draggable",children:"Draggable"})," option is enabled for the picture object, the ",(0,n.jsx)(t.code,{children:"On Mouse Up"})," event is never generated."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var n=o(296540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);