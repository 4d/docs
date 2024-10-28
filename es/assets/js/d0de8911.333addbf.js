"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98113],{827407:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=s(474848),t=s(28453);const d={id:"vp-import-document",title:"VP IMPORT DOCUMENT"},o=void 0,i={id:"ViewPro/commands/vp-import-document",title:"VP IMPORT DOCUMENT",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-import-document.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-import-document",permalink:"/docs/es/20-R6/ViewPro/commands/vp-import-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-document.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-import-document",title:"VP IMPORT DOCUMENT"},sidebar:"docs",previous:{title:"I",permalink:"/docs/es/20-R6/commands/I"},next:{title:"VP IMPORT FROM BLOB",permalink:"/docs/es/20-R6/ViewPro/commands/vp-import-from-blob"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Soporte de documentos .sjs"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP IMPORT DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"filePath"})," : Text { ; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filePath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Ruta de acceso del documento"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de importaci\xf3n"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP IMPORT DOCUMENT"})," importa y muestra el documento designado por ",(0,r.jsx)(n.em,{children:"filePath"})," en el \xe1rea de 4D View Pro ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". El documento importado sustituye a los datos ya insertados en el \xe1rea."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"filePath"}),", pase la ruta y el nombre del documento a importar. Se soportan los siguientes formatos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Los documentos 4D View Pro (extensi\xf3n ".4vp")'}),"\n",(0,r.jsx)(n.li,{children:'Microsoft Excel (extensi\xf3n ".xlsx")'}),"\n",(0,r.jsx)(n.li,{children:'documentos texto (extension ".txt", ".csv", el documento debe estar en utf-8)'}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS documents"}),' (extension ".sjs")']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si la extensi\xf3n del documento no es una extensi\xf3n reconocida, como ",(0,r.jsx)(n.code,{children:".4vp"})," o ",(0,r.jsx)(n.code,{children:".xlsx"}),", el documento se considera un documento texto. Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que la carpeta Project, en cuyo caso puede pasar s\xf3lo su nombre."]}),"\n",(0,r.jsxs)(n.p,{children:["Se devuelve un error si el par\xe1metro ",(0,r.jsx)(n.code,{children:"filePath"})," no es v\xe1lido, o si el archivo falta o est\xe1 mal formado."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"paramObj"})," permite definir las propiedades del documento importado:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["Un m\xe9todo de retollamada que se lanzar\xe1 cuando la importaci\xf3n haya terminado. Debe utilizar una f\xf3rmula devuelta por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/API/FunctionClass#formula",children:(0,r.jsx)(n.code,{children:"Formula"})}),". Ver ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Pasar un m\xe9todo de retrollamada (f\xf3rmula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contrase\xf1a"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"S\xf3lo Microsoft Excel (opcional) - La contrase\xf1a utilizada para proteger un documento MS Excel."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"csvOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"opciones de importaci\xf3n csv"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas que contiene la primera celda donde se escribir\xe1n los datos. Si el rango especificado no es un rango de celdas, s\xf3lo se utiliza la primera celda del rango."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"rowDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Delimitador de l\xednea. Si no est\xe1 presente, el delimitador es determinado autom\xe1ticamente por 4D."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"columnDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Delimitador de columna. Por defecto: ","'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sjsOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"opciones para la importaci\xf3n de sjs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"calcOnDemand"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si se calculan las f\xf3rmulas s\xf3lo cuando se solicitan, por defecto es false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"dynamicReferences"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si calcular funciones con referencias din\xe1micas, por defecto es true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"fullRecalc"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si calcular despu\xe9s de cargar los datos json, false por defecto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si se incluyen las f\xf3rmulas al cargar, por defecto es true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si se incluyen los estilos al cargar, por defecto es true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeUnusedStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Si se incluyen los estilos de nombre no utilizados al convertir excel xml a json, por defecto es true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"openMode"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.li,{children:"0 (normal): modo abierto normal, sin perezoso (lazy) e incremental. Al abrir un archivo, la interfaz de usuario y el evento de interfaz de usuario podr\xedan actualizarse y responder en momentos espec\xedficos."}),(0,r.jsx)(n.li,{children:"1 (lazy): modo de apertura lazy. Al abrir el archivo, s\xf3lo se cargar\xe1 directamente la hoja activa. Las dem\xe1s hojas s\xf3lo se cargar\xe1n cuando se vayan a utilizar."}),(0,r.jsx)(n.li,{children:"2 (incremental): modo de apertura incremental. Al abrir un archivo, la interfaz de usuario y el evento de interfaz de usuario podr\xedan actualizarse y responder directamente."})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Notas",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La importaci\xf3n de archivos en formatos .xslx, .csv y .sjs es ",(0,r.jsx)(n.strong,{children:"as\xedncrona"}),". Con estos formatos, debe utilizar el atributo ",(0,r.jsx)(n.code,{children:"formula"})," si desea iniciar una acci\xf3n al final del procesamiento del documento."]}),"\n",(0,r.jsxs)(n.li,{children:["Al importar un archivo con formato Microsoft Excel a un documento 4D View Pro, algunos par\xe1metros pueden perderse. Puede verificar su configuraci\xf3n con ",(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"esta lista de SpreadJS"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Para m\xe1s informaci\xf3n sobre el formato CSV y los valores separados por delimitadores en general, ver ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"este art\xedculo en Wikipedia"})]}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Desea importar un documento 4D View Pro por defecto almacenado en el disco, al abrir el formulario:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_TEXT($docPath)\nIf(Form event code=On VP Ready) //\xc1rea 4D View Pro cargada y lista\n    $docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\n    VP IMPORT DOCUMENT("VPArea";$docPath)\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Desea importar un documento Microsoft Excel protegido por contrase\xf1a a un \xe1rea 4D View Pro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\t//C\xf3digo de importaci\xf3n\nvar $o : Object\n$o:=New object\n$o.password:="excel123"\n$o.formula:=Formula(myImport)\n \nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\excelfilefile.xlsx";$o)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\t//myImport callback method\n#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)\n\nIf ($status.success)\n     ALERT("Import successfully completed")\nElse \n     ALERT("Error: "+$status.errorMessage)\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsxs)(n.p,{children:["Quiere importar un archivo ",(0,r.jsx)(n.code,{children:".txt"}),' que utiliza una coma (",") como delimitador:']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"example-import-csv",src:s(998780).A+"",width:"474",height:"138"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$params:=New object\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\import\\\\my-file.txt";New object("csvOptions";$params))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Este es el resultado:\n",(0,r.jsx)(n.img,{alt:"example-import-csv",src:s(239496).A+"",width:"876",height:"532"})]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-new-document",children:"VP NEW DOCUMENT"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},239496:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vp-import-document-csv-result-8d8ef2a5ba8244c5865bf605e59421c0.png"},998780:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(296540);const t={},d=r.createContext(t);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);