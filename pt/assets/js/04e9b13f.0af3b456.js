"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45101],{826285:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var t=o(474848),s=o(28453);const n={id:"onBeginDragOver",title:"On Begin Drag Over"},a=void 0,d={id:"Events/onBeginDragOver",title:"On Begin Drag Over",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Defini\xe7\xe3o                       |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onBeginDragOver.md",sourceDirName:"Events",slug:"/Events/onBeginDragOver",permalink:"/docs/pt/Events/onBeginDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeginDragOver.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onBeginDragOver",title:"On Begin Drag Over"},sidebar:"docs",previous:{title:"On Before Keystroke",permalink:"/docs/pt/Events/onBeforeKeystroke"},next:{title:"On Begin URL Loading",permalink:"/docs/pt/Events/onBeginUrlLoading"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Pode ser chamado por"}),(0,t.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"17"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - [Lista Dropdown](FormObjects/dropdownList_Overview. d) - Formul\xe1rio - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista Hier\xe1rquica"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"FormObjects/listObjects/listbox_overview.md",children:"Caixa de lista"})," - [Coluna de caixa de lista](FormObjects/listbox_overview. d#list-box-columns) - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o de imagens"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu de imagens pop-up"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - [Indicadores de progresso](FormObjects/progressIndicador. d) - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de R\xe1dio"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,t.jsx)(r.td,{children:"Um objecto est\xe1 a ser arrastado"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O evento ",(0,t.jsx)(r.code,{children:"Ao Come\xe7ar Arrastar Novo"})," pode ser selecionado para quaisquer objetos de forma que possam ser arrastados. Ele \xe9 gerado em todos os casos em que o objeto tem a propriedade ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#draggable",children:"Draggable"}),". Ele pode ser chamado a partir do m\xe9todo do objeto de origem ou do m\xe9todo de formul\xe1rio do objeto de origem."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Ao contr\xe1rio do evento de formul\xe1rio ",(0,t.jsx)(r.a,{href:"/docs/pt/Events/onDragOver",children:(0,t.jsx)(r.code,{children:"On Drag Over"})}),", o ",(0,t.jsx)(r.code,{children:"On Begin Drag Over"})," \xe9 chamado no contexto do ",(0,t.jsx)(r.strong,{children:"objeto de origem"})," da a\xe7\xe3o de arrastar."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["O evento ",(0,t.jsx)(r.code,{children:"On Begin Drag Over"})," \xe9 \xfatil para preparar a a\xe7\xe3o de arrastar. Pode ser usado para:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Adicione dados e assinaturas ao pasteboard (via o comando ",(0,t.jsx)(r.code,{children:"APPEND DATA TO PASTEBOARD"}),")."]}),"\n",(0,t.jsxs)(r.li,{children:["Use um \xedcone personalizado durante a a\xe7\xe3o de arrastar (via o comando ",(0,t.jsx)(r.code,{children:"SET DRAG ICON"}),")."]}),"\n",(0,t.jsxs)(r.li,{children:["Aceitar ou recusar o arrastamento atrav\xe9s de $0 no m\xe9todo do objeto arrastado.\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Para indicar que as a\xe7\xf5es de arrastar s\xe3o aceitas, o m\xe9todo do objeto de origem deve retornar 0 (zero); portanto, voc\xea deve executar ",(0,t.jsx)(r.code,{children:"$0:=0"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Para indicar que as a\xe7\xf5es de arrastar s\xe3o recusadas, o m\xe9todo do objeto de origem deve retornar -1 (menos um); portanto, voc\xea deve executar ",(0,t.jsx)(r.code,{children:"$0:=-1"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Se nenhum resultado for retornado, 4D considera que as a\xe7\xf5es de arrastar s\xe3o aceitas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Os dados 4D s\xe3o colocados na prancheta antes de chamar o evento. Por exemplo, no caso de arrastar sem a a\xe7\xe3o ",(0,t.jsx)(r.strong,{children:"Arrastar Autom\xe1tico"}),", o texto arrastado j\xe1 est\xe1 no quadro quando o evento \xe9 chamado."]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>d});var t=o(296540);const s={},n=t.createContext(s);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);