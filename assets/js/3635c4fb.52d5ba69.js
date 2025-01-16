"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70529"],{493254:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/is-waiting-mouse-up","title":"Is waiting mouse up","description":"Is waiting mouse up  : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/is-waiting-mouse-up.md","sourceDirName":"commands-legacy","slug":"/commands/is-waiting-mouse-up","permalink":"/docs/commands/is-waiting-mouse-up","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-waiting-mouse-up.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-waiting-mouse-up","title":"Is waiting mouse up","slug":"/commands/is-waiting-mouse-up","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"In header","permalink":"/docs/commands/in-header"},"next":{"title":"Outside call","permalink":"/docs/commands/outside-call"}}'),s=t("785893"),o=t("250065");let r={id:"is-waiting-mouse-up",title:"Is waiting mouse up",slug:"/commands/is-waiting-mouse-up",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is waiting mouse up"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True if the object is waiting for a mouse up event, False otherwise"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," command returns ",(0,s.jsx)(n.strong,{children:"True"})," if the current object has been clicked and the mouse button has not been released, while the parent window has the focus. Otherwise, it returns ",(0,s.jsx)(n.strong,{children:"False"}),", in particular if the parent window has lost the focus before the mouse button was released."]}),"\n",(0,s.jsxs)(n.p,{children:["The command must be called in the context of the current object. It is designed to be used in conjunction with the On Mouse Up form event which is available for picture fields and variables. It allows your code to handle the cases where the user clicked and started to move something within a form object picture, and this action is interrupted by an external event, such as an alert dialog box. In this case, the internal state of the object can be suspended indefinitely because it is waiting for a mouse up event which will never occur. To prevent this issue, you must protect your mouse moving code within a ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," command which makes you sure that it is executed in a valid context."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following code can be used to manage a mouse tracking feature in a picture object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Object method of the picture object\n\xa0var vLtracking : Integer\xa0//flag for tracking mode\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is waiting mouse up)\xa0//the mouse button is still not released\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=1\xa0//we are in tracking mode\n\xa0\xa0//... Write here initialization code for the tracking feature\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Mouse Move)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vLtracking=1)\xa0//we are in tracking mode\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Is waiting mouse up))\xa0//we'll never have the mouse up\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//stop the tracking mode\n\xa0\xa0//... Write here the code for handling or canceling user tracking action\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0//the object is still waiting for a mouse up\n\xa0\xa0//... Write here the code for the tracking\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Mouse Up)\xa0//the mouse button was released\n\xa0\xa0//... Write here the code to complete the tracking action\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//end of the tracking mode\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1422"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);