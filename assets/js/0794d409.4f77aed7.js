"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91900"],{368372:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-frame","title":"WP Get frame","description":"WP Get frame ( { ;} wpArea {; textBoxID*} ) : Integer","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-get-frame.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-frame","permalink":"/docs/WritePro/commands/wp-get-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-frame.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-frame","title":"WP Get frame","slug":"/WritePro/commands/wp-get-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get formulas","permalink":"/docs/WritePro/commands/wp-get-formulas"},"next":{"title":"WP Get header","permalink":"/docs/WritePro/commands/wp-get-header"}}'),s=n("785893"),i=n("250065");let d={id:"wp-get-frame",title:"WP Get frame",slug:"/WritePro/commands/wp-get-frame",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP Get frame"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"wpArea"})," {; ",(0,s.jsx)(t.em,{children:"textBoxID"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wpArea"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textBoxID"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\uD83E\uDC58"}),(0,s.jsx)(t.td,{children:"ID of the text box (only filled if a text box has the focus)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Frame where the cursor is currently set"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP Get frame"})," command returns the frame where the cursor is currently set within the 4D Write Pro ",(0,s.jsx)(t.em,{children:"wpArea"})," area."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, you indicate that ",(0,s.jsx)(t.em,{children:"wpArea"})," is a form object name (string). If you do not pass this parameter, you indicate that ",(0,s.jsx)(t.em,{children:"wpArea"})," is a 4D Write Pro object variable or field."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": This command can only be used if the ",(0,s.jsx)(t.em,{children:"wpArea"})," is associated with a form object (",(0,s.jsx)(t.em,{children:"i.e."})," it is displayed in the current form/page)."]}),"\n",(0,s.jsxs)(t.p,{children:["The returned value can be compared to one of the following constants from the ",(0,s.jsx)(t.em,{children:"4D Write Pro Constants"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk body"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Body frame of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section default footer"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"Default footer of the section (available only if there is no active subsection footer)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section default header"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"9"}),(0,s.jsx)(t.td,{children:"Default header of the section (available only if there is no active subsection header)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section first footer"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"Footer of the first page of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section first header"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"Header of the first page of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section left footer"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"Footer of the left page(s) of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section left header"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"Header of the left page(s) of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section right footer"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"Footer of the right page(s) of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk current section right header"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:"Header of the right page(s) of the section"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk text box"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"11"}),(0,s.jsx)(t.td,{children:"Text box"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["If the cursor is currently set in a text box element, the element ",(0,s.jsx)(t.strong,{children:"id"})," of the text box is returned in the ",(0,s.jsx)(t.em,{children:"textBoxID"})," parameter. In all other cases, this parameter is returned empty."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to make sure the user has set the cursor in a header or a footer frame:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $frameGet : Integer\n\xa0$frameGet:=WP Get frame(*;"WParea")\n\xa0If($frameGet=wk body)|($frameGet=wk text box)\n\xa0\xa0\xa0\xa0ALERT("Please select a footer or a header.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-set-frame",children:"WP SET FRAME"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);