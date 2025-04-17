"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6487"],{1601:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/http-parse-message","title":"HTTP Parse message","description":"HTTP Parse message ( data ObjectHTTP Parse message( data Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands/http-parse-message.md","sourceDirName":"commands","slug":"/commands/http-parse-message","permalink":"/docs/ja/commands/http-parse-message","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fhttp-parse-message.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"http-parse-message","title":"HTTP Parse message","slug":"/commands/http-parse-message","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP GET OPTION","permalink":"/docs/ja/commands/http-get-option"},"next":{"title":"HTTP Request","permalink":"/docs/ja/commands/http-request"}}'),r=s("785893"),a=s("250065");let d={id:"http-parse-message",title:"HTTP Parse message",slug:"/commands/http-parse-message",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HTTP Parse message"})," ( ",(0,r.jsx)(n.em,{children:"data"})," : Text ) : Object",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"HTTP Parse message"}),"( ",(0,r.jsx)(n.em,{children:"data"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u89E3\u6790\u3059\u308B\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u5404\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30DE\u30EB\u30C1\u30D1\u30FC\u30C8\u306E\u5404\u30C7\u30FC\u30BF\u3067\u3059)"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R4"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTTP Parse message"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001multipart/form-",(0,r.jsx)(n.em,{children:"data"}),' \u306E\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F Blob (HTTP "response" \u30E1\u30C3\u30BB\u30FC\u30B8) \u3092\u30D1\u30FC\u30B9\u3057\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u62BD\u51FA\u3057\u307E\u3059\u3002 \u623B\u308A\u5024\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5404\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30DE\u30EB\u30C1\u30D1\u30FC\u30C8\u306E\u5404\u30C7\u30FC\u30BF\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002']}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:['HTTP \u81EA\u4F53\u306F\u30B9\u30C6\u30FC\u30C8\u30EC\u30B9\u306A\u901A\u4FE1\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u3059\u3002  \u3053\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u4E2D\u3067\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u3001\u30E1\u30BD\u30C3\u30C9\u30FB\u30BF\u30FC\u30B2\u30C3\u30C8\u30FB\u30D8\u30C3\u30C0\u30FC\u30FB\u30B3\u30F3\u30C6\u30F3\u30C4\u306A\u3069\u306E\u8A73\u7D30\u3092\u6307\u5B9A\u3057\u305F "request" \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30B5\u30FC\u30D0\u30FC\u306B\u9001\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u901A\u4FE1\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 \u30B5\u30FC\u30D0\u30FC\u306F\u3001\u540C\u3058\u8A73\u7D30\u3092\u542B\u3080 "response" \u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u5FDC\u7B54\u3057\u307E\u3059\u3002 ',(0,r.jsx)(n.code,{children:"HTTP Parse message"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u3001"request" \u307E\u305F\u306F "response" \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u89E3\u6790\u3057\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5F62\u5F0F\u306B\u6574\u3048\u307E\u3059\u3002']})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u6B21\u306E\u4F8B\u3067\u306F\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u683C\u7D0D\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u30C7\u30FC\u30BF\u3092\u89E3\u6790\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"POST /batch/gmail/v1/ HTTP/1.1\nAccept-Encoding: gzip, deflate\nAuthorization: Bearer xxxxxx\nConnection: Close\nContent-Length: 442\nContent-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8\nDate: Wed, 29 Nov 2023 13:51:35 GMT\nHost: gmail.googleapis.com\nUser-Agent: 4D/20.4.0\n\n\n--batch_19438756D576A14ABA87C112F56B9396\nContent-Type: application/http\nContent-ID: <item1>\n\nGET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1\n\n\n--batch_19438756D576A14ABA87C112F56B9396\nContent-Type: application/http\nContent-ID: <item2>\n\nGET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1\n\n--batch_19438756D576A14ABA87C112F56B9396--\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()\nvar $parsedMessage : Object:=HTTP Parse message($message)\n//$parsedMessage= {\n//headers:{"User-Agent":"4D/20.4.0",...},\n//parts:[{"contentType":"application/http","contentID":"item1",...}],\n//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"\n//}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1824"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},a=t.createContext(r);function d(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);