---
id: compact-data-file
title: Compact data file
slug: /commands/compact-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Compact data file.Syntax-->**Compact data file** ( *endEstrutura* ; *endDados* {; *pastaArquivo* {; *opçao* {; *metodo*}}} ) : Text<!-- END REF-->
<!--REF #_command_.Compact data file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| endEstrutura | Text | &#8594;  | Endereço de acesso ao arquivo de estrutura |
| endDados | Text | &#8594;  | Endereço de acesso ao arquivo de dados |
| pastaArquivo | Text | &#8594;  | Endereço de acesso a pasta onde será colocado o arquivo de dados original |
| opçao | Integer | &#8594;  | Opções de compactação |
| metodo | Text | &#8594;  | Nome do método 4D de retrochamada |
| Resultado | Text | &#8592; | Endereço de acesso completo à pasta que contém o arquivo de dados original |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Compact data file.Summary-->O comando **Compact data file** \[# descv\] compacta o arquivo de dados designado pelo parâmetro *endereçoDados* associado com o arquivo de estrutura *endereçoEstrutura*.<!-- END REF--> \[#/ descv\] Para mais informações sobre compactação, consulte o manual de Design. 

Para assegurar a continuidade da operação do banco de dados, os novos dados de arquivos compactados automaticamente substituem o arquivo original. Por razões de segurança, o arquivo original não é modificado e é movido para uma pasta especial chamada "Replaced files (compacting) AAAA-MM-DD HH-MM-SS", onde AAAA-MM-DD HH-MM-SS representa a data e hora do backup. Por exemplo: "Replaced files (compacting) 2007/09/27 15-20-35"

O comando retorna o caminho completo da pasta realmente criado para armazenar os dados do arquivo original. Este comando só pode ser executado a partir de 4D (modo local) ou 4D Server (stored procedure). Os arquivo de dados a ser compactado deve corresponder à estrutura do arquivo designado pela *endereçoEstrutura*. Além disso, o arquivo de dados não deve ser aberto quando o comando é executado, caso contrário um erro é gerado.

Se ocorrer um erro durante o processo de compactação, os arquivos originais são mantidos em sua posição inicial. Se um arquivo de índice (arquivo .4DIndx ) é associado com o arquivo de dados, ele também é compactado. Tal como acontece com os dados, o arquivo original está salvo e a nova versão compactada substitui a anterior.

* No parâmetro *endereçoEstrutura*, passe o caminho completo da estrutura do arquivo associado ao arquivo de dados que você deseja compactar. Esta informação é necessária para o processo de compactação. O caminho deve ser expresso na sintaxe do sistema operacional. Você também pode passar uma string vazia, neste caso, a caixa de diálogo padrão de abrir arquivos aparece para que você possa designar a estrutura do arquivo a ser utilizado.
* No parâmetro *endereçoDados*, você pode passar uma string vazia, um nome de arquivo ou um caminho completo, expresso na sintaxe do sistema operacional. Se você passar uma string vazia, a caixa de diálogo padrão de abrir arquivos aparece para que o usuário possa selecionar os dados do arquivo a ser compactado. Este arquivo deve corresponder à estrutura do arquivo definido no parâmetro *endereçoEstrutura*. Se você só passar o nome do arquivo de dados, 4D vai procurá-la no mesmo nível da estrutura de arquivo.
* O parâmetro opcional pastaArquivo pode ser usado para especificar a localização da pasta "Replaced files (compacting) DateTime" destinada a receber as versões originais dos arquivos de dados, bem como todos os arquivos de índice.  
O comando retorna o caminho completo da pasta criada.  
\- Se você omitir esse parâmetro, os arquivos originais são automaticamente colocados em na pasta "Replaced files (compacting) DateTime" que é criada ao lado da estrutura de arquivo.  
\- Se você passar uma string vazia, uma caixa de diálogo padrão de Abrir pasta irá aparecer para que o usuário possa especificar a localização da pasta a ser criada.  
\- Se você passar um endereço (expresso na sintaxe do sistema operacional), o comando vai criar uma pasta "Replaced files (compacting) DateTime" neste local.
* O parâmetro opcional *opções* é usado para definir várias opções de compactação. Para fazer isso, use as seguintes constantes, encontradas no tema *Manutenção do arquivo de dados*. Você pode passar várias opções, combinando-as:  

| Constante               | Tipo          | Valor  | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| ----------------------- | ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Compact address table   | Inteiro longo | 131072 | Forçar a reescrever os registros de endereço tabela (compactação lenta). Se você apenas passar esta opção, 4D ativa automaticamente a opção "Atualizar Registros '. Note que neste caso, os números de registro são reescritos.                                                                                                                                                                                                                                                          |  
| Create process          | Inteiro longo | 32768  | Quando se passa esta opção, a compactação será assincrônica e deverá administrar os resultados utilizando o método de retrochamada (ver a continuação). 4D não mostrará a barra de progresso (é possível fazer isso através do método de retrochamada). A variável sistema OK toma o valor 1 se o processo for lançado corretamente e 0 em todos os outros casos. Quando não se passa esta opção, a variável OK toma o valor 1 se a compactação se realiza corretamente, do contrário 0. |  
| Do not create log file  | Inteiro longo | 16384  | Geralmente, esse comando cria um arquivo de histórico em formato XML (veja o final da descrição do comando). Você pode cancelar esta operação a partir desta opção.                                                                                                                                                                                                                                                                                                                      |  
| Timestamp log file name | Inteiro longo | 262144 | Quando esta opção for passada, o nome do arquivo de histórico gerado conterá a data e a hora de sua criação; como resulado, não substituirá nenhum arquivo de histórico gerado anteriormente. Como padrão, se esta opção não for passada, os nomes de arquivo de histórico não terão uma timestamp e cada novo arquivo gerado vai substituir o anterior.                                                                                                                                 |  
| Update records          | Inteiro longo | 65536  | Força a reescrita de todos os registros após a atual definição de campos na estrutura.                                                                                                                                                                                                                                                                                                                                                                                                   |
* O parâmetro metodo é usado para definir um método de callback que será chamado com durante a compactação, se a opção Create process for passada. Caso contrário, o método de callback nunca é chamado. Para obter mais informações sobre este método, consulte a descrição do comando [VERIFY DATA FILE](verify-data-file.md).

Por padrão, o comando **Compact data file** cria um arquivo de log no formato XML (se você não tiver passado a opção Do not create log file, consulte o parâmetro opções). Seu nome é baseado no arquivo de dados e é colocado próximo a esse arquivo. Por exemplo, para um arquivo de dados chamado "data.4dd", o arquivo de log será nomeado "data\_compact\_log.xml"

Se tiver passado a opção Timestamp o nome do arquivo de histórico inclui a data e a hora de sua criação na forma "AAAA-MM-DD HH-MM-SS", o que nos dá, por exemplo: “myDB\_Compact\_Log\_2015-09-27 15-20-35.xml”. Isto significa que cada novo arquivo de histórico não substitui ao anterior, mas poderia exigir ação manual posterior para eliminar arquivos desnecessários. Independentemente da opção selecionada, logo que for gerado um arquivo de histórico, sua trajetória se devolve na variável sistema Document depois da execução do comando.

#### Exemplo 

O exemplo a seguir (Windows) efetua a compactação de um arquivo de dados:

```4d
 $arquivoEstrutura:=Structure file
 $arquivoDados:="C:\Bancos\Faturas\Janeiro\Faturas.4dd"
 $arquivoOrig:="C:\Bancos\Faturas\Arquivos\Janeiro\"
 $pastaArqu:=Compact data file($arquivoEstrutura;$arquivoDados;$arquivoOrig)
```

#### Variáveis e conjuntos do sistema 

Se a operação de compactação foi realizada corretamente, a variável sistema OK recebe o valor 1, caso contrário, recebe o valor 0\.   
Se um arquivo de histórico for gerado, seu nome de caminho completo é retornado na variável de sistema Document.   

#### Ver também 

[Table fragmentation](table-fragmentation.md)  
[VERIFY DATA FILE](verify-data-file.md)  