---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *unCampo* )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo Muchos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAVE RELATED ONE.Summary-->SAVE RELATED ONE guarda el registro relacionado a *campo*.<!-- END REF-->Ejecute este comando para actualizar un registro creado con [CREATE RELATED ONE](create-related-one.md), o para guardar los cambios realizados a un registro cargado por [RELATE ONE](relate-one.md).

SAVE RELATED ONE no guardará un registro bloqueado. Cuando utilice este comando, primero debe asegurarse de que el registro no esté bloqueado. Si el registro está bloqueado, se ignora el comando, no se guarda el registro y no se devuelve ningún error.

#### Ver también 

[CREATE RELATED ONE](create-related-one.md)  
[Locked](locked.md)  
[RELATE ONE](relate-one.md)  
*Triggers*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 43 |
| Hilo seguro | &check; |


