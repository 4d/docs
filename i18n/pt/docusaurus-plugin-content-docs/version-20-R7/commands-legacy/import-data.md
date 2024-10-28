---
id: import-data
title: IMPORT DATA
slug: /commands/import-data
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT DATA.Syntax-->**IMPORT DATA** ( *nomeArquivo* {; *projeto* {; *}} )<!-- END REF-->
<!--REF #_command_.IMPORT DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Rota de acesso do arquivo importado |
| projeto | Text, Blob | &#8594;  | Conteúdo do projeto importado |
| &#8592; | Novos conteúdos do projeto importado (se o parâmetro * foi passado) |
| * | Operador | &#8594;  | Exibir a caixa de diálogo importada e atualiza o projeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.IMPORT DATA.Summary-->O comando IMPORT DATA importa os dados localizados no arquivo *nomeArquivo* 4D pode importar os dados nos seguintes formatos: Texto, Texto de longitude fixa, XML, SYLK, DIF, DBF (dBase) e 4D.<!-- END REF--> 

Se passa uma string vazia em *nomeArquivo*, IMPORT DATA mostra a caixa de diálogo de abertura de arquivos, permitindo ao usuário definir o nome, tipo, e localização do arquivo a importar. Ao aceitar a caixa de diálogo, a variável sistema Documento contém a rota de acesso e o nome do arquivo. Se o usuário clicar em **Cancelar**, detém a execução do comando a variável sistema OK toma o valor 0.

O parâmetro opcional *projeto* lhe permite utilizar um projeto para importar dados. Quando passa este parâmetro, a importação é realizada diretamente, sem intervenção do usuário (a menos que utilize la opção \*, ver a continuação). Se não passa este parâmetro, aparece a caixa de diálogo de importação. O usuário pode definir seus parâmetros de importação ou carregar um projeto de importação existente. 

Um projeto de importação contém todos os parâmetros de importação, tais como as tabelas e campos nas quais importar, os delimitadores a utilizar, etc. No parâmetro *projeto*, pode passar uma variável Texto com XML ou uma variável Texto com uma referência a um elemento DOM pre existente ou um BLOB. Os projetos podem ser criados por programação (projetos com formato XML unicamente) ou carregando parâmetros definidos previamente na caixa de diálogo de importação. No último caso, tem duas soluções disponíveis:

* Utilize o comando IMPORT DATA com um parâmetro *projeto*vazio e o parâmetro opcional *\**, depois salve o parâmetro *projeto* resultante em um campo Texto ou BLOB (ver a continuação). Esta solução lhe permite guardar o projeto com o arquivo de dados.
* Salve o projeto no disco, depois carregue-o, utilizando por exemplo o comando [DOM Parse XML source](dom-parse-xml-source.md), e passe sua referencia no parâmetro *projeto*.
**Nota de compatibilidad**e: a partir da versão 12 de 4D, os projetos de importação são codificados em XML. 4D pode abrir os projetos de importação gerados com as versões anteriores de 4D (formato BLOB), entretanto os projetos criados a partir da v12 não podem ser abertos com uma versão 11 ou anterior. Recomendamos utilizar variáveis Texto para manipular os arquivos de importação.   
  
O parâmetro opcional *\**, se for especificado, faz com que apareça a caixa de diálogo de importação com os parâmetros definidos em *projeto*. Esta característica lhe permite utilizar um projeto predefinido, enquanto tem ainda a possibilidade de modificar um ou mais parâmetros. Além disso, o parâmetro *projeto* contém, depois de fechar a caixa de diálogo de importação, os parâmetros do “novo” projeto. Então pode armazenar o novo projeto em um campo BLOB, em disco, etc. 

Se a importação foi exitosa, a variável sistema OK toma o valor 1.

**Nota:** consulte o comando EXPORT DATA para ver um exemplo sobre a definição de um projeto vazio. 

#### Variáveis e conjuntos do sistema 

Se o usuário clicar em **Cancelar** na caixa de diálogo de salvar arquivos ou de importação, a variável sistema OK toma o valor 0\. Se a importação foi exitosa, a variável sistema OK toma o valor 1.

#### Ver também 

[EXPORT DATA](export-data.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  