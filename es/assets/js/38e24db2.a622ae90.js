"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63944"],{168385:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/theme/Date_and_Time_theme","title":"Fechas y horas","description":"|                                                                                                             |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Date_and_Time.md","sourceDirName":"commands/theme","slug":"/commands/theme/Date-and-Time","permalink":"/docs/es/commands/theme/Date-and-Time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FDate_and_Time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Date_and_Time_theme","title":"Fechas y horas","slug":"/commands/theme/Date-and-Time"},"sidebar":"docs","previous":{"title":"On Web Legacy Close Session database method","permalink":"/docs/es/commands/on-web-legacy-close-session-database-method"},"next":{"title":"Add to date","permalink":"/docs/es/commands/add-to-date"}}'),r=n("785893"),d=n("250065");let c={id:"Date_and_Time_theme",title:"Fechas y horas",slug:"/commands/theme/Date-and-Time"},i=void 0,o={},a=[];function h(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/add-to-date",children:[(0,r.jsx)(s.strong,{children:"Add to date"})," ( ",(0,r.jsx)(s.em,{children:"fecha"})," ; ",(0,r.jsx)(s.em,{children:"a\xf1os"})," ; ",(0,r.jsx)(s.em,{children:"meses"})," ; ",(0,r.jsx)(s.em,{children:"d\xedas"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/current-date",children:[(0,r.jsx)(s.strong,{children:"Current date"})," {( * )} : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/current-time",children:[(0,r.jsx)(s.strong,{children:"Current time"})," {( * )} : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/date",children:[(0,r.jsx)(s.strong,{children:"Date"})," ( ",(0,r.jsx)(s.em,{children:"expresion"})," ) : Date"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/day-number",children:[(0,r.jsx)(s.strong,{children:"Day number"})," ( ",(0,r.jsx)(s.em,{children:"fecha"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/day-of",children:[(0,r.jsx)(s.strong,{children:"Day of"})," ( ",(0,r.jsx)(s.em,{children:"fecha"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/milliseconds",children:[(0,r.jsx)(s.strong,{children:"Milliseconds"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/month-of",children:[(0,r.jsx)(s.strong,{children:"Month of"})," ( ",(0,r.jsx)(s.em,{children:"fecha"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/set-default-century",children:[(0,r.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,r.jsx)(s.em,{children:"siglo"})," {; ",(0,r.jsx)(s.em,{children:"a\xf1oPivote"}),"} )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/tickcount",children:[(0,r.jsx)(s.strong,{children:"Tickcount"}),"  : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/time",children:[(0,r.jsx)(s.strong,{children:"Time"})," ( ",(0,r.jsx)(s.em,{children:"valHora"})," ) : Time"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/time-string",children:[(0,r.jsx)(s.strong,{children:"Time string"})," ( ",(0,r.jsx)(s.em,{children:"segundos"})," ) : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/timestamp",children:[(0,r.jsx)(s.strong,{children:"Timestamp"})," : Text"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/es/commands/year-of",children:[(0,r.jsx)(s.strong,{children:"Year of"})," ( ",(0,r.jsx)(s.em,{children:"fecha"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return c}});var t=n(667294);let r={},d=t.createContext(r);function c(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);