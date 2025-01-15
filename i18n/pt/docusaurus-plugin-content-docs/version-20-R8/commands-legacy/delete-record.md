---
id: delete-record
title: DELETE RECORD
slug: /commands/delete-record
displayed_sidebar: docs
---

<!--REF #_command_.DELETE RECORD.Syntax-->**DELETE RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.DELETE RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual o registro atual será apagado, ou tabela Padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE RECORD.Summary-->DELETE RECORD apaga o registro atual de *tabela* no processo.<!-- END REF--> Se não houver registro atual para *tabela* no processo, DELETE RECORD não tem efeito. Em um formulário, pode criar um botão Apagar registro em lugar de utilizar este comando.

**Nota**:

* Se o registro atual é descarregado da memória antes de chamar DELETE RECORD (por exemplo em resposta a um [UNLOAD RECORD](unload-record.md)), a seleção atual de *tabela* está vazia depois da eliminação.
* O comando DELETE RECORD não faz nada quando a tabela está em modo [READ ONLY](read-only.md), independentemente de se o registro apagar está bloqueado ou não.

A eliminação de registros é uma operação permanente e não pode ser desfeita (exceto quando é executado durante uma transação, ver *Usar Transações*).  
  
Se um registro for apagado, o número do registro será reutilizado quando novos registros forem criados. Não utilize o número do registro como identificador do registro se seu banco permite a eliminação de registros.

#### Exemplo 

O exemplo apaga um registro de um empregado. O código pergunta ao usuário o número do empregado a apagar, procura o registro correspondente e o a apaga:

```4d
 vBuscar:=Request("Número do empregado a apagar:") // Obtém um número de identificação do empregado
 If(OK=1)
    QUERY([Empregado];[Empregado]ID =vBuscar) // Buscar o empregado
    DELETE RECORD([Empregado]) // Apagar o empregado
 End if
```

#### Ver também 

[Locked](locked.md)  
*Triggers*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 58 |
| Thread-seguro | &check; |
| Modificar o registro atual ||


