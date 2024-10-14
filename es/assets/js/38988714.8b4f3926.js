"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88257],{967119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var s=r(474848),d=r(28453);const o={id:"vp-name",title:"VP Name"},c=void 0,t={id:"ViewPro/commands/vp-name",title:"VP Name",description:"VP Name ( vpAreaName Text { ; sheet Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-name",permalink:"/docs/es/ViewPro/commands/vp-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-name.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-name",title:"VP Name"},sidebar:"docs",previous:{title:"N",permalink:"/docs/es/commands/N"},next:{title:"VP NEW DOCUMENT",permalink:"/docs/es/ViewPro/commands/vp-new-document"}},i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Name"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"rangeName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }  ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre del rango existente"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Ubicaci\xf3n del rango (hoja actual si se omite)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Rango de nombre"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP Name"})," devuelve un nuevo objeto de rango que hace referencia a un rango con nombre."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"rangeName"})," indica un rango de celdas con nombre existente."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango ",(0,s.jsx)(n.em,{children:"rangeName"}),". Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual o todo el libro de trabajo con las siguientes constantes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:'Quiere asignar un valor al rango llamado "Total".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// llama la celda B5 Total\nVP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")\n$name:=VP Name("ViewProArea";"Total")\nVP SET NUM VALUE($name;285;"$#,###.00")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-all",children:"VP ALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-column",children:"VP Column"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-remove-name",children:"VP REMOVE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-row",children:"VP Row"})]})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(296540);const d={},o=s.createContext(d);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);