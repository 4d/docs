"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88956"],{745652:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onColumnResize","title":"On Column Resize","description":"| Code | Pode ser chamado por                                                                                                                                                        | Defini\xe7\xe3o                                                                                                                                |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onColumnResize.md","sourceDirName":"Events","slug":"/Events/onColumnResize","permalink":"/docs/pt/20/Events/onColumnResize","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onColumnResize","title":"On Column Resize"},"sidebar":"docs","previous":{"title":"On Column Moved","permalink":"/docs/pt/20/Events/onColumnMoved"},"next":{"title":"On Data Change","permalink":"/docs/pt/20/Events/onDataChange"}}'),s=o("785893"),i=o("250065");let r={id:"onColumnResize",title:"On Column Resize"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemplo",id:"exemplo",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Pode ser chamado por"}),(0,s.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"33"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,s.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,s.jsx)(n.td,{children:"A largura de uma coluna \xe9 modificada directamente pelo utilizador ou, consequentemente, por um redimensionamento da janela do formul\xe1rio"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,s.jsxs)(n.p,{children:["Este evento \xe9 gerado quando a largura de uma coluna na caixa de listagem \xe9 modificada por um utilizador. O evento \xe9 acionado \u201Cao vivo\u201D, *ou seja, *, ele \xe9 enviado continuamente durante o evento, enquanto o list box ou a coluna em quest\xe3o est\xe1 sendo redimensionado. Este redimensionamiento es realizado manualmente por un usuario, o puede ocurrir como resultado de que el list box y su(s) columna(s) sean redimensionados junto con la propia ventana del formulario (ya sea que el formulario sea redimensionado manualmente ou usando o comando ",(0,s.jsx)(n.code,{children:"RESIZE FORMATO WINDOW"}),")."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["O evento ",(0,s.jsx)(n.code,{children:"On Column Resize"})," n\xe3o \xe9 acionado quando um evento ",(0,s.jsx)(n.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#about-the-fake-blank-column",children:"falso coluna"})," \xe9 redimensionado."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,s.jsxs)(n.p,{children:["Este evento \xe9 gerado quando a largura de uma coluna \xe9 modificada por um usu\xe1rio. Neste contexto, o  ",(0,s.jsx)(n.a,{href:"/docs/pt/20/Events/overview#event-object",children:"objeto de evento"})," retornado pelo comando ",(0,s.jsx)(n.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"inteiro longo"}),(0,s.jsx)(n.td,{children:"On Column Resize"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Intervalo de c\xe9lulas das colunas cujas larguras foram alteradas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True se a coluna de cabe\xe7alho da linha (primeira coluna) for redimensionada, sen\xe3o false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return r}});var t=o(667294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);