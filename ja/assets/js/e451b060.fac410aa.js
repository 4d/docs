"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60890"],{550864:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>t,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"API/FunctionClass","title":"Function","description":"4D.Function \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u30B3\u30FC\u30C9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30B3\u30FC\u30C9\u306F () \u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3057\u3066\u3001\u307E\u305F\u306F apply() \u3084 call() \u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 4D \u3067\u306F 3\u7A2E\u985E\u306E Function \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5229\u7528\u3067\u304D\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/API/FunctionClass.md","sourceDirName":"API","slug":"/API/FunctionClass","permalink":"/docs/ja/API/FunctionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFunctionClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"FunctionClass","title":"Function"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/ja/API/FolderClass"},"next":{"title":"HTTPAgent","permalink":"/docs/ja/API/HTTPAgentClass"}}'),r=l("785893"),c=l("250065");let d={id:"FunctionClass",title:"Function"},i=void 0,t={},a=[{value:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"\u5F15\u6570\u306E\u53D7\u3051\u6E21\u3057",id:"\u5F15\u6570\u306E\u53D7\u3051\u6E21\u3057",level:4},{value:"\u5358\u4E00\u30E1\u30BD\u30C3\u30C9\u7528\u306E\u5F15\u6570",id:"\u5358\u4E00\u30E1\u30BD\u30C3\u30C9\u7528\u306E\u5F15\u6570",level:4},{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:".apply()",id:"apply",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:".call()",id:"call",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2-1",level:4},{value:".source",id:"source",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4}];function h(n){let e={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"4D.Function"})})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u30B3\u30FC\u30C9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30B3\u30FC\u30C9\u306F ",(0,r.jsx)(e.code,{children:"()"})," \u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3057\u3066\u3001\u307E\u305F\u306F ",(0,r.jsx)(e.a,{href:"#apply",children:(0,r.jsx)(e.code,{children:"apply()"})})," \u3084 ",(0,r.jsx)(e.a,{href:"#call",children:(0,r.jsx)(e.code,{children:"call()"})})," \u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 4D \u3067\u306F 3\u7A2E\u985E\u306E ",(0,r.jsx)(e.code,{children:"Function"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5229\u7528\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30CD\u30A4\u30C6\u30A3\u30D6\u95A2\u6570"})," (",(0,r.jsx)(e.code,{children:"collection.sort()"})," \u3084 ",(0,r.jsx)(e.code,{children:"file.copyTo()"})," \u306A\u3069\u306E 4D\u30AF\u30E9\u30B9\u306B\u30D3\u30EB\u30C8\u30A4\u30F3\u3055\u308C\u305F\u95A2\u6570)\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30E6\u30FC\u30B6\u30FC\u95A2\u6570"})," (\u30E6\u30FC\u30B6\u30FC",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/classes",children:"\u30AF\u30E9\u30B9"})," \u306B\u304A\u3044\u3066 ",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/classes#function",children:"Function \u30AD\u30FC\u30EF\u30FC\u30C9"}),"\u3092\u4F7F\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u3082\u306E)\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u95A2\u6570"})," (4D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5B9F\u884C\u3059\u308B\u3082\u306E)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/formula",children:"Formula"})," \u3042\u308B\u3044\u306F ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/formula-from-string",children:"Formula from string"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001",(0,r.jsxs)(e.a,{href:"#4dfunction-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",children:[(0,r.jsx)(e.code,{children:"4D.Function"}),"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]})," \u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u305D\u308C\u306B\u3088\u3063\u3066\u3042\u3089\u3086\u308B 4D\u5F0F\u3084\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u8868\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"Formula\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u683C\u7D0D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=New object\n $f.message:=Formula(ALERT("Hello world"))\n'})}),"\n",(0,r.jsxs)(e.p,{children:['\u3053\u306E\u3088\u3046\u306A\u30D7\u30ED\u30D1\u30C6\u30A3\u306F "\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u95A2\u6570"\u3001\u3064\u307E\u308A\u89AA\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u7D10\u3065\u3044\u305F\u95A2\u6570\u3067\u3059\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u95A2\u6570\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u306E\u3042\u3068\u306B ',(0,r.jsx)(e.strong,{children:"()"})," \u3092\u3064\u3051\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' $f.message() // "Hello world" \u3092\u8868\u793A\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5927\u30AB\u30C3\u30B3\u3092\u4F7F\u7528\u3057\u305F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3082\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' $f["message"]() // "Hello world" \u3068\u8868\u793A\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u305F\u3068\u3048\u5F15\u6570\u3092\u53D7\u3051\u53D6\u3089\u306A\u304B\u3063\u305F\u3068\u3057\u3066\u3082 (\u5F8C\u8FF0\u53C2\u7167)\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u95A2\u6570\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u306F\u30AB\u30C3\u30B3 ( ) \u3092\u3064\u3051\u3066\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u307F\u3092\u547C\u3073\u51FA\u3057\u305F\u5834\u5408\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3078\u306E\u65B0\u3057\u3044\u53C2\u7167\u304C\u8FD4\u3055\u308C\u307E\u3059 (\u305D\u3057\u3066\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u5B9F\u884C\u306F\u3055\u308C\u307E\u305B\u3093):"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" $o:=$f.message // $o \u306B\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"#apply",children:(0,r.jsx)(e.code,{children:"apply()"})})," \u304A\u3088\u3073 ",(0,r.jsx)(e.a,{href:"#call",children:(0,r.jsx)(e.code,{children:"call()"})})," \u95A2\u6570\u3092\u4F7F\u3063\u3066\u95A2\u6570\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' $f.message.apply() // "Hello world!" \u3092\u8868\u793A\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u5F15\u6570\u306E\u53D7\u3051\u6E21\u3057",children:"\u5F15\u6570\u306E\u53D7\u3051\u6E21\u3057"}),"\n",(0,r.jsxs)(e.p,{children:["\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306B\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/parameters#%E9%A0%86%E7%95%AA%E5%BC%95%E6%95%B0",children:"\u9806\u756A\u5F15\u6570\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"})," $1, $2...$n \u3092\u4F7F\u7528\u3057\u3066\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $f : Object\n $f:=New object\n $f.message:=Formula(ALERT("Hello "+$1))\n $f.message("John") // "Hello John" \u3092\u8868\u793A\u3057\u307E\u3059\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u3042\u308B\u3044\u306F\u3001",(0,r.jsx)(e.a,{href:"#call",children:".call()"})," \u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $f : Object\n $f:=Formula($1+" "+$2)\n $text:=$f.call(Null;"Hello";"World") // "Hello World" \u3092\u8FD4\u3057\u307E\u3059\n $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) // "Welcome to 2019" (\u4F8B) \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u5358\u4E00\u30E1\u30BD\u30C3\u30C9\u7528\u306E\u5F15\u6570",children:"\u5358\u4E00\u30E1\u30BD\u30C3\u30C9\u7528\u306E\u5F15\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u4FBF\u6027\u306E\u305F\u3081\u306B\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u5358\u4E00\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u5F15\u6570\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u521D\u671F\u5316\u3067\u306F\u7701\u7565\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7701\u7565\u3055\u308C\u305F\u5F15\u6570\u306F\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u547C\u3073\u51FA\u3059\u6642\u306B\u4E00\u7DD2\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $f : 4D.Function\n\n $f:=Formula(myMethod)\n  // \u3053\u3053\u3067 Formula(myMethod($1;$2) \u3068\u66F8\u304F\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\n $text:=$f.call(Null;"Hello";"World") // "Hello World" \u3092\u8FD4\u3057\u307E\u3059\n $text:=$f.call() // "How are you?" \u3092\u8FD4\u3057\u307E\u3059\n\n  // myMethod\n #DECLARE ($param1 : Text; $param2 : Text)->$return : Text\n If(Count parameters=2)\n    $return:=$param1+" "+$param2\n Else\n    $return:="How are you?"\n End if\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5F15\u6570\u306F\u30E1\u30BD\u30C3\u30C9\u5185\u306B\u304A\u3044\u3066\u3001\u547C\u3073\u51FA\u3057\u6642\u306B\u6307\u5B9A\u3057\u305F\u9806\u3067\u53D7\u3051\u53D6\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsx)(e.tr,{children:(0,r.jsx)(e.th,{})})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#apply",children:[(0,r.jsx)(e.strong,{children:".apply"}),"() : any",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.strong,{children:".apply"}),"( ",(0,r.jsx)(e.em,{children:"thisObj"})," : Object { ; ",(0,r.jsx)(e.em,{children:"formulaParams"})," : Collection } ) : any"]}),(0,r.jsx)(e.br,{}),"\u5BFE\u8C61\u306E ",(0,r.jsx)(e.code,{children:"Formula"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3057\u3001\u305D\u306E\u7D50\u679C\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#call",children:[(0,r.jsx)(e.strong,{children:".call"}),"() : any",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.strong,{children:".call"}),"( ",(0,r.jsx)(e.em,{children:"thisObj"})," : Object { ; ...",(0,r.jsx)(e.em,{children:"params"})," : any } ) : any"]}),(0,r.jsx)(e.br,{}),"\u5BFE\u8C61\u306E ",(0,r.jsx)(e.code,{children:"Formula"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3057\u3001\u305D\u306E\u7D50\u679C\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#source",children:[(0,r.jsx)(e.strong,{children:".source"})," : Text "]}),(0,r.jsx)(e.br,{}),"\u5BFE\u8C61\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30BD\u30FC\u30B9\u5F0F"]})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"apply",children:".apply()"}),"\n",(0,r.jsxs)(e.details,{children:[(0,r.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"17 R3"}),(0,r.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".apply"}),"() : any",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.strong,{children:".apply"}),"( ",(0,r.jsx)(e.em,{children:"thisObj"})," : Object { ; ",(0,r.jsx)(e.em,{children:"formulaParams"})," : Collection } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{style:{textAlign:"center"}}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"thisObj"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 This \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"formulaParams"}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u5B9F\u884C\u3055\u308C\u308B\u969B\u306B $1...$n \u3068\u3057\u3066\u6E21\u3055\u308C\u308B\u5024\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u7D50\u679C"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".apply()"})," \u95A2\u6570\u306F\u3001\u5BFE\u8C61\u306E ",(0,r.jsx)(e.code,{children:"Formula"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3057\u3001\u305D\u306E\u7D50\u679C\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 ",(0,r.jsx)(e.code,{children:"Formula"})," \u3042\u308B\u3044\u306F ",(0,r.jsx)(e.code,{children:"Formula from string"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"thisObj"})," \u306B\u306F\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 ",(0,r.jsx)(e.code,{children:"This"})," \u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u53C2\u7167\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(e.em,{children:"formulaParams"})," \u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 $1...$n \u306E\u5F15\u6570\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".apply()"})," \u306F ",(0,r.jsx)(e.a,{href:"#call",children:(0,r.jsx)(e.code,{children:".call()"})})," \u3068\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u5F15\u6570\u3092\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u6E21\u3059\u70B9\u304C\u7570\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u8A08\u7B97\u3055\u308C\u305F\u7D50\u679C\u3092\u6E21\u3059\u306E\u306B\u4FBF\u5229\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" var $f : 4D.Function\n $f:=Formula($1+$2+$3)\n\n $c:=New collection(10;20;30)\n $result:=$f.apply(Null;$c) // 60 \u3092\u8FD4\u3057\u307E\u3059\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $calc : 4D.Function\n var $feta; $robot : Object\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}\n $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"call",children:".call()"}),"\n",(0,r.jsxs)(e.details,{children:[(0,r.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"17 R3"}),(0,r.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".call"}),"() : any",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.strong,{children:".call"}),"( ",(0,r.jsx)(e.em,{children:"thisObj"})," : Object { ; ...",(0,r.jsx)(e.em,{children:"params"})," : any } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"thisObj"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 This \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"params"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u5B9F\u884C\u3055\u308C\u308B\u969B\u306B $1...$n \u3068\u3057\u3066\u6E21\u3055\u308C\u308B\u5024"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"<-"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u7D50\u679C"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".call()"})," \u95A2\u6570\u306F\u3001\u5BFE\u8C61\u306E ",(0,r.jsx)(e.code,{children:"Formula"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3057\u3001\u305D\u306E\u7D50\u679C\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002 ",(0,r.jsx)(e.code,{children:"Formula"})," \u3042\u308B\u3044\u306F ",(0,r.jsx)(e.code,{children:"Formula from string"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"thisObj"})," \u306B\u306F\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 ",(0,r.jsx)(e.code,{children:"This"})," \u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u53C2\u7167\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(e.em,{children:"params"})," \u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067 ",(0,r.jsx)(e.em,{children:"$1...$n"})," \u306E\u5F15\u6570\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u5024\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".call()"})," \u306F ",(0,r.jsx)(e.a,{href:"#apply",children:(0,r.jsx)(e.code,{children:".apply()"})})," \u3068\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u5F15\u6570\u3092\u76F4\u63A5\u6E21\u3059\u70B9\u304C\u7570\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-1-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(Uppercase($1))\n $result:=$f.call(Null;"hello") // "HELLO" \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-2-1",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' $o:=New object("value";50)\n $f:=Formula(This.value*2)\n $result:=$f.call($o) // 100 \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,r.jsx)(e.h2,{id:"source",children:".source"}),"\n",(0,r.jsxs)(e.details,{children:[(0,r.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"18 R2"}),(0,r.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".source"})," : Text"]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".source"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u5BFE\u8C61\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30BD\u30FC\u30B9\u5F0F\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,r.jsx)(e.strong,{children:"\u8AAD\u307F\u53D6\u308A\u5C02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' var $of : 4D.Function\n var $tf : Text\n $of:=Formula(String(Current time;HH MM AM PM))\n $tf:=$of.source //"String(Current time;HH MM AM PM)"\n'})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return d}});var s=l(667294);let r={},c=s.createContext(r);function d(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);