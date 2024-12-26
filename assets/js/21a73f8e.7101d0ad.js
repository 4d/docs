"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4999"],{977829:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/sax-add-xml-cdata","title":"SAX ADD XML CDATA","description":"SAX ADD XML CDATA ( document ; data )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sax-add-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-cdata","permalink":"/docs/commands/sax-add-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-cdata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-cdata","title":"SAX ADD XML CDATA","slug":"/commands/sax-add-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD PROCESSING INSTRUCTION","permalink":"/docs/commands/sax-add-processing-instruction"},"next":{"title":"SAX ADD XML COMMENT","permalink":"/docs/commands/sax-add-xml-comment"}}'),d=t("785893"),a=t("250065");let r={id:"sax-add-xml-cdata",title:"SAX ADD XML CDATA",slug:"/commands/sax-add-xml-cdata",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX ADD XML CDATA"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"data"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Reference of open document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"Blob, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Text or BLOB to insert in the document between CData tags"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["In the XML document referenced by ",(0,d.jsx)(n.em,{children:"document"}),", the SAX ADD XML CDATA command adds ",(0,d.jsx)(n.em,{children:"data"})," of the text or BLOB type. This ",(0,d.jsx)(n.em,{children:"data"})," will be automatically framed between the ",(0,d.jsx)(n.em,{children:"<![CDATA["})," and ",(0,d.jsx)(n.em,{children:"]]> tags."})]}),"\n",(0,d.jsx)(n.p,{children:"The text included in a CData section is ignored by the XML interpreter."}),"\n",(0,d.jsxs)(n.p,{children:["If you want to encode the contents of data, you must use the ",(0,d.jsx)(n.a,{href:"/docs/commands/base64-encode",children:"BASE64 ENCODE"})," command. In this case, of course, you must pass a BLOB in ",(0,d.jsx)(n.em,{children:"data"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"In order for this command to operate correctly, an element must be open. Otherwise, an error will be generated."}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"You want to insert the following lines in your XML document:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"function matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 1\n\xa0\xa0\xa0\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 0\n\xa0\xa0\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"To do this, you just need to execute the following code:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMytext : Text\n\xa0...\xa0// place the text in the vtMytext variable here\n\xa0SAX ADD XML CDATA($DocRef;vtMytext)\n"})}),"\n",(0,d.jsx)(n.p,{children:"The result will thus be:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"<![CDATA[\nfunction matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 1\n\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 0\n\xa0\xa0\xa0}\n}\n]]>\n"})}),"\n",(0,d.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-cdata",children:"SAX GET XML CDATA"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"856"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let d={},a=s.createContext(d);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);