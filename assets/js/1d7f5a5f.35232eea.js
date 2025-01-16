"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11342"],{593576:function(e,t,s){s.r(t),s.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","description":"GET PICTURE FROM PASTEBOARD ( picture )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-picture-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-pasteboard","permalink":"/docs/20-R7/commands/get-picture-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","slug":"/commands/get-picture-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/20-R7/commands/get-pasteboard-data-type"},"next":{"title":"Get text from pasteboard","permalink":"/docs/20-R7/commands/get-text-from-pasteboard"}}'),r=s("785893"),d=s("250065");let a={id:"get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",slug:"/commands/get-picture-from-pasteboard",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," ( ",(0,r.jsx)(t.em,{children:"picture"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"picture"}),(0,r.jsx)(t.td,{children:"Picture"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Picture extracted from pasteboard"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["GET PICTURE FROM PASTEBOARD returns the picture present in the pasteboard in the ",(0,r.jsx)(t.em,{children:"picture"})," field or variable."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following button\u2019s object method assigns the picture (jpeg or gif format) present in the pasteboard (if any) to the field [Employees]Photo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0If((Pasteboard data size("com.4d.private.picture.jpeg")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD([Employees]Photo)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("The pasteboard does not contain any pictures.")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If the picture is correctly extracted, OK is set to 1; otherwise OK is set to 0."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"522"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return a}});var n=s(667294);let r={},d=n.createContext(r);function a(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);