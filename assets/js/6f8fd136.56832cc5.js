"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91227],{349165:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=s(474848),o=s(28453);const i={id:"hide-window",title:"HIDE WINDOW",slug:"/commands/hide-window",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/hide-window",title:"HIDE WINDOW",description:"HIDE WINDOW {( window )}",source:"@site/versioned_docs/version-20-R7/commands-legacy/hide-window.md",sourceDirName:"commands-legacy",slug:"/commands/hide-window",permalink:"/docs/commands/hide-window",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"hide-window",title:"HIDE WINDOW",slug:"/commands/hide-window",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"HIDE TOOL BAR",permalink:"/docs/commands/hide-tool-bar"},next:{title:"Is window maximized",permalink:"/docs/commands/is-window-maximized"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"HIDE WINDOW"})," {( ",(0,t.jsx)(n.em,{children:"window"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"window"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Window reference number or Current process frontmost window, if omitted"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"HIDE WINDOW"})," command hides the window whose number was passed in ",(0,t.jsx)(n.em,{children:"window"})," or, if this parameter is omitted, the current process frontmost window. For example, this command lets you display only the active window in a process that consists of several processes."]}),"\n",(0,t.jsx)(n.p,{children:"The window disappears from the screen but remains open. You can still apply any changes supported by 4D windows programmatically."}),"\n",(0,t.jsxs)(n.p,{children:["To display a window that was previously hidden by the ",(0,t.jsx)(n.strong,{children:"HIDE WINDOW"})," command:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.a,{href:"/docs/commands/show-window",children:"SHOW WINDOW"})," command and pass the window reference ID."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Process"})," page of the Runtime Explorer. Select the process in which the window is handled, then click on the ",(0,t.jsx)(n.strong,{children:"Show"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To hide all the windows of a process, use the ",(0,t.jsx)(n.a,{href:"/docs/commands/hide-process",children:"HIDE PROCESS"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example corresponds to a method of a button located in an input form. This button opens a dialog box in a new window that belongs to the same process. In this example, the user wants to hide the other windows of the process (an entry form and a tool palette) while displaying the dialog box. Once the dialog box is validated, other process windows are displayed again."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Object method for the "Information" button\n\xa0\n\xa0HIDE WINDOW(Entry)\xa0// Hide the entry window\n\xa0HIDE WINDOW(Palette)\xa0// Hide the palette\n\xa0$Infos:=Open window(20;100;500;400;8)\xa0// Create the information window\n\xa0...\xa0// Place here instructions that are dedicated to the dialog management\n\xa0CLOSE WINDOW($Infos)\xa0// Close the dialog\n\xa0SHOW WINDOW(Entry)\n\xa0SHOW WINDOW(Palette)\xa0// Display the other windows\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/show-window",children:"SHOW WINDOW"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(296540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);