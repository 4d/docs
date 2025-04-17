"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28571"],{945610:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/screen-depth","title":"SCREEN DEPTH","description":"SCREEN DEPTH ( profundidade ; cor {; tela} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/screen-depth.md","sourceDirName":"commands-legacy","slug":"/commands/screen-depth","permalink":"/docs/pt/20-R8/commands/screen-depth","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-depth.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"screen-depth","title":"SCREEN DEPTH","slug":"/commands/screen-depth","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCREEN COORDINATES","permalink":"/docs/pt/20-R8/commands/screen-coordinates"},"next":{"title":"Screen height","permalink":"/docs/pt/20-R8/commands/screen-height"}}'),s=r("785893"),o=r("250065");let t={id:"screen-depth",title:"SCREEN DEPTH",slug:"/commands/screen-depth",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SCREEN DEPTH"})," ( ",(0,s.jsx)(n.em,{children:"profundidade"})," ; ",(0,s.jsx)(n.em,{children:"cor"})," {; ",(0,s.jsx)(n.em,{children:"tela"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"profundidade"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Profundidade da tela (n\xfamero de cores = 2 ^ profundidade)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cor"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"1 = Tela cor 0 = Tela branco e preto ou escala de cinzas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tela"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero da tela, ou tela principal se omitida"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SCREEN DEPTH devolve nos par\xe2metros ",(0,s.jsx)(n.em,{children:"profundidade"})," e ",(0,s.jsx)(n.em,{children:"cor"})," a informa\xe7\xe3o sobre o monitor."]}),"\n",(0,s.jsx)(n.p,{children:"Depois da chamada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se devolve a profundidade da tela em ",(0,s.jsx)(n.em,{children:"profundidad"}),"e. A profundidade da tela elevada como pot\xeancia de 2 permite conhecer o n\xfamero de cores mostrados em seu monitor. Por exemplo, se seu monitor est\xe1 definido para 256 cores (2^8), a profundidade de sua tela \xe9 8. As seguintes s\xe3o constantes predefinidas oferecidas por 4D:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Black and white"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Four colors"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sixteen colors"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Two fifty six colors"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thousands of colors"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Millions of colors 24 bit"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"24"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Millions of colors 32 bit"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Se o monitor est\xe1 configurado para mostrar cores, se devolve ",(0,s.jsx)(n.em,{children:"1"})," em ",(0,s.jsx)(n.em,{children:"cor"}),". Se o monitor est\xe1 configurado para mostrar escala de cinzas, se devolve ",(0,s.jsx)(n.em,{children:"0"})," em ",(0,s.jsx)(n.em,{children:"cor"}),". Note que este valor \xe9 significativo na plataforma Macintosh. As seguintes s\xe3o constantes predefinidas oferecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is gray scale"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is color"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"tela"})," especifica o monitor para o qual queira obter a informa\xe7\xe3o. Se omitido o par\xe2metro ",(0,s.jsx)(n.em,{children:"tela"}),", o comando devolve a profundidade da tela principal."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Sua aplica\xe7\xe3o mostra v\xe1rios gr\xe1ficos a cor. Pode escrever em alguma parte em sua base:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SCREEN DEPTH($vlProf;$vlCor)\n\xa0If($vlProf<8)\n\xa0\xa0\xa0\xa0ALERT("Los formul\xe1rios se veriam melhor se o monitor"+" estivesse configurado para mostrar 256 cores ou mais.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/count-screens",children:"Count screens"})}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"439"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var d=r(667294);let s={},o=d.createContext(s);function t(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);