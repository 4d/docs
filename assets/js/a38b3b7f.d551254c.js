"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84426"],{819797:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-printable-margin","title":"GET PRINTABLE MARGIN","description":"GET PRINTABLE MARGIN ( left ; top ; right ; bottom )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-printable-margin.md","sourceDirName":"commands-legacy","slug":"/commands/get-printable-margin","permalink":"/docs/20-R7/commands/get-printable-margin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printable-margin.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-printable-margin","title":"GET PRINTABLE MARGIN","slug":"/commands/get-printable-margin","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PRINTABLE AREA","permalink":"/docs/20-R7/commands/get-printable-area"},"next":{"title":"Get printed height","permalink":"/docs/20-R7/commands/get-printed-height"}}'),i=t("785893"),s=t("250065");let a={id:"get-printable-margin",title:"GET PRINTABLE MARGIN",slug:"/commands/get-printable-margin",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"About Printable Margin Management",id:"about-printable-margin-management",level:3},{value:"About Printing Terminology",id:"about-printing-terminology",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET PRINTABLE MARGIN"})," ( ",(0,i.jsx)(n.em,{children:"left"})," ; ",(0,i.jsx)(n.em,{children:"top"})," ; ",(0,i.jsx)(n.em,{children:"right"})," ; ",(0,i.jsx)(n.em,{children:"bottom"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"left"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Left margin"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"top"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Top margin"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"right"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Right margin"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bottom"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Bottom margin"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The GET PRINTABLE MARGIN command returns the current values of the different margins defined using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-selection",children:"PRINT SELECTION"})," and ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-record",children:"PRINT RECORD"})," commands."]}),"\n",(0,i.jsx)(n.p,{children:"The values are returned in pixels with respect to the paper edges."}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to obtain the paper size as well as to calculate the printable area using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"})," function."]}),"\n",(0,i.jsx)(n.h3,{id:"about-printable-margin-management",children:"About Printable Margin Management"}),"\n",(0,i.jsx)(n.p,{children:"By default, the printing calculation in 4D is based on \u201Cprintable margins\u201D. The advantage of this system is that the forms adapt themselves automatically to the new printers (since they are positioned in the printable area). On the other hand, in the case of pre-printed forms, it was not possible to position the elements to be printed precisely because changing the printer can modify the printable margins."}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to base the form printing carried out using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-selection",children:"PRINT SELECTION"})," and ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-record",children:"PRINT RECORD"})," commands on a fixed margin which is identical on each printer: the paper margins, i.e. the physical limits of the sheet. To do this, simply use the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),", ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})," and ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"})," commands."]}),"\n",(0,i.jsx)(n.h2,{id:"about-printing-terminology",children:"About Printing Terminology"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Paper margin"}),": the paper margin corresponds to the physical limits of the sheet."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Printer margin"}),": the printer margin is the margin beyond which the printer is incapable of printing (for material reasons: print rollers, printer head end-of-travel...). It varies from one printer to another and from one format to another."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dead margin"}),":this refers to the area located between the paper margin and the printer margin."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(162661).Z+"",width:"320",height:"167"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"711"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},162661:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(667294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);