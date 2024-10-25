---
id: sql-export-database
title: SQL EXPORT DATABASE
slug: /commands/sql-export-database
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT DATABASE.Syntax-->**SQL EXPORT DATABASE** ( *rotaPasta* {; *numArquivos* {; *tamMaxArquivos* {; *tamLimCampos*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT DATABASE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaPasta | Text | &#8594;  | Nome da rota da pasta de exportação ou "" para exibir caixa de diálogo de seleção de pasta |
| numArquivos | Integer | &#8594;  | Máximo número de arquivos por pasta |
| tamMaxArquivos | Integer | &#8594;  | Tamanho máximo dos arquivos exportados (em Kb) |
| tamLimCampos | Integer | &#8594;  | Tamanho limite (em bytes) abaixo do qual os conteúdos dos campos texto, BLOB ou Imagem são integrados no arquivo principal |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL EXPORT DATABASE.Summary-->O comando SQL EXPORT DATABASE exporta ao formato SQL todos os registros de todas as tabelas do banco.<!-- END REF--> Em SQL, esta operação de exportação global é chamada "Dump".

**Nota**: Este comando não pode ser utilizado com uma conexão externa aberta diretamente ou através de ODBC.

Para cada tabela, o comando gera um arquivo de texto com as instruções SQL necessárias para a importação dos dados em outro banco. Este arquivo pode ser utilizado diretamente pelo comando [SQL EXECUTE SCRIPT](sql-execute-script.md) para importar os dados em outro banco 4D.

Os arquivos de exportação serão criados em uma pasta chamada "SQLExport" localizada na pasta de destino determinada pelo parâmetro rotaPasta. Por favor lembre que se a pasta "SQLExport" já existe na localização especificada, o comando será substituído sem que seja mostrada nenhuma mensagem de advertência.  
Se passa uma cadeia vazia neste parâmetro, 4D mostra uma caixa de diálogo padrão que permite ao usuário determinar a pasta de destino. Normalmente, a caixa de diálogo mostra a pasta atual do usuário que abriu a sessão ("Meus Documentos" em Windows ou "Documents" em Mac OS).

Para cada tabela exportada, o comando realiza as seguintes ações:

* É criada uma subpasta na pasta de destino com o nome da tabela.
* Um arquivo texto chamado "Export.sql" é criado na subpasta. Este arquivo está codificado em UTF-8 com BOM (marca de ordem de bytes). Contém as ordens SQL  correspondentes aos dados exportados. Os valores dos campos estão separados por dois pontos. Pode ter menos valores que campos na tabela. Neste caso, os campos restantes se considerados NULOS.
* Se a tabela contiver campos BLOB, imagem ou texto (textos guardados externamente, em outras palavras, fora dos registros), normalmente o comando cria uma subpasta adicional chamada "BLOBS" junto ao arquivo "Export.sql" e cria tantas subpastas "BlobsX” quantas sejam necessárias. Estas subpastas guardarão como arquivos separados o conteúdo de todos os campos BLOB, imagem ou campos de texto externos dos registros da tabela. Os arquivos BLOB são chamados "BlobXXXXX.BLOB", os arquivos texto são chamados "TEXTXXXXXX.TXT (onde XXXXX é um número único gerado pela aplicação). Os arquivos imagem são chamados PICTXXXXX.ZZZZ (onde XXXXX é um número único gerado pela aplicação e ZZZZ é a extensão). Quando fo possível, as imagens são exportadas a seu formato nativo de origem com a extensão correspondente ao tipo de imagem (.jpg, .png, etc.). Se a exportação não for possível no formato nativo, as imagens são exportadas no formato 4D interno com a extensão .4PCT.
**Nota:** Este funcionamento difere ao executar **SQL EXPORT DATABASE** desde um 4D em modo remoto. Neste contexto, os dados a armazenar do lado externo são incluídos automaticamente no arquivo "Export.sql".   
  
Se passa o parâmetro *numArquivos*, o comando criará tantas subpastas "BlobsX" como seja necessário de maneira que cada uma delas não contenha mais que o valor *numArquivos BLOB*, de imagens ou textos externos. Normalmente, se o parâmetro *numArquivos* for omitido, o comando limita o número de arquivos a 200\. Se passa 0, cada subpasta conterá ao menos um arquivo.  
  
O parâmetro *tamMaxArquivo* permite definir um limite de tamanho (em KB) para cada arquivo "Export.sql" criado no disco. Quando o tamanho do arquivo de exportação alcança o valor definido em *tamMaxArquivo*, 4D para de escrever em registros, fecha o arquivo e cria um novo arquivo chamado "ExportX.sql" (onde X representa o número de sequência) junto ao anterior. Note que este é um limite teórico: o tamanho atual dos arquivos "ExportX.sql" supera o valor definido por *tamMaxArquivo* porque o arquivo apenas é fechado depois do registro que estava sendo exportado quando o limite alcançado tenha sido escrito completamente (os conteúdos dos registros não são divididos). O tamanho mínimo aceito é 100 KB e o valor máximo (valor padronizado) é 100.000 (10MB).  
  
O parâmetro opcional *tamLimiteCampos* permite definir um tamanho limite abaixo do qual o conteúdo de um campo BLOB, Imagem, ou texto externo será integrado ao arquivo principal "Export.sql" ao invés de ser guardado como um arquivo separado. O propósito deste parâmetro é otimizar as operações de exportação limitando o número de subpastas e de arquivos criados no disco.  
Este parâmetro deve ser expresso em bytes. Por exemplo, se passa 1000, todos os campos BLOB, imagem ou texto externo que contenham dados de um tamanho inferior ou igual a 1000 bytes serão integrados ao arquivo de exportação principal.  
  
Note que os dados dos campos binários (BLOB e Imagem) integrados ao arquivo de exportação são escritos em formato hexadecimal, no formato X'0f20' (notação hexadecimal SQL padrão, ver *literal*). Este formato é automaticamente compatível com o motor SQL de 4D.  
Normalmente o parâmetro *tamLimiteCampos* é omitido, os campos BLOB, Imagem e texto externos sempre são exportados em forma de arquivos externos, independentemente de seu tamanho.  
No arquivo de exportação, podem haver menos valores que campos na tabela. Neste caso, os campos vazios serão considerados como sendo NULL. Também pode passar o valor NULL em um campo.  
  
Se a exportação for realizada corretamente, a variável OK assume o valor 1\. Do contrário, assume o valor 0.

##### 

**Nota:** Este comando não é compatível com campos tipo Objeto

#### Ver também 

[SQL EXPORT SELECTION](sql-export-selection.md)  