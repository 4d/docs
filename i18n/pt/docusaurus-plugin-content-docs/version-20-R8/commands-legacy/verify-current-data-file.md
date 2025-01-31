---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** {( *objetos* ; *opções* ; *metodo* {; *arrayTabelas* {; *arrayCampos*}} )}<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objetos | Integer | &#8594;  | Objeto a ser verificado |
| opções | Integer | &#8594;  | Opções de verificação |
| metodo | Text | &#8594;  | Nome do método 4D de retrochamada |
| arrayTabelas | Integer array | &#8594;  | Números de tabelas a serem verificadas |
| arrayCampos | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Número de índices a serem verificados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->O comando VERIFY CURRENT DATA FILE realiza uma verificação estrutural dos objetos encontrados no arquivo de dados atualmente aberto por 4D.<!-- END REF-->

Este comando tem o mesmo funcionamento que o comando [VERIFY DATA FILE](verify-data-file.md), exceto que ela só se aplica ao arquivo de dados atuais do banco de dados aberto. Por conseguinte, não requer parâmetros que especificam a estrutura e dados.  
Consulte o comando [VERIFY DATA FILE](verify-data-file.md) para obter uma descrição dos parâmetros.

Se você passar o comando VERIFY CURRENT DATA FILE sem parâmetros, a verificação é realizada com os valores padrão dos parâmetros:

\- *objetos* \= Verificar todos (= valor 16)  
\- *opções* \= 0 (é criado o arquivo de histórico)  
\- *método* \= ""  
\- *arrayTabelas* e *arrayCampos* são omitidos.

Quando este comando é executado, o cache de dados são liberados e todas as operações para acessar os dados são bloqueadas durante a verificação.

Se um arquivo de histórico foi gerado, o nome completo de caminho é retornado na variável de sistema Document.

#### Variáveis e conjuntos do sistema 

Se o método de callback não existir, a verificação não é efetuada, é gerado um erro e a variável sistema OK recebe o valor 0\. Se um arquivo de log histórico for erado, seu nome de caminho completo é retornado na variável de sistema Document.  

#### Ver também 

[VERIFY DATA FILE](verify-data-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1008 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document, error |


