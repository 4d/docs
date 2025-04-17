"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23475"],{8934:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands/wa-get-context","title":"WA Get context","description":"WA Get context ( { ;} object ) -> contextObj*","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/wa-get-context.md","sourceDirName":"commands","slug":"/commands/wa-get-context","permalink":"/docs/fr/commands/wa-get-context","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fwa-get-context.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-get-context","title":"WA Get context"},"sidebar":"docs","previous":{"title":"WA Forward URL available","permalink":"/docs/fr/commands/wa-forward-url-available"},"next":{"title":"WA Get current URL","permalink":"/docs/fr/commands/wa-get-current-url"}}'),s=t("785893"),d=t("250065");let i={id:"wa-get-context",title:"WA Get context"},c=void 0,o={},l=[{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA Get context"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ) -> ",(0,s.jsx)(n.em,{children:"contextObj"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, ",(0,s.jsx)(n.em,{children:"object"})," is an object name (string). If omitted, ",(0,s.jsx)(n.em,{children:"object"})," is a variable."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Objet de formulaire"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contextObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsxs)(n.td,{children:["Context object if previously defined, otherwise ",(0,s.jsx)(n.code,{children:"null"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WA Get context"})," command retrieves the context object defined for ",(0,s.jsx)(n.code,{children:"$4d"})," in the Web area designated by the * and ",(0,s.jsx)(n.em,{children:"object"})," parameters using ",(0,s.jsx)(n.a,{href:"./wa-set-context-object.md",children:(0,s.jsx)(n.code,{children:"WA SET CONTEXT"})}),". If ",(0,s.jsx)(n.code,{children:"WA SET CONTEXT"})," was not called for the web area the command returns ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The command is only usable with an embedded web area where the ",(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:(0,s.jsx)(n.strong,{children:"Use embedded web rendering engine"})})," and ",(0,s.jsx)(n.strong,{children:"Access 4D methods"})," parameters are set to ",(0,s.jsx)(n.code,{children:"true"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Checking if a context exists:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $contextObj:=WA Get context(*; "myWebArea")\n\n If ($contextObj=Null)\n	ALERT("No context set for this web area.")\n Else \n	ALERT("Context is defined!")\n End if\n'})}),"\n",(0,s.jsx)(n.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/wa-set-context",children:"WA SET CONTEXT"})}),"\n",(0,s.jsx)(n.h3,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1849"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);