---
id: verify-data-file
title: VERIFY DATA FILE
slug: /commands/verify-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY DATA FILE.Syntax-->**VERIFY DATA FILE** ( *endEstrutura* ; *endDados* ; *objetos* ; *opçoes* ; *metodo* {; *arrayTabelas* {; *arrayCampos*}} )<!-- END REF-->
<!--REF #_command_.VERIFY DATA FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| endEstrutura | Text | &#8594;  | Endereço do arquivo de estrutura a ser verificado |
| endDados | Text | &#8594;  | Endereço do arquivo de dados a ser verificado |
| objetos | Integer | &#8594;  | Objetos a serem verificados |
| opçoes | Integer | &#8594;  | Opções de verificação |
| metodo | Text | &#8594;  | Nome do método 4D de retrochamada |
| arrayTabelas | Integer array | &#8594;  | Números de tabelas a serem verificadas |
| arrayCampos | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Número de índices a serem verificados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VERIFY DATA FILE.Summary-->O comando VERIFY DATA FILE\[#descv\] realiza uma verificação estrutural dos objetos contidos no arquivo de dados 4D criado por *endereçoEstrutura* e *endereçoDados*.<!-- END REF-->\[#descv\]

**Nota:** para maiores informações sobre o processo de verificação de dados, consulte o Manual de Desenho. endereçoEstrutura seleciona o arquivo de estrutura (compilado ou não) associado com o arquivo de dados a ser verificado. Pode se tratar do arquivo de estrutura aberto ou de qualquer outro arquivo de estrutura. Você deve passar um nome de endereço completo, expressado com a sintaxe do sistema operacional. Também pode passar uma string vazia, neste caso aparece uma caixa de diálogo padrão de abertura de arquivos que permite ao usuário selecionar o arquivo de estrutura a ser utilizado.

*endereçoDados* seleciona um arquivo de dados 4D (.4DD). Deve corresponder ao arquivo de estrutura definido pelo parâmetro *endereçoEstrutura*. Atenção, você pode selecionar o arquivo de estrutura atual mas o arquivo de dados não deve ser o arquivo atual (aberto). Para verificar se o arquivo de dados está aberto, utilize o comando [VERIFY CURRENT DATA FILE](verify-current-data-file.md). Se você tenta verificar o arquivo de dados atual com o comando VERIFY DATA FILE, é gerado um erro.

O arquivo de dados selecionado é aberto em modo somente leitura. Você deve ter certeza que nenhuma aplicação acesse a este arquivo em modo escrita, caso contrário os resultados da verificação poderiam ser distorcidos.

No parâmetro *endereçoDados*, é possível passar uma cadeia vazia, um nome de arquivo ou um endereço de acesso completo, expressado na sintaxe do sistema operacional. Se você passar uma cadeia vazia, aparecerá a caixa de diálogo padrão de abertura de arquivos de modo que o usuário possa especificar o arquivo a ser revisado (note que neste caso, não é possível selecionar o arquivo de dados atual). Se você passar somente um nome de arquivo de dados, 4D o buscará no mesmo nível que o arquivo de estrutura especificado.

 O parâmetro *objetos* é utilizado para selecionar os tipos de objetos a serem verificados. Você pode verificar os tipos de objetos: registros e índices. Você pode utilizar as seguintes constantes, que se encontram no tema “*Manutenção do arquivo de dados*”:  
  
  
| Constante               | Tipo          | Valor  | Comentário                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Do not create log file  | Inteiro longo | 16384  | Geralmente, esse comando cria um arquivo de histórico em formato XML (veja o final da descrição do comando). Você pode cancelar esta operação a partir desta opção.                                                                                                                                                                                      |
| Timestamp log file name | Inteiro longo | 262144 | Quando esta opção for passada, o nome do arquivo de histórico gerado conterá a data e a hora de sua criação; como resulado, não substituirá nenhum arquivo de histórico gerado anteriormente. Como padrão, se esta opção não for passada, os nomes de arquivo de histórico não terão uma timestamp e cada novo arquivo gerado vai substituir o anterior. |
  
  
Geralmente, o comando VERIFY DATA FILE cria um arquivo de histórico em formato XML (por favor, veja o final da descrição deste comando). Você pode cancelar esta operação passando esta opção. Para criar o arquivo de histórico, passe 0 em *opçoes*.  
  
O parâmetro *método* permite definir um método de callback que será chamado regularmente durante a verificação. Se você passar uma cadeia vazia,nenhum método é chamado. Se o método passado não existe, a verificação não é realizada, é gerado um erro e a variável OK toma o valor 0\. Quando se chama, este método, você recebe até 5 parâmetros dependendo do tipo de evento que origina a chamada (ver a tabela de chamadas). É imperativo declarar estes parâmetros no método: 

| \- $1 | Inteiro longo | Tipo de mensagem (ver tabela) |
| ----- | ------------- | ----------------------------- |
| \- $2 | Inteiro longo | Tipo de objeto                |
| \- $3 | Text          | Mensagem                      |
| \- $4 | Inteiro longo | Número de tabela              |
| \- $5 | Inteiro longo | Reservado                     |

A tabela a seguir descreve o conteúdo dos parâmetros em função do tipo de evento:

| **Evento**                | **$1 (Inteiro longo)** | **$2 (Inteiro longo)** | **$3 (Texto)**            | **$4 (Inteiro longo)**     | **$5 (Inteiro longo)** |
| ------------------------- | ---------------------- | ---------------------- | ------------------------- | -------------------------- | ---------------------- |
| Mensagem                  | 1                      | 0                      | Mensagem de progresso     | Porcentagem realizado      | Reservado              |
| Fim da verificação (\*\*) | 2                      | Tipo de objeto (\*\*)  | Texto da mensagem OK      | Número de tabela ou índice | Reservado              |
| Error                     | 3                      | Tipo de objeto (\*\*)  | Texto de mensagem de erro | Número de tabela ou índice | Reservado              |
| Fim de execução           | 4                      | 0                      | DONE                      | 0                          | Reservado              |
| Advertência               | 5                      | Tipo de objeto (\*\*)  | Texto de mensagem de erro | Número de tabela ou índice | Reservado              |
| mensaje                   | número                 |                        |                           |                            |                        |
  
  
(\*) O evento Fim da verificação ($2=1) não é devolvido nunca quando o modo de verificação for Verify All. Só se utiliza em modo Verify Records ou Verify Indexes.  
(\*\*)Tipo de objeto: quando um objeto for verificado, é possível enviar uma mensagem "finalizado" ($1=2), de erro ($1=3) ou de advertência ($1=5). O tipo de objeto retornado em $2 pode ser um dos seguintes: 
* 0 = indeterminado
* 4 = registro
* 8 = índice
* 16 = objeto estrutura (controle preliminar do arquivo de dados).
 Caso particular: quando $4 = 0 para $1=2, 3 ou 5, a mensagem não se refere a uma tabela ou índice, e sim a um arquivo de dados em seu conjunto. O método de callback também deve retornar um valor $0 (Inteiro longo), permitindo controlar a execução da operação: 
* Se $0 = 0, a operação continua normalmente
* Se $0 = -128, a operação para sem que seja gerado um erro
* Se $0 = outro valor, a operação para e o valor passado em $0 é retornado como o número de erro. Este erro pode ser interceptado por um método de gestão de erros.
**Nota:** Não é possível interromper a execução via $0 depois de que o evento tenha sido gerado Fim de execução ($4=1). 

Dois arrays opcionais também pode ser utilizados por este comando:

* O array *arrayTabelas* contém os números das tabelas cujos registros serão verificados. Permite limitar a verificação de certas tabelas. Se este parâmetro não se passa ou se o array está vazio e o parâmetro *objetos* contém Verify Records, todas as tabelas serão verificadas.
* O *arrayCampos* contém os números dos campos indexados que devem ser verificados. Se este parâmetro não for passado ou se o array estiver vazio e o parâmetro *objetos* contém Verify Records, todos os índices serão verificados. O comando ignora os campos que não estão indexados. Se um campo contém vários índices, todos são verificados. Se um campo forma parte de um índice composto, o total do índice é verificado.  
Você deve passar um array 2D em *arrayCampos*. Para cada linha do array:  
\- O elemento {0} contém o número da tabela,  
\- Os outros elementos {1...x} contém os números dos campos.

Por padrão, o comando VERIFY DATA FILE cria um arquivo de histórico em formato XML (se você não passou a opção Do not create log file, veja o parâmetro *opçoes*). Seu nome está baseado no arquivo de dados e está localizado junto a este arquivo. Por exemplo, para um arquivo de dados chamado “data.4dd,” o arquivo de histórico será chamado “data\_verify\_log.xml.”

Se tiver passado a opção nome Timestamp arquivo histórico, o nome do arquivo de histórico inclui a data e a hora de sua criação na forma "AAAA-MM-DD HH-MM-SS", que nos dá, por exemplo: “myDB\_Verify\_Log\_2015-09-27 15-20-35.xml”. Isto significa que cada novo arquivo de histórico não substitui ao anterior, mas poderia pedir ação manual posterior para eliminar arquivos desnecessários.  
Independentemente da opção selecionada, logo que gerar um arquivo de histórico, sua rota se devolve na variável de sistema Document depois da execução de comando.

#### Exemplo 1 

Simples verificação dos dados e dos índices:

```4d
 VERIFY DATA FILE($NomEstrutura;$NomData;Verify indexes+Verify records;Do not create log file;"")
```

#### Exemplo 2 

Verificação completa com arquivo de histórico:

```4d
 VERIFY DATA FILE($NomEstrutura;$NomData;Verify All No Callback;0;"")
```

#### Exemplo 3 

Verificação somente dos registros:

```4d
 VERIFY DATA FILE($NomEstrutura;$NomData;Verify records;0;"")
```

#### Exemplo 4 

Verificação dos registros das tabelas 3 e 7 somente:  

```4d
 ARRAY LONGINT($arrTablaNums;2)
 $arrTableNums{1}:=3
 $arrTableNums{2}:=7
 VERIFY DATA FILE($NomeEstrutura;$NomeData;Verify records;0;"FollowScan";$arrTableNums)
```

#### Exemplo 5 

Verificação de índices específicos (índice do campo 1 da tabela 4 e índice dos campos 2 e 3 da tabela 5):

```4d
 ARRAY LONGINT($arrTablaNums;0) //não utilizado, mas obrigatório
 ARRAY LONGINT($arrIndex;2;0) //2 linhas (colunas adicionadas depois)
 $arrIndex{1}{0}:=4 // número de tabela no elemento 0
 APPEND TO ARRAY($arrIndex{1};1) //número do primeiro campo a verificar
 $arrIndex{2}{0}:=5 // número da tabela no elemento 0
 APPEND TO ARRAY($arrIndex{2};2) // número do primeiro campo a ser verificado
 APPEND TO ARRAY($arrIndex{2};3) // número do segundo campo a ser verificado
 VERIFY DATA FILE($NomEstrutura;$NomData;Verify indexes;0;"FollowScan";$arrTablaNums;$arrIndex)
```

#### Exemplo 6 

Verificar o arquivo de dados, criar e exibir o arquivo de histórico:

```4d
 VERIFY DATA FILE(Structure file;Data file;Verify all;0;"")
 SHOW ON DISK(File(Verification log file).platformPath)
```

#### Variáveis e conjuntos do sistema 

Se o método de callback não existir, a verificação não é efetuada, é gerado um erro e a variável sistema OK recebe o valor 0\. Se um arquivo de log histórico for erado, seu nome de caminho completo é retornado na variável de sistema Document.  

#### Ver também 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  