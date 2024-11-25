"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80523"],{886940:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"Concepts/date","title":"Date","description":"- A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.","source":"@site/versioned_docs/version-18/Concepts/dt_date.md","sourceDirName":"Concepts","slug":"/Concepts/date","permalink":"/docs/18/Concepts/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"date","title":"Date"},"sidebar":"docs","previous":{"title":"Collection","permalink":"/docs/18/Concepts/collection"},"next":{"title":"Null and Undefined","permalink":"/docs/18/Concepts/null-undefined"}}'),r=n("785893"),a=n("250065");let d={id:"date",title:"Date"},i=void 0,l={},o=[{value:"Date literals",id:"date-literals",level:2},{value:"Date operators",id:"date-operators",level:2}];function c(e){let t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767."}),"\n",(0,r.jsx)(t.li,{children:"Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise."]}),"\n",(0,r.jsx)(t.h2,{id:"date-literals",children:"Date literals"}),"\n",(0,r.jsx)(t.p,{children:"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A null date is specified by ",(0,r.jsx)(t.em,{children:"!00-00-00!"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Tip:"})," The Method Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For compatibility reasons, 4D accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,r.jsx)(t.code,{children:"SET DEFAULT CENTURY"})," command."]}),"\n",(0,r.jsx)(t.li,{children:'If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.'}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"date-operators",children:"Date operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operation"}),(0,r.jsx)(t.th,{children:"Syntax"}),(0,r.jsx)(t.th,{children:"Returns"}),(0,r.jsx)(t.th,{children:"Expression"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Date difference"}),(0,r.jsx)(t.td,{children:"Date \u2013 Date"}),(0,r.jsx)(t.td,{children:"Number"}),(0,r.jsx)(t.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,r.jsx)(t.td,{children:"19"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Day addition"}),(0,r.jsx)(t.td,{children:"Date + Number"}),(0,r.jsx)(t.td,{children:"Date"}),(0,r.jsx)(t.td,{children:"!2017-01-20! + 9"}),(0,r.jsx)(t.td,{children:"!2017-01-29!"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Day subtraction"}),(0,r.jsx)(t.td,{children:"Date \u2013 Number"}),(0,r.jsx)(t.td,{children:"Date"}),(0,r.jsx)(t.td,{children:"!2017-01-20! - 9"}),(0,r.jsx)(t.td,{children:"!2017-01-11!"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Equality"}),(0,r.jsx)(t.td,{children:"Date = Date"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"!2017-01-01! =!2017-01-01!"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"	||	||!2017-01-20! = !2017-01-01!	|False|\n"})}),"\n",(0,r.jsx)(t.p,{children:"|Inequality	|Date # Date	|Boolean	|!2017-01-20! # !2017-01-01!	|True|\n||||!2017-01-20! # !2017-01-20!	|False|\n|Greater than	|Date > Date	|Boolean	|!2017-01-20! > !2017-01-01!	|True|\n||||!2017-01-20! > !2017-01-20!	|False|\n|Less than	|Date < Date	|Boolean	|!2017-01-01! < !2017-01-20!	|True|\n||||!2017-01-20! < !2017-01-20!	|False|\n|Greater than or equal to	|Date >= Date	|Boolean	|!2017-01-20! >=!2017-01-01!	|True|\n||||!2017-01-01!>=!2017-01-20!	|False|\n|Less than or equal to	|Date <= Date	|Boolean	|!2017-01-01!<=!2017-01-20!|	True|\n||||	!2017-01-20!<=!2017-01-01!|	False|"})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);