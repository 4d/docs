"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94357"],{455269:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-frame","title":"WP SET FRAME","description":"WP SET FRAME ( { ;} wpArea ; frameSelector {; textBoxID*} )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-set-frame.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-frame","permalink":"/docs/20-R8/WritePro/commands/wp-set-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-frame.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-set-frame","title":"WP SET FRAME","slug":"/WritePro/commands/wp-set-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET DATA CONTEXT","permalink":"/docs/20-R8/WritePro/commands/wp-set-data-context"},"next":{"title":"WP SET LINK","permalink":"/docs/20-R8/WritePro/commands/wp-set-link"}}'),s=t("785893"),i=t("250065");let d={id:"wp-set-frame",title:"WP SET FRAME",slug:"/WritePro/commands/wp-set-frame",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP SET FRAME"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"wpArea"})," ; ",(0,s.jsx)(n.em,{children:"frameSelector"})," {; ",(0,s.jsx)(n.em,{children:"textBoxID"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpArea"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"frameSelector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Frame where the cursor should be set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"textBoxID"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Id of the text box where the cursor should be set"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP SET FRAME"})," command sets the cursor into the frame designated by ",(0,s.jsx)(n.em,{children:"frameSelector"})," and optionally, ",(0,s.jsx)(n.em,{children:"textBoxID"}),", in the 4D Write Pro ",(0,s.jsx)(n.em,{children:"wpArea"})," area."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that ",(0,s.jsx)(n.em,{children:"wpArea"})," is a form object name (string). If you do not pass this parameter, you indicate that ",(0,s.jsx)(n.em,{children:"wpArea"})," is a 4D Write Pro object variable or field."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": This command can only be used if the ",(0,s.jsx)(n.em,{children:"wpArea"})," is associated with a form object (",(0,s.jsx)(n.em,{children:"i.e."})," it is displayed in the current form/page)."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass in ",(0,s.jsx)(n.em,{children:"frameSelector"})," one of the following constants from the ",(0,s.jsx)(n.em,{children:"4D Write Pro Constants"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk body"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Body frame of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current page footer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current page header"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section default footer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"Default footer of the section (available only if there is no active subsection footer)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section default header"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"Default header of the section (available only if there is no active subsection header)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section first footer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Footer of the first page of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section first header"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Header of the first page of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section left footer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Footer of the left page(s) of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section left header"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Header of the left page(s) of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section right footer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Footer of the right page(s) of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section right header"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"Header of the right page(s) of the section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk text box"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"Text box"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If wk current page header or wk current page footer is passed in ",(0,s.jsx)(n.em,{children:"frameSelector"}),", ",(0,s.jsx)(n.strong,{children:"WP SET FRAME"})," will give focus to the first selected page header or footer, no matter the sub-section type (if it does not contain any header or footer, the command will do nothing)."]}),"\n",(0,s.jsxs)(n.li,{children:["If any of the wk current section[...] constants are passed in ",(0,s.jsx)(n.em,{children:"frameSelector"}),", ",(0,s.jsx)(n.strong,{children:"WP SET FRAME"})," will give focus to the specified sub-section header or footer of the first selected section (if it does not contain any header or footer, the command will do nothing)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WP SET FRAME"})," will do nothing if the ",(0,s.jsx)(n.em,{children:"frameSelector"})," frame does not exist for the selection section (for example, wk current section left header when there is no distinction between left and right pages in ",(0,s.jsx)(n.em,{children:"wpArea"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"frameSelector"})," = wk text box, you must pass the ",(0,s.jsx)(n.em,{children:"textBoxID"})," parameter with the ",(0,s.jsx)(n.strong,{children:"id"})," of the text box in which to set the focus. In this case, if ",(0,s.jsx)(n.em,{children:"textBoxID"})," is omitted or if there is no text box with the specified id or if there is no page corresponding to the anchor conditions of the text box, the command does nothing. The ",(0,s.jsx)(n.em,{children:"textBoxID"})," parameter is ignored if ",(0,s.jsx)(n.em,{children:"frameSelector"})," # wk text box."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to set the cursor to the left footer of the current section:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0WP SET FRAME(*;"WPArea";wk current section left footer)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-get-frame",children:"WP Get frame"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);