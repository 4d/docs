"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96027"],{609538:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>a,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"commands/theme/Records_theme","title":"\u30EC\u30B3\u30FC\u30C9","description":"|                                                                                                       |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/theme/Records.md","sourceDirName":"commands/theme","slug":"/commands/theme/Records","permalink":"/docs/ja/20-R7/commands/theme/Records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FRecords.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"Records_theme","title":"\u30EC\u30B3\u30FC\u30C9","slug":"/commands/theme/Records"},"sidebar":"docs","previous":{"title":"UNLOAD RECORD","permalink":"/docs/ja/20-R7/commands/unload-record"},"next":{"title":"CREATE RECORD","permalink":"/docs/ja/20-R7/commands/create-record"}}'),n=s("785893"),c=s("250065");let t={id:"Records_theme",title:"\u30EC\u30B3\u30FC\u30C9",slug:"/commands/theme/Records"},o=void 0,a={},l=[];function i(e){let r={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{})})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/create-record",children:[(0,n.jsx)(r.strong,{children:"CREATE RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/delete-record",children:[(0,n.jsx)(r.strong,{children:"DELETE RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/display-record",children:[(0,n.jsx)(r.strong,{children:"DISPLAY RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/duplicate-record",children:[(0,n.jsx)(r.strong,{children:"DUPLICATE RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/goto-record",children:[(0,n.jsx)(r.strong,{children:"GOTO RECORD"})," ( {",(0,n.jsx)(r.em,{children:"aTable"})," ;} ",(0,n.jsx)(r.em,{children:"record"})," )"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/is-new-record",children:[(0,n.jsx)(r.strong,{children:"Is new record"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Boolean"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/is-record-loaded",children:[(0,n.jsx)(r.strong,{children:"Is record loaded"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Boolean"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/modified-record",children:[(0,n.jsx)(r.strong,{children:"Modified record"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Boolean"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/pop-record",children:[(0,n.jsx)(r.strong,{children:"POP RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/push-record",children:[(0,n.jsx)(r.strong,{children:"PUSH RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/record-number",children:[(0,n.jsx)(r.strong,{children:"Record number"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Integer"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/records-in-table",children:[(0,n.jsx)(r.strong,{children:"Records in table"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Integer"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/save-record",children:[(0,n.jsx)(r.strong,{children:"SAVE RECORD"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )}"]}),(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/20-R7/commands/sequence-number",children:[(0,n.jsx)(r.strong,{children:"Sequence number"})," {( ",(0,n.jsx)(r.em,{children:"aTable"})," )} : Integer"]}),(0,n.jsx)(r.br,{})]})})]})]})}function h(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return t}});var d=s(667294);let n={},c=d.createContext(n);function t(e){let r=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(c.Provider,{value:r},e.children)}}}]);