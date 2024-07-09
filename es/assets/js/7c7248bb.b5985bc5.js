/*! For license information please see 7c7248bb.b5985bc5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12898],{986204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=s(474848),o=s(28453);const c={id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},a=void 0,i={id:"ViewPro/commands/vp-suspend-computing",title:"VP SUSPEND COMPUTING",description:"VP SUSPEND COMPUTING ( vpAreaName : Text )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-suspend-computing.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-suspend-computing",permalink:"/docs/es/ViewPro/commands/vp-suspend-computing",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-suspend-computing.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},sidebar:"docs",previous:{title:"VP SHOW CELL",permalink:"/docs/es/ViewPro/commands/vp-show-cell"},next:{title:"4D Write Pro Interface",permalink:"/docs/es/WritePro/writeprointerface"}},t={},d=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SUSPEND COMPUTING"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," detiene el c\xe1lculo de todas las f\xf3rmulas en ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Este comando es \xfatil cuando se desea suspender los c\xe1lculos en esta \xe1rea 4D View Pro para poder realizar manualmente modificaciones en las f\xf3rmulas sin encontrar errores antes de terminar de hacer los cambios."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando pausa los c\xe1lculos en 4D View Pro. Las f\xf3rmulas que ya han sido calculadas permanecen inalteradas, sin embargo cualquier f\xf3rmula a\xf1adida despu\xe9s de ejecutar el comando ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," no es calculada."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["El servicio de c\xe1lculo de 4D View Pro mantiene un contador de acciones de suspensi\xf3n/reanudaci\xf3n. Por lo tanto, cada ejecuci\xf3n del comando ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," debe ser balanceada por una ejecuci\xf3n correspondiente del comando ",(0,r.jsx)(n.code,{children:"VP RESUME COMPUTING"}),". Toda f\xf3rmula afectada por las modificaciones realizadas mientras los c\xe1lculos est\xe1n suspendidos ser\xe1 recalculada cuando se ejecute el comando."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Ha a\xf1adido dos botones al formulario para que el usuario pueda suspender/reanudar los c\xe1lculos:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(111959).A+"",width:"526",height:"226"})}),"\n",(0,r.jsx)(n.p,{children:"El c\xf3digo del bot\xf3n Suspend Computing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //pausar los c\xe1lculos mientras los usuarios introducen la informaci\xf3n\n If(FORM Event.code=On Clicked)\n\n    VP SUSPEND COMPUTING("ViewProArea")\n \n End if\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If(FORM Event.code=On Clicked)\n \n    VP RESUME COMPUTING("ViewProArea")\n \nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var r=s(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,c={},d=null,l=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!t.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},111959:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cmd_vpStopCalculations-3e947019a84a2b9023514cbb8d15780f.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(296540);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);