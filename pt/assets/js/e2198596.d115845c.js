"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99592],{968e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var o=t(474848),s=t(28453);const d={id:"onRowResize",title:"On Row Resize"},r=void 0,i={id:"Events/onRowResize",title:"On Row Resize",description:"| Code | Pode ser chamado por                                    | Defini\xe7\xe3o                                                    |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onRowResize.md",sourceDirName:"Events",slug:"/Events/onRowResize",permalink:"/docs/pt/20-R6/Events/onRowResize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonRowResize.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onRowResize",title:"On Row Resize"},sidebar:"docs",previous:{title:"On Row Moved",permalink:"/docs/pt/20-R6/Events/onRowMoved"},next:{title:"On Scroll",permalink:"/docs/pt/20-R6/Events/onScroll"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Pode ser chamado por"}),(0,o.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"60"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/pt/20-R6/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,o.jsx)(n.td,{children:"A altura de uma linha \xe9 modificada por um usu\xe1rio com o rato"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["This event is generated when the height of a row is modified by a user in a 4D View Pro document. Nesse contexto, o [objeto evento] (overview.md#event-object) retornado pelo comando ",(0,o.jsx)(n.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propriedade"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"code"}),(0,o.jsx)(n.td,{children:"inteiro longo"}),(0,o.jsx)(n.td,{children:"60"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"description"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:'"On Row Resize"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objectName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheetName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"range"}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Intervalo de c\xe9lulas das linhas cujas alturas foram alteradas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"header"}),(0,o.jsx)(n.td,{children:"boolean"}),(0,o.jsx)(n.td,{children:"True se a linha da coluna de cabe\xe7alho (primeira linha) for redimensionada, sen\xe3o false"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(296540);const s={},d=o.createContext(s);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);