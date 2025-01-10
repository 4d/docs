"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45879"],{427841:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/php-set-option","title":"PHP SET OPTION","description":"PHP SET OPTION ( option ; value {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/php-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/php-set-option","permalink":"/docs/commands/php-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-set-option","title":"PHP SET OPTION","slug":"/commands/php-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP GET OPTION","permalink":"/docs/commands/php-get-option"},"next":{"title":"Pasteboard","permalink":"/docs/category/pasteboard"}}'),r=t("785893"),o=t("250065");let i={id:"php-set-option",title:"PHP SET OPTION",slug:"/commands/php-set-option",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP SET OPTION"})," ( ",(0,r.jsx)(n.em,{children:"option"})," ; ",(0,r.jsx)(n.em,{children:"value"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Option to be set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"New value of option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed: modification only applied to next call"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibility",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP is deprecated in 4D"}),". It is now recommended to use the ",(0,r.jsx)(n.a,{href:"/docs/API/SystemWorkerClass",children:(0,r.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"PHP SET OPTION"})," command is used to set specific options before calling the ",(0,r.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," command. The scope of this command is the current process."]}),"\n",(0,r.jsxs)(n.p,{children:['Pass a constant from the "',(0,r.jsx)(n.em,{children:"PHP"}),'" theme in the ',(0,r.jsx)(n.em,{children:"option"})," parameter to designate the option to be modified and pass the new value for the option in the ",(0,r.jsx)(n.em,{children:"value"})," parameter."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PHP raw result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Definition of processing mode for HTTP headers returned by PHP in the execution result when this result is of the Text type (when the result is of the BLOB type, headers are always kept).",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Possible value(s)"}),": Boolean. False (default value = remove HTTP headers from result. True = keep HTTP headers."]})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.strong,{children:"PHP SET OPTION"})," sets the option for all subsequent calls to ",(0,r.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," of the process. If you want to set it for the next call only, pass the star (",(0,r.jsx)(n.em,{children:"*"}),") parameter."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/php-get-option",children:"PHP GET OPTION"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1059"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);