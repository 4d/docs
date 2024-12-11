---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai mover o primeiro registro selecionado, ou a tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FIRST RECORD.Summary-->FIRST RECORD faz do primeiro registro da seleção atual de *tabela* o registro atual, e carrega o registro do disco.<!-- END REF--> Todos os comandos de pesquisa, seleção, e ordenação também estabelecem como primeiro registro o registro atual. Se a seleção atual estiver vazia ou se o registro atual já for o primeiro registro da seleção, FIRST RECORD não tem nenhum efeito.  
  
Este comando é utilizado com frequência depois do comando [USE SET](use-set.md) para iniciar um loop na seleção de registros a partir do primeiro registro. Entretanto, também pode ser chamado desde uma sub-rotina se não estiver seguro de se o registro atual é realmente o primeiro.

#### Exemplo 

O exemplo a seguir carrega o primeiro registro da tabela \[Clientes\]: 

```4d
 FIRST RECORD([Clientes])
```

#### Ver também 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 50 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Proibido no servidor ||


