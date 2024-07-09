/*! For license information please see de6a0936.3190e9eb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76747],{196278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"onHeaderClick",title:"On Header Click"},d=void 0,i={id:"Events/onHeaderClick",title:"On Header Click",description:"| Code | Pode ser chamado por                                                                                                                                                        | Defini\xe7\xe3o                                   |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onHeaderClick.md",sourceDirName:"Events",slug:"/Events/onHeaderClick",permalink:"/docs/pt/20/Events/onHeaderClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeaderClick.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onHeaderClick",title:"On Header Click"},sidebar:"docs",previous:{title:"On Header",permalink:"/docs/pt/20/Events/onHeader"},next:{title:"On Load",permalink:"/docs/pt/20/Events/onLoad"}},c={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"List Box",id:"List-Box",level:3},{value:"4D View Pro",id:"4D-View-Pro",level:3},{value:"Exemplo",id:"Exemplo",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Pode ser chamado por"}),(0,r.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"42"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,r.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,r.jsx)(n.td,{children:"Ocorre um clique no cabe\xe7alho de uma coluna"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.h3,{id:"List-Box",children:"List Box"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when a click occurs on the header of a column in the list box. In this case, the ",(0,r.jsx)(n.code,{children:"Self"})," command lets you find out the header of the column that was clicked."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.a,{href:"/docs/pt/20/FormObjects/propertiesAction#sortable",children:"Sortable"})," property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the ",(0,r.jsx)(n.code,{children:"$0"})," variable:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Se ",(0,r.jsx)(n.code,{children:"$0"})," \xe9 igual a 0, \xe9 efetuada uma ordena\xe7\xe3o padr\xe3o."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"$0"})," equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.a,{href:"/docs/pt/20/FormObjects/propertiesAction#sortable",children:"Sortable"})," property is not selected for the list box, the ",(0,r.jsx)(n.code,{children:"$0"})," variable is not used."]}),"\n",(0,r.jsx)(n.h3,{id:"4D-View-Pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the ",(0,r.jsx)(n.a,{href:"/docs/pt/20/Events/overview#event-object",children:"event object"})," returned by the ",(0,r.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"inteiro longo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Header Click"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetArea"}),(0,r.jsx)(n.td,{children:"inteiro longo"}),(0,r.jsxs)(n.td,{children:["O local da folha onde o evento teve lugar:",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.li,{children:"0: The crossing area between column number/letter headers (top left of the sheet)"}),(0,r.jsx)(n.li,{children:"1: os cabe\xe7alhos das colunas (\xe1rea que indica os n\xfameros/letras das colunas)"}),(0,r.jsx)(n.li,{children:"2: os cabe\xe7alhos das linhas (\xe1rea que indica os n\xfameros das linhas)"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Header Click)\n    Case of\n       :(FORM Event.sheetArea=1)\n          $values:=VP Get values(FORM Event.range)\n       :(FORM Event.sheetArea=2)\n          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))\n       :(FORM Event.sheetArea=0)\n          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\\\n          New object("color";"#800080";"style";vk line style thick)))\n    End case\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);