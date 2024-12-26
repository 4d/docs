"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7652"],{620117:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/object-set-value","title":"OBJECT SET VALUE","description":"OBJECT SET VALUE ( nomObjeto ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-value","permalink":"/docs/es/commands/object-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-value","title":"OBJECT SET VALUE","slug":"/commands/object-set-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET TITLE","permalink":"/docs/es/commands/object-set-title"},"next":{"title":"OBJECT SET VERTICAL ALIGNMENT","permalink":"/docs/es/commands/object-set-vertical-alignment"}}'),o=t("785893"),s=t("250065");let l={id:"object-set-value",title:"OBJECT SET VALUE",slug:"/commands/object-set-value",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ( ",(0,o.jsx)(n.em,{children:"nomObjeto"})," ; ",(0,o.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomObjeto"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valor"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nuevo valor para la fuente de datos del objeto de formulario"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET VALUE"})," define el ",(0,o.jsx)(n.em,{children:"valor"})," de la fuente de datos actual para los objetos de formulario designados por el par\xe1metro ",(0,o.jsx)(n.em,{children:"nomObjeto"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["En el par\xe1metro ",(0,o.jsx)(n.em,{children:"nomObjeto"}),', pase el nombre de un objeto de formulario (una cadena). Puede definir el valor de varios objetos de formulario utilizando el car\xe1cter comod\xedn ("@").']}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"valor"})," le permite pasar un nuevo valor (cualquier tipo) para la fuente de datos del objeto de formulario."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": si la fuente de datos es una expresi\xf3n no asignable, ",(0,o.jsx)(n.strong,{children:"OBJECT SET VALUE"})," no hace nada. Para m\xe1s informaci\xf3n, consulte ",(0,o.jsx)(n.em,{children:"Expresiones asignables frente a no asignables"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Desea obtener el valor de la fuente de datos para un objeto de formulario, obtener su nombre y definir un nuevo valor:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var $value : Variant\n\xa0\n\xa0$value:=OBJECT Get value(OBJECT Get name(Object current))\xa0//verifica el valor definido\n\xa0\n\xa0OBJECT SET VALUE(OBJECT Get name(Object current);$value+10)\xa0//encuentra el nombre del objeto del formulario y define el valor en 50\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/object-get-value",children:"OBJECT Get value"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1742"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let o={},s=r.createContext(o);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);