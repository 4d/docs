/*! For license information please see ab8e58f3.1a929c03.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47981],{592040:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(474848),s=r(28453);const l={id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},d=void 0,o={id:"ViewPro/commands/vp-set-frozen-panes",title:"VP SET FROZEN PANES",description:"VP SET FROZEN PANES ( vpAreaName Object { ; sheet : Integer } )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-frozen-panes",permalink:"/docs/es/ViewPro/commands/vp-set-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-frozen-panes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},sidebar:"docs",previous:{title:"VP SET FORMULAS",permalink:"/docs/es/ViewPro/commands/vp-set-formulas"},next:{title:"VP SET NUM VALUE",permalink:"/docs/es/ViewPro/commands/vp-set-num-value"}},t={},i=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VP SET FROZEN PANES"})," ( ",(0,a.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,a.jsx)(n.em,{children:"paneObj"})," : Object { ; ",(0,a.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metros"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"vpAreaName"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"paneObj"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Objeto que contiene la informaci\xf3n de las columnas y l\xedneas congeladas"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sheet"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.code,{children:"VP SET FROZEN PANES"})," define el estado congelado de las columnas y filas del ",(0,a.jsx)(n.em,{children:"paneObj"})," para que se muestren siempre en el ",(0,a.jsx)(n.em,{children:"vpAreaName"}),". . Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Columnas a la izquierda o a la derecha"}),": para las columnas a la izquierda de la hoja, la l\xednea se muestra a la derecha de la \xfaltima columna congelada. Para las columnas situadas a la derecha de la hoja, la l\xednea se muestra a la izquierda de la primera columna congelada."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"L\xedneas en la parte superior o inferior"}),": para las l\xedneas en la parte superior de la hoja, la l\xednea se muestra debajo de la \xfaltima l\xednea congelada. Para las l\xedneas situadas en la parte inferior de la hoja, la l\xednea se muestra sobre la primera l\xednea congelada."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar un objeto que defina las columnas y l\xedneas a congelar en el par\xe1metro ",(0,a.jsx)(n.em,{children:"paneObj"}),". Al definir el valor de una propiedad de columna o de l\xednea en cero, se restablece (descongela) la propiedad. Si una propiedad est\xe1 definida como menor que cero, el comando no hace nada. Puede pasar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedad"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"columnCount"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"El n\xfamero de columnas congeladas a la izquierda de la hoja"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"trailingColumnCount"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"El n\xfamero de columnas congeladas a la derecha de la hoja"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rowCount"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"El n\xfamero de l\xedneas congeladas en la parte superior de la hoja"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"trailingRowCount"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"El n\xfamero de l\xedneas congeladas en la parte inferior de la hoja"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Quiere congelar las tres primeras columnas de la izquierda, dos columnas de la derecha y la primera l\xednea:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($panes)\n \n$panes:=New object\n$panes.columnCount:=3\n$panes.trailingColumnCount:=2\n$panes.rowCount:=1\n \nVP SET FROZEN PANES("ViewProArea";$panes)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:r(925918).A+"",width:"897",height:"234"})}),"\n",(0,a.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-frozen-panes",children:"VP Get frozen panes"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var a=r(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var a,l={},i=null,c=null;for(a in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,a)&&!t.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:s,type:e,key:i,ref:c,props:l,_owner:o.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},925918:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/cmd_vpSetFrozenPanes-96df239cfd6abd118d629eff64976791.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var a=r(296540);const s={},l=a.createContext(s);function d(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);