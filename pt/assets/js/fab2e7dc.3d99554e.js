/*! For license information please see fab2e7dc.3d99554e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94787],{915324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(474848),s=r(28453);const o={id:"vp-get-frozen-panes",title:"VP Get frozen panes"},d=void 0,a={id:"ViewPro/commands/vp-get-frozen-panes",title:"VP Get frozen panes",description:"VP Get frozen panes ( vpAreaName Integer } ) : Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-frozen-panes",permalink:"/docs/pt/ViewPro/commands/vp-get-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-frozen-panes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-frozen-panes",title:"VP Get frozen panes"},sidebar:"docs",previous:{title:"VP Get formulas",permalink:"/docs/pt/ViewPro/commands/vp-get-formulas"},next:{title:"VP Get names",permalink:"/docs/pt/ViewPro/commands/vp-get-names"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Objeto devolvido",id:"Objeto-devolvido",level:5},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get frozen panes"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto que cont\xe9m as informa\xe7\xf5es sobre as colunas e linhas congeladas"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get frozen panes"})," command returns an object with information about the frozen columns and rows in ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se omitido ou se voc\xea passar ",(0,t.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,t.jsx)(n.h5,{id:"Objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,t.jsx)(n.p,{children:"O comando devolve um objeto que descreve as colunas e linhas congeladas. Este objeto pode conter as seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columnCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 esquerda da folha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trailingColumnCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 direita da folha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte superior da folha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trailingRowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte inferior da folha"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Pretende obter informa\xe7\xf5es sobre o n\xfamero de colunas e linhas congeladas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $panesObj : Object\n\n \n$panesObj:=VP Get frozen panes("ViewProArea")\n'})}),"\n",(0,t.jsx)(n.p,{children:"O objeto devolvido cont\xe9m, por exemplo:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(792994).A+"",width:"1123",height:"210"})}),"\n",(0,t.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-frozen-panes",children:"VP SET FROZEN PANES"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},792994:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpGetFrozenpanes-398acd4f3af923b58c396d0fa808b53c.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(296540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);