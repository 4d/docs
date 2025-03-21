"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6904"],{561560:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/close-resource-file","title":"CLOSE RESOURCE FILE","description":"CLOSE RESOURCE FILE ( resFile )","source":"@site/versioned_docs/version-20-R7/commands-legacy/close-resource-file.md","sourceDirName":"commands-legacy","slug":"/commands/close-resource-file","permalink":"/docs/20-R7/commands/close-resource-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-resource-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"close-resource-file","title":"CLOSE RESOURCE FILE","slug":"/commands/close-resource-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Resources","permalink":"/docs/20-R7/commands/theme/Resources"},"next":{"title":"Get indexed string","permalink":"/docs/20-R7/commands/get-indexed-string"}}'),t=s("785893"),o=s("250065");let i={id:"close-resource-file",title:"CLOSE RESOURCE FILE",slug:"/commands/close-resource-file",displayed_sidebar:"docs"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CLOSE RESOURCE FILE"})," ( ",(0,t.jsx)(n.em,{children:"resFile"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resFile"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Resource file reference number"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"CLOSE RESOURCE FILE"})," command closes the resource file whose reference number is passed in ",(0,t.jsx)(n.em,{children:"resFile"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Even if you have opened the same resource file several times, you need to call ",(0,t.jsx)(n.strong,{children:"CLOSE RESOURCE FILE"})," only once in order to close that file."]}),"\n",(0,t.jsxs)(n.p,{children:["If you apply ",(0,t.jsx)(n.strong,{children:"CLOSE RESOURCE FILE"})," to the 4D application or database resource files, the command detects it and does nothing."]}),"\n",(0,t.jsx)(n.p,{children:"If you pass an invalid resource file reference number, the command does nothing."}),"\n",(0,t.jsxs)(n.p,{children:["Remember to eventually call ",(0,t.jsx)(n.strong,{children:"CLOSE RESOURCE FILE"})," for a resource file that you have opened using ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/open-resource-file",children:"Open resource file"}),". Note that when you quit the application (or open another database), 4D automatically closes all the resource files you opened."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/open-resource-file",children:"Open resource file"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"498"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},o=r.createContext(t);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);