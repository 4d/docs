"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89253"],{263922:function(e,n,d){d.r(n),d.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"commands-legacy/object-get-border-style","title":"OBJECT Get border style","description":"OBJECT Get border style ( { ;} objeto* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-border-style.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-border-style","permalink":"/docs/pt/commands/object-get-border-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-border-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-border-style","title":"OBJECT Get border style","slug":"/commands/object-get-border-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET BEST SIZE","permalink":"/docs/pt/commands/object-get-best-size"},"next":{"title":"OBJECT Get context menu","permalink":"/docs/pt/commands/object-get-context-menu"}}'),t=d("785893"),r=d("250065");let s={id:"object-get-border-style",title:"OBJECT Get border style",slug:"/commands/object-get-border-style",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT Get border style"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especifica, objeto \xe9 um nome de objeto (cadeia) Se omite, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nome de objeto (se for especificado *) ou",(0,t.jsx)(n.br,{}),"Campo ou vari\xe1vel (se for omitido *)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Estilo de linha de borde"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"OBJECT Get border style"})," devolve o estilo de linha de borde do objeto ou dos objetos designado(s) pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"objeto"})," e ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pode definir o estilo de linha do borde para um objeto em modo de desenho utilizando a lista de propriedades, ou utilizando o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,t.jsxs)(n.p,{children:['O comando devolve um valor que corresponde ao estilo da linha fronteira. Pode comparar o valor recebido com as seguintes constantes, que se encontram no tema "',(0,t.jsx)(n.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border Dotted"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem moldados com uma linha pontilhada de 1-pt."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border Double"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem moldados com uma linha dupla, ou seja, duas linhas cont\xednuas de 1-pt. separadas por um p\xedxel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border None"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem sem borde"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border Plain"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem moldado com uma linha de borde cont\xednua de 1-pt."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border Raised"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem com um efeito 3D (relieve)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border Sunken"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Os objetos aparecem moldados com um efeito 3D afundado (releve inverso)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Border System"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"A linha do borde se desenha em fun\xe7\xe3o das especifica\xe7\xf5es gr\xe1ficas do sistema"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1263"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return s}});var o=d(667294);let t={},r=o.createContext(t);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);