"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95330],{206079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(474848),l=t(28453);const r={id:"vp-get-value",title:"VP Get value"},i=void 0,d={id:"ViewPro/commands/vp-get-value",title:"VP Get value",description:"VP Get value ( rangeObj Object",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-value",permalink:"/docs/20-R6/ViewPro/commands/vp-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-value",title:"VP Get value"},sidebar:"docs",previous:{title:"VP Get tables",permalink:"/docs/20-R6/ViewPro/commands/vp-get-tables"},next:{title:"VP Get values",permalink:"/docs/20-R6/ViewPro/commands/vp-get-values"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Returned object",id:"returned-object",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Object containing a cell value"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get value"})," command retrieves a cell value from a designated cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range whose value you want to retrieve."]}),"\n",(0,s.jsx)(n.h4,{id:"returned-object",children:"Returned object"}),"\n",(0,s.jsxs)(n.p,{children:["The object returned will contain the ",(0,s.jsx)(n.code,{children:"value"})," property, and, in case of a js date value, a ",(0,s.jsx)(n.code,{children:"time"})," property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,s.jsxs)(n.td,{children:["Value in the ",(0,s.jsx)(n.em,{children:"rangeObj"})," (except- time)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"Time value (in seconds) if the value is of the js date type"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"If the object returned includes a date or time, it is treated as a datetime and completed as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"time value - the date portion is completed as December 30, 1899 in dd/MM/yyyy format (30/12/1899)"}),"\n",(0,s.jsx)(n.li,{children:"date value - the time portion is completed as midnight in HH:mm:ss format (00:00:00)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"rangeObj"})," contains multiple cells or multiple ranges, the value of the first cell is returned. The command returns a null object if the cell is empty."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET VALUE($cell;New object("value";Uppercase($value.value)))\nEnd if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);