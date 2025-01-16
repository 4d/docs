"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86831"],{769391:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/web-send-blob","title":"WEB SEND BLOB","description":"WEB SEND BLOB ( blob ; type )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-send-blob.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-blob","permalink":"/docs/20-R7/commands/web-send-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-blob","title":"WEB SEND BLOB","slug":"/commands/web-send-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/20-R7/commands/web-legacy-get-session-expiration"},"next":{"title":"WEB SEND FILE","permalink":"/docs/20-R7/commands/web-send-file"}}'),i=t("785893"),d=t("250065");let r={id:"web-send-blob",title:"WEB SEND BLOB",slug:"/commands/web-send-blob",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(n){let e={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," ( ",(0,i.jsx)(e.em,{children:"blob"})," ; ",(0,i.jsx)(e.em,{children:"type"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"blob"}),(0,i.jsx)(e.td,{children:"Blob"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"BLOB to send to the browser"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"type"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Data type of the BLOB"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," command allows you to send ",(0,i.jsx)(e.em,{children:"blob"})," to the browser."]}),"\n",(0,i.jsxs)(e.p,{children:["The type of data contained in the BLOB is indicated by ",(0,i.jsx)(e.em,{children:"type"}),". This parameter can be one of the following types:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"Empty String"}),' (""): In this case, you don\u2019t need to supply any more information in the BLOB. The browser will try to interpret the contents of the BLOB.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"File extension"}),' (example: ".HTM", ".GIF", ".JPEG", etc.): In this case, you specify the MIME type of the data contained in the BLOB by indicating its extension. The BLOB will then be interpreted according to its extension. However, the extension must be a standard one so that the browser can correctly interpret it.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"Mime/Type"})," (example: \u201Ctext/html\u201D, \u201Cimage/tiff\u201D, etc.): In this case, you directly specify the MIME type of data contained in the BLOB. This solution offers you more freedom. Besides the standard types, you can pass a custom MIME type to send proprietary documents via Intranet. To do so, you only need to configure the browsers so that they recognize the type sent and so that they can open the appropriate application. The value you pass to ",(0,i.jsx)(e.em,{children:"type"})," is, in this case, \u201Capplication/x-[TypeName]\u201D. In the client workstations\u2019s browser, you reference this type and associate it to the \u201CLaunch the application\u201D action. The WEB SEND BLOB command allows you to therefore send all types of documents, the Intranet clients automatically open the associated application."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"})," For more information about MIME types, refer to the page: ",(0,i.jsx)(e.a,{href:"http://www.iana.org/assignments/media-types",children:"http://www.iana.org/assignments/media-types"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Here is a list of the most common MIME types:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Extension"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Mime/Type"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".htm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".html"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtml"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".css"}),(0,i.jsx)(e.td,{children:"text/css"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pdf"}),(0,i.jsx)(e.td,{children:"application/pdf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".rtf"}),(0,i.jsx)(e.td,{children:"application/rtf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".eps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".hqx"}),(0,i.jsx)(e.td,{children:"application/mac-binhex40"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".js"}),(0,i.jsx)(e.td,{children:"application/javascript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".json"}),(0,i.jsx)(e.td,{children:"application/json"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".txt"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".text"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gif"}),(0,i.jsx)(e.td,{children:"image/gif"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpeg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpe"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jfif"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pic"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pict"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tif"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tiff"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpeg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".moov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aif"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aiff"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".wav"}),(0,i.jsx)(e.td,{children:"audio/wav"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ram"}),(0,i.jsx)(e.td,{children:"audio/x-pn-realaudio"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".sit"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".bin"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".xml"}),(0,i.jsx)(e.td,{children:"application/xml"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".z"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".zip"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gz"}),(0,i.jsx)(e.td,{children:"application/x-gzip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tar"}),(0,i.jsx)(e.td,{children:"application/x-tar"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"}),' The list of MIME types supported by the 4D HTTP server is saved in the "MimeTypes.xml" file found in the following folder of the 4D application: ',(0,i.jsx)(e.em,{children:"[Contents]\\Native components\\HTTPServer.bundle\\Contents\\Resources"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["The references to 4D variables and ",(0,i.jsx)(e.em,{children:"4DSCRIPT"})," type tags in the page are always parsed."]}),"\n",(0,i.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(e.p,{children:["Refer to the example of the ",(0,i.jsx)(e.a,{href:"/docs/20-R7/commands/picture-to-blob",children:"PICTURE TO BLOB"})," routine."]}),"\n",(0,i.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/20-R7/commands/web-send-file",children:"WEB SEND FILE"})}),"\n",(0,i.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Command number"}),(0,i.jsx)(e.td,{children:"654"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread safe"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},d=s.createContext(i);function r(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);