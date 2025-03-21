"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40620"],{403230:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"ViewPro/commands/vp-export-document","title":"VP EXPORT DOCUMENT","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-export-document.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-document","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-export-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-export-document","title":"VP EXPORT DOCUMENT"},"sidebar":"docs","previous":{"title":"E","permalink":"/docs/pt/20-R7/commands-legacy/E"},"next":{"title":"VP EXPORT TO BLOB","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-export-to-blob"}}'),s=r("785893"),d=r("250065");let t={id:"vp-export-document",title:"VP EXPORT DOCUMENT"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Passagem de um m\xe9todo de retorno de chamada (f\xf3rmula)",id:"passagem-de-um-m\xe9todo-de-retorno-de-chamada-f\xf3rmula",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20 R2"}),(0,s.jsx)(n.td,{children:"Suporte de documentos .sjs"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP EXPORT DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"filePath"})," : Text {; ",(0,s.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Caminho do documento"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Op\xe7\xf5es de exporta\xe7\xe3o"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," exporta o objeto do 4D View Pro anexado \xe0 \xe1rea ",(0,s.jsx)(n.em,{children:"vpAreaName"})," do 4D View Pro para um documento em disco, de acordo com os par\xe2metros ",(0,s.jsx)(n.em,{children:"filePath"})," e ",(0,s.jsx)(n.em,{children:"paramObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsx)(n.p,{children:"Em filePath, passe o caminho de destino e o nome do documento a ser importado. Se voc\xea n\xe3o especificar um caminho, o documento ser\xe1 salvo no mesmo n\xedvel da pasta Project."}),"\n",(0,s.jsx)(n.p,{children:"Voc\xea pode especificar o formato do arquivo exportado incluindo uma extens\xe3o ap\xf3s o nome do documento:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'4D View Pro (".4vp")'}),"\n",(0,s.jsx)(n.li,{children:'Microsoft Excel (".xlsx")'}),"\n",(0,s.jsx)(n.li,{children:'PDF (".pdf")'}),"\n",(0,s.jsx)(n.li,{children:'CSV (".txt", ou ".csv")'}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"Documento SpreadJS"}),' (".sjs")']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Se a extens\xe3o n\xe3o for inclu\xedda, mas o formato for especificado em ",(0,s.jsx)(n.em,{children:"paramObj"}),", o arquivo exportado ter\xe1 a extens\xe3o que corresponde ao formato, exceto para o formato CSV (nenhuma extens\xe3o \xe9 adicionada nesse caso)."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"paramObj"})," permite que voc\xea defina v\xe1rias propriedades para o objeto exportado do 4D View Pro, bem como inicie um m\xe9todo de retorno de chamada quando a exporta\xe7\xe3o for conclu\xedda."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:['(optional) When present, designates the exported file format: ".4vp" (default), ".csv", ".xlsx", ".pdf", or ".sjs". You can use the following constants:',(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk 4D View Pro format"})}),(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk csv format"})}),(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk MS Excel format"})}),(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk pdf format"})}),(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk sjs format"})}),"4D adds the appropriate extension to the file name if needed. If the format specified doesn't correspond with the extension in ",(0,s.jsx)(n.em,{children:"filePath"}),", it will be added to the end of ",(0,s.jsx)(n.em,{children:"filePath"}),". If a format is not specified and no extension is provided in ",(0,s.jsx)(n.em,{children:"filePath"}),", the default file format is used."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"senha"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Somente Microsoft Excel (opcional) - Senha usada para proteger o documento do MS Excel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"4D. Function"}),(0,s.jsxs)(n.td,{children:["M\xe9todo de retorno de chamada a ser lan\xe7ado quando a exporta\xe7\xe3o estiver conclu\xedda. O uso de um m\xe9todo de retorno de chamada \xe9 necess\xe1rio quando a exporta\xe7\xe3o \xe9 ass\xedncrona (que \xe9 o caso dos formatos PDF e Excel) se voc\xea precisar que algum c\xf3digo seja executado ap\xf3s a exporta\xe7\xe3o. O m\xe9todo de retorno de chamada deve ser passado com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/formula",children:(0,s.jsx)(n.code,{children:"Formula"})}),". See ",(0,s.jsx)(n.a,{href:"#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valuesOnly"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Especifica que somente os valores das f\xf3rmulas (se houver) ser\xe3o exportados."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeFormatInfo"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["Verdadeiro para incluir informa\xe7\xf5es de formata\xe7\xe3o; caso contr\xe1rio, falso (o padr\xe3o \xe9 verdadeiro). As informa\xe7\xf5es de formata\xe7\xe3o s\xe3o \xfateis em alguns casos, por exemplo, para exporta\xe7\xe3o para SVG. On the other hand, setting this property to ",(0,s.jsx)(n.strong,{children:"false"})," allows reducing export time."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeBindingSource"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["4DVP e Microsoft Excel apenas. True (padr\xe3o) para exportar os valores do contexto de dados atual como valores de c\xe9lula no documento exportado (os contextos de dados em si n\xe3o s\xe3o exportados). Caso contr\xe1rio, false. Cell binding sempre \xe9 exportada. For data context and cell binding management, see ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"})," and ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetIndex"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["Somente PDF (opcional) - \xcdndice da planilha a ser exportada (a partir de 0). -2=all visible sheets (",(0,s.jsx)(n.strong,{children:"default"}),"), -1=current sheet only"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pdfOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["PDF apenas (opcional) - Op\xe7\xf5es para exporta\xe7\xe3o de PDF ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"criador"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"nome do aplicativo que criou o documento original do qual ele foi convertido."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"t\xedtulo"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"t\xedtulo do documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autor"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"nome da pessoa que criou esse documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"palavras-chave"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"palavras-chave associadas ao documento."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Assunto"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"assunto do documento."})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"csvOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["Somente CSV (opcional) - Op\xe7\xf5es para exporta\xe7\xe3o de csv ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo de propriedade"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"intervalo"}),(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Objeto de intervalo de c\xe9lulas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowDelimitertext"}),(0,s.jsxs)(n.td,{children:["Delimitador de linha. Default: ",(0,s.jsx)(n.code,{children:'"\\r\\n"'})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnDelimiter"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Column delimiter. Default: ",(0,s.jsx)(n.code,{children:'","'})]})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sjsOptions"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["SJS only (optional) - Options for sjs export ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the automatically merged cells, default is false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeBindingSource"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the binding source, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeCalcModelCache"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the extra data of calculation. Can be faster when open the file with those data, default is false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include any empty cells (cells with no data or only style) outside the used data range, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeFormulas"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the formulas, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeStyles"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the style, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeUnusedNames"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to include the unused custom names, default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"saveAsView"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"whether to apply the format string to exporting values, default is false."})]})]})}),(0,s.jsx)(n.p,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\<customProperty>"})}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"Qualquer propriedade personalizada que estar\xe1 dispon\xedvel por meio do par\xe2metro $3 no m\xe9todo de retorno de chamada."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre o formato Excel"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ao exportar um documento do 4D View Pro para um arquivo no formato Microsoft Excel, algumas configura\xe7\xf5es podem ser perdidas. Por exemplo, os m\xe9todos e f\xf3rmulas 4D n\xe3o s\xe3o suportados pelo Excel. You can verify other settings with ",(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,s.jsx)(n.code,{children:"formula"})," property of the ",(0,s.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre o formato PDF"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ao exportar um documento do 4D View Pro em PDF, as fontes usadas no documento s\xe3o automaticamente incorporadas ao arquivo PDF. Somente fontes OpenType (arquivos .OTF ou .TTF) com um mapa Unicode podem ser incorporadas. Se n\xe3o for encontrado nenhum arquivo de fonte v\xe1lido para uma fonte, ser\xe1 usada uma fonte padr\xe3o."}),"\n",(0,s.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,s.jsx)(n.code,{children:"formula"})," property of the ",(0,s.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre o formato CSV"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ao exportar um documento do 4D View Pro para CSV, algumas configura\xe7\xf5es podem ser perdidas, pois somente o texto e os valores s\xe3o salvos."}),"\n",(0,s.jsxs)(n.li,{children:["Todos os valores s\xe3o guardados como cadeias de caracteres entre aspas duplas. For more information on delimiter-separated values, see ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"this article on Wikipedia"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,s.jsx)(n.code,{children:"formula"})," property of the ",(0,s.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas sobre o formato de arquivo SpreadJS"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Os ",(0,s.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"arquivos SpreadJS"})," s\xe3o arquivos compactados."]}),"\n",(0,s.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,s.jsx)(n.code,{children:"formula"})," property of the ",(0,s.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once the export operation is finished, ",(0,s.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," automatically triggers the execution of the method set in the ",(0,s.jsx)(n.em,{children:"formula"})," property of the ",(0,s.jsx)(n.em,{children:"paramObj"}),", if used."]}),"\n",(0,s.jsx)(n.h2,{id:"passagem-de-um-m\xe9todo-de-retorno-de-chamada-f\xf3rmula",children:"Passagem de um m\xe9todo de retorno de chamada (f\xf3rmula)"}),"\n",(0,s.jsxs)(n.p,{children:["When including the optional ",(0,s.jsx)(n.em,{children:"paramObj"})," parameter, the command allows you to use the ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/formula",children:(0,s.jsx)(n.code,{children:"Formula"})})," command to call a 4D method which will be executed once the export has completed. O m\xe9todo de retorno de chamada receber\xe1 os seguintes valores em par\xe2metros locais:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param1"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"O nome do objeto de \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param2"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"O caminho do ficheiro do objeto 4D View Pro exportado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param3"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["Uma refer\xeancia ao ",(0,s.jsx)(n.em,{children:"paramObj"})," do comando"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param4"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Um objeto devolvido pelo m\xe9todo com uma mensagem de estado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".success"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True se a exporta\xe7\xe3o for bem sucedida, False caso contr\xe1rio."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorCode"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"C\xf3digo de erro."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorMessage"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Mensagem de erro."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:'Pretende exportar o conte\xfado da \xe1rea "VPArea" para um documento 4D View Pro no disco:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $docPath: Text\n\n$docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP" VP EXPORT DOCUMENT("VPArea";$docPath)\n//MyExport.4VP is saved on your disk\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Pretende exportar a folha atual em PDF:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $params: Object\n$params:=New object\n$params.format:=vk pdf format\n$params.sheetIndex:=-1\n$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)\nVP EXPORT DOCUMENT("VPArea";"report.pdf";$params)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:'Voc\xea deseja exportar um documento do 4D View Pro no formato ".xlsx" e chamar um m\xe9todo que iniciar\xe1 o Microsoft Excel com o documento aberto ap\xf3s a conclus\xe3o da exporta\xe7\xe3o:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $params:=New object\n $params.formula:=Formula(AfterExport)\n $params.format:=vk MS Excel format //".xlsx"\n $params.valuesOnly:=True\n\n VP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\convertedfile";$params)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["M\xe9todo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"AfterExport"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )\n\n If($status.success=False)\n    ALERT($status.errorMessage)\n Else\n    LAUNCH EXTERNAL PROCESS("C:\\\\Program Files\\\\Microsoft Office\\\\Office15\\\\excel "+$filePath)\n End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["You want to export the current sheet to a ",(0,s.jsx)(n.code,{children:".txt"})," file with pipe-separated values:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example-export-csv",src:r(600601).Z+"",width:"876",height:"353"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $params : Object\n$params:=New object\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\n$params.rowDelimiter:="\\n"\n$params.columnDelimiter:="|" VP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\data.txt";New object("format";vk csv format;"csvOptions";$params))\n'})}),"\n",(0,s.jsx)(n.p,{children:"Aqui est\xe1 o resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example-export-csv",src:r(249674).Z+"",width:"229",height:"99"})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-import-document",children:"VP IMPORT DOCUMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-print",children:"VP Print"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},249674:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},600601:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/vp-export-document-csv-060625f137ddd998096dfe40455efcbd.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var o=r(667294);let s={},d=o.createContext(s);function t(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);