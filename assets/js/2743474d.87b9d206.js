"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91011"],{348688:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","description":"SAX GET XML ELEMENT VALUE ( document ; value )","source":"@site/versioned_docs/version-20-R9/commands-legacy/sax-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-element-value","permalink":"/docs/commands/sax-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","slug":"/commands/sax-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ELEMENT","permalink":"/docs/commands/sax-get-xml-element"},"next":{"title":"SAX GET XML ENTITY","permalink":"/docs/commands/sax-get-xml-entity"}}'),l=t("785893"),d=t("250065");let r={id:"sax-get-xml-element-value",title:"SAX GET XML ELEMENT VALUE",slug:"/commands/sax-get-xml-element-value",displayed_sidebar:"docs"},a=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SAX GET XML ELEMENT VALUE"})," ( ",(0,l.jsx)(n.em,{children:"document"})," ; ",(0,l.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"document"}),(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Reference of open document"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Text, Blob"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Element value"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"SAX GET XML ELEMENT VALUE"})," command allows you to get the ",(0,l.jsx)(n.em,{children:"value"})," of an XML element that exists in the XML document referenced in the ",(0,l.jsx)(n.em,{children:"document"})," parameter. This command must be called with the XML DATA SAX event. For more information about SAX events, refer to the description of the ",(0,l.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})," command."]}),"\n",(0,l.jsxs)(n.p,{children:["Pass a Text or BLOB type variable in the ",(0,l.jsx)(n.em,{children:"value"})," parameter. If you pass a BLOB, the command will automatically attempt to decode it into base64."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Let's look at the following piece of XML code:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:'<RootElement>\n\xa0\xa0\xa0<Child Att1="111" Att2="222" Att3="333">MyText</Child>\n</RootElement>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["The following instruction will return \u201CMyText\u201D in ",(0,l.jsx)(n.em,{children:"vValue"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ELEMENT VALUE(DocRef;vValue)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command was executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/sax-add-xml-element-value",children:"SAX ADD XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"877"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},d=s.createContext(l);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);