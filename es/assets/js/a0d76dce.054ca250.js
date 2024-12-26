"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44229"],{96162:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>a});var o=JSON.parse('{"id":"commands-legacy/on-drop-database-method","title":"On Drop database method","description":"On Drop database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-drop-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-drop-database-method","permalink":"/docs/es/commands/on-drop-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-drop-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-drop-database-method","title":"On Drop database method","slug":"/commands/on-drop-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Startup database method","permalink":"/docs/es/commands/on-backup-startup-database-method"},"next":{"title":"On Exit database method","permalink":"/docs/es/commands/on-exit-database-method"}}'),d=t("785893"),s=t("250065");let a={id:"on-drop-database-method",title:"On Drop database method",slug:"/commands/on-drop-database-method",displayed_sidebar:"docs"},i=void 0,r={},c=[{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"On Drop database method"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Does not require any parameters"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h4,{id:""}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"On Drop database method"})," is available in local or remote 4D applications."]}),"\n",(0,d.jsx)(n.p,{children:"This database method is automatically executed in the case of objects being dropped in the 4D application outside of any form or windows context. Different drop actions are supported, depending on the platform and the application type:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Action"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Platform(s)"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Comment"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Drop in an empty area of the MDI window"}),(0,d.jsx)(n.td,{children:"Windows"}),(0,d.jsxs)(n.td,{children:["Not available when the database is executed in SDI mode since there is no MDI window in this context (see ",(0,d.jsx)(n.em,{children:"SDI mode on Windows"})," section)."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Drop on the 4D icon in the Dock"}),(0,d.jsx)(n.td,{children:"macOS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Drop on the 4D icon in the system desktop"}),(0,d.jsx)(n.td,{children:"Windows(*) & macOS"}),(0,d.jsxs)(n.td,{children:["The ",(0,d.jsx)(n.strong,{children:"On Drop database method"})," is only called when the application is already launched, except in the case of applications merged with 4D Desktop. In this case, the database method is called even when the application is not launched. This means that it is possible to define custom document signatures."]})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"(*) Not supported with 4D Developer 64-bit on Windows because this action launches a new application instance (system feature)."}),"\n",(0,d.jsxs)(n.p,{children:["On Mac, you need to hold down the ",(0,d.jsx)(n.strong,{children:"Option"}),"+",(0,d.jsx)(n.strong,{children:"Command"})," keys during the drop in order for the database method to be called."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"This example can be used to open a 4D Write document that is dropped outside of any form:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//On Drop database method\n\xa0droppedFile:=Get file from pasteboard(1)\n\xa0If(Position(".4W7";droppedFile)=Length(droppedFile)-3)\n\xa0\xa0\xa0\xa0externalArea:=Open external window(100;100;500;500;0;droppedFile;"_4D Write")\n\xa0\xa0\xa0\xa0WR OPEN DOCUMENT(externalArea;droppedFile)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"Drag and Drop"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var o=t(667294);let d={},s=o.createContext(d);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);