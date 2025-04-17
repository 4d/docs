"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11018"],{107286:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/set-picture-to-library","title":"SET PICTURE TO LIBRARY","description":"SET PICTURE TO LIBRARY ( picture ; picRef ; picName )","source":"@site/versioned_docs/version-20-R9/commands-legacy/set-picture-to-library.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-to-library","permalink":"/docs/commands/set-picture-to-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-to-library.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-picture-to-library","title":"SET PICTURE TO LIBRARY","slug":"/commands/set-picture-to-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE METADATA","permalink":"/docs/commands/set-picture-metadata"},"next":{"title":"TRANSFORM PICTURE","permalink":"/docs/commands/transform-picture"}}'),t=r("785893"),s=r("250065");let c={id:"set-picture-to-library",title:"SET PICTURE TO LIBRARY",slug:"/commands/set-picture-to-library",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," ( ",(0,t.jsx)(n.em,{children:"picture"})," ; ",(0,t.jsx)(n.em,{children:"picRef"})," ; ",(0,t.jsx)(n.em,{children:"picName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"picture"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"New picture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"picRef"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Reference number of Picture Library graphic"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"picName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"New name of the picture"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," command creates a new picture or replaces a picture in the Picture Library."]}),"\n",(0,t.jsx)(n.p,{children:"Before the call, you pass:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the picture reference number in ",(0,t.jsx)(n.em,{children:"picRef"})," (range 1...32767 )"]}),"\n",(0,t.jsxs)(n.li,{children:["the picture itself in ",(0,t.jsx)(n.em,{children:"picture"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["the name of the picture in ",(0,t.jsx)(n.em,{children:"picName"})," (maximum length: 255 characters)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If there is an existing Picture Library graphic with the same reference number, the picture contents are replaced and the picture is renamed according to the values passed in ",(0,t.jsx)(n.em,{children:"picture"})," and ",(0,t.jsx)(n.em,{children:"picName."})]}),"\n",(0,t.jsxs)(n.p,{children:["If there is no Picture Library graphic with the reference number passed in ",(0,t.jsx)(n.em,{children:"picRef"}),", a new picture is added to the Picture Library."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server:"})," ",(0,t.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," cannot be used from within a method executed on the server machine (stored procedure or trigger). If you call ",(0,t.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," on a server machine, nothing happens\u2014the call is ignored."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," Design objects (hierarchical list items, menu items, etc.) may refer to Picture Library graphics. Use caution when modifying a Picture Library graphic programmatically."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you pass an empty picture in ",(0,t.jsx)(n.em,{children:"picture"})," or a negative or null value in ",(0,t.jsx)(n.em,{children:"picRef"}),", the command does nothing."]}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"No matter what the current contents of the Picture Library, the following example adds a new picture to the Picture Library by first looking for a unique picture reference number:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alPicRef;$asPicNames)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlPicRef:=1+Abs(Random)\n\xa0Until(Find in array($alPicRef;$vlPicRef)<0)\n\xa0SET PICTURE TO LIBRARY(vgPicture;$vlPicRef;"New Picture")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["The following example imports into the Picture Library the pictures (stored in a document on disk) created by the third example for the command ",(0,t.jsx)(n.a,{href:"/docs/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(10;"")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\n\xa0\xa0\xa0\xa0If($vsTag="4DV6PICTURELIBRARYEXPORT")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbPictures)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbPictures>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlPicture;1;$vlNbPictures)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlPicRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsPicName)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vgPicture)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgPicture;$vlPicRef;$vsPicName)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPicture:=$vlNbPictures+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("This file looks like being damaged.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("This file looks like being damaged.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The file \u201C"+Document+"\u201D is not a Picture Library export file.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0\xa0\xa0End\n'})}),"\n",(0,t.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsx)(n.p,{children:"If there is not enough memory to add the picture to the Picture Library, an error -108 is generated. Note that I/O errors may also be returned (i.e., the structure file is locked). You can catch these errors using an error-handling method."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"566"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Forbidden on the server"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var i=r(667294);let t={},s=i.createContext(t);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);