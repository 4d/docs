---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *aVerificar* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aVerificar | Object, Collection | &#8594;  | Objeto o colección a verificar |
| Resultado | Boolean | &#8592; | True si el objeto o la colección es compartible, False si es modificable |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Is shared.Summary-->El comando **OB Is shared** devuelve **True** si el objeto o colección *aVerificar* es compartido, y **False** en caso contrario (ver *Objetos y colecciones compartidos*).<!-- END REF-->

Este comando devuelve **True** si se pasa una selección de entidades compartible en *aVerificar* (ver ).
