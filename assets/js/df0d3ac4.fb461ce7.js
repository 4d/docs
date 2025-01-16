"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12732"],{869903:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/object-get-focus-rectangle-invisible","title":"OBJECT Get focus rectangle invisible","description":"OBJECT Get focus rectangle invisible ( { ;} object* ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-focus-rectangle-invisible.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-focus-rectangle-invisible","permalink":"/docs/20-R7/commands/object-get-focus-rectangle-invisible","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-focus-rectangle-invisible.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-focus-rectangle-invisible","title":"OBJECT Get focus rectangle invisible","slug":"/commands/object-get-focus-rectangle-invisible","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get filter","permalink":"/docs/20-R7/commands/object-get-filter"},"next":{"title":"OBJECT Get font","permalink":"/docs/20-R7/commands/object-get-font"}}'),i=t("785893"),r=t("250065");let c={id:"object-get-focus-rectangle-invisible",title:"OBJECT Get focus rectangle invisible",slug:"/commands/object-get-focus-rectangle-invisible",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get focus rectangle invisible"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable or field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object Name (if * is specified) or Variable or field (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = focus rectangle hidden, False = focus rectangle shown"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT Get focus rectangle invisible"})," command returns the status of the visibility option for the focus rectangle of the object(s) designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters for the current process . This setting corresponds to the ",(0,i.jsx)(n.strong,{children:"Hide focus rectangle"})," option that is available for enterable objects in the Property List in the Design mode. This command returns the current status of the option, as it is defined in Design mode or using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-focus-rectangle-invisible",children:"OBJECT SET FOCUS RECTANGLE INVISIBLE"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," You can only use this option under Mac OS. It has no effect under Windows."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," is a variable or a field. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:["The command returns ",(0,i.jsx)(n.strong,{children:"True"})," when the focus rectangle is hidden and ",(0,i.jsx)(n.strong,{children:"False"})," when it is shown."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-focus-rectangle-invisible",children:"OBJECT SET FOCUS RECTANGLE INVISIBLE"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1178"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);