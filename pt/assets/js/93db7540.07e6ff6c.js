"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12693],{177087:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(474848),t=r(28453);const n={id:"onMouseMove",title:"On Mouse Move"},i=void 0,c={id:"Events/onMouseMove",title:"On Mouse Move",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Defini\xe7\xe3o                                                                                                                  |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onMouseMove.md",sourceDirName:"Events",slug:"/Events/onMouseMove",permalink:"/docs/pt/Events/onMouseMove",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onMouseMove",title:"On Mouse Move"},sidebar:"docs",previous:{title:"On Mouse Leave",permalink:"/docs/pt/Events/onMouseLeave"},next:{title:"On Mouse Up",permalink:"/docs/pt/Events/onMouseUp"}},a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Chamar a pilha",id:"chamar-a-pilha",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"37"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista hier\xe1rquica"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o com imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu pop-up com imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Indicadores de progresso"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de op\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"Regra"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Seletor"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/splitters",children:"Separador"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Etapas"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,s.jsx)(o.td,{children:"The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt/Option, Shift Lock) was pressed"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Este evento \xe9 gerado:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"quando o cursor do rato se move pelo menos um p\xedxel"}),"\n",(0,s.jsxs)(o.li,{children:["O cuando se ha presionado una tecla de modificaci\xf3n (",(0,s.jsx)(o.strong,{children:"May\xfas"}),", ",(0,s.jsx)(o.strong,{children:"Alt/Opci\xf3n"}),", ",(0,s.jsx)(o.strong,{children:"Bloq May\xfas"}),"). Isso permite que voc\xea gerencie opera\xe7\xf5es de arrastar e soltar, como copiar ou mover."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object."}),"\n",(0,s.jsxs)(o.p,{children:["El evento ",(0,s.jsx)(o.code,{children:"On Mouse Move"})," actualiza las variables sistema ",(0,s.jsx)(o.em,{children:"MouseX"})," y ",(0,s.jsx)(o.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Os objetos tornados invis\xedveis por meio do comando ",(0,s.jsx)(o.code,{children:"OBJECT SET VISIBLE"})," ou da propriedade ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," n\xe3o geram esse evento."]}),"\n",(0,s.jsx)(o.h3,{id:"chamar-a-pilha",children:"Chamar a pilha"}),"\n",(0,s.jsxs)(o.p,{children:["Si se ha marcado el evento ",(0,s.jsx)(o.code,{children:"On Mouse Move"})," para el formulario, se genera para cada objeto de formulario. Se for verificada para um objeto, \xe9 gerada apenas para esse objeto. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom."]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/Events/onMouseEnter",children:(0,s.jsx)(o.code,{children:"On Mouse Enter"})})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/Events/onMouseLeave",children:(0,s.jsx)(o.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>c});var s=r(296540);const t={},n=s.createContext(t);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);