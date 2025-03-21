"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7069"],{387241:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/http-set-option","title":"HTTP SET OPTION","description":"HTTP SET OPTION ( option ; value )","source":"@site/versioned_docs/version-20-R7/commands-legacy/http-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/http-set-option","permalink":"/docs/20-R7/commands/http-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-set-option","title":"HTTP SET OPTION","slug":"/commands/http-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP SET CERTIFICATES FOLDER","permalink":"/docs/20-R7/commands/http-set-certificates-folder"},"next":{"title":"Hierarchical Lists","permalink":"/docs/20-R7/commands/theme/Hierarchical-Lists"}}'),i=n("785893"),o=n("250065");let r={id:"http-set-option",title:"HTTP SET OPTION",slug:"/commands/http-set-option",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HTTP SET OPTION"})," ( ",(0,i.jsx)(t.em,{children:"option"})," ; ",(0,i.jsx)(t.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"option"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Code of option to set"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Value of option"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{title:"Compatibility",type:"info",children:(0,i.jsxs)(t.p,{children:["This command is maintained for compatibility reasons only. It is now recommended to use the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/API/HTTPRequestClass",children:(0,i.jsx)(t.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"HTTP SET OPTION"})," command sets different options that are used during the next HTTP request triggered by the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-get",children:"HTTP Get"})," or ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-request",children:"HTTP Request"})," commands. You call this command as many times as there are options to set."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Options set are local to the current process. For components, they are local to the component being executed. ."]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.em,{children:"option"})," parameter, pass the number of the option to be set and in the ",(0,i.jsx)(t.em,{children:"value"})," parameter, pass the new value of this option. For the ",(0,i.jsx)(t.em,{children:"option"})," parameter, you can use one of the following predefined constants, available in the ",(0,i.jsx)(t.em,{children:"HTTP Client"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP client log"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"7"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"}),' = one of the following constants: HTTP disable log: HTTP client debug log is disabled (default) HTTP enable log with all body parts: HTTP client debug log is enabled with body parts in response and request HTTP enable log with request body: HTTP client debug log is enabled with body part in request only HTTP enable log with response body: HTTP client debug log is enabled with body part in response only HTTP enable log without body: HTTP client debug log is enabled without body parts (body size is provided in this case) Allows you to get or set the status of the HTTP client request log file. When enabled, this file, named "4DHTTPClientLog_nn.txt", is stored in the "Logs" folder of the application (nn is the file number). It is useful for debugging issues related to the HTTP client requests. It records each request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well. For more information, please refer to the ',(0,i.jsx)(t.em,{children:"Description of log files"})," section."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP compression"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"6"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = 0 (do not compress) or 1 (compress). Default value: 0",(0,i.jsx)(t.br,{}),"This option enables or disables the compression mechanism intended to accelerate exchanges for requests between the client and server. When this mechanism is enabled, the HTTP client uses deflate or gzip compression depending on the server response."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP display auth dial"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = 0 (do not display dialogue box) or 1 (display dialogue box). Default value: 0",(0,i.jsx)(t.br,{}),"This option displays the authentication dialog box when the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-get",children:"HTTP Get"})," or ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-request",children:"HTTP Request"})," command is executed. By default, this command never displays the dialog box and you must normally use the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-authenticate",children:"HTTP AUTHENTICATE"})," command. However, if you want an authentication dialog box to appear so that users can enter their identifiers, then pass 1 in value. The dialog box only appears when the request requires authentication."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP follow redirect"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = 0 (do not accept redirections) or 1 (accept redirections). ",(0,i.jsx)(t.br,{}),"Default value = 1"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP max redirect"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = Maximum number of redirections accepted",(0,i.jsx)(t.br,{}),"Default value = 2"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP reset auth settings"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"5"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = 0 (do not delete information) or 1 (delete information). Default value: 0",(0,i.jsx)(t.br,{}),"This option indicates to 4D to reset the authentication information of the user (user name, password, method) after each execution of the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-get",children:"HTTP Get"})," or ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-request",children:"HTTP Request"})," command in the same process. By default, this information is kept and reused for each request. Pass 1 in ",(0,i.jsx)(t.em,{children:"value"})," to delete this information after each call. Note that regardless of the setting, this information is deleted when the process is killed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HTTP timeout"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"value"})," = timeout of client request, expressed in seconds. This timeout sets how long the HTTP client waits for the server to respond. After this period of time has passed, the client closes the session and the request is lost.",(0,i.jsx)(t.br,{}),"By default, this timeout is 120 seconds. It can be changed because of specific characteristics (network state, request characteristics, etc.)."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"You can call options in any order. If the same option is set more than once, only the value of the last call is taken into account."}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/http-get-option",children:"HTTP GET OPTION"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1160"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);