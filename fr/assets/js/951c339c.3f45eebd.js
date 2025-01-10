"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17269"],{241762:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-export-document","title":"VP EXPORT DOCUMENT","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-export-document.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-document","permalink":"/docs/fr/ViewPro/commands/vp-export-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-export-document","title":"VP EXPORT DOCUMENT"},"sidebar":"docs","previous":{"title":"E","permalink":"/docs/fr/commands-legacy/E"},"next":{"title":"VP EXPORT TO BLOB","permalink":"/docs/fr/ViewPro/commands/vp-export-to-blob"}}'),t=s("785893"),d=s("250065");let l={id:"vp-export-document",title:"VP EXPORT DOCUMENT"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Passer une m\xe9thode callback (formula)",id:"passer-une-m\xe9thode-callback-formula",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R2"}),(0,t.jsx)(n.td,{children:"Support of .sjs documents"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP EXPORT DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"filePath"})," : Text {; ",(0,t.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filePath"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s du document"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paramObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Options d'export"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," exporte l'objet 4D View Pro attach\xe9 \xe0 la zone 4D View Pro ",(0,t.jsx)(n.em,{children:"vpAreaName"})," vers un document sur disque en fonction des param\xe8tres ",(0,t.jsx)(n.em,{children:"filePath"})," et ",(0,t.jsx)(n.em,{children:"paramObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"filePath"}),", passez le chemin de destination et le nom du document \xe0 exporter. Si vous ne sp\xe9cifiez pas de chemin, le document sera sauvegard\xe9 au m\xeame niveau que le dossier Projet."]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez pr\xe9ciser le format du document en incluant une extension apr\xe8s son nom :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'4D View Pro (".4vp")'}),"\n",(0,t.jsx)(n.li,{children:'Microsoft Excel (".xlsx")'}),"\n",(0,t.jsx)(n.li,{children:'PDF (".pdf")'}),"\n",(0,t.jsx)(n.li,{children:'CSV (".txt", or ".csv")'}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS document"}),' (".sjs")']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the extension is not included, but the format is specified in ",(0,t.jsx)(n.em,{children:"paramObj"}),", the exported file will have the extension that corresponds to the format, except for the CSV format (no extension is added in this case)."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"paramObj"})," parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"format"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:['(optionnel) S\'il est pr\xe9sent, d\xe9signe le format du fichier export\xe9 : ".4vp" (par d\xe9faut), ".csv", ".xlsx", ".pdf", ou ".sjs". You can use the following constants:',(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk 4D View Pro format"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk csv format"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk MS Excel format"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk pdf format"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk sjs format"})}),"4D adds the appropriate extension to the file name if needed. If the format specified doesn't correspond with the extension in ",(0,t.jsx)(n.em,{children:"filePath"}),", it will be added to the end of ",(0,t.jsx)(n.em,{children:"filePath"}),". If a format is not specified and no extension is provided in ",(0,t.jsx)(n.em,{children:"filePath"}),", the default file format is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"password"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Microsoft Excel uniquement (optionnel) - Mot de passe utilis\xe9 pour prot\xe9ger le document MS Excel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"4D.Function"}),(0,t.jsxs)(n.td,{children:["M\xe9thode callback \xe0 lancer lorsque l'export est termin\xe9. L'utilisation d'une m\xe9thode callback est n\xe9cessaire lorsque l'export est asynchrone (ce qui est le cas pour les formats PDF et Excel) si vous avez besoin d'un code \xe0 ex\xe9cuter apr\xe8s l'export. The callback method must be passed with the ",(0,t.jsx)(n.a,{href:"/docs/fr/API/FunctionClass#formula",children:(0,t.jsx)(n.code,{children:"Formula"})})," command. See ",(0,t.jsx)(n.a,{href:"#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valuesOnly"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Pr\xe9cise que seules les valeurs issues de formules (le cas \xe9ch\xe9ant) seront export\xe9es."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeFormatInfo"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["True pour inclure les informations de formatage, sinon False (True par d\xe9faut). Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. On the other hand, setting this property to ",(0,t.jsx)(n.strong,{children:"false"})," allows reducing export time."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeBindingSource"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["4DVP et Microsoft Excel uniquement. True (par d\xe9faut) pour exporter les valeurs du contexte de donn\xe9es courant en tant que valeurs de cellule dans le document export\xe9 (les contextes de donn\xe9es eux-m\xeames ne sont pas export\xe9s). Sinon Faux. La liaison de cellule est toujours export\xe9e. For data context and cell binding management, see ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"})," and ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetIndex"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["PDF uniquement (optionnel) - Num\xe9ro de la feuille \xe0 exporter (d\xe9bute \xe0 0). -2=all visible sheets (",(0,t.jsx)(n.strong,{children:"default"}),"), -1=current sheet only"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pdfOptions"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["PDF only (optional) - Options for pdf export ",(0,t.jsx)(n.p,{}),(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"creator"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"name of the application that created the original document from which it was converted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"title of the document."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"author"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"name of the person who created that document."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"keywords"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"keywords associated with the document."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subject"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"subject of the document."})]})]})}),(0,t.jsx)(n.p,{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"csvOptions"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["CSV only (optional) - Options for csv export ",(0,t.jsx)(n.p,{}),(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Range object of cells"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowDelimiter"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Row delimiter. Default: ",(0,t.jsx)(n.code,{children:'"\\r\\n"'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columnDelimiter"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Column delimiter. Default: ",(0,t.jsx)(n.code,{children:'","'})]})]})]})}),(0,t.jsx)(n.p,{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sjsOptions"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["SJS only (optional) - Options for sjs export ",(0,t.jsx)(n.p,{}),(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the automatically merged cells, default is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeBindingSource"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the binding source, default is true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeCalcModelCache"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the extra data of calculation. Can be faster when open the file with those data, default is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include any empty cells (cells with no data or only style) outside the used data range, default is true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeFormulas"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the formulas, default is true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeStyles"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the style, default is true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeUnusedNames"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to include the unused custom names, default is true."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"saveAsView"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"whether to apply the format string to exporting values, default is false."})]})]})}),(0,t.jsx)(n.p,{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"\\<customProperty>"})}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"Propri\xe9t\xe9 personnalis\xe9e qui sera disponible via le param\xe8tre $3 dans la m\xe9thode de callback."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes about Excel format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lors de l'export d'un document 4D View Pro en un fichier au format Microsoft Excel, certains param\xe8tres peuvent \xeatre perdus. Par exemple, les m\xe9thodes et formules 4D ne sont pas prises en charge par Excel. You can verify other settings with ",(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport",children:"this list from SpreadJS"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,t.jsx)(n.code,{children:"formula"})," property of the ",(0,t.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes about PDF format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lors de l'export d'un document 4D View Pro en un fichier au format PDF, les polices utilis\xe9es dans le document sont automatiquement int\xe9gr\xe9es dans le fichier PDF. Seules les polices OpenType (fichiers .OTF ou .TTF) ayant une table Unicode peuvent \xeatre int\xe9gr\xe9es. Si aucun fichier de polices valide n'est trouv\xe9 pour une police, une police par d\xe9faut est utilis\xe9e \xe0 sa place."}),"\n",(0,t.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,t.jsx)(n.code,{children:"formula"})," property of the ",(0,t.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes about CSV format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lors de l'export d'un document 4D View Pro en un fichier au format PDF, certains param\xe8tres peuvent \xeatre perdus, car seuls le texte et les valeurs sont sauvegard\xe9s."}),"\n",(0,t.jsxs)(n.li,{children:["Toutes les valeurs sont enregistr\xe9es sous la forme de cha\xeenes entre guillemets. For more information on delimiter-separated values, see ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values",children:"this article on Wikipedia"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,t.jsx)(n.code,{children:"formula"})," property of the ",(0,t.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes about SpreadJS file format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format",children:"SpreadJS files"})," are zipped files."]}),"\n",(0,t.jsxs)(n.li,{children:["Exporting in this format is run asynchronously, use the ",(0,t.jsx)(n.code,{children:"formula"})," property of the ",(0,t.jsx)(n.em,{children:"paramObj"})," for code to be executed after the export."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the export operation is finished, ",(0,t.jsx)(n.code,{children:"VP EXPORT DOCUMENT"})," automatically triggers the execution of the method set in the ",(0,t.jsx)(n.em,{children:"formula"})," property of the ",(0,t.jsx)(n.em,{children:"paramObj"}),", if used."]}),"\n",(0,t.jsx)(n.h4,{id:"passer-une-m\xe9thode-callback-formula",children:"Passer une m\xe9thode callback (formula)"}),"\n",(0,t.jsxs)(n.p,{children:["When including the optional ",(0,t.jsx)(n.em,{children:"paramObj"})," parameter, the command allows you to use the ",(0,t.jsx)(n.a,{href:"/docs/fr/API/FunctionClass#formula",children:(0,t.jsx)(n.code,{children:"Formula"})})," command to call a 4D method which will be executed once the export has completed. La m\xe9thode callback recevra les valeurs suivantes dans des variables locales :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param1"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nom de l'objet 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param2"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s de l'objet 4D View Pro export\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param3"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["A reference to the command's ",(0,t.jsx)(n.em,{children:"paramObj"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param4"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Objet retourn\xe9 par la m\xe9thode avec un message de statut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:".success"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Vrai si l'export est r\xe9ussi, Faux sinon."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:".errorCode"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Code d'erreur."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:".errorMessage"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Message d'erreur."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:'Vous souhaitez exporter le contenu de la zone "VPArea" vers un document 4D View Pro sur le disque :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $docPath: Text\n\n$docPath:="C:\\\\Bases\\\\ViewProDocs\\\\MyExport.4VP"\nVP EXPORT DOCUMENT("VPArea";$docPath)\n//MyExport.4VP est sauvegard\xe9 sur votre disque\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez exporter la feuille courante au format PDF :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $params: Object\n$params:=New object\n$params.format:=vk pdf format\n$params.sheetIndex:=-1\n$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)\nVP EXPORT DOCUMENT("VPArea";"report.pdf";$params)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:'Vous souhaitez exporter un document 4D View Pro au format ".xlsx" et appeler une m\xe9thode qui lance Microsoft Excel avec le document ouvert une fois que l\'export est termin\xe9 :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $params:=New object\n $params.formula:=Formula(AfterExport)\n $params.format:=vk MS Excel format //".xlsx"\n $params.valuesOnly:=True\n\n VP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\convertedfile";$params)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"AfterExport"})})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )\n\n If($status.success=False)\n    ALERT($status.errorMessage)\n Else\n    LAUNCH EXTERNAL PROCESS("C:\\\\Program Files\\\\Microsoft Office\\\\Office15\\\\excel "+$filePath)\n End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(n.p,{children:["You want to export the current sheet to a ",(0,t.jsx)(n.code,{children:".txt"})," file with pipe-separated values:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"example-export-csv",src:s(731018).Z+"",width:"876",height:"353"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $params : Object\n$params:=New object\n$params.range:=VP Cells("ViewProArea";0;0;2;5)\n$params.rowDelimiter:="\\n"\n$params.columnDelimiter:="|"\nVP EXPORT DOCUMENT("ViewProArea";"c:\\\\tmp\\\\data.txt";New object("format";vk csv format;"csvOptions";$params))\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici le r\xe9sultat :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"example-export-csv",src:s(577131).Z+"",width:"229",height:"99"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-import-document",children:"VP IMPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-print",children:"VP Print"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},577131:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},731018:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/vp-export-document-csv-060625f137ddd998096dfe40455efcbd.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);