"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80510"],{362671:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>l,assets:()=>i,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/pasteboard-data-size","title":"Pasteboard data size","description":"Pasteboard data size ( dataType ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/pasteboard-data-size.md","sourceDirName":"commands-legacy","slug":"/commands/pasteboard-data-size","permalink":"/docs/commands/pasteboard-data-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpasteboard-data-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pasteboard-data-size","title":"Pasteboard data size","slug":"/commands/pasteboard-data-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text from pasteboard","permalink":"/docs/commands/get-text-from-pasteboard"},"next":{"title":"SET FILE TO PASTEBOARD","permalink":"/docs/commands/set-file-to-pasteboard"}}'),s=a("785893"),r=a("250065");let d={id:"pasteboard-data-size",title:"Pasteboard data size",slug:"/commands/pasteboard-data-size",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Pasteboard data size"})," ( ",(0,s.jsx)(t.em,{children:"dataType"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dataType"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Data type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Size (in bytes) of data located in the pasteboard or error code"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Pasteboard data size"})," command checks whether there is any data of the type you passed in ",(0,s.jsx)(t.em,{children:"dataType"})," present in the pasteboard."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard."]}),"\n",(0,s.jsx)(t.p,{children:"If the pasteboard is empty or does not contain any data of the specified type, the command returns an error -102. If the pasteboard contains data of the specified type, the command returns the size of this data, expressed in bytes."}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"dataType"}),", pass a value specifying the type of data to be checked for. You can pass a 4D signature, a UTI type (Mac OS), a format name/number (Windows), or a 4-character type (compatibility). For more information about these types, please refer to the ",(0,s.jsx)(t.em,{children:"Managing Pasteboards"})," section."]}),"\n",(0,s.jsx)(t.p,{children:"After you have detected that the pasteboard contains data of the type in which you are interested, you can extract that data from the pasteboard using one the following commands:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the pasteboard contains text type data, you can obtain that data using the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})," command, which returns a text value, or the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"})," command, which returns the text in a BLOB."]}),"\n",(0,s.jsxs)(t.li,{children:["If the pasteboard contains picture type data, you can obtain that data using the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"})," command, which returns the picture in a picture field or variable, or the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"})," command*,* which returns the picture in a BLOB."]}),"\n",(0,s.jsxs)(t.li,{children:["If the pasteboard contains a file pathname, you can extract it using the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})," command, which will return the file pathname."]}),"\n",(0,s.jsxs)(t.li,{children:["For any other data type, use the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"})," command, which returns the data in a BLOB."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"The following code tests whether the pasteboard contains a picture and, if so, copies that picture into a 4D variable:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0If(Pasteboard data size(Picture data)=1)\xa0//Is there a picture in the pasteboard?\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD($vPicVariable)\xa0//If so, extract the picture from the pasteboard\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("There is no picture in the pasteboard.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"Usually, applications cut and copy Text or Picture type data into the pasteboard, because most applications recognize these two standard data types. However, an application can append to the pasteboard several instances of the same data in different formats. For example, each time you cut or copy a part of a spreadsheet, the spreadsheet application could append the data under the hypothetical \u2018SPSH\u2019 format, as well as in SYLK and TEXT formats. The \u2018SPSH\u2019 instance would contain the data formatted using the application\u2019s data structure. The SYLK form would contain the same data, but using the SYLK format recognized by most of the other spreadsheet programs. Finally, the TEXT format would contain the same data, without the extra information included in the SYLK or the hypothetical \u2018SPSH\u2019 format. At this point, while writing Cut/Copy/Paste routines between 4D and that hypothetical spreadsheet application, assuming you know the description of the \u2018SPSH\u2019 format and that you are ready to parse SYLK data, you could write something like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0// First, check whether the pasteboard contains data from the hypothetical spreadsheet application\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SPSH')>0)\n\xa0\xa0// ...\n\xa0\xa0// Second, check whether the pasteboard contains Sylk data\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SYLK')>0)\n\xa0\xa0// ...\n\xa0\xa0// Finally check whether the pasteboard contains Text data\n\xa0\xa0\xa0\xa0:(Pasteboard data size('TEXT')>0)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,s.jsx)(t.p,{children:"In other words, you try to extract from the pasteboard the instance of the data that carries most of the original information."}),"\n",(0,s.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.p,{children:"You want to drag some private data from different objects in your form. You can write:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//source object\n\xa0If(FORM Event=On Begin Drag Over)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("some.private.data";$data)\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//target object\n\xa0If(FORM Event=On Drag Over)\n\xa0\xa0\xa0\xa0$0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsxs)(t.p,{children:["See the example for the ",(0,s.jsx)(t.a,{href:"/docs/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"})," command."]}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Pasteboard"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"400"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"error"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return d}});var n=a(667294);let s={},r=n.createContext(s);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);