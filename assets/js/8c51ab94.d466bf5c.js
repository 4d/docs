"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97813"],{378376:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/refresh-license","title":"Refresh license","description":"Refresh license : Object","source":"@site/versioned_docs/version-20-R8/commands-legacy/refresh-license.md","sourceDirName":"commands-legacy","slug":"/commands/refresh-license","permalink":"/docs/commands/refresh-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frefresh-license.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"refresh-license","title":"Refresh license","slug":"/commands/refresh-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License usage","permalink":"/docs/commands/license-usage"},"next":{"title":"List Box","permalink":"/docs/category/list-box"}}'),r=s("785893"),c=s("250065");let i={id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Refresh license"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Status object"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Refresh license"})," command updates the current 4D Server license. It connects you to the 4D customer database and automatically activates any new or updated licenses (",(0,r.jsx)(n.em,{children:"e.g."}),", additional purchased clients) related to the current license."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returned object"})}),"\n",(0,r.jsxs)(n.p,{children:["The object returned by ",(0,r.jsx)(n.strong,{children:"Refresh license"})," contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True if the refresh action is successful, False otherwise."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Status code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Status description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tips"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Suggestions to resolve error."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, ",(0,r.jsx)(n.strong,{children:"Refresh license"})," does nothing."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to update your license and receive a message when it's completed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Method to be executed on server\n\xa0var $res : Object\n\xa0$res:=Refresh license\n\xa0If($res.success)\n\xa0\xa0\xa0\xa0ALERT("Success")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT($res.statusText)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1336"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},c=t.createContext(r);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);