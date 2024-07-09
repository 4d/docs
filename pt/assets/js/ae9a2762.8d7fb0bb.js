/*! For license information please see ae9a2762.8d7fb0bb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81138],{832248:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(474848),t=r(28453);const a={id:"onVpReady",title:"On VP Ready"},d=void 0,s={id:"Events/onVpReady",title:"On VP Ready",description:"| Code | Pode ser chamado por                                    | Defini\xe7\xe3o                                        |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onVpReady.md",sourceDirName:"Events",slug:"/Events/onVpReady",permalink:"/docs/pt/19/Events/onVpReady",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onVpReady",title:"On VP Ready"},sidebar:"docs",previous:{title:"On VP Range Changed",permalink:"/docs/pt/19/Events/onVpRangeChanged"},next:{title:"On Window Opening Denied",permalink:"/docs/pt/19/Events/onWindowOpeningDenied"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Pode ser chamado por"}),(0,n.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"9"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,n.jsx)(o.td,{children:"O carregamento da \xe1rea 4D View Pro est\xe1 completo"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"Este evento \xe9 gerado quando o carregamento da \xe1rea 4D View Pro estiver completo."}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea precisa usar esse evento para escrever o c\xf3digo de inicializa\xe7\xe3o da \xe1rea. Qualquer c\xf3digo de inicializa\xe7\xe3o de \xe1rea 4D View Pro, para carregar ou ler valores de, ou na \xe1rea, deve estar localizado no evento formul\xe1rio ",(0,n.jsx)(o.code,{children:"On VP Ready"})," da \xe1rea. Este evento formul\xe1rio \xe9 acionado quando o carregamento da \xe1rea estiver conclu\xeddo. Testar esse evento garante que o c\xf3digo ser\xe1 executado em um contexto v\xe1lido. Um erro \xe9 retornado se um comando 4D View Pro \xe9 chamado antes do evento de formul\xe1rio ",(0,n.jsx)(o.code,{children:"On VP Ready"})," ser gerado."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["As \xe1reas 4D View Pro s\xe3o carregadas de forma ass\xedncrona em formul\xe1rios 4D. Isso significa que o evento padr\xe3o ",(0,n.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:"On load"})," formul\xe1rio n\xe3o pode ser usado para o c\xf3digo de inicializa\xe7\xe3o do 4D View Pro, pois ele pode ser executado antes que a \xe1rea seja completamente carregada. ",(0,n.jsx)(o.code,{children:"Em VP Ready"})," \xe9 sempre gerado ap\xf3s ",(0,n.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:"On load"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var n=r(296540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,r){var n,a={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)d.call(o,n)&&!i.hasOwnProperty(n)&&(a[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===a[n]&&(a[n]=o[n]);return{$$typeof:t,type:e,key:c,ref:l,props:a,_owner:s.current}}o.Fragment=a,o.jsx=c,o.jsxs=c},474848:(e,o,r)=>{e.exports=r(221020)},28453:(e,o,r)=>{r.d(o,{R:()=>d,x:()=>s});var n=r(296540);const t={},a=n.createContext(t);function d(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);