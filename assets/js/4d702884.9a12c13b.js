"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63234"],{922738:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/web-send-text","title":"WEB SEND TEXT","description":"WEB SEND TEXT ( htmlText {; type} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-send-text.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-text","permalink":"/docs/commands/web-send-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-text","title":"WEB SEND TEXT","slug":"/commands/web-send-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND RAW DATA","permalink":"/docs/commands/web-send-raw-data"},"next":{"title":"WEB Server","permalink":"/docs/commands/web-server"}}'),r=n("785893"),d=n("250065");let i={id:"web-send-text",title:"WEB SEND TEXT",slug:"/commands/web-send-text",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WEB SEND TEXT"})," ( ",(0,r.jsx)(t.em,{children:"htmlText"})," {; ",(0,r.jsx)(t.em,{children:"type"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"htmlText"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"HTML text field or variable to be sent to the Web browser"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"MIME type"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WEB SEND TEXT"})," command directly sends HTML formatted text data."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"htmlText"})," parameter contains the data to be sent. Since 4D does not check the parameter content, make sure that the HTML encoding is correct."]}),"\n",(0,r.jsxs)(t.p,{children:["Any references to 4D variables and ",(0,r.jsx)(t.em,{children:"4DSCRIPT"})," type tags in the text are always parsed."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, if you omit the ",(0,r.jsx)(t.em,{children:"type"}),' parameter, 4D assumes that the data sent is of the "text/html" type. The command is then exactly the same as sending a BLOB of the "text/html" type using the ',(0,r.jsx)(t.a,{href:"/docs/commands/web-send-blob",children:"WEB SEND BLOB"})," command.",(0,r.jsx)(t.br,{}),"\nYou can also use the ",(0,r.jsx)(t.em,{children:"type"})," parameter to specify the MIME type of the text to be sent. For more information about the MIME types supported, refer to the description of the ",(0,r.jsx)(t.a,{href:"/docs/commands/web-send-blob",children:"WEB SEND BLOB"})," command."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0TEXT TO BLOB(""+String(Current time)+"";$blob;UTF8 Text without length)\n\xa0WEB SEND BLOB($blob;"text/html")\n'})}),"\n",(0,r.jsx)(t.p,{children:"... can be replaced by the single line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0WEB SEND TEXT(""+String(Current time)+"")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"677"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(667294);let r={},d=s.createContext(r);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);