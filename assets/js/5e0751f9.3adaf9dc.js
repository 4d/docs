"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74729"],{68564:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/current-date","title":"Current date","description":"Current date {( * )} : Date","source":"@site/versioned_docs/version-20-R7/commands-legacy/current-date.md","sourceDirName":"commands-legacy","slug":"/commands/current-date","permalink":"/docs/commands/current-date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-date","title":"Current date","slug":"/commands/current-date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Add to date","permalink":"/docs/commands/add-to-date"},"next":{"title":"Current time","permalink":"/docs/commands/current-time"}}'),r=n("785893"),a=n("250065");let d={id:"current-date",title:"Current date",slug:"/commands/current-date",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Current date"})," {( * )} : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Returns the current date from the server"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Date"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Current date"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The Current date command returns the current date as kept by the system clock.If you use the asterisk (*) parameter when executing this function on a 4D Client machine, it returns the current date from the server."}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"The following example displays an alert box containing the current date:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ALERT("The date is "+String(Current date)+".")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"If you write an application for the international market, you may need to know if the version of 4D that you run works with dates formatted as MM/DD/YYYY (US version) or DD/MM/YYYY (French version). This is useful to know for customizing data entry fields."}),"\n",(0,r.jsx)(t.p,{children:"The following project method allows you to do so:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// Sys date format global function\n\xa0\xa0// Sys date format -> String\n\xa0\xa0// Sys date format -> Default 4D data format\n\xa0\n\xa0C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)\n\xa0var $1;$vlPos : Integer\n\xa0var $vdDate : Date\n\xa0\n\xa0\xa0// Get a Date value where the month, day and year values are all different\n\xa0$vdDate:=Current date\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vsMonth:=String(Month of($vdDate))\n\xa0\xa0\xa0\xa0$vsDay:=String(Day of($vdDate))\n\xa0\xa0\xa0\xa0$vsYear:=String(Year of($vdDate)%100)\n\xa0\xa0\xa0\xa0If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vOK:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdDate:=$vdDate+1\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vOK:=1\n\xa0\xa0\xa0\xa0End if\n\xa0Until(vOK=1)\n\xa0$0:=""\xa0// Initialize function result\n\xa0$vsDate:=String($vdDate)\n\xa0$vlPos:=Position("/";$vsDate)\xa0// Find the first / separator in the string ../../..\n\xa0$vsMDY:=Substring($vsDate;1;$vlPos-1)\xa0// Extract the first digits from the date\n\xa0$vsDate:=Substring($vsDate;$vlPos+1)\xa0// Eliminate the first digits as well as the first / separator\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsMDY=$vsMonth)\xa0// The digits express the month\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="MM"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsDay)\xa0// The digits express the day\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="DD"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsYear)\xa0// The digits express the year\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="YYYY"\n\xa0End case\n\xa0$0:=$0+"/"\xa0// Start building the function result\n\xa0$vlPos:=Position("/";$vsDate)\xa0// Find the second separator in the string ../..\n\xa0$vsMDY:=Substring($vsDate;1;$vlPos-1)\xa0// Extract the next digits from the date\n\xa0$vsDate:=Substring($vsDate;$vlPos+1)\xa0// Reduce the string to the last digits from the date\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsMDY=$vsMonth)\xa0// The digits express the month\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"MM"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsDay)\xa0// The digits express the day\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"DD"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsYear)\xa0// The digits express the year\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"YYYY"\n\xa0End case\n\xa0$0:=$0+"/"\xa0// Pursue building the function result\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsDate=$vsMonth)\xa0// The digits express the month\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"MM"\n\xa0\xa0\xa0\xa0:($vsDate=$vsDay)\xa0// The digits express the day\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"DD"\n\xa0\xa0\xa0\xa0:($vsDate=$vsYear)\xa0// The digits express the year\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"YYYY"\n\xa0End case\n\xa0\xa0// At this point $0 is equal to MM/DD/YYYY or DD/MM/YYYY or...\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/day-of",children:"Day of"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/month-of",children:"Month of"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/year-of",children:"Year of"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"33"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);