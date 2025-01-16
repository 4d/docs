"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12615"],{759979:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-get-events","title":"OBJECT GET EVENTS","description":"OBJECT GET EVENTS ( { ;} object ; arrEvents* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-events.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-events","permalink":"/docs/commands/object-get-events","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-events.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-events","title":"OBJECT GET EVENTS","slug":"/commands/object-get-events","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get enterable","permalink":"/docs/commands/object-get-enterable"},"next":{"title":"OBJECT Get filter","permalink":"/docs/commands/object-get-filter"}}'),r=n("785893"),i=n("250065");let o={id:"object-get-events",title:"OBJECT GET EVENTS",slug:"/commands/object-get-events",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT GET EVENTS"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"arrEvents"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:'Object name or "" to designate the form (if * is specified) orField or variable (if * is omitted)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"arrEvents"}),(0,r.jsx)(t.td,{children:"Array integer"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array of enabled events"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT GET EVENTS"})," command gets the current configuration of the form events for the object(s) designated by the ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(t.p,{children:["Form events can be enabled/disabled either using the Property List, or using the ",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-events",children:"OBJECT SET EVENTS"})," command if it is called in the current process."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).",(0,r.jsx)(t.br,{}),"\nTo get the configuration of events for the form itself, pass the optional ",(0,r.jsx)(t.em,{children:"*"}),' parameter and an empty string "" in object: in this case, you designate the current form.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If you want to get events for a subform related to a table, you can only use the syntax based on the object name."]}),"\n",(0,r.jsxs)(t.p,{children:["Pass a longint array in the ",(0,r.jsx)(t.em,{children:"arrEvents"}),' parameter. When the command is executed, this array is automatically sized and receives all the predefined or custom form events that are enabled for the object or the form. You can compare the values received with the constants of the "',(0,r.jsx)(t.em,{children:"Form Events"}),'" theme.']}),"\n",(0,r.jsxs)(t.p,{children:["Note that the ",(0,r.jsx)(t.em,{children:"arrEvents"})," array is returned empty if no object method is associated with the object or if no form method is associated with the form."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to enable two events and get the list of events for an object:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($ArrCurrentEvents;0)\n\xa0ARRAY LONGINT($ArrEnabled;2)\n\xa0$ArrEnabled{1}:=On Header Click\n\xa0$ArrEnabled{2}:=On Footer Click\n\xa0OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)\n\xa0OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/object-set-events",children:"OBJECT SET EVENTS"})}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1238"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);