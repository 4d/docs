"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45567"],{860291:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/object-set-subform","title":"OBJECT SET SUBFORM","description":"OBJECT SET SUBFORM ( { ;} objeto {; aTabla}; subFormDet {; subFormList*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-subform","permalink":"/docs/es/commands/object-set-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-subform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-subform","title":"OBJECT SET SUBFORM","slug":"/commands/object-set-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET STYLE SHEET","permalink":"/docs/es/commands/object-set-style-sheet"},"next":{"title":"OBJECT SET SUBFORM CONTAINER VALUE","permalink":"/docs/es/commands/object-set-subform-container-value"}}'),r=o("785893"),i=o("250065");let t={id:"object-set-subform",title:"OBJECT SET SUBFORM",slug:"/commands/object-set-subform",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET SUBFORM"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"aTabla"}),"}; ",(0,r.jsx)(n.em,{children:"subFormDet"})," {; ",(0,r.jsx)(n.em,{children:"subFormList"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla de formulario (si tabla de formulario)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subFormDet"}),(0,r.jsx)(n.td,{children:"Text, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del formulario detallado de subformulario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subFormList"}),(0,r.jsx)(n.td,{children:"Text, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del formulario listado de subformulario (formulario tabla)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"OBJECT SET SUBFORM"})," permite modificar din\xe1micamente el formulario detallado as\xed como tambi\xe9n, opcionalmente, el formulario listado asociado al objeto subformulario designado por los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este comando no permite cambiar el tipo de subformulario mismo (lista o p\xe1gina). Esta propiedad s\xf3lo se puede configurar en modo Dise\xf1o."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"aTabla"}),", pase la tabla de los formularios a utilizar. Este par\xe1metro es opcional; puede omitirlo si especifica un formulario proyecto como subformulario detallado."]}),"\n",(0,r.jsxs)(n.p,{children:["En los par\xe1metros ",(0,r.jsx)(n.em,{children:"subFormDet"})," y ",(0,r.jsx)(n.em,{children:"subFormList"}),", pase:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"el nombre de un formulario, o"}),"\n",(0,r.jsxs)(n.li,{children:["la ruta* (en sintaxis POSIX) a un archivo .json v\xe1lido que contiene una descripci\xf3n del formulario a usar (ver ",(0,r.jsx)(n.em,{children:"Ruta de archivo del formulario"}),"), o"]}),"\n",(0,r.jsx)(n.li,{children:"un objeto que contiene una descripci\xf3n del formulario."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"*A diferencia de otros comandos relacionados con formularios, las rutas de archivo de OBJECT SET SUBFORM son relativas al formulario principal del subformulario."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": el par\xe1metro ",(0,r.jsx)(n.em,{children:"subFormList"})," s\xf3lo se puede pasar cuando modifica un subformulario de tipo lista."]}),"\n",(0,r.jsx)(n.p,{children:"Cuando modifica un subformulario p\xe1gina, el comando puede ejecutarse en cualquier momento; las selecciones actuales no se modifican. Sin embargo, cuando modifica un subformulario listado, s\xf3lo puede modificarse cuando muestra la lista. Si el comando se ejecuta cuando el formulario detallado se muestra despu\xe9s de un doble clic en la lista, se genera un error."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return t}});var s=o(667294);let r={},i=s.createContext(r);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);