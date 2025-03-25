"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58606"],{479443:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/web-get-http-header","title":"WEB GET HTTP HEADER","description":"WEB GET HTTP HEADER ( header )WEB GET HTTP HEADER ( fieldArray ; valueArray )","source":"@site/versioned_docs/version-20-R8/commands-legacy/web-get-http-header.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-http-header","permalink":"/docs/commands/web-get-http-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-http-header.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-http-header","title":"WEB GET HTTP HEADER","slug":"/commands/web-get-http-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET HTTP BODY","permalink":"/docs/commands/web-get-http-body"},"next":{"title":"WEB GET OPTION","permalink":"/docs/commands/web-get-option"}}'),t=s("785893"),d=s("250065");let i={id:"web-get-http-header",title:"WEB GET HTTP HEADER",slug:"/commands/web-get-http-header",displayed_sidebar:"docs"},l=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"header"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"fieldArray"})," ; ",(0,t.jsx)(n.em,{children:"valueArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"header|fieldArray"}),(0,t.jsx)(n.td,{children:"Text, Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Request HTTP header or HTTP header fields"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueArray"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"HTTP header fields content"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," command returns either a string or two arrays, containing the HTTP header used for the currently processed request."]}),"\n",(0,t.jsxs)(n.p,{children:["This command can be called from within any method (",(0,t.jsx)(n.em,{children:"On Web Authentication Database Method"})," or ",(0,t.jsx)(n.a,{href:"/docs/commands/qr-set-destination",children:"QR SET DESTINATION"}),', method called by "',(0,t.jsx)(n.em,{children:"/4DACTION"}),'"...) executed in a Web process.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"First syntax:"})," ",(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ",(0,t.jsx)(n.strong,{children:"(header)"}),"\nWhen this syntax is used, the result returned in the ",(0,t.jsx)(n.em,{children:"header"})," variable is as follows:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0"GET /page.html HTTP\\1.0"+Char(13)+Char(10)+"User-Agent: browser"+Char(13)+Char(10)+"Cookie: C=HELLO"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Each header field is separated by a CR+LF (Carriage return+Line feed) sequence under Windows and Mac OS."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Second syntax:"})," ",(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ",(0,t.jsx)(n.strong,{children:"(fieldArray; valueArray)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When this syntax is used, the returned results in the ",(0,t.jsx)(n.em,{children:"fieldArray"})," and ",(0,t.jsx)(n.em,{children:"valueArray"})," are as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:'fieldArray{1} = "X-METHOD"'})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:'valueArray{1} = "GET" *'})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'fieldArray{2} = "X-URL"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'valueArray{2} = "/page.html" *'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'fieldArray{3} = "X-VERSION"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'valueArray{3} = "HTTP/1.0" *'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'fieldArray{4} = "User-Agent"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'valueArray{4} = "browser"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'fieldArray{5} = "Cookie"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'valueArray{5} = "C=HELLO"'})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"* These first three items are not HTTP fields. They are part of the first line of the request."}),"\n",(0,t.jsx)(n.p,{children:"To comply with the HTTP standard, field names are always written in English."}),"\n",(0,t.jsx)(n.p,{children:"Here is a list of some HTTP fields that can be used in a request:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Accept"}),": content allowed by the browser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Accept-Language"}),": language(s) that can be used by the browser (for information). Allows to select a web page using the language defined in the browser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cookie"}),": cookies list"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"From"}),": browser user email address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host"}),": server name or address (for example using an URL, ",(0,t.jsx)(n.a,{href:"http://mywebserver/mypage.html",children:"http://mywebserver/mypage.html"}),", ",(0,t.jsx)(n.strong,{children:"Host"})," takes the \xabmywebserver\xbb value). Allows to manage several names pointing towards the same IP address (virtual hosting)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Referer"}),": request origin (for example ",(0,t.jsx)(n.a,{href:"http://mywebserver/mypage1.html",children:"http://mywebserver/mypage1.html"}),"), i.e. the page which is displayed when clicking on the ",(0,t.jsx)(n.strong,{children:"Previous"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User-Agent"}),": browser or proxy name and version."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following method allows getting any HTTP request header field content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Project method GetHTTPField\n\xa0\xa0// GetHTTPField (Text) -> Text\n\xa0\xa0// GetHTTPField (HTTP header name) -> HTTP header content\n\xa0\n\xa0var $0;$1 : Text\n\xa0var $vlItem : Integer\n\xa0ARRAY TEXT($names;0)\n\xa0ARRAY TEXT($values;0)\n\xa0$0:=""\n\xa0WEB GET HTTP HEADER($names;$values)\n\xa0$vlItem:=Find in array($names;$1)\n\xa0If($vlItem>0)\n\xa0\xa0\xa0\xa0$0:=$values{$vlItem}\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once this project method has been written, it can be called as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Cookie header content\n\xa0$cookie:=GetHTTPField("Cookie")\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can send different pages according to the language set in the browser (for example in the ",(0,t.jsx)(n.a,{href:"/docs/commands/qr-set-destination",children:"QR SET DESTINATION"}),"):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$language:=GetHTTPField("Accept-Language")\n\xa0Case of\n\xa0\xa0\xa0\xa0:($language="@fr@")\xa0//French (see list ISO 639)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index_fr.html")\n\xa0\xa0\xa0\xa0:($language="@sp@")\xa0//Spanish (see list ISO 639)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index_es.html")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index.html")\n\xa0End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"}),' Web browsers allow defining several languages by default. They are listed in the "Accept-Language" field, separated by a ";". Their priority is defined according to their position within the string; therefore it is a good idea to test language positions in the string.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Here is an example of virtual hosts (for example, in the ",(0,t.jsx)(n.a,{href:"/docs/commands/qr-set-destination",children:"QR SET DESTINATION"}),'). The following names "home_site.com", "home_site1.com" and "home_site2.com" are directed towards the same IP address, for example 192.1.2.3.']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$host:=GetHTTPField("Host")\n\xa0Case of\n\xa0\xa0\xa0\xa0:($host="www.site1.com")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site1.com")\n\xa0\xa0\xa0\xa0:($host="www.site2.com")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site2.com")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site.com")\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/web-set-http-header",children:"WEB SET HTTP HEADER"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"697"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);