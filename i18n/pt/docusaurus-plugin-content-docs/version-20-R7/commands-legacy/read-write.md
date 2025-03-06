---
id: read-write
title: READ WRITE
slug: /commands/read-write
displayed_sidebar: docs
---

<!--REF #_command_.READ WRITE.Syntax-->**READ WRITE** {( tabela | * )}<!-- END REF-->
<!--REF #_command_.READ WRITE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela &#124; * | Tabela, Operador | &#8594;  | Tabela para a qual vai estabelecer o estado apenas leitura, ou * para todas as tabelas, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.READ WRITE.Summary-->READ WRITE muda o estado de *tabela* a modo leitura/escrita para o processo no qual se chama ao comando.<!-- END REF--> Se passa o parâmetro opcional *\**, todas as tabelas passam a modo leitura/escrita.  

Depois de chamar a READ WRITE, quando se carrega um registro, o registro está desbloqueado se nenhum outro usuário bloqueou o registro. Este comando não muda o estado do registro carregado atualmente, só o dos registros carregados posteriormente.  
  
Por padrão, todas as tabelas estão em modo leitura/escrita.  
  
Utilize READ WRITE quando tenha que modificar um registro e guardar as mudanças. Também pode utilizar READ WRITE quando queira bloquear um registro para os outros usuários, mesmo quando não esteja realizando mudanças. Colocar uma tabela em modo leitura/escrita evita que outros usuários editem a tabela. Entretanto, os outros usuários podem criar novos registros.  
  
**Nota**: este comando não é retroativo. Os privilégios de leitura/escrita para um registro são definidos pelos privilégios da tabela no momento em que se carrega o registro. Para carregar um registro em modo leitura/escrita de uma tabela apenas leitura, primeiro deve mudar o estado da tabela a leitura/escrita.

#### Ver também 

[READ ONLY](read-only.md)  
[Read only state](read-only-state.md)  
*Record Locking*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 146 |
| Thread-seguro | &check; |


