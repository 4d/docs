"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50706"],{788753:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-entity","title":"SAX GET XML ENTITY","description":"SAX GET XML ENTITY ( document ; name ; value )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sax-get-xml-entity.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-entity","permalink":"/docs/commands/sax-get-xml-entity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-entity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-entity","title":"SAX GET XML ENTITY","slug":"/commands/sax-get-xml-entity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ELEMENT VALUE","permalink":"/docs/commands/sax-get-xml-element-value"},"next":{"title":"SAX Get XML node","permalink":"/docs/commands/sax-get-xml-node"}}'),d=t("785893"),r=t("250065");let i={id:"sax-get-xml-entity",title:"SAX GET XML ENTITY",slug:"/commands/sax-get-xml-entity",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML ENTITY"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"name"})," ; ",(0,d.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Reference of open document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Entity name"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"value"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Entity value"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"SAX GET XML ENTITY"})," command allows you to get the ",(0,d.jsx)(n.em,{children:"name"})," and ",(0,d.jsx)(n.em,{children:"value"})," of an XML entity that exists in the XML document referenced in the ",(0,d.jsx)(n.em,{children:"document"})," parameter. This command must be called with the XML Entity SAX event. For more information about SAX events, refer to the description of the ",(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})," command."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"Let's look at the following piece of XML code:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE body [\n\xa0\xa0\xa0<!ELEMENT body (element*)>\n\xa0\xa0\xa0<!ELEMENT element (#PCDATA)>\n\xa0\xa0\xa0<!ENTITY name "Replacement">\n]>\n<body>\n\xa0\xa0\xa0<element>Entity updated by &name;</element>\n</body>\n'})}),"\n",(0,d.jsxs)(n.p,{children:["The following instruction will return \u201Cname\u201D in ",(0,d.jsx)(n.em,{children:"vName"})," and \u201CReplacement\u201D in ",(0,d.jsx)(n.em,{children:"vValue"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ENTITY(DocRef;vName;vValue)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"879"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);