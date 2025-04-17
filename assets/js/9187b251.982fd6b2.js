"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37659"],{371489:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-picture-from-library","title":"GET PICTURE FROM LIBRARY","description":"GET PICTURE FROM LIBRARY ( picRef  ; picture )GET PICTURE FROM LIBRARY ( picName ; picture )","source":"@site/versioned_docs/version-20-R9/commands-legacy/get-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-library","permalink":"/docs/commands/get-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-library.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-picture-from-library","title":"GET PICTURE FROM LIBRARY","slug":"/commands/get-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FORMATS","permalink":"/docs/commands/get-picture-formats"},"next":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/commands/get-picture-keywords"}}'),i=n("785893"),s=n("250065");let c={id:"get-picture-from-library",title:"GET PICTURE FROM LIBRARY",slug:"/commands/get-picture-from-library",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," ( *picRef * ; ",(0,i.jsx)(r.em,{children:"picture"})," )",(0,i.jsx)(r.br,{}),(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," ( ",(0,i.jsx)(r.em,{children:"picName"})," ; ",(0,i.jsx)(r.em,{children:"picture"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"picRef | picName"}),(0,i.jsx)(r.td,{children:"Integer, Text"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Reference number of Picture Library graphic or Name of Picture Library graphic"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"picture"}),(0,i.jsx)(r.td,{children:"Picture"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Picture from the Picture Library"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," command returns in the ",(0,i.jsx)(r.em,{children:"picture"})," parameter the Picture Library graphic whose reference number is passed in ",(0,i.jsx)(r.em,{children:"picRef"})," or whose name is passed in ",(0,i.jsx)(r.em,{children:"picName"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If there is no picture with that reference number or name, ",(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," leaves ",(0,i.jsx)(r.em,{children:"picture"})," unchanged."]}),"\n",(0,i.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(r.p,{children:["The following example returns in ",(0,i.jsx)(r.em,{children:"vgMyPicture"})," the picture whose reference number is stored in the local variable ",(0,i.jsx)(r.em,{children:"$vlPicRef"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:"\xa0GET PICTURE FROM LIBRARY($vlPicRef;vgMyPicture)\n"})}),"\n",(0,i.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(r.p,{children:["The following example returns in ",(0,i.jsx)(r.em,{children:"$DDcom_Prot_MyPicture"}),' the picture with the name "DDcom_Prot_Button1" stored in the Picture Library:']}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0GET PICTURE FROM LIBRARY("DDcom_Prot_Button1";$DDcom_Prot_MyPicture)\n'})}),"\n",(0,i.jsx)(r.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsxs)(r.p,{children:["See the third example for the ",(0,i.jsx)(r.a,{href:"/docs/commands/picture-library-list",children:"PICTURE LIBRARY LIST"})," command."]}),"\n",(0,i.jsx)(r.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(r.p,{children:"If the Picture Library exists, the OK variable is set to 1. Otherwise, OK is set to zero."}),"\n",(0,i.jsx)(r.h2,{id:"error-management",children:"Error management"}),"\n",(0,i.jsx)(r.p,{children:"If there is not enough memory to return the picture, an error -108 is generated. You can catch this error using an error-handling method."}),"\n",(0,i.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Command number"}),(0,i.jsx)(r.td,{children:"565"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2717"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modifies variables"}),(0,i.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return c}});var t=n(667294);let i={},s=t.createContext(i);function c(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);