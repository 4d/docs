"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50071"],{126837:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-timer","title":"SET TIMER","description":"SET TIMER ( tickCount )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-timer.md","sourceDirName":"commands-legacy","slug":"/commands/set-timer","permalink":"/docs/commands/set-timer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-timer","title":"SET TIMER","slug":"/commands/set-timer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Right click","permalink":"/docs/commands/right-click"},"next":{"title":"Forms","permalink":"/docs/category/forms"}}'),r=t("785893"),o=t("250065");let i={id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMER"})," ( ",(0,r.jsx)(n.em,{children:"tickCount"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tickCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tickcount or -1=Trigger as soon as possible"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET TIMER"})," command activates the On Timer form event and sets, for the current form and process, the number of ticks elapsed between each On Timer form event."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," For more information about this form event, please refer to the description of the command ",(0,r.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If this command is called in a context in which it is not displaying a form, it will have no effect."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When the ",(0,r.jsx)(n.strong,{children:"SET TIMER"})," command is executed in the context of a subform (form method of the subform), the On Timer event is generated in the subform and not at the parent form level."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass -1 in the ",(0,r.jsx)(n.em,{children:"tickCount"}),' parameter, the command will activate the On Timer form event "as soon as possible", in other words, as soon as the 4D application hands over control to the event manager. More particularly, this means that you can make sure that a form is completely displayed before beginning processing (application fluidity).']}),"\n",(0,r.jsxs)(n.p,{children:["To procedurally disable the triggering of the On Timer form event, call ",(0,r.jsx)(n.strong,{children:"SET TIMER"})," again and pass 0 in ",(0,r.jsx)(n.em,{children:"tickCount"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s imagine that you want, when a form is displayed on screen, the computer to beep every three seconds. To do so, write the following form method:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0SET TIMER(60*3)\n\xa0End if\n\xa0\n\xa0If(Form event code=On Timer)\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/redraw",children:"REDRAW"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);