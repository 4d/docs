"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81440"],{386533:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","description":"WEB SERVICE AUTHENTICATE ( name ; password {; authMethod} {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-service-authenticate.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-authenticate","permalink":"/docs/commands/web-service-authenticate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-authenticate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","slug":"/commands/web-service-authenticate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Client)","permalink":"/docs/category/web-services-client"},"next":{"title":"WEB SERVICE CALL","permalink":"/docs/commands/web-service-call"}}'),i=t("785893"),r=t("250065");let c={id:"web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",slug:"/commands/web-service-authenticate",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," ( ",(0,i.jsx)(n.em,{children:"name"})," ; ",(0,i.jsx)(n.em,{children:"password"})," {; ",(0,i.jsx)(n.em,{children:"authMethod"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"User name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"User password"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authMethod"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Authentication method 0 or omitted = not specified, 1 = BASIC, 2 = DIGEST"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If passed: authentication by proxy"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," command enables the use of Web Services requiring authentication of the client application (simple authentication). The BASIC and DIGEST methods are supported, as well as the presence of a proxy."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," For more information about the BASIC and DIGEST authentication methods, refer to the ",(0,i.jsx)(n.em,{children:"Connection Security"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"name"})," and ",(0,i.jsx)(n.em,{children:"password"})," parameters, pass the required identification information (user name and password). This information will be encoded and added to the HTTP request sent to the Web Service using the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. It is thus necessary to call the ",(0,i.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," command before calling the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"authMethod"})," parameter indicate the authentication method to be used for the next call to the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. You can pass one of the following values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2 = use the DIGEST authentication method"}),"\n",(0,i.jsx)(n.li,{children:"1 = use the BASIC authentication method"}),"\n",(0,i.jsx)(n.li,{children:"0 (or parameter omitted) = use the appropriate method. In this case, 4D sends an additional request in order to negotiate the authentication method."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the authentication information is to be sent to an HTTP proxy. This configuration must be implemented when there is a proxy that requires authentication between the Web Service client and the Web Service itself. If the Web Service is itself authenticated, a double authentication is required (see the example)."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the authentication information is reset to zero after each request. Therefore, you must use the ",(0,i.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," command before each ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. It is nevertheless possible to keep this information temporarily using an option of the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"})," command. In this case, it is not necessary to execute the ",(0,i.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," command before each ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["If authentication fails, the SOAP server returns an error that you can identify using the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-get-info",children:"WEB SERVICE Get info"})," command."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Authentication with a Web Service located behind a proxy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Authentication to Web Service in DIGEST mode\n\xa0WEB SERVICE AUTHENTICATE("SoapUser";"123";2)\n\xa0\xa0// Authentication to proxy in default mode\n\xa0WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)\n\xa0WEB SERVICE CALL(...)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-get-info",children:"WEB SERVICE Get info"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"786"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);