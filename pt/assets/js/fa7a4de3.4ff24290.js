"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95036"],{588728:function(e,o,n){n.r(o),n.d(o,{default:()=>l,frontMatter:()=>r,metadata:()=>a,assets:()=>t,toc:()=>i,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/send-packet","title":"SEND PACKET","description":"SEND PACKET ( {docRef ;} pacote )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-packet.md","sourceDirName":"commands-legacy","slug":"/commands/send-packet","permalink":"/docs/pt/commands/send-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-packet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-packet","title":"SEND PACKET","slug":"/commands/send-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE VARIABLE","permalink":"/docs/pt/commands/receive-variable"},"next":{"title":"SEND RECORD","permalink":"/docs/pt/commands/send-record"}}'),s=n("785893"),c=n("250065");let r={id:"send-packet",title:"SEND PACKET",slug:"/commands/send-packet",displayed_sidebar:"docs"},d=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"SEND PACKET"})," ( {",(0,s.jsx)(o.em,{children:"docRef"})," ;} ",(0,s.jsx)(o.em,{children:"pacote"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"docRef"}),(0,s.jsx)(o.td,{children:"Time"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"N\xfamero de refer\xeancia do documento, o canal atual (porta serial ou documento)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"pacote"}),(0,s.jsx)(o.td,{children:"Text, Blob"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"String ou BLOB a ser enviado"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando SEND PACKET envia um pacote para uma porta serial ou a um documento. Se ",(0,s.jsx)(o.em,{children:"docRef"})," \xe9 especificado, o pacote \xe9 escrito no documento referenciado por ",(0,s.jsx)(o.em,{children:"docRef"}),". Se ",(0,s.jsx)(o.em,{children:"docRef"})," n\xe3o for especificado, o pacote est\xe1 escrito na porta serial ou no documento anteriormente aberto pelo comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.em,{children:"pacote"})," \xe9 apenas um peda\xe7o de dados, geralmente uma cadeia de caracteres."]}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode passar um BLOB no ",(0,s.jsx)(o.em,{children:"pacote"}),". Isso lhe permite ignorar as restri\xe7\xf5es relacionadas com a codifica\xe7\xe3o de caracteres enviados em modo texto (ver exemplo 2)."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Quando voc\xea passa um BLOB no ",(0,s.jsx)(o.em,{children:"pacote"}),", o comando n\xe3o leva em conta qualquer conjunto de caracteres definido pelo comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"}),". O BLOB \xe9 enviado sem nenhuma modifica\xe7\xe3o."]}),"\n",(0,s.jsxs)(o.p,{children:["Antes de usar SEND PACKET, voc\xea deve abrir uma porta serial ou um documento com ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"}),", ou abrir um documento com um dos comandos de documento."]}),"\n",(0,s.jsxs)(o.p,{children:["Ao escrever um documento, o primeiro SEND PACKET come\xe7a a escrever no in\xedcio do documento a menos que o documento seja aberto com ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"}),". At\xe9 que o documento seja fechado, cada pacote subseq\xfcente \xe9 adicionado a quaisquer pacotes enviados anteriormente."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Este comando \xe9 \xfatil para um documento aberto com ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"}),". Por outro lado, para um documento aberto com o ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/create-document",children:"Create document"})," ou ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),", voc\xea pode usar os comandos ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/get-document-position",children:"Get document position"})," e ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para obter e alterar o local no documento onde a pr\xf3xima escrita (SEND PACKET) ou leitura (",(0,s.jsx)(o.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),") ir\xe1 ocorrer."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo a seguir grava os dados dos campos para um documento. Ele grava os campos como campos de comprimento fixo. Campos de comprimento fixo s\xe3o sempre um comprimento espec\xedfico. Se um campo for menor que o comprimento especificado, o campo \xe9 preenchido com espa\xe7os. (Ou seja, os espa\xe7os s\xe3o acrescentados para compensar o comprimento especificado). Embora o uso de campos de comprimento fixo seja um m\xe9todo ineficiente de armazenar dados, alguns sistemas de computadores e aplicativos ainda os usam:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0$vhDocRef :=Create document("")\xa0// Criar um documento\n\xa0If(OK=1)\xa0// O documento foi criado?\n\xa0\xa0\xa0\xa0For($vlRegistro;1;Records in selection([Pessoas]))\xa0//Loop uma vez para cada registro\n\xa0\xa0//Enviar um pacote. Criar o pacote de uma string de 15 espa\xe7os que contenham o primeiro campo de nome\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Pessoas]Nome;1))\n\xa0\xa0// Enviar um segundo pacote. Criar o pacote de uma seq\xfc\xeancia de 15 espa\xe7os que contenham o campo sobrenome\n\xa0\xa0// Este poderia ser o primeiro SEND PACKET, mas est\xe1 separado para clarear\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Pessoas]Sobrenome;1))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Pessoas])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Enviar um Char (26), que \xe9 usado como um marcador de fim-de-arquivo para alguns computadores\n\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Char(SUB ASCII code))\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Fechar o documento\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Este exemplo ilustra o envio e recupera\xe7\xe3o de caracteres estendidos atrav\xe9s de um BLOB em um documento:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $enviar_blob : Blob\n\xa0var $receber_blob : Blob\n\xa0TEXT TO BLOB("\xe2z\xe9rt\xff";$enviar_blob;UTF8 text without length)\n\xa0SET BLOB SIZE($enviar_blob;16;255)\n\xa0$enviar_blob{6}:=0\n\xa0$enviar_blob{7}:=1\n\xa0$enviar_blob{8}:=2\n\xa0$enviar_blob{9}:=3\n\xa0$enviar_blob{10}:=0\n\xa0$vlDocRef:=Create document("blob.test")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET($vlDocRef;$enviar_blob)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n\xa0$vlDocRef:=Open document(document)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE PACKET($vlDocRef;$receber_blob;65536)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/get-document-position",children:"Get document position"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-document-position",children:"SET DOCUMENT POSITION"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"103"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,c.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return r}});var a=n(667294);let s={},c=a.createContext(s);function r(e){let o=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:o},e.children)}}}]);