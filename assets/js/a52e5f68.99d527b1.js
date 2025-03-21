"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86389"],{363626:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-macro-parameter","title":"SET MACRO PARAMETER","description":"SET MACRO PARAMETER ( selector ; textParam )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-macro-parameter","permalink":"/docs/20-R7/commands/set-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-macro-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-macro-parameter","title":"SET MACRO PARAMETER","slug":"/commands/set-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/20-R7/commands/set-environment-variable"},"next":{"title":"START MONITORING ACTIVITY","permalink":"/docs/20-R7/commands/start-monitoring-activity"}}'),s=n("785893"),d=n("250065");let c={id:"set-macro-parameter",title:"SET MACRO PARAMETER",slug:"/commands/set-macro-parameter",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SET MACRO PARAMETER"})," ( ",(0,s.jsx)(t.em,{children:"selector"})," ; ",(0,s.jsx)(t.em,{children:"textParam"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selector"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Selection to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textParam"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Text sent"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"SET MACRO PARAMETER"})," command inserts the ",(0,s.jsx)(t.em,{children:"paramText"})," text into the method from which it has been called."]}),"\n",(0,s.jsxs)(t.p,{children:["If text has been selected in the method, the ",(0,s.jsx)(t.em,{children:"selector"})," parameter can be used to set whether the ",(0,s.jsx)(t.em,{children:"paramText"})," text must replace all of the method text or only the selected text. In selector, you can pass one of the following constants, added to the \u201C",(0,s.jsx)(t.em,{children:"4D Environment"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Full method text"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Highlighted method text"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["If no text has been selected, ",(0,s.jsx)(t.em,{children:"paramText"})," is inserted into the method."]}),"\n",(0,s.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(t.p,{children:["In order for the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})," and ",(0,s.jsx)(t.strong,{children:"SET MACRO PARAMETER"})," commands to work correctly, the new \u201Cversion\u201D attribute must be declared in the macro itself. The \u201Cversion\u201D attribute must be declared as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<macro name="MyMacro" version="2">\n--- Text of macro ---\n</macro>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"This macro builds a new text that will be returned to the calling method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $input_text : Text\n\xa0var $output_text : Text\n\xa0GET MACRO PARAMETER(Highlighted method text;$input_text)\n\xa0\xa0//Suppose that the selected text is a table, i.e. \u201C[Customers]\u201D\n\xa0$output_text:=""\n\xa0$output_text:=$output_text+Command name(47)+"("+$input_text+")"\xa0// Select all ([Customers])\n\xa0$output_text:=$output_text+"$i:="+Command name(76)+"("+$input_text+")"\xa0// $i:=Records in selection([Customers])\n\xa0SET MACRO PARAMETER(Highlighted method text;$output_text)\n\xa0\xa0//Replaces the selected text by the new code\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"998"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var r=n(667294);let s={},d=r.createContext(s);function c(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);