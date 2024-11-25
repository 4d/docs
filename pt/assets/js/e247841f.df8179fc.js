"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56947"],{900702:function(e,a,r){r.r(a),r.d(a,{metadata:()=>s,contentTitle:()=>t,default:()=>p,assets:()=>i,toc:()=>c,frontMatter:()=>n});var s=JSON.parse('{"id":"commands-legacy/encrypt-data-file","title":"Encrypt data file","description":"Encrypt data file ( rotaEstrutura ; rotaDados {; novaFrasePasse/novaChave {; arqPasta {; atualFrasePasse/atualChave {; nomeMetodo}}}} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/encrypt-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-file","permalink":"/docs/pt/commands/encrypt-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"encrypt-data-file","title":"Encrypt data file","slug":"/commands/encrypt-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data BLOB","permalink":"/docs/pt/commands/encrypt-data-blob"},"next":{"title":"New data key","permalink":"/docs/pt/commands/new-data-key"}}'),o=r("785893"),d=r("250065");let n={id:"encrypt-data-file",title:"Encrypt data file",slug:"/commands/encrypt-data-file",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Encrypt data file"})," ( ",(0,o.jsx)(a.em,{children:"rotaEstrutura"})," ; ",(0,o.jsx)(a.em,{children:"rotaDados"})," {; novaFrasePasse/novaChave {; ",(0,o.jsx)(a.em,{children:"arqPasta"})," {; atualFrasePasse/atualChave {; ",(0,o.jsx)(a.em,{children:"nomeMetodo"}),"}}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe2metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rotaEstrutura"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Rota para o arquivo estrutura"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rotaDados"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Rota de arquivo de dados a criptografar"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"novaFrasePasse/novaChave"}),(0,o.jsx)(a.td,{children:"Texto, Objeto"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Em caso de mudan\xe7a: novaFrasePasse (texto) ou nova chave de Criptografia (objeto)"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"arqPasta"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Rota da pasta onde os arquivos originais est\xe3o armazenados"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"atualFrasePasse/atualChave"}),(0,o.jsx)(a.td,{children:"Texto, Objeto"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"frase Passe atual (texto) ou chave de criptografia atual (objeto)"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"nomeMetodo"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Nome de m\xe9todo de chamada 4D"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Resultado"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2190"}),(0,o.jsx)(a.td,{children:"Rota completa de pasta onde os arquivos originais est\xe3o armazenados"})]})]})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(a.p,{children:["O comando ",(0,o.jsx)(a.strong,{children:"Encrypt data file"})," se utiliza para cifrar ou cifrar novamente o arquivo de dados designado pelo par\xe2metro ",(0,o.jsx)(a.em,{children:"rotaDados"})," associado ao par\xe2metro ",(0,o.jsx)(a.em,{children:"rotaEstrutura"}),". Tamb\xe9m pode ser utilizado para eliminar o cifrado do banco de dados. O comando n\xe3o modifica os arquivos originais, devolve o nome de rota completo da pasta criada para respaldar o arquivo de dados original."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Este comando n\xe3o pode ser utilizado com o arquivo de dados aberto atualmente."}),"\n",(0,o.jsxs)(a.li,{children:["Este comando s\xf3 pode ser executado desde 4D (modo local) ou 4D Server (procedimento armazenado). O arquivo de dados que v\xe3o ser cifrados deve corresponder ao arquivo de estrutura designado por ",(0,o.jsx)(a.em,{children:"rotaEstrutura"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:['A execu\xe7\xe3o deste comando cifrar\xe1 ou modificar\xe1 o cifrado de todas as tabelas do banco de dados que foram definidas como "encriptograf\xe1vel". Para mais informa\xe7\xe3o, consulte a se\xe7\xe3o ',(0,o.jsx)(a.em,{children:"Criptografia"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Aten\xe7\xe3o:"})," o cifrado de um banco de dados \xe9 uma opera\xe7\xe3o prolongada. Mostra um indicador de progresso (que pode ser interrompido pelo usu\xe1rio). Lembre que a sequ\xeancia de cifrado do banco de dados inclui um passo de compacta\xe7\xe3o."]}),"\n",(0,o.jsxs)(a.p,{children:["No par\xe2metro ",(0,o.jsx)(a.em,{children:"rotaEstrutura"}),", pode passar uma string vazia ou a rota de acesso completa do arquivo de estrutura associado com o arquivo de dados que quiser cifrar. Esta informa\xe7\xe3o \xe9 necess\xe1ria para o procedimento de cifrado. Se passar uma string vazia, aparecer\xe1 um quadro de di\xe1logo ",(0,o.jsx)(a.strong,{children:"Abrir arquivo"})," padr\xe3o para que o usu\xe1rio possa designar o arquivo de estrutura que se utilizar\xe1. Do contr\xe1rio, pode passar uma rota de acesso completa, expressa na sintaxe de sistema operativo."]}),"\n",(0,o.jsxs)(a.p,{children:["No par\xe2metro ",(0,o.jsx)(a.em,{children:"rotaDados"}),", pode passar uma string vazia, um nome de arquivo ou uma rota completa (deve ser expressa na sintaxe de sistema operativo). Se passar uma string vazia, aparecer\xe1 um quadro de di\xe1logo ",(0,o.jsx)(a.strong,{children:"Abrir arquivo"})," padr\xe3o para que o usu\xe1rio possa designar o arquivo de dados que vai ser cifrado. Este arquivo deve corresponder ao arquivo de estrutura definido no par\xe2metro ",(0,o.jsx)(a.em,{children:"rotaEstrutura"}),". Se passar apenas o nome de arquivo de dados, 4D o buscar\xe1 no mesmo nivel que o arquivo de estrutura."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Para cifrar o banco de dados pela primeira vez"}),", s\xf3 necessita passar o par\xe2metro ",(0,o.jsx)(a.em,{children:"novaFrasePasse"})," ou ",(0,o.jsx)(a.em,{children:"novaChaveDados"})," (os par\xe2metros ",(0,o.jsx)(a.em,{children:"atualFrasePasse"})," ou ",(0,o.jsx)(a.em,{children:"atualChave"})," n\xe3o devem ser proporcionadas):\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.em,{children:"novaFrasePasse"}),": cadena utilizada para generar la llave de cifrado (SHA de 256 bits)"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.em,{children:"novaChave"}),": objeto (com propriedade ",(0,o.jsx)(a.em,{children:"encodedKey"}),") que cont\xe9m uma nova chave de cifrado de dados. Esta chave deveria ter sido gerado com o comando ",(0,o.jsx)(a.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"}),".",(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.strong,{children:"Nota:"})," ",(0,o.jsx)(a.em,{children:"novaFrasePasse"})," (ou ",(0,o.jsx)(a.em,{children:"novaChave"}),") n\xe3o \xe9 agregada ao chaveiro 4D."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Para voltar a cifrar um banco de dados"})," (ou seja, o banco de dados j\xe1 tiver sido cifrado), deve passar tanto o par\xe2metro ",(0,o.jsx)(a.em,{children:"novaFrasePasse"})," (ou ",(0,o.jsx)(a.em,{children:"novaChave"}),"), como a frase passe atual (ou a chave de dados atual). Isto \xe9 necess\xe1rio para descifrar o banco de dados antes de voltar a criptograf\xe1-lo. Esta informa\xe7\xe3o pode ser proporcionada das seguentes maneiras:\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["passando par\xe2metros v\xe1lidos de ",(0,o.jsx)(a.em,{children:"atualFrasePasse"})," (ou ",(0,o.jsx)(a.em,{children:"atualChave"}),") ao comando,"]}),"\n",(0,o.jsx)(a.li,{children:"no chaveiro 4D."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Para eliminar o cifrado de todas as tabelas"}),", passe uma frase passe vazia ou uma chave de dados nula como ",(0,o.jsx)(a.em,{children:"novaFrasePasse"})," (ou ",(0,o.jsx)(a.em,{children:"novaChave"}),'). A senha ou chave de dados atual j\xe1 deve ter sido proporcionada. Os arquivos descifrados s\xe3o genrados ou copiados em pastas denominadas "Arquivos substituidos (Descifrado) YYYY-MM-DD HH-MM-SS\u201D/"Decrypted files YYYY-MM-DD HH-MM-SS".']}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["O comando n\xe3o modifica os arquivos originais. S\xe3o movidas na pasta ",(0,o.jsx)(a.em,{children:"pastaArquivo"})," (se for passado) a uma pasta especial denominada ",(0,o.jsx)(a.em,{children:"Arquivos substitu\xeddos (Encripta\xe7\xe3o) YYYY-MM-DD HH-MM-SS"})," ou ",(0,o.jsx)(a.em,{children:"Arquivos substitu\xeddos (Descifrado) YYYY-MM-DD HH-MM-SS"}),' onde YYYY-MM-DD HH-MM-SS representa a data e a hora da opera\xe7\xe3o. Por exemplo: "Arquivos substituidos (cifrado) 2018-09-29 13-00-35". O novo arquivo de dados cifrados ou descifrados substitui automaticamente o arquivo original.',(0,o.jsx)(a.br,{}),'\nSe passar "" em ',(0,o.jsx)(a.em,{children:"pastaArquivo"}),", aparecer\xe1 um di\xe1logo ",(0,o.jsx)(a.strong,{children:"Abrir pasta"})," padr\xe3o para que o usu\xe1rio possa especificar o local da pasta que ser\xe1 criada. Se ",(0,o.jsx)(a.em,{children:"pastaArquivo"})," se omite, os arquivos originais s\xe3o armazenados automaticamente em uma pasta com marca de tempo criada junto ao arquivo de estrutura."]}),"\n",(0,o.jsxs)(a.p,{children:["O par\xe2metro ",(0,o.jsx)(a.em,{children:"m\xe9todo"})," se utiliza para estabelecer um m\xe9todo de retro chamada que se chamar\xe1 regularmente durante o processo de cifrado. Se passar uma string vazia ou um nome de m\xe9todo n\xe3o v\xe1lido, este par\xe2metro se ignora (n\xe3o se chama a nenhum m\xe9todo). Quando se chamar, este m\xe9todo recebe at\xe9 5 par\xe2metros segundo o tipo de evento que origina a chamada (ver mais abaixo). \xc9 imperativo declarar estes par\xe2metros no m\xe9todo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"Evento"})}),(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"$1 (Inteiro longo)"})}),(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"$2 (Inteiro longo)"})}),(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"$3 (Texto)"})}),(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"$4 (Inteiro longo)"})}),(0,o.jsx)(a.th,{children:(0,o.jsx)(a.strong,{children:"$5 (Inteiro longo)"})})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Message"}),(0,o.jsx)(a.td,{children:"1"}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:'Mensagem de progresso (por exemplo, "Cifrado de BLOBs na tabela Documents")'}),(0,o.jsx)(a.td,{children:"Porcentagem realizado (por exemplo, 50)"}),(0,o.jsx)(a.td,{children:"Reservado"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Encryption finished"}),(0,o.jsx)(a.td,{children:"2"}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:'Mensagen de OK (por exemplo, "Ok")'}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:"Reservado"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Error"}),(0,o.jsx)(a.td,{children:"3"}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:'Mensagem de erro (por exemplo, "Problema na tabela de dados XX: N\xe3o se proporcionou a chave de cifrado")'}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:"Reservado"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"End of execution"}),(0,o.jsx)(a.td,{children:"4"}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:'"Ok"'}),(0,o.jsx)(a.td,{children:"0"}),(0,o.jsx)(a.td,{children:"Reservado"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Warning(*)"}),(0,o.jsx)(a.td,{children:"5"}),(0,o.jsx)(a.td,{children:"Tipo de objeto"}),(0,o.jsx)(a.td,{children:"Texto de erro"}),(0,o.jsx)(a.td,{children:"Tabela ou n\xfamero de \xedndice"}),(0,o.jsx)(a.td,{children:"Reservado"})]})]})]}),"\n",(0,o.jsxs)(a.p,{children:["(*) Advert\xeancia devolvida no passo de verifica\xe7\xe3o (consulte o comando ",(0,o.jsx)(a.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"}),")."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Valor devolvido"})}),"\n",(0,o.jsx)(a.p,{children:"Rota real da pasta de destino dos arquivos originais."}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(a.p,{children:"Criptografar um arquivo de dados pela primeira vez:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$passphrase : Text\n\xa0$passphrase:=Request("Entre a frase passe")\n\xa0If(OK=1)\n\xa0\xa0//Como o arquivo de dados n\xe3o for criptografada, nenhuma chave de criptografia atual \xe9 fornecida\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(a.p,{children:"Recriptografar um arquivo de dados j\xe1 criptografado (mudar a frase passe):"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase;$newPassphrase : Text\n\xa0$passphrase:=Request("Entre a frase passe atual")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$newPassphrase:=Request("Entre a nova frasepasse")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator\n\xa0\xa0//Como o arquivo de dados for criptografado, a chave de criptografia atual deve ser fornecida\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsx)(a.p,{children:"Remover a criptografia de um arquivo de dados criptografado:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase : Text\n\xa0$passphrase:=Request("Entre a frase passe")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator\n\xa0\xa0//A nova frase passe est\xe1 estabelecida para uma string vazia para decriptografar todos os dados\n\xa0\xa0//A frase passe atual deve ser fornecida\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,o.jsx)(a.p,{children:"Re-encriptar um arquivo de dados criptografado com a chave atual (por exemplo, quando o estado de criptografia foi mudado para algumas tabelas)."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$passPhrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Entre a frase passe")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\xa0//A chave de dados agora est\xe1 no chaveiro\xa0 4D\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD")\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/docs/pt/commands/data-file-encryption-status",children:"Data file encryption status"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})]})]})}function p(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return t},a:function(){return n}});var s=r(667294);let o={},d=s.createContext(o);function n(e){let a=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);