/*! For license information please see f0591ac0.0d4af50b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20328],{352391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=t(474848),s=t(28453);const c={id:"vp-get-active-cell",title:"VP Get active cell"},i=void 0,o={id:"ViewPro/commands/vp-get-active-cell",title:"VP Get active cell",description:"VP Get active cell (  vpAreaName Integer } ) : Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-active-cell.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-active-cell",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-active-cell",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-active-cell.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-active-cell",title:"VP Get active cell"},sidebar:"docs",previous:{title:"G",permalink:"/docs/es/20-R5/commands/G"},next:{title:"VP Get binding path",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-binding-path"}},l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get active cell"})," (  ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto rango de una sola celda"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP Get active cell"})," devuelve un nuevo objeto de rango que hace referencia a la celda que tiene el foco y en la que se introducir\xe1n los nuevos datos (la celda activa)."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si se omite o si se pasa ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", se utiliza la hoja de c\xe1lculo actual."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(835359).A+"",width:"548",height:"359"})}),"\n",(0,r.jsx)(n.p,{children:"El siguiente c\xf3digo recuperar\xe1 las coordenadas de la celda activa:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Get active cell("myVPArea")\n\n  //devuelve un objeto rango que contiene: \n  //$activeCell.ranges[0].column=3\n  //$activeCell.ranges[0].row=4\n  //$activeCell.ranges[0].sheet=0\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,d=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:d,props:c,_owner:o.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},835359:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpGetActiveCell-8ebb4e93425aab7ecfcd2a337e26e6a9.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(296540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);