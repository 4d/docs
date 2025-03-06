---
id: read-only-state
title: Read only state
slug: /commands/read-only-state
displayed_sidebar: docs
---

<!--REF #_command_.Read only state.Syntax-->**Read only state** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Read only state.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai testar o estado apenas-leitura, ou tabela padrão, se omitido |
| Resultado | Boolean | &#8592; | Acesso à tabela é apenas-leitura (TRUE) ou Acesso a tabela é leitura-escrita (FALSE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Read only state.Summary-->Esta função é utilizada para testar se *tabela* está em modo apenas leitura no processo no qual se chamou a função.<!-- END REF--> Read only state devolve TRUE se o estado de *tabela* é apenas leitura e FALSE se o estado de *tabela* é leitura/ escrita.

#### Exemplo 

O seguinte exemplo testa o estado da tabela \[Faturas\]. Se o estado da tabela \[Faturas\] é apenas leitura, se aplica o modo leitura/escrita e se carrega novamente o registro atual.  

```4d
 If(Read only state([Faturas]))
    READ WRITE([Faturas])
    LOAD RECORD([Faturas])
 End if
```

**Nota**: O registro atual é carregado novamente para permitir ao usuário modifica-lo. Um registro carregado anteriormente em modo apenas leitura permanecerá bloqueado até que se recarregue em modo leitura/escrita.

  

#### Ver também 

[READ ONLY](read-only.md)  
[READ WRITE](read-write.md)  
*Record Locking*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 362 |
| Thread-seguro | &check; |


