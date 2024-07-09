/*! For license information please see cf3105a0.b31ec1c6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71822],{746428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"vp-get-selection",title:"VP Get selection"},c=void 0,i={id:"ViewPro/commands/vp-get-selection",title:"VP Get selection",description:"VP Get selection ( vpAreaName Integer } ) ) : Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-selection",permalink:"/docs/pt/ViewPro/commands/vp-get-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-selection.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-selection",title:"VP Get selection"},sidebar:"docs",previous:{title:"VP Get row count",permalink:"/docs/pt/ViewPro/commands/vp-get-row-count"},next:{title:"VP Get sheet count",permalink:"/docs/pt/ViewPro/commands/vp-get-sheet-count"}},d={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get selection"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro no formul\xe1rio"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto intervalo de c\xe9lulas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get selection"})," command returns a new range object referencing the current selected cells."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se omitido ou se voc\xea passar ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,r.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(24083).A+"",width:"553",height:"365"})}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo seguinte recuperar\xe1 as coordenadas de todas as c\xe9lulas na sele\xe7\xe3o atual:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Get selection("myVPArea")\n\n \n//returns a range object containing:  \n//$currentSelection.ranges[0].column=5\n//$currentSelection.ranges[0].columnCount=2\n//$currentSelection.ranges[0].row=8\n//$currentSelection.ranges[0].rowCount=6\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},24083:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpGetSelection-f6160840f42a7d437018fd26a4a1c6c4.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);