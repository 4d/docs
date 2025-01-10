"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87989"],{719381:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"Concepts/date","title":"Date","description":"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.","source":"@site/versioned_docs/version-20-R7/Concepts/dt_date.md","sourceDirName":"Concepts","slug":"/Concepts/date","permalink":"/docs/Concepts/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"date","title":"Date"},"sidebar":"docs","previous":{"title":"Collection","permalink":"/docs/Concepts/collection"},"next":{"title":"Null and Undefined","permalink":"/docs/Concepts/null-undefined"}}'),d=t("785893"),r=t("250065");let i={id:"date",title:"Date"},l=void 0,a={},c=[{value:"Date literals",id:"date-literals",level:2},{value:"Date operators",id:"date-operators",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767."}),"\n",(0,d.jsx)(n.p,{children:"Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise."]}),"\n",(0,d.jsx)(n.h2,{id:"date-literals",children:"Date literals"}),"\n",(0,d.jsx)(n.p,{children:"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,d.jsxs)(n.p,{children:["A null date is specified by ",(0,d.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Tip:"})," The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,d.jsx)(n.code,{children:"SET DEFAULT CENTURY"})," command."]}),"\n",(0,d.jsx)(n.li,{children:'If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"date-operators",children:"Date operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operation"}),(0,d.jsx)(n.th,{children:"Syntax"}),(0,d.jsx)(n.th,{children:"Returns"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Date difference"}),(0,d.jsx)(n.td,{children:"Date \u2013 Date"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,d.jsx)(n.td,{children:"19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Day addition"}),(0,d.jsx)(n.td,{children:"Date + Number"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,d.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Day subtraction"}),(0,d.jsx)(n.td,{children:"Date \u2013 Number"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,d.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Equality"}),(0,d.jsx)(n.td,{children:"Date = Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-01! =!2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Inequality"}),(0,d.jsx)(n.td,{children:"Date # Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! # !2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! # !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Greater than"}),(0,d.jsx)(n.td,{children:"Date > Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Less than"}),(0,d.jsx)(n.td,{children:"Date < Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-01! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Greater than or equal to"}),(0,d.jsx)(n.td,{children:"Date >= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Less than or equal to"}),(0,d.jsx)(n.td,{children:"Date <= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-01! <= !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,d.jsx)(n.td,{children:"False"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);