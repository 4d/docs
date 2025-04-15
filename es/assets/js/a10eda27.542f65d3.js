"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10016"],{355170:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>s,toc:()=>i,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/no-default-table","title":"NO DEFAULT TABLE","description":"NO DEFAULT TABLE","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/no-default-table.md","sourceDirName":"commands-legacy","slug":"/commands/no-default-table","permalink":"/docs/es/commands/no-default-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fno-default-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"no-default-table","title":"NO DEFAULT TABLE","slug":"/commands/no-default-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DEFAULT TABLE","permalink":"/docs/es/commands/default-table"},"next":{"title":"Herramientas","permalink":"/docs/es/commands/theme/Tools"}}'),l=a("785893"),r=a("250065");let t={id:"no-default-table",title:"NO DEFAULT TABLE",slug:"/commands/no-default-table",displayed_sidebar:"docs"},d=void 0,s={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"NO DEFAULT TABLE"})}),"\n\n\n\n\n\n\n\n",(0,l.jsx)(o.table,{children:(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{children:"Este comando no requiere par\xe1metros"}),(0,l.jsx)(o.th,{})]})})}),"\n",(0,l.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(o.p,{children:["El comando NO DEFAULT TABLE permite cancelar el efecto del comando ",(0,l.jsx)(o.a,{href:"/docs/es/commands/default-table",title:"DEFAULT TABLE",children:"DEFAULT TABLE"}),". Despu\xe9s de la ejecuci\xf3n de este comando, no hay tabla por defecto definida para el proceso."]}),"\n",(0,l.jsxs)(o.p,{children:["Este comando no tendr\xe1 efecto si el comando ",(0,l.jsx)(o.a,{href:"/docs/es/commands/default-table",title:"DEFAULT TABLE",children:"DEFAULT TABLE"})," no ha sido llamado de antemano."]}),"\n",(0,l.jsxs)(o.p,{children:["Este comando est\xe1 relacionado con el uso de formularios de proyecto (formularios no asociados a tablas): la mayor\xeda de los comandos relacionados a los formularios (aparte de los formularios de usuario) aceptan un par\xe1metro opcional de tipo tabla como primer par\xe1metro. Por ejemplo, este es el caso de los comandos ",(0,l.jsx)(o.em,{children:"FORM GET PARAMETER"}),", ",(0,l.jsx)(o.a,{href:"/docs/es/commands/open-form-window",title:"Open form window",children:"Open form window"})," o ",(0,l.jsx)(o.a,{href:"/docs/es/commands/dialog",title:"DIALOG",children:"DIALOG"}),". Como un formulario de proyecto y un formulario de tabla pueden tener el mismo nombre, este par\xe1metro puede utilizarse para determinar el formulario a utilizar: pase el par\xe1metro cuando quiera apuntar a un formulario tabla y om\xedtalo en el caso de un formulario de proyecto."]}),"\n",(0,l.jsx)(o.p,{children:"En una base que contiene un formulario de proyecto llamado \u201CElFormulario\u201D y un formulario de tabla con el mismo nombre para la tabla [Tabla1]:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:'\xa0DIALOG([Tabla1];"ElFormulario")\xa0//4D utiliza el formulario de tabla\n\xa0DIALOG("ElFormulario")\xa0//4D utiliza el formulario de proyecto\n'})}),"\n",(0,l.jsxs)(o.p,{children:["Sin embargo, este principio es nulo e inv\xe1lido si el comando ",(0,l.jsx)(o.a,{href:"/docs/es/commands/default-table",title:"DEFAULT TABLE",children:"DEFAULT TABLE"})," se ejecuta cuando la base contiene un formulario de proeycto y un formulario de tabla con el mismo nombre. En efecto, en este caso 4D utilizar\xe1 el formulario de tabla por defecto, incluso si no se pasa el par\xe1metro ",(0,l.jsx)(o.em,{children:"tabla"}),". Para garantizar el uso de formularios de proyecto, simplemente utilice el comando NO DEFAULT TABLE."]}),"\n",(0,l.jsx)(o.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(o.p,{children:"En una base que contiene un formulario de proyecto llamado \u201CElFormulario\u201D y un formulario de tabla con el mismo nombre para la tabla [Tabla1]:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Tabla1])\n\xa0DIALOG("ElFormulario")\xa0//4D utiliza el formulario de tabla\n\xa0NO DEFAULT TABLE\n\xa0DIALOG("ElFormulario")\xa0//4D utiliza el formulario de proyecto\n'})}),"\n",(0,l.jsx)(o.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.a,{href:"/docs/es/commands/default-table",children:"DEFAULT TABLE"})}),"\n",(0,l.jsx)(o.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{}),(0,l.jsx)(o.th,{})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"N\xfamero de comando"}),(0,l.jsx)(o.td,{children:"993"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Hilo seguro"}),(0,l.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return t}});var n=a(667294);let l={},r=n.createContext(l);function t(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);