"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92828"],{818719:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"commands/theme/Backup_theme","title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7","description":"|                                                                                                                         |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Backup.md","sourceDirName":"commands/theme","slug":"/commands/theme/Backup","permalink":"/docs/ja/20-R8/commands/theme/Backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FBackup.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Backup_theme","title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7","slug":"/commands/theme/Backup"},"sidebar":"docs","previous":{"title":"TEXT TO ARRAY","permalink":"/docs/ja/20-R8/commands/text-to-array"},"next":{"title":"BACKUP","permalink":"/docs/ja/20-R8/commands/backup"}}'),t=r("785893"),c=r("250065");let d={id:"Backup_theme",title:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",slug:"/commands/theme/Backup"},o=void 0,i={},l=[];function a(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{})})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/ja/20-R8/commands/backup",children:(0,t.jsx)(s.strong,{children:"BACKUP"})}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/backup-info",children:[(0,t.jsx)(s.strong,{children:"BACKUP INFO"})," ( ",(0,t.jsx)(s.em,{children:"selector"})," ; ",(0,t.jsx)(s.em,{children:"info1"})," ; ",(0,t.jsx)(s.em,{children:"info2"})," )"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/ja/20-R8/commands/check-log-file",children:(0,t.jsx)(s.strong,{children:"CHECK LOG FILE"})}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/integrate-mirror-log-file",children:[(0,t.jsx)(s.strong,{children:"INTEGRATE MIRROR LOG FILE"})," ( ",(0,t.jsx)(s.em,{children:"pathName"})," ; ",(0,t.jsx)(s.em,{children:"operationNum"})," {; ",(0,t.jsx)(s.em,{children:"mode"})," {; ",(0,t.jsx)(s.em,{children:"errObject"}),"}} )"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/log-file",children:[(0,t.jsx)(s.strong,{children:"Log file"}),"  : Text"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/log-file-to-json",children:[(0,t.jsx)(s.strong,{children:"LOG FILE TO JSON"})," ( ",(0,t.jsx)(s.em,{children:"destFolderPath"})," {; ",(0,t.jsx)(s.em,{children:"maxSize"})," {; ",(0,t.jsx)(s.em,{children:"logPath"})," {; ",(0,t.jsx)(s.em,{children:"fieldAtt"}),"}}} )"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/new-log-file",children:[(0,t.jsx)(s.strong,{children:"New log file"})," : Text"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/restore",children:[(0,t.jsx)(s.strong,{children:"RESTORE"})," {( ",(0,t.jsx)(s.em,{children:"archivePath"})," {; ",(0,t.jsx)(s.em,{children:"destFolderPath"}),"} )}"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/restore-info",children:[(0,t.jsx)(s.strong,{children:"RESTORE INFO"})," ( ",(0,t.jsx)(s.em,{children:"selector"})," ; ",(0,t.jsx)(s.em,{children:"info1"})," ; ",(0,t.jsx)(s.em,{children:"info2"})," )"]}),(0,t.jsx)(s.br,{})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"/docs/ja/20-R8/commands/select-log-file",children:[(0,t.jsx)(s.strong,{children:"SELECT LOG FILE"})," ( ",(0,t.jsx)(s.em,{children:"logFile"})," )",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"SELECT LOG FILE"})," ( * )"]}),(0,t.jsx)(s.br,{})]})})]})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return d}});var n=r(667294);let t={},c=n.createContext(t);function d(e){let s=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);