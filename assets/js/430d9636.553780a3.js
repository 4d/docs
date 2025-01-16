"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48650"],{126969:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/convert-picture","title":"CONVERT PICTURE","description":"CONVERT PICTURE ( picture ; codec {; compression} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/convert-picture.md","sourceDirName":"commands-legacy","slug":"/commands/convert-picture","permalink":"/docs/commands/convert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-picture","title":"CONVERT PICTURE","slug":"/commands/convert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMBINE PICTURES","permalink":"/docs/commands/combine-pictures"},"next":{"title":"CREATE THUMBNAIL","permalink":"/docs/commands/create-thumbnail"}}'),r=t("785893"),i=t("250065");let o={id:"convert-picture",title:"CONVERT PICTURE",slug:"/commands/convert-picture",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CONVERT PICTURE"})," ( ",(0,r.jsx)(n.em,{children:"picture"})," ; ",(0,r.jsx)(n.em,{children:"codec"})," {; ",(0,r.jsx)(n.em,{children:"compression"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Picture to be converted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Converted picture"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codec"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Picture Codec ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compression"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Quality of compression"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"CONVERT PICTURE"})," command converts ",(0,r.jsx)(n.em,{children:"picture"})," into a new type."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"codec"})," parameter indicates the type of picture to be generated. A Codec can be an extension (for example, \u201C.gif\u201D) or a Mime type (for example, \u201Cimage/jpeg\u201D). You can get a list of Codecs that are available using the ",(0,r.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"picture"})," field or variable is a compound type (if, for example, it is the result of a copy-paste action), only the information corresponding to the codec type are preserved in the resulting picture."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the type of ",(0,r.jsx)(n.em,{children:"codec"})," requested is the same as the original type of the ",(0,r.jsx)(n.em,{children:"picture"}),', no conversion is carried out and the picture is returned "as is" (except when the ',(0,r.jsx)(n.em,{children:"compression"})," parameter is used, see below)."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"compression"})," parameter, if passed, can be used to specify the compression quality to be applied to the resulting picture when a compatible Codec is used. In ",(0,r.jsx)(n.em,{children:"compression"}),", pass a value between 0 and 1 to specify the quality of the compression, where 0 is the most mediocre quality (high compression) and 1 the best quality (low compression). This parameter is only taken into account when the Codec supports compression (for example JPEG or HDPhoto) and is supported by the WIC and ImageIO APIs. For more information about picture management APIs in 4D, please refer to the ",(0,r.jsx)(n.em,{children:"Pictures"})," section. By default, if you omit the ",(0,r.jsx)(n.em,{children:"compression"})," parameter, the best quality is applied (compression =1)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you want to call ",(0,r.jsx)(n.strong,{children:"CONVERT PICTURE"})," with a picture type that is not supported in 4D 64-bit versions (such as PICT), make sure the conversion is performed on a 4D 32-bit version, where the original type is supported. For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Changing from 32-bit versions to 64-bit versions"})," page."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Conversion of the vpPhoto picture to the jpeg format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vpPhoto;".jpg")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Conversion of a picture with 60% quality:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vPicture;".JPG";0.6)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);