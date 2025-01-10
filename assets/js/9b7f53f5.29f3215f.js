"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49026"],{585798:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/picture-to-blob","title":"PICTURE TO BLOB","description":"PICTURE TO BLOB ( picture ; pictureBlob ; codec )","source":"@site/versioned_docs/version-20-R7/commands-legacy/picture-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/picture-to-blob","permalink":"/docs/commands/picture-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"picture-to-blob","title":"PICTURE TO BLOB","slug":"/commands/picture-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Picture size","permalink":"/docs/commands/picture-size"},"next":{"title":"READ PICTURE FILE","permalink":"/docs/commands/read-picture-file"}}'),i=t("785893"),s=t("250065");let c={id:"picture-to-blob",title:"PICTURE TO BLOB",slug:"/commands/picture-to-blob",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PICTURE TO BLOB"})," ( ",(0,i.jsx)(n.em,{children:"picture"})," ; ",(0,i.jsx)(n.em,{children:"pictureBlob"})," ; ",(0,i.jsx)(n.em,{children:"codec"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picture"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Picture field or variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pictureBlob"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"BLOB to receive the converted picture"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"codec"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Picture Codec ID"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"PICTURE TO BLOB"})," command converts a picture stored in a 4D variable or field to another format and places the resulting picture in a BLOB."]}),"\n",(0,i.jsxs)(n.p,{children:["A picture 4D field or variable is passed in the ",(0,i.jsx)(n.em,{children:"picture"})," parameter. In the ",(0,i.jsx)(n.em,{children:"pictureBlob"})," parameter is passed a BLOB variable or field which should contain the converted picture."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass in the ",(0,i.jsx)(n.em,{children:"codec"})," parameter a string setting the conversion format."]}),"\n",(0,i.jsxs)(n.p,{children:["A Codec can be an extension (for example, \u201C.gif\u201D) or a Mime type (for example \u201Cimage/jpeg\u201D). You can get a list of available Codecs via the ",(0,i.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Once the command has been executed, the ",(0,i.jsx)(n.em,{children:"pictureBlob"})," contains the picture in the specified format."]}),"\n",(0,i.jsx)(n.p,{children:"If the conversion was successful, the system variable OK is set to 1. If the conversion has failed (converter not available), OK is set to 0 and the generated BLOB is empty (0 byte)."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to convert an image from a proprietary format to GIF format and display it on a static web page. You can use a code such as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $picture : Picture\n\xa0var $BLOB : Blob\n\xa0var $path : Text\n\xa0\n\xa0$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd"\xa0//find the picture in the Images folder within the Resources folder\n\xa0READ PICTURE FILE($path;$picture)\xa0//put the picture in the picture variable\n\xa0\n\xa0PICTURE TO BLOB($picture;$BLOB;".gif")\xa0//convert the picture to ".gif" format\n\xa0WEB SEND BLOB($BLOB;"image/gif")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/write-picture-file",children:"WRITE PICTURE FILE"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"692"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(667294);let i={},s=r.createContext(i);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);