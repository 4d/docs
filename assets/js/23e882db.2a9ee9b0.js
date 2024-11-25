"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38143"],{535431:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/web-send-raw-data","title":"WEB SEND RAW DATA","description":"WEB SEND RAW DATA ( data {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-send-raw-data.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-raw-data","permalink":"/docs/commands/web-send-raw-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-raw-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-raw-data","title":"WEB SEND RAW DATA","slug":"/commands/web-send-raw-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/commands/web-send-http-redirect"},"next":{"title":"WEB SEND TEXT","permalink":"/docs/commands/web-send-text"}}'),r=t("785893"),a=t("250065");let o={id:"web-send-raw-data",title:"WEB SEND RAW DATA",slug:"/commands/web-send-raw-data",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," ( ",(0,r.jsx)(n.em,{children:"data"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"HTTP data to send"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Send chunked"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," command lets the 4D Web server send \u201Craw\u201D HTTP data, which can be chunked. ."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"data"})," parameter contains the two standard parts of an HTTP response, i.e. Header and Body. The data are sent without prior formatting by the server. However, 4D carries out a basic check of the response header and body in order to make sure that they are valid:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the header is incomplete or does not comply with the HTTP protocol specifications, 4D will change it accordingly."}),"\n",(0,r.jsx)(n.li,{children:"If the HTTP request is incomplete, 4D adds the missing information. If, for instance, you want to redirect the request, you must write:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:"\xa0\xa0\xa0HTTP/1.1 302\n\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you only pass:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:"\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,r.jsx)(n.p,{children:"4D will complete the request by adding HTTP/1.1 302."}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"*"})," parameter lets you specify that the response will be sent \u201Cchunked\u201D. The cutting up of responses into chunks can be useful when the server sends a response without knowing its total length (if, for instance, the response has not yet been generated). All HTTP/1.1-compatible browsers accept chunked responses."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter, the Web server will automatically include the ",(0,r.jsx)(n.em,{children:"transfer-encoding: chunked"})," field in the header of the response, if necessary (you can handle the response header manually if you so desire)."]}),"\n",(0,r.jsx)(n.p,{children:"The remainder of the response will also be formatted in order to respect the syntax of the chunked option. Chunked responses contain a single header and an undefined number of body \u201Cchunks\u201D."}),"\n",(0,r.jsxs)(n.p,{children:["All the ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," statements that follow the execution of ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),"(data;*) within the same method will be considered as part of the response (regardless of whether they contain the ",(0,r.jsx)(n.em,{children:"*"})," parameter). The server puts an end to the chunked send when the method execution is terminated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the Web client does not support HTTP/1.1, 4D will automatically convert the response into an HTTP/1.0-compatible format (the data sent will not be chunked). However, in this case, the result may not correspond to your wishes. It is therefore recommended to check whether the Web browser supports HTTP/1.1 and to send an appropriate response. To do so, you can use a method such as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Boolean\n\xa0ARRAY TEXT(arFields;0)\n\xa0ARRAY TEXT(arValues;0)\n\xa0WEB GET HTTP HEADER(arFields;arValues)\n\xa0$0:=False\n\xa0If(Size of array(arValues)>=3)\n\xa0\xa0\xa0\xa0If(Position("HTTP/1.1";arValues{3})>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0//The browser supports HTTP/1.1; $0 returns True\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Combined with the ",(0,r.jsx)(n.a,{href:"/docs/commands/web-get-http-body",children:"WEB GET HTTP BODY"})," command and other commands of the \u201CWeb Server\u201D theme, this command completes the range of tools available to 4D developers in order to entirely customize the processing of incoming and outgoing HTTP connections. These different tools are shown in the following diagram:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(29567).Z+"",width:"676",height:"374"})}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["This example illustrates the use of the chunked option with the ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," command. The data (a sequence of numbers) are sent in 100 chunks generated on the fly in a loop. Keep in mind that the header of the response is not explicitly set: the command will send it automatically and insert the ",(0,r.jsx)(n.em,{children:"transfer-encoding: chunked"})," field into it since the ",(0,r.jsx)(n.em,{children:"*"})," parameter is used."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $cpt : Integer\n\xa0var $my_blob : Blob\n\xa0var $output : Text\n\xa0\n\xa0For($cpt;1;100)\n\xa0\xa0\xa0\xa0$output:="["+String($cpt)+"]"\n\xa0\xa0\xa0\xa0TEXT TO BLOB($output;$my_blob;UTF8 text without length)\n\xa0\xa0\xa0\xa0WEB SEND RAW DATA($my_blob;*)\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},29567:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict856016.en-f0f40e81d3278591838e7c262365beb9.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},a=s.createContext(r);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);