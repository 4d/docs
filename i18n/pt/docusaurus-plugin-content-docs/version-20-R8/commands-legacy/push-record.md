---
id: push-record
title: PUSH RECORD
slug: /commands/push-record
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual empilhar os registros, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PUSH RECORD.Summary-->PUSH RECORD empilha uma cópia do registro atual de *tabela* na pilha de registros da tabela.<!-- END REF--> PUSH RECORD pode ser executada antes de que seja guardado um registro.  
  
Se empilha um registro que foi desbloqueado, este registro permanece bloqueado para todos os outros processos e usuários até que o desempilhe e descarregue.  
  
**Nota de compatibilidade**: a partir da versão 11 de 4D, este comando não é compatível com subtabelas.  

#### Exemplo 

O seguinte exemplo empilha o registro de um cliente: 

```4d
 PUSH RECORD([Cliente]) // Por o registro do cliente na pilha
```

#### Ver também 

[POP RECORD](pop-record.md)  
*Usar a Pilha de Registros*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 176 |
| Thread-seguro | &check; |


