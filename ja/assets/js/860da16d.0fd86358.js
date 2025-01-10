"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21639"],{502161:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>r});var i=JSON.parse('{"id":"API/MailAttachmentClass","title":"MailAttachment","description":"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u3001Email \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 MailAttachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F MAIL New attachment \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/API/MailAttachmentClass.md","sourceDirName":"API","slug":"/API/MailAttachmentClass","permalink":"/docs/ja/20/API/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"docs","previous":{"title":"IMAPTransporter","permalink":"/docs/ja/20/API/IMAPTransporterClass"},"next":{"title":"POP3Transporter","permalink":"/docs/ja/20/API/POP3TransporterClass"}}'),s=t("785893"),d=t("250065");let l={id:"MailAttachmentClass",title:"MailAttachment"},r=void 0,c={},h=[{value:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"attachment-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".cid",id:"cid",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-4",level:4},{value:".name",id:"name",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-5",level:4},{value:".path",id:"path",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-7",level:4},{value:".size",id:"size",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-8",level:4},{value:".type",id:"type",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-9",level:4}];function x(n){let e={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/20/API/EmailObjectClass",children:(0,s.jsx)(e.code,{children:"Email"})})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 MailAttachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F ",(0,s.jsx)(e.a,{href:"#mail-new-attachment",children:(0,s.jsx)(e.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"attachment-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,s.jsx)(e.p,{children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u6B21\u306E\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u3001\u95A2\u6570\u3092\u63D0\u4F9B\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsx)(e.tr,{children:(0,s.jsx)(e.th,{})})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#cid",children:[(0,s.jsx)(e.strong,{children:".cid"})," : Text"]}),"\xa0\xa0\xa0\xa0 \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#disposition",children:[(0,s.jsx)(e.strong,{children:".disposition"})," : Text"]}),"\xa0\xa0\xa0\xa0",(0,s.jsx)(e.code,{children:"Content-Disposition"})," \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#getcontent",children:[(0,s.jsx)(e.strong,{children:".getContent()"})," : 4D.Blob"]}),"\xa0\xa0\xa0\xa0\u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u8EAB\u3092 ",(0,s.jsx)(e.code,{children:"4D.Blob"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#name",children:[(0,s.jsx)(e.strong,{children:".name"})," : Text"]}),"\xa0\xa0\xa0\xa0\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3068\u62E1\u5F35\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#path",children:[(0,s.jsx)(e.strong,{children:".path"})," : Text"]}),"\xa0\xa0\xa0\xa0\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E POSIX \u30D1\u30B9 (\u5B58\u5728\u3059\u308C\u3070) \u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#platformpath",children:[(0,s.jsx)(e.strong,{children:".platformPath"})," : Text"]}),"\xa0\xa0\xa0\xa0\u30AB\u30EC\u30F3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u8FD4\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#size",children:[(0,s.jsx)(e.strong,{children:".size"})," : Integer"]}),"\xa0\xa0\xa0\xa0\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"size"})," \u30D8\u30C3\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{children:[(0,s.jsxs)(e.a,{href:"#type",children:[(0,s.jsx)(e.strong,{children:".type"})," : Text"]}),"\xa0\xa0\xa0\xa0\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"content-type"})," \u3092\u683C\u7D0D\u3057\u307E\u3059"]})})]})]}),"\n",(0,s.jsx)(e.h2,{id:"mail-new-attachment",children:"MAIL New attachment"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"19 R2"}),(0,s.jsx)(e.td,{children:"4D.File, 4D.ZipFile, 4D.Blob \u306E\u53D7\u3051\u5165\u308C"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(e.em,{children:"file"})," : 4D.File { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(e.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(e.em,{children:"blob"})," : 4D.Blob { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(e.em,{children:"path"})," : Text { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"center"}}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"file"}),(0,s.jsx)(e.td,{children:"4D.File"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zipFile"}),(0,s.jsx)(e.td,{children:"4D.ZipFile"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8 Zip\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"blob"}),(0,s.jsx)(e.td,{children:"4D.Blob"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u3092\u683C\u7D0D\u3057\u305F BLOB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"path"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u6DFB\u4ED8\u3092\u6307\u5B9A\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u540D\u524D + \u62E1\u5F35\u5B50"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cid"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:'\u6DFB\u4ED8\u306E ID (HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u307F)\u3001\u3042\u308B\u3044\u306F cid \u304C\u4E0D\u8981\u306A\u5834\u5408\u306F "" (\u7A7A\u306E\u6587\u5B57\u5217)'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"type"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"content-type \u30D8\u30C3\u30C0\u30FC\u306E\u5024"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"disposition"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:'content-disposition \u30D8\u30C3\u30C0\u30FC\u306E\u5024: "inline" \u3042\u308B\u3044\u306F "attachment"'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"4D.MailAttachment"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(e.td,{children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"|"}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"MAIL New attachment"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,s.jsx)(e.a,{href:"/docs/ja/20/API/EmailObjectClass#email-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"Email \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u306B\u8FFD\u52A0\u3067\u304D\u308B\u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6DFB\u4ED8\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u4F7F\u3048\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"file"}),": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u3092\u683C\u7D0D\u3059\u308B ",(0,s.jsx)(e.code,{children:"4D.File"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"zipfile"}),": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u3092\u683C\u7D0D\u3059\u308B ",(0,s.jsx)(e.code,{children:"4D.ZipFile"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"blob"}),": \u6DFB\u4ED8\u305D\u306E\u3082\u306E\u3092 ",(0,s.jsx)(e.code,{children:"4D.Blob"})," \u306B\u683C\u7D0D\u3057\u3066\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"path"}),": \u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092 ",(0,s.jsx)(e.strong,{children:"\u30C6\u30AD\u30B9\u30C8"})," \u5024\u3067\u6E21\u3057\u307E\u3059\u3002 \u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3001\u307E\u305F\u306F\u5358\u7D14\u306A\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F\u306E\u5834\u5408\u30014D \u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u5185\u3092\u691C\u7D22\u3057\u307E\u3059)\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(e.em,{children:"name"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u6DFB\u4ED8\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u4F7F\u7528\u3059\u308B\u540D\u524D\u3068\u62E1\u5F35\u5B50\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 ",(0,s.jsx)(e.em,{children:"name"})," \u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9\u3092\u6E21\u3057\u3066\u3044\u308C\u3070\u3001\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u540D\u3068\u62E1\u5F35\u5B50\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"BLOB \u3092\u6E21\u3057\u3066\u3044\u308C\u3070\u3001\u62E1\u5F35\u5B50\u304C\u306A\u3044\u30E9\u30F3\u30C0\u30E0\u306A\u540D\u524D\u304C\u81EA\u52D5\u7684\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(e.em,{children:"cid"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u90E8ID \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E ID \u306F ",(0,s.jsx)(e.code,{children:"Content-Id"})," \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3067\u3001HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u304A\u3044\u3066\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 cid \u3092\u4F7F\u3044\u3001",(0,s.jsx)(e.code,{children:'\\<img src="cid:ID">'})," \u306E\u3088\u3046\u306A HTML\u30BF\u30B0\u306B\u3088\u3063\u3066\u30E1\u30C3\u30BB\u30FC\u30B8\u672C\u6587\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u53C2\u7167\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u7D10\u3065\u3051\u3089\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3064\u307E\u308A\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB (\u4F8B: \u30D4\u30AF\u30C1\u30E3\u30FC) \u304C\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4E0A\u3067\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u672C\u6587\u5185\u306B\u8868\u793A\u3055\u308C\u308B\u3079\u304D\u3067\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002 \u6700\u7D42\u7684\u306A\u8868\u793A\u306F\u3001\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u3063\u3066\u82E5\u5E72\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,s.jsx)(e.em,{children:"cid"})," \u3092\u4F7F\u7528\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u6587\u5B57\u5217\u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(e.em,{children:"type"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"content-type"}),' \u3092\u660E\u793A\u7684\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001MIME\u30BF\u30A4\u30D7\u3092\u5B9A\u7FA9\u3059\u308B\u6587\u5B57\u5217 ("video/mpeg"\u306A\u3069) \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E content-type \u306E\u5024\u306F\u62E1\u5F35\u5B50\u3068\u306F\u95A2\u4FC2\u306A\u304F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 MIME\u30BF\u30A4\u30D7\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001',(0,s.jsx)(e.a,{href:"https://ja.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions",children:"Wikipedia \u4E0A\u306EMIME \u306B\u95A2\u3059\u308B\u30DA\u30FC\u30B8"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u3053\u306E\u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"content-type"})," \u306F\u62E1\u5F35\u5B50\u306B\u57FA\u3065\u3044\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u4E3B\u306A MIME\u30BF\u30A4\u30D7\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u30EB\u30FC\u30EB\u304C\u9069\u7528\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u62E1\u5F35\u5B50"}),(0,s.jsx)(e.th,{children:"Content-Type"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"jpg, jpeg"}),(0,s.jsx)(e.td,{children:"image/jpeg"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"png"}),(0,s.jsx)(e.td,{children:"image/png"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"gif"}),(0,s.jsx)(e.td,{children:"image/gif"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pdf"}),(0,s.jsx)(e.td,{children:"application/pdf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"doc"}),(0,s.jsx)(e.td,{children:"application/msword"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"xls"}),(0,s.jsx)(e.td,{children:"application/vnd.ms-excel"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ppt"}),(0,s.jsx)(e.td,{children:"application/vnd.ms-powerpoint"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zip"}),(0,s.jsx)(e.td,{children:"application/zip"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"gz"}),(0,s.jsx)(e.td,{children:"application/gzip"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"json"}),(0,s.jsx)(e.td,{children:"application/json"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"js"}),(0,s.jsx)(e.td,{children:"application/javascript"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ps"}),(0,s.jsx)(e.td,{children:"application/postscript"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"xml"}),(0,s.jsx)(e.td,{children:"application/xml"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"htm, html"}),(0,s.jsx)(e.td,{children:"text/html"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mp3"}),(0,s.jsx)(e.td,{children:"audio/mpeg"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.em,{children:"\u305D\u306E\u4ED6"})}),(0,s.jsx)(e.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(e.em,{children:"disposition"})," \u5F15\u6570\u3092\u6E21\u3057\u3066\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"content-disposition"}),' \u30D8\u30C3\u30C0\u30FC\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 "Mail" \u5B9A\u6570\u30C6\u30FC\u30DE\u5185\u306E\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B 1\u3064\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail disposition attachment"}),(0,s.jsx)(e.td,{children:'"attachment"'}),(0,s.jsx)(e.td,{children:'Content-disposition \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3092 "attachment" \u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u5185\u3067\u30EA\u30F3\u30AF\u3068\u3057\u3066\u63D0\u4F9B\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail disposition inline"}),(0,s.jsx)(e.td,{children:'"inline"'}),(0,s.jsx)(e.td,{children:'Content-disposition \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3092 "inline" \u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u672C\u6587\u5185\u306E\u3001"cid" \u306E\u4F4D\u7F6E\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u7D50\u679C\u306F\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002'})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"disposition"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"cid"})," \u5F15\u6570\u304C\u4F7F\u308F\u308C\u3066\u3044\u305F\u5834\u5408\u3001",(0,s.jsx)(e.code,{children:"Content-disposition"}),' \u30D8\u30C3\u30C0\u30FC\u306F "inline" \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"cid"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u3066\u3044\u306A\u3044\u3001\u3042\u308B\u3044\u306F\u7A7A\u306E\u6587\u5B57\u5217\u304C\u6E21\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001",(0,s.jsx)(e.code,{children:"Content-disposition"}),' \u30D8\u30C3\u30C0\u30FC\u306F "attachment" \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002']}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(e.p,{children:"\u30E6\u30FC\u30B6\u30FC\u304C\u9078\u629E\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u6DFB\u4ED8\u3057\u3001HTML \u672C\u6587\u306B\u753B\u50CF\u3092\u57CB\u3081\u8FBC\u3093\u3060\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'$doc:=Select document("";"*";"\u6DFB\u4ED8\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u305F\u304F\u3060\u3055\u3044";0)\nIf (OK=1) // \u3082\u3057\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308C\u3070\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="\u6DFB\u4ED8\u306E\u4ED8\u3044\u305F\u30C6\u30B9\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3059"\n\n// \u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0\u3057\u307E\u3059\n$email.attachments:=New collection(MAIL New attachment(Document))\n// \u30A4\u30F3\u30E9\u30A4\u30F3\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u633F\u5165\u3057\u307E\u3059 (cid \u3092\u4F7F\u7528)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) // \u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3059\n\nEnd if\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(e.p,{children:"4D Write Pro \u30A8\u30EA\u30A2\u3092\u6DFB\u4ED8\u3057\u305F\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="\u65B0\u898F\u5E74\u6B21\u30EC\u30DD\u30FC\u30C8"\n$email.textBody:="\u6DFB\u4ED8\u306E\u3068\u304A\u308A\u3001\u65B0\u3057\u3044\u5E74\u6B21\u30EC\u30DD\u30FC\u30C8\u3092\u3054\u9023\u7D61\u3057\u307E\u3059\u3002\n"\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"19 R2"}),(0,s.jsx)(e.td,{children:"4D.File, 4D.ZipFile, 4D.Blob \u306E\u53D7\u3051\u5165\u308C"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(e.em,{children:"file"})," : 4D.File { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(e.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(e.em,{children:"blob"})," : 4D.Blob { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(e.em,{children:"path"})," : Text { ; ",(0,s.jsx)(e.em,{children:"name"})," : Text {; ",(0,s.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(e.em,{children:"type"})," : Text { ; ",(0,s.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"center"}}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"file"}),(0,s.jsx)(e.td,{children:"4D.File"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zipFile"}),(0,s.jsx)(e.td,{children:"4D.ZipFile"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8 Zip\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"blob"}),(0,s.jsx)(e.td,{children:"4D.Blob"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u3092\u683C\u7D0D\u3057\u305F BLOB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"path"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u6DFB\u4ED8\u3092\u6307\u5B9A\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u540D\u524D + \u62E1\u5F35\u5B50"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cid"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:'\u6DFB\u4ED8\u306E ID (HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u307F)\u3001\u3042\u308B\u3044\u306F cid \u304C\u4E0D\u8981\u306A\u5834\u5408\u306F "" (\u7A7A\u306E\u6587\u5B57\u5217)'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"type"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:"content-type \u30D8\u30C3\u30C0\u30FC\u306E\u5024"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"disposition"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(e.td,{children:'content-disposition \u30D8\u30C3\u30C0\u30FC\u306E\u5024: "inline" \u3042\u308B\u3044\u306F "attachment"'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"4D.MailAttachment"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(e.td,{children:"Attachment \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"|"}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"4D.MailAttachment.new()"})," \u95A2\u6570\u306F\u3001 ",(0,s.jsx)(e.code,{children:"4D.MailAttachment"})," \u578B\u306E\u65B0\u3057\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306E\u6A5F\u80FD\u306F\u3001",(0,s.jsx)(e.a,{href:"#mail-new-attachment",children:(0,s.jsx)(e.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u3068\u540C\u4E00\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"cid",children:".cid"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".cid"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".cid"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001  \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F HTML\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u306A\u3044\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u5358\u306A\u308B\u6DFB\u4ED8 (\u30EA\u30F3\u30AF) \u3068\u3057\u3066\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"disposition",children:".disposition"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".disposition"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".disposition"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 ",(0,s.jsx)(e.code,{children:"Content-Disposition"})," \u30D8\u30C3\u30C0\u30FC\u306E\u5024\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u4E8C\u3064\u306E\u5024\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'"inline": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u30B3\u30F3\u30C6\u30F3\u30C4\u5185\u306B\u3001"cid"\u306E\u5834\u6240\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u7D50\u679C\u306F\u30E1\u30FC\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,s.jsx)(e.li,{children:'"attachment": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u5185\u3067\u30EA\u30F3\u30AF\u3068\u3057\u3066\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"center"}}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"4D.Blob"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(e.td,{children:"\u6DFB\u4ED8\u306E\u4E2D\u8EAB"})]})})]}),"\n",(0,s.jsx)(e.p,{children:"|"}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-4",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".getContent()"})," \u95A2\u6570\u306F\u3001 \u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u8EAB\u3092 ",(0,s.jsx)(e.code,{children:"4D.Blob"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 ",(0,s.jsx)(e.a,{href:"/docs/ja/20/API/EmailObjectClass#mail-convert-from-mime",children:(0,s.jsx)(e.code,{children:"MAIL Convert from MIME"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u53D6\u5F97\u3057\u305F\u6DFB\u4ED8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u3001\u3053\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"name",children:".name"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".name"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-5",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".name"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3068\u62E1\u5F35\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002  ",(0,s.jsx)(e.a,{href:"#mail-new-attachment",children:(0,s.jsx)(e.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u3067\u5225\u306E\u540D\u79F0\u3092\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"path",children:".path"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".path"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-6",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".path"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E POSIX \u30D1\u30B9 (\u5B58\u5728\u3059\u308C\u3070) \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"19"}),(0,s.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".platformPath"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-7",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".platformPath"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 \u30AB\u30EC\u30F3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u73FE\u3055\u308C\u305F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"size",children:".size"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".size"})," : Integer"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-8",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".size"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"size"})," \u30D8\u30C3\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 ",(0,s.jsx)(e.code,{children:".size"}),"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001MIME\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u90E8\u3067\u30B5\u30A4\u30BA\u30D8\u30C3\u30C0\u30FC\u3092\u5B9A\u7FA9\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"type",children:".type"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".type"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E-9",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".type"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001 \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E ",(0,s.jsx)(e.code,{children:"content-type"})," \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 ",(0,s.jsx)(e.a,{href:"#mail-new-attachment",children:(0,s.jsx)(e.code,{children:"MAIL New attachment"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3066\u3001\u3053\u306E\u30BF\u30A4\u30D7\u304C\u660E\u793A\u7684\u306B\u6E21\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,s.jsx)(e.code,{children:"content-type"})," \u306F\u30D5\u30A1\u30A4\u30EB\u306E\u62E1\u5F35\u5B50\u306B\u57FA\u3065\u304D\u307E\u3059\u3002"]})]})}function j(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},d=i.createContext(s);function l(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);