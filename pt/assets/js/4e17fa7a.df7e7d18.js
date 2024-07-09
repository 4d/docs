/*! For license information please see 4e17fa7a.df7e7d18.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44785],{96758:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=o(474848),s=o(28453);const t={id:"vp-add-range-name",title:"VP ADD RANGE NAME"},d=void 0,a={id:"ViewPro/commands/vp-add-range-name",title:"VP ADD RANGE NAME",description:"VP ADD RANGE NAME ( rangeObj Text { ; options : Object } )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-add-range-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-range-name",permalink:"/docs/pt/ViewPro/commands/vp-add-range-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-range-name.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-add-range-name",title:"VP ADD RANGE NAME"},sidebar:"docs",previous:{title:"VP ADD FORMULA NAME",permalink:"/docs/pt/ViewPro/commands/vp-add-formula-name"},next:{title:"VP ADD SELECTION",permalink:"/docs/pt/ViewPro/commands/vp-add-selection"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD RANGE NAME"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"name"})," : Text { ; ",(0,r.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto intervalo"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome da f\xf3rmula"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es para a f\xf3rmula nomeada"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP ADD RANGE NAME"})," cria ou modifica um intervalo nomeado no documento aberto."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Os intervalos nomeados criados por este comando s\xe3o guardados com o documento."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passe o intervalo que voc\xea deseja nomear e, em ",(0,r.jsx)(n.em,{children:"name"}),", passe o novo nome para o intervalo. Se o nome j\xe1 estiver a ser utilizado no mesmo \xe2mbito, o novo intervalo nomeado substitui o existente. Note que pode utilizar o mesmo nome para diferentes \xe2mbitos (ver abaixo)."]}),"\n",(0,r.jsxs)(n.p,{children:["Pode passar um objeto com propriedades adicionais para a f\xf3rmula nomeada em ",(0,r.jsx)(n.em,{children:"options"}),". As propriedades abaixo s\xe3o compat\xedveis:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["\xc2mbito do intervalo. Voc\xea pode passar o \xedndice da planilha (a contagem come\xe7a em 0) ou usar as seguintes constantes: ",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vk current sheet``vk</li><li> workbook"}),"O"]}),"escopo determina se um nome de intervalo \xe9 local em uma determinada planilha (",(0,r.jsx)(n.em,{children:"scope"}),"=sheet index ou ",(0,r.jsx)(n.code,{children:"vk current sheet"}),") ou global em toda a pasta de trabalho (",(0,r.jsx)(n.em,{children:"scope"}),"=",(0,r.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"comment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Coment\xe1rio associado ao intervalo nomeado"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Um intervalo nomeado \xe9, na verdade, uma f\xf3rmula nomeada que cont\xe9m coordenadas. ",(0,r.jsx)(n.code,{children:"VP ADD RANGE NAME"})," facilitates the creation of named ranges, but you can also use the ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-add-formula-name",children:(0,r.jsx)(n.code,{children:"VP ADD FORMULA NAME"})})," method to create named ranges."]}),"\n",(0,r.jsxs)(n.li,{children:["As f\xf3rmulas que definem intervalos nomeados podem ser recuperadas com o m\xe9todo [",(0,r.jsx)(n.code,{children:"VP Get formula by name"}),"] (vp-get-formula-by-name.md)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Pretende criar um intervalo nomeado para um intervalo de c\xe9lulas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";2;10)\nVP ADD RANGE NAME($range;"Total1")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var r=o(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var r,t={},c=null,l=null;for(r in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,r)&&!i.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:l,props:t,_owner:a.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var r=o(296540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);