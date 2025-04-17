"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68245"],{377540:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>n,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/modify-record","title":"MODIFY RECORD","description":"MODIFY RECORD ( {;}{*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/modify-record.md","sourceDirName":"commands-legacy","slug":"/commands/modify-record","permalink":"/docs/pt/commands/modify-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"modify-record","title":"MODIFY RECORD","slug":"/commands/modify-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Modified","permalink":"/docs/pt/commands/modified"},"next":{"title":"Old","permalink":"/docs/pt/commands/old"}}'),s=r("785893"),d=r("250065");let n={id:"modify-record",title:"MODIFY RECORD",slug:"/commands/modify-record",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"MODIFY RECORD"})," ( {",(0,s.jsx)(o.em,{children:"tabela"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tabela"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela a utilizar para entrada de dados ou Tabela por padr\xe3o, se omitida"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operator"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Ocultar barras de deslocamento"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando MODIFY RECORD permite ao usu\xe1rio modificar o registro atual da tabela ",(0,s.jsx)(o.em,{children:"tabela"})," ou da tabela por padr\xe3o se \xe9 omitido o par\xe2metro ",(0,s.jsx)(o.em,{children:"tabela"}),". MODIFY RECORD carrega o registro, se n\xe3o for carregado pelo processo atual e mostra o formul\xe1rio de entrada atual. Se n\xe3o houver registro atual, ent\xe3o MODIFY RECORD n\xe3o faz nada. MODIFY RECORD n\xe3o afeta a sele\xe7\xe3o atual."]}),"\n",(0,s.jsxs)(o.p,{children:["O formul\xe1rio aparece na janela do primeiro plano do processo. A janela tem barras de rolagem e uma caixa de controle do tamanho. Se passar o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"})," a janela aparece sem as barras de rolagem e sem a caixa de controle de tamanho."]}),"\n",(0,s.jsxs)(o.p,{children:["Para utilizar MODIFY RECORD, o registro atual deve ter acesso de leitura-escritura e n\xe3o deve estar bloqueado.",(0,s.jsx)(o.br,{}),"\nSe o formul\xe1rio contiver bot\xf5es de navega\xe7\xe3o entre os registros da sele\xe7\xe3o, MODIFY RECORD lhe permite ao usu\xe1rio clicar nos bot\xf5es para modificar registros e ser movidos a outros registros."]}),"\n",(0,s.jsxs)(o.p,{children:["O registro \xe9 salvado (aceito) se o usu\xe1rio clicar no bot\xe3o Aceitar ou pressionar a tecla Intro (teclado num\xe9rico) ou se \xe9 executado o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/accept",title:"ACCEPT",children:"ACCEPT"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"O registro n\xe3o \xe9 guardado se o usu\xe1rio clicar num bot\xe3o de tipo CANCELAR ou pressionar a combina\xe7\xe3o de teclas (Ctrl-Ponto em Windows, Comando-Ponto em Macintosh), ou se \xe9 executado o comando CANCEL."}),"\n",(0,s.jsx)(o.p,{children:"Depois de chamar MODIFY RECORD, a vari\xe1vel sistema OK toma o valor 1 se for aceita o registro e 0 si for cancelada."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," o registro permanece em mem\xf3ria, inclusive quando \xe9 cancelada, e pode ser guardada se for executada ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/save-record",title:"SAVE RECORD",children:"SAVE RECORD"})," antes de que o ponteiro do registro atual mude."]}),"\n",(0,s.jsx)(o.p,{children:"Se estiver utilizando MODIFY RECORD e o usu\xe1rio n\xe3o realiza nenhuma modifica\xe7\xe3o ao registro, n\xe3o s\xe3o considerados que o registro tenha sido modificado e ainda que aceite o registro n\xe3o ser\xe3o guardadas novamente. As a\xe7\xf5es tais como a mudan\xe7a do valor de vari\xe1veis, a sele\xe7\xe3o de caixas de sele\xe7\xe3o e de bot\xf5es de op\xe7\xe3o n\xe3o s\xe3o classificadas como modifica\xe7\xf5es. Unicamente a modifica\xe7\xe3o do valor de um campo, atrav\xe9s de uma entrada manual ou de um m\xe9todo, faz com que o registro seja guardado novamente."}),"\n",(0,s.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,s.jsxs)(o.p,{children:["Ver o exemplo do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(o.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se aceitar o registro e 0 se o cancelar. A vari\xe1vel OK n\xe3o toma nenhum valor at\xe9 que o registro tenha sido confirmado ou anulado."}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/locked",children:"Locked"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/modified-record",children:"Modified record"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"57"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Proibido no servidor"}),(0,s.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return n}});var a=r(667294);let s={},d=a.createContext(s);function n(e){let o=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);