"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6600"],{159025:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands/wp-import-document","title":"WP Import document","description":"WP Import document ( filePath {; option} ) Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands/wp-import-document.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-import-document","permalink":"/docs/ja/WritePro/commands/wp-import-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-import-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-import-document","title":"WP Import document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get view properties","permalink":"/docs/ja/WritePro/commands/wp-get-view-properties"},"next":{"title":"WP IMPORT STYLE SHEETS","permalink":"/docs/ja/WritePro/commands/wp-import-style-sheets"}}'),o=t("785893"),i=t("250065");let s={id:"wp-import-document",title:"WP Import document",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Import document"})," ( ",(0,o.jsx)(n.em,{children:"filePath"})," {; ",(0,o.jsx)(n.em,{children:"option"}),"} ) : Object",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.strong,{children:"WP Import document"})," ( ",(0,o.jsx)(n.em,{children:"fileObj"})," {; ",(0,o.jsx)(n.em,{children:"option"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5F15\u6570"}),(0,o.jsx)(n.th,{children:"\u578B"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"filePath"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Path to: a 4D Write document (.4w7 or .4wt) or a 4D Write Pro document (.4wp) or a .docx document (.docx)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fileObj"}),(0,o.jsx)(n.td,{children:"4D.File"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"File object to import"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"option"}),(0,o.jsx)(n.td,{children:"Integer, Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"(Integer) Import option for HTML expressions, (object) Import options for .docx document"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"4D Write Pro object"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"WP Import document"})," command converts an existing 4D Write Pro / 4D Write document (.4wp, .4w7 or .4wt) or MS Word document (.docx) to a new 4D Write Pro object."]}),"\n",(0,o.jsxs)(n.p,{children:["You can pass either a ",(0,o.jsx)(n.em,{children:"filePath"})," or ",(0,o.jsx)(n.em,{children:"fileObj"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"filePath"})," parameter, pass the path of a document stored on disk. You must pass a complete path, unless the document is located at the same level as the structure file, in which case you can just pass its name."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"fileObj"})," parameter, pass a 4D.File object representing the file to import."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following types of documents are supported:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["former 4D Write documents (.4w7 or .4wt). For a detailed list of 4D Write features that are currently supported in 4D Write Pro objects, please refer to the ",(0,o.jsx)(n.em,{children:"Importing 4D Write documents"})," section."]}),"\n",(0,o.jsxs)(n.li,{children:["4D Write Pro (.4wp) format documents. For more information about the 4D Write Pro document format, refer to ",(0,o.jsx)(n.em,{children:".4wp document format"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["documents in .docx format. For more information about, refer to ",(0,o.jsx)(n.em,{children:"Importing and Exporting in .docx format"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," If you want to import a document stored in a 4D BLOB field, you can also consider using the ",(0,o.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-new",children:"WP New"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["An error is returned if the ",(0,o.jsx)(n.em,{children:"filePath"})," or ",(0,o.jsx)(n.em,{children:"fileObj"})," parameter is invalid, if the file is missing, or if the file format is not supported."]}),"\n",(0,o.jsxs)(n.p,{children:["The optional ",(0,o.jsx)(n.em,{children:"option"})," parameter allows defining import options for:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"longint"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, HTML expressions inserted in legacy 4D Write documents are not imported (no 4D Write Pro support). If you pass the wk import html expressions as text constant, HTML expressions will be imported as raw text within ",(0,o.jsx)(n.code,{children:"##htmlBegin##"})," and ",(0,o.jsx)(n.code,{children:"##htmlEnd##"})," tags -- which will require formatting actions afterward. \u4F8B:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"##htmlBegin##Imported titlebold##htmlEnd##  \n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"object"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can pass an object to define how the following attributes are handled during the import operation:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Attribute"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"\u578B"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Description"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"anchoredTextAreas"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies how Word anchored text areas are handled. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"anchored"})," (default) - Anchored text areas are treated as text boxes. ",(0,o.jsx)(n.strong,{children:"inline"})," - Anchored text areas are treated as inline text at the position of the anchor. ",(0,o.jsx)(n.strong,{children:"ignore"})," - Anchored text areas are ignored. ",(0,o.jsx)(n.strong,{children:"Note"}),": The layout and the number of pages in the document may change. See also ",(0,o.jsx)(n.em,{children:"How to import .docx format"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"anchoredImages"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies how anchored images are handled. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"all"}),' (default) - All anchored images are imported as anchored images with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). ',(0,o.jsx)(n.strong,{children:"ignoreWrap"})," - Anchored images are imported, but any text wrapping around the image is ignored. ",(0,o.jsx)(n.strong,{children:"ignore"})," - Anchored images are not imported."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sections"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies how section are handled. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"all"})," (default) - All sections are imported. Continuous, even, or odd sections are converted to standard sections. ",(0,o.jsx)(n.strong,{children:"ignore"})," - Sections are converted to default 4D Write Pro sections (A4 portrait layout without header or footer). ",(0,o.jsx)(n.strong,{children:"Note"}),": Section breaks of any type but continuous are converted to section breaks with page break. Continuous section breaks are imported as continuous section breaks."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fields"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies how .docx fields that can't be converted to 4D Write Pro formulas are handled. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"ignore"})," - .docx fields are ignored. ",(0,o.jsx)(n.strong,{children:"label"}),' - .docx field references are imported as labels within double curly braces ("{{ }}"). Ex: The "ClientName" field would be imported as {{ClientName}}. ',(0,o.jsx)(n.strong,{children:"value"})," (default) - The last computed value for the .docx field (if available) is imported. ",(0,o.jsx)(n.strong,{children:"Note"}),": If a .docx field corresponds to a 4D Write Pro variable, the field is imported as a formula and this option is ignored."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"borderRules"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies how paragraph borders are handled. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"collapse"})," - Paragraph formatting is modified to mimic automatically collapsed borders. Note that the collapse property only applies during the import operation. If a stylesheet with a automatic border collapse setting is reapplied after the import operation, the setting will be ignored. ",(0,o.jsx)(n.strong,{children:"noCollapse"})," (default) - Paragraph formatting is not modified."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"preferredFontScriptType"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For MS Word (.docx) documents only. Specifies the preferred typeface to use when different typefaces are defined for a single font property in OOXML. Available values:",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"latin"})," (default) - Latin script ",(0,o.jsx)(n.strong,{children:"bidi"})," - Bidrectional script. Suitable if document is mainly bidirectional left-to-right (LTR) or right-to-left (RTL) text (e.g., Arabic or Hebrew). ",(0,o.jsx)(n.strong,{children:"eastAsia"})," - East Asian script. Suitable if document is mainly Asian text."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"htmlExpressions"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For 4D Write (.4w7) documents only. Specifies how HTML expressions are handled. Available values: ",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"rawText"})," - HTML expressions are imported as raw text within ##htmlBegin## and ##htmlEnd## tags ",(0,o.jsx)(n.strong,{children:"ignore"})," (default) - HTML expressions are ignored."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"importDisplayMode"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["For 4D Write (.4w7) documents only. Specifies how image display is handled. Available values: ",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"legacy -"})," 4W7 image display mode is converted using a background image if different than scaled to fit. ",(0,o.jsx)(n.strong,{children:"noLegacy"})," (default) - 4W7 image display mode is converted to the ",(0,o.jsx)(n.em,{children:"imageDisplayMode"})," attribute if different than scaled to fit."]})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Compatibility Notes"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:'Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.'})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:"Support for importing in .docx format is only certified for Microsoft Word 2010 and newer. Older versions, particularly Microsoft Word 2007, may not import correctly."})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var WPDoc : Object\n WPDoc:=WP Import document("C:\\\\documents\\\\4DWriteDocs\\\\Letter.4w7")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,o.jsx)(n.p,{children:"You want to import a .docx document and would like that paragraph borders are collapsed as they are in MS Word:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $options:=New object\n $options.borderRules:="collapse" //collapse paragraph borders while converting\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(n.p,{children:"You want to import original .docx fields as text (for fields not converted to 4D formulas):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $options:=New object\n $options.fields:="label" //for unconverted fields, import field references as text between {{ and }}\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(n.p,{children:"You want to import a .docx document whose text is mostly in Japanese:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $options:=New object\n $options.preferredFontScriptType:="eastAsia" //force conversion to prefer eastAsia font scripts\n\n wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,o.jsx)(n.p,{children:"You want to import a document on disk using a File object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $file : 4D.File\n\n$file:=File("/RESOURCES/myFile.4wp")\n\nWParea:=WP Import document($file)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-new",children:"WP New"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(667294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);