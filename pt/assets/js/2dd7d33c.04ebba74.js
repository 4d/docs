"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37835"],{478095:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-values","title":"VP Get values","description":"VP Get values ( rangeObj Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-values","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-values","title":"VP Get values"},"sidebar":"docs","previous":{"title":"VP Get value","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-value"},"next":{"title":"VP Get workbook options","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-workbook-options"}}'),t=s("785893"),o=s("250065");let l={id:"vp-get-values",title:"VP Get values"},a=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get values"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto intervalo"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Cole\xe7\xe3o de valores"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.code,{children:"VP Get values"}),"  recupera os valores do ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo cujos valores voc\xea deseja recuperar. Se ",(0,t.jsx)(n.em,{children:"rangeObj"})," incluir v\xe1rios intervalos, somente o primeiro ser\xe1 usado."]}),"\n",(0,t.jsxs)(n.p,{children:["A cole\xe7\xe3o retornada por ",(0,t.jsx)(n.code,{children:"VP Get values"})," cont\xe9m uma cole\xe7\xe3o bidimensional:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cada elemento da cole\xe7\xe3o de primeiro n\xedvel representa uma linha e cont\xe9m uma subcole\xe7\xe3o de valores."}),"\n",(0,t.jsx)(n.li,{children:"Cada subcole\xe7\xe3o cont\xe9m valores de c\xe9lulas para a linha. Os valores podem ser Inteiro, Real, Booleano, Texto, Objeto ou Null. Se um valor for uma data ou hora, \xe9 retornado em um objeto com as propriedades abaixo:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"Valor da c\xe9lula (exceto - time)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"Valor hora (em segundos) se o valor for do tipo data js"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Datas ou horas s\xe3o tratadas como um datetime e s\xe3o completadas da forma abaixo:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"valor hora - a parte da data \xe9 preenchida como 30 de dezembro de 1899"}),"\n",(0,t.jsx)(n.li,{children:"valor data - a por\xe7\xe3o hora \xe9 completa como meia noite (00:00:00:000)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Pretende obter valores de C4 a G6:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(707007).Z+"",width:"629",height:"221"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))\n// $result[0]=[4,5,null,hello,world]\n// $result[1]=[6,7,8,9,null]\n// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},707007:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/cmd_vpGetValues-260c1d0b895e13be413a70052a3d640e.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(667294);let t={},o=r.createContext(t);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);