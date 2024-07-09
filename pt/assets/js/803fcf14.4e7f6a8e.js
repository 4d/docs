/*! For license information please see 803fcf14.4e7f6a8e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46724],{505662:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=s(474848),t=s(28453);const o={id:"vp-move-cells",title:"VP MOVE CELLS"},i=void 0,d={id:"ViewPro/commands/vp-move-cells",title:"VP MOVE CELLS",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-move-cells.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-move-cells",permalink:"/docs/pt/ViewPro/commands/vp-move-cells",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-move-cells.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-move-cells",title:"VP MOVE CELLS"},sidebar:"docs",previous:{title:"M",permalink:"/docs/pt/commands/M"},next:{title:"N",permalink:"/docs/pt/commands/N"}},l={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP MOVE CELLS"})," ( ",(0,r.jsx)(n.em,{children:"originRange"})," : Object ; ",(0,r.jsx)(n.em,{children:"targetRange"})," : Object ; ",(0,r.jsx)(n.em,{children:"options"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"originRange"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Intervalo de c\xe9lulas a partir do qual copiar"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetRange"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Intervalo de destino para os valores, formata\xe7\xe3o e f\xf3rmulas"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es adicionais"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP MOVE CELLS"})," command moves or copies the values, style and formulas from ",(0,r.jsx)(n.em,{children:"originRange"})," to ",(0,r.jsx)(n.em,{children:"targetRange"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"originRange"})," and ",(0,r.jsx)(n.em,{children:"targetRange"})," can refer to different View Pro areas."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"originRange"}),", pass a range object containing the values, style, and formula cells to copy or move. If ",(0,r.jsx)(n.em,{children:"originRange"})," is a combined range, only the first one is used."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"targetRange"}),", pass the range of cells where the cell values, style, and formulas will be copied or moved."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"options"})," parameter has several properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"copy"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["Determines if the values, formatting and formulas of the cells in ",(0,r.jsx)(n.em,{children:"originRange"})," are removed after the command executes:",(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"False"})," (default) to remove them"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"True"})," to keep them"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pasteOptions"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsxs)(n.td,{children:["Especifica o que \xe9 colado. Possible values: ",(0,r.jsx)(n.p,{}),(0,r.jsx)(n.table,{children:(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"vk clipboard options all"})," (default)"]}),(0,r.jsx)(n.td,{children:"Pastes all data objects, including values, formatting, and formulas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formatting"})}),(0,r.jsx)(n.td,{children:"Pastes only the formatting."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formulas"})}),(0,r.jsx)(n.td,{children:"Pastes only the formulas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formulas and formatting"})}),(0,r.jsx)(n.td,{children:"Pastes the formulas and formatting."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options values"})}),(0,r.jsx)(n.td,{children:"Pastes only the values."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options value and formatting"})}),(0,r.jsx)(n.td,{children:"Pastes the values and formatting."})]})]})}),(0,r.jsx)(n.p,{})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The paste options defined in the ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-workbook-options",children:"workbook options"})," are taken into account."]}),"\n",(0,r.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para copiar os conte\xfados, valores, formata\xe7\xe3o e f\xf3rmulas de um intervalo de origem:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $originRange; $targetRange; $options : Object\n\n$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)\n\n$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)\n\n$options:=New object\n$options.copy:=True\n$options.pasteOptions:=vk clipboard options all\n\nVP MOVE CELLS($originRange; $targetRange; $options)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-paste-from-object",children:"VP PASTE FROM OBJECT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,o={},c=null,a=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(296540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);