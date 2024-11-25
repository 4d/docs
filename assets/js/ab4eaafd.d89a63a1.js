"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25352"],{134150:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/blob-to-list","title":"BLOB to list","description":"BLOB to list ( blob {; offset} ) : ListRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/blob-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-list","permalink":"/docs/commands/blob-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-list","title":"BLOB to list","slug":"/commands/blob-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to integer","permalink":"/docs/commands/blob-to-integer"},"next":{"title":"BLOB to longint","permalink":"/docs/commands/blob-to-longint"}}'),i=n("785893"),o=n("250065");let r={id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"BLOB to list"})," ( ",(0,i.jsx)(t.em,{children:"blob"})," {; ",(0,i.jsx)(t.em,{children:"offset"}),"} ) : ListRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"blob"}),(0,i.jsx)(t.td,{children:"Blob"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"BLOB containing a hierarchical list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"offset"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2194"}),(0,i.jsx)(t.td,{children:"Offset within the BLOB (expressed in bytes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"New offset after reading"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"ListRef"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Reference to newly created list"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The BLOB to list command creates a new hierarchical list with the data stored within the BLOB ",(0,i.jsx)(t.em,{children:"blob"})," at the byte offset (starting at zero) specified by ",(0,i.jsx)(t.em,{children:"offset"})," and returns a List Reference number for that new list."]}),"\n",(0,i.jsxs)(t.p,{children:["The BLOB data must be consistent with the command. Typically, you will use BLOBs that you previously filled out using the command ",(0,i.jsx)(t.a,{href:"/docs/commands/list-to-blob",children:"LIST TO BLOB"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you do not specify the optional ",(0,i.jsx)(t.em,{children:"offset"})," parameter, the list data is read starting from the beginning of the BLOB. If you deal with a BLOB in which several variables or lists have been stored, you must pass the ",(0,i.jsx)(t.em,{children:"offset"})," parameter and, in addition, you must pass a numeric variable. Before the call, set this numeric variable to the appropriate offset. After the call, that same numeric variable returns the offset of the next variable stored within the BLOB."]}),"\n",(0,i.jsx)(t.p,{children:"After the call, if the hierarchical list has been successfully created, the OK variable is set to 1. If the operation could not be performed, the OK variable is set to 0; for example, if there was not enough memory."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note regarding Platform Independence:"})," BLOB to list and ",(0,i.jsx)(t.a,{href:"/docs/commands/list-to-blob",children:"LIST TO BLOB"})," use a 4D internal format for handling lists stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms when using these two commands. In other words, a BLOB created on Windows using those two commands can be reused on Macintosh and vice-versa."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"In this example, the form method for a data entry form extracts a list from a BLOB field before the form appears on the screen, and stores it back to the BLOB field if the data entry is validated:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// [Things To Do];"Input" Form Method\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=BLOB to list([Things To Do]Other Crazy Ideas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=New list\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(bValidate=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LIST TO BLOB(hList;[Things To Do]Other Crazy Ideas)\n\xa0\n\xa0End case\n'})}),"\n",(0,i.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(t.p,{children:"The OK variable is set to 1 if the list has been successfully created, otherwise it is set to 0."}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/list-to-blob",children:"LIST TO BLOB"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);