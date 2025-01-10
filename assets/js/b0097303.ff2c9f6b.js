"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68131"],{217168:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"WebServer/errorPages","title":"Custom HTTP Error Pages","description":"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:","source":"@site/versioned_docs/version-20/WebServer/errorPages.md","sourceDirName":"WebServer","slug":"/WebServer/errorPages","permalink":"/docs/20/WebServer/errorPages","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"errorPages","title":"Custom HTTP Error Pages"},"sidebar":"docs","previous":{"title":"Allowing project methods","permalink":"/docs/20/WebServer/allowProject"},"next":{"title":"Authentication","permalink":"/docs/20/WebServer/authentication"}}'),s=n("785893"),o=n("250065");let i={id:"errorPages",title:"Custom HTTP Error Pages"},l=void 0,a={},c=[{value:"Replacing default pages",id:"replacing-default-pages",level:2},{value:"Example",id:"example",level:2}];function d(e){let r={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"status codes starting with 4 (client errors), for example 404"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"status codes starting with 5 (server errors), for example 501."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For a full description of HTTP error status codes, you can refer to the ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"List of HTTP status codes"})," (Wikipedia)."]}),"\n",(0,s.jsx)(r.h2,{id:"replacing-default-pages",children:"Replacing default pages"}),"\n",(0,s.jsx)(r.p,{children:"To replace default 4D Web Server error pages with your own pages you just need to:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"put custom HTML pages at the first level of the application's web folder,"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'name the custom pages "{statusCode}.html" (for example, "404.html").'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'}),"\n",(0,s.jsx)(r.p,{children:"For example, when an HTTP response returns a status code 404:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'4D Web Server tries to send a "404.html" page located in the application\'s web folder.'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"If not found, 4D Web Server then uses its default error page."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"If you define the following custom pages in your web folder:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(310079).Z+"",width:"166",height:"287"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'the "5xx.html" page will be served for any 5xx error status.'}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},310079:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);