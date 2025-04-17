"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63636"],{671932:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/st-insert-url","title":"ST INSERT URL","description":"ST INSERT URL ( { ;} object ; urlText ; urlAddress {; startSel {; endSel*}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/st-insert-url.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-url","permalink":"/docs/20-R8/commands/st-insert-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-url.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-insert-url","title":"ST INSERT URL","slug":"/commands/st-insert-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT EXPRESSION","permalink":"/docs/20-R8/commands/st-insert-expression"},"next":{"title":"ST SET ATTRIBUTES","permalink":"/docs/20-R8/commands/st-set-attributes"}}'),r=t("785893"),i=t("250065");let d={id:"st-insert-url",title:"ST INSERT URL",slug:"/commands/st-insert-url",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"urlText"})," ; ",(0,r.jsx)(n.em,{children:"urlAddress"})," {; ",(0,r.jsx)(n.em,{children:"startSel"})," {; ",(0,r.jsx)(n.em,{children:"endSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"urlText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Visible text of URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"urlAddress"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"URL address"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Start of selection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"End of selection"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," command inserts a URL link in the styled text field or variable designated by the ",(0,r.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"urlText"}),' parameter, pass the visible text of the URL, as it should appear in the object. For example, text labels such as "4D Web Site" or "Follow this link for more information" can be used. You can also use the address itself, for instance "',(0,r.jsx)(n.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'".']}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"urlAddress"}),' parameter, pass the complete address you want the browser page to connect to, for example "',(0,r.jsx)(n.a,{href:"http://www.4D.com",children:"http://www.4D.com"}),'".']}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," parameters designate a selection of text in ",(0,r.jsx)(n.em,{children:"object"}),". The ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"})," values express a plain text selection, without taking into account any style tags that may be present."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you only pass ",(0,r.jsx)(n.em,{children:"startSel"}),", ",(0,r.jsx)(n.em,{children:"urlText"})," is inserted at the specified location."]}),"\n",(0,r.jsxs)(n.li,{children:["If you omit ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", ",(0,r.jsx)(n.em,{children:"urlText"})," is inserted at the location of the cursor."]}),"\n",(0,r.jsxs)(n.li,{children:["If you pass ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),", ",(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," replaces the text in this selection with the ",(0,r.jsx)(n.em,{children:"urlText"}),". If the value of ",(0,r.jsx)(n.em,{children:"endSel"})," is greater than the total number of characters in the object, all the characters between ",(0,r.jsx)(n.em,{children:"startSel"})," and the end of the text are replaced with the ",(0,r.jsx)(n.em,{children:"urlText"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,r.jsx)(n.em,{children:"startSel"})," and ",(0,r.jsx)(n.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,r.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Designates last character of text contained in object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) You must pass an object name in ",(0,r.jsx)(n.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If ",(0,r.jsx)(n.em,{children:"startSel"})," is greater than ",(0,r.jsx)(n.em,{children:"endSel"})," (except when ",(0,r.jsx)(n.em,{children:"endSel"})," is 0), the command does nothing and the ",(0,r.jsx)(n.em,{children:"OK"})," variable is set to 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Once the link is inserted, it is active: using ",(0,r.jsx)(n.strong,{children:"Ctrl+click"})," (Windows) or ",(0,r.jsx)(n.strong,{children:"Command+click"})," (macOS) on its label opens a page of the default browser at the address specified in the ",(0,r.jsx)(n.em,{children:"urlAddress"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to insert a link to the 4D Web site to replace the text selected in the object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vTitle:="4D Web Site"\n\xa0vURL:="http://www.4d.com/"\n\xa0ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/st-get-url",children:"ST GET URL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1280"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);