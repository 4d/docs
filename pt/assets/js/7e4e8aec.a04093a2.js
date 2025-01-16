"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52209"],{969615:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/add-record","title":"ADD RECORD","description":"ADD RECORD ( {;}{*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/add-record.md","sourceDirName":"commands-legacy","slug":"/commands/add-record","permalink":"/docs/pt/20-R7/commands/add-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"add-record","title":"ADD RECORD","slug":"/commands/add-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCEPT","permalink":"/docs/pt/20-R7/commands/accept"},"next":{"title":"CANCEL","permalink":"/docs/pt/20-R7/commands/cancel"}}'),a=n("785893"),s=n("250065");let d={id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Compatibilidade",id:"compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"ADD RECORD"})," ( {",(0,a.jsx)(o.em,{children:"tabela"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela a utilizar para entrada de dados ou Tabela por padr\xe3o, se omitida"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operator"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Ocultar barras de deslocamento"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,a.jsxs)(o.p,{children:["Esse comando foi implementado em 4D em lan\xe7amentos anteriores e \xe9 ainda \xfatil para desenvolvimento b\xe1sico ou prot\xf3tipos. Entretanto, para construir interfaces personalizadas e modernas, agora n\xe3o \xe9 recomendado usar formul\xe1rios gen\xe9ricos baseados no comando ",(0,a.jsxs)(o.em,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"})," que oferece propriedades avan\xe7adas e melhor controle sobre o fluxo de dados"]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ADD RECORD permite ao usu\xe1rio adicionar um novo registro na tabela ",(0,a.jsx)(o.em,{children:"tabela"})," ou na tabela por padr\xe3o, se omitir o par\xe2metro ",(0,a.jsx)(o.em,{children:"tabela"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"ADD RECORD cria um novo registro, e faz com que o novo registro se transforme no registro atual para o processo atual e mostra o formul\xe1rio de entrada atual. No ambiente Menus personalizados, depois de que o usu\xe1rio aceita o novo registro, o novo registro \xe9 o \xfanico registro na sele\xe7\xe3o atual."}),"\n",(0,a.jsx)(o.p,{children:"A seguinte imagem representa um formul\xe1rio de entrada de dados t\xedpico."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:n(885663).Z+"",width:"642",height:"374"})}),"\n",(0,a.jsxs)(o.p,{children:["O formul\xe1rio aparece na janela do primeiro plano do processo. A janela tem barras de rolagem e uma caixa de controle do tamanho. Se passar o par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"})," a janela aparece sem as barras de rolagem e sem a caixa de controle de tamanho."]}),"\n",(0,a.jsx)(o.p,{children:"ADD RECORD mostra o formul\xe1rio at\xe9 que o usu\xe1rio aceita ou cancela o registro. Se o usu\xe1rio est\xe1 adicionando v\xe1rios registros, o comando deve ser executado uma vez para cada registro."}),"\n",(0,a.jsxs)(o.p,{children:["O registro \xe9 guardado (aceito) se o usu\xe1rio clicar no bot\xe3o Aceitar ou ao pressionar a tecla Intro (teclado num\xe9rico), ou se o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/accept",children:"ACCEPT"})," for executado."]}),"\n",(0,a.jsxs)(o.p,{children:["O registro n\xe3o \xe9 guardado (cancelado) se o usu\xe1rio clicar no bot\xe3o Cancelar ou ao pressionar a tecla de anula\xe7\xe3o Esc ou se for executado o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/cancel",children:"CANCEL"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": este comando n\xe3o exibe tabelas para estar em modo leitura/escrita. Pode ser utilizado mesmo se a tabela estiver em modo lectura unicamente (ver ",(0,a.jsx)(o.em,{children:"Record Locking"}),"). Depois de chamar a ADD RECORD, OK toma o valor 1 se for aceito o registro e 0 se for cancelado."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"}),' o registro permanece em mem\xf3ria, inclusive quando \xe9 cancelado, e pode ser guardado se \xe9 executado [#cmd id="53"] antes de que mude o ponteiro do registro atual.']}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.p,{children:"O seguinte exemplo \xe9 um loop utilizado geralmente para adicionar novos registros a um banco:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Clientes];"Entrada")\xa0// Designar o formul\xe1rio de entrada da tabela [Clientes]\n\xa0Repeat\xa0// Loop at\xe9 que o usu\xe1rio cancele\n\xa0\xa0\xa0\xa0ADD RECORD([Clientes];*)\xa0// Adicionar um registro a tabela [Clientes]\n\xa0Until(OK=0)\xa0// At\xe9 que o usu\xe1rio cancele\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(o.p,{children:["O seguinte exemplo procura um cliente no banco. Dependendo dos resultados da busca, acontecer\xe1 uma destas coisas. Se n\xe3o se encontrar um cliente, ent\xe3o \xe9 permitido ao usu\xe1rio adicionar um novo cliente com ADD RECORD. Se encontrar ao menos um cliente, se lhe apresenta ao usu\xe1rio o primeiro registro encontrado, o qual pode ser modificada com ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-record",title:"MODIFY RECORD",children:"MODIFY RECORD"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0READ WRITE([Clientes])\n\xa0FORM SET INPUT([Clientes];"Entrada")\xa0// Decidir o formulario de entrada\n\xa0vlCustNum:=Num(Request("Introduzir um n\xfamero de cliente:"))\xa0// Obter o n\xfamero de cliente\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Clientes];[Clientes]CustNo=vlCustNum)\xa0// Procurar o cliente\n\xa0\xa0\xa0\xa0If(Records in selection([Clientes])=0)\xa0// se n\xe3o se encontra nenhum cliente\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ADD RECORD([Clientes])\xa0// Adicionar um novo registro\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Locked([Clientes])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MODIFY RECORD([Clientes])\xa0// Modificar o registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UNLOAD RECORD([Clientes])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("O registro est\xe1 sendo utilizado atualmente.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se aceitar o registro e 0 se o cancelar. A vari\xe1vel OK n\xe3o toma nenhum valor at\xe9 que o registro tenha sido confirmado ou anulado."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/accept",children:"ACCEPT"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/cancel",children:"CANCEL"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/create-record",children:"CREATE RECORD"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-record",children:"MODIFY RECORD"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"56"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar o registro atual"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Proibido no servidor"}),(0,a.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},885663:function(e,o,n){n.d(o,{Z:function(){return r}});let r=n.p+"assets/images/pict2804768.en-90f1dbe0b38710d7f9696cee3162c305.png"},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var r=n(667294);let a={},s=r.createContext(a);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);