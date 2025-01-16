"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46062"],{276474:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/web-get-body-part","title":"WEB GET BODY PART","description":"WEB GET BODY PART ( part ; contents ; name ; mimeType ; fileName )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-get-body-part.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-body-part","permalink":"/docs/20-R7/commands/web-get-body-part","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-body-part.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-body-part","title":"WEB GET BODY PART","slug":"/commands/web-get-body-part","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Server","permalink":"/docs/20-R7/category/web-server"},"next":{"title":"WEB Get body part count","permalink":"/docs/20-R7/commands/web-get-body-part-count"}}'),s=t("785893"),i=t("250065");let a={id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"})," ( ",(0,s.jsx)(n.em,{children:"part"})," ; ",(0,s.jsx)(n.em,{children:"contents"})," ; ",(0,s.jsx)(n.em,{children:"name"})," ; ",(0,s.jsx)(n.em,{children:"mimeType"})," ; ",(0,s.jsx)(n.em,{children:"fileName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"part"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Part number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contents"}),(0,s.jsx)(n.td,{children:"Blob, Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Contents of part"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:'Name of "input" variable'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mimeType"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Mime type of submitted file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Name of submitted file"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"}),' command, when called in the context of a Web process, parses the "body" part of a multi-part request.']}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"part"})," parameter, pass the number of the part to be parsed. You can get the total number of parts using the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/web-get-body-part-count",children:"WEB Get body part count"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"contents"})," parameter receives the contents of the part. When the parts to be retrieved are files, you must pass a BLOB type parameter. In the case of TEXT variables submitted in a Web form, you can pass a Text type parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"name"})," parameter receives the variable name of the HTTP input field."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"mimeType"})," and ",(0,s.jsx)(n.em,{children:"name"})," parameters receive the Mime type and the name of the original file, if any. A ",(0,s.jsx)(n.em,{children:"name"})," is only received when the file was submitted as ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.input,{type:"file"})}),".",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"mimeType"})," and ",(0,s.jsx)(n.em,{children:"name"})," are optional but must be passed together."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In the context of a multi-part request, the first array of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/web-get-variables",children:"WEB GET VARIABLES"})," command returns all parts of the form, in the same order as the ",(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"})," command. You can use it in order to get the position of the parts of the form directly."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In this example, a Web form downloads several pictures using a browser onto the HTTP server and displays them in the page. Here is the Web form:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6966).Z+"",width:"339",height:"220"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the code for the  part of the page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-HTML",children:'<body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <form enctype="multipart/form-data" action="/4DACTION/GetFile/" method="post">\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Locate the picture files to upload: <br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Picture file 1: <input name="file1" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Picture file 2: <input name="file2" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 <input type="submit">\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 </form> \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 <hr/>\n\xa0\xa0\xa0 \x3c!--4DSCRIPT/galleryInit--\x3e\n\xa0\xa0\xa0 \x3c!--4Dloop aFileNames--\x3e\n\xa0\xa0\xa0 \xa0\xa0\xa0 <img src="/photos/\x3c!--4Dvar aFileNames{aFileNames}--\x3e"/>\n\xa0\xa0\xa0 \x3c!--4Dendloop--\x3e\n</body>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Two 4D methods are called by the page:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"galleryInit on loading (4DSCRIPT tag), displays the pictures found in the destination folder."}),"\n",(0,s.jsx)(n.li,{children:"GetFile when sending data (4DACTION URL of multi-part form), processes the submission."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is the code for galleryInit:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vDestinationFolder : Text\n\xa0ARRAY TEXT(aFileNames;0)\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\xa0//"WebFolder/photos" folder\n\xa0DOCUMENT LIST($vDestinationFolder;aFileNames)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here is the code for GetFile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPartName;$vPartMimeType;$vPartFileName;$vDestinationFolder : Text\n\xa0var $vPartContentBlob : Blob\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\n\xa0For($i;1;WEB Get body part count)\xa0//for each part\n\xa0\xa0\xa0\xa0WEB GET BODY PART($i;$vPartContentBlob;$vPartName;$vPartMimeType;$vPartFileName)\n\xa0\xa0\xa0\xa0If($vPartFileName#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vDestinationFolder+$vPartFileName;$vPartContentBlob)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0WEB SEND HTTP REDIRECT("/")\xa0// return to page\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/web-get-body-part-count",children:"WEB Get body part count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/web-get-variables",children:"WEB GET VARIABLES"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1212"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6966:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict864606.en-17ebbbe3dcca5ab1d8f6940e6b6ed427.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);