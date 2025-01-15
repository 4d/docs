---
id: create-record
title: CREATE RECORD
slug: /commands/create-record
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RECORD.Syntax-->**CREATE RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.CREATE RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual criar um novo registro, ou tabela Padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE RECORD.Summary-->CREATE RECORD cria um novo registro vazio para *tabela*, mas não mostra o novo registro.<!-- END REF--> Utilize o comando [ADD RECORD](add-record.md) para criar um novo registro e mostra-lo em um formulário de entrada.

CREATE RECORD é utilizado ao invés de [ADD RECORD](add-record.md) quando os valores dos registros são introduzidos por programação. O novo registro é convertido no registro atual para a seleção atual mas a seleção atual não se modifica.  
  
O registro existe em memória unicamente até que um comando [SAVE RECORD](save-record.md) é executado para a tabela. Se muda o registro atual (por exemplo, por uma pesquisa) antes de guardar o registro, o novo registro se perde.

**Nota**: este comando não exibe tabelas para estar en modo leitura/escrita. Pode ser usado mesmo quando a tabela estiver em modo de apenas leitura (ver *Record Locking*). 

#### Exemplo 

O seguinte exemplo arquiva os registros que tem mais de 30 dias. Esta operação se realiza para a criação de registros em uma tabela de arquivo. Uma vez terminada a operação, os registros arquivados são eliminados da tabela \[Contas\]:

```4d
  // Pesquisa de registros de mais de 30 dias
 QUERY([Contas];[Contas]Introduzido<(Current date 30))
 For($vlRegistro;1;Records in selection([Contas])) // Loop uma vez por registro
    CREATE RECORD([Arquivo]) // Criação de um novo registro de arquivo
    [Archive]Number:=[Contas]Número // Cópia dos campos no arquivo
    [Archive]Entered:=[Contas]Introduzido
    [Archive]Amount:=[Contas]Quantidade
    SAVE RECORD([Contas]) // Guardar o registro do arquivo
    NEXT RECORD([Contas]) // Mover o registro de conta seguinte
 End for
 DELETE SELECTION([Contas]) // Apagar os registros de conta
```

#### Ver também 

[ADD RECORD](add-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 68 |
| Thread-seguro | &check; |
| Modificar o registro atual ||


