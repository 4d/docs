/*! For license information please see d0cd255b.491b3cf1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10736],{87380:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var r=o(474848),s=o(28453);const t={id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},d=void 0,a={id:"ViewPro/commands/vp-flush-commands",title:"VP FLUSH COMMANDS",description:"VP FLUSH COMMANDS (  vpAreaName : Text )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-flush-commands.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-flush-commands",permalink:"/docs/es/20-R5/ViewPro/commands/vp-flush-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-flush-commands.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},sidebar:"docs",previous:{title:"VP Find table",permalink:"/docs/es/20-R5/ViewPro/commands/vp-find-table"},next:{title:"VP Font to object",permalink:"/docs/es/20-R5/ViewPro/commands/vp-font-to-object"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function l(e){const n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP FLUSH COMMANDS"})," (  ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," ejecuta inmediatamente los comandos almacenados y borra el buffer de comandos."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["Para aumentar el rendimiento y reducir el n\xfamero de peticiones enviadas, los comandos 4D View Pro llamados por el desarrollador se almacenan en un buffer de comandos. Cuando se llama, ",(0,r.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," ejecuta los comandos como un lote al salir del m\xe9todo y vac\xeda el contenido del buffer de comandos."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Quiere rastrear la ejecuci\xf3n de los comandos y vaciar el buffer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")\n \n VP FLUSH COMMANDS(("ViewProArea1")\n TRACE\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var r=o(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var r,t={},i=null,l=null;for(r in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:i,ref:l,props:t,_owner:a.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var r=o(296540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);