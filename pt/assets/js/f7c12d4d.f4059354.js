/*! For license information please see f7c12d4d.f4059354.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18712],{50035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(474848),r=t(28453);const s={id:"onColumnResize",title:"On Column Resize"},i=void 0,d={id:"Events/onColumnResize",title:"On Column Resize",description:"| Code | Pode ser chamado por                                                                                                                                                        | Defini\xe7\xe3o                                                                                                                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/pt/20/Events/onColumnResize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/pt/20/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/pt/20/Events/onDataChange"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemplo",id:"exemplo",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Pode ser chamado por"}),(0,o.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"33"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,o.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,o.jsx)(n.td,{children:"A largura de uma coluna \xe9 modificada directamente pelo utilizador ou, consequentemente, por um redimensionamento da janela do formul\xe1rio"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,o.jsxs)(n.p,{children:['Este evento \xe9 gerado quando a largura de uma coluna na caixa de listagem \xe9 modificada por um utilizador. The event is triggered "live", ',(0,o.jsx)(n.em,{children:"i.e."}),", sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the ",(0,o.jsx)(n.code,{children:"RESIZE FORM WINDOW"})," command)."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"On Column Resize"})," event is not triggered when a ",(0,o.jsx)(n.a,{href:"FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column",children:"fake column"})," is resized."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,o.jsxs)(n.p,{children:["This event is generated when the width of a column is modified by a user. Neste contexto, o  ",(0,o.jsx)(n.a,{href:"/docs/pt/20/Events/overview#event-object",children:"objeto de evento"})," retornado pelo comando ",(0,o.jsx)(n.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propriedade"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"code"}),(0,o.jsx)(n.td,{children:"inteiro longo"}),(0,o.jsx)(n.td,{children:"On Column Resize"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"description"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objectName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheetName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"range"}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Intervalo de c\xe9lulas das colunas cujas larguras foram alteradas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"header"}),(0,o.jsx)(n.td,{children:"boolean"}),(0,o.jsx)(n.td,{children:"True se a coluna de cabe\xe7alho da linha (primeira coluna) for redimensionada, sen\xe3o false"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var o=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,s={},c=null,a=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(296540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);