"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5377"],{10512:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-picture-metadata","title":"GET PICTURE METADATA","description":"GET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-metadata","permalink":"/docs/ja/commands/get-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-metadata.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-picture-metadata","title":"GET PICTURE METADATA","slug":"/commands/get-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/ja/commands/get-picture-keywords"},"next":{"title":"Is picture file","permalink":"/docs/ja/commands/is-picture-file"}}'),r=t("785893"),d=t("250065");let c={id:"get-picture-metadata",title:"GET PICTURE METADATA",slug:"/commands/get-picture-metadata",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET PICTURE METADATA"})," ( ",(0,r.jsx)(n.em,{children:"picture"})," ; ",(0,r.jsx)(n.em,{children:"metaName"})," ; ",(0,r.jsx)(n.em,{children:"metaContents"})," {; ",(0,r.jsx)(n.em,{children:"metaName2"})," ; ",(0,r.jsx)(n.em,{children:"metaContents2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"metaNameN"})," ; ",(0,r.jsx)(n.em,{children:"metaContentsN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8AAD\u3080\u30D4\u30AF\u30C1\u30E3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u53D6\u5F97\u3059\u308B\u30D6\u30ED\u30C3\u30AF\u306E\u540D\u524D\u307E\u305F\u306F\u30D1\u30B9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metaContents"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u5185\u5BB9"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET PICTURE METADATA"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066 ",(0,r.jsx)(n.em,{children:"picture"})," \u3067\u6307\u5B9A\u3057\u305F\u30D4\u30AF\u30C1\u30E3 (4D\u306E\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570) \u5185\u306E\u30E1\u30BF\u30C7\u30FC\u30BF (\u307E\u305F\u306F\u30E1\u30BF\u30BF\u30B0) \u306E\u5185\u5BB9\u3092\u8AAD\u307F\u3060\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E1\u30BF\u30C7\u30FC\u30BF\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-picture-metadata",children:"SET PICTURE METADATA"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u5F15\u6570\u306B\u306F\u53D6\u308A\u51FA\u3059\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30BF\u30B0\u30D1\u30B9\u304C\u542B\u307E\u308C\u308B ",(0,r.jsx)(n.em,{children:"Picture Metadata Names"})," \u30C6\u30FC\u30DE\u306E\u5B9A\u6570"]}),"\n",(0,r.jsx)(n.li,{children:'\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u5B8C\u5168\u30D6\u30ED\u30C3\u30AF\u540D ("TIFF", "EXIF", "GPS" \u3042\u308B\u3044\u306F"IPTC")\u3002'}),"\n",(0,r.jsx)(n.li,{children:'\u7A7A\u306E\u6587\u5B57\u5217 ("")\u3002'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"metaContents"})," \u5F15\u6570\u306B\u306F\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u53D7\u3051\u53D6\u308B\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u306B\u30BF\u30B0\u30D1\u30B9\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"metaContents"})," \u5F15\u6570\u306F\u76F4\u63A5\u53D6\u5F97\u3057\u305F\u5024\u3092\u542B\u307F\u307E\u3059\u3002\u5024\u306F\u5909\u6570\u306E\u578B\u306B\u5408\u308F\u305B\u3066\u5909\u63DB\u3055\u308C\u307E\u3059(\u5909\u6570\u306E\u578B\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30C6\u30AD\u30B9\u30C8\u578B\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059)\u3002\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u5909\u6570\u3067\u306FXML (XMP\u6A19\u6E96) \u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002(\u7279\u306BIPTC Keywords\u30BF\u30B0\u306E\u3088\u3046\u306B) \u30E1\u30BF\u30C7\u30FC\u30BF\u306B\u4E00\u3064\u4EE5\u4E0A\u306E\u5024\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u914D\u5217\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u306B\u30D6\u30ED\u30C3\u30AF\u540D\u304B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u304D\u3001",(0,r.jsx)(n.em,{children:"metaContents"})," \u5F15\u6570\u306F\u6709\u52B9\u306AXML DOM\u8981\u7D20\u53C2\u7167\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D6\u30ED\u30C3\u30AF (\u3042\u308B\u3044\u306F",(0,r.jsx)(n.em,{children:"metaName"}),"\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u306F\u3059\u3079\u3066\u306E\u30D6\u30ED\u30C3\u30AF) \u306E\u5185\u5BB9\u306F\u53C2\u7167\u3055\u308C\u305F\u8981\u7D20\u306B\u518D\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"DOM\u30C4\u30EA\u30FC\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u4F7F\u7528\u3059\u308B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$xml:=DOM Create XML Ref("Root")\xa0// XML DOM\u30C4\u30EA\u30FC\u306E\u4F5C\u6210\n\xa0\n\xa0\xa0// TIFF\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u51FA\u3057\n\xa0$_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")\n\xa0GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)\n\xa0\n\xa0\xa0// GPS\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u51FA\u3057\n\xa0$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")\n\xa0GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u306E\u4F7F\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $dateAsDate : Date\n\xa0GET PICTURE METADATA(vPicture;TIFF date time;$dateAsDate)\n\xa0\xa0// $dateAsDate\u304C\u65E5\u4ED8\u578B\u306E\u305F\u3081\u3001\u65E5\u4ED8\u306E\u307F\u304C\u8FD4\u3055\u308C\u308B\n\xa0\n\xa0var $dateAsText : Text\n\xa0GET PICTURE METADATA(vPicture;TIFF date time;$dateAsText)\n\xa0\xa0// \u65E5\u4ED8\u306E\u307F\u304CXML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8FD4\u3055\u308C\u308B\n\xa0\n\xa0C_INTEGER($urgency)\n\xa0GET PICTURE METADATA(vPicture;IPTC urgency;$urgency)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsx)(n.p,{children:"\u30BF\u30B0\u306E\u8907\u6570\u306E\u5024\u304C\u914D\u5217\u306B\u8FD4\u3055\u308C\u308B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tTkeywords;0)\n\xa0GET PICTURE METADATA(vPicture;IPTC keywords;$tTkeywords)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001$arrTkeywords\u306F\u4F8B\u3048\u3070\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$arrTkeywords{1}="France"\n\xa0$arrTkeywords{2}="Europe"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,r.jsx)(n.p,{children:"\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u306B\u8907\u6570\u306E\u5024\u3092\u6301\u3064\u30BF\u30B0\u3092\u53D7\u4FE1\u3059\u308B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $vTwords;0 : Text\n\xa0GET PICTURE METADATA(vPicture;IPTC keywords;$vTwords)\n"})}),"\n",(0,r.jsx)(n.p,{children:'\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u3001$vTwords\u306F\u4F8B\u3048\u3070"France;Europe"\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsxs)(n.p,{children:["\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u304C\u6B63\u3057\u304F\u884C\u308F\u308C\u308B\u3068\u3001",(0,r.jsx)(n.em,{children:"OK"}),"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u308A1\u3064\u4EE5\u4E0A\u306E\u30BF\u30B0\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306F0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u3069\u306E\u3088\u3046\u306A\u5834\u5408\u3067\u3082\u3001\u8AAD\u307F\u3060\u3055\u308C\u305F\u5024\u306F\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Picture Metadata Names"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Picture Metadata Values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-picture-metadata",children:"SET PICTURE METADATA"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1122"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},d=s.createContext(r);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);