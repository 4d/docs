"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35794"],{128625:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/trace","title":"TRACE","description":"TRACE","source":"@site/versioned_docs/version-20-R8/commands-legacy/trace.md","sourceDirName":"commands-legacy","slug":"/commands/trace","permalink":"/docs/commands/trace","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrace.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"trace","title":"TRACE","slug":"/commands/trace","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"This","permalink":"/docs/commands/this"},"next":{"title":"Type","permalink":"/docs/commands/type"}}'),r=t("785893"),o=t("250065");let i={id:"trace",title:"TRACE",slug:"/commands/trace",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TRACE"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Does not require any parameters"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["You use ",(0,r.jsx)(n.strong,{children:"TRACE"})," to trace methods during the development of a database."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"TRACE"})," command turns on the 4D debugger for the current process. The ",(0,r.jsx)(n.em,{children:"Debugger"})," window is displayed before the next line of code is executed, and continues to be displayed for each line of code that is executed. You can also turn on the debugger by pressing ",(0,r.jsx)(n.strong,{children:"Alt+Shift+right-click"})," (Windows) or ",(0,r.jsx)(n.strong,{children:"Control+Option+Command+click"})," (Macintosh) while code is executing."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"TRACE"})," command is ignored when the executing code is compiled."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"})," If you call ",(0,r.jsx)(n.strong,{children:"TRACE"})," from a project method executed within the context of a Stored Procedure, the debugger window appears on the Server machine."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," Do not place ",(0,r.jsx)(n.strong,{children:"TRACE"})," calls when using a form whose On Activate and On Deactivate events have been enabled. Each time the debugger window appears, these events will be invoked; you will then loop infinitely between these events and the debugger window. If you end up in this situation, ",(0,r.jsx)(n.strong,{children:"Shift+click"})," on the ",(0,r.jsx)(n.strong,{children:"No Trace"}),"  button of the debugger in order to get out of it. Any subsequent calls to ",(0,r.jsx)(n.strong,{children:"TRACE"})," within the process will be ignored."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following code expects the process variable BUILD_LANG to be equal to \u201CUS\u201D or \u201CFR\u201D. If this is not the case, it calls the project method DEBUG:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0Case of\n\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdName:=[Commands]CM US Name\n\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdName:=[Commands]CM FR Name\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DEBUG("Unexpected BUILD_LANG value")\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.p,{children:"The DEBUG project method is listed here:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// DEBUG Project Method\n\xa0\xa0// DEBUG (Text)\n\xa0\xa0// DEBUG (Optional Debug Information)\n\xa0\n\xa0var $1 : Text\n\xa0\n\xa0If(\u25CAvbDebugOn)\xa0// Interprocess variable set in the On Startup Method\n\xa0\xa0\xa0\xa0If(Is compiled mode)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Count parameters>=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT($1+Char(13)+"Call Designer at x911")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"157"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);