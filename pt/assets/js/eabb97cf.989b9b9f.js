"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96407"],{638470:function(e,t,r){r.r(t),r.d(t,{metadata:()=>o,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"Events/onValidate","title":"On Validate","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Defini\xe7\xe3o                                  |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onValidate.md","sourceDirName":"Events","slug":"/Events/onValidate","permalink":"/docs/pt/19/Events/onValidate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonValidate.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onValidate","title":"On Validate"},"sidebar":"docs","previous":{"title":"On URL Resource Loading","permalink":"/docs/pt/19/Events/onUrlResourceLoading"},"next":{"title":"On VP Range Changed","permalink":"/docs/pt/19/Events/onVpRangeChanged"}}'),n=r("785893"),s=r("250065");let i={id:"onValidate",title:"On Validate"},d=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Pode ser chamado por"}),(0,n.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/subformOverview",children:"Subform"})," - ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(t.td,{children:"A entrada de dados do registo foi validada"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["This event is triggered when the record data entry has been validated, for example after a ",(0,n.jsx)(t.code,{children:"SAVE RECORD"})," command call or an ",(0,n.jsx)(t.code,{children:"accept"})," ",(0,n.jsx)(t.a,{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action",children:"standard action"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"On Validate"})," event is triggered when data entry is validated in the subform."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return i}});var o=r(667294);let n={},s=o.createContext(n);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);