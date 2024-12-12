---
id: locked
title: Locked
slug: /commands/locked
displayed_sidebar: docs
---

<!--REF #_command_.Locked.Syntax-->**Locked** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Locked.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a marcar para registros atuais bloqueados, ou tabela padrão, se omitido |
| Resultado | Boolean | &#8592; | Registro está bloqueado (TRUE), ou Registros está desbloqueado (FALSE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Locked.Summary-->Locked testa se o registro atual de *tabela* está bloqueado.<!-- END REF--> Utilize esta função para saber se um registro está bloqueado ou não; depois tome a ação mais conveniente, tal como dar ao usuário a opção de esperar que o registro seja liberado ou de anular a operação.  

Se Locked devolve TRUE, o registro não pode ser guardado porque está bloqueado por outro usuário ou processo, ou esta empilhado no processo atual. Neste caso, utilize [LOAD RECORD](load-record.md)  para recarregar o registro até que Locked devolva FALSE.  
  
Se Locked devolve FALSE, o registro está desbloqueado, o que significa que está bloqueado para os outros usuários. Só o usuário local ou o processo atual pode modificar e guardar o registro. Uma tabela deve estar em modo leitura/escrita se desejar modificar os registros que contenha.  
  
Se carrega um registro que tenha sido apagado, Locked devolve TRUE. Para evitar esperar por um registro que não existe, utilize o comando [LOCKED BY](locked-by.md). Se o registro tiver sido apagado, o comando [LOCKED BY](locked-by.md) devolve -1 no parâmetro processo.  
  
**Nota**: Locked devolve False quando não há um registro atual em *tabela*, em outras palabras, quando [Record number](record-number.md "Record number") devolve -1.  
  
Durante uma transação, [LOAD RECORD](load-record.md) e Locked se utilizam com frequência para provar a disponibilidade dos registros. Se um registro estiver bloqueado, é comum cancelar a transação.

#### Ver também 

[Locked records info](locked-records-info.md)  
[LOAD RECORD](load-record.md)  
[LOCKED BY](locked-by.md)  
*Record Locking*  