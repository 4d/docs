"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6332"],{64679:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-variables","title":"WEB GET VARIABLES","description":"WEB GET VARIABLES ( nameArray ; valueArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-get-variables.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-variables","permalink":"/docs/ja/20-R8/commands/web-get-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-variables","title":"WEB GET VARIABLES","slug":"/commands/web-get-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET STATISTICS","permalink":"/docs/ja/20-R8/commands/web-get-statistics"},"next":{"title":"WEB Is secured connection","permalink":"/docs/ja/20-R8/commands/web-is-secured-connection"}}'),t=s("785893"),d=s("250065");let l={id:"web-get-variables",title:"WEB GET VARIABLES",slug:"/commands/web-get-variables",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"Web\u30D5\u30A9\u30FC\u30E0\u3068\u95A2\u9023\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066",id:"web\u30D5\u30A9\u30FC\u30E0\u3068\u95A2\u9023\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET VARIABLES"})," ( ",(0,t.jsx)(n.em,{children:"nameArray"})," ; ",(0,t.jsx)(n.em,{children:"valueArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nameArray"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Web\u30D5\u30A9\u30FC\u30E0\u306E\u5909\u6570\u306E\u540D\u524D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueArray"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Web\u30D5\u30A9\u30FC\u30E0\u306E\u5909\u6570\u306E\u5024"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET VARIABLES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B5\u30D6\u30DF\u30C3\u30C8\u3055\u308C\u305FWeb\u30D5\u30A9\u30FC\u30E0\u306B\u3042\u308B\u5909\u6570\u306E\u540D\u524D\u3068\u5024\u3092\u30C6\u30AD\u30B9\u30C8\u914D\u5217 ",(0,t.jsx)(n.em,{children:"nameArray"}),"\u3068",(0,t.jsx)(n.em,{children:"valueArray"})," \u306B\u4EE3\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FHTML\u30DA\u30FC\u30B8\u3001\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3001\u30DC\u30BF\u30F3\u3001\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3001\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3\u3001\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3001\u9078\u629E\u30EA\u30B9\u30C8\u306B\u3042\u308B\u3059\u3079\u3066\u306E\u5909\u6570\u306E\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u95A2\u3057\u3066\u306F\u3001\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u304C\u5B9F\u969B\u306B\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u305F\u5834\u5408\u306B\u9650\u308A\u3001\u305D\u306E\u5909\u6570\u306E\u540D\u524D\u3068\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"URL\u306E\u30BF\u30A4\u30D7\u3084Web\u30B5\u30FC\u30D0\u30FC\u306B\u9001\u3089\u308C\u305F\u30D5\u30A9\u30FC\u30E0 (POST\u307E\u305F\u306FGET\u30E1\u30BD\u30C3\u30C9) \u306B\u95A2\u4FC2\u306A\u304F\u6709\u52B9\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/qr-set-destination",children:"QR SET DESTINATION"}),"\u3084\u3001\u30D5\u30A9\u30FC\u30E0\u3092\u30B5\u30D6\u30DF\u30C3\u30C8\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u308B\u4ED6\u306E4D\u30E1\u30BD\u30C3\u30C9\u306B\u304A\u3044\u3066\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"web\u30D5\u30A9\u30FC\u30E0\u3068\u95A2\u9023\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066",children:"Web\u30D5\u30A9\u30FC\u30E0\u3068\u95A2\u9023\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066"}),"\n",(0,t.jsxs)(n.p,{children:["\u5404\u30D5\u30A9\u30FC\u30E0\u306B\u306F\u3001\u540D\u524D\u304C\u4ED8\u3051\u3089\u308C\u305F\u30C7\u30FC\u30BF\u3092\u5165\u529B\u3059\u308B\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u3059 (\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3001\u30DC\u30BF\u30F3\u3001\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9) \u3002",(0,t.jsx)(n.br,{}),"\n\u30D5\u30A9\u30FC\u30E0\u304C\u30B5\u30D6\u30DF\u30C3\u30C8\u3055\u308C\u308B\u3068 (\u30EA\u30AF\u30A8\u30B9\u30C8\u304CWeb\u30B5\u30FC\u30D0\u3078\u9001\u3089\u308C\u307E\u3059) \u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30A8\u30EA\u30A2\u306E\u30EA\u30B9\u30C8\u3068\u305D\u308C\u306B\u95A2\u9023\u3059\u308B\u5024\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),"\n2\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u30D5\u30A9\u30FC\u30E0\u3092\u30B5\u30D6\u30DF\u30C3\u30C8\u3067\u304D\u307E\u3059 (\u4E21\u65B9\u3068\u30824D\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059) \u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"POST: \u901A\u5E38Web\u30B5\u30FC\u30D0\u3084\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0\u3059\u308B\u969B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"GET: \u901A\u5E38Web\u30B5\u30FC\u30D0\u3084\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u62BD\u51FA\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u969B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:'\u30D5\u30A9\u30FC\u30E0\u306B\u306F\u3001\u5024 "ROBERT" \u3068 "DALLAS" \u3092\u6301\u3064 vName\u30D5\u30A3\u30FC\u30EB\u30C9\u3068vCity\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u305D\u308C\u305E\u308C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u95A2\u9023\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u3001"/4DACTION/WEBFORM" \u3067\u3059\u3002'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304CPOST (\u983B\u7E41\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059) \u3067\u3042\u308B\u5834\u5408\u3001\u5165\u529B\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306FURL\u4E0A\u3067\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304CGET\u3067\u3042\u308B\u5834\u5408\u3001\u5165\u529B\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306FURL\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002 (",(0,t.jsx)(n.a,{href:"http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS",children:"http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"WEBFORM\u30E1\u30BD\u30C3\u30C9\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($anames;0)\n\xa0ARRAY TEXT($avalues;0)\n\xa0WEB GET VARIABLES($anames;$avalues)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$anames{1}="vNAME"\n\xa0$anames{2}="vCITY"\n\xa0$avalues{1}="ROBERT"\n\xa0$avalues{2}="DALLAS"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5909\u6570vNAME\u306F\u3001ROBERT\u3092\u683C\u7D0D\u3057\u3001\u5909\u6570vCITY\u306F\u3001DALLAS\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002."}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/web-get-body-part",children:"WEB GET BODY PART"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"683"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);