---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual vai duplicar o registro atual, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DUPLICATE RECORD.Summary-->DUPLICATE RECORD cria um novo registro para tabela que é uma duplicação do registro atual.<!-- END REF--> O novo registro é convertido no registro atual. Se não houver registro atual, DUPLICATE RECORD não faz nada. Deve utilizar [SAVE RECORD](save-record.md "SAVE RECORD") para guardar o novo registro.

DUPLICATE RECORD pode ser executado durante a entrada de dados. Isso permite duplicar o registro mostrado em tela. Lembre que primeiro deve chamar [SAVE RECORD](save-record.md "SAVE RECORD") para guardar as mudanças realizadas ao registro original.  
  
**Nota de compatibilidade:** A partir da versão 11 de 4D, este comando não aceita subtabelas.

#### Ver também 

[SAVE RECORD](save-record.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 225 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Proibido no servidor ||


