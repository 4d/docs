"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21996"],{872626:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","description":"ST FREEZE EXPRESSIONS ( { ;} object {; startSel {; endSel}}{; } )","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-freeze-expressions.md","sourceDirName":"commands-legacy","slug":"/commands/st-freeze-expressions","permalink":"/docs/20-R7/commands/st-freeze-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-freeze-expressions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","slug":"/commands/st-freeze-expressions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST COMPUTE EXPRESSIONS","permalink":"/docs/20-R7/commands/st-compute-expressions"},"next":{"title":"ST GET ATTRIBUTES","permalink":"/docs/20-R7/commands/st-get-attributes"}}'),r=t("785893"),i=t("250065");let d={id:"st-freeze-expressions",title:"ST FREEZE EXPRESSIONS",slug:"/commands/st-freeze-expressions",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"startSel"})," {; ",(0,r.jsx)(n.em,{children:"endSel"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,r.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Start of selection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"End of selection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed = update expressions before freezing them"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"}),' command "freezes" the contents of expressions found in the multi-style text or 4D Write Pro field or variable designated by the ',(0,r.jsx)(n.em,{children:"object"})," parameter. This action converts dynamic expressions into static text or (4D Write Pro areas only) images and removes the associated references from the ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about 4D expressions used in multi-style text or 4D Write Pro areas, refer to the description of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," command stores the computed value of an expression at a given time. This operation is necessary particularly before each use of the ",(0,r.jsx)(n.em,{children:"object"})," outside of the area (exports, storage in a disk file, printing, etc.) since only the reference of the expression is kept in the area itself."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," parameters designate a selection of text in ",(0,r.jsx)(n.em,{children:"object"}),". The ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," values express a plain text selection, without taking into account any style tags or references that may be present."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you pass ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," only freezes the expressions located within this selection."]}),"\n",(0,r.jsxs)(n.li,{children:["If you only pass ",(0,r.jsx)(n.em,{children:"startSel"})," or if the value of ",(0,r.jsx)(n.em,{children:"endSel"})," is greater than the total number of characters in the ",(0,r.jsx)(n.em,{children:"object"}),", all the expressions between ",(0,r.jsx)(n.em,{children:"startSel"})," and the end of the text are frozen."]}),"\n",(0,r.jsxs)(n.li,{children:["If you omit ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", all the expressions included in the user selection of the ",(0,r.jsx)(n.em,{children:"object"})," are frozen."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," parameters.",(0,r.jsx)(n.br,{}),'\nThese constants are found in the "',(0,r.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Designates last character of text contained in object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) You must pass an object name in ",(0,r.jsx)(n.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If ",(0,r.jsx)(n.em,{children:"startSel"})," is greater than ",(0,r.jsx)(n.em,{children:"endSel"})," (except when ",(0,r.jsx)(n.em,{children:"endSel"}),"is 0), the command does nothing and the ",(0,r.jsx)(n.em,{children:"OK"})," variable is set to 0."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, expressions are not re-evaluated before they are frozen. If you want the expression to be recomputed and then frozen, you can pass the second ",(0,r.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," does not freeze 4D Write Pro expressions containing ",(0,r.jsx)(n.em,{children:"$wp_pageNumber"})," or ",(0,r.jsx)(n.em,{children:"$wp_pageCount"}),". For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Managing formulas"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to insert the current time at the start of the text and then freeze it before saving the record:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Inserting the time at the start of the text\n\xa0ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)\n\xa0\xa0//We freeze the expression\n\xa0ST FREEZE EXPRESSIONS(*;"StyledText_t";1)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1282"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);