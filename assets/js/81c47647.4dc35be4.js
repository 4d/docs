"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21835"],{559430:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/blob-to-picture","title":"BLOB TO PICTURE","description":"BLOB TO PICTURE ( pictureBlob ; picture {; codec} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/blob-to-picture.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-picture","permalink":"/docs/commands/blob-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-picture","title":"BLOB TO PICTURE","slug":"/commands/blob-to-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pictures","permalink":"/docs/category/pictures"},"next":{"title":"COMBINE PICTURES","permalink":"/docs/commands/combine-pictures"}}'),s=n("785893"),r=n("250065");let c={id:"blob-to-picture",title:"BLOB TO PICTURE",slug:"/commands/blob-to-picture",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"BLOB TO PICTURE"})," ( ",(0,s.jsx)(t.em,{children:"pictureBlob"})," ; ",(0,s.jsx)(t.em,{children:"picture"})," {; ",(0,s.jsx)(t.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pictureBlob"}),(0,s.jsx)(t.td,{children:"Blob"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"BLOB containing a picture"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"picture"}),(0,s.jsx)(t.td,{children:"Picture"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Picture from BLOB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"codec"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Picture codec ID"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"BLOB TO PICTURE"})," command inserts a picture stored in a BLOB into a 4D picture variable or field, regardless its original format."]}),"\n",(0,s.jsxs)(t.p,{children:["This command is similar to the command ",(0,s.jsx)(t.a,{href:"/docs/commands/read-picture-file",children:"READ PICTURE FILE"}),", it just applies to a BLOB instead of a file. It allows you to display pictures stored in native format into BLOBs. You can load a picture into a BLOB using, for example, the command ",(0,s.jsx)(t.a,{href:"/docs/commands/document-to-blob",children:"DOCUMENT TO BLOB"})," or ",(0,s.jsx)(t.a,{href:"/docs/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["A BLOB variable or field containing a picture is passed in the ",(0,s.jsx)(t.em,{children:"pictureBlob"})," parameter. The picture can be in any format supported natively by 4D. You can obtain the list of available formats using the ",(0,s.jsx)(t.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command. If you pass the optional ",(0,s.jsx)(t.em,{children:"codec"})," parameter, 4D will use the value provided in this parameter to decode the BLOB (see the specific functioning of the command with this third parameter below)."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass in the ",(0,s.jsx)(t.em,{children:"picture"})," parameter the 4D picture field or variable which should display the picture."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The internal picture format will be stored within the 4D variable or field."]}),"\n",(0,s.jsxs)(t.p,{children:["Once the command has been executed, if the BLOB was correctly decoded, the ",(0,s.jsx)(t.em,{children:"picture"})," parameter contains the picture to display."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"codec"})," parameter lets you specify the codec to be used for decoding the BLOB."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass a codec recognized by 4D in ",(0,s.jsx)(t.em,{children:"codec"})," (returned by the ",(0,s.jsx)(t.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command), it is applied to the BLOB and the picture is returned in the ",(0,s.jsx)(t.em,{children:"picture"})," field or variable."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass a codec that is not recognized by 4D in ",(0,s.jsx)(t.em,{children:"codec"}),", a new codec is recorded dynamically with the ID passed in the parameter. 4D then returns a picture that encapsulates the BLOB and the OK variable is set to 1. In this case, to retrieve the BLOB, you will need to use the ",(0,s.jsx)(t.a,{href:"/docs/commands/picture-to-blob",children:"PICTURE TO BLOB"})," command with the same custom ID. This particular mechanism can be used to meet two specific needs*:*"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"encapsulation of a BLOB (that is not a picture) into a picture*,*"}),"\n",(0,s.jsx)(t.li,{children:"loading a picture without using a codec*.*"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'The implementation of these mechanisms allows, more specifically, the creation of "BLOB arrays" via picture arrays. This technique must be used with caution because, since the arrays are loaded entirely into memory, working with large sized BLOBs can affect the functioning of the application*.*'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," A BLOB created by the ",(0,s.jsx)(t.a,{href:"/docs/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),' command is managed automatically; it is not necessary to pass a codec to encapsulate it since the BLOB is "signed." In this case, for the opposite operation, you will need to pass ".4DVarBlob" to the ',(0,s.jsx)(t.a,{href:"/docs/commands/picture-to-blob",children:"PICTURE TO BLOB"})," command as the codec ID."]}),"\n",(0,s.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. If the conversion has failed (QuickTime is not installed, the BLOB does not contain a readable picture, the codec parameter recognized but BLOB not validated, etc.), OK is set to 0 and the 4D picture variable or field is returned empty."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/read-picture-file",children:"READ PICTURE FILE"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"682"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var i=n(667294);let s={},r=i.createContext(s);function c(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);