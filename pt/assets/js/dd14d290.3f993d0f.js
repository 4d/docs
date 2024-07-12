/*! For license information please see dd14d290.3f993d0f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25801],{431397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES"},o=void 0,d={id:"ViewPro/commands/vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES",description:"VP SET ROW ATTRIBUTES ( rangeObj Object  )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-row-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-row-attributes",permalink:"/docs/pt/ViewPro/commands/vp-set-row-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-row-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES"},sidebar:"docs",previous:{title:"VP SET PRINT INFO",permalink:"/docs/pt/ViewPro/commands/vp-set-print-info"},next:{title:"VP SET ROW COUNT",permalink:"/docs/pt/ViewPro/commands/vp-set-row-count"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET ROW ATTRIBUTES"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"propertyObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Intervalo de linhas"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propertyObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m as propriedades da linhas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET ROW ATTRIBUTES"})," command applies the attributes defined in the ",(0,r.jsx)(n.em,{children:"propertyObj"})," to the rows in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range. Se o intervalo contiver colunas e linhas, os atributos s\xe3o aplicados apenas \xe0s linhas."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"propertyObj"})," parameter lets you specify the attributes to apply to the rows in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),". Estes atributos s\xe3o:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Altura da linha expressa em p\xedxeis"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageBreak"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True para inserir uma quebra de p\xe1gina antes da primeira linha do intervalo, sen\xe3o false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"visible"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a linha for vis\xedvel, sen\xe3o false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resizable"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a linha puder ser redimensionada, sen\xe3o false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Texto do cabe\xe7alho da linha"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Pretende-se alterar o tamanho da segunda linha e definir o cabe\xe7alho:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $row; $properties : Object\n \n$row:=VP Row("ViewProArea";1)\n$properties:=New object("height";75;"header";"June")\n \nVP SET ROW ATTRIBUTES($row;$properties)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(679631).A+"",width:"555",height:"131"})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-column-attributes",children:"VP get column attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},679631:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpSetRowAttributes-4a46d2daac9f9c643381a86535798f2a.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);