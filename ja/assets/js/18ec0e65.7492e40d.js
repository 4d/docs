"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52150],{684207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var d=s(474848),t=s(28453);const i={id:"xml-set-options",title:"XML SET OPTIONS",slug:"/commands/xml-set-options",displayed_sidebar:"docs"},r=void 0,l={id:"commands-legacy/xml-set-options",title:"XML SET OPTIONS",description:"XML SET OPTIONS ( elementRef | document  ; selector ; value {; selector2 ; value2 ; ... ; selectorN ; valueN} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/xml-set-options.md",sourceDirName:"commands-legacy",slug:"/commands/xml-set-options",permalink:"/docs/ja/commands/xml-set-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-set-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"xml-set-options",title:"XML SET OPTIONS",slug:"/commands/xml-set-options",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"XML GET OPTIONS",permalink:"/docs/ja/commands/xml-get-options"},next:{title:"Classes",permalink:"/docs/ja/category/class-API-reference"}},c={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function x(e){const n={a:"a",br:"br",code:"code",date:"date",duration:"duration",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"XML SET OPTIONS"})," ( elementRef | document  ; ",(0,d.jsx)(n.em,{children:"selector"})," ; ",(0,d.jsx)(n.em,{children:"value"})," {; ",(0,d.jsx)(n.em,{children:"selector2"})," ; ",(0,d.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"selectorN"})," ; ",(0,d.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5f15\u6570"}),(0,d.jsx)(n.th,{children:"\u578b"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef | document"}),(0,d.jsx)(n.td,{children:"\u30c6\u30ad\u30b9\u30c8"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"XML\u30eb\u30fc\u30c8\u8981\u7d20\u53c2\u7167\u3001\u307e\u305f\u306f\u958b\u304b\u308c\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u53c2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selector"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u8a2d\u5b9a\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"value"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"XML SET OPTIONS"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001 \u7b2c\u4e00\u5f15\u6570\u306b\u6e21\u3055\u308c\u305fXML\u69cb\u9020\u306eXML\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:['\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f"\u30c4\u30ea\u30fc"\u30bf\u30a4\u30d7 (DOM) \u3084"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8" \u30bf\u30a4\u30d7 (SAX) \u306eXML\u69cb\u9020\u306b\u9069\u7528\u3067\u304d\u307e\u3059\u3002\u7b2c\u4e00\u5f15\u6570\u306b\u306f\u30eb\u30fc\u30c8\u8981\u7d20\u53c2\u7167 (',(0,d.jsx)(n.em,{children:"elementRef"}),")\u3001\u3042\u308b\u3044\u306f\u958b\u304b\u308c\u305fSAX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 (",(0,d.jsx)(n.em,{children:"document"}),") \u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5909\u66f4\u3057\u305f\u3044\u30aa\u30d7\u30b7\u30e7\u30f3\u3092",(0,d.jsx)(n.em,{children:"selector"})," \u5f15\u6570\u306b\u6e21\u3057\u3001\u65b0\u3057\u3044\u5024\u3092",(0,d.jsx)(n.em,{children:"value"})," \u5f15\u6570\u306b\u6e21\u3057\u307e\u3059\u3002",(0,d.jsx)(n.em,{children:"selector"}),"/",(0,d.jsx)(n.em,{children:"value"}),' \u306e\u30da\u30a2\u306f\u5fc5\u8981\u306a\u3060\u3051\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"',(0,d.jsx)(n.em,{children:"XML"}),'"\u30c6\u30fc\u30de\u5185\u306b\u3042\u308b\u3001\u4ee5\u4e0b\u306e\u5b9a\u6570\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044:']}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3067\u8a2d\u5b9a\u3055\u308c\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30014D\u304b\u3089XML\u306e\u65b9\u5411\u3067\u306e\u307f\u5229\u7528\u3055\u308c\u307e\u3059 (4D\u3078\u306eXML\u5024\u306e\u8aad\u307f\u8fbc\u307f\u306b\u306f\u52b9\u679c\u3042\u308a\u307e\u305b\u3093)\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u304c\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-set-xml-attribute",children:"DOM SET XML ATTRIBUTE"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/sax-add-xml-element-value",children:"SAX ADD XML ELEMENT VALUE"})}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5b9a\u6570"}),(0,d.jsx)(n.th,{children:"\u578b"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML binary encoding"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsxs)(n.td,{children:["\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3059\u308b\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,d.jsx)(n.br,{}),"\u3068\u308a\u3046\u308b\u5024\u306f:",(0,d.jsx)(n.br,{}),'XML Base64 (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u306f\u5358\u7d14\u306bBase64\u306b\u5909\u63db\u3055\u308c\u308bXML Data URI scheme: \u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u306fBase64\u306b\u5909\u63db\u3055\u308c\u3001"data:;base64"\u30d8\u30c3\u30c0\u304c\u8ffd\u52a0\u3055\u308c\u308b\u3002\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u4e3b\u306b\u3001\u30d6\u30e9\u30a6\u30b6\u304c\u81ea\u52d5\u3067\u30d4\u30af\u30c1\u30e3\u3092\u30c7\u30b3\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u307e\u305fSVG\u30d4\u30af\u30c1\u30e3\u306e\u633f\u5165\u306b\u3082\u5fc5\u8981\u3067\u3059\u3002\u8a73\u7d30\u306f',(0,d.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme",children:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML date encoding"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["4D\u65e5\u4ed8\u306e\u5909\u63db\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u65e5\u672c\u306e\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3067 !2003/01/01! \u306e\u4f8b\u3067\u3001\u3068\u308a\u3046\u308b\u5024\u306f (\u6642\u5dee\u306b\u3088\u308aUTC\u3067\u306f\u65e5\u4ed8\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059):",(0,d.jsx)(n.br,{}),'XML ISO (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306e\u6307\u5b9a\u306a\u3057\u3067xs:datetime\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u7d50\u679c\u306f: "2003-01-01"\u3002\u6642\u9593\u90e8\u304cSQL\u306a\u3069\u3092\u4f7f\u7528\u3057\u30664D\u5024\u306b\u542b\u307e\u308c\u3066\u3044\u3066\u3082\u3001\u305d\u308c\u306f\u5931\u308f\u308c\u307e\u3059\u3002XML Local: \u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u6307\u5b9a\u3057\u3066xs:date\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u7d50\u679c\u306f: "2003-01-01 +09:00"\u3002\u6642\u9593\u90e8\u304cSQL\u306a\u3069\u3092\u4f7f\u7528\u3057\u30664D\u5024\u306b\u542b\u307e\u308c\u3066\u3044\u3066\u3082\u3001\u305d\u308c\u306f\u5931\u308f\u308c\u307e\u3059\u3002XML Datetime local: \u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u6307\u5b9a\u3057\u3066xs:dateTime (ISO 8601) \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u6642\u9593\u90e8\u304cSQL\u306a\u3069\u3092\u4f7f\u7528\u3057\u30664D\u5024\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306f\u6642\u9593\u90e8\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002\u7d50\u679c\u306f: "',(0,d.jsx)(n.date,{children:"2003-01-01T00:00:00 +09:00"}),'"\u3002XML UTC: xs:date\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u7d50\u679c\u306f: "2003-01-01Z"\u3002\u6642\u9593\u90e8\u304cSQL\u306a\u3069\u3092\u4f7f\u7528\u3057\u30664D\u5024\u306b\u542b\u307e\u308c\u3066\u3044\u3066\u3082\u3001\u305d\u308c\u306f\u5931\u308f\u308c\u307e\u3059\u3002XML Datetime UTC: xs:dateTime (ISO 8601)\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u6642\u9593\u90e8\u304cSQL\u306a\u3069\u3092\u4f7f\u7528\u3057\u30664D\u5024\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306f\u6642\u9593\u90e8\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002\u7d50\u679c\u306f: "',(0,d.jsx)(n.date,{children:"2003-01-01T00:00:00Z"}),'".']})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML indentation"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsxs)(n.td,{children:["XML\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,d.jsx)(n.br,{}),"\u3068\u308a\u3046\u308b\u5024:",(0,d.jsx)(n.br,{}),"XML With indentation (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u30a4\u30f3\u30c7\u30f3\u30c8\u3055\u308c\u308bXML No indentation: \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u30a4\u30f3\u30c7\u30f3\u30c8\u3055\u308c\u306a\u3044\u3002\u5185\u5bb9\u306f\u4e00\u884c\u4e2d\u306b\u7f6e\u304b\u308c\u307e\u3059\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML picture encoding"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsxs)(n.td,{children:["(Base64\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u308b\u524d\u306b) \u30d4\u30af\u30c1\u30e3\u306e\u5909\u63db\u306e\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,d.jsx)(n.br,{}),"\u3068\u308a\u3046\u308b\u5024:",(0,d.jsx)(n.br,{}),"XML Convert to PNG (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): Base64\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u308b\u524d\u306b\u3001\u30d4\u30af\u30c1\u30e3\u306fPNG\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002XML Native codec: Base64\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u308b\u524d\u306b\u3001\u30d4\u30af\u30c1\u30e3\u306f\u6700\u521d\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u306a\u30b9\u30c8\u30ec\u30fc\u30b8CODEC\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002SVG\u30d4\u30af\u30c1\u30e3\u3092\u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093 (XML SET OPTIONS\u30b3\u30de\u30f3\u30c9\u306e\u4f8b\u984c\u53c2\u7167)\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML string encoding"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["4D\u6587\u5b57\u5217\u3092\u8981\u7d20\u5024\u306b\u5909\u63db\u3059\u308b\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306fXML\u3067\u30a8\u30b9\u30b1\u30fc\u30d7\u6587\u5b57\u306e\u5229\u7528\u304c\u5fc5\u9808\u3067\u3042\u308b\u5c5e\u6027\u306e\u5909\u63db\u306b\u306f\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002",(0,d.jsx)(n.br,{}),"\u3068\u308a\u3046\u308b\u5024:",(0,d.jsx)(n.br,{}),'XML With escaping (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): 4D\u6587\u5b57\u5217\u3092XML\u8981\u7d20\u5024\u306b\u5909\u63db\u3059\u308b\u969b\u3001\u6587\u5b57\u306e\u7f6e\u304d\u63db\u3048\u3092\u884c\u3044\u307e\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u578b\u306e\u30c7\u30fc\u30bf\u306f\u81ea\u52d5\u3067\u89e3\u6790\u3055\u308c\u3001\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u6587\u5b57 (<&>") \u306fXML\u5b9f\u4f53\u53c2\u7167 (&<> \'") \u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u307e\u3059\u3002XML Raw data: 4D\u6587\u5b57\u5217\u306f\u751f\u30c7\u30fc\u30bf\u3068\u3057\u3066\u9001\u4fe1\u3055\u308c\u307e\u3059\u30024D\u306f\u30a8\u30f3\u30b3\u30fc\u30c9\u3084\u89e3\u6790\u3092\u884c\u3044\u307e\u305b\u3093\u30024D\u306e\u5024\u306f\u53ef\u80fd\u3067\u3042\u308c\u3070XML\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u306b\u5909\u63db\u3055\u308c\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u8981\u7d20\u306e\u5b50\u8981\u7d20\u3068\u3057\u3066\u633f\u5165\u3055\u308c\u307e\u3059\u3002\u5024\u3092XML\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u3068\u3057\u3066\u6271\u3048\u306a\u3044\u5834\u5408\u3001\u65b0\u3057\u3044CDATA\u30ce\u30fc\u30c9\u306b\u751f\u30c7\u30fc\u30bf\u3068\u3057\u3066\u633f\u5165\u3055\u308c\u307e\u3059\u3002']})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML time encoding"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsxs)(n.td,{children:["4D\u306e\u6642\u9593\u3092\u5909\u63db\u3059\u308b\u65b9\u6cd5\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u4f8b\uff1a?02/00/46? (\u65e5\u672c\u6642\u9593)\u3002\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306f\u6642\u523b\u3092\u8868\u3059\u304b\u6642\u9593\u3092\u8868\u3059\u304b\u306b\u3088\u308a\u7570\u306a\u308a\u307e\u3059\u3002",(0,d.jsx)(n.br,{}),"\u6642\u523b\u306e\u5834\u5408:",(0,d.jsx)(n.br,{}),'XML Datetime UTC: UTC (Universal Time Coordinated) \u3067\u8868\u73fe\u3055\u308c\u305f\u6642\u523b\u3002UTC\u3078\u306e\u5909\u63db\u306f\u81ea\u52d5\u3067\u3059\u3002\u7d50\u679c: "',(0,d.jsx)(n.duration,{children:"0000-00-00T17:00:46Z"}),'".XML Datetime local: \u6642\u523b\u306f4D\u30a8\u30f3\u30b8\u30f3\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30de\u30b7\u30f3\u306e\u6642\u5dee\u3092\u4f7f\u7528\u3057\u3066\u8868\u73fe\u3055\u308c\u307e\u3059\u3002\u7d50\u679c: "',(0,d.jsx)(n.duration,{children:"0000-00-00T02:00:46+09:00"}),'".XML Datetime local absolute (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u6642\u523b\u306f\u6642\u5dee\u306a\u3057\u3067\u8868\u73fe\u3055\u308c\u307e\u3059\u3002\u5024\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002\u7d50\u679c: "',(0,d.jsx)(n.duration,{children:"0000-00-00T02:00:46"}),'". \u6642\u9593\u306e\u5834\u5408:',(0,d.jsx)(n.br,{}),'XML Seconds: 00:00:00\u304b\u3089\u306e\u7d4c\u904e\u79d2\u6570\u3002\u6642\u9593\u3092\u3042\u3089\u308f\u3059\u305f\u3081\u3001\u5024\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002\u7d50\u679c: "',(0,d.jsx)(n.duration,{children:"7246"}),'".XML Duration: XML Schema Part 2\u306b\u6e96\u62e0\u3057\u305f\u6642\u9593\u8868\u73fe\u3002\u6642\u9593\u3092\u3042\u3089\u308f\u3059\u305f\u3081\u3001\u5024\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002\u7d50\u679c: "',(0,d.jsx)(n.duration,{children:"PT02H00M46S"}),'".']})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6ce8:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"XML Local\u304a\u3088\u3073XML Datetime local \u5024\u306fUTC (Universal Time Coordinated)\u3067\u8868\u73fe\u3055\u308c\u305f\u65e5\u4ed8\u3092\u63d0\u4f9b\u3057\u307e\u305b\u3093\u3002\u65e5\u4ed8\u306f\u5909\u66f4\u3055\u308c\u305a\u3001\u6642\u5dee\u304c\u4ed8\u52a0\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u5909\u63db\u3057\u3066\u305d\u306e\u9006\u5909\u63db\u3092\u304a\u3053\u306a\u3046\u3088\u3046\u306a\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.li,{children:"XML UTC\u304a\u3088\u3073XML Datetime UTC \u5024\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u4e0a\u306f\u5148\u3068\u540c\u3058\u3067\u3059\u304c\u3001UTC\u3067\u8868\u73fe\u3055\u308c\u307e\u3059\u3002\u76f8\u4e92\u306e\u4e92\u63db\u6027\u306e\u305f\u3081\u306b\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u512a\u5148\u7684\u306b\u4f7f\u7528\u3059\u3079\u304d\u3067\u3059\u3002\u5024\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4e00\u90e8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8xml\u30d1\u30fc\u30b5\u30fc\u6a5f\u80fd\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5b9a\u6570"}),(0,d.jsx)(n.th,{children:"\u578b"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML DOM case sensitivity"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-element",children:"DOM Get XML element"})," \u304a\u3088\u3073 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-count-xml-elements",children:"DOM Count XML elements"})," \u30b3\u30de\u30f3\u30c9\u306b\u304a\u3051\u308b\u8981\u7d20\u540d\u306e\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306e\u533a\u5225\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,d.jsx)(n.br,{}),"\u53d6\u308a\u5f97\u308b\u5024:",(0,d.jsx)(n.br,{}),"XML case sensitive (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u30b3\u30de\u30f3\u30c9\u306f\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u3092\u533a\u5225\u3057\u307e\u3059\u3002XML case insensitive: \u30b3\u30de\u30f3\u30c9\u306f\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u3092\u533a\u5225\u3057\u307e\u305b\u3093\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML external entity resolution"}),(0,d.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsxs)(n.td,{children:["\u5916\u90e8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304cXML\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u3067\u89e3\u6c7a\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001DOM\u3068SAX\u306e4D XML\u89e3\u6790\u306f\u5916\u90e8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u89e3\u6c7a\u3092\u8a31\u53ef\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u306e\u30bb\u30ec\u30af\u30bf\u30fc\u306e\u30b9\u30b3\u30fc\u30d7\u306f\u547c\u3073\u51fa\u3057\u30d7\u30ed\u30bb\u30b9(\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306e\u5834\u5408)\u3001\u3042\u308b\u3044\u306f\u5168\u3066\u306e\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9(\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u305f\u5834\u5408)\u3067\u3042\u308b\u70b9\u306b\u6ce8\u610f\u3057\u3066\u4e0b\u3055\u3044\u3002\u3053\u308c\u306f\u5168\u3066\u306eXML\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5168\u4f53\u7684\u306b\u9069\u7528\u3055\u308c\u307e\u3059(\u6700\u521d\u306e\u5f15\u6570\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3092\u6e21\u3057\u3066\u4e0b\u3055\u3044)\u3002",(0,d.jsx)(n.br,{}),"**\u53d6\u308a\u3046\u308b\u5024:**XML enabled: XML\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u3067\u306e\u5916\u90e8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u89e3\u6c7a\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002XML disabled (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024): \u5916\u90e8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u89e3\u6c7a\u3092\u8a31\u53ef\u3057\u306a\u3044(\u5916\u90e8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u5ba3\u8a00\u306f\u89e3\u6790\u30a8\u30e9\u30fc\u3092\u751f\u6210\u3057\u307e\u3059)"]})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,d.jsx)(n.p,{children:"SVG \u30d4\u30af\u30c1\u30e3\u306e\u633f\u5165:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0XML SET OPTIONS($pictElemRef;XML binary encoding;XML data URI scheme)\n\xa0XML SET OPTIONS($pictElemRef;XML picture encoding;XML native codec)\n\xa0DOM SET XML ATTRIBUTE($pictElemRef;"xlink:href";PictVar)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-set-xml-attribute",children:"DOM SET XML ATTRIBUTE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-set-xml-declaration",children:"DOM SET XML DECLARATION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/sax-add-xml-element-value",children:"SAX ADD XML ELEMENT VALUE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/xml-get-options",children:"XML GET OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var d=s(296540);const t={},i=d.createContext(t);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);