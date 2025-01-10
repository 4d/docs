"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48206"],{694139:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/open-administration-window","title":"OPEN ADMINISTRATION WINDOW","description":"OPEN ADMINISTRATION WINDOW","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-administration-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-administration-window","permalink":"/docs/commands/open-administration-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-administration-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-administration-window","title":"OPEN ADMINISTRATION WINDOW","slug":"/commands/open-administration-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/commands/notify-resources-folder-modification"},"next":{"title":"OPEN DATA FILE","permalink":"/docs/commands/open-data-file"}}'),s=t("785893"),r=t("250065");let d={id:"open-administration-window",title:"OPEN ADMINISTRATION WINDOW",slug:"/commands/open-administration-window",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OPEN ADMINISTRATION WINDOW"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Does not require any parameters"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OPEN ADMINISTRATION WINDOW"})," command displays the server administration window on the machine that executes it. The 4D Server administration window can be used to view the current parameters and to carry out various maintenance operations (see the 4D Server Reference Guide). Beginning with version 11 of 4D Server, this window can be displayed from a client machine:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(481622).Z+"",width:"1028",height:"694"})}),"\n",(0,s.jsx)(n.p,{children:"This command must be called in the context of a connected 4D application or a 4D Server. It does nothing if:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it is called in a 4D application in local mode,"}),"\n",(0,s.jsxs)(n.li,{children:["it is executed by a user other than the Designer or the Administrator (in this case, the error -9991 is generated, see the ",(0,s.jsx)(n.em,{children:"Database Engine Errors (-10602 -> 4004)"})," section)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is the code for an administration button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Application type=4D local mode)\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D remote mode)\n\xa0\xa0\xa0\xa0OPEN ADMINISTRATION WINDOW\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D Server)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the OK system variable is set to 1. Otherwise, it is set to 0."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/open-security-center",children:"OPEN SECURITY CENTER"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1047"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},481622:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict12004.en-d0a40fafca970ac6083eaea5db5cf006.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);