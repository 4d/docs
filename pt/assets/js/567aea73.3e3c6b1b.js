"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85402],{880855:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(474848),a=o(28453);const s={id:"set-window-title",title:"SET WINDOW TITLE",slug:"/commands/set-window-title",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/set-window-title",title:"SET WINDOW TITLE",description:"SET WINDOW TITLE ( titulo {; janela} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-window-title.md",sourceDirName:"commands-legacy",slug:"/commands/set-window-title",permalink:"/docs/pt/commands/set-window-title",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-title.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-window-title",title:"SET WINDOW TITLE",slug:"/commands/set-window-title",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET WINDOW RECT",permalink:"/docs/pt/commands/set-window-rect"},next:{title:"SHOW TOOL BAR",permalink:"/docs/pt/commands/show-tool-bar"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET WINDOW TITLE"})," ( ",(0,t.jsx)(n.em,{children:"titulo"})," {; ",(0,t.jsx)(n.em,{children:"janela"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"titulo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"t\xedtulo da janela"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"janela"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia da Janela, ou a janela ativa do processo atual, se omitido"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SET WINDOW TITLE muda o t\xedtulo da janela cujo n\xfamero de refer\xeancia \xe9 passado em ",(0,t.jsx)(n.em,{children:"janela"})," para o texto passado em ",(0,t.jsx)(n.em,{children:"titulo"})," (longitude m\xe1xima 80 caracteres)."]}),"\n",(0,t.jsx)(n.p,{children:"Se a janela n\xe3o existir, SET WINDOW TITLE n\xe3o faz nada."}),"\n",(0,t.jsx)(n.p,{children:"Se omitir o par\xe2metro janela, SET WINDOW TITLE substitui o t\xedtulo da janela do primeiro plano do processo atual."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": no ambiente Desenho, 4D define automaticamente os t\xedtulos das janelas, por exemplo, \u201cEntrada para tabela 1\u201d quando realiza uma entrada de dados. Se muda um t\xedtulo de janela, \xe9 prov\xe1vel que 4D o reescreva. Por outro lado, no ambiente Aplica\xe7\xe3o, 4D n\xe3o muda os t\xedtulos das janelas."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Enquanto realiza uma entrada de dados em um formul\xe1rio, voc\xea clica em um bot\xe3o que executa uma opera\xe7\xe3o longa (por exemplo, uma modifica\xe7\xe3o por programa\xe7\xe3o dos registros relacionados mostrados em um subformul\xe1rio). Pode manter-se informado sobre o progresso da opera\xe7\xe3o utilizando o t\xedtulo da janela atual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto do bot\xe3o bAnalise\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Guardar o t\xedtulo atual da janela em uma vari\xe1vel\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTituloAtual:=Get window title\n\xa0\xa0// Iniciar a opera\xe7\xe3o longa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FIRST RECORD([Linhas fatura])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRegistro;1;Records in selection([Linhas fatura]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HACER ALGO\n\xa0\xa0// Mostrar o progresso\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE("Processando a linha #"+String($vlRegistro))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Restaurar o t\xedtulo original da janela\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE($vsTituloAtual)\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-window-title",children:"Get window title"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var t=o(296540);const a={},s=t.createContext(a);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);