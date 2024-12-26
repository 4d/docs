"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36742"],{3472:function(e,n,d){d.r(n),d.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/data-file-encryption-status","title":"Data file encryption status","description":"Data file encryption status ( rotaEstrutura , rotaDados ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/data-file-encryption-status.md","sourceDirName":"commands-legacy","slug":"/commands/data-file-encryption-status","permalink":"/docs/pt/commands/data-file-encryption-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdata-file-encryption-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"data-file-encryption-status","title":"Data file encryption status","slug":"/commands/data-file-encryption-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Data Security","permalink":"/docs/pt/category/data-security"},"next":{"title":"Decrypt data BLOB","permalink":"/docs/pt/commands/decrypt-data-blob"}}'),r=d("785893"),s=d("250065");let a={id:"data-file-encryption-status",title:"Data file encryption status",slug:"/commands/data-file-encryption-status",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data file encryption status"})," ( rotaEstrutura , rotaDados ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rotaEstrutura"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Rota do arquivo de estrutura 4D a ser verificado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rotaDados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Rota do arquivo de dados 4D a ser verificado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Informa\xe7\xe3o sobre o estado de criptografia do arquivo de dados e de cada tabela"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"Data file encryption status"})," devolve um objeto que fornece o estado de cifrado para o arquivo de dados designado pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"rotaEstruta"})," e ",(0,r.jsx)(n.em,{children:"rotaDados"}),". Tamb\xe9m se proporciona o estado de cada tabela."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rotaDados"})," designa um arquivo de dados 4D (.4dd). Deve corresponder ao arquivo de estrutura definido pelo par\xe2metro ",(0,r.jsx)(n.em,{children:"rotaEstrut"}),". Pode designar o arquivo de estrutura atual, mas o arquivo de dados n\xe3o deve ser o arquivo atual (aberto)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," utilize o m\xe9todo ",(0,r.jsx)(n.em,{children:"ds.encryptionStatus( )"})," para determinar o estado de cifrado do arquivo de dados atual."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valor devolvido"})}),"\n",(0,r.jsx)(n.p,{children:"O objeto devolvido cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Propriedade"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isEncrypted"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"True se o arquivo de dados estiver cifrado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"keyProvided"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"True se a chave de cifrado que coincidir com o arquivo de dados cifrados estiver no chaveiro 4D (*)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tables"}),(0,r.jsx)(n.td,{children:"Objeto"}),(0,r.jsxs)(n.td,{children:["Objeto que cont\xe9m tantas propriedades como tabelas ",(0,r.jsx)(n.em,{children:"criptografadas"})," oy ",(0,r.jsx)(n.em,{children:"criptograf\xe1veis"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["<",(0,r.jsx)(n.em,{children:"table name"}),">"]}),(0,r.jsx)(n.td,{children:"Objeto"}),(0,r.jsx)(n.td,{children:"Tabela Encriptada ou Criptograf\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"Nome da tabela"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"num"}),(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsx)(n.td,{children:"N\xfamero de tabela"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isEncryptable"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"True se a tabela se declara criptograf\xe1vel no arquivo de estrutura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isEncrypted"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"True se os registros da tabela estiverem cifrados no arquivo de dados"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) A chave de criptografia pode ser fornecida:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["previamente:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"antes de abrir este arquivo de dados, utilizando um dispositivo conectado,"}),"\n",(0,r.jsxs)(n.li,{children:["com o comando ",(0,r.jsx)(n.em,{children:"ds.provideDataKey( )"})," quando se abre este arquivo de dados,"]}),"\n",(0,r.jsxs)(n.li,{children:["depois de abrir o arquivo de dados, con o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/discover-data-key",children:"Discover data key"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/register-data-key",children:"Register data key"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser conhecer o estado de criptografia de um arquivo de dados que corresponda ao arquivo de estrutura atual:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0\n\xa0$status:=Data file encryption status(Structure file;"D:\\\\Invoices\\\\Data_2019\\\\Invoices.4dd")\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not($status.isEncrypted))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("O arquivo de dados n\xe3o est\xe1 criptografado")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&(Not($status.keyProvided))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("O arquivo de dados est\xe1 criptografado e a chave de cifrado n\xe3o est\xe1 no chaveiro. N\xe3o ter\xe1 acesso aos dados cifrados.")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&$status.keyProvided)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("O arquivo de dados est\xe1 cifrado e a chave de cifrado est\xe1 no chaveiro. Ter\xe1 acesso aos datos cifrados.")\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/encrypt-data-file",children:"Encrypt data file"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1609"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return a}});var t=d(667294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);