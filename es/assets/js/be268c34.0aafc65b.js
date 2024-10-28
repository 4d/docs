"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1138],{944870:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var s=n(474848),a=n(28453);const i={id:"goto-object",title:"GOTO OBJECT",slug:"/commands/goto-object",displayed_sidebar:"docs"},r=void 0,t={id:"commands-legacy/goto-object",title:"GOTO OBJECT",description:"GOTO OBJECT ( { ;} objeto* )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-object.md",sourceDirName:"commands-legacy",slug:"/commands/goto-object",permalink:"/docs/es/commands/goto-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"goto-object",title:"GOTO OBJECT",slug:"/commands/goto-object",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET HIGHLIGHT",permalink:"/docs/es/commands/get-highlight"},next:{title:"HIGHLIGHT TEXT",permalink:"/docs/es/commands/highlight-text"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"GOTO OBJECT"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe1metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Si se especifica = objeto es un nombre de objeto (cadena) Si se omite = objeto es un campo o una variable"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"Field, Variable"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nombre del objeto (si se especifica *) o Campo o Variable (si se omite *) a donde ir"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(o.p,{children:["El comando GOTO OBJECT se utiliza para seleccionar el objeto editable ",(0,s.jsx)(o.em,{children:"objeto"})," como el \xe1rea activa del formulario. Es equivalente de un clic del usuario en el \xe1rea o de utilizar la tecla Tab para seleccionar el campo o la variable."]}),"\n",(0,s.jsxs)(o.p,{children:["Si especifica el par\xe1metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica un nombre de objeto (una cadena) en ",(0,s.jsx)(o.em,{children:"objeto"}),". Si omite el par\xe1metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica un campo o una variable en ",(0,s.jsx)(o.em,{children:"objeto"}),". En este caso, especifique una referencia de campo o de variable (objetos de campos o variables \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ."]}),"\n",(0,s.jsxs)(o.p,{children:["Para eliminar todo foco en el formulario actual, llame al comando mientras pasa un nombre de objeto vac\xedo en ",(0,s.jsx)(o.em,{children:"objeto"})," (ver ejemplo 2)."]}),"\n",(0,s.jsx)(o.p,{children:"El comando GOTO OBJECT puede utilizarse en el contexto de un subformulario. Cuando se llama desde un subformulario, busca primero el objeto en el subformulario, luego, si la b\xfasqueda no encuentra nada all\xed, extiende la b\xfasqueda a objetos del formulario padre."}),"\n",(0,s.jsx)(o.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"El comando GOTO OBJECT puede utilizarse de dos maneras:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0GOTO OBJECT([Personas]Nombre)\xa0// Referencia del campo\n\xa0GOTO OBJECT(*;"AreaEdad")\xa0// Nombre del objeto\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Si no quiere que ning\xfan objeto del formulario tenga el foco."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0GOTO OBJECT(*;"")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(o.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(o.a,{href:"/docs/es/commands/reject",title:"REJECT",children:"REJECT"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/es/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/es/commands/reject",children:"REJECT"})]})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>t});var s=n(296540);const a={},i=s.createContext(a);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);