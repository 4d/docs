"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35305"],{821589:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-get-stylesheet","title":"VP Get stylesheets","description":"VP Get stylesheets ( vpAreaName Integer } ) : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-stylesheets.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-stylesheet","permalink":"/docs/es/ViewPro/commands/vp-get-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheets.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-stylesheet","title":"VP Get stylesheets"},"sidebar":"docs","previous":{"title":"VP Get spans","permalink":"/docs/es/ViewPro/commands/vp-get-spans"},"next":{"title":"VP Get stylesheet","permalink":"/docs/es/ViewPro/commands/vp-get-stylesheets"}}'),r=s("785893"),o=s("250065");let l={id:"vp-get-stylesheet",title:"VP Get stylesheets"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get stylesheets"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Alcance objetivo (por defecto = hoja actual)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos de hojas de estilo"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP Get stylesheets"})," devuelve la colecci\xf3n de objetos de hojas de estilo definidos de la ",(0,r.jsx)(n.em,{children:"sheet"})," designada."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre de la propiedad del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede definir d\xf3nde obtener las hojas de estilo en el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"sheet"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o con las siguientes constantes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente c\xf3digo devolver\xe1 una colecci\xf3n de todos los objetos estilo de la hoja actual:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$styles:=VP Get stylesheets("ViewProArea")\n'})}),"\n",(0,r.jsx)(n.p,{children:"En este caso, la hoja actual utiliza dos objetos estilo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"[\n   {\n     backColor:green,\n     borderLeft:{color:green,style:10}, \n     borderTop:{color:green,style:10}, \n     borderRight:{color:green,style:10}, \n     borderBottom:{color:green,style:10}, \n     name:GreenDashDotStyle\n   },\n   {\n     backColor:red,\n     textIndent:10,\n     name:RedIndent\n   }\n]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},o=t.createContext(r);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);