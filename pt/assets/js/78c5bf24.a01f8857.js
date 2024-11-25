"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66521"],{243191:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"WritePro/commands/wp-delete-section","title":"WP DELETE SECTION","description":"WP DELETE SECTION ( section ) WP DELETE SECTION ( wpDoc ; indexNumber {; count} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands/wp-delete-section.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-delete-section","permalink":"/docs/pt/WritePro/commands/wp-delete-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-delete-section.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-section","title":"WP DELETE SECTION","slug":"/WritePro/commands/wp-delete-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE PICTURE","permalink":"/docs/pt/WritePro/commands/wp-delete-picture"},"next":{"title":"WP DELETE STYLE SHEET","permalink":"/docs/pt/WritePro/commands/wp-delete-style-sheet"}}'),o=t("785893"),r=t("250065");let i={id:"wp-delete-section",title:"WP DELETE SECTION",slug:"/WritePro/commands/wp-delete-section",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplos",id:"exemplos",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP DELETE SECTION"})," ( ",(0,o.jsx)(n.em,{children:"section"})," )",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"WP DELETE SECTION"})," ( ",(0,o.jsx)(n.em,{children:"wpDoc"})," ; ",(0,o.jsx)(n.em,{children:"indexNumber"})," {; ",(0,o.jsx)(n.em,{children:"count"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"section"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"4D Write Pro section"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wpDoc"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"indexNumber"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Index of the section to be deleted"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"count"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Number of sections to be deleted"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"WP DELETE SECTION"})," command deletes the passed ",(0,o.jsx)(n.em,{children:"section"})," object, or deletes one or more sections starting at  ",(0,o.jsx)(n.em,{children:"indexNumber"})," and depending on the ",(0,o.jsx)(n.em,{children:"count"})," passed. When a section is removed, everything associated with it, including the header, footer, part of the body, anchored pictures, text boxes, and the ending section break (whether a section break or continuous section break), is also removed."]}),"\n",(0,o.jsxs)(n.p,{children:["An error is raised if the ",(0,o.jsx)(n.strong,{children:"WP DELETE SECTION"})," command requests to delete all sections or if the document contains only one section."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP DELETE SECTION"})," re-indexes the anchorSection attribute of text boxes and pictures to adjust their anchors to their sections after changes. For example, if a document has four sections and the second section is deleted, sections 3 and 4 will become sections 2 and 3 and text boxes and pictures that were previously anchored to sections 3 and 4 will now be anchored to sections 2 and 3."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If an image or textbox is anchored to a page (e.g., page 20) and this page no longer exists after a section has been deleted, the image (or textbox) will remain in the document and will reappear on page 20 if this page ever exists again later."})}),"\n",(0,o.jsx)(n.h4,{id:"exemplos",children:"Exemplos"}),"\n",(0,o.jsx)(n.p,{children:"To remove the first section of the document:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\nwpDoc:=WP Import document("test.wp")\n// remove section 1 only (without error unless there is only one section in the document)\nWP DELETE SECTION(wpDoc ; 1) \n\n'})}),"\n",(0,o.jsx)(n.p,{children:"To remove section 5 of the document:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\nwpDoc:=WP Import document("test.wp")\n// remove section 5 only\nWP DELETE SECTION(wpDoc ; 5)\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"To remove section 5, 6 and 7 of the document:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\nWP DELETE SECTION(wpDoc ; 5 ; 3 )\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"To remove all sections starting from 5:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\n// remove all sections starting at section 5 (without error unless section 5 does not exist)\nWP DELETE SECTION(wpDoc ; 5 ; MAXLONG )\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"To retrieve and remove section 5:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\n// obter a se\xe7\xe3o 5\n$section:=WP Get section(wpDoc, 5)\n// remover $section\nWP DELETE SECTION($section)\n\n'})}),"\n",(0,o.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-section",children:"WP Get section"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);