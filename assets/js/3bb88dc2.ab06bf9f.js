"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75329"],{705687:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/web-send-http-redirect","title":"WEB SEND HTTP REDIRECT","description":"WEB SEND HTTP REDIRECT ( url {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-send-http-redirect.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-http-redirect","permalink":"/docs/commands/web-send-http-redirect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-http-redirect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-http-redirect","title":"WEB SEND HTTP REDIRECT","slug":"/commands/web-send-http-redirect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND FILE","permalink":"/docs/commands/web-send-file"},"next":{"title":"WEB SEND RAW DATA","permalink":"/docs/commands/web-send-raw-data"}}'),r=t("785893"),d=t("250065");let i={id:"web-send-http-redirect",title:"WEB SEND HTTP REDIRECT",slug:"/commands/web-send-http-redirect",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"})," ( ",(0,r.jsx)(n.em,{children:"url"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"New URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified = URL is not translated, If omitted = URL is translated"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"})," command allows you to transform a URL into another one."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"url"})," parameter contains the new URL that allows you to redirect the request. If this parameter is a url to a file, it must contain the reference to this file, for example: ",(0,r.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"}),' ("/MyPage.HTM").']}),"\n",(0,r.jsxs)(n.p,{children:["This command prevails over commands that send data (",(0,r.jsx)(n.a,{href:"/docs/commands/web-send-file",children:"WEB SEND FILE"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/web-send-blob",children:"WEB SEND BLOB"}),", etc.) that may be in the same method."]}),"\n",(0,r.jsx)(n.p,{children:"This command also allows you to redirect a request to another Web server."}),"\n",(0,r.jsxs)(n.p,{children:["4D automatically encodes the URL\u2019s special characters. If you pass the ",(0,r.jsx)(n.em,{children:"*"})," character, 4D will not translate them."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the status of the request sent by this command is ",(0,r.jsx)(n.strong,{children:"302: Moved Temporarily"}),'. If you need a "moved permanently" status (status 301), you can set a HTTP ',(0,r.jsx)(n.em,{children:"X-STATUS: 301"})," field in the header of the reply."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You can use this command to execute custom requests in 4D by using static pages. Imagine that you have placed the following elements in a static HTML page:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(326786).Z+"",width:"229",height:"172"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The POST action \u201C/4dcgi/rech\u201D has been associated to the text area and to the ",(0,r.jsx)(n.strong,{children:"OK"})," and ",(0,r.jsx)(n.strong,{children:"Cancel"})," buttons."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-set-destination",children:"QR SET DESTINATION"}),", you insert the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:($1="/4dcgi/rech")\xa0//When 4D receives this URL\n\xa0\xa0//If the OK button has been used and the \u2018name\u2019 field contains a Value\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((bOK="OK")\xa0&\xa0(name#""))\n\xa0\xa0//Change the URL to execute the request code,\n\xa0\xa0//placed farther down in the same method\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND HTTP REDIRECT("/4dcgi/rech?"+name)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//Else return to the beginning page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND HTTP REDIRECT("/page1.htm")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0:($1="/4dcgi/rech?@")\xa0//If the URL has been redirected\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//Put the request code here\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"659"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},326786:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict38648.en-758f305b3daf986a655c9180f637ab0a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);