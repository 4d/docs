---
id: open-datastore
title: Open datastore
slug: /commands/open-datastore
displayed_sidebar: docs
---

<!--REF #_command_.Open datastore.Syntax-->**Open datastore** ( *infoConexion* ; *localID* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Open datastore.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| infoConexion | Object | &srarr; | Propiedades de conexión utilizadas para llegar al datastore remoto |
| localID | Text | &srarr; | Id para asignar al datastore abierto en la aplicación local (obligatorio) |
| Resultado | Object | &larr; | Objeto datastore |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Open datastore.Summary-->**Documentación trasladada**

La documentación de este comando ha sido trasladada.<!-- END REF--> Visite *developer.4d.com* para ver la documentación actualizada.

El comando **Open datastore** conecta la aplicación a la base de datos 4D identificada por el parámetro *infoConexion* y devuelve un objeto datastore correspondiente asociado al alias local *localID*.

#### Ver también 

[ds](ds.md)  
*Entorno 4D*  