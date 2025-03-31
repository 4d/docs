---
id: pop-record
title: POP RECORD
slug: /commands/pop-record
displayed_sidebar: docs
---

<!--REF #_command_.POP RECORD.Syntax-->**POP RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.POP RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual desempilhar o registro, a tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.POP RECORD.Summary-->POP RECORD carrega o primeiro registro da pilha de registros da tabela e o transforma no registro atual.<!-- END REF-->  

Se empilha um registro, depois cria uma nova seleção atual que não inclui o registro empilhado, e finalmente desempilha o registro, então o registro atual não é encontrado na seleção atual. Para que o registro empilhado esteja na seleção atual, utilize [ONE RECORD SELECT](one-record-select.md "ONE RECORD SELECT").  
  
Se utiliza um comando que mova o ponteiro do registro atual antes de guardar o registro, perderá a cópia empilhada em memória.  
  
#### Exemplo 

O exemplo a seguir recupera o registro de um cliente na pilha:

```4d
 POP RECORD([Clientes]) // Desempilhar o registro
```

#### Ver também 

[PUSH RECORD](push-record.md)  
*Usar a Pilha de Registros*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 177 |
| Thread-seguro | &check; |
| Modificar o registro atual ||


