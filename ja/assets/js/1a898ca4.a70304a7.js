"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73136],{345822:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=s(474848),t=s(28453);const d={id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},c=void 0,o={id:"commands/smtp-new-transporter",title:"SMTP New transporter",description:"SMTP New transporter( server 4D.SMTPTransporter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/smtp-new-transporter.md",sourceDirName:"commands",slug:"/commands/smtp-new-transporter",permalink:"/docs/ja/commands/smtp-new-transporter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsmtp-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"POP3 New transporter",permalink:"/docs/ja/commands/pop3-new-transporter"},next:{title:"Abs",permalink:"/docs/ja/commands/abs"}},i={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"SMTP New transporter"}),"( ",(0,n.jsx)(r.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u5f15\u6570"}),(0,n.jsx)(r.th,{children:"\u578b"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"\u8aac\u660e"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"server"}),(0,n.jsx)(r.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"\u30e1\u30fc\u30eb\u30b5\u30fc\u30d0\u30fc\u60c5\u5831"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u623b\u308a\u5024"}),(0,n.jsx)(r.td,{children:"4D.SMTPTransporter"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})})]})]})]}),"\n",(0,n.jsxs)(r.details,{children:[(0,n.jsx)(r.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,n.jsx)(r.th,{children:"\u5185\u5bb9"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"18"}),(0,n.jsx)(r.td,{children:"logFile \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8ffd\u52a0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"17 R5"}),(0,n.jsx)(r.td,{children:"bodyCharset \u3068 headerCharset \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8ffd\u52a0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"17 R4"}),(0,n.jsx)(r.td,{children:"\u8ffd\u52a0"})]})]})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"SMTP New transporter"})," command configures a new SMTP connection according to the ",(0,n.jsx)(r.em,{children:"server"})," parameter and returns a new ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})," object. \u8fd4\u3055\u308c\u305f transporter \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u901a\u5e38\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f SMTP\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u63a5\u7d9a\u3092\u958b\u59cb\u3057\u307e\u305b\u3093\u3002 The SMTP connection is actually opened when the ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#send",children:(0,n.jsx)(r.code,{children:".send()"})})," function is executed."]}),"\n",(0,n.jsx)(r.p,{children:"SMTP\u63a5\u7d9a\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u81ea\u52d5\u7684\u306b\u9589\u3058\u3089\u308c\u307e\u3059:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["when the transporter object is destroyed if the ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#keepalive",children:(0,n.jsx)(r.code,{children:"keepAlive"})})," property is true (default),"]}),"\n",(0,n.jsxs)(r.li,{children:["after each  ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#send",children:(0,n.jsx)(r.code,{children:".send()"})})," function execution if the ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#keepalive",children:(0,n.jsx)(r.code,{children:"keepAlive"})})," property is set to false."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"server"})," \u5f15\u6570\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.em,{children:"server"})}),(0,n.jsx)(r.th,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024 (\u7701\u7565\u6642)"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#acceptunsecureconnection",children:[(0,n.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,n.jsx)(r.br,{}),"\u6697\u53f7\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u63a5\u7d9a\u306e\u78ba\u7acb\u304c\u8a31\u53ef\u3055\u308c\u3066\u308c\u3070 ",(0,n.jsx)(r.strong,{children:"true"})]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[".",(0,n.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,n.jsx)(r.br,{}),".",(0,n.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Object",(0,n.jsx)(r.br,{}),"OAuth2 \u8a8d\u8a3c\u306e\u8cc7\u683c\u60c5\u5831\u3092\u8868\u3059\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u307e\u305f\u306f\u30c8\u30fc\u30af\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002 ",(0,n.jsx)(r.code,{children:"authenticationMode"})," \u304c OAUTH2 \u306e\u5834\u5408\u306e\u307f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 ",(0,n.jsx)(r.code,{children:"accessTokenOAuth2"})," \u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304c ",(0,n.jsx)(r.code,{children:"authenticationMode"})," \u304c\u7701\u7565\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001OAuth2 \u30d7\u30ed\u30c8\u30b3\u30eb\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059 (\u30b5\u30fc\u30d0\u30fc\u3067\u8a31\u53ef\u3055\u308c\u3066\u3044\u308c\u3070)\u3002 Not returned in ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,n.jsx)(r.td,{children:"\u306a\u3057"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#authenticationmode",children:[(0,n.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,n.jsx)(r.br,{}),"\u30e1\u30fc\u30eb\u30b5\u30fc\u30d0\u30fc\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u306e\u306b\u4f7f\u7528\u3055\u308c\u308b\u8a8d\u8a3c\u30e2\u30fc\u30c9"]}),(0,n.jsx)(r.td,{children:"\u30b5\u30fc\u30d0\u30fc\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3082\u3063\u3068\u3082\u30bb\u30ad\u30e5\u30a2\u306a\u8a8d\u8a3c\u30e2\u30fc\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#bodycharset",children:[(0,n.jsx)(r.strong,{children:".bodyCharset"})," : Text"]}),(0,n.jsx)(r.br,{}),"  \u30e1\u30fc\u30eb\u672c\u6587\u3067\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u30bb\u30c3\u30c8\u3068\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#connectiontimeout",children:[(0,n.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,n.jsx)(r.br,{}),"\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306e\u78ba\u7acb\u307e\u3067\u306b\u5f85\u6a5f\u3059\u308b\u6700\u9577\u6642\u9593 (\u79d2\u5358\u4f4d)"]}),(0,n.jsx)(r.td,{children:"30"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#headercharset",children:[(0,n.jsx)(r.strong,{children:".headerCharset"})," : Text"]}),(0,n.jsx)(r.br,{}),"\u30e1\u30fc\u30eb\u30d8\u30c3\u30c0\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u30bb\u30c3\u30c8\u3068\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#host",children:[(0,n.jsx)(r.strong,{children:".host"})," : Text"]}),(0,n.jsx)(r.br,{}),"\u30db\u30b9\u30c8\u30b5\u30fc\u30d0\u30fc\u306e\u540d\u524d\u307e\u305f\u306f IP\u30a2\u30c9\u30ec\u30b9"]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"mandatory"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#keepalive",children:[(0,n.jsx)(r.strong,{children:".keepAlive"})," : Boolean"]}),(0,n.jsx)(r.br,{}),(0,n.jsx)(r.code,{children:"transporter"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u62b9\u6d88\u3055\u308c\u308b\u307e\u3067\u3001SMTP\u63a5\u7d9a\u304c\u7dad\u6301\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u5834\u5408\u306b ",(0,n.jsx)(r.strong,{children:"true"})]}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#logfile",children:[(0,n.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,n.jsx)(r.br,{}),"\u30e1\u30fc\u30eb\u63a5\u7d9a\u306b\u5bfe\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u62e1\u5f35\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb (\u3042\u308c\u3070) \u3078\u306e\u30d5\u30eb\u30d1\u30b9"]}),(0,n.jsx)(r.td,{children:"\u306a\u3057"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"password"})," : Text",(0,n.jsx)(r.br,{}),"\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u8a8d\u8a3c\u306e\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9\u3002 Not returned in ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,n.jsx)(r.td,{children:"\u306a\u3057"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#port",children:[(0,n.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,n.jsx)(r.br,{}),"\u30e1\u30fc\u30eb\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u308b\u30dd\u30fc\u30c8\u756a\u53f7"]}),(0,n.jsx)(r.td,{children:"587"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#sendtimeout",children:[(0,n.jsx)(r.strong,{children:".sendTimeOut"})," : Integer"]}),(0,n.jsx)(r.br,{}),(0,n.jsx)(r.code,{children:".send()"})," \u547c\u3073\u51fa\u3057\u6642\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593 (\u79d2\u5358\u4f4d)"]}),(0,n.jsx)(r.td,{children:"100"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#user",children:[(0,n.jsx)(r.strong,{children:".user"})," : Text"]}),(0,n.jsx)(r.br,{}),"\u30e1\u30fc\u30eb\u30b5\u30fc\u30d0\u30fc\u3067\u306e\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u540d"]}),(0,n.jsx)(r.td,{children:"\u306a\u3057"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,n.jsxs)(r.p,{children:["The function returns a ",(0,n.jsx)(r.a,{href:"/docs/ja/API/SMTPTransporterClass#smtp-transporter-object",children:(0,n.jsx)(r.strong,{children:"SMTP transporter object"})}),". \u8fd4\u3055\u308c\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3059\u3079\u3066 ",(0,n.jsx)(r.strong,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:' $server:=New object\n $server.host:="smtp.gmail.com" // \u5fc5\u9808\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" // Logs\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u4fdd\u5b58\u3059\u308b\u62e1\u5f35\u3055\u308c\u305f\u30ed\u30b0\n\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("\u30e1\u30fc\u30eb\u9001\u4fe1\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f: "+$status.message)\n End if\n'})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>o});var n=s(296540);const t={},d=n.createContext(t);function c(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);