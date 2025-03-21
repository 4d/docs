"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49546"],{66370:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/hide-tool-bar","title":"HIDE TOOL BAR","description":"HIDE TOOL BAR","source":"@site/versioned_docs/version-20-R8/commands-legacy/hide-tool-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-tool-bar","permalink":"/docs/commands/hide-tool-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-tool-bar.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"hide-tool-bar","title":"HIDE TOOL BAR","slug":"/commands/hide-tool-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get window title","permalink":"/docs/commands/get-window-title"},"next":{"title":"HIDE WINDOW","permalink":"/docs/commands/hide-window"}}'),d=t("785893"),s=t("250065");let r={id:"hide-tool-bar",title:"HIDE TOOL BAR",slug:"/commands/hide-tool-bar",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"HIDE TOOL BAR"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Does not require any parameters"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"HIDE TOOL BAR"})," command handles the display of custom toolbars created by the ",(0,d.jsx)(n.a,{href:"/docs/commands/open-form-window",children:"Open form window"})," command for the current process."]}),"\n",(0,d.jsxs)(n.p,{children:["If a toolbar window has been created by the ",(0,d.jsx)(n.a,{href:"/docs/commands/open-form-window",children:"Open form window"})," command with the Toolbar form window option, the command hides this window. If the toolbar window was already hidden or if no window of this type has been created, the command does nothing."]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"On macOS, you have defined a custom toolbar and a standard window that has the Has full screen mode Mac option. When a standard window is maximized by a user while the toolbar window is displayed, you do not want the toolbar to overlap the maximized window."}),"\n",(0,d.jsxs)(n.p,{children:["To prevent this, in the On Resize form event of the standard window, you need to detect when the window has entered full screen mode and then call ",(0,d.jsx)(n.strong,{children:"HIDE TOOL BAR"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Resize)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($left;$top;$right;$bottom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Screen height=($bottom-$top))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIDE TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/show-tool-bar",children:"SHOW TOOL BAR"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"434"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var o=t(667294);let d={},s=o.createContext(d);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);