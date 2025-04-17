"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25099"],{932711:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/imap-new-transporter","title":"IMAP New transporter","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands/imap-new-transporter.md","sourceDirName":"commands","slug":"/commands/imap-new-transporter","permalink":"/docs/ja/commands/imap-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fimap-new-transporter.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"imap-new-transporter","title":"IMAP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"\u30E1\u30FC\u30EB","permalink":"/docs/ja/commands/theme/Mail"},"next":{"title":"MAIL Convert from MIME","permalink":"/docs/ja/commands/mail-convert-from-mime"}}'),t=r("785893"),d=r("250065");let c={id:"imap-new-transporter",title:"IMAP New transporter",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u623B\u308A\u5024",id:"\u623B\u308A\u5024",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.details,{children:[(0,t.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,t.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"18 R4"}),(0,t.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"IMAP New transporter"}),"( ",(0,t.jsx)(e.em,{children:"server"})," : Object ) : 4D.IMAPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{style:{textAlign:"center"}}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"server"}),(0,t.jsx)(e.td,{children:"Object"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u60C5\u5831"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"4D.IMAPTransporter"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"IMAP New transporter"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(e.em,{children:"server"})," \u5F15\u6570\u306E\u6307\u5B9A\u306B\u5FDC\u3058\u3066\u65B0\u898F\u306E IMAP \u63A5\u7D9A\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u623B\u308A\u5024\u306F\u3001\u65B0\u3057\u3044",(0,t.jsx)(e.em,{children:"transporter"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u8FD4\u3055\u308C\u308B transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u901A\u5E38\u3001\u30E1\u30FC\u30EB\u306E\u53D7\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"server"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.em,{children:"server"})}),(0,t.jsx)(e.th,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024 (\u7701\u7565\u6642)"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(e.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(e.br,{}),"\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u63A5\u7D9A\u306E\u78BA\u7ACB\u304C\u8A31\u53EF\u3055\u308C\u3066\u308C\u3070 ",(0,t.jsx)(e.strong,{children:"true"})]}),(0,t.jsx)(e.td,{children:"false"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[".",(0,t.jsx)(e.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(e.br,{}),".",(0,t.jsx)(e.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(e.br,{})," OAuth2 \u8A8D\u8A3C\u306E\u8CC7\u683C\u60C5\u5831\u3092\u8868\u3059\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u307E\u305F\u306F\u30C8\u30FC\u30AF\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002 ",(0,t.jsx)(e.code,{children:"authenticationMode"})," \u304C OAUTH2 \u306E\u5834\u5408\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 ",(0,t.jsx)(e.code,{children:"accessTokenOAuth2"})," \u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304C ",(0,t.jsx)(e.code,{children:"authenticationMode"})," \u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001OAuth2 \u30D7\u30ED\u30C8\u30B3\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059 (\u30B5\u30FC\u30D0\u30FC\u3067\u8A31\u53EF\u3055\u308C\u3066\u3044\u308C\u3070)\u3002 \u3053\u308C\u306F*",(0,t.jsx)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"}),"* \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3067\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002"]}),(0,t.jsx)(e.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#authenticationmode",children:[(0,t.jsx)(e.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(e.br,{}),"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304F\u306E\u306B\u4F7F\u7528\u3055\u308C\u308B\u8A8D\u8A3C\u30E2\u30FC\u30C9"]}),(0,t.jsx)(e.td,{children:"\u30B5\u30FC\u30D0\u30FC\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3082\u3063\u3068\u3082\u30BB\u30AD\u30E5\u30A2\u306A\u8A8D\u8A3C\u30E2\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#checkconnectiondelay",children:[(0,t.jsx)(e.strong,{children:".checkConnectionDelay"})," : Integer"]}),(0,t.jsx)(e.br,{}),"\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u307E\u3067\u306E\u6700\u9577\u6642\u9593 (\u79D2\u5358\u4F4D)"]}),(0,t.jsx)(e.td,{children:"300"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#connectiontimeout",children:[(0,t.jsx)(e.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(e.br,{}),"\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u306E\u78BA\u7ACB\u307E\u3067\u306B\u5F85\u6A5F\u3059\u308B\u6700\u9577\u6642\u9593 (\u79D2\u5358\u4F4D)"]}),(0,t.jsx)(e.td,{children:"30"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#host",children:[(0,t.jsx)(e.strong,{children:".host"})," : Text"]}),(0,t.jsx)(e.br,{}),"\u30DB\u30B9\u30C8\u30B5\u30FC\u30D0\u30FC\u306E\u540D\u524D\u307E\u305F\u306F IP\u30A2\u30C9\u30EC\u30B9"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.em,{children:"mandatory"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#logfile",children:[(0,t.jsx)(e.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(e.br,{}),"\u30E1\u30FC\u30EB\u63A5\u7D9A\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u62E1\u5F35\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (\u3042\u308C\u3070) \u3078\u306E\u30D5\u30EB\u30D1\u30B9"]}),(0,t.jsx)(e.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[".",(0,t.jsx)(e.strong,{children:"password"})," : Text",(0,t.jsx)(e.br,{}),"\u30B5\u30FC\u30D0\u30FC \u3068\u306E\u8A8D\u8A3C\u306E\u305F\u3081\u306E\u30E6\u30FC\u30B6\u30FC\u30D1\u30B9\u30EF\u30FC\u30C9\u3002 \u3053\u308C\u306F*",(0,t.jsx)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"}),"* \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3067\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002"]}),(0,t.jsx)(e.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#port",children:[(0,t.jsx)(e.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(e.br,{}),"\u30E1\u30FC\u30EB\u901A\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u308B\u30DD\u30FC\u30C8\u756A\u53F7"]}),(0,t.jsx)(e.td,{children:"993"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#user",children:[(0,t.jsx)(e.strong,{children:".user"})," : Text"]}),(0,t.jsx)(e.br,{}),"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u3067\u306E\u8A8D\u8A3C\u306B\u4F7F\u7528\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u540D"]}),(0,t.jsx)(e.td,{children:"\u306A\u3057"})]})]})]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8B66\u544A"}),": \u5B9A\u7FA9\u3055\u308C\u305F\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u304C\u3001\u30B5\u30FC\u30D0\u30FC\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3088\u308A\u77ED\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F\u7121\u610F\u5473\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u623B\u308A\u5024",children:"\u623B\u308A\u5024"}),"\n",(0,t.jsxs)(e.p,{children:["\u3053\u306E\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3",(0,t.jsx)(e.a,{href:"/docs/ja/API/IMAPTransporterClass#imap-transporter-object",children:(0,t.jsx)(e.strong,{children:"IMAP transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),". \u8FD4\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3059\u3079\u3066 ",(0,t.jsx)(e.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"IMAP\u63A5\u7D9A\u306F\u3001transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6D88\u53BB\u3055\u308C\u305F\u6642\u70B9\u3067\u81EA\u52D5\u7684\u306B\u9589\u3058\u3089\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'$server:=New object\n$server.host:="imap.gmail.com" // \u5FC5\u9808\n$server.port:=993\n$server.user:="4d@gmail.com"\n$server.password:="XXXXXXXX"\n$server.logFile:="LogTest.txt" // Logs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3059\u308B\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\n\nvar $transporter : 4D.IMAPTransporter\n$transporter:=IMAP New transporter($server)\n\n$status:=$transporter.checkConnection()\nIf(Not($status.success))\n   ALERT("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+$status.statusText)\nEnd if\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1723"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);