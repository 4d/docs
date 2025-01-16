"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79561"],{918044:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/web-send-file","title":"WEB SEND FILE","description":"WEB SEND FILE ( htmlFile )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-send-file.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-file","permalink":"/docs/20-R7/commands/web-send-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-file","title":"WEB SEND FILE","slug":"/commands/web-send-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND BLOB","permalink":"/docs/20-R7/commands/web-send-blob"},"next":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/20-R7/commands/web-send-http-redirect"}}'),r=s("785893"),i=s("250065");let d={id:"web-send-file",title:"WEB SEND FILE",slug:"/commands/web-send-file",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SEND FILE"})," ( ",(0,r.jsx)(n.em,{children:"htmlFile"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"htmlFile"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"HTML Pathname to HTML file or empty string for terminating SEND HTML FILE"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WEB SEND FILE"})," command sends, to the Web browser, the HTML page or the Web file stored in the document whose pathname you pass in ",(0,r.jsx)(n.em,{children:"htmlFile"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"By default, 4D looks for the HTML document within the root folder, defined in the Database Settings."}),"\n",(0,r.jsxs)(n.p,{children:['This command accepts as a parameter either pathnames in Posix syntax (names of directories or folders are separated with a slash "/") or in the system syntax.',(0,r.jsx)(n.br,{}),"\nSpecifying an invalid pathname generates an error related to file management for your operating system. You can intercept this error using a method installed by the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," command. If the method displays a warning or message dialog box, it will appear on the browser machine."]}),"\n",(0,r.jsxs)(n.p,{children:["Once ",(0,r.jsx)(n.strong,{children:"WEB SEND FILE"})," is executed, the OK system variable is updated: if the file to be sent exists and if the timeout has not run out, OK is equal to 1. Otherwise, it is equal to 0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you call ",(0,r.jsx)(n.strong,{children:"WEB SEND FILE"})," from within a process that is not a Web process, the command does nothing and returns no error; the call is simply ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["The references to 4D variables and ",(0,r.jsx)(n.em,{children:"4DSCRIPT"})," type tags found on the page are parsed when the document type allows for it (document based on text)."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The HTML root folder of the database is the WebDocs folder. It contains the following elements:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0..\\WebDocs\\HTM\\MyPage.HTM\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sending the Web page ",(0,r.jsx)(n.em,{children:'"MyPage.HTM"'})," must be carried out in the following manner :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND FILE("HTM/MyPage.HTM")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(n.p,{children:"If the file to be sent exists and if the timeout has not run out, OK is set to 1. Otherwise, it is equal to 0."}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"619"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);