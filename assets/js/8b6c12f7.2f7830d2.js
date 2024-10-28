"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40288],{205247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(474848),o=t(28453);const r={id:"filter-event",title:"FILTER EVENT",slug:"/commands/filter-event",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/filter-event",title:"FILTER EVENT",description:"FILTER EVENT",source:"@site/versioned_docs/version-20-R7/commands-legacy/filter-event.md",sourceDirName:"commands-legacy",slug:"/commands/filter-event",permalink:"/docs/commands/filter-event",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffilter-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"filter-event",title:"FILTER EVENT",slug:"/commands/filter-event",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Asserted",permalink:"/docs/commands/asserted"},next:{title:"Get assert enabled",permalink:"/docs/commands/get-assert-enabled"}},i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"FILTER EVENT"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Does not require any parameters"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["You call the ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"})," command from within an event-handling project method installed using the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["If an event-handling method calls ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"}),", the current event is not passed to 4D."]}),"\n",(0,s.jsx)(n.p,{children:"This command removes the current event (i.e., click, keystroke) from the event queue, so 4D will not perform any additional treatment to the one you made in the event-handling project method."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WARNING:"})," Do not create an event-handling method that only calls the ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"})," command, because all the events are going to be ignored by 4D. When you have an event-handling method with only the ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"})," command, type Ctrl+Shift+Backspace (on Windows) or Command-Option-Shift-Control-Backspace (on Macintosh). This converts the On Event Call process into a normal process that does not get any events at all."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Special case:"})," The ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"})," command can also be used within a standard output form method when the form is displayed using the ",(0,s.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," commands. In this specific case, the ",(0,s.jsx)(n.strong,{children:"FILTER EVENT"})," command allows you to filter double-clicks on the records (and in this way execute actions other than the opening of records in page mode)."]}),"\n",(0,s.jsx)(n.p,{children:"To do this, place the following lines in the output form method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Double Clicked)\n\xa0\xa0\xa0\xa0FILTER EVENT\n\xa0\xa0\xa0\xa0...\xa0//Process the double-click\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See example for the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(296540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);