"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48035"],{273747:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/save-set","title":"SAVE SET","description":"SAVE SET ( set ; document )","source":"@site/versioned_docs/version-20-R8/commands-legacy/save-set.md","sourceDirName":"commands-legacy","slug":"/commands/save-set","permalink":"/docs/commands/save-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"save-set","title":"SAVE SET","slug":"/commands/save-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REMOVE FROM SET","permalink":"/docs/commands/remove-from-set"},"next":{"title":"UNION","permalink":"/docs/commands/union"}}'),r=t("785893"),d=t("250065");let i={id:"save-set",title:"SAVE SET",slug:"/commands/save-set",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SAVE SET"})," ( ",(0,r.jsx)(s.em,{children:"set"})," ; ",(0,r.jsx)(s.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"set"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Name of the set to save"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"document"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Name of the disk file to which to save the set"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SAVE SET"})," saves ",(0,r.jsx)(s.em,{children:"set"})," to ",(0,r.jsx)(s.em,{children:"document"}),", a document on disk."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"document"})," does not need to have the same name as the set. If you supply an empty string for ",(0,r.jsx)(s.em,{children:"document"}),", a Create File dialog box appears so that the user can enter the name of the document. You can load a saved set with the ",(0,r.jsx)(s.a,{href:"/docs/commands/load-set",children:"LOAD SET"})," command."]}),"\n",(0,r.jsx)(s.p,{children:"If the user clicks Cancel in the Save File dialog box, or if there is an error during the save operation, the OK system variable is set to 0. Otherwise, it is set to 1."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SAVE SET"})," is often used to save to disk the results of a time-consuming search."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WARNING:"})," Remember that a set is a representation of a selection of records at the moment that the set is created. If the records represented by the set change, the set may no longer be accurate. Therefore, a set saved to disk should represent a group of records that does not change frequently. A number of things can make a set invalid: modifying a record of the set, deleting a record of the set, or changing the criteria that determined the set. Also remember that sets do not save field values."]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"The following example displays the Save File dialog box, which the user can enter the name of the document that contains the set:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0SAVE SET("SomeSet";"")\n'})}),"\n",(0,r.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(s.p,{children:"If the user clicks Cancel in the Save File dialog box, or if there is an error during the load operation, the OK system variable is set to 0. Otherwise, it is set to 1."}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/commands/load-set",children:"LOAD SET"})}),"\n",(0,r.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"184"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifies variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return i}});var n=t(667294);let r={},d=n.createContext(r);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);