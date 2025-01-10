"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60061"],{95491:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/euro-converter","title":"Euro converter","description":"Euro converter ( valor ; deMoeda ; paraMoeda ) : Real","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/euro-converter.md","sourceDirName":"commands-legacy","slug":"/commands/euro-converter","permalink":"/docs/pt/commands/euro-converter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Feuro-converter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"euro-converter","title":"Euro converter","slug":"/commands/euro-converter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Dec","permalink":"/docs/pt/commands/dec"},"next":{"title":"Exp","permalink":"/docs/pt/commands/exp"}}'),d=r("785893"),t=r("250065");let a={id:"euro-converter",title:"Euro converter",slug:"/commands/euro-converter",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(n){let e={br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Euro converter"})," ( ",(0,d.jsx)(e.em,{children:"valor"})," ; ",(0,d.jsx)(e.em,{children:"deMoeda"})," ; ",(0,d.jsx)(e.em,{children:"paraMoeda"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Par\xe2metro"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"valor"}),(0,d.jsx)(e.td,{children:"Real"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Valor a converter"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"deMoeda"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"C\xf3digo da moeda na qual o valor \xe9 expresso"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"paraMoeda"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"C\xf3digo da moeda para o qual o valor ser\xe1 convertido"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Resultado"}),(0,d.jsx)(e.td,{children:"Real"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"Valor convertido"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(e.p,{children:"O comando Euro converter permite realizar todo tipo de convers\xe3o de valores entre as diferentes moedas de pa\xedses que pertencem \xe0 \u201CZona Euro\u201D e ao Euro mesmo."}),"\n",(0,d.jsx)(e.p,{children:"Pode converter:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"uma moeda nacional em Euros,"}),"\n",(0,d.jsx)(e.li,{children:"Euros em uma moeda nacional,"}),"\n",(0,d.jsx)(e.li,{children:"uma moeda nacional em outra moeda nacional. Neste caso, a convers\xe3o \xe9 calculada atrav\xe9s do Euro, como se especifica na regulamenta\xe7\xe3o Europ\xe9ia. Por exemplo, para converter Francos belgas em Marcos alem\xe3es, 4D realizar\xe1 as seguintes convers\xf5es: Francos belgas -> Euros -> Marcos alem\xe3es."}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["Passe no primeiro par\xe2metro o valor a converter.",(0,d.jsx)(e.br,{}),"\nO segundo par\xe2metro indica o c\xf3digo da moeda no qual o valor est\xe1 expressado.",(0,d.jsx)(e.br,{}),"\nO terceiro par\xe2metro indica o c\xf3digo da moeda no qual o valor ser\xe1 convertido."]}),"\n",(0,d.jsx)(e.p,{children:"Para especificar um c\xf3digo de moeda, 4D oferece as seguintes constantes predefinidas, localizadas no tema \u201CMoedas Euro\u201D:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{children:"Valor"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Austrian Schilling"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"ATS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Belgian Franc"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"BEF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Deutsche Mark"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"DEM"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Euro"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"EUR"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Finnish Markka"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"FIM"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"French Franc"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"FRF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Greek Drachma"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"GRD"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Irish Pound"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"IEP"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Italian Lira"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"ITL"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Luxembourg Franc"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"LUF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Netherlands Guilder"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"NLG"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Portuguese Escudo"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"PTE"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Spanish Peseta"}),(0,d.jsx)(e.td,{children:"Cadeia"}),(0,d.jsx)(e.td,{children:"ESP"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Se for necess\xe1rio, 4D arredonda automaticamente o resultado da convers\xe3o e conserva 2 decimais, exceto para convers\xf5es a Liras italianas, Francos Belgas, Francos de Luxemburgo e Pesetas espanholas, para as quais 4D conserva 0 decimais (o resultado \xe9 um n\xfamero inteiro)."}),"\n",(0,d.jsx)(e.p,{children:"As taxas de convers\xe3o entre o Euro e 12 das moedas dos pa\xedses membros s\xe3o as seguintes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"Moeda"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"Valor para 1 Euro"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Chelines austr\xedacos"}),(0,d.jsx)(e.td,{children:"13.7603"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Francos belgas"}),(0,d.jsx)(e.td,{children:"40.3399"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Marco alem\xe3o"}),(0,d.jsx)(e.td,{children:"1.95583"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Marco finland\xeas"}),(0,d.jsx)(e.td,{children:"5.94573"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Franco Franc\xeas"}),(0,d.jsx)(e.td,{children:"6.55957"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Dracma Grega"}),(0,d.jsx)(e.td,{children:"340.750"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Libra irlandesa"}),(0,d.jsx)(e.td,{children:"0.787564"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Lira italiana"}),(0,d.jsx)(e.td,{children:"1936.27"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Franco luxemburgo"}),(0,d.jsx)(e.td,{children:"40.3399"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Florim neerland\xeas"}),(0,d.jsx)(e.td,{children:"2.20371"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Escudo portugu\xeas"}),(0,d.jsx)(e.td,{children:"200.482"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Peseta espanhola"}),(0,d.jsx)(e.td,{children:"166.386"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(e.p,{children:"Estes s\xe3o alguns exemplos de convers\xf5es que podem ser realizadas com este comando:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0$valor:=10000\xa0//Valor expresso em Francos franceses\n\xa0\xa0//Converter o valor a Euros\n\xa0$EmEuros:=Euro converter($valor;French Franc;Euro)\n\xa0\xa0//Converter o valor a Liras Italianas\n\xa0$EmLiras:=Euro converter($valor;French Franc;Italian Lira)\n"})}),"\n",(0,d.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"N\xfamero do comando"}),(0,d.jsx)(e.td,{children:"676"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread-seguro"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return a}});var s=r(667294);let d={},t=s.createContext(d);function a(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);