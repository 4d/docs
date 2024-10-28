"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97836],{711958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(474848),d=t(28453);const c={id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},o=void 0,r={id:"commands-legacy/sax-set-xml-declaration",title:"SAX SET XML DECLARATION",description:"SAX SET XML DECLARATION ( document ; encoding {; standalone} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/sax-set-xml-declaration.md",sourceDirName:"commands-legacy",slug:"/commands/sax-set-xml-declaration",permalink:"/docs/commands/sax-set-xml-declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX OPEN XML ELEMENT ARRAYS",permalink:"/docs/commands/sax-open-xml-element-arrays"},next:{title:"XML DECODE",permalink:"/docs/commands/xml-decode"}},i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,s.jsx)(n.em,{children:"document"})," ; ",(0,s.jsx)(n.em,{children:"encoding"})," {; ",(0,s.jsx)(n.em,{children:"standalone"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of open document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encoding"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"XML document character set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"standalone"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"True = the document is standalone False (default) = document is not standalone"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," command initializes the XML document referenced in ",(0,s.jsx)(n.em,{children:"document"})," using the specified ",(0,s.jsx)(n.em,{children:"encoding"}),". Optionnally, you can set the ",(0,s.jsx)(n.em,{children:"standalone"})," attribute."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"encoding"}),": Indicates the character set used in the document. By default (if the command is not called), the UTF-8 character set (compressed Unicode) is used.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Note:"})," If you pass a character set that is not supported by 4D XML commands, UTF-8 will be used. Refer to ",(0,s.jsx)(n.em,{children:"Character Sets"})," to see the list of character sets supported (UTF-8 is however recommended in most cases)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"standalone"}),": Indicates whether the document is standalone (",(0,s.jsx)(n.strong,{children:"True"}),") or if it needs other files or external resources to operate (",(0,s.jsx)(n.strong,{children:"False"}),"). By default (if the command is not called or if the parameter is omitted), the document is not standalone."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You can specify the indentation of the document thanks to the ",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command before writing anything."]}),"\n",(0,s.jsx)(n.p,{children:"This command must be called one time per document and before the first XML set command in the document; otherwise, an error message will be generated."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SAX SET XML DECLARATION($DocRef;"UTF-16";True)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... will write this line in the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<<?xml version="1.0" encoding="UTF-16" standalone="yes"?>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/sax-get-xml-document-values",children:"SAX GET XML DOCUMENT VALUES"})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(296540);const d={},c=s.createContext(d);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);