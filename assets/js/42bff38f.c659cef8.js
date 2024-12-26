"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85110"],{391375:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/st-insert-expression","title":"ST INSERT EXPRESSION","description":"ST INSERT EXPRESSION ( { ;} object ; expression {; startSel {; endSel*}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-insert-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-expression","permalink":"/docs/commands/st-insert-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-expression.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-insert-expression","title":"ST INSERT EXPRESSION","slug":"/commands/st-insert-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET URL","permalink":"/docs/commands/st-get-url"},"next":{"title":"ST INSERT URL","permalink":"/docs/commands/st-insert-url"}}'),r=s("785893"),i=s("250065");let d={id:"st-insert-expression",title:"ST INSERT EXPRESSION",slug:"/commands/st-insert-expression",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"expression"})," {; ",(0,r.jsx)(n.em,{children:"startSel"})," {; ",(0,r.jsx)(n.em,{children:"endSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expression"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expression and (optional) format to insert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Start of selection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"End of selection"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," command inserts a reference to the ",(0,r.jsx)(n.em,{children:"expression"})," in the styled text field or variable designated by the ",(0,r.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"expression"})," parameter, you pass the 4D expression to evaluate in the ",(0,r.jsx)(n.em,{children:"object"}),'. The expression must be placed in quotation marks ("").']}),"\n",(0,r.jsxs)(n.p,{children:["A valid 4D expression is a string returning a value. ",(0,r.jsx)(n.em,{children:"expression"})," can be a field, a variable, a 4D command, a statement returning a value, a project method, a 4D Write Pro special expression (see ",(0,r.jsx)(n.em,{children:"Managing formulas"}),"), and so on."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Inserting picture expressions (e. g. Picture type variables) is supported in 4D Write Pro areas (see ",(0,r.jsx)(n.em,{children:"Picture expressions"}),") but is not supported in multi-style text areas."]}),"\n",(0,r.jsxs)(n.li,{children:['This command expects "real" names for fields and tables, even if a "virtual" structure has been defined using ',(0,r.jsx)(n.a,{href:"/docs/commands/set-table-titles",children:"SET TABLE TITLES"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/set-field-titles",children:"SET FIELD TITLES"})," commands."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"expression"})," returns a value containing carriage returns and tabs, 4D formats the text according to the object hosting the expression; carriage return characters are interpreted as line breaks."]}),"\n",(0,r.jsxs)(n.p,{children:["You can format the expression by including formatting information in the ",(0,r.jsx)(n.em,{children:"expression"})," parameter. In this case, the parameter must be in the form:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:'"String(value;format)"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["... where ",(0,r.jsx)(n.em,{children:"value"})," contains the expression itself and ",(0,r.jsx)(n.em,{children:"format"})," contains the format to apply. The ",(0,r.jsx)(n.em,{children:"format"})," parameter can have the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'for numbers: any number display format (existing or not), for example "###,##".'}),"\n",(0,r.jsxs)(n.li,{children:['for dates: a number designating an existing date format. You can use the constants of the "',(0,r.jsx)(n.em,{children:"Date Display Formats"}),'" theme, for example System date short .']}),"\n",(0,r.jsxs)(n.li,{children:['for times: a number designating an existing time format. You can use the constants of the "',(0,r.jsx)(n.em,{children:"Time Display Formats"}),'" theme, for example System time short .']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0"String([Table_1]Field_1;System date short)"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the expression ",(0,r.jsx)(n.strong,{children:"values"})," are displayed in the multi-style text areas. You can force the display of the ",(0,r.jsx)(n.strong,{children:"references"})," instead using the ",(0,r.jsx)(n.a,{href:"/docs/commands/st-set-options",children:"ST SET OPTIONS"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," parameters designate a selection of text in ",(0,r.jsx)(n.em,{children:"object"}),". The ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," values express a plain text selection, without taking into account any style tags that may be present."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you only pass ",(0,r.jsx)(n.em,{children:"startSel"}),", the result of the expression is inserted at the specified location."]}),"\n",(0,r.jsxs)(n.li,{children:["If you omit ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", the result of the expression is inserted at the location of the cursor."]}),"\n",(0,r.jsxs)(n.li,{children:["If you pass ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", ",(0,r.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," replaces the text in this selection with the result of the ",(0,r.jsx)(n.em,{children:"expression"}),". If the value of ",(0,r.jsx)(n.em,{children:"endSel"})," is greater than the total number of characters in the object, all the characters between ",(0,r.jsx)(n.em,{children:"startSel"})," and the end of the text are replaced by the result of the ",(0,r.jsx)(n.em,{children:"expression"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,r.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Designates last character of text contained in object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) You must pass an object name in ",(0,r.jsx)(n.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If ",(0,r.jsx)(n.em,{children:"startSel"})," is greater than ",(0,r.jsx)(n.em,{children:"endSel"})," (except when ",(0,r.jsx)(n.em,{children:"endSel"})," is 0), the command does nothing and the ",(0,r.jsx)(n.em,{children:"OK"})," variable is set to 0."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to replace the highlighted text with a field value:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ST INSERT EXPRESSION(*;"myText";"[Customer]LastName";ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/st-get-expression",children:"ST Get expression"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/st-insert-url",children:"ST INSERT URL"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1281"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);