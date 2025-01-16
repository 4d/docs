"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87074"],{537615:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-set-keyboard-layout","title":"OBJECT SET KEYBOARD LAYOUT","description":"OBJECT SET KEYBOARD LAYOUT ( { ;} object ; languageCode* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-keyboard-layout.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-keyboard-layout","permalink":"/docs/20-R7/commands/object-set-keyboard-layout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-keyboard-layout.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-keyboard-layout","title":"OBJECT SET KEYBOARD LAYOUT","slug":"/commands/object-set-keyboard-layout","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET INDICATOR TYPE","permalink":"/docs/20-R7/commands/object-set-indicator-type"},"next":{"title":"OBJECT SET LIST BY NAME","permalink":"/docs/20-R7/commands/object-set-list-by-name"}}'),d=n("785893"),o=n("250065");let r={id:"object-set-keyboard-layout",title:"OBJECT SET KEYBOARD LAYOUT",slug:"/commands/object-set-keyboard-layout",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"OBJECT SET KEYBOARD LAYOUT"})," ( {* ;} ",(0,d.jsx)(t.em,{children:"object"})," ; ",(0,d.jsx)(t.em,{children:"languageCode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"*"}),(0,d.jsx)(t.td,{children:"Operator"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable or field"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"any"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Object Name (if * is specified) or Variable or field (if * is omitted)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"languageCode"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:'RFC3066 ISO639 and ISO3166 language code,"" = no change'})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.strong,{children:"OBJECT SET KEYBOARD LAYOUT"})," command sets or dynamically modifies the keyboard layout associated with the object(s) designated by the ",(0,d.jsx)(t.em,{children:"object"})," and ",(0,d.jsx)(t.em,{children:"*"})," parameters for the current process."]}),"\n",(0,d.jsxs)(t.p,{children:["If you pass the optional ",(0,d.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,d.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,d.jsx)(t.em,{children:"object"})," is a variable or field. In this case, you pass a reference instead of a name."]}),"\n",(0,d.jsxs)(t.p,{children:["In ",(0,d.jsx)(t.em,{children:"languageCode"}),", you pass a string indicating the code of the language to use, based on RFC3066, ISO639 and ISO3166. For more information, refer to the description of the ",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-database-localization",children:"SET DATABASE LOCALIZATION"})," command."]}),"\n",(0,d.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/object-get-keyboard-layout",children:"OBJECT Get keyboard layout"})}),"\n",(0,d.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Command number"}),(0,d.jsx)(t.td,{children:"1179"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Thread safe"}),(0,d.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let d={},o=s.createContext(d);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);