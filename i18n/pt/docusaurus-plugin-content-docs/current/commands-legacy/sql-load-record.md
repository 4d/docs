---
id: sql-load-record
title: SQL LOAD RECORD
slug: /commands/sql-load-record
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOAD RECORD.Syntax-->**SQL LOAD RECORD** {( *numReg* )}<!-- END REF-->
<!--REF #_command_.SQL LOAD RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numReg | Integer | &#8594;  | Número de registros a carregar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL LOAD RECORD.Summary-->O comando SQL LOAD RECORD recupera a 4D um ou mais registros da fonte de dados aberta na conexão atual.<!-- END REF-->  
  
O parâmetro opcional *numReg* é utilizado para definir o número de registros a recuperar:

* Se omitir este parâmetro, o comando recuperará o registro atual da fonte de dados. Este princípio corresponde à recuperação de dados em um loop onde um registro é recuperado por vez.
* Se passa um valor inteiro em *numReg*, o comando recupera um número de registros igual a *numReg*.
* Se passa a constante SQL All Records (valor -1), o comando recuperará todos os registros da tabela.
**Nota**: estes dois últimos parâmetros apenas tem sentido se os dados recuperados estão associados com arrays ou campos 4D.

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável Sistema OK retorna 1\. Do contrário, retorna 0.

#### Ver também 

[SQL CANCEL LOAD](sql-cancel-load.md)  
[SQL EXECUTE](sql-execute.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 822 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


