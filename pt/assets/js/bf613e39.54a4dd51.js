"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26928],{303381:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=t(474848),n=t(28453);const s={id:"onLoad",title:"On Load"},d=void 0,i={id:"Events/onLoad",title:"On Load",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defini\xe7\xe3o                                               |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onLoad.md",sourceDirName:"Events",slug:"/Events/onLoad",permalink:"/docs/pt/20/Events/onLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onLoad",title:"On Load"},sidebar:"docs",previous:{title:"On Header Click",permalink:"/docs/pt/20/Events/onHeaderClick"},next:{title:"On Load Record",permalink:"/docs/pt/20/Events/onLoadRecord"}},c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Code"}),(0,r.jsx)(o.th,{children:"Pode ser chamado por"}),(0,r.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"1"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,r.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Ruler"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/subformOverview",children:"Subform"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab control"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,r.jsx)(o.td,{children:"O formul\xe1rio est\xe1 prestes a ser apresentado ou impresso"})]})})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"Este evento \xe9 acionado quando o formul\xe1rio \xe9 carregado ou impresso."}),"\n",(0,r.jsxs)(o.p,{children:["All the objects of the form (from any page) whose ",(0,r.jsx)(o.code,{children:"On Load"})," object event property is selected will have their object method called. Then, if the ",(0,r.jsx)(o.code,{children:"On Load"})," form event property is selected, the form will have its form method called."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"On Load"})," and ",(0,r.jsx)(o.a,{href:"/docs/pt/20/Events/onUnload",children:(0,r.jsx)(o.code,{children:"On Unload"})})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"On Load"})," event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed)."]}),"\n",(0,r.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/20/Events/onUnload",children:(0,r.jsx)(o.code,{children:"On Unload"})})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>i});var r=t(296540);const n={},s=r.createContext(n);function d(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);