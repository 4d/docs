"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1172"],{976356:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>i,contentTitle:()=>a});var o=JSON.parse('{"id":"ViewPro/commands/vp-get-formula-by-name","title":"VP Get formula by name","description":"VP Get formula by name ( vpAreaName Text { ; scope Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-formula-by-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formula-by-name","permalink":"/docs/es/ViewPro/commands/vp-get-formula-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula-by-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-formula-by-name","title":"VP Get formula by name"},"sidebar":"docs","previous":{"title":"VP Get formula","permalink":"/docs/es/ViewPro/commands/vp-get-formula"},"next":{"title":"VP Get formulas","permalink":"/docs/es/ViewPro/commands/vp-get-formulas"}}'),t=r("785893"),s=r("250065");let l={id:"vp-get-formula-by-name",title:"VP Get formula by name"},a=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Objeto devuelto",id:"objeto-devuelto",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formula by name"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"name"})," : Text { ; ",(0,t.jsx)(n.em,{children:"scope"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre del rango nombrado"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Alcance objetivo (por defecto=hoja actual)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Definici\xf3n de la f\xf3rmula o rango con nombre"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Get formula by name"}),"  devuelve la f\xf3rmula y el comentario correspondientes al rango con nombre o a la f\xf3rmula con nombre pasada en el par\xe1metro ",(0,t.jsx)(n.em,{children:"name"}),", o ",(0,t.jsx)(n.strong,{children:"null"})," si no existe en el \xe1mbito definido."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase el rango con nombre o la f\xf3rmula con nombre que desea obtener en ",(0,t.jsx)(n.em,{children:"name"}),". Tenga en cuenta que los rangos con nombre se devuelven como f\xf3rmulas que contienen referencias absolutas de celdas."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede definir d\xf3nde obtener la f\xf3rmula en ",(0,t.jsx)(n.em,{children:"scope"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o una de las siguientes constantes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,t.jsx)(n.p,{children:"El objeto devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Texto de la f\xf3rmula correspondiente a la f\xf3rmula nombrada o al rango nombrado. Para los rangos nombrados, la f\xf3rmula es una secuencia de coordenadas absolutas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Comentario correspondiente a la f\xf3rmula nombrada o al rango nombrado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \n$formula:=VP Get formula by name("ViewProArea";"Total1")\n  //$formula.formula=Sheet1!$A$1\n \n$formula:=VP Get formula by name("ViewProArea";"Total")\n  //$formula=null (if not existing)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var o=r(667294);let t={},s=o.createContext(t);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);