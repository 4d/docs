"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20100"],{443385:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/equal-pictures","title":"Equal pictures","description":"Equal pictures ( imagem1 ; imagem2 ; mascara ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/equal-pictures.md","sourceDirName":"commands-legacy","slug":"/commands/equal-pictures","permalink":"/docs/pt/20-R7/commands/equal-pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fequal-pictures.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"equal-pictures","title":"Equal pictures","slug":"/commands/equal-pictures","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE THUMBNAIL","permalink":"/docs/pt/20-R7/commands/create-thumbnail"},"next":{"title":"Get picture file name","permalink":"/docs/pt/20-R7/commands/get-picture-file-name"}}'),i=s("785893"),r=s("250065");let t={id:"equal-pictures",title:"Equal pictures",slug:"/commands/equal-pictures",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Equal pictures"})," ( ",(0,i.jsx)(n.em,{children:"imagem1"})," ; ",(0,i.jsx)(n.em,{children:"imagem2"})," ; ",(0,i.jsx)(n.em,{children:"mascara"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"imagem1"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Imagem fonte original"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"imagem2"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Imagem a comparar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mascara"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"M\xe1scara resultante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resultado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True se ambas imagens s\xe3o id\xeanticas; caso contr\xe1rio, False"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando ",(0,i.jsx)(n.strong,{children:"Equal pictures"})," compara precisamente dois imagens, tanto a n\xedvel de suas dimens\xf5es como de seu conte\xfado."]}),"\n",(0,i.jsxs)(n.p,{children:["Passe em ",(0,i.jsx)(n.em,{children:"imagem1"})," a imagem fonte e em ",(0,i.jsx)(n.em,{children:"imagem2"})," uma imagem comparar com a imagem fonte."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se as imagens n\xe3o s\xe3o do mesmo dimens\xe3o, o comando devolve ",(0,i.jsx)(n.strong,{children:"False"})," e o par\xe2metro ",(0,i.jsx)(n.em,{children:"mascara"})," cont\xe9m uma imagem vazia."]}),"\n",(0,i.jsxs)(n.li,{children:["Se as duas imagens s\xe3o do mesmo dimens\xe3o mas cont\xe9m conte\xfados diferentes, o comando devolve ",(0,i.jsx)(n.strong,{children:"False"})," e o par\xe2metro ",(0,i.jsx)(n.em,{children:"mascara"})," cont\xe9m a imagem m\xe1scara resultante da compara\xe7\xe3o das dois imagens. Esta compara\xe7\xe3o se realiza pixel por pixel. Cada pixel diferente aparece em branco sobre um fundo preto."]}),"\n",(0,i.jsxs)(n.li,{children:["Se as duas imagens s\xe3o id\xeanticas, o comando devolve ",(0,i.jsx)(n.strong,{children:"True"})," e o par\xe2metro ",(0,i.jsx)(n.em,{children:"mascara"})," cont\xe9m uma imagem completamente preta."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,i.jsx)(n.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se comparam as duas imagens. Em caso de anomalia, particularmente se uma das imagens n\xe3o se inicializa (imagem vazia), a vari\xe1vel OK toma o valor 0."}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"No seguinte exemplo, comparamos duas imagens (pict1 e pict2) e mostramos a m\xe1scara resultante:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(133304).Z+"",width:"735",height:"421"})}),"\n",(0,i.jsxs)(n.p,{children:["Este \xe9 o c\xf3digo do bot\xe3o ",(0,i.jsx)(n.strong,{children:"Compare"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$equal :=Equal pictures($pict1;$pict2;$mask)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"1196"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},133304:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict847365.fr-371c587a72091d82fdf973eaf1fc6e05.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var a=s(667294);let i={},r=a.createContext(i);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);