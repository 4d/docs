"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77485"],{30365:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>i,frontMatter:()=>s});var t=JSON.parse('{"id":"commands-legacy/method-called-on-error","title":"Method called on error","description":"Method called on error {( scope )} : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/method-called-on-error.md","sourceDirName":"commands-legacy","slug":"/commands/method-called-on-error","permalink":"/docs/commands/method-called-on-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-called-on-error.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-called-on-error","title":"Method called on error","slug":"/commands/method-called-on-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last errors","permalink":"/docs/commands/last-errors"},"next":{"title":"Method called on event","permalink":"/docs/commands/method-called-on-event"}}'),o=r("785893"),d=r("250065");let s={id:"method-called-on-error",title:"Method called on error",slug:"/commands/method-called-on-error",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Method called on error"})," {( ",(0,o.jsx)(n.em,{children:"scope"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Scope of the error method"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Name of method called on error"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Method called on error"})," command returns the name of the method installed by the ",(0,o.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command for the current process or the defined ",(0,o.jsx)(n.em,{children:"scope"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"scope"})," parameter, pass the execution context for which you want to get the name of the error handler method. You can use one of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constant"}),(0,o.jsx)(n.th,{children:"Value"}),(0,o.jsx)(n.th,{children:"Comment"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ek errors from components"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"Errors that occurred in components"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ek global"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"Errors that occurred in the global execution context of the project"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ek local"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsxs)(n.td,{children:["Errors that occurred in the local execution context (default if ",(0,o.jsx)(n.em,{children:"scope"})," parameter is omitted)"]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["If no method has been installed for the ",(0,o.jsx)(n.em,{children:"scope"}),', an empty string ("") is returned.']}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"This command is particularly useful in the context of components because it enables you to temporarily change and then restore the error-catching methods:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$methCurrent:=Method called on error\n\xa0ON ERR CALL("NewMethod")\n\xa0\xa0// If the document cannot be opened, an error is generated\n\xa0$ref:=Open document("MyDocument")\n\xa0\xa0// Reinstallation of previous method\n\xa0ON ERR CALL($methCurrent)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Error Handler"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"704"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let o={},d=t.createContext(o);function s(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);