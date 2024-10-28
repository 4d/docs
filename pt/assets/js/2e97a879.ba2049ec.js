"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93447],{985215:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(474848),o=t(28453);const a={id:"propertiesHeaders",title:"Cabe\xe7alhos"},i=void 0,r={id:"FormObjects/propertiesHeaders",title:"Cabe\xe7alhos",description:"Exibir cabe\xe7alhos",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/FormObjects/properties_Headers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHeaders",permalink:"/docs/pt/FormObjects/propertiesHeaders",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Headers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"propertiesHeaders",title:"Cabe\xe7alhos"},sidebar:"docs",previous:{title:"Linhas de grelha",permalink:"/docs/pt/FormObjects/propertiesGridlines"},next:{title:"Ajuda",permalink:"/docs/pt/FormObjects/propertiesHelp"}},d={},l=[{value:"Exibir cabe\xe7alhos",id:"exibir-cabe\xe7alhos",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4},{value:"Height",id:"height",level:2},{value:"JSON Exemplo",id:"json-exemplo",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objectos suportados",id:"objectos-suportados-1",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"exibir-cabe\xe7alhos",children:"Exibir cabe\xe7alhos"}),"\n",(0,n.jsxs)(s.p,{children:["Esta propriedade \xe9 usada para exibir ou ocultar ",(0,n.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-headers",children:"cabe\xe7alhos de coluna listbox"}),". Existe um cabe\xe7alho por coluna; cada cabe\xe7alho \xe9 configurado separadamente."]}),"\n",(0,n.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nome"}),(0,n.jsx)(s.th,{children:"Tipo de dados"}),(0,n.jsx)(s.th,{children:"Valores poss\xedveis"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"showHeaders"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"height",children:"Height"}),"\n",(0,n.jsxs)(s.p,{children:["Esta propriedade \xe9 usada para definir a altura da linha para um cabe\xe7alho de list box em ",(0,n.jsx)(s.strong,{children:"p\xedxeis"})," ou ",(0,n.jsx)(s.strong,{children:"linhas de texto"})," (quando exibido). Ambos os tipos de unidades podem ser utilizados no mesmo list box:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"P\xedxel"})," - o valor da altura \xe9 aplicado diretamente \xe0 linha em quest\xe3o, independentemente do tamanho da fonte contida nas colunas. Se um tipo de letra for demasiado grande, o texto \xe9 truncado. Al\xe9m disso, as imagens s\xe3o truncadas ou redimensionadas conforme o seu formato."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Linha"})," - a altura \xe9 calculada considerando o tamanho da fonte da linha em quest\xe3o."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'Se mais de um tamanho for definido, 4D usa o maior. Por exemplo, se uma linha cont\xe9m "Verdana 18", "Geneva 12" e "Arial 9", 4D usa "Verdana 18" para determinar a altura da linha (por exemplo, 25 pixeis). Esta altura \xe9 depois multiplicada pelo n\xfamero de linhas definido.'}),"\n",(0,n.jsx)(s.li,{children:"Este c\xe1lculo n\xe3o tem em conta o tamanho das imagens nem os estilos aplicados aos tipos de letra."}),"\n",(0,n.jsx)(s.li,{children:"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Esta propriedade tamb\xe9m pode ser configurada dinamicamente usando o comando ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html",children:"LISTBOX SET HEADERS HEIGHT"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'}),"\n",(0,n.jsx)(s.p,{children:"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. Este facto \xe9 ilustrado nas sequ\xeancias seguintes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"(fonte Arial 18)*: 52 pixels -> 2 linhas -> 40 pixels"}),"\n",(0,n.jsx)(s.li,{children:"(fonte Arial 12)*: 3 pixels -> 0.4 linha arredondada para 1 linha -> 19 pixels"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"json-exemplo",children:"JSON Exemplo"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n'})}),"\n",(0,n.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nome"}),(0,n.jsx)(s.th,{children:"Tipo de dados"}),(0,n.jsx)(s.th,{children:"Valores poss\xedveis"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"headerHeight"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"d\xe9cimales positives +px | em"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,n.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/FormObjects/propertiesFooters",children:"Rodapies"})," - ",(0,n.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-headers",children:"Cabe\xe7alhos List box"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(296540);const o={},a=n.createContext(o);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);