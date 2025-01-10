"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30299"],{865267:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/goto-object","title":"GOTO OBJECT","description":"GOTO OBJECT ( { ;} objeto* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-object.md","sourceDirName":"commands-legacy","slug":"/commands/goto-object","permalink":"/docs/es/commands/goto-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-object","title":"GOTO OBJECT","slug":"/commands/goto-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHT","permalink":"/docs/es/commands/get-highlight"},"next":{"title":"HIGHLIGHT TEXT","permalink":"/docs/es/commands/highlight-text"}}'),r=o("785893"),i=o("250065");let d={id:"goto-object",title:"GOTO OBJECT",slug:"/commands/goto-object",displayed_sidebar:"docs"},a=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GOTO OBJECT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica = objeto es un nombre de objeto (cadena) Si se omite = objeto es un campo o una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"Field, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Campo o Variable (si se omite *) a donde ir"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando GOTO OBJECT se utiliza para seleccionar el objeto editable ",(0,r.jsx)(n.em,{children:"objeto"})," como el \xe1rea activa del formulario. Es equivalente de un clic del usuario en el \xe1rea o de utilizar la tecla Tab para seleccionar el campo o la variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Si especifica el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica un nombre de objeto (una cadena) en ",(0,r.jsx)(n.em,{children:"objeto"}),". Si omite el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica un campo o una variable en ",(0,r.jsx)(n.em,{children:"objeto"}),". En este caso, especifique una referencia de campo o de variable (objetos de campos o variables \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ."]}),"\n",(0,r.jsxs)(n.p,{children:["Para eliminar todo foco en el formulario actual, llame al comando mientras pasa un nombre de objeto vac\xedo en ",(0,r.jsx)(n.em,{children:"objeto"})," (ver ejemplo 2)."]}),"\n",(0,r.jsx)(n.p,{children:"El comando GOTO OBJECT puede utilizarse en el contexto de un subformulario. Cuando se llama desde un subformulario, busca primero el objeto en el subformulario, luego, si la b\xfasqueda no encuentra nada all\xed, extiende la b\xfasqueda a objetos del formulario padre."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"El comando GOTO OBJECT puede utilizarse de dos maneras:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT([Personas]Nombre)\xa0// Referencia del campo\n\xa0GOTO OBJECT(*;"AreaEdad")\xa0// Nombre del objeto\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Si no quiere que ning\xfan objeto del formulario tenga el foco."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT(*;"")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/reject",title:"REJECT",children:"REJECT"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/reject",children:"REJECT"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"206"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var s=o(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);