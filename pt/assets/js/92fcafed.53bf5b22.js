"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8661],{103841:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(474848),n=r(28453);const s={id:"onDragOver",title:"On Drag Over"},a=void 0,d={id:"Events/onDragOver",title:"On Drag Over",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Defini\xe7\xe3o                                   |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onDragOver.md",sourceDirName:"Events",slug:"/Events/onDragOver",permalink:"/docs/pt/Events/onDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onDragOver",title:"On Drag Over"},sidebar:"docs",previous:{title:"On Double Clicked",permalink:"/docs/pt/Events/onDoubleClicked"},next:{title:"On Drop",permalink:"/docs/pt/Events/onDrop"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"21"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - [Lista Dropdown](FormObjects/dropdownList_Overview. d) - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista Hier\xe1rquica"})," - ",(0,t.jsx)(o.a,{href:"FormObjectos/input_overview.md",children:"Input"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"Caixa de Lista"})," - [Coluna de caixa de lista](FormObjects/listbox_overview. d#list-box-columns) - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o de imagens"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu de imagens pop-up"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - [Indicadores de progresso](FormObjects/progressIndicador. d) - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de R\xe1dio"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,t.jsx)(o.td,{children:"Os dados podem ser largados sobre um objeto"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"Ao Arrastar Para"})," \xe9 repetidamente enviado para o objeto de destino quando o ponteiro do mouse \xe9 movido sobre o objeto. Em resposta a este evento, normalmente:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Obtenha os dados e assinaturas encontrados no pasteboard (via o comando ",(0,t.jsx)(o.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,t.jsxs)(o.li,{children:["Dependendo da natureza e do tipo de dados na \xe1rea de transfer\xeancia, voc\xea ",(0,t.jsx)(o.strong,{children:"aceita"})," ou ",(0,t.jsx)(o.strong,{children:"rejeita"})," o arrastar e soltar."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Para ",(0,t.jsx)(o.strong,{children:"aceitar"})," a arraste, o m\xe9todo objeto de destino deve retornar 0 (zero).\nPara ",(0,t.jsx)(o.strong,{children:"rejeitar"})," o arraste, o m\xe9todo objeto deve retornar -1 (menos um).\nDurante um evento ",(0,t.jsx)(o.code,{children:"Ao Arrastar Exterior"}),", o 4D trata o m\xe9todo do objeto como uma fun\xe7\xe3o. Se nenhum resultado for devolvido, 4D assume que o arrasto \xe9 aceite."]}),"\n",(0,t.jsxs)(o.p,{children:["Se aceitar o arrastamento, o objeto de destino \xe9 real\xe7ado. Se rejeitar o arrastamento, o destino n\xe3o \xe9 real\xe7ado. Accepting the drag does not mean that the dragged data is going to be inserted into the destination object. Isso significa apenas que se o bot\xe3o do mouse for solto neste ponto, o objeto de destino aceitaria os dados arrastados e o evento ",(0,t.jsx)(o.a,{href:"/docs/pt/Events/onDrop",children:(0,t.jsx)(o.code,{children:"On Drop"})})," seria disparado."]}),"\n",(0,t.jsxs)(o.p,{children:["Se voc\xea n\xe3o processar o evento ",(0,t.jsx)(o.code,{children:"On Drag Over"})," para um objeto solt\xe1vel, esse objeto ser\xe1 destacado para todas as opera\xe7\xf5es de arrastar, n\xe3o importa qual seja a natureza e o tipo dos dados arrastados."]}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"On Drag Over"})," \xe9 a maneira pela qual voc\xea controla a primeira fase de uma opera\xe7\xe3o de arrastar e soltar. Not only can you test whether the dragged data is of a type compatible with the destination object, and then accept or reject the drag; you can simultaneously notify the user of this fact, because 4D highlights (or not) the destination object, based on your decision."]}),"\n",(0,t.jsx)(o.p,{children:"O c\xf3digo que manipula um evento 'On Drag Over' deve ser curto e executar rapidamente, porque esse evento \xe9 enviado repetidamente para o objeto de destino atual, devido aos movimentos do mouse."}),"\n",(0,t.jsx)(o.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"//Destination object method\n #DECLARE : Integer\n If(Form event code=On Drag Over)\n    //returns 0 by default\n    ...\n    If($DataType=Is picture)\n       return -1\n    End if\n    ...\n End if\n"})}),"\n",(0,t.jsx)(o.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/Events/onBeginDragOver",children:(0,t.jsx)(o.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>d});var t=r(296540);const n={},s=t.createContext(n);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);