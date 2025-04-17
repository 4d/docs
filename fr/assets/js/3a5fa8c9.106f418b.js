"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66518"],{879305:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands/wp-insert-document-body","title":"WP Insert document body","description":"WP Insert document body ( targetObj ; wpDoc ; mode {; rangeUpdate} ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands/wp-insert-document-body.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-insert-document-body","permalink":"/docs/fr/WritePro/commands/wp-insert-document-body","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-insert-document-body.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-insert-document-body","title":"WP Insert document body","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert break","permalink":"/docs/fr/WritePro/commands/wp-insert-break"},"next":{"title":"WP Insert formula","permalink":"/docs/fr/WritePro/commands/wp-insert-formula"}}'),d=t("785893"),s=t("250065");let i={id:"wp-insert-document-body",title:"WP Insert document body",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WP Insert document body"})," ( ",(0,d.jsx)(n.em,{children:"targetObj"})," ; ",(0,d.jsx)(n.em,{children:"wpDoc"})," ; ",(0,d.jsx)(n.em,{children:"mode"})," {; ",(0,d.jsx)(n.em,{children:"rangeUpdate"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tres"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"targetObj"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wpDoc"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"mode"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Insertion mode"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rangeUpdate"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Range update mode"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Text range object referencing the inserted document body"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"WP Insert document body"})," command inserts the body of the ",(0,d.jsx)(n.em,{children:"wpDoc"})," document into the specified ",(0,d.jsx)(n.em,{children:"targetObj"})," according to the passed insertion ",(0,d.jsx)(n.em,{children:"mode"})," and ",(0,d.jsx)(n.em,{children:"rangeUpdate"})," parameters, and it returns the range of the inserted document body."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"targetObj"}),", pass:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"A range, or"}),"\n",(0,d.jsx)(n.li,{children:"An element (table / row / paragraph / body / header / footer / inline picture / section / subsection / text box), or"}),"\n",(0,d.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The inserted ",(0,d.jsx)(n.em,{children:"wpDoc"})," document can be any 4D Write Pro document object created using the ",(0,d.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-new",children:"WP New"})," or ",(0,d.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-import-document",children:"WP Import document"})," command. Only the body children elements are inserted (i.e. headers, footers, text boxes and anchored pictures are not inserted). Sections and bookmarks in the destination range are preserved. In addition, the elements are copied, so ",(0,d.jsx)(n.em,{children:"wpDoc"})," can be re-used several times."]}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"mode"})," parameter, pass one or a combination of the following constants from the ",(0,d.jsx)(n.em,{children:"4D Write Pro Constants"})," theme to indicate the insertion mode to be used for the document in the destination ",(0,d.jsx)(n.em,{children:"targetObj"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk append"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"Insert contents at end of target"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk prepend"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Insert contents at beginning of target"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk replace"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Replace target contents"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"You can combine one of the previous constants with the following insertion options:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk freeze expressions"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"64"}),(0,d.jsx)(n.td,{children:"Freeze expressions at the moment of the insertion"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk keep paragraph styles"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"128"}),(0,d.jsx)(n.td,{children:"Apply destination paragraph styles. In case of wk append operation, insert contents without initial paragraph break."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"rangeUpdate"})," parameter (Optional); if ",(0,d.jsx)(n.em,{children:"targetObj"})," is a range, you can pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk exclude from range"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Inserted contents not included in updated range"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wk include in range"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Inserted contents included in updated range (default)"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["If you do not pass a ",(0,d.jsx)(n.em,{children:"rangeUpdate"})," parameter, by default the inserted contents are included in the resulting range."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If ",(0,d.jsx)(n.em,{children:"targetObj"})," is not a range, ",(0,d.jsx)(n.em,{children:"rangeUpdate"})," is ignored."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(n.p,{children:"You want to replace the contents of a document by the text selected in another one:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" $tempRange:=WP Get selection(WPTemplate) //we retrieve the user selection in the WPTemplate document\n $doctoCopy:=WP New($tempRange) //create a new document based on WPTemplate\n WP Insert document body(WPDoc;$doctoCopy;wk replace) //replace contents of WPDoc by the contents of the new document\n"})}),"\n",(0,d.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsx)(n.p,{children:"You have defined a template document with different preformatted parts, each of them being stored as a bookmark. When producing a final document from the template, you can extract any bookmark as a new document and insert it in the final document."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT($_BookmarkNames;0)\n WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //get the bookmarks from the template\n $targetRange:=WP New //create an empty document (will be the final document)\n \n $p:=Find in array($_BookmarkNames;"Main_Header") //handle the main header part\n If($p>0)\n    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //select the range\n    $RangeDoc:=WP New($Range) //create a new document from the range\n    WP Insert document body($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=after replacement, $targetRange is equal to end of replaced text\n End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,d.jsx)(n.p,{children:"You want to set the font style and size for the inserted document body:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'WPdoc:=WP Import document("myFile.4wp")\n$range1:=WP Insert document body(WParea; WPdoc; wk append)\n\nWP SET ATTRIBUTES($range1; wk font size; "12pt")\nWP SET ATTRIBUTES($range1; wk font family; "Times New Roman")\nWP SET ATTRIBUTES($range1; wk font italic; wk true)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-break",children:"WP INSERT BREAK"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-picture",children:"WP INSERT PICTURE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-new",children:"WP New"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);