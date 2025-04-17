"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50470"],{940581:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands/wp-import-document","title":"WP Import document","description":"WP Import document ( filePath {; option} ) Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands/wp-import-document.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-import-document","permalink":"/docs/pt/WritePro/commands/wp-import-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-import-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-import-document","title":"WP Import document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get view properties","permalink":"/docs/pt/WritePro/commands/wp-get-view-properties"},"next":{"title":"WP IMPORT STYLE SHEETS","permalink":"/docs/pt/WritePro/commands/wp-import-style-sheets"}}'),o=n("785893"),i=n("250065");let s={id:"wp-import-document",title:"WP Import document",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP Import document"})," ( ",(0,o.jsx)(t.em,{children:"filePath"})," {; ",(0,o.jsx)(t.em,{children:"option"}),"} ) : Object",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.strong,{children:"WP Import document"})," ( ",(0,o.jsx)(t.em,{children:"fileObj"})," {; ",(0,o.jsx)(t.em,{children:"option"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"filePath"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Path to: a 4D Write document (.4w7 or .4wt) or a 4D Write Pro document (.4wp) or a .docx document (.docx)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"fileObj"}),(0,o.jsx)(t.td,{children:"4D. File"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"File object to import"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"option"}),(0,o.jsx)(t.td,{children:"Integer, Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"(Integer) Import option for HTML expressions, (object) Import options for .docx document"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"4D Write Pro object"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"WP Import document"})," command converts an existing 4D Write Pro / 4D Write document (.4wp, .4w7 or .4wt) or MS Word document (.docx) to a new 4D Write Pro object."]}),"\n",(0,o.jsxs)(t.p,{children:["You can pass either a ",(0,o.jsx)(t.em,{children:"filePath"})," or ",(0,o.jsx)(t.em,{children:"fileObj"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.em,{children:"filePath"})," parameter, pass the path of a document stored on disk. You must pass a complete path, unless the document is located at the same level as the structure file, in which case you can just pass its name."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.em,{children:"fileObj"})," parameter, pass a 4D.File object representing the file to import."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The following types of documents are supported:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["former 4D Write documents (.4w7 or .4wt). For a detailed list of 4D Write features that are currently supported in 4D Write Pro objects, please refer to the ",(0,o.jsx)(t.em,{children:"Importing 4D Write documents"})," section."]}),"\n",(0,o.jsxs)(t.li,{children:["4D Write Pro (.4wp) format documents. For more information about the 4D Write Pro document format, refer to ",(0,o.jsx)(t.em,{children:".4wp document format"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["documents in .docx format. For more information about, refer to ",(0,o.jsx)(t.em,{children:"Importing and Exporting in .docx format"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," If you want to import a document stored in a 4D BLOB field, you can also consider using the ",(0,o.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-new",children:"WP New"})," command."]}),"\n",(0,o.jsxs)(t.p,{children:["An error is returned if the ",(0,o.jsx)(t.em,{children:"filePath"})," or ",(0,o.jsx)(t.em,{children:"fileObj"})," parameter is invalid, if the file is missing, or if the file format is not supported."]}),"\n",(0,o.jsxs)(t.p,{children:["The optional ",(0,o.jsx)(t.em,{children:"option"})," parameter allows defining import options for:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"longint"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["By default, HTML expressions inserted in legacy 4D Write documents are not imported (no 4D Write Pro support). If you pass the wk import html expressions as text constant, HTML expressions will be imported as raw text within ",(0,o.jsx)(t.code,{children:"##htmlBegin##"})," and ",(0,o.jsx)(t.code,{children:"##htmlEnd##"})," tags -- which will require formatting actions afterward. Por exemplo:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"##htmlBegin##Imported titlebold##htmlEnd##  \n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"object"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You can pass an object to define how the following attributes are handled during the import operation:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Attribute"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Tipo"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Description"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"anchoredTextAreas"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies how Word anchored text areas are handled. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"anchored"})," (default) - Anchored text areas are treated as text boxes. ",(0,o.jsx)(t.strong,{children:"inline"})," - Anchored text areas are treated as inline text at the position of the anchor. ",(0,o.jsx)(t.strong,{children:"ignore"})," - Anchored text areas are ignored. ",(0,o.jsx)(t.strong,{children:"Note"}),": The layout and the number of pages in the document may change. See also ",(0,o.jsx)(t.em,{children:"How to import .docx format"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"anchoredImages"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies how anchored images are handled. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"all"}),' (default) - All anchored images are imported as anchored images with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). ',(0,o.jsx)(t.strong,{children:"ignoreWrap"})," - Anchored images are imported, but any text wrapping around the image is ignored. ",(0,o.jsx)(t.strong,{children:"ignore"})," - Anchored images are not imported."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sections"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies how section are handled. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"all"})," (default) - All sections are imported. Continuous, even, or odd sections are converted to standard sections. ",(0,o.jsx)(t.strong,{children:"ignore"})," - Sections are converted to default 4D Write Pro sections (A4 portrait layout without header or footer). ",(0,o.jsx)(t.strong,{children:"Note"}),": Section breaks of any type but continuous are converted to section breaks with page break. Continuous section breaks are imported as continuous section breaks."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"fields"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies how .docx fields that can't be converted to 4D Write Pro formulas are handled. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"ignore"})," - .docx fields are ignored. ",(0,o.jsx)(t.strong,{children:"label"}),' - .docx field references are imported as labels within double curly braces ("{{ }}"). Ex: The "ClientName" field would be imported as {{ClientName}}. ',(0,o.jsx)(t.strong,{children:"value"})," (default) - The last computed value for the .docx field (if available) is imported. ",(0,o.jsx)(t.strong,{children:"Note"}),": If a .docx field corresponds to a 4D Write Pro variable, the field is imported as a formula and this option is ignored."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"borderRules"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies how paragraph borders are handled. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"collapse"})," - Paragraph formatting is modified to mimic automatically collapsed borders. Note that the collapse property only applies during the import operation. If a stylesheet with a automatic border collapse setting is reapplied after the import operation, the setting will be ignored. ",(0,o.jsx)(t.strong,{children:"noCollapse"})," (default) - Paragraph formatting is not modified."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"preferredFontScriptType"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos MS Word (.docx). Specifies the preferred typeface to use when different typefaces are defined for a single font property in OOXML. Available values:",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"latin"})," (default) - Latin script ",(0,o.jsx)(t.strong,{children:"bidi"})," - Bidrectional script. Suitable if document is mainly bidirectional left-to-right (LTR) or right-to-left (RTL) text (e.g., Arabic or Hebrew). ",(0,o.jsx)(t.strong,{children:"eastAsia"})," - East Asian script. Suitable if document is mainly Asian text."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"htmlExpressions"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos 4D Write (.4w7). Specifies how HTML expressions are handled. Available values: ",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"rawText"})," - HTML expressions are imported as raw text within ##htmlBegin## and ##htmlEnd## tags ",(0,o.jsx)(t.strong,{children:"ignore"})," (default) - HTML expressions are ignored."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"importDisplayMode"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsxs)(t.td,{children:["Somente para documentos 4D Write (.4w7). Specifies how image display is handled. Available values: ",(0,o.jsx)(t.br,{}),(0,o.jsx)(t.br,{})," ",(0,o.jsx)(t.strong,{children:"legacy -"})," 4W7 image display mode is converted using a background image if different than scaled to fit. ",(0,o.jsx)(t.strong,{children:"noLegacy"})," (default) - 4W7 image display mode is converted to the ",(0,o.jsx)(t.em,{children:"imageDisplayMode"})," attribute if different than scaled to fit."]})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Notas de compatibilidade"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:'Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.'})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"Support for importing in .docx format is only certified for Microsoft Word 2010 and newer. Older versions, particularly Microsoft Word 2007, may not import correctly."})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' var WPDoc : Object\n WPDoc:=WP Import document("C:\\\\documents\\\\4DWriteDocs\\\\Letter.4w7")\n'})}),"\n",(0,o.jsx)(t.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(t.p,{children:"You want to import a .docx document and would like that paragraph borders are collapsed as they are in MS Word:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' $options:=New object\n $options.borderRules:="collapse" //collapse paragraph borders while converting\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(t.p,{children:"You want to import original .docx fields as text (for fields not converted to 4D formulas):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' $options:=New object\n $options.fields:="label" //for unconverted fields, import field references as text between {{ and }}\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(t.p,{children:"You want to import a .docx document whose text is mostly in Japanese:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' $options:=New object\n $options.preferredFontScriptType:="eastAsia" //force conversion to prefer eastAsia font scripts\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(t.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsx)(t.p,{children:"You want to import a document on disk using a File object:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'var $file : 4D.File\n\n$file:=File("/RESOURCES/myFile.4wp")\n\nWParea:=WP Import document($file)\n'})}),"\n",(0,o.jsx)(t.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-new",children:"WP New"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);