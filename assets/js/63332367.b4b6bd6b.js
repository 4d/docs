/*! For license information please see 63332367.b4b6bd6b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88592],{497838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=t(474848),r=t(28453);const d={id:"date",title:"Date"},i=void 0,l={id:"Concepts/date",title:"Date",description:"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.",source:"@site/versioned_docs/version-20/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/20/Concepts/date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/20/Concepts/collection"},next:{title:"Null and Undefined",permalink:"/docs/20/Concepts/null-undefined"}},a={},c=[{value:"Date literals",id:"Date-literals",level:2},{value:"Date operators",id:"Date-operators",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767."}),"\n",(0,s.jsx)(n.p,{children:"Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise."]}),"\n",(0,s.jsx)(n.h2,{id:"Date-literals",children:"Date literals"}),"\n",(0,s.jsx)(n.p,{children:"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A null date is specified by ",(0,s.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,s.jsx)(n.code,{children:"SET DEFAULT CENTURY"})," command."]}),"\n",(0,s.jsx)(n.li,{children:'If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Date-operators",children:"Date operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date difference"}),(0,s.jsx)(n.td,{children:"Date \u2013 Date"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,s.jsx)(n.td,{children:"19"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Day addition"}),(0,s.jsx)(n.td,{children:"Date + Number"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,s.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Day subtraction"}),(0,s.jsx)(n.td,{children:"Date \u2013 Number"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,s.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equality"}),(0,s.jsx)(n.td,{children:"Date = Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-01! =!2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inequality"}),(0,s.jsx)(n.td,{children:"Date # Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! # !2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! # !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than"}),(0,s.jsx)(n.td,{children:"Date > Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! > !2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than"}),(0,s.jsx)(n.td,{children:"Date < Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-01! < !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than or equal to"}),(0,s.jsx)(n.td,{children:"Date >= Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than or equal to"}),(0,s.jsx)(n.td,{children:"Date <= Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-01! <= !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,s.jsx)(n.td,{children:"False"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,d={},c=null,o=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:o,props:d,_owner:l.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);