---
id: load-record
title: LOAD RECORD
slug: /commands/load-record
displayed_sidebar: docs
---

<!--REF #_command_.LOAD RECORD.Syntax-->**LOAD RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.LOAD RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para aqual carregar registros, ou tabela Padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOAD RECORD.Summary-->LOAD RECORD carrega o registro atual de *tabela*.<!-- END REF--> Se não houver registro atual, LOAD RECORD não tem nenhum efeito.  
  
 Pode utilizar a função [Locked](locked.md "Locked") para determinar se pode modificar o registro:

* Se a tabela está em modo só leitura, a função [Locked](locked.md "Locked") devolve TRUE, e não é possível modificar o registro.
* Se a tabela está em modo leitura/escrita mas o registro foi bloqueado, o registro será só leitura, e não é possível modificar o registro.
* Se a tabela está em modo leitura/escrita e o registro não está bloqueado, é possível modificar o registro no processo atual. A função [Locked](locked.md "Locked") devolve TRUE para todos os outros usuários e processos.

**Nota**: se o comando LOAD RECORD é executado depois de um [READ ONLY](read-only.md "READ ONLY"), o registro é liberado automaticamente e é carregado sem precisar utilizar o comando [UNLOAD RECORD](unload-record.md "UNLOAD RECORD").  
  
 Geralmente, não é necessário utilizar o comando LOAD RECORD, porque os comandos como [QUERY](query.md "QUERY"), [NEXT RECORD](next-record.md "NEXT RECORD"), [PREVIOUS RECORD](previous-record.md "PREVIOUS RECORD"), etc., carregam automaticamente o registro atual.  
  
 Em ambientes multi-usuário e multi-processos, quando necessite modificar um registro existente, deve acessar a tabela (a qual pertence o registro) em modo leitura/escrita. Se um registro estiver bloqueado e não puder ser carregado, LOAD RECORD lhe permite tentar carregar o registro novamente mais tarde. Utilizando LOAD RECORD em um loop, pode esperar até que o registro esteja disponível em modo leitura/escrita.

**Conselho**: o comando LOAD RECORD pode ser utilizado para recarregar o registro atual no contexto de um formulário de entrada. Todos os dados modificados são substituídos pelos valores anteriores. Nesse caso, o comando LOAD RECORD realiza um cancelamento geral da entrada.

#### Ver também 

[Locked](locked.md)  
*Record Locking*  
[UNLOAD RECORD](unload-record.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 52 |
| Thread-seguro | &check; |


