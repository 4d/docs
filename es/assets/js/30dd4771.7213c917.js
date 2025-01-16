"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92902"],{446758:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/export-dif","title":"EXPORT DIF","description":"EXPORT DIF ( {tabla ;} doc )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-dif.md","sourceDirName":"commands-legacy","slug":"/commands/export-dif","permalink":"/docs/es/20-R7/commands/export-dif","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-dif.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-dif","title":"EXPORT DIF","slug":"/commands/export-dif","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT DATA","permalink":"/docs/es/20-R7/commands/export-data"},"next":{"title":"EXPORT SYLK","permalink":"/docs/es/20-R7/commands/export-sylk"}}'),a=n("785893"),s=n("250065");let d={id:"export-dif",title:"EXPORT DIF",slug:"/commands/export-dif",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"EXPORT DIF"})," ( {",(0,a.jsx)(o.em,{children:"tabla"})," ;} ",(0,a.jsx)(o.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe1metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabla"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabla de la cual exportar datos, o Tabla por defecto, si se omite"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"doc"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Documento DIF para recibir los datos"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(o.p,{children:["El comando EXPORT DIF  escribe los datos de los registros de la selecci\xf3n actual de ",(0,a.jsx)(o.em,{children:"tabla"})," en el proceso actual. Los datos se escriben en ",(0,a.jsx)(o.em,{children:"documento"}),", un documento DIF Windows o Macintosh, en el disco."]}),"\n",(0,a.jsx)(o.p,{children:"La operaci\xf3n de exportaci\xf3n se efect\xfaa por el formulario de salida actual. La operaci\xf3n de exportaci\xf3n escribe los campos y las variables basado en el orden de entrada del formulario de salida. Por esta raz\xf3n, utilice un formulario de salida que s\xf3lo contenga los campos u objetos editables que quiera exportar. No ubique botones u otros objetos en el formulario de exportaci\xf3n. Los objetos de subformulario se ignoran."}),"\n",(0,a.jsx)(o.p,{children:"Un evento On Load se env\xeda al m\xe9todo del formulario por cada registro exportado. Utilice este evento para definir las variables que podr\xeda utilizar en el formulario de exportaci\xf3n."}),"\n",(0,a.jsxs)(o.p,{children:["El par\xe1metro ",(0,a.jsx)(o.em,{children:"documento"})," puede dar nombre a un documento nuevo o existente. Si ",(0,a.jsx)(o.em,{children:"documento"})," tiene el mismo nombre que un documento existente, el documento existente se sobrescribe. El ",(0,a.jsx)(o.em,{children:"documento"})," puede incluir una ruta de acceso que contenga los nombres de los vol\xfamenes y las carpetas. Si pasa una cadena vac\xeda, aparece la caja de di\xe1logo est\xe1ndar de guardar archivos. Si el usuario cancela este di\xe1logo, se cancela la operaci\xf3n de exportaci\xf3n, y la variable sistema OK toma el valor 0."]}),"\n",(0,a.jsxs)(o.p,{children:["Un term\xf3metro de progreso aparece durante la exportaci\xf3n. El usuario puede cancelar la operaci\xf3n haciendo clic en el bot\xf3n Detener. Si la exportaci\xf3n termina con \xe9xito, la variable sistema OK toma el valor 1. En caso de error o si la operaci\xf3n se interrumpe, la variable OK toma el valor 0. El term\xf3metro puede ocultarse con el comando ",(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["El comando utiliza por defecto el conjunto de caracteres UTF-8. Los documento en formato DIF utilizan por lo general el conjunto de caracteres IBM437, puede utilizar el comando ",(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/use-character-set",children:"USE CHARACTER SET"})," para definir el conjunto de caracteres apropiado."]}),"\n",(0,a.jsxs)(o.p,{children:["Durante la utilizaci\xf3n de EXPORT DIF , el delimitador de campos por defecto es el car\xe1cter de tabulaci\xf3n (c\xf3digo 9). El delimitador del registro por defecto es el retorno de carro (c\xf3digo 13). Puede modificar estos valores asignando nuevos valores a las dos ",(0,a.jsx)(o.em,{children:"Variables sistema"})," FldDelimit y RecDelimit. El usuario puede cambiar estos valores en la caja de di\xe1logo de exportaci\xf3n del entorno Dise\xf1o. Como los campos Texto pueden contener retornos de carro, sea cuidadoso si utiliza el retorno de carro como delimitador entre los campos a exportar."]}),"\n",(0,a.jsx)(o.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(o.p,{children:"El siguiente ejemplo exporta los datos a un documento DIF. El m\xe9todo comienza por definir el formulario de salida de manera que los datos se exporten por el formulario correcto, luego realiza la exportaci\xf3n:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personas];"Exportar")\n\xa0EXPORT DIF([Personas];"Nuevas_Personas.dif")\xa0// Exporta al documento "Nuevas_Personas.dif"\n'})}),"\n",(0,a.jsx)(o.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(o.p,{children:"OK toma el valor 1 si la exportaci\xf3n termina con \xe9xito; de lo contrario, toma el valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/export-sylk",children:"EXPORT SYLK"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/export-text",children:"EXPORT TEXT"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/import-dif",children:"IMPORT DIF"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/es/20-R7/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,a.jsx)(o.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero de comando"}),(0,a.jsx)(o.td,{children:"84"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Hilo seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modifica variables"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return t},a:function(){return d}});var r=n(667294);let a={},s=r.createContext(a);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);