"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34911"],{44708:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>r,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/sax-close-xml-element","title":"SAX CLOSE XML ELEMENT","description":"SAX CLOSE XML ELEMENT ( document )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sax-close-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-close-xml-element","permalink":"/docs/commands/sax-close-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-close-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-close-xml-element","title":"SAX CLOSE XML ELEMENT","slug":"/commands/sax-close-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/commands/sax-add-xml-element-value"},"next":{"title":"SAX GET XML CDATA","permalink":"/docs/commands/sax-get-xml-cdata"}}'),l=s("785893"),d=s("250065");let c={id:"sax-close-xml-element",title:"SAX CLOSE XML ELEMENT",slug:"/commands/sax-close-xml-element",displayed_sidebar:"docs"},o=void 0,r={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",book:"book",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SAX CLOSE XML ELEMENT"})," ( ",(0,l.jsx)(n.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"document"}),(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Reference of open document"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The SAX CLOSE XML ELEMENT command writes the statements necessary for closing the last element opened using the ",(0,l.jsx)(n.a,{href:"/docs/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"})," command in the XML document referenced by ",(0,l.jsx)(n.em,{children:"document"})]}),"\n",(0,l.jsx)(n.p,{children:"The use of this command is optional. In fact, 4D will automatically add the necessary end tags for any unclosed elements when XML documents are closed."}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:["If the last element opened is ",(0,l.jsx)(n.em,{children:(0,l.jsx)(n.book,{})}),", the following statement:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SAX CLOSE XML ELEMENT($DocRef)\n"})}),"\n",(0,l.jsx)(n.p,{children:"... will write the following line in the document:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/sax-open-xml-element-arrays",children:"SAX OPEN XML ELEMENT ARRAYS"})]}),"\n",(0,l.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"854"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let l={},d=t.createContext(l);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);