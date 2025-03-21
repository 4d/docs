"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97458"],{668506:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>t,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/import-sylk","title":"IMPORT SYLK","description":"IMPORT SYLK ( {tabla ;} doc )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/import-sylk.md","sourceDirName":"commands-legacy","slug":"/commands/import-sylk","permalink":"/docs/es/commands/import-sylk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-sylk.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"import-sylk","title":"IMPORT SYLK","slug":"/commands/import-sylk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT DIF","permalink":"/docs/es/commands/import-dif"},"next":{"title":"IMPORT TEXT","permalink":"/docs/es/commands/import-text"}}'),n=r("785893"),s=r("250065");let i={id:"import-sylk",title:"IMPORT SYLK",slug:"/commands/import-sylk",displayed_sidebar:"docs"},l=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"IMPORT SYLK"})," ( {",(0,n.jsx)(o.em,{children:"tabla"})," ;} ",(0,n.jsx)(o.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe1metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabla"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabla en la cual importar los datos, o Tabla por defecto, si se omite"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"doc"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Documento SYLK a importar"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(o.p,{children:["El comando IMPORT SYLK lee los datos de ",(0,n.jsx)(o.em,{children:"documento"}),", un documento SYLK Windows o Macintosh, y los escribe en ",(0,n.jsx)(o.em,{children:"tabla"})," creando nuevos registros."]}),"\n",(0,n.jsx)(o.p,{children:"La operaci\xf3n de importaci\xf3n se realiza por intermedio del formulario de entrada actual. La operaci\xf3n de importaci\xf3n lee los campos y las variables en funci\xf3n del plano de los objetos en el formulario de entrada. Por esta raz\xf3n, debe ser muy cuidadoso en cuanto al orden de los objetos texto (campos y variables) en el formulario. El primer objeto en el cual los datos ser\xe1n importados debe estar al fondo del formulario, etc. Si el n\xfamero de campos o variables en el formulario no corresponde al n\xfamero de campos a importar, los campos extras son ignorados. Un formulario de entrada utilizado para importar no puede contener botones. Los objetos de subformulario son ignorados."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," una forma de asegurar que los datos se importen en los objetos correctos es seleccionar el objeto en el cual se debe importar el primer campo y moverlo al primer plano. Contin\xfae moviendo los campos y variables al primer plano, en orden, asegur\xe1ndose de que tenga un campo o variable para cada campo a importar."]}),"\n",(0,n.jsx)(o.p,{children:"Un evento On Validate se env\xeda al m\xe9todo de formulario para cada registro que se importa. Utilice este evento para copiar los datos de las variables a los campos, si utiliza las variables en el formulario de exportaci\xf3n."}),"\n",(0,n.jsxs)(o.p,{children:["El par\xe1metro ",(0,n.jsx)(o.em,{children:"documento"})," puede incluir una ruta de acceso a los nombres de vol\xfamenes y carpetas. Si pasa una cadena vac\xeda, aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos. Si el usuario cancela este di\xe1logo, se cancela la operaci\xf3n de importaci\xf3n, y la variable sistema OK toma el valor 0."]}),"\n",(0,n.jsxs)(o.p,{children:["Un term\xf3metro de progreso aparece durante la importaci\xf3n. El usuario puede cancelar la operaci\xf3n haciendo clic en el bot\xf3n Detener. Los registros que ya hayan sido importados no ser\xe1n removidos si el usuario presiona el bot\xf3n Detener. Si la importaci\xf3n termina con \xe9xito, la variable sistema OK toma el valor 1. Si ocurre un error o se interrumpe la operaci\xf3n, la variable sistema toma el valor 0. El term\xf3metro puede ocultarse con el comando ",(0,n.jsx)(o.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["El comando utiliza por defecto el conjunto de caracteres UTF-8. Los documento en formato SYLK utilizan por lo general el conjunto de caracteres ISO-8859-1, puede ser necesario utilizar el comando ",(0,n.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"}),"  para definir el conjunto de caracteres apropiado."]}),"\n",(0,n.jsxs)(o.p,{children:["Durante la utilizaci\xf3n de IMPORT SYLK, el delimitador de campos por defecto es el car\xe1cter de tabulaci\xf3n (c\xf3digo 9). El delimitador del registro por defecto es el retorno de carro (c\xf3digo 13). Puede modificar estos valores asignando nuevos valores a las dos ",(0,n.jsx)(o.em,{children:"Variables sistema"})," ",(0,n.jsx)(o.em,{children:"FldDelimit"})," y ",(0,n.jsx)(o.em,{children:"RecDelimit"}),". El usuario puede cambiar estos valores en la caja de di\xe1logo de exportaci\xf3n del entorno Dise\xf1o. Como los campos Texto pueden contener retornos de carro, sea cuidadoso si utiliza el retorno de carro como delimitador entre los campos a exportar."]}),"\n",(0,n.jsx)(o.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(o.p,{children:"El siguiente ejemplo importa datos de un documento SYLK. El m\xe9todo comienza por definir el formulario de entrada de manera que los datos sean importados por el formulario correcto, luego realiza la importaci\xf3n:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personas];"Importar")\n\xa0IMPORT SYLK([Personas];"Nuevas_Personas.slk")\xa0// Importar del documento \u201CNuevas_Personas.slk\u201D\n'})}),"\n",(0,n.jsx)(o.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,n.jsx)(o.p,{children:"OK toma el valor 1 si la importaci\xf3n termina con \xe9xito; de lo contrario, toma el valor 0."}),"\n",(0,n.jsx)(o.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/es/commands/export-sylk",children:"EXPORT SYLK"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/es/commands/import-dif",children:"IMPORT DIF"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/es/commands/import-text",children:"IMPORT TEXT"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,n.jsx)(o.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero de comando"}),(0,n.jsx)(o.td,{children:"87"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Hilo seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modifica variables"}),(0,n.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return l},a:function(){return i}});var a=r(667294);let n={},s=a.createContext(n);function i(e){let o=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);