"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80332"],{278223:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-get-text","title":"ST Get text","description":"ST Get text ( { ;} object {; startSel {; endSel*}} )  : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-get-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-text","permalink":"/docs/commands/st-get-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-get-text","title":"ST Get text","slug":"/commands/st-get-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get plain text","permalink":"/docs/commands/st-get-plain-text"},"next":{"title":"ST GET URL","permalink":"/docs/commands/st-get-url"}}'),r=n("785893"),i=n("250065");let d={id:"st-get-text",title:"ST Get text",slug:"/commands/st-get-text",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let t={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ST Get text"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," {; ",(0,r.jsx)(t.em,{children:"startSel"})," {; ",(0,r.jsx)(t.em,{children:"endSel"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,r.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(t.br,{}),"Text field or variable (if * is omitted)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"startSel"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Start of selection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"endSel"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"End of selection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Text including style tags"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ST Get text command returns the styled text found in the text field or variable designated by the ",(0,r.jsx)(t.em,{children:"object"})," parameter."]}),"\n",(0,r.jsx)(t.h5,{id:""}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, if the object has the focus, the command returns information about the object being edited; however, when the object does not have the focus, the command returns information about the data source (field or variable) of the object.",(0,r.jsx)(t.br,{}),"\nIf you omit the ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference instead of a string and during execution, the command returns information about this field or variable."]}),"\n",(0,r.jsx)(t.h5,{id:"-1"}),"\n",(0,r.jsx)(t.p,{children:"The command returns the text with any style tags that are associated with it, which means, for example, that you can copy and paste text while keeping its style."}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"})," parameters let you designate a selection of text in object. The ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"})," values give a selection of plain text, without taking any style tags found in the text into account."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you omit ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"}),", ST Get text returns all the text contained in ",(0,r.jsx)(t.em,{children:"object"}),","]}),"\n",(0,r.jsxs)(t.li,{children:["If you pass ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"}),", ST Get text returns the selection of text set by these limits."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,r.jsx)(t.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST End highlight"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"-1001"}),(0,r.jsx)(t.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST End text"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Designates last character of text contained in object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Start highlight"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"-1000"}),(0,r.jsx)(t.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Start text"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["(*) You must pass an object name in ",(0,r.jsx)(t.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,r.jsxs)(t.p,{children:["If the values of ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"})," are equal or if ",(0,r.jsx)(t.em,{children:"startSel"})," is greater than ",(0,r.jsx)(t.em,{children:"endSel"}),", an error is returned."]}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,r.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/st-set-text",children:"ST SET TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/text-to-array",children:"TEXT TO ARRAY"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);