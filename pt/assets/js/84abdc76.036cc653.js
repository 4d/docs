"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16141"],{546921:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onDragOver","title":"On Drag Over","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Defini\xe7\xe3o                                   |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onDragOver.md","sourceDirName":"Events","slug":"/Events/onDragOver","permalink":"/docs/pt/20-R6/Events/onDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onDragOver","title":"On Drag Over"},"sidebar":"docs","previous":{"title":"On Double Clicked","permalink":"/docs/pt/20-R6/Events/onDoubleClicked"},"next":{"title":"On Drop","permalink":"/docs/pt/20-R6/Events/onDrop"}}'),s=r("785893"),n=r("250065");let a={id:"onDragOver",title:"On Drag Over"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let o={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"21"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/listOverview#overview",children:"Lista Hier\xe1rquica"})," - ",(0,s.jsx)(o.a,{href:"FormObjectos/input_overview.md",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/listboxOverview",children:"Caixa de Lista"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/listboxOverview#list-box-columns",children:"Coluna de caixa de lista"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/pictureButtonOverview",children:"Bot\xe3o de imagens"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/picturePopupMenuOverview",children:"Menu de imagens pop-up"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,s.jsx)(o.a,{href:"FormObjects/progressIndicador.md",children:"Indicadores de progresso"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/radiobuttonOverview",children:"Bot\xe3o de R\xe1dio"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/ruler",children:"R\xe9gua"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,s.jsx)(o.td,{children:"Os dados podem ser largados sobre um objeto"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"Ao Arrastar Para"})," \xe9 repetidamente enviado para o objeto de destino quando o ponteiro do mouse \xe9 movido sobre o objeto. Em resposta a este evento, normalmente:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Obtenha os dados e assinaturas encontrados no pasteboard (via o comando ",(0,s.jsx)(o.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,s.jsxs)(o.li,{children:["Dependendo da natureza e do tipo de dados na \xe1rea de transfer\xeancia, voc\xea ",(0,s.jsx)(o.strong,{children:"aceita"})," ou ",(0,s.jsx)(o.strong,{children:"rejeita"})," o arrastar e soltar."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para ",(0,s.jsx)(o.strong,{children:"aceitar"})," o arrasto, o m\xe9todo do objeto de destino deve retornar 0 (zero), ent\xe3o voc\xea escreve ",(0,s.jsx)(o.code,{children:"$0:=0"}),".\nPara ",(0,s.jsx)(o.strong,{children:"rejeitar"})," o arrasto, o m\xe9todo do objeto deve retornar -1 (menos um), ent\xe3o voc\xea escreve ",(0,s.jsx)(o.code,{children:"$0:=-1"}),".\nDurante um evento ",(0,s.jsx)(o.code,{children:"Ao Arrastar Exterior"}),", o 4D trata o m\xe9todo do objeto como uma fun\xe7\xe3o. Se nenhum resultado for devolvido, 4D assume que o arrasto \xe9 aceite."]}),"\n",(0,s.jsxs)(o.p,{children:["Se aceitar o arrastamento, o objeto de destino \xe9 real\xe7ado. Se rejeitar o arrastamento, o destino n\xe3o \xe9 real\xe7ado. Accepting the drag does not mean that the dragged data is going to be inserted into the destination object. Isso significa apenas que se o bot\xe3o do mouse for solto neste ponto, o objeto de destino aceitaria os dados arrastados e o evento ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onDrop",children:(0,s.jsx)(o.code,{children:"On Drop"})})," seria disparado."]}),"\n",(0,s.jsxs)(o.p,{children:["Se voc\xea n\xe3o processar o evento ",(0,s.jsx)(o.code,{children:"On Drag Over"})," para um objeto solt\xe1vel, esse objeto ser\xe1 destacado para todas as opera\xe7\xf5es de arrastar, n\xe3o importa qual seja a natureza e o tipo dos dados arrastados."]}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Drag Over"})," \xe9 a maneira pela qual voc\xea controla a primeira fase de uma opera\xe7\xe3o de arrastar e soltar. Not only can you test whether the dragged data is of a type compatible with the destination object, and then accept or reject the drag; you can simultaneously notify the user of this fact, because 4D highlights (or not) the destination object, based on your decision."]}),"\n",(0,s.jsx)(o.p,{children:"O c\xf3digo que manipula um evento 'On Drag Over' deve ser curto e executar rapidamente, porque esse evento \xe9 enviado repetidamente para o objeto de destino atual, devido aos movimentos do mouse."}),"\n",(0,s.jsx)(o.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onBeginDragOver",children:(0,s.jsx)(o.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},n=t.createContext(s);function a(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);