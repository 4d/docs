"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18837"],{991269:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onMouseEnter","title":"On Mouse Enter","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Defini\xe7\xe3o                                           |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onMouseEnter.md","sourceDirName":"Events","slug":"/Events/onMouseEnter","permalink":"/docs/pt/20-R7/Events/onMouseEnter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseEnter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onMouseEnter","title":"On Mouse Enter"},"sidebar":"docs","previous":{"title":"On Menu Selected","permalink":"/docs/pt/20-R7/Events/onMenuSelected"},"next":{"title":"On Mouse Leave","permalink":"/docs/pt/20-R7/Events/onMouseLeave"}}'),s=r("785893"),n=r("250065");let i={id:"onMouseEnter",title:"On Mouse Enter"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Chamar a pilha",id:"chamar-a-pilha",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"35"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/listOverview#overview",children:"Lista hier\xe1rquica"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/pictureButtonOverview",children:"Bot\xe3o com imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/picturePopupMenuOverview",children:"Menu pop-up com imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/progressIndicator",children:"Indicadores de progresso"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/radiobuttonOverview",children:"Bot\xe3o de op\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/ruler",children:"Regra"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/spinner",children:"Seletor"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/splitters",children:"Separador"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/stepper",children:"Etapas"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,s.jsx)(o.td,{children:"O cursor do rato entra na \xe1rea gr\xe1fica de um objeto"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Esse evento \xe9 gerado uma vez, quando o cursor do mouse entra na \xe1rea gr\xe1fica de um objeto do formul\xe1rio."}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Mouse Enter"})," atualiza as vari\xe1veis sistema ",(0,s.jsx)(o.em,{children:"MouseX"})," e ",(0,s.jsx)(o.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Os objetos tornados invis\xedveis por meio do comando ",(0,s.jsx)(o.code,{children:"OBJECT SET VISIBLE"})," ou da propriedade ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," n\xe3o geram esse evento."]}),"\n",(0,s.jsx)(o.h3,{id:"chamar-a-pilha",children:"Chamar a pilha"}),"\n",(0,s.jsxs)(o.p,{children:["Se o evento ",(0,s.jsx)(o.code,{children:"On Mouse Enter"})," tiver sido verificado para o formul\xe1rio, ele ser\xe1 gerado para cada objeto de formul\xe1rio. Se for verificada para um objeto, \xe9 gerada apenas para esse objeto. Quando h\xe1 objetos sobrepostos, o evento \xe9 gerado pelo primeiro objeto capaz de gerenci\xe1-lo que for encontrado, seguindo a ordem do n\xedvel superior para o inferior."]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/Events/onMouseMove",children:(0,s.jsx)(o.code,{children:"On Mouse Move"})})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/Events/onMouseLeave",children:(0,s.jsx)(o.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},n=t.createContext(s);function i(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);