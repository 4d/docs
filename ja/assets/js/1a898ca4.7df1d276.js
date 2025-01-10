"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71633"],{444358:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands/smtp-new-transporter","title":"SMTP New transporter","description":"SMTP New transporter( server 4D.SMTPTransporter","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/smtp-new-transporter.md","sourceDirName":"commands","slug":"/commands/smtp-new-transporter","permalink":"/docs/ja/commands/smtp-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsmtp-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"smtp-new-transporter","title":"SMTP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP3 New transporter","permalink":"/docs/ja/commands/pop3-new-transporter"},"next":{"title":"Math","permalink":"/docs/ja/category/math"}}'),t=n("785893"),d=n("250065");let c={id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u623B\u308A\u5024",id:"\u623B\u308A\u5024",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"SMTP New transporter"}),"( ",(0,t.jsx)(r.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5F15\u6570"}),(0,t.jsx)(r.th,{children:"\u578B"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"server"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u60C5\u5831"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(r.td,{children:"4D.SMTPTransporter"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})]})]})]}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,t.jsx)(r.th,{children:"\u5185\u5BB9"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18"}),(0,t.jsx)(r.td,{children:"logFile \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FFD\u52A0"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"17 R5"}),(0,t.jsx)(r.td,{children:"bodyCharset \u3068 headerCharset \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FFD\u52A0"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"17 R4"}),(0,t.jsx)(r.td,{children:"\u8FFD\u52A0"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"SMTP New transporter"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u65B0\u898F\u306ESMTP \u63A5\u7D9A\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306ESMTP \u63A5\u7D9A\u306F",(0,t.jsx)(r.em,{children:"server"})," \u5F15\u6570\u306E\u6307\u5B9A\u306B\u5FDC\u3058\u3066\u8A2D\u5B9A\u3055\u308C\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u65B0\u3057\u3044",(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u8FD4\u3055\u308C\u305F transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u901A\u5E38\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F SMTP\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u63A5\u7D9A\u3092\u958B\u59CB\u3057\u307E\u305B\u3093\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F SMTP\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u63A5\u7D9A\u3092\u958B\u59CB\u3057\u307E\u305B\u3093\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F SMTP\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u63A5\u7D9A\u3092\u958B\u59CB\u3057\u307E\u305B\u3093\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F SMTP\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u63A5\u7D9A\u3092\u958B\u59CB\u3057\u307E\u305B\u3093\u3002 SMTP \u63A5\u7D9A\u306F\u3001\u5B9F\u969B\u306B\u306F",(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#send",children:(0,t.jsx)(r.code,{children:".send()"})})," \u95A2\u6570\u304C\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u306B\u958B\u304B\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"SMTP\u63A5\u7D9A\u306F\u3001\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u81EA\u52D5\u7684\u306B\u9589\u3058\u3089\u308C\u307E\u3059:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#keepalive",children:(0,t.jsx)(r.code,{children:".keepAlive"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u304C true (\u30C7\u30D5\u30A9\u30EB\u30C8) \u306E\u5834\u5408\u306B\u3001transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6D88\u53BB\u3055\u308C\u305F\u6642\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#keepalive",children:(0,t.jsx)(r.code,{children:"keepAlive"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u304Cfalse \u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001",(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#send",children:(0,t.jsx)(r.code,{children:".send()"})})," \u95A2\u6570\u304C\u5B9F\u884C\u3055\u308C\u305F\u5F8C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"server"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.em,{children:"server"})}),(0,t.jsx)(r.th,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024 (\u7701\u7565\u6642)"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(r.br,{}),"\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u63A5\u7D9A\u306E\u78BA\u7ACB\u304C\u8A31\u53EF\u3055\u308C\u3066\u308C\u3070 ",(0,t.jsx)(r.strong,{children:"true"})]}),(0,t.jsx)(r.td,{children:"false"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(r.br,{}),".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(r.br,{}),"OAuth2 \u8A8D\u8A3C\u306E\u8CC7\u683C\u60C5\u5831\u3092\u8868\u3059\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u307E\u305F\u306F\u30C8\u30FC\u30AF\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002 ",(0,t.jsx)(r.code,{children:"authenticationMode"})," \u304C OAUTH2 \u306E\u5834\u5408\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 ",(0,t.jsx)(r.code,{children:"accessTokenOAuth2"})," \u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304C ",(0,t.jsx)(r.code,{children:"authenticationMode"})," \u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001OAuth2 \u30D7\u30ED\u30C8\u30B3\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059 (\u30B5\u30FC\u30D0\u30FC\u3067\u8A31\u53EF\u3055\u308C\u3066\u3044\u308C\u3070)\u3002 Not returned in ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(r.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#authenticationmode",children:[(0,t.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(r.br,{}),"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304F\u306E\u306B\u4F7F\u7528\u3055\u308C\u308B\u8A8D\u8A3C\u30E2\u30FC\u30C9"]}),(0,t.jsx)(r.td,{children:"\u30B5\u30FC\u30D0\u30FC\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3082\u3063\u3068\u3082\u30BB\u30AD\u30E5\u30A2\u306A\u8A8D\u8A3C\u30E2\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#bodycharset",children:[(0,t.jsx)(r.strong,{children:".bodyCharset"})," : Text"]}),(0,t.jsx)(r.br,{}),"  \u30E1\u30FC\u30EB\u672C\u6587\u3067\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3068\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#connectiontimeout",children:[(0,t.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),"\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u306E\u78BA\u7ACB\u307E\u3067\u306B\u5F85\u6A5F\u3059\u308B\u6700\u9577\u6642\u9593 (\u79D2\u5358\u4F4D)"]}),(0,t.jsx)(r.td,{children:"30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#headercharset",children:[(0,t.jsx)(r.strong,{children:".headerCharset"})," : Text"]}),(0,t.jsx)(r.br,{}),"\u30E1\u30FC\u30EB\u30D8\u30C3\u30C0\u30FC\u3067\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3068\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#host",children:[(0,t.jsx)(r.strong,{children:".host"})," : Text"]}),(0,t.jsx)(r.br,{}),"\u30DB\u30B9\u30C8\u30B5\u30FC\u30D0\u30FC\u306E\u540D\u524D\u307E\u305F\u306F IP\u30A2\u30C9\u30EC\u30B9"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"mandatory"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#keepalive",children:[(0,t.jsx)(r.strong,{children:".keepAlive"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.code,{children:"transporter"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u62B9\u6D88\u3055\u308C\u308B\u307E\u3067\u3001SMTP\u63A5\u7D9A\u304C\u7DAD\u6301\u3055\u308C\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u5834\u5408\u306B ",(0,t.jsx)(r.strong,{children:"true"})]}),(0,t.jsx)(r.td,{children:"true"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#logfile",children:[(0,t.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(r.br,{}),"\u30E1\u30FC\u30EB\u63A5\u7D9A\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u62E1\u5F35\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (\u3042\u308C\u3070) \u3078\u306E\u30D5\u30EB\u30D1\u30B9"]}),(0,t.jsx)(r.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.strong,{children:"password"})," : Text",(0,t.jsx)(r.br,{}),"\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u8A8D\u8A3C\u306E\u305F\u3081\u306E\u30E6\u30FC\u30B6\u30FC\u30D1\u30B9\u30EF\u30FC\u30C9\u3002 Not returned in ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(r.td,{children:"\u306A\u3057"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#port",children:[(0,t.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(r.br,{}),"\u30E1\u30FC\u30EB\u901A\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u308B\u30DD\u30FC\u30C8\u756A\u53F7"]}),(0,t.jsx)(r.td,{children:"587"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#sendtimeout",children:[(0,t.jsx)(r.strong,{children:".sendTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.code,{children:".send()"})," \u547C\u3073\u51FA\u3057\u6642\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593 (\u79D2\u5358\u4F4D)"]}),(0,t.jsx)(r.td,{children:"100"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#user",children:[(0,t.jsx)(r.strong,{children:".user"})," : Text"]}),(0,t.jsx)(r.br,{}),"\u30E1\u30FC\u30EB\u30B5\u30FC\u30D0\u30FC\u3067\u306E\u8A8D\u8A3C\u306B\u4F7F\u7528\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u540D"]}),(0,t.jsx)(r.td,{children:"\u306A\u3057"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"\u623B\u308A\u5024",children:"\u623B\u308A\u5024"}),"\n",(0,t.jsxs)(r.p,{children:["\u3053\u306E\u95A2\u6570\u306F",(0,t.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:(0,t.jsx)(r.strong,{children:"SMTP transporter \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})," \u3092\u8FD4\u3057\u307E\u3059\u3002 \u8FD4\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3059\u3079\u3066 ",(0,t.jsx)(r.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002 \u8FD4\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3059\u3079\u3066 ",(0,t.jsx)(r.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002 \u8FD4\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3059\u3079\u3066 ",(0,t.jsx)(r.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,t.jsx)(r.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' $server:=New object\n $server.host:="smtp.gmail.com" // \u5FC5\u9808\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" // Logs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3059\u308B\u62E1\u5F35\u3055\u308C\u305F\u30ED\u30B0\n\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("\u30E1\u30FC\u30EB\u9001\u4FE1\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+$status.message)\n End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(r.td,{children:"1608"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,t.jsx)(r.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var s=n(667294);let t={},d=s.createContext(t);function c(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);