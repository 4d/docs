"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66534"],{972107:function(e,o,a){a.r(o),a.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>l,assets:()=>i,toc:()=>m,frontMatter:()=>n});var s=JSON.parse('{"id":"commands-legacy/sql-export-database","title":"SQL EXPORT DATABASE","description":"SQL EXPORT DATABASE ( rotaPasta {; numArquivos {; tamMaxArquivos {; tamLimCampos}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-export-database.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-database","permalink":"/docs/pt/commands/sql-export-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-export-database","title":"SQL EXPORT DATABASE","slug":"/commands/sql-export-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/pt/commands/sql-execute-script"},"next":{"title":"SQL EXPORT SELECTION","permalink":"/docs/pt/commands/sql-export-selection"}}'),r=a("785893"),t=a("250065");let n={id:"sql-export-database",title:"SQL EXPORT DATABASE",slug:"/commands/sql-export-database",displayed_sidebar:"docs"},d=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,r.jsx)(o.em,{children:"rotaPasta"})," {; ",(0,r.jsx)(o.em,{children:"numArquivos"})," {; ",(0,r.jsx)(o.em,{children:"tamMaxArquivos"})," {; ",(0,r.jsx)(o.em,{children:"tamLimCampos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"rotaPasta"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:'Nome da rota da pasta de exporta\xe7\xe3o ou "" para exibir caixa de di\xe1logo de sele\xe7\xe3o de pasta'})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"numArquivos"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"M\xe1ximo n\xfamero de arquivos por pasta"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tamMaxArquivos"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tamanho m\xe1ximo dos arquivos exportados (em Kb)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tamLimCampos"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tamanho limite (em bytes) abaixo do qual os conte\xfados dos campos texto, BLOB ou Imagem s\xe3o integrados no arquivo principal"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:'O comando SQL EXPORT DATABASE exporta ao formato SQL todos os registros de todas as tabelas do banco. Em SQL, esta opera\xe7\xe3o de exporta\xe7\xe3o global \xe9 chamada "Dump".'}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": Este comando n\xe3o pode ser utilizado com uma conex\xe3o externa aberta diretamente ou atrav\xe9s de ODBC."]}),"\n",(0,r.jsxs)(o.p,{children:["Para cada tabela, o comando gera um arquivo de texto com as instru\xe7\xf5es SQL necess\xe1rias para a importa\xe7\xe3o dos dados em outro banco. Este arquivo pode ser utilizado diretamente pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/sql-execute-script",children:"SQL EXECUTE SCRIPT"})," para importar os dados em outro banco 4D."]}),"\n",(0,r.jsxs)(o.p,{children:['Os arquivos de exporta\xe7\xe3o ser\xe3o criados em uma pasta chamada "SQLExport" localizada na pasta de destino determinada pelo par\xe2metro rotaPasta. Por favor lembre que se a pasta "SQLExport" j\xe1 existe na localiza\xe7\xe3o especificada, o comando ser\xe1 substitu\xeddo sem que seja mostrada nenhuma mensagem de advert\xeancia.',(0,r.jsx)(o.br,{}),'\nSe passa uma cadeia vazia neste par\xe2metro, 4D mostra uma caixa de di\xe1logo padr\xe3o que permite ao usu\xe1rio determinar a pasta de destino. Normalmente, a caixa de di\xe1logo mostra a pasta atual do usu\xe1rio que abriu a sess\xe3o ("Meus Documentos" em Windows ou "Documents" em Mac OS).']}),"\n",(0,r.jsx)(o.p,{children:"Para cada tabela exportada, o comando realiza as seguintes a\xe7\xf5es:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"\xc9 criada uma subpasta na pasta de destino com o nome da tabela."}),"\n",(0,r.jsx)(o.li,{children:'Um arquivo texto chamado "Export.sql" \xe9 criado na subpasta. Este arquivo est\xe1 codificado em UTF-8 com BOM (marca de ordem de bytes). Cont\xe9m as ordens SQL  correspondentes aos dados exportados. Os valores dos campos est\xe3o separados por dois pontos. Pode ter menos valores que campos na tabela. Neste caso, os campos restantes se considerados NULOS.'}),"\n",(0,r.jsxs)(o.li,{children:['Se a tabela contiver campos BLOB, imagem ou texto (textos guardados externamente, em outras palavras, fora dos registros), normalmente o comando cria uma subpasta adicional chamada "BLOBS" junto ao arquivo "Export.sql" e cria tantas subpastas "BlobsX\u201D quantas sejam necess\xe1rias. Estas subpastas guardar\xe3o como arquivos separados o conte\xfado de todos os campos BLOB, imagem ou campos de texto externos dos registros da tabela. Os arquivos BLOB s\xe3o chamados "BlobXXXXX.BLOB", os arquivos texto s\xe3o chamados "TEXTXXXXXX.TXT (onde XXXXX \xe9 um n\xfamero \xfanico gerado pela aplica\xe7\xe3o). Os arquivos imagem s\xe3o chamados PICTXXXXX.ZZZZ (onde XXXXX \xe9 um n\xfamero \xfanico gerado pela aplica\xe7\xe3o e ZZZZ \xe9 a extens\xe3o). Quando fo poss\xedvel, as imagens s\xe3o exportadas a seu formato nativo de origem com a extens\xe3o correspondente ao tipo de imagem (.jpg, .png, etc.). Se a exporta\xe7\xe3o n\xe3o for poss\xedvel no formato nativo, as imagens s\xe3o exportadas no formato 4D interno com a extens\xe3o .4PCT.\n',(0,r.jsx)(o.strong,{children:"Nota:"})," Este funcionamento difere ao executar ",(0,r.jsx)(o.strong,{children:"SQL EXPORT DATABASE"}),' desde um 4D em modo remoto. Neste contexto, os dados a armazenar do lado externo s\xe3o inclu\xeddos automaticamente no arquivo "Export.sql".']}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Se passa o par\xe2metro ",(0,r.jsx)(o.em,{children:"numArquivos"}),', o comando criar\xe1 tantas subpastas "BlobsX" como seja necess\xe1rio de maneira que cada uma delas n\xe3o contenha mais que o valor ',(0,r.jsx)(o.em,{children:"numArquivos BLOB"}),", de imagens ou textos externos. Normalmente, se o par\xe2metro ",(0,r.jsx)(o.em,{children:"numArquivos"})," for omitido, o comando limita o n\xfamero de arquivos a 200. Se passa 0, cada subpasta conter\xe1 ao menos um arquivo."]}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro ",(0,r.jsx)(o.em,{children:"tamMaxArquivo"}),' permite definir um limite de tamanho (em KB) para cada arquivo "Export.sql" criado no disco. Quando o tamanho do arquivo de exporta\xe7\xe3o alcan\xe7a o valor definido em ',(0,r.jsx)(o.em,{children:"tamMaxArquivo"}),', 4D para de escrever em registros, fecha o arquivo e cria um novo arquivo chamado "ExportX.sql" (onde X representa o n\xfamero de sequ\xeancia) junto ao anterior. Note que este \xe9 um limite te\xf3rico: o tamanho atual dos arquivos "ExportX.sql" supera o valor definido por ',(0,r.jsx)(o.em,{children:"tamMaxArquivo"})," porque o arquivo apenas \xe9 fechado depois do registro que estava sendo exportado quando o limite alcan\xe7ado tenha sido escrito completamente (os conte\xfados dos registros n\xe3o s\xe3o divididos). O tamanho m\xednimo aceito \xe9 100 KB e o valor m\xe1ximo (valor padronizado) \xe9 100.000 (10MB)."]}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"tamLimiteCampos"}),' permite definir um tamanho limite abaixo do qual o conte\xfado de um campo BLOB, Imagem, ou texto externo ser\xe1 integrado ao arquivo principal "Export.sql" ao inv\xe9s de ser guardado como um arquivo separado. O prop\xf3sito deste par\xe2metro \xe9 otimizar as opera\xe7\xf5es de exporta\xe7\xe3o limitando o n\xfamero de subpastas e de arquivos criados no disco.',(0,r.jsx)(o.br,{}),"\nEste par\xe2metro deve ser expresso em bytes. Por exemplo, se passa 1000, todos os campos BLOB, imagem ou texto externo que contenham dados de um tamanho inferior ou igual a 1000 bytes ser\xe3o integrados ao arquivo de exporta\xe7\xe3o principal."]}),"\n",(0,r.jsxs)(o.p,{children:["Note que os dados dos campos bin\xe1rios (BLOB e Imagem) integrados ao arquivo de exporta\xe7\xe3o s\xe3o escritos em formato hexadecimal, no formato X'0f20' (nota\xe7\xe3o hexadecimal SQL padr\xe3o, ver ",(0,r.jsx)(o.em,{children:"literal"}),"). Este formato \xe9 automaticamente compat\xedvel com o motor SQL de 4D.",(0,r.jsx)(o.br,{}),"\nNormalmente o par\xe2metro ",(0,r.jsx)(o.em,{children:"tamLimiteCampos"})," \xe9 omitido, os campos BLOB, Imagem e texto externos sempre s\xe3o exportados em forma de arquivos externos, independentemente de seu tamanho.",(0,r.jsx)(o.br,{}),"\nNo arquivo de exporta\xe7\xe3o, podem haver menos valores que campos na tabela. Neste caso, os campos vazios ser\xe3o considerados como sendo NULL. Tamb\xe9m pode passar o valor NULL em um campo."]}),"\n",(0,r.jsx)(o.p,{children:"Se a exporta\xe7\xe3o for realizada corretamente, a vari\xe1vel OK assume o valor 1. Do contr\xe1rio, assume o valor 0."}),"\n",(0,r.jsx)(o.h5,{id:""}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"1065"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return n}});var s=a(667294);let r={},t=s.createContext(r);function n(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);