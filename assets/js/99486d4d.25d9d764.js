"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31814"],{566567:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"Backup/overview","title":"Overview","description":"4D includes a full application backup and restore module.","source":"@site/versioned_docs/version-19/Backup/overview.md","sourceDirName":"Backup","slug":"/Backup/overview","permalink":"/docs/19/Backup/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"overview","title":"Overview"},"sidebar":"docs","previous":{"title":"Encrypt Page","permalink":"/docs/19/MSC/encrypt"},"next":{"title":"Backup","permalink":"/docs/19/Backup/backup"}}'),a=t("785893"),o=t("250065");let r={id:"overview",title:"Overview"},s=void 0,l={},c=[];function u(e){let n={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"4D includes a full application backup and restore module."}),"\n",(0,a.jsx)(n.p,{children:"This module allows backing up an application currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Settings."}),"\n",(0,a.jsx)(n.p,{children:"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface."}),"\n",(0,a.jsx)(n.p,{children:"Applications can be restored automatically when a damaged application is opened."}),"\n",(0,a.jsxs)(n.p,{children:["Also, the integrated backup module can take advantage of the .journal file (",(0,a.jsx)(n.a,{href:"/docs/19/Backup/log",children:"database log file"}),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. You can view the journal file contents at any time."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. These solutions can be based on the following mechanisms and technologies:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)"}),"\n",(0,a.jsx)(n.li,{children:"Synchronization using SQL"}),"\n",(0,a.jsx)(n.li,{children:"Synchronization using HTTP (/rest/url)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For a general overview of 4D's security features, see the ",(0,a.jsx)(n.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(667294);let a={},o=i.createContext(a);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);