"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20688"],{494409:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-set-root-folder","title":"WEB SET ROOT FOLDER","description":"WEB SET ROOT FOLDER ( rootFolder )","source":"@site/versioned_docs/version-20-R8/commands-legacy/web-set-root-folder.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-root-folder","permalink":"/docs/commands/web-set-root-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-root-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-set-root-folder","title":"WEB SET ROOT FOLDER","slug":"/commands/web-set-root-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET OPTION","permalink":"/docs/commands/web-set-option"},"next":{"title":"WEB START SERVER","permalink":"/docs/commands/web-start-server"}}'),s=t("785893"),o=t("250065");let d={id:"web-set-root-folder",title:"WEB SET ROOT FOLDER",slug:"/commands/web-set-root-folder",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB SET ROOT FOLDER"})," ( ",(0,s.jsx)(n.em,{children:"rootFolder"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rootFolder"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname of Web server root folder"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WEB SET ROOT FOLDER"})," command is used to modify the default root folder where 4D looks for the HTML files requested of the Web server."]}),"\n",(0,s.jsxs)(n.p,{children:["This command does not take the default root folder that may have been set in the Database Settings into account. For more information about this folder, please refer to the ",(0,s.jsx)(n.em,{children:"Connection Security"})," section."]}),"\n",(0,s.jsx)(n.p,{children:"The location of the root folder can be expression either in HTML syntax (URL type), or in system syntax (absolute path):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'HTML syntax: folder names are separated by a slash ("/"), regardless of the platform you use.'}),"\n",(0,s.jsxs)(n.li,{children:["System syntax: absolute pathname (\u201Clong name\u201D) respecting the syntax of the current platform, for example:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(Mac OS) Disk:Applications:myserv:folder"}),"\n",(0,s.jsx)(n.li,{children:"(Windows) C:\\Applications\\myserv\\folder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Web server will need to be restarted in order for the new root folder to be taken into account."}),"\n",(0,s.jsxs)(n.li,{children:["You can find out the location of the current root folder at any time using the ",(0,s.jsx)(n.a,{href:"/docs/commands/get-4d-folder",children:"Get 4D folder"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you specify an invalid pathname, an OS File manager error is generated. You can intercept the error with an ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method. If you display an alert or a message from within the error method, it will appear on the browser side."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-4d-folder",children:"Get 4D folder"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"634"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},o=r.createContext(s);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);