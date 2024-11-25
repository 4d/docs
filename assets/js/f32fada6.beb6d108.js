"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77162"],{162232:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>h,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-style-sheet","title":"WP New style sheet","description":"WP New style sheet ( wpDoc ; styleSheetType ; styleSheetName ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-new-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-style-sheet","permalink":"/docs/WritePro/commands/wp-new-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-style-sheet","title":"WP New style sheet","slug":"/WritePro/commands/wp-new-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New header","permalink":"/docs/WritePro/commands/wp-new-header"},"next":{"title":"WP New subsection","permalink":"/docs/WritePro/commands/wp-new-subsection"}}'),r=s("785893"),l=s("250065");let i={id:"wp-new-style-sheet",title:"WP New style sheet",slug:"/WritePro/commands/wp-new-style-sheet",displayed_sidebar:"docs"},h=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP New style sheet"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"styleSheetType"})," ; ",(0,r.jsx)(t.em,{children:"styleSheetName"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleSheetType"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Type of style sheet"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleSheetName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of style sheet"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Style sheet object"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP New style sheet"})," command creates a new (empty) style sheet object for the designated ",(0,r.jsx)(t.em,{children:"wpDoc"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"wpDoc"})," parameter, pass a 4D Write Pro document."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"styleSheetType"})," parameter lets you designate the type of the style sheet, ",(0,r.jsx)(t.em,{children:"i.e."})," the part of the ",(0,r.jsx)(t.em,{children:"wpDoc"})," that will be affected by the style sheet. Two types are available:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"wk type character: Applies style attributes to characters."}),"\n",(0,r.jsx)(t.li,{children:"wk type paragraph: Applies style attributes to paragraphs."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Pass a name for the style sheet in the ",(0,r.jsx)(t.em,{children:"styleSheetName"})," parameter. The style sheet's name is stored with the document and facilitates reusing or modifying the style. It can also be used with the ",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"})," and ",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"})," commands. The style sheet name must comply with the following rules:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"it must start with a letter"}),"\n",(0,r.jsx)(t.li,{children:'it can then contain alphanumeric characters, space characters, "-" characters or unicode characters >= 128'}),"\n",(0,r.jsx)(t.li,{children:"it must be unique in the document regardless of the type"}),"\n",(0,r.jsx)(t.li,{children:'it must not start with "section", which is reserved'}),"\n",(0,r.jsx)(t.li,{children:'the "_" is replaced by a space and trailing spaces are removed.'}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can specify the attributes of the style sheet using the ",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command or the object notation (see ",(0,r.jsx)(t.em,{children:"4D Write Pro Attributes"}),"). For the list of available attributes, see the ",(0,r.jsx)(t.em,{children:"Style sheet attributes"})," section."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Notes"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A style sheet only modifies the display of a character or paragraph, not how it is stored in the document. If a style sheet is removed, the text will revert to the default style."}),"\n",(0,r.jsxs)(t.li,{children:["Any style attributes not defined in the new style sheet will automatically use the Normal style. For more information, see ",(0,r.jsx)(t.em,{children:"Style sheet commands"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following code creates and defines a paragraph style sheet:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")\n\xa0\n\xa0\xa0//define style sheet settings\n\xa0WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")\n\xa0WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")\n\xa0WP SET ATTRIBUTES($styleSheet;wk text color;"red")\n\xa0WP SET ATTRIBUTES($styleSheet;wk text align;wk left)\n\xa0\n\xa0\xa0//Apply the style sheet to the first paragraph\n\xa0var $Paragraphs : Collection\n\xa0$Paragraphs:=WP Get elements(wpArea;wk type paragraph)\n\xa0If($Paragraphs.length>0)\n\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Accessing document contents by programming"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"})]})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return h},a:function(){return i}});var n=s(667294);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);