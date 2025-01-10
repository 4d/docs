"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81145"],{598417:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/web-set-home-page","title":"WEB SET HOME PAGE","description":"WEB SET HOME PAGE ( homePage )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-set-home-page.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-home-page","permalink":"/docs/commands/web-set-home-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-home-page.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-set-home-page","title":"WEB SET HOME PAGE","slug":"/commands/web-set-home-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Server list","permalink":"/docs/commands/web-server-list"},"next":{"title":"WEB SET HTTP HEADER","permalink":"/docs/commands/web-set-http-header"}}'),r=n("785893"),o=n("250065");let i={id:"web-set-home-page",title:"WEB SET HOME PAGE",slug:"/commands/web-set-home-page",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WEB SET HOME PAGE"})," ( ",(0,r.jsx)(t.em,{children:"homePage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"homePage"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:'Page name or HTML access path to the page or "" to not send the custom home page'})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WEB SET HOME PAGE"})," command allows you to modify the custom home page for the current Web process."]}),"\n",(0,r.jsx)(t.p,{children:"The defined page is linked to the Web process, you can therefore define the different home pages depending, for example, on the user that is connected. This page can either be static or semi-dynamic."}),"\n",(0,r.jsxs)(t.p,{children:["You pass the name of the HTML home page or the page\u2019s HTML access path to the ",(0,r.jsx)(t.em,{children:"homePage"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If the page specified in the ",(0,r.jsx)(t.em,{children:"homePage"})," parameter does not exist when the Web process accesses it for the first time, the Web server creates it and assigns it the contents of the default home page (see )."]}),"\n",(0,r.jsxs)(t.p,{children:["To stop sending ",(0,r.jsx)(t.em,{children:"homePage"})," as home page for the current Web process, execute ",(0,r.jsx)(t.strong,{children:"WEB SET HOME PAGE"}),' with an empty string ("") passed in ',(0,r.jsx)(t.em,{children:"homePage"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The default home page of the Web server is specified in the Database Settings dialog box."]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"639"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var s=n(667294);let r={},o=s.createContext(r);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);