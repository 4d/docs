"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76620"],{977174:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/method-get-attributes","title":"METHOD GET ATTRIBUTES","description":"METHOD GET ATTRIBUTES ( path ; attributes {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attributes","permalink":"/docs/20-R8/commands/method-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-attributes","title":"METHOD GET ATTRIBUTES","slug":"/commands/method-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD Get attribute","permalink":"/docs/20-R8/commands/method-get-attribute"},"next":{"title":"METHOD GET CODE","permalink":"/docs/20-R8/commands/method-get-code"}}'),r=n("785893"),a=n("250065");let d={id:"method-get-attributes",title:"METHOD GET ATTRIBUTES",slug:"/commands/method-get-attributes",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD GET ATTRIBUTES"})," ( ",(0,r.jsx)(t.em,{children:"path"})," ; ",(0,r.jsx)(t.em,{children:"attributes"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"Text, Text array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Method path(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"Object, Object array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Attribute(s) for selected method(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD GET ATTRIBUTES"})," command returns, in ",(0,r.jsx)(t.em,{children:"attributes"}),", the current value of all attributes for the method(s) specified in the ",(0,r.jsx)(t.em,{children:"path"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["This command only works with project methods. If you pass an invalid ",(0,r.jsx)(t.em,{children:"path"}),", an error is generated."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"path"}),", you can pass either a text containing a method path, or a text array containing an array of paths. You will need to pass the same kind of parameter (variable or array) in ",(0,r.jsx)(t.em,{children:"attributes"})," in order to get the appropriate attributes."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"attributes"}),", you pass an object or an array of objects, depending on the kind of parameter passed in ",(0,r.jsx)(t.em,{children:"path"}),'. All the attributes for the method(s) are returned as object properties, with "True"/"False" values for Boolean attributes, and text or additional values if necessary (for example, "scope":"table" for the 4D Mobile property).']}),"\n",(0,r.jsxs)(t.p,{children:["If the command is executed from a component, by default it applies to the component methods. If you pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter, it accesses the methods of the host database."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compatibility note:"})," The ",(0,r.jsx)(t.em,{children:"published4DMobile"})," property is deprecated as for 4D v18."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["You want to get the attributes of the ",(0,r.jsx)(t.em,{children:"sendMail"})," project method. You can write:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $att : Object\n\xa0METHOD GET ATTRIBUTES("sendMail";$att)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After execution, $att contains, for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "invisible":false,\n\xa0\xa0\xa0 "preemptive":"capable",\n\xa0\xa0\xa0 "publishedWeb":false,\n\xa0\xa0\xa0 "publishedSoap":false,\n\xa0\xa0\xa0 "publishedWsdl":false,\n\xa0\xa0\xa0 "shared":false,\n\xa0\xa0\xa0 "publishedSql":false,\n\xa0\xa0\xa0 "executedOnServer":false,\n\xa0\xa0\xa0 "published4DMobile":{\n\xa0\xa0\xa0 \xa0\xa0\xa0 "scope":"table",\n\xa0\xa0\xa0 \xa0\xa0\xa0 "table":"Table_1"\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1334"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);