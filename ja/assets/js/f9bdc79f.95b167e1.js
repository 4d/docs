/*! For license information please see f9bdc79f.95b167e1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99341],{627726:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var i=t(474848),s=t(28453);const d={id:"MailAttachmentClass",title:"MailAttachment"},l=void 0,r={id:"API/MailAttachmentClass",title:"MailAttachment",description:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u3001Email \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 MailAttachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f MAIL New attachment \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/ja/20-R5/API/MailAttachmentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/ja/20-R5/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/ja/20-R5/API/POP3TransporterClass"}},c={},h=[{value:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"attachment-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".cid",id:"cid",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:".name",id:"name",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4},{value:".path",id:"path",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-7",level:4},{value:".size",id:"size",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-8",level:4},{value:".type",id:"type",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-9",level:4}];function x(n){const e={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R5/API/EmailObjectClass",children:(0,i.jsx)(e.code,{children:"Email"})})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 MailAttachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f ",(0,i.jsx)(e.a,{href:"#mail-new-attachment",children:(0,i.jsx)(e.code,{children:"MAIL New attachment"})})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"attachment-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,i.jsx)(e.p,{children:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u6b21\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30d7\u30ed\u30d1\u30c6\u30a3\u3084\u3001\u95a2\u6570\u3092\u63d0\u4f9b\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.th,{})})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#cid",children:[(0,i.jsx)(e.strong,{children:".cid"})," : Text"]}),(0,i.jsx)(e.br,{})," \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ID"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#disposition",children:[(0,i.jsx)(e.strong,{children:".disposition"})," : Text"]}),(0,i.jsx)(e.br,{}),(0,i.jsx)(e.code,{children:"Content-Disposition"})," \u30d8\u30c3\u30c0\u30fc\u306e\u5024"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#getcontent",children:[(0,i.jsx)(e.strong,{children:".getContent()"})," : 4D.Blob"]}),(0,i.jsx)(e.br,{}),"\u6dfb\u4ed8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u8eab\u3092 ",(0,i.jsx)(e.code,{children:"4D.Blob"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#name",children:[(0,i.jsx)(e.strong,{children:".name"})," : Text"]}),(0,i.jsx)(e.br,{}),"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3068\u62e1\u5f35\u5b50"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#path",children:[(0,i.jsx)(e.strong,{children:".path"})," : Text"]}),(0,i.jsx)(e.br,{}),"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e POSIX\u30d1\u30b9"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#platformpath",children:[(0,i.jsx)(e.strong,{children:".platformPath"})," : Text"]}),(0,i.jsx)(e.br,{}),"\u30ab\u30ec\u30f3\u30c8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u8868\u73fe\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#size",children:[(0,i.jsx)(e.strong,{children:".size"})," : Integer"]}),(0,i.jsx)(e.br,{})]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#type",children:[(0,i.jsx)(e.strong,{children:".type"})," : Text"]}),(0,i.jsx)(e.br,{}),"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"content-type"})]})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"mail-new-attachment",children:"MAIL New attachment"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"19 R2"}),(0,i.jsx)(e.td,{children:"4D.File, 4D.ZipFile, 4D.Blob \u306e\u53d7\u3051\u5165\u308c"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(e.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(e.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(e.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(e.em,{children:"path"})," : Text { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u578b"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"file"}),(0,i.jsx)(e.td,{children:"4D.File"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"zipFile"}),(0,i.jsx)(e.td,{children:"4D.ZipFile"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8 Zip\u30d5\u30a1\u30a4\u30eb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"blob"}),(0,i.jsx)(e.td,{children:"4D.Blob"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u3092\u683c\u7d0d\u3057\u305f BLOB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"path"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"name"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u6dfb\u4ed8\u3092\u6307\u5b9a\u3059\u308b\u306e\u306b\u4f7f\u7528\u3059\u308b\u540d\u524d + \u62e1\u5f35\u5b50"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"cid"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:'\u6dfb\u4ed8\u306e ID (HTML\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f)\u3001\u3042\u308b\u3044\u306f cid \u304c\u4e0d\u8981\u306a\u5834\u5408\u306f "" (\u7a7a\u306e\u6587\u5b57\u5217)'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"type"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"content-type \u30d8\u30c3\u30c0\u30fc\u306e\u5024"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"disposition"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:'content-disposition \u30d8\u30c3\u30c0\u30fc\u306e\u5024: "inline" \u3042\u308b\u3044\u306f "attachment"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"4D.MailAttachment"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(e.td,{children:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"MAIL New attachment"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R5/API/EmailObjectClass#email-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"Email \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u6dfb\u4ed8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6dfb\u4ed8\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u4f7f\u3048\u307e\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"file"}),": \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3059\u308b ",(0,i.jsx)(e.code,{children:"4D.File"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"zipfile"}),": \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3059\u308b ",(0,i.jsx)(e.code,{children:"4D.ZipFile"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"blob"}),": \u6dfb\u4ed8\u305d\u306e\u3082\u306e\u3092 ",(0,i.jsx)(e.code,{children:"4D.Blob"})," \u306b\u683c\u7d0d\u3057\u3066\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"path"}),": \u30b7\u30b9\u30c6\u30e0\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u8868\u73fe\u3055\u308c\u305f\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092 ",(0,i.jsx)(e.strong,{children:"\u30c6\u30ad\u30b9\u30c8"})," \u5024\u3067\u6e21\u3057\u307e\u3059\u3002 \u5b8c\u5168\u306a\u30d1\u30b9\u540d\u3001\u307e\u305f\u306f\u5358\u7d14\u306a\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u307f\u306e\u5834\u5408\u30014D \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u3092\u691c\u7d22\u3057\u307e\u3059)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"name"})," \u5f15\u6570\u3068\u3057\u3066\u3001\u6dfb\u4ed8\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u306b\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u4f7f\u7528\u3059\u308b\u540d\u524d\u3068\u62e1\u5f35\u5b50\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,i.jsx)(e.em,{children:"name"})," \u304c\u7701\u7565\u3055\u308c\u305f\u5834\u5408:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u6e21\u3057\u3066\u3044\u308c\u3070\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3068\u62e1\u5f35\u5b50\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.li,{children:"BLOB \u3092\u6e21\u3057\u3066\u3044\u308c\u3070\u3001\u62e1\u5f35\u5b50\u304c\u306a\u3044\u30e9\u30f3\u30c0\u30e0\u306a\u540d\u524d\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"cid"})," \u5f15\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u90e8ID \u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e ID \u306f ",(0,i.jsx)(e.code,{children:"Content-Id"})," \u30d8\u30c3\u30c0\u30fc\u306e\u5024\u3067\u3001HTML\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u304a\u3044\u3066\u306e\u307f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 cid \u3092\u4f7f\u3044\u3001",(0,i.jsx)(e.code,{children:'\\<img src="cid:ID">'})," \u306e\u3088\u3046\u306a HTML\u30bf\u30b0\u306b\u3088\u3063\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u53c2\u7167\u3068\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u304c\u7d10\u3065\u3051\u3089\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u3064\u307e\u308a\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab (\u4f8b: \u30d4\u30af\u30c1\u30e3\u30fc) \u304c\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4e0a\u3067\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u3079\u304d\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3066\u3044\u307e\u3059\u3002 \u6700\u7d42\u7684\u306a\u8868\u793a\u306f\u3001\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3088\u3063\u3066\u82e5\u5e72\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,i.jsx)(e.em,{children:"cid"})," \u3092\u4f7f\u7528\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"type"})," \u5f15\u6570\u3092\u6e21\u3059\u3068\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"content-type"}),' \u3092\u660e\u793a\u7684\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001MIME\u30bf\u30a4\u30d7\u3092\u5b9a\u7fa9\u3059\u308b\u6587\u5b57\u5217 ("video/mpeg"\u306a\u3069) \u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e content-type \u306e\u5024\u306f\u62e1\u5f35\u5b50\u3068\u306f\u95a2\u4fc2\u306a\u304f\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 MIME\u30bf\u30a4\u30d7\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001',(0,i.jsx)(e.a,{href:"https://ja.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions",children:"Wikipedia \u4e0a\u306eMIME \u306b\u95a2\u3059\u308b\u30da\u30fc\u30b8"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u5f15\u6570\u304c\u7701\u7565\u3055\u308c\u305f\u5834\u5408\u3001\u3042\u308b\u3044\u306f\u3053\u306e\u5f15\u6570\u306b\u7a7a\u306e\u6587\u5b57\u5217\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"content-type"})," \u306f\u62e1\u5f35\u5b50\u306b\u57fa\u3065\u3044\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 \u4e3b\u306a MIME\u30bf\u30a4\u30d7\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u304c\u9069\u7528\u3055\u308c\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u62e1\u5f35\u5b50"}),(0,i.jsx)(e.th,{children:"Content-Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"jpg, jpeg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"png"}),(0,i.jsx)(e.td,{children:"image/png"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"gif"}),(0,i.jsx)(e.td,{children:"image/gif"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"pdf"}),(0,i.jsx)(e.td,{children:"application/pdf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"doc"}),(0,i.jsx)(e.td,{children:"application/msword"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"xls"}),(0,i.jsx)(e.td,{children:"application/vnd.ms-excel"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ppt"}),(0,i.jsx)(e.td,{children:"application/vnd.ms-powerpoint"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"zip"}),(0,i.jsx)(e.td,{children:"application/zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"gz"}),(0,i.jsx)(e.td,{children:"application/gzip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"json"}),(0,i.jsx)(e.td,{children:"application/json"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"js"}),(0,i.jsx)(e.td,{children:"application/javascript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"xml"}),(0,i.jsx)(e.td,{children:"application/xml"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"htm, html"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"mp3"}),(0,i.jsx)(e.td,{children:"audio/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:"\u305d\u306e\u4ed6"})}),(0,i.jsx)(e.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"disposition"})," \u5f15\u6570\u3092\u6e21\u3057\u3066\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"content-disposition"}),' \u30d8\u30c3\u30c0\u30fc\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 "Mail" \u5b9a\u6570\u30c6\u30fc\u30de\u5185\u306e\u3001\u4ee5\u4e0b\u306e\u5b9a\u6570\u306e\u3044\u305a\u308c\u304b 1\u3064\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5b9a\u6570"}),(0,i.jsx)(e.th,{children:"\u5024"}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"mail disposition attachment"}),(0,i.jsx)(e.td,{children:'"attachment"'}),(0,i.jsx)(e.td,{children:'Content-disposition \u30d8\u30c3\u30c0\u30fc\u306e\u5024\u3092 "attachment" \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u3067\u30ea\u30f3\u30af\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"mail disposition inline"}),(0,i.jsx)(e.td,{children:'"inline"'}),(0,i.jsx)(e.td,{children:'Content-disposition \u30d8\u30c3\u30c0\u30fc\u306e\u5024\u3092 "inline" \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u5185\u306e\u3001"cid" \u306e\u4f4d\u7f6e\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u7d50\u679c\u306f\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002'})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"disposition"})," \u5f15\u6570\u304c\u7701\u7565\u3055\u308c\u305f\u5834\u5408\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"cid"})," \u5f15\u6570\u304c\u4f7f\u308f\u308c\u3066\u3044\u305f\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"Content-disposition"}),' \u30d8\u30c3\u30c0\u30fc\u306f "inline" \u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"cid"})," \u5f15\u6570\u304c\u6e21\u3055\u308c\u3066\u3044\u306a\u3044\u3001\u3042\u308b\u3044\u306f\u7a7a\u306e\u6587\u5b57\u5217\u304c\u6e21\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"Content-disposition"}),' \u30d8\u30c3\u30c0\u30fc\u306f "attachment" \u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002']}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,i.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u9078\u629e\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u6dfb\u4ed8\u3057\u3001HTML \u672c\u6587\u306b\u753b\u50cf\u3092\u57cb\u3081\u8fbc\u3093\u3060\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'$doc:=Select document("";"*";"\u6dfb\u4ed8\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u305f\u304f\u3060\u3055\u3044";0)\nIf (OK=1) // \u3082\u3057\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308c\u3070\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="\u6dfb\u4ed8\u306e\u4ed8\u3044\u305f\u30c6\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u3059"\n\n// \u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\n$email.attachments:=New collection(MAIL New attachment(Document))\n// \u30a4\u30f3\u30e9\u30a4\u30f3\u30d4\u30af\u30c1\u30e3\u30fc\u3092\u633f\u5165\u3057\u307e\u3059 (cid \u3092\u4f7f\u7528)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) // \u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059\n\nEnd if\n'})}),"\n",(0,i.jsx)(e.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,i.jsx)(e.p,{children:"4D Write Pro \u30a8\u30ea\u30a2\u3092\u6dfb\u4ed8\u3057\u305f\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="\u65b0\u898f\u5e74\u6b21\u30ec\u30dd\u30fc\u30c8"\n$email.textBody:="\u6dfb\u4ed8\u306e\u3068\u304a\u308a\u3001\u65b0\u3057\u3044\u5e74\u6b21\u30ec\u30dd\u30fc\u30c8\u3092\u3054\u9023\u7d61\u3057\u307e\u3059\u3002"\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"19 R2"}),(0,i.jsx)(e.td,{children:"4D.File, 4D.ZipFile, 4D.Blob \u306e\u53d7\u3051\u5165\u308c"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(e.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(e.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(e.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(e.em,{children:"path"})," : Text { ; ",(0,i.jsx)(e.em,{children:"name"})," : Text {; ",(0,i.jsx)(e.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(e.em,{children:"type"})," : Text { ; ",(0,i.jsx)(e.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u578b"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"file"}),(0,i.jsx)(e.td,{children:"4D.File"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"zipFile"}),(0,i.jsx)(e.td,{children:"4D.ZipFile"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8 Zip\u30d5\u30a1\u30a4\u30eb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"blob"}),(0,i.jsx)(e.td,{children:"4D.Blob"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u3092\u683c\u7d0d\u3057\u305f BLOB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"path"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"name"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u6dfb\u4ed8\u3092\u6307\u5b9a\u3059\u308b\u306e\u306b\u4f7f\u7528\u3059\u308b\u540d\u524d + \u62e1\u5f35\u5b50"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"cid"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:'\u6dfb\u4ed8\u306e ID (HTML\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f)\u3001\u3042\u308b\u3044\u306f cid \u304c\u4e0d\u8981\u306a\u5834\u5408\u306f "" (\u7a7a\u306e\u6587\u5b57\u5217)'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"type"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"content-type \u30d8\u30c3\u30c0\u30fc\u306e\u5024"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"disposition"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:'content-disposition \u30d8\u30c3\u30c0\u30fc\u306e\u5024: "inline" \u3042\u308b\u3044\u306f "attachment"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"4D.MailAttachment"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(e.td,{children:"Attachment \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-1",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"4D.MailAttachment.new()"})," \u95a2\u6570\u306f\u3001",(0,i.jsx)(e.code,{children:"4D.MailAttachment"})," \u578b\u306e\u65b0\u898f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306e\u6a5f\u80fd\u306f\u3001",(0,i.jsx)(e.a,{href:"#mail-new-attachment",children:(0,i.jsx)(e.code,{children:"MAIL New attachment"})})," \u30b3\u30de\u30f3\u30c9\u3068\u540c\u4e00\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"cid",children:".cid"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".cid"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-2",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".cid"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001  \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ID\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f HTML\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u306e\u307f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u306a\u3044\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u306f\u5358\u306a\u308b\u6dfb\u4ed8 (\u30ea\u30f3\u30af) \u3068\u3057\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"disposition",children:".disposition"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".disposition"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-3",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".disposition"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001",(0,i.jsx)(e.code,{children:"Content-Disposition"})," \u30d8\u30c3\u30c0\u30fc\u306e\u5024\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 \u4e8c\u3064\u306e\u5024\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'"inline": \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u30b3\u30f3\u30c6\u30f3\u30c4\u5185\u306b\u3001"cid"\u306e\u5834\u6240\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u7d50\u679c\u306f\u30e1\u30fc\u30eb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002'}),"\n",(0,i.jsx)(e.li,{children:'"attachment": \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u3067\u30ea\u30f3\u30af\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002'}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u578b"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"4D.Blob"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(e.td,{children:"\u6dfb\u4ed8\u306e\u4e2d\u8eab"})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-4",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".getContent()"})," \u95a2\u6570\u306f\u3001 \u6dfb\u4ed8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u8eab\u3092 ",(0,i.jsx)(e.code,{children:"4D.Blob"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002 ",(0,i.jsx)(e.a,{href:"/docs/ja/20-R5/API/EmailObjectClass#mail-convert-from-mime",children:(0,i.jsx)(e.code,{children:"MAIL Convert from MIME"})})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u53d6\u5f97\u3057\u305f\u6dfb\u4ed8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u3001\u3053\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"name",children:".name"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".name"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-5",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".name"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3068\u62e1\u5f35\u5b50\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002  ",(0,i.jsx)(e.a,{href:"#mail-new-attachment",children:(0,i.jsx)(e.code,{children:"MAIL New attachment"})})," \u30b3\u30de\u30f3\u30c9\u3067\u5225\u306e\u540d\u79f0\u3092\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u79f0\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"path",children:".path"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".path"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-6",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".path"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e POSIX\u30d1\u30b9(\u5b58\u5728\u3059\u308c\u3070) \u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"19"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".platformPath"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-7",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".platformPath"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u8868\u73fe\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-8",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".size"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"size"})," \u30d8\u30c3\u30c0\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 ",(0,i.jsx)(e.code,{children:".size"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001MIME\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u90e8\u3067\u30b5\u30a4\u30ba\u30d8\u30c3\u30c0\u30fc\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".type"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-9",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".type"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e ",(0,i.jsx)(e.code,{children:"content-type"})," \u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 ",(0,i.jsx)(e.a,{href:"#mail-new-attachment",children:(0,i.jsx)(e.code,{children:"MAIL New attachment"})})," \u30b3\u30de\u30f3\u30c9\u306b\u3066\u3001\u3053\u306e\u30bf\u30a4\u30d7\u304c\u660e\u793a\u7684\u306b\u6e21\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"content-type"})," \u306f\u30d5\u30a1\u30a4\u30eb\u306e\u62e1\u5f35\u5b50\u306b\u57fa\u3065\u304d\u307e\u3059\u3002"]})]})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},221020:(n,e,t)=>{var i=t(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,t){var i,d={},h=null,x=null;for(i in void 0!==t&&(h=""+t),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)l.call(e,i)&&!c.hasOwnProperty(i)&&(d[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===d[i]&&(d[i]=e[i]);return{$$typeof:s,type:n,key:h,ref:x,props:d,_owner:r.current}}e.Fragment=d,e.jsx=h,e.jsxs=h},474848:(n,e,t)=>{n.exports=t(221020)},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var i=t(296540);const s={},d=i.createContext(s);function l(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);