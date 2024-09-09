/*! For license information please see 797fa9e0.6a145d61.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51057],{728252:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>j,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>x,toc:()=>o});var n=i(474848),r=i(28453);const t={id:"vp-get-cell-style",title:"VP Get cell style"},l=void 0,x={id:"ViewPro/commands/vp-get-cell-style",title:"VP Get cell style",description:"VP Get cell style (  rangeObj Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-cell-style.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-cell-style",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-cell-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-cell-style.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-cell-style",title:"VP Get cell style"},sidebar:"docs",previous:{title:"VP Get binding path",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-binding-path"},next:{title:"VP Get column attributes",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-column-attributes"}},j={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"VP Get cell style"})," (  ",(0,n.jsx)(s.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe1metros"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rangeObj"}),(0,n.jsx)(s.td,{children:"Object"}),(0,n.jsx)(s.td,{children:"->"}),(0,n.jsx)(s.td,{children:"Objeto rango"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Result"}),(0,n.jsx)(s.td,{children:"Object"}),(0,n.jsx)(s.td,{children:"<-"}),(0,n.jsx)(s.td,{children:"Objeto style"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(s.p,{children:["El comando ",(0,n.jsx)(s.code,{children:"VP Get cell style"})," devuelve un ",(0,n.jsx)(s.a,{href:"/docs/es/20-R5/ViewPro/configuring#style-objects",children:"objeto estilo"})," para la primera celda del ",(0,n.jsx)(s.em,{children:"rangeObj"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["En ",(0,n.jsx)(s.em,{children:"rangeObj"}),", pase un rango que contenga el estilo a recuperar."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Si ",(0,n.jsx)(s.em,{children:"rangeObj"})," contiene un rango de celdas, se devuelve el estilo de la celda."]}),"\n",(0,n.jsxs)(s.li,{children:["Si ",(0,n.jsx)(s.em,{children:"rangeObj"})," contiene un rango que no es un rango de celdas, se devuelve el estilo de la primera celda del rango."]}),"\n",(0,n.jsxs)(s.li,{children:["Si ",(0,n.jsx)(s.em,{children:"rangeObj"})," contiene varios rangos, s\xf3lo se devuelve el estilo de la primera celda del primer rango."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(s.p,{children:"Para obtener los detalles sobre el estilo en la celda seleccionada (B2):"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(230098).A+"",width:"283",height:"250"})}),"\n",(0,n.jsx)(s.p,{children:"Este c\xf3digo:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$cellStyle:=VP Get cell style(VP Get selection("myDoc"))\n'})}),"\n",(0,n.jsx)(s.p,{children:"... devolver\xe1 este objeto:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'{\n  "backColor":"Azure",\n  "borderBottom":\n   {\n     "color":#800080,\n     "style":5\n   }\n  "font":"8pt Arial",\n  "foreColor":"red",\n  "hAlign":1,\n  "isVerticalText":"true",\n  "vAlign":0\n}\n'})}),"\n",(0,n.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-default-style",children:"VP GET DEFAULT STYLE"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,s,i)=>{var n=i(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,i){var n,t={},o=null,c=null;for(n in void 0!==i&&(o=""+i),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,n)&&!j.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:r,type:e,key:o,ref:c,props:t,_owner:x.current}}s.Fragment=t,s.jsx=o,s.jsxs=o},474848:(e,s,i)=>{e.exports=i(221020)},230098:(e,s,i)=>{i.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>x});var n=i(296540);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function x(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);