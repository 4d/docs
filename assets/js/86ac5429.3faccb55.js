"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52521"],{324263:function(e,s,t){t.r(s),t.d(s,{default:()=>l,frontMatter:()=>c,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"commands/theme/Date_and_Time_theme","title":"Date and Time","description":"||","source":"@site/versioned_docs/version-20-R8/commands/theme/Date_and_Time.md","sourceDirName":"commands/theme","slug":"/commands/theme/Date-and-Time","permalink":"/docs/20-R8/commands/theme/Date-and-Time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FDate_and_Time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Date_and_Time_theme","title":"Date and Time","slug":"/commands/theme/Date-and-Time"},"sidebar":"docs","previous":{"title":"On Web Legacy Close Session database method","permalink":"/docs/20-R8/commands/on-web-legacy-close-session-database-method"},"next":{"title":"Add to date","permalink":"/docs/20-R8/commands/add-to-date"}}'),r=t("785893"),d=t("250065");let c={id:"Date_and_Time_theme",title:"Date and Time",slug:"/commands/theme/Date-and-Time"},i=void 0,a={},o=[];function m(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/add-to-date",children:[(0,r.jsx)(s.strong,{children:"Add to date"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ; ",(0,r.jsx)(s.em,{children:"years"})," ; ",(0,r.jsx)(s.em,{children:"months"})," ; ",(0,r.jsx)(s.em,{children:"days"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/current-date",children:[(0,r.jsx)(s.strong,{children:"Current date"})," {( * )} : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/current-time",children:[(0,r.jsx)(s.strong,{children:"Current time"})," {( * )} : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/date",children:[(0,r.jsx)(s.strong,{children:"Date"})," ( ",(0,r.jsx)(s.em,{children:"expression"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/day-number",children:[(0,r.jsx)(s.strong,{children:"Day number"})," ( ",(0,r.jsx)(s.em,{children:"aDate"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/day-of",children:[(0,r.jsx)(s.strong,{children:"Day of"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/milliseconds",children:[(0,r.jsx)(s.strong,{children:"Milliseconds"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/month-of",children:[(0,r.jsx)(s.strong,{children:"Month of"})," ( ",(0,r.jsx)(s.em,{children:"aDate"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/set-default-century",children:[(0,r.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,r.jsx)(s.em,{children:"century"})," {; ",(0,r.jsx)(s.em,{children:"pivotYear"}),"} )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/tickcount",children:[(0,r.jsx)(s.strong,{children:"Tickcount"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/time",children:[(0,r.jsx)(s.strong,{children:"Time"})," ( ",(0,r.jsx)(s.em,{children:"timeValue"})," ) : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/time-string",children:[(0,r.jsx)(s.strong,{children:"Time string"})," ( ",(0,r.jsx)(s.em,{children:"seconds"})," ) : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/timestamp",children:[(0,r.jsx)(s.strong,{children:"Timestamp"})," : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/20-R8/commands/year-of",children:[(0,r.jsx)(s.strong,{children:"Year of"})," ( ",(0,r.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})})]})]})}function l(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return c}});var n=t(667294);let r={},d=n.createContext(r);function c(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);