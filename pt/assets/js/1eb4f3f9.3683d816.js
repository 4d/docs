"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51660"],{533673:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-formulas","title":"VP SET FORMULAS","description":"VP SET FORMULAS ( rangeObj Collection )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-formulas","permalink":"/docs/pt/ViewPro/commands/vp-set-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formulas.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-formulas","title":"VP SET FORMULAS"},"sidebar":"docs","previous":{"title":"VP SET FORMULA","permalink":"/docs/pt/ViewPro/commands/vp-set-formula"},"next":{"title":"VP SET FROZEN PANES","permalink":"/docs/pt/ViewPro/commands/vp-set-frozen-panes"}}'),o=s("785893"),l=s("250065");let t={id:"vp-set-formulas",title:"VP SET FORMULAS"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP SET FORMULAS"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"formulasCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objeto intervalo de c\xe9lulas"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"formulasCol"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Colec\xe7\xe3o de f\xf3rmulas"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP SET FORMULAS"})," command assigns a collection of formulas starting at the specified cell range."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo da c\xe9lula (criada com ",(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-cell",children:"VP Cell"}),") cuja f\xf3rmula voc\xea deseja especificar. Se ",(0,o.jsx)(n.em,{children:"rangeObj"})," incluir v\xe1rios intervalos, somente o primeiro ser\xe1 usado."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"formulasCol"})," \xe9 uma cole\xe7\xe3o bidimensional:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A cole\xe7\xe3o de primeiro n\xedvel cont\xe9m subcole\xe7\xf5es de f\xf3rmulas. Cada subcolec\xe7\xe3o define uma linha."}),"\n",(0,o.jsx)(n.li,{children:"Cada subcole\xe7\xe3o define os valores das c\xe9lulas para a linha. Os valores devem ser elementos de texto que cont\xeam as f\xf3rmulas a serem atribu\xeddas \xe0s c\xe9lulas."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If the formula is a string, use the period ",(0,o.jsx)(n.code,{children:"."})," as numerical separator and the comma ",(0,o.jsx)(n.code,{children:","})," as parameter separator.\nSe um m\xe9todo 4D for usado, ele dever\xe1 ser permitido com o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-allowed-methods",children:(0,o.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You remove the formulas in ",(0,o.jsx)(n.em,{children:"rangeObj"}),' by replacing them with an empty string ("").']}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Primeira linha\n$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Segunda linha\n\n \nVP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Definir as c\xe9lulas com as f\xf3rmulas\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"myMethod"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$0:=$1*3.33\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(731736).Z+"",width:"977",height:"474"})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Para remover f\xf3rmulas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("";"")) // first collection\n$formulas.push(New collection("";"")) // second collection\n \nVP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells\n'})}),"\n",(0,o.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-formulas",children:"VP Get Formulas"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-values",children:"VP GET VALUES"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},731736:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/cmd_vpSetFormulas-d9a5e529fd8008034b0694f768bb2bbb.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let o={},l=r.createContext(o);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);