"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11101],{420754:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=r(474848),i=r(28453);const t={id:"print-option-values",title:"PRINT OPTION VALUES",slug:"/commands/print-option-values",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/print-option-values",title:"PRINT OPTION VALUES",description:"PRINT OPTION VALUES ( option ; namesArray {; info1Array {; info2Array}} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/print-option-values.md",sourceDirName:"commands-legacy",slug:"/commands/print-option-values",permalink:"/docs/commands/print-option-values",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-option-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"print-option-values",title:"PRINT OPTION VALUES",slug:"/commands/print-option-values",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Print object",permalink:"/docs/commands/print-object"},next:{title:"PRINT RECORD",permalink:"/docs/commands/print-record"}},a={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," ( ",(0,s.jsx)(n.em,{children:"option"})," ; ",(0,s.jsx)(n.em,{children:"namesArray"})," {; ",(0,s.jsx)(n.em,{children:"info1Array"})," {; ",(0,s.jsx)(n.em,{children:"info2Array"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Option number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"namesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Names of values"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info1Array"}),(0,s.jsx)(n.td,{children:"Array integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Values (1) of the option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info2Array"}),(0,s.jsx)(n.td,{children:"Array integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Values (2) of the option"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," command returns in ",(0,s.jsx)(n.em,{children:"namesArray"})," a list of names available for the print ",(0,s.jsx)(n.em,{children:"option"})," defined. Optionally, you can retrieve additional information for each name in ",(0,s.jsx)(n.em,{children:"info1Array"})," and ",(0,s.jsx)(n.em,{children:"info2Array"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," command only operates with PostScript printers."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"option"})," parameter allows you to specify the values to get. You must pass one of the following constants of the \u201c",(0,s.jsx)(n.em,{children:"Print Options"}),"\u201d theme:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Paper option"}),"\n",(0,s.jsx)(n.li,{children:"Paper source option"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.em,{children:"option"})," = Paper option (1)"]})}),"\n",(0,s.jsxs)(n.p,{children:["If you pass Paper option in the ",(0,s.jsx)(n.em,{children:"option"})," parameter, the command will return the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.em,{children:"namesArray"}),", the names of the available paper formats;"]}),"\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.em,{children:"info1Array"}),", the heights of each paper format;"]}),"\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.em,{children:"info2Array"}),", the widths of each paper format."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In order to obtain this information, the print driver must have access to a valid PPD (PostScript Printer Description) file for the printer."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply a specific paper format using the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," command, you can either pass one of the values of ",(0,s.jsx)(n.em,{children:"namesArray"}),", or the corresponding values of ",(0,s.jsx)(n.em,{children:"info1Array"})," and ",(0,s.jsx)(n.em,{children:"info2Array"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.em,{children:"option"})," = Paper source option (5)"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This option can only be used under Windows."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass Paper source option in the ",(0,s.jsx)(n.em,{children:"option"})," parameter, the command returns the names of the different trays available in ",(0,s.jsx)(n.em,{children:"namesArray"}),", and their internal Windows ID numbers in ",(0,s.jsx)(n.em,{children:"info1Array"})," (",(0,s.jsx)(n.em,{children:"info2Array"})," remains empty). The order of the values in the arrays is defined by the print driver. To indicate a tray using the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," command, you must pass the index, as found in the ",(0,s.jsx)(n.em,{children:"namesArray"})," or ",(0,s.jsx)(n.em,{children:"info1Array"})," arrays, of the element desired."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on the different print options, refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"})," commands."]}),"\n",(0,s.jsx)(n.p,{children:"All the information returned by these commands is supplied by the operating system. Refer to the documentation of your system for more details about specific options."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(296540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);