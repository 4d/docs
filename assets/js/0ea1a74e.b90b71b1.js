"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87503"],{501243:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/equal-pictures","title":"Equal pictures","description":"Equal pictures ( picture1 ; picture2 ; mask ) : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/equal-pictures.md","sourceDirName":"commands-legacy","slug":"/commands/equal-pictures","permalink":"/docs/commands/equal-pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fequal-pictures.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"equal-pictures","title":"Equal pictures","slug":"/commands/equal-pictures","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE THUMBNAIL","permalink":"/docs/commands/create-thumbnail"},"next":{"title":"Get picture file name","permalink":"/docs/commands/get-picture-file-name"}}'),i=t("785893"),r=t("250065");let c={id:"equal-pictures",title:"Equal pictures",slug:"/commands/equal-pictures",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Equal pictures"})," ( ",(0,i.jsx)(n.em,{children:"picture1"})," ; ",(0,i.jsx)(n.em,{children:"picture2"})," ; ",(0,i.jsx)(n.em,{children:"mask"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picture1"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Original source picture"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picture2"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Picture to compare"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mask"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Resulting mask"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True if both pictures are identical; otherwise, False"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Equal pictures"})," command precisely compares both the dimensions and the contents of two pictures."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the source picture in ",(0,i.jsx)(n.em,{children:"picture1"})," and the picture you want to compare with it in ",(0,i.jsx)(n.em,{children:"picture2"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the pictures are not the same dimension, the command returns ",(0,i.jsx)(n.strong,{children:"False"})," and the ",(0,i.jsx)(n.em,{children:"mask"})," parameter contains a blank picture."]}),"\n",(0,i.jsxs)(n.li,{children:["If the pictures are of the same dimension but with different contents, the command returns ",(0,i.jsx)(n.strong,{children:"False"})," and the ",(0,i.jsx)(n.em,{children:"mask"})," parameter contains the resulting picture mask based on a comparison of the two pictures. This comparison is performed pixel by pixel, and each pixel that does not match appears white on a black background."]}),"\n",(0,i.jsxs)(n.li,{children:["If both pictures are exactly the same, the command returns ",(0,i.jsx)(n.strong,{children:"True"})," and the ",(0,i.jsx)(n.em,{children:"mask"})," parameter contains a picture that is completely black."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"If the command is executed successfully (the two pictures are compared), the system variable OK is set to 1. In the case of an anomaly, particularly if one of the pictures is not initialized (blank picture), the OK variable is set to 0."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In the following example, we compare two pictures (pict1 and pict2) and display the resulting mask:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(993200).Z+"",width:"735",height:"421"})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the code for the ",(0,i.jsx)(n.strong,{children:"Compare"})," button:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$equal :=Equal pictures($pict1;$pict2;$mask)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1196"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},993200:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict847365.fr-371c587a72091d82fdf973eaf1fc6e05.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);