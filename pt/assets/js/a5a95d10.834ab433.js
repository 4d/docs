"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18202"],{860879:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onUnload","title":"On Unload","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defini\xe7\xe3o                                             |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onUnload.md","sourceDirName":"Events","slug":"/Events/onUnload","permalink":"/docs/pt/19/Events/onUnload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onUnload","title":"On Unload"},"sidebar":"docs","previous":{"title":"On Timer","permalink":"/docs/pt/19/Events/onTimer"},"next":{"title":"On URL Filtering","permalink":"/docs/pt/19/Events/onUrlFiltering"}}'),n=r("785893"),s=r("250065");let i={id:"onUnload",title:"On Unload"},c=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Pode ser chamado por"}),(0,n.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"24"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,n.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/subformOverview",children:"Subform"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab control"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,n.jsx)(t.td,{children:"O formul\xe1rio est\xe1 prestes a ser encerrado e libertado"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(t.p,{children:"This event is triggered when the form is being exited released."}),"\n",(0,n.jsxs)(t.p,{children:["All the objects of the form (from any page) whose ",(0,n.jsx)(t.code,{children:"On Unload"})," object event property is selected will have their object method called. Then, if the ",(0,n.jsx)(t.code,{children:"On Unload"})," form event property is selected, the form will have its form method called."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/pt/19/Events/onLoad",children:(0,n.jsx)(t.code,{children:"On Load"})})," and [",(0,n.jsx)(t.code,{children:"On Unload"}),"] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"On Unload"})," event is generated when the subform is closing (this event must also have been activated at the parent form level in order to be taken into account). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. The event is generated before those of the parent form."]}),"\n",(0,n.jsx)(t.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/pt/19/Events/onLoad",children:(0,n.jsx)(t.code,{children:"On Load"})})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var o=r(667294);let n={},s=o.createContext(n);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);