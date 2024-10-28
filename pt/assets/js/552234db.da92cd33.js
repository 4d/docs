"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84510],{804749:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=a(474848),o=a(28453);const i={id:"display-notification",title:"DISPLAY NOTIFICATION",slug:"/commands/display-notification",displayed_sidebar:"docs"},s=void 0,d={id:"commands-legacy/display-notification",title:"DISPLAY NOTIFICATION",description:"DISPLAY NOTIFICATION ( titulo ; texto {; dura\xe7ao} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-notification.md",sourceDirName:"commands-legacy",slug:"/commands/display-notification",permalink:"/docs/pt/commands/display-notification",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-notification.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"display-notification",title:"DISPLAY NOTIFICATION",slug:"/commands/display-notification",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CONFIRM",permalink:"/docs/pt/commands/confirm"},next:{title:"GOTO XY",permalink:"/docs/pt/commands/goto-xy"}},r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DISPLAY NOTIFICATION"})," ( ",(0,t.jsx)(n.em,{children:"titulo"})," ; ",(0,t.jsx)(n.em,{children:"texto"})," {; ",(0,t.jsx)(n.em,{children:"dura\xe7ao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"titulo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"T\xedtulo da notifica\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"texto"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texto da notifica\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dura\xe7ao"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Dura\xe7\xe3o da exibi\xe7\xe3o em segundos"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando DISPLAY NOTIFICATION mostra uma mensagem na \xe1rea de notifica\xe7\xe3o ao usu\xe1rio:"}),"\n",(0,t.jsx)(n.p,{children:"Este tipo de mensagem geralmente \xe9 utilizado pelo sistema operativo ou pelas aplica\xe7\xf5es para informar ao usu\xe1rio sobre um evento externo (desconex\xe3o de rede, disponibilidade de uma atualiza\xe7\xe3o, etc.)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sob Windows, a mensagem aparece na \xe1rea de notifica\xe7\xe3o da barra de tarefas:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:a(565050).A+"",width:"408",height:"105"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sob OS X (vers\xe3o 10.8 m\xednimo), a mensagem aparece em uma pequena janela na esquina superior direita da tela.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:a(841140).A+"",width:"302",height:"56"}),(0,t.jsx)(n.br,{}),'\nNote que conforme as especifica\xe7\xf5es de Apple, a notifica\xe7\xe3o s\xf3 \xe9 mostrada quando a aplica\xe7\xe3o n\xe3o est\xe1 no primeiro plano. No entanto, a mensagem ainda aparece na lista do "notification center".']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"titulo"})," e ",(0,t.jsx)(n.em,{children:"texto"}),", passe o t\xedtulo e o texto da mensagem a mostrar (no exemplo anterior, o t\xedtulo \xe9 \u201cExporta\xe7\xe3o 4D\u201d). Pode introduzir at\xe9 255 caracteres."]}),"\n",(0,t.jsxs)(n.p,{children:["Sob Windows, \xe9 mostrada a janela da mensagem se n\xe3o se detecta atividade na m\xe1quina, ou at\xe9 que o usu\xe1rio fa\xe7a clique na caixa de fechar. O par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"duracao"}),", modifica a dura\xe7\xe3o de visualiza\xe7\xe3o por padr\xe3o. Note que a visualiza\xe7\xe3o das notifica\xe7\xf5es depende da configura\xe7\xe3o do sistema."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0DISPLAY NOTIFICATION("4D Export";"The data is ready to export.")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/alert",children:"ALERT"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},841140:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/pict1206031.en-f54afbe420a56273200f5b1d843958ac.png"},565050:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/pict1206085.pt-a95a8346df6354810b4471be08b32080.png"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var t=a(296540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);