"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89441],{867240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>i,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var s=t(474848),d=t(28453);const r={id:"sax-add-xml-comment",title:"SAX ADD XML COMMENT",slug:"/commands/sax-add-xml-comment",displayed_sidebar:"docs"},c=void 0,a={id:"commands-legacy/sax-add-xml-comment",title:"SAX ADD XML COMMENT",description:"SAX ADD XML COMMENT ( document ; comment )",source:"@site/versioned_docs/version-20-R7/commands-legacy/sax-add-xml-comment.md",sourceDirName:"commands-legacy",slug:"/commands/sax-add-xml-comment",permalink:"/docs/commands/sax-add-xml-comment",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-comment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-add-xml-comment",title:"SAX ADD XML COMMENT",slug:"/commands/sax-add-xml-comment",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX ADD XML CDATA",permalink:"/docs/commands/sax-add-xml-cdata"},next:{title:"SAX ADD XML DOCTYPE",permalink:"/docs/commands/sax-add-xml-doctype"}},o={},m=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX ADD XML COMMENT"})," ( ",(0,s.jsx)(n.em,{children:"document"})," ; ",(0,s.jsx)(n.em,{children:"comment"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of open document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Comment to be added"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The SAX ADD XML COMMENT command adds a ",(0,s.jsx)(n.em,{children:"comment"})," in the XML document referenced by ",(0,s.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"An XML comment is a text whose contents will not be parsed by the XML interpreter. XML comments must be enclosed between the  characters."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vComment:="Created by 4D"\n\xa0SAX ADD XML COMMENT($DocRef;vComment)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... will write the following line in the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,s.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,s.jsx)(n.p,{children:"In the event of an error, the command returns an error which can be intercepted using an error-handling method."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/sax-add-xml-doctype",children:"SAX ADD XML DOCTYPE"})})]})}function i(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(296540);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);