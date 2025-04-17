"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16024"],{406628:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>a,contentTitle:()=>d});var o=JSON.parse('{"id":"ViewPro/commands/vp-remove-name","title":"VP REMOVE NAME","description":"VP REMOVE NAME ( vpAreaName Text { ; sheet : Integer } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-remove-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-name","permalink":"/docs/es/ViewPro/commands/vp-remove-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-remove-name","title":"VP REMOVE NAME"},"sidebar":"docs","previous":{"title":"VP RECOMPUTE FORMULAS","permalink":"/docs/es/ViewPro/commands/vp-recompute-formulas"},"next":{"title":"VP REMOVE SHEET","permalink":"/docs/es/ViewPro/commands/vp-remove-sheet"}}'),t=r("785893"),s=r("250065");let i={id:"vp-remove-name",title:"VP REMOVE NAME"},d=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP REMOVE NAME"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text  ; ",(0,t.jsx)(n.em,{children:"name"}),"  : Text { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre del rango nombrado o f\xf3rmula nombrada a eliminar"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Alcance objetivo (por defecto=hoja actual)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP REMOVE NAME"})," elimina el rango con nombre o la f\xf3rmula con nombre pasada en el par\xe1metro ",(0,t.jsx)(n.em,{children:"name"})," en el ",(0,t.jsx)(n.em,{children:"scope"})," definido."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase el rango con nombre o la f\xf3rmula con nombre que desea eliminar en ",(0,t.jsx)(n.em,{children:"name"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede definir d\xf3nde eliminar el nombre en ",(0,t.jsx)(n.em,{children:"scope"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o una de las siguientes constantes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \nVP REMOVE NAME("ViewProArea";"Total1")\n$formula:=VP Get formula by name("ViewProArea";"Total1")\n//$formula=null\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var o=r(667294);let t={},s=o.createContext(t);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);