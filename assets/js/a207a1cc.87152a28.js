"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32625],{388706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(474848),r=t(28453);const s={id:"time",title:"Time"},d=void 0,l={id:"Concepts/time",title:"Time",description:"- A Time field, variable or expression can be in the range of 0000 to 596,00000.",source:"@site/versioned_docs/version-18/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/18/Concepts/time",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"time",title:"Time"},sidebar:"docs",previous:{title:"String",permalink:"/docs/18/Concepts/string"},next:{title:"Variant",permalink:"/docs/18/Concepts/variant"}},o={},c=[{value:"Time literals",id:"time-literals",level:2},{value:"Time operators",id:"time-operators",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Time field, variable or expression can be in the range of 00:00:00 to 596,000:00:00."}),"\n",(0,i.jsx)(n.li,{children:"Times are in 24-hour format."}),"\n",(0,i.jsx)(n.li,{children:"A time value can be treated as a number. The number returned from a time is the number of seconds since midnight (00:00:00) that time represents."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," In the 4D Language Reference manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise."]}),"\n",(0,i.jsx)(n.h2,{id:"time-literals",children:"Time literals"}),"\n",(0,i.jsx)(n.p,{children:"A time literal constant is enclosed by question marks (?...?)."}),"\n",(0,i.jsx)(n.p,{children:"A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format."}),"\n",(0,i.jsx)(n.p,{children:"Here are some examples of time literals:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n"})}),"\n",(0,i.jsx)(n.p,{children:"A null time is specified by ?00:00:00?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," The Method Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter."]}),"\n",(0,i.jsx)(n.h2,{id:"time-operators",children:"Time operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Operation"}),(0,i.jsx)(n.th,{children:"Syntax"}),(0,i.jsx)(n.th,{children:"Returns"}),(0,i.jsx)(n.th,{children:"Expression"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Addition"}),(0,i.jsx)(n.td,{children:"Time + Time"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"?02:03:04? + ?01:02:03?"}),(0,i.jsx)(n.td,{children:"?03:05:07?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subtraction"}),(0,i.jsx)(n.td,{children:"Time \u2013 Time"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"?02:03:04? \u2013 ?01:02:03?"}),(0,i.jsx)(n.td,{children:"?01:01:01?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Addition"}),(0,i.jsx)(n.td,{children:"Time + Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? + 65"}),(0,i.jsx)(n.td,{children:"7449"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subtraction"}),(0,i.jsx)(n.td,{children:"Time \u2013 Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? \u2013 65"}),(0,i.jsx)(n.td,{children:"7319"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiplication"}),(0,i.jsx)(n.td,{children:"Time * Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? * 2"}),(0,i.jsx)(n.td,{children:"14768"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Division"}),(0,i.jsx)(n.td,{children:"Time / Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? / 2"}),(0,i.jsx)(n.td,{children:"3692"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Longint division"}),(0,i.jsx)(n.td,{children:"Time \\ Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? \\ 2"}),(0,i.jsx)(n.td,{children:"3692"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modulo"}),(0,i.jsx)(n.td,{children:"Time % Time"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"?20:10:00? % ?04:20:00?"}),(0,i.jsx)(n.td,{children:"?02:50:00?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modulo"}),(0,i.jsx)(n.td,{children:"Time % Number"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"?02:03:04? % 2"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Equality"}),(0,i.jsx)(n.td,{children:"Time = Time"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"?01:02:03? = ?01:02:03?"}),(0,i.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\t\t||||?01:02:03? = ?01:02:04?\t|False|\n"})}),"\n",(0,i.jsx)(n.p,{children:"|Inequality\t|Time # Time\t|Boolean\t|?01:02:03? # ?01:02:04?\t|True|\n||||?01:02:03? # ?01:02:03?\t|False|\n|Greater than\t|Time > Time\t|Boolean\t|?01:02:04? > ?01:02:03?\t|True|\n||||\t\t?01:02:03? > ?01:02:03?\t|False|\n|Less than\t|Time < Time\t|Boolean\t|?01:02:03? < ?01:02:04?\t|True|\n||||\t?01:02:03? < ?01:02:03?\t|False|\n|Greater than or equal to\t|Time >= Time\t|Boolean\t|?01:02:03? >=?01:02:03?\t|True|\n||||?01:02:03? >=?01:02:04?\t|False|\n|Less than or equal to\t|Time <= Time\t|Boolean\t|?01:02:03? <=?01:02:03?|\tTrue|\n||||?01:02:04? <=?01:02:03?\t|False|"}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["To obtain a time expression from an expression that combines a time expression with a number, use the commands ",(0,i.jsx)(n.code,{children:"Time"})," and ",(0,i.jsx)(n.code,{children:"Time string"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can combine expressions of the time and number types using the ",(0,i.jsx)(n.code,{children:"Time"})," or ",(0,i.jsx)(n.code,{children:"Current time"})," functions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\t//The following line assigns to $vlSeconds the number of seconds   \n\t//that will be elapsed between midnight and one hour from now\n$vlSeconds:=Current time+3600\n\t//The following line assigns to $vHSoon the time it will be in one hour\n$vhSoon:=Time(Current time+3600)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The second line could be written in a simpler way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"  // The following line assigns to $vHSoon the time it will be in one hour\n $vhSoon:=Current time+?01:00:00?\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"The Modulo operator can be used, more specifically, to add times that take the 24-hour format into account:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"$t1:=?23:00:00? // It is 23:00 p.m.\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(296540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);