"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71981"],{888736:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"Events/onMouseLeave","title":"On Mouse Leave","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Defini\xe7\xe3o                                          |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onMouseLeave.md","sourceDirName":"Events","slug":"/Events/onMouseLeave","permalink":"/docs/pt/20-R8/Events/onMouseLeave","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onMouseLeave","title":"On Mouse Leave"},"sidebar":"docs","previous":{"title":"On Mouse Enter","permalink":"/docs/pt/20-R8/Events/onMouseEnter"},"next":{"title":"On Mouse Move","permalink":"/docs/pt/20-R8/Events/onMouseMove"}}'),s=r("785893"),n=r("250065");let i={id:"onMouseLeave",title:"On Mouse Leave"},a=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Chamar a pilha",id:"chamar-a-pilha",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"36"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(o.td,{children:"O cursor do rato deixa a \xe1rea gr\xe1fica de um objeto"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Esse evento \xe9 gerado uma vez, quando o cursor do mouse deixa na \xe1rea gr\xe1fica de um objeto."}),"\n",(0,s.jsxs)(o.p,{children:["El evento ",(0,s.jsx)(o.code,{children:"On Mouse Leave"})," actualiza las variables sistema ",(0,s.jsx)(o.em,{children:"MouseX"})," y ",(0,s.jsx)(o.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Os objetos tornados invis\xedveis por meio do comando ",(0,s.jsx)(o.code,{children:"OBJECT SET VISIBLE"})," ou da propriedade ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," n\xe3o geram esse evento."]}),"\n",(0,s.jsx)(o.h3,{id:"chamar-a-pilha",children:"Chamar a pilha"}),"\n",(0,s.jsxs)(o.p,{children:["Si se ha marcado el evento ",(0,s.jsx)(o.code,{children:"On Mouse Leave"})," para el formulario, se genera para cada objeto de formulario. Se for verificada para um objeto, \xe9 gerada apenas para esse objeto. Quando h\xe1 objetos sobrepostos, o evento \xe9 gerado pelo primeiro objeto capaz de gerenci\xe1-lo que for encontrado, seguindo a ordem do n\xedvel superior para o inferior."]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/Events/onMouseMove",children:(0,s.jsx)(o.code,{children:"On Mouse Move"})})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/Events/onMouseLeave",children:(0,s.jsx)(o.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return i}});var t=r(667294);let s={},n=t.createContext(s);function i(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);