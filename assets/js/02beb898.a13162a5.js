"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76711"],{824735:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/st-set-options","title":"ST SET OPTIONS","description":"ST SET OPTIONS ( { ;} object ; option ; value {; option2 ; value2 ; ... ; optionN ; valueN*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-set-options.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-options","permalink":"/docs/20-R7/commands/st-set-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-options","title":"ST SET OPTIONS","slug":"/commands/st-set-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET ATTRIBUTES","permalink":"/docs/20-R7/commands/st-set-attributes"},"next":{"title":"ST SET PLAIN TEXT","permalink":"/docs/20-R7/commands/st-set-plain-text"}}'),i=t("785893"),r=t("250065");let d={id:"st-set-options",title:"ST SET OPTIONS",slug:"/commands/st-set-options",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST SET OPTIONS"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"option"})," ; ",(0,i.jsx)(n.em,{children:"value"})," {; ",(0,i.jsx)(n.em,{children:"option2"})," ; ",(0,i.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,i.jsx)(n.em,{children:"optionN"})," ; ",(0,i.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Option to set"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"New value of option"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"ST SET OPTIONS"})," command modifies one or more operating options for the styled text field or variable designated by the ",(0,i.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["Passing the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the code of the option to modify in ",(0,i.jsx)(n.em,{children:"option"})," and its new value in ",(0,i.jsx)(n.em,{children:"value"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"option"}),' parameter supports the following constant found in the "',(0,i.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Expressions display mode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.em,{children:"value"})," parameter can contain ST Values or ST References"]})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"value"})," parameter, you can pass one of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST References"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Display source strings of expressions"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Values"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Display computed values of expressions"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Display of values:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(499389).Z+"",width:"236",height:"59"})}),"\n",(0,i.jsx)(n.p,{children:"Display of expressions:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(668338).Z+"",width:"283",height:"56"})}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code lets you switch the display mode of the area:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ST GET OPTIONS(*;"StyledText_t";ST Expressions display mode;$exprValue)\n\xa0If($exprValue=1)\n\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST Values)\n\xa0Else\n\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST References)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/st-get-options",children:"ST GET OPTIONS"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1289"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},668338:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},499389:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);