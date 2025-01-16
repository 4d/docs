"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91925"],{119157:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/web-validate-digest","title":"WEB Validate digest","description":"WEB Validate digest ( userName ; password ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-validate-digest.md","sourceDirName":"commands-legacy","slug":"/commands/web-validate-digest","permalink":"/docs/20-R7/commands/web-validate-digest","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-validate-digest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-validate-digest","title":"WEB Validate digest","slug":"/commands/web-validate-digest","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB STOP SERVER","permalink":"/docs/20-R7/commands/web-stop-server"},"next":{"title":"Web Services (Client)","permalink":"/docs/20-R7/category/web-services-client"}}'),i=t("785893"),r=t("250065");let d={id:"web-validate-digest",title:"WEB Validate digest",slug:"/commands/web-validate-digest",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB Validate digest"})," ( ",(0,i.jsx)(n.em,{children:"userName"})," ; ",(0,i.jsx)(n.em,{children:"password"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"User name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"User password"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True=Authentication OK, False=Authentication failed"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WEB Validate digest"})," command checks the validity of the identifying information (name and password) provided by a user connecting to the Web server. This command must be used in the ",(0,i.jsx)(n.em,{children:"On Web Authentication Database Method"})," in the context of Web authentication in Digest mode (see the ",(0,i.jsx)(n.em,{children:"Connection Security"})," section)."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"userName"})," and ",(0,i.jsx)(n.em,{children:"password"})," parameters, pass the identifying information of the user stored locally. The command uses this information to generate a value that it compares with the information sent by the Web browser."]}),"\n",(0,i.jsx)(n.p,{children:"If the values are the same, the command returns True. Otherwise, it returns False."}),"\n",(0,i.jsx)(n.p,{children:"You can use this mechanism to manage and maintain your own secure access system to the Web server by programming. Note that Digest validation cannot be used jointly with 4D passwords."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If the browser does not support Digest authentication, an error is returned (authentication error)."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Example using ",(0,i.jsx)(n.em,{children:"On Web Authentication Database Method"})," in Digest mode:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// On Web Authentication Database Method\n\xa0var $1;$2;$5;$6;$3;$4 : Text\n\xa0var $user : Text\n\xa0var $0 : Boolean\n\xa0$0:=False\n\xa0$user:=$5\n\xa0\xa0//For security reasons, refuse names containing @\n\xa0If(WithWildcard($user))\n\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0//The WithWildcard method is described in the "On Web Authentication Database Method" section\n\xa0Else\n\xa0\xa0\xa0\xa0QUERY([WebUsers];[WebUsers]User=$user)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=WEB Validate digest($user;[WebUsers]password)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0//User does not exist\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/generate-digest",children:"Generate digest"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/validate-password",children:"Validate password"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"946"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);