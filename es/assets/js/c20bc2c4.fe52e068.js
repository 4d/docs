"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81672],{197860:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(474848),r=s(28453);const i={id:"object-set-subform",title:"OBJECT SET SUBFORM",slug:"/commands/object-set-subform",displayed_sidebar:"docs"},t=void 0,a={id:"commands-legacy/object-set-subform",title:"OBJECT SET SUBFORM",description:"OBJECT SET SUBFORM ( { ;} objeto {; aTabla}; subFormDet {; subFormList*} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-subform.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-subform",permalink:"/docs/es/commands/object-set-subform",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-subform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-subform",title:"OBJECT SET SUBFORM",slug:"/commands/object-set-subform",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET STYLE SHEET",permalink:"/docs/es/commands/object-set-style-sheet"},next:{title:"OBJECT SET SUBFORM CONTAINER VALUE",permalink:"/docs/es/commands/object-set-subform-container-value"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"OBJECT SET SUBFORM"})," ( {* ;} ",(0,n.jsx)(o.em,{children:"objeto"})," {; ",(0,n.jsx)(o.em,{children:"aTabla"}),"}; ",(0,n.jsx)(o.em,{children:"subFormDet"})," {; ",(0,n.jsx)(o.em,{children:"subFormList"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe1metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"*"}),(0,n.jsx)(o.td,{children:"Operador"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"objeto"}),(0,n.jsx)(o.td,{children:"any"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"aTable"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabla de formulario (si tabla de formulario)"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"subFormDet"}),(0,n.jsx)(o.td,{children:"Text, Object"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nombre del formulario detallado de subformulario"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"subFormList"}),(0,n.jsx)(o.td,{children:"Text, Object"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nombre del formulario listado de subformulario (formulario tabla)"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,n.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(o.p,{children:["El comando ",(0,n.jsx)(o.strong,{children:"OBJECT SET SUBFORM"})," permite modificar din\xe1micamente el formulario detallado as\xed como tambi\xe9n, opcionalmente, el formulario listado asociado al objeto subformulario designado por los par\xe1metros ",(0,n.jsx)(o.em,{children:"objeto"})," y ",(0,n.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": este comando no permite cambiar el tipo de subformulario mismo (lista o p\xe1gina). Esta propiedad s\xf3lo se puede configurar en modo Dise\xf1o."]}),"\n",(0,n.jsxs)(o.p,{children:["Si pasa el par\xe1metro opcional ",(0,n.jsx)(o.em,{children:"*"}),", indica que el par\xe1metro ",(0,n.jsx)(o.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,n.jsx)(o.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,n.jsxs)(o.p,{children:["En el par\xe1metro ",(0,n.jsx)(o.em,{children:"aTabla"}),", pase la tabla de los formularios a utilizar. Este par\xe1metro es opcional; puede omitirlo si especifica un formulario proyecto como subformulario detallado."]}),"\n",(0,n.jsxs)(o.p,{children:["En los par\xe1metros ",(0,n.jsx)(o.em,{children:"subFormDet"})," y ",(0,n.jsx)(o.em,{children:"subFormList"}),", pase:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"el nombre de un formulario, o"}),"\n",(0,n.jsxs)(o.li,{children:["la ruta* (en sintaxis POSIX) a un archivo .json v\xe1lido que contiene una descripci\xf3n del formulario a usar (ver ",(0,n.jsx)(o.em,{children:"Ruta de archivo del formulario"}),"), o"]}),"\n",(0,n.jsx)(o.li,{children:"un objeto que contiene una descripci\xf3n del formulario."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"*A diferencia de otros comandos relacionados con formularios, las rutas de archivo de OBJECT SET SUBFORM son relativas al formulario principal del subformulario."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": el par\xe1metro ",(0,n.jsx)(o.em,{children:"subFormList"})," s\xf3lo se puede pasar cuando modifica un subformulario de tipo lista."]}),"\n",(0,n.jsx)(o.p,{children:"Cuando modifica un subformulario p\xe1gina, el comando puede ejecutarse en cualquier momento; las selecciones actuales no se modifican. Sin embargo, cuando modifica un subformulario listado, s\xf3lo puede modificarse cuando muestra la lista. Si el comando se ejecuta cuando el formulario detallado se muestra despu\xe9s de un doble clic en la lista, se genera un error."}),"\n",(0,n.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/es/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/es/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"})]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>t,x:()=>a});var n=s(296540);const r={},i=n.createContext(r);function t(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);