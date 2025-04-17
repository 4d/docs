"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46443"],{407847:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-import-document","title":"VP IMPORT DOCUMENT","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-import-document.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-import-document","permalink":"/docs/pt/ViewPro/commands/vp-import-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-import-document","title":"VP IMPORT DOCUMENT"},"sidebar":"docs","previous":{"title":"I","permalink":"/docs/pt/commands-legacy/I"},"next":{"title":"VP IMPORT FROM BLOB","permalink":"/docs/pt/ViewPro/commands/vp-import-from-blob"}}'),t=s("785893"),d=s("250065");let o={id:"vp-import-document",title:"VP IMPORT DOCUMENT"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R2"}),(0,t.jsx)(n.td,{children:"Suporte de documentos .sjs"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP IMPORT DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"filePath"})," : Text { ; ",(0,t.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filePath"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Caminho do documento"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paramObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Op\xe7\xf5es de importa\xe7\xe3o"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP IMPORT DOCUMENT"})," command imports and displays the document designated by ",(0,t.jsx)(n.em,{children:"filePath"})," in the 4D View Pro area ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". O documento importado substitui qualquer dado j\xe1 inserido na \xe1rea"]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"filePath"}),", passe o caminho de destino e o nome do documento a ser importado. S\xe3o suportados os seguintes formatos:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Os documentos 4D View Pro (extens\xe3o ".4vp")'}),"\n",(0,t.jsx)(n.li,{children:'Microsoft Excel (extens\xe3o ".xlsx")'}),"\n",(0,t.jsx)(n.li,{children:'documentos textos (extens\xe3o ".txt", ".csv", o documento deve ser em utf-8)'}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"Documentos SpreadJS"}),' (extens\xe3o ".sjs")']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the document extension is not a recognized extension, such as ",(0,t.jsx)(n.code,{children:".4vp"})," or ",(0,t.jsx)(n.code,{children:".xlsx"}),", the document is considered a text document. Deve passar uma rota completa, a n\xe3o ser que o documento esteja localizado no mesmo n\xedvel que a pasta Project, em cujo caso pode passar apenas seu nome."]}),"\n",(0,t.jsxs)(n.p,{children:["An error is returned if the ",(0,t.jsx)(n.code,{children:"filePath"})," parameter is invalid, or if the file is missing or malformed."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"paramObj"})," parameter allows you to define properties for the imported document:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"4D. Function"}),(0,t.jsxs)(n.td,{children:["Um m\xe9todo de retorno de chamada a ser iniciado quando a importa\xe7\xe3o for conclu\xedda. Voc\xea deve usar uma f\xf3rmula retornada pelo comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/formula",children:(0,t.jsx)(n.code,{children:"Formula"})}),". Veja ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passando um m\xe9todo de callback (f\xf3rmula)"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"senha"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Somente Microsoft Excel (opcional) - Senha usada para proteger o documento do MS Excel."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"csvOptions"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"op\xe7\xf5es para importa\xe7\xe3o csv"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"O intervalo  de c\xe9lulas que cont\xe9m a primeira c\xe9lula onde os dados ser\xe3o escritos. Se o intervalo especificado n\xe3o \xe9 um intervalo de c\xe9lulas, s\xf3 a primeira c\xe9lula do intervalo \xe9 usada."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"rowDelimiter"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Delimitador de linha. Se n\xe3o estiver presente, o delimitador \xe9 automaticamente determinado por 4D."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"columnDelimiter"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Delimitador de coluna. O padr\xe3o: ","'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sjsOptions"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"op\xe7\xf5es para importa\xe7\xe3o de sjs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"calcOnDemand"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Se as f\xf3rmulas devem ser calculadas somente quando forem exigidas; padr\xe3o=falso."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"dynamicReferences"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Se deve calcular fun\xe7\xf5es com refer\xeancias din\xe2micas; o padr\xe3o \xe9 true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"fullRecalc"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Para decidir se calcula depois do carregamento do dado json, falso por padr\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeFormulas"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Se deve incluir as f\xf3rmulas ao carregar; o padr\xe3o \xe9 true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeStyles"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Se os estilos devem ser inclu\xeddos no carregamento; o padr\xe3o \xe9 true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeUnusedStyles"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Se deve incluir os estilos de nome n\xe3o utilizados ao converter o xml do Excel em json; o padr\xe3o \xe9 true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"openMode"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.li,{children:"0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points."}),(0,t.jsx)(n.li,{children:"1 (lazy): lazy open mode. Quando abrir o documento, s\xf3 a folha ativa ser\xe1 carregada diretamente. Other sheets will be loaded only when they are be used."}),(0,t.jsx)(n.li,{children:"2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"excelOptions"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Excel only (optional) - Options for Excel export"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeStyles"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to include the style when importing, default true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeFormulas"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to include the formula when importing, default true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"frozenColumnsAsRowHeaders"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to treat the frozen columns as row headers when importing, default false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"frozenRowsAsColumnHeaders"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to treat the frozen rows as column headers when importing, default false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"fullRecalc"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Para decidir se calcula depois do carregamento do dado json, falso por padr\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"dynamicReferences"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to calculate functions with dynamic reference, default true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"calcOnDemand"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to calculate formulas only when they are demanded, default false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"includeUnusedStyles"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to include the unused name style when converting excel xml to the json, default true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"senha"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"The password to open the workbook."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"openMode"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"The open mode of normal, lazy and incremental. By default is normal."})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Notas",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Importar arquivos em formatos .xslx, .csv, e .sjs \xe9 ",(0,t.jsx)(n.strong,{children:"ass\xedncrona"}),". With these formats, you must use the ",(0,t.jsx)(n.code,{children:"formula"})," attribute if you want to start an action at the end of the document processing."]}),"\n",(0,t.jsxs)(n.li,{children:["Quando importar um arquivo formatado em Excel em um documento 4D View Pro, algumas configura\xe7\xf5es podem ser perdidas. You can verify your settings with ",(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For more information on the CSV format and delimiter-separated values in general, see ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"this article on Wikipedia"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.em,{children:"excelOptions"}),' object is recommended when importing ".xlsx" format. Make sure to not mix this object with legacy first level property ',(0,t.jsx)(n.em,{children:"password"})," to avoid potiental issues."]}),"\n",(0,t.jsxs)(n.li,{children:["The callback function specified in the ",(0,t.jsx)(n.code,{children:"formula"})," attribute is triggered after all ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#4d-functions",children:"4D custom functions"})," within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser importar um documento 4D View Pro armazenado no disco quando o formul\xe1rio for aberto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $docPath : text\nIf(Form event code=On VP Ready) //4D View Pro area loaded and ready\n    $docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\n    VP IMPORT DOCUMENT("VPArea";$docPath)\nEnd if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea deseja importar um documento do Microsoft Excel protegido por senha para uma \xe1rea do 4D View Pro:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'	//Import code\nvar $o:={}\n$o.formula:=Formula(myImport)\n$excelOptions:={includeStyles:false;includeFormulas:true;password:"excel123"}\n$o.excelOptions:=$excelOptions\n \nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\excelfile.xlsx";$o)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'	//myImport callback method\n#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)\n\nIf ($status.success)\n     ALERT("Import successfully completed")\nElse \n     ALERT("Error: "+$status.errorMessage)\nEnd if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsxs)(n.p,{children:["You want to import a ",(0,t.jsx)(n.code,{children:".txt"}),' file that uses a comma (",") as delimiter:']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"example-import-csv",src:s(242346).Z+"",width:"474",height:"138"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $params:={}\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\nVP IMPORT DOCUMENT("ViewProArea";"c:\\\\import\\\\my-file.txt";New object("csvOptions";$params))\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Aqui est\xe1 o resultado:\n",(0,t.jsx)(n.img,{alt:"example-import-csv",src:s(997452).Z+"",width:"876",height:"532"})]}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-new-document",children:"VP NEW DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-excel-import-export-update",children:"4D View Pro: Excel import/export update (blog post)"})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},997452:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/vp-import-document-csv-result-8d8ef2a5ba8244c5865bf605e59421c0.png"},242346:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);