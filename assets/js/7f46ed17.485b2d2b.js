"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29667"],{643836:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/wa-get-last-url-error","title":"WA GET LAST URL ERROR","description":"WA GET LAST URL ERROR ( { ;} object ; url ; description ; errorCode* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/wa-get-last-url-error.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-url-error","permalink":"/docs/commands/wa-get-last-url-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-url-error.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-last-url-error","title":"WA GET LAST URL ERROR","slug":"/commands/wa-get-last-url-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get last filtered URL","permalink":"/docs/commands/wa-get-last-filtered-url"},"next":{"title":"WA Get page content","permalink":"/docs/commands/wa-get-page-content"}}'),s=n("785893"),i=n("250065");let d={id:"wa-get-last-url-error",title:"WA GET LAST URL ERROR",slug:"/commands/wa-get-last-url-error",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WA GET LAST URL ERROR"})," ( {* ;} ",(0,s.jsx)(r.em,{children:"object"})," ; ",(0,s.jsx)(r.em,{children:"url"})," ; ",(0,s.jsx)(r.em,{children:"description"})," ; ",(0,s.jsx)(r.em,{children:"errorCode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"*"}),(0,s.jsx)(r.td,{children:"Operator"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"object"}),(0,s.jsx)(r.td,{children:"any"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"url"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"URL at origin of error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"description"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Description of error (Mac OS)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"errorCode"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Error code"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The WA GET LAST URL ERROR command recovers several items of information about the last error that occurred in the Web area designated by the ",(0,s.jsx)(r.em,{children:"*"})," and ",(0,s.jsx)(r.em,{children:"object"})," parameters."]}),"\n",(0,s.jsx)(r.p,{children:"This information is returned in three variables:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"url"}),": URL causing error."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"description"})," (Mac OS only): A text describing the error (if available). If it is not possible to associate a text with the error, an empty string is returned. Under Windows, this parameter is always returned empty."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"errorCode"}),": The error code.\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If the code is >=400, it is an error related to the HTTP protocol. For more information about this type of error, refer to the following address:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"})})]}),"\n",(0,s.jsx)(r.li,{children:"Otherwise, it is an error returned by the WebKit (Mac OS) or ActiveX (Windows)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"It is recommended to call this command within the framework of the On URL Loading Error form event to find out the cause of the error that just occurred."}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/commands/form-event-code",children:"Form event code"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"1034"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return d}});var t=n(667294);let s={},i=t.createContext(s);function d(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);