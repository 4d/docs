"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25242"],{189406:function(e,s,t){t.r(s),t.d(s,{default:()=>l,frontMatter:()=>c,metadata:()=>n,assets:()=>i,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"commands/theme/Date_and_Time_theme","title":"\u65E5\u4ED8\u3068\u6642\u9593","description":"|                                                                                                             |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Date_and_Time.md","sourceDirName":"commands/theme","slug":"/commands/theme/Date-and-Time","permalink":"/docs/ja/commands/theme/Date-and-Time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FDate_and_Time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Date_and_Time_theme","title":"\u65E5\u4ED8\u3068\u6642\u9593","slug":"/commands/theme/Date-and-Time"},"sidebar":"docs","previous":{"title":"On Web Legacy Close Session database method","permalink":"/docs/ja/commands/on-web-legacy-close-session-database-method"},"next":{"title":"Add to date","permalink":"/docs/ja/commands/add-to-date"}}'),r=t("785893"),d=t("250065");let c={id:"Date_and_Time_theme",title:"\u65E5\u4ED8\u3068\u6642\u9593",slug:"/commands/theme/Date-and-Time"},a=void 0,i={},o=[];function m(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/add-to-date",children:[(0,r.jsx)(s.strong,{children:"Add to date"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ; ",(0,r.jsx)(s.em,{children:"years"})," ; ",(0,r.jsx)(s.em,{children:"months"})," ; ",(0,r.jsx)(s.em,{children:"days"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/current-date",children:[(0,r.jsx)(s.strong,{children:"Current date"})," {( * )} : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/current-time",children:[(0,r.jsx)(s.strong,{children:"Current time"})," {( * )} : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/date",children:[(0,r.jsx)(s.strong,{children:"Date"})," ( ",(0,r.jsx)(s.em,{children:"expression"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/day-number",children:[(0,r.jsx)(s.strong,{children:"Day number"})," ( ",(0,r.jsx)(s.em,{children:"aDate"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/day-of",children:[(0,r.jsx)(s.strong,{children:"Day of"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/milliseconds",children:[(0,r.jsx)(s.strong,{children:"Milliseconds"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/month-of",children:[(0,r.jsx)(s.strong,{children:"Month of"})," ( ",(0,r.jsx)(s.em,{children:"aDate"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/set-default-century",children:[(0,r.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,r.jsx)(s.em,{children:"century"})," {; ",(0,r.jsx)(s.em,{children:"pivotYear"}),"} )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/tickcount",children:[(0,r.jsx)(s.strong,{children:"Tickcount"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/time",children:[(0,r.jsx)(s.strong,{children:"Time"})," ( ",(0,r.jsx)(s.em,{children:"timeValue"})," ) : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/time-string",children:[(0,r.jsx)(s.strong,{children:"Time string"})," ( ",(0,r.jsx)(s.em,{children:"seconds"})," ) : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/timestamp",children:[(0,r.jsx)(s.strong,{children:"Timestamp"})," : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/ja/commands/year-of",children:[(0,r.jsx)(s.strong,{children:"Year of"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})})]})]})}function l(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return c}});var n=t(667294);let r={},d=n.createContext(r);function c(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);