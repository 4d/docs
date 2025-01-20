"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61459"],{528314:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-export-document","title":"VP EXPORT DOCUMENT","description":"History","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-export-document.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-document","permalink":"/docs/ViewPro/commands/vp-export-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-export-document","title":"VP EXPORT DOCUMENT"},"sidebar":"docs","previous":{"title":"E","permalink":"/docs/commands-legacy/E"},"next":{"title":"VP EXPORT TO BLOB","permalink":"/docs/ViewPro/commands/vp-export-to-blob"}}'),r=t("785893"),d=t("250065");let l={id:"vp-export-document",title:"VP EXPORT DOCUMENT"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Passing a callback method (formula)",id:"passing-a-callback-method-formula",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Support of .sjs documents"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP EXPORT DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"filePath"})," : Text {; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filePath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Pathname of the document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Export options"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," command exports the 4D View Pro object attached to the 4D View Pro area ",(0,r.jsx)(n.em,{children:"vpAreaName"})," to a document on disk according to the ",(0,r.jsx)(n.em,{children:"filePath"})," and ",(0,r.jsx)(n.em,{children:"paramObj"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"filePath"}),", pass the destination path and name of the document to be exported. If you don't specify a path, the document will be saved at the same level as the Project folder."]}),"\n",(0,r.jsx)(n.p,{children:"You can specify the exported file's format by including an extension after the document's name:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'4D View Pro (".4vp")'}),"\n",(0,r.jsx)(n.li,{children:'Microsoft Excel (".xlsx")'}),"\n",(0,r.jsx)(n.li,{children:'PDF (".pdf")'}),"\n",(0,r.jsx)(n.li,{children:'CSV (".txt", or ".csv")'}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS document"}),' (".sjs")']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the extension is not included, but the format is specified in ",(0,r.jsx)(n.em,{children:"paramObj"}),", the exported file will have the extension that corresponds to the format, except for the CSV format (no extension is added in this case)."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"paramObj"})," parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"format"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:['(optional) When present, designates the exported file format: ".4vp" (default), ".csv", ".xlsx", ".pdf", or ".sjs". You can use the following constants:',(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk 4D View Pro format"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk csv format"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk MS Excel format"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk pdf format"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk sjs format"})}),"4D adds the appropriate extension to the file name if needed. If the format specified doesn't correspond with the extension in ",(0,r.jsx)(n.em,{children:"filePath"}),", it will be added to the end of ",(0,r.jsx)(n.em,{children:"filePath"}),". If a format is not specified and no extension is provided in ",(0,r.jsx)(n.em,{children:"filePath"}),", the default file format is used."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Microsoft Excel only (optional) - Password used to protect the MS Excel document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["Callback method to be launched when the export has completed. Using a callback method is necessary when the export is asynchronous (which is the case for PDF and Excel formats) if you need some code to be executed after the export. The callback method must be passed with the ",(0,r.jsx)(n.a,{href:"/docs/API/FunctionClass#formula",children:(0,r.jsx)(n.code,{children:"Formula"})})," command. See ",(0,r.jsx)(n.a,{href:"#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valuesOnly"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Specifies that only the values from formulas (if any) will be exported."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeFormatInfo"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["True to include formatting information, false otherwise (default is true). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to ",(0,r.jsx)(n.strong,{children:"false"})," allows reducing export time."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeBindingSource"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["4DVP and Microsoft Excel only. True (default) to export the current data context values as cell values in the exported document (data contexts themselves are not exported). False otherwise. Cell binding is always exported. For data context and cell binding management, see ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"})," and ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetIndex"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsxs)(n.td,{children:["PDF only (optional) - Index of sheet to export (starting from 0). -2=all visible sheets (",(0,r.jsx)(n.strong,{children:"default"}),"), -1=current sheet only"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pdfOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"PDF only (optional) - Options for pdf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"creator"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"name of the application that created the original document from which it was converted."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"title of the document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"author"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"name of the person who created that document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"keywords"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"keywords associated with the document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"subject"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"subject of the document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"csvOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"CSV only (optional) - Options for csv export"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Range object of cells"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"rowDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Row delimiter. Default: ",(0,r.jsx)(n.code,{children:'"\\r\\n"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"columnDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Column delimiter. Default: ",(0,r.jsx)(n.code,{children:'","'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sjsOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"SJS only (optional) - Options for sjs export"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the automatically merged cells, default is false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeBindingSource"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the binding source, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeCalcModelCache"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the extra data of calculation. Can be faster when open the file with those data, default is false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include any empty cells (cells with no data or only style) outside the used data range, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the formulas, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the style, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeUnusedNames"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to include the unused custom names, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"saveAsView"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"whether to apply the format string to exporting values, default is false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"excelOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Excel only (optional) - Options for Excel export"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeBindingSource"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the binding source when exporting, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the style when exporting, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the formula when exporting, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"saveAsView"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to apply the format string to exporting value when exporting, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"rowHeadersAsFrozenColumns"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to treat the row headers as frozen columns when exporting, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"columnHeadersAsFrozenRows"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to treat the column headers as frozen rows when exporting, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the automatically merged cells when exporting, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeCalcModelCache"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the extra data of calculation. Can be faster when open the file with those data, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeUnusedNames"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the unused custom name when exporting, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include any empty cells(cells with no data or only style) outside the used data range, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Password to set to open the workbook."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\\<customProperty>"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"Any custom property that will be available through the $3 parameter in the callback method."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes about Excel format"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When exporting a 4D View Pro document into a Microsoft Excel-formatted file, some settings may be lost. For example, 4D methods and formulas are not supported by Excel. You can verify other settings with ",(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,r.jsx)(n.code,{children:"formula"})," property of the ",(0,r.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.em,{children:"excelOptions"}),' object is recommended when exporting in ".xlsx" format. Make sure to not mix this object with legacy first level properties (',(0,r.jsx)(n.em,{children:"password"}),", ",(0,r.jsx)(n.em,{children:"includeBindingSource"}),"...) to avoid potiental issues."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes about PDF format"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When exporting a 4D View Pro document in PDF, the fonts used in the document are automatically embedded in the PDF file. Only OpenType fonts (.OTF or .TTF files) having a Unicode map can be embedded. If no valid font file is found for a font, a default font is used instead."}),"\n",(0,r.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,r.jsx)(n.code,{children:"formula"})," property of the ",(0,r.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes about CSV format"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When exporting a 4D View Pro document to CSV, some settings may be lost, as only the text and values are saved."}),"\n",(0,r.jsxs)(n.li,{children:["All the values are saved as double-quoted strings. For more information on delimiter-separated values, see ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"this article on Wikipedia"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,r.jsx)(n.code,{children:"formula"})," property of the ",(0,r.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes about SpreadJS file format"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS files"})," are zipped files."]}),"\n",(0,r.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,r.jsx)(n.code,{children:"formula"})," property of the ",(0,r.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the export operation is finished, ",(0,r.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," automatically triggers the execution of the method set in the ",(0,r.jsx)(n.em,{children:"formula"})," property of the ",(0,r.jsx)(n.em,{children:"paramObj"}),", if used."]}),"\n",(0,r.jsx)(n.h4,{id:"passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"\n",(0,r.jsxs)(n.p,{children:["When including the optional ",(0,r.jsx)(n.em,{children:"paramObj"})," parameter, the command allows you to use the ",(0,r.jsx)(n.a,{href:"/docs/API/FunctionClass#formula",children:(0,r.jsx)(n.code,{children:"Formula"})})," command to call a 4D method which will be executed once the export has completed. The callback method will receive the following values in local parameters:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param1"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"The name of the 4D View Pro area object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param2"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"The filepath of the exported 4D View Pro object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param3"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsxs)(n.td,{children:["A reference to the command's ",(0,r.jsx)(n.em,{children:"paramObj"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param4"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"An object returned by the method with a status message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:".success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True if export with success, False otherwise."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:".errorCode"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"Error code."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:".errorMessage"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Error message."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:'You want to export the contents of the "VPArea" area to a 4D View Pro document on disk:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $docPath: Text\n\n$docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\nVP EXPORT DOCUMENT("VPArea";$docPath)\n//MyExport.4VP is saved on your disk\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to export the current sheet in PDF:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $params:={}\n$params.format:=vk pdf format\n$params.sheetIndex:=-1\n$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)\nVP EXPORT DOCUMENT("VPArea";"report.pdf";$params)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:'You want to export a 4D View Pro document in ".xlsx" format and call a method that will launch Microsoft Excel with the document open once the export has completed:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $params:={}\n $params.formula:=Formula(AfterExport)\n $excelOptions:={includeStyles:false;includeFormulas:true}\n $params.excelOptions:=$excelOptions\n VP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\convertedfile.xlsx";$params)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"AfterExport"})})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )\n\n If($status.success=False)\n    ALERT($status.errorMessage)\n Else\n    LAUNCH EXTERNAL PROCESS("C:\\\\Program Files\\\\Microsoft Office\\\\Office15\\\\excel "+$filePath)\n End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsxs)(n.p,{children:["You want to export the current sheet to a ",(0,r.jsx)(n.code,{children:".txt"})," file with pipe-separated values:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"example-export-csv",src:t(967626).Z+"",width:"876",height:"353"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $params:={}\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\n$params.rowDelimiter:="\\n"\n$params.columnDelimiter:="|"\nVP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\data.txt";New object("format";vk csv format;"csvOptions";$params))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here's the result:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"example-export-csv",src:t(828382).Z+"",width:"229",height:"99"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-import-document",children:"VP IMPORT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-print",children:"VP Print"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-excel-import-export-update",children:"4D View Pro: Excel import/export update (blog post)"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},828382:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},967626:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/vp-export-document-csv-060625f137ddd998096dfe40455efcbd.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);