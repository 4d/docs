"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16201"],{707659:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"WritePro/commands/wp-delete-subsection","title":"WP DELETE SUBSECTION","description":"WP DELETE SUBSECTION ( wpSection ; subSectionType )WP DELETE SUBSECTION ( subSection )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands/wp-delete-subsection.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-delete-subsection","permalink":"/docs/es/WritePro/commands/wp-delete-subsection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-delete-subsection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-subsection","title":"WP DELETE SUBSECTION","slug":"/WritePro/commands/wp-delete-subsection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE STYLE SHEET","permalink":"/docs/es/WritePro/commands/wp-delete-style-sheet"},"next":{"title":"WP DELETE TEXT BOX","permalink":"/docs/es/WritePro/commands/wp-delete-text-box"}}'),i=t("785893"),r=t("250065");let o={id:"wp-delete-subsection",title:"WP DELETE SUBSECTION",slug:"/WritePro/commands/wp-delete-subsection",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function h(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP DELETE SUBSECTION"})," ( ",(0,i.jsx)(n.em,{children:"wpSection"})," ; ",(0,i.jsx)(n.em,{children:"subSectionType"})," )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"WP DELETE SUBSECTION"})," ( ",(0,i.jsx)(n.em,{children:"subSection"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpSection"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D Write Pro section"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subSectionType"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Subsection type (wk first page, wk left page, or wk right page)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subSection"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D Write Pro subsection"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WP DELETE SUBSECTION"})," command removes the ",(0,i.jsx)(n.em,{children:"subSectionType"})," subsection elements from the ",(0,i.jsx)(n.em,{children:"wpSection"})," 4D Write Pro section, or it directly removes the passed ",(0,i.jsx)(n.em,{children:"subSection"}),". Subsection elements include headers, footers, columns, anchored pictures, etc. Note that the body of the document is left untouched."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"wpSection"}),", pass the section from which you want to remove the subsection elements. The section can be obtained using the ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-sections",children:"WP Get sections"})," or ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-section",children:"WP Get section"})," commands."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"subSectionType"})," parameter specifes the subsection to delete. You can pass one of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk first page"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk left page"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk right page"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Deleting a left page or right page subsection will automatically delete the opposite subsection. For example, if you delete a right page subsection, the left page subsection is automatically deleted."})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"subSectionType"})," does not exist, the command does nothing (no error is generated)."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"When a subsection is deleted, the header and footer are removed, as well as anchored pictures and textboxes but the body remains untouched."})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"You want to delete the first page subsection of the first section:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" var $section;$subsection : Object\n  // obtener la primera secci\xf3n\n $section:=WP Get section(wpDoc;1)\n  // Eliminar la subsecci\xf3n\n WP DELETE SUBSECTION($section;wk first page)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"You want to delete the right page subsection of section 3:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\n$subSection:=WP Get subsection(WP Get section($document;3);wk right page)\n WP DELETE SUBSECTION($subSection)\n \n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-subsection",children:"WP Get subsection"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-new-subsection",children:"WP New subsection"})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);