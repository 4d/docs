"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30382],{694252:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(474848),n=a(28453);const s={id:"import-text",title:"IMPORT TEXT",slug:"/commands/import-text",displayed_sidebar:"docs"},t=void 0,i={id:"commands-legacy/import-text",title:"IMPORT TEXT",description:"IMPORT TEXT ( {tabla ;} doc )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-text.md",sourceDirName:"commands-legacy",slug:"/commands/import-text",permalink:"/docs/es/commands/import-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"import-text",title:"IMPORT TEXT",slug:"/commands/import-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"IMPORT SYLK",permalink:"/docs/es/commands/import-sylk"},next:{title:"ABORT",permalink:"/docs/es/commands/abort"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"IMPORT TEXT"})," ( {",(0,r.jsx)(o.em,{children:"tabla"})," ;} ",(0,r.jsx)(o.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe1metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabla"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabla en la cual importar datos, o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"doc"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Documento texto a importar datos"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:["El comando IMPORT TEXT lee los datos de ",(0,r.jsx)(o.em,{children:"documento"}),", un documento texto Windows o Macintosh, y los escribe en ",(0,r.jsx)(o.em,{children:"tabla"})," creando nuevos registros para esa tabla."]}),"\n",(0,r.jsx)(o.p,{children:"La operaci\xf3n de importaci\xf3n se efect\xfaa a trav\xe9s del formulario de entrada actual. La operaci\xf3n de importaci\xf3n lee los campos y variables en funci\xf3n de las capas de objetos en el formulario de entrada. Por esta raz\xf3n, debe ser muy cuidadoso en cuanto al orden de los objetos (campos y variables) en el formulario. El primer objeto en el cual los datos ser\xe1n importados debe estar al fondo del formulario, etc. Si el n\xfamero de campos o variables en el formulario no corresponde al n\xfamero de campos a importar, los campos extras son ignorados. Un formulario de entrada utilizado para importar no puede contener botones. Los objetos de subformulario son ignorados."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," una manera de asegurarse de que los datos sean importados en el objeto correcto es seleccionar el objeto en el cual ser\xe1 importado el primer campo y moverlo al primer plano. Contin\xfae moviendo los campos y variables al primer plano en orden, asegur\xe1ndose de que tenga un campo o variable para cada campo a importar."]}),"\n",(0,r.jsx)(o.p,{children:"El evento On Validate es enviado al m\xe9todo de formulario para cada registro importado. Utilice este evento para copiar los datos de las variables en los campos, si utiliza variables en el formulario de importaci\xf3n."}),"\n",(0,r.jsxs)(o.p,{children:["El par\xe1metro ",(0,r.jsx)(o.em,{children:"documento"})," puede incluir una ruta de acceso a los nombres de los vol\xfamenes y carpetas. Si pasa una cadena vac\xeda, aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos. Si el usuario cancela este di\xe1logo, la operaci\xf3n de importaci\xf3n se cancela, y la variable sistema OK toma el valor 0."]}),"\n",(0,r.jsxs)(o.p,{children:["Un term\xf3metro de progreso aparece durante la importaci\xf3n. El usuario puede cancelar la operaci\xf3n haciendo clic en el bot\xf3n Detener. Los registros que ya han sido importados no se eliminar\xe1n si el usuario presiona el bot\xf3n Detener. Si la importaci\xf3n se completa con \xe9xito, la variable sistema OK toma el valor 1. En caso de error o si la operaci\xf3n se interrumpe, la variable OK toma el valor 0. El term\xf3metro puede ocultarse con el comando ",(0,r.jsx)(o.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["El comando utiliza por defecto el conjunto de caracteres UTF-8. Usted puede utilizar el comando ",(0,r.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})," para modificar este conjunto de caracteres."]}),"\n",(0,r.jsxs)(o.p,{children:["Durante la utilizaci\xf3n de IMPORT TEXT, el delimitador de campos por defecto es el car\xe1cter de tabulaci\xf3n (code 9). El delimitador de registros por defecto es el retorno de carro (code 13). Puede cambiar estos valores por defecto asignando nuevos valores a las ",(0,r.jsx)(o.em,{children:"Variables sistema"}),": ",(0,r.jsx)(o.em,{children:"FldDelimit"})," y ",(0,r.jsx)(o.em,{children:"RecDelimit"}),". El usuario puede cambiar los valores por defecto en la caja de di\xe1logo de importaci\xf3n del entorno Dise\xf1o. Los campos texto pueden contener retornos de carro, por lo tanto, tenga cuidado cuando utilice como delimitador un retorno de carro si est\xe1 importando campos texto."]}),"\n",(0,r.jsx)(o.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(o.p,{children:"El siguiente ejemplo importa datos de un documento texto. El m\xe9todo primero define el formulario de entrada de manera que los datos sean importados al formulario correcto, cambia el delimitador de variables 4D, luego efect\xfaa la importaci\xf3n:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personas];"Importar")\n\xa0FldDelimit:=27\xa0// Definir car\xe1cter delimitador de campos: Escape\n\xa0RecDelimit:=10\xa0// Definir car\xe1cter delimitador de registros: Line Feed\n\xa0IMPORT TEXT([Personas];"Nuevas_Personas.txt")\xa0// Importaci\xf3n del documento \u201cNuevas_Personas.txt\u201d\n'})}),"\n",(0,r.jsx)(o.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(o.p,{children:"OK toma el valor 1 si la importaci\xf3n termina con \xe9xito; de lo contrario, toma el valor 0."}),"\n",(0,r.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/es/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-sylk",children:"IMPORT SYLK"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})]})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>t,x:()=>i});var r=a(296540);const n={},s=r.createContext(n);function t(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);