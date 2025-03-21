"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23815"],{720053:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/method-set-attributes","title":"METHOD SET ATTRIBUTES","description":"METHOD SET ATTRIBUTES ( path ; attributes {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/method-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attributes","permalink":"/docs/20-R7/commands/method-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attributes","title":"METHOD SET ATTRIBUTES","slug":"/commands/method-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/20-R7/commands/method-set-attribute"},"next":{"title":"METHOD SET CODE","permalink":"/docs/20-R7/commands/method-set-code"}}'),r=s("785893"),a=s("250065");let d={id:"method-set-attributes",title:"METHOD SET ATTRIBUTES",slug:"/commands/method-set-attributes",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTES"})," ( ",(0,r.jsx)(t.em,{children:"path"})," ; ",(0,r.jsx)(t.em,{children:"attributes"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"Text, Text array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Method path(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"Object, Object array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribute(s) to set for selected method(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTES"})," command allows you to set the ",(0,r.jsx)(t.em,{children:"attributes"})," values for the method(s) specified in the ",(0,r.jsx)(t.em,{children:"path"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"path"}),", you can pass either a text containing a method path, or a text array containing an array of paths. You will need to pass the same kind of parameter (string or array) in ",(0,r.jsx)(t.em,{children:"attributes"})," in order to set the appropriate attributes. This command only works with project methods. If you pass an invalid ",(0,r.jsx)(t.em,{children:"path"}),", an error is generated."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"attributes"}),", you pass an object or an array of objects (depending on the kind of parameter you passed in ",(0,r.jsx)(t.em,{children:"path"}),") containing all the attributes that you want to set for the method(s)."]}),"\n",(0,r.jsxs)(t.p,{children:["Method attributes must be set using the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/ob-set",children:"OB SET"})," or ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/ob-set-array",children:"OB SET ARRAY"})," commands, with True or False values for Boolean attributes, or specific values for extended attributes. Only attributes that are present in the ",(0,r.jsx)(t.em,{children:"attributes"})," parameter will be updated in the method attributes."]}),"\n",(0,r.jsxs)(t.p,{children:["If the command is executed from a component, by default it applies to the component methods. If you pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter, it accesses the methods of the host database."]}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsx)(t.p,{children:"The supported attributes are:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-RAW",children:'{\xa0\xa0\xa0 "invisible" : false, // true if visible\xa0\xa0\xa0 "preemptive" : "capable" // or "incapable" or "indifferent"\xa0\xa0\xa0 "publishedWeb" : false,\xa0 // true if available through 4D tags and URLs\xa0\xa0\xa0 "publishedSoap": false,\xa0 // true if offered as Web Service\xa0\xa0\xa0 "publishedWsdl": false,\xa0 // true if published in WSDL\xa0\xa0\xa0 "shared" : false,\xa0 // true if shared by components and host database\xa0\xa0\xa0 "publishedSql" : false,\xa0 // true if available through SQL\xa0\xa0\xa0 "executedOnServer" : false, // true if executed on server}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"}),' "published4DMobile" attributes are deprecated as for 4D v18.']}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to set a single attribute:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $attributes : Object\n\xa0OB SET($attributes;"executedOnServer";True)\n\xa0METHOD SET ATTRIBUTES("aMethod";$attributes)\xa0//Only the "executedOnServer" attribute is modified\n'})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/method-get-attributes",children:"METHOD GET ATTRIBUTES"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1335"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return d}});var n=s(667294);let r={},a=n.createContext(r);function d(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);