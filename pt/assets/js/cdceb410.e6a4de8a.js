"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64391"],{311667:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-formulas","title":"VP Get formulas","description":"VP Get formulas ( rangeObj Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formulas","permalink":"/docs/pt/ViewPro/commands/vp-get-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formulas.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-formulas","title":"VP Get formulas"},"sidebar":"docs","previous":{"title":"VP Get formula by name","permalink":"/docs/pt/ViewPro/commands/vp-get-formula-by-name"},"next":{"title":"VP Get frozen panes","permalink":"/docs/pt/ViewPro/commands/vp-get-frozen-panes"}}'),t=s("785893"),o=s("250065");let a={id:"vp-get-formulas",title:"VP Get formulas"},l=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formulas"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto intervalo"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Cole\xe7\xe3o de valores de uma f\xf3rmula"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.code,{children:"VP Get formulas"})," recupera as f\xf3rmulas de um ",(0,t.jsx)(n.em,{children:"rangeObj"})," designado."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo cujas f\xf3rmulas voc\xea deseja recuperar. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," designates multiple ranges, the formula of the first range is returned. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," does not contain any formulas, the command returns an empty string."]}),"\n",(0,t.jsx)(n.p,{children:"A cole\xe7\xe3o devolvida \xe9 bidimensional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A cole\xe7\xe3o de primeiro n\xedvel cont\xe9m subcole\xe7\xf5es de f\xf3rmulas. Cada subcolec\xe7\xe3o representa uma linha."}),"\n",(0,t.jsx)(n.li,{children:"Cada subcole\xe7\xe3o define os valores das c\xe9lulas para a linha. Os valores s\xe3o elementos de texto que cont\xeam as f\xf3rmulas das c\xe9lulas."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea deseja recuperar as f\xf3rmulas nas colunas Sum e Average desse documento:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(707135).Z+"",width:"521",height:"147"})}),"\n",(0,t.jsx)(n.p,{children:"Pode utilizar este c\xf3digo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))\n//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]\n//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]\n//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-formula",children:"VP Get formula"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},707135:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/cmd_vpGetFormulas-75332305b21fbedadcd2ba342151d16a.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},o=r.createContext(t);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);