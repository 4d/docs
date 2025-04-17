"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13369"],{360239:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/sax-open-xml-element","title":"SAX OPEN XML ELEMENT","description":"SAX OPEN XML ELEMENT ( document ; tag {; attribName ; attribValue} {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/sax-open-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element","permalink":"/docs/20-R8/commands/sax-open-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-open-xml-element","title":"SAX OPEN XML ELEMENT","slug":"/commands/sax-open-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML PROCESSING INSTRUCTION","permalink":"/docs/20-R8/commands/sax-get-xml-processing-instruction"},"next":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/20-R8/commands/sax-open-xml-element-arrays"}}'),r=t("785893"),l=t("250065");let a={id:"sax-open-xml-element",title:"SAX OPEN XML ELEMENT",slug:"/commands/sax-open-xml-element",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"tag"})," {; ",(0,r.jsx)(n.em,{children:"attribName"})," ; ",(0,r.jsx)(n.em,{children:"attribValue"}),"} {; ",(0,r.jsx)(n.em,{children:"attribName2"})," ; ",(0,r.jsx)(n.em,{children:"attribValue2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"attribNameN"})," ; ",(0,r.jsx)(n.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of open document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tag"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name of element to open"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Attribute name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribValue"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Attribute value"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT"})," command adds a new element in the XML document referenced by ",(0,r.jsx)(n.em,{children:"document"})," as well as, optionally, attributes and their values."]}),"\n",(0,r.jsx)(n.p,{children:"The added element is \u201Copen\u201D in the document (the end tag is not added). To close an element created using this command, you must either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"})," command, or"]}),"\n",(0,r.jsx)(n.li,{children:"Close the XML document. In this case, 4D will automatically add the necessary XML end tags."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"tag"}),", pass the name of the element to be created. This name may only contain letters, numbers and the characters \u201C.\u201D, \u201C-\u201C,\u201D_\u201D and \u201C:\u201D. If an invalid character is passed in ",(0,r.jsx)(n.em,{children:"tag"}),", an error will be generated."]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, the command can pass one or more attribute/value pairs (in the form of variables, fields or literal values) using the ",(0,r.jsx)(n.em,{children:"attribName"})," and ",(0,r.jsx)(n.em,{children:"attribValue"})," parameters. You can pass as many attribute/value pairs as you want."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following statement:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vElement:="Book"\n\xa0SAX OPEN XML ELEMENT($DocRef;vElement)\n'})}),"\n",(0,r.jsx)(n.p,{children:"... writes the following line in the document:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<Book\n"})}),"\n",(0,r.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(n.p,{children:["If an invalid character is passed in ",(0,r.jsx)(n.em,{children:"tag"}),", an error is generated."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/sax-open-xml-element-arrays",children:"SAX OPEN XML ELEMENT ARRAYS"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"853"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);