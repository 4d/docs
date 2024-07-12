/*! For license information please see 3f051d01.6020a496.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32123],{283001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=t(474848),s=t(28453);const d={id:"vp-get-table-dirty-rows",title:"VP Get table dirty rows"},i=void 0,l={id:"ViewPro/commands/vp-get-table-dirty-rows",title:"VP Get table dirty rows",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-table-dirty-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-table-dirty-rows",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-table-dirty-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-dirty-rows.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-table-dirty-rows",title:"VP Get table dirty rows"},sidebar:"docs",previous:{title:"VP Get table column index",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-table-column-index"},next:{title:"VP Get table range",permalink:"/docs/es/20-R5/ViewPro/commands/vp-get-table-range"}},o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get table dirty rows"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"reset"})," : Boolean {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de la tabla"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reset"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"True para borrar el estado sucio de la tabla actual, False para mantenerlo intacto. Por defecto=True"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos con todos los elementos modificados desde el \xfaltimo reinicio"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get table dirty rows"})," command returns a collection of ",(0,r.jsx)(n.em,{children:"dirty row"})," objects, containing items that were modified since the last reset in the specified ",(0,r.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"tableName"}),", pase el nombre de la tabla de la que desea obtener las l\xedneas sucias. S\xf3lo se tendr\xe1n en cuenta las columnas modificadas vinculadas a un ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-data-context",children:"contexto de datos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, al llamar al comando se borrar\xe1 el estado ",(0,r.jsx)(n.em,{children:"sucio"})," de la tabla actual. Para mantener este estado intacto, pase ",(0,r.jsx)(n.code,{children:"False"})," en el par\xe1metro ",(0,r.jsx)(n.em,{children:"reset"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"sheet"}),", pase el \xedndice de la hoja objetivo. Si no se especifica ning\xfan \xedndice o si pasa -1, el comando se aplica a la hoja actual."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"La indexaci\xf3n comienza en 0."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Cada objeto ",(0,r.jsx)(n.em,{children:"dirty row"})," de la colecci\xf3n devuelta contiene las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"item"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Objeto modificado de la l\xednea modificada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"originalItem"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Objeto antes de la modificaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"\xcdndice de la l\xednea modificada"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"tableName"})," is not found or if it does not contain a modified column, the command returns an empty collection."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Desea contar el n\xfamero de lineas editadas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $dirty : Collection\n$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)\nVP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,d={},a=null,c=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:c,props:d,_owner:l.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);