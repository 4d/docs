"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13891"],{672605:function(n,e,d){d.r(e),d.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>s});var r=JSON.parse('{"id":"Events/onAfterEdit","title":"On After Edit","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                                                                                                                                                                                                                                                                                          | \u5B9A\u7FA9                          |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Events/onAfterEdit.md","sourceDirName":"Events","slug":"/Events/onAfterEdit","permalink":"/docs/ja/Events/onAfterEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onAfterEdit","title":"On After Edit"},"sidebar":"docs","previous":{"title":"On Activate","permalink":"/docs/ja/Events/onActivate"},"next":{"title":"On After Keystroke","permalink":"/docs/ja/Events/onAfterKeystroke"}}'),i=d("785893"),t=d("250065");let l={id:"onAfterEdit",title:"On After Edit"},s=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4E00\u822C\u7684\u306A\u30B1\u30FC\u30B9",id:"\u4E00\u822C\u7684\u306A\u30B1\u30FC\u30B9",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4}];function j(n){let e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30B3\u30FC\u30C9"}),(0,i.jsx)(e.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,i.jsx)(e.th,{children:"\u5B9A\u7FA9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"45"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/viewProAreaOverview",children:"4D View Pro \u30A8\u30EA\u30A2"})," - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/writeProAreaOverview",children:"4D Write Pro \u30A8\u30EA\u30A2"})," - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/comboBoxOverview",children:"\u30B3\u30F3\u30DC\u30DC\u30C3\u30AF\u30B9"})," - \u30D5\u30A9\u30FC\u30E0 - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/inputOverview",children:"\u5165\u529B"})," - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/listOverview",children:"\u968E\u5C64\u30EA\u30B9\u30C8"})," - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/listboxOverview",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"})," - ",(0,i.jsx)(e.a,{href:"/docs/ja/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%88%97",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217"})]}),(0,i.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30AB\u30B9\u306E\u3042\u308B\u5165\u529B\u53EF\u80FD\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5185\u5BB9\u304C\u66F4\u65B0\u3055\u308C\u305F"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsx)(e.h3,{id:"\u4E00\u822C\u7684\u306A\u30B1\u30FC\u30B9",children:"\u4E00\u822C\u7684\u306A\u30B1\u30FC\u30B9"}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u5165\u529B\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u5165\u529B\u3092\u6700\u3082\u4F4E\u30EC\u30D9\u30EB\u3067\u30D5\u30A3\u30EB\u30BF\u30FC\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u5909\u66F4\u304C\u304A\u3053\u306A\u308F\u308C\u305F\u65B9\u6CD5\u306B\u95A2\u4FC2\u306A\u304F\u3001\u5165\u529B\u53EF\u80FD\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5185\u5BB9\u304C\u5909\u66F4\u3055\u308C\u308B\u305F\u3073\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(e.em,{children:"\u3064\u307E\u308A"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30DA\u30FC\u30B9\u30C8\u3084\u30AB\u30C3\u30C8\u3001\u524A\u9664\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\u306A\u3069\u306E\u6A19\u6E96\u306E\u7DE8\u96C6\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\n",(0,i.jsx)(e.li,{children:"\u5024\u306E\u30C9\u30ED\u30C3\u30D7 (\u30DA\u30FC\u30B9\u30C8\u3068\u540C\u69D8\u306E\u30A2\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,i.jsxs)(e.li,{children:["\u30E6\u30FC\u30B6\u30FC\u304C\u304A\u3053\u306A\u3063\u305F\u30AD\u30FC\u30DC\u30FC\u30C9\u304B\u3089\u306E\u5165\u529B\u3002\u3053\u306E\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"On After Edit"})," \u30A4\u30D9\u30F3\u30C8\u306F ",(0,i.jsx)(e.a,{href:"/docs/ja/Events/onBeforeKeystroke",children:(0,i.jsx)(e.code,{children:"On Before Keystroke"})})," \u3068 ",(0,i.jsx)(e.a,{href:"/docs/ja/Events/onAfterKeystroke",children:(0,i.jsx)(e.code,{children:"On After Keystroke"})})," \u30A4\u30D9\u30F3\u30C8\u306E\u5F8C\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30E6\u30FC\u30B6\u30FC\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8\u3059\u308B\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308B\u5909\u66F4 (\u4F8B: ",(0,i.jsx)(e.code,{children:"POST KEY"}),")\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"On After Edit"})," \u30A4\u30D9\u30F3\u30C8\u5185\u306B\u304A\u3044\u3066\u3001\u5165\u529B\u30C6\u30AD\u30B9\u30C8\u306F ",(0,i.jsx)(e.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page655.html",children:(0,i.jsx)(e.code,{children:"Get edited text"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"FORM Event"})," \u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"code"}),(0,i.jsx)(e.td,{children:"longint"}),(0,i.jsx)(e.td,{children:"On After Edit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"description"}),(0,i.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,i.jsx)(e.td,{children:'"On After Edit"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"objectName"}),(0,i.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,i.jsx)(e.td,{children:"4D View Pro \u30A8\u30EA\u30A2\u540D"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sheetName"}),(0,i.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,i.jsx)(e.td,{children:"\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u30B7\u30FC\u30C8\u540D"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"action"}),(0,i.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,i.jsx)(e.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"action"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u306B\u5FDC\u3058\u3066\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/Events/overview#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u306B\u306F\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"action--editchange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"range"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u30BB\u30EB\u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"editingText"}),(0,i.jsx)(e.td,{children:"variant"}),(0,i.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u306E\u5024"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action--valuechanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"range"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u30BB\u30EB\u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"oldValue"}),(0,i.jsx)(e.td,{children:"variant"}),(0,i.jsx)(e.td,{children:"\u5909\u66F4\u524D\u306E\u30BB\u30EB\u306E\u5024"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"newValue"}),(0,i.jsx)(e.td,{children:"variant"}),(0,i.jsx)(e.td,{children:"\u5909\u66F4\u5F8C\u306E\u30BB\u30EB\u306E\u5024"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action--dragdropblock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"fromRange"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u30BD\u30FC\u30B9\u30BB\u30EB\u30EC\u30F3\u30B8 (\u30C9\u30E9\u30C3\u30B0\u3055\u308C\u308B\u7BC4\u56F2) \u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"toRange"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u79FB\u884C\u5148\u30BB\u30EB\u30EC\u30F3\u30B8 (\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u308B\u5834\u6240) \u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"copy"}),(0,i.jsx)(e.td,{children:"\u30D6\u30FC\u30EB"}),(0,i.jsx)(e.td,{children:"\u30BD\u30FC\u30B9\u30EC\u30F3\u30B8\u304C\u30B3\u30D4\u30FC\u3055\u308C\u305F\u304B\u3069\u3046\u304B\u3092\u8868\u3057\u307E\u3059"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"insert"}),(0,i.jsx)(e.td,{children:"\u30D6\u30FC\u30EB"}),(0,i.jsx)(e.td,{children:"\u30BD\u30FC\u30B9\u30EC\u30F3\u30B8\u304C\u633F\u5165\u3055\u308C\u305F\u304B\u3069\u3046\u304B\u3092\u8868\u3057\u307E\u3059"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action--dragfillblock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"fillRange"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u81EA\u52D5\u5165\u529B\u306E\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"autoFillType"}),(0,i.jsx)(e.td,{children:"longint"}),(0,i.jsxs)(e.td,{children:["\u81EA\u52D5\u5165\u529B\u306E\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u5024",(0,i.jsx)(e.li,{children:"0: \u5168\u30C7\u30FC\u30BF (\u5024\u3001\u66F8\u5F0F\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9) \u304C\u30BB\u30EB\u306B\u5165\u529B\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"1: \u81EA\u52D5\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30C7\u30FC\u30BF\u304C\u30BB\u30EB\u306B\u5165\u529B\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"2: \u66F8\u5F0F\u306E\u307F\u304C\u30BB\u30EB\u306B\u5165\u529B\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"3: \u5024\u306E\u307F\u304C\u30BB\u30EB\u306B\u5165\u529B\u3055\u308C\u3001\u66F8\u5F0F\u306F\u5165\u529B\u3055\u308C\u3066\u3044\u306A\u3044"}),(0,i.jsx)(e.li,{children:"4: \u30BB\u30EB\u304B\u3089\u5024\u304C\u9664\u53BB\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"5: \u30BB\u30EB\u306F\u81EA\u52D5\u7684\u306B\u5165\u529B\u3055\u308C\u305F"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"fillDirection"}),(0,i.jsx)(e.td,{children:"longint"}),(0,i.jsxs)(e.td,{children:["\u30D5\u30A3\u30EB\u306E\u65B9\u5411",(0,i.jsx)(e.li,{children:"0: \u5DE6\u5074\u306E\u30BB\u30EB\u304C\u30D5\u30A3\u30EB\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"1: \u53F3\u5074\u306E\u30BB\u30EB\u304C\u30D5\u30A3\u30EB\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"2: \u4E0A\u5074\u306E\u30BB\u30EB\u304C\u30D5\u30A3\u30EB\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"3: \u4E0B\u5074\u306E\u30BB\u30EB\u304C\u30D5\u30A3\u30EB\u3055\u308C\u305F"})]})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action--formulachanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"range"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u30BB\u30EB\u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"formula"}),(0,i.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,i.jsx)(e.td,{children:"\u5165\u529B\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"action--clipboardpasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"range"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"\u30BB\u30EB\u306E\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"pasteOption"}),(0,i.jsx)(e.td,{children:"longint"}),(0,i.jsxs)(e.td,{children:["\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u304B\u3089\u4F55\u3092\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F\u304B\u3092\u8868\u3057\u307E\u3059:",(0,i.jsx)(e.li,{children:"0: \u3059\u3079\u3066 (\u5024\u3001\u66F8\u5F0F\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9) \u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"1: \u5024\u306E\u307F\u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"2: \u66F8\u5F0F\u306E\u307F\u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"3: \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u307F\u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F"}),(0,i.jsx)(e.li,{children:"4: \u5024\u3068\u66F8\u5F0F\u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F (\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u306A\u304B\u3063\u305F)"}),(0,i.jsx)(e.li,{children:"5: \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3068\u66F8\u5F0F\u306E\u307F\u304C\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F (\u5024\u306F\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u306A\u304B\u3063\u305F)"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"pasteData"}),(0,i.jsx)(e.td,{children:"object"}),(0,i.jsxs)(e.td,{children:["\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u304B\u3089\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u308B\u30C7\u30FC\u30BF",(0,i.jsx)(e.li,{children:'"text" (\u30C6\u30AD\u30B9\u30C8): \u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u304B\u3089\u306E\u30C6\u30AD\u30B9\u30C8'}),(0,i.jsx)(e.li,{children:'"html" (\u30C6\u30AD\u30B9\u30C8): \u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u304B\u3089\u306E HTML'})]})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306F ",(0,i.jsx)(e.code,{children:"On After Edit"})," \u30A4\u30D9\u30F3\u30C8\u3092\u7BA1\u7406\u3059\u308B\u4F8B\u3067\u3059:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("\u8B66\u544A: \u5024\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\\  \n       \u5143\u306E\u5024: "+String(FORM Event.oldValue)+\\  \n       " \u5909\u66F4\u5F8C\u306E\u5024: "+String(FORM Event.newValue)+"!")\n    End if\n End if\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0A\u8A18\u306E\u30B3\u30FC\u30C9\u306B\u3088\u308A\u751F\u6210\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3092\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return s},a:function(){return l}});var r=d(667294);let i={},t=r.createContext(i);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);