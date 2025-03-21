"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18271"],{217846:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-import-document","title":"VP IMPORT DOCUMENT","description":"History","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-import-document.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-import-document","permalink":"/docs/ViewPro/commands/vp-import-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-import-document","title":"VP IMPORT DOCUMENT"},"sidebar":"docs","previous":{"title":"I","permalink":"/docs/commands-legacy/I"},"next":{"title":"VP IMPORT FROM BLOB","permalink":"/docs/ViewPro/commands/vp-import-from-blob"}}'),r=t("785893"),d=t("250065");let l={id:"vp-import-document",title:"VP IMPORT DOCUMENT"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Support of .sjs documents"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP IMPORT DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"filePath"})," : Text { ; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filePath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Pathname of the document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Import options"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP IMPORT DOCUMENT"})," command imports and displays the document designated by ",(0,r.jsx)(n.em,{children:"filePath"})," in the 4D View Pro area ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". The imported document replaces any data already inserted in the area."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"filePath"}),", pass the path and name of the document to be imported. The following formats are supported :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'4D View Pro documents (extension ".4vp")'}),"\n",(0,r.jsx)(n.li,{children:'Microsoft Excel (extension ".xlsx")'}),"\n",(0,r.jsx)(n.li,{children:'text documents (extension ".txt", ".csv", the document must be in utf-8)'}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS documents"}),' (extension ".sjs")']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the document extension is not a recognized extension, such as ",(0,r.jsx)(n.code,{children:".4vp"})," or ",(0,r.jsx)(n.code,{children:".xlsx"}),", the document is considered a text document. You must pass a full path, unless the document is located at the same level as the Project folder, in which case you can just pass its name."]}),"\n",(0,r.jsxs)(n.p,{children:["An error is returned if the ",(0,r.jsx)(n.code,{children:"filePath"})," parameter is invalid, or if the file is missing or malformed."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"paramObj"})," parameter allows you to define properties for the imported document:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["A callback method to be launched when the import has completed. You must use a formula returned by the ",(0,r.jsx)(n.a,{href:"/docs/commands/formula",children:(0,r.jsx)(n.code,{children:"Formula"})})," command. See ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Microsoft Excel only (optional) - The password used to protect a MS Excel document."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"csvOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"options for csv import"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range that contains the first cell where the data will be written. If the specified range is not a cell range, only the first cell of the range is used."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"rowDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Row delimiter. If not present, the delimiter is automatically determined by 4D."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"columnDelimiter"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Column delimiter. Default: ","'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sjsOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"options for sjs import"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"calcOnDemand"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate formulas only when they are demanded, default is false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"dynamicReferences"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate functions with dynamic references, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"fullRecalc"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate after loading the json data, false by default."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the formulas when loading, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the styles when loading, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeUnusedStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the unused name styles when converting excel xml to the json, default is true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"openMode"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.li,{children:"0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points."}),(0,r.jsx)(n.li,{children:"1 (lazy): lazy open mode. When opening file, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used."}),(0,r.jsx)(n.li,{children:"2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"excelOptions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Excel only (optional) - Options for Excel export"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the style when importing, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the formula when importing, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"frozenColumnsAsRowHeaders"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to treat the frozen columns as row headers when importing, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"frozenRowsAsColumnHeaders"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to treat the frozen rows as column headers when importing, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"fullRecalc"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate after loading the json data, false by default."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"dynamicReferences"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate functions with dynamic reference, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"calcOnDemand"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate formulas only when they are demanded, default false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"includeUnusedStyles"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the unused name style when converting excel xml to the json, default true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"The password to open the workbook."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"openMode"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"The open mode of normal, lazy and incremental. By default is normal."})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Importing files in .xslx, .csv, and .sjs formats is ",(0,r.jsx)(n.strong,{children:"asynchronous"}),". With these formats, you must use the ",(0,r.jsx)(n.code,{children:"formula"})," attribute if you want to start an action at the end of the document processing."]}),"\n",(0,r.jsxs)(n.li,{children:["When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with ",(0,r.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For more information on the CSV format and delimiter-separated values in general, see ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"this article on Wikipedia"})]}),"\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.em,{children:"excelOptions"}),' object is recommended when importing ".xlsx" format. Make sure to not mix this object with legacy first level property ',(0,r.jsx)(n.em,{children:"password"})," to avoid potiental issues."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to import a default 4D View Pro document stored on the disk when the form is open:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $docPath : text\nIf(Form event code=On VP Ready) //4D View Pro area loaded and ready\n    $docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\n    VP IMPORT DOCUMENT("VPArea";$docPath)\nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to import a password protected Microsoft Excel document into a 4D View Pro area:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'	//Import code\nvar $o:={}\n$o.formula:=Formula(myImport)\n$excelOptions:={includeStyles:false;includeFormulas:true;password:"excel123"}\n$o.excelOptions:=$excelOptions\n \nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\excelfile.xlsx";$o)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'	//myImport callback method\n#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)\n\nIf ($status.success)\n     ALERT("Import successfully completed")\nElse \n     ALERT("Error: "+$status.errorMessage)\nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsxs)(n.p,{children:["You want to import a ",(0,r.jsx)(n.code,{children:".txt"}),' file that uses a comma (",") as delimiter:']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"example-import-csv",src:t(721026).Z+"",width:"474",height:"138"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $params:={}\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\import\\\\my-file.txt";New object("csvOptions";$params))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here's the result:\n",(0,r.jsx)(n.img,{alt:"example-import-csv",src:t(24120).Z+"",width:"876",height:"532"})]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-new-document",children:"VP NEW DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-excel-import-export-update",children:"4D View Pro: Excel import/export update (blog post)"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},24120:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/vp-import-document-csv-result-8d8ef2a5ba8244c5865bf605e59421c0.png"},721026:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);