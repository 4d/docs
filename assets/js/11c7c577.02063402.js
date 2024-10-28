"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84213],{452542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(474848),d=t(28453);const o={id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/dom-set-xml-declaration",title:"DOM SET XML DECLARATION",description:"DOM SET XML DECLARATION ( elementRef ; encoding {; standalone {; indentation}} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/dom-set-xml-declaration.md",sourceDirName:"commands-legacy",slug:"/commands/dom-set-xml-declaration",permalink:"/docs/commands/dom-set-xml-declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM SET XML ATTRIBUTE",permalink:"/docs/commands/dom-set-xml-attribute"},next:{title:"DOM SET XML ELEMENT NAME",permalink:"/docs/commands/dom-set-xml-element-name"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"encoding"})," {; ",(0,s.jsx)(n.em,{children:"standalone"})," {; ",(0,s.jsx)(n.em,{children:"indentation"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"XML element reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encoding"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"XML document character set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"standalone"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"True = document is standalone False (default) = document is not standalone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indentation"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"*** Obsolete, do not use ***"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," command allows you to define various options that are useful in creating the XML tree set using ",(0,s.jsx)(n.em,{children:"elementRef"}),". These options concern the encoding and the standalone property of the tree:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"encoding"}),": Indicates the character set used in the document. By default (if the command is not called), the UTF-8 character set (compressed Unicode) is used.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Note:"})," If you pass a character set that is not supported by 4D XML commands, UTF-8 will be used. Refer to ",(0,s.jsx)(n.em,{children:"Character Sets"})," to see the list of character sets supported (UTF-8 is however recommended in most cases)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"standalone"}),": Indicates whether the tree is standalone (",(0,s.jsx)(n.strong,{children:"True"}),") or if it needs other files or external resources to operate (",(0,s.jsx)(n.strong,{children:"False"}),"). By default (if the command is not called or if the parameter is omitted), the tree is not standalone.\n",(0,s.jsx)(n.strong,{children:"Compatibility note:"})," The ",(0,s.jsx)(n.em,{children:"indentation"})," parameter is kept for reasons of compatibility with previous versions of 4D but its use is not recommended in 4D v12. From now on, to specify the indentation of the document, it is strongly recommended to use the ",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example sets the encoding to use and the standalone option in the ",(0,s.jsx)(n.em,{children:"elementRef"})," element:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML DECLARATION(elementRef;"UTF-16";True)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})]})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(296540);const d={},o=s.createContext(d);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);