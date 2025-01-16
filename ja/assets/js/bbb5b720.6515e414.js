"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67812"],{33937:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/register-client","title":"REGISTER CLIENT","description":"REGISTER CLIENT ( clientName {; period}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/register-client.md","sourceDirName":"commands-legacy","slug":"/commands/register-client","permalink":"/docs/ja/commands/register-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-client.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"register-client","title":"REGISTER CLIENT","slug":"/commands/register-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process state","permalink":"/docs/ja/commands/process-state"},"next":{"title":"RESUME PROCESS","permalink":"/docs/ja/commands/resume-process"}}'),i=s("785893"),t=s("250065");let l={id:"register-client",title:"REGISTER CLIENT",slug:"/commands/register-client",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REGISTER CLIENT"})," ( ",(0,i.jsx)(n.em,{children:"clientName"})," {; ",(0,i.jsx)(n.em,{children:"period"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"period"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\u30D0\u30FC\u30B8\u30E7\u30F311.3\u3088\u308A\u7121\u52B9"})})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["REGISTER CLIENT \u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u3001",(0,i.jsx)(n.em,{children:"clientName"}),"\u3067\u6307\u5B9A\u3057\u305F\u540D\u524D\u30674D Server\u306B\u767B\u9332\u3057\u3001\u4ED6\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3082\u3057\u304F\u306F4D Server (\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u304B\u3089) \u304C\u767B\u9332\u3055\u308C\u305F\u30DE\u30B7\u30F3\u4E0A\u3067\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/commands/execute-on-client",title:"EXECUTE ON CLIENT",children:"EXECUTE ON CLIENT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u4E00\u65E6\u767B\u9332\u3055\u308C\u308B\u3068\u30014D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u4ED6\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u7528\u306B1\u3064\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u74B0\u5883\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u3001\u8D77\u52D5\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u767B\u9332\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u3063\u3066\u30014D Server\u306B\u63A5\u7D9A\u3059\u308B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u81EA\u52D5\u7684\u306B\u767B\u9332\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u306E4D\u3067\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u7528\u3055\u308C\u3066\u3082\u52B9\u679C\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u3072\u3068\u3064\u4EE5\u4E0A\u306E4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u540C\u3058\u767B\u9332\u540D\u3092\u6301\u3064\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u4E0A\u306B",(0,i.jsx)(n.em,{children:"clientName"}),"\u3068\u3044\u3046\u540D\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306F",(0,i.jsx)(n.a,{href:"/docs/ja/commands/unregister-client",title:"UNREGISTER CLIENT",children:"UNREGISTER CLIENT"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u306E\u307F\u30A2\u30DC\u30FC\u30C8\u53EF\u80FD\u3067\u3059\u3002",(0,i.jsx)(n.br,{}),"\n\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,i.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u4F5C\u6210\u3055\u308C\u308B\u30D7\u30ED\u30BB\u30B9\u306F\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u306B\u306A\u308A\u30014D\u306F\u81EA\u52D5\u7684\u306B\u30D7\u30ED\u30BB\u30B9\u540D\u306E\u59CB\u3081\u306B\u30C9\u30EB\u30DE\u30FC\u30AF ($) \u3092\u4ED8\u3051\u52A0\u3048\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30D7\u30ED\u30BB\u30B9\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:['4D\u30D0\u30FC\u30B8\u30E7\u30F311.3\u3088\u308A\u3001\u30B5\u30FC\u30D0/\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u901A\u4FE1\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u304C\u6700\u9069\u5316\u3055\u308C\u307E\u3057\u305F\u3002\u30B5\u30FC\u30D0\u306F\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u76F4\u63A5\u3001\u767B\u9332\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u5B9F\u884C \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3059 ("\u30D7\u30C3\u30B7\u30E5"\u30C6\u30AF\u30CE\u30ED\u30B8)\u3002\u4EE5\u524D\u306E\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u5B9A\u671F\u7684\u306B\u30B5\u30FC\u30D0\u306B\u554F\u3044\u5408\u308F\u305B\u3059\u308B\u65B9\u6CD5\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002',(0,i.jsx)(n.em,{children:"period"}),"\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u5EA6\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u30014D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u540D\u3092\u52D5\u7684\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001UNREGISTERCLIENT\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3001\u518D\u5EA6REGISTER CLIENT\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u3067\u306F\u5C0F\u3055\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u3092\u4F5C\u6210\u3057\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u9593\u306E\u901A\u4FE1\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u3053\u306ERegistration\u30E1\u30BD\u30C3\u30C9\u306F4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u767B\u9332\u3057\u3066\u3001\u4ED6\u306E4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//\u4ED6\u306E\u540D\u524D\u3067\u767B\u9332\u3059\u308B\u524D\u306B\u767B\u9332\u89E3\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\n\xa0UNREGISTER CLIENT\n\xa0REPEAT\n\xa0\xa0\xa0\xa0vPseudoName:=Request("\u540D\u524D\u3092\u5165\u529B:";"\u30E6\u30FC\u30B6";"OK";"\u30AD\u30E3\u30F3\u30BB\u30EB")\n\xa0Until((OK=0)|(vPseudoName#""))\n\xa0If(OK=0)\n\xa0\xa0\xa0\xa0...\xa0// \u4F55\u3082\u884C\u308F\u306A\u3044\n\xa0Else\n\xa0\xa0\xa0\xa0REGISTER CLIENT(vPseudoName)\n\xa0End if\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u4EE5\u4E0B\u306E\u6307\u793A\u306F\u3001\u767B\u9332\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30EA\u30B9\u30C8\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3082\u306E\u3067\u3059\u3002\u3053\u308C\u306F\u5185\u306B\u7F6E\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PrClientList:=New process("4D Client List";32000;"List of registered clients")\n\xa0\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u4EE5\u4E0B\u306E4D Client List\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u53D7\u4FE1\u53EF\u80FD\u306A\u767B\u9332\u6E08\u307F\u51684D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u767B\u9332\u540D\u30EA\u30B9\u30C8\u3092\u5165\u624B\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0If(Application type=4D Remote Mode)\n\xa0\xa0// \u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u3067\u306E\u307F\u6709\u52B9\n\xa0\xa0\xa0\xa0$Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"List of registered clients")\n\xa0\xa0\xa0\xa0REPEAT\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET REGISTERED CLIENTS($ClientList;$ListeCharge)\n\xa0\xa0//$ClientList\u306B\u767B\u9332\u6E08\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW($Ref)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(0;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($p;1;Size of array($ClientList))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE($ClientList{$p}+Char(Carriage return))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0//\u6BCE\u79D2\u3054\u3068\u306B\u8868\u793A\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;60)\n\xa0\xa0\xa0\xa0Until(False)\xa0// \u7121\u9650\u30EB\u30FC\u30D7\n\xa0End if\n\xa0\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u4E0B\u8A18\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u767B\u9332\u6E08\u307F\u306E\u4ED6\u306E4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u9001\u3089\u308C\u305F4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067Display_Message\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\uFF08\u4E0B\u8A18\u53C2\u7167\uFF09\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$Addressee:=Request("\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5B9B\u5148:";"")\n\xa0\xa0// On Startup \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3067\u53D6\u5F97\u3057\u305F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u53D7\u4FE1\u53EF\u80FD\u8005\u30EA\u30B9\u30C8\u306E\u540D\u524D\u3092\u6307\u5B9A\n\xa0If(OK#0)\n\xa0\xa0\xa0\xa0$Message:=Request("Message:")\xa0// message\n\xa0\xa0\xa0\xa0If(OK#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXECUTE ON CLIENT($Addressee;"Display_Message";$Message)\xa0// \u30E1\u30C3\u30BB\u30FC\u30B8\u9001\u4FE1\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"\u4EE5\u4E0B\u306F\u3001Display_Message\u30E1\u30BD\u30C3\u30C9\u3067\u3059:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $1 : Text\n\xa0ALERT($1)\n\xa0\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"\u6700\u5F8C\u306B\u3001\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u304C\u4ED6\u306E4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u898B\u3048\u305A\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u3082\u53D7\u3051\u53D6\u308C\u306A\u304F\u306A\u308B\u3088\u3046\u306B\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0UNREGISTER CLIENT\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,i.jsx)(n.p,{children:"4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u6B63\u3057\u304F\u767B\u9332\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u30024D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u306A\u306B\u3082\u884C\u308F\u305AOK\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"648"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);