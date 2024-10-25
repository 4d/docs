---
id: read-only
title: READ ONLY
slug: /commands/read-only
displayed_sidebar: docs
---

<!--REF #_command_.READ ONLY.Syntax-->**READ ONLY** {( aTabela | * )}<!-- END REF-->
<!--REF #_command_.READ ONLY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTabela &#124; * | Tabela, Operador | &#8594;  | Tabela para qual estabelecer o estado apenas leitura, ou * para todas as tabelas, ou tabela padrão, se for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.READ ONLY.Summary-->READ ONLY muda o estado de tabela a modo apenas leitura para o processo no qual se chama ao comando.<!-- END REF--> Todos os registros carregados posteriormente estão bloqueados, e não se pode realizar nenhuma modificação. Se for passado o parâmetro opcional *\**, todas as tabelas são mudadas a modo apenas leitura.  

Utilize READ ONLY quando não necessite modificar os registros.  
  
**Nota**: este comando não é retroativo. Os privilégios de leitura/escrita para um registro são definidos pelos privilégios da tabela no momento em que se carrega o registro. Para carregar um registro em modo apenas leitura quando a tabela está em modo leitura/escrita, primeiro deve mudar o estado da tabela a modo apenas leitura.

#### Ver também 

[Read only state](read-only-state.md)  
[READ WRITE](read-write.md)  
*Record Locking*  