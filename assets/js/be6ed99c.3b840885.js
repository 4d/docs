"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10548"],{831060:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/printers-list","title":"PRINTERS LIST","description":"PRINTERS LIST ( namesArray {; altNamesArray {; modelsArray}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/printers-list.md","sourceDirName":"commands-legacy","slug":"/commands/printers-list","permalink":"/docs/commands/printers-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinters-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"printers-list","title":"PRINTERS LIST","slug":"/commands/printers-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print settings to BLOB","permalink":"/docs/commands/print-settings-to-blob"},"next":{"title":"Printing page","permalink":"/docs/commands/printing-page"}}'),s=r("785893"),i=r("250065");let a={id:"printers-list",title:"PRINTERS LIST",slug:"/commands/printers-list",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINTERS LIST"})," ( ",(0,s.jsx)(n.em,{children:"namesArray"})," {; ",(0,s.jsx)(n.em,{children:"altNamesArray"})," {; ",(0,s.jsx)(n.em,{children:"modelsArray"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"namesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Printer names"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"altNamesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Windows: Printer locations, macOS: Custom printer names"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modelsArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Printer models"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"PRINTERS LIST"})," command fills in the array(s) passed as parameter(s) with the names as well as, optionally, the locations or custom names and models of the available printers for the machine."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If the printers are managed using a print server (spooler), the complete access path (under Windows) or the name of the spooler (under macOS) is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the name of a text array in the ",(0,s.jsx)(n.em,{children:"namesArray"})," parameter. After command execution, this array will contain the names of available printers. Under macOS, this will be the fixed \u201Csystem\u201D names."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass a second optional array, ",(0,s.jsx)(n.em,{children:"altNamesArray"}),". The contents of this array will depend on the platform:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Under Windows, for each printer, you get its network location (or local port)."}),"\n",(0,s.jsx)(n.li,{children:"Under macOS, for each printer, you get its custom name, which can be modified by the user. This name can be used, for example, in dialog boxes."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"modelsArray"})," parameter is used to get the model of each printer."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/get-current-printer",children:"Get current printer"})," commands to modify or get the selected printer in 4D. You must pass them the names returned in the first array (",(0,s.jsx)(n.em,{children:"namesArray"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Under Windows, the name of a printer can be modified manually at the operating system level. On the other hand, its location and model type are linked to its physical characteristics. Therefore, you can use the optional array values to check the characteristics of the selected printer \u2014 typically, you can check that all the client machines use the same printer."}),"\n",(0,s.jsx)(n.p,{children:"Under macOS, this check can be carried out using the name of the printer (name of the print server), which is the same for each machine that is connected."}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"The system variable OK is set to 1 if the command has been executed correctly; otherwise, it is set to 0 and the arrays are returned empty."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-current-printer",children:"Get current printer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"789"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);