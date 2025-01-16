"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6935"],{693212:function(n,e,r){r.r(e),r.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/euro-converter","title":"Euro converter","description":"Euro converter ( value ; fromCurrency ; toCurrency ) : Real","source":"@site/versioned_docs/version-20-R7/commands-legacy/euro-converter.md","sourceDirName":"commands-legacy","slug":"/commands/euro-converter","permalink":"/docs/20-R7/commands/euro-converter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Feuro-converter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"euro-converter","title":"Euro converter","slug":"/commands/euro-converter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Dec","permalink":"/docs/20-R7/commands/dec"},"next":{"title":"Exp","permalink":"/docs/20-R7/commands/exp"}}'),s=r("785893"),d=r("250065");let c={id:"euro-converter",title:"Euro converter",slug:"/commands/euro-converter",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function o(n){let e={br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Euro converter"})," ( ",(0,s.jsx)(e.em,{children:"value"})," ; ",(0,s.jsx)(e.em,{children:"fromCurrency"})," ; ",(0,s.jsx)(e.em,{children:"toCurrency"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"value"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Value to convert"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fromCurrency"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Code of the currency in which the value is expressed"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"toCurrency"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Code of the currency into which the value must be converted"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Function result"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Converted value"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Euro converter"})," command converts any value from and to the different currencies belonging to \u201CEuroland\u201D and the Euro currency itself."]}),"\n",(0,s.jsx)(e.p,{children:"You can convert:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"a national currency into Euros,"}),"\n",(0,s.jsx)(e.li,{children:"Euros into a national currency,"}),"\n",(0,s.jsx)(e.li,{children:"a national currency into another national currency. In this case, the conversion is calculated by the intermediary of the Euro, as specified in the European reglementation. For example, to convert Belgian francs to Deutschemarks, 4D will perform the following calculations: Belgian francs -> Euros -> Deutchemarks."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Pass the value to convert in the first parameter.",(0,s.jsx)(e.br,{}),"\nThe second parameter indicates the Currency code in which value is expressed.",(0,s.jsx)(e.br,{}),"\nThe third parameter indicates the Currency code into which value must be converted."]}),"\n",(0,s.jsxs)(e.p,{children:["To specify a Currency code, 4D proposes the following predefined constants, placed in the \u201C",(0,s.jsx)(e.em,{children:"Euro Currencies"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constant"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Austrian Schilling"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"ATS"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Belgian Franc"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"BEF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Deutsche Mark"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"DEM"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Euro"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"EUR"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Finnish Markka"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"FIM"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"French Franc"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"FRF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Greek Drachma"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"GRD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Irish Pound"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"IEP"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Italian Lira"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"ITL"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Luxembourg Franc"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"LUF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Netherlands Guilder"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"NLG"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Portuguese Escudo"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"PTE"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Spanish Peseta"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"ESP"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"If necessary, 4D performs rounding automatically on conversion results and keeps 2 decimals \u2014except for conversions to Italian Lires, Belgian Francs, Luxembourg Francs and Spanish Pesetas, for which 4D keeps 0 decimal (the result is an integer number)."}),"\n",(0,s.jsx)(e.p,{children:"The conversion rates between the Euro and the currencies of the 11 participating Member States are fixed:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Currency"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Value for 1 Euro"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Austrian Schilling"}),(0,s.jsx)(e.td,{children:"13.7603"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Belgian Franc"}),(0,s.jsx)(e.td,{children:"40.3399"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Deutschemark"}),(0,s.jsx)(e.td,{children:"1.95583"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Finnish Markka"}),(0,s.jsx)(e.td,{children:"5.94573"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"French Franc"}),(0,s.jsx)(e.td,{children:"6.55957"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Greek drachma"}),(0,s.jsx)(e.td,{children:"340.750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Irish Pound"}),(0,s.jsx)(e.td,{children:"0.787564"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Italian Lire"}),(0,s.jsx)(e.td,{children:"1936.27"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Luxembourg Franc"}),(0,s.jsx)(e.td,{children:"40.3399"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Netherlands Guilder"}),(0,s.jsx)(e.td,{children:"2.20371"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Portuguese Escudo"}),(0,s.jsx)(e.td,{children:"200.482"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Spanish Peseta"}),(0,s.jsx)(e.td,{children:"166.386"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:"Here are some examples of conversions that can be done with this command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"\xa0$value:=10000\xa0//Value expressed in French Francs\n\xa0\xa0//Convert the value into Euros\n\xa0$InEuros:=Euro converter($value;French Franc;Euro)\n\xa0\xa0//Convert the value into Italian Lire\n\xa0$InLires:=Euro converter($value;French Franc;Italian Lire)\n"})}),"\n",(0,s.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Command number"}),(0,s.jsx)(e.td,{children:"676"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return c}});var t=r(667294);let s={},d=t.createContext(s);function c(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);