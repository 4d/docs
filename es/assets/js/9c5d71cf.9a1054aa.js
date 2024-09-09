/*! For license information please see 9c5d71cf.9a1054aa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31223],{285522:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var o=r(474848),s=r(28453);const t={id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},a=void 0,c={id:"ViewPro/commands/vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS",description:"VP RECOMPUTE FORMULAS ( vpAreaName : Text )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-recompute-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-recompute-formulas",permalink:"/docs/es/ViewPro/commands/vp-recompute-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-recompute-formulas.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},sidebar:"docs",previous:{title:"R",permalink:"/docs/es/commands/R"},next:{title:"VP REMOVE NAME",permalink:"/docs/es/ViewPro/commands/vp-remove-name"}},d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP RECOMPUTE FORMULAS"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,o.jsx)(n.td,{})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," eval\xfaa inmediatamente todas las f\xf3rmulas en ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". Por defecto, 4D calcula autom\xe1ticamente las f\xf3rmulas cuando se insertan, importan o exportan. ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," permite forzar el c\xe1lculo en cualquier momento (por ejemplo, en caso de que se realicen modificaciones en las f\xf3rmulas o si \xe9stas contienen llamadas a la base). El comando lanza la ejecuci\xf3n del comando ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-flush-commands",children:"VP FLUSH COMMANDS"})," para ejecutar cualquier comando almacenado y limpiar el buffer de comandos, luego calcula todas las f\xf3rmulas del libro de trabajo."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Aseg\xfarese de que el comando ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," no ha sido ejecutado previamente utilizando ",(0,o.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"}),", de lo contrario el comando no hace nada."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Para refrescar todas las f\xf3rmulas del libro de trabajo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'VP RECOMPUTE FORMULAS("ViewProArea")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var o=r(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var o,t={},i=null,l=null;for(o in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!d.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:s,type:e,key:i,ref:l,props:t,_owner:c.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var o=r(296540);const s={},t=o.createContext(s);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);