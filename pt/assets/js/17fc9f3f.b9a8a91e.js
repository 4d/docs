"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98120"],{815063:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"Events/onRowResize","title":"On Row Resize","description":"| Code | Pode ser chamado por                                    | Defini\xe7\xe3o                                                    |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Events/onRowResize.md","sourceDirName":"Events","slug":"/Events/onRowResize","permalink":"/docs/pt/Events/onRowResize","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonRowResize.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onRowResize","title":"On Row Resize"},"sidebar":"docs","previous":{"title":"On Row Moved","permalink":"/docs/pt/Events/onRowMoved"},"next":{"title":"On Scroll","permalink":"/docs/pt/Events/onScroll"}}'),r=t("785893"),s=t("250065");let d={id:"onRowResize",title:"On Row Resize"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Pode ser chamado por"}),(0,r.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"60"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,r.jsx)(n.td,{children:"A altura de uma linha \xe9 modificada por um usu\xe1rio com o rato"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["Esse evento \xe9 gerado quando a altura de uma linha \xe9 modificada por um usu\xe1rio em um documento 4D View Pro. Nesse contexto, o [objeto evento] (overview.md#event-object) retornado pelo comando ",(0,r.jsx)(n.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"inteiro longo"}),(0,r.jsx)(n.td,{children:"60"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Row Resize"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Intervalo de c\xe9lulas das linhas cujas alturas foram alteradas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a linha da coluna de cabe\xe7alho (primeira linha) for redimensionada, sen\xe3o false"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var o=t(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);