"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41036"],{399471:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/method-set-access-mode","title":"METHOD SET ACCESS MODE","description":"METHOD SET ACCESS MODE ( mode )","source":"@site/versioned_docs/version-20-R9/commands-legacy/method-set-access-mode.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-access-mode","permalink":"/docs/commands/method-set-access-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-access-mode.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"method-set-access-mode","title":"METHOD SET ACCESS MODE","slug":"/commands/method-set-access-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD RESOLVE PATH","permalink":"/docs/commands/method-resolve-path"},"next":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/commands/method-set-attribute"}}'),d=t("785893"),o=t("250065");let r={id:"method-set-access-mode",title:"METHOD SET ACCESS MODE",slug:"/commands/method-set-access-mode",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," ( ",(0,d.jsx)(n.em,{children:"mode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"mode"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Access mode for locked objects"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," command sets the behavior for 4D when you attempt to write access an object already loaded for modification by another user or process. The scope of this command is the current session."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"mode"}),", you pass one of the following constants of the ",(0,d.jsx)(n.em,{children:"Design Object Access"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked abort"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Loading of object is aborted (default functioning)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked confirm"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"4D displays a dialog box so that you can choose to try again or to abort. In remote mode, this option is not supported (loading is aborted)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked retry"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"4D keeps attempting to load the object until it has been released"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1191"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let d={},o=s.createContext(d);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);