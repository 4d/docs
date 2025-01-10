"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58403"],{459601:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/directory","title":"$directory","description":"The directory handles user access through REST requests.","source":"@site/versioned_docs/version-20-R7/REST/$directory.md","sourceDirName":"REST","slug":"/REST/directory","permalink":"/docs/REST/directory","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"directory","title":"$directory"}}'),r=t("785893"),i=t("250065");let o={id:"directory",title:"$directory"},d=void 0,l={},c=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The directory handles user access through REST requests."}),"\n",(0,r.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,r.jsx)(n.p,{children:"Opens a REST session on your 4D application and logs in the user."}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"$directory/login"})," to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout."]}),"\n",(0,r.jsxs)(n.p,{children:["All parameters must be passed in ",(0,r.jsx)(n.strong,{children:"headers"})," of a POST method:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header key"}),(0,r.jsx)(n.th,{children:"Header value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username-4D"}),(0,r.jsx)(n.td,{children:"User - Not mandatory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password-4D"}),(0,r.jsx)(n.td,{children:"Password in plain text - Not mandatory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"session-4D-length"}),(0,r.jsx)(n.td,{children:"Session inactivity timeout (minutes). Cannot be less than 60 - Not mandatory"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Since the password is transmitted in plain text, it is strongly recommended to use a secured https connection for the login request."})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"If the login was successful, the result will be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Otherwise, the response will be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);