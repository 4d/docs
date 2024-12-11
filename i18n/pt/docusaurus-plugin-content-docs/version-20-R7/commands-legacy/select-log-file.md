---
id: select-log-file
title: SELECT LOG FILE
slug: /commands/select-log-file
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *historico* )<!-- END REF-->
<!--REF #_command_.SELECT LOG FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| historico | *, Text | &#8594;  | Nome do arquivo de histórico ou * para fechar o histórico atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SELECT LOG FILE.Summary-->O comando **SELECT LOG FILE** cria, ou fecha o arquivo de histórico de acordo com o valor que se passe em *historico*.<!-- END REF-->

Passe em *historico*, o nome ou a rota de acesso completa do arquivo de histórico a criar. Se você passa somente um nome, o arquivo será criado junto ao arquivo de estrutura do banco de dados.

Se você passa uma cadeia vazia em *historico*, **SELECT LOG FILE** apresenta uma caixa de diálogo padrão de registro de arquivo, permitindo ao usuário escolher o nome e a localização do arquivo de histórico a criar. Se o arquivo é criado corretamente, a variável OK toma o valor 1\. Pelo contrário, se o usuário clica no botão Cancelar ou se o arquivo de histórico não pode ser criado, OK toma o valor 0.

**Nota:** o novo arquivo de histórico não é gerado de imediato depois da execução do comando, mas sim depois do backup seguinte (o parâmetro é conservado no arquivo de dados e será levado em conta inclusive se o banco de dados é fechado). É possível chamar o comando [BACKUP](backup.md) para provocar a criação do arquivo de histórico.

Se você passa *"\*"* em *historico*, **SELECT LOG FILE** fecha o arquivo de histórico atual do banco de dados. A variável OK toma o valor 1 quando o arquivo de histórico está fechado.

Se você utiliza **SELECT LOG FILE** para criar um arquivo de histórico antes que o backup tenha terminado e o arquivo de dados já contenha registros, 4D gera o erro *\-4447,* o qual pode ser interceptado com um método [ON ERR CALL](on-err-call.md).

#### Variáveis e conjuntos do sistema 

OK recebe o valor 1 se o arquivo de histórico é criado ou fechado corretamente.

#### Gestão de erros 

É gerado o erro -4447 se não for possível realizar a operação porque o banco de dados necessita uma cópia de segurança. É possível interceptar o erro com um método [ON ERR CALL](on-err-call.md "ON ERR CALL"). 

#### Ver também 

[ON ERR CALL](on-err-call.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 345 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


