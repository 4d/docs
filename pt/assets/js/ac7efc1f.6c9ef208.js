"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9520"],{832756:function(e,o,n){n.r(o),n.d(o,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"Events/onDisplayDetail","title":"On Display Detail","description":"| Code | Pode ser chamado por                                     | Defini\xe7\xe3o                                                                                                                                |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onDisplayDetail.md","sourceDirName":"Events","slug":"/Events/onDisplayDetail","permalink":"/docs/pt/Events/onDisplayDetail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDisplayDetail.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onDisplayDetail","title":"On Display Detail"},"sidebar":"docs","previous":{"title":"On Delete Action","permalink":"/docs/pt/Events/onDeleteAction"},"next":{"title":"On Double Clicked","permalink":"/docs/pt/Events/onDoubleClicked"}}'),i=n("785893"),t=n("250065");let d={id:"onDisplayDetail",title:"On Display Detail"},r=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Formul\xe1rio de sa\xedda",id:"formul\xe1rio-de-sa\xedda",level:3},{value:"List box sele\xe7\xe3o",id:"list-box-sele\xe7\xe3o",level:3},{value:"N\xfamero de linha apresentado",id:"n\xfamero-de-linha-apresentado",level:3}];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Code"}),(0,i.jsx)(o.th,{children:"Pode ser chamado por"}),(0,i.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,i.jsx)(o.tbody,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"8"}),(0,i.jsxs)(o.td,{children:["Formulario - ",(0,i.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})]}),(0,i.jsx)(o.td,{children:"Um registro est\xe1 prestes a ser exibido em um formul\xe1rio de lista ou uma linha est\xe1 prestes a ser exibida em um list box."})]})})]}),"\n",(0,i.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["O evento ",(0,i.jsx)(o.code,{children:"On Display Detail"})," pode ser usado nos seguintes contextos:"]}),"\n",(0,i.jsx)(o.h3,{id:"formul\xe1rio-de-sa\xedda",children:"Formul\xe1rio de sa\xedda"}),"\n",(0,i.jsxs)(o.p,{children:["Um registro est\xe1 prestes a ser exibido em um formul\xe1rio de lista exibido via ",(0,i.jsx)(o.code,{children:"DISPLAY SELECTION"})," e ",(0,i.jsx)(o.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,i.jsx)(o.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Neste contexto, a seguinte sequ\xeancia de chamadas para os m\xe9todos e eventos de formul\xe1rio \xe9 ativada:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Para cada registo:\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Para cada objecto na \xe1rea de detalhes:\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["M\xe9todo objecto com o evento ",(0,i.jsx)(o.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["M\xe9todo formul\xe1rio com o evento ",(0,i.jsx)(o.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["A \xe1rea do cabe\xe7alho \xe9 tratada usando o evento ",(0,i.jsx)(o.a,{href:"/docs/pt/Events/onHeader",children:(0,i.jsx)(o.code,{children:"On Header"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Chamar um comando 4D que exibe uma caixa de di\xe1logo a partir do evento ",(0,i.jsx)(o.code,{children:"On Exibir Detalhe"})," n\xe3o \xe9 permitido e causar\xe1 um erro de sintaxe. Mais especificamente, os comandos em quest\xe3o s\xe3o: ",(0,i.jsx)(o.code,{children:"ALERT"}),", ",(0,i.jsx)(o.code,{children:"DIALOG"}),", ",(0,i.jsx)(o.code,{children:"CONFIRM"}),", ",(0,i.jsx)(o.code,{children:"Request"}),", ",(0,i.jsx)(o.code,{children:"ADD RECORD"}),", ",(0,i.jsx)(o.code,{children:"MODIFY RECORD"}),", ",(0,i.jsx)(o.code,{children:"DISPLAY SELECTION"}),", and ",(0,i.jsx)(o.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"list-box-sele\xe7\xe3o",children:"List box sele\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["Este evento \xe9 gerado quando uma linha de um ",(0,i.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#selection-list-boxes",children:(0,i.jsx)(o.strong,{children:"tipo de sele\xe7\xe3o"})})," \xe9 exibida."]}),"\n",(0,i.jsx)(o.h3,{id:"n\xfamero-de-linha-apresentado",children:"N\xfamero de linha apresentado"}),"\n",(0,i.jsxs)(o.p,{children:["O comando ",(0,i.jsx)(o.code,{children:"N\xfamero de linha exibido"})," 4D funciona com o evento de formul\xe1rio ",(0,i.jsx)(o.code,{children:"Detalhes de Exibi\xe7\xe3o"}),". Ele retorna o n\xfamero da linha sendo processada enquanto uma lista de registros ou linhas de list box \xe9 exibida na tela."]})]})}function h(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return r},a:function(){return d}});var s=n(667294);let i={},t=s.createContext(i);function d(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);