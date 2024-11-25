"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97152"],{480697:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>s});var a=JSON.parse('{"id":"Backup/overview","title":"Backup and Restore","description":"4D includes a full application backup and restore module.","source":"@site/versioned_docs/version-20/Backup/overview.md","sourceDirName":"Backup","slug":"/Backup/overview","permalink":"/docs/20/Backup/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"overview","title":"Backup and Restore"},"sidebar":"docs","previous":{"title":"Encrypt Page","permalink":"/docs/20/MSC/encrypt"},"next":{"title":"Backup","permalink":"/docs/20/Backup/backup"}}'),i=t("785893"),o=t("250065");let s={id:"overview",title:"Backup and Restore"},r=void 0,c={},l=[];function u(e){let n={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"4D includes a full application backup and restore module."}),"\n",(0,i.jsx)(n.p,{children:"This module allows backing up an application currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Settings."}),"\n",(0,i.jsx)(n.p,{children:"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface."}),"\n",(0,i.jsx)(n.p,{children:"Applications can be restored automatically when a damaged application is opened."}),"\n",(0,i.jsxs)(n.p,{children:["Also, the integrated backup module can take advantage of the .journal file (",(0,i.jsx)(n.a,{href:"/docs/20/Backup/log",children:"database log file"}),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. You can view the journal file contents at any time."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. These solutions can be based on the following mechanisms and technologies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)"}),"\n",(0,i.jsx)(n.li,{children:"Synchronization using SQL"}),"\n",(0,i.jsx)(n.li,{children:"Synchronization using HTTP (/rest/url)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For a general overview of 4D's security features, see the ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(667294);let i={},o=a.createContext(i);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);