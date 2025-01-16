"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60353"],{674713:function(e,n,t){t.r(n),t.d(n,{default:()=>i,frontMatter:()=>l,metadata:()=>r,assets:()=>h,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/method-resolve-path","title":"METHOD RESOLVE PATH","description":"METHOD RESOLVE PATH ( path ; methodType ; ptrTable ; objectName ; formObjectName {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-resolve-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-resolve-path","permalink":"/docs/ja/20-R7/commands/method-resolve-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-resolve-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-resolve-path","title":"METHOD RESOLVE PATH","slug":"/commands/method-resolve-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD OPEN PATH","permalink":"/docs/ja/20-R7/commands/method-open-path"},"next":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/ja/20-R7/commands/method-set-access-mode"}}'),s=t("785893"),d=t("250065");let l={id:"method-resolve-path",title:"METHOD RESOLVE PATH",slug:"/commands/method-resolve-path",displayed_sidebar:"docs"},c=void 0,h={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"METHOD RESOLVE PATH"})," ( ",(0,s.jsx)(n.em,{children:"path"})," ; ",(0,s.jsx)(n.em,{children:"methodType"})," ; ",(0,s.jsx)(n.em,{children:"ptrTable"})," ; ",(0,s.jsx)(n.em,{children:"objectName"})," ; ",(0,s.jsx)(n.em,{children:"formObjectName"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u89E3\u6C7A\u3059\u308B\u30D1\u30B9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7\u30BB\u30EC\u30AF\u30BF\u30FC"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ptrTable"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u540D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formObjectName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6307\u5B9A\u6642 = \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9069\u7528\u3055\u308C\u308B (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u3067\u306F\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"METHOD RESOLVE PATH"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(n.em,{children:"path"}),"\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u5185\u90E8\u30D1\u30B9\u540D\u3092\u89E3\u6C7A\u3057\u3001",(0,s.jsx)(n.em,{children:"methodType"}),"\u3001",(0,s.jsx)(n.em,{children:"ptrTable"}),"\u3001",(0,s.jsx)(n.em,{children:"objectName"}),"\u3001\u305D\u3057\u3066 ",(0,s.jsx)(n.em,{children:"formObjectName"}),"\u5F15\u6570\u306B\u305D\u308C\u305E\u308C\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"methodType"})," \u5F15\u6570\u306F\u30E1\u30BD\u30C3\u30C9\u306E\u30BF\u30A4\u30D7\u3092\u793A\u3059\u5024\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u3053\u306E\u5024\u3092",(0,s.jsx)(n.em,{children:"Design Object Access"}),"\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3068\u6BD4\u8F03\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u5024"}),(0,s.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path database method"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["\u6307\u5B9A\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u540D\u3002\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u30EA\u30B9\u30C8:",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[databaseMethod]/onStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onExit",(0,s.jsx)(n.br,{}),"[databaseMethod]/onDrop",(0,s.jsx)(n.br,{}),"[databaseMethod]/onBackupStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onBackupShutdown",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebAuthentication",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerShutdown",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerOpenConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerCloseConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onSystemEvent",(0,s.jsx)(n.br,{}),"[databaseMethod]/onSqlAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onHostDatabaseEvent",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onRESTAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onMobileAppAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsx)(n.em,{children:"onMobileAppAction"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.br,{})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path project form"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3068\u3059\u3079\u3066\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u30D1\u30B9\u3002\u4F8B:",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[projectForm]/myForm/{formMethod}",(0,s.jsx)(n.br,{}),"[projectForm]/myForm/button1",(0,s.jsx)(n.br,{}),"[projectForm]/myForm/mylist",(0,s.jsx)(n.br,{}),"[projectForm]/myForm/button1"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path project method"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["\u30E1\u30BD\u30C3\u30C9\u540D\u3002",(0,s.jsx)(n.br,{}),"\u4F8B: ",(0,s.jsx)(n.em,{children:"MyProjectMethod"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path table form"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsxs)(n.td,{children:["\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3068\u3059\u3079\u3066\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3002\u4F8B:",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,s.jsx)(n.br,{}),"[tableForm]/table_1/Form1/button1",(0,s.jsx)(n.br,{}),"[tableForm]/table_1/Form1/mylist",(0,s.jsx)(n.br,{}),"[tableForm]/table_2/Form1/mylist"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path trigger"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C8\u30EA\u30AC\u30FC\u306E\u30D1\u30B9\u3002\u4F8B:",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[trigger]/table_1",(0,s.jsx)(n.br,{}),"[trigger]/table_2"]})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8\u610F:"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3042\u3001\u5B9F\u969B\u306B\u30E1\u30BD\u30C3\u30C9\u304C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9/\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u5B58\u5728\u3059\u308B\u304B\u3069\u3046\u304B\u306F\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u305B\u3093\u3002\u30A8\u30E9\u30FC\u306F\u7121\u52B9\u306A\u30C6\u30FC\u30D6\u30EB\u540D\u304C\u6E21\u3055\u308C\u305F\u3068\u304D\u306B\u306E\u307F\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"ptrTable"})," \u5F15\u6570\u306F\u3001\u30D1\u30B9\u304C\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3084\u30C8\u30EA\u30AC\u30FC\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"objectName"})," \u5F15\u6570\u306F\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30D1\u30B9\u304C\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u30D5\u30A9\u30FC\u30E0\u540D"}),"\n",(0,s.jsx)(n.li,{children:"\u30D1\u30B9\u304C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u540D"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"formObjectName"})," \u5F15\u6570\u306F\u3001\u30D1\u30B9\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u30D1\u30B9\u306E\u89E3\u6C7A:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 2\n\xa0\xa0// $tablePtr: Nil \u30DD\u30A4\u30F3\u30BF\u30FC\n\xa0\xa0// $objectName: "onStartup"\n\xa0\xa0// $formObjectName: ""\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(n.p,{children:"\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u30D1\u30B9\u89E3\u6C7A:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 16\n\xa0\xa0// $tablePtr: -> [Table1]\n\xa0\xa0// $objectName: "output*1"\n\xa0\xa0// $formObjectName: "Btn*1"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/method-get-path",children:"METHOD Get path"})}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1165"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function i(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);