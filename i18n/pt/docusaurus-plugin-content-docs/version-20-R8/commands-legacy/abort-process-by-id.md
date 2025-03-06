---
id: abort-process-by-id
title: ABORT PROCESS BY ID
slug: /commands/abort-process-by-id
displayed_sidebar: docs
---

<!--REF #_command_.ABORT PROCESS BY ID.Syntax-->**ABORT PROCESS BY ID** ( *IDunico* )<!-- END REF-->
<!--REF #_command_.ABORT PROCESS BY ID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| IDunico | Integer | &#8594;  | ID de processo única |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ABORT PROCESS BY ID.Summary-->O comando **ABORT PROCESS BY ID** detém um processo específico no servidor 4D.<!-- END REF-->

No parâmetro *IDunico*, passe o ID único do processo que se executa no servidor que quiser deter. Pode recuperar o ID do processo com os comandos [Process activity](../commands/process-activity.md) ou os comandos [Process info](../commands/process-info.md).

**Notas**:

* Este comando apenas podem ser executados em 4D Server. Se o método que chamar ao comando for executado localmente em um cliente remoto ou em um único usu\[ario 4D, **ABORT PROCESS BY ID** não faz nada.
* Este comando apenas pode ser usado com a capa de rede *ServerNet*. Ver *Nova capa de rede ServerNet (compatibilidade)*.
* Este comando apenas deve serusado para buscar erros ou propósitos de administração, não como um procedimento ordinário.

#### Exemplo 

Se quiser deter o processo selecionado da coleção de processos que são mostrados em um list box:

```4d
  //variable =curItemPosition
 
  // Recupera a lista de processos no servidor e a mostra na list box
 $activity:=Get process activity(Processes only).processes
 ...
  // O processo selecionado é detido no servidor
 ABORT PROCESS BY ID($activity[curItemPosition].ID)
```

#### Ver também 

[PAUSE PROCESS](pause-process.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1634 |
| Thread-seguro | &check; |


