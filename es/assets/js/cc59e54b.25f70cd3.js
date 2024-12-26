"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37112"],{435221:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>i,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/export-sylk","title":"EXPORT SYLK","description":"EXPORT SYLK ( {tabla ;} doc )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-sylk.md","sourceDirName":"commands-legacy","slug":"/commands/export-sylk","permalink":"/docs/es/commands/export-sylk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-sylk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-sylk","title":"EXPORT SYLK","slug":"/commands/export-sylk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT DIF","permalink":"/docs/es/commands/export-dif"},"next":{"title":"EXPORT TEXT","permalink":"/docs/es/commands/export-text"}}'),r=n("785893"),a=n("250065");let t={id:"export-sylk",title:"EXPORT SYLK",slug:"/commands/export-sylk",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"EXPORT SYLK"})," ( {",(0,r.jsx)(o.em,{children:"tabla"})," ;} ",(0,r.jsx)(o.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe1metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabla"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabla de la cual exportar datos, o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"doc"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Documento SYLK para recibir los datos"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:["El comando ",(0,r.jsx)(o.strong,{children:"EXPORT SYLK"})," escribe los datos de los registros de la selecci\xf3n actual de ",(0,r.jsx)(o.em,{children:"tabla"})," en el proceso actual. Los datos se escriben en ",(0,r.jsx)(o.em,{children:"documento"}),", un documento Sylk Windows o Macintosh, en el disco."]}),"\n",(0,r.jsx)(o.p,{children:"La operaci\xf3n de exportaci\xf3n se efect\xfaa por el formulario de salida actual. La operaci\xf3n de exportaci\xf3n escribe los campos y las variables basado en el orden de entrada del formulario de salida. Por esta raz\xf3n, utilice un formulario de salida que s\xf3lo contenga los campos u objetos editables que quiera exportar. No ubique botones u otros objetos en el formulario de exportaci\xf3n. Los objetos de subformulario se ignoran."}),"\n",(0,r.jsx)(o.p,{children:"Un evento On Load se env\xeda al m\xe9todo del formulario por cada registro exportado. Utilice este evento para definir las variables que podr\xeda utilizar en el formulario de exportaci\xf3n."}),"\n",(0,r.jsxs)(o.p,{children:["El par\xe1metro ",(0,r.jsx)(o.em,{children:"documento"})," puede dar nombre a un documento nuevo o existente. Si ",(0,r.jsx)(o.em,{children:"documento"})," tiene el mismo nombre que un documento existente, el documento existente se sobrescribe. El ",(0,r.jsx)(o.em,{children:"documento"})," puede incluir una ruta de acceso que contenga los nombres de los vol\xfamenes y las carpetas. Si pasa una cadena vac\xeda, aparece la caja de di\xe1logo est\xe1ndar de guardar archivos. Si el usuario cancela este di\xe1logo, se cancela la operaci\xf3n de exportaci\xf3n, y la variable sistema OK toma el valor 0."]}),"\n",(0,r.jsxs)(o.p,{children:["Un term\xf3metro de progreso aparece durante la exportaci\xf3n. El usuario puede cancelar la operaci\xf3n haciendo clic en el bot\xf3n Detener. Si la exportaci\xf3n termina con \xe9xito, la variable sistema OK toma el valor 1. En caso de error o si la operaci\xf3n se interrumpe, la variable OK toma el valor 0. El term\xf3metro puede ocultarse con el comando ",(0,r.jsx)(o.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["El comando utiliza por defecto el conjunto de caracteres UTF-8. Los documentos en formato SYLK utilizan por lo general el conjunto de caracteres ISO-8859-1, puede utilizar el comando ",(0,r.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})," para especificar el conjunto de caracteres apropiado."]}),"\n",(0,r.jsxs)(o.p,{children:["Durante la utilizaci\xf3n de ",(0,r.jsx)(o.strong,{children:"EXPORT SYLK"}),", el delimitador de campos por defecto es el car\xe1cter de tabulaci\xf3n (c\xf3digo 9). El delimitador del registro por defecto es el retorno de carro (c\xf3digo 13) en OS X y el retorno de carro+retorno a la l\xednea (c\xf3digo 13 + c\xf3digo 10) bajo Windows. Puede modificar estos valores asignando nuevos valores a las dos ",(0,r.jsx)(o.em,{children:"Variables sistema"})," ",(0,r.jsx)(o.em,{children:"FldDelimit"})," y ",(0,r.jsx)(o.em,{children:"RecDelimit"}),". El usuario puede cambiar estos valores en la caja de di\xe1logo de exportaci\xf3n del entorno Dise\xf1o. Tenga en cuenta que si los campos exportados contienen caracteres definidos como delimitadores de campos o de registros, estos caracteres se reemplazan autom\xe1ticamente con espacios en el archivo exportado, con el fin de no perturbar el proceso de importaci\xf3n."]}),"\n",(0,r.jsx)(o.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(o.p,{children:"El siguiente ejemplo exporta datos a un documento SYLK. El m\xe9todo primero define el formulario de salida de manera que los datos se exporten por el formulario correcto, luego efect\xfaa la exportaci\xf3n:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personas];"Exportar")\n\xa0EXPORT SYLK([Personas];"Nuevas _Personas.slk")\xa0// Exporta al documento "Nuevas_Personas.slk"\n'})}),"\n",(0,r.jsx)(o.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(o.p,{children:"OK toma el valor 1 si la exportaci\xf3n termina con \xe9xito; de lo contrario, toma el valor 0."}),"\n",(0,r.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/es/commands/export-dif",children:"EXPORT DIF"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-sylk",children:"IMPORT SYLK"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,r.jsx)(o.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero de comando"}),(0,r.jsx)(o.td,{children:"85"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Hilo seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modifica variables"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return t}});var s=n(667294);let r={},a=s.createContext(r);function t(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);