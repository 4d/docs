/*! For license information please see 0166f6a5.20b10e9e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37804],{370052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"vp-get-column-count",title:"VP Get column count"},c=void 0,d={id:"ViewPro/commands/vp-get-column-count",title:"VP Get column count",description:"VP Get column count ( vpAreaName  Integer } ) : Integer",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-column-count.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-column-count",permalink:"/docs/es/ViewPro/commands/vp-get-column-count",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-column-count.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-column-count",title:"VP Get column count"},sidebar:"docs",previous:{title:"VP Get column attributes",permalink:"/docs/es/ViewPro/commands/vp-get-column-attributes"},next:{title:"VP Get current sheet",permalink:"/docs/es/ViewPro/commands/vp-get-current-sheet"}},i={},l=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get column count"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," :  Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro en el formulario"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"N\xfamero total de columnas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP Get column count"})," devuelve el n\xfamero total de columnas de la ",(0,r.jsx)(n.em,{children:"sheet"})," designada."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre de la propiedad del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede definir d\xf3nde obtener el n\xfamero de columnas en el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"sheet"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0). Si se omite o si se pasa ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", se utiliza la hoja de c\xe1lculo actual."]}),"\n",(0,r.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente c\xf3digo devuelve el n\xfamero de columnas en el \xe1rea 4D View Pro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_INTEGER($colCount)\n$colCount:=VP Get column count("ViewProarea")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-row-count",children:"VP Get row count"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-column-count",children:"VP SET COLUMN COUNT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(296540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);