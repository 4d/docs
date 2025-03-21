"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11823"],{318806:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/theme/Pasteboard_theme","title":"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9","description":"|                                                                                                                             |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/theme/Pasteboard.md","sourceDirName":"commands/theme","slug":"/commands/theme/Pasteboard","permalink":"/docs/ja/20-R7/commands/theme/Pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FPasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"Pasteboard_theme","title":"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9","slug":"/commands/theme/Pasteboard"},"sidebar":"docs","previous":{"title":"PHP SET OPTION","permalink":"/docs/ja/20-R7/commands/php-set-option"},"next":{"title":"APPEND DATA TO PASTEBOARD","permalink":"/docs/ja/20-R7/commands/append-data-to-pasteboard"}}'),d=t("785893"),n=t("250065");let a={id:"Pasteboard_theme",title:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9",slug:"/commands/theme/Pasteboard"},o=void 0,c={},i=[];function l(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsx)(s.tr,{children:(0,d.jsx)(s.th,{})})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/append-data-to-pasteboard",children:[(0,d.jsx)(s.strong,{children:"APPEND DATA TO PASTEBOARD"})," ( ",(0,d.jsx)(s.em,{children:"dataType"})," ; ",(0,d.jsx)(s.em,{children:"data"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.a,{href:"/docs/ja/20-R7/commands/clear-pasteboard",children:(0,d.jsx)(s.strong,{children:"CLEAR PASTEBOARD"})}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/get-file-from-pasteboard",children:[(0,d.jsx)(s.strong,{children:"Get file from pasteboard"})," ( ",(0,d.jsx)(s.em,{children:"xIndex"})," ) : Text"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/get-pasteboard-data",children:[(0,d.jsx)(s.strong,{children:"GET PASTEBOARD DATA"})," ( ",(0,d.jsx)(s.em,{children:"dataType"})," ; ",(0,d.jsx)(s.em,{children:"data"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/get-pasteboard-data-type",children:[(0,d.jsx)(s.strong,{children:"GET PASTEBOARD DATA TYPE"})," ( ",(0,d.jsx)(s.em,{children:"4Dsignatures"})," ; ",(0,d.jsx)(s.em,{children:"nativeTypes"})," {; ",(0,d.jsx)(s.em,{children:"formatNames"}),"} )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/get-picture-from-pasteboard",children:[(0,d.jsx)(s.strong,{children:"GET PICTURE FROM PASTEBOARD"})," ( ",(0,d.jsx)(s.em,{children:"picture"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/get-text-from-pasteboard",children:[(0,d.jsx)(s.strong,{children:"Get text from pasteboard"}),"  : Text"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/pasteboard-data-size",children:[(0,d.jsx)(s.strong,{children:"Pasteboard data size"})," ( ",(0,d.jsx)(s.em,{children:"dataType"})," ) : Integer"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/set-file-to-pasteboard",children:[(0,d.jsx)(s.strong,{children:"SET FILE TO PASTEBOARD"})," ( ",(0,d.jsx)(s.em,{children:"filePath"})," {; *} )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/set-picture-to-pasteboard",children:[(0,d.jsx)(s.strong,{children:"SET PICTURE TO PASTEBOARD"})," ( ",(0,d.jsx)(s.em,{children:"picture"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/20-R7/commands/set-text-to-pasteboard",children:[(0,d.jsx)(s.strong,{children:"SET TEXT TO PASTEBOARD"})," ( ",(0,d.jsx)(s.em,{children:"text"})," )"]}),(0,d.jsx)(s.br,{})]})})]})]})}function h(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return o},a:function(){return a}});var r=t(667294);let d={},n=r.createContext(d);function a(e){let s=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);