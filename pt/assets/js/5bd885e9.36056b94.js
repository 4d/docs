/*! For license information please see 5bd885e9.36056b94.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42501],{4226:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(474848),r=n(28453);const i={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},s=void 0,c={id:"ViewPro/commands/vp-convert-from-4d-view",title:"VP Convert from 4D View",description:"VP Convert from 4D View ( 4DViewDocument Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-convert-from-4d-view.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-convert-from-4d-view",permalink:"/docs/pt/ViewPro/commands/vp-convert-from-4d-view",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},sidebar:"docs",previous:{title:"VP Combine ranges",permalink:"/docs/pt/ViewPro/commands/vp-combine-ranges"},next:{title:"VP Convert to picture",permalink:"/docs/pt/ViewPro/commands/vp-convert-to-picture"}},d={},a=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4}];function m(e){const o={blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"VP Convert from 4D View"})," ( ",(0,t.jsx)(o.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"4DViewDocument"}),(0,t.jsx)(o.td,{children:"Blob"}),(0,t.jsx)(o.td,{children:"->"}),(0,t.jsx)(o.td,{children:"Documento 4D View"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultados"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"<-"}),(0,t.jsx)(o.td,{children:"Objeto 4D View Pro"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.code,{children:"VP Convert from 4D View"})," permite que voc\xea converta um documento legado do 4D View em um objeto do 4D View Pro."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Esse comando n\xe3o exige que o plug-in legado do 4D View esteja instalado em seu ambiente."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["No par\xe2metro ",(0,t.jsx)(o.em,{children:"4DViewDocument"}),", passe uma vari\xe1vel ou campo BLOB que contenha o documento do 4D View a ser convertido. O comando retorna um objeto 4D View Pro no qual todas as informa\xe7\xf5es originalmente armazenadas no documento 4D View s\xe3o convertidas em atributos 4D View Pro."]}),"\n",(0,t.jsx)(o.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Se quiser obter um objeto 4D View Pro de uma \xe1rea 4D View armazenada em um BLOB:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},221020:(e,o,n)=>{var t=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,n){var t,i={},a=null,m=null;for(t in void 0!==n&&(a=""+n),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(m=o.ref),o)s.call(o,t)&&!d.hasOwnProperty(t)&&(i[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===i[t]&&(i[t]=o[t]);return{$$typeof:r,type:e,key:a,ref:m,props:i,_owner:c.current}}o.Fragment=i,o.jsx=a,o.jsxs=a},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var t=n(296540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);