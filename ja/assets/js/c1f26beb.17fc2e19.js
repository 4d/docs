"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38369"],{995841:function(n,e,r){r.r(e),r.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>l,assets:()=>t,toc:()=>h,contentTitle:()=>c});var l=JSON.parse('{"id":"Concepts/pointer","title":"\u30DD\u30A4\u30F3\u30BF\u30FC","description":"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u5909\u6570\u3084\u5F0F\u306F\u3001\u5225\u306E\u5909\u6570 (\u914D\u5217\u3001\u914D\u5217\u8981\u7D20\u3092\u542B\u3080) \u3001\u30C6\u30FC\u30D6\u30EB\u3001\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u53C2\u7167\u3067\u3059\u3002 \u30DD\u30A4\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3001\u5B58\u5728\u3057\u307E\u305B\u3093\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_pointer.md","sourceDirName":"Concepts","slug":"/Concepts/pointer","permalink":"/docs/ja/20-R7/Concepts/pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pointer","title":"\u30DD\u30A4\u30F3\u30BF\u30FC"},"sidebar":"docs","previous":{"title":"\u30D4\u30AF\u30C1\u30E3\u30FC","permalink":"/docs/ja/20-R7/Concepts/picture"},"next":{"title":"\u6587\u5B57\u5217","permalink":"/docs/ja/20-R7/Concepts/string"}}'),d=r("785893"),s=r("250065");let i={id:"pointer",title:"\u30DD\u30A4\u30F3\u30BF\u30FC"},c=void 0,t={},h=[{value:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u57FA\u672C",id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u57FA\u672C",level:2},{value:"\u30DD\u30A4\u30F3\u30BF\u30FC\u6F14\u7B97\u5B50",id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u6F14\u7B97\u5B50",level:2},{value:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u4F8B",id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u4F8B",level:2},{value:"\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u914D\u5217\u8981\u7D20\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u914D\u5217\u8981\u7D20\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u30E1\u30BD\u30C3\u30C9\u306E\u5F15\u6570\u3068\u3057\u3066\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u30E1\u30BD\u30C3\u30C9\u306E\u5F15\u6570\u3068\u3057\u3066\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3},{value:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u5909\u6570\u3084\u5F0F\u306F\u3001\u5225\u306E\u5909\u6570 (\u914D\u5217\u3001\u914D\u5217\u8981\u7D20\u3092\u542B\u3080) \u3001\u30C6\u30FC\u30D6\u30EB\u3001\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u53C2\u7167\u3067\u3059\u3002 \u30DD\u30A4\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3001\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001(\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306B\u304A\u3051\u308B) \u30C7\u30FC\u30BF\u3092\u53C2\u7167\u3059\u308B\u305F\u3081\u306E\u9AD8\u5EA6\u306A\u65B9\u6CD5\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 4D \u30E9\u30F3\u30B2\u30FC\u30B8\u4F7F\u7528\u6642\u306B\u30C6\u30FC\u30D6\u30EB\u30FB\u30D5\u30A3\u30FC\u30EB\u30C9\u30FB\u5909\u6570\u30FB\u914D\u5217\u7B49\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u540D\u524D\u3092\u7528\u3044\u307E\u3059\u3002 \u3067\u3059\u304C\u3001\u540D\u524D\u3092\u4F7F\u7528\u3057\u306A\u3044\u3067\u30C7\u30FC\u30BF\u3092\u53C2\u7167\u3059\u308B\u3001\u307E\u305F\u306F\u30A2\u30AF\u30BB\u30B9\u3057\u305F\u65B9\u304C\u4FBF\u5229\u306A\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002 \u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u3046\u3068\u3053\u308C\u304C\u5B9F\u73FE\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:'\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u80CC\u666F\u306B\u3042\u308B\u6982\u5FF5\u306F\u3001\u65E5\u5E38\u751F\u6D3B\u3067\u3082\u3088\u304F\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002 \u5BFE\u8C61\u7269\u3092\u6B63\u78BA\u306B\u77E5\u3089\u306A\u3044\u307E\u307E\u3001\u305D\u308C\u3092\u793A\u3059\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u53CB\u4EBA\u306B\u5BFE\u3057\u3066 "\u767B\u9332\u756A\u53F7123ABD\u306E\u8ECA\u306B\u4E57\u308D\u3046" \u3068\u8A00\u308F\u305A\u306B "\u541B\u306E\u8ECA\u306B\u4E57\u308D\u3046" \u3068\u8A00\u3046\u5834\u5408\u3067\u3059\u3002 \u3064\u307E\u308A\u3001"\u767B\u9332\u756A\u53F7123ABD\u306E\u8ECA" \u3092 "\u541B\u306E\u8ECA" \u3067\u793A\u3057\u305F\u308F\u3051\u3067\u3059\u3002 \u3053\u306E\u5834\u5408\u3001"\u767B\u9332\u756A\u53F7123ABD\u306E\u8ECA" \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3001"\u541B\u306E\u8ECA" \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53C2\u7167\u3059\u308B\u305F\u3081\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3068\u8003\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:'\u5BFE\u8C61\u7269\u3092\u660E\u793A\u3057\u306A\u3044\u3067\u53C2\u7167\u3067\u304D\u308B\u3068\u3001\u975E\u5E38\u306B\u4FBF\u5229\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u53CB\u4EBA\u304C\u65B0\u3057\u3044\u8ECA\u306B\u8CB7\u3044\u66FF\u3048\u3066\u3082\u3001\u540C\u3058\u304F "\u541B\u306E\u8ECA" \u3068\u8A00\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30DD\u30A4\u30F3\u30BF\u30FC\u3082\u540C\u3058\u3088\u3046\u306B\u6A5F\u80FD\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u540C\u3058\u30DD\u30A4\u30F3\u30BF\u30FC\u304C\u3042\u308B\u6642\u306F\u6570\u5024\u30D5\u30A3\u30FC\u30EB\u30C9 "Age" \u3092\u53C2\u7167\u3057\u3001\u5225\u306E\u6642\u306B\u306F\u6570\u5024\u5909\u6570 "Old Age" \u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u3044\u305A\u308C\u306E\u5834\u5408\u306B\u3082\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u6570\u5024\u30C7\u30FC\u30BF\u3092\u53C2\u7167\u3057\u3066\u304A\u308A\u3001\u305D\u308C\u306F\u8A08\u7B97\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:"\u30C6\u30FC\u30D6\u30EB\u30FB\u30D5\u30A3\u30FC\u30EB\u30C9\u30FB\u5909\u6570\u30FB\u914D\u5217\u30FB\u914D\u5217\u8981\u7D20\u30FB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53C2\u7167\u3059\u308B\u305F\u3081\u306B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u8868\u306B\u3001\u5404\u30BF\u30A4\u30D7\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u53C2\u7167\u6642"}),(0,d.jsx)(e.th,{children:"\u4F7F\u7528\u6642"}),(0,d.jsx)(e.th,{children:"\u4EE3\u5165\u6642"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Table"}),(0,d.jsx)(e.td,{children:"vpTable:=->[Table]"}),(0,d.jsx)(e.td,{children:"DEFAULT TABLE(vpTable->)"}),(0,d.jsx)(e.td,{children:"n/a"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,d.jsx)(e.td,{children:"vpField:=->[Table]Field"}),(0,d.jsx)(e.td,{children:"ALERT(vpField->)"}),(0,d.jsx)(e.td,{children:'vpField->:="John"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5909\u6570"}),(0,d.jsx)(e.td,{children:"vpVar:=->Variable"}),(0,d.jsx)(e.td,{children:"ALERT(vpVar->)"}),(0,d.jsx)(e.td,{children:'vpVar->:="John"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u914D\u5217"}),(0,d.jsx)(e.td,{children:"vpArr:=->Array"}),(0,d.jsx)(e.td,{children:"SORT ARRAY(vpArr->;>)"}),(0,d.jsx)(e.td,{children:"COPY ARRAY (Arr;vpArr->)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u914D\u5217\u8981\u7D20"}),(0,d.jsx)(e.td,{children:"vpElem:=->Array{1}"}),(0,d.jsx)(e.td,{children:"ALERT (vpElem->)"}),(0,d.jsx)(e.td,{children:'vpElem->:="John"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsx)(e.td,{children:"vpObj:=->myObject"}),(0,d.jsx)(e.td,{children:"ALERT (vpObj->myProp)"}),(0,d.jsx)(e.td,{children:'vpObj->myProp:="John"'})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u57FA\u672C",children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u57FA\u672C"}),"\n",(0,d.jsx)(e.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u4F8B\u984C\u3092\u7528\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u901A\u3057\u3066\u5909\u6570\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059\u3002 \u307E\u305A\u3001\u5909\u6570\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'$MyVar:="Hello"\n'})}),"\n",(0,d.jsx)(e.p,{children:'$MyVar \u306F\u3001\u6587\u5B57\u5217 "Hello" \u3092\u542B\u3080\u5909\u6570\u3067\u3059\u3002 $MyVar \u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n"})}),"\n",(0,d.jsx)(e.p,{children:'\u30DD\u30A4\u30F3\u30BF\u30FC\u8A18\u53F7 (->) \u306F\u3001"\uFF65\uFF65\uFF65\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6C42\u3081\u308B" \u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3053\u306E\u8A18\u53F7\u306F\u3001"\u30C0\u30C3\u30B7\u30E5" (-) \u306E\u5F8C\u306B "\u5927\u306A\u308A" (>) \u3092\u4ED8\u3051\u3066\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001$MyVar \u3092\u53C2\u7167\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u4EE3\u5165\u6F14\u7B97\u5B50 (:=) \u3067 $MyPointer \u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:'$MyPointer \u306F\u3001$MyVar \u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u683C\u7D0D\u3059\u308B\u5909\u6570\u3067\u3059\u3002 $MyPointer \u306F\u3001"Hello" \u3068\u3044\u3046 $MyVar \u306E\u5024\u3092\u542B\u307F\u307E\u305B\u3093\u304C\u3001\u305D\u306E\u5024\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u5F0F\u306F $MyVar \u306E\u5024\u3092\u8FD4\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$MyPointer->\n"})}),"\n",(0,d.jsx)(e.p,{children:'\u524D\u8FF0\u306E\u5F0F\u306F\u3001"Hello" \u3068\u3044\u3046\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30DD\u30A4\u30F3\u30BF\u30FC\u8A18\u53F7 (->) \u3092\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u5F8C\u306B\u3064\u3051\u308B\u3068\u3001\u53C2\u7167\u5148\u306E\u5024\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3092\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9 (\u53C2\u7167\u5916\u3057) \u3068\u547C\u3073\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:'\u30DD\u30A4\u30F3\u30BF\u30FC\u8A18\u53F7 (->) \u3092\u5F8C\u306B\u3064\u3051\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u305D\u306E\u53C2\u7167\u5148\u3092\u76F4\u63A5\u4F7F\u3046\u306E\u3068\u540C\u7FA9\u3067\u3042\u308B\u3053\u3068\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u5909\u6570 $MyVar \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3068\u3001$MyPointer-> \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3001\u307E\u3063\u305F\u304F\u540C\u3058\u610F\u5473\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u4EE5\u4E0B\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306F\u30A2\u30E9\u30FC\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u6587\u5B57\u5217 "Hello" \u3092\u8868\u793A\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"ALERT($MyPointer->)\n"})}),"\n",(0,d.jsx)(e.p,{children:'$MyPointer \u3092\u4F7F\u7528\u3057\u3066 $MyVar \u306E\u5024\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u4E0B\u8A18\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306F\u3001\u5909\u6570 $MyVar \u306B\u6587\u5B57\u5217 "Goodbye" \u3092\u4EE3\u5165\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n'})}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E2\u3064\u306E $MyPointer-> \u3092\u4F7F\u7528\u3057\u305F\u4F8B\u306E\u3068\u304A\u308A\u3001$MyVar \u3092\u4F7F\u7528\u3059\u308B\u306E\u3068\u307E\u3063\u305F\u304F\u540C\u3058\u52D5\u4F5C\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E2\u3064\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3082\u3001\u540C\u4E00\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u4E21\u65B9\u3068\u3082\u3001\u5909\u6570 $MyVar \u306E\u73FE\u5728\u306E\u5024\u3092\u30A2\u30E9\u30FC\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"ALERT($MyPointer->)\nALERT($MyVar)\n"})}),"\n",(0,d.jsx)(e.p,{children:'\u4EE5\u4E0B\u306E2\u3064\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3082\u3001\u540C\u4E00\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u4E21\u65B9\u3068\u3082 $MyVar \u306B\u3001\u6587\u5B57\u5217 "Goodbye" \u3092\u4EE3\u5165\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u6F14\u7B97\u5B50",children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u6F14\u7B97\u5B50"}),"\n",(0,d.jsx)(e.p,{children:"\u524D\u63D0:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"  // vPtrA \u3068 vPtrB \u306F\u540C\u3058\u5BFE\u8C61\u3092\u53C2\u7167\u3057\u307E\u3059\n vPtrA:=->anObject\n vPtrB:=->anObject\n  // vPtrC \u306F\u5225\u306E\u5BFE\u8C61\u3092\u53C2\u7167\u3057\u307E\u3059\n vPtrC:=->anotherObject\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,d.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,d.jsx)(e.th,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.th,{children:"\u5F0F"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u7B49\u3057\u3044"}),(0,d.jsx)(e.td,{children:"Pointer = Pointer"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"vPtrA = vPtrB"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"vPtrA = vPtrC"}),(0,d.jsx)(e.td,{children:"false"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u7570\u306A\u308B"}),(0,d.jsx)(e.td,{children:"Pointer # Pointer"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"vPtrA # vPtrC"}),(0,d.jsx)(e.td,{children:"true"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"vPtrA # vPtrB"}),(0,d.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u4F8B",children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u4F8B"}),"\n",(0,d.jsx)(e.h3,{id:"\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u30C6\u30FC\u30D6\u30EB\u306E\u4EE3\u308F\u308A\u306B\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3067\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$TablePtr:=->[anyTable]\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u3042\u308B\u3044\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B ",(0,d.jsx)(e.code,{children:"Table"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C6\u30FC\u30D6\u30EB\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$TablePtr:=Table(20)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53D6\u5F97\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"DEFAULT TABLE($TablePtr->)\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u4EE3\u308F\u308A\u306B\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3067\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$FieldPtr:=->[aTable]ThisField\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u3042\u308B\u3044\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B ",(0,d.jsx)(e.code,{children:"Field"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$FieldPtr:=Field(1;2)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53D6\u5F97\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'OBJECT SET FONT($FieldPtr->;"Arial")\n'})}),"\n",(0,d.jsx)(e.h3,{id:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u307E\u305F\u306F\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u3046\u5834\u5408\u3001\u53C2\u7167\u3055\u308C\u308B\u5909\u6570\u306F\u30DD\u30A4\u30F3\u30BF\u30FC\u304C\u4F7F\u7528\u3055\u308C\u308B\u6642\u70B9\u3067\u3059\u3067\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u3001\u305D\u308C\u3089\u3092\u4F5C\u6210\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u304C\u7D42\u308F\u308B\u3068\u7834\u68C4\u3055\u308C\u3001\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3082\u305D\u308C\u3092\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u7D42\u4E86\u6642\u306B\u524A\u9664\u3055\u308C\u308B\u70B9\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5B58\u5728\u3057\u306A\u3044\u5909\u6570\u3092\u30DD\u30A4\u30F3\u30BF\u30FC\u3067\u547C\u3073\u51FA\u305D\u3046\u3068\u3059\u308B\u3068\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u3067\u306F (\u300C\u5909\u6570\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u300D\u3068\u3044\u3046\u5185\u5BB9\u306E) \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u307E\u3059\u3002\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u306F\u3001\u3055\u3089\u306B\u91CD\u5927\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u4F7F\u7528\u3092\u63A7\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u306E\u307F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D0\u30C3\u30AC\u30FC\u306B\u304A\u3044\u3066\u3001\u5225\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u5BA3\u8A00\u3055\u308C\u305F\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u8868\u793A\u3059\u308B\u3068\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u5F8C\u308D\u306E\u62EC\u5F27\u5185\u306B\u305D\u306E\u30E1\u30BD\u30C3\u30C9\u540D\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u4F8B\u3068\u3057\u3066\u3001Method1 \u3067\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u3044\u305F\u3068\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:' $MyVar:="Hello world"\n Method2(->$MyVar)\n'})}),"\n",(0,d.jsx)(e.p,{children:"Method2 \u5B9F\u884C\u4E2D\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u306F $1 \u3092\u6B21\u306E\u3088\u3046\u306B\u8868\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(e.table,{children:(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"$1"}),(0,d.jsx)(e.th,{children:"->$MyVar (Method1)"})]})})}),"\n",(0,d.jsx)(e.p,{children:"$1 \u306E\u5024\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(e.table,{children:(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"$MyVar (Method1)"}),(0,d.jsx)(e.th,{children:'"Hello world"'})]})})}),"\n",(0,d.jsx)(e.h3,{id:"\u914D\u5217\u8981\u7D20\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u914D\u5217\u8981\u7D20\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u914D\u5217\u8981\u7D20\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u4F8B\u306F\u914D\u5217\u3092\u4F5C\u6210\u3057\u3001\u914D\u5217\u306E\u6700\u521D\u306E\u8981\u7D20\u3092\u6307\u3057\u793A\u3059\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5909\u6570 $ElemPtr \u306B\u5272\u308A\u5F53\u3066\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) // \u914D\u5217\u3092\u4F5C\u6210\n$ElemPtr:=->$anArray{1} // \u914D\u5217\u8981\u7D20\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u3067\u3042\u308B\u914D\u5217\u8981\u7D20\u306B\u5024\u3092\u4EE3\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$ElemPtr->:=8\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u914D\u5217\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u4F8B\u306F\u914D\u5217\u3092\u4F5C\u6210\u3057\u3001\u914D\u5217\u3092\u6307\u3057\u793A\u3059\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5909\u6570 $ArrPtr \u306B\u5272\u308A\u5F53\u3066\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) // \u914D\u5217\u3092\u4F5C\u6210\n$ArrPtr:=->$anArray // \u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F5C\u6210\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u306F\u3042\u304F\u307E\u3067\u3082\u914D\u5217\u3067\u3042\u308A\u3001\u914D\u5217\u8981\u7D20\u3067\u306F\u306A\u3044\u3053\u3068\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"SORT ARRAY($ArrPtr->;>) // \u914D\u5217\u306E\u4E26\u3079\u66FF\u3048\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u914D\u5217\u306E4\u756A\u76EE\u306E\u8981\u7D20\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306E\u306B\u914D\u5217\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u3046\u5834\u5408\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:" ArrPtr->{4}:=84\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u30E1\u30BD\u30C3\u30C9\u306E\u5F15\u6570\u3068\u3057\u3066\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u30E1\u30BD\u30C3\u30C9\u306E\u5F15\u6570\u3068\u3057\u3066\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsxs)(e.p,{children:["\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u5F15\u6570\u3068\u3057\u3066\u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E1\u30BD\u30C3\u30C9\u5185\u3067\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u306E\u5024\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9 ",(0,d.jsx)(e.code,{children:"takeTwo"})," \u306F\u30012\u3064\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5F15\u6570\u3068\u3057\u3066\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002 \u305D\u3057\u3066\u3001\u6700\u521D\u306E\u5F15\u6570\u306E\u53C2\u7167\u5148\u3092\u5927\u6587\u5B57\u306B\u5909\u63DB\u3057\u30012\u3064\u3081\u306E\u5F15\u6570\u306E\u53C2\u7167\u5148\u3092\u5C0F\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002 \u5F53\u8A72\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u30B3\u30FC\u30C9\u3067\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"  //takeTwo \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n  //$1 \u2013 \u6587\u5B57\u5217\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3002 \u3053\u308C\u3092\u5927\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\n  //$2 \u2013 \u6587\u5B57\u5217\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3002 \u3053\u308C\u3092\u5C0F\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3067\u306F\u30E1\u30BD\u30C3\u30C9 ",(0,d.jsx)(e.code,{children:"takeTwo"})," \u3092\u4F7F\u7528\u3057\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5024\u3092\u5927\u6587\u5B57\u306B\u3001\u5909\u6570\u306E\u5024\u3092\u5C0F\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"takeTwo(->[myTable]myField;->$MyVar)\n"})}),"\n",(0,d.jsx)(e.p,{children:'\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9 [myTable]myField \u306E\u5024\u304C "jones" \u3067\u3042\u308C\u3070\u3001"JONES" \u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002 \u4ED6\u65B9\u3001\u5909\u6570 $MyVar \u306E\u5024\u304C "HELLO" \u3067\u3042\u308C\u3070\u3001"hello" \u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:"\u30E1\u30BD\u30C3\u30C9 takeTwo \u3067\u5BA3\u8A00\u3055\u308C\u3066\u3044\u308B\u5F15\u6570\u306E\u578B\u3068\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u304C\u4E00\u81F4\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u306F\u5FC5\u305A\u6587\u5B57\u5217\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC",children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,d.jsx)(e.p,{children:"\u3088\u308A\u8907\u96D1\u306A\u4F7F\u3044\u65B9\u3068\u3057\u3066\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53C2\u7167\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u4F8B\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n'})}),"\n",(0,d.jsx)(e.p,{children:'\u3053\u306E\u4F8B\u306F\u30A2\u30E9\u30FC\u30C8\u30DC\u30C3\u30AF\u30B9\u306B "Goodbye" \u3092\u8868\u793A\u3057\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.p,{children:"\u5404\u884C\u306B\u3064\u3044\u3066\u898B\u3066\u3044\u304D\u307E\u3057\u3087\u3046:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:'$MyVar:="Hello" --\x3e \u3053\u306E\u884C\u306F\u3001\u5909\u6570 $MyVar \u306B\u6587\u5B57\u5217 "Hello" \u3092\u4EE3\u5165\u3057\u3066\u3044\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.li,{children:"$PointerOne:=->$MyVar\n--\x3e \u5909\u6570 $PointerOne \u306B\u3001\u5909\u6570 $MyVar \u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.li,{children:"$PointerTwo:=->$PointerOne\n--\x3e \u65B0\u305F\u306A\u5909\u6570 $PointerTwo \u306B\u3001$MyVar \u3092\u53C2\u7167\u3059\u308B $PointerOne \u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.li,{children:'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> \u306F $PointerOne \u3092\u793A\u3057\u3001$PointerOne \u306F $MyVar\u3092\u793A\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001($PointerTwo->)-> \u306F\u3001$MyVar \u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u7D50\u679C\u3068\u3057\u3066\u3001\u6587\u5B57\u5217 "Goodbye" \u304C $MyVar \u306B\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.li,{children:"ALERT (($PointerTwo->)->)\n--\x3e \u5148\u306E\u8AAC\u660E\u3068\u540C\u69D8\u306B $PointerTwo-> \u306F $PointerOne \u3092\u793A\u3057\u3001$PointerOne \u306F $MyVar\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001($PointerTwo->)-> \u306F\u3001$MyVar \u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u7D50\u679C\u3068\u3057\u3066\u3001\u30A2\u30E9\u30FC\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u306F $MyVar \u306E\u5185\u5BB9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:'\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001$MyVar \u306B "Hello" \u304C\u4EE3\u5165\u3055\u308C\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'($PointerTwo->)->:="Hello"\n'})}),"\n",(0,d.jsx)(e.p,{children:'\u4EE5\u4E0B\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306F\u3001$NewVar \u306B $MyVar \u306E\u5024\u3067\u3042\u308B "Hello" \u304C\u4EE3\u5165\u3055\u308C\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"$NewVar:=($PointerTwo->)->\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u91CD\u8981:"})," \u30C7\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3092\u8907\u6570\u304A\u3053\u306A\u3046\u306B\u306F\u62EC\u5F27\u304C\u5FC5\u8981\u3067\u3059\u3002"]})]})}function o(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return i}});var l=r(667294);let d={},s=l.createContext(d);function i(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);