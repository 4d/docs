"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71414"],{830202:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"Web\u30A8\u30EA\u30A2","description":"Web\u30A8\u30EA\u30A2\u306F\u3001\u9759\u7684\u304A\u3088\u3073\u52D5\u7684\u306A HTML\u30DA\u30FC\u30B8\u3001\u30D5\u30A1\u30A4\u30EB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001JavaScript \u306A\u3069\u306E\u69D8\u3005\u306A Web\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30D5\u30A9\u30FC\u30E0\u4E2D\u3067\u8868\u793A\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 The rendering engine of the web area depends on the execution platform of the application and the selected rendering engine option.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/ja/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"webAreaOverview","title":"Web\u30A8\u30EA\u30A2"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/ja/FormObjects/text"},"next":{"title":"4D View Pro \u30A8\u30EA\u30A2","permalink":"/docs/ja/FormObjects/viewProAreaOverview"}}'),i=s("785893"),t=s("250065");let d={id:"webAreaOverview",title:"Web\u30A8\u30EA\u30A2"},a=void 0,o={},c=[{value:"\u7279\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u7279\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3",level:2},{value:"\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5909\u6570",id:"\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5909\u6570",level:3},{value:"Web\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3",id:"web\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3",level:3},{value:"4D\u30E1\u30BD\u30C3\u30C9\u30B3\u30FC\u30EB\u3092\u8A31\u53EF",id:"4d\u30E1\u30BD\u30C3\u30C9\u30B3\u30FC\u30EB\u3092\u8A31\u53EF",level:3},{value:"$4d\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4F7F\u7528",id:"4d\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4F7F\u7528",level:3},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3",id:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3",level:2},{value:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8",id:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8",level:2},{value:"Web\u30A8\u30EA\u30A2\u306E\u30EB\u30FC\u30EB",id:"web\u30A8\u30EA\u30A2\u306E\u30EB\u30FC\u30EB",level:2},{value:"\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9",id:"\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9",level:3},{value:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",id:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",level:3},{value:"Web\u30A8\u30EA\u30A2\u3068 Web\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8 (Windows)",id:"web\u30A8\u30EA\u30A2\u3068-web\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8-windows",level:3},{value:"\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u633F\u5165 (macOS)",id:"\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u633F\u5165-macos",level:3},{value:"Web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9",id:"web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",id:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3},{value:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A1\u30A4\u30EB",id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A1\u30A4\u30EB",level:4},{value:"Example of disabling default Switch",id:"example-of-disabling-default-switch",level:4},{value:"Example for Autoplay",id:"example-for-autoplay",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:3}];function l(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Web\u30A8\u30EA\u30A2\u306F\u3001\u9759\u7684\u304A\u3088\u3073\u52D5\u7684\u306A HTML\u30DA\u30FC\u30B8\u3001\u30D5\u30A1\u30A4\u30EB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001JavaScript \u306A\u3069\u306E\u69D8\u3005\u306A Web\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30D5\u30A9\u30FC\u30E0\u4E2D\u3067\u8868\u793A\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 The rendering engine of the web area depends on the execution platform of the application and the selected ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"rendering engine option"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u3058\u30D5\u30A9\u30FC\u30E0\u5185\u306B\u8907\u6570\u306E Web\u30A8\u30EA\u30A2\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 Note, however, that the use of web areas must follow ",(0,i.jsx)(n.a,{href:"#web-area-rules",children:"several rules"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Several dedicated ",(0,i.jsx)(n.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,i.jsx)(n.a,{href:"../category/web-area",children:"language commands"})," as well as generic and specific ",(0,i.jsx)(n.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of web areas. \u7279\u5225\u306A\u5909\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A8\u30EA\u30A2\u3068 4D\u74B0\u5883\u9593\u3067\u60C5\u5831\u3092\u4EA4\u63DB\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u7279\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n",(0,i.jsx)(n.h3,{id:"\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5909\u6570",children:"\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5909\u6570"}),"\n",(0,i.jsx)(n.p,{children:"Web\u30A8\u30EA\u30A2\u306B\u306F 2\u3064\u306E\u7279\u5225\u306A\u5909\u6570\u304C\u81EA\u52D5\u3067\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#url",children:(0,i.jsx)(n.code,{children:"URL"})})," --to control the URL displayed by the web area"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#progression",children:(0,i.jsx)(n.code,{children:"Progression"})})," -- to control the loading percentage of the page displayed in the web area."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/webAreaOverview#web-rendering-engine",children:"Windows system rendering engine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"web\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3",children:"Web\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3"}),"\n",(0,i.jsxs)(n.p,{children:["You can choose between ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"two rendering engines"})," for the web area, depending on the specifics of your application."]}),"\n",(0,i.jsx)(n.p,{children:'"\u57CB\u3081\u8FBC\u307FWeb\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3\u3092\u4F7F\u7528" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3057\u3066\u3044\u308B\u5834\u5408\u3001"4D\u30E1\u30BD\u30C3\u30C9\u30B3\u30FC\u30EB\u3092\u8A31\u53EF" \u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u9078\u629E\u53EF\u80FD\u306B\u306A\u308A\u3001\u307E\u305F\u3001macOS \u3068 Windows \u4E0A\u306E\u52D5\u4F5C\u304C\u540C\u69D8\u3067\u3042\u308B\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002 Web\u30A8\u30EA\u30A2\u304C\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u6700\u65B0\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u306E\u6069\u6075\u3092\u53D7\u3051\u3089\u308C\u308B\u305F\u3081\u3001\u30B7\u30B9\u30C6\u30E0\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,i.jsx)(n.h3,{id:"4d\u30E1\u30BD\u30C3\u30C9\u30B3\u30FC\u30EB\u3092\u8A31\u53EF",children:"4D\u30E1\u30BD\u30C3\u30C9\u30B3\u30FC\u30EB\u3092\u8A31\u53EF"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," property is selected, you can call 4D methods from a web area."]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6CE8\u8A18",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This property is only available if the web area ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"uses the embedded web rendering engine"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F 4D\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3092\u8A31\u53EF\u3059\u308B\u305F\u3081\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30DA\u30FC\u30B8\u306A\u3069\u3001\u4FE1\u983C\u3067\u304D\u308B\u30DA\u30FC\u30B8\u306B\u5BFE\u3057\u3066\u306E\u307F\u6709\u52B9\u306B\u3059\u308B\u3079\u304D\u3067\u3059\u3002"}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"4d\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4F7F\u7528",children:"$4d\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4F7F\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"4D embedded web rendering engine"}),' supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.']}),"\n",(0,i.jsxs)(n.p,{children:["For example, to call the ",(0,i.jsx)(n.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.HelloWorld();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["JavaScript is case sensitive so it is important to note that the object is named ",(0,i.jsx)(n.strong,{children:"$4d"}),' (with a lowercase "d").']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"4D\u30E1\u30BD\u30C3\u30C9\u3078\u306E\u547C\u3073\u51FA\u3057\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method.\n\u3053\u308C\u3089\u306E\u5F15\u6570\u306F\u3001JavaScript \u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u578B\u3067\u3042\u308C\u3070\u3069\u3093\u306A\u3082\u306E\u3067\u3082\u6E21\u305B\u307E\u3059 (\u6587\u5B57\u5217\u3001\u6570\u5024\u3001\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"function(result)"}),': Function to pass as last argument. \u3053\u306E "\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF" \u95A2\u6570\u306F\u30014D\u30E1\u30BD\u30C3\u30C9\u304C\u5B9F\u884C\u3092\u7D42\u3048\u308B\u3068\u540C\u6642\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 It receives the ',(0,i.jsx)(n.code,{children:"result"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"}),": Execution result of the 4D method. \u623B\u308A\u5024\u306F JavaScript \u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u578B (\u6587\u5B57\u5217\u3001\u6570\u5024\u3001\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8) \u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066\u30014D\u306F UTF-8 \u6587\u5B57\u30B3\u30FC\u30C9\u3067\u52D5\u4F5C\u3057\u3066\u3044\u307E\u3059\u3002 (\u30A2\u30AF\u30BB\u30F3\u30C8\u304C\u4ED8\u3044\u305F\u6587\u5B57\u306A\u3069\u306E) \u62E1\u5F35\u6587\u5B57\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u3092\u8FD4\u3059\u5834\u5408\u306B\u306F\u3001Web\u30A8\u30EA\u30A2\u3067\u8868\u793A\u3055\u308C\u308B\u30DA\u30FC\u30B8\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u304C UTF-8 \u306B\u5BA3\u8A00\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u6587\u5B57\u30B3\u30FC\u30C9\u304C UTF-8 \u3067\u306A\u3044\u5834\u5408\u3001\u6587\u5B57\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 In this case, add the following line in the HTML page to declare the encoding:\n",(0,i.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsxs)(n.p,{children:["Given a 4D project method named ",(0,i.jsx)(n.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,i.jsxs)(n.p,{children:["4D code of ",(0,i.jsx)(n.code,{children:"today"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE : Text\n return String(Current date;System date long)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Web\u30A8\u30EA\u30A2\u3067\u306F\u3001 4D\u30E1\u30BD\u30C3\u30C9\u306F\u4EE5\u4E0B\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u547C\u3073\u51FA\u3057\u53EF\u80FD\u3067\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,i.jsx)(n.p,{children:"The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. Web\u30A8\u30EA\u30A2\u306B\u3088\u3063\u3066\u30ED\u30FC\u30C9\u3055\u308C\u305F HTML\u30DA\u30FC\u30B8\u5185\u306B\u3053\u306E\u65E5\u4ED8\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"HTML\u30DA\u30FC\u30B8\u306E\u30B3\u30FC\u30C9\u3067\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(result)\n{\n    var curDate = result;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsxs)(n.p,{children:["The 4D project method ",(0,i.jsx)(n.code,{children:"calcSum"})," receives parameters and returns their sum:"]}),"\n",(0,i.jsxs)(n.p,{children:["4D code of ",(0,i.jsx)(n.code,{children:"calcSum"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE (... : Real) -> $sum : Real \n  // receives n Real type parameters\n  // and returns a Real\n var $i; $n : Integer\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,i.jsx)(n.p,{children:"Web\u30A8\u30EA\u30A2\u5185\u3067\u5B9F\u884C\u3055\u308C\u308B JavaScript \u30B3\u30FC\u30C9\u3067\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)\n    {\n        var result = theSum // result is 262.5\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3",children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\n",(0,i.jsxs)(n.p,{children:["Four specific standard actions are available for managing web areas automatically: ",(0,i.jsx)(n.code,{children:"Open Back URL"}),", ",(0,i.jsx)(n.code,{children:"Open Forward URL"}),", ",(0,i.jsx)(n.code,{children:"Refresh Current URL"})," and ",(0,i.jsx)(n.code,{children:"Stop Loading URL"}),". \u30DC\u30BF\u30F3\u3084\u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u306B\u3053\u308C\u3089\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u3067\u3001\u57FA\u672C\u306E Web\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u7D20\u65E9\u304F\u5B9F\u88C5\u3067\u304D\u307E\u3059\u3002 These actions are described in ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html",children:"Standard actions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8",children:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5B9A\u306E\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306F\u3001Web\u30A8\u30EA\u30A2\u3092\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3067\u7BA1\u7406\u3059\u308B\u3053\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u3059\u306A\u308F\u3061\u3001\u30EA\u30F3\u30AF\u306E\u8D77\u52D5\u306B\u95A2\u9023\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onBeginUrlLoading",children:(0,i.jsx)(n.code,{children:"On Begin URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onUrlResourceLoading",children:(0,i.jsx)(n.code,{children:"On URL Resource Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onEndUrlLoading",children:(0,i.jsx)(n.code,{children:"On End URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onUrlLoadingError",children:(0,i.jsx)(n.code,{children:"On URL Loading Error"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onUrlFiltering",children:(0,i.jsx)(n.code,{children:"On URL Filtering"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onOpenExternalLink",children:(0,i.jsx)(n.code,{children:"On Open External Link"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u66F4\u306B\u3001Web\u30A8\u30EA\u30A2\u306F\u4EE5\u4E0B\u306E\u6C4E\u7528\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onLoad",children:(0,i.jsx)(n.code,{children:"On Load"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onUnload",children:(0,i.jsx)(n.code,{children:"On Unload"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onGettingFocus",children:(0,i.jsx)(n.code,{children:"On Getting Focus"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/ja/Events/onLosingFocus",children:(0,i.jsx)(n.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web\u30A8\u30EA\u30A2\u306E\u30EB\u30FC\u30EB",children:"Web\u30A8\u30EA\u30A2\u306E\u30EB\u30FC\u30EB"}),"\n",(0,i.jsx)(n.h3,{id:"\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9",children:"\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"}),"\n",(0,i.jsx)(n.p,{children:"\u30D5\u30A9\u30FC\u30E0\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u4ED6\u306E\u30D5\u30A9\u30FC\u30E0\u30A8\u30EA\u30A2\u3068\u306E\u5BFE\u8A71\u3092\u53EF\u80FD\u306B\u3059\u308B\u3001\u6A19\u6E96\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u6A5F\u80FD\u304C Web \u30A8\u30EA\u30A2\u5185\u3067\u5229\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Edit menu commands"}),": When the web area has the focus, the ",(0,i.jsx)(n.strong,{children:"Edit"})," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context menu"}),": It is possible to use the standard ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesEntry#context-menu",children:"context menu"})," of the system with the web area. Display of the context menu can be controlled using the ",(0,i.jsx)(n.a,{href:"/docs/ja/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Drag and drop"}),': The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.\n\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F URL \u306E\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u306B\u3088\u3063\u3066 Web\u30A8\u30EA\u30A2\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7981\u6B62\u3055\u308C\u3066\u3044\u307E\u3059\u3002 In this case, the cursor displays a "forbidden" icon ',(0,i.jsx)(n.img,{src:s(756124).Z+"",width:"26",height:"28"}),". You have to use the ",(0,i.jsx)(n.code,{children:'WA SET PREFERENCE(*;"warea";WA enable URL drop;True)'}),' statement to display a "drop" icon and generate the ',(0,i.jsx)(n.a,{href:"/docs/ja/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})," event. In this event, you can call the ",(0,i.jsx)(n.a,{href:"/docs/ja/commands/wa-open-url",children:(0,i.jsx)(n.code,{children:"WA OPEN URL"})})," command or set the ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#url",children:"URL variable"})," in response to a user drop."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Drag and drop features described above are not supported in web areas using the ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"macOS system rendering engine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"}),"\n",(0,i.jsx)(n.p,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u518D\u63CF\u753B\u6A5F\u69CB\u306B\u95A2\u308F\u308B\u7406\u7531\u304B\u3089\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306B Web\u30A8\u30EA\u30A2\u3092\u633F\u5165\u3059\u308B\u5834\u5408\u306B\u306F\u4EE5\u4E0B\u306E\u5236\u7D04\u304C\u3064\u304D\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306B\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Web\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u304C\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30B5\u30A4\u30BA\u3092\u8D85\u3048\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4ED6\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E0A\u3084\u4E0B\u306B Web\u30A8\u30EA\u30A2\u3092\u91CD\u306D\u308B\u3053\u3068\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"web\u30A8\u30EA\u30A2\u3068-web\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8-windows",children:"Web\u30A8\u30EA\u30A2\u3068 Web\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8 (Windows)"}),"\n",(0,i.jsx)(n.p,{children:"Windows \u306B\u304A\u3044\u3066\u306F\u3001Web\u30A8\u30EA\u30A2\u304B\u3089\u3001\u540C\u3058 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u8D77\u52D5\u4E2D\u306E Web\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u304A\u52E7\u3081\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u308C\u3092\u304A\u3053\u306A\u3046\u3068\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8\u304C\u767A\u751F\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D5\u30EA\u30FC\u30BA\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3082\u3061\u308D\u3093\u3001\u30EA\u30E2\u30FC\u30C8\u306E 4D \u304B\u3089 4D Server \u306E Web\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002\u81EA\u8EAB\u306E Web\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u633F\u5165-macos",children:"\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u633F\u5165 (macOS)"}),"\n",(0,i.jsxs)(n.p,{children:['macOS \u4E0A\u306E Web\u30A8\u30EA\u30A2\u3067\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u308A\u51E6\u7406\u3055\u308C\u308B URL \u306F\u3001\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u958B\u59CB\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3064\u307E\u308A\u3001"',(0,i.jsx)(n.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'" \u3067\u306F\u306A\u3001"',(0,i.jsx)(n.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" \u6587\u5B57\u5217\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002']}),"\n",(0,i.jsx)(n.h2,{id:"web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9",children:"Web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9"}),"\n",(0,i.jsx)(n.p,{children:"\u30AA\u30D5\u30B9\u30AF\u30EA\u30FC\u30F3\u306E Web\u30A8\u30EA\u30A2\u3084\u3001\u30D5\u30A9\u30FC\u30E0\u306EWeb \u30A8\u30EA\u30A2\u5185\u306B\u304A\u3044\u3066\u3001Web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u3092\u898B\u305F\u308A\u4F7F\u7528\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 Web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u306F\u3001\u57CB\u3081\u8FBC\u307FWeb\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u30C7\u30D0\u30C3\u30AC\u30FC\u3067\u3059\u3002 Web\u30DA\u30FC\u30B8\u306E\u60C5\u5831\u306E\u3001\u30B3\u30FC\u30C9\u3068\u30D5\u30ED\u30FC\u3092\u89E3\u6790\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["To display the Web inspector, you can either execute the ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command, or use the context menu of the web area."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Execute the ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,i.jsx)(n.br,{}),"\nThis command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use the web area context menu"}),(0,i.jsx)(n.br,{}),"\nThis feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesEntry#context-menu",children:"context menu"})," for the web area is enabled"]}),"\n",(0,i.jsx)(n.li,{children:"\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u306E\u4F7F\u7528\u304C\u3001\u4EE5\u4E0B\u306E\u5BA3\u8A00\u3092\u7528\u3044\u3066\u660E\u793A\u7684\u306B\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Windows system rendering engine"}),", a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, refer to the description of the ",(0,i.jsx)(n.a,{href:"/docs/ja/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,i.jsx)(n.strong,{children:"Inspect Element"})," in the context menu of the area. \u3053\u306E\u9805\u76EE\u3092\u9078\u629E\u3059\u308B\u3068\u3001Web\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u6A5F\u80FD\u306E\u8A73\u7D30\u306B\u95A2\u3057\u3066\u306F\u3001Web\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u308A\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7",children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u4E00\u89A7"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(n.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#default-file",children:"Default switches"})," are provided, but you can override them by using a custom 4DCEFParameters.json file."]}),"\n",(0,i.jsx)(n.p,{children:"In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["macOS: ",(0,i.jsx)(n.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including ",(0,i.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#form-area-properties",children:"4D View Pro areas"}),". It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application."]})}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json file format is as the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json file structure contains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"switches"}),": a list of CEF switches and their corresponding values applied for both macOS and Windows."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"macOS.switches"}),": macOS-specific CEF switches."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"windows.switches"}),": Windows-specific CEF switches."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community."})}),"\n",(0,i.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.h4,{id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A1\u30A4\u30EB",children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A1\u30A4\u30EB"}),"\n",(0,i.jsx)(n.p,{children:"The default 4DCEFParameters.json file contains the following switches:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-of-disabling-default-switch",children:"Example of disabling default Switch"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-for-autoplay",children:"Example for Autoplay"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Specify your own parameters to initialize the embedded web area (blog post)"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},756124:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);