"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85505"],{114060:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"Events/onCloseBox","title":"On Close Box","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R9/Events/onCloseBox.md","sourceDirName":"Events","slug":"/Events/onCloseBox","permalink":"/docs/Events/onCloseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onCloseBox","title":"On Close Box"},"sidebar":"docs","previous":{"title":"On Clicked","permalink":"/docs/Events/onClicked"},"next":{"title":"On Close Detail","permalink":"/docs/Events/onCloseDetail"}}'),s=t("785893"),i=t("250065");let r={id:"onCloseBox",title:"On Close Box"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Can be called by"}),(0,s.jsx)(n.th,{children:"Definition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"Form"}),(0,s.jsx)(n.td,{children:"The window\u2019s close box has been clicked"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Close Box"})," event is generated when the user clicks on the clos box of the window."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to respond to a close window event with a form used for record data entry:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //Method for an input form\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var o=t(667294);let s={},i=o.createContext(s);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);