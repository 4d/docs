"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27462],{596760:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>t,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=r(474848),n=r(28453);const s={id:"message",title:"MESSAGE",slug:"/commands/message",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/message",title:"MESSAGE",description:"MESSAGE ( mensagem )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/message.md",sourceDirName:"commands-legacy",slug:"/commands/message",permalink:"/docs/pt/commands/message",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmessage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"message",title:"MESSAGE",slug:"/commands/message",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GOTO XY",permalink:"/docs/pt/commands/goto-xy"},next:{title:"MESSAGES OFF",permalink:"/docs/pt/commands/messages-off"}},t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const A={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"MESSAGE"})," ( ",(0,a.jsx)(A.em,{children:"mensagem"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(A.table,{children:[(0,a.jsx)(A.thead,{children:(0,a.jsxs)(A.tr,{children:[(0,a.jsx)(A.th,{children:"Par\xe2metro"}),(0,a.jsx)(A.th,{children:"Tipo"}),(0,a.jsx)(A.th,{}),(0,a.jsx)(A.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(A.tbody,{children:(0,a.jsxs)(A.tr,{children:[(0,a.jsx)(A.td,{children:"mensagem"}),(0,a.jsx)(A.td,{children:"Text"}),(0,a.jsx)(A.td,{children:"\u2192"}),(0,a.jsx)(A.td,{children:"Mensagem a exibir"})]})})]}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(A.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(A.p,{children:["O comando ",(0,a.jsx)(A.strong,{children:"MESSAGE"})," geralmente se utiliza para informar ao usu\xe1rio sobre alguma atividade. Mostra ",(0,a.jsx)(A.em,{children:"mensagem"})," na tela em uma janela de mensagem especial que se abre e fecha cada vez que chamar a ",(0,a.jsx)(A.strong,{children:"MESSAGE"}),", a menos que trabalhe com uma janela que abriu previamente utilizando ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-window",children:"Open window"})," (ver detalhes abaixo). A mensagem \xe9 tempor\xe1ria e \xe9 apagada assim que um formul\xe1rio for exibido ou o m\xe9todo parar de executar. Se outra ",(0,a.jsx)(A.strong,{children:"MESSAGE"})," for executada, a mensagem antiga \xe9 apagada."]}),"\n",(0,a.jsxs)(A.p,{children:["Se abrir uma janela com ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-window",children:"Open window"}),", todas as chamadas a ",(0,a.jsx)(A.strong,{children:"MESSAGE"})," mostram as mensagens nessa janela. A janela se comporta como um terminal:"]}),"\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsx)(A.li,{children:"As mensagens sucessivas n\xe3o apagam as mensagens anteriores quando s\xe3o mostradas na janela, s\xe3o concatenadas em mensagens existentes."}),"\n",(0,a.jsx)(A.li,{children:"Se uma mensagem for mais larga que a janela, 4D insere automaticamente um retorno a linha."}),"\n",(0,a.jsx)(A.li,{children:"Se uma mensagem tiver mais linhas que a janela, 4D automaticamente desce a p\xe1gina."}),"\n",(0,a.jsxs)(A.li,{children:["Para controlar quebras de linha, inclua retornos de carro \u2014 ",(0,a.jsx)(A.strong,{children:"Char(13)"})," \u2014 em sua mensagem."]}),"\n",(0,a.jsxs)(A.li,{children:["Para exibir o texto em um lugar espec\xedfico da janela, chame ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/goto-xy",children:"GOTO XY"}),"."]}),"\n",(0,a.jsxs)(A.li,{children:["Para apagar os conte\xfados da janela, chame ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/erase-window",children:"ERASE WINDOW"}),"."]}),"\n",(0,a.jsx)(A.li,{children:"A janela \xe9 apenas uma janela de output e n\xe3o se redesenha quando outras janelas forem colocadas sobre ela."}),"\n",(0,a.jsx)(A.li,{children:'Pode modificar a fonte e tamanho dos caracteres na janela atrav\xe9s da p\xe1gina "Interface" nas Prefer\xeancias de Banco de Dados.'}),"\n"]}),"\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Nota:"})," ",(0,a.jsx)(A.strong,{children:"MESSAGE"})," \xe9 compat\xedvel com o comando ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"}),"; entretanto, no contexto do segundo par\xe2metro ",(0,a.jsx)(A.em,{children:"*"})," de ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"}),", que salva o tamanho e posi\xe7\xe3o da janela, n\xe3o \xe9 suportado"]}),"\n",(0,a.jsx)(A.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(A.p,{children:"O exemplo a seguir processa uma sele\xe7\xe3o de registros e chama MESSAGE para informar ao usu\xe1rio sobre o progresso da opera\xe7\xe3o:"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-4d",children:'\xa0For($vlRegistro;1;Records in selection([todaTabela]))\n\xa0\xa0\xa0\xa0MESSAGE("Processo do registro #"+String($vlRegistro))\n\xa0\xa0// Fazer algo com o registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabela])\n\xa0End for\n'})}),"\n",(0,a.jsx)(A.p,{children:"A janela a seguir aparece e desaparece cada vez que se chama MESSAGE:"}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{src:r(415724).A+"",width:"569",height:"139"})}),"\n",(0,a.jsx)(A.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(A.p,{children:['Com o objetivo de evitar a janela "piscante", pode mostrar as mensagens em uma janela aberta utilizando ',(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-window",title:"Open window",children:"Open window"}),", como em este exemplo:"]}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Opera\xe7\xe3o em progresso")\n\xa0For($vlRegistro;1;Records in selection([todaTabela]))\n\xa0\xa0\xa0\xa0MESSAGE("Processando registro #"+String($vlRegistro))\n\xa0\xa0// Fazer algo com o registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabela])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,a.jsx)(A.p,{children:"O resultado \xe9 o seguinte (em Windows):"}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{src:r(651541).A+"",width:"456",height:"232"})}),"\n",(0,a.jsx)(A.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(A.p,{children:"Adicionar um retorno de carro melhora a presenta\xe7\xe3o:"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Opera\xe7\xe3o em progresso")\n\xa0For($vlRegistro;1;Records in selection([todaTabela]))\n\xa0\xa0\xa0\xa0MESSAGE("Processando registro #"+String($vlRegistro)+Char(Carriage return))\n\xa0\xa0// Fazer algo com o registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabela])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,a.jsx)(A.p,{children:"Este \xe9 o resultado (em Windows):"}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{src:r(225842).A+"",width:"456",height:"232"})}),"\n",(0,a.jsx)(A.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsxs)(A.p,{children:["Utilizando ",(0,a.jsx)(A.a,{href:"/docs/pt/commands/goto-xy",title:"GOTO XY",children:"GOTO XY"})," e escrevendo algumas linhas adicionais:"]}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Opera\xe7\xe3o em progresso")\n\xa0$vlNbRegistros:=Records in selection([todaTabela])\n\xa0$vhStartTime:=Current time\n\xa0For($vlRegistro;1;$vlNbRegistros)\n\xa0\xa0\xa0\xa0GOTO XY(5;2)\n\xa0\xa0\xa0\xa0MESSAGE("Processando registro #"+String($vlRegistro)+Char(Carriage return))\n\xa0\xa0// Fazer algo com o registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabela])\n\xa0\xa0\xa0\xa0GOTO XY(5;5)\n\xa0\xa0\xa0\xa0$vlResto:=(($vlNbRegistros/$vlRegistro)-1)*(Current time-$vhHoraInicio)\n\xa0\xa0\xa0\xa0MESSAGE("Tempo restante estimado: "+Time string($vlResto))\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,a.jsx)(A.p,{children:"O resultado \xe9 o seguinte (em Windows):"}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{src:r(170667).A+"",width:"456",height:"232"})}),"\n",(0,a.jsx)(A.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.a,{href:"/docs/pt/commands/close-window",children:"CLOSE WINDOW"}),(0,a.jsx)(A.br,{}),"\n",(0,a.jsx)(A.a,{href:"/docs/pt/commands/erase-window",children:"ERASE WINDOW"}),(0,a.jsx)(A.br,{}),"\n",(0,a.jsx)(A.a,{href:"/docs/pt/commands/goto-xy",children:"GOTO XY"}),(0,a.jsx)(A.br,{}),"\n",(0,a.jsx)(A.a,{href:"/docs/pt/commands/open-window",children:"Open window"})]})]})}function i(e={}){const{wrapper:A}={...(0,n.R)(),...e.components};return A?(0,a.jsx)(A,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},415724:(e,A,r)=>{r.d(A,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjkAAACLCAIAAAAMFB9tAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg4ENEyRBh8AAANgSURBVHic7d1battAAEBRu3QJgWwh+19Nt1DoHlyDIYhYUsYP1bf2OZQ8FEUa8jHXM1Hb3Q4Awg6Hw/747s/vX48eCQDMeHv/OLbqx6OHAQBr9vu9VgFQp1UA1GkVAHVaBUCdVgFQ93P26Nv7x/TTBz7UfhxJ9pH6pbGdjk+/+vnznJ4/fhDgxc23anc2gT5q6nyCKftLtE4fjx8E4LI9wNOr/s/X/scPTn++nDN75LqD03utXHx3tha842hnr7M7M/3G6dtvkzN7glABfFpcVy0ZXBlcsYD4dlWxfpftRjt4x+kJg6ui2ZgNFg7gdSy2ajoXT+fNwTl0fKodX1WsXPOUh6uHccXSZ+mOS84LNF5ugBc39PuqG80uQc4fIpg9eEcXpeWW689uAJ4XyNYfwKCL9wCvsD4pz07fW6wqts7AFXuAAIzY6u9XLT19MPLVe91u/OR7LblmQ7X1eg7g6V2/rlrfx1vf2bvXHuD0dutJuGW0S9cZtOlPAOAVPM//X2XbDeD5nF7B/4vfV21n6WFFAJ7J/90qfQJ4Bf7tWgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgDqtAqAOq0CoE6rAKjTKgAAgBsdDodHDwEA1vwFqLdpUyGcqfMAAAAASUVORK5CYII="},651541:(e,A,r)=>{r.d(A,{A:()=>a});const a=r.p+"assets/images/pict25454.en-9ca6f6026b580ad2f9bc27b27b7312e1.png"},225842:(e,A,r)=>{r.d(A,{A:()=>a});const a="data:image/png;base64,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"},170667:(e,A,r)=>{r.d(A,{A:()=>a});const a="data:image/png;base64,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"},28453:(e,A,r)=>{r.d(A,{R:()=>o,x:()=>d});var a=r(296540);const n={},s=a.createContext(n);function o(e){const A=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function d(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:A},e.children)}}}]);