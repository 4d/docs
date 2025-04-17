"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16228"],{351980:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-set-context-menu","title":"OBJECT SET CONTEXT MENU","description":"OBJECT SET CONTEXT MENU ( { ;} objeto ; menuContext* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-context-menu.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-context-menu","permalink":"/docs/es/commands/object-set-context-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-context-menu.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-context-menu","title":"OBJECT SET CONTEXT MENU","slug":"/commands/object-set-context-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET BORDER STYLE","permalink":"/docs/es/commands/object-set-border-style"},"next":{"title":"OBJECT SET COORDINATES","permalink":"/docs/es/commands/object-set-coordinates"}}'),o=t("785893"),r=t("250065");let c={id:"object-set-context-menu",title:"OBJECT SET CONTEXT MENU",slug:"/commands/object-set-context-menu",displayed_sidebar:"docs"},a=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET CONTEXT MENU"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"menuContext"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,o.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menuContext"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"True = activar el men\xfa contextual, False = desactivar el men\xfa contextual"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OBJECT SET CONTEXT MENU"})," activa o desactiva, para el proceso actual, la asociaci\xf3n de un men\xfa contextual por defecto al objeto o a los objetos designado(s) por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:['La opci\xf3n "Men\xfa contextual" est\xe1 disponible para las \xe1reas de texto de tipo de entrada, las \xe1reas web y las im\xe1genes. Se puede utilizar para asociar un men\xfa de acci\xf3n est\xe1ndar en funci\xf3n del tipo de objeto (por ejemplo, copiar/pegar para los objetos texto). Para obtener m\xe1s informaci\xf3n, consulte el manual de ',(0,o.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,o.jsxs)(n.p,{children:["Pase ",(0,o.jsx)(n.strong,{children:"True"})," en el par\xe1metro ",(0,o.jsx)(n.em,{children:"menuContext"})," para activar el men\xfa contextual, y ",(0,o.jsx)(n.strong,{children:"False"})," para desactivarlo."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/object-get-context-menu",children:"OBJECT Get context menu"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1251"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let o={},r=s.createContext(o);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);