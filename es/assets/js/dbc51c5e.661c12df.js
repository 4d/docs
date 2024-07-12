/*! For license information please see dbc51c5e.661c12df.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40119],{877850:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var s=r(474848),d=r(28453);const t={id:"vp-export-document",title:"VP EXPORT DOCUMENT"},o=void 0,l={id:"ViewPro/commands/vp-export-document",title:"VP EXPORT DOCUMENT",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-export-document.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-export-document",permalink:"/docs/es/ViewPro/commands/vp-export-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-document.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-export-document",title:"VP EXPORT DOCUMENT"},sidebar:"docs",previous:{title:"E",permalink:"/docs/es/commands/E"},next:{title:"VP EXPORT TO BLOB",permalink:"/docs/es/ViewPro/commands/vp-export-to-blob"}},a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Pasar un m\xe9todo retrollamada (f\xf3rmula)",id:"pasar-un-m\xe9todo-retrollamada-f\xf3rmula",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20 R2"}),(0,s.jsx)(n.td,{children:"Soporte de documentos .sjs"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP EXPORT DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"filePath"})," : Text {; ",(0,s.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Ruta de acceso del documento"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Opciones de exportaci\xf3n"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," exporta el objeto de 4D View Pro adjunto al \xe1rea 4D View Pro ",(0,s.jsx)(n.em,{children:"vpAreaName"})," a un documento en disco seg\xfan los par\xe1metros ",(0,s.jsx)(n.em,{children:"filePath"})," y ",(0,s.jsx)(n.em,{children:"paramObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"filePath"}),", pase la ruta de destino y el nombre del documento a exportar. Si no especifica una ruta, el documento se guardar\xe1 en el mismo nivel que la carpeta Project."]}),"\n",(0,s.jsx)(n.p,{children:"Puede especificar el formato del archivo exportado incluyendo una extensi\xf3n despu\xe9s del nombre del documento:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'4D View Pro (".4vp")'}),"\n",(0,s.jsx)(n.li,{children:'Microsoft Excel (".xlsx")'}),"\n",(0,s.jsx)(n.li,{children:'PDF (".pdf")'}),"\n",(0,s.jsx)(n.li,{children:'CSV (".txt", o ".csv")'}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"Documento SpreadJS"}),' (".sjs")']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si no se incluye la extensi\xf3n, pero se especifica el formato en ",(0,s.jsx)(n.em,{children:"paramObj"}),", el archivo exportado tendr\xe1 la extensi\xf3n que corresponda al formato, excepto para el formato CSV (en este caso no se a\xf1ade ninguna extensi\xf3n)."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"paramObj"})," le permite definir m\xfaltiples propiedades para el objeto 4D View Pro exportado y lanzar un m\xe9todo de retrollamada cuando la exportaci\xf3n haya finalizado."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:['(opcional) Cuando est\xe1 presente, designa el formato del archivo exportado: ".4vp" (por defecto), ".csv", ".xlsx", ".pdf" o ".sjs". Puede utilizar las siguientes constantes',(0,s.jsxs)(n.li,{children:[":",(0,s.jsx)(n.code,{children:"vk 4D View Pro format``vk</li><li> csv format``vk</li><li> MS Excel format``vk</li><li> pdf format``vk</li><li> sjs format"})]}),"4D a\xf1ade la extensi\xf3n adecuada al nombre del archivo si es necesario. Si el formato especificado no corresponde con la extensi\xf3n en ",(0,s.jsx)(n.em,{children:"filePath"}),", se a\xf1adir\xe1 al final de ",(0,s.jsx)(n.em,{children:"filePath"}),". Si no se especifica un formato y no se da ninguna extensi\xf3n en ",(0,s.jsx)(n.em,{children:"filePath"}),", se utiliza el formato de archivo por defecto."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contrase\xf1a"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"S\xf3lo Microsoft Excel (opcional) - Contrase\xf1a utilizada para proteger el documento MS Excel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsxs)(n.td,{children:["M\xe9todo de retrollamada que se lanzar\xe1 cuando la exportaci\xf3n haya finalizado. La utilizaci\xf3n de un m\xe9todo de retrollamada es necesaria cuando la exportaci\xf3n es as\xedncrona (que es el caso de los formatos PDF y Excel) si necesita que se ejecute alg\xfan c\xf3digo despu\xe9s de la exportaci\xf3n. El m\xe9todo retrollamada debe pasarse con el comando ",(0,s.jsx)(n.a,{href:"/docs/es/API/FunctionClass#formula",children:(0,s.jsx)(n.code,{children:"Formula"})}),". Ver ",(0,s.jsx)(n.a,{href:"#passing-a-callback-method-formula",children:"Pasar un m\xe9todo de retrollamada (f\xf3rmula)"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valuesOnly"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Especifica que s\xf3lo los valores de las f\xf3rmulas (si las hay) ser\xe1n exportados."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeFormatInfo"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True para incluir informaci\xf3n de formato, false en caso contrario (por defecto es True). La informaci\xf3n de formato es \xfatil en algunos casos, por ejemplo, para una exportaci\xf3n a SVG. Por otro lado, poner esta propiedad en ",(0,s.jsx)(n.em,{children:"false"})," permite reducir el tiempo de exportaci\xf3n."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeBindingSource"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["S\xf3lo 4DVP y Microsoft Excel. True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el documento exportado (los contextos de datos en s\xed no se exportan). False en caso contrario. El enlace de la celda siempre se exporta. Para la gesti\xf3n de los contextos de datos y de las fusiones de celdas, ver ",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetIndex"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["PDF \xfanicamente (opcional) - \xcdndice de la hoja a exportar (empezando por 0). -2=todas las hojas visibles (",(0,s.jsx)(n.strong,{children:"por defecto"}),"), -1=s\xf3lo la hoja actual"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pdfOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["S\xf3lo PDF (opcional) - Opciones para la exportaci\xf3n de pdf ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"creator"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"nombre de la aplicaci\xf3n que cre\xf3 el documento original a partir del cual se convirti\xf3."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"title"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"t\xedtulo del documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"author"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"nombre de la persona que ha creado el documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"keywords"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"palabras clave asociadas al documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subject"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"asunto del documento."})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"csvOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["S\xf3lo CSV (opcional) - Opciones para la exportaci\xf3n csv ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Objeto rango de celdas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowDelimiter"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Delimitador de fila. Default: ",(0,s.jsx)(n.code,{children:'"\\r\\n"'})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnDelimiter"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Column delimiter. Por defecto: ",(0,s.jsx)(n.code,{children:'","'})]})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sjsOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["SJS only (optional) - Options for sjs export ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the automatically merged cells, default is false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeBindingSource"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the binding source, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeCalcModelCache"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the extra data of calculation. Can be faster when open the file with those data, default is false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include any empty cells (cells with no data or only style) outside the used data range, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeFormulas"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the formulas, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeStyles"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the style, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeUnusedNames"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the unused custom names, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"saveAsView"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to apply the format string to exporting values, default is false."})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\<customProperty>"})}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"Toda propiedad personalizada que estar\xe1 disponible a trav\xe9s del par\xe1metro $3 en el m\xe9todo de retrollamada."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre el formato Excel"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Al exportar un documento 4D View Pro a un archivo con formato Microsoft Excel, pueden perderse algunos par\xe1metros. Por ejemplo, los m\xe9todos y f\xf3rmulas 4D no son soportados por Excel. You can verify other settings with ",(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["La exportaci\xf3n en este formato se ejecuta de forma as\xedncrona, utilice la propiedad ",(0,s.jsx)(n.code,{children:"formula"})," del ",(0,s.jsx)(n.em,{children:"paramObj"})," para el c\xf3digo a ejecutar despu\xe9s de la exportaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre el formato PDF"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Al exportar un documento 4D View Pro en PDF, las fuentes utilizadas en el documento se integran autom\xe1ticamente en el archivo PDF. S\xf3lo se pueden integrar las fuentes OpenType (archivos .OTF o .TTF) que tengan un tabla Unicode. Si no se encuentra un archivo de fuentes v\xe1lido para una fuente, se utiliza una fuente por defecto."}),"\n",(0,s.jsxs)(n.li,{children:["La exportaci\xf3n en este formato se ejecuta de forma as\xedncrona, utilice la propiedad ",(0,s.jsx)(n.code,{children:"formula"})," del ",(0,s.jsx)(n.em,{children:"paramObj"})," para el c\xf3digo a ejecutar despu\xe9s de la exportaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre el formato CSV"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Al exportar un documento 4D View Pro al formato CSV, es posible que se pierdan algunos par\xe1metros, ya que s\xf3lo se guardan el texto y los valores."}),"\n",(0,s.jsxs)(n.li,{children:["Todos los valores se guardan como cadenas entre comillas. Para m\xe1s informaci\xf3n sobre valores separados por delimitadores, ver ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"este art\xedculo en Wikipedia"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["La exportaci\xf3n en este formato se ejecuta de forma as\xedncrona, utilice la propiedad ",(0,s.jsx)(n.code,{children:"formula"})," del ",(0,s.jsx)(n.em,{children:"paramObj"})," para el c\xf3digo a ejecutar despu\xe9s de la exportaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre el formato de archivo SpreadJS"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS files"})," are zipped files."]}),"\n",(0,s.jsxs)(n.li,{children:["La exportaci\xf3n en este formato se ejecuta de forma as\xedncrona, utilice la propiedad ",(0,s.jsx)(n.code,{children:"formula"})," del ",(0,s.jsx)(n.em,{children:"paramObj"})," para el c\xf3digo a ejecutar despu\xe9s de la exportaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Una vez finalizada la operaci\xf3n de exportaci\xf3n, ",(0,s.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," activa autom\xe1ticamente la ejecuci\xf3n del m\xe9todo definido en la propiedad ",(0,s.jsx)(n.em,{children:"formula"})," del ",(0,s.jsx)(n.em,{children:"paramObj"}),", si se usa."]}),"\n",(0,s.jsx)(n.h4,{id:"pasar-un-m\xe9todo-retrollamada-f\xf3rmula",children:"Pasar un m\xe9todo retrollamada (f\xf3rmula)"}),"\n",(0,s.jsxs)(n.p,{children:["When including the optional ",(0,s.jsx)(n.em,{children:"paramObj"})," parameter, the command allows you to use the ",(0,s.jsx)(n.a,{href:"/docs/es/API/FunctionClass#formula",children:(0,s.jsx)(n.code,{children:"Formula"})})," command to call a 4D method which will be executed once the export has completed. El m\xe9todo de retrollamada recibir\xe1 los siguientes valores en par\xe1metros locales:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param1"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"El nombre del objeto de \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param2"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Ruta de acceso del objeto 4D View Pro exportado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param3"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["Una referencia al ",(0,s.jsx)(n.em,{children:"paramObj"})," del comando"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param4"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Un objeto devuelto por el m\xe9todo con un mensaje de estado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".success"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True si exporta con \xe9xito, de lo contrario False."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorCode"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"C\xf3digo de error."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorMessage"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Mensaje de error."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:'Quiere exportar el contenido del \xe1rea "VPArea" a un documento 4D View Pro en el disco:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $docPath: Text\n \n$docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\nVP EXPORT DOCUMENT("VPArea";$docPath)\n//MyExport.4VP se guarda en su disco\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Quiere exportar la hoja actual en PDF:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $params: Object\n$params:=New object\n$params.format:=vk pdf format\n$params.sheetIndex:=-1\n$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)\nVP EXPORT DOCUMENT("VPArea";"report.pdf";$params)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:'Desea exportar un documento 4D View Pro en formato ".xlsx" y llamar a un m\xe9todo que inicie Microsoft Excel con el documento abierto una vez completada la exportaci\xf3n:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $params:=New object\n $params.formula:=Formula(AfterExport)\n $params.format:=vp MS Excel format //".xlsx"\n $params.valuesOnly:=True\n \n VP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\convertedfile";$params)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["M\xe9todo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"AfterExport"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )\n \n If($status.success=False)\n    ALERT($status.errorMessage)\n Else\n    LAUNCH EXTERNAL PROCESS("C:\\\\Program Files\\\\Microsoft Office\\\\Office15\\\\excel "+$filePath)\n End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsxs)(n.p,{children:["Quiere exportar la hoja actual a un archivo ",(0,s.jsx)(n.code,{children:".txt"}),' con valores separados por "|":']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example-export-csv",src:r(413635).A+"",width:"876",height:"353"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $params : Object\n$params:=New object\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\n$params.rowDelimiter:="\\n"\n$params.columnDelimiter:="|"\nVP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\data.txt";New object("format";vk csv format;"csvOptions";$params))\n'})}),"\n",(0,s.jsx)(n.p,{children:"Aqu\xed est\xe1 el resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example-export-csv",src:r(50553).A+"",width:"229",height:"99"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-import-document",children:"VP IMPORT DOCUMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-print",children:"VP Print"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var s=r(296540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var s,t={},i=null,c=null;for(s in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:d,type:e,key:i,ref:c,props:t,_owner:l.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},50553:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABjCAYAAABkIMfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAtvSURBVHhe7Z09duo6FIUPbyxwiyxGQEYAaVLR3s4poUmXMl0aKOPutqnSBEYQRpBFEZgL70iWsfwvWzYWeH9reSVgZCShY/3Ye3twYggA4Az/qb8AAEfodVBunwZ0vz6qVwC4AXpKABwjNygHgwE9bfmf7VP0v85xTff8vtgnNr3HOa7vz+8PBk+UTGrHkdb3JT2cnue8/BdRmH5LT8nj1fkOG2zLB5wmNygn6m/AhO5G6l+BaAijJY03JxLrRGL7R1/n4BsuvoP3N55658KM7orzX0aV9OLkNPPJ47p4n6r3GkCe2O7XfArKwLZ8wGkKhq/qh041AO6pXn2arA6xRjhcLKjBNtkAefk3xSQ918XfJVGiLi6DbfmAs4hLIpU4rE4TmpxWB/W6iI13IvJOG/VShztRcSlGbfHPHFaTk+h6gvTBZ/gkEO49rSbp19xIzfKkIfIQHceUzYn7/5PInsznZMU5SBMrX+wzQX69TXCc4DNR3uUxz+/rW/Xygeuk+kLPYU87GtOfoXpdAzE0+3yMhr4bz6dZcqjmz2jwekfcDolbKtHyL6WnkWJ+OaIlrfhz37SwyFNlftf0dzmmzfeCkl8rVnVntInKN17SKFE+f/ZKd4ew/DsuXrA/HPpzcHIcinKF9XTh8oHO6GT1VTQ8fbg3fcyae3pRgx/+4dPAjvYHuUNxCAJyzI0/IzDaxl8uOUdZbOnTn9DqOSrg9HlFk90HfWlR6W2iIMsuP+grNYPyh35TvVYFEiu3g5mvdmh4j9ocdUrv3FvogbxbzmjJUeE9XnwyJxELO4fVT7qHP/5y7XDPN9LKN8oLYADSVA/K6SP3YTv60E/7ldjSEzdSsTgSDu/EBKwqYqFJpPNn9xnD2sswXPzjgTMPTVPXI7inVEPTaMPwE5hRo6ec0jPPd3bLUeza2HG9rnk9koM0q6c0YfrOvRVPN0ddBeaQFt8b8nj+e75uOnyg+YR7yje7C4fDP2MeDsSHvKAf1Bq+ijmhWIjwZ9EQ7S89qOFmcHE/Gpb6NJOfCQMnCuog7SvdrerPqURe5EIJDxe7uYDOQ2vusUV5gsAUgXqg1c9MlU9tedcc8+ATTliu4BjdjQjAZem1SkSskr7eHegb40rgEJ2svgIA8kFQAuAYEDkD4BjoKQFwDAQlAI7R66CE8wBwEfSUADhGdlAWKtu1mwPOW9PuApbYKvML0ovedZBxMClKrvQlLWJbftAp2UFpoGwXN2QH93TmSK+6xCD/hdim75prz3/PKRi+mivb3ZQemec/m+z0o7v8o02cavm25QedIa5TViNUzquX6rWu4DdxDojSM+JzSQW/dDjQlPeJ/fnKfnPEMao6D+huA+L/MH3yWLH8ac4KMn3KjSFwIQjSFzsThDRRfuAmtRd6opvRA+X/v+T9o0bOATmIeVDCmEsXMpso+9tCqjckR/r62NHu4yv1vUXOCsPFC3nk06c+x9t+kj+J12GeM4Ggy/KD9qkdlLE5ZWajKHMOyGf76YsvyDGjMlP2t8+B9lxGj6LvHSuPlGJnhSmJl/45KpUR2fwh5p6Q70zgSvlBW9QOSp3MRlHiHJDPkX5/RPKcD7ug7N/t6cC928/8mZ7nlD7ZlDgryPryP4MV6+MXfew8ejFVqsDZ4OZpJCjb4KfQb6RDZb9aOPnlM4foGcVw1v9cyxNJgIGzghRC+/TK4/nj1wd/9lk7gZkAZ4NbppGg3L7xmXoyp4cKjeI8fFNmxhFDepgLEXTOHLQhZb8dPi2XY5KdubBH8Ze03OVddshyVhjS4sXj+egbvXFMzqtUnBPlB23SwEKPWnQwdpTjBvlPDN+UMn+0p5dETxI4Gwibj+g7IuV+Q8r+usj5MTO5oyAGRxS/SmLorCCCeeeTP36p2MN1XH7QOnAe6Mx5QDyTZEbU8OMOwPXj7Jzy1tk+zeRlEG0RFQAJgvLCyHtnebg5+1nRoQMTaeA+cB4AwDHQUwLgGAhKAByj10Ep5ndwHgCugZ4SAMfIDspC5Xq/nQciwnpIP05AuhDIesmum7L91tiWH3RKdlCmhLHpW8h67zwgbiSnFa289BPIxB1Jsm6S97wqyvZbY1t+0CkFw1f1Q6Z+4DR9ch4IkTeSzx9owWXP0lR2j235QWfwGbsi5c4DgpgyPqG0L3YmKN5frtw3R+SxapoArQ6kQ0LaGUAi85/Mq0bB/lj9xZwFzJwJwPVSe6GnyHmgSHl/psyZIGe/qXK/VZQGUqpElGqj/kN005g4CxQ5E4DrpnZQxuaUiUZTrLwPKXMmyNtvptxvEzF03Z1F3Epq1tgQ1sxZIN+ZAFw7tYNSJ9VoSpT3kjJngoL9Vsp9awJvHt25Lnjq8p4M3U6KgbNA72kkKOMYKO9tsVbuWyBPAhyDZ71keNJJDKmtgLNAn2kkKIudB7KU97ZYKPctkUNXnr/Kua62ifNONKS2AM4CvaeBhZ6k84Ch8t6W2sp9Ow57HrpmzF/lvE4OqbWbK1QPOpP1EN5kULYfzgJ954qlW/bK/W6dBwDIpoU55WWAch/cKlcXlFDug1sHzgMAOMbVDl8BuFUQlAA4Rq+DEs4DwEXQUwLgGNlBWahc77vzQNvlD47fag9uWz+gVbKD0kC5HlOJCGlWxYYpLTHaukvFIP+FXKD8nWJbP6BVCoav5sp1qdpo9IbsJjDPfzbXXv4ybOsHtAaf6SuSdB5gpPo+/l6ecj5wDtD2nbe4ej5fea+OIb4sx7nAFPEd1dPVKH8l54Wkk0Pwuov6Ad3QyEJPoBKJbnkrUs6HplHccLid6WqLSJpkorwvdS64IMnyN+K8IBHzy8DZ4XDF9QMqwj9qRcIzd96ZWnjHJDxjMnxs5Nk8cYYPKE8v08Z6n8CvJtZ7GWDTU+aXPwPRY2mfKc5/2FNugu9JFepy9QO6oXZPyT/w+Uwde2CsrXLeNH2Zc0HL5JZf0IDzwm45oyUX2pNGQBpXUj+gPo0MX9PYKuevWXnfjPMC9+AynT9Lmz1fd/2AMpoPSkPlfOBrEzeDktyc8t7CeWH6rh4zrwUmnAlunhZ6SkPlPDc4aY14HobdivK+WecFsTAW1lNwgR/OBLdOr6VbYhUTzgPANVqaUwIA6oKgBMAx4DwAgGOgpwTAMRCUADjGTQclnAXANYKeEgDHyA7KAmV6/Hn98e1ivZKtcr40fdpd4HI9roHzgG35gdNkB2WBMv38vH7e5C2dXiQhuthF+IL8GVGYXsmlxlG5ssrWqnNCGbblB05TMHx1XZlum7+c9OpRdyl1hnO4/vuA2nAvUBupfs8U6SU1h7q2L9iX98z+tBZQEHy2qvaxnl5S5StHIxnkL8y3vsU1jrJuzvvi5ZHHEPVm4TwAbpcWglI1Iu39eKClG5k8zjkIMgS5CZGwKfWCklH2HjJgMk86qkwFgasni5cvrA/tvZhIWQ9KVVc1yg6ul+ZXX9Xjzjeaona4eCEvYSyV/8z+KQWPegw/zHO8Vz/zmZCtMVzQtzhhcTRJW42KCyli3q0LiuPlC+E6CsXRwz80ph3tY89nP0RzWzzIqFc0H5SHfVoFTyO6qzDxke5w8gGsjAryly6UHNN3ucjDPRvHZgULyTadB8DN03xQZnKgfTpS85FCXp9e10f5OHNaPWsN+PJIQTb90K/RUuslnAfALdN8UIrHnotHhmvjveoPeB3S4sWj3ccbvXFMzh+6HbxtP7mnm8xJz0auc0KKhp0HwM3TQk8phmIb8tRcTGy1HvAqgnvnkz9+uaz3THLomZf/XOeEtp0HwK3jsHSLe5jBjGhT34UNzgLgGrnQnLI61Ye8ANwGzgWl6N1yh4wA9AA4DwDgGM4OXwHoKwhKABwDQQmAYyAoAXAMBCUAjoGgBMAxEJQAOAaCEgDHQFAC4BRE/wNqigFFqCxgxQAAAABJRU5ErkJggg=="},413635:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/vp-export-document-csv-060625f137ddd998096dfe40455efcbd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(296540);const d={},t=s.createContext(d);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);