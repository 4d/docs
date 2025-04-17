"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37421"],{720613:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","description":"SAX ADD XML ELEMENT VALUE ( document ; data {; *} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/sax-add-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-element-value","permalink":"/docs/commands/sax-add-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","slug":"/commands/sax-add-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML DOCTYPE","permalink":"/docs/commands/sax-add-xml-doctype"},"next":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/commands/sax-close-xml-element"}}'),d=s("785893"),a=s("250065");let r={id:"sax-add-xml-element-value",title:"SAX ADD XML ELEMENT VALUE",slug:"/commands/sax-add-xml-element-value",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"data"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Reference of open document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"Text, Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Text or variable to insert in the document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"If passed: encoding of special characters If omitted: no encoding"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["In the XML document referenced by ",(0,d.jsx)(n.em,{children:"document"}),", the ",(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," command adds ",(0,d.jsx)(n.em,{children:"data"})," directly without converting them. This command is equivalent, for instance, to inserting an attachment in the body of an e-mail."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"data"}),", you can either pass a character string directly, or a 4D variable. The variable contents will be converted into text before being included in the XML document. If ",(0,d.jsx)(n.em,{children:"data"})," is evaluated to ",(0,d.jsx)(n.em,{children:"undefined"}),", 4D uses an empty string. If you want to encode the contents of ",(0,d.jsx)(n.em,{children:"data"}),", you must use the ",(0,d.jsx)(n.a,{href:"/docs/commands/base64-encode",children:"BASE64 ENCODE"})," command. In this case, of course, you must passs a BLOB in ",(0,d.jsx)(n.em,{children:"data"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the command encodes special characters (< > \u201D \u2019...) contained in the ",(0,d.jsx)(n.em,{children:"data"})," parameter unless you have disabled this mechanism for the current process using the ",(0,d.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command by passing the XML raw data value to the XML string encoding option. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0XML SET OPTIONS($docRef;XML string encoding;XML raw data)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["In this context, to force the encoding of special parameters when calling ",(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"}),", you must pass the optional ",(0,d.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,d.jsx)(n.p,{children:"In order for this command to operate correctly, an element must be open. Otherwise, an error will be generated."}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.p,{children:["This example inserts the ",(0,d.jsx)(n.em,{children:"whitepaper.pdf"})," file into the open XML element:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var vBMyBLOB : Blob\n\xa0DOCUMENT TO BLOB("c:\\\\whitepaper.pdf";vBMyBLOB)\n\xa0SAX ADD XML ELEMENT VALUE($DocRef;vBMyBLOB)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1; otherwise, it is set to 0 and an error is generated."}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-element-value",children:"SAX GET XML ELEMENT VALUE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"855"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let d={},a=t.createContext(d);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);