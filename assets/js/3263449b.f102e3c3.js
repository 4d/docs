"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61493"],{290263:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>a,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","description":"MOBILE APP REFRESH SESSIONS","source":"@site/versioned_docs/version-20-R7/commands-legacy/mobile-app-refresh-sessions.md","sourceDirName":"commands-legacy","slug":"/commands/mobile-app-refresh-sessions","permalink":"/docs/20-R7/commands/mobile-app-refresh-sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmobile-app-refresh-sessions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","slug":"/commands/mobile-app-refresh-sessions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load 4D View document","permalink":"/docs/20-R7/commands/load-4d-view-document"},"next":{"title":"Monitored activity","permalink":"/docs/20-R7/commands/monitored-activity"}}'),t=s("785893"),i=s("250065");let r={id:"mobile-app-refresh-sessions",title:"MOBILE APP REFRESH SESSIONS",slug:"/commands/mobile-app-refresh-sessions",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"MOBILE APP REFRESH SESSIONS"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Does not require any parameters"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"MOBILE APP REFRESH SESSIONS"})," command checks all mobile application session files located in the MobileApps folder of the server, and updates existing session contents in memory for any edited files."]}),"\n",(0,t.jsxs)(n.p,{children:['This command is designed to be used by 4D for iOS and 4D for Android developers to "force" the reload of user session information after their local files have been edited. For example, if a session needs to be reset, you can remove the session file and then call ',(0,t.jsx)(n.strong,{children:"MOBILE APP REFRESH SESSIONS"}),". For more information about mobile app sessions, please refer to the ",(0,t.jsx)(n.a,{href:"https://developer.4d.com/go-mobile",children:"Go Mobile documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The command checks the compliance of each session file in the MobileApps folder (json syntax, json schema, session data). If the file is compliant and has been modified, the corresponding session is refreshed in memory (if it already exists) with edited contents."}),"\n",(0,t.jsx)(n.p,{children:"If a session file is not valid or has been deleted, the corresponding session is removed from memory."}),"\n",(0,t.jsxs)(n.p,{children:["The command can return one of the following errors, that can be handled through ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," and ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/last-errors",children:"Last errors"}),"  commands:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Component name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Error code"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mobi"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"The json file location does not match its content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mobi"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"The json file is not correctly formed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mobi"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"The json file does not validate the json schema"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mobi"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Connection token is not compliant with the current information"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to reset all current sessions for all mobile applications:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $sessionsPath : Text\n\xa0$sessionsPath:=Get 4D folder(MobileApps folder)\n\xa0DELETE FOLDER($sessionsPath;Delete with contents)\n\xa0MOBILE APP REFRESH SESSIONS\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/on-mobile-app-authentication-database-method",children:"On Mobile App Authentication database method"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1596"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let t={},i=o.createContext(t);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);