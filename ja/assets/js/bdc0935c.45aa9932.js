"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57615"],{134435:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>t,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"settings/client-server","title":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","description":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8\u306B\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30E2\u30FC\u30C9\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306F\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u4F7F\u7528\u3055\u308C\u308B\u3068\u304D\u306B\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/settings/client-server.md","sourceDirName":"settings","slug":"/settings/client-server","permalink":"/docs/ja/settings/client-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"client-server","title":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30DA\u30FC\u30B8","permalink":"/docs/ja/settings/backup"},"next":{"title":"Web \u30DA\u30FC\u30B8","permalink":"/docs/ja/settings/web"}}'),r=i("785893"),l=i("250065");let t={id:"client-server",title:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},c=void 0,d={},o=[{value:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u30DA\u30FC\u30B8",id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u30DA\u30FC\u30B8",level:2},{value:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",level:3},{value:"\u8D77\u52D5\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B",id:"\u8D77\u52D5\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B",level:4},{value:"\u516C\u958B\u540D",id:"\u516C\u958B\u540D",level:4},{value:"\u30DD\u30FC\u30C8\u756A\u53F7",id:"\u30DD\u30FC\u30C8\u756A\u53F7",level:4},{value:"4D Server \u3068\u30DD\u30FC\u30C8\u756A\u53F7",id:"4d-server-\u3068\u30DD\u30FC\u30C8\u756A\u53F7",level:4},{value:"\u30C9\u30E1\u30A4\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C",id:"\u30C9\u30E1\u30A4\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C",level:4},{value:"\u30B5\u30FC\u30D3\u30B9\u30D7\u30EA\u30F3\u30B7\u30D1\u30EB\u540D (SPN)",id:"\u30B5\u30FC\u30D3\u30B9\u30D7\u30EA\u30F3\u30B7\u30D1\u30EB\u540D-spn",level:4},{value:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC",id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC",level:4},{value:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",level:4},{value:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1",id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1",level:3},{value:"Execute On Client\u306E\u305F\u3081\u306B\u8D77\u52D5\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u767B\u9332",id:"execute-on-client\u306E\u305F\u3081\u306B\u8D77\u52D5\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u767B\u9332",level:4},{value:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1\u306E\u6697\u53F7\u5316",id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1\u306E\u6697\u53F7\u5316",level:4},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B &quot;Resources&quot; \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u66F4\u65B0",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B-resources-\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u66F4\u65B0",level:4},{value:"IP\u8A2D\u5B9A\u30DA\u30FC\u30B8",id:"ip\u8A2D\u5B9A\u30DA\u30FC\u30B8",level:2},{value:"\u8A31\u53EF-\u62D2\u5426\u8A2D\u5B9A\u8868",id:"\u8A31\u53EF-\u62D2\u5426\u8A2D\u5B9A\u8868",level:3}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8\u306B\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30E2\u30FC\u30C9\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306F\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u4F7F\u7528\u3055\u308C\u308B\u3068\u304D\u306B\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u30DA\u30FC\u30B8",children:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u30DA\u30FC\u30B8"}),"\n",(0,r.jsx)(n.h3,{id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",children:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF"}),"\n",(0,r.jsx)(n.h4,{id:"\u8D77\u52D5\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B",children:"\u8D77\u52D5\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u8D77\u52D5\u3055\u308C\u305F 4D Server \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u516C\u958B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30EA\u30B9\u30C8\u306B\u8868\u793A\u3055\u308C\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3068 (\u30C7\u30D5\u30A9\u30EB\u30C8)\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u516C\u958B\u3055\u308C\u3001\u516C\u958B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E00\u89A7\u306B\u8868\u793A\u3055\u308C\u307E\u3059 (\u30EA\u30E2\u30FC\u30C84D \u306E ",(0,r.jsx)(n.strong,{children:"\u5229\u7528\u53EF\u80FD"}),"\u30BF\u30D6)\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u516C\u958B\u3055\u308C\u305A\u3001\u516C\u958B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E00\u89A7\u306B\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002 \u63A5\u7D9A\u3059\u308B\u306B\u306F\u3001\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E ",(0,r.jsx)(n.strong,{children:"\u30AB\u30B9\u30BF\u30E0"})," \u30BF\u30D6\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u624B\u5165\u529B\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u3053\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u305F\u5834\u5408\u3001\u5909\u66F4\u3092\u53CD\u6620\u3059\u308B\u305F\u3081\u30B5\u30FC\u30D0\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u516C\u958B\u540D",children:"\u516C\u958B\u540D"}),"\n",(0,r.jsxs)(n.p,{children:["This option lets you change the publication name of a 4D Server database, ",(0,r.jsx)(n.em,{children:"i.e."}),", the name displayed on the dynamic ",(0,r.jsx)(n.strong,{children:"Available"})," tab of the connection dialog box (see the ",(0,r.jsx)(n.a,{href:"/docs/ja/Desktop/clientServer#opening-a-remote-project",children:"Opening a remote project"})," paragraph). \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 4D Server \u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u3092\u597D\u304D\u306A\u540D\u524D\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F\u30AB\u30B9\u30BF\u30E0\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002 \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u7D4C\u7531\u305B\u305A\u306B\u30B5\u30FC\u30D0\u30FC\u306B\u76F4\u63A5\u63A5\u7D9A\u3057\u307E\u3059\u3002 \u3057\u304B\u3057\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u3068\u3001\u3053\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u516C\u958B\u540D\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30DD\u30FC\u30C8\u756A\u53F7",children:"\u30DD\u30FC\u30C8\u756A\u53F7"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u30014D Server \u304C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B TCP\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u60C5\u5831\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u53CA\u3073\u5404\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 4D Server \u3068\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E 4D \u304C\u4F7F\u7528\u3059\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E TCP\u30DD\u30FC\u30C8\u756A\u53F7\u306F 19813 \u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"TCP\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30011\u53F0\u306E\u30DE\u30B7\u30F3\u4E0A\u3067\u8907\u6570\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u540C\u6642\u306B\u4F7F\u7528\u3057\u305F\u3044\u5834\u5408\u306B\u3053\u306E\u5024\u306E\u5909\u66F4\u304C\u5FC5\u8981\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3054\u3068\u306B\u7570\u306A\u308B\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u5272\u308A\u5F53\u3066\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\n4D Server \u307E\u305F\u306F 4D \u304B\u3089\u3053\u306E\u5024\u3092\u5909\u66F4\u3059\u308B\u3068\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u63A5\u7D9A\u3057\u3066\u3044\u308B\u3059\u3079\u3066\u306E 4D\u30DE\u30B7\u30F3\u306B\u5909\u66F4\u304C\u901A\u77E5\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u7D9A\u3057\u3066\u3044\u306A\u3044\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u66F4\u65B0\u3059\u308B\u306B\u306F\u3001\u6B21\u56DE\u306E\u63A5\u7D9A\u6642\u306B\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E ",(0,r.jsx)(n.strong,{children:"\u30AB\u30B9\u30BF\u30E0"})," \u30DA\u30FC\u30B8\u306B\u3066\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306E IP\u30A2\u30C9\u30EC\u30B9\u306B\u7D9A\u3051\u3066\u30B3\u30ED\u30F3\u3001\u305D\u3057\u3066\u65B0\u3057\u3044\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u65B0\u3057\u3044\u30DD\u30FC\u30C8\u756A\u53F7\u304C 19888 \u3042\u308B\u3068\u304D:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(902932).Z+"",width:"466",height:"488"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u540C\u3058\u30DD\u30FC\u30C8\u756A\u53F7\u3067\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3060\u3051\u304C\u3001\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u5229\u7528\u53EF\u80FD\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"4d-server-\u3068\u30DD\u30FC\u30C8\u756A\u53F7",children:"4D Server \u3068\u30DD\u30FC\u30C8\u756A\u53F7"}),"\n",(0,r.jsx)(n.p,{children:"4D Server \u306F 3\u3064\u306E TCP\u30DD\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u5185\u90E8\u30B5\u30FC\u30D0\u30FC\u3068\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u901A\u4FE1\u3092\u304A\u3053\u306A\u3044\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SQL\u30B5\u30FC\u30D0\u30FC"}),': \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 19812 (\u8A2D\u5B9A\u306E "SQL" \u30DA\u30FC\u30B8\u3067\u5909\u66F4\u53EF)\u3002']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC"}),': \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 19813 (\u8A2D\u5B9A\u306E "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC" \u30DA\u30FC\u30B8\u3067\u5909\u66F4\u53EF)\u3002']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB4D\u30B5\u30FC\u30D0\u30FC"})," (\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B5\u30FC\u30D0\u30FC): \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 19814\u3002 \u3053\u306E\u30DD\u30FC\u30C8\u756A\u53F7\u306F\u76F4\u63A5\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u304C\u3001\u5E38\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u30DD\u30FC\u30C8\u756A\u53F7+1 \u3067\u3059\u3002\\ 4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C 4D Server \u306B\u63A5\u7D9A\u3059\u308B\u3068\u304D\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u30DD\u30FC\u30C8\u756A\u53F7 (19813 \u307E\u305F\u306F\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E IP\u30A2\u30C9\u30EC\u30B9\u6B04\u3067\u30B3\u30ED\u30F3\u306E\u5F8C\u308D\u306B\u6307\u5B9A\u3055\u308C\u305F\u756A\u53F7) \u3092\u4F7F\u7528\u3057\u3066\u63A5\u7D9A\u3057\u307E\u3059\u3002 \u305D\u306E\u5F8C\u306E\u3001\u305D\u308C\u305E\u308C\u5BFE\u5FDC\u3059\u308B\u30DD\u30FC\u30C8\u3092\u4ECB\u3057\u305F\u4ED6\u306E\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u63A5\u7D9A\u306F\u81EA\u52D5\u3067\u3059\u3002\u518D\u5EA6\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\\ \u30EB\u30FC\u30BF\u30FC\u3084\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u8D8A\u3057\u306B\u63A5\u7D9A\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u3053\u306E 3\u3064\u306E\u30DD\u30FC\u30C8\u3092\u660E\u793A\u7684\u306B\u958B\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/Debugging/debugging-remote",children:(0,r.jsx)(n.strong,{children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30AC\u30FC"})}),": \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 19815\u3002 \u3053\u306E\u30DD\u30FC\u30C8\u756A\u53F7\u306F\u76F4\u63A5\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u304C\u3001\u5E38\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u30DD\u30FC\u30C8\u756A\u53F7+2 \u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u30C9\u30E1\u30A4\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C",children:"\u30C9\u30E1\u30A4\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F Windows\u4E0A\u306E 4D Server \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066 SSO (",(0,r.jsx)(n.em,{children:"Single Sign On"}),") \u6A5F\u80FD\u306E\u5B9F\u88C5\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u30014D \u306F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3067 Windows \u30C9\u30E1\u30A4\u30F3\u30B5\u30FC\u30D0\u30FC\u306E Active Directory \u306B\u63A5\u7D9A\u3057\u3001\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u8A8D\u8A3C\u30C8\u30FC\u30AF\u30F3\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002 This option is described in the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/Single-Sign-On-SSO-on-Windows.300-6330537.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"\u30B5\u30FC\u30D3\u30B9\u30D7\u30EA\u30F3\u30B7\u30D1\u30EB\u540D-spn",children:"\u30B5\u30FC\u30D3\u30B9\u30D7\u30EA\u30F3\u30B7\u30D1\u30EB\u540D (SPN)"}),"\n",(0,r.jsxs)(n.p,{children:["Single Sign On (SSO) \u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408 (\u4E0A\u8FF0\u53C2\u7167)\u3001\u8A8D\u8A3C\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u30B1\u30EB\u30D9\u30ED\u30B9\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 This option is described in the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/Single-Sign-On-SSO-on-Windows.300-6330537.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC",children:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306F\u3001\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u3066 3\u3064\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u304B\u3089\u9078\u629E\u3067\u304D\u307E\u3059: ",(0,r.jsx)(n.strong,{children:"Legacy"}),"\u3001",(0,r.jsx)(n.strong,{children:"ServerNet"})," \u3001",(0,r.jsx)(n.strong,{children:"QUIC"})," (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E2\u30FC\u30C9\u306E\u307F)\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u306F\u30014D Server \u3068\u30EA\u30E2\u30FC\u30C8\u306E 4D\u30DE\u30B7\u30F3 (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8) \u9593\u306E\u901A\u4FE1\u3092\u7BA1\u7406\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u65E7\u5F0F"}),": v15\u4EE5\u524D\u306B\u4F5C\u6210\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3068\u306E\u4E92\u63DB\u6027\u3092\u78BA\u4FDD\u3059\u308B\u305F\u3081\u3001\u3053\u306E\u65E7\u5F0F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u306F\u5F15\u304D\u7D9A\u304D\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 This network layer can also be enabled by programming using the ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ServerNet"})," (\u30C7\u30D5\u30A9\u30EB\u30C8): \u30B5\u30FC\u30D0\u30FC\u306E ServerNet \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u3092\u6709\u52B9\u306B\u3057\u307E\u3059 (4D 15 \u4EE5\u964D\u3067\u5229\u7528\u53EF\u80FD)\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QUIC"})," (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E2\u30FC\u30C9\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD): \u30B5\u30FC\u30D0\u30FC\u4E0A\u3067 QUIC\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Selecting this option overrides the Use legacy network layer option in case it has been set using the ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:["You can know if a 4D application is running with a QUIC network layer using the ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/application-info",children:"Application info"})," command."]}),"\n",(0,r.jsx)(n.li,{children:"QUIC \u306F UDP\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u8A2D\u5B9A\u3067 UDP \u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u3068 DB4D\u30B5\u30FC\u30D0\u30FC\u306E\u4E21\u65B9\u3067\u3001QUIC \u306F\u81EA\u52D5\u7684\u306B\u30DD\u30FC\u30C819813 \u306B\u63A5\u7D9A\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["QUIC\u30EC\u30A4\u30E4\u30FC\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u3068:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30E1\u30CB\u30E5\u30FC\u306E\u96A3\u306B\u3001\u30D9\u30FC\u30BF\u7248\u3067\u3042\u308B\u65E8\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u8B66\u544A\u30A2\u30A4\u30B3\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#client-server-connections-timeout",children:"Client-server Connections Timeout settings"})," are hidden"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"#encrypt-client-server-communications",children:"Encrypt Client-Server communication checkbox"})," is hidden (QUIC communications are always in TLS, whatever your secured mode is.)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4E92\u63DB\u6027"}),": QUIC\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u306B\u5207\u308A\u66FF\u3048\u308B\u306B\u306F\u3001\u307E\u305A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092 4D v20\u4EE5\u4E0A\u3067\u904B\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3057\u305F\u5834\u5408\u3001\u5909\u66F4\u3092\u53CD\u6620\u3059\u308B\u306B\u306F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u63A5\u7D9A\u3057\u3066\u3044\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3082\u3001\u65B0\u3057\u3044\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u3067\u63A5\u7D9A\u3059\u308B\u305F\u3081\u518D\u8D77\u52D5\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u30FC\u3067\u30014D Server \u3068\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u9593\u306E (\u4E00\u5B9A\u6642\u9593\u6D3B\u52D5\u304C\u306A\u3044\u3068\u304D\u306B\u63A5\u7D9A\u3092\u9589\u3058\u308B) \u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u7121\u5236\u9650\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u8A2D\u5B9A\u3057\u306A\u3044\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u308B\u3068\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306F\u304A\u3053\u306A\u308F\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u304C\u9078\u629E\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u9593\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u4FE1\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30B5\u30FC\u30D0\u30FC\u306F\u305D\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u306E\u63A5\u7D9A\u3092\u9589\u3058\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1",children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1"}),"\n",(0,r.jsx)(n.h4,{id:"execute-on-client\u306E\u305F\u3081\u306B\u8D77\u52D5\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u767B\u9332",children:"Execute On Client\u306E\u305F\u3081\u306B\u8D77\u52D5\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u767B\u9332"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u63A5\u7D9A\u3059\u308B\u3059\u3079\u3066\u306E 4D\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u30E1\u30BD\u30C3\u30C9\u3092\u30EA\u30E2\u30FC\u30C8\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 This mechanism is detailed in the section ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/Stored-procedures-on-client-machines.300-6330550.en.html",children:"Stored procedures on client machines"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1\u306E\u6697\u53F7\u5316",children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8-\u30B5\u30FC\u30D0\u30FC\u901A\u4FE1\u306E\u6697\u53F7\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u3068 4D\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u9593\u901A\u4FE1\u306E\u4FDD\u8B77\u30E2\u30FC\u30C9\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002 This option is detailed in the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/Encrypting-ClientServer-Connections.300-6330533.en.html",children:"Encrypting Client/Server Connections"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B-resources-\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u66F4\u65B0",children:'\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B "Resources" \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u66F4\u65B0'}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u66F4\u65B0\u3055\u308C\u305F\u5834\u5408\u306B\u3064\u3044\u3066\u3001\u63A5\u7D9A\u4E2D\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306B\u304A\u3051\u308B\u540C\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u30ED\u30FC\u30AB\u30EB\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u66F4\u65B0\u30E2\u30FC\u30C9\u3092\u5305\u62EC\u7684\u306B\u6307\u5B9A\u3057\u307E\u3059 (",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u304B\u308C\u308B\u305F\u3073\u306B\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u81EA\u52D5\u7684\u306B\u540C\u671F\u3055\u308C\u307E\u3059)\u3002 3\u3064\u306E\u9078\u629E\u80A2\u304C\u3042\u308A\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u3057\u306A\u3044"}),": \u30ED\u30FC\u30AB\u30EB\u306E ",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u66F4\u65B0\u3055\u308C\u307E\u305B\u3093\u3002 \u30B5\u30FC\u30D0\u30FC\u304B\u3089\u9001\u4FE1\u3055\u308C\u308B\u901A\u77E5\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002 The local ",(0,r.jsx)(n.strong,{children:"Resources"})," folder may be updated manually using the ",(0,r.jsx)(n.strong,{children:"Update Local Resources"})," action menu command (see ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html",children:"Using the Resources explorer"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5E38\u306B"}),": \u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u901A\u77E5\u304C\u9001\u4FE1\u3055\u308C\u308B\u3068\u3001\u30ED\u30FC\u30AB\u30EB\u306E ",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u81EA\u52D5\u3067\u540C\u671F\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u305D\u306E\u90FD\u5EA6\u6307\u5B9A"}),": \u30B5\u30FC\u30D0\u30FC\u304B\u3089\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B\u3068\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u306F\u30ED\u30FC\u30AB\u30EB\u306E ",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540C\u671F\u3092\u53D7\u3051\u5165\u308C\u3001\u3042\u308B\u3044\u306F\u62D2\u5426\u3067\u304D\u307E\u3059\u3002\\ ",(0,r.jsx)(n.strong,{children:"Resources"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u4F7F\u7528\u3055\u308C\u308B\u30AB\u30B9\u30BF\u30E0\u30D5\u30A1\u30A4\u30EB\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059 (\u7FFB\u8A33\u30D5\u30A1\u30A4\u30EB\u3084\u30D4\u30AF\u30C1\u30E3\u30FC\u306A\u3069)\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u5185\u5BB9\u304C\u66F4\u65B0\u3055\u308C\u305F\u3068\u304D\u306B\u306F\u3001\u81EA\u52D5\u53C8\u306F\u624B\u52D5\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u5404\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u901A\u77E5\u3067\u304D\u307E\u3059\u3002 For more information, please refer to the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/Managing-the-Resources-folder.300-6330534.en.html",children:"Managing the Resources folder"})," section."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ip\u8A2D\u5B9A\u30DA\u30FC\u30B8",children:"IP\u8A2D\u5B9A\u30DA\u30FC\u30B8"}),"\n",(0,r.jsx)(n.h3,{id:"\u8A31\u53EF-\u62D2\u5426\u8A2D\u5B9A\u8868",children:"\u8A31\u53EF-\u62D2\u5426\u8A2D\u5B9A\u8868"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u8868\u3092\u4F7F\u7528\u3057\u3066\u30014D\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E IP\u30A2\u30C9\u30EC\u30B9\u306B\u57FA\u3065\u304D\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30EB\u30FC\u30EB\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u305F\u3068\u3048\u3070\u6226\u7565\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306A\u3069\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u9AD8\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Web\u63A5\u7D9A\u306F\u3001\u3053\u306E\u8A2D\u5B9A\u8868\u3067\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8A2D\u5B9A\u8868\u306E\u52D5\u4F5C\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"\u8A31\u53EF-\u62D2\u5426" \u5217\u3067\u306F\u3001\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u9069\u7528\u3059\u308B\u30EB\u30FC\u30EB\u3092\u9078\u629E\u3057\u307E\u3059 (\u8A31\u53EF\u307E\u305F\u306F\u62D2\u5426)\u3002 \u30EB\u30FC\u30EB\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u8FFD\u52A0\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3059\u308B\u3068\u3001\u65B0\u3057\u3044\u884C\u304C\u8868\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 ',(0,r.jsx)(n.strong,{children:"\u524A\u9664"})," \u30DC\u30BF\u30F3\u3067\u9078\u629E\u3057\u305F\u884C\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:'"IP\u30A2\u30C9\u30EC\u30B9" \u5217\u3067\u3001\u30EB\u30FC\u30EB\u306B\u95A2\u9023\u3059\u308B IP\u30A2\u30C9\u30EC\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A2\u30C9\u30EC\u30B9\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001\u9078\u629E\u3057\u305F\u884C\u306E\u30BB\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u4EE5\u4E0B\u306E\u5F62\u5F0F\u3067\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u307E\u3059: 123.45.67.89 (IPv4) \u307E\u305F\u306F 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6)\u3002 * (\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF) \u6587\u5B57\u3092\u30A2\u30C9\u30EC\u30B9\u306E\u672B\u5C3E\u306B\u4F7F\u7528\u3057\u3066\u3001\u7BC4\u56F2\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001192.168.* \u306F 192.168 \u3067\u59CB\u307E\u308B\u3059\u3079\u3066\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u793A\u3057\u307E\u3059\u3002'}),"\n",(0,r.jsx)(n.li,{children:"\u30EB\u30FC\u30EB\u306E\u9069\u7528\u306F\u3001\u8868\u4E2D\u306E\u8868\u793A\u9806\u306B\u57FA\u3065\u304D\u307E\u3059\u3002 2\u3064\u306E\u30EB\u30FC\u30EB\u304C\u77DB\u76FE\u3059\u308B\u8A2D\u5B9A\u306E\u5834\u5408\u3001\u3088\u308A\u4E0A\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u30EB\u30FC\u30EB\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u3002 \u884C\u306E\u9806\u756A\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001\u5217\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30BD\u30FC\u30C8\u3092\u304A\u3053\u306A\u3063\u305F\u308A\u3001 \u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3067\u79FB\u52D5\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u305F\u3081\u3001\u30EB\u30FC\u30EB\u306B\u3088\u308A\u660E\u793A\u7684\u306B\u8A31\u53EF\u3055\u308C\u305F\u30A2\u30C9\u30EC\u30B9\u306E\u307F\u304C\u63A5\u7D9A\u3092\u8A31\u53EF\u3055\u308C\u307E\u3059\u3002 \u8A00\u3044\u63DB\u3048\u308C\u3070\u3001\u8868\u306B\u62D2\u5426\u30EB\u30FC\u30EB\u3057\u304B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u8A31\u53EF\u30EB\u30FC\u30EB\u306B\u9069\u5408\u3059\u308B\u30A2\u30C9\u30EC\u30B9\u304C\u306A\u3044\u305F\u3081\u3001\u3059\u3079\u3066\u306E\u30A2\u30C9\u30EC\u30B9\u304B\u3089\u306E\u63A5\u7D9A\u304C\u62D2\u5426\u3055\u308C\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30A2\u30C9\u30EC\u30B9\u304B\u3089\u306E\u63A5\u7D9A\u306E\u307F\u3092\u62D2\u5426\u3057\u305F\u3044\u5834\u5408 (\u305D\u3057\u3066\u4ED6\u3092\u8A31\u53EF\u3057\u305F\u3044\u5834\u5408)\u3001\u8A31\u53EF * \u30EB\u30FC\u30EB\u3092\u8868\u306E\u6700\u5F8C\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u4F8B:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u62D2\u5426 192.168.* (192.168 \u3067\u59CB\u307E\u308B\u30A2\u30C9\u30EC\u30B9\u3092\u62D2\u5426)"}),"\n",(0,r.jsx)(n.li,{children:"\u8A31\u53EF * (\u4ED6\u306E\u30A2\u30C9\u30EC\u30B9\u306F\u3059\u3079\u3066\u8A31\u53EF)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30014D Server \u306B\u30A2\u30AF\u30BB\u30B9\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u884C\u306B\u306F * (\u3059\u3079\u3066\u306E\u30A2\u30C9\u30EC\u30B9) \u306B\u5BFE\u3059\u308B\u8A31\u53EF\u30EB\u30FC\u30EB\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},902932:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var s=i(667294);let r={},l=s.createContext(r);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);