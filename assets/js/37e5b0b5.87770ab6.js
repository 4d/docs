"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52977"],{121667:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-file-from-pasteboard","title":"Get file from pasteboard","description":"Get file from pasteboard ( xIndex ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-file-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-file-from-pasteboard","permalink":"/docs/commands/get-file-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-file-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-file-from-pasteboard","title":"Get file from pasteboard","slug":"/commands/get-file-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR PASTEBOARD","permalink":"/docs/commands/clear-pasteboard"},"next":{"title":"GET PASTEBOARD DATA","permalink":"/docs/commands/get-pasteboard-data"}}'),s=t("785893"),d=t("250065");let a={id:"get-file-from-pasteboard",title:"Get file from pasteboard",slug:"/commands/get-file-from-pasteboard",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get file from pasteboard"})," ( ",(0,s.jsx)(n.em,{children:"xIndex"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xIndex"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Xth file included in drag action"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Pathname of file extracted from pasteboard"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The Get file from pasteboard command returns the absolute pathname of a file included in a drag and drop operation. Several files can be selected and moved simultaneously. The ",(0,s.jsx)(n.em,{children:"xIndex"})," parameter is used to designate a file from among the set of files selected."]}),"\n",(0,s.jsx)(n.p,{children:"If there is no Xth file in the pasteboard, the command returns an empty string."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following example can be used to retrieve in an array all the pathnames of the files included in a drag and drop operation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filesArray;0)\n\xa0var $vfileArray : Text\n\xa0var $n : Integer\n\xa0$n:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vfileArray:=Get file from pasteboard($n)\n\xa0\xa0\xa0\xa0If($vfileArray#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($filesArray;$vfileArray)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$n:=$n+1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vfileArray="")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"976"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},d=r.createContext(s);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);