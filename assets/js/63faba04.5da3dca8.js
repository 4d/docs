"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25591"],{649802:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/date","title":"Date","description":"Date ( expression ) : Date","source":"@site/versioned_docs/version-20-R8/commands-legacy/date.md","sourceDirName":"commands-legacy","slug":"/commands/date","permalink":"/docs/commands/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"date","title":"Date","slug":"/commands/date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current time","permalink":"/docs/commands/current-time"},"next":{"title":"Day number","permalink":"/docs/commands/day-number"}}'),a=n("785893"),r=n("250065");let d={id:"date",title:"Date",slug:"/commands/date",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Date"})," ( ",(0,a.jsx)(t.em,{children:"expression"})," ) : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"expression"}),(0,a.jsx)(t.td,{children:"Text, Date"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"String representing the date to be returned or Date expression"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Function result"}),(0,a.jsx)(t.td,{children:"Date"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Date expression"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The Date command evaluates ",(0,a.jsx)(t.em,{children:"expression"})," and returns a date."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:"expression"})," parameter format must follow either the ISO date format or the regional settings defined at the system level."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"ISO date format"}),(0,a.jsx)(t.br,{}),'\nThe string must be formatted as follows: "YYYY-MM-DD',(0,a.jsx)(t.strong,{children:"T"}),'HH:MM:SS", for example "2013-11-20T10:20:00". In this case, ',(0,a.jsx)(t.strong,{children:"Date"})," evaluates the ",(0,a.jsx)(t.em,{children:"expression"}),' parameter correctly, regardless of the current language settings. Decimal seconds, preceded by a period, are supported (e.g.: "2013-11-20T10:20:00.9854").',(0,a.jsx)(t.br,{}),"\nIf the ",(0,a.jsx)(t.em,{children:"expression"})," format does not precisely fit this ISO format, the date is evaluated as a short date format based on the regional settings of the system."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Regional settings"}),(0,a.jsx)(t.br,{}),"\nWhen the ",(0,a.jsx)(t.em,{children:"expression"})," does not match the ISO format, the regional settings defined in the operating system for a short date are used for the evaluation. For example, in the US version of 4D, by default the date must be in the order MM/DD/YY (month, day, year). The month and day can be one or two digits. The year can be two or four digits. If the year is two digits, then Date considers whether the date belongs to the 21st or 20th century based on the value entered. By default, the pivotal value is 30:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the value is greater than or equal to 30, 4D considers the century to be the 20th and adds 19 to the beginning of the value."}),"\n",(0,a.jsx)(t.li,{children:"If the value is less than 30, 4D considers the century to be the 21st and adds 20 to the beginning of the value."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This mechanism can be configured using the ",(0,a.jsx)(t.a,{href:"/docs/commands/set-default-century",children:"SET DEFAULT CENTURY"})," command.",(0,a.jsx)(t.br,{}),"\nThe following characters are valid date separators: slash (/), space, period (.), comma (,), and dash (-)."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:['If you pass an invalid date (such as "13/35/94" or "aa/12/94") in ',(0,a.jsx)(t.em,{children:"expression"}),", ",(0,a.jsx)(t.strong,{children:"Date"})," returns an empty date (00/00/00). It is your responsibility to verify that ",(0,a.jsx)(t.em,{children:"expression"})," is a valid date."]}),"\n",(0,a.jsxs)(t.li,{children:["If the ",(0,a.jsx)(t.em,{children:"expression"})," evaluates to undefined, ",(0,a.jsx)(t.strong,{children:"Date"})," returns an empty date (00/00/00). This is useful when you expect the result to be a date, even if it can be undefined (",(0,a.jsx)(t.em,{children:"e.g."})," an object attribute)."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," As of 4D v16 R6, dates can be stored in object attributes as date type values. In previous releases, they could only be stored as strings (for more information on this option, see the ",(0,a.jsx)(t.em,{children:"Compatibility page"}),' section, "Use date type instead of ISO date format in objects"). To know if an attribute contains a date stored as a string or as a date, you need to use the ',(0,a.jsx)(t.a,{href:"/docs/commands/value-type",children:"Value type"})," command (see last example)."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Date type expression"}),(0,a.jsx)(t.br,{}),"\nIf ",(0,a.jsx)(t.em,{children:"expression"})," is of date type, ",(0,a.jsx)(t.strong,{children:"Date"})," returns the date passed in the parameter 'as is'. This is particularly useful in the context of generic programming using pointers or object attributes."]}),"\n",(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(t.p,{children:["The following example uses a request box to prompt the user for a date. The string entered by the user is converted to a date and stored in the ",(0,a.jsx)(t.em,{children:"reqDate"})," variable:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0vdRequestedDate:=Date(Request("Please enter the date:";String(Current date)))\n\xa0If(OK=1)\n\xa0\xa0// Do something with the date now stored in vdRequestedDate\n\xa0End if\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.p,{children:"The following examples show various cases:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0vdDate:=Date("12/25/94")\xa0//returns 12/25/94 on a US system\n\xa0vdDate2:=Date("40/40/94")\xa0//00/00/00\n\xa0vdDate3:=Date("It was the 6/30, we were in 2016")\xa0//06/30/16\n\xa0var $vobj : Object\n\xa0$vobj:=New object("expDate";"2020-11-17T00:00:00.0000")\n\xa0vdDate4:=Date($vobj.expDate)\xa0//11/17/20\n\xa0vdDate5:=Date($vobj.creationDate)\xa0//00/00/00\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsx)(t.p,{children:"Date evaluation based on a date in ISO format:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$vtDateISO:="2013-06-05T20:00:00"\n\xa0$vDate:=Date($vtDateISO)\n\xa0\xa0//$vDate represents June 5th, 2013 regardless of the system language\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example-4",children:"Example 4"}),"\n",(0,a.jsx)(t.p,{children:"You want to get a date from an object attribute, whatever the current attribute date storage option:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0If(Value type($myObj.myDate)=Is date)\xa0//it's stored as date, no need to convert\n\xa0\xa0\xa0\xa0$vDate:=$myObj.myDate\n\xa0Else\xa0//it's stored as string\n\xa0\xa0\xa0\xa0$vDate:=Date($myObj.myDate)\n\xa0End if\n"})}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/commands/bool",children:"Bool"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/commands/string",children:"String"})]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Command number"}),(0,a.jsx)(t.td,{children:"102"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread safe"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let a={},r=s.createContext(a);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);