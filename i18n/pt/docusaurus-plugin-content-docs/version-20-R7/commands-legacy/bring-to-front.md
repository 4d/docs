---
id: bring-to-front
title: BRING TO FRONT
slug: /commands/bring-to-front
displayed_sidebar: docs
---

<!--REF #_command_.BRING TO FRONT.Syntax-->**BRING TO FRONT** ( *processo* )<!-- END REF-->
<!--REF #_command_.BRING TO FRONT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo do processo a passar ao primeiro plano |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BRING TO FRONT.Summary-->BRING TO FRONT passa todas as janelas que pertencem a *processo* ao primeiro plano.<!-- END REF--> Se o processo já está no primeiro plano, o comando não faz nada. Se o processo estiver oculto, deve utilizar [SHOW PROCESS](show-process.md "SHOW PROCESS") para mostrar o processo, do contrário BRING TO FRONT não tem efeito.

Os processos Principal e Desenho podem ser passados ao primeiro plano utilizando este comando.

**Nota:** Quando o processo contém várias janelas e quer passar ao primeiro plano uma janela específica, é preferível utilizar por exemplo, o comando [SET WINDOW RECT](set-window-rect.md).

#### Exemplo 

O exemplo a seguir é um método que pode ser executado desde um menu. Ele verifica se o processo do primeiro plano é o processo *<>Clientes*. Se não, o método o passa ao primeiro plano:

```4d
 If(Frontmost process(◊Clientes)
    BRING TO FRONT(◊Clientes)
 End if
```

#### Ver também 

[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 326 |
| Thread-seguro | &cross; |


