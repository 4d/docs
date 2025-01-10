"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20074"],{701169:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>i});var d=JSON.parse('{"id":"Concepts/date","title":"Date","description":"- \u65E5\u4ED8\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u5F0F\u3068\u3057\u3066\u8A8D\u8B58\u3067\u304D\u308B\u7BC4\u56F2\u306F\u3001100/1/1 \u304B\u3089 32,767/12/31 \u307E\u3067\u3067\u3059\u3002(\u65E5\u672C\u8A9E\u7248\u306E 4D \u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u65E5\u4ED8\u306E\u9806\u5E8F\u306F\u5E74/\u6708/\u65E5\u306E\u9806\u306B\u306A\u308A\u307E\u3059\u3002)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/dt_date.md","sourceDirName":"Concepts","slug":"/Concepts/date","permalink":"/docs/ja/18/Concepts/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"date","title":"Date"},"sidebar":"docs","previous":{"title":"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3","permalink":"/docs/ja/18/Concepts/collection"},"next":{"title":"Null \u3068 \u672A\u5B9A\u7FA9","permalink":"/docs/ja/18/Concepts/null-undefined"}}'),s=t("785893"),r=t("250065");let l={id:"date",title:"Date"},i=void 0,c={},h=[{value:"\u65E5\u4ED8\u30EA\u30C6\u30E9\u30EB",id:"\u65E5\u4ED8\u30EA\u30C6\u30E9\u30EB",level:2},{value:"\u65E5\u4ED8\u6F14\u7B97\u5B50",id:"\u65E5\u4ED8\u6F14\u7B97\u5B50",level:2}];function j(n){let e={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u65E5\u4ED8\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u5F0F\u3068\u3057\u3066\u8A8D\u8B58\u3067\u304D\u308B\u7BC4\u56F2\u306F\u3001100/1/1 \u304B\u3089 32,767/12/31 \u307E\u3067\u3067\u3059\u3002(\u65E5\u672C\u8A9E\u7248\u306E 4D \u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u65E5\u4ED8\u306E\u9806\u5E8F\u306F\u5E74/\u6708/\u65E5\u306E\u9806\u306B\u306A\u308A\u307E\u3059\u3002)"}),"\n",(0,s.jsx)(e.li,{children:"C_DATE \u306B\u3088\u3063\u3066\u5BA3\u8A00\u3055\u308C\u305F\u65E5\u4ED8\u306F 32767\u5E74\u307E\u3067\u306E\u7BC4\u56F2\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u30B7\u30B9\u30C6\u30E0\u3092\u7D4C\u7531\u3059\u308B\u51E6\u7406\u306B\u3088\u3063\u3066\u306F\u4E0A\u9650\u306B\u3055\u3089\u306A\u308B\u5236\u9650\u304C\u8AB2\u305B\u3089\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," 4D \u30E9\u30F3\u30B2\u30FC\u30B8\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u8AAC\u660E\u306B\u304A\u3051\u308B\u65E5\u4ED8\u5F15\u6570\u306F\u3068\u304F\u306B\u660E\u8A18\u3055\u308C\u3066\u3044\u306A\u3044\u9650\u308A\u3001\u300C\u65E5\u4ED8\u300D\u3068\u8868\u8A18\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u65E5\u4ED8\u30EA\u30C6\u30E9\u30EB",children:"\u65E5\u4ED8\u30EA\u30C6\u30E9\u30EB"}),"\n",(0,s.jsx)(e.p,{children:"\u65E5\u4ED8\u30EA\u30C6\u30E9\u30EB\u5B9A\u6570\u306F\u3001\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF\u3067\u56F2\u3093\u3067\u8868\u3057\u307E\u3059 (! ... !)\u3002 \u65E5\u4ED8\u306F ISO\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8 (!YYYY-MM-DD!) \u3092\u4F7F\u3063\u3066\u8A18\u8FF0\u3057\u307E\u3059\u3002 \u4E0B\u8A18\u306B\u3001\u65E5\u4ED8\u5B9A\u6570\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7A7A\u306E\u65E5\u4ED8\u306F\u3001 ",(0,s.jsx)(e.em,{children:"!00-00-00!"})," \u306E\u3088\u3046\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Tip:"})," \u30E1\u30BD\u30C3\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u306F\u7A7A\u306E\u65E5\u4ED8\u3092\u5165\u529B\u3059\u308B\u305F\u3081\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u7A7A\u306E\u65E5\u4ED8\u3092\u5165\u529B\u3059\u308B\u306B\u306F\u3001\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF (!) \u306E\u5165\u529B\u5F8C\u306B Enter\u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6CE8:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4E92\u63DB\u6027\u306E\u7406\u7531\u304B\u3089\u30014D \u306F\u4E8C\u6841\u306E\u5E74\u6B21\u306E\u5165\u529B\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3059\u3002 \u6570\u5B57\u304C 30\u4EE5\u4E0A\u306E\u5834\u5408\u306F 20\u4E16\u7D00 (1900\u5E74\u4EE3)\u300130\u672A\u6E80\u306E\u5834\u5408\u306F 21\u4E16\u7D00 (2000\u5E74\u4EE3) \u3067\u3042\u308B\u3068\u8A8D\u8B58\u3057\u307E\u3059 (\u305F\u3060\u3057\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u304C ",(0,s.jsx)(e.code,{children:"SET DEFAULT CENTURY"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u9650\u308A\u307E\u3059)\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:['"\u5730\u57DF\u7279\u6709\u306E\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A\u3092\u4F7F\u3046" \u30AA\u30D7\u30B7\u30E7\u30F3 (',(0,s.jsx)(e.a,{href:"https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html",children:"\u30E1\u30BD\u30C3\u30C9\u30DA\u30FC\u30B8"}),' \u53C2\u7167) \u306B\u30C1\u30A7\u30C3\u30AF\u304C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001US\u74B0\u5883\u306B\u304A\u3044\u3066\u306F\u3001\u65E5\u4ED8\u306F\u6708/\u65E5/\u5E74\u306E\u5F62\u5F0F\u3067\u5165\u529B\u3055\u308C\u3001\u5024\u306F\u30B9\u30E9\u30C3\u30B7\u30E5 "/" \u3067\u533A\u5207\u3089\u308C\u307E\u3059\u3002']}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u65E5\u4ED8\u6F14\u7B97\u5B50",children:"\u65E5\u4ED8\u6F14\u7B97\u5B50"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,s.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,s.jsx)(e.th,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.th,{children:"\u5F0F"}),(0,s.jsx)(e.th,{children:"\u5024"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65E5\u4ED8\u306E\u5DEE"}),(0,s.jsx)(e.td,{children:"Date \u2013 Date"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,s.jsx)(e.td,{children:"19"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65E5\u4ED8\u306E\u52A0\u7B97"}),(0,s.jsx)(e.td,{children:"Date + Number"}),(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"!2017-01-20! + 9"}),(0,s.jsx)(e.td,{children:"!2017-01-29!"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65E5\u4ED8\u306E\u6E1B\u7B97"}),(0,s.jsx)(e.td,{children:"Date \u2013 Number"}),(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"!2017-01-20! - 9"}),(0,s.jsx)(e.td,{children:"!2017-01-11!"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u7B49\u3057\u3044"}),(0,s.jsx)(e.td,{children:"Date = Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u7570\u306A\u308B"}),(0,s.jsx)(e.td,{children:"Date # Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-20! # !2017-01-01!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-20! # !2017-01-20!"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5927\u304D\u3044"}),(0,s.jsx)(e.td,{children:"Date > Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-20! > !2017-01-01!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5C0F\u3055\u3044"}),(0,s.jsx)(e.td,{children:"Date < Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u4EE5\u4E0A"}),(0,s.jsx)(e.td,{children:"Date >= Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u4EE5\u4E0B"}),(0,s.jsx)(e.td,{children:"Date <= Date"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"!2017-01-01!<=!2017-01-20!"}),(0,s.jsx)(e.td,{children:"true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"!2017-01-20!<=!2017-01-01!"}),(0,s.jsx)(e.td,{children:"false"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var d=t(667294);let s={},r=d.createContext(s);function l(n){let e=d.useContext(r);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);