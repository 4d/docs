---
id: show-process
title: SHOW PROCESS
slug: /commands/show-process
displayed_sidebar: docs
---

<!--REF #_command_.SHOW PROCESS.Syntax-->**SHOW PROCESS** ( *processo* )<!-- END REF-->
<!--REF #_command_.SHOW PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo a ser mostrado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SHOW PROCESS.Summary-->SHOW PROCESS mostra todas as janelas que pertencem a *processo*.<!-- END REF--> Este comando não traz as janelas de *processo* ao primeiro plano. Para fazer isto, utilize o comando [BRING TO FRONT](bring-to-front.md "BRING TO FRONT").  
Se o processo já estiver sendo visualizado, o comando não tem efeito.

#### Exemplo 

O exemplo a seguir mostra um processo chamado Clientes, que foi ocultado previamente. O número de processo são armazenados na variável interprocesso *<>Clientes*:

```4d
 SHOW PROCESS(◊Clientes)
```

#### Ver também 

[BRING TO FRONT](bring-to-front.md)  
[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 325 |
| Thread-seguro | &check; |
| Proibido no servidor ||


