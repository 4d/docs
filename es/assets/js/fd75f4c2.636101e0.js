"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71224],{300985:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=o(474848),t=o(28453);const i={id:"object-set-font-size",title:"OBJECT SET FONT SIZE",slug:"/commands/object-set-font-size",displayed_sidebar:"docs"},a=void 0,r={id:"commands-legacy/object-set-font-size",title:"OBJECT SET FONT SIZE",description:"OBJECT SET FONT SIZE ( { ;} objeto ; tama\xf1o* )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-font-size.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-font-size",permalink:"/docs/es/commands/object-set-font-size",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-font-size",title:"OBJECT SET FONT SIZE",slug:"/commands/object-set-font-size",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET FONT",permalink:"/docs/es/commands/object-set-font"},next:{title:"OBJECT SET FONT STYLE",permalink:"/docs/es/commands/object-set-font-style"}},c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tama\xf1o de fuente en puntos"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," define los objetos formulario especificados por ",(0,s.jsx)(n.em,{children:"objeto"})," para mostrarse utilizando el tama\xf1o de fuente que se pasa en ",(0,s.jsx)(n.em,{children:"tama\xf1o"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si especifica el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica un nombre de objeto (una cadena) en ",(0,s.jsx)(n.em,{children:"objeto"}),". Si omite el par\xe1metro opcional *, indica un campo o una variable en ",(0,s.jsx)(n.em,{children:"objeto"}),". En este caso, usted especifica una referencia de un campo o de una variable (objetos campo o variable \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," puede ser cualquier entero entre 1 y 255. Si el tama\xf1o de fuente exacto no existe, los caracteres son redimensionados proporcionalmente."]}),"\n",(0,s.jsx)(n.p,{children:"El \xe1rea para el objeto, como se defini\xf3 en el formulario, debe ser lo suficientemente grande para mostrar los datos en el nuevo tama\xf1o. De lo contrario, el texto puede truncarse o no ser visualizado."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si utiliza este comando en un ",(0,s.jsx)(n.em,{children:"objeto"})," que estaba utilizando una hoja de estilo, la referencia a la hoja de estilo se elimina autom\xe1ticamente del objeto - incluso si asigna los mismos atributos que los de la hoja de estilo."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo define el tama\xf1o de fuente para una variable llamada ",(0,s.jsx)(n.em,{children:"vtInfo"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0OBJECT SET FONT SIZE(vtInfo;14)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:'El siguiente ejemplo define el tama\xf1o de fuente para todos los objetos de formulario cuyo nombre comienza por "hl":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT SIZE(*;"hl@";14)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Interacci\xf3n de comandos gen\xe9ricos con textos multiestilos"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-font-size",children:"OBJECT Get font size"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-font",children:"OBJECT SET FONT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var s=o(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);