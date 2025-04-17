"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8145"],{686095:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"FormEditor/print","title":"Print","description":"Settings","source":"@site/versioned_docs/version-20-R8/FormEditor/properties_Print.md","sourceDirName":"FormEditor","slug":"/FormEditor/print","permalink":"/docs/20-R8/FormEditor/print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print","title":"Print"},"sidebar":"docs","previous":{"title":"Menu","permalink":"/docs/20-R8/FormEditor/menu"},"next":{"title":"Window Size","permalink":"/docs/20-R8/FormEditor/windowSize"}}'),r=t("785893"),s=t("250065");let o={id:"print",title:"Print"},d=void 0,l={},c=[{value:"Settings",id:"settings",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}];function a(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,r.jsx)(n.p,{children:"Allows defining specific print settings for the form. This feature is useful to view printing page limits in the form editor."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibility:"})," Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands ",(0,r.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,r.jsx)(n.code,{children:"BLOB to print settings"})," which are more powerful."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can modify the following print settings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Paper format"}),"\n",(0,r.jsx)(n.li,{children:"Paper orientation"}),"\n",(0,r.jsx)(n.li,{children:"Page scaling"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Available options depend on the system configuration."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageFormat"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Available print properties: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperName"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperWidth"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orientation"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"landscape" (default is "portrait")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scale"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"minimum: 0"})]})]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);