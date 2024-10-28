"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71512],{459009:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(474848),n=t(28453);const i={id:"propertiesFooters",title:"Rodap\xe9s"},r=void 0,a={id:"FormObjects/propertiesFooters",title:"Rodap\xe9s",description:"Exibir rodap\xe9s",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/FormObjects/properties_Footers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesFooters",permalink:"/docs/pt/FormObjects/propertiesFooters",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Footers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"propertiesFooters",title:"Rodap\xe9s"},sidebar:"docs",previous:{title:"Entrada",permalink:"/docs/pt/FormObjects/propertiesEntry"},next:{title:"Linhas de grelha",permalink:"/docs/pt/FormObjects/propertiesGridlines"}},d={},l=[{value:"Exibir rodap\xe9s",id:"exibir-rodap\xe9s",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4},{value:"Height",id:"height",level:2},{value:"JSON Exemplo",id:"json-exemplo",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objectos suportados",id:"objectos-suportados-1",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"exibir-rodap\xe9s",children:"Exibir rodap\xe9s"}),"\n",(0,o.jsxs)(s.p,{children:["Essa propriedade \xe9 usada para exibir ou ocultar ",(0,o.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-footers",children:"os rodap\xe9s de coluna list box"}),". Existe um rodap\xe9 por coluna; cada rodap\xe9 \xe9 configurado separadamente."]}),"\n",(0,o.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Nome"}),(0,o.jsx)(s.th,{children:"Tipo de dados"}),(0,o.jsx)(s.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"showFooters"}),(0,o.jsx)(s.td,{children:"boolean"}),(0,o.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"height",children:"Height"}),"\n",(0,o.jsxs)(s.p,{children:["Esta propriedade \xe9 usada para definir a altura da linha para um rodap\xe9 de list box em ",(0,o.jsx)(s.strong,{children:"p\xedxeis"})," ou em ",(0,o.jsx)(s.strong,{children:"linhas de texto"})," (quando exibido). Ambos os tipos de unidades podem ser utilizados no mesmo list box:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"P\xedxel"})," - o valor da altura \xe9 aplicado diretamente \xe0 linha em quest\xe3o, independentemente do tamanho da fonte contida nas colunas. Se um tipo de letra for demasiado grande, o texto \xe9 truncado. Al\xe9m disso, as imagens s\xe3o truncadas ou redimensionadas conforme o seu formato."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"Linha"})," - a altura \xe9 calculada considerando o tamanho da fonte da linha em quest\xe3o."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Se mais de um tamanho for definido, 4D usa o maior. Por exemplo, se uma linha cont\xe9m "Verdana 18", "Geneva 12" e "Arial 9", 4D usa "Verdana 18" para determinar a altura da linha (por exemplo, 25 pixeis). Esta altura \xe9 depois multiplicada pelo n\xfamero de linhas definido.'}),"\n",(0,o.jsx)(s.li,{children:"Este c\xe1lculo n\xe3o tem em conta o tamanho das imagens nem os estilos aplicados aos tipos de letra."}),"\n",(0,o.jsx)(s.li,{children:"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Esta propriedade tamb\xe9m pode ser configurada dinamicamente usando o comando ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html",children:"LISTBOX SET FOOTERS HEIGHT"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'}),"\n",(0,o.jsx)(s.p,{children:"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. Este facto \xe9 ilustrado nas sequ\xeancias seguintes:"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"(font Arial 18)"}),": 52 pixels -> 2 lines -> 40 pixels ",(0,o.jsx)(s.em,{children:"(font Arial 12)"}),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"]}),"\n",(0,o.jsx)(s.h4,{id:"json-exemplo",children:"JSON Exemplo"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n'})}),"\n",(0,o.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Nome"}),(0,o.jsx)(s.th,{children:"Tipo de dados"}),(0,o.jsx)(s.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"footerHeight"}),(0,o.jsx)(s.td,{children:"string"}),(0,o.jsx)(s.td,{children:"d\xe9cimales positives +px | em"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,o.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/FormObjects/propertiesHeaders",children:"Encabezados"})," - ",(0,o.jsx)(s.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-footers",children:"Pies List box"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var o=t(296540);const n={},i=o.createContext(n);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);