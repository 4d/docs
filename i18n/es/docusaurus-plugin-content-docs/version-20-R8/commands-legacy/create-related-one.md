---
id: create-related-one
title: CREATE RELATED ONE
slug: /commands/create-related-one
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RELATED ONE.Syntax-->**CREATE RELATED ONE** ( *campo* )<!-- END REF-->
<!--REF #_command_.CREATE RELATED ONE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo Muchos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE RELATED ONE.Summary-->CREATE RELATED ONE tiene dos acciones.<!-- END REF--> Si no existe un registro relacionado a *campo* (es decir, si el valor actual de *campo*, no se encuentra en el campo correspondiente de ningún registro de la tabla relacionada), CREATE RELATED ONE crea un nuevo registro relacionado.   
  
Para guardar en este registro el valor del campo que ha provocado su creación, asígnelo al campo correspondiente. Utilice el comando [SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE") para guardar el nuevo registro. 

Si ya existe un registro relacionado, CREATE RELATED ONE actúa como [RELATE ONE](relate-one.md "RELATE ONE") y carga el registro relacionado en memoria.

#### Ver también 

[SAVE RELATED ONE](save-related-one.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 65 |
| Hilo seguro | &check; |


