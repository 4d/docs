"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75426"],{317718:function(e,s,r){r.r(s),r.d(s,{default:()=>l,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/theme/Date_and_Time_theme","title":"Dates et heures","description":"|                                                                                                             |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Date_and_Time.md","sourceDirName":"commands/theme","slug":"/commands/theme/Date-and-Time","permalink":"/docs/fr/commands/theme/Date-and-Time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FDate_and_Time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Date_and_Time_theme","title":"Dates et heures","slug":"/commands/theme/Date-and-Time"},"sidebar":"docs","previous":{"title":"On Web Legacy Close Session database method","permalink":"/docs/fr/commands/on-web-legacy-close-session-database-method"},"next":{"title":"Add to date","permalink":"/docs/fr/commands/add-to-date"}}'),n=r("785893"),d=r("250065");let c={id:"Date_and_Time_theme",title:"Dates et heures",slug:"/commands/theme/Date-and-Time"},i=void 0,o={},a=[];function m(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.th,{})})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/add-to-date",children:[(0,n.jsx)(s.strong,{children:"Add to date"})," ( ",(0,n.jsx)(s.em,{children:"date"})," ; ",(0,n.jsx)(s.em,{children:"ann\xe9es"})," ; ",(0,n.jsx)(s.em,{children:"mois"})," ; ",(0,n.jsx)(s.em,{children:"jours"})," ) : Date"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/current-date",children:[(0,n.jsx)(s.strong,{children:"Current date"})," {( * )} : Date"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/current-time",children:[(0,n.jsx)(s.strong,{children:"Current time"})," {( * )} : Time"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/date",children:[(0,n.jsx)(s.strong,{children:"Date"})," ( ",(0,n.jsx)(s.em,{children:"expression"})," ) : Date"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/day-number",children:[(0,n.jsx)(s.strong,{children:"Day number"})," ( ",(0,n.jsx)(s.em,{children:"laDate"})," ) : Integer"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/day-of",children:[(0,n.jsx)(s.strong,{children:"Day of"})," ( ",(0,n.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/milliseconds",children:[(0,n.jsx)(s.strong,{children:"Milliseconds"}),"  : Integer"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/month-of",children:[(0,n.jsx)(s.strong,{children:"Month of"})," ( ",(0,n.jsx)(s.em,{children:"laDate"})," ) : Integer"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/set-default-century",children:[(0,n.jsx)(s.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,n.jsx)(s.em,{children:"si\xe8cle"})," {; ",(0,n.jsx)(s.em,{children:"anPivot"}),"} )"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/tickcount",children:[(0,n.jsx)(s.strong,{children:"Tickcount"}),"  : Integer"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/time",children:[(0,n.jsx)(s.strong,{children:"Time"})," ( ",(0,n.jsx)(s.em,{children:"valHeure"})," ) : Time"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/time-string",children:[(0,n.jsx)(s.strong,{children:"Time string"})," ( ",(0,n.jsx)(s.em,{children:"secondes"})," ) : Text"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/timestamp",children:[(0,n.jsx)(s.strong,{children:"Timestamp"})," : Text"]}),(0,n.jsx)(s.br,{})]})}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.a,{href:"/docs/fr/commands/year-of",children:[(0,n.jsx)(s.strong,{children:"Year of"})," ( ",(0,n.jsx)(s.em,{children:"date"})," ) : Integer"]}),(0,n.jsx)(s.br,{})]})})]})]})}function l(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return c}});var t=r(667294);let n={},d=t.createContext(n);function c(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);