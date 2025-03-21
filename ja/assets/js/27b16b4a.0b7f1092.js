"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46315"],{481863:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-menu-bar","title":"SET MENU BAR","description":"SET MENU BAR ( menuBar {; process}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-bar","permalink":"/docs/ja/20-R7/commands/set-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-bar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-bar","title":"SET MENU BAR","slug":"/commands/set-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET HELP MENU","permalink":"/docs/ja/20-R7/commands/set-help-menu"},"next":{"title":"SET MENU ITEM","permalink":"/docs/ja/20-R7/commands/set-menu-item"}}'),d=i("785893"),r=i("250065");let t={id:"set-menu-bar",title:"SET MENU BAR",slug:"/commands/set-menu-bar",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function E(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET MENU BAR"})," ( ",(0,d.jsx)(n.em,{children:"menuBar"})," {; ",(0,d.jsx)(n.em,{children:"process"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuBar"}),(0,d.jsx)(n.td,{children:"Integer, Text, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u756A\u53F7\u307E\u305F\u306F\u540D\u524D \u307E\u305F\u306F \u30E1\u30CB\u30E5\u30FC\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"process"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u3092\u4FDD\u5B58"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["SET MENU BAR \u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u307F\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092",(0,d.jsx)(n.em,{children:"menuBar"}),"\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3067\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"menuBar"})," \u5F15\u6570\u306B\u306F\u3001\u65B0\u3057\u3044\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u756A\u53F7\u307E\u305F\u306F\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002\u307E\u305F\u30E1\u30CB\u30E5\u30FCID (",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," \u578B, 16\u6587\u5B57\u306E\u6587\u5B57\u5217) \u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u53C2\u7167\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30E1\u30CB\u30E5\u30FC\u3092\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3068\u3057\u3066\u3001\u3042\u308B\u3044\u306F\u305D\u306E\u9006\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059 (\u306E\u7BC0\u3092\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u540D\u306B\u306F31\u6587\u5B57\u307E\u3067\u3092\u6307\u5B9A\u3067\u304D\u3001\u30E6\u30CB\u30FC\u30AF\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.em,{children:"process"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6307\u5B9A\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092",(0,d.jsx)(n.em,{children:"menuBar"}),"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.em,{children:"menuBar"}),"\u306B",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"process"})," \u5F15\u6570\u306F\u610F\u5473\u3092\u6301\u305F\u305A\u3001\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u3092\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001SET MENU BAR\u304C\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u518D\u521D\u671F\u5316\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u3048\u3070SET MENU BAR(1)\u3092\u5B9F\u884C\u3057\u305F\u3068\u3057\u307E\u3059\u3002\u6B21\u306B",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/disable-menu-item",title:"DISABLE MENU ITEM",children:"DISABLE MENU ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u3044\u304F\u3064\u304B\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u4E0D\u53EF\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"SET MENU BAR**(1)**\u30922\u5EA6\u76EE\u306B\u5B9F\u884C\u3059\u308B\u3068\u3001\u305D\u306E\u5B9F\u884C\u304C\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u3067\u3082\u5225\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u3067\u3082\u3001\u30E1\u30CB\u30E5\u30FC\u306F\u3059\u3079\u3066\u3001\u5143\u306E\u4F7F\u7528\u53EF\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"SET MENU BAR**(1;*)**\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306F\u524D\u3068\u540C\u3058\u72B6\u614B\u3092\u4FDD\u3063\u3066\u304A\u308A\u3001\u4F7F\u7528\u4E0D\u53EF\u306B\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u306F\u4F7F\u7528\u4E0D\u53EF\u306E\u307E\u307E\u3067\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.em,{children:"menuBar"}),"\u306B",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u306F\u610F\u5473\u3092\u6301\u305F\u305A\u3001\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30E6\u30FC\u30B6\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u79FB\u308B\u3068\u3001\u6700\u521D\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\uFF08\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC#1\uFF09\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u969B\u306B\u3084\u500B\u3005\u306E\u30E6\u30FC\u30B6\u7528\u306EStartup\u30E1\u30BD\u30C3\u30C9\u3067\u76EE\u7684\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC#3\u306B\u5909\u66F4\u3057\u3001\u30E1\u30CB\u30E5\u30FC\u306E\u72B6\u614B\u3092\u5143\u306B\u623B\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU BAR(3)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u201CFormMenuBar1\u201D\u3068\u3044\u3046\u540D\u524D\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u5909\u66F4\u3057\u3001\u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u306E\u72B6\u614B\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002\u4E8B\u524D\u306B\u9078\u629E\u4E0D\u53EF\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u9078\u629E\u4E0D\u53EF\u306E\u307E\u307E\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU BAR("FormMenuBar1";*)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u306E\u5909\u66F4\u4E2D\u30D5\u30A9\u30FC\u30E0\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC#3\u306B\u5909\u66F4\u3057\u307E\u3059\u3002\u30EC\u30B3\u30FC\u30C9\u306E\u5909\u66F4\u304C\u7D42\u4E86\u3059\u308B\u3068\u3001\u30E1\u30CB\u30E5\u30FC\u306E\u72B6\u614B\u3092\u4FDD\u5B58\u3057\u3066\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC#2\u306B\u623B\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU BAR(3)\n\xa0ALL RECORDS([Customers])\n\xa0MODIFY SELECTION([Customers])\n\xa0SET MENU BAR(2;*)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u5305\u62EC\u7684\u306A\u4F8B\u984C\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC\u3084\u7DE8\u96C6\u30E1\u30CB\u30E5\u30FC\u3092\u30D7\u30E9\u30B0\u30E9\u30E0\u3067\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:i(302657).Z+"",width:"571",height:"201"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//File \u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u30E1\u30BD\u30C3\u30C9\n\xa0var FileMenu : Text\xa0//FileMenu \u306B\u306FFIle\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u304C\u542B\u307E\u308C\u307E\u3059\n\xa0FileMenu:=Create menu\n\xa0INSERT MENU ITEM(FileMenu;-1;"My Database "+Get indexed string(131;29))\n\xa0SET MENU ITEM MARK(FileMenu;1;Char(18))\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;"Quit the Test Application mode/Y")\n\xa0SET MENU ITEM PROPERTY(FileMenu;3;Associated standard action;ak return to design mode)\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;"Preferences")\n\xa0SET MENU ITEM PROPERTY(FileMenu;5;Associated standard action;ak database settings)\xa0//Settings\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;Get indexed string(131;30))\n\xa0SET MENU ITEM PROPERTY(FileMenu;7;Associated standard action;ak quit)\xa0//Quit\n\xa0SET MENU ITEM SHORTCUT(FileMenu;7;Character code("Q"))\n\xa0\n\xa0\xa0//Find and Replace \u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u30E1\u30BD\u30C3\u30C9\n\xa0var FindAndReplaceMenu : Text\xa0//FindAndReplaceMenu \u306B\u306FFind and Replace\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u304C\u542B\u307E\u308C\u307E\u3059\n\xa0FindAndReplaceMenu:=Create menu\n\xa0APPEND MENU ITEM(FindAndReplaceMenu;"Find;Find Next;Find Previous;(-;Replace;Replace Next;Replace Previous")\n\xa0SET MENU ITEM SHORTCUT(FindAndReplaceMenu;1;Character code("F"))\n\xa0SET MENU ITEM SHORTCUT(FindAndReplaceMenu;5;Character code("R"))\n\xa0SET MENU ITEM METHOD(FindAndReplaceMenu;1;"MyFindMethod")\n\xa0\n\xa0\xa0//Edit \u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u30E1\u30BD\u30C3\u30C9\n\xa0var EditMenu : Text\xa0//EditMenu \u306B\u306F Edit \u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u304C\u542B\u307E\u308C\u307E\u3059\n\xa0EditMenu:=Create menu\n\xa0APPEND MENU ITEM(EditMenu;"Cut;Copy;Paste")\n\xa0SET MENU ITEM SHORTCUT(EditMenu;1;Character code("X"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;1;Associated standard action;ak cut)\n\xa0SET MENU ITEM SHORTCUT(EditMenu;2;Character code("C"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;2;Associated standard action;ak copy)\n\xa0SET MENU ITEM SHORTCUT(EditMenu;3;Character code("V"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;3;Associated standard action;ak paste)\n\xa0INSERT MENU ITEM(EditMenu;-1;"(-")\n\xa0INSERT MENU ITEM(EditMenu;-1;"Find and Replace";FindAndReplaceMenu)\xa0//\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u6301\u3064\u30A2\u30A4\u30C6\u30E0\n\xa0\n\xa0main_Bar:=Create menu\xa0//\u4ED6\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u7D71\u5408\u3057\u3066\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u4F5C\u6210\u3059\u308B\n\xa0INSERT MENU ITEM(main_Bar;-1;Get indexed string(79;1);FileMenu)\n\xa0APPEND MENU ITEM(main_Bar;"Edit";EditMenu)\n\xa0\n\xa0SET MENU BAR(main_Bar)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u30E1\u30CB\u30E5\u30FC\u306E\u7BA1\u7406"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"67"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(E,{...e})}):E(e)}},302657:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var s=i(667294);let d={},r=s.createContext(d);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);