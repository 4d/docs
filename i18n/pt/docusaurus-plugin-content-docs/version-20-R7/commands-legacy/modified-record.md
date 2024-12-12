---
id: modified-record
title: Modified record
slug: /commands/modified-record
displayed_sidebar: docs
---

<!--REF #_command_.Modified record.Syntax-->**Modified record** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Modified record.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a testar se registro atual foi modificada ou tabela padrão, se omitido |
| Resultado | Boolean | &#8592; | Registro foi modificado (True) ou Registro não foi modificado (False) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Modified record.Summary-->Modified record devolve True se o registro atual de *tabela* for modificado mas não guardou; do contrário devolve False.<!-- END REF--> Esta função permite determinar rapidamente se o registro necessita ser guardado. É especialmente de valor em formulários de input para checar se o registro atual foi salvo antes de continuar ao próximo registro. Esta função sempre devolve [TRUE](true.md "TRUE") para um novo registro.  

Note que essa função sempre retorna True nos seguintes contextos:

* o registro atual é um novo registro,
* depois da execução dos comandos [PUSH RECORD](push-record.md) e [POP RECORD](pop-record.md),
* logo que um valor tenha sido atribuido ao campo do registro, mesmo que o mesmo valor seja o mesmo que o anterior. Por exemplo, **Modified record** retorna True depois que o seguinte comando for executado:  
```4d  
 [Table_1]Field_1:=[Table_1]Field_1  
```

#### Exemplo 

O exemplo a seguir mostra uma utilização típica de Modified record: 

```4d
 If(Modified record([Clientes]))
    SAVE RECORD([Clientes])
 End if
```

#### Ver também 

[Modified](modified.md)  
[Old](old.md)  
[SAVE RECORD](save-record.md)  