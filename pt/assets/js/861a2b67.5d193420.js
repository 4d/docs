"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69821"],{124577:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"Events/onMouseLeave","title":"On Mouse Leave","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defini\xe7\xe3o                                          |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onMouseLeave.md","sourceDirName":"Events","slug":"/Events/onMouseLeave","permalink":"/docs/pt/19/Events/onMouseLeave","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onMouseLeave","title":"On Mouse Leave"},"sidebar":"docs","previous":{"title":"On Mouse Enter","permalink":"/docs/pt/19/Events/onMouseEnter"},"next":{"title":"On Mouse Move","permalink":"/docs/pt/19/Events/onMouseMove"}}'),t=r("785893"),n=r("250065");let i={id:"onMouseLeave",title:"On Mouse Leave"},a=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Chamar a pilha",id:"chamar-a-pilha",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"36"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Grelha de bot\xf5es"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Bot\xe3o imagem"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview",children:"\xc1rea de plug-in"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Indicador de progresso"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Bot\xe3o raio"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Regra"})," -",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab"})]}),(0,t.jsx)(o.td,{children:"O cursor do rato deixa a \xe1rea gr\xe1fica de um objeto"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"Esse evento \xe9 gerado uma vez, quando o cursor do mouse deixa na \xe1rea gr\xe1fica de um objeto."}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"On Mouse Leave"})," atualiza as vari\xe1veis do sistema ",(0,t.jsx)(o.em,{children:"MouseX"})," e ",(0,t.jsx)(o.em,{children:"MouseY"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Objetos tornados invis\xedveis usando o comando ",(0,t.jsx)(o.code,{children:"OBJECT SET VISIBLE"})," ou a propriedade ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," n\xe3o geram este evento."]}),"\n",(0,t.jsx)(o.h3,{id:"chamar-a-pilha",children:"Chamar a pilha"}),"\n",(0,t.jsxs)(o.p,{children:["Se o evento ",(0,t.jsx)(o.code,{children:"On Mouse Leave"})," tiver sido verificado para o formul\xe1rio, ele ser\xe1 gerado para cada objeto de formul\xe1rio. Se for verificada para um objeto, \xe9 gerada apenas para esse objeto. Quando h\xe1 objetos sobrepostos, o evento \xe9 gerado pelo primeiro objeto capaz de gerenci\xe1-lo que for encontrado, seguindo a ordem do n\xedvel superior para o inferior."]}),"\n",(0,t.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onMouseMove",children:(0,t.jsx)(o.code,{children:"On Mouse Move"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onMouseLeave",children:(0,t.jsx)(o.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},n=s.createContext(t);function i(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);