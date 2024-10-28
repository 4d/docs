"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75592],{362039:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var o=r(474848),s=r(28453);const t={id:"vp-get-formula-by-name",title:"VP Get formula by name"},l=void 0,a={id:"ViewPro/commands/vp-get-formula-by-name",title:"VP Get formula by name",description:"VP Get formula by name ( vpAreaName Text { ; scope Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-formula-by-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-formula-by-name",permalink:"/docs/es/20-R6/ViewPro/commands/vp-get-formula-by-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula-by-name.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-formula-by-name",title:"VP Get formula by name"},sidebar:"docs",previous:{title:"VP Get formula",permalink:"/docs/es/20-R6/ViewPro/commands/vp-get-formula"},next:{title:"VP Get formulas",permalink:"/docs/es/20-R6/ViewPro/commands/vp-get-formulas"}},d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Get formula by name"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,o.jsx)(n.em,{children:"name"})," : Text { ; ",(0,o.jsx)(n.em,{children:"scope"})," : Number } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nombre del rango nombrado"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Alcance objetivo (por defecto=hoja actual)"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Result"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Definici\xf3n de la f\xf3rmula o rango con nombre"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"VP Get formula by name"}),"  devuelve la f\xf3rmula y el comentario correspondientes al rango con nombre o a la f\xf3rmula con nombre pasada en el par\xe1metro ",(0,o.jsx)(n.em,{children:"name"}),", o ",(0,o.jsx)(n.strong,{children:"null"})," si no existe en el \xe1mbito definido."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,o.jsxs)(n.p,{children:["Pase el rango con nombre o la f\xf3rmula con nombre que desea obtener en ",(0,o.jsx)(n.em,{children:"name"}),". Tenga en cuenta que los rangos con nombre se devuelven como f\xf3rmulas que contienen referencias absolutas de celdas."]}),"\n",(0,o.jsxs)(n.p,{children:["Puede definir d\xf3nde obtener la f\xf3rmula en ",(0,o.jsx)(n.em,{children:"scope"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o una de las siguientes constantes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,o.jsx)(n.p,{children:"El objeto devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propiedad"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"formula"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"Texto de la f\xf3rmula correspondiente a la f\xf3rmula nombrada o al rango nombrado. Para los rangos nombrados, la f\xf3rmula es una secuencia de coordenadas absolutas."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"comment"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"Comentario correspondiente a la f\xf3rmula nombrada o al rango nombrado"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \n$formula:=VP Get formula by name("ViewProArea";"Total1")\n  //$formula.formula=Sheet1!$A$1\n \n$formula:=VP Get formula by name("ViewProArea";"Total")\n  //$formula=null (if not existing)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var o=r(296540);const s={},t=o.createContext(s);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);