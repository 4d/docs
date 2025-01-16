"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26963"],{720207:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"API/MailAttachmentClass","title":"MailAttachment","description":"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u3001Email \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 MailAttachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F MAIL New attachment \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/API/MailAttachmentClass.md","sourceDirName":"API","slug":"/API/MailAttachmentClass","permalink":"/docs/ja/20-R7/API/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"docs","previous":{"title":"IMAPTransporter","permalink":"/docs/ja/20-R7/API/IMAPTransporterClass"},"next":{"title":"OutgoingMessage","permalink":"/docs/ja/20-R7/API/OutgoingMessageClass"}}'),i=t("785893"),d=t("250065");let l={id:"MailAttachmentClass",title:"MailAttachment"},c=void 0,r={},h=[{value:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"attachment-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:".cid",id:"cid",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".disposition",id:"disposition",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4},{value:".name",id:"name",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-4",level:4},{value:".path",id:"path",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-5",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-6",level:4},{value:".size",id:"size",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-7",level:4},{value:".type",id:"type",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-8",level:4}];function x(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/API/EmailObjectClass",children:(0,i.jsx)(n.code,{children:"Email"})})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 MailAttachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"attachment-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,i.jsx)(n.p,{children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u6B21\u306E\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u3001\u95A2\u6570\u3092\u63D0\u4F9B\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#cid",children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),(0,i.jsx)(n.br,{})," \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ID"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#disposition",children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.code,{children:"Content-Disposition"})," \u30D8\u30C3\u30C0\u30FC\u306E\u5024"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getcontent",children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),(0,i.jsx)(n.br,{}),"\u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u8EAB\u3092 ",(0,i.jsx)(n.code,{children:"4D.Blob"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#name",children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),(0,i.jsx)(n.br,{}),"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3068\u62E1\u5F35\u5B50"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#path",children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),(0,i.jsx)(n.br,{}),"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E POSIX\u30D1\u30B9"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#platformpath",children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),(0,i.jsx)(n.br,{}),"\u30AB\u30EC\u30F3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#size",children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,i.jsx)(n.br,{}),"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,i.jsx)(n.code,{children:"size"})," \u30D8\u30C3\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),(0,i.jsx)(n.br,{}),"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,i.jsx)(n.code,{children:"content-type"})]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,i.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R2"}),(0,i.jsx)(n.td,{children:"4D.File, 4D.ZipFile, 4D.Blob \u306E\u53D7\u3051\u5165\u308C"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D.ZipFile"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u6DFB\u4ED8 Zip\u30D5\u30A1\u30A4\u30EB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"4D.Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u6DFB\u4ED8\u3092\u683C\u7D0D\u3057\u305F BLOB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u6DFB\u4ED8\u3092\u6307\u5B9A\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u540D\u524D + \u62E1\u5F35\u5B50"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'\u6DFB\u4ED8\u306E ID (HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u307F)\u3001\u3042\u308B\u3044\u306F cid \u304C\u4E0D\u8981\u306A\u5834\u5408\u306F "" (\u7A7A\u306E\u6587\u5B57\u5217)'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"content-type \u30D8\u30C3\u30C0\u30FC\u306E\u5024"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'content-disposition \u30D8\u30C3\u30C0\u30FC\u306E\u5024: "inline" \u3042\u308B\u3044\u306F "attachment"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"4D.MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"4D.MailAttachment.new()"})," \u95A2\u6570\u306F\u3001",(0,i.jsx)(n.code,{children:"4D.MailAttachment"})," \u578B\u306E\u65B0\u898F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306E\u6A5F\u80FD\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u3068\u540C\u4E00\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".cid"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001  \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ID\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u306A\u3044\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u5358\u306A\u308B\u6DFB\u4ED8 (\u30EA\u30F3\u30AF) \u3068\u3057\u3066\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".disposition"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001",(0,i.jsx)(n.code,{children:"Content-Disposition"})," \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u4E8C\u3064\u306E\u5024\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"inline": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u30B3\u30F3\u30C6\u30F3\u30C4\u5185\u306B\u3001"cid"\u306E\u5834\u6240\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u7D50\u679C\u306F\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,i.jsx)(n.li,{children:'"attachment": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u5185\u3067\u30EA\u30F3\u30AF\u3068\u3057\u3066\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"4D.Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"\u6DFB\u4ED8\u306E\u4E2D\u8EAB"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".getContent()"})," \u95A2\u6570\u306F\u3001 \u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u8EAB\u3092 ",(0,i.jsx)(n.code,{children:"4D.Blob"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/API/EmailObjectClass#mail-convert-from-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u53D6\u5F97\u3057\u305F\u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u3001\u3053\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-4",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".name"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3068\u62E1\u5F35\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002  ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u3067\u5225\u306E\u540D\u79F0\u3092\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-5",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".path"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E POSIX\u30D1\u30B9(\u5B58\u5728\u3059\u308C\u3070) \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,i.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-6",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".platformPath"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-7",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".size"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,i.jsx)(n.code,{children:"size"})," \u30D8\u30C3\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 ",(0,i.jsx)(n.code,{children:".size"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001MIME\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u90E8\u3067\u30B5\u30A4\u30BA\u30D8\u30C3\u30C0\u30FC\u3092\u5B9A\u7FA9\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E-8",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".type"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,i.jsx)(n.code,{children:"content-type"})," \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3066\u3001\u3053\u306E\u30BF\u30A4\u30D7\u304C\u660E\u793A\u7684\u306B\u6E21\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"content-type"})," \u306F\u30D5\u30A1\u30A4\u30EB\u306E\u62E1\u5F35\u5B50\u306B\u57FA\u3065\u304D\u307E\u3059\u3002"]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);